// API: Hotel DB # > Hotel > Search & Shopping > Hotel Search v2 > Hotel Search Offers
module.exports = {
	data: [
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'XKLON321',
				chainCode: 'XK',
				dupeId: '501108165',
				name: 'Hotel London Allocation',
				cityCode: 'LON',
				latitude: 51.50218,
				longitude: -0.12714,
				hotelDistance: {
					distance: 0.4,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['25 King Charles Street'],
					postalCode: 'SW1A 2',
					cityName: 'London',
					countryCode: 'GB',
				},
				contact: {
					phone: '020 7222 5152',
					fax: '020 7222 5153',
					email: 'resa@hotellondonallocation.com',
				},
				amenities: ['PARKING'],
			},
			available: true,
			offers: [
				{
					id: '0J7V5URU95',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'REQ',
					category: 'RAC',
					description: {
						text: 'On request rate incl. BRK',
						lang: 'EN',
					},
					room: {
						type: 'C1S',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'SINGLE',
						},
						description: {
							text: 'Single Room',
							lang: 'EN',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						total: '120.00',
						base: '120.00',
						variations: {
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									base: '120.00',
								},
							],
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/0J7V5URU95',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=XKLON321&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'PILONBAK',
				chainCode: 'PI',
				dupeId: '700189156',
				name: 'London Leicester Square',
				rating: '3',
				cityCode: 'LON',
				latitude: 51.51096,
				longitude: -0.13024,
				hotelDistance: {
					distance: 0.6,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['1 LEICESTER PLACE', 'LEICESTER SQUARE'],
					postalCode: 'WC2H 7BP',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '+44 0871 527 9334',
					fax: '+44 0207 734 6614',
					email: 'LondonLeicesterSquare.pi@whitbread.com',
				},
				description: {
					lang: 'en',
					text: "Take centre stage at Premier Inn London Leicester Square, right in the heart of the West End. With our friendly team and extra-comfy beds you'll get that all-singing, all-dancing London experience but without the blockbuster prices.   You're perfectly placed for the West End shows, restaurants and bars. You'll find endless shopping at Oxford Street and Covent Garden. And there's culture and history just minutes away, from Trafalgar Square to Buckingham Palace. And, because we're so central, you're never far from a place to put your feet up and prepare for the encore.",
				},
				amenities: ['ELEVATOR', 'WIRELESS_CONNECTIVITY', 'ALARM_CLOCK', 'TELEVISION', 'HAIR_DRYER', 'IRON/IRON_BOARD', 'NON_SMOKING_ROOMS'],
				media: [
					{
						uri: 'https://d1moe8jtgovopm.cloudfront.net/B5ED8C6E2FF941D5A40D34949031E55F/B5ED8C6E2FF941D5A40D34949031E55F.JPEG',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: 'L0IBRGQT7K',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					room: {
						type: 'C1K',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'KING',
						},
						description: {
							text: 'Double Room\n1 King Bed',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						total: '230.63',
						variations: {
							average: {
								total: '230.63',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '225.00',
								},
							],
						},
					},
					policies: {
						guarantee: {
							acceptedPayments: {
								creditCards: ['AT', 'AX', 'CA', 'DC', 'DL', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-03T13:00:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/L0IBRGQT7K',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=PILONBAK&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'PILONHOL',
				chainCode: 'PI',
				dupeId: '502308331',
				name: 'PREMIER INN PROPERTY',
				cityCode: 'LON',
				latitude: 51.50015,
				longitude: -0.12624,
				hotelDistance: {
					distance: 0.6,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['TEST ADDRESS'],
					postalCode: '9876543',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
			},
			available: true,
			offers: [
				{
					id: 'TVPW74Z9QD',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					room: {
						type: 'C1K',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'KING',
						},
						description: {
							text: 'Double Room\n1 King Bed',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						total: '163.63',
						variations: {
							average: {
								total: '163.63',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '158.00',
								},
							],
						},
					},
					policies: {
						guarantee: {
							acceptedPayments: {
								creditCards: ['AT', 'AX', 'CA', 'DC', 'DL', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-03T13:00:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/TVPW74Z9QD',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=PILONHOL&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'PILONAKT',
				chainCode: 'PI',
				dupeId: '700135536',
				name: 'London County Hall',
				rating: '3',
				cityCode: 'LON',
				latitude: 51.50147,
				longitude: -0.11876,
				hotelDistance: {
					distance: 0.8,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['BELVEDERE ROAD'],
					postalCode: 'SE1 7PB',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '+44 0871 527 8648',
					fax: '+44 0207 902 1619',
					email: 'londoncountyhall.pti@whitbread.com',
				},
				description: {
					lang: 'en',
					text: "Just minutes away from the London Eye, in sight of some of London's most famous landmarks  and in the same building as the Shrek Adventure, Premier Inn London County Hall puts you at the heart of the city. - From this central spot, located in the historic County Hall building, you'll be able to see all sides of the capital. And most importantly, no matter what you discover during the day, our spacious rooms and extra-cosy beds will make sure you get a great night's sleep.",
				},
				amenities: ['ELEVATOR', 'WIRELESS_CONNECTIVITY', 'CONFERENCE_FACILITIES', 'ALARM_CLOCK', 'TELEVISION', 'HAIR_DRYER', 'IRON/IRON_BOARD', 'NON_SMOKING_ROOMS'],
				media: [
					{
						uri: 'https://d1moe8jtgovopm.cloudfront.net/58DA0E3C48F442E0B4D60A25DE1B1AF0/58DA0E3C48F442E0B4D60A25DE1B1AF0.JPEG',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: 'N88B1XNX8C',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					room: {
						type: 'C1K',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'KING',
						},
						description: {
							text: 'Double Room\n1 King Bed',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						total: '230.63',
						variations: {
							average: {
								total: '230.63',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '225.00',
								},
							],
						},
					},
					policies: {
						guarantee: {
							acceptedPayments: {
								creditCards: ['AT', 'AX', 'CA', 'DC', 'DL', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-03T13:00:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/N88B1XNX8C',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=PILONAKT&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'CNLON944',
				chainCode: 'CN',
				dupeId: '700153823',
				name: 'CONRAD LONDON ST JAMES',
				rating: '5',
				cityCode: 'LON',
				latitude: 51.49982,
				longitude: -0.13311,
				hotelDistance: {
					distance: 0.8,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['22-28 BROADWAY    '],
					postalCode: 'SW1H 9JS',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '44-203-3018080',
					fax: '44-203-3011380',
				},
				amenities: ['BUSINESS_CENTER', 'MEETING_ROOMS', 'RESTAURANT', 'SERVICE_DOGS_ALLOWED', 'FIRST_AID_STAF', 'INTERIOR_ROOM_ENTRY', 'EMERGENCY_LIGHTING', 'FIRE_DETECTORS', 'EXTINGUISHERS', 'SMOKE_DETECTOR', 'SPRINKLERS', 'EXCHANGE_FACILITIES', 'EXECUTIVE_FLOOR', 'LAUNDRY_SERVICE', 'PARKING', 'VALET_PARKING', 'SAFE_DEPOSIT_BOX', 'AIR_CONDITIONING', 'HAIR_DRYER', 'MINIBAR', 'MOVIE_CHANNELS', 'NON_SMOKING_ROOMS', 'TELEVISION', 'FITNESS_CENTER'],
			},
			available: true,
			offers: [
				{
					id: '3XSKR1IHVW',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					rateFamilyEstimated: {
						code: 'BAR',
						type: 'P',
					},
					commission: {
						percentage: '8.00',
					},
					room: {
						type: 'G1K',
						typeEstimated: {
							category: 'SUITE',
							beds: 1,
							bedType: 'KING',
						},
						description: {
							text: 'FLEXIBLE RATE\nJUNIOR SUITE WITH LOUNGE ACCESS\nCOMP WIFI/BFST-DRINKS-SNACKS IN LOUNGE/36 SQM',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						base: '522.00',
						total: '522.00',
						variations: {
							average: {
								base: '522.00',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '522.00',
								},
							],
						},
					},
					policies: {
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-02T23:59:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/3XSKR1IHVW',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=CNLON944&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'PILONBBY',
				chainCode: 'PI',
				dupeId: '700189816',
				name: 'London Waterloo',
				rating: '3',
				cityCode: 'LON',
				latitude: 51.50329,
				longitude: -0.11521,
				hotelDistance: {
					distance: 0.9,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['YORK ROAD', 'WATERLOO'],
					postalCode: 'SE1 7PB',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '+44 0871 527 9412',
					fax: '+44 0207 928 4911',
					email: 'LondonWaterlooWestminsterBridge.PI@PremierInn.Com',
				},
				description: {
					lang: 'en',
					text: "At Premier Inn Waterloo you're perfectly placed for exploring the capital - from sunrise to sunset and beyond. And with skyscraper views from our 14th floor, the city is, quite literally, at your feet.   From this prime location, on the site of the original General Lying-In maternity hospital near to Waterloo Station, you're just a hop, skip and jump from some of the most iconic sights in London including the London Eye, Big Ben and Westminster Abbey. And when you need to put those feet up, our spacious rooms and extra-cosy beds will be right here waiting.",
				},
				amenities: ['ELEVATOR', 'WIRELESS_CONNECTIVITY', 'ALARM_CLOCK', 'TELEVISION', 'HAIR_DRYER', 'IRON/IRON_BOARD', 'NON_SMOKING_ROOMS'],
				media: [
					{
						uri: 'https://d1moe8jtgovopm.cloudfront.net/CA52AF2EBEE949E7AF28B774B0D2D6D2/CA52AF2EBEE949E7AF28B774B0D2D6D2.JPEG',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: 'H88JQ059KM',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					room: {
						type: 'C1K',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'KING',
						},
						description: {
							text: 'Double Room\n1 King Bed',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						total: '191.63',
						variations: {
							average: {
								total: '191.63',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '186.00',
								},
							],
						},
					},
					policies: {
						guarantee: {
							acceptedPayments: {
								creditCards: ['AT', 'AX', 'CA', 'DC', 'DL', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-03T13:00:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/H88JQ059KM',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=PILONBBY&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'HLLON555',
				chainCode: 'HL',
				dupeId: '700013395',
				name: 'THE WALDORF HILTON',
				rating: '5',
				cityCode: 'LON',
				latitude: 51.51264,
				longitude: -0.11937,
				hotelDistance: {
					distance: 0.9,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['ALDWYCH'],
					postalCode: 'WC2B 4DD',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '44-207-8362400',
					fax: '44-207-8367244',
				},
				description: {
					lang: 'en',
					text: "Located in the heart of Theatreland in the West End of London, this five star iconic hotel, always synonymous with style and elegance, will celebrate its Centenary in 2008.  An investment of Â£35 million included all bedrooms, brand new lobby, meeting rooms, bar, patisserie and restaurant and the listed Palm Court beautifully restored. The design concept enhances the listed features of its Edwardian creators yet achieves a look that is both distinctly elegant yet avant-garde. The exhilarating redesign successfully blends contemporary luxury within the hotel's classical setting. The Waldorf Hilton's 299 bedrooms, including six suites, have been refurbished in line with two exclusive bedroom themes: 'Contemporary' and 'Design'. All rooms feature Ligne Roset beds, pique linen, duvets, A/C, power showers, plasma screen televisions and high-speed Internet access. Hotel guests also enjoy complimentary access to a private members health club located on property that features a 14-metre swimming pool in the original Masonic temple, sauna, steam rooms and an extensive fitness suite. Two large event rooms including an astonishing glass-roof Palm Court, an executive boardroom and four smaller meeting rooms make the hotel ideal for conferences, meetings and awards ceremonies.",
				},
				amenities: ['BUSINESS_CENTER', 'MEETING_ROOMS', 'COFFEE_SHOP', 'RESTAURANT', 'KIDS_WELCOME', 'EXCHANGE_FACILITIES', 'EXECUTIVE_FLOOR', 'LAUNDRY_SERVICE', 'MASSAGE', 'VALET_PARKING', 'SWIMMING_POOL', 'FIRST_AID_STAF', 'INTERIOR_ROOM_ENTRY', 'EMERGENCY_LIGHTING', 'FIRE_DETECTORS', 'EXTINGUISHERS', 'RESTRICTED_PUBLIC_ACCESS', 'SMOKE_DETECTOR', 'SPRINKLERS', 'SAFE_DEPOSIT_BOX', 'OUTDOOR_POOL', 'BALLROOM', 'AIR_CONDITIONING', 'HAIR_DRYER', 'MINIBAR', 'MOVIE_CHANNELS', 'NON_SMOKING_ROOMS', 'PC_HOOKUP_IN_ROOM', 'DIRECT_DIAL_PHONE', 'TELEVISION', 'FITNESS_CENTER'],
				media: [
					{
						uri: 'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/88EA71FE2CFA4B4CA13D3D7E78F04248',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: 'XWN5XB6JE9',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					rateFamilyEstimated: {
						code: 'BAR',
						type: 'P',
					},
					commission: {
						percentage: '8.00',
					},
					room: {
						type: 'A03',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'DOUBLE',
						},
						description: {
							text: 'FLEXIBLE RATE\nQUEEN GUEST ROOM\nDOUBLE BED IN CONTEMPORY SETTING',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						base: '429.00',
						total: '429.00',
						variations: {
							average: {
								base: '429.00',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '429.00',
								},
							],
						},
					},
					policies: {
						guarantee: {
							acceptedPayments: {
								creditCards: ['AX', 'CA', 'CU', 'DC', 'DS', 'JC', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-02T23:59:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/XWN5XB6JE9',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=HLLON555&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'EBLONEBE',
				chainCode: 'EB',
				dupeId: '700013278',
				name: 'The London EDITION',
				rating: '5',
				cityCode: 'LON',
				latitude: 51.51713,
				longitude: -0.13635,
				hotelDistance: {
					distance: 1.4,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['10 BERNERS STREET'],
					postalCode: 'W1T 3NP',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '+44 207 7810000',
					fax: '+44 207 7810100',
					email: 'guestexperience.london@editionhotels.com',
				},
				description: {
					lang: 'en',
					text: "Discover the new generation of luxury at The London EDITION. Located in a historic building on the outskirts of Soho, just moments from Mayfair and Covent Garden, our 5-star hotel embodies the boutique elegance and quiet confidence that is the cornerstone of Ian Schrager's philosophy. Immaculately appointed rooms and suites boast a nautical theme, as well as distinctive design accents, complimentary Wi-Fi access, rainforest showers and modern technology. Savour seasonal British specialties at Berners Tavern, Michelin-starred chef Jason Atherton's stylish restaurant, which features a private dining room for special occasions. You can also unwind with a drink at the modern Lobby Bar and the reservations-only Punch Room. If you're planning a business or social occasion in Soho, you'll appreciate our adaptable venues and superb catering services. Should you wish to explore beyond the hotel, the very best of London is right at your fingertips. We look forward to your arrival at The London EDITION.",
				},
				amenities: [
					'BREAKFAST_FULL',
					'SPA',
					'ACCESSIBLE_FACILITIES',
					'SERVICE_DOGS_ALLOWED',
					'DISABLED_ACCESSIBLE_TOILETS',
					'HANDRAILS_BATHROOM',
					'SAFE_DEPOSIT_BOX',
					'DRY_CLEANING',
					'LAUNDRY_SERVICE',
					'ICE_MACHINES',
					'ROOM_SERVICE',
					'INTERIOR_ROOM_ENTRY',
					'BABY-SITTING',
					'LOUNGE',
					'24_HOUR_ROOM_SERVICE',
					'FRONT_DESK',
					'24_HOUR_FRONT_DESK',
					'CONCIERGE',
					'EXPRESS_CHECK_IN',
					'EXPRESS_CHECK_OUT',
					'WEDDING_SERVICES',
					'CAR_RENTAL',
					'TRAVEL_AGENCY',
					'ATM/CASH_MACHINE',
					'GYM',
					'RESTAURANT',
					'HIGH_SPEED_INTERNET',
					'FREE_INTERNET',
					'HIGH_SPEED_WIRELESS',
					'WIRELESS_CONNECTIVITY',
					'ELEVATOR',
					'PHOTOCOPIER',
					'PRINTER',
					'MEETING_FACILITIES',
					'HIGH_SPEED_INTERNET_IN_ROOM',
					'WI-FI_IN_ROOM',
					'NON_SMOKING_ROOMS',
					'TEA/COFFEE_MAKER',
					'AIR_CONDITIONING',
					'SAFE',
					'HAIR_DRYER',
					'IRON/IRON_BOARD',
					'CRIBS_AVAILABLE',
					'ROLLAWAY_BEDS',
					'TELEVISION',
					'CABLE_TELEVISION',
					'VOICEMAIL_IN_ROOM',
					'MINIBAR',
					'CORDLESS_PHONE',
					'BIDET',
					'LAUNDRY_EQUIPMENT_IN_ROOM',
					'TROUSER_PRESS',
					'DVD_PLAYER',
					'CD_PLAYER',
					'GAMES_SYSTEM_IN_ROOM',
					'DIRECT_DIAL_PHONE',
					'REFRIGERATOR',
					'FITNESS_CENTER',
					'BOWLING',
					'HORSE_RIDING',
					'VOLLEYBALL',
				],
				media: [
					{
						uri: 'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/A38AB40E383F47B79E03F46FEA4F2BA1',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: 'ISA4J590YP',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					room: {
						type: 'SM3',
						typeEstimated: {
							category: 'SUPERIOR_ROOM',
							beds: 1,
							bedType: 'QUEEN',
						},
						description: {
							text: 'Prepay Non-refundable, changes up to 3 days prior to stay\nSuperior, 1 Queen(s), Mini fridge, 19sqm/204sqf\nt-24sqm/258sqft, Wireless internet, complimenta',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						base: '736.25',
						total: '736.25',
						variations: {
							average: {
								base: '736.25',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '736.25',
								},
							],
						},
					},
					policies: {
						paymentType: 'deposit',
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/ISA4J590YP',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=EBLONEBE&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'HLLON364',
				chainCode: 'HL',
				dupeId: '700026363',
				name: 'DOUBLETREE LONDON WEST END',
				rating: '4',
				cityCode: 'LON',
				latitude: 51.51985,
				longitude: -0.12213,
				hotelDistance: {
					distance: 1.6,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['92 SOUTHHAMTON ROW'],
					postalCode: 'WC1B 4BH',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '44-0207-2422828',
					fax: '44-0207-8319170',
				},
				description: {
					lang: 'en',
					text: 'Welcome to the DoubleTree by Hilton Hotel London-West End, located in the historic district of Bloomsbury. Our stylish London West End hotel is within walking distance of the British Museum, Covent Garden, and Shaftsbury Avenue as well as the major shopping attractions on both Oxford and Regent Street. Our Contemporary hotel is situated between the Financial District and world-famous attractions such as Soho and the Theatre district. We offer excellent public transport links to the rest of the UK and London through Holborn underground, Euston and Kings Cross St Pancres Station. Expect excellent service from our friendly multi-lingual staff and a signature, warm DoubleTree chocolate chip cookie upon arrival.  With its beautiful Edwardian façade, our hotel combines historic charm with modern convenience. Our stylish guest rooms feature work stations, flat-screen television and high speed wireless internet access. Deluxe rooms include queen-sized beds, upgrade to a luxurious Executive room and enjoy complimentary WiFi access. Our spacious duplex apartments boast a dining area, kitchenette and balcony.   Hold your meeting, conference, private event or wedding at our London West End hotel, offering modern and flexible meeting space coupled with the support of dedicated event staff and top of the range inbuilt audio visual equipment. Work in our business centre with complimentary printing service. Enjoy Champagne afternoon tea, an evening drink or full A la cart dinner in the stylishly designed bar92. Start the day with our DoubleTree Wake-up breakfast buffet and enjoy a work-out in our complimentary fitness center.  Highlights •Close to Covent Garden, the British Museum, West End, and Theatre land •Flexible meeting and event space, professional banquet staff and flexible menus •Private Executive wing with both Executive rooms and one or two bedroom suites •Variety of international cuisines catered for in our extensive bar, restaurant and 24 hour room service menus •Approximately 45 minutes from Heathrow Airport (LHR) and 1 hour from Gatwick Airport (LGW)  What to do around here  Excellent cafés, restaurants and top London attractions like the British Museum, Covent Garden, the famous West End and Oxford Street shops are all within walking distance. The Financial District, Soho, theatre district and various Universities including University College London, School of Oriental and African Studies and London School of Economics are all nearby. We are also excellently located near major medical institutions such as Great Ormond Street Hospital, National Hospital for Neurology & Neurosurgery and the Institute of Child’s Health. Take the family on a tour of London’s most famous landmarks and attractions including The Tower of London, Tower Bridge, Buckingham Palace, The Houses of Parliament, St Paul’s Cathedral and Madame Tussauds from a bus stop directly outside our hotel.',
				},
				amenities: ['BUSINESS_CENTER', 'CONVENTION_CENTRE', 'MEETING_ROOMS', 'COFFEE_SHOP', 'RESTAURANT', 'WIDE_ENTRANCE', 'WIDE_CORRIDORS', 'FIRST_AID_STAF', 'INTERIOR_ROOM_ENTRY', 'EMERGENCY_LIGHTING', 'FIRE_DETECTORS', 'EXTINGUISHERS', 'RESTRICTED_PUBLIC_ACCESS', 'SMOKE_DETECTOR', 'SPRINKLERS', 'LAUNDRY_SERVICE', 'PARKING', 'SAFE_DEPOSIT_BOX', 'AIR_CONDITIONING', 'HAIR_DRYER', 'KITCHEN', 'NON_SMOKING_ROOMS', 'DIRECT_DIAL_PHONE', 'TELEVISION', 'FITNESS_CENTER'],
				media: [
					{
						uri: 'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/AC00D0DA9B114DB99BC5D6A55E22FDAB',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: 'AUPY029JOA',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					rateFamilyEstimated: {
						code: 'BAR',
						type: 'P',
					},
					commission: {
						percentage: '8.00',
					},
					room: {
						type: 'A07',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'SINGLE',
						},
						description: {
							text: 'FLEXIBLE RATE\nSINGLE BED GUEST ROOM\nFREE WIFI / HDTV / WORK DESK',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						base: '276.00',
						total: '276.00',
						variations: {
							average: {
								base: '276.00',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '276.00',
								},
							],
						},
					},
					policies: {
						guarantee: {
							acceptedPayments: {
								creditCards: ['AX', 'CA', 'CU', 'DC', 'DS', 'JC', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-02T23:59:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/AUPY029JOA',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=HLLON364&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'PILONBBE',
				chainCode: 'PI',
				dupeId: '700189809',
				name: 'London Blackfriars',
				rating: '3',
				cityCode: 'LON',
				latitude: 51.5131,
				longitude: -0.10561,
				hotelDistance: {
					distance: 1.7,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['1- 2 DORSET RISE', 'LONDON'],
					postalCode: 'EC4Y 8EN',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '+44 0871 527 9362',
					fax: '+44 0207 936 4093',
					email: 'londonblackfriars.PI@PremierInn.Com',
				},
				description: {
					lang: 'en',
					text: "With St Paul's Cathedral to one side, Tate Modern to the other, and the City on your doorstep, it's hard to get more central than Premier Inn London Blackfriars. - In fact, for a short break, we're perfectly placed. Wander to the West End and Covent Garden. Stroll along the Thames to Big Ben and the London Eye. Or catch a show at the world- famous Mermaid Theatre, just next door. And, with many of the world's biggest companies just minutes away, we're ideal for business trips too. Whether it's been work or play, you'll return to a friendly team, extra-comfy beds and an excellent breakfast.",
				},
				amenities: ['ELEVATOR', 'WIRELESS_CONNECTIVITY', 'ALARM_CLOCK', 'TELEVISION', 'HAIR_DRYER', 'IRON/IRON_BOARD', 'NON_SMOKING_ROOMS'],
				media: [
					{
						uri: 'https://d1moe8jtgovopm.cloudfront.net/005504263FCE4F7699D2B79953A34E0B/005504263FCE4F7699D2B79953A34E0B.JPEG',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: 'S6QXR9ZSRD',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					room: {
						type: 'C1K',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'KING',
						},
						description: {
							text: 'Double Room\n1 King Bed',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						total: '226.63',
						variations: {
							average: {
								total: '226.63',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '221.00',
								},
							],
						},
					},
					policies: {
						guarantee: {
							acceptedPayments: {
								creditCards: ['AT', 'AX', 'CA', 'DC', 'DL', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-03T13:00:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/S6QXR9ZSRD',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=PILONBBE&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'HLLON834',
				chainCode: 'HL',
				dupeId: '700040419',
				name: 'DOUBLETREE LONDON VICTORIA',
				rating: '4',
				cityCode: 'LON',
				latitude: 51.494,
				longitude: -0.14338,
				hotelDistance: {
					distance: 1.8,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['2 BRIDGE PLACE'],
					postalCode: 'SW1V 1QA',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '44-207-8348123',
					fax: '44-207-8281099',
				},
				description: {
					lang: 'en',
					text: "Conveniently located opposite Victoria Station, DoubleTree by Hilton London – Victoria provides an immediate link to the London-wide public transport network, Gatwick and Heathrow airports, as well as some of the city’s most popular points of interest. Walk to major attractions, such as Buckingham Palace, the Houses of Parliament, the London Eye, Harrods and the famous Oxford and Bond Street. Whether you are traveling on business or leisure, our multi-lingual staff look forward to welcoming you with our signature, warm DoubleTree chocolate chip cookie.  Our inviting, vibrant Lobby and friendly staff will make you feel at home from the moment you arrive into central London. With beautiful guest rooms and suites, the DoubleTree by Hilton Hotel London - Victoria embodies high end comfort. Expect a friendly and knowledgeable Concierge service and high speed wireless internet access throughout the hotel. Enjoy the inviting guest rooms and deluxe rooms that blend contemporary design with generous working surfaces, Sweet Dreams by DoubleTree® beds and flat screen televisions. Our Executive rooms boast first class design and comfort, stunning views over London’s skyline with complimentary amenities and refreshments.  Return from shopping, sightseeing or a successful business meeting to our 2 bridge place bar and restaurant where you will find a large selection of drinks and international cuisine. Our Conference Centre offers five meeting and event rooms featuring natural day light, complimentary wireless internet and dedicated catering services. The hotel's business facilities and convenient proximity to Victoria Station make it an ideal setting for meetings and events of all sizes.  Highlights •Centrally located at Victoria station providing connections to all major airports and top London attractions. •Versatile meeting space capable of hosting events for up to 160 people •2 Bridge place Restaurant offering top quality international cuisine perfect for pre-theatre meals. •Excellent views over London Sky line from the top floor executive rooms. •Walking distance to three Royal Parks,  Buckingham Palace,  Houses of Parliament,  Westminster Abbey  What to do around here: When you stay at the DoubleTree by Hilton Hotel London – Victoria you can enjoy excellent facilities in the centre of the city as well as easy access to popular attractions. Stroll to historic St Paul’s Cathedral, walk along the banks of the River Thames to the Tate Modern gallery and explore a vast collection of modern art housed in this converted power station. Indulge in world-class shopping when you head to popular Oxford Street, lose yourself in a local market or head to Harrods for a quintessentially British experience. Other top attractions well with in walking distance are Buckingham Palace and beautiful parks such as St James, Hyde and Green Park.",
				},
				amenities: ['BUSINESS_CENTER', 'MEETING_ROOMS', 'RESTAURANT', 'WIDE_CORRIDORS', 'FIRST_AID_STAF', 'INTERIOR_ROOM_ENTRY', 'EMERGENCY_LIGHTING', 'FIRE_DETECTORS', 'EXTINGUISHERS', 'FIRE_SAFETY', 'RESTRICTED_PUBLIC_ACCESS', 'SMOKE_DETECTOR', 'SPRINKLERS', 'EXCHANGE_FACILITIES', 'PARKING', 'AIR_CONDITIONING', 'HAIR_DRYER', 'NON_SMOKING_ROOMS', 'DIRECT_DIAL_PHONE', 'TELEVISION', 'FITNESS_CENTER'],
				media: [
					{
						uri: 'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/C87E9238D6CD4C51B4EB5E7898A5F476',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: 'XW782WXP10',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					rateFamilyEstimated: {
						code: 'BAR',
						type: 'P',
					},
					commission: {
						percentage: '8.00',
					},
					room: {
						type: 'A00',
						typeEstimated: {
							category: 'RESIDENTIAL_APPARTMENT',
							beds: 1,
							bedType: 'QUEEN',
						},
						description: {
							text: 'FLEXIBLE RATE\nQUEEN GUEST ROOM\nWIFI/LAPTOP SAFE/MP3 CLOCK',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						base: '339.00',
						total: '339.00',
						variations: {
							average: {
								base: '339.00',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '339.00',
								},
							],
						},
					},
					policies: {
						guarantee: {
							acceptedPayments: {
								creditCards: ['AX', 'CA', 'CU', 'DC', 'DS', 'JC', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-02T23:59:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/XW782WXP10',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=HLLON834&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'PILONBBD',
				chainCode: 'PI',
				dupeId: '700189814',
				name: 'London Southwark (Tate Modern)',
				rating: '3',
				cityCode: 'LON',
				latitude: 51.50477,
				longitude: -0.10147,
				hotelDistance: {
					distance: 1.8,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['15A GREAT SUFFORK STREET', 'SOUTHWARK'],
					postalCode: 'SE1 0FL',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '+44 0871 527 9332',
					fax: '+44 0207 928 5361',
					email: 'LondonSouthwarkTateModern.pi@Whitbread.com',
				},
				description: {
					lang: 'en',
					text: "Modern, classic, pop or surreal? Whatever your style, Premier Inn London Southwark (Tate Modern) puts you in the thick of things - with all the star attractions of central London just a picture-perfect stroll away.   Wander along the buzzing Southbank, with its riverside venues, restaurants and bars. Step into Shakespeare's world at the Globe. Get close to the icons of the London skyline from St Pauls' Cathedral to Tower Bridge. And with our friendly team and extra-comfy beds to frame the whole experience, you'll find everything you need for a great night's sleep.",
				},
				amenities: ['ELEVATOR', 'WIRELESS_CONNECTIVITY', 'ALARM_CLOCK', 'TELEVISION', 'HAIR_DRYER', 'IRON/IRON_BOARD', 'NON_SMOKING_ROOMS'],
				media: [
					{
						uri: 'https://d1moe8jtgovopm.cloudfront.net/0EE91A17866141309FED254659B0E66E/0EE91A17866141309FED254659B0E66E.JPEG',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: 'I1QSJ6LEDV',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					room: {
						type: 'C1K',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'KING',
						},
						description: {
							text: 'Double Room\n1 King Bed',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						total: '163.63',
						variations: {
							average: {
								total: '163.63',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '158.00',
								},
							],
						},
					},
					policies: {
						guarantee: {
							acceptedPayments: {
								creditCards: ['AT', 'AX', 'CA', 'DC', 'DL', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-03T13:00:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/I1QSJ6LEDV',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=PILONBBD&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'HSLONARI',
				chainCode: 'HS',
				dupeId: '700194620',
				name: 'Gower House',
				rating: '1',
				cityCode: 'LON',
				latitude: 51.52164,
				longitude: -0.13186,
				hotelDistance: {
					distance: 1.8,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['57 GOWER ST'],
					postalCode: 'WC1E 6HJ',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '(44) 2076364685',
					fax: '(44) 2076364685',
					email: 'info@gowerhousehotel.co.uk',
				},
				description: {
					lang: 'en',
					text: 'Situated in a terrace of Georgian town houses, the Gower House Hotel is a family-run retreat in the bustling centre of London.  Its rooms are comfortably furnished and feature modern amenities such as free Wi-Fi. In the morning, a typical English breakfast is served to ensure guests a good start into the day. HRS guests benefit from the late check-out option at the Gower House.',
				},
				amenities: ['24_HOUR_FRONT_DESK', 'CONCIERGE', 'DRIVING_RANGE', 'NIGHT_CLUB', 'INTERNET_SERVICES', 'WIRELESS_CONNECTIVITY', 'TOUR_DESK', 'LAUNDRY_SERVICE', 'FIRE_DETECTORS', 'VIDEO_SURVEILANCE'],
				media: [
					{
						uri: 'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/EA92842E81014CE894898BCDA37002E3',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: 'URBXWQO2UB',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'PRO',
					rateFamilyEstimated: {
						code: 'PRO',
						type: 'P',
					},
					commission: {
						percentage: '4.00',
					},
					boardType: 'BREAKFAST',
					room: {
						type: 'ROH',
						typeEstimated: {
							category: 'STANDARD_ROOM',
						},
						description: {
							text: 'Hot Deal\nStandard room A standard room consists of a room with shower-toilet or bathtub-toilet.',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						total: '252.00',
						variations: {
							average: {
								total: '252.00',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '252.00',
								},
							],
						},
					},
					policies: {
						deposit: {
							acceptedPayments: {
								creditCards: ['AX', 'CA', 'DC', 'DN', 'JC', 'MC', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'deposit',
						cancellation: {
							deadline: '2022-08-27T03:18:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/URBXWQO2UB',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=HSLONARI&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'PILONAYR',
				chainCode: 'PI',
				dupeId: '700015888',
				name: 'London Victoria',
				rating: '3',
				cityCode: 'LON',
				latitude: 51.49259,
				longitude: -0.14222,
				hotelDistance: {
					distance: 1.8,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['82-83 ECCLESTON SQUARE'],
					postalCode: 'SW1V 1PS',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '+44 0871 527 8680',
					fax: '+44 0207 963 4061',
					email: 'londonvictoria.pi@premierinn.com',
				},
				description: {
					lang: 'en',
					text: "So close to the sights you're almost rubbing shoulders with Royalty, Premier Inn London Victoria puts you in prime position. You can stroll to many of the capital's most famous sights and, with Victoria Station just minutes away, you're connected to city, country and coast.   Catch the changing of the guard at Buckingham Palace, get arty at the Tate, cruise along the Thames, be wowed by a West End show, then return to the peace and quiet of Pimlico. Here you'll find everything you need to recharge the batteries: spacious rooms, a tasty restaurant, and extra-comfy beds.",
				},
				amenities: ['ELEVATOR', 'CONFERENCE_FACILITIES', 'WIRELESS_CONNECTIVITY', 'ALARM_CLOCK', 'TELEVISION', 'HAIR_DRYER', 'IRON/IRON_BOARD', 'NON_SMOKING_ROOMS'],
				media: [
					{
						uri: 'https://d1moe8jtgovopm.cloudfront.net/22BFF8BA584A4EEE883DA6FD758A1907/22BFF8BA584A4EEE883DA6FD758A1907.JPEG',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: 'DQ3EJAQQ07',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					room: {
						type: 'C1K',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'KING',
						},
						description: {
							text: 'Double Room\n1 King Bed',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						total: '230.63',
						variations: {
							average: {
								total: '230.63',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '225.00',
								},
							],
						},
					},
					policies: {
						guarantee: {
							acceptedPayments: {
								creditCards: ['AT', 'AX', 'CA', 'DC', 'DL', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-03T13:00:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/DQ3EJAQQ07',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=PILONAYR&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'RTLONCTS',
				chainCode: 'RT',
				dupeId: '700027664',
				name: 'Novotel London City South',
				rating: '4',
				cityCode: 'LON',
				latitude: 51.50572,
				longitude: -0.09541,
				hotelDistance: {
					distance: 2.2,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['53-61 SOUTHWARK BRIDGE ROAD'],
					postalCode: 'SE1 9HH',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '44/207/6600676',
					fax: '44/207/0890410',
					email: 'H3269@accor.com',
				},
				description: {
					lang: 'en',
					text: 'Novotel London City South is a 4-star hotel with an ideal location. Within walking distance you will find great tourist attractions such as the Shard, the Tate Modern, St. Pauls Cathedral and Borough Market, as well as multiple tube stations to get you to the rest of London. The hotel features include functions rooms for up to 100 guests to suit your conference, meeting or wedding, as well as a hotel restaurant and bar. We also have a fitness centre with sauna and hammam for you to enjoy at your leisure.',
				},
				amenities: ['ELEVATOR', 'SAUNA', 'ROOM_SERVICE', '220_AC', 'DISCO', 'WIRELESS_CONNECTIVITY', 'EXPRESS_CHECK_IN', 'KIDS_WELCOME', 'EXPRESS_CHECK_OUT', 'BUS_PARKING', 'NIGHT_CLUB', 'FIRE_SAFETY', 'SMOKE_DETECTOR', 'FIRE_DETECTORS', 'EMERGENCY_LIGHTING', 'ACCESSIBLE_BATHS', 'WHEELCHAIR_ACCESSIBLE_PUBLIC_AREA', 'DISABLED_FACILITIES', 'MULTILINGUAL_STAFF', 'INTERNET_SERVICES', 'PARKING', 'PETS_ALLOWED', 'TOUR_DESK', 'EXCHANGE_FACILITIES', 'LOUNGE', '24_HOUR_FRONT_DESK', 'CONNECTING_ROOMS', 'RESTAURANT', 'PHOTOCOPIER', 'OVERHEAD_PROJECTOR', 'MEETING_FACILITIES', 'MEETING_ROOMS', 'IRON/IRON_BOARD', 'HIGH_SPEED_INTERNET_IN_ROOM', 'BATH', 'SHOWER', 'ALARM_CLOCK', 'DIRECT_DIAL_PHONE', 'WI-FI_IN_ROOM', 'CABLE_TELEVISION', 'TELEVISION', 'SATELLITE_TV', 'CRIBS_AVAILABLE', 'NON_SMOKING_ROOMS', 'BOATING', 'WATER_SPORTS'],
				media: [
					{
						uri: 'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/C333059F1A5948A3A33DEB5CC7C00796',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: 'IA023O0J8Y',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: '1KD',
					rateFamilyEstimated: {
						code: 'BAR',
						type: 'P',
					},
					room: {
						type: 'A1Q',
						typeEstimated: {
							category: 'SUPERIOR_ROOM',
							beds: 1,
							bedType: 'QUEEN',
						},
						description: {
							text: 'MRate avail FLEX - RO B2C\nSuperior Room with Queen bed + convertible Sofa',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						total: '80.00',
						variations: {
							average: {
								base: '80.00',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '80.00',
								},
							],
						},
					},
					policies: {
						holdTime: {
							deadline: '2022-09-03T14:00:00',
						},
						guarantee: {
							acceptedPayments: {
								creditCards: ['AH', 'AX', 'CA', 'DC', 'EC', 'IK', 'VI'],
								methods: ['CREDIT_CARD', 'TRAVEL_AGENT_ID'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-02T00:00:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/IA023O0J8Y',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=RTLONCTS&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'BRLONPRB',
				chainCode: 'BR',
				dupeId: '700152304',
				name: 'St Pancras Renaissance Hotel London',
				rating: '4',
				cityCode: 'LON',
				latitude: 51.52575,
				longitude: -0.13551,
				hotelDistance: {
					distance: 2.3,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['EUSTON ROAD                        '],
					postalCode: 'NW12QR',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '+44 20 7841 3540',
					fax: '+44 20 7841 3579',
					email: 'stpancras.hotel@renaissancehotels.com',
				},
				description: {
					lang: 'en',
					text: "Experience the grandeur of the iconic St. Pancras Renaissance Hotel London. Originally opened in 1873, guests are welcomed with five-star amenities, spacious rooms and superb service. Every pet-friendly hotel room and suite combines a sense of elegant history with modern comfort and includes plush bedding, flat-screen TVs, ample desks, Wi-Fi, soaring ceilings and inviting decor. Upgrade to a suite to enjoy expanded living rooms and access to exclusive amenities at our Chambers Club. Take advantage of our spa, gym and stunning indoor pool. Choose one of our exquisite venues for your event, be it a lavish London wedding or a small business gathering. Every historic hotel venue is supported by expert planning services, custom catering and audiovisual technology. When you are ready to explore, you'll appreciate our proximity to King's Cross Station, Camden Town and the buzzing Granary Square. We are also near the Royal Opera House, The British Museum, Convent Garden and countless other city attractions.",
				},
				amenities: [
					'BREAKFAST_FULL',
					'SPA',
					'EXECUTIVE_FLOOR',
					'ACCESSIBLE_FACILITIES',
					'SERVICE_DOGS_ALLOWED',
					'HANDRAILS_BATHROOM',
					'DISABLED_ACCESSIBLE_TOILETS',
					'ON-SITE_PARKING',
					'SAFE_DEPOSIT_BOX',
					'EXCHANGE_FACILITIES',
					'DRY_CLEANING',
					'LAUNDRY_SERVICE',
					'ICE_MACHINES',
					'ROOM_SERVICE',
					'CONCIERGE',
					'FRONT_DESK',
					'24_HOUR_FRONT_DESK',
					'24_HOUR_ROOM_SERVICE',
					'INTERIOR_ROOM_ENTRY',
					'HAIRDRESSER',
					'FLORIST',
					'LOUNGE',
					'COFFEE_SHOP',
					'VALET_PARKING',
					'CAR_RENTAL',
					'WEDDING_SERVICES',
					'GYM',
					'PARKING',
					'SWIMMING_POOL',
					'INDOOR_POOL',
					'RESTAURANT',
					'HIGH_SPEED_INTERNET',
					'HIGH_SPEED_WIRELESS',
					'WIRELESS_CONNECTIVITY',
					'ELEVATOR',
					'PETS_ALLOWED',
					'PHOTOCOPIER',
					'MEETING_FACILITIES',
					'HIGH_SPEED_INTERNET_IN_ROOM',
					'WI-FI_IN_ROOM',
					'NON_SMOKING_ROOMS',
					'TEA/COFFEE_MAKER',
					'ALARM_CLOCK',
					'AIR_CONDITIONING',
					'SAFE',
					'HAIR_DRYER',
					'IRON/IRON_BOARD',
					'CRIBS_AVAILABLE',
					'ROLLAWAY_BEDS',
					'TELEVISION',
					'CABLE_TELEVISION',
					'VOICEMAIL_IN_ROOM',
					'BALLROOM',
					'FITNESS_CENTER',
					'BOWLING',
					'HORSE_RIDING',
				],
				media: [
					{
						uri: 'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/F51B002CD0E74F9593FDFBD8D6CDC6A5',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: 'NHYCUMRWUW',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'S9R',
					room: {
						type: 'XMI',
						typeEstimated: {
							category: 'DELUXE_ROOM',
						},
						description: {
							text: 'Marriott Senior Discount, 62 years and older valid ID required\nDeluxe Bedroom, Barlow Wing, 1 Queen(s) or 2 Tw\nins, 25sqm/269sqft, Wireless internet, for a fe',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						base: '327.20',
						total: '327.20',
						variations: {
							average: {
								base: '327.20',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '327.20',
								},
							],
						},
					},
					policies: {
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-02T23:59:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/NHYCUMRWUW',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=BRLONPRB&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'HLLON611',
				chainCode: 'HL',
				dupeId: '700027182',
				name: 'DOUBLETREE BY HILTON LONDON MARBLE ARCH',
				rating: '4',
				cityCode: 'LON',
				latitude: 51.51477,
				longitude: -0.1568,
				hotelDistance: {
					distance: 2.3,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['4 BRYANSTON STREET'],
					postalCode: 'W1H 7BY',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '44-20-79352361',
					fax: '44-20-74872759',
				},
				amenities: ['BUSINESS_CENTER', 'MEETING_ROOMS', 'RESTAURANT', 'WIDE_ENTRANCE', 'WIDE_CORRIDORS', 'FIRST_AID_STAF', 'INTERIOR_ROOM_ENTRY', 'EMERGENCY_LIGHTING', 'FIRE_DETECTORS', 'EXTINGUISHERS', 'GUARDED_PARKING', 'SMOKE_DETECTOR', 'LAUNDRY_SERVICE', 'PARKING', 'AIR_CONDITIONING', 'HAIR_DRYER', 'NON_SMOKING_ROOMS', 'DIRECT_DIAL_PHONE', 'TELEVISION', 'FITNESS_CENTER'],
				media: [
					{
						uri: 'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/D3F18B90EED24717BC2A10510CF6BC3B',
						category: 'LOBBY',
					},
				],
			},
			available: true,
			offers: [
				{
					id: 'YCCK8Y94RS',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					rateFamilyEstimated: {
						code: 'BAR',
						type: 'P',
					},
					commission: {
						percentage: '8.00',
					},
					room: {
						type: 'A06',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'SINGLE',
						},
						description: {
							text: 'FLEXIBLE RATE\nSINGLE GUEST ROOM\nWIFI/32 INCH SAT HD TV/COFFEE-TEA FACILITIES',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						base: '269.00',
						total: '269.00',
						variations: {
							average: {
								base: '269.00',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '269.00',
								},
							],
						},
					},
					policies: {
						guarantee: {
							acceptedPayments: {
								creditCards: ['AX', 'CA', 'CU', 'DC', 'DS', 'JC', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-02T23:59:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/YCCK8Y94RS',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=HLLON611&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'HLLON213',
				chainCode: 'HL',
				dupeId: '700007240',
				name: 'HILTON LONDON EUSTON',
				rating: '3',
				cityCode: 'LON',
				latitude: 51.52689,
				longitude: -0.13028,
				hotelDistance: {
					distance: 2.3,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['17-18 UPPER WOBURN PLACE'],
					postalCode: 'WC1H 0HT',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '44-207-9434500',
					fax: '44-207-9434501',
				},
				description: {
					lang: 'en',
					text: "Set in a stunning Victorian building, the Hilton London Euston hotel is only 5 minutes from Euston Station and within a mile of The City. Only 30 minutes from Heathrow Airport by train and taxi, the hotel has 11 meeting rooms for 2-110 and wireless internet access in all public spaces.  Start the day with a sauna at the Hilton London Euston hotel's gym. Hire a bicycle at Waterloo and ride along the Thames to London attractions like Tate Modern. See the lights come up over the city from the London Eye before dinner at the hotel's Woburn Place Dining Room.  Breakfast at Mulberry's Restaurant, enjoy fine dining in the smart conservatory at Woburn Place Dining Room, host a banquet on its terrace and finish with a nightcap at the hotel's bar.  Book a modern Hilton Room at the Hilton London Euston hotel or upgrade to a spacious Deluxe Room. All rooms boast wireless internet access.",
				},
				amenities: ['MEETING_ROOMS', 'RESTAURANT', 'KIDS_WELCOME', 'LAUNDRY_SERVICE', 'PARKING', 'PETS_ALLOWED', 'FIRST_AID_STAF', 'INTERIOR_ROOM_ENTRY', 'EMERGENCY_LIGHTING', 'FIRE_DETECTORS', 'EXTINGUISHERS', 'SMOKE_DETECTOR', 'SAFE_DEPOSIT_BOX', 'AIR_CONDITIONING', 'HAIR_DRYER', 'MOVIE_CHANNELS', 'NON_SMOKING_ROOMS', 'PC_HOOKUP_IN_ROOM', 'TELEVISION'],
				media: [
					{
						uri: 'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/6AEA296CFDCF469B8B97D98450B3AB17',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: '90F6HOSC35',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					rateFamilyEstimated: {
						code: 'BAR',
						type: 'P',
					},
					commission: {
						percentage: '8.00',
					},
					room: {
						type: 'A01',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'DOUBLE',
						},
						description: {
							text: 'FLEXIBLE RATE\nDOUBLE GUEST ROOM\nGRADE II TOWNHOUSE, DISTINCTIVE DESIGN',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						base: '216.00',
						total: '216.00',
						variations: {
							average: {
								base: '216.00',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '216.00',
								},
							],
						},
					},
					policies: {
						guarantee: {
							acceptedPayments: {
								creditCards: ['AX', 'CA', 'CU', 'DC', 'DS', 'JC', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-02T23:59:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/90F6HOSC35',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=HLLON213&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'PILONATC',
				chainCode: 'PI',
				dupeId: '700135539',
				name: 'London Southwark (Bankside)',
				rating: '3',
				cityCode: 'LON',
				latitude: 51.50672,
				longitude: -0.09265,
				hotelDistance: {
					distance: 2.4,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['BANKSIDE', '34 PARK STREET'],
					postalCode: 'SE1 9EF',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '+44 0871 527 8676',
					fax: '+44 0207 407 0741',
					email: 'LondonSouthwark.PI@premierinn.com',
				},
				description: {
					lang: 'en',
					text: "Served up just a cherry stone's throw away from one of London's most renowned food markets, Premier Inn Southwark (Bankside) is a small and friendly hotel with all the ingredients for a great mini-break or family getaway.   Sample the atmosphere in Bankside's restaurants and bars. Lap up the applause at Shakespeare's Globe. Savour the spectacle of London's top attractions from Tower Bridge to the Shard. Whatever you tuck into out and about, our spacious rooms and extra-comfy beds offer a welcome taste of home.",
				},
				amenities: ['ELEVATOR', 'PARKING', 'WIRELESS_CONNECTIVITY', 'ALARM_CLOCK', 'TELEVISION', 'HAIR_DRYER', 'IRON/IRON_BOARD', 'NON_SMOKING_ROOMS'],
				media: [
					{
						uri: 'https://d1moe8jtgovopm.cloudfront.net/F8CBCBB9AA4242A4B85FEAEE1EE4BAD0/F8CBCBB9AA4242A4B85FEAEE1EE4BAD0.JPEG',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: 'J18GN7JWPA',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					room: {
						type: 'C1K',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'KING',
						},
						description: {
							text: 'Double Room\n1 King Bed',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						total: '171.63',
						variations: {
							average: {
								total: '171.63',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '166.00',
								},
							],
						},
					},
					policies: {
						guarantee: {
							acceptedPayments: {
								creditCards: ['AT', 'AX', 'CA', 'DC', 'DL', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-03T13:00:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/J18GN7JWPA',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=PILONATC&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'PILONAKU',
				chainCode: 'PI',
				dupeId: '700135537',
				name: 'London Euston',
				rating: '3',
				cityCode: 'LON',
				latitude: 51.52774,
				longitude: -0.12906,
				hotelDistance: {
					distance: 2.4,
					distanceUnit: 'KM',
				},
				address: {
					lines: ["1 DUKE'S ROAD"],
					postalCode: 'WC1H 9PJ',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '+44 0871 527 8656',
					fax: '+44 0207 554 3419',
					email: 'LondonEuston.PTI@whitbread.com',
				},
				description: {
					lang: 'en',
					text: "With more connections than the London Underground tube map, Premier Inn London Euston puts the best of the capital - and Europe - on your doorstep. From here, you're just minutes from Euston and King's Cross stations and Eurostar at St Pancras, as well as London's must-see sights.   Meet the stars at Madame Tussauds. Delve into the world's treasure-trove at the British Museum. Or hit the big brands of Oxford Street and the off-the-beaten-track stores in cool Camden. After a busy day, put your feet up and recharge in our recently refurbished rooms, tasty restaurant, and extra-comfy beds.",
				},
				amenities: ['ELEVATOR', 'CONFERENCE_FACILITIES', 'COFFEE_SHOP', 'WIRELESS_CONNECTIVITY', 'ALARM_CLOCK', 'TELEVISION', 'HAIR_DRYER', 'IRON/IRON_BOARD', 'NON_SMOKING_ROOMS'],
				media: [
					{
						uri: 'https://d1moe8jtgovopm.cloudfront.net/1699D599EC954D248A131E91843316BC/1699D599EC954D248A131E91843316BC.JPEG',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: '6KIOAS5E0J',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					room: {
						type: 'C1K',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'KING',
						},
						description: {
							text: 'Double Room\n1 King Bed',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						total: '167.63',
						variations: {
							average: {
								total: '167.63',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '162.00',
								},
							],
						},
					},
					policies: {
						guarantee: {
							acceptedPayments: {
								creditCards: ['AT', 'AX', 'CA', 'DC', 'DL', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-03T13:00:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/6KIOAS5E0J',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=PILONAKU&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'SMLONLMW',
				chainCode: 'SM',
				dupeId: '501935310',
				name: 'THE LEVEL AT MELIA WHITE HOUSE',
				rating: '4',
				cityCode: 'LON',
				latitude: 51.52531,
				longitude: -0.14363,
				hotelDistance: {
					distance: 2.4,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['ALBANY STREET REGENTS PARK'],
					postalCode: 'NW1 3UP',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '44-207-3913000',
					fax: '44-207-3876788',
				},
				amenities: ['DISABLED_FACILITIES', 'WHEELCHAIR_ACCESSIBLE_PUBLIC_AREA', 'GIFT_SHOP', 'LAUNDRY_SERVICE', 'AIR_CONDITIONING'],
			},
			available: true,
			offers: [
				{
					id: 'USV2A3DNY4',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'BAR',
					rateFamilyEstimated: {
						code: 'BAR',
						type: 'P',
					},
					commission: {
						percentage: '10.00',
					},
					boardType: 'BREAKFAST',
					room: {
						type: 'DBH',
						typeEstimated: {
							category: 'SUPERIOR_ROOM',
							beds: 1,
							bedType: 'KING',
						},
						description: {
							text: 'Flexible Unrestricted Rate\nTHE LEVEL PREMIUM ROOM 1PERS. BREAKFAST\n25m2, King Size, Air. Cond, TV, Minibar',
							lang: 'EN',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						base: '335.00',
						total: '335.00',
						variations: {
							average: {
								base: '335.00',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '335.00',
								},
							],
						},
					},
					policies: {
						guarantee: {
							acceptedPayments: {
								creditCards: ['AX', 'CA', 'DC', 'IK', 'MC', 'VI'],
								methods: ['CREDIT_CARD', 'TRAVEL_AGENT_ID'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-02T15:00:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/USV2A3DNY4',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=SMLONLMW&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'HSLONAIO',
				chainCode: 'HS',
				dupeId: '501819935',
				name: 'Rose Court',
				rating: '2',
				cityCode: 'LON',
				latitude: 51.51517,
				longitude: -0.15981,
				hotelDistance: {
					distance: 2.5,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['GREAT CUMBERLAND PLACE 35'],
					postalCode: 'W1H 7DS',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '(44) 2072627241',
					fax: '(44) 2077246596',
					email: 'manager@rosecourt.co.uk',
				},
				description: {
					lang: 'en',
					text: 'The hotel Rose Court, located in fine Victorian town house, warmly welcomes its guests to London. It offers comfortable and tastefully furnished rooms with many amenities. Enjoy a full English or continental breakfast in the nice breakfast room. The friendly reception staff is happy to assist you with any enquiries.',
				},
				amenities: ['24_HOUR_FRONT_DESK', 'ELEVATOR', 'SAFE_DEPOSIT_BOX', 'DRIVING_RANGE', 'INTERNET_SERVICES', 'WIRELESS_CONNECTIVITY', 'DOCTOR_ON_CALL', 'EXPRESS_CHECK_OUT', 'EXPRESS_CHECK_IN', 'TOUR_DESK', 'TENNIS', 'WATER_SPORTS'],
				media: [
					{
						uri: 'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/4F2DE8B24F084CD5BA4EDA277FC089F1',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: 'B3PLS8C8MI',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'PRO',
					rateFamilyEstimated: {
						code: 'PRO',
						type: 'P',
					},
					commission: {
						percentage: '4.00',
					},
					room: {
						type: 'ROH',
						typeEstimated: {
							category: 'STANDARD_ROOM',
						},
						description: {
							text: 'Hot Deal\nStandard room A standard room consists of a room with shower-toilet or bathtub-toilet.',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						total: '98.00',
						variations: {
							average: {
								total: '98.00',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '98.00',
								},
							],
						},
					},
					policies: {
						deposit: {
							acceptedPayments: {
								creditCards: ['AX', 'CA', 'DC', 'DN', 'MC', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'deposit',
						cancellation: {
							deadline: '2022-08-31T23:01:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/B3PLS8C8MI',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=HSLONAIO&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'HSLCYADY',
				chainCode: 'HS',
				dupeId: '700131386',
				name: 'Elmwood',
				rating: '2',
				cityCode: 'LCY',
				latitude: 51.52911,
				longitude: -0.12182,
				hotelDistance: {
					distance: 2.6,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['19 ARGYLE SQUARE'],
					postalCode: 'WC1H 8AS',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '(44) 2078334818',
					fax: '(44) 2078338149',
					email: 'info@elmwoodhotel.co.uk',
				},
				description: {
					lang: 'en',
					text: 'Hotel Elmwood in London is a small and cosy city hotel in typical English style. Its 35 friendly rooms are equipped with shower/WC, TV, hair-dryer, tea and coffee facilities. An intercontinental breakfast is served on request.',
				},
				amenities: ['24_HOUR_FRONT_DESK', 'MULTILINGUAL_STAFF', 'KIDS_WELCOME', 'WOMENS_GUEST_ROOMS', 'RESTAURANT', 'CONCIERGE', 'DRIVING_RANGE', 'NIGHT_CLUB', 'INTERNET_SERVICES', 'WIRELESS_CONNECTIVITY', 'DOCTOR_ON_CALL', 'COFFEE_SHOP', 'CONCIERGE', 'EXPRESS_CHECK_OUT', 'EXPRESS_CHECK_IN', 'FREE_AIRPORT_SHUTTLE', 'TOUR_DESK', 'ATM/CASH_MACHINE', 'FIRE_DETECTORS', 'VIDEO_SURVEILANCE'],
				media: [
					{
						uri: 'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/AC62771E7EDD4225B82517FE06CCA2D7',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: '1ILNPDBHTU',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					commission: {
						percentage: '4.00',
					},
					room: {
						type: 'ROH',
						typeEstimated: {
							category: 'STANDARD_ROOM',
						},
						description: {
							text: 'Event-Rate\nStandard room A standard room consists of a room with shower-toilet or bathtub-toilet.',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						total: '95.00',
						variations: {
							average: {
								total: '95.00',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '95.00',
								},
							],
						},
					},
					policies: {
						guarantee: {
							acceptedPayments: {
								creditCards: ['CA', 'MC', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-01T22:59:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/1ILNPDBHTU',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=HSLCYADY&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'PILONAQO',
				chainCode: 'PI',
				dupeId: '700076569',
				name: 'London Kings Cross',
				rating: '3',
				cityCode: 'LON',
				latitude: 51.532,
				longitude: -0.12209,
				hotelDistance: {
					distance: 2.9,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['26-30 YORK WAY', 'KINGS CROSS'],
					postalCode: 'N1 9AA',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '+44 0871 527 8672',
					fax: '+44 0203 697 1333',
					email: 'londonkingscross.pti@whitbread.com',
				},
				description: {
					lang: 'en',
					text: "Right at the hub of London's rail network, Premier Inn London King's Cross puts the capital and Europe on your doorstep. With easy connections across the UK, France and Belgium, the world's your oyster... or moules-frites!   Hop aboard the Eurostar for that early connection to Paris or DisneyLand. Wander to Camden for cool bars and bargain hunting. Or tick off the capital's must-see sights, from the London Eye to the O2 arena. Whether it's 'bon voyage', or 'welcome home', our friendly team and new, modern rooms will make sure you start the day with a spring in your step. Plus, our new all-day dining Bar+Block restaurant menu  will satisfy your appetite any time of the day.",
				},
				amenities: ['ELEVATOR', 'COFFEE_SHOP', 'WIRELESS_CONNECTIVITY', 'ALARM_CLOCK', 'TELEVISION', 'HAIR_DRYER', 'IRON/IRON_BOARD', 'NON_SMOKING_ROOMS'],
				media: [
					{
						uri: 'https://d1moe8jtgovopm.cloudfront.net/C356045A24C64F5DA5DB89AED20798AA/C356045A24C64F5DA5DB89AED20798AA.JPEG',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: 'HW39Z0FZOZ',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					room: {
						type: 'C1K',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'KING',
						},
						description: {
							text: 'Double Room\n1 King Bed',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						total: '167.63',
						variations: {
							average: {
								total: '167.63',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '162.00',
								},
							],
						},
					},
					policies: {
						guarantee: {
							acceptedPayments: {
								creditCards: ['AT', 'AX', 'CA', 'DC', 'DL', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-03T13:00:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/HW39Z0FZOZ',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=PILONAQO&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'HLLON102',
				chainCode: 'HL',
				dupeId: '700056457',
				name: 'HILTON LONDON TOWER BRIDGE',
				rating: '4',
				cityCode: 'LON',
				latitude: 51.50475,
				longitude: -0.08353,
				hotelDistance: {
					distance: 3.0,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['5 MORE LONDON PLACE, TOOLEY STREET'],
					postalCode: 'SE1 2BY',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '44-203-0024300',
					fax: '44-203-0024350',
				},
				description: {
					lang: 'en',
					text: "Set against the backdrop of one of London's best known historical landmarks, Hilton Tower Bridge is a modern and contemporary hotel with a striking exterior and is ideally situated on the doorstep of the City. This 245-bedroom hotel with high speed internet access in every guest room and wireless broadband internet access throughout offers something different and whether you're on business or pleasure the subtle touches of colour will enlighten your stay. When it's time to entertain clients or simply relax, take advantage of the hotel's lively cocktail bar before enjoying the delights of the restaurant's European cuisine to complete a memorable stay.",
				},
				amenities: ['BUSINESS_CENTER', 'MEETING_ROOMS', 'COFFEE_SHOP', 'RESTAURANT', 'WIDE_ENTRANCE', 'WIDE_CORRIDORS', 'FIRST_AID_STAF', 'INTERIOR_ROOM_ENTRY', 'EMERGENCY_LIGHTING', 'FIRE_DETECTORS', 'EXTINGUISHERS', 'SMOKE_DETECTOR', 'SPRINKLERS', 'KIDS_WELCOME', 'EXCHANGE_FACILITIES', 'EXECUTIVE_FLOOR', 'SAFE_DEPOSIT_BOX', 'AIR_CONDITIONING', 'HAIR_DRYER', 'MINIBAR', 'NON_SMOKING_ROOMS', 'PC_HOOKUP_IN_ROOM', 'DIRECT_DIAL_PHONE', 'FITNESS_CENTER'],
				media: [
					{
						uri: 'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/2F3A7AD5B2AD4BE297423F7EA80F47E0',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: '6I8B5XJB42',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					rateFamilyEstimated: {
						code: 'BAR',
						type: 'P',
					},
					commission: {
						percentage: '8.00',
					},
					room: {
						type: 'A0H',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'KING',
						},
						description: {
							text: 'FLEXIBLE RATE\nKING GUEST ROOM\nKING BED OPEN WINDOWS US-USB PLUGS TEA',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						base: '294.00',
						total: '294.00',
						variations: {
							average: {
								base: '294.00',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '294.00',
								},
							],
						},
					},
					policies: {
						guarantee: {
							acceptedPayments: {
								creditCards: ['AX', 'CA', 'CU', 'DC', 'DS', 'JC', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-02T23:59:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/6I8B5XJB42',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=HLLON102&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'PILONAKW',
				chainCode: 'PI',
				dupeId: '700076602',
				name: 'London Tower Bridge',
				rating: '3',
				cityCode: 'LON',
				latitude: 51.50003,
				longitude: -0.0815,
				hotelDistance: {
					distance: 3.2,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['159 TOWER BRIDGE ROAD'],
					postalCode: 'SE1 3LP',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '+44 0871 527 8678',
					fax: '+44 0207 940 3719',
					email: 'LondonTowerBridge.PI@premierinn.com',
				},
				description: {
					lang: 'en',
					text: "Wake up just seconds away from the world's most iconic  landmarks at our London Tower Bridge hotel. The hotel features our super comfy new   generation bedrooms, with an impressive 40\" flat screen TV, freshly-updated bathroom with large shower head, and kingsize Hypnos bed. - After a great night's sleep and famous Premier Inn Breakfast, you'll be in sightseeing heaven within minutes -  from the Tower of London and HMS Belfast to the Shard and  Canary Wharf. Explore the history of the capital at  world-renowned attractions. - Discover new bars along the whole of the Southbank. Take to the river to get a fresh view of the city. And when you've  ticked all the must-sees off your list, return to a top- notch restaurant and those extra-comfy beds.",
				},
				amenities: ['ELEVATOR', 'PARKING', 'WIRELESS_CONNECTIVITY', 'ALARM_CLOCK', 'TELEVISION', 'HAIR_DRYER', 'IRON/IRON_BOARD', 'NON_SMOKING_ROOMS'],
				media: [
					{
						uri: 'https://d1moe8jtgovopm.cloudfront.net/2059E77D53D2440FA1A2C63FDFD990A3/2059E77D53D2440FA1A2C63FDFD990A3.JPEG',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: 'IHPC2VT349',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					room: {
						type: 'C1K',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'KING',
						},
						description: {
							text: 'Double Room\n1 King Bed',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						total: '163.63',
						variations: {
							average: {
								total: '163.63',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '158.00',
								},
							],
						},
					},
					policies: {
						guarantee: {
							acceptedPayments: {
								creditCards: ['AT', 'AX', 'CA', 'DC', 'DL', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-03T13:00:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/IHPC2VT349',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=PILONAKW&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'HYLONGRE',
				chainCode: 'HY',
				dupeId: '700029595',
				name: 'Andaz Liverpool Street London',
				rating: '5',
				cityCode: 'LON',
				latitude: 51.51651,
				longitude: -0.08191,
				hotelDistance: {
					distance: 3.3,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['40 Liverpool Street', 'Andaz'],
					postalCode: 'EC2M 7QN',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '44-20-7961 1234',
					fax: '44-20-7961 1235',
				},
				description: {
					lang: 'en',
					text: "The five star Andaz Liverpool Street located in the City, London's financial district, is a modern English classic, housed in its historical building adjacent to Liverpool Street railway station.",
				},
				amenities: [
					'AUDIO-VISUAL_EQUIPMENT',
					'BUSINESS_CENTER',
					'CONVENTION_CENTRE',
					'MEETING_ROOMS',
					'RESTAURANT',
					'DISABLED_FACILITIES',
					'ACCESSIBLE_BATHS',
					'WHEELCHAIR_ACCESSIBLE_WASHBASIN',
					'WHEELCHAIR_ACCESSIBLE_LIGHT_SWITCH',
					'WHEELCHAIR_ACCESSIBLE_ELEVATORS',
					'DISABLED_ACCESSIBLE_TOILETS',
					'SERVICE_DOGS_ALLOWED',
					'DISABLED_TRAINED_STAFF',
					'EMERGENCY_PLAN_FOR_DISABLED',
					'EMERGENCY_CORD/BUTTON_BATHROOM',
					'HEARING_INDUCTION_LOOPS',
					'HANDRAILS_BATHROOM',
					'VIBRATING_PILLOWS_AVAILABLE',
					'ADAPT_ROOM_DOORS',
					'WHEELCHAIR_ACCESSIBLE_ROOM',
					'SPECIAL_NEEDS_MENU',
					'WHEELCHAIR_ACCESSIBLE_PUBLIC_AREA',
					'WIDE_ENTRANCE',
					'WIDE_CORRIDORS',
					'WIDE_RESTAURANT_ENTRANCE',
					'HANDRAILS_BATHROOM',
					'FIRST_AID_STAF',
					'INTERIOR_ROOM_ENTRY',
					'EMERGENCY_LIGHTING',
					'FIRE_DETECTORS',
					'EXTINGUISHERS',
					'FIRE_SAFETY',
					'GUARDED_PARKING',
					'RESTRICTED_PUBLIC_ACCESS',
					'SMOKE_DETECTOR',
					'VIDEO_SURVEILANCE',
					'BABY-SITTING',
					'BEAUTY_PARLOUR',
					'CAR_RENTAL',
					'KIDS_WELCOME',
					'ELEVATOR',
					'EXCHANGE_FACILITIES',
					'INTERNET_HOTSPOTS',
					'FREE_INTERNET',
					'WIFI',
					'LAUNDRY_SERVICE',
					'MASSAGE',
					'VALET_PARKING',
					'LOUNGE',
					'HAIRDRESSER',
					'LOUNGE',
					'ROOM_SERVICE',
					'SAFE_DEPOSIT_BOX',
					'BALLROOM',
					'SPA',
					'AIR_CONDITIONING',
					'FAX_MACHINE',
					'HAIR_DRYER',
					'MINIBAR',
					'MOVIE_CHANNELS',
					'NON_SMOKING_ROOMS',
					'PC_HOOKUP_IN_ROOM',
					'DIRECT_DIAL_PHONE',
					'TELEVISION',
					'WI-FI_IN_ROOM',
					'TELECONFERENCE',
					'SIGHTSEEING',
					'FITNESS_CENTER',
				],
				media: [
					{
						uri: 'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/A852BD3A5B0C453C9C4C8D38E840F984',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: 'TFZ6CTU1JX',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: '***',
					rateFamilyEstimated: {
						code: 'RAC',
						type: 'P',
					},
					commission: {
						percentage: '10.00',
					},
					room: {
						type: 'QEN',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'QUEEN',
						},
						description: {
							text: 'Standard Rate 1 Queen Bed\nQUEEN BED: 260SQFT: FREE MINIBAR:WINE:CANAPES',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						base: '312.00',
						total: '312.00',
						variations: {
							average: {
								base: '312.00',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '312.00',
								},
							],
						},
					},
					policies: {
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-01T23:59:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/TFZ6CTU1JX',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=HYLONGRE&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'HLLON583',
				chainCode: 'HL',
				dupeId: '700143906',
				name: 'DOUBLETREE TOWER OF LONDON',
				rating: '4',
				cityCode: 'LON',
				latitude: 51.51091,
				longitude: -0.07849,
				hotelDistance: {
					distance: 3.4,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['7 PEPYS STREET'],
					postalCode: 'EC3N 4AF',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '44-207-7091000',
					fax: '44-207-7091001',
				},
				amenities: ['MEETING_ROOMS', 'RESTAURANT', 'ACCESSIBLE_PARKING', 'FIRST_AID_STAF', 'INTERIOR_ROOM_ENTRY', 'EMERGENCY_LIGHTING', 'FIRE_DETECTORS', 'EXTINGUISHERS', 'GUARDED_PARKING', 'RESTRICTED_PUBLIC_ACCESS', 'SMOKE_DETECTOR', 'SPRINKLERS', 'EXECUTIVE_FLOOR', 'LAUNDRY_SERVICE', 'PARKING', 'AIR_CONDITIONING', 'HAIR_DRYER', 'NON_SMOKING_ROOMS', 'PC_HOOKUP_IN_ROOM', 'DIRECT_DIAL_PHONE', 'TELEVISION', 'FITNESS_CENTER'],
				media: [
					{
						uri: 'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/15D147E478524457A25FC4362407941F',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: 'E6Q1LW4WJ1',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					rateFamilyEstimated: {
						code: 'BAR',
						type: 'P',
					},
					commission: {
						percentage: '8.00',
					},
					room: {
						type: 'A00',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'QUEEN',
						},
						description: {
							text: 'FLEXIBLE RATE\nQUEEN GUEST ROOM\nWIFI / 49 INCH FLAT SCREEN TV',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						base: '307.00',
						total: '307.00',
						variations: {
							average: {
								base: '307.00',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '307.00',
								},
							],
						},
					},
					policies: {
						guarantee: {
							acceptedPayments: {
								creditCards: ['AX', 'CA', 'CU', 'DC', 'DS', 'JC', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-02T23:59:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/E6Q1LW4WJ1',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=HLLON583&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'BWLON187',
				chainCode: 'BW',
				dupeId: '700048011',
				name: 'Best Western Mornington Hotel London Hyde Park',
				rating: '3',
				cityCode: 'LON',
				latitude: 51.51159,
				longitude: -0.17729,
				hotelDistance: {
					distance: 3.5,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['12 LANCASTER GATE'],
					postalCode: 'W2 3LG',
					cityName: 'LONDON ENGLAND',
					countryCode: 'GB',
				},
				contact: {
					phone: '+44 20 72627361',
					fax: '+44 20 77061028',
					email: 'london@mornington.co.uk',
				},
				description: {
					lang: 'en',
					text: 'The Best Western Mornington Hotel London Hyde Park enjoys a great location in the heart of Greater London. Close to Lancaster Gate tube and buses, our accommodation has been elegantly re-designed and is fully equipped! Our bedrooms are, of course, comfortable...and complemented by our intimate Library Bar which serves drinks and light snacks. Please note that whilst we only have a breakfast restaurant, there are a variety of good restaurants nearby. The great news is our free high-speed wireless Internet access will help you find them all! Shopping opportunities are countless in the capital, but if you simply want to wander around and see the sights, Hyde Park is the perfect starting point! The West End is less than two miles away if you fancy a show, and The Victoria & Albert and Natural History Museums will enthrall you as you explore. Enjoy your stay.',
				},
				amenities: ['HIGH_SPEED_WIRELESS', 'MULTILINGUAL_STAFF', 'HIGH_SPEED_INTERNET', 'SAFE_DEPOSIT_BOX', 'ROOM_SERVICE', '24_HOUR_FRONT_DESK', 'FRONT_DESK', 'ONSITE_LAUNDRY', 'GYM', 'PORTER/BELLBOY', 'LOUNGE', 'ELEVATOR', 'VIDEO_SURVEILANCE', 'SMOKE_DETECTOR', 'FIRE_DETECTORS', 'EMERGENCY_LIGHTING', 'FIRST_AID_STAF', 'WAKEUP_SERVICE', 'HAIR_DRYER', 'DIRECT_DIAL_PHONE', 'HIGH_SPEED_INTERNET_IN_ROOM', 'TEA/COFFEE_MAKER', 'ALARM_CLOCK'],
				media: [
					{
						uri: 'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/8A6F2E7B82594082912DFD954248BFDB',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: '4MJBM8HBEB',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					rateFamilyEstimated: {
						code: 'BAR',
						type: 'P',
					},
					commission: {
						percentage: '0.50',
					},
					boardType: 'HALF_BOARD',
					room: {
						type: 'A1T',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'SINGLE',
						},
						description: {
							text: 'FLEXIBLE RATE*BEST LEAST RESTRICTIVE RATE\n1 SINGLE BED,NO-SMOKING,STANDARD\nSTANDARD',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						base: '136.50',
						total: '136.50',
						variations: {
							average: {
								base: '136.50',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '136.50',
								},
							],
						},
					},
					policies: {
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-03T16:00:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/4MJBM8HBEB',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=BWLON187&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'PILONBAG',
				chainCode: 'PI',
				dupeId: '700189812',
				name: 'London Angel Islington',
				rating: '3',
				cityCode: 'LON',
				latitude: 51.53498,
				longitude: -0.10563,
				hotelDistance: {
					distance: 3.6,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['18 PARKFIELD STREET ', 'ISLINGTON'],
					postalCode: 'N1',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '+44 0871 527 8558',
					fax: '+44 0207 424 5997',
					email: 'Londonislingtongreen.PI@PremierInn.com',
				},
				description: {
					lang: 'en',
					text: "Who says comfort and convenience should cost the earth? At Premier Inn Angel/Islington, you'll find everything you need for a great mini-break or city stay - without the jaw-dropping price tag.   Step out and explore the bars and restaurants of Upper Street and the O2 Academy. Watch the Gunners in action at the Emirates Stadium. Or hop on a tube and tick off the capital's must-see sights: the Houses of Parliament, the Tower of London and the British Museum are just minutes away. And, at the end of the day, return to a warm welcome, air-conditioned rooms, and extra-comfy beds.",
				},
				amenities: ['ELEVATOR', 'WIRELESS_CONNECTIVITY', 'ALARM_CLOCK', 'TELEVISION', 'HAIR_DRYER', 'IRON/IRON_BOARD', 'NON_SMOKING_ROOMS'],
			},
			available: true,
			offers: [
				{
					id: 'B5DTX4IXFN',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					room: {
						type: 'C1K',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'KING',
						},
						description: {
							text: 'Double Room\n1 King Bed',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						total: '155.63',
						variations: {
							average: {
								total: '155.63',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '150.00',
								},
							],
						},
					},
					policies: {
						guarantee: {
							acceptedPayments: {
								creditCards: ['AT', 'AX', 'CA', 'DC', 'DL', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-03T13:00:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/B5DTX4IXFN',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=PILONBAG&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'HLLON104',
				chainCode: 'HL',
				dupeId: '700008158',
				name: 'HILTON LONDON ISLINGTON',
				rating: '4',
				cityCode: 'LON',
				latitude: 51.53559,
				longitude: -0.10631,
				hotelDistance: {
					distance: 3.6,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['53 UPPER STREET'],
					postalCode: 'N1 OQH',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '44-207-3547700',
					fax: '44-207-0024366',
				},
				description: {
					lang: 'en',
					text: "Refurbished in mid 2013, Hilton London Islington is situated in the heart of fashionable Islington yet remains close to central London, striking the perfect locational balance. The hotel is just 5 minutes' walk from Angel tube station and one stop from Kings Cross St. Pancras, making it an ideal base from which to connect to Europe. Located next to the Business Design Centre and just a 5 minutes' drive to Emirates Stadium, the hotel offers convenient accommodation for attending a conference or event. An adjacent car park is available with discounted overnight rates for hotel residents (0.70 per hour from 18:00 until 08:00).  Within walking distance of the hotel, guests can see a play at Almeida or Sadler's Wells Theatres and discover the street markets. Stay only one tube stop away from Old Street Station or to some of London's most popular attractions: Tower Bridge, Tower of London, London Eye and the famous Oxford Street.  Unwind in an elegantly furnished guest room or suite with modern amenities and new decor. Catch up with work at the desk, use the complimentary in-room WiFi or relax with on-demand movies on the 42-inch flat-screen TV.  Relax in the trendy Axis Bar & Kitchen, open for breakfast, lunch and dinner. The hotel restaurant serves locally and internationally inspired cuisine in a laid back atmosphere. Dine in with 24-hour room service. The new Executive Lounge allows guests to enjoy free WiFi, breakfast, coffee and snacks throughout the day and canapés in the evening.",
				},
				amenities: ['CONVENTION_CENTRE', 'RESTAURANT', 'ACCESSIBLE_PARKING', 'WIDE_ENTRANCE', 'WIDE_CORRIDORS', 'FIRST_AID_STAF', 'INTERIOR_ROOM_ENTRY', 'EMERGENCY_LIGHTING', 'FIRE_DETECTORS', 'EXTINGUISHERS', 'FIRE_SAFETY', 'GUARDED_PARKING', 'RESTRICTED_PUBLIC_ACCESS', 'SMOKE_DETECTOR', 'KIDS_WELCOME', 'EXCHANGE_FACILITIES', 'EXECUTIVE_FLOOR', 'LAUNDRY_SERVICE', 'PARKING', 'PETS_ALLOWED', 'AIR_CONDITIONING', 'HAIR_DRYER', 'MOVIE_CHANNELS', 'NON_SMOKING_ROOMS', 'PC_HOOKUP_IN_ROOM', 'DIRECT_DIAL_PHONE', 'TELEVISION'],
				media: [
					{
						uri: 'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/477187884398479DB54847F61537C686',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: 'Z2USCKTJRY',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					rateFamilyEstimated: {
						code: 'BAR',
						type: 'P',
					},
					commission: {
						percentage: '8.00',
					},
					room: {
						type: 'A0W',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'KING',
						},
						description: {
							text: 'FLEXIBLE RATE\nKING GUEST ROOM\nDBL ROOM/ 42INCH PLASMATV',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						base: '229.00',
						total: '229.00',
						variations: {
							average: {
								base: '229.00',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '229.00',
								},
							],
						},
					},
					policies: {
						guarantee: {
							acceptedPayments: {
								creditCards: ['AX', 'CA', 'CU', 'DC', 'DS', 'JC', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-02T23:59:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/Z2USCKTJRY',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=HLLON104&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'PILONAPC',
				chainCode: 'PI',
				dupeId: '700043107',
				name: 'London City (Tower Hill)',
				rating: '3',
				cityCode: 'LON',
				latitude: 51.51135,
				longitude: -0.07195,
				hotelDistance: {
					distance: 3.9,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['24 PRESCOT STREET'],
					postalCode: 'E1 8BB',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '+44 0871 527 8646',
					fax: '+44 0207 977 5451',
					email: 'londoncitytowerhill.pi@whitbread.com',
				},
				description: {
					lang: 'en',
					text: "Seeing all the sights is made oh-so-simple at the Premier Inn Tower Hill. You can easily walk to many of the landmarks on both sides of the river. And, with handy tube connections, even the more distant sights are close to home.    Marvel at The Crown Jewels at the Tower of London. Wander along the Thames to the Tate Modern and St Paul's Cathedral. Or head north to buzzing Brick Lane and the cutting-edge White Chapel Gallery. After your fix of culture (or curry), return to our friendly team, spacious rooms and extra-comfy",
				},
				amenities: ['ELEVATOR', 'WIRELESS_CONNECTIVITY', 'ALARM_CLOCK', 'TELEVISION', 'HAIR_DRYER', 'IRON/IRON_BOARD', 'NON_SMOKING_ROOMS'],
				media: [
					{
						uri: 'https://d1moe8jtgovopm.cloudfront.net/AAFF4B8207AD4019B4D57B672C57361F/AAFF4B8207AD4019B4D57B672C57361F.JPEG',
						category: 'LOBBY',
					},
				],
			},
			available: true,
			offers: [
				{
					id: 'CX8IAP6IL5',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'RAC',
					room: {
						type: 'C1K',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'KING',
						},
						description: {
							text: 'Double Room\n1 King Bed',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						total: '149.63',
						variations: {
							average: {
								total: '149.63',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '144.00',
								},
							],
						},
					},
					policies: {
						guarantee: {
							acceptedPayments: {
								creditCards: ['AT', 'AX', 'CA', 'DC', 'DL', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'guarantee',
						cancellation: {
							deadline: '2022-09-03T13:00:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/CX8IAP6IL5',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=PILONAPC&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'RTLONCIT',
				chainCode: 'RT',
				dupeId: '700055827',
				name: 'ibis London City - Shoreditch',
				rating: '3',
				cityCode: 'LON',
				latitude: 51.51534,
				longitude: -0.07197,
				hotelDistance: {
					distance: 3.9,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['5 COMMERCIAL STREET'],
					postalCode: 'E1 6BF',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '44/207/4228400',
					fax: '44/207/4228410',
					email: 'H5011@accor.com',
				},
				description: {
					lang: 'en',
					text: "Quite literally a few hops, skips or jumps (your choice) from Aldgate East station, 15 minutes from the banks of the River Thames and 10 minutes from Liverpool Street station, ibis London City positions you in the perfect spot for exploring London's magnetic attractions. With a decor that pays homage to nearby Brick Lane, our modern hotel and friendly team remains a hot choice if you are seeking relaxation, culture and the ultimate night's sleep.",
				},
				amenities: ['ELEVATOR', 'SAFE_DEPOSIT_BOX', 'INTERNET_SERVICES', '220_AC', 'PARKING', '120_AC', 'ADAPTED_PHONES', 'ACCESSIBLE_BATHS', 'WHEELCHAIR_ACCESSIBLE_PUBLIC_AREA', 'DISABLED_FACILITIES', 'FIRE_SAFETY', 'SMOKE_DETECTOR', 'FIRE_DETECTORS', 'EMERGENCY_LIGHTING', 'WIRELESS_CONNECTIVITY', '24_HOUR_FRONT_DESK', 'CONNECTING_ROOMS', 'MULTILINGUAL_STAFF', 'RESTAURANT', 'MEETING_FACILITIES', 'HIGH_SPEED_INTERNET_IN_ROOM', 'SHOWER', 'DIRECT_DIAL_PHONE', 'WAKEUP_SERVICE', 'CABLE_TELEVISION', 'TELEVISION', 'SATELLITE_TV', 'WI-FI_IN_ROOM', 'CRIBS_AVAILABLE', 'FREE_NEWSPAPER', 'NON_SMOKING_ROOMS'],
				media: [
					{
						uri: 'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/12B6CE2E4BDA483EABBE9ADB24EA372C',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: '8XUNHOJGVN',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'PIB',
					rateFamilyEstimated: {
						code: 'BAR',
						type: 'P',
					},
					room: {
						type: 'C1D',
						typeEstimated: {
							category: 'STANDARD_ROOM',
							beds: 1,
							bedType: 'DOUBLE',
						},
						description: {
							text: 'FLEXIBLE RATE\nStandard Room with one double bed',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						total: '75.06',
						variations: {
							average: {
								base: '75.00',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '75.00',
								},
							],
						},
					},
					policies: {
						holdTime: {
							deadline: '2022-09-03T14:00:00',
						},
						guarantee: {
							acceptedPayments: {
								creditCards: ['AH', 'AX', 'CA', 'DC', 'EC', 'IK', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'guarantee',
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/8XUNHOJGVN',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=RTLONCIT&view=FULL',
		},
		{
			type: 'hotel-offers',
			hotel: {
				type: 'hotel',
				hotelId: 'HSLCYACR',
				chainCode: 'HS',
				dupeId: '700025206',
				name: 'Troy',
				rating: '3',
				cityCode: 'LCY',
				latitude: 51.51156,
				longitude: -0.185,
				hotelDistance: {
					distance: 4.1,
					distanceUnit: 'KM',
				},
				address: {
					lines: ['68 - 70 QUEENSBOROUGH TERRACE'],
					postalCode: 'W2 3SH',
					cityName: 'LONDON',
					countryCode: 'GB',
				},
				contact: {
					phone: '(44) 2072212721',
					fax: '(44) 2077921215',
					email: 'troyhotel@btconnect.com',
				},
				description: {
					lang: 'en',
					text: 'The privately owned hotel Troy in London is quietly situated and offers well-equipped rooms designed to modern standards and available in different categories. Additionally, each room includes complimentary Wi-Fi. Each morning, breakfast is at the guests’ disposal served in the pleasant dining room.  The cosy lobby with comfortable seating areas invites to stay.',
				},
				amenities: ['24_HOUR_FRONT_DESK', 'MULTILINGUAL_STAFF', 'CASINO', 'DOCTOR_ON_CALL', 'ELEVATOR', 'INTERNET_SERVICES', 'RESTAURANT', 'CONCIERGE', 'DRIVING_RANGE', 'NIGHT_CLUB', 'WIRELESS_CONNECTIVITY', 'DOCTOR_ON_CALL', 'COFFEE_SHOP', 'CAR_RENTAL', 'EXPRESS_CHECK_OUT', 'EXPRESS_CHECK_IN', 'FREE_AIRPORT_SHUTTLE', 'LAUNDRY_SERVICE', 'ATM/CASH_MACHINE', 'FIRE_DETECTORS', 'VIDEO_SURVEILANCE', 'WATER_SPORTS'],
				media: [
					{
						uri: 'http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/DF43E2A4460A465288F1E14326ED8B89',
						category: 'EXTERIOR',
					},
				],
			},
			available: true,
			offers: [
				{
					id: 'JVXYU4J1CA',
					checkInDate: '2022-09-03',
					checkOutDate: '2022-09-04',
					rateCode: 'PRO',
					rateFamilyEstimated: {
						code: 'PRO',
						type: 'P',
					},
					commission: {
						percentage: '4.00',
					},
					room: {
						type: 'ROH',
						typeEstimated: {
							category: 'STANDARD_ROOM',
						},
						description: {
							text: 'Hot Deal\nStandard room A standard room consists of a room with shower-toilet or bathtub-toilet.',
						},
					},
					guests: {
						adults: 1,
					},
					price: {
						currency: 'GBP',
						total: '116.00',
						variations: {
							average: {
								total: '116.00',
							},
							changes: [
								{
									startDate: '2022-09-03',
									endDate: '2022-09-04',
									total: '116.00',
								},
							],
						},
					},
					policies: {
						deposit: {
							acceptedPayments: {
								creditCards: ['AX', 'CA', 'MC', 'VI'],
								methods: ['CREDIT_CARD'],
							},
						},
						paymentType: 'deposit',
						cancellation: {
							deadline: '2022-08-31T23:01:00+01:00',
						},
					},
					self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/JVXYU4J1CA',
				},
			],
			self: 'https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=HSLCYACR&view=FULL',
		},
	],
	meta: {
		links: {
			next: 'https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=LON&view=FULL&page[offset]=I4OW2KU0IF2A_300',
		},
	},
}
