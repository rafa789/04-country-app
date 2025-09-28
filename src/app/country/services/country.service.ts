import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountryResponse } from '../interfaces/rest-countries.interfaces';


const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);

  searchByCapital(query: string) {
    query = query.trim().toLowerCase();

    return this.http.get<RESTCountryResponse[]>(`${API_URL}/capital/${query}`);

  }

}
