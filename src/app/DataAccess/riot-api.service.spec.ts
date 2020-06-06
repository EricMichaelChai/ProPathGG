import { TestBed,getTestBed, fakeAsync } from '@angular/core/testing';
import { RiotAPIService } from './riot-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject } from '@angular/core';
import { async } from 'q';

describe('RiotAPIService', () => {
  let injector: TestBed;
  let service: RiotAPIService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RiotAPIService]
    });
    injector = getTestBed();
    service = injector.get(RiotAPIService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be JSON data', () =>{
  const data = ["9.8.1","9.7.2","9.7.1","9.6.1","9.5.1","9.4.1","9.3.1","9.2.1","9.1.1","8.24.1","8.23.1","8.22.1","8.21.1","8.20.1","8.19.1","8.18.2","8.18.1","8.17.1","8.16.1","8.15.1","8.14.1","8.13.1","8.12.1","8.11.1","8.10.1","8.9.1","8.8.2","8.8.1","8.7.1","8.6.1","8.5.2","8.5.1","8.4.1","8.3.1","8.2.1","8.1.1","7.24.2","7.24.1","7.23.1","7.22.1","7.21.1","7.20.3","7.20.2","7.20.1","7.19.1","7.18.1","7.17.2","7.17.1","7.16.1","7.15.1","7.14.1","7.13.1","7.12.1","7.11.1","7.10.1","7.9.2","7.9.1","7.8.1","7.7.1","7.6.1","7.5.2","7.5.1","7.4.3","7.4.2","7.4.1","7.3.3","7.3.2","7.3.1","7.2.1","7.1.1","6.24.1","6.23.1","6.22.1","6.21.1","6.20.1","6.19.1","6.18.1","6.17.1","6.16.2","6.16.1","6.15.1","6.14.2","6.14.1","6.13.1","6.12.1","6.11.1","6.10.1","6.9.1","6.8.1","6.7.1","6.6.1","6.5.1","6.4.2","6.4.1","6.3.1","6.2.1","6.1.1","5.24.2","5.24.1","5.23.1","5.22.3","5.22.2","5.22.1","5.21.1","5.20.1","5.19.1","5.18.1","5.17.1","5.16.1","5.15.1","5.14.1","5.13.1","5.12.1","5.11.1","5.10.1","5.9.1","5.8.1","5.7.2","5.7.1","5.6.2","5.6.1","5.5.3","5.5.2","5.5.1","5.4.1","5.3.1","5.2.2","5.2.1","5.1.2","5.1.1","4.21.5","4.21.4","4.21.3","4.21.1","4.20.2","4.20.1","4.19.3","4.19.2","4.18.1","4.17.1","4.16.1","4.15.1","4.14.2","4.13.1","4.12.2","4.12.1","4.11.3","4.10.7","4.10.2","4.9.1","4.8.3","4.8.2","4.8.1","4.7.16","4.7.9","4.7.8","4.6.3","4.5.4","4.4.3","4.4.2","4.3.18","4.3.12","4.3.10","4.3.4","4.3.2","4.2.6","4.2.5","4.2.1","4.1.43","4.1.41","4.1.13","4.1.9","4.1.2","3.15.5","3.15.4","3.15.2","3.14.41","3.14.23","3.14.22","3.14.20","3.14.19","3.14.16","3.14.13","3.14.12","3.13.24","3.13.8","3.13.6","3.13.1","3.12.37","3.12.36","3.12.34","3.12.33","3.12.26","3.12.24","3.12.2","3.11.4","3.11.2","3.10.6","3.10.3","3.10.2","3.9.7","3.9.5","3.9.4","3.8.5","3.8.3","3.8.1","3.7.9","3.7.2","3.7.1","3.6.15","3.6.14","0.154.3","0.154.2","0.153.2","0.152.115","0.152.108","0.152.107","0.152.55","0.151.101","0.151.2","lolpatch_7.20","lolpatch_7.19","lolpatch_7.18","lolpatch_7.17","lolpatch_7.16","lolpatch_7.15","lolpatch_7.14","lolpatch_7.13","lolpatch_7.12","lolpatch_7.11","lolpatch_7.10","lolpatch_7.9","lolpatch_7.8","lolpatch_7.7","lolpatch_7.6","lolpatch_7.5","lolpatch_7.4","lolpatch_7.3","lolpatch_7.2","lolpatch_7.1","lolpatch_6.24","lolpatch_6.23","lolpatch_6.22","lolpatch_6.21","lolpatch_6.20","lolpatch_6.19","lolpatch_6.18","lolpatch_6.17","lolpatch_6.16","lolpatch_6.15","lolpatch_6.14","lolpatch_6.13","lolpatch_6.12","lolpatch_6.11","lolpatch_6.10","lolpatch_6.9","lolpatch_6.8","lolpatch_6.7","lolpatch_6.6","lolpatch_6.5","lolpatch_6.4","lolpatch_6.3","lolpatch_6.2","lolpatch_6.1","lolpatch_5.24","lolpatch_5.23","lolpatch_5.22","lolpatch_5.21","lolpatch_5.20","lolpatch_5.19","lolpatch_5.18","lolpatch_5.17","lolpatch_5.16","lolpatch_5.15","lolpatch_5.14","lolpatch_5.13","lolpatch_5.12","lolpatch_5.11","lolpatch_5.10","lolpatch_5.9","lolpatch_5.8","lolpatch_5.7","lolpatch_5.6","lolpatch_5.5","lolpatch_5.4","lolpatch_5.3","lolpatch_5.2","lolpatch_5.1","lolpatch_4.21","lolpatch_4.20","lolpatch_4.19","lolpatch_4.18","lolpatch_4.17","lolpatch_4.16","lolpatch_4.15","lolpatch_4.14","lolpatch_4.13","lolpatch_4.12","lolpatch_4.11","lolpatch_4.10","lolpatch_4.9","lolpatch_4.8","lolpatch_4.7","lolpatch_4.6","lolpatch_4.5","lolpatch_4.4","lolpatch_4.3","lolpatch_4.2","lolpatch_4.1","lolpatch_3.15","lolpatch_3.14","lolpatch_3.13","lolpatch_3.12","lolpatch_3.11","lolpatch_3.10","lolpatch_3.9","lolpatch_3.8","lolpatch_3.7"];
  let dataResponse;
  service.getVersions().subscribe((response)=>{
    console.log(response);
    dataResponse = response;


  })

  httpMock.expectOne('https://ddragon.leagueoflegends.com/api/versions.json').flush(data);
  expect(dataResponse).toEqual(data);
});

// afterEach(() => {
//   httpMock.verify();
// });
});