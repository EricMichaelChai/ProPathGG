import { Injectable } from '@angular/core';
import { RiotAPIService } from '../DataAccess/riot-api.service';

@Injectable({
  providedIn: 'root'
})
export class TftItemsCore {
  items:[
    {Name: }

  ];

  constructor(private riotApi:RiotAPIService) { }
  
  public getTest(){
    return 0;
  }
}
