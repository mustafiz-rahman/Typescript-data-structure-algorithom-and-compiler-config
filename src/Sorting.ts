class Sorter{
    collection:number[];

    constructor(collection:number[]){
        this.collection = collection;
    }

    sort():void{
        const length= this.collection.length;
        for(let i=0;i<length;i++){
            for(let j=0;j<length-i-1;j++)
            {
                if(this.collection[j]>this.collection[j+1])
                {
                    let temp =this.collection[j];
                    this.collection[j]=this.collection[j+1];
                    this.collection[j+1]=temp;
                }
            }
        }


    }
} 

const sorter = new Sorter([10,1,3,9,-8]);
sorter.sort();
console.log(sorter.collection);