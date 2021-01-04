import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookDetail } from './book-detail.model';

@Injectable({
  providedIn: 'root'
})
export class bookdetailServices {
  formData: BookDetail = new BookDetail();
  readonly baseUrl = " http://localhost:65029/api/BookTest";
  list: BookDetail[];
  constructor(private http: HttpClient) { }
  postBookDetail() {
    return this.http.post(this.baseUrl, this.formData);
  }
  putBookDetail() {
    return this.http.put(`${this.baseUrl}/${this.formData.bookId}`, this.formData);
  }
  deletebookDetail(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  refreshList() {
    return this.http.get(this.baseUrl)
      .toPromise()
      .then(res => this.list = res as BookDetail[]);
  }
}
