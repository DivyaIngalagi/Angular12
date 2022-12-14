import { Component } from '@angular/core';
import { of, Observable } from "rxjs";
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-operators';
  
  rxjsOfExample(){
   of(1, 2, 3)
   .pipe(map((x) => x * x))
   .subscribe((v) => console.log(`value: ${v}`));
  }

  rxjsFilterExample(){
    const input$ = new Observable<number>(subscriber => {
      let count = 0;
      const id = setInterval(() => {
        if (count < 10) {
          subscriber.next(++count);
        } else {
          subscriber.complete();
        }
      }, 1000);
    });
    
    input$.pipe(filter(x => x % 2 === 0)).subscribe({
      next: x => console.log(`${new Date().toLocaleTimeString()} - [filter]: ${x}`),
    });
  }
}
