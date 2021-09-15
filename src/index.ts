import { Sorter } from "./Sorter";
const sorter = new Sorter([10, 1, 3, 9, -8]);
//const sorter = new Sorter('abdce');

sorter.sort();
console.log(sorter.collection);