# Tipos en Arrays 

En TypeScript, las matrices son un tipo de objeto que puede almacenar varios valores del mismo tipo de datos. Las matrices en TypeScript tienen tipos, lo que significa que se puede especificar el tipo de valores que puede contener una matriz.

Hay dos formas de definir un tipo de matriz en TypeScript:

1. Usando la notación de corchetes [] para indicar una matriz de un tipo específico:

```ts
const numbers: number[] = [1, 2, 3, 4];
```

En este ejemplo, números es una matriz de tipo número y contiene cuatro elementos.

2. Usando la notación genérica Array<type> para indicar una matriz de un tipo específico:

```ts
const names: Array<string> = ["Alice", "Bob", "Charlie"];
```

En este ejemplo, nombres es una matriz de tipo cadena y contiene tres elementos.

# Multi Dimensional

Una matriz multidimensional es una matriz que contiene otras matrices como elementos. Las matrices multidimensionales se pueden definir utilizando la misma notación que las matrices unidimensionales, pero con corchetes anidados.

```ts
const matrix: number[][] = [
  [1, 2],
  [3, 4],
];
```

En este ejemplo, la matriz es una matriz bidimensional que contiene dos filas y dos columnas. La primera fila contiene los valores 1 y 2, y la segunda fila contiene los valores 3 y 4. Cada fila es en sí misma una matriz de números.

Puede acceder a los elementos dentro de una matriz multidimensional utilizando notaciones de corchetes múltiples. Por ejemplo, para acceder al valor 1 en la matriz anterior, debe utilizar la siguiente sintaxis:

```ts
const value = matrix[0][0];
```
