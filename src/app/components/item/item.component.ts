import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() tarea: Tarea;
  
  constructor(private prSvc: ServiceService) { }

  ngOnInit(): void { }

  eliminar(): void {
    // Filtro lista de tareas de acuerdo a la posicion 
    this.prSvc.tareas = this.prSvc.tareas.filter(cadaTarea => cadaTarea !== this.tarea);
    // this.prSvc.tareas.
  }

}
