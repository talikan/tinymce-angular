import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-content-test',
  templateUrl: './ng-content-test.component.html',
  styleUrls: ['./ng-content-test.component.css']
})
export class NgContentTestComponent implements OnInit {

  @Input()
  editable: boolean;

  @Input()
  readOnlyContent: string;

  constructor() {
  }

  ngOnInit() {
  }

}
