import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule,HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render form with email and password inputs', () => {
    const element = fixture.nativeElement;

    expect(element.querySelector('form')).toBeTruthy();
    expect(element.querySelector('#email')).toBeTruthy();
    expect(element.querySelector('#password')).toBeTruthy();
    expect(element.querySelector('button')).toBeTruthy();
  });
  
  it('should return model invalid when form is empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should validate email input as required', () => {
    const email = component.form.controls.email;
  
    expect(email.valid).toBeFalsy();
    expect(email.errors.required).toBeTruthy();
  });
  it('should validate password input as required', () => {
    const password = component.form.controls.password;
  
    expect(password.valid).toBeFalsy();
    expect(password.errors.required).toBeTruthy();
  });
  it('should validate email format', () => {
    const email = component.form.controls.email;
    email.setValue('test');
    const errors = email.errors;
  
    expect(errors.required).toBeFalsy();
    expect(errors.pattern).toBeTruthy();
    expect(email.valid).toBeFalsy();
  });
});
