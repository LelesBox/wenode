var chalk = require('chalk');

Object.getOwnPropertyNames(chalk.styles).forEach(function(item, index, arr) {
	Object.defineProperty(String.prototype, item, {
		get: function() {
			var ck = chalk[item](this);
			return ck;
		}
	})
});
var iconLightRain = {
	chinese: "阵雨",
	icon: [
		"     .-.     ",
		"    (   ).   ",
		"   (___(__)  ",
		"    ‘ ‘ ‘ ‘  ",
		"   ‘ ‘ ‘ ‘   "
	]
}
var iconUnknown = {
	chinese: "Unknown",
	icon: [
		"    .-.      ",
		"     __)     ",
		"    (        ",
		"     `-’     ",
		"      •      "
	]
}
var iconSunny = {
	chinese: "晴",
	icon: [
		"    \\".yellow + "   /    ",
		"     .-.     ",
		"  ― (   ) ―  ",
		"     `-’     ",
		"    /   \\    "
	]
}
var iconPartlyCloudy = {
	chinese: "少云",
	icon: [
		"   \\  /      ",
		" _ /\"\".-.    ",
		"   \\_(   ).  ",
		"   /(___(__) ",
		"             "
	]

}
var iconCloudy = {
	chinese: "多云",
	icon: [
		"             ",
		"     .--.    ",
		"  .-(    ).  ",
		" (___.__)__) ",
		"             "
	]
}
var iconVeryCloudy = {
	chinese: "阴",
	icon: [
		"             ",
		"     .--.    ",
		"  .-(    ).  ",
		" (___.__)__) ",
		"             "
	]
}
var iconLightShowers = {
	chinese: "小雨",
	icon: [
		" _`/\"\".-.    ",
		"  ,\\_(   ).  ",
		"   /(___(__) ",
		"     ‘ ‘ ‘ ‘ ",
		"    ‘ ‘ ‘ ‘  "
	]
}
var iconHeavyShowers = {
	chinese: "大雨",
	icon: [
		" _`/\"\".-.    ",
		"  ,\\_(   ).  ",
		"   /(___(__) ",
		"   ‚‘‚‘‚‘‚‘  ",
		"   ‚’‚’‚’‚’  "
	]
}
var iconLightSnowShowers = {
	chinese: "",
	icon: [
		" _`/\"\".-.    ",
		"  ,\\_(   ).  ",
		"   /(___(__) ",
		"     *  *  * ",
		"    *  *  *  "
	]
}
var iconHeavySnowShowers = {
	chinese: "",
	icon: [
		" _`/\"\".-.    ",
		"  ,\\_(   ).  ",
		"   /(___(__) ",
		"    * * * *  ",
		"   * * * *   "
	]
}
var iconLightSleetShowers = {
	chinese: "",
	icon: [
		" _`/\"\".-.    ",
		"  ,\\_(   ).  ",
		"   /(___(__) ",
		"     ‘ * ‘ * ",
		"    * ‘ * ‘  "
	]
}
var iconThunderyShowers = {
	chinese: "雷阵雨",
	icon: [
		" _`/\"\".-.    ",
		"  ,\\_(   ).  ",
		"   /(___(__) ",
		"    ⚡‘ ‘⚡‘ ‘ ",
		"    ‘ ‘ ‘ ‘  "
	]
}
var iconThunderyHeavyRain = {
	chinese: "",
	icon: [
		"     .-.     ",
		"    (   ).   ",
		"   (___(__)  ",
		"  ‚‘⚡‘‚⚡‚‘   ",
		"  ‚’‚’⚡’‚’   "
	]
}
var iconThunderySnowShowers = {
	chinese: "",
	icon: [
		" _`/\"\".-.    ",
		"  ,\\_(   ).  ",
		"   /(___(__) ",
		"     *⚡ *⚡ * ",
		"    *  *  *  "
	]
}
var iconHeavyRain = {
	chinese: "暴雨",
	icon: [
		"     .-.     ",
		"    (   ).   ",
		"   (___(__)  ",
		"  ‚‘‚‘‚‘‚‘   ",
		"  ‚’‚’‚’‚’   "
	]
}
var iconLightSnow = {
	chinese: "小雪",
	icon: [
		"     .-.     ",
		"    (   ).   ",
		"   (___(__)  ",
		"    *  *  *  ",
		"   *  *  *   "
	]
}
var iconHeavySnow = {
	chinese: "大雪",
	icon: [
		"     .-.     ",
		"    (   ).   ",
		"   (___(__)  ",
		"   * * * *   ",
		"  * * * *    "
	]
}
var iconLightSleet = {
	chinese: "雨夹雪",
	icon: [
		"     .-.     ",
		"    (   ).   ",
		"   (___(__)  ",
		"    ‘ * ‘ *  ",
		"   * ‘ * ‘   "
	]
}
var iconFog = {
	chinese: "大雾",
	icon: [
		"             ",
		" _ - _ - _ - ",
		"  _ - _ - _  ",
		" _ - _ - _ - ",
		"             "
	]
}

// dateFmt应该占用15个字符,每个单元格30行 
var header = function(dateFmt, time) {
	dateFmt = autoCompelete(dateFmt, 15);
	// time内的字符串需要为14位长度，不够补全
	for (var i = 0; i < time.length; i++) {
		time[i] = autoCompelete(time[i], 14);
	}

	return [
		"                                                       ┌─────────────┐                                                       ",
		"┌──────────────────────────────┬───────────────────────" + dateFmt + "───────────────────────┬──────────────────────────────┐",
		"│        " + time[0] + "        │        " + time[1] + " └──────┬──────┘ " + time[2] + "        │        " + time[3] + "        │",
		"├──────────────────────────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤"
	]
}

