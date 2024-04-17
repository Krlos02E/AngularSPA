import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurso } from '../../models/curso.interface';
import { environment } from '../../../environments/environment.development';


@Injectable({
    providedIn: 'root'
})
export class CursoService {

    private API_URL: string = environment.API_CURSOS;
    private TOKEN: string = "WEzrqt8QzdqU3YSCHvSGZzwtkJy92M02o4R";

    constructor(private httpClient: HttpClient) { }

    getCursos(){
        return this.httpClient.get(`${this.API_URL}`);
    }

    getCurso(id: number) {
        return this.httpClient.get(`${this.API_URL}/${id}`);
    }

    saveCurso(curso: ICurso){
        return this.httpClient.post(`${this.API_URL}`, curso ,{
            headers: {
                'Authorization': `Bearer ${this.TOKEN}`,
                'Content-Type': 'application/json'
            }
        })
    }

    editCurso(curso: ICurso){
        const {id} = curso;
        return this.httpClient.put(`${this.API_URL}/${id}`,curso, {
            headers: {
                'Authorization': `Bearer ${this.TOKEN}`,
                'Content-Type': 'application/json'
            }
        })
    }

    deleteCurso(id: number){
        return this.httpClient.delete(`${this.API_URL}/${id}`,{
            headers: {
                'Authorization': `Bearer ${this.TOKEN}`,
                'Content-Type': 'application/json'
            }
        })
    }

}
