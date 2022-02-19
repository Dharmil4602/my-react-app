// This will import details from module2.mjs. We can give any moduleName.
// When we are not setting any default export then here we need to set the exact value/variable name that we give it in the module from which we are fetching the data.

import moduleName, {b,c,d} from './module2.mjs'
console.log(moduleName);
console.log(b);
console.log(c);
console.log(d);