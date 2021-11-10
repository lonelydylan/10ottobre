import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

import { PlaceholderComponent } from './placeholder/placeholder.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContainerComponent } from './container/container.component';
import { RightPanelComponent } from './right-panel/right-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PlaceholderComponent,
    ProductDetailComponent,
    ContainerComponent,
    RightPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
