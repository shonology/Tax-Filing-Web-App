import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CitizenshipComponent } from './citizenship/citizenship.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { IncomeComponent } from './income/income.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { TaxSummaryComponent } from './tax-summary/tax-summary.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'citizenship', component: CitizenshipComponent },
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'income', component: IncomeComponent },
  { path: 'upload-documents', component: UploadDocumentsComponent },
  { path: 'tax-summary', component: TaxSummaryComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
