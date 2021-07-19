import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merge-sort',
  templateUrl: './merge-sort.component.html',
  styleUrls: ['./merge-sort.component.css']
})
export class MergeSortComponent implements OnInit {
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

  shuffle() {
    this.btnDisabled = true;

    for (var i = this.numberArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.numberArray[i];
      this.numberArray[i] = this.numberArray[j];
      this.numberArray[j] = temp;
      // await this.sleep(10);
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
    await this.mergeSort(this.numberArray, 0, this.numberArray.length - 1).then(() => {
      this.shuffleArray(this.numberArray);
      this.midIndex = -1;
      console.log("Finished Sorting");
    })
  }

  sleep(milliseconds: number): Promise<void> {
    return new Promise<void>((resolve) =>
      setTimeout(() => {
        resolve();
      }, milliseconds)
    );
  }

  async mergeSort(arr: number[], low: number, high: number): Promise<void> {
    if (low < high) {
      let mid = Math.floor(low + (high - low) / 2);
      this.midIndex = mid;
      await this.mergeSort(arr, low, mid);
      await this.mergeSort(arr, mid + 1, high);
      await this.merge(arr, low, mid, high);
      await this.sleep(10);
    }
  }

  async merge(arr: number[], low: number, mid: number, high: number): Promise<void> {
    let n1 = mid - low + 1;
    let n2 = high - mid;
    let L: number[] = [];
    let R: number[] = [];
    for (let i = 0; i < n1; i++) {
      L.push(arr[low + i])
    }

    for (let j = 0; j < n2; j++) {
      R.push(arr[mid + 1 + j]);
    }

    let i = 0, j = 0;
    let k = low;

    while (i < n1 && j < n2) {
      if (L[i] < R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
    }
    // await this.sleep(10);

    while (i < n1) {
      arr[k] = L[i];
      k++;
      i++;
    }
    // await this.sleep(10);

    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
    await this.sleep(10);

  }


}
