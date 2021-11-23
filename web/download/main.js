var wH = 0;
var wW = 0;

var SnowFall = true;//下雪动画递归开关

//播放器变量
var video;

var Playing = -1;
var BarMove = false;
var BarMousedownX = 0;
var MousedownX = 0;
var VideoControlHover = false;

var TimeOutRecord = Array();

var Option = new Object();
//壁纸
Option["BackgroundScale"] = true;

//性能
Option["SnowFall"] = true;//下雪效果

//播放器
Option["PlayStopSnowFall"] = true;//播放自动关闭下雪效果
Option["DefaultVolume"] = 0.5;//默认音量
Option["VideoIndent"] = 5;//视频缩进长度
Option["VolumeIndent"] = 5;//音量调节

function Play(fid) {
	/*
	var vSrc = undefined, vType = "video/mp4", vTracknum = 0;
	vTracksum = {
		tsrc: Array(),
		tlabel: Array(),
		tsrclang: Array()
	};
	videoW(srcid);
	*/
	if (typeof fid == "string") {//如果是ID搜索转换成数字
		var temp = fid;
		for (var i = 0; i < FileList.length; i++) {
			if (FileList[i].ID == fid) {
				fid = i;
				break;
			}
		}
		if (temp == fid)
			fid = -1;
	}
	if (fid >= 0 && FileList[fid]["JavaScript"] != null){//有自定义JavaScript！
		eval(FileList[fid]["JavaScript"]);
	}

	if (fid >= 0 && Playing != fid && FileList[fid].disable != true && FileList[fid].URL != undefined) {
		$("#VideoProgressBarBox").off("click mousedown");//暂停进度条控制（免得用户手贱报错）
		$(document).off("keydown");//暂停全局快捷键（同上）
		if (Playing == -1) {//第一次播放鸭，肯定要好好招待
			video = document.getElementById("mediabox")//找到视频播放器;
			if (Option['PlayStopSnowFall']) OptionSet("SnowFall", false, 0, false);//自动关闭下雪效果（渣机必备）
			t2hover(false);//移除视频块容器透明
			$("#BackgroundInfo").css("display", "none");

			//基础信息开始加载
			//video.onloadstart = function () {}

			//加载中（视频时长变化）
			video.ondurationchange = function () {
				$(".endTime").html(GetTimeString(video.duration));//刷新总时长

				//进度条跳播、拖动
				$("#VideoProgressBarBox").on("mousedown", function (e) {
					var Bar = $("#VideoProgressBar0");	//获取对象
					var BarBox = $("#VideoProgressBarBox");
					var Time_ = $(".onTime");
					/*
					if (e.type == "click") {
						
						var offset = e.offsetX;
						var percent = offset / $(this).width();
						var current = percent * video.duration;
						
						video.currentTime = e.offsetX / $(this).width() * video.duration;
					}
					*/

					BarMove = true;
					BarMousedownX = e.offsetX;
					MousedownX = e.clientX;
					Bar.css("width", e.offsetX);
					Time_.html(GetTimeString(e.offsetX / BarBox.width() * video.duration));

					$(document).on("mousemove mouseup", function (e) {
						var BarOffset = BarMousedownX + e.clientX - MousedownX, BarWidth = BarBox.width();	//读取光标拖动的偏移值
						if (BarOffset < 0) BarOffset = 0;
						if (BarOffset > BarWidth) BarOffset = BarWidth;

						if (e.type == "mouseup") {	//如果鼠标松开
							BarMove = false;
							video.currentTime = BarOffset / BarWidth * video.duration;
							Bar.removeClass("NoTransition");
							$(document).off("mousemove mouseup");
						}
						else{	//如果拖动
							Bar.addClass("NoTransition");
							Bar.css("width", BarOffset);
							Time_.html(GetTimeString(BarOffset / BarWidth * video.duration));
						}
					});
				});

				//全局快捷键
				$(document).keydown(function (e) {
					if (e.keyCode == 32) {//空格
						PlaySwitch();
					}
					else if (e.keyCode == 37) {//左箭头
						if (video.currentTime - Option["VideoIndent"] < 0)
							video.currentTime = 0;
						else
							video.currentTime -= Option["VideoIndent"];
					}
					else if (e.keyCode == 39) {//右箭头
						if (video.currentTime + Option["VideoIndent"] > video.duration)
							video.currentTime = video.duration;
						else
							video.currentTime += Option["VideoIndent"];
					}
					else if (e.keyCode == 40) {//下箭头
						if (video.volume - Option["VolumeIndent"] / 100 < 0)
							video.volume = 0;
						else
							video.volume -= Option["VolumeIndent"] / 100;
					}
					else if (e.keyCode == 38) {//上箭头
						if (video.volume + Option["VolumeIndent"] / 100 > 1)
							video.volume = 1;
						else
							video.volume += Option["VolumeIndent"] / 100;
					}
					$("#VideoProgressBar0").css("width", (video.currentTime / video.duration * 100) + "%");
					$(".onTime").html(GetTimeString(video.currentTime));
				});
			}

			//基础信息加载完成
			//video.onloadedmetadata = function () {}

			//当前帧加载完成
			video.onloadeddata = function () {
				$("#VideoPlayer").css("display", "block" );//激活视频播放器
				setTimeout(function () {
					$("#VideoPlayer").css("opacity", 1);
					$("#crap").css("opacity", 0);
					setTimeout(function () { $("#crap").css("display", "") }, 300);
				}, 50);
			}

			//下载其他帧
			//video.onprogress = function () {}

			//下载完成
			//video.oncanplay = function () {}

			//播放中
			video.ontimeupdate = function () {
				if (!BarMove) {//刷新进度条和时间
					$("#VideoProgressBar0").css("width", (video.currentTime / video.duration * 100) + "%");
					$(".onTime").html(GetTimeString(video.currentTime));
				}
			}

			//播放完成
			//video.onended = function () { }

			//进度条
			

			//定义事件
			$("#VideoControlWrap,#VideoTop").hover(function () { VideoControlHover = true }, function () { VideoControlHover = false });//检测鼠标是否在底部控制栏上
			$("#VideoPlayer").mousemove(function () {//检测到鼠标移动显示控制栏
				$("#VideoTop , #VideoControlWrap").removeClass("hidden");
				$("#VideoPlayer").css("cursor", "auto");

				clearTimeout(TimeOutRecord["VideoControl"]);
				if (!VideoControlHover) {
					TimeOutRecord["VideoControl"] = setTimeout(function () {//鼠标不动后 1.5s 隐藏
						$("#VideoTop , #VideoControlWrap").addClass("hidden");
						$("#VideoPlayer").css("cursor", "none");
					}, 1500);
				}
			});
		}
		Playing = fid;

		$(".vTrack").remove();//删除已有字幕
		//获取字幕数据
		if(FileList[fid]["TrackURL"] != null){
			var tURL = JSON.parse(FileList[fid]["TrackURL"]);
			var tName = JSON.parse(FileList[fid]["TrackName"]);
			var tLang = JSON.parse(FileList[fid]["TrackLang"]);
		
			for (var i = 0; i < tURL.length; i++){
				$("#mediabox").append('<track src="' + tURL[i] + '" label="' + tName[i] + '" srclang="' + tLang[i] + '" kind="subtitles" class="vTrack"/>');
			}
		}

		//刷新视频URL
		$("#mediabox").attr({
			"src": FileList[fid].URL,
			"type": FileList[fid].FileType
		});

		$("#VideoTitle").html(FileList[fid].Name);//刷新视频标题
		$("#VideoProgressBar0").css("width","0%");//进度条归零

		$("#VideoTop , #VideoControlWrap").removeClass("hidden");//显示控件
		$("#VideoPlayer").css("cursor", "auto");
		clearTimeout(TimeOutRecord["VideoControl"]); 
	}
}

