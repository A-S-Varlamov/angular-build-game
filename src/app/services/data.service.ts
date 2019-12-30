import {Injectable} from '@angular/core';
import {AreaFactory} from '../ts/areaFactory';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public title = 'ООО БолванСтройСервис';

  public money = 3000;
  public allMans = 2;
  public allTrucks = 1;
  public workMans = 0;
  public workTrucks = 0;
  public allMaterials = 500;

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

}
