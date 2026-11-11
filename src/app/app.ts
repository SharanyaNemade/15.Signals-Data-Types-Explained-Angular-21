import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataTypeSignals } from './data-type-signals/data-type-signals';


@Component({
  imports: [RouterOutlet,DataTypeSignals],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}
