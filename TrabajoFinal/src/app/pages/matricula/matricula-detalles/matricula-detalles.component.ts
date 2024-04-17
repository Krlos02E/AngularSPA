import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { CursoService } from '../../../services/curso/curso.service';

@Component({
    selector: 'app-matricula-detalles',
    templateUrl: './matricula-detalles.component.html',
    styleUrl: './matricula-detalles.component.css'
})
export class MatriculaDetallesComponent implements OnInit {

    cursoActual: any;
    cursoID: number | any;
    constructor(private router: Router, private serviceCurso: CursoService,
        private route: ActivatedRoute) {
        this.cursoID = this.route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        this.serviceCurso.getCurso(this.cursoID).subscribe(response => {
            this.cursoActual = response;
            this.cursoActual.fechaInicio = this.parseDate(this.cursoActual.fechaInicio);
            this.cursoActual.fechaFin = this.parseDate(this.cursoActual.fechaFin);

        });
    }

    onGoBack(): void {
        this.router.navigate(['/MatriculaList']);
    }

    private parseDate(dateString: string): Date {
        const parts = dateString.split('-');
        return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
    }
}
