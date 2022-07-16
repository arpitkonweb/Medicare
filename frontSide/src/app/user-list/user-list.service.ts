import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  http: HttpClient
  url = 'http://localhost:4000/login/dashboard/User'   //express port 4000

  constructor(httpClient: HttpClient) {
      this.http = httpClient
   }

   getUser()
   {
       return this.http.get(this.url)
   }

   getAllProducts() {
      return this.http.get(this.url)
    }
   deleteProduct(id: number) {
      return this.http.delete(this.url + '/' + id)
    }

}
