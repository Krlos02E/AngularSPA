import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { IMatricula } from '../../models/matricula.interface';

@Injectable({
    providedIn: 'root'
})
export class MatriculaService {

    constructor(private httpClient: HttpClient) { }

    private API_URL: string = environment.API_MATRICULA;
    private TOKEN: string = "HCXxsUKmJkG30ZD1QhipboslqMroPkSPWWw";


    getCursosMatriculados() {
        return this.httpClient.get(`${this.API_URL}`);
    }

    saveCursoMatriculado(data: IMatricula) {
        return this.httpClient.post(this.API_URL, data, {
            headers: {
                'Authorization': `Bearer ${this.TOKEN}`,
                'Content-Type': 'application/json'
            }
        })
    }

    deleteCursoMatriculado(id: number) {
        return this.httpClient.delete(`${this.API_URL}/${id}`, {
            headers: {
                'Authorization': `Bearer ${this.TOKEN}`,
                'Content-Type': 'application/json'
            }
        })
    }
    

}
