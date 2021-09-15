"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var sorter = new Sorter_1.Sorter([10, 1, 3, 9, -8]);
//const sorter = new Sorter('abdce');
sorter.sort();
console.log(sorter.collection);
