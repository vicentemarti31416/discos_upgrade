import { DiscoService } from './../../service/disco.service';
import { Disco } from './../../shared/disco';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  discos: Disco[] = [];

  constructor(
    private discoService: DiscoService
  ) {}

  ngOnInit(): void {
    this.discos = this.discoService.discos;
  }

}
