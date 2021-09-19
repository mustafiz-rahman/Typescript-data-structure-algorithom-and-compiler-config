import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharatersCollection } from "./CharatersCollection";

const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
const charatersCollection = new CharatersCollection('xcabd');
const sorter = new Sorter(numbersCollection);
const charSorter= new Sorter(charatersCollection);
//const sorter = new Sorter('abdce');

sorter.sort();
charSorter.sort();
console.log(`For number ${numbersCollection.data}`);
console.log(`For string ${charatersCollection.data}`);
