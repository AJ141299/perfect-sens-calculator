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
import { FooterComponent } from './components/footer/footer.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InitSensComponent,
    SensComponent,
    CalculatedSectionComponent,
    SensesComponent,
    FooterComponent,
    TooltipComponent
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
