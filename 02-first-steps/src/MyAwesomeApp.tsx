import type { CSSProperties } from 'react';

const firstName = 'Estrella';
const lastName = 'Blanco';

const favoriteGames = ['The Legend of Zelda', 'Super Mario Bros', 'Minecraft'];
const isActive = true;

const address = {
    street: '123 Main St',
    city: 'Anytown',
    country: 'USA'
}

const myStyle: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,

}
//Es mejor tener las componentes fuera para que no se estén ejecutando todo el rato

export const MyAwesomeApp = () => {



    return (
        <>
            <h1 data-testid="first-name-title">{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGames.join(', ')}</p>
            <h1>{isActive ? 'Active' : 'Inactive'}</h1>
            <p>{2 + 2}</p>

            <p
                style={myStyle}
            > {JSON.stringify(address)}</p>
        </>
    )
}



/* export function MyAwesomeApp() {
    return (
        <>
            <h1>Estrella</h1>
            <h3>Blanco</h3> 
        </>
    )
} */