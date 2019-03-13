import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "simple-form",
  templateUrl: "./simple-form.component.html",
  styleUrls: ["./simple-form.component.css"],
})
export class SimpleFormComponent implements OnInit {
  @Input() message: String;
  constructor() {}

  ngOnInit() {}

  onClick(event, value) {
    console.log(value);
    console.log(event);
  }
}
