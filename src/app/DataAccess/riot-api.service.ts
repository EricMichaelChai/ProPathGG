import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiotAPIService {
  readonly apiUrl: string = 'https://ddragon.leagueoflegends.com/api/versions.json'
  
  constructor(private httpClient: HttpClient) {}

  public getVersions(){
    return this.httpClient.get('https://ddragon.leagueoflegends.com/api/versions.json');
  }
}


