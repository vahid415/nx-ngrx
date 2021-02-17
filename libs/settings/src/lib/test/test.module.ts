import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';



@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: TestComponent,
      children: [
        {
          path: 'add',
          loadChildren: () => import('./add/add.module').then(m => m.AddModule)
        }
      ]
    }])
  ]
})
export class TestModule { }
