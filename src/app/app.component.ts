import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BUSTICKET';

  detailsForm = this.fb.group(
    {
      leavingFrom: [''],
      goingTo: [''],
      date: [''],
      price: [''],
    }
  );

  constructor(private fb: FormBuilder, private router: Router) {
  }


  submit() {
    console.log("form is:" + this.detailsForm.value);
    this.router.navigate(["details", this.detailsForm.value]);  }
}
