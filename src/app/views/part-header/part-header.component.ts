import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part-header',
  templateUrl: './part-header.component.html',
  styleUrls: ['./part-header.component.css']
})
export class PartHeaderComponent implements OnInit {
  title = '予約管理';

  constructor() { }

  ngOnInit() {
  }

}
