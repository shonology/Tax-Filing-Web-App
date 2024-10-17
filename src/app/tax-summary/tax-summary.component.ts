import { Component } from '@angular/core';

@Component({
  selector: 'app-tax-summary',
  templateUrl: './tax-summary.component.html',
  styleUrls: ['./tax-summary.component.css']
})
export class TaxSummaryComponent {
  grossSalary: number = 40000;
  filingStatus: string = 'Single';
  taxState: string = 'Don\'t Calculate State Tax';
  dependents: number = 0;
  otherDeductions: number = 0;
  exemption: boolean = true;

  get taxableIncome(): number {
    return this.grossSalary - this.otherDeductions;
  }

  get taxLiability(): number {
    // Example calculation, adjust as needed
    return this.taxableIncome * 0.2; // Assuming a flat 20% tax rate
  }
}
