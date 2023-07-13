const { getCategoryPath } = require('../src/getCategoryPath');
const { categories } = require('../data');


describe('getCategoryPath', () => {

    test('gets path for nested category', () => {
        expect(getCategoryPath(categories, 'category4')).toBe('/category1/category3/category4');
    });

    test('gets path for top level category', () => {
        expect(getCategoryPath(categories, 'category2')).toBe('/category1/category2');
    });

    test('gets path for single category', () => {
        expect(getCategoryPath(categories, 'category5')).toBe('/category5');
    });

    test('returns null for non-exist category', () => {
        expect(getCategoryPath(categories, 'fake')).toBeNull();
    });

    test('handles empty categories', () => {
        expect(getCategoryPath([], 'fake')).toBeNull();
    });

});

describe('getCategoryPath with missing/invalid parameters', () => {
    test('returns null for missing categories', () => {
        expect(getCategoryPath()).toBeNull();
    });

    test('returns null for missing category name', () => {
        expect(getCategoryPath(categories)).toBeNull();
    });

    test('returns null for invalid categories', () => {
        expect(getCategoryPath('invalid', 'test')).toBeNull();
    });
})