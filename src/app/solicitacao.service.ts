import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { DecimalPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

  export class SolicitacaoService {

  constructor(private dbProvider: DatabaseService) { }

  public async insert(solicitacao: SolicitacaoData) {
    try {
      const db = await this.dbProvider.getDB();
      let sql = 'insert into Solicitaco (DsRazaoSocial, DsCnpj, DtCadastro, NuValorPretendido) values (?, ?, ?, ?, ?)';
      let data = [solicitacao.DsRazaoSocial, solicitacao.DsCnpj, solicitacao.DtCadastro, solicitacao.NuValorPretendido];
      try {
        return db.executeSql(sql, data);
      }
      catch (e) {
        return console.error(e);
      }
    }
    catch (e_1) {
      return console.error(e_1);
    }
  }

  public async update(solicitacao: SolicitacaoData) {
    try {
      const db = await this.dbProvider.getDB();
      let sql = 'update solicitacao set dsRazaoSocial = ?, DsCnpj = ?, DtCadastro = ?, NuvalorPretendido = ?  where idSolicitacao = ?';
      let data = [solicitacao.DsRazaoSocial, solicitacao.DsCnpj, solicitacao.DtCadastro, solicitacao.NuValorPretendido];
      try {
        return db.executeSql(sql, data);
      }
      catch (e) {
        return console.error(e);
      }
    }
    catch (e) {
      return console.error(e);
    }
  }

  public async remove(idSolicitacao: number) {
    try {
      const db = await this.dbProvider.getDB();
      let sql = 'delete from Solicitacao where idSolicitacao = ?';
      let data = [idSolicitacao];
      try {
        return db.executeSql(sql, data);
      }
      catch (e) {
        return console.error(e);
      }
    }
    catch (e) {
      return console.error(e);
    }
  }

  public async get(idSolicitacao: number) {
    try {
      const db = await this.dbProvider.getDB();
      let sql = 'select * from solicitacao where id = ?';
      let data = [idSolicitacao];
      try {
        const data_1 = await db.executeSql(sql, data);
        if (data_1.rows.length > 0) {
          let item = data_1.rows.item(0);
          let solicitacao = new SolicitacaoData();
          solicitacao.idSolicitacao = item.idSolicitacao;
          solicitacao.DsRazaoSocial = item.DsRazaoSocial;
          solicitacao.DsCnpj = item.DsCnpj;
          solicitacao.DtCadastro = item.DtCadastro;
          solicitacao.NuValorPretendido = item.NuValorPretendido;
          return solicitacao;
        }
        return null;
      }
      catch (e) {
        return console.error(e);
      }
    }
    catch (e) {
      return console.error(e);
    }
  }

  public async getAll(textSearch: string = null) {
    try {
      const db = await this.dbProvider.getDB();
      let sql = 'SELECT s.idSolicitacao, s.DsRazaoSocial, s.DsCnpj, s.DtCadastro, s.NuValorPretendido from Solicitacao s';
      var data: any[];
      // filtrando pelo nome
      if (textSearch) {
        sql += ' and s.dsRazaoSocial like ?';
        data.push('%' + textSearch + '%');
      }
      try {
        const data_1 = await db.executeSql(sql, data);
        if (data_1.rows.length > 0) {
          let solic: any[] = [];
          for (var i = 0; i < data_1.rows.length; i++) {
            var solicitacao = data_1.rows.item(i);
            solic.push(solicitacao);
          }
          return SolicitacaoData;
        }
        else {
          return [];
        }
      }
      catch (e) {
        return console.error(e);
      }
    }
    catch (e) {
      return console.error(e);
    }
  }
}

export class SolicitacaoData {
  idSolicitacao: number;
  DsRazaoSocial: string;
  DsCnpj: string;
  DtCadastro: Date;
  NuValorPretendido: DecimalPipe;
}
