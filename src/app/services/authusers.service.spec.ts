import { TestBed } from '@angular/core/testing';

import { AuthusersService } from './authusers.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

describe('AuthusersService', () => {
  let service: AuthusersService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  var originalTimeout;

  


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthusersService
      ]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AuthusersService);
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(() => {
    httpTestingController.verify(); 
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("should work", function(done){
    var data={'email':'test@gmail.com','password':'test@123'}
    service.authuserlogin(data).subscribe(data => {
      console.log(data);
      done();
    });
  });
  
});
