import { Component, input } from '@angular/core';
import { RESTCountryResponse } from '../../interfaces/rest-countries.interfaces';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {
  countries = input.required<RESTCountryResponse[]>();
}
