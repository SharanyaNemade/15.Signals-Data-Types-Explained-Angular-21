import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-folder',
  template:'<h1>Inline Template {{name}}<h1>',
  styleUrl: './folder.css',
  //templateUrl: './folder.html',
})
export class Folder {
  name = "Anil Sidhu"
  email = "anil@gmail.com"

  getName(a:number,b:number){
    return a+b;
  }
}


