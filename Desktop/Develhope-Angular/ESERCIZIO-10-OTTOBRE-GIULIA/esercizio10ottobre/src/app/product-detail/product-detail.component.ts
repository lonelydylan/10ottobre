import { Component, OnInit } from '@angular/core';
import { HEROES } from '../list';
import { Hero } from '../eroi';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  hero = HEROES;
  constructor() { }

  ngOnInit(): void {
  }

}
