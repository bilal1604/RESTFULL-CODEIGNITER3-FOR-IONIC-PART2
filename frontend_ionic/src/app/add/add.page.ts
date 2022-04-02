import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  nim: string;
  nama: string;
  prodi: string;
  kelas: string;

  public POSTData: any;
  constructor(
    private http: HttpClient,
    private toast: ToastController
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submit() {

    if(this.nim!=null && this.nama!=null && this.prodi!=null && this.kelas!=null){
        this._Postdata();
        console.log(this.nim, this.nama,this.prodi, this.kelas);
        this.nim="";
        this.nama="";
        this.prodi="";
        this.kelas="";
        alert("Create Data Successfully");
    }else{
        alert("Data harus lengkap !");
    }
    
      
    
  }

  _Postdata() {
    let data: Observable<any>;
    data = this.http.get('http://localhost/ionic/backend/index.php/api/POST_DATA/' + this.nim + '/' + this.nama + '/' + this.prodi + '/' + this.kelas);
    data.subscribe(result => {
      this.POSTData = result;
      console.log(result);
      if (result.status === 'Ok') {
        alert("Create Data Successfully");
      }
    });
  }
}

