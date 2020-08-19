import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators  } from '@angular/forms';
import { AuthusersService } from '../services/authusers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private authusersservice: AuthusersService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.form.value)
     if (this.form.invalid) {
      return;
      }
    this.authusersservice.authuserlogin(this.form.value).subscribe(data=>{
     console.log("csg");
     console.log(data);
    })

  }

}
