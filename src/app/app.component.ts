import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Persons Frontend';
  items: MenuItem[];

    ngOnInit(){
        this.items=[
            {label: 'Listar', icon:'pi pi-fw pi-home', routerLink:'listar'},
            {label: 'Nuevo', icon:'pi pi-fw pi-pencil', routerLink:'add'}
        ]
    }

  constructor(private router: Router){}

}
