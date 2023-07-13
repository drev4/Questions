/**
 * Finds the path to a category in a nested categories array.
 * 
 * @param {Object[]} categories - Array of category objects
 * @param {string} categoryName - Name of category to find
 * @returns {string|null} Path string if category found, else null
 */
const getCategoryPath = (categories, categoryName) => {
    //Handle category invalid parameter
    if (!categories || !Array.isArray(categories)) return null;
    //Handle categoryName invalid parameter
    if (!categoryName) return null;

    // Initialize path array
    let path = categories.map(category => ({
        ...category,
        path: '/' + category.name
    }));

    // Iterate through categories
    while (path.length > 0) {
        // Get next category 
        let category = path.shift();

        // Check category name matches
        if (category.name === categoryName) {
            return category.path;
        }

        // Add subcategories
        for (let subcategory of category.subcategories) {
            path.push({
                ...subcategory,
                path: category.path + '/' + subcategory.name
            });
        }
    }

    return path && path.length ? path : null;
};

module.exports = { getCategoryPath };