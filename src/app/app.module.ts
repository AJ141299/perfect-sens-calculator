import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InitSensComponent } from './components/init-sens/init-sens.component';
import { SensComponent } from './components/sens/sens.component';
import { CalculatedSectionComponent } from './components/calculated-section/calculated-section.component';
import { SensesComponent } from './components/senses/senses.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InitSensComponent,
    SensComponent,
    CalculatedSectionComponent,
    SensesComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
