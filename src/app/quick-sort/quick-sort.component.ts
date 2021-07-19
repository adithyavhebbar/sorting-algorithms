import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-sort',
  templateUrl: './quick-sort.component.html',
  styleUrls: ['./quick-sort.component.css']
})
export class QuickSortComponent implements OnInit {
  n = 350;
  numberArray: number[] = [];
  pivotIndex = -1;
  lowIndex: number = -2;
  highIndex: number = -2;
  btnDisabled = true;

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
    this.quickSort(this.numberArray, 0, this.numberArray.length - 1).then(() => {
      this.pivotIndex = -1;
      this.btnDisabled = false;
    })
  }

  sleep(milliseconds: number): Promise<void> {
    return new Promise<void>((resolve) =>
      setTimeout(() => {
        resolve();
      }, milliseconds)
    );
  }

  async quickSort(arr: number[], low: number, high: number): Promise<void> {
    if (low < high) {
      let pi = await this.partition(arr, low, high);

      await this.quickSort(arr, low, pi - 1);
      await this.quickSort(arr, pi, high);

    }
    return;
  }

  async partition(arr: number[], low: number, high: number): Promise<number> {
    // this.pivotIndex = high;
    this.lowIndex = low;
    this.highIndex = high;
    this.pivotIndex = Math.floor(Math.random() * high);
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
      if (arr[j] < pivot) {
        i++;
        await this.swap(j, i)
      }
    }
    await this.sleep(10);

    await this.swap(i + 1, high);
    return i + 1;
  }

  async swap(i: number, j: number): Promise<void> {
    let temp = this.numberArray[i];
    this.numberArray[i] = this.numberArray[j];
    this.numberArray[j] = temp;
    await this.sleep(3);
  }

}
