function _jc_f_decode64(e) {
	var t, n, r, i, s, o, u;
	o = e.length, s = 0, u = "";
	while (s < o) {
		do t = _jcDeChars[e.charCodeAt(s++) & 255];
		while (s < o && t == -1);
		if (t == -1) break;
		do n = _jcDeChars[e.charCodeAt(s++) & 255];
		while (s < o && n == -1);
		if (n == -1) break;
		u += String.fromCharCode(t << 2 | (n & 48) >> 4);
		do {
			r = e.charCodeAt(s++) & 255;
			if (r == 61) return u;
			r = _jcDeChars[r]
		} while (s < o && r == -1);
		if (r == -1) break;
		u += String.fromCharCode((n & 15) << 4 | (r & 60) >> 2);
		do {
			i = e.charCodeAt(s++) & 255;
			if (i == 61) return u;
			i = _jcDeChars[i]
		} while (s < o && i == -1);
		if (i == -1) break;
		u += String.fromCharCode((r & 3) << 6 | i)
	}
	return u
}

function _jc_f_account() {
	var e = _jc_g_co("ppinf");
	if (e == "") return 0;
	try {
		return e = e.split("|"), e.length < 4 ? 0 : (e = _jc_f_decode64(e[3]), _match = e.match(/\|uid:(\d+):(.*?)\|/i), _match ? _match[2] : 0)
	} catch (t) {
		return 0
	}
}

function _jc_f_isDPR(e) {
	var t = !1,
		n = ["ch"];
	/iPhone|iPad|iPod|CPU OS/i.test(navigator.userAgent) && (t = !0);
	if (_jcbw[11] == 2) if (typeof document.width != "undefined") document.width === screen.width && e != 1 && (t = !0);
	else for (var r = 0; r < n.length; r++) _jcbw[10] === n[r] && (t = !0);
	return t
}

function _jc_f_client() {
	var e = navigator.userAgent.match(/iphone|android|phone|mobile|wap|netfront|x11|java|operamobi|operamini|ucweb|windowsce|symbian|symbianos|series|webos|sony|blackberry|dopod|nokia|samsung|palmsource|xda|pieplus|meizu|midp|cldc|motorola|foma|docomo|up.browser|up.link|blazer|helio|hosin|huawei|novarra|coolpad|webos|techfaith|palmsource|alcatel|amoi|ktouch|nexian|ericsson|philips|sagem|wellcom|bunjalloo|maui|smartphone|iemobile|spice|bird|zte-|longcos|pantech|gionee|portalmmm|jig browser|hiptop|benq|haier|^lct|320x320|240x320|176x220|bolt|eudoraweb|touchpad|windows ce|windows mobile/i) != null,
		t = navigator.platform.match(/Win32|Windows|Mac|Linux|X11/i) != null;
	return e ? 2 : t ? 1 : 0
}

function _jc_get_error(e) {
	var t = document.location,
		n = new Image,
		r = Math.random();
	n.src = "http://log1.17173.com/pv?appkey=100&currevent=buttons_ping_js_browser&url=" + encodeURIComponent(t) + "&type=" + e + "&r=" + r
}

function _jc_f_ie_t(e) {
	var t = navigator.userAgent.toString();
	try {
		for (var n in e) {
			var r = t.match(e[n][0]);
			if (r && e[n][1]) return e[n][1]
		}
		return _jc_get_error(0), "0"
	} catch (i) {
		return _jc_get_error(1), "0"
	}
}

function _jc_f_os_t(e) {
	var t = navigator.userAgent.toString();
	try {
		for (var n in e) {
			var r = t.match(e[n][0]);
			if (r && r.length > 0) {
				if (e[n].length == 1) {
					var i = "";
					for (var s = 1; s < r.length; s++) s > 1 && (i += s == 2 ? " " : "."), i += r[s];
					return i
				}
				if (e[n].length == 2) return e[n][1]
			}
		}
		return "0"
	} catch (o) {
		return "0"
	}
}

