import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecursosService } from 'src/app/services/recursos/recursos.service';
import { Tag } from 'src/app/models/tag';
import { TagsService } from 'src/app/services/tags/tags.service';

@Component({
  selector: 'app-profe-recursos-create',
  templateUrl: './profe-recursos-create.component.html',
  styleUrls: ['./profe-recursos-create.component.scss']
})
export class ProfeRecursosCreateComponent implements OnInit {

  public user;

  public selectedFile: File = null;
  public uploadForm: FormGroup;

  public forma = 'linea';
  public text;

  public preX;
  public preY;

  private _tags: Tag[];

  @ViewChild('myCanvas', { static: false }) 
  myCanvas: ElementRef<HTMLCanvasElement>;
  public ctx: CanvasRenderingContext2D;

  constructor(private router: Router, private recursService: RecursosService, private formBuilder: FormBuilder, private tagService: TagsService) {
    this.checkUserLogged();
    this.tagService.getTags();
    this.tagService.tags.subscribe(
      (originalTags: Tag[]) => {
        this._tags = originalTags;
      }
    );
    this.uploadForm = this.formBuilder.group({
      file: [''],
      titol: [],
      descripcio: [],
      explicacio: [],
      categoria: [],
      etiquetes: this.formBuilder.array([]),
      selVideorecurs: 1,
      videorecurs: [],
      selDisponibilitat: 1,
      disponibilitat: [],
      propietari: [],
      lineWidth:  3,
      strokeStyle: '#0000ff',
      fillStyle: '#ff0000',
    });
    this.setPropietari();
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
        this.ctx = this.myCanvas.nativeElement.getContext('2d');
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

  onCBChange(e) {
    const tabsCB: FormArray = this.uploadForm.get('etiquetes') as FormArray;
    if (e.target.checked) {
      tabsCB.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      tabsCB.controls.forEach(
        (item: FormControl) => {
          if (item.value == e.target.value) {
            tabsCB.removeAt(i);
            return;
          }
          i++;
        }
      );
    }
  }

  newRecurs(){
    if (this.uploadForm.controls['selVideorecurs'].value == 4){
      let dataUrl = this.myCanvas.nativeElement.toDataURL();
      console.log(dataUrl);
      this.uploadForm.controls['videorecurs'].setValue(dataUrl);
    }
    const tagsCB: FormArray = this.uploadForm.controls['etiquetes'] as FormArray;
    tagsCB.controls.forEach(
      (cbelem) => {
        console.log(cbelem.value);
      }
    );
    console.log(tagsCB.value);
    this.recursService.newRecurs(this.uploadForm);
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
