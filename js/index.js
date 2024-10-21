var serverIp = "http://ga-bp121de8bxynhl0sk96jo.aliyunga0018.com"

function gotoPrivate() {
	window.location.href = "private.html"
}

function gotoAndroid() {
	if (isWx()) {
		window.location.href = "pages/open-wx.html?page="+window.location.href
		return
	}
	window.location.href = "android/index.html"
}

function gotoIOS() {
	window.location.href = "help/appstore.html"
}

function gotoLogin() {
	window.location.href = "wap-login.html"
}

function login() {
	var username = $("#username").val()
	var password = $("#password").val()
	if (username == "") {
		alert("账号名称不能为空")
		return
	}
	if (password == "") {
		alert("密码不能为空")
		return
	}
	var that = this
	var data = new FormData();
	data.append('username', username);
	data.append('password', password);
	axios({
		method: 'post',
		url: serverIp + '/vpn/web_login',
		data: data
	})
	.then(function(response) {
		var data = response.data;
		if (data.code != 200) {
			alert(data.remark)
			return
		}
		localStorage.setItem("xk-token",data.result)
		window.location.href = "pay.html"
	})
}

function gotoForgotPwd() {
	window.location.href = "forgot-pwd.html"
}

function register() {
	window.location.href = "register.html"
}

