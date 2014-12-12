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
]

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
			.append($('<button/>', {'class': 'button button--placeorder'}).text('Заказать')));
}

