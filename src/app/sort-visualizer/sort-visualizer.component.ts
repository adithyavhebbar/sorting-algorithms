import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { BubbleSort } from "../sort-algorithms/bubble-sort";

@Component({
  selector: 'app-sort-visualizer',
  templateUrl: './sort-visualizer.component.html',
  styleUrls: ['./sort-visualizer.component.css']
})
export class SortVisualizerComponent implements OnInit {
  n = 400;
  numberArray: number[] = [];

  bubbleSort: BubbleSort;
  constructor() {
    for (let i = 1; i <= this.n; i++) {
      this.numberArray.push(i);
    }

    this.shuffleArray(this.numberArray);
  }

  shuffleArray(array: number[]) {


    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

  }

  getHeightofDiv(i: number): string {
    let height = Math.abs(500 - i + 10);
    return height + "px";
  }

  ngOnInit() {
  }
  async sortArray() {
    this.bubbleSort = new BubbleSort(this.numberArray);
    this.bubbleSort.sort().then(() => {
      console.log("Sorted shuffling");
      this.shuffleArray(this.numberArray);
    }).catch((error) => {
      console.log(error)
    });
  }
}
