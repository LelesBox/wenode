var request = require('request');
var moment = require("moment");
var weather = require('./weather');

// 根据拼音差城市天气id
var url = "http://apistore.baidu.com/microservice/weather?citypinyin=" + process.argv[2] || "nanjing";

request(url, function(error, response, body) {
	if (!error && response.statusCode == 200) {
		var info = JSON.parse(body);
		var cityid = info.retData.citycode;
		requestWeather(cityid);
	}
})


function requestWeather(cityid) {
	request('http://aider.meizu.com/app/weather/listWeather?cityIds=' + cityid, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var infos = JSON.parse(body);
			console.log("Weather for City "+infos.value[0].city+"\n");
			realtimeWeather(infos.value[0]);
			var endtimes = [];
			var details = [];
			var icons = [];
			for (var i = 0; i < 4; i++) {
				var info = infos.value[0].weatherDetailsInfo.weather3HoursDetailsInfos[i * 2 + 1];
				var endtime = info.endTime.substr(5, 15);
				endtimes.push(endtime);
				var type = info.weather;
				var icon = weather.findeIcon(type);
				icons.push(icon);
				var temp = info.lowerestTemperature + "℃";
				var wd = info.wd;
				var ws = info.ws;
				var isRainFall = info.isRainFall;
				var detail = weather.detail(type, temp, wd, ws, isRainFall);
				details.push(detail);
			}
			var date = moment().format("MMM Do YY");
			console.log(weather.header(date, endtimes).join("\n"));
			var result = [];
			for (var i = 0; i < 5; i++) {
				var combine = "│" + icons[0][i] + details[0][i] + icons[1][i] + details[1][i] + icons[2][i] + details[2][i] + icons[3][i] + details[3][i];
				result.push(combine);
			}
			console.log(result.join("\n"));
			console.log(weather.foot);
			// 天气预报
			weatherForcast(infos.value[0].weathers);
		} else {
			console.log(error);
		}
	});
}

function weatherForcast(weathers) {
	var details = [];
	var icons = [];
	var dates = [];
	for (var i = 1; i < 5; i++) {
		var dt = weathers[i].date;
		dates.push(dt);
		var type = weathers[i].weather;
		var icon = weather.findeIcon(type);
		icons.push(icon);
		var temp = weathers[i].temp_night_c + "℃-" + weathers[i].temp_day_c + "℃";
		var wd = weathers[i].wd;
		var ws = weathers[i].ws;
		var week = weathers[i].week;
		var detail = weather.detail(type, temp, wd, ws, week);
		details.push(detail);
	}
	var title = "forcast";
	console.log(weather.header(title, dates).join("\n"));
	var result = [];
	for (var i = 0; i < 5; i++) {
		var combine = "│" + icons[0][i] + details[0][i] + icons[1][i] + details[1][i] + icons[2][i] + details[2][i] + icons[3][i] + details[3][i];
		result.push(combine);
	}
	console.log(result.join("\n"));
	console.log(weather.foot);
}

function realtimeWeather(value) {
	var type = value.realtime.weather;
	var temp = value.realtime.sendibleTemp + "℃";
	var wd = value.realtime.wD;
	var ws = value.realtime.wS;
	var pm25 = value.pm25.pm25;
	var aqi = value.pm25.aqi;
	var pm10 = value.pm25.pm10;
	var quality = value.pm25.quality;
	var cityrank = value.pm25.cityrank;
	var icon = weather.findeIcon(type);
	var air = "PM2.5:" + pm25 + " AQI:" + aqi + " 空气质量:" + quality;
	var detail = weather.detail(type, temp, wd, ws, air, 20," ");
	var result = [];
	for (var i = 0; i < 5; i++) {
		var combine = "  " + icon[i] + detail[i];
		result.push(combine);
	}
	console.log(result.join("\n"));
}