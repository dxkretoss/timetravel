import './global/jquery-migrate';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import privacyCookieNotification from './global/cookieNotification';
import maintenanceMode from './global/maintenanceMode';
import carousel from './common/carousel';
import loadingProgressBar from './global/loading-progress-bar';
import svgInjector from './global/svg-injector';
import objectFitImages from './global/object-fit-polyfill';
import psdctheme from './psdc-custom/psdctheme';
import compareProducts from './global/compare-products';
import newsletter from './psdc-custom/newsletter';

export default class Global extends PageManager {
    onReady() {
        cartPreview(this.context.secureBaseUrl, this.context.cartId);
        quickSearch();
        currencySelector(this.context.cartId);
        foundation($(document));
        quickView(this.context);
        carousel();
        menu();
        mobileMenuToggle();
        privacyCookieNotification();
        maintenanceMode(this.context.maintenanceMode);
        loadingProgressBar();
        svgInjector();
        objectFitImages();
        psdctheme();
        compareProducts(this.context);
        newsletter();

        // Fetch live color swatches dynamically via BigCommerce Storefront GraphQL API
        (function(context) {
            const cardsWithId = document.querySelectorAll('.tt-shop-swatches[data-product-id]');
            const productIds = Array.from(cardsWithId)
                .map(card => parseInt(card.getAttribute('data-product-id'), 10))
                .filter(id => !isNaN(id));

            if (productIds.length === 0) return;

            const token = context.storefrontAPIToken;
            if (!token) {
                console.warn("Storefront API token is not available for dynamic swatches.");
                return;
            }

            const query = `
                query getProductSwatches($ids: [Int!]) {
                    site {
                        products(entityIds: $ids) {
                            edges {
                                node {
                                    entityId
                                    productOptions(first: 5) {
                                        edges {
                                            node {
                                                displayName
                                                ... on MultipleChoiceOption {
                                                    values {
                                                        edges {
                                                            node {
                                                                label
                                                                isSelected
                                                                ... on SwatchOptionValue {
                                                                    hexColors
                                                                    imageUrl(width: 24)
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `;

            fetch('/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({
                    query: query,
                    variables: { ids: productIds }
                })
            })
            .then(res => res.json())
            .then(data => {
                const products = data?.data?.site?.products?.edges || [];
                products.forEach(edge => {
                    const productNode = edge.node;
                    const productId = productNode.entityId;
                    const colorOption = productNode.productOptions.edges.find(optEdge => {
                        const name = optEdge.node.displayName.toLowerCase();
                        return name === 'color' || name === 'colour';
                    });

                    if (colorOption) {
                        const swatchValues = colorOption.node.values.edges.map(valEdge => valEdge.node);
                        const containers = document.querySelectorAll(`.tt-shop-swatches[data-product-id="${productId}"]`);
                        containers.forEach(swatchContainer => {
                            if (swatchContainer && swatchValues.length > 0) {
                                swatchContainer.innerHTML = ''; // Clear fallback or empty state
                                swatchValues.forEach(val => {
                                    const swatchLink = document.createElement('a');
                                    swatchLink.className = 'tt-shop-swatch';
                                    swatchLink.title = val.label;
                                    
                                    // Try to find the closest card link to inherit target href, otherwise fallback to standard product link structure
                                    const closestCard = swatchContainer.closest('.tt-shop-card') || swatchContainer.closest('.card');
                                    let href = '/';
                                    if (closestCard) {
                                        const titleLink = closestCard.querySelector('.tt-shop-card-title a') || closestCard.querySelector('.card-title a');
                                        if (titleLink) {
                                            href = titleLink.getAttribute('href');
                                        }
                                    }
                                    swatchLink.href = href;
                                    
                                    if (val.imageUrl) {
                                        swatchLink.style.backgroundImage = `url('${val.imageUrl}')`;
                                        swatchLink.style.backgroundSize = 'cover';
                                    } else if (val.hexColors && val.hexColors.length > 0) {
                                        swatchLink.style.backgroundColor = val.hexColors[0];
                                    }
                                    swatchLink.style.border = '1px solid rgba(0,0,0,0.15)';
                                    swatchContainer.appendChild(swatchLink);
                                });
                            }
                        });
                    }
                });
            })
            .catch(err => console.error("Error loading dynamic product swatches:", err));
        })(this.context);

    }
}
