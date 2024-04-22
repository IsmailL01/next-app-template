import { classNames } from './classNames'
describe('className', () => {
    test('with only first params', () => {
        expect(classNames('someClass')).toBe('someClass')
    })

    test('with additional class', () => {
        const expected = 'someClass someClass class'
        expect(classNames('someClass', {}, ['someClass', 'class'])).toBe(
            expected
        )
    })
    test('with mods', () => {
        const expected = 'someClass someClass class hovered scrollable'
        expect(
            classNames('someClass', { hovered: true, scrollable: true }, [
                'someClass',
                'class',
            ])
        ).toBe(expected)
    })

    test('with mods false', () => {
        const expected = 'someClass someClass class hovered'
        expect(
            classNames('someClass', { hovered: true, scrollable: false }, [
                'someClass',
                'class',
            ])
        ).toBe(expected)
    })
    test('with mods undefined', () => {
        const expected = 'someClass someClass class hovered'
        expect(
            classNames('someClass', { hovered: true, scrollable: undefined }, [
                'someClass',
                'class',
            ])
        ).toBe(expected)
    })
})
