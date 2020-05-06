import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.page.html',
  styleUrls: ['./solicitacao.page.scss'],
})

export class SolicitacaoPage implements OnInit {

  public Solic = {
    SolicNome : '',
    SolicEmail: '',
    SolicFone : '',
    SolicIndicacao : '',
    SolicRazaoSocial :'',
    SolicNomeFantasia :'',
    SolicCnpj :'',
    SolicIe :'',
    SolicNroFunc :'',
    SolicNroTerc :'',
    SolicSite :'',
    SolicCep : '',
    SolicLogradouro :'',
    SolicComplemento :'',
    SolicBairro :'',
    SolicCidade :'',
    SolicUf :'',
    SolicSocioNome : '',
    SolicSocioEmail: '',
    SolicSocioCpf : '',
    SolicSocioFone : '',
    SolicInstFinanc : '',
    SolicCodAgencia : '',
    SolicDigAgencia : '',
    SolicContaCorrente : '',
    SolicDigContaCorrente : '',
    SolicValorPretendido : '',
    SolicAcordoVerac : '',
    SolicAcordoAdm : ''
   };
  
  public fGroup : FormGroup;

  constructor( private fBuilder : FormBuilder) {
  this.fGroup = this.fBuilder.group ({
    'SolicNome': [this.Solic.SolicNome, Validators.compose ([Validators.required, Validators.minLength(2),Validators.maxLength(100)])], 
    'SolicEmail': [this.Solic.SolicEmail, Validators.compose ([Validators.required, Validators.minLength(2),Validators.maxLength(100)])],
    'SolicFone': [this.Solic.SolicFone, Validators.compose ([Validators.required, Validators.minLength(8),Validators.maxLength(20)])],
    'SolicIndicacao' : [this.Solic.SolicIndicacao],
    'SolicRazaoSocial' : [this.Solic.SolicRazaoSocial, Validators.compose ([Validators.required, Validators.minLength(5),Validators.maxLength(150)])],
    'SolicNomeFantasia' : [this.Solic.SolicNomeFantasia],
    'SolicCnpj' : [this.Solic.SolicCnpj, Validators.compose ([Validators.required, Validators.minLength(14),Validators.maxLength(15)])],
    'SolicIe' : [this.Solic.SolicIe],
    'SolicNroFunc' : [this.Solic.SolicNroFunc, Validators.compose ([Validators.required])],
    'SolicNroTerc' : [this.Solic.SolicNroTerc, Validators.compose ([Validators.required])],
    'SolicSite' : [this.Solic.SolicSite],
    'SolicCep' : [this.Solic.SolicCep, Validators.compose ([Validators.required])],
    'SolicLogradouro' : [this.Solic.SolicLogradouro, Validators.compose ([Validators.required])],
    'SolicComplemento' : [this.Solic.SolicComplemento],
    'SolicBairro' : [this.Solic.SolicBairro, Validators.compose ([Validators.required])],
    'SolicCidade' : [this.Solic.SolicBairro, Validators.compose ([Validators.required])],
    'SolicUf' : [this.Solic.SolicUf, Validators.compose ([Validators.required])],
    'SolicSocioNome' : [this.Solic.SolicSocioNome, Validators.compose ([Validators.required])],
    'SolicSocioCpf' : [this.Solic.SolicSocioCpf,Validators.compose ([Validators.required])],
    'SolicSocioEmail' : [this.Solic.SolicSocioEmail,Validators.compose ([Validators.required])],
    'SolicSocioFone' : [this.Solic.SolicSocioFone,Validators.compose ([Validators.required])],
    'SolicInstFinanc' : [this.Solic.SolicInstFinanc,Validators.compose ([Validators.required])],
    'SolicCodAgencia' : [this.Solic.SolicCodAgencia,Validators.compose ([Validators.required])],
    'SolicDigAgencia' : [this.Solic.SolicDigAgencia],
    'SolicContaCorrente' : [this.Solic.SolicContaCorrente,Validators.compose ([Validators.required])],
    'SolicDigContaCorrente' : [this.Solic.SolicDigContaCorrente,Validators.compose ([Validators.required])],
    'SolicValorPretendido' : [this.Solic.SolicValorPretendido,Validators.compose ([Validators.required])],
    'SolicAcordoVerac' : [this.Solic.SolicAcordoVerac, Validators.compose ([Validators.required])],
    'SolicAcordoAdm' : [this.Solic.SolicAcordoAdm, Validators.compose ([Validators.required])]
  })
   }

  ngOnInit() {  }

  SubmitForm() { console.log('submit!!!'); }

}
