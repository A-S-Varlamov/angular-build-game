import {Component} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.sass']
})
export class TendersComponent {

  constructor(private dataService: DataService) {
  }

  // участвовать в тендере и дать на лапу чинуше
  addRollback(obj) {
    const m = 50;
    obj.rollback += m;
    this.dataService.money -= m;
  }

}
