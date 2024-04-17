import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CursosListComponent } from './pages/cursos/cursos-list/cursos-list.component';
import { CursosNewComponent } from './pages/cursos/cursos-new/cursos-new.component';
import { CursosEditComponent } from './pages/cursos/cursos-edit/cursos-edit.component';
import { MatriculaListComponent } from './pages/matricula/matricula-list/matricula-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { register } from 'swiper/element/bundle';
import { MatriculaDetallesComponent } from './pages/matricula/matricula-detalles/matricula-detalles.component';
import { MainComponent } from './pages/main/main.component';

register();
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        CursosListComponent,
        CursosNewComponent,
        CursosEditComponent,
        MatriculaListComponent,
        MatriculaDetallesComponent,
        MainComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
