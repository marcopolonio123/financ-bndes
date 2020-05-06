import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
  
  public Contato = {
    Sender : '',
    Company : '',
    FoneSender : '',
    EmailSender :'',
    SubjectEmail :'JUR',
    MessageEmail :'' };
  
  public fGroup : FormGroup;

  constructor( private fBuilder : FormBuilder) {
  this.fGroup = this.fBuilder.group ({
    'Sender': [this.Contato.Sender, Validators.compose ([Validators.required, Validators.minLength(2),Validators.maxLength(100)])], 
    'Company': [this.Contato.Company], 
    'FoneSender': [this.Contato.FoneSender, Validators.compose ([Validators.required, Validators.minLength(8),Validators.maxLength(20)])],
    'EmailSender' : [this.Contato.EmailSender, Validators.compose ([Validators.required, Validators.minLength(5),Validators.maxLength(100)])],
    'SubjectEmail' : [this.Contato.SubjectEmail, Validators.compose ([Validators.required])],
    'MessageEmail' : [this.Contato.MessageEmail, Validators.compose ([Validators.required, Validators.minLength(10),Validators.maxLength(400)])]
  })
   }

  ngOnInit() {  }

  SubmitEmailContato() { console.log('submit!!!'); }

}
