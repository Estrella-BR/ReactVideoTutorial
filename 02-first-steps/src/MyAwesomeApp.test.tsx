import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react'
import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp', () => {
    test('should render fisrtName and lastName', () => {
        const { container } = render(<MyAwesomeApp />)


        const h1 = container.querySelector('h1'); //Obtiene el primer h1 que encuentre
        const h3 = container.querySelector('h3');

        expect(h1?.innerHTML).toContain('Estrella');//Usamos contain y no be por si tiene espacios
        expect(h3?.innerHTML).toContain('Blanco');

    })

    test('should render fisrtName and lastName - using screen', () => {
        render(<MyAwesomeApp />)
        //screen.debug();

        /*  const h1 = screen.getByRole('heading', {
             level: 1,
         }) */

        const h1 = screen.getByTestId('first-name-title')

        expect(h1.innerHTML).toContain('Estrella');


    })

    test('shoul match snapshot', () => {
        const { container } = render(<MyAwesomeApp />)

        expect(container).toMatchSnapshot();//Solo usar snapshot si el componente no cambia de contenido
    })

    test('shoul match snapshot', () => {
        render(<MyAwesomeApp />)

        expect(screen.getByTestId('div-app')).toMatchSnapshot();
    })
})