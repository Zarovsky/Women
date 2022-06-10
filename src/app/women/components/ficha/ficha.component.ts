import { Component, Input, OnInit } from '@angular/core';
import { Woman } from '../../interfaces/woman.interface';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styles: [`
  mat-card { margin-top:10px; }
  `]
})
export class FichaComponent implements OnInit {


  @Input() woman! : Woman;

  constructor() { }

  ngOnInit(): void {
  }

}
