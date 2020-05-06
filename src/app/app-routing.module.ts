import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'financ-bndes',
    loadChildren: () => import('./page/financ-bndes/financ-bndes.module').then( m => m.FinancBNDESPageModule)
  },
  {
    path: 'credencial',
    loadChildren: () => import('./page/credencial/credencial.module').then( m => m.CredencialPageModule)
  },
  {
    path: 'solicitacao',
    loadChildren: () => import('./page/solicitacao/solicitacao.module').then( m => m.SolicitacaoPageModule)
  },
  {
    path: 'procedimento',
    loadChildren: () => import('./page/procedimento/procedimento.module').then( m => m.ProcedimentoPageModule)
  },
  {
    path: 'acompanhamento',
    loadChildren: () => import('./page/acompanhamento/acompanhamento.module').then( m => m.AcompanhamentoPageModule)
  },
  {
    path: 'status',
    loadChildren: () => import('./admin/status/status.module').then( m => m.StatusPageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./page/contato/contato.module').then( m => m.ContatoPageModule)
  },
  {
    path: 'quemsomos',
    loadChildren: () => import('./page/quemsomos/quemsomos.module').then( m => m.QuemsomosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
