import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuardService] },
  { path: 'alarm-detail', loadChildren: './alarm-detail/alarm-detail.module#AlarmDetailPageModule' },
  { path: 'alarm-query', loadChildren: './alarm-query/alarm-query.module#AlarmQueryPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
