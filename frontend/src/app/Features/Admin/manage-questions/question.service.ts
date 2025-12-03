import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddQuestion, Question } from '../../../Interfaces/question.interface';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private apiUrl = 'http://localhost:4100/api/question';

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.apiUrl);
  }

  createQuestion(dto: AddQuestion): Observable<Question> {
    return this.http.post<Question>(this.apiUrl, dto);
  }

  updateQuestion(id: string, dto: AddQuestion): Observable<Question> {
    return this.http.put<Question>(`${this.apiUrl}/${id}`, dto);
  }
}
