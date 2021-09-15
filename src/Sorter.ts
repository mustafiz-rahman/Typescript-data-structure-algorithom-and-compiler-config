export class Sorter {
  //collection: number[]|string;

  constructor(public collection: number[]|string ) {}

  sort(): void {
    const length = this.collection.length;
     
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if(this.collection instanceof Array){
        if (this.collection[j] > this.collection[j + 1]) {
          let temp = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = temp;
        }
      }
      }
    }
  }
}


