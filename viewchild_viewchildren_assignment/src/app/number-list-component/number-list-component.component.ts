import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NumberComponentComponent } from '../number-component/number-component.component';

@Component({
  selector: 'app-number-list-component',
  templateUrl: './number-list-component.component.html',
  styleUrls: ['./number-list-component.component.css']
})
export class NumberListComponentComponent implements OnInit {
  @ViewChildren(NumberComponentComponent) parent: QueryList<NumberComponentComponent>;

  constructor() { }


  ngOnInit(): void {
  }
  nums:number[]=[1,2,3,4,5,6,7,8,9,10];

  SelectAll(){
  //  console.log(this.parent.ischecked);
    this.parent.forEach(num=>{
      console.log(num.num);
      num.ischecked=!num.ischecked;
    });
    
   }

   SelectAllOddNumbers(){
    console.log("hi");
    this.parent.forEach(odd=>{
      if((odd.num % 2) != 0){
        odd.ischecked=!odd.ischecked;
      }
        // console.log(odd.num);}
        // console.log(odd.num);
    });
    
   }
  
}
