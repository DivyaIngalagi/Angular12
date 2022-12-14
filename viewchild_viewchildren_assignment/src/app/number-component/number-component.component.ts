import { ɵAnimationGroupPlayer } from '@angular/animations';
import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, ViewChild , ViewChildren, QueryList } from '@angular/core';
import { from, of, toArray } from 'rxjs';

@Component({
  selector: 'app-number-component',
  templateUrl: './number-component.component.html',
  styleUrls: ['./number-component.component.css']
})
export class NumberComponentComponent implements OnInit {



  constructor() { }
  



  ngOnInit(): void {
  }
  @Input()
  num!: number;
  ischecked:boolean;
}