function _jc_g_kw() {
	if (_jcrf == "") return "?t?=";
	var e = 0,
		t, n;
	if ((e = _jcrf.indexOf("://")) < 0) return "0?t?=0";
	t = _jcrf.substring(e + 3, _jcrf.length), t.indexOf("/") > -1 && (t = t.substring(0, t.indexOf("/")));
	for (var r = 0; r < _jcsr.length; r++) if (t.toLowerCase().indexOf(_jcsr[r].toLowerCase()) > -1) if ((e = _jcrf.indexOf("?" + _jckw[r] + "=")) > -1 || (e = _jcrf.indexOf("&" + _jckw[r] + "=")) > -1) return n = _jcrf.substring(e + _jckw[r].length + 2, _jcrf.length), (e = n.indexOf("&")) > -1 && (n = n.substring(0, e)), _jcsr[r] + "?t?=" + _jc_f_cr(n);
	return "0?t?=0"
}

function _jc_f_q(e) {
	var t;
	return (t = (e = e.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? e[2].replace(/.*@/, "") : _jcrf_val, e = t) ? e.replace(/:\d+$/, "") : e
}

function _jc_f_o(e, t) {
	var n = e.match(RegExp("(^|&|\\?|#)(" + t + ")=([^&#]*)(&|$|#)", ""));
	return n ? n[3] : _jcrf_val
}

function _jc_g_kw2() {
	if (_jcrf == "") return;
	var e = 0,
		t, n = "";
	if ((e = _jcrf.indexOf("://")) < 0) return;
	t = _jcrf.substring(e + 3, _jcrf.length), t.indexOf("/") > -1 && (t = t.substring(0, t.indexOf("/")));
	for (var r = 0, i = _jc_engine.length; r < i; r++) if (RegExp("(^|\\.)" + _jc_engine[r][1].replace(/\./g, "\\.")).test(_jc_f_q(_jcrf))) {
		var s = _jc_f_o(_jcrf, _jc_engine[r][2]) || "";
		if (s || _jc_engine[r][0] == 2 || _jc_engine[r][0] == 14 || _jc_engine[r][0] == 17) _jc_engine[r][0] == 1 && _jcrf.indexOf("cpro.baidu.com") > -1 && (s = ""), _jc_se = _jc_engine[r][0], _jc_kw = s
	}
	_jc_f_Refertype()
}

function _jc_f_Refertype() {
	_jcrf != "" && (_jc_se != "" ? _jc_refertype = 2 : _jc_refertype = ~_jcrf.indexOf(".17173.") ? 3 : 4)
}

function _jc_f_cr(e) {
	var t = "";
	if (!e || e == "") return "";
	for (var n = 0; n < e.length; n++) e.charAt(n) == " " ? t += "+" : t += e.charAt(n);
	return t
}

function _jc_f_ie() {
	var e = {},
		t = navigator.userAgent.toLowerCase(),
		n;
	return (n = t.match(/msie ([\d.]+)/)) ? e.ie = n[1] : (n = t.match(/firefox\/([\d.]+)/)) ? e.firefox = n[1] : (n = t.match(/chrome\/([\d.]+)/)) ? e.chrome = n[1] : (n = t.match(/opera\/([\d.]+)/)) ? e.opera = n[1] : (n = t.match(/version\/([\d.]+).*safari/)) ? e.safari = n[1] : 0, e.ie ? "IE: " + e.ie : e.firefox ? "Firefox: " + e.firefox : e.chrome ? "Chrome: " + e.chrome : e.opera ? "Opera: " + e.opera : e.safari ? "Safari: " + e.safari : "0"
}

function _jc_f_bw() {
	_jcbw[0] = navigator.appName, _jcbw[7] = navigator.language, _jcbw[0] == "Netscape" ? _jcbw[7] = navigator.language : _jcbw[0] == "Microsoft Internet Explorer" && (_jcbw[7] = navigator.userLanguage), _jcbw[7] = _jcbw[7].toLowerCase(), _jcbw[1] = _jc_f_ie(), _jcbw[2] = navigator.javaEnabled() ? 1 : 0, _jcbw[3] = _jc_g_fl(), _jcbw[4] = _jc_f_os_t(_jc_pcsystem), _jcbw[8] = navigator.cookieEnabled ? 1 : 0, _jcbw[10] = _jc_f_ie_t(_jc_browser), _jcbw[11] = _jc_f_client();
	if (self.screen) {
		var e = typeof window.devicePixelRatio != "undefined" ? window.devicePixelRatio : 1;
		sr = _jc_f_isDPR(e) ? screen.width * e + "x" + screen.height * e : screen.width + "x" + screen.height, sc = screen.colorDepth ? screen.colorDepth + "-bit" : "0"
	} else if (self.java) {
		var t = java.awt.Toolkit.getDefaultToolkit(),
			n = t.getScreenSize();
		sr = n.width + "x" + n.height
	}
	_jcbw[5] = sr, _jcbw[6] = sc
}

function _jc_g_fl() {
	var f = "-1",
		n = navigator;
	if (n.plugins && n.plugins.length) {
		for (var ii = 0; ii < n.plugins.length; ii++) if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
			f = n.plugins[ii].description.split("Shockwave Flash ")[1];
			break
		}
	} else if (window.ActiveXObject) for (var ii = 20; ii >= 2; ii--) try {
		var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
		if (fl) {
			f = ii + ".0";
			break
		}
	} catch (e) {}
	return f == "-1" ? f : f.substring(0, f.indexOf(".") + 2)
}

