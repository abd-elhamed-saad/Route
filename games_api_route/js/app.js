/**
 * Main Application Controller
 * Handles application initialization, routing, and event management
 * Coordinates between services and UI
 */

import { gameService } from './services/game.service.js';
import { uiController } from './ui.controller.js';

class App {
    constructor() {
        // DOM Elements
        this.homeSection = document.querySelector('#home');
        this.detailsSection = document.querySelector('#details');
        this.loadingSection = document.querySelector('#loading');
        this.categoryLinks = document.querySelectorAll('#home .nav-link');
        this.closeBtn = document.querySelector('#details .btn-close');

        // State
        this.currentCategory = 'MMORPG';
    }

    /**
     * Initialize the application
     */
    async init() {
        console.log('🎮 Games API Application Starting...');
        this._attachEventListeners();
        await this.loadGames(this.currentCategory);
        console.log('✅ Application Initialized Successfully');
    }

    /**
     * Attach all event listeners
     * @private
     */
    _attachEventListeners() {
        // Category navigation
        this.categoryLinks.forEach(link => {
            link.addEventListener('click', async (e) => {
                e.preventDefault();
                this._setActiveLink(link);
                const category = link.getAttribute('data-value');
                await this.loadGames(category);
            });
        });

        // Close details button
        this.closeBtn.addEventListener('click', () => {
            this._showSection(this.homeSection);
            this._hideSection(this.detailsSection);
        });
    }

    /**
     * Load games by category
     * @param {string} category - Game category
     */
    async loadGames(category) {
        try {
            this._showLoading();

            await gameService.loadGamesByCategory(category);
            uiController.renderGames();

            this._hideLoading();
            this._showSection(this.homeSection);
            this._attachGameCardListeners();

            this.currentCategory = category;
        } catch (error) {
            this._hideLoading();
            uiController.showError('Failed to load games. Please try again.');
            console.error('Error loading games:', error);
        }
    }

    /**
     * Load game details by ID
     * @param {number|string} gameId - Game ID
     */
    async loadGameDetails(gameId) {
        try {
            this._showLoading();

            await gameService.loadGameDetails(gameId);
            uiController.renderGameDetails();

            this._hideLoading();
            this._hideSection(this.homeSection);
            this._showSection(this.detailsSection);
        } catch (error) {
            this._hideLoading();
            alert('Failed to load game details. Please try again.');
            console.error('Error loading game details:', error);
        }
    }

    /**
     * Attach click listeners to game cards
     * @private
     */
    _attachGameCardListeners() {
        const cards = document.querySelectorAll('#home .card');
        cards.forEach(card => {
            card.addEventListener('click', async () => {
                const gameId = card.getAttribute('data-id');
                await this.loadGameDetails(gameId);
            });
        });
    }

    /**
     * Show loading spinner
     * @private
     */
    _showLoading() {
        this.loadingSection.classList.replace('d-none', 'd-block');
    }

    /**
     * Hide loading spinner
     * @private
     */
    _hideLoading() {
        this.loadingSection.classList.replace('d-block', 'd-none');
    }

    /**
     * Show a section
     * @param {HTMLElement} section - Section to show
     * @private
     */
    _showSection(section) {
        section.classList.replace('d-none', 'd-block');
    }

    /**
     * Hide a section
     * @param {HTMLElement} section - Section to hide
     * @private
     */
    _hideSection(section) {
        section.classList.replace('d-block', 'd-none');
    }

    /**
     * Set active navigation link
     * @param {HTMLElement} activeLink - Link to set as active
     * @private
     */
    _setActiveLink(activeLink) {
        this.categoryLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});
