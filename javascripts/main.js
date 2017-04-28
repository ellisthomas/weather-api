$(document).ready(function(){

const apiKey = "";

// results.weather[i].description


$("#zipBtn").on("click", (e) => {
		let myZip = $("#usr").val();
		loadWeather(myZip).then((result) => {
			console.log("result", result);
		}).catch((error) => {

		});

	});

 $('#usr').keyup(function (event) {
        var key = event.keyCode || event.which;
        if (key === 13) {
            loadWeather();
        }
        return false;
    });



	const loadWeather = (yourZip) => {
		return new Promise((resolve, reject) => {
			$.ajax(`http://api.openweathermap.org/data/2.5/weather?zip=${yourZip},us&units=imperial&appid=${apiKey}`)
			.done((data) => {resolve(data);
			console.log(data);
			writeWeatherToDom(data);
			writeConditionsToDom(data);
		})
			.fail((error) => reject(error));
		});
	};


	// const writeWeatherToDom = (weather) => {
	// 	let outputString = `<div>${weather}</div>`;
	// 	$("#weather").append(outputString);
	// };





/// test for print ////

	const writeWeatherToDom = (results) => {
		let outputString = "";
		for (i = 0; i < results.weather[i].length; i++){
			outputString = `<div>${results.weather[i].description}</div>`;
		}
		$("#weather").append(outputString);
	};

	const writeConditionsToDom = (data) => {
		let outputString = `<div>${results.main.temp}</>`;
			outputString = `<div>${results.main.pressure}</>`;
			$("#weather").append(outputString);
	};

///// end test /////////



}); // end of doc.ready



// Temperature
// Conditions
// Air pressure
// Wind speed
// An affordance to view the forecast for the current day, the next three days, or the next 7 days
