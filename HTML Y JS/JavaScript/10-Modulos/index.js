import { suma, multiplicar} from "./modules/controller.js"
import chalk from 'chalk';
console.log("hola");
let res1= suma(1,2)
let res2= suma(4,5)

console.log(chalk.green((multiplicar(res1,res2))));

console.log(chalk.red("----------------------"));