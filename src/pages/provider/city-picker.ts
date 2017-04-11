/**
 * Created by zhongyuqiang on 17/2/21.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CityPickerService {

  constructor(public http: Http) {
    console.log('Hello CityPicker Provider');
  }

  getCitiesData(){
    return this.http.get('../assets/json/city-data.json')
      .toPromise()
      .then(response => response.json())
      .catch( err => {
        return Promise.reject(err)
      })

  }

}
