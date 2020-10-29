import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Model from './../../../../libs/models';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() loginEmitter = new EventEmitter<Model.LoginRequest>();
  @Output() registerEmitter = new EventEmitter();
  loginForm: FormGroup;
  hide = true;
  @Input() logginPanel: boolean;
  @Input() mensajeErrorAutenticacion: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,  Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  getErrorUsuarioControl(): string {
    if (this.email.hasError('required')) {
      return 'El campo usuario es obligatorio.';
    }
    if (this.email.hasError('minlength')) {
      return 'Ingresa una usuario valido';
    }
  }

  getErrorPasswordControl(): string {
    if (this.password.hasError('required')) {
      return 'El campo contraseña es obligatorio.';
    }
    if (this.password.hasError('minlength')) {
      return 'Ingresa una contraseña con mínimo 8 caracteres';
    }
    if (this.password.hasError('maxlength')) {
      return 'Ingresa una contraseña con máximo 8 caracteres';
    }

  }


  limpiarFormulario() {
    this.loginForm.reset();
  }
  login() {
    if (this.loginForm.invalid) {
      return;
    }
    const loginData = { ...this.loginForm.value };
    this.loginEmitter.emit(loginData);
  }
  goRegister() {
    this.registerEmitter.emit(false);
  }


}