//布局
function LayoutRefresh() {//原名称 giao()
	wH = $(window).height();
	wW = $(window).width();
	$("#WebTitle").css({
		"margin-top": wH * 0.005 + "px",
		"width": wW - wW * 0.006 + "px"
	});
	$("#WebTitleBox").css({
		"margin-bottom": wH * 0.005 + "px"
	});
	$("#table0").css({
		"height": wH - $("#WebTitle").outerHeight(true) + "px",
		"padding-top": wH * 0.005 + "px",
		"padding-bottom": wH * 0.005 + "px"
	});
}
function settingsOut() {
	if ($("#settingsBox").height() == 30) {
		$("#settingsBox").css("height", "340px");

		$("#table0_1Box .divMask").css("display", "block");
		setTimeout('$("#table0_1Box .divMask").css("opacity", 0.6);', 50);

		$("#settingsbtn i").css("color", "#fff");

		$("#settingsbtnIn").css("opacity", 0);
		setTimeout('$("#settingsbtnIn").css("display", "none")', 300);

		$("#settingsbtnBack").css("display", "block");
		$("#settingsbtnBack").css("opacity", 1);
	}
	else {
		$("#settingsBox").css("height", "30px");

		$("#table0_1Box .divMask").css("opacity", 0);
		setTimeout('$("#table0_1Box .divMask").css("display", "none")', 200);

		$("#settingsbtn i").css("color", "rgba(0,0,0,0.6)");

		$("#settingsbtnIn").css("display", "");
		$("#settingsbtnIn").css("opacity", 1);

		$("#settingsbtnBack").css("opacity", 0);
		setTimeout('$("#settingsbtnBack").css("display", "")', 300);
	}
}
function t2hover(snum) {
	if (Playing == -1) {
		if (snum) {
			$("#table0_2BoxLimit").addClass("t2boxhover");

			$("#BackgroundInfo").removeClass("hidden");
			$("#BackgroundInfo").css("filter", "blur(0px)");

			if(Option["BackgroundScale"])
				$("#snow,#image_c").removeClass("bgScale");
		}
		else {
			$("#table0_2BoxLimit").removeClass("t2boxhover");

			$("#BackgroundInfo").addClass("hidden");
			$("#BackgroundInfo").css("filter", "");

			if (Option["BackgroundScale"])
				$("#snow,#image_c").addClass("bgScale");
		}
	}
}
function VideoControlHover(sum) {
	if (sum) {
		$("#VideoTop , #VideoControlWrap").removeClass("hidden");
	}
	else {
		$("#VideoTop , #VideoControlWrap").addClass("hidden");
	}
}

