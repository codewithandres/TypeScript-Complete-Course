// 1.
const throwError = (msg: string): never => {
  throw new Error(msg);
}

// 2.
const infiniteLoop = (): never =>  {
  while (true) {}
}

// 3.
let x: never;

const neverReturns = (): never => {
  while (true) {}
}

x = neverReturns(); // Esta línea provocará un error en tiempo de compilación porque la función nunca retorna
