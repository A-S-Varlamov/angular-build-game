import { Area } from './area';

export class AreaFactory {
  private names: string[] = ['Ангар', 'Башня', 'Вилла', 'Высотка', 'Дворец', 'Замок', 'Конюшня', 'Крепость', 'Павильон',
    'Сарай', 'Собор', 'Стадион', 'Торговый центр', 'Школа', 'Беседка', 'Вокзал', 'Гараж', 'Девятиэтажка', 'Жилой дом',
    'Изба', 'Корпус', 'Магазин', 'Музей', 'Завод', 'Силосная башня', 'Спортзал', 'Театр', 'Фабрика', 'Шалаш', 'Будка',
    'Баня', 'Бизнес центр', 'Гостиница', 'Дом', 'Загородный дом', 'Кинотеатр', 'Коттедж', 'Мегамолл', 'Небоскрёб',
    'Пятиэтажка', 'Склад', 'Спортивный комплекс', 'Теплица', 'Церковь', 'Военная база', 'Аэропорт', 'Лачуга'];

  createAreaArray(countArea: number, level: number) {
    const arr = [];
    for (let i = 0; i < countArea; i++) {
      arr.push( this.createProduct(level) );
    }
    return arr;
  }

  createProduct(level: number): Area {
    const n = this.createName(this.names);
    const l = this.randomInt(level , level + 3);
    const c = this.randomInt(level , level + 3) * this.randomInt(100 , 150);
    const bt = this.randomInt(level , level + 3 / 2) * this.randomInt(100 , 120);
    const tt = this.randomInt(level , level + 3 / 2) * this.randomInt(30 , 50);
    return new Area(n, 0, 0, l, bt, c, 0, tt, 0, 0);
  }

  randomTimeCreateProduct(chance: number, level: number) {
    if (this.randomInt(1, 100) <= chance) {
      return this.createProduct(level);
    } else {
      return false;
    }
  }

  private createName(arr): string {
    return arr[this.randomInt(0, arr.length - 1)];
  }

  public randomInt(min: number, max: number) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
}
