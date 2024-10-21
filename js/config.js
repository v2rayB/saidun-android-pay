var serverIp = "http://api.saidun.live"

// 判断 移动端 或 PC端
function isPc() {
	var userAgentInfo = navigator.userAgent;
	var mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
	var mobile_flag = false;
	//根据userAgent判断是否是手机
	for (var v = 0; v < mobileAgents.length; v++) {
		if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
			mobile_flag = true;
			break;
		}
	}
	var screen_width = window.screen.width;
	var screen_height = window.screen.height;
	//根据屏幕分辨率判断是否是手机
	if (screen_width < 500 && screen_height < 800) {
		mobile_flag = true;
	}
	return !mobile_flag;
}

function isWx() {
　　var ua = navigator.userAgent.toLowerCase();
　　return ua.indexOf('micromessenger') != -1;
}

function isQQ() {
	var ua = navigator.userAgent.toLowerCase();
	　　return ua.indexOf('qq') != -1;
}
