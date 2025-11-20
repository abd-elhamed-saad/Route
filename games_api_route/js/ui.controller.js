/**
 * UI Controller
 * Handles all DOM manipulation and rendering
 * Responsible for displaying data to the user
 */

import { gameService } from './services/game.service.js';

class UIController {
    constructor() {
        this.gamesSection = document.querySelector('#games-body');
        this.gameDetailsSection = document.querySelector('#game-details-body');
        this.awlContainer = document.querySelector('#awl-slider');
    }

    /**
     * Render games list to the DOM
     */
    renderGames() {
        const games = gameService.getGamesList();

        if (!games || games.length === 0) {
            this.gamesSection.innerHTML = '<div class="col-12"><p class="text-center text-white">No games found</p></div>';
            return;
        }

        const gamesHTML = games.map(game => this._createGameCard(game)).join('');
        this.gamesSection.innerHTML = gamesHTML;
    }

    /**
     * Create HTML for a single game card
     * @param {Game} game - Game instance
     * @returns {string} HTML string for game card
     * @private
     */
    _createGameCard(game) {
        const truncatedDesc = game.getTruncatedDescription(100);

        return `
            <div class="col-md-6 col-lg-3 mt-4">
                <div id="card-${game.id}" data-id="${game.id}" class="card h-100 text-bg-dark pointer">
                    <div class="card-body">
                        <figure>
                            <img src="${game.thumbnail}" class="card-img-top h-100 object-fit-cover rounded-top-2" alt="${game.title}">
                        </figure>
                        <figcaption>
                            <div class="d-flex justify-content-between">
                                <h3 class="card-title fs-14px">${game.title}</h3>
                                <span class="badge text-bg-primary p-2">Free</span>
                            </div>
                            <p class="card-text fs-14px opacity-50 text-center">
                                ${truncatedDesc}
                            </p>
                        </figcaption>
                    </div>
                    <footer class="d-flex justify-content-between border-top py-2 px-3">
                        <span class="badge bg-sub fs-11px p-1">${game.genre}</span>
                        <span class="badge bg-sub fs-11px p-1">${game.platform}</span>
                    </footer>
                </div>
            </div>
        `;
    }

    /**
     * Render game details to the DOM
     */
    renderGameDetails() {
        const game = gameService.getCurrentGame();

        if (!game) {
            this.gameDetailsSection.innerHTML = '<div class="col-12"><p class="text-center text-white">Game not found</p></div>';
            return;
        }

        this._renderScreenshots(game);
        this._renderGameInfo(game);
    }

    /**
     * Render game screenshots carousel
     * @param {GameDetails} game - GameDetails instance
     * @private
     */
    _renderScreenshots(game) {
        if (!game.hasScreenshots()) {
            this.awlContainer.innerHTML = '<p class="text-center text-white">No screenshots available</p>';
            return;
        }

        const screenshotsHTML = game.screenshots
            .map(screenshot => `<div><img class="w-100 img-fluid object-fit-cover" src="${screenshot.image}" alt="${game.title} screenshot"></div>`)
            .join('');

        this.awlContainer.innerHTML = `<div class="owl-carousel">${screenshotsHTML}</div>`;
        this._initializeCarousel();
    }

    /**
     * Render game information
     * @param {GameDetails} game - GameDetails instance
     * @private
     */
    _renderGameInfo(game) {
        const gameDetailsHTML = `
            <div class="col-md-4 mt-4">
                <img class="w-100 img-fluid object-fit-cover" src="${game.thumbnail}" alt="${game.title}">
            </div>
            <div class="col-md-8 mt-4">
                <h3>Title: <span>${game.title}</span></h3>
                <p>Category: <span class="badge text-bg-info">${game.genre}</span></p>
                <p>Platform: <span class="badge text-bg-info">${game.platform}</span></p>
                <p>Status: <span class="badge text-bg-info">${game.status}</span></p>
                <p>${game.description}</p>
                <a href="${game.game_url}" target="_blank">
                    <input type="button" class="btn btn-outline-warning text-white" value="Show Game">
                </a>
            </div>
        `;

        this.gameDetailsSection.innerHTML = gameDetailsHTML;
    }

    /**
     * Initialize Owl Carousel for screenshots
     * @private
     */
    _initializeCarousel() {
        $(document).ready(function() {
            var owl = $('.owl-carousel');
            owl.owlCarousel({
                items: 4,
                loop: true,
                margin: 10,
                responsive: {
                    0: { items: 1 },
                    960: { items: 2 }
                }
            });

            // Add mouse wheel support
            owl.on('mousewheel', '.owl-stage', function(e) {
                if (e.deltaY > 0) {
                    owl.trigger('next.owl');
                } else {
                    owl.trigger('prev.owl');
                }
                e.preventDefault();
            });
        });
    }

    /**
     * Show error message to user
     * @param {string} message - Error message to display
     */
    showError(message) {
        const errorHTML = `
            <div class="col-12">
                <div class="alert alert-danger text-center" role="alert">
                    ${message}
                </div>
            </div>
        `;
        this.gamesSection.innerHTML = errorHTML;
    }
}

// Export singleton instance
export const uiController = new UIController();
