import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Effect } from './effect/effect';


@Component({
  imports: [RouterOutlet,Effect],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}
