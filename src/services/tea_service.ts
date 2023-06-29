export const getTea = (name = 'Earl Grey', temperature = 'Hot') => {
	return {
		drinkType: 'Tea',
		name,
		temperature,
	};
};
