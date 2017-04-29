$(document).ready(function(){

const apiKey = "";

let myZip;

// results.weather[i].description


$("#zipBtn").on("click", (e) => {
		myZip = $("#usr").val();
		$("#background").hide();
		loadWeather(myZip).then((results) => {
			console.log("results", results);
			writeWeatherToDom(results);
		}).catch((error) => {

		});

	});

 $('#usr').keyup(function (e) {
        if (e.keyCode === 13) {
        	myZip = $("#usr").val();
        	loadWeather(myZip).then((results) => {
        		console.log("results", results);
            writeWeatherToDom(results);
        	}).catch((error) => {
        		console.log(error);
        	});
        }

    });

///////////////////////////////////////////
 const writeThreeDayDom = (results) => {
		console.log(results);
	};
///////////////////////////////////////////

 $("#threeDay").on("click", "a", () => {
 	myZip = $("#urs").val();
 	threeDayForecast(myZip).then((results) => {
 		console.log("results", results);
 		writeThreeDayDom(results);
 	}).catch((error2) => {
 		console.log(error2);
 	});
 });



	const loadWeather = (yourZip) => {
		return new Promise((resolve, reject) => {
			$.ajax(`http://api.openweathermap.org/data/2.5/weather?zip=${yourZip},us&units=imperial&appid=${apiKey}`)
			.done((data) => resolve(data))
			.fail((error) => reject(error));
		});
	};

	const threeDayForecast = (yourZip) => {
		return new Promise((resolve, reject) => {
			$.ajax(`api.openweathermap.org/data/2.5/forecast?zip=37211,us&appid=75a3c6aef353b650190a67e16e7eae3f`)
			// $.ajax(`api.openweathermap.org/data/2.5/forecast?zip={yourZip},us&units=imperial&appid={apiKey}`)
			.done((data1) => resolve(data1))
			.fail((error) => reject(error));
		});
	};

	



	
/// test for print ////

	const writeWeatherToDom = (results) => {
		let outputString = "";
		for (let i = 0; i < results.weather.length; i++){
			outputString += `<h1>City: ${results.name}</h1>`;
			outputString += `<h2>Current Weather: ${results.weather[i].description}</h2>`;
		}
			outputString += `<h3>Temperature: ${results.main.temp}</h3>`;
			outputString += `<h3>Air Pressure : ${results.main.pressure}</h3>`;
			outputString += `<h3>Wind Speed: ${results.wind.speed}</h3>`;
			outputString += `<a href="#">Three Day Forecast</a>`;
			outputString += `<br>`;
			outputString += `<a href="#">Seven Day Forecast</a>`;
		$("#weather").append(outputString);
	};

	

///// end test /////////



}); // end of doc.ready



// Temperature
// Conditions
// Air pressure
// Wind speed
// An affordance to view the forecast for the current day, the next three days, or the next 7 days
