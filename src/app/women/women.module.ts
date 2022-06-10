import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { WomanComponent } from './pages/woman/woman.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { WomenRoutingModule } from './women-routing.module';
import { FichaComponent } from './components/ficha/ficha.component';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    WomanComponent,
    HomeComponent,
    ListComponent,
    FichaComponent
  ],
  imports: [
    CommonModule,
    WomenRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class WomenModule { }
