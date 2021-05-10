import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor(private http: HttpClient) {
    
  }

  getClients(filter = null) {
    return this.http.get(
      'https://localhost:5001/listaClientes?' + this.jsonToQueryString(filter)
    );
  }

  deletClients(clientId) {
    return this.http.delete(
      'https://localhost:5001/listaClientes/' + clientId,
      {headers: {'Access-Control-Allow-Origin': '*'}}
    );
  }

  jsonToQueryString(filter) {
    let myquery = '';
    for (let entry in filter) {
      if(filter[entry] != '' && filter[entry] != null) {
        console.log(filter[entry])
        myquery += entry + '=' + encodeURIComponent(filter[entry]) + '&';
      }
      
    }
    myquery = myquery.substring(0, myquery.length - 1);
    return myquery;
  }
}
