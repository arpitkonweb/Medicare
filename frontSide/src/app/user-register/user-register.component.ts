import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegisterService } from './user-register.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit{
  username: string =''
  firstname: string =''
  lastname: string =''
  joindate: string = '1990/01/01'
  phoneno: string =''
  email: string = ''
  password: string =''

  service: UserRegisterService
  constructor(private router: Router,
      userservice: UserRegisterService ) { 
          this.service =  userservice
      }

  onadd()
  {
      if(this.username.length == 0){
          alert('Username is required')
      }
      else if(this.firstname.length == 0){
          alert('Firstname is required')
      }
      else if(this.lastname.length == 0){
          alert('lastname is required')
      }
      else if(this.phoneno.length == 0){
          alert('Phone number is required')
      }
      else if(this.email.length == 0){
          alert('Email is required')
      }
      else if(this.password.length ==0){
          alert('Password is required')
      }
      else{

      

      this.service.addUsers(this.username,this.firstname,this.lastname,this.joindate,
          this.phoneno,this.email,this.password).subscribe((response)=>{
              if(response['status']=='success')
              {
                  alert('You have successfully register')
                  this.router.navigate(['/Userlogin'])
              }
              else
              {
                  console.log(response['error'])
                  alert('error')
              }
          })

      }
  }
  ngOnInit() { }

}
