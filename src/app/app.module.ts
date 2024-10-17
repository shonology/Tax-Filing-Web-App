import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CitizenshipComponent } from './citizenship/citizenship.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { IncomeComponent } from './income/income.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { TaxSummaryComponent } from './tax-summary/tax-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CitizenshipComponent,
    PersonalInfoComponent,
    IncomeComponent,
    UploadDocumentsComponent,
    TaxSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
