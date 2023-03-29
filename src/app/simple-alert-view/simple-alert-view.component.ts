import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-alert-view',
  templateUrl: './simple-alert-view.component.html',
  styleUrls: ['./simple-alert-view.component.scss'],
})
export class SimpleAlertViewComponent implements OnInit {
  constructor() {}

  @Input() message: string | undefined;
  @Input() title: string | undefined;
  public visible: boolean = true;

  ngOnInit() {}

  public dismiss() {
    this.visible = false;
  }

  public show() {
    this.visible = true;
  }
}
