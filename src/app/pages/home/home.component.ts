import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoaderService } from 'src/app/components/loader/services/loader.service';
import { Coordinates } from 'src/app/interfaces/coordinates.interface';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  country!: Country | null;
  coordinates!: Coordinates;
  label: string='Try searching for a country by name';
  formSubmitted: boolean = false;

  public countryForm = this.fb.group({
    country: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private countryService: CountryService, private loaderService: LoaderService) {}

  searchCountry(){
    this.formSubmitted=true

    if(this.countryForm.invalid){
      return;
    }

    let countryName: string = this.countryForm.value.country

    this.loaderService.start()
    this.countryService.searchCountry(countryName)
      .subscribe(resp=>{
        this.country = resp;
        let {country, code, confirmed, recovered, critical, deaths, lastChange, lastUpdate, ...coordinates} = resp
        this.coordinates=coordinates

        this.label="These are the results of your search"
      }, (err)=>{
        this.label=err.error.msg
        this.country=null
      }).add(()=>{
        this.loaderService.stop()
      })
  }
}
