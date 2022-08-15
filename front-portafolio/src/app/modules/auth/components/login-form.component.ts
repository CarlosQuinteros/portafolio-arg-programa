import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtDto } from 'src/app/core/dtos/jwt-dto';
import { LoginDto } from 'src/app/core/dtos/login-dto';
import { AuthService } from 'src/app/services/auth.service';
import { TokenServiceService } from 'src/app/services/token-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  jwtDto : JwtDto = new JwtDto('');
  loginDto : LoginDto = new LoginDto('','');
  isLogged : boolean = false;

  form : FormGroup;

  constructor(
    private tokenService : TokenServiceService,
    private authService : AuthService,
    private formBuilder : FormBuilder,
    private router : Router
  ) {
    this.form = this.formBuilder.group({
      username:['',[Validators.required, Validators.minLength(4)]],
      password:['',[Validators.required, Validators.minLength(4)]]
    })
  }

  ngOnInit(): void {    
  }

  get UserName(){
    return this.form.get('username');
  }

  get Password(){
    return this.form.get('password');
  }

  onLogin(): void {
    const loginDto : LoginDto = {...this.form.value};
    this.authService.login(loginDto).subscribe(
      data => {
        this.jwtDto = data;
        this.tokenService.setToken(this.jwtDto.token);
        this.isLogged = true;
        this.sweetalertDeBienvenida();
        this.router.navigate(['/zona-admin']);
      },
      err=>{
        this.isLogged = false;
        Swal.fire('Error', err.error.message, 'error');
      }
    )
  }

  sweetalertDeBienvenida(): void {
    Swal.fire({
      icon : 'success',
      title : 'Bienvenido',
      text : 'Iniciaste sesion correctamente'
    })
  }



}
