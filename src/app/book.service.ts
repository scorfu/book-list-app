import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs'; //used for async requests

@Injectable({
  providedIn: 'root'
})
export class BookService {

private apiUrl = 'https://localhost:7163';

  constructor(private httpClienttt: HttpClient) { }

getBooks(): Observable<Book[]> {
  return this.httpClienttt.get<Book[]>(this.apiUrl);
}
}
