/**
 * Game Model
 * Represents a game object with basic information
 * Used for displaying games in the grid/list view
 */

export class Game {
    /**
     * Create a Game instance
     * @param {number} id - Unique game identifier
     * @param {string} title - Game title
     * @param {string} thumbnail - Game thumbnail image URL
     * @param {string} short_description - Brief game description
     * @param {string} genre - Game genre/category
     * @param {string} platform - Supported platform (PC, Browser, etc.)
     */
    constructor(id, title, thumbnail, short_description, genre, platform) {
        this.id = id;
        this.title = title;
        this.thumbnail = thumbnail;
        this.short_description = short_description;
        this.genre = genre;
        this.platform = platform;
    }

    /**
     * Get truncated description
     * @param {number} maxLength - Maximum length of description
     * @returns {string} Truncated description with ellipsis if needed
     */
    getTruncatedDescription(maxLength = 100) {
        if (this.short_description.length <= maxLength) {
            return this.short_description;
        }
        return this.short_description.slice(0, maxLength) + '...';
    }

    /**
     * Check if game is valid
     * @returns {boolean} True if all required fields are present
     */
    isValid() {
        return !!(this.id && this.title && this.thumbnail && this.genre && this.platform);
    }
}
