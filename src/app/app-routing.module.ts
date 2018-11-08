import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Adding all the pages in paths
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'workouts', loadChildren: './workouts/workouts.module#WorkoutsPageModule' },
  { path: 'progress', loadChildren: './progress/progress.module#ProgressPageModule' },
  { path: 'newworkout', loadChildren: './newworkout/newworkout.module#NewworkoutPageModule' },
  { path: 'moves', loadChildren: './moves/moves.module#MovesPageModule' },
  { path: 'addcustom', loadChildren: './addcustom/addcustom.module#AddcustomPageModule' },
  { path: 'workoutprog', loadChildren: './workoutprog/workoutprog.module#WorkoutprogPageModule' },
  { path: 'moveprog', loadChildren: './moveprog/moveprog.module#MoveprogPageModule' },
  { path: 'openmove', loadChildren: './openmove/openmove.module#OpenmovePageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
// edits by: Heidi Hynynen 1500484, Matti Isosalo 1700123, Susan Neffling 1700137