//控件
function PlaySwitch() {
	if (video.paused) {
		video.play();
	}
	else {
		video.pause();
	}
}
function PlayerFullscreenSwitch() {
	var v = document.getElementById("VideoPlayer");
	if (isFullscreen()) {
		ExitFullscreen();
	}
	else {
		RequestFullscreen(v);
	}
}

//数据处理
function getSearchString(key, Url) {
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
function GetTimeString(seconds, x) {
	/*时*/
	var hour = Math.floor(seconds / 3600);
	hour = hour < 10 ? "0" + hour : hour;/*补0操作*/

	/*分*/
	var minute = Math.floor(seconds % 3600 / 60);
	minute = minute < 10 ? "0" + minute : minute;

	/*秒*/
	var second = Math.floor(seconds % 60);
	second = second < 10 ? "0" + second : second;
	/*返回结果*/
	if (x) return hour + ":" + minute + ":" + second;
	return hour > 0 ? hour + ":" + minute + ":" + second : minute + ":" + second;
}
function InspectObjectName(a, b) {
	var aName = Object.getOwnPropertyNames(a);
	var bName = Object.getOwnPropertyNames(b);
	if (aName.length != bName.length)
		return false;
	for (var i = 0; i < aName.length; i++) {
		if (aName[i] != bName[i] || typeof a[aName[i]] != typeof b[bName[i]])
			return false;
	}
	return true;
}

//其他
function SetSettings(days) {
	if (days == undefined)
		$.cookie("Setting", JSON.stringify(Option), { path: '/' });
	else
		$.cookie("Setting", JSON.stringify(Option), { expires: days, path: '/' });
}
function OptionSet(name, state, OptionType, setOption) {
	var SwitchBtn = "#" + name + "Opt .OptSwitch";
	if (OptionType == null || OptionType == "bool") {
		var set = state || (state == undefined && !Option[name]);
	}
	switch (name) {
		case "SnowFall":
			if (set) {
				SnowFall = true;
				new Snow("snow");
				$("#snow").css("opacity", 1);

				clearTimeout(TimeOutRecord["snow"]);
			}
			else {
				TimeOutRecord["snow"] = setTimeout(function () {
					SnowFall = false;
				}, 400);
				$("#snow").css("opacity", 0);
			}
			break;
		case "PlayStopSnowFall":
			break;
		case "BackgroundScale":
			if (set) {
				$("#snow,#image_c").addClass("bgScale");
			}
			else {
				$("#snow,#image_c").removeClass("bgScale");
			}
			break;
		default:
			return false;
			break;
	}
	if (setOption == null || setOption == true) {
		if (OptionType == null || OptionType == "bool") {
			if (set) {
				$(SwitchBtn).addClass("SwitchOn");
				Option[name] = true;
			}
			else {
				$(SwitchBtn).removeClass("SwitchOn");
				Option[name] = false;
			}
		}
	}
	return true;
}
function ReadSettings(settings) {
	var OptionName = Object.getOwnPropertyNames(Option);
	for (var i = 0; i < OptionName.length; i++) {
		var name = OptionName[i];
		if (settings[name] != null && typeof Option[name] == typeof settings[name]) {
			Option[name] = settings[name];
		}
	}
	OptionRefresh(Option);
	if (!InspectObjectName(Option, settings)) {
		SetSettings(3650);
	}
}
function OptionRefresh(Opt) {
	var OptionName = Object.getOwnPropertyNames(Opt);
	for (var i = 0; i < OptionName.length; i++)
		OptionSet(OptionName[i], Opt[OptionName[i]]);
}

function RequestFullscreen(this_) {
	if (this_.requestFullscreen)
		this_.requestFullscreen();
	else if (this_.webkitRequestFullscreen)
		this_.webkitRequestFullscreen();
	else if (this_.mozRequestFullScreen)
		this_.mozRequestFullScreen();
	else if (this_.mozRequestFullscreen)
		this_.mozRequestFullscreen();
}
function ExitFullscreen() {
	if (document.exitFullscreen)
		document.exitFullscreen();
	else if (document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if (document.webkitExitFullscreen)
		document.webkitExitFullscreen();
}
function isFullscreen() {
	return document.fullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
}

class Snowflake {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.vx = 0;
		this.vy = 0;
		this.radius = 0;
		this.alpha = 0;

		this.reset();
	}

	reset() {
		this.radius = this.randBetween(1, 4);
		this.x = this.randBetween(this.radius, window.innerWidth - this.radius);
		this.y = this.randBetween(0, -window.innerHeight) - this.radius;
		this.vx = this.randBetween(-0.2, 0.2);
		this.vy = this.randBetween(1, 3.8);
		this.curvedX = this.randBetween(-0.5, 2);

		this.alpha = this.randBetween(0.1, 0.9);
	}

	randBetween(min, max) {
		return min + Math.random() * (max - min);
	}

	update() {
		this.x += this.vx;
		this.y += this.vy;
		this.vx += this.curvedX / (window.innerWidth / this.vy) * 2;


		if (this.y - this.radius > window.innerHeight || this.x - this.radius > window.innerWidth || this.x + this.radius < 0) this.reset();
	}
}
class Snow {
	constructor(cid) {
		this.canvas = document.getElementById(cid);
		this.ctx = this.canvas.getContext("2d");

		//document.body.appendChild(this.canvas);

		window.addEventListener("resize", () => this.onResize());
		this.onResize();
		this.updateBound = this.update.bind(this);
		requestAnimationFrame(this.updateBound);

		this.createSnowflakes();
	}

	onResize() {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.canvas.width = this.width;
		this.canvas.height = this.height;
	}

	createSnowflakes() {
		const flakes = window.innerWidth / 4;

		this.snowflakes = [];

		for (let s = 0; s < flakes; s++) {
			this.snowflakes.push(new Snowflake());
		}
	}

	update() {
		this.ctx.clearRect(0, 0, this.width, this.height);

		for (let flake of this.snowflakes) {
			flake.update();

			this.ctx.save();
			this.ctx.fillStyle = "#FFF";
			this.ctx.beginPath();
			this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
			this.ctx.closePath();
			this.ctx.globalAlpha = flake.alpha;
			this.ctx.fill();
			this.ctx.restore();
		}
		if (SnowFall) {
			requestAnimationFrame(this.updateBound);
		}
	}
}
/*
废弃的代码
function isObjectValueEqual(a, b,sum) {
	//取对象a和b的属性名
	var aProps = Object.getOwnPropertyNames(a);
	var bProps = Object.getOwnPropertyNames(b);
	//判断属性名的length是否一致
	if (aProps.length != bProps.length) {
		return false;
	}
	//循环取出属性名，再判断属性值是否一致
	for (var i = 0; i < aProps.length; i++) {
		if (!sum) {
			var propName = aProps[i];
			if (a[propName] !== b[propName]) {
				return false;
			}
		}
		else {
			if (aProps[i] != bProps[i]) {
				return false;
			}
		}
	}
	return true;
}
function toString(value) {
	if (value == 1) return "1";
	else if (value == 0) return "0";
	return value;
}
function find(text, value, num) {
	var sum = 1;
	if (num <= 0) return 0;

	for (var i = 0; i < text.length; i++) {
		if (text.charAt(i) == value && sum >= num) return i;
		else if (text.charAt(i) == value) sum++;
	}
	return 0;
}
function findSetting(text, id) {
	var valueNum = 1;
	for (var i = 0; i < text.length; i++) {
		if (text.charAt(i) == ',')
			valueNum++;
	}
	if (id > valueNum) return undefined;

	var start = find(text, ",", id);
	var num = find(text, ",", id + 1);
	if (start == 0) start = -1;
	if (num == 0) num = text.length;

	return text.substr(start + 1, num - start - 1)
}
function SetCookie(name, value, Days) {
	if (Days == undefined)
		Days = 30;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	var text;
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
function GetCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}
*/