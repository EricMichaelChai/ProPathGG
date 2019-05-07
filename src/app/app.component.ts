import { Component } from '@angular/core';
import { RiotAPIService } from '../app/DataAccess/riot-api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProPathGG';
  posts: any;

  constructor(private http:HttpClient, private riotApi:RiotAPIService){}
  getPosts(){
    this.posts = this.riotApi.getVersions(); 
  }
}
