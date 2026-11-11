import { Component, effect, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-effect',
  styleUrl: './effect.css',
  templateUrl: 'effect.html',
})
export class Effect {
  speed = signal(0);
  fruit = signal("apple");
  color = "black"

  constructor(){
    effect(() =>{
      if(this.speed() > 0 && this.speed() < 80){
        this.color='green'
      }

      if(this.speed() >= 80 && this.speed() < 120){
        this.color = 'orange'
      }

      if(this.speed() >= 120 && this.speed() < 200){
        this.color= 'red'
      }
      
      console.log("speed:- ",this.speed());
      
    });


    effect(() => {
      console.log(this.fruit());
    })
  }

  increaseSpeed(){
    this.speed.set(this.speed() + 10);
  }


  decreaseSpeed(){
    this.speed.set(this.speed() - 10)
  }


  Changefruit(){
    this.fruit.set('banana')
  }
}
