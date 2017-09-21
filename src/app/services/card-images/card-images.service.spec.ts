import { TestBed, inject } from '@angular/core/testing';

import { CardImagesService } from './card-images';

describe('CardImagesService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [CardImagesService]
		});
	});

	it('should ...', inject([CardImagesService], (service: CardImagesService) => {
		expect(service).toBeTruthy();
	}));
});
