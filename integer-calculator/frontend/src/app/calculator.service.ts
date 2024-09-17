import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private apiUrl = 'http://localhost:2000/api/calculate';

  constructor(private http: HttpClient) {}

  /**
   * Sends a request to the backend and returns the result of the calculation
   * @param operand1
   * @param operand2
   * @param operator
   */
  calculate(operand1: number, operand2: number, operator: string): Observable<{ result: number }> {
    return this.http.post<{ result: number }>(this.apiUrl, { operand1, operand2, operator });
  }
  
}
