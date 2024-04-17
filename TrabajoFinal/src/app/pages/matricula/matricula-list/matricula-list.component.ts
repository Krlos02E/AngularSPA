import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'
import { MatriculaService } from '../../../services/matricula/matricula.service';
import { ICurso } from '../../../models/curso.interface';
import { CursoService } from '../../../services/curso/curso.service';
import { IMatricula } from '../../../models/matricula.interface';

@Component({
  selector: 'app-matricula-list',
  templateUrl: './matricula-list.component.html',
  styleUrl: './matricula-list.component.css'
})
export class MatriculaListComponent implements OnInit {

    constructor(private router: Router, private serviceMatricula: MatriculaService) { }

    listaMatriculados: IMatricula[] = [];

    ngOnInit(): void {
        this.getCursosInit();
    }

    getCursosInit(): void {
        this.serviceMatricula.getCursosMatriculados().subscribe(response => {
            this.listaMatriculados = response as IMatricula[];
        });
    }

    onDetalle(cursoMatricula: IMatricula) : void {
        this.router.navigate(['/MatriculaDetalle', cursoMatricula.idCurso]);
    }

    onDelete(curso: any): void {
        const isConfirmed = window.confirm(`¿Está seguro de que desea salir del curso ${curso.nombre}?`);
        if (!isConfirmed) return;
        const { id } = curso;
        this.serviceMatricula.deleteCursoMatriculado(id).subscribe(
            response => {
                console.log('Matricula deleted successfully:');
            },
            error => {
                console.error('Error deleting matricula:', error);
            }
            
        );
        this.getCursosInit();
    }

    tipoCurso(tipoVerificar: string, codigoActual: string): boolean {
        return codigoActual === tipoVerificar;
    }

    onGoToCursos(){
        this.router.navigate(['/CursosList']);
    }

}
