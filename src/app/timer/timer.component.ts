import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  timerSub = new Subscription;
  counter = interval(1000).pipe(filter(x => x % 2 === 0));

  constructor() { }

  ngOnInit(): void {
    this.timerSub = this.counter.subscribe((data) => {
      console.log(data);
    })
  }

  ngOnDestroy(): void {
    this.timerSub.unsubscribe();
  }
}
