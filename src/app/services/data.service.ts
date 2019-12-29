import {Injectable} from '@angular/core';
import {AreaFactory} from '../ts/areaFactory';
import {Meter} from '../ts/meter';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public money = 3000;
  public allMans = 1;
  public allTrucks = 1;
  public workMans = 0;
  public workTrucks = 0;
  public allMaterials = 0;
  public gold = 10;
  public wood = 100;
  public stone = 50;
  public food = 500;
  public horse = 1;
  public weapon = 1;

  public time = 0;
  public interval;
  public profit = 0;
  public playerLevel = 1;
  // private constructAreas = [];
  public endAreas = 0;

  public factory = new AreaFactory();
  public tenderAreas = this.factory.createAreaArray(5, this.playerLevel);
  public constructAreas = this.factory.createAreaArray(3, this.playerLevel);
  public chanceTenderCreate = 8; // шанс появления тендера в %

  public timerSpeed = 250;  // единица времени в ms
  public priceMan = 500;
  public priceTruck = 1000;
  public priceMaterial = 200;
  public countMaterial = 500;

  public arrMapObj = [];
  public activeObj = {x: 0, y: 0, obj: {name: ''}};
  public activeMeter: number;
  public lastMeter: number;
  public size = 50;
  public height = 10;
  public width = 20;
  public row = '';
  public column = '';
}
