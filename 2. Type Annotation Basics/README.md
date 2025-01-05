# Anotaciones

En TypeScript, las anotaciones se utilizan para especificar el tipo de datos de una variable, un parámetro, un valor de retorno de una función y otros tipos de valores. Las anotaciones ayudan a los desarrolladores a detectar errores en las primeras fases del desarrollo, ya que les permiten especificar qué tipos de valores se pueden asignar a una variable determinada o pasar como argumento a una función.

Las anotaciones se especifican mediante una sintaxis que implica colocar dos puntos : seguido del tipo de datos después del nombre de la variable o del nombre del argumento. Por ejemplo, el siguiente código declara una variable denominada name con un tipo de cadena:

```ts
let name: string = "John";
```

# String Anotaciones

```ts
let message: string = "Hello, world!";
```

En este ejemplo, declaramos una variable message y le asignamos un valor de tipo string. Los dos puntos : se utilizan para anotar el tipo de la variable.

Esto le indica a TypeScript que la variable message solo puede contener un valor que sea una cadena. Si intentáramos asignar un valor de un tipo diferente a esta variable, TypeScript generaría un error.

# Number Anotaciones

```ts
let myNumber: number = 42;
```

En este ejemplo, declaramos una variable myNumber con la anotación de tipo number. Esto significa que el valor asignado a myNumber debe ser un valor numérico.

Si intentamos asignar un valor no numérico a myNumber, TypeScript mostrará un error:
```ts
let myNumber: number = "Hello, world!"; // Error: Type '"Hello, world!"' is not assignable to type 'number'.
```

# Boolean Anotaciones

```ts
let isCompleted: boolean = false;
```

En este ejemplo, declaramos una variable isCompleted con la anotación de tipo boolean. Esto significa que el valor asignado a isCompleted debe ser verdadero o falso.

Si intentamos asignar un valor no booleano a isCompleted, TypeScript mostrará un error:

```ts
let isCompleted: boolean = "not yet"; // Error: Type 'string' is not assignable to type 'boolean'.
```

# Type Inference

Type inference is a feature in TypeScript that allows the compiler to automatically determine the type of a variable based on its value. In other words, if you declare a variable without explicitly specifying its type, TypeScript will try to infer the type based on the value you assign to it.

Here's an example:

```ts
let myString = "Hello, world!";
```

En este ejemplo, declaramos una variable myString sin especificar su tipo. Sin embargo, dado que le asignamos un valor de cadena, TypeScript inferirá que myString tiene un tipo de cadena.

La inferencia de tipos puede ayudar a reducir el código repetitivo y hacer que el código sea más conciso, pero es importante recordar que no siempre es perfecto y, a veces, es posible que deba anotar explícitamente las variables para evitar un comportamiento inesperado.

# Any Type

TypeScript tiene un tipo especial any que se puede usar para representar cualquier tipo. Cuando una variable está anotada con el tipo any, TypeScript le permitirá tener cualquier valor y deshabilitará todas las comprobaciones de tipo para esa variable y sus propiedades.

```ts
let myVariable: any = "Hello, world!";
```

En este ejemplo, declaramos una variable myVariable con la anotación de tipo any. Esto significa que myVariable puede tener cualquier valor, incluidos valores de diferentes tipos. Por ejemplo, podríamos asignar un valor numérico a myVariable más adelante sin que TypeScript genere un error.

Si bien el tipo any puede ser útil en determinadas situaciones, se debe utilizar con moderación. El uso excesivo de any puede generar código sin tipo y dificultar la detección de errores relacionados con el tipo durante el desarrollo. Por lo general, es mejor utilizar tipos más específicos siempre que sea posible para obtener los beneficios de la verificación de tipos de TypeScript.