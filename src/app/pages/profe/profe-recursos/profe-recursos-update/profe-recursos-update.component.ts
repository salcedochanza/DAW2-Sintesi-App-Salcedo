import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tag } from 'src/app/models/tag';
import { RecursosService } from 'src/app/services/recursos/recursos.service';
import { TagsService } from 'src/app/services/tags/tags.service';

@Component({
  selector: 'app-profe-recursos-update',
  templateUrl: './profe-recursos-update.component.html',
  styleUrls: ['./profe-recursos-update.component.scss']
})
export class ProfeRecursosUpdateComponent implements OnInit {

  public user;

  public selectedFile: File = null;
  public uploadForm: FormGroup;

  public forma = 'linea';
  public text;

  public preX;
  public preY;

  private _tags: Tag[];

  public id: string;
  public titol: string;
  public descripcio: string;
  public explicacio: string;
  public categoria: string;
  public tipus_disponibilitat: string;
  public disponibilitat: string;
  public tipus: string;
  public canvas: string;
  public videorecurs: string;
  public propietari: string;

  @ViewChild('myCanvas', { static: false }) 
  myCanvas: ElementRef<HTMLCanvasElement>;
  public ctx: CanvasRenderingContext2D;

  constructor(private router: Router, private recursService: RecursosService, private formBuilder: FormBuilder, private tagService: TagsService, private activatedRoute: ActivatedRoute) {
    this.checkUserLogged();
    this.uploadForm = this.formBuilder.group({
      file: [''],
      id: [],
      titol: [],
      descripcio: [],
      explicacio: [],
      categoria: [],
      etiquetes: [],
      selVideorecurs: [],
      videorecurs: [],
      selDisponibilitat: [],
      disponibilitat: [],
      propietari: [],
      lineWidth:  3,
      strokeStyle: '#0000ff',
      fillStyle: '#ff0000',
    });
    let id: string;
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        if (params['id'] != null ) {
          id = params['id'];
          this.recursService.getRecurs(id).subscribe(
            (result:any) => {
              console.log(result);
              console.log(result.recurs[0].titol);
              this.uploadForm.controls['id'].setValue(result.recurs[0].id);
              this.uploadForm.controls['titol'].setValue(result.recurs[0].titol);
              this.uploadForm.controls['descripcio'].setValue(result.recurs[0].descripcio);
              this.uploadForm.controls['explicacio'].setValue(result.recurs[0].explicacio);
              this.uploadForm.controls['categoria'].setValue(result.recurs[0].categoria);
              this.uploadForm.controls['selDisponibilitat'].setValue(result.recurs[0].tipus_disponibilitat);
              this.uploadForm.controls['disponibilitat'].setValue(result.recurs[0].disponibilitat);
              this.uploadForm.controls['selVideorecurs'].setValue(result.recurs[0].tipus);
              if (result.recurs[0].tipus == 4){
                this.knowVideorecurs();
                this.uploadForm.controls['videorecurs'].setValue("data:image/png;base64," + result.recurs[0].canvas);
              } else {
                this.uploadForm.controls['videorecurs'].setValue(result.recurs[0].videorecurs);
              }
              localStorage.setItem('token', JSON.stringify(result.token));
            }, (error: any) => {
              localStorage.setItem('token', JSON.stringify(error.error.token));
              alert(error.error.message);
            }
          );
        } 
      }
    );

    this.tagService.getTags();
    this.tagService.tags.subscribe(
      (originalTags: Tag[]) => {
        this._tags = originalTags;
      }
    );
  }
  
  ngOnInit(): void {
  }

  get tags(): Tag[] {
    return this._tags;
  }

  changeLinea(){
    this.forma = "linea";
  }
  changeQuadrat(){
    this.forma = "quadrat";
  }
  changeQuadratPle(){
    this.forma = "quadratPle";
  }
  changeCercle(){
    this.forma = "cercle";
  }
  changeCerclePle(){
    this.forma = "cerclePle";
  }
  changeText(){
    this.forma = "text";
    this.text = prompt("Que vols escriure?", "Text de exemple");
  }

  changeBorrar(){
    this.forma = "borrar";
  }

  borrarCanvas(){
    this.ctx.clearRect(0,0,this.myCanvas.nativeElement.width,this.myCanvas.nativeElement.height);
  }

  knowVideorecurs(){
    if (this.uploadForm.controls['selVideorecurs'].value == 4){
      setTimeout(() => {
        console.log(this.uploadForm.controls['videorecurs'].value);
        this.ctx = this.myCanvas.nativeElement.getContext('2d');
        
        var xurro='iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAACXklEQVR4nO3WMWqFUBRFUYfuzP7QTJMiKQPbI5G14Ba2B/bD4wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAetfpnLvjuMF1Hsd1OefSO58u+6U8WM7dcOfTZb/Urwfrczz+G+3cv73P4cG623UaGQpaGjAyNLQ0YGRoaGnAyNDQ0oCRoaGlASNDQ0sDRoaGlgaMDA0tDRgZGloaMDI0tDRgZGhoacDI0NDSgJGhoaUBI0NDSwNGhoaWBowMDS0NGBkaWhowMjS0NGBkaGhpwMjQ0NKAkaGhpQEjQ0NLA0aGhpYGjAwNLQ0YGRpaGjAyNLQ0YGRoaGnAyNDQ0oCRoaGlASNDQ0sDRoaGlgaMDA0tDRgZGloaMDI0tDRgZGhoacDI0NDSgJGhoaUBI0NDSwNGhoaWBowMDS0NGBkaWhowMjS0NGBkaGhpwMjQ0NKAkaGhpQEjQ0NLA0aGhpYGjAwNLQ0YGRpaGjAyNLQ0YGRoaGnAyNDQ0oCRoaGlASNDQ0sDRoaGlgaMDA0tDRgZGloaMDI0tDRgZGhoacDI0NDSgJGhoaUBI0NDSwNGhoaWBowMDS0NGBkaWhowMjS0NGBkaGhpwMjQ0NKAkaGhpQEjQ0NLA0aGhpYGjAwNLQ0YGRpaGjAyNLQ0YGRoaGnAyNDQ0oCRoaGlASNDQ0sDRoaGlgZ+jfz5/nbO/f0+hwfrbtf5Y2TnXHPn02W/lAfLuRvufLrsl3r8N9q5lx4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFD4AlytCCXCd4kBAAAAAElFTkSuQmCC';
        var img=new Image();
        img.src=this.uploadForm.controls['videorecurs'].value;
        let ctx=this.ctx;
        img.onload=function(){  //aqui THIS és img
          ctx.drawImage(img, 0, 0);
        };
        // this.ctx.drawImage(this.uploadForm.controls['videorecurs'].value, 0, 0);
      }, 100);
    }
  }

  comensarDibuix(evt){
    var mousePos = this.oMousePos(this.myCanvas.nativeElement, evt);
    if (this.forma == "linea"){
      this.ctx.beginPath();
      this.ctx.lineWidth = this.uploadForm.controls['lineWidth'].value;
      this.ctx.strokeStyle = this.uploadForm.controls['strokeStyle'].value;
      this.ctx.moveTo(mousePos.x, mousePos.y);
    } else if (this.forma == "quadrat"){
      this.ctx.beginPath();
      this.ctx.lineWidth = this.uploadForm.controls['lineWidth'].value;
      this.ctx.strokeStyle = this.uploadForm.controls['strokeStyle'].value;
      this.preX=mousePos.x;
      this.preY=mousePos.y;
      this.ctx.moveTo(mousePos.x, mousePos.y);
    } else if (this.forma == "quadratPle"){
      this.ctx.beginPath();
      this.ctx.lineWidth = this.uploadForm.controls['lineWidth'].value;
      this.preX=mousePos.x;
      this.preY=mousePos.y;
      this.ctx.moveTo(mousePos.x, mousePos.y);
    } else if (this.forma == "cercle"){
      this.ctx.moveTo(mousePos.x, mousePos.y);
      this.ctx.beginPath();
      this.ctx.lineWidth = this.uploadForm.controls['lineWidth'].value;
      this.ctx.strokeStyle = this.uploadForm.controls['strokeStyle'].value;
      this.preX=mousePos.x;
      this.preY=mousePos.y;
    } else if (this.forma == "cerclePle"){
      this.ctx.moveTo(mousePos.x, mousePos.y);
      this.ctx.beginPath();
      this.ctx.lineWidth = this.uploadForm.controls['lineWidth'].value;
      this.ctx.strokeStyle = this.uploadForm.controls['strokeStyle'].value;
      this.preX=mousePos.x;
      this.preY=mousePos.y;
    } else if (this.forma == "text"){
      this.ctx.font = "20px Arial";
      this.ctx.fillText(this.text, mousePos.x, mousePos.y);
    } else if (this.forma == "borrar"){
      this.preX=mousePos.x;
      this.preY=mousePos.y;
    }
  }

  acabarDibuix(evt){
    var mousePos = this.oMousePos(this.myCanvas.nativeElement, evt);
    if (this.forma == "linea"){
      this.ctx.lineTo(mousePos.x, mousePos.y);
      this.ctx.stroke();
    } else if (this.forma == "quadrat"){
      this.ctx.rect(mousePos.x, mousePos.y, this.preX - mousePos.x, this.preY - mousePos.y);
      this.ctx.stroke();
    } else if (this.forma == "quadratPle"){
      this.ctx.rect(mousePos.x, mousePos.y, this.preX - mousePos.x, this.preY - mousePos.y);
      this.ctx.fillStyle = this.uploadForm.controls['fillStyle'].value;
      this.ctx.fill();
    } else if (this.forma == "cercle"){
      this.ctx.arc(this.preX, this.preY, Math.abs(this.preX - mousePos.x), 0, 2 * Math.PI);
      this.ctx.stroke();
    } else if (this.forma == "cerclePle"){
      this.ctx.arc(this.preX, this.preY, Math.abs(this.preX - mousePos.x), 0, 2 * Math.PI);
      this.ctx.fillStyle = this.uploadForm.controls['fillStyle'].value;
      this.ctx.fill();
    } else if (this.forma == "borrar") {
      this.ctx.clearRect(this.preX,this.preY,this.preX - mousePos.x,this.preY - mousePos.y);
    }
  }
  
  oMousePos(canvas, evt) {
    var ClientRect = canvas.getBoundingClientRect();
    return {//objeto
        x: Math.round((evt.clientX - ClientRect.left) / (ClientRect.right - ClientRect.left) * canvas.width),
        y: Math.round((evt.clientY - ClientRect.top) / (ClientRect.bottom - ClientRect.top) * canvas.height)
    }
  }

  resetDisponibilitat(){
    this.uploadForm.controls['disponibilitat'].setValue("");
  }

  setPropietari(){
    this.uploadForm.controls['propietari'].setValue(this.user.id);
  }
  
  onFileSelected(event){
    console.log(event);
    if (event.length > 0) {
      const file = event[0];
      console.log(file);
      this.uploadForm.get('file').setValue(file);
    }
  }

  uploadRecurs(){
    if (this.uploadForm.controls['selVideorecurs'].value == 4){
      let dataUrl = this.myCanvas.nativeElement.toDataURL();
      console.log(dataUrl);
      this.uploadForm.controls['videorecurs'].setValue(dataUrl);
    }
    this.recursService.editRecurs(this.uploadForm);
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
