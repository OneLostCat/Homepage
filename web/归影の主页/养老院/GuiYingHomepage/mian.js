var Opt = new Array();
Opt["lang"] = "zh-cn";

var TimeOutRecord = Array();

function MenuBtnSwitch(th) {
	if ($(th).is('.MenuBtn_Selected') == 0) {
		$(".MenuBtn").removeClass("MenuBtn_Selected");
		$(th).addClass("MenuBtn_Selected");
	}
}
function LayoutRefresh() {
	var h = $(window).height();
	var w = $(window).width();
	/*
	$(".MenuBtnBox").css({
		"margin-left": ($("#Menu1").width() - $(".MenuBtnBox").outerWidth()) / 2,
		"margin-right": ($("#Menu1").width() - $(".MenuBtnBox").outerWidth()) / 2
	});*/

	$(".h1Text").css({
		"margin-top": (h - $(".h1Text").outerHeight()) / 2 
	});

	$("#WorkList").css("margin-top",(h - $("#WorkList").outerHeight()) / 2);

	$(".jieshao2").css({
		top: (h - $(".jieshao2").outerHeight()) / 2,
		left: (w - $(".jieshao2").outerWidth()) / 2
	});
	
}
function fanYe() {
	var sol = $(window).scrollTop();
	var sol_ = $(window).scrollTop() + $(window).height();
	if (sol <= $("#Page1").height() * 0.6) {
		MenuBtnSwitch("#MenuBtn1");
		return;
	}
	if (sol_ >= $(document).height() - $("#Page1").height() * 0.6) {
		MenuBtnSwitch("#MenuBtn3");
		return;
	}
	if ($("#WorkList").height() <= 448) {
		if (sol < $("#Page1").height() + $("#Page2").height() * 0.6 && sol_ > $("#Page1").height() + $("#Page2").height() * 0.4) {
			MenuBtnSwitch("#MenuBtn2");
			return;
		}
	}
	else {
		if (sol <= $("#Page1").height() + $("#WorkList").height() * 0.6 && sol_ >= $("#Page1").height() + $("#WorkList").height() * 0.4) {
			MenuBtnSwitch("#MenuBtn2");
			return;
		}
	}
}

function runJson(file, runFunction) {
	var request = new XMLHttpRequest();
	request.open("get", file); /*设置请求方法与路径*/
	request.send(null); /*不发送数据到服务器*/
	request.onload = function () { /*XHR对象获取到返回信息后执行*/
		if (request.status != 200) { /*返回状态为200，即为数据获取成功*/
			alert("Json获取错误\n请联系服务器管理员！\n或者把您的电脑砸了(doge)");
		}
		else {
			runFunction(request.responseText);
		}
	}
}

function SetLanguage(langID,langFile){
	var lang_ = langFile[langID];
	for(var key in lang_){
		if(key[0] != '$'){
			$(key).html(lang_[key]);
		}
	}
}
function GetSearchString(key, Url) {
	var str = Url;
	str = str.substring(1, str.length);
	var arr = str.split("&");
	var obj = new Object();
	for (var i = 0; i < arr.length; i++) {
		var tmp_arr = arr[i].split("=");
		obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1]);
	}
	return obj[key];
}
//废弃代码
/*
function xuanZe(th, bl) {
	if (bl == 1) {
		if ($(th).is('.this') == 0) {
			$(th).addClass("xuan");
		}
	}
	else if (bl == 0) {
		if ($(th).is('.this') == 0) {
			$(th).removeClass("xuan");
		}
	}
}
*/