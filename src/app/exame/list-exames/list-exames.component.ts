import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { ExameService } from '../exame.service';
import { Exame } from '../exame';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-list-exames',
  templateUrl: './list-exames.component.html',
  styleUrls: ['./list-exames.component.css']
})
export class ListExamesComponent implements OnInit {

  message: string;
  exames: Array<any> = [];
  private id: number;
  private id2: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ExameService,
    private api: ApiService) {
  }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.id2 = params['id2'];
    });

    this.service.getAll().subscribe(data => {
      this.exames = data;});

  }

  getExames() {
    this.exames = this.service.getAll();
  }

  reload(){
    alert('Apagado com sucesso!');
    window.location.reload();
  }

  show(id) {
    this.service.clearMessage();
    this.router.navigate(['/pacientes/'+this.id+'/exames', this.id2]);
    return false;
  }

  edit(id) {
    this.service.clearMessage();
    this.router.navigate(['/pacientes/'+this.id+'/exames/edit/', this.id2]);
    return false;
  }
}