// 根据长度补全空格
function autoCompelete(str, len) {
	var length = str.length;
	if (length < len) {
		var remainder = (len - length) % 2;
		if (remainder === 0) {
			var repeat = (new Array((len - length) / 2 + 1)).join(" ");
			str = repeat + str + repeat;
		} else {
			// 往左偏一个" "
			var repeat = (new Array((len - length - 1) / 2 + 1)).join(" ");
			str = repeat + str + repeat + " ";
		}
	} else if (length > len) {
		str = str.substr(0, len);
	}
	return str;
}

var foot = "└──────────────────────────────┴──────────────────────────────┴──────────────────────────────┴──────────────────────────────┘";

// 占宽16个符号，做对齐，最后一个符号固定为 |，右对齐
var detail = function(weather, temp, wd, ws, param, len, end) {
	var detail = [];
	detail.push(handleDetailStr(weather || "", len||15, end || "│"));
	detail.push(handleDetailStr(temp || "", len||15, end || "│"));
	detail.push(handleDetailStr(wd || "", len||15, end || "│"));
	detail.push(handleDetailStr(ws || "", len||15, end || "│"));
	detail.push(handleDetailStr(param || "", len||15, end || "│"));
	return detail;
}

//计算字符长度 中文字符是英文字符宽度的两倍,最大返回len个字符
function handleDetailStr(str, len, end) {
	var length = str.length;
	/*var len = 0;
	for (var i = 0; i < length; i++) {
		if (str.charCodeAt(i) >= 8000) {
			len += 2;
		} else {
			len++;
		}
		if (len == 15) {
			return str.substring(0, i)+"│";
		} else if (len > 15) {
			return str.substring(0, i - 1) + " │";
		}
	}*/
	var rp = repeat(" ", len - length);
	var brp = repeat(" ", 2);
	return brp + str + rp + end;
}

function repeat(target, n) {
	var s = target,
		total = "";
	while (n > 0) {
		if (n % 2 == 1) {
			total += s;
		}
		if (n == 1) {
			break;
		}
		s += s;
		n = n >> 1;
	}
	return total;
}

// 中文天气与icon字典映射
var Weather = {
	LightRain: iconLightRain,
	Unknown: iconUnknown,
	Sunny: iconSunny,
	PartlyCloudy: iconPartlyCloudy,
	Cloudy: iconCloudy,
	VeryCloudy: iconVeryCloudy,
	LightShowers: iconLightShowers,
	HeavyShowers: iconHeavyShowers,
	LightSnowShowers: iconLightSnowShowers,
	HeavySnowShowers: iconHeavySnowShowers,
	LightSleetShowers: iconLightSleetShowers,
	ThunderyShowers: iconThunderyShowers,
	ThunderyHeavyRain: iconThunderyHeavyRain,
	ThunderySnowShowers: iconThunderySnowShowers,
	HeavyRain: iconHeavyRain,
	LightSnow: iconLightSnow,
	HeavySnow: iconHeavySnow,
	LightSleet: iconLightSleet,
	Fog: iconFog
}

// 通过中文查找对于ICON
var findeIcon = function(str) {
	for (item in Weather) {
		if (Weather[item].chinese == str) {
			return Weather[item].icon;
		}
	}
	return Weather.Unknown.icon;
}

module.exports = {
	Weather: Weather,
	header: header,
	foot: foot,
	detail: detail,
	findeIcon: findeIcon
}

/*var content = [
	'',
	'  v' + "fis.cli.info.version",
	'',
	' __' + '/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'.bold.red + '__' + '/\\\\\\\\\\\\\\\\\\\\\\'.bold.yellow + '_____' + '/\\\\\\\\\\\\\\\\\\\\\\'.bold.green + '___',
	'  _' + '\\/\\\\\\///////////'.bold.red + '__' + '\\/////\\\\\\///'.bold.yellow + '____' + '/\\\\\\/////////\\\\\\'.bold.green + '_' + '       ',
	'   _' + '\\/\\\\\\'.bold.red + '_________________' + '\\/\\\\\\'.bold.yellow + '______' + '\\//\\\\\\'.bold.green + '______' + '\\///'.bold.green + '__',
	'    _' + '\\/\\\\\\\\\\\\\\\\\\\\\\'.bold.red + '_________' + '\\/\\\\\\'.bold.yellow + '_______' + '\\////\\\\\\'.bold.green + '_________' + '     ',
	'     _' + '\\/\\\\\\///////'.bold.red + '__________' + '\\/\\\\\\'.bold.yellow + '__________' + '\\////\\\\\\'.bold.green + '______' + '    ',
	'      _' + '\\/\\\\\\'.bold.red + '_________________' + '\\/\\\\\\'.bold.yellow + '_____________' + '\\////\\\\\\'.bold.green + '___' + '   ',
	'       _' + '\\/\\\\\\'.bold.red + '_________________' + '\\/\\\\\\'.bold.yellow + '______' + '/\\\\\\'.bold.green + '______' + '\\//\\\\\\'.bold.green + '__',
	'        _' + '\\/\\\\\\'.bold.red + '______________' + '/\\\\\\\\\\\\\\\\\\\\\\'.bold.yellow + '_' + '\\///\\\\\\\\\\\\\\\\\\\\\\/'.bold.green + '___',
	'         _' + '\\///'.bold.red + '______________' + '\\///////////'.bold.yellow + '____' + '\\///////////'.bold.green + '_____',
	''
].join('\n');
console.log(content);*/