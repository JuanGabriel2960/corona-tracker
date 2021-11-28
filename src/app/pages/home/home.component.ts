import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Coordinates } from 'src/app/interfaces/coordinates.interface';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  countries: Country[] = [];
  coordinates!: Coordinates;
  formSubmitted: boolean = false;

  public countryForm = this.fb.group({
    country: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private countryService: CountryService) {}

  searchCountry(){
    this.formSubmitted=true

    if(this.countryForm.invalid){
      return;
    }

    const country: string = this.countryForm.value.country

    // NOTE: add loader
    this.countryService.searchCountry(country)
      .subscribe(resp=>{
        this.countries = resp;
        let {country, code, confirmed, recovered, critical, deaths, lastChange, lastUpdate, ...coordinates} = resp[0]
        this.coordinates=coordinates
      }, (err)=>{
        console.log(err.error.msg)
      })
  }

}