function _jc_f_rp(e, t, n) {
	var r = "",
		i = "",
		s, o = t.length;
	s = e.indexOf(t);
	while (s != -1) r = e.substr(0, s), e = e.substr(s + o), i = i + r + n, s = e.indexOf(".");
	return i += e, i
}

function _jc_g_co(e) {
	var t = e + "=",
		n, r, i = _jcd.cookie;
	return t == "=" ? i : (n = i.indexOf(t), n < 0 ? "" : (r = i.indexOf(";", n + e.length), r < 0 ? i.substring(n + e.length + 1) : i.substring(n + e.length + 1, r)))
}

function _jc_s_co(e, t, n) {
	_jcd.cookie = e + "=" + t + ";path=/;" + n + "domain=" + _jc_g_h()
}

function _jc_g_dm(e) {
	var t = /^([^\:]+)\:\/\/([^\:\/\?]+)(\:\d+)?(\/[^\?]*)?(\?.*)?$/;
	return e = e.match(t)[2], e
}

function _jc_g_h() {
	var e = _jcda,
		t = "",
		n = "",
		r = !1;
	for (var i = 0; i < _jcexl.length; i++) {
		n = new RegExp("" + _jc_f_rp(_jcexl[i], ".", "\\.") + "$");
		if (n.test(e)) {
			r = !0, t = _jcexl[i], e = e.substr(0, e.lastIndexOf(t)), e.lastIndexOf(".") > 0 && (e = e.substr(e.lastIndexOf(".") + 1));
			break
		}
	}
	return r ? e + t : "auto"
}

function _jc_f_trim(e) {
	return e.replace(/\s+/g, "")
}

function _jc_f_void() {
	return
}

function _jc_f_getads() {
	var e = _jcl.indexOf("ads="),
		t = "",
		n = "0";
	return e != -1 && (t = _jc_f_trim(_jcl.substr(e + 4, 32)), t.length == 32 && /^[a-f0-9]+$/gi.test(t) == 1 && (n = t)), n
}

