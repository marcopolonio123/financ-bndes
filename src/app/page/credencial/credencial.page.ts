import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-credencial',
  templateUrl: './credencial.page.html',
  styleUrls: ['./credencial.page.scss'],
})
export class CredencialPage implements OnInit {

  public Credencial = {
    CredencialNome : '',
    CredencialEmail : '',
    CredencialFone : '',
    CredencialSenha :'',
    CredencialConfSenha :''
   };
  
   public fGroup : FormGroup;

   constructor( private fBuilder : FormBuilder) {
   this.fGroup = this.fBuilder.group ({
     'CredencialNome': [this.Credencial.CredencialNome, Validators.compose ([Validators.required, Validators.minLength(2),Validators.maxLength(100)])], 
     'CredencialEmail': [this.Credencial.CredencialEmail, Validators.compose ([Validators.required, Validators.minLength(5),Validators.maxLength(100)])], 
     'CredencialFone': [this.Credencial.CredencialFone, Validators.compose ([Validators.required, Validators.minLength(8),Validators.maxLength(20)])],
     'CredencialSenha' : [this.Credencial.CredencialSenha, Validators.compose ([Validators.required, Validators.minLength(8),Validators.maxLength(100)])],
     'CredencialConfSenha' : [this.Credencial.CredencialConfSenha, Validators.compose ([Validators.required])]
     })
    }

  ngOnInit() {
  }
  SubmitCredencial() { console.log('submit!!!'); }
}
