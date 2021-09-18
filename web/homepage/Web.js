// JavaScript source code
setInterval(function () {
    day = new Date();
    hours = day.getHours();
    minut = day.getMinutes();
    seconds = day.getSeconds();
    if (seconds < 10) { seconds = "0" + seconds; }
    if (hours < 10) { hours = "0" + hours; }
    if (minut < 10) { minut = "0" + minut; }
    document.getElementById("time").innerHTML = hours + ":" + minut + ":" + seconds;
}, 200);
/*
$(window).resize(function () {
    var h = $(window).height();
    $("#img").css("height", h - 128);
});*/
function runJson(file, runFunction) {
	var request = new XMLHttpRequest();
	request.open("get", file); /*设置请求方法与路径*/
	request.send(null); /*不发送数据到服务器*/
	request.onload = function () { /*XHR对象获取到返回信息后执行*/
		if (request.status != 200) { /*返回状态为200，即为数据获取成功*/
			alert("Json获取错误\n请联系服务器管理员！\n或者把你的垃圾电脑砸了");
		}
		else {
			runFunction(request.responseText);
		}
	}
}