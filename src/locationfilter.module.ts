import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationFilterService } from './locationfilter.service';
import { LocationFilterComponent } from './locationfilter.component';

export function seedServiceFactory() {
	return new LocationFilterService();
}

@NgModule({
	imports: [CommonModule],
	providers: [
		{ provide: LocationFilterService, useFactory: seedServiceFactory }
	],
	declarations: [LocationFilterComponent],
	exports: [LocationFilterComponent]
})
export class LocationFilterModule { }
