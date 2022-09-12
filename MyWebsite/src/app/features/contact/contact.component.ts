import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBarType, SnakbarService } from 'src/app/shared/utilities/snackbar/snakbar.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  userInfo: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private snakbar: SnakbarService) {

    this.userInfo = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      phoneNumber: [null],
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  validateForm() {
    if (this.userInfo.valid) {
      console.log('submitted')
      var form = document.createElement('form')
      document.body.appendChild(form);
      form.action = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfUXFIgf2GiijWuv38ftiQp9FGxDPWovbXpAnPN9oaTwd8A5w/formResponse'
      form.setAttribute('method', 'post')
      form.target = '_self'

      var input1 = document.createElement("input");
      input1.type = "text";
      input1.name = 'entry.1265744830';
      input1.value = this.userInfo.get('name')?.value;
      form.appendChild(input1);

      var input1 = document.createElement("input");
      input1.type = "text";
      input1.name = 'entry.1234728905';
      input1.value = this.userInfo.get('email')?.value;
      form.appendChild(input1);

      var input1 = document.createElement("input");
      input1.type = "number";
      input1.name = 'entry.1545450047';
      input1.value = this.userInfo.get('phoneNumber')?.value;
      form.appendChild(input1);

      var input1 = document.createElement("input");
      input1.type = "text";
      input1.name = 'entry.200168837';
      input1.value = this.userInfo.get('message')?.value;
      form.appendChild(input1);
      console.log(form)
      form.getAttribute
      form.submit()
      document.body.removeChild(form)
     window.location.href = 'https://bharathj.com'
    } else {
      this.snakbar.showSnakBar('Please give valid inputs', MatSnackBarType.info)
    }
  }

}
