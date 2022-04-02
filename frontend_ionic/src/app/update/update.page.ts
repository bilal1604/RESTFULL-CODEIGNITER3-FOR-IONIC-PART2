import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  nim: string;
  nama: string;
  prodi: string;
  kelas: string;

  public PUT_DATA: any;

  constructor(
    private http: HttpClient,
    private toast: ToastController
  ) { }
  ngOnInit(): void {
    
  }




  submit() {

    if(this.nim!=null && this.nama!=null && this.prodi!=null && this.kelas!=null){
        this.PUT_Data();
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

  PUT_Data() {
    let data: Observable<any>;
    data = this.http.get('http://localhost/ionic/backend/index.php/api/PUT_DATA/' + this.nim + '/' + this.nama + '/' + this.prodi + '/' + this.kelas);
    data.subscribe(result => {
      this.PUT_DATA = result;
      console.log(result);
      if (result.status === 'Ok') {
        alert("Update Successfully");
      }
    });
  }
}
