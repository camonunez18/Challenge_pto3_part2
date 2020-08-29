import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Person } from 'src/app/Modelo/Person';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [ConfirmationService]
})

export class ListarComponent implements OnInit, AfterViewInit {

  people: Person[];
  constructor(private service: ServiceService, private router: Router,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.people = [{
      id: 123,
      fullName: "hola",
      birth: "12/12/12"
    }, {
      id: 123,
      fullName: "hola2",
      birth: "06/06/06"
    }
    ];
    this.service.getPeople()
      .subscribe(data => {
        this.people = data
      });
  }

  ngAfterViewInit() {
    this.people.push({
      id: 123123,
      fullName: "Camilo",
      birth: "07/07/07"
    });
  }

  Eliminar(personDelete: Person) {
    console.log("Entre a eliminar");
    this.confirmationService.confirm({
      message: 'Seguro que desea eliminar la persona' + personDelete.fullName,
      header: 'Confirmación eliminación',
      icon: 'pi pi-exclamation-circle',
      accept: () => {
        console.log("Mensaje: " + JSON.stringify(personDelete));
        this.people = this.people.filter(p => p !== personDelete);
        this.service.deletePerson(personDelete);
        this.people = this.people.filter(p => p !== personDelete);
        alert("Se ha eliminado la persona: " + personDelete.fullName);

      }
    });
  }
}