function _jc_f_pageclk(e) {
	function u(e, t, n) {
		e.attachEvent ? e.attachEvent("on" + t, function(t) {
			n.call(e, t)
		}) : e.addEventListener && e.addEventListener(t, n, i)
	}

	function a(n) {
		return function(i) {
			var o, u;
			s ? (u = Math.max(document.documentElement.scrollTop, document.body.scrollTop), o = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), o = i.clientX + o, u = i.clientY + u) : (o = i.pageX, u = i.pageY);
			var a = window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth;
			switch (t.align) {
			case 1:
				o -= a / 2;
				break;
			case 2:
				o -= a
			}
			o = '{"x":' + o + ',"y":' + u + ",", i = i.target || i.srcElement;
			if (i && typeof i.tagName != "undefined" && i.tagName.toLowerCase() != "a") e: {
				for (u = "A";
				(i = i.parentNode) && i.nodeType == 1;) if (i.tagName == u) break e;
				i = r
			}
			o += i ? '"t":"a","u":"' + encodeURIComponent(i.href) + '"}' : '"t":"b"}',
			i = o,
			"" != i && (o = (_jc_F + "//" + e + "/pv?appkey=" + _jc_appkey).length, o + 10 > 1024 || (o + encodeURIComponent(n.b.join(",") + (n.b.length ? "," : "")).length + 10 > 1024 && f(n), n.b.push(i), (n.b.length >= 10 || /"t":"a"/.test(i)) && f(n)))
		}
	}

	function f(t) {
		var n = new Image;
		t.b.length != 0 && (t.a.et = 2, t.a.ep = "[" + t.b.join(",") + "]", n.src = _jc_F + "//" + e + "/pv?appkey=" + _jc_appkey + "&suv=" + _jc_uv + "&ssid=" + _ssid + "&bp=" + encodeURIComponent(t.a.ep) + "&se=" + _jc_se + "&kw=" + _jc_kw + "&rf=" + _jcrf + "&bwt=" + _jcbw[1] + "&bw=" + _jcbw[10] + "&Jav=" + _jcbw[2] + "&Flu=" + _jcbw[3] + "&scr=" + _jcbw[5] + "&Clr=" + _jcbw[6] + "&Os=" + _jcbw[4] + "&ck=" + _jcbw[8] + "&Ln=" + _jcbw[7] + "&rft=" + _jc_refertype), t.b = []
	}

	function l() {
		if (typeof window["_bdhm_loaded_" + t.id] == "undefined") {
			window["_bdhm_loaded_" + t.id] = n;
			var e = this;
			e.a = {}, e.b = [], e.J()
		}
	}
	var t = {
		ctrk: !0,
		align: 1
	},
		n = !0,
		r = null;
	i = !1;
	var s = /msie (\d+\.\d+)/i.test(navigator.userAgent),
		o = window.screen.width + "x" + window.screen.height;
	l.prototype = {
		m: function() {
			var e = this;
			t.ctrk && (u(document, "mouseup", a(this)), u(window, "beforeunload", function() {
				f(e)
			}), setInterval(function() {
				f(e)
			}, 6e5))
		},
		J: function() {
			try {
				this.m && this.m()
			} catch (e) {}
		}
	}, new l
}

function _jc_set_diff() {
	var e = new Date;
	_jc_s_co("DIFF", e.getTime(), "expires=Sun, 29 July 2046 00:00:00 UTC;")
}

