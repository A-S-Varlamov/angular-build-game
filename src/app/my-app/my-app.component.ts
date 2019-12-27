import { Component, Input } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.sass']
})
export class MyAppComponent {

  @Input() card: Card;
  @Input() index: number;

  param = 'Добро пожаловать';
  title = '';
  mans = {
    man1 : 'Вася',
    man2 : 'Петя',
    man3 : 'Коля'
  };
  textColor: string;

  changeTitle() {
    this.mans.man1 = 'Валера';
  }

  inputHandler(value) {
    this.param = value;
  }

}
