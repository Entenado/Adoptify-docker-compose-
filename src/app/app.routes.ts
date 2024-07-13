import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full',
	},
	{
		path: 'auth',
		loadChildren: () =>
			import('./pages/auth/auth.routes').then((m) => m.ROUTES_AUTH),
	},
	{
		path: 'admin',
		loadChildren: () =>
			import('./pages/admin/admin.routes').then((m) => m.ROUTES_ADMIN),
	},
	{
		path: 'manage-pet',
		loadChildren: () =>
			import('./pages/manage-pet/manage-pet.routes').then(
				(m) => m.MANAGE_PET_ROUTES
			),
	},
];