function _jc_f_init() {
	var e, t = _jcin.getTime() * 1e3 + Math.round(Math.random() * 2147483647),
		n, r = new Image(0, 0);
	_jc_i11 = new Image(0, 0), _jc_g_kw2(), _jcrf == "" ? (_jcrf = "0", e = "0") : e = _jc_g_dm(_jcrf);
	var i = _jc_g_co("ONLINE_TIME"),
		s = 0;
	if (i == "") i = _jcin.getTime(), _jc_s_co("ONLINE_TIME", i, "");
	else {
		var o = _jcin.getTime();
		s = Math.round((parseInt(o) - parseInt(i)) / 1e3);
		if (isNaN(s) || s < 0) s = 0;
		_jc_s_co("ONLINE_TIME", o, "")
	}
	_jc_uv = _jc_g_co("SUV"), _diff = _jc_g_co("DIFF"), _diff = !isNaN(_diff) && _diff != "" ? parseInt(_diff) : 0, u = new Date, _jc_uv == "" ? (_diff = 0, _jc_set_diff()) : _diff && u.getTime() - _diff < 36e5 ? _diff = -1 : _diff && u.getTime() - _diff > 36e5 ? (_diff > 0 && (_diff = u.getTime() - _diff), _diff = Math.round(Math.ceil(_diff / 36e5)), _jc_set_diff()) : _diff == "" ? (_diff = -4, _jc_set_diff()) : (_diff = -3, _jc_set_diff()), _jc_uv == "" && (_jc_uv = t, _jc_s_co("SUV", _jc_uv, "expires=Sun, 29 July 2046 00:00:00 UTC;")), _ssid = _jc_g_co("sessionid"), _ssid2 = _jc_g_co("sessionid2");
	var u = new Date;
	u.setTime(u.getTime() + 18e5), _ssid == "" || _ssid != _ssid2 || _ssid.indexOf("|") == -1 ? (_ssid = _jc_uv + "" + (_jcin.getTime() * 1e3 + Math.round(Math.random() * 2147483647)) + _jcin.getTime(), _svn = 1, _jc_s_co("sessionid", _ssid + "|" + _svn, "expires=" + u.toGMTString() + ";"), _jc_s_co("sessionid2", _ssid + "|" + _svn, "")) : (_svn = _ssid.split("|")[1], _svn = !isNaN(_svn) && _svn != "" ? parseInt(_svn) + 1 : 1, _ssid = _ssid.split("|")[0], _jc_s_co("sessionid", _ssid + "|" + _svn, "expires=" + u.toGMTString() + ";"), _jc_s_co("sessionid2", _ssid + "|" + _svn, ""), _svn = _svn == 1 ? -1 : _svn), _nuv = _jc_g_co("NUV");
	var a = new Date;
	_nuv == "" ? (a.setDate(a.getDate() + 1), a = new Date(a.getFullYear(), a.getMonth(), a.getDate()), _jc_s_co("NUV", a.getTime(), "expires=Sun, 29 July 2046 00:00:00 UTC;")) : _nuv && a.getTime() > parseInt(_nuv) && (_jc_nuv = 0), _jc_f_bw(), _jcbw[9] = 0;
	try {
		top.location != self.location && e.indexOf(".17173.") == -1 && (e = 3, _jcbw[9] = 3)
	} catch (f) {
		e = 3
	}
	_jcrf.indexOf("#") > -1 && (_jcrf = _jcrf.substring(0, _jcrf.indexOf("#")));
	var l = "";
	typeof seourl != "undefined" && (l = seourl);
	var c = _jc_f_getads(),
		h = _jc_f_account();
	_jc_F != "https:" && (r.src = _jcrqurl + "ping.gif?" + t + "?t?=" + _jc_uv + "?t?=" + _jc_nuv + "?t?=" + e + "?t?=" + _jcrf + "?t?=" + _jcda + "?t?=" + _jc_g_kw() + "?t?=" + _jc_f_trim(_jcbw[1]) + "?t?=" + _jcbw[2] + "?t?=" + _jcbw[3] + "?t?=" + _jcbw[4] + "?t?=" + _jcbw[5] + "?t?=" + _jcbw[6] + "?t?=" + _jcbw[7] + "?t?=" + _jcbw[8] + "?t?=" + _jcbw[9] + "?t?=" + _jcbw[10] + "?t?=" + s + "?t?=", r.onload = function() {
		_jc_f_void()
	}), _jc_i11.src = _jc_F + "//log1.17173.com/ping.gif?" + t + "?t?=" + _jc_uv + "?t?=" + _jc_nuv + "?t?=" + e + "?t?=" + _jcrf + "?t?=" + _jcda + "?t?=" + _jc_se + "?t?=" + _jc_kw + "?t?=" + _jc_f_trim(_jcbw[1]) + "?t?=" + _jcbw[2] + "?t?=" + _jcbw[3] + "?t?=" + _jcbw[4] + "?t?=" + _jcbw[5] + "?t?=" + _jcbw[6] + "?t?=" + _jcbw[7] + "?t?=" + _jcbw[8] + "?t?=" + _jcbw[9] + "?t?=" + _jcbw[10] + "?t?=" + s + "?t?=" + c + "?t?=" + _ssid + "?t?=" + _svn + "?t?=" + _diff + "?t?=" + _jcbw[11] + "?t?=" + h + "?t?=" + _jc_refertype + "?t?=" + l + "?t?=", _jc_i11.onload = function() {
		_jc_f_void()
	}, _jc_f_pageclk("log1.17173.com")
}
var _jcexl = new Array(".com.cn", ".net.cn", ".org.cn", ".gov.cn", ".com", ".cn", ".net", ".org", ".mobi", ".biz", ".cc", ".us", ".info", ".name", ".tv", ".asia", ".hk"),
	_jcsr = new Array,
	_jckw = new Array;
