import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Class } from "../../../Interfaces/class.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyClassService {
    private apiUrl = 'http://localhost:4100/api/school-class';

    constructor(private http: HttpClient) {}

    getClass(): Observable<Class[]> {
        return this.http.get<Class[]>(this.apiUrl);
    }

    assignTeacher(classId: number, teacherId: number): Observable<any> {
    return this.http.put(
        `${this.apiUrl}/${classId}/assign-teacher/${teacherId}`,
        {}
    );
    }
}