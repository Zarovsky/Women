import { Component, OnInit } from '@angular/core';
import { runInThisContext } from 'vm';
import { Woman } from '../../interfaces/woman.interface';
import { WomenService } from '../../services/women.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  
})
export class ListComponent implements OnInit {
  women: Woman[] = [];

  constructor(private srvWomen: WomenService) {}

  ngOnInit(): void {
    this.srvWomen.getWomen().subscribe((women) => {
      this.women = women;
    });
  }
}
