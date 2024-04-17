import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router'
import { CursoService } from '../../../services/curso/curso.service';

@Component({
    selector: 'app-cursos-edit',
    templateUrl: './cursos-edit.component.html',
    styleUrl: './cursos-edit.component.css',
    providers: [DatePipe]
})
export class CursosEditComponent implements OnInit {

    cursoActual: any;
    cursoID: number | any;
    constructor(private router: Router, private datePipe: DatePipe,
        private serviceCurso: CursoService, private route: ActivatedRoute) {
        this.cursoID = this.route.snapshot.paramMap.get('id');

    }

    ngOnInit() {
        this.serviceCurso.getCurso(this.cursoID).subscribe(response => {
            this.cursoActual = response;
            this.cursoActual.fechaInicio = this.datePipe.transform(this.parseDate(this.cursoActual.fechaInicio),'yyyy-MM-dd');
            this.cursoActual.fechaFin = this.datePipe.transform(this.parseDate(this.cursoActual.fechaFin),'yyyy-MM-dd');
        });
    }

    onEdit(curso :any) {
        curso.id = this.cursoID;
        curso.fechaInicio = this.datePipe.transform(curso.fechaInicio,'dd-MM-yyyy');
        curso.fechaFin = this.datePipe.transform(curso.fechaFin,'dd-MM-yyyy');
        console.log(curso);
        this.serviceCurso.editCurso(curso).subscribe(response => {
            this.router.navigate(['/CursosList']);
        })
    }

    onGoBack(): void {
        this.router.navigate(['/CursosList']);
    }

    private parseDate(dateString: string): Date {
        const parts = dateString.split('-');
        console.log(parts)
        return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
    }

}
