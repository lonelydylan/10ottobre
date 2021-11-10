import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Hero } from '../eroi';
import { HEROES } from '../list';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  eroi = HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;


  }
  constructor() { }

  ngOnInit(): void {
  }

}
