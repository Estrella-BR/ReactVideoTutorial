interface Person {
    name: string;
    lastName: string;
    age: number;
    address: Address;
} 

interface Address {
    street: string;
    postalCode?: string;    
}

const ironman: Person = {
    name: 'TOny',
    lastName: 'Stark',
    age: 45,
    address: {
        street: 'Malibu Point',
    }
};

ironman.name = 'Tony';

const spiderman = structuredClone(ironman);
spiderman.name = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 18;
spiderman.address.street = 'New York';

console.log(ironman, spiderman);