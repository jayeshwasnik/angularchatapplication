import { Component, OnInit } from '@angular/core';
import { AppService } from '/app.service.ts';
import { ActivatedRoute, Router } from '@angular/router';

//for toastr
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 public firstName;
public lastName;
public email;
public mobileNumber;
public password;
public apiKey;


  constructor(private _route: ActivatedRoute, private router: Router, public appService: AppService,private toastr:ToastrService) { }



  ngOnInit() {
  }

}