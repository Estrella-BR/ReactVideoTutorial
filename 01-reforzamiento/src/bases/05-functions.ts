function greet(name: string): string {
    return `Hello, ${name}!`;
}


const greet2 = (name: string): string => {
    return `Hello, ${name}!`;
};

const message = greet("World");
const message2 = greet2("World");

console.log(message); // Output: Hello, World!
console.log(message2); // Output: Hello, World!


function getUser(){
    return{
        uid: 'ABC123',
        username: 'eblancor'
    };
}

const getUser2 = () : { uid: string; username: string } => {
    return{
        uid: 'ABC123',
        username: 'eblancor'
    };
}

const user = getUser();
const user2 = getUser2();
console.log(user, user2); // Output: { uid: 'ABC123', username: 'eblancor' } { uid: 'ABC123', username: 'eblancor' }