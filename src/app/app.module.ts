import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderCategoryComponent } from './slider-category/slider-category.component';
import { TopRatedProductComponent } from './top-rated-product/top-rated-product.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderCategoryComponent,
    TopRatedProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
