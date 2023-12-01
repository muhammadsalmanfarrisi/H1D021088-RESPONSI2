import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
const USERNAME = 'namasaya';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public nama = '';
  constructor(private authService: AuthenticationService, private alertController:
    AlertController, private router: Router) { }
  ngOnInit() {
    
    console.log(this.nama);
  }
   logout() {
    this.alertController.create({
      header: 'Perhatian',
      subHeader: 'Yakin Logout aplikasi ?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('Canceled', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any) => {
            //jika tekan yakin
            this.authService.logout();
            this.router.navigateByUrl('/login', { replaceUrl: true });
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }
}