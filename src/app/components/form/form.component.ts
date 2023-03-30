import { DiscoService } from './../../service/disco.service';
import { Component, OnInit } from '@angular/core';
import { Disco } from 'src/app/shared/disco';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  disco: Disco = new Disco();
  discosUpdated: Disco[] = [];

  constructor(
    private discoService: DiscoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.discosUpdated = this.discoService.discos;
  }

  public updateDiscos(): void {
    this.discoService.actualizarDiscos(this.disco);
    this.router.navigate(['/']);
  }

}
