import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  
  constructor(private activatedRoute: ActivatedRoute,
              private NavCtrl : NavController
) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  gotoCredencial() { this.NavCtrl.navigateForward('financ-bndes'); }
  gotoLogin()      { this.NavCtrl.navigateForward('login');  }

}
