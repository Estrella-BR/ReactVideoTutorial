const person = {
  name: 'Tony',
  age: 45,
  key: 'Ironman',
}

const { key, age, name } = person;

console.log(name);
console.log(age);
console.log(key); 

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: number;
}

const useContext = ({ name, age, key, rank }: Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age
        },
        rank: rank
    };

}

const context = useContext(person);
console.log(context);
