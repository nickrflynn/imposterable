import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { MatChipsModule, MatCardModule } from '@angular/material';
import { FeatherIconsModule } from '../feather-icons/feather-icons.module';

describe('ProjectsComponent', () => {
    let component: ProjectsComponent;
    let fixture: ComponentFixture<ProjectsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatChipsModule,
                MatCardModule,
                FeatherIconsModule
            ],
            declarations: [ProjectsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
