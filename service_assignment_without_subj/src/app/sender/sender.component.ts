import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {
  SenderData;
  constructor(public datasubject:DataSharingService) { }

  ngOnInit(): void {
  }
  onSubmit(data) {  
    this.SenderData=data;
    this.datasubject.senderdata=data;
  } 
}
