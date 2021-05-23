import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RecursosService } from 'src/app/services/recursos/recursos.service';

@Component({
  selector: 'app-profe-recursos-create',
  templateUrl: './profe-recursos-create.component.html',
  styleUrls: ['./profe-recursos-create.component.scss']
})
export class ProfeRecursosCreateComponent implements OnInit {

  public user;

  public selVideorecurs:number = 1;
  public selDisponibilitat:number = 1;
  
  public titol:string;
  public descripcio:string;
  public explicacio:string;
  public disponibilitat:string = "1";
  public videorecurs;
  public categoria:string;

  public selectedFile: File = null;
  public uploadForm: FormGroup;

  @ViewChild('myCanvas', { static: false }) 
  myCanvas: ElementRef<HTMLCanvasElement>;
  public ctx: CanvasRenderingContext2D;

  constructor(private router: Router, private http: HttpClient, private recursService: RecursosService, private formBuilder: FormBuilder) {
    this.checkUserLogged();
    this.uploadForm = this.formBuilder.group({
      file: [''],
      titol: [],
      descripcio: [],
      explicacio: [],
      categoria: [],
      disponibilitat: [],
    });
  }
  
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log("afterinit");
    setTimeout(() => {

        this.ctx = this.myCanvas.nativeElement.getContext('2d');
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(0, 0, 50, 50);
      
      
    }, 1000);
  }


  
  onFileSelected(event){
    console.log(event);
    if (event.length > 0) {
      const file = event[0];
      console.log(file);
      this.uploadForm.get('file').setValue(file);
    }
  }

  newRecurs(){
    // var formData: any = new FormData();
    // formData.append("file", this.uploadForm.get('file').value);
    // console.log(formData);
    this.recursService.newRecurs(this.titol, this.descripcio, this.disponibilitat, this.explicacio, this.categoria, this.uploadForm);
  }

  checkUserLogged(){
    let user = JSON.parse(localStorage.getItem('user'));
    if (user == null){
      this.router.navigate(['/login']);
    } else {
      this.getUserInfo();
      if (user.rol != 'profe'){
        this.router.navigate(['/login']);
      }
    }
  }

  getUserInfo(){
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

}
