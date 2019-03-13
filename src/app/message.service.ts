import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  constructor() {}
  message = "This message is a message";
  messages = ["message 1", "message 2", "message 3"];
}
