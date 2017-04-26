import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AwardComponent } from './header/award/award.component';
import { TrajectoryComponent } from './trajectory/trajectory.component';
import { BalanceComponent } from './balance/balance.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ManagementComponent } from './management/management.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AwardComponent,
    TrajectoryComponent,
    BalanceComponent,
    StatisticsComponent,
    ManagementComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
