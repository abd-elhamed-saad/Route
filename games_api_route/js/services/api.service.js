/**
 * API Service Layer
 * Handles all HTTP requests to the Free-to-Play Games Database API
 * Centralizes API configuration and error handling
 */

class ApiService {
    constructor() {
        this.baseUrl = 'https://free-to-play-games-database.p.rapidapi.com/api';
        this.apiKey = 'ffe7d669d6mshf69fb7f108d90f4p159e54jsnc2f7ca8e62af';
        this.apiHost = 'free-to-play-games-database.p.rapidapi.com';
    }

    /**
     * Private method to get request headers
     * @returns {Object} Headers object with API authentication
     */
    _getHeaders() {
        return {
            'X-RapidAPI-Key': this.apiKey,
            'X-RapidAPI-Host': this.apiHost
        };
    }

    /**
     * Private method to handle API errors
     * @param {Error} error - The error object
     * @param {string} context - Context where error occurred
     */
    _handleError(error, context) {
        console.error(`Error in ${context}:`, error);
        throw new Error(`Failed to ${context}. Please try again later.`);
    }

    /**
     * Fetch games by category
     * @param {string} category - Game category (e.g., 'MMORPG', 'SHOOTER')
     * @returns {Promise<Array>} Array of game objects
     */
    async fetchGamesByCategory(category) {
        const url = `${this.baseUrl}/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: this._getHeaders()
        };

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            this._handleError(error, 'fetch games by category');
        }
    }

    /**
     * Fetch game details by ID
     * @param {number|string} id - Game ID
     * @returns {Promise<Object>} Game details object
     */
    async fetchGameById(id) {
        const url = `${this.baseUrl}/game?id=${id}`;
        const options = {
            method: 'GET',
            headers: this._getHeaders()
        };

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            this._handleError(error, 'fetch game details');
        }
    }
}

// Export singleton instance
export const apiService = new ApiService();
