import {} from 'jasmine';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ng2EditService } from './ng2edit.service';

import { Ng2EditComponent } from './ng2edit.component';

describe('Ng2EditComponent', () => {

  let comp:    Ng2EditComponent;
  let fixture: ComponentFixture<Ng2EditComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2EditComponent ], // declare the test component
      imports: [ FormsModule, HttpModule ],
      providers: [ Ng2EditService ]
    });

    fixture = TestBed.createComponent(Ng2EditComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('Should be false', () => {
    expect(false).toBe(true);
  });
});
