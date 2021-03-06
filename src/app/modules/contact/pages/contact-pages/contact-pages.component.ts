import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-pages',
  templateUrl: './contact-pages.component.html',
  styleUrls: ['./contact-pages.component.css']
})
export class ContactPagesComponent implements OnInit {
  private readonly URL = environment.api
  formLogin: FormGroup = new FormGroup({});
  submitted: boolean = false; //Mostrar que el mensaje ha sido enviado
  responseMessage: string = "";
  success: string = "success";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required,]),
        subject: new FormControl('', [Validators.required]),
        message: new FormControl('', [Validators.required]),
      }
    )
  }
  goToLink(url: string): void {
    window.open(url, "_blank")
  }

  sendInfo(): void {
    const { name, email, subject, message } = this.formLogin.value
    const body = {
      name: name,
      email: email,
      subject: subject,
      message: message
    }
    this.http.post(`${this.URL}/prueba?nombre=${name}&email=${email}&asunto=${subject}&mensaje=${message}`, body)
      .subscribe(Response => {
        console.log(Response)
      })
    alert("Gracias por enviar mensaje, me pondre en contacto lo mas pronto posible.");
  }
}
