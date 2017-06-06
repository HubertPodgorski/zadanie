import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HttpService } from 'app/shared/http.service';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from 'app/search/search.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchHistoryComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    HttpService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
