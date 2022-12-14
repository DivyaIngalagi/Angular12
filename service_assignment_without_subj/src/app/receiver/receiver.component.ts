import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {
  ReceiverData;
  constructor(public datasubject:DataSharingService) { }

  ngOnInit(): void {
  }
  onSubmit(data) {  
      this.ReceiverData=data;
      this.datasubject.receiverdata=data;
  }
}
