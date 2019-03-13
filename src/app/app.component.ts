import { Component, Inject } from "@angular/core";
import { MessageService } from "./message.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(
    @Inject("MessageService") public messageService: MessageService,
    @Inject("API") public api: String,
  ) {}
  title = "Hello World";
}
