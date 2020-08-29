import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Person } from 'src/app/Modelo/Person';
import { SelectItem } from 'primeng/api/selectitem';
import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [MessageService]
})
export class AddComponent implements OnInit {

  personNew = new Person();

  userform: FormGroup;

  submitted: boolean;

  constructor(private router: Router, private service: ServiceService,
    private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit(): void {
    this.userform = this.fb.group({
      'nombre': new FormControl('', Validators.required),
      'birth': new FormControl('', Validators.required)
    });
  }


  onSubmit(value: string) {
    this.submitted = true;
    this.Guardar();
  }

  Guardar() {
    this.service.creaPerson(this.personNew);
    alert("Se ha agregado con exito a " + this.personNew.fullName);
    this.router.navigate(["listar"]);

  }
}
