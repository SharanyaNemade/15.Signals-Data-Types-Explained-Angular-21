import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  count = 0;

  counter(action: string) {
    if (action == 'minus') {
      this.count > 0 && this.count--
    }
    else
    {
      this.count++
    }
    //this.showUserName();
  }


  showUserName()
  {
    alert("Hello")
  }
}
