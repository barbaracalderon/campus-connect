import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeAlunoComponent } from './cadastro-de-aluno.component';

describe('CadastroDeAlunoComponent', () => {
  let component: CadastroDeAlunoComponent;
  let fixture: ComponentFixture<CadastroDeAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroDeAlunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroDeAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
