//* Función Tradicional
function addOne(num: number) {
  return num + 1;
}

const result = addOne(3);
console.log(result);

//* Anotaciones de la función de flecha
const double = (x: number, y: number) => x * y;
const res = double(2, 10);
console.log(res);

//* Tenga en cuenta también que TypeScript le dará una advertencia si proporciona más o menos argumentos de los que especifica en el área de parámetros.
// double(2, 10, 20); // 👈 Warning
