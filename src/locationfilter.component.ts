import { Component, OnInit } from '@angular/core';

import { LocationFilterService } from './locationfilter.service';

@Component({
	selector: 'seed-component1',
	template: '{{greeting}}'
})
export class LocationFilterComponent implements OnInit {

	greeting: string;

	constructor(private service: LocationFilterService) { }

	ngOnInit() {
		this.greeting = this.service.sayHello();
	}
}