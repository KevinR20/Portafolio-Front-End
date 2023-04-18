import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import {FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Validators } from "@angular/forms"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 form: FormGroup;
 
  email = "";
  password= "";
  
  
  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
      password: ["", []],
      mail: ["", []],

    })
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  Login(){
    this.authService.login(this.email, this.password)
  }

}
