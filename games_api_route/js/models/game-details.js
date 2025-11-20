/**
 * GameDetails Model
 * Represents detailed information about a specific game
 * Used for displaying full game details view
 */

export class GameDetails {
    /**
     * Create a GameDetails instance
     * @param {number} id - Unique game identifier
     * @param {string} title - Game title
     * @param {string} thumbnail - Game thumbnail image URL
     * @param {string} status - Game status (Alpha, Beta, Live, etc.)
     * @param {string} description - Full game description
     * @param {string} game_url - URL to play the game
     * @param {string} genre - Game genre/category
     * @param {string} platform - Supported platform
     * @param {Array} screenshots - Array of screenshot objects
     */
    constructor(id, title, thumbnail, status, description, game_url, genre, platform, screenshots) {
        this.id = id;
        this.title = title;
        this.thumbnail = thumbnail;
        this.status = status;
        this.description = description;
        this.game_url = game_url;
        this.genre = genre;
        this.platform = platform;
        this.screenshots = screenshots || [];
    }

    /**
     * Open game in new tab
     */
    openGame() {
        if (this.game_url) {
            window.open(this.game_url, '_blank');
        }
    }

    /**
     * Get screenshot URLs
     * @returns {Array<string>} Array of screenshot image URLs
     */
    getScreenshotUrls() {
        return this.screenshots.map(screenshot => screenshot.image);
    }

    /**
     * Check if game has screenshots
     * @returns {boolean} True if game has screenshots
     */
    hasScreenshots() {
        return this.screenshots && this.screenshots.length > 0;
    }

    /**
     * Check if game details are valid
     * @returns {boolean} True if all required fields are present
     */
    isValid() {
        return !!(this.id && this.title && this.description && this.game_url);
    }
}
