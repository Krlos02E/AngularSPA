import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosListComponent } from './pages/cursos/cursos-list/cursos-list.component';
import { CursosNewComponent } from './pages/cursos/cursos-new/cursos-new.component';
import { CursosEditComponent } from './pages/cursos/cursos-edit/cursos-edit.component';
import { MatriculaListComponent } from './pages/matricula/matricula-list/matricula-list.component';
import { MatriculaDetallesComponent } from './pages/matricula/matricula-detalles/matricula-detalles.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'PaginaPrincipal',
        pathMatch: 'full'
    },
    {
        path: 'PaginaPrincipal',
        component: MainComponent
    },
    {
        path: 'CursosList',
        component: CursosListComponent
    },
    {
        path: 'CursosNew',
        component: CursosNewComponent,
    },
    {
        path: 'edit/:id',
        component: CursosEditComponent
    },
    {
        path: 'MatriculaList',
        component: MatriculaListComponent
    },
    {
        path: 'MatriculaDetalle/:id',
        component: MatriculaDetallesComponent
    },
    {
        path: 'CursoEditar/:id',
        component: CursosEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
