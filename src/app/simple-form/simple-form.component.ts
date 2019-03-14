import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "simple-form",
  templateUrl: "./simple-form.component.html",
  styleUrls: ["./simple-form.component.css"],
})
export class SimpleFormComponent implements OnInit {
  @Input() message: String;
  @Output() simpleUpdate = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onClick(event, value) {
    console.log(value);
    console.log(event);
  }
}
