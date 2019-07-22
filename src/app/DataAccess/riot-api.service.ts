import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RiotAPIService {
  readonly apiUrl: string = 'https://ddragon.leagueoflegends.com/api/versions.json'
  
  constructor(private httpClient: HttpClient) {}

  public getVersions(){
    return this.httpClient.get('https://ddragon.leagueoflegends.com/api/versions.json');
  }
  public getItemData(recentVersion,itemNumber){
    return this.httpClient.get('http://ddragon.leagueoflegends.com/cdn/' + recentVersion + '/data/en_US/item.json');
  }
  public getImages(recentVersion,itemNumber){
    return this.httpClient.get('http://ddragon.leagueoflegends.com/cdn/'+ recentVersion +'/img/item/' + itemNumber +'.png')
  }
}


