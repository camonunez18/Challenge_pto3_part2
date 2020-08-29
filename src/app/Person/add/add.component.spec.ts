import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationEnd } from '@angular/router';
import { of } from 'rxjs';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AddComponent
      ],
      providers: [
        {
          provide: Router,
          useValue: {
            url: 'url0',
            events: of(new NavigationEnd(0, 'url1', 'url2')),
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    spyOn(router, 'navigate').and.callThrough();
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeDefined();
  });
});
