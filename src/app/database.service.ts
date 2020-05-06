import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor( private sqlite : SQLite) 
  { }

  public getDB() 
  {
    return this.sqlite.create({
    name : 'financbndes.db',
    location : 'localhost'
     })
  }

  public createDatabase() {
  return this.getDB()
    .then((db: SQLiteObject) => {

      // Criando as tabelas
      this.createTables(db);

      // Inserindo dados padrão
      this.insertDefaultItems(db);

    })
    .catch(e => console.log(e));
}

  private createTables(db: SQLiteObject)
  { db.sqlBatch([
    ['create table if not exists Solicitacao (idSolicitacao integer primary key autoincrement not null, DsRazaoSocial text not null, DsCnpj Text, DtCadastro date note null, nuValorPretendido REAL)'],
    ['create table if not exists Credencial (idUsuario integer primary key autoincrement not null, DsNome text not null, dsEmail text REAL, dsFone text not null, dsSenha text not null, dtCadastro date not null )'],
    ['create table if not exists EstadoCivil (idEstadoCivil integer primary key autoincrement not null, DsEstadoCivil text not null)'],
               ])
    .then(() => console.log('Tabelas Solicitacao, Usuario e Estado Civil geradas com sucesso.'))
    .catch(e => console.error(e));
  };
  
  private insertDefaultItems(db: SQLiteObject) {
    db.executeSql('select COUNT(id) as qtd from EstadoCivil')
    .then((data: any) => {
      //Se não existe nenhum registro
      if (data.rows.item(0).qtd == 0) {

        // Criando as tabelas
        db.sqlBatch([
          ['insert into EstadoCivil (dsEstadoCivil) values (?)', ['Casado']],
          ['insert into EstadoCivil (dsEstadoCivil) values (?)', ['Solteiro']],
          ['insert into EstadoCivil (dsEstadoCivil) values (?)', ['Viúvo']]
        ])
          .then(() => console.log('Dados padrões incluídos em EstadoCivil'))
          .catch(e => console.error('Erro ao incluir dados padrões em EstadoCivil', e));

      }
    })
    .catch(e => console.error('Erro ao consultar a qtd de Estados Civís', e));
  }

}

