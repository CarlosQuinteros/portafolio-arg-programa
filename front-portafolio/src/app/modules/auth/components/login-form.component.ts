import { Component, OnInit } from '@angular/core';
import { LoginDto } from 'src/app/core/dtos/login-dto';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginDto : LoginDto = new LoginDto('','');

  constructor() { }

  ngOnInit(): void {
    
  }

}
