import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HistoryComponent } from './history/history.component';
import { TeamComponent } from './team/team.component';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [				
    AppComponent,
      EventsComponent,
      AboutUsComponent,
      HistoryComponent,
      TeamComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgOptimizedImage,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
