import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nim: string;
  nama: string;
  prodi: string;
  kelas: string;

  public GETSiswa: any;
  public deletesiswa: any;
  public 
  constructor(
    private http: HttpClient
  ) { }


  ionViewWillEnter() {
    this._Getdata();
  }

  
  _Getdata() {
    let data: Observable<any>;
    data = this.http.get('http://localhost/api/backend/index.php/api/GET_DATA');
    data.subscribe(result => {
      this.GETSiswa = result;
      console.log(result);
    });
  }


  deletedata(id) {
    let data: Observable<any>;
    data = this.http.get('http://localhost/ionic/backend/index.php/api/DELETE_DATA/' + id);
    data.subscribe(result => {
      this.deletesiswa = result;
      if (result.status === 'Ok') {
        alert("Delete Data Successfully");
        this.ionViewWillEnter();
      }
    });
  }




  



}
