# Interface

En TypeScript, una interfaz es una forma de definir un contrato para una forma específica de un objeto. Define las propiedades y los métodos que debe tener un objeto para que se lo considere compatible con esa interfaz.

Para crear una interfaz, utilice la palabra clave interface seguida del nombre de la interfaz y las propiedades y métodos que debe contener, de la siguiente manera:
```ts
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void;
}
```

En este ejemplo, estamos definiendo una interfaz llamada Person que requiere que cualquier objeto que la implemente tenga propiedades firstName, lastName y age que sean de tipo string, string y number, respectivamente. También requiere que un objeto que implemente la interfaz Person tenga un método llamado sayHello que no tome argumentos y no devuelva nada (void).

Luego puedes usar esta interfaz para verificar si un objeto coincide con su forma, de la siguiente manera:

```ts
const greet = (person: Person) => {
  console.log(`Hello, ${person.firstName} ${person.lastName}!`);
  person.sayHello();
}

const john: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  sayHello() {
    console.log("Hi there!");
  },
};

greet(john);
```

En este ejemplo, definimos una función llamada saludo que toma un objeto Persona como argumento y registra un mensaje de saludo utilizando sus propiedades firstName y lastName. También llamamos al método sayHello en el objeto Persona.

Luego, creamos un objeto john que implementa la interfaz Person y lo pasamos a la función de saludo. Como john coincide con la forma de la interfaz Person, el código se ejecuta sin errores.

Las interfaces son una herramienta poderosa en TypeScript que le permite imponer la seguridad de tipos y hacer que su código sea más fácil de mantener y leer.

# Extending Interfaces

Puedes utilizar la palabra clave extends para ampliar una interfaz. A continuación, se muestra un ejemplo:

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
```

En este ejemplo, tenemos una interfaz Animal con una propiedad de nombre. Luego, creamos una nueva interfaz Dog que extiende la interfaz Animal mediante la palabra clave extends. La interfaz Dog agrega una propiedad breed a la interfaz Animal base.

Cuando extiende una interfaz, la nueva interfaz hereda todas las propiedades y métodos de la interfaz base, y también puede agregar nuevas propiedades o métodos a la nueva interfaz.
