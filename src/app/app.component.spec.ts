import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  // Dois tipos:
  // querySelector : Traz o primeiro elemento que encontra no HTML
  // querySelectorAll : Traz todos os elementos que encontra no HTML


  it('Buscar a primeira div', () => {
    const element = fixture.nativeElement.querySelector('div').innerText;
    console.log("Primeira div", element);
    expect(element).toEqual('Formulário');
  });

  it('Buscar todas as divs', () => {
    const element = fixture.nativeElement.querySelectorAll("div");
    console.log("Todas as divs", element);
    expect(app).toBeTruthy();
  });

  it('Buscar elementos por css', () => {
    const element = fixture.nativeElement.querySelector(".container").innerText;
    console.log("Por css", element);
    expect(element).toEqual('Enviar');
  });

  it('Buscar elementos por id', () => {
    const element = fixture.nativeElement.querySelector("#footer").innerText;
    console.log("Por id", element);
    expect(element).toEqual('Rodapé');
  });

  it('Simular click', () => {
    spyOn(app, 'changeText').and.callThrough();
    const element = fixture.nativeElement.querySelector(".send-button");
    element.click();
    expect(app.changeText).toHaveBeenCalled();
  });
});
