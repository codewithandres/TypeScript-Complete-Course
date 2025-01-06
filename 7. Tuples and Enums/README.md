# Tuples

En TypeScript, una tupla es un tipo que representa una matriz con una cantidad fija de elementos, donde cada elemento puede tener un tipo diferente. El orden de los tipos en la definición de la tupla corresponde al orden de los valores en la matriz real. Las tuplas son similares a las matrices, pero tienen una estructura específica y se pueden usar para modelar secuencias finitas con longitudes conocidas.

Puede definir un tipo de tupla especificando los tipos de sus elementos encerrados entre corchetes, separados por comas:

```ts
let myTuple: [string, number] = ["hello", 42];
```

Esto declara una variable myTuple de tipo [string, number], lo que significa que es una matriz con dos elementos: el primer elemento debe ser una cadena y el segundo elemento debe ser un número. Puedes acceder a elementos individuales de una tupla mediante la sintaxis de indexación:

```ts
let myTuple: [string, number] = ["hello", 42];
console.log(myTuple[0]); // "hello"
console.log(myTuple[1]); // 42
```

Tenga en cuenta que también puede utilizar la sintaxis de desestructuración para extraer elementos individuales de una tupla:

```ts
let myTuple: [string, number] = ["hello", 42];
let [first, second] = myTuple;
console.log(first); // "hello"
console.log(second); // 42
```

Las tuplas son útiles cuando se necesita representar un conjunto fijo de valores donde cada valor tiene un tipo diferente. Por ejemplo, se puede utilizar una tupla para representar un punto 2D con coordenadas x e y:

```ts
let point: [number, number] = [10, 20];
```

O puedes usar una tupla para representar el nombre y la edad de una persona:

```ts
let person: [string, number] = ["John Smith", 30];
```

# Enums

En TypeScript, una enumeración es una forma de definir un conjunto de constantes con nombre. Las enumeraciones permiten definir una colección de valores relacionados que se pueden usar de forma intercambiable en el código.

Por ejemplo, supongamos que estás creando una aplicación meteorológica y quieres definir un conjunto de posibles condiciones meteorológicas como "soleado", "nublado", "lluvioso" y "nevado". Podrías definir una enumeración como esta:

```ts
enum WeatherConditions {
  Sunny,
  Cloudy,
  Rainy,
  Snowy,
}
```

En este ejemplo, WeatherConditions es el nombre de la enumeración y a cada uno de los valores (por ejemplo, Sunny, Cloudy, etc.) se le asigna un valor numérico automático a partir de 0. También puede asignar valores específicos a cada miembro de la enumeración de esta manera:

```ts
enum WeatherConditions {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy",
}
```

En este caso, a cada miembro de enumeración se le asigna explícitamente un valor de cadena.

Puedes usar enumeraciones en tu código haciendo referencia a ellas por su nombre, por ejemplo:

```ts
const currentWeather = WeatherConditions.Sunny;
console.log(`The current weather is ${currentWeather}`);
// Output: The current weather is Sunny
```

Las enumeraciones son una herramienta útil para crear código más legible y fácil de mantener al proporcionar una forma de definir un conjunto de valores relacionados con nombres claros y significativos.
