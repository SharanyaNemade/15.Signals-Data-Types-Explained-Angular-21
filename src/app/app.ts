import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-21-tutorial');
  name = "Anil Sidhu"
  age = 20


  isVisible = true;

  toggle() {
    this.isVisible = !this.isVisible;
  }

  updateName() {
    this.name = this.name === "Anil Sidhu" ? "Sharanya" : "Anil Sidhu";
  }

}
