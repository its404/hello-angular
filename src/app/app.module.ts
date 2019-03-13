import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SimpleFormComponent } from "./simple-form/simple-form.component";
import { MessageService } from "./message.service";
@NgModule({
  declarations: [AppComponent, SimpleFormComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: "MessageService",
      useClass: MessageService,
    },
    {
      provide: "API",
      useValue: "This is API",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
