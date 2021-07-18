import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insertion-sort',
  templateUrl: './insertion-sort.component.html',
  styleUrls: ['./insertion-sort.component.css']
})
export class InsertionSortComponent implements OnInit {

  n = 350;
  numberArray: number[] = [];
  pivotIndex = -1;
  lowIndex: number = -2;
  highIndex: number = -2;
  btnDisabled = true;
  midIndex: number = -1;
  constructor() {
    for (let i = 1; i <= this.n; i++) {
      this.numberArray.push(i);
    }

  }

  async shuffleArray(array: number[]) {

    this.btnDisabled = true;

    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      // await this.sleep(10);
    }

    this.btnDisabled = false;

  }

  getHeightofDiv(i: number): string {
    let height = Math.abs(i);
    return height + "px";
  }

  ngOnInit() {
    this.shuffleArray(this.numberArray);
  }


  async sortArray() {
    this.btnDisabled = false;
    this.insertionSort(this.numberArray).then(() => {
      this.shuffleArray(this.numberArray);
      this.pivotIndex = -1;
      console.log("Finished");
    });
  }

  async insertionSort(arr: number[]): Promise<void> {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      let key = arr[i];
      let j = i - 1;
      this.pivotIndex = i;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
      await this.sleep(10);
    }
  }

  sleep(milliseconds: number): Promise<void> {
    return new Promise<void>((resolve) =>
      setTimeout(() => {
        resolve();
      }, milliseconds)
    );
  }




}
