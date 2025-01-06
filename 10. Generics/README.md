# Generics

En TypeScript, los genéricos permiten crear componentes reutilizables que pueden funcionar con distintos tipos. Los genéricos permiten definir funciones, clases e interfaces que pueden funcionar con distintos tipos de datos sin tener que duplicar el código.

A continuación se muestra un ejemplo de cómo definir una función genérica en TypeScript:

```ts
const  reverse = <T>(items: T[]): T[] =>  {
  const reversed = [];
  for (let i = items.length - 1; i >= 0; i--) {
    reversed.push(items[i]);
  }
  return reversed;
}
```

En este ejemplo, reverse es una función genérica que toma una matriz de tipo T y devuelve una nueva matriz del mismo tipo T. La sintaxis <T> en la definición de reverse indica que T es un parámetro de tipo genérico. Cuando se llama a la función reverse, se especifica el tipo real que T debe representar.

Por ejemplo, si quisieras invertir una matriz de cadenas, llamarías a reverse de esta manera:

```ts
const names = ["Alice", "Bob", "Charlie"];
const reversedNames = reverse<string>(names);
```

En este caso, la cadena es el tipo real que T representa, por lo que la función inversa devuelve una matriz de cadenas.

Los genéricos también se pueden utilizar con clases e interfaces en TypeScript. Por ejemplo, así es como se puede definir una interfaz genérica para un almacén de clave-valor:

```ts
interface KeyValueStore<K, V> {
  get(key: K): V | undefined;
  set(key: K, value: V): void;
}
```

En este ejemplo, KeyValueStore es una interfaz genérica que tiene dos parámetros de tipo K y V. Estos parámetros de tipo se utilizan para definir los tipos de claves y valores en el almacén de clave-valor. Los métodos get y set se definen para obtener y establecer valores en el almacén..

Los genéricos permiten escribir código más flexible y reutilizable, ya que puede funcionar con una amplia variedad de tipos de datos.