_jcsr[0] = "baidu", _jckw[0] = "word", _jcsr[1] = "baidu", _jckw[1] = "wd", _jcsr[2] = "google", _jckw[2] = "q", _jcsr[3] = "soso", _jckw[3] = "w", _jcsr[4] = "live", _jckw[4] = "q", _jcsr[5] = "yahoo", _jckw[5] = "p", _jcsr[6] = "qq", _jckw[6] = "w", _jcsr[7] = "sogou", _jckw[7] = "query", _jcsr[8] = "3721", _jckw[8] = "name", _jcsr[9] = "iask", _jckw[9] = "k", _jcsr[10] = "zhongsou", _jckw[10] = "word", _jcsr[11] = "alexa", _jckw[11] = "q", _jcsr[12] = "163", _jckw[12] = "q", _jcsr[13] = "msn", _jckw[13] = "q", _jcsr[14] = "aol", _jckw[14] = "query", _jcsr[15] = "aol", _jckw[15] = "encquery", _jcsr[16] = "lycos", _jckw[16] = "query", _jcsr[17] = "ask", _jckw[17] = "q", _jcsr[18] = "altavista", _jckw[18] = "q", _jcsr[19] = "netscape", _jckw[19] = "query", _jcsr[20] = "cnn", _jckw[20] = "query", _jcsr[21] = "about", _jckw[21] = "terms", _jcsr[22] = "mamma", _jckw[22] = "query", _jcsr[23] = "alltheweb", _jckw[23] = "q", _jcsr[24] = "gigablast", _jckw[24] = "q", _jcsr[25] = "virgilio", _jckw[25] = "qs", _jcsr[26] = "alice", _jckw[26] = "qs", _jcsr[27] = "aol", _jckw[27] = "q", _jcsr[28] = "mama", _jckw[28] = "query", _jcsr[29] = "search", _jckw[29] = "q", _jcsr[30] = "yam", _jckw[30] = "k", _jcsr[31] = "360", _jckw[31] = "q";
var _jcDeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1),
	_jc_pcsystem = [
		[/(Windows NT 5\.0|Windows 2000)/, "Win 2000"],
		[/(Windows NT 5\.1|Windows xp)/i, "Win XP"],
		[/(Windows NT 5\.2|Windows 2003)/, "Win 2003"],
		[/(Windows NT 6\.0|Windows Vista)/, "Win Vista"],
		[/(Windows NT 6\.1|Windows 7)/, "Win 7"],
		[/(Windows NT 6\.2; ARM;)/, "Windows RT"],
		[/(Windows NT 6\.2)/, "Win 8"],
		[/(XBLWP7|WP7)/, "Windows Phone"],
		[/(Windows ?Mobile| WM([0-9]) )/, "Windows Mobile"],
		[/(Windows Phone).* (\d+)\.(\d+)/],
		[/(Win98|Windows 98)/, "Win 98"],
		[/(WinME|Windows ME)/, "Windows ME"],
		[/(WinCE|WindowsCE|Windows CE)/, "Windows CE"],
		[/(Touch[Pp]ad)\/(\d+)\.(\d+)/],
		[/(Android)[\- ]?([\d]+)\.([\d]+)/],
		[/(Linux)[\/ ]?(\d+)\.(\d+)/],
		[/Linux/, "Linux"],
		[/(Unix|UNIX|X11)/, "Unix"],
		[/(FreeBSD)/],
		[/(OpenBSD)/],
		[/(iPhone|iPad|iPod);.*CPU.*OS (\d+)(?:_\d+)?_(\d+).*Mobile/],
		[/(iPhone|iPad|iPod).*OS (\d+)_(\d+)/],
		[/(iPhone|iPad|iPod|CPU OS)/, "IOS"],
		[/(BlackBerry)[ ]?[0-9]*[i]?[\/]?([0-9]+)\.([0-9]*)/],
		[/(BB10|(Black[Bb]erry)|(RIM Tablet OS)|(Play[Bb]ook))/, "BlackBerry OS"],
		[/(CrOS) [a-z0-9_]+ (\d+)\.(\d+)/],
		[/(Samsung)/i, "Samsung"],
		[/\(Mobile;.+Firefox\/\d+\.\d+/, "Firefox OS"],
		[/(Brew|BREW|BMP)/, "Brew MP"],
		[/(Windows NT|SUSE|Fedora|Red Hat|PCLinuxOS|Puppy|PCLinuxOS|CentOS|hpwOS|webOS|AppleTV|Ubuntu|Kindle|Bada|Lubuntu|BackTrack|Slackware|Pre|Pixi|WebTV|GoogleTV|Symbian[Oo][Ss])[\/ ]?(\d+)\.(\d*)/],
		[/(HTC|Sprint APA(9292)|(ADR[A-Za-z0-9]+))/, "HTC"],
		[/(Mac)/, "Mac OS"],
		[/(J2ME)/, "J2ME"],
		[/(Symbian|SymbOS|S60|MeeGo|Series[ ]?60|SymbianOS\/9.1|NOKIA|Series40|Maemo)/i, "Symbian"],
		[/(WinNT4.0)/, "Windows NT 4.0"]
	],
	_jc_browser = [
		[/(17173)/, "17173"],
		[/(PaleMoon)/, "pm"],
		[/(Fennec)/, "fn"],
		[/(Flock)/, "fk"],
		[/(RockMelt)/, "rm"],
		[/(Navigator)/, "ng"],
		[/(MyIBrow)/, "mb"],
		[/(CrMo|CriOS)/, "cm"],
		[/(QQBrowser|TencentTraveler)/i, "qq"],
		[/(Maxthon)/, "ma"],
		[/(360SE|360EE|360browser)/i, "36"],
		[/(Theworld)/, "th"],
		[/( SE )/, "se"],
		[/(LBBROWSER)/, "lb"],
		[/(Lynx)/, "ln"],
		[/(CoolNovo)/, "cl"],
		[/(TaoBrowser)/, "tb"],
		[/(Arora)/, "aa"],
		[/(Epiphany)/, "ep"],
		[/(Links)/, "ls"],
		[/(Camino)/, "cmn"],
		[/(Konqueror)/, "kq"],
		[/(Avant Browser)/, "ab"],
		[/(ELinks)/, "el"],
		[/(Minimo)/, "mnm"],
		[/baiduie8|baidubrowser|FlyFlow|BIDUBrowser/i, "bd"],
		[/(UCBrowser|UC Browser|UCWEB|UC AppleWebKit)/, "uc"],
		[/(OneBrowser)/, "ob"],
		[/(iBrowser\/Mini)/, "im"],
		[/(Nokia|BrowserNG|NokiaBrowser|Series60|S40OviBrowser)/, "nk"],
		[/(BB10|PlayBook|Black[bB]erry)/, "bb"],
		[/(OmniWeb)/, "ow"],
		[/(Blazer)/, "bz"],
		[/Qt/, "qt"],
		[/(NetFront)/, "nf"],
		[/(Silk)/, "sk"],
		[/(Teleca)/, "tc"],
		[/(Froyo)/, "fy"],
		[/(MSIE 9)/, "ie9"],
		[/(MSIE 8)/, "ie8"],
		[/(MSIE 7)/, "ie7"],
		[/(MSIE 6)/, "ie6"],
		[/(MSIE 10)/, "ie10"],
		[/(Opera Mini)/, "opm"],
		[/(Opera|Oupeng)/, "op"],
		[/(iPhone|iPad|iPod)/, "ms"],
		[/(Firefox)/, "ff"],
		[/(Chrome)/, "ch"],
		[/(Safari)/, "sa"],
		[/(MSIE)/, "ie"],
		[/(Android)/, "ad"]
	],
	_jc_engine = [
		[1, "baidu.com", "word|wd|w"],
		[2, "google.com", "q"],
		[4, "sogou.com", "query|keyword"],
		[6, "search.yahoo.com", "p"],
		[7, "yahoo.cn", "q"],
		[8, "soso.com", "w|key"],
		[11, "youdao.com", "q"],
		[12, "gougou.com", "search"],
		[13, "bing.com", "q"],
		[14, "so.com", "q"],
		[14, "so.360.cn", "q"],
		[14, "v.360.cn", "q"],
		[15, "jike.com", "q"],
		[16, "qihoo.com", "kw"],
		[17, "etao.com", "q"],
		[18, "soku.com", "keyword"],
		[19, "easou.com", "q"],
		[20, "glb.uc.cn", "keyword|word|q"],
		[21, "yunfan.com", "q|kw|key"]
	],
	_jcd = document,
	_jcl = _jcd.location.toString(),
	_jcrf = _jcd.referrer,
	_jcda = _jc_g_dm(_jcl),
	_jcur = _jcd.url,
	_jcin = new Date,
	_jcrqurl = "http://logs.17173.com/",
	_jc_uv = "",
	_jc_nuv = 1,
	_jcbw = new Array,
	_ssid = "",
	_ssid2 = "",
	_svn = "",
	_diff = "",
	_jc_appkey = 118,
	_jc_se = "",
	_jc_kw = "",
	_jc_refertype = 1,
	_jcrf_val = null,
	_jc_i11, _jc_F = window.location.protocol == "https:" ? "https:" : "http:";
_jcrf.indexOf("http") > 0 && (_jcrf = _jcrf.substring(_jcrf.indexOf("http")));
var _jc_spv_stat;
_jc_spv_stat || _jc_f_init(), _jc_spv_stat = 1, window._adref || (function() {
	function o() {
		return e.parse(window.location.href).query[t] || ""
	}

	function u() {
		var t = "";
		if (!document.referrer) return t;
		var n = e.parse(document.referrer);
		for (var r = 0; r < s.length; r++) {
			var i = s[r];
			if (i.hostname.test(n.hostname)) {
				t = n.query[i.keyword];
				break
			}
		}
		return t
	}

	function a(e, t, n) {
		n.raw || (t = encodeURIComponent(String(t)));
		var r = e + "=" + t;
		n.expires && (r += "; expires=" + n.expires.toGMTString()), n.domain && (r += "; domain=" + n.domain), n.path && (r += "; path=" + n.path), document.cookie = r
	}

	function f(e, t) {
		t = t || {}, t.expires = new Date(0), a(e, "", t)
	}

	function l() {
		var e = o();
		if (!e) return;
		var t = u();
		if (/\.17173\.com$/.test(window.location.hostname)) a(n, e, i), t ? a(r, t, i) : f(r, i);
		else {
			var s = "http://passport.17173.com/adref_cross.php";
			s += "?" + n + "=" + e, s += "&" + r + "=" + t;
			var l = document.createElement("div");
			l.style.display = "none", l.innerHTML = '<iframe src="' + s + '" width="0" height="0" frameborder="0" border="0" scrolling="no"></iframe>', document.body.appendChild(l)
		}
	}
	var e = function() {
			function t(e) {
				return Object.prototype.toString.apply(e) === "[object Array]"
			}
			var e = /^([^\:]+)\:\/\/([^\:\/\?]+)(\:\d+)?(\/[^\?]*)?(\?.*)?$/;
			return {
				parse: function(n) {
					var r = n.match(e);
					if (!r) return null;
					var i = r[2],
						s = {};
					if (r[5]) {
						var o = r[5].substr(1).split("&");
						for (var u = 0; u < o.length; u++) {
							var a = o[u].split("="),
								f = a[0],
								l = a[1];
							s.hasOwnProperty(f) ? t(s[f]) ? s[f].push(l) : s[f] = [s[f], l] : s[f] = l
						}
					}
					return {
						hostname: i,
						query: s
					}
				}
			}
		}(),
		t = "adref",
		n = "ad_analysis_source",
		r = "ad_analysis_keyword",
		i = {
			domain: ".17173.com",
			path: "/",
			expires: new Date((new Date).getTime() + 216e5),
			raw: !0
		},
		s = [{
			hostname: /\.baidu\.com/,
			keyword: "wd"
		}, {
			hostname: /\.sogou\.com/,
			keyword: "query"
		}, {
			hostname: /\.360\.cn/,
			keyword: "q"
		}, {
			hostname: /\.google\.com/,
			keyword: "q"
		}, {
			hostname: /\.soso\.com/,
			keyword: "w"
		}];
	l()
}(), window._adref = 1)