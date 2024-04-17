import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CursoService } from '../../../services/curso/curso.service';
import { ICurso } from '../../../models/curso.interface';
import { IMatricula } from '../../../models/matricula.interface';
import { MatriculaService } from '../../../services/matricula/matricula.service';

@Component({
    selector: 'app-cursos-list',
    templateUrl: './cursos-list.component.html',
    styleUrl: './cursos-list.component.css'
})

export class CursosListComponent implements OnInit {


    listCursos: any;
    constructor(private router: Router, private serviceCurso: CursoService,
        private serviceMatricula: MatriculaService) { }

    ngOnInit(): void {
        this.getCursosInit();
    }

    getCursosInit(): void {
        this.serviceCurso.getCursos().subscribe(response => {
            this.listCursos = (response as any[]).map(curso => {
                return {
                    ...curso,
                    fechaInicio: this.parseDate(curso.fechaInicio),
                    fechaFin: this.parseDate(curso.fechaFin)
                };
            });
        });

        this.serviceMatricula.getCursosMatriculados().subscribe(response => {
            let listaMatricula = (response as IMatricula[]);
            let listaFiltrada: ICurso[] = [];
            for(let curso of (this.listCursos as ICurso[])){
                let found: boolean = false;
                for(let matricula of listaMatricula){
                    if(curso.id === matricula.idCurso){
                        found = true;
                        break;
                    }
                }
                if(!found){
                    listaFiltrada = [...listaFiltrada, curso];
                }
            }
            this.listCursos = listaFiltrada;
            console.log("Lista filtarda")
        });

    }

    onInscribir(curso: any): void {
        const isConfirmed = window.confirm(`¿Está desea inscribirse en el curso ${curso.nombre}?`);
        if(!isConfirmed) return;
        let data: IMatricula = {
            idCurso: curso.id,
            codigo: curso.codigo,
            nombre: curso.nombre,
        }
        console.log("Data creada")

        this.serviceMatricula.saveCursoMatriculado(data).subscribe(
            response => {
                console.log('Matricula saved successfully:', response);
            },
            error => {
                console.error('Error saving matricula:', error);
            }
        );
        console.log("Inscrito");
        this.getCursosInit();
    }

    onEditar(curso: ICurso){
        this.router.navigate(['/CursoEditar', curso.id]);
    }

    onDelete(curso: any) {
        const isConfirmed = window.confirm(`¿Está seguro de que desea eliminar el curso ${curso.nombre}?`);
        if (!isConfirmed) return;
        const { id } = curso;
        this.serviceCurso.deleteCurso(id).subscribe(
            response => {
                console.log('Deleted successfully:', response); 
            },
            error => {
                console.error('Error saving matricula:', error);
            }
        );
        this.getCursosInit();
    }


    private parseDate(dateString: string): Date {
        const parts = dateString.split('-');
        return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
    }

    tipoCurso(tipoVerificar: string, codigoActual: string): boolean {
        return codigoActual === tipoVerificar;
    }

}
