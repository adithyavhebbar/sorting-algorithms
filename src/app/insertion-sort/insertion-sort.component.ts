import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insertion-sort',
  templateUrl: './insertion-sort.component.html',
  styleUrls: ['./insertion-sort.component.css']
})
export class InsertionSortComponent implements OnInit {

  min = 1;
  step = 1;
  max = 100;
  value = 350;


  n = this.value;
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
    this.shuffleArray(this.numberArray);
  }


  async sortArray() {
    this.btnDisabled = true;
    this.insertionSort(this.numberArray).then(() => {
      this.btnDisabled = false;
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
