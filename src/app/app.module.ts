import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListService } from './list.service';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
