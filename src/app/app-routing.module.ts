import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './_pages_/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/conversations', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
