import { Injectable } from '@angular/core';
import { foodlocation } from './foodlocation';

@Injectable({
  providedIn: 'root'
})
export class foodService {

  url = 'http://localhost:4201/item';

  async getAllfoodLocations(): Promise<foodlocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getfoodlocationById(id: string): Promise<foodlocation | undefined> {
    const data = await fetch(`${this.url}/view-item/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }

  async create(record: any) {
    var formBody = new Array();
    for (var property in record) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(record[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    var formBodyJoin = formBody.join("&");

    const rawResponse = await fetch(`${this.url}/create-item`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBodyJoin
    });
    return await rawResponse.json() ?? {};
  }
  async deleteid(id: string): Promise<foodlocation | undefined> {
    const data = await fetch(`${this.url}/delete-item/${id}`, {
      method: 'DELETE'
    });
    return await data.json() ?? {};
  }


  async update(id: string , updates: any): Promise<foodlocation | undefined> {
    const data = await fetch(`${this.url}/update-item/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: updates
    });
    return await data.json() ?? {};
  }
  
  constructor() { }
  

}