import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heap-sort',
  templateUrl: './heap-sort.component.html',
  styleUrls: ['./heap-sort.component.css']
})
export class HeapSortComponent implements OnInit {

  value = 50;


  n = 350;
  numberArray: number[] = [];
  pivotIndex = -1;
  lowIndex: number = -2;
  highIndex: number = -2;
  btnDisabled = false;
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
    // console.log('original array', this.numberArray);
    this.shuffleArray(this.numberArray);
  }


  async sortArray() {
    this.btnDisabled = true;
    this.heapSort(this.numberArray).then(() => {
      this.btnDisabled = false;
      this.pivotIndex = -1;
      console.log("Finished");
    });
  }

  async heapSort(arr: number[]): Promise<void> {
    let len = arr.length;
    let l = Math.floor(len / 2);
    let r = l + 1;
    let k = 0;
    for (let i = l - 1; i >= 0; i--) {
      await this.heapify(arr, len, i);
      await this.sleep(10);
    }

    for (let i = len - 1; i > 0; i--) {
      this.swap(arr, 0, i);
      this.heapify(arr, i, 0);
      await this.sleep(10);
    }

  }


  async heapify(arr: number[], n: number, i: number) {
    let largest = i;
    let left = (2 * i + 1);
    let right = (2 * i + 2);

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      this.swap(arr, i, largest);
      this.heapify(arr, n, largest);
    }
    await this.sleep(5)
  }

  swap(arr: number[], i: number, j: number) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
  }

  async sleep(milliseconds: number): Promise<void> {
    return new Promise<void>((resolve) =>
      setTimeout(() => {
        resolve();
      }, milliseconds)
    );
  }



}
