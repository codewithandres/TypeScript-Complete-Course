// type variableName (annotations/types) = {property:value}

// -------------------------
// Definir un objeto persona
const person: { firstName: string; lastName: string; age: number } = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// Propiedades de acceso y registro
console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);
// -------------------------

// -------------------------
// Uso de objetos como valor de retorno de una función
const printUser = (): { name: string; age: number; location: string } => {
  return {
    name: "Alex",
    age: 19,
    location: "USA",
  };
}

const res = printUser();
console.log(res);

const printUserName = (person: { firstName: string; lastName: string }) => {
  console.log(`${person.firstName} ${person.lastName}`);
}

printUserName({ firstName: "HuXn", lastName: "WebDev" });
// -------------------------
