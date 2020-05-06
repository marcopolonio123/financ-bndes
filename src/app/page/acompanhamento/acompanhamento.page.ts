import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { SolicitacaoService, SolicitacaoData } from 'src/app/solicitacao.service';

@Component({
  selector: 'app-acompanhamento',
  templateUrl: './acompanhamento.page.html',
  styleUrls: ['./acompanhamento.page.scss'],
})

export class AcompanhamentoPage implements OnInit {
  solicitacao: any = [ ];
  searchText: string = null;

  constructor(
    public navCtrl: NavController, 
    private toast: ToastController, 
    public solicitacaoData : SolicitacaoData, 
    public SolicProvider : SolicitacaoService) 
    { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getAllSolic();
  }

  getAllSolic()  {
    this.SolicProvider.getAll(this.searchText)
      .then((result: any[]) => {
        this.solicitacao = result;
      });
  }

  addSolicitacao() {
    this.navCtrl.navigateForward('solicitacao');
  }

  editSolicitacao(id: number) {
    this.navCtrl.navigateForward('solicitacao');
  }

  removeSolicitacao(solic: SolicitacaoData) {
    this.SolicProvider.remove(solic.idSolicitacao)
      .then(() => {
        // Removendo do array de solicitações
        var index = this.solicitacao.indexOf(solic.idSolicitacao);
        this.solicitacao.splice(index, 1);
//        this.toast.create({ message: 'Solicitação excluída.', duration: 3000, position: 'top' });
        alert('Solicitacao excluída com sucesso.');
      })
  }

  filterSolic(ev: any) {
    this.getAllSolic();
  }

}
