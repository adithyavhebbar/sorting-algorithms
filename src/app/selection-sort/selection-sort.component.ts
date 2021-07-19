import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection-sort',
  templateUrl: './selection-sort.component.html',
  styleUrls: ['./selection-sort.component.css']
})
export class SelectionSortComponent implements OnInit {

  n = 350;
  numberArray: number[] = [];
  pivotIndex = -1;
  lowIndex: number = -2;
  highIndex: number = -2;
  btnDisabled = true;
  midIndex: number = -1;

  selectedAlgorithm = 'selection-sort';
  constructor() {


  }

  async shuffle() {
    this.btnDisabled = true;

    for (var i = this.numberArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.numberArray[i];
      this.numberArray[i] = this.numberArray[j];
      this.numberArray[j] = temp;
      await this.sleep(10);
    }

    this.btnDisabled = false;
  }

  async shuffleArray(array: number[]) {

    this.btnDisabled = true;

    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      await this.sleep(10);
    }

    this.btnDisabled = false;

  }

  getHeightofDiv(i: number): string {
    let height = Math.abs(i);
    return height + "px";
  }

  ngOnInit() {

    for (let i = 1; i <= this.n; i++) {
      this.numberArray.push(i);
    }

    this.shuffleArray(this.numberArray);
  }


  async sortArray() {
    this.btnDisabled = true;
    this.selectionSort(this.numberArray).then(() => {
      this.pivotIndex = -1;
      console.log("Finished");
      this.btnDisabled = false;
    });
  }

  async selectionSort(arr: number[]): Promise<void> {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      let min_index = i;
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[min_index]) {
          min_index = j;
        }
      }
      this.pivotIndex = min_index;
      // console.log("Minimum index:", min_index, ":::", arr[min_index]);
      await this.swap(i, min_index);
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

  async swap(i: number, j: number): Promise<void> {
    let temp = this.numberArray[i];
    this.numberArray[i] = this.numberArray[j];
    this.numberArray[j] = temp;
    // await this.sleep(10);
  }


}
