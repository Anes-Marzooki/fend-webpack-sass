const KEY = 'd98ef3246962037e642cfebbc9b82b35';

const apiCall = async () => {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?zip=10001,us&appid=${KEY}&units=metric`
	);
	const data = await response.json();
	try {
		console.log('DATA:', data);
		document.querySelector('#fetch-results').innerHTML = data.main.temp;
	} catch (error) {
		console.log(error);
	}
};
export { apiCall };
