/**
 * Game Service
 * Handles business logic and data transformation
 * Manages game state and coordinates between API and UI
 */

import { Game } from '../models/game.js';
import { GameDetails } from '../models/game-details.js';
import { apiService } from './api.service.js';

class GameService {
    constructor() {
        this.gamesList = [];
        this.currentGame = null;
    }

    /**
     * Load games by category and transform to Game instances
     * @param {string} category - Game category
     * @returns {Promise<Array<Game>>} Array of Game instances
     */
    async loadGamesByCategory(category) {
        try {
            const gamesData = await apiService.fetchGamesByCategory(category);

            // Transform raw API data to Game instances
            this.gamesList = gamesData.map(game =>
                new Game(
                    game.id,
                    game.title,
                    game.thumbnail,
                    game.short_description,
                    game.genre,
                    game.platform
                )
            );

            return this.gamesList;
        } catch (error) {
            console.error('Error loading games:', error);
            this.gamesList = [];
            throw error;
        }
    }

    /**
     * Load game details by ID and transform to GameDetails instance
     * @param {number|string} id - Game ID
     * @returns {Promise<GameDetails>} GameDetails instance
     */
    async loadGameDetails(id) {
        try {
            const gameData = await apiService.fetchGameById(id);

            // Transform raw API data to GameDetails instance
            this.currentGame = new GameDetails(
                gameData.id,
                gameData.title,
                gameData.thumbnail,
                gameData.status,
                gameData.description,
                gameData.game_url,
                gameData.genre,
                gameData.platform,
                gameData.screenshots
            );

            return this.currentGame;
        } catch (error) {
            console.error('Error loading game details:', error);
            this.currentGame = null;
            throw error;
        }
    }

    /**
     * Get the list of loaded games
     * @returns {Array<Game>} Array of Game instances
     */
    getGamesList() {
        return this.gamesList;
    }

    /**
     * Get the currently selected game
     * @returns {GameDetails|null} GameDetails instance or null
     */
    getCurrentGame() {
        return this.currentGame;
    }

    /**
     * Clear games list
     */
    clearGamesList() {
        this.gamesList = [];
    }

    /**
     * Clear current game
     */
    clearCurrentGame() {
        this.currentGame = null;
    }
}

// Export singleton instance
export const gameService = new GameService();
