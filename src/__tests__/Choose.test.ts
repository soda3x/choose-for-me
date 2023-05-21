import { choose } from '..';

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.1);
})

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
})

test('Choose with newline delimiter', () => {
    expect(choose("A\nB\nC", '\n')).toBe('A');
});

test('Choose with semicolon delimiter', () => {
    expect(choose("A;B;C", ';')).toBe('A');
});

test('Choose with dash delimiter', () => {
    expect(choose("A-B-C", '-')).toBe('A');
});

test('Choose with leading delimiter', () => {
    expect(choose("\nA\nB\nC", '\n')).toBe('');
});

test('Choose with empty string', () => {
    expect(choose("", '\n')).toBe('');
});