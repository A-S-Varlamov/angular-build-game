import {Component, ElementRef, ViewChild, OnInit, Renderer2} from '@angular/core';
import {DataService} from '../services/data.service';
import {Meter} from '../ts/meter';
import {Structure} from '../ts/structure';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.sass']
})
export class WorldComponent implements OnInit {

  @ViewChild('world', {static: true}) world: ElementRef;

  constructor(private dataService: DataService, private r: Renderer2) {
  }

  // генерация матрицы мира и отрисовка
  generate(size) {
    this.dataService.arrMapObj.length = 0;
    for (let i = 0; i < this.dataService.width; i++) {
      this.dataService.arrMapObj[i] = [];
      for (let j = 0; j < this.dataService.height; j++) {
        this.dataService.arrMapObj[i][j] = new Meter(i, j, {name: 'пусто'});
      }
    }

    // стили для css grid
    for (let i = 0; i < this.dataService.height; i++) {
      this.dataService.row += ' 1fr';
    }

    for (let j = 0; j < this.dataService.width; j++) {
      this.dataService.column += ' 1fr';
    }

    this.r.setStyle(this.world.nativeElement, 'grid-template-rows', this.dataService.row);
    this.r.setStyle(this.world.nativeElement, 'grid-template-columns', this.dataService.column);
    this.r.setStyle(this.world.nativeElement, 'width', this.dataService.width * size + 'px');
    this.r.setStyle(this.world.nativeElement, 'height', this.dataService.height * size + 'px');
  }


  clickMeter(event) {

    const x = event.target.getAttribute('coordx');
    const y = event.target.getAttribute('coordy');

    console.log(this.dataService.arrMapObj[x][y]);
    this.dataService.activeObj = this.dataService.arrMapObj[x][y];

    this.dataService.lastMeter = this.dataService.activeMeter;
    this.dataService.activeMeter = event.target;

    if (this.dataService.lastMeter !== undefined) {
      this.r.setStyle(this.dataService.lastMeter, 'border', '1px dotted #8ed240');
    }
    this.r.setStyle(event.target, 'border', '1px solid #f88');
  }

  ngOnInit() {
    this.generate(this.dataService.size);
  }

  createForest() {
    const rand = this.dataService.factory.randomInt(1, 3);
    if (this.dataService.activeObj !== undefined) {
      this.dataService.activeObj.obj = new Structure('лес', 'forest' + rand, 100);
    }
  }

  getClass( x, y ) {
    return this.dataService.arrMapObj[x][y].obj.classImage;
  }
}
