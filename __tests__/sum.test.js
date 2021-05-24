// sum.test.js

import { sum } from '../scripts/sum.js';
import { pushToHistory } from '../scripts/router.js';

test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});

describe('pushToHistory', () => {
    test('increments history stack length', () => {
        const preLength = history.length;
        expect(pushToHistory('home').length).toBe(preLength+1);
    });

    test('pushes correct state for homepage', () => {
        expect(pushToHistory('home').state).toEqual({});
    });

    test('pushes correct state for settings page', () => {
        expect(pushToHistory('settings').state).toEqual({ page: 'settings' });
    });

    test('pushes correct state for entry page', () => {
        expect(pushToHistory('entry', 1).state).toEqual({ page: 'entry1' });
    });
});