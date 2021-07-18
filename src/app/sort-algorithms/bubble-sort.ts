export class BubbleSort {
    private numberArray: number[];
    constructor(numberArray: number[]) {
        this.numberArray = numberArray;
    }

    async sort() {
        // let timer: any[] = [];
        for (let i = 0; i < this.numberArray.length; i++) {
            this.bubbleSort(i);
            await this.sleep(1);
            // await this.sleep(50);
        }
        console.log("Sorted");

    }

    sleep(milliseconds) {
        return new Promise<void>((resolve) =>
            setTimeout(() => {
                resolve();
            }, milliseconds)
        );
    }

    async bubbleSort(i: number) {
        for (let j = i + 1; j < this.numberArray.length; j++) {

            if (this.numberArray[i] < this.numberArray[j]) {
                const temp = this.numberArray[i];
                this.numberArray[i] = this.numberArray[j];
                this.numberArray[j] = temp;
            }
            console.log("running");
        }
    }
}
