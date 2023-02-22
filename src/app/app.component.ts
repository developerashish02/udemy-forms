import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signupFomr: NgForm;
  defaultString = 'Your pet';
  comment = '';
  genders = ['Male', 'Female', 'other'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupFomr.setValue({
    //   userData: {
    //     userName: suggestedName,
    //   },
    //   secret:''
    // });

    this.signupFomr.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  //   onSubmit(form: NgForm) {
  //     console.log('Form is working', form);
  //   }

  onSubmit() {
    console.log(this.signupFomr, 'signupForm....');
  }
}
