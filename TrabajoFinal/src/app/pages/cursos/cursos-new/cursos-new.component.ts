import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from '../../../services/curso/curso.service';

@Component({
  selector: 'app-cursos-new',
  templateUrl: './cursos-new.component.html',
  styleUrl: './cursos-new.component.css'
})
export class CursosNewComponent implements OnInit {


    constructor(private cursoService: CursoService, private router: Router) {}

    ngOnInit(): void {}

    onSave(curso: any): void {
        
        this.cursoService.saveCurso(curso).subscribe(
            response => {
                console.log('Matricula saved successfully:', response);
            },
            error => {
                console.error('Error saving matricula:', error);
            }
        );
        this.onGoBack();
    }

    onGoBack() : void {
        this.router.navigate(['/CursosList']);
    }
    
}
