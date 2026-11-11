import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-data-type-signals',
  styleUrl: './data-type-signals.css',
  templateUrl: './data-type-signals.html',
})
export class DataTypeSignals {
  data:WritableSignal<string> = signal<string>("anil");
  users:WritableSignal<string[]>=signal(['anil','sidhu','peter'])
  speed:Signal<number> = computed<number>(() => 90)


  handleData(){
    this.data.set("Sidhu");
    this.users.update((item) => [...item,'bruce','oberdaya'])
    console.log(this.users());
  }
}
