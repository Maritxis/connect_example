const f1 = ({a, b}) => a + b;
const f2 = (state) => ({a: state.c, b: state.d});

const state = {c: 2, d:5};

console.log(f2(state));

console.log(f1(f2(state)));

const compos = (func1, funct2) => (x) => func1(funct2(x));

console.log(compos(f1, f2));

const add = (a) => a + 3;
const double = (a) => 2*a;

const handComposed = (a) => 2*( a + 3);
const composedFunctions = compos(double, add);

console.log(f1(f2)(6));
 