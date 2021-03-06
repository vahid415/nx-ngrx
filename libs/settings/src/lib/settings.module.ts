import { AuthGuardService } from '@angular-ngrx-nx-realworld-example-app/auth';
import { NgrxFormsModule } from '@angular-ngrx-nx-realworld-example-app/ngrx-forms';
import { SettingsService } from './settings.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { SettingsEffects } from './+state/settings.effects';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    NgrxFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: SettingsComponent,
        canActivate: [AuthGuardService],
        children: [
          {
            path: 'test',
            loadChildren: () => import('./test/test.module').then(module => module.TestModule)
          },
        ]
      },
    ]),
    EffectsModule.forFeature([SettingsEffects]),
  ],
  declarations: [SettingsComponent],
  providers: [SettingsEffects, SettingsService],
})
export class SettingsModule { }
