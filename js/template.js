var machines = [
	{
		url: "img/coffeemachine-1.png",
		name: "Delonghi ECO 100500",
		descriptions: [
			"Каппучино", 
			"Автоматическая", 
			"Для молотого кофе", 
			"Автоматическое приготовление капуччино",
			"Одновременная раздача на 2 чашки"
		]
	},
	{
		url: "img/coffeemachine-2.jpg",
		name: "Delonghi ECO 320",
		descriptions: [
			"Эспрессо", 
			"Полуавтоматическая", 
			"Для молотого кофе и в таблетках", 
			"Ручное приготовление капуччино",
			"Одновременная раздача на 2 чашки"
		]
	},
];

var sorts = [
	{	
		country: "New",
		url: "img/sort-icon-1.png",
		items:
			[
				{sort: "Куба Туркино Лавадо", price: 2000},
				{sort: "Мексика Маргонджип", price: 2600},
				{sort: "Карамель Тоффи", price: 2300}
			],
		_id: 'sort_1'	
	},
	{	
		country: "America",
		url: "img/sort-icon-2.png",
		items:
			[
				{sort: "Мексика Маргонджип", price: 2600},
				{sort: "Карамель Тоффи", price: 2300},
				{sort: "Сабра (шоколад, апельсин)", price: 2500}
			],
		_id: 'sort_2'
	},
	{
		country: "Africa",
		url: "img/sort-icon-3.png",
		items:
			[
				{sort: "Куба Туркино Лавадо", price: 2000},
				{sort: "Мексика Маргонджип", price: 2600}
				
			],
		_id: 'sort_3'
	},
	{
		country: "Indonesia",
		url: "img/sort-icon-4.png",
		items:
			[
				{sort: "Куба Туркино Лавадо", price: 2000},
				{sort: "Мексика Маргонджип", price: 2600},
				{sort: "Карамель Тоффи", price: 2300},
				{sort: "Сабра (шоколад, апельсин)", price: 2500}
			],
		_id: 'sort_4'
	},
	{
		country: "Exotic",
		url: "img/sort-icon-5.png",
		items:
			[
				{sort: "Куба Туркино Лавадо", price: 5000}
			],
		_id: 'sort_5'
	},
	{
		country: "Elit",
		url: "img/sort-icon-6.png",
		items:
			[
				{sort: "Мексика Маргонджип", price: 2600},
				{sort: "Карамель Тоффи", price: 2400},
				{sort: "Сабра (шоколад, апельсин)", price: 2000}
			],
		_id: 'sort_6'
	},
	{
		country: "Espresso",
		url: "img/sort-icon-8.png",
		items:
			[
				{sort: "Куба Туркино Лавадо", price: 2700},
				{sort: "Мексика Маргонджип", price: 2300},
				{sort: "Карамель Тоффи", price: 2300}
			],
		_id: 'sort_7'
	},
	{
		country: "Robusta",
		url: "img/sort-icon-8.png",
		items:
			[
				{sort: "Куба Туркино Лавадо", price: 1000},
				{sort: "Мексика Маргонджип", price: 3600}
			],
		_id: 'sort_8'
	},
	{
		country: "Aromatized",
		url: "img/sort-icon-9.png",
		items:
			[
				{sort: "Куба Туркино Лавадо", price: 2400},
				{sort: "Сабра (шоколад, апельсин)", price: 2500}
			],
		_id: 'sort_9'
	},
	{
		country: "Green coffee",
		url: "img/sort-icon-10.png",
		items:
			[
				{sort: "Куба Туркино Лавадо", price: 2000},
				{sort: "Мексика Маргонджип", price: 2600},
				{sort: "Карамель Тоффи", price: 2300},
				{sort: "Сабра (шоколад, апельсин)", price: 2500}
			],
		_id: 'sort_10'
	},
	
];

function renderMachine(machine) {
	return $('<div/>', {'class': 'slider__item'})
		.append($('<img/>', {src: machine.url, width: 262, height: 334}))
		.append($('<div/>', {'class': 'description'})
			.append($('<div/>', {'class': 'name'}).text(machine.name))
			.append($('<ul/>'), $.map(machine.descriptions, function(desc) {
				return $('<li/>').append(desc);
			})))
		.append($('<div/>', {'class': 'terms'})
			.append($('<div/>', {'class': 'terms__item'})
				.append($('<img/>', {src: "img/box-icon.png"}))
				.append($('<span>Бесплатная доставка<br> и установка</span>')))
			.append($('<div/>', {'class': 'terms__item'})
				.append($('<img/>', {src: "img/people-icon.png"}))
				.append($('<span>3-8 человека</span>')))
			.append($('<div/>', {'class': 'terms__item'})
				.append($('<img/>', {src: "img/kg-icon.png"}))
				.append($('<span>От 2,5 кг в месяц</span>')))
			.append($('<button/>', {'class': 'button button--placeorder button--slider'}).text('Заказать')));
}

function renderSorts(sort) {
	return $('<div/>', {'class': 'icon__item', 'id': sort._id})
		.append($('<img/>', {src: sort.url, width: 61, height: 60}))
		.append($('<div>', {'class': 'icon__text'}).text(sort.country))
}

function renderList(data) {
	return $('<li/>')
		.append($('<div/>', {'class': 'sort'}).text(data.sort))
		.append($('<div/>', {'class': 'price'})
			.append($('<span/>').text(data.price))
			.append($('<span/>').text(' кг')))

			
}




