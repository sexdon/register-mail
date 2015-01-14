(function(a, b) {
	if (typeof define == "function") define("jquery", ["require", "exports", "module"], b);
	else {
		var c = {},
			d = function(a) {
				return c[a]
			},
			e = {
				exports: {}
			};
		b.apply(a, [d, e.exports, e]), a.jQuery = e.exports
	}
})(this, function(a, b, c) {
	(function(a, b) {
		function g(a, c, e) {
			if (e === b && a.nodeType === 1) {
				e = a.getAttribute("data-" + c);
				if (typeof e == "string") {
					try {
						e = e === "true" ? !0 : e === "false" ? !1 : e === "null" ? null : d.isNaN(e) ? f.test(e) ? d.parseJSON(e) : e : parseFloat(e)
					} catch (g) {}
					d.data(a, c, e)
				} else e = b
			}
			return e
		}

		function w() {
			return !1
		}

		function x() {
			return !0
		}

		function D(a, b, c) {
			return c[0].type = a, d.event.handle.apply(b, c)
		}

		function F(a) {
			var b, c, e, f, g, h, i, j, k, l, m, n, o, q = [],
				r = [],
				s = d.data(this, this.nodeType ? "events" : "__events__");
			typeof s == "function" && (s = s.events);
			if (a.liveFired === this || !s || !s.live || a.button && a.type === "click") return;
			a.namespace && (n = new RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")), a.liveFired = this;
			var t = s.live.slice(0);
			for (i = 0; i < t.length; i++)
			g = t[i], g.origType.replace(p, "") === a.type ? r.push(g.selector) : t.splice(i--, 1);
			f = d(a.target).closest(r, a.currentTarget);
			for (j = 0, k = f.length; j < k; j++) {
				m = f[j];
				for (i = 0; i < t.length; i++) {
					g = t[i];
					if (m.selector === g.selector && (!n || n.test(g.namespace))) {
						h = m.elem, e = null;
						if (g.preType === "mouseenter" || g.preType === "mouseleave") a.type = g.preType, e = d(a.relatedTarget).closest(g.selector)[0];
						(!e || e !== h) && q.push({
							elem: h,
							handleObj: g,
							level: m.level
						})
					}
				}
			}
			for (j = 0, k = q.length; j < k; j++) {
				f = q[j];
				if (c && f.level > c) break;
				a.currentTarget = f.elem, a.data = f.handleObj.data, a.handleObj = f.handleObj, o = f.handleObj.origHandler.apply(f.elem, arguments);
				if (o === !1 || a.isPropagationStopped()) {
					c = f.level, o === !1 && (b = !1);
					if (a.isImmediatePropagationStopped()) break
				}
			}
			return b
		}

		function G(a, b) {
			return (a && a !== "*" ? a + "." : "") + b.replace(r, "`").replace(s, "&")
		}

		function N(a) {
			return !a || !a.parentNode || a.parentNode.nodeType === 11
		}

		function O(a, b, c) {
			if (d.isFunction(b)) return d.grep(a, function(a, d) {
				var e = !! b.call(a, d, a);
				return e === c
			});
			if (b.nodeType) return d.grep(a, function(a, d) {
				return a === b === c
			});
			if (typeof b == "string") {
				var e = d.grep(a, function(a) {
					return a.nodeType === 1
				});
				if (K.test(b)) return d.filter(b, e, !c);
				b = d.filter(b, e)
			}
			return d.grep(a, function(a, e) {
				return d.inArray(a, b) >= 0 === c
			})
		}

		function Z(a, b) {
			return d.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
		}

		function $(a, b) {
			var c = 0;
			b.each(function() {
				if (this.nodeName !== (a[c] && a[c].nodeName)) return;
				var b = d.data(a[c++]),
					e = d.data(this, b),
					f = b && b.events;
				if (f) {
					delete e.handle, e.events = {};
					for (var g in f)
					for (var h in f[g])
					d.event.add(this, g, f[g][h], f[g][h].data)
				}
			})
		}

		function _(a, b) {
			b.src ? d.ajax({
				url: b.src,
				async: !1,
				dataType: "script"
			}) : d.globalEval(b.text || b.textContent || b.innerHTML || ""), b.parentNode && b.parentNode.removeChild(b)
		}

		function bn(a, b, c) {
			var e = b === "width" ? bh : bi,
				f = b === "width" ? a.offsetWidth : a.offsetHeight;
			return c === "border" ? f : (d.each(e, function() {
				c || (f -= parseFloat(d.css(a, "padding" + this)) || 0), c === "margin" ? f += parseFloat(d.css(a, "margin" + this)) || 0 : f -= parseFloat(d.css(a, "border" + this + "Width")) || 0
			}), f)
		}

		function bB(a, b, c, e) {
			d.isArray(b) && b.length ? d.each(b, function(b, f) {
				c || bt.test(a) ? e(a, f) : bB(a + "[" + (typeof f == "object" || d.isArray(f) ? b : "") + "]", f, c, e)
			}) : !c && b != null && typeof b == "object" ? d.isEmptyObject(b) ? e(a, "") : d.each(b, function(b, d) {
				bB(a + "[" + b + "]", d, c, e)
			}) : e(a, b)
		}

		function bH(a, b) {
			var c = {};
			return d.each(bG.concat.apply([], bG.slice(0, b)), function() {
				c[this] = a
			}), c
		}

		function bI(a) {
			if (!bC[a]) {
				var b = d("<" + a + ">").appendTo("body"),
					c = b.css("display");
				b.remove();
				if (c === "none" || c === "") c = "block";
				bC[a] = c
			}
			return bC[a]
		}

		function bL(a) {
			return d.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
		}
		var c = a.document,
			d = function() {
				function K() {
					if (d.isReady) return;
					try {
						c.documentElement.doScroll("left")
					} catch (a) {
						setTimeout(K, 1);
						return
					}
					d.ready()
				}
				var d = function(a, b) {
						return new d.fn.init(a, b)
					},
					e = a.jQuery,
					f = a.$,
					g, h = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,
					i = /^.[^:#\[\.,]*$/,
					j = /\S/,
					k = /\s/,
					l = /^\s+/,
					m = /\s+$/,
					n = /\W/,
					o = /\d/,
					p = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
					q = /^[\],:{}\s]*$/,
					r = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
					s = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
					t = /(?:^|:|,)(?:\s*\[)+/g,
					u = /(webkit)[ \/]([\w.]+)/,
					v = /(opera)(?:.*version)?[ \/]([\w.]+)/,
					w = /(msie) ([\w.]+)/,
					x = /(mozilla)(?:.*? rv:([\w.]+))?/,
					y = navigator.userAgent,
					z, A = !1,
					B = [],
					C, D = Object.prototype.toString,
					E = Object.prototype.hasOwnProperty,
					F = Array.prototype.push,
					G = Array.prototype.slice,
					H = String.prototype.trim,
					I = Array.prototype.indexOf,
					J = {};
				return d.fn = d.prototype = {
					init: function(a, e) {
						var f, i, j, k;
						if (!a) return this;
						if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
						if (a === "body" && !e && c.body) return this.context = c, this[0] = c.body, this.selector = "body", this.length = 1, this;
						if (typeof a == "string") {
							f = h.exec(a);
							if (f && (f[1] || !e)) {
								if (f[1]) return k = e ? e.ownerDocument || e : c, j = p.exec(a), j ? d.isPlainObject(e) ? (a = [c.createElement(j[1])], d.fn.attr.call(a, e, !0)) : a = [k.createElement(j[1])] : (j = d.buildFragment([f[1]], [k]), a = (j.cacheable ? j.fragment.cloneNode(!0) : j.fragment).childNodes), d.merge(this, a);
								i = c.getElementById(f[2]);
								if (i && i.parentNode) {
									if (i.id !== f[2]) return g.find(a);
									this.length = 1, this[0] = i
								}
								return this.context = c, this.selector = a, this
							}
							return !e && !n.test(a) ? (this.selector = a, this.context = c, a = c.getElementsByTagName(a), d.merge(this, a)) : !e || e.jquery ? (e || g).find(a) : d(e).find(a)
						}
						return d.isFunction(a) ? g.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), d.makeArray(a, this))
					},
					selector: "",
					jquery: "1.4.4",
					length: 0,
					size: function() {
						return this.length
					},
					toArray: function() {
						return G.call(this, 0)
					},
					get: function(a) {
						return a == null ? this.toArray() : a < 0 ? this.slice(a)[0] : this[a]
					},
					pushStack: function(a, b, c) {
						var e = d();
						return d.isArray(a) ? F.apply(e, a) : d.merge(e, a), e.prevObject = this, e.context = this.context, b === "find" ? e.selector = this.selector + (this.selector ? " " : "") + c : b && (e.selector = this.selector + "." + b + "(" + c + ")"), e
					},
					each: function(a, b) {
						return d.each(this, a, b)
					},
					ready: function(a) {
						return d.bindReady(), d.isReady ? a.call(c, d) : B && B.push(a), this
					},
					eq: function(a) {
						return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
					},
					first: function() {
						return this.eq(0)
					},
					last: function() {
						return this.eq(-1)
					},
					slice: function() {
						return this.pushStack(G.apply(this, arguments), "slice", G.call(arguments).join(","))
					},
					map: function(a) {
						return this.pushStack(d.map(this, function(b, c) {
							return a.call(b, c, b)
						}))
					},
					end: function() {
						return this.prevObject || d(null)
					},
					push: F,
					sort: [].sort,
					splice: [].splice
				}, d.fn.init.prototype = d.fn, d.extend = d.fn.extend = function() {
					var a, c, e, f, g, h, i = arguments[0] || {},
						j = 1,
						k = arguments.length,
						l = !1;
					typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !d.isFunction(i) && (i = {}), k === j && (i = this, --j);
					for (; j < k; j++)
					if ((a = arguments[j]) != null) for (c in a) {
						e = i[c], f = a[c];
						if (i === f) continue;
						l && f && (d.isPlainObject(f) || (g = d.isArray(f))) ? (g ? (g = !1, h = e && d.isArray(e) ? e : []) : h = e && d.isPlainObject(e) ? e : {}, i[c] = d.extend(l, h, f)) : f !== b && (i[c] = f)
					}
					return i
				}, d.extend({
					noConflict: function(b) {
						return a.$ = f, b && (a.jQuery = e), d
					},
					isReady: !1,
					readyWait: 1,
					ready: function(a) {
						a === !0 && d.readyWait--;
						if (!d.readyWait || a !== !0 && !d.isReady) {
							if (!c.body) return setTimeout(d.ready, 1);
							d.isReady = !0;
							if (a !== !0 && --d.readyWait > 0) return;
							if (B) {
								var b, e = 0,
									f = B;
								B = null;
								while (b = f[e++])
								b.call(c, d);
								d.fn.trigger && d(c).trigger("ready").unbind("ready")
							}
						}
					},
					bindReady: function() {
						if (A) return;
						A = !0;
						if (c.readyState === "complete") return setTimeout(d.ready, 1);
						if (c.addEventListener) c.addEventListener("DOMContentLoaded", C, !1), a.addEventListener("load", d.ready, !1);
						else if (c.attachEvent) {
							c.attachEvent("onreadystatechange", C), a.attachEvent("onload", d.ready);
							var b = !1;
							try {
								b = a.frameElement == null
							} catch (e) {}
							c.documentElement.doScroll && b && K()
						}
					},
					isFunction: function(a) {
						return d.type(a) === "function"
					},
					isArray: Array.isArray ||
					function(a) {
						return d.type(a) === "array"
					},
					isWindow: function(a) {
						return a && typeof a == "object" && "setInterval" in a
					},
					isNaN: function(a) {
						return a == null || !o.test(a) || isNaN(a)
					},
					type: function(a) {
						return a == null ? String(a) : J[D.call(a)] || "object"
					},
					isPlainObject: function(a) {
						if (!a || d.type(a) !== "object" || a.nodeType || d.isWindow(a)) return !1;
						if (a.constructor && !E.call(a, "constructor") && !E.call(a.constructor.prototype, "isPrototypeOf")) return !1;
						var c;
						for (c in a);
						return c === b || E.call(a, c)
					},
					isEmptyObject: function(a) {
						for (var b in a)
						return !1;
						return !0
					},
					error: function(a) {
						throw a
					},
					parseJSON: function(b) {
						if (typeof b != "string" || !b) return null;
						b = d.trim(b);
						if (q.test(b.replace(r, "@").replace(s, "]").replace(t, ""))) return a.JSON && a.JSON.parse ? a.JSON.parse(b) : (new Function("return " + b))();
						d.error("Invalid JSON: " + b)
					},
					noop: function() {},
					globalEval: function(a) {
						if (a && j.test(a)) {
							var b = c.getElementsByTagName("head")[0] || c.documentElement,
								e = c.createElement("script");
							e.type = "text/javascript", d.support.scriptEval ? e.appendChild(c.createTextNode(a)) : e.text = a, b.insertBefore(e, b.firstChild), b.removeChild(e)
						}
					},
					nodeName: function(a, b) {
						return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
					},
					each: function(a, c, e) {
						var f, g = 0,
							h = a.length,
							i = h === b || d.isFunction(a);
						if (e) {
							if (i) {
								for (f in a)
								if (c.apply(a[f], e) === !1) break
							} else for (; g < h;)
							if (c.apply(a[g++], e) === !1) break
						} else if (i) {
							for (f in a)
							if (c.call(a[f], f, a[f]) === !1) break
						} else for (var j = a[0]; g < h && c.call(j, g, j) !== !1; j = a[++g]);
						return a
					},
					trim: H ?
					function(a) {
						return a == null ? "" : H.call(a)
					} : function(a) {
						return a == null ? "" : a.toString().replace(l, "").replace(m, "")
					},
					makeArray: function(a, b) {
						var c = b || [];
						if (a != null) {
							var e = d.type(a);
							a.length == null || e === "string" || e === "function" || e === "regexp" || d.isWindow(a) ? F.call(c, a) : d.merge(c, a)
						}
						return c
					},
					inArray: function(a, b) {
						if (b.indexOf) return b.indexOf(a);
						for (var c = 0, d = b.length; c < d; c++)
						if (b[c] === a) return c;
						return -1
					},
					merge: function(a, c) {
						var d = a.length,
							e = 0;
						if (typeof c.length == "number") for (var f = c.length; e < f; e++)
						a[d++] = c[e];
						else while (c[e] !== b)
						a[d++] = c[e++];
						return a.length = d, a
					},
					grep: function(a, b, c) {
						var d = [],
							e;
						c = !! c;
						for (var f = 0, g = a.length; f < g; f++)
						e = !! b(a[f], f), c !== e && d.push(a[f]);
						return d
					},
					map: function(a, b, c) {
						var d = [],
							e;
						for (var f = 0, g = a.length; f < g; f++)
						e = b(a[f], f, c), e != null && (d[d.length] = e);
						return d.concat.apply([], d)
					},
					guid: 1,
					proxy: function(a, c, e) {
						return arguments.length === 2 && (typeof c == "string" ? (e = a, a = e[c], c = b) : c && !d.isFunction(c) && (e = c, c = b)), !c && a && (c = function() {
							return a.apply(e || this, arguments)
						}), a && (c.guid = a.guid = a.guid || c.guid || d.guid++), c
					},
					access: function(a, c, e, f, g, h) {
						var i = a.length;
						if (typeof c == "object") {
							for (var j in c)
							d.access(a, j, c[j], f, g, e);
							return a
						}
						if (e !== b) {
							f = !h && f && d.isFunction(e);
							for (var k = 0; k < i; k++)
							g(a[k], c, f ? e.call(a[k], k, g(a[k], c)) : e, h);
							return a
						}
						return i ? g(a[0], c) : b
					},
					now: function() {
						return (new Date).getTime()
					},
					uaMatch: function(a) {
						a = a.toLowerCase();
						var b = u.exec(a) || v.exec(a) || w.exec(a) || a.indexOf("compatible") < 0 && x.exec(a) || [];
						return {
							browser: b[1] || "",
							version: b[2] || "0"
						}
					},
					browser: {}
				}), d.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
					J["[object " + b + "]"] = b.toLowerCase()
				}), z = d.uaMatch(y), z.browser && (d.browser[z.browser] = !0, d.browser.version = z.version), d.browser.webkit && (d.browser.safari = !0), I && (d.inArray = function(a, b) {
					return I.call(b, a)
				}), k.test("\u00a0") || (l = /^[\s\xA0]+/, m = /[\s\xA0]+$/), g = d(c), c.addEventListener ? C = function() {
					c.removeEventListener("DOMContentLoaded", C, !1), d.ready()
				} : c.attachEvent && (C = function() {
					c.readyState === "complete" && (c.detachEvent("onreadystatechange", C), d.ready())
				}), a.jQuery = a.$ = d
			}();
		(function() {
			d.support = {};
			var b = c.documentElement,
				e = c.createElement("script"),
				f = c.createElement("div"),
				g = "script" + d.now();
			f.style.display = "none", f.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
			var h = f.getElementsByTagName("*"),
				i = f.getElementsByTagName("a")[0],
				j = c.createElement("select"),
				k = j.appendChild(c.createElement("option"));
			if (!h || !h.length || !i) return;
			d.support = {
				leadingWhitespace: f.firstChild.nodeType === 3,
				tbody: !f.getElementsByTagName("tbody").length,
				htmlSerialize: !! f.getElementsByTagName("link").length,
				style: /red/.test(i.getAttribute("style")),
				hrefNormalized: i.getAttribute("href") === "/a",
				opacity: /^0.55$/.test(i.style.opacity),
				cssFloat: !! i.style.cssFloat,
				checkOn: f.getElementsByTagName("input")[0].value === "on",
				optSelected: k.selected,
				deleteExpando: !0,
				optDisabled: !1,
				checkClone: !1,
				scriptEval: !1,
				noCloneEvent: !0,
				boxModel: null,
				inlineBlockNeedsLayout: !1,
				shrinkWrapBlocks: !1,
				reliableHiddenOffsets: !0
			}, j.disabled = !0, d.support.optDisabled = !k.disabled, e.type = "text/javascript";
			try {
				e.appendChild(c.createTextNode("window." + g + "=1;"))
			} catch (l) {}
			b.insertBefore(e, b.firstChild), a[g] && (d.support.scriptEval = !0, delete a[g]);
			try {
				delete e.test
			} catch (l) {
				d.support.deleteExpando = !1
			}
			b.removeChild(e), f.attachEvent && f.fireEvent && (f.attachEvent("onclick", function o() {
				d.support.noCloneEvent = !1, f.detachEvent("onclick", o)
			}), f.cloneNode(!0).fireEvent("onclick")), f = c.createElement("div"), f.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
			var m = c.createDocumentFragment();
			m.appendChild(f.firstChild), d.support.checkClone = m.cloneNode(!0).cloneNode(!0).lastChild.checked, d(function() {
				var a = c.createElement("div");
				a.style.width = a.style.paddingLeft = "1px", c.body.appendChild(a), d.boxModel = d.support.boxModel = a.offsetWidth === 2, "zoom" in a.style && (a.style.display = "inline", a.style.zoom = 1, d.support.inlineBlockNeedsLayout = a.offsetWidth === 2, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", d.support.shrinkWrapBlocks = a.offsetWidth !== 2), a.innerHTML = "<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>";
				var b = a.getElementsByTagName("td");
				d.support.reliableHiddenOffsets = b[0].offsetHeight === 0, b[0].style.display = "", b[1].style.display = "none", d.support.reliableHiddenOffsets = d.support.reliableHiddenOffsets && b[0].offsetHeight === 0, a.innerHTML = "", c.body.removeChild(a).style.display = "none", a = b = null
			});
			var n = function(a) {
					var b = c.createElement("div");
					a = "on" + a;
					var d = a in b;
					return d || (b.setAttribute(a, "return;"), d = typeof b[a] == "function"), b = null, d
				};
			d.support.submitBubbles = n("submit"), d.support.changeBubbles = n("change"), b = e = f = h = i = null
		})();
		var e = {},
			f = /^(?:\{.*\}|\[.*\])$/;
		d.extend({
			cache: {},
			uuid: 0,
			expando: "jQuery" + d.now(),
			noData: {
				embed: !0,
				object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
				applet: !0
			},
			data: function(c, f, g) {
				if (!d.acceptData(c)) return;
				c = c == a ? e : c;
				var h = c.nodeType,
					i = h ? c[d.expando] : null,
					j = d.cache,
					k;
				if (h && !i && typeof f == "string" && g === b) return;
				return h ? i || (c[d.expando] = i = ++d.uuid) : j = c, typeof f == "object" ? h ? j[i] = d.extend(j[i], f) : d.extend(j, f) : h && !j[i] && (j[i] = {}), k = h ? j[i] : j, g !== b && (k[f] = g), typeof f == "string" ? k[f] : k
			},
			removeData: function(b, c) {
				if (!d.acceptData(b)) return;
				b = b == a ? e : b;
				var f = b.nodeType,
					g = f ? b[d.expando] : b,
					h = d.cache,
					i = f ? h[g] : g;
				if (c) i && (delete i[c], f && d.isEmptyObject(i) && d.removeData(b));
				else if (f && d.support.deleteExpando) delete b[d.expando];
				else if (b.removeAttribute) b.removeAttribute(d.expando);
				else if (f) delete h[g];
				else for (var j in b)
				delete b[j]
			},
			acceptData: function(a) {
				if (a.nodeName) {
					var b = d.noData[a.nodeName.toLowerCase()];
					if (b) return b !== !0 && a.getAttribute("classid") === b
				}
				return !0
			}
		}), d.fn.extend({
			data: function(a, c) {
				var e = null;
				if (typeof a == "undefined") {
					if (this.length) {
						var f = this[0].attributes,
							h;
						e = d.data(this[0]);
						for (var i = 0, j = f.length; i < j; i++)
						h = f[i].name, h.indexOf("data-") === 0 && (h = h.substr(5), g(this[0], h, e[h]))
					}
					return e
				}
				if (typeof a == "object") return this.each(function() {
					d.data(this, a)
				});
				var k = a.split(".");
				return k[1] = k[1] ? "." + k[1] : "", c === b ? (e = this.triggerHandler("getData" + k[1] + "!", [k[0]]), e === b && this.length && (e = d.data(this[0], a), e = g(this[0], a, e)), e === b && k[1] ? this.data(k[0]) : e) : this.each(function() {
					var b = d(this),
						e = [k[0], c];
					b.triggerHandler("setData" + k[1] + "!", e), d.data(this, a, c), b.triggerHandler("changeData" + k[1] + "!", e)
				})
			},
			removeData: function(a) {
				return this.each(function() {
					d.removeData(this, a)
				})
			}
		}), d.extend({
			queue: function(a, b, c) {
				if (!a) return;
				b = (b || "fx") + "queue";
				var e = d.data(a, b);
				return c ? (!e || d.isArray(c) ? e = d.data(a, b, d.makeArray(c)) : e.push(c), e) : e || []
			},
			dequeue: function(a, b) {
				b = b || "fx";
				var c = d.queue(a, b),
					e = c.shift();
				e === "inprogress" && (e = c.shift()), e && (b === "fx" && c.unshift("inprogress"), e.call(a, function() {
					d.dequeue(a, b)
				}))
			}
		}), d.fn.extend({
			queue: function(a, c) {
				return typeof a != "string" && (c = a, a = "fx"), c === b ? d.queue(this[0], a) : this.each(function(b) {
					var e = d.queue(this, a, c);
					a === "fx" && e[0] !== "inprogress" && d.dequeue(this, a)
				})
			},
			dequeue: function(a) {
				return this.each(function() {
					d.dequeue(this, a)
				})
			},
			delay: function(a, b) {
				return a = d.fx ? d.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function() {
					var c = this;
					setTimeout(function() {
						d.dequeue(c, b)
					}, a)
				})
			},
			clearQueue: function(a) {
				return this.queue(a || "fx", [])
			}
		});
		var h = /[\n\t]/g,
			i = /\s+/,
			j = /\r/g,
			k = /^(?:href|src|style)$/,
			l = /^(?:button|input)$/i,
			m = /^(?:button|input|object|select|textarea)$/i,
			n = /^a(?:rea)?$/i,
			o = /^(?:radio|checkbox)$/i;
		d.props = {
			"for": "htmlFor",
			"class": "className",
			readonly: "readOnly",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			rowspan: "rowSpan",
			colspan: "colSpan",
			tabindex: "tabIndex",
			usemap: "useMap",
			frameborder: "frameBorder"
		}, d.fn.extend({
			attr: function(a, b) {
				return d.access(this, a, b, !0, d.attr)
			},
			removeAttr: function(a, b) {
				return this.each(function() {
					d.attr(this, a, ""), this.nodeType === 1 && this.removeAttribute(a)
				})
			},
			addClass: function(a) {
				if (d.isFunction(a)) return this.each(function(b) {
					var c = d(this);
					c.addClass(a.call(this, b, c.attr("class")))
				});
				if (a && typeof a == "string") {
					var b = (a || "").split(i);
					for (var c = 0, e = this.length; c < e; c++) {
						var f = this[c];
						if (f.nodeType === 1) if (!f.className) f.className = a;
						else {
							var g = " " + f.className + " ",
								h = f.className;
							for (var j = 0, k = b.length; j < k; j++)
							g.indexOf(" " + b[j] + " ") < 0 && (h += " " + b[j]);
							f.className = d.trim(h)
						}
					}
				}
				return this
			},
			removeClass: function(a) {
				if (d.isFunction(a)) return this.each(function(b) {
					var c = d(this);
					c.removeClass(a.call(this, b, c.attr("class")))
				});
				if (a && typeof a == "string" || a === b) {
					var c = (a || "").split(i);
					for (var e = 0, f = this.length; e < f; e++) {
						var g = this[e];
						if (g.nodeType === 1 && g.className) if (a) {
							var j = (" " + g.className + " ").replace(h, " ");
							for (var k = 0, l = c.length; k < l; k++)
							j = j.replace(" " + c[k] + " ", " ");
							g.className = d.trim(j)
						} else g.className = ""
					}
				}
				return this
			},
			toggleClass: function(a, b) {
				var c = typeof a,
					e = typeof b == "boolean";
				return d.isFunction(a) ? this.each(function(c) {
					var e = d(this);
					e.toggleClass(a.call(this, c, e.attr("class"), b), b)
				}) : this.each(function() {
					if (c === "string") {
						var f, g = 0,
							h = d(this),
							j = b,
							k = a.split(i);
						while (f = k[g++])
						j = e ? j : !h.hasClass(f), h[j ? "addClass" : "removeClass"](f)
					} else if (c === "undefined" || c === "boolean") this.className && d.data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : d.data(this, "__className__") || ""
				})
			},
			hasClass: function(a) {
				var b = " " + a + " ";
				for (var c = 0, d = this.length; c < d; c++)
				if ((" " + this[c].className + " ").replace(h, " ").indexOf(b) > -1) return !0;
				return !1
			},
			val: function(a) {
				if (!arguments.length) {
					var c = this[0];
					if (c) {
						if (d.nodeName(c, "option")) {
							var e = c.attributes.value;
							return !e || e.specified ? c.value : c.text
						}
						if (d.nodeName(c, "select")) {
							var f = c.selectedIndex,
								g = [],
								h = c.options,
								i = c.type === "select-one";
							if (f < 0) return null;
							for (var k = i ? f : 0, l = i ? f + 1 : h.length; k < l; k++) {
								var m = h[k];
								if (m.selected && (d.support.optDisabled ? !m.disabled : m.getAttribute("disabled") === null) && (!m.parentNode.disabled || !d.nodeName(m.parentNode, "optgroup"))) {
									a = d(m).val();
									if (i) return a;
									g.push(a)
								}
							}
							return g
						}
						return o.test(c.type) && !d.support.checkOn ? c.getAttribute("value") === null ? "on" : c.value : (c.value || "").replace(j, "")
					}
					return b
				}
				var n = d.isFunction(a);
				return this.each(function(b) {
					var c = d(this),
						e = a;
					if (this.nodeType !== 1) return;
					n && (e = a.call(this, b, c.val())), e == null ? e = "" : typeof e == "number" ? e += "" : d.isArray(e) && (e = d.map(e, function(a) {
						return a == null ? "" : a + ""
					}));
					if (d.isArray(e) && o.test(this.type)) this.checked = d.inArray(c.val(), e) >= 0;
					else if (d.nodeName(this, "select")) {
						var f = d.makeArray(e);
						d("option", this).each(function() {
							this.selected = d.inArray(d(this).val(), f) >= 0
						}), f.length || (this.selectedIndex = -1)
					} else this.value = e
				})
			}
		}), d.extend({
			attrFn: {
				val: !0,
				css: !0,
				html: !0,
				text: !0,
				data: !0,
				width: !0,
				height: !0,
				offset: !0
			},
			attr: function(a, c, e, f) {
				if (!a || a.nodeType === 3 || a.nodeType === 8) return b;
				if (f && c in d.attrFn) return d(a)[c](e);
				var g = a.nodeType !== 1 || !d.isXMLDoc(a),
					h = e !== b;
				c = g && d.props[c] || c;
				var i = k.test(c);
				if (c === "selected" && !d.support.optSelected) {
					var j = a.parentNode;
					j && (j.selectedIndex, j.parentNode && j.parentNode.selectedIndex)
				}
				if ((c in a || a[c] !== b) && g && !i) {
					h && (c === "type" && l.test(a.nodeName) && a.parentNode && d.error("type property can't be changed"), e === null ? a.nodeType === 1 && a.removeAttribute(c) : a[c] = e);
					if (d.nodeName(a, "form") && a.getAttributeNode(c)) return a.getAttributeNode(c).nodeValue;
					if (c === "tabIndex") {
						var o = a.getAttributeNode("tabIndex");
						return o && o.specified ? o.value : m.test(a.nodeName) || n.test(a.nodeName) && a.href ? 0 : b
					}
					return a[c]
				}
				if (!d.support.style && g && c === "style") return h && (a.style.cssText = "" + e), a.style.cssText;
				h && a.setAttribute(c, "" + e);
				if (!a.attributes[c] && a.hasAttribute && !a.hasAttribute(c)) return b;
				var p = !d.support.hrefNormalized && g && i ? a.getAttribute(c, 2) : a.getAttribute(c);
				return p === null ? b : p
			}
		});
		var p = /\.(.*)$/,
			q = /^(?:textarea|input|select)$/i,
			r = /\./g,
			s = / /g,
			t = /[^\w\s.|`]/g,
			u = function(a) {
				return a.replace(t, "\\$&")
			},
			v = {
				focusin: 0,
				focusout: 0
			};
		d.event = {
			add: function(c, e, f, g) {
				if (c.nodeType === 3 || c.nodeType === 8) return;
				d.isWindow(c) && c !== a && !c.frameElement && (c = a);
				if (f === !1) f = w;
				else if (!f) return;
				var h, i;
				f.handler && (h = f, f = h.handler), f.guid || (f.guid = d.guid++);
				var j = d.data(c);
				if (!j) return;
				var k = c.nodeType ? "events" : "__events__",
					l = j[k],
					m = j.handle;
				typeof l == "function" ? (m = l.handle, l = l.events) : l || (c.nodeType || (j[k] = j = function() {}), j.events = l = {}), m || (j.handle = m = function() {
					return typeof d != "undefined" && !d.event.triggered ? d.event.handle.apply(m.elem, arguments) : b
				}), m.elem = c, e = e.split(" ");
				var n, o = 0,
					p;
				while (n = e[o++]) {
					i = h ? d.extend({}, h) : {
						handler: f,
						data: g
					}, n.indexOf(".") > -1 ? (p = n.split("."), n = p.shift(), i.namespace = p.slice(0).sort().join(".")) : (p = [], i.namespace = ""), i.type = n, i.guid || (i.guid = f.guid);
					var q = l[n],
						r = d.event.special[n] || {};
					if (!q) {
						q = l[n] = [];
						if (!r.setup || r.setup.call(c, g, p, m) === !1) c.addEventListener ? c.addEventListener(n, m, !1) : c.attachEvent && c.attachEvent("on" + n, m)
					}
					r.add && (r.add.call(c, i), i.handler.guid || (i.handler.guid = f.guid)), q.push(i), d.event.global[n] = !0
				}
				c = null
			},
			global: {},
			remove: function(a, b, c, e) {
				if (a.nodeType === 3 || a.nodeType === 8) return;
				c === !1 && (c = w);
				var f, g, h, i, j = 0,
					k, l, m, n, o, p, q, r = a.nodeType ? "events" : "__events__",
					s = d.data(a),
					t = s && s[r];
				if (!s || !t) return;
				typeof t == "function" && (s = t, t = t.events), b && b.type && (c = b.handler, b = b.type);
				if (!b || typeof b == "string" && b.charAt(0) === ".") {
					b = b || "";
					for (g in t)
					d.event.remove(a, g + b);
					return
				}
				b = b.split(" ");
				while (g = b[j++]) {
					q = g, p = null, k = g.indexOf(".") < 0, l = [], k || (l = g.split("."), g = l.shift(), m = new RegExp("(^|\\.)" + d.map(l.slice(0).sort(), u).join("\\.(?:.*\\.)?") + "(\\.|$)")), o = t[g];
					if (!o) continue;
					if (!c) {
						for (i = 0; i < o.length; i++) {
							p = o[i];
							if (k || m.test(p.namespace)) d.event.remove(a, q, p.handler, i), o.splice(i--, 1)
						}
						continue
					}
					n = d.event.special[g] || {};
					for (i = e || 0; i < o.length; i++) {
						p = o[i];
						if (c.guid === p.guid) {
							if (k || m.test(p.namespace)) e == null && o.splice(i--, 1), n.remove && n.remove.call(a, p);
							if (e != null) break
						}
					}
					if (o.length === 0 || e != null && o.length === 1)(!n.teardown || n.teardown.call(a, l) === !1) && d.removeEvent(a, g, s.handle), f = null, delete t[g]
				}
				if (d.isEmptyObject(t)) {
					var v = s.handle;
					v && (v.elem = null), delete s.events, delete s.handle, typeof s == "function" ? d.removeData(a, r) : d.isEmptyObject(s) && d.removeData(a)
				}
			},
			trigger: function(a, c, e) {
				var f = a.type || a,
					g = arguments[3];
				if (!g) {
					a = typeof a == "object" ? a[d.expando] ? a : d.extend(d.Event(f), a) : d.Event(f), f.indexOf("!") >= 0 && (a.type = f = f.slice(0, -1), a.exclusive = !0), e || (a.stopPropagation(), d.event.global[f] && d.each(d.cache, function() {
						this.events && this.events[f] && d.event.trigger(a, c, this.handle.elem)
					}));
					if (!e || e.nodeType === 3 || e.nodeType === 8) return b;
					a.result = b, a.target = e, c = d.makeArray(c), c.unshift(a)
				}
				a.currentTarget = e;
				var h = e.nodeType ? d.data(e, "handle") : (d.data(e, "__events__") || {}).handle;
				h && h.apply(e, c);
				var i = e.parentNode || e.ownerDocument;
				try {
					e && e.nodeName && d.noData[e.nodeName.toLowerCase()] || e["on" + f] && e["on" + f].apply(e, c) === !1 && (a.result = !1, a.preventDefault())
				} catch (j) {}
				if (!a.isPropagationStopped() && i) d.event.trigger(a, c, i, !0);
				else if (!a.isDefaultPrevented()) {
					var k, l = a.target,
						m = f.replace(p, ""),
						n = d.nodeName(l, "a") && m === "click",
						o = d.event.special[m] || {};
					if ((!o._default || o._default.call(e, a) === !1) && !n && !(l && l.nodeName && d.noData[l.nodeName.toLowerCase()])) {
						try {
							l[m] && (k = l["on" + m], k && (l["on" + m] = null), d.event.triggered = !0, l[m]())
						} catch (q) {}
						k && (l["on" + m] = k), d.event.triggered = !1
					}
				}
			},
			handle: function(c) {
				var e, f, g, h, i, j = [],
					k = d.makeArray(arguments);
				c = k[0] = d.event.fix(c || a.event), c.currentTarget = this, e = c.type.indexOf(".") < 0 && !c.exclusive, e || (g = c.type.split("."), c.type = g.shift(), j = g.slice(0).sort(), h = new RegExp("(^|\\.)" + j.join("\\.(?:.*\\.)?") + "(\\.|$)")), c.namespace = c.namespace || j.join("."), i = d.data(this, this.nodeType ? "events" : "__events__"), typeof i == "function" && (i = i.events), f = (i || {})[c.type];
				if (i && f) {
					f = f.slice(0);
					for (var l = 0, m = f.length; l < m; l++) {
						var n = f[l];
						if (e || h.test(n.namespace)) {
							c.handler = n.handler, c.data = n.data, c.handleObj = n;
							var o = n.handler.apply(this, k);
							o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()));
							if (c.isImmediatePropagationStopped()) break
						}
					}
				}
				return c.result
			},
			props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
			fix: function(a) {
				if (a[d.expando]) return a;
				var e = a;
				a = d.Event(e);
				for (var f = this.props.length, g; f;)
				g = this.props[--f], a[g] = e[g];
				a.target || (a.target = a.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement);
				if (a.pageX == null && a.clientX != null) {
					var h = c.documentElement,
						i = c.body;
					a.pageX = a.clientX + (h && h.scrollLeft || i && i.scrollLeft || 0) - (h && h.clientLeft || i && i.clientLeft || 0), a.pageY = a.clientY + (h && h.scrollTop || i && i.scrollTop || 0) - (h && h.clientTop || i && i.clientTop || 0)
				}
				return a.which == null && (a.charCode != null || a.keyCode != null) && (a.which = a.charCode != null ? a.charCode : a.keyCode), !a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey), !a.which && a.button !== b && (a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0), a
			},
			guid: 1e8,
			proxy: d.proxy,
			special: {
				ready: {
					setup: d.bindReady,
					teardown: d.noop
				},
				live: {
					add: function(a) {
						d.event.add(this, G(a.origType, a.selector), d.extend({}, a, {
							handler: F,
							guid: a.handler.guid
						}))
					},
					remove: function(a) {
						d.event.remove(this, G(a.origType, a.selector), a)
					}
				},
				beforeunload: {
					setup: function(a, b, c) {
						d.isWindow(this) && (this.onbeforeunload = c)
					},
					teardown: function(a, b) {
						this.onbeforeunload === b && (this.onbeforeunload = null)
					}
				}
			}
		}, d.removeEvent = c.removeEventListener ?
		function(a, b, c) {
			a.removeEventListener && a.removeEventListener(b, c, !1)
		} : function(a, b, c) {
			a.detachEvent && a.detachEvent("on" + b, c)
		}, d.Event = function(a) {
			if (!this.preventDefault) return new d.Event(a);
			a && a.type ? (this.originalEvent = a, this.type = a.type) : this.type = a, this.timeStamp = d.now(), this[d.expando] = !0
		}, d.Event.prototype = {
			preventDefault: function() {
				this.isDefaultPrevented = x;
				var a = this.originalEvent;
				if (!a) return;
				a.preventDefault ? a.preventDefault() : a.returnValue = !1
			},
			stopPropagation: function() {
				this.isPropagationStopped = x;
				var a = this.originalEvent;
				if (!a) return;
				a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0
			},
			stopImmediatePropagation: function() {
				this.isImmediatePropagationStopped = x, this.stopPropagation()
			},
			isDefaultPrevented: w,
			isPropagationStopped: w,
			isImmediatePropagationStopped: w
		};
		var y = function(a) {
				var b = a.relatedTarget;
				try {
					while (b && b !== this)
					b = b.parentNode;
					b !== this && (a.type = a.data, d.event.handle.apply(this, arguments))
				} catch (c) {}
			},
			z = function(a) {
				a.type = a.data, d.event.handle.apply(this, arguments)
			};
		d.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		}, function(a, b) {
			d.event.special[a] = {
				setup: function(c) {
					d.event.add(this, b, c && c.selector ? z : y, a)
				},
				teardown: function(a) {
					d.event.remove(this, b, a && a.selector ? z : y)
				}
			}
		}), d.support.submitBubbles || (d.event.special.submit = {
			setup: function(a, c) {
				if (this.nodeName.toLowerCase() !== "form") d.event.add(this, "click.specialSubmit", function(a) {
					var c = a.target,
						e = c.type;
					if ((e === "submit" || e === "image") && d(c).closest("form").length) return a.liveFired = b, D("submit", this, arguments)
				}), d.event.add(this, "keypress.specialSubmit", function(a) {
					var c = a.target,
						e = c.type;
					if ((e === "text" || e === "password") && d(c).closest("form").length && a.keyCode === 13) return a.liveFired = b, D("submit", this, arguments)
				});
				else return !1
			},
			teardown: function(a) {
				d.event.remove(this, ".specialSubmit")
			}
		});
		if (!d.support.changeBubbles) {
			var A, B = function(a) {
					var b = a.type,
						c = a.value;
					return b === "radio" || b === "checkbox" ? c = a.checked : b === "select-multiple" ? c = a.selectedIndex > -1 ? d.map(a.options, function(a) {
						return a.selected
					}).join("-") : "" : a.nodeName.toLowerCase() === "select" && (c = a.selectedIndex), c
				},
				C = function(a) {
					var c = a.target,
						e, f;
					if (!q.test(c.nodeName) || c.readOnly) return;
					e = d.data(c, "_change_data"), f = B(c), (a.type !== "focusout" || c.type !== "radio") && d.data(c, "_change_data", f);
					if (e === b || f === e) return;
					if (e != null || f) return a.type = "change", a.liveFired = b, d.event.trigger(a, arguments[1], c)
				};
			d.event.special.change = {
				filters: {
					focusout: C,
					beforedeactivate: C,
					click: function(a) {
						var b = a.target,
							c = b.type;
						if (c === "radio" || c === "checkbox" || b.nodeName.toLowerCase() === "select") return C.call(this, a)
					},
					keydown: function(a) {
						var b = a.target,
							c = b.type;
						if (a.keyCode === 13 && b.nodeName.toLowerCase() !== "textarea" || a.keyCode === 32 && (c === "checkbox" || c === "radio") || c === "select-multiple") return C.call(this, a)
					},
					beforeactivate: function(a) {
						var b = a.target;
						d.data(b, "_change_data", B(b))
					}
				},
				setup: function(a, b) {
					if (this.type === "file") return !1;
					for (var c in A)
					d.event.add(this, c + ".specialChange", A[c]);
					return q.test(this.nodeName)
				},
				teardown: function(a) {
					return d.event.remove(this, ".specialChange"), q.test(this.nodeName)
				}
			}, A = d.event.special.change.filters, A.focus = A.beforeactivate
		}
		c.addEventListener && d.each({
			focus: "focusin",
			blur: "focusout"
		}, function(a, b) {
			function e(a) {
				return a = d.event.fix(a), a.type = b, d.event.trigger(a, null, a.target)
			}
			d.event.special[b] = {
				setup: function() {
					v[b]++ === 0 && c.addEventListener(a, e, !0)
				},
				teardown: function() {
					--v[b] === 0 && c.removeEventListener(a, e, !0)
				}
			}
		}), d.each(["bind", "one"], function(a, c) {
			d.fn[c] = function(a, e, f) {
				if (typeof a == "object") {
					for (var g in a)
					this[c](g, e, a[g], f);
					return this
				}
				if (d.isFunction(e) || e === !1) f = e, e = b;
				var h = c === "one" ? d.proxy(f, function(a) {
					return d(this).unbind(a, h), f.apply(this, arguments)
				}) : f;
				if (a === "unload" && c !== "one") this.one(a, e, f);
				else for (var i = 0, j = this.length; i < j; i++)
				d.event.add(this[i], a, h, e);
				return this
			}
		}), d.fn.extend({
			unbind: function(a, b) {
				if (typeof a == "object" && !a.preventDefault) for (var c in a)
				this.unbind(c, a[c]);
				else for (var e = 0, f = this.length; e < f; e++)
				d.event.remove(this[e], a, b);
				return this
			},
			delegate: function(a, b, c, d) {
				return this.live(b, c, d, a)
			},
			undelegate: function(a, b, c) {
				return arguments.length === 0 ? this.unbind("live") : this.die(b, null, c, a)
			},
			trigger: function(a, b) {
				return this.each(function() {
					d.event.trigger(a, b, this)
				})
			},
			triggerHandler: function(a, b) {
				if (this[0]) {
					var c = d.Event(a);
					return c.preventDefault(), c.stopPropagation(), d.event.trigger(c, b, this[0]), c.result
				}
			},
			toggle: function(a) {
				var b = arguments,
					c = 1;
				while (c < b.length)
				d.proxy(a, b[c++]);
				return this.click(d.proxy(a, function(e) {
					var f = (d.data(this, "lastToggle" + a.guid) || 0) % c;
					return d.data(this, "lastToggle" + a.guid, f + 1), e.preventDefault(), b[f].apply(this, arguments) || !1
				}))
			},
			hover: function(a, b) {
				return this.mouseenter(a).mouseleave(b || a)
			}
		});
		var E = {
			focus: "focusin",
			blur: "focusout",
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		};
		d.each(["live", "die"], function(a, c) {
			d.fn[c] = function(a, e, f, g) {
				var h, i = 0,
					j, k, l, m = g || this.selector,
					n = g ? this : d(this.context);
				if (typeof a == "object" && !a.preventDefault) {
					for (var o in a)
					n[c](o, e, a[o], m);
					return this
				}
				d.isFunction(e) && (f = e, e = b), a = (a || "").split(" ");
				while ((h = a[i++]) != null) {
					j = p.exec(h), k = "", j && (k = j[0], h = h.replace(p, ""));
					if (h === "hover") {
						a.push("mouseenter" + k, "mouseleave" + k);
						continue
					}
					l = h, h === "focus" || h === "blur" ? (a.push(E[h] + k), h += k) : h = (E[h] || h) + k;
					if (c === "live") for (var q = 0, r = n.length; q < r; q++)
					d.event.add(n[q], "live." + G(h, m), {
						data: e,
						selector: m,
						handler: f,
						origType: h,
						origHandler: f,
						preType: l
					});
					else n.unbind("live." + G(h, m), f)
				}
				return this
			}
		}), d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function(a, b) {
			d.fn[b] = function(a, c) {
				return c == null && (c = a, a = null), arguments.length > 0 ? this.bind(b, a, c) : this.trigger(b)
			}, d.attrFn && (d.attrFn[b] = !0)
		}), a.attachEvent && !a.addEventListener && d(a).bind("unload", function() {
			for (var a in d.cache)
			if (d.cache[a].handle) try {
				d.event.remove(d.cache[a].handle.elem)
			} catch (b) {}
		}), function() {
			function r(a, b, c, d, e, f) {
				for (var g = 0, h = d.length; g < h; g++) {
					var i = d[g];
					if (i) {
						var j = !1;
						i = i[a];
						while (i) {
							if (i.sizcache === c) {
								j = d[i.sizset];
								break
							}
							i.nodeType === 1 && !f && (i.sizcache = c, i.sizset = g);
							if (i.nodeName.toLowerCase() === b) {
								j = i;
								break
							}
							i = i[a]
						}
						d[g] = j
					}
				}
			}

			function s(a, b, c, d, e, f) {
				for (var g = 0, h = d.length; g < h; g++) {
					var j = d[g];
					if (j) {
						var k = !1;
						j = j[a];
						while (j) {
							if (j.sizcache === c) {
								k = d[j.sizset];
								break
							}
							if (j.nodeType === 1) {
								f || (j.sizcache = c, j.sizset = g);
								if (typeof b != "string") {
									if (j === b) {
										k = !0;
										break
									}
								} else if (i.filter(b, [j]).length > 0) {
									k = j;
									break
								}
							}
							j = j[a]
						}
						d[g] = k
					}
				}
			}
			var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
				e = 0,
				f = Object.prototype.toString,
				g = !1,
				h = !0;
			[0, 0].sort(function() {
				return h = !1, 0
			});
			var i = function(b, d, e, g) {
					e = e || [], d = d || c;
					var h = d;
					if (d.nodeType !== 1 && d.nodeType !== 9) return [];
					if (!b || typeof b != "string") return e;
					var l, m, o, p, q, r, s, u, v = !0,
						w = i.isXML(d),
						x = [],
						y = b;
					do {
						a.exec(""), l = a.exec(y);
						if (l) {
							y = l[3], x.push(l[1]);
							if (l[2]) {
								p = l[3];
								break
							}
						}
					} while (l);
					if (x.length > 1 && k.exec(b)) if (x.length === 2 && j.relative[x[0]]) m = t(x[0] + x[1], d);
					else {
						m = j.relative[x[0]] ? [d] : i(x.shift(), d);
						while (x.length)
						b = x.shift(), j.relative[b] && (b += x.shift()), m = t(b, m)
					} else {
						!g && x.length > 1 && d.nodeType === 9 && !w && j.match.ID.test(x[0]) && !j.match.ID.test(x[x.length - 1]) && (q = i.find(x.shift(), d, w), d = q.expr ? i.filter(q.expr, q.set)[0] : q.set[0]);
						if (d) {
							q = g ? {
								expr: x.pop(),
								set: n(g)
							} : i.find(x.pop(), x.length !== 1 || x[0] !== "~" && x[0] !== "+" || !d.parentNode ? d : d.parentNode, w), m = q.expr ? i.filter(q.expr, q.set) : q.set, x.length > 0 ? o = n(m) : v = !1;
							while (x.length)
							r = x.pop(), s = r, j.relative[r] ? s = x.pop() : r = "", s == null && (s = d), j.relative[r](o, s, w)
						} else o = x = []
					}
					o || (o = m), o || i.error(r || b);
					if (f.call(o) === "[object Array]") if (!v) e.push.apply(e, o);
					else if (d && d.nodeType === 1) for (u = 0; o[u] != null; u++)
					o[u] && (o[u] === !0 || o[u].nodeType === 1 && i.contains(d, o[u])) && e.push(m[u]);
					else for (u = 0; o[u] != null; u++)
					o[u] && o[u].nodeType === 1 && e.push(m[u]);
					else n(o, e);
					return p && (i(p, h, e, g), i.uniqueSort(e)), e
				};
			i.uniqueSort = function(a) {
				if (p) {
					g = h, a.sort(p);
					if (g) for (var b = 1; b < a.length; b++)
					a[b] === a[b - 1] && a.splice(b--, 1)
				}
				return a
			}, i.matches = function(a, b) {
				return i(a, null, null, b)
			}, i.matchesSelector = function(a, b) {
				return i(b, null, null, [a]).length > 0
			}, i.find = function(a, b, c) {
				var d;
				if (!a) return [];
				for (var e = 0, f = j.order.length; e < f; e++) {
					var g, h = j.order[e];
					if (g = j.leftMatch[h].exec(a)) {
						var i = g[1];
						g.splice(1, 1);
						if (i.substr(i.length - 1) !== "\\") {
							g[1] = (g[1] || "").replace(/\\/g, ""), d = j.find[h](g, b, c);
							if (d != null) {
								a = a.replace(j.match[h], "");
								break
							}
						}
					}
				}
				return d || (d = b.getElementsByTagName("*")), {
					set: d,
					expr: a
				}
			}, i.filter = function(a, c, d, e) {
				var f, g, h = a,
					k = [],
					l = c,
					m = c && c[0] && i.isXML(c[0]);
				while (a && c.length) {
					for (var n in j.filter)
					if ((f = j.leftMatch[n].exec(a)) != null && f[2]) {
						var o, p, q = j.filter[n],
							r = f[1];
						g = !1, f.splice(1, 1);
						if (r.substr(r.length - 1) === "\\") continue;
						l === k && (k = []);
						if (j.preFilter[n]) {
							f = j.preFilter[n](f, l, d, k, e, m);
							if (!f) g = o = !0;
							else if (f === !0) continue
						}
						if (f) for (var s = 0;
						(p = l[s]) != null; s++)
						if (p) {
							o = q(p, f, s, l);
							var t = e ^ !! o;
							d && o != null ? t ? g = !0 : l[s] = !1 : t && (k.push(p), g = !0)
						}
						if (o !== b) {
							d || (l = k), a = a.replace(j.match[n], "");
							if (!g) return [];
							break
						}
					}
					if (a === h) if (g == null) i.error(a);
					else break;
					h = a
				}
				return l
			}, i.error = function(a) {
				throw "Syntax error, unrecognized expression: " + a
			};
			var j = i.selectors = {
				order: ["ID", "NAME", "TAG"],
				match: {
					ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
					CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
					NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
					ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
					TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
					CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
					POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
					PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
				},
				leftMatch: {},
				attrMap: {
					"class": "className",
					"for": "htmlFor"
				},
				attrHandle: {
					href: function(a) {
						return a.getAttribute("href")
					}
				},
				relative: {
					"+": function(a, b) {
						var c = typeof b == "string",
							d = c && !/\W/.test(b),
							e = c && !d;
						d && (b = b.toLowerCase());
						for (var f = 0, g = a.length, h; f < g; f++)
						if (h = a[f]) {
							while ((h = h.previousSibling) && h.nodeType !== 1);
							a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
						}
						e && i.filter(b, a, !0)
					},
					">": function(a, b) {
						var c, d = typeof b == "string",
							e = 0,
							f = a.length;
						if (d && !/\W/.test(b)) {
							b = b.toLowerCase();
							for (; e < f; e++) {
								c = a[e];
								if (c) {
									var g = c.parentNode;
									a[e] = g.nodeName.toLowerCase() === b ? g : !1
								}
							}
						} else {
							for (; e < f; e++)
							c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
							d && i.filter(b, a, !0)
						}
					},
					"": function(a, b, c) {
						var d, f = e++,
							g = s;
						typeof b == "string" && !/\W/.test(b) && (b = b.toLowerCase(), d = b, g = r), g("parentNode", b, f, a, d, c)
					},
					"~": function(a, b, c) {
						var d, f = e++,
							g = s;
						typeof b == "string" && !/\W/.test(b) && (b = b.toLowerCase(), d = b, g = r), g("previousSibling", b, f, a, d, c)
					}
				},
				find: {
					ID: function(a, b, c) {
						if (typeof b.getElementById != "undefined" && !c) {
							var d = b.getElementById(a[1]);
							return d && d.parentNode ? [d] : []
						}
					},
					NAME: function(a, b) {
						if (typeof b.getElementsByName != "undefined") {
							var c = [],
								d = b.getElementsByName(a[1]);
							for (var e = 0, f = d.length; e < f; e++)
							d[e].getAttribute("name") === a[1] && c.push(d[e]);
							return c.length === 0 ? null : c
						}
					},
					TAG: function(a, b) {
						return b.getElementsByTagName(a[1])
					}
				},
				preFilter: {
					CLASS: function(a, b, c, d, e, f) {
						a = " " + a[1].replace(/\\/g, "") + " ";
						if (f) return a;
						for (var g = 0, h;
						(h = b[g]) != null; g++)
						h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
						return !1
					},
					ID: function(a) {
						return a[1].replace(/\\/g, "")
					},
					TAG: function(a, b) {
						return a[1].toLowerCase()
					},
					CHILD: function(a) {
						if (a[1] === "nth") {
							var b = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
							a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
						}
						return a[0] = e++, a
					},
					ATTR: function(a, b, c, d, e, f) {
						var g = a[1].replace(/\\/g, "");
						return !f && j.attrMap[g] && (a[1] = j.attrMap[g]), a[2] === "~=" && (a[4] = " " + a[4] + " "), a
					},
					PSEUDO: function(b, c, d, e, f) {
						if (b[1] === "not") if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = i(b[3], null, null, c);
						else {
							var g = i.filter(b[3], c, d, !0 ^ f);
							return d || e.push.apply(e, g), !1
						} else if (j.match.POS.test(b[0]) || j.match.CHILD.test(b[0])) return !0;
						return b
					},
					POS: function(a) {
						return a.unshift(!0), a
					}
				},
				filters: {
					enabled: function(a) {
						return a.disabled === !1 && a.type !== "hidden"
					},
					disabled: function(a) {
						return a.disabled === !0
					},
					checked: function(a) {
						return a.checked === !0
					},
					selected: function(a) {
						return a.parentNode.selectedIndex, a.selected === !0
					},
					parent: function(a) {
						return !!a.firstChild
					},
					empty: function(a) {
						return !a.firstChild
					},
					has: function(a, b, c) {
						return !!i(c[3], a).length
					},
					header: function(a) {
						return /h\d/i.test(a.nodeName)
					},
					text: function(a) {
						return "text" === a.type
					},
					radio: function(a) {
						return "radio" === a.type
					},
					checkbox: function(a) {
						return "checkbox" === a.type
					},
					file: function(a) {
						return "file" === a.type
					},
					password: function(a) {
						return "password" === a.type
					},
					submit: function(a) {
						return "submit" === a.type
					},
					image: function(a) {
						return "image" === a.type
					},
					reset: function(a) {
						return "reset" === a.type
					},
					button: function(a) {
						return "button" === a.type || a.nodeName.toLowerCase() === "button"
					},
					input: function(a) {
						return /input|select|textarea|button/i.test(a.nodeName)
					}
				},
				setFilters: {
					first: function(a, b) {
						return b === 0
					},
					last: function(a, b, c, d) {
						return b === d.length - 1
					},
					even: function(a, b) {
						return b % 2 === 0
					},
					odd: function(a, b) {
						return b % 2 === 1
					},
					lt: function(a, b, c) {
						return b < c[3] - 0
					},
					gt: function(a, b, c) {
						return b > c[3] - 0
					},
					nth: function(a, b, c) {
						return c[3] - 0 === b
					},
					eq: function(a, b, c) {
						return c[3] - 0 === b
					}
				},
				filter: {
					PSEUDO: function(a, b, c, d) {
						var e = b[1],
							f = j.filters[e];
						if (f) return f(a, c, b, d);
						if (e === "contains") return (a.textContent || a.innerText || i.getText([a]) || "").indexOf(b[3]) >= 0;
						if (e === "not") {
							var g = b[3];
							for (var h = 0, k = g.length; h < k; h++)
							if (g[h] === a) return !1;
							return !0
						}
						i.error("Syntax error, unrecognized expression: " + e)
					},
					CHILD: function(a, b) {
						var c = b[1],
							d = a;
						switch (c) {
						case "only":
						case "first":
							while (d = d.previousSibling)
							if (d.nodeType === 1) return !1;
							if (c === "first") return !0;
							d = a;
						case "last":
							while (d = d.nextSibling)
							if (d.nodeType === 1) return !1;
							return !0;
						case "nth":
							var e = b[2],
								f = b[3];
							if (e === 1 && f === 0) return !0;
							var g = b[0],
								h = a.parentNode;
							if (h && (h.sizcache !== g || !a.nodeIndex)) {
								var i = 0;
								for (d = h.firstChild; d; d = d.nextSibling)
								d.nodeType === 1 && (d.nodeIndex = ++i);
								h.sizcache = g
							}
							var j = a.nodeIndex - f;
							return e === 0 ? j === 0 : j % e === 0 && j / e >= 0
						}
					},
					ID: function(a, b) {
						return a.nodeType === 1 && a.getAttribute("id") === b
					},
					TAG: function(a, b) {
						return b === "*" && a.nodeType === 1 || a.nodeName.toLowerCase() === b
					},
					CLASS: function(a, b) {
						return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
					},
					ATTR: function(a, b) {
						var c = b[1],
							d = j.attrHandle[c] ? j.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
							e = d + "",
							f = b[2],
							g = b[4];
						return d == null ? f === "!=" : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
					},
					POS: function(a, b, c, d) {
						var e = b[2],
							f = j.setFilters[e];
						if (f) return f(a, c, b, d)
					}
				}
			},
				k = j.match.POS,
				l = function(a, b) {
					return "\\" + (b - 0 + 1)
				};
			for (var m in j.match)
			j.match[m] = new RegExp(j.match[m].source + /(?![^\[]*\])(?![^\(]*\))/.source), j.leftMatch[m] = new RegExp(/(^(?:.|\r|\n)*?)/.source + j.match[m].source.replace(/\\(\d+)/g, l));
			var n = function(a, b) {
					return a = Array.prototype.slice.call(a, 0), b ? (b.push.apply(b, a), b) : a
				};
			try {
				Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
			} catch (o) {
				n = function(a, b) {
					var c = 0,
						d = b || [];
					if (f.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
					else if (typeof a.length == "number") for (var e = a.length; c < e; c++)
					d.push(a[c]);
					else for (; a[c]; c++)
					d.push(a[c]);
					return d
				}
			}
			var p, q;
			c.documentElement.compareDocumentPosition ? p = function(a, b) {
				return a === b ? (g = !0, 0) : !a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1
			} : (p = function(a, b) {
				var c, d, e = [],
					f = [],
					h = a.parentNode,
					i = b.parentNode,
					j = h;
				if (a === b) return g = !0, 0;
				if (h === i) return q(a, b);
				if (!h) return -1;
				if (!i) return 1;
				while (j)
				e.unshift(j), j = j.parentNode;
				j = i;
				while (j)
				f.unshift(j), j = j.parentNode;
				c = e.length, d = f.length;
				for (var k = 0; k < c && k < d; k++)
				if (e[k] !== f[k]) return q(e[k], f[k]);
				return k === c ? q(a, f[k], -1) : q(e[k], b, 1)
			}, q = function(a, b, c) {
				if (a === b) return c;
				var d = a.nextSibling;
				while (d) {
					if (d === b) return -1;
					d = d.nextSibling
				}
				return 1
			}), i.getText = function(a) {
				var b = "",
					c;
				for (var d = 0; a[d]; d++)
				c = a[d], c.nodeType === 3 || c.nodeType === 4 ? b += c.nodeValue : c.nodeType !== 8 && (b += i.getText(c.childNodes));
				return b
			}, function() {
				var a = c.createElement("div"),
					d = "script" + (new Date).getTime(),
					e = c.documentElement;
				a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (j.find.ID = function(a, c, d) {
					if (typeof c.getElementById != "undefined" && !d) {
						var e = c.getElementById(a[1]);
						return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
					}
				}, j.filter.ID = function(a, b) {
					var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
					return a.nodeType === 1 && c && c.nodeValue === b
				}), e.removeChild(a), e = a = null
			}(), function() {
				var a = c.createElement("div");
				a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (j.find.TAG = function(a, b) {
					var c = b.getElementsByTagName(a[1]);
					if (a[1] === "*") {
						var d = [];
						for (var e = 0; c[e]; e++)
						c[e].nodeType === 1 && d.push(c[e]);
						c = d
					}
					return c
				}), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (j.attrHandle.href = function(a) {
					return a.getAttribute("href", 2)
				}), a = null
			}(), c.querySelectorAll &&
			function() {
				var a = i,
					b = c.createElement("div"),
					d = "__sizzle__";
				b.innerHTML = "<p class='TEST'></p>";
				if (b.querySelectorAll && b.querySelectorAll(".TEST").length === 0) return;
				i = function(b, e, f, g) {
					e = e || c, b = b.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
					if (!g && !i.isXML(e)) if (e.nodeType === 9) try {
						return n(e.querySelectorAll(b), f)
					} catch (h) {} else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
						var j = e.getAttribute("id"),
							k = j || d;
						j || e.setAttribute("id", k);
						try {
							return n(e.querySelectorAll("#" + k + " " + b), f)
						} catch (l) {} finally {
							j || e.removeAttribute("id")
						}
					}
					return a(b, e, f, g)
				};
				for (var e in a)
				i[e] = a[e];
				b = null
			}(), function() {
				var a = c.documentElement,
					b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector,
					d = !1;
				try {
					b.call(c.documentElement, "[test!='']:sizzle")
				} catch (e) {
					d = !0
				}
				b && (i.matchesSelector = function(a, c) {
					c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
					if (!i.isXML(a)) try {
						if (d || !j.match.PSEUDO.test(c) && !/!=/.test(c)) return b.call(a, c)
					} catch (e) {}
					return i(c, null, null, [a]).length > 0
				})
			}(), function() {
				var a = c.createElement("div");
				a.innerHTML = "<div class='test e'></div><div class='test'></div>";
				if (!a.getElementsByClassName || a.getElementsByClassName("e").length === 0) return;
				a.lastChild.className = "e";
				if (a.getElementsByClassName("e").length === 1) return;
				j.order.splice(1, 0, "CLASS"), j.find.CLASS = function(a, b, c) {
					if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
				}, a = null
			}(), c.documentElement.contains ? i.contains = function(a, b) {
				return a !== b && (a.contains ? a.contains(b) : !0)
			} : c.documentElement.compareDocumentPosition ? i.contains = function(a, b) {
				return !!(a.compareDocumentPosition(b) & 16)
			} : i.contains = function() {
				return !1
			}, i.isXML = function(a) {
				var b = (a ? a.ownerDocument || a : 0).documentElement;
				return b ? b.nodeName !== "HTML" : !1
			};
			var t = function(a, b) {
					var c, d = [],
						e = "",
						f = b.nodeType ? [b] : b;
					while (c = j.match.PSEUDO.exec(a))
					e += c[0], a = a.replace(j.match.PSEUDO, "");
					a = j.relative[a] ? a + "*" : a;
					for (var g = 0, h = f.length; g < h; g++)
					i(a, f[g], d);
					return i.filter(e, d)
				};
			d.find = i, d.expr = i.selectors, d.expr[":"] = d.expr.filters, d.unique = i.uniqueSort, d.text = i.getText, d.isXMLDoc = i.isXML, d.contains = i.contains
		}();
		var H = /Until$/,
			I = /^(?:parents|prevUntil|prevAll)/,
			J = /,/,
			K = /^.[^:#\[\.,]*$/,
			L = Array.prototype.slice,
			M = d.expr.match.POS;
		d.fn.extend({
			find: function(a) {
				var b = this.pushStack("", "find", a),
					c = 0;
				for (var e = 0, f = this.length; e < f; e++) {
					c = b.length, d.find(a, this[e], b);
					if (e > 0) for (var g = c; g < b.length; g++)
					for (var h = 0; h < c; h++)
					if (b[h] === b[g]) {
						b.splice(g--, 1);
						break
					}
				}
				return b
			},
			has: function(a) {
				var b = d(a);
				return this.filter(function() {
					for (var a = 0, c = b.length; a < c; a++)
					if (d.contains(this, b[a])) return !0
				})
			},
			not: function(a) {
				return this.pushStack(O(this, a, !1), "not", a)
			},
			filter: function(a) {
				return this.pushStack(O(this, a, !0), "filter", a)
			},
			is: function(a) {
				return !!a && d.filter(a, this).length > 0
			},
			closest: function(a, b) {
				var c = [],
					e, f, g = this[0];
				if (d.isArray(a)) {
					var h, i, j = {},
						k = 1;
					if (g && a.length) {
						for (e = 0, f = a.length; e < f; e++)
						i = a[e], j[i] || (j[i] = d.expr.match.POS.test(i) ? d(i, b || this.context) : i);
						while (g && g.ownerDocument && g !== b) {
							for (i in j)
							h = j[i], (h.jquery ? h.index(g) > -1 : d(g).is(h)) && c.push({
								selector: i,
								elem: g,
								level: k
							});
							g = g.parentNode, k++
						}
					}
					return c
				}
				var l = M.test(a) ? d(a, b || this.context) : null;
				for (e = 0, f = this.length; e < f; e++) {
					g = this[e];
					while (g) {
						if (l ? l.index(g) > -1 : d.find.matchesSelector(g, a)) {
							c.push(g);
							break
						}
						g = g.parentNode;
						if (!g || !g.ownerDocument || g === b) break
					}
				}
				return c = c.length > 1 ? d.unique(c) : c, this.pushStack(c, "closest", a)
			},
			index: function(a) {
				return !a || typeof a == "string" ? d.inArray(this[0], a ? d(a) : this.parent().children()) : d.inArray(a.jquery ? a[0] : a, this)
			},
			add: function(a, b) {
				var c = typeof a == "string" ? d(a, b || this.context) : d.makeArray(a),
					e = d.merge(this.get(), c);
				return this.pushStack(N(c[0]) || N(e[0]) ? e : d.unique(e))
			},
			andSelf: function() {
				return this.add(this.prevObject)
			}
		}), d.each({
			parent: function(a) {
				var b = a.parentNode;
				return b && b.nodeType !== 11 ? b : null
			},
			parents: function(a) {
				return d.dir(a, "parentNode")
			},
			parentsUntil: function(a, b, c) {
				return d.dir(a, "parentNode", c)
			},
			next: function(a) {
				return d.nth(a, 2, "nextSibling")
			},
			prev: function(a) {
				return d.nth(a, 2, "previousSibling")
			},
			nextAll: function(a) {
				return d.dir(a, "nextSibling")
			},
			prevAll: function(a) {
				return d.dir(a, "previousSibling")
			},
			nextUntil: function(a, b, c) {
				return d.dir(a, "nextSibling", c)
			},
			prevUntil: function(a, b, c) {
				return d.dir(a, "previousSibling", c)
			},
			siblings: function(a) {
				return d.sibling(a.parentNode.firstChild, a)
			},
			children: function(a) {
				return d.sibling(a.firstChild)
			},
			contents: function(a) {
				return d.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : d.makeArray(a.childNodes)
			}
		}, function(a, b) {
			d.fn[a] = function(c, e) {
				var f = d.map(this, b, c);
				return H.test(a) || (e = c), e && typeof e == "string" && (f = d.filter(e, f)), f = this.length > 1 ? d.unique(f) : f, (this.length > 1 || J.test(e)) && I.test(a) && (f = f.reverse()), this.pushStack(f, a, L.call(arguments).join(","))
			}
		}), d.extend({
			filter: function(a, b, c) {
				return c && (a = ":not(" + a + ")"), b.length === 1 ? d.find.matchesSelector(b[0], a) ? [b[0]] : [] : d.find.matches(a, b)
			},
			dir: function(a, c, e) {
				var f = [],
					g = a[c];
				while (g && g.nodeType !== 9 && (e === b || g.nodeType !== 1 || !d(g).is(e)))
				g.nodeType === 1 && f.push(g), g = g[c];
				return f
			},
			nth: function(a, b, c, d) {
				b = b || 1;
				var e = 0;
				for (; a; a = a[c])
				if (a.nodeType === 1 && ++e === b) break;
				return a
			},
			sibling: function(a, b) {
				var c = [];
				for (; a; a = a.nextSibling)
				a.nodeType === 1 && a !== b && c.push(a);
				return c
			}
		});
		var P = / jQuery\d+="(?:\d+|null)"/g,
			Q = /^\s+/,
			R = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
			S = /<([\w:]+)/,
			T = /<tbody/i,
			U = /<|&#?\w+;/,
			V = /<(?:script|object|embed|option|style)/i,
			W = /checked\s*(?:[^=]|=\s*.checked.)/i,
			X = /\=([^="'>\s]+\/)>/g,
			Y = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				legend: [1, "<fieldset>", "</fieldset>"],
				thead: [1, "<table>", "</table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
				area: [1, "<map>", "</map>"],
				_default: [0, "", ""]
			};
		Y.optgroup = Y.option, Y.tbody = Y.tfoot = Y.colgroup = Y.caption = Y.thead, Y.th = Y.td, d.support.htmlSerialize || (Y._default = [1, "div<div>", "</div>"]), d.fn.extend({
			text: function(a) {
				return d.isFunction(a) ? this.each(function(b) {
					var c = d(this);
					c.text(a.call(this, b, c.text()))
				}) : typeof a != "object" && a !== b ? this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a)) : d.text(this)
			},
			wrapAll: function(a) {
				if (d.isFunction(a)) return this.each(function(b) {
					d(this).wrapAll(a.call(this, b))
				});
				if (this[0]) {
					var b = d(a, this[0].ownerDocument).eq(0).clone(!0);
					this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
						var a = this;
						while (a.firstChild && a.firstChild.nodeType === 1)
						a = a.firstChild;
						return a
					}).append(this)
				}
				return this
			},
			wrapInner: function(a) {
				return d.isFunction(a) ? this.each(function(b) {
					d(this).wrapInner(a.call(this, b))
				}) : this.each(function() {
					var b = d(this),
						c = b.contents();
					c.length ? c.wrapAll(a) : b.append(a)
				})
			},
			wrap: function(a) {
				return this.each(function() {
					d(this).wrapAll(a)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
				}).end()
			},
			append: function() {
				return this.domManip(arguments, !0, function(a) {
					this.nodeType === 1 && this.appendChild(a)
				})
			},
			prepend: function() {
				return this.domManip(arguments, !0, function(a) {
					this.nodeType === 1 && this.insertBefore(a, this.firstChild)
				})
			},
			before: function() {
				if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
					this.parentNode.insertBefore(a, this)
				});
				if (arguments.length) {
					var a = d(arguments[0]);
					return a.push.apply(a, this.toArray()), this.pushStack(a, "before", arguments)
				}
			},
			after: function() {
				if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
					this.parentNode.insertBefore(a, this.nextSibling)
				});
				if (arguments.length) {
					var a = this.pushStack(this, "after", arguments);
					return a.push.apply(a, d(arguments[0]).toArray()), a
				}
			},
			remove: function(a, b) {
				for (var c = 0, e;
				(e = this[c]) != null; c++)
				if (!a || d.filter(a, [e]).length)!b && e.nodeType === 1 && (d.cleanData(e.getElementsByTagName("*")), d.cleanData([e])), e.parentNode && e.parentNode.removeChild(e);
				return this
			},
			empty: function() {
				for (var a = 0, b;
				(b = this[a]) != null; a++) {
					b.nodeType === 1 && d.cleanData(b.getElementsByTagName("*"));
					while (b.firstChild)
					b.removeChild(b.firstChild)
				}
				return this
			},
			clone: function(a) {
				var b = this.map(function() {
					if (!d.support.noCloneEvent && !d.isXMLDoc(this)) {
						var a = this.outerHTML,
							b = this.ownerDocument;
						if (!a) {
							var c = b.createElement("div");
							c.appendChild(this.cloneNode(!0)), a = c.innerHTML
						}
						return d.clean([a.replace(P, "").replace(X, '="$1">').replace(Q, "")], b)[0]
					}
					return this.cloneNode(!0)
				});
				return a === !0 && ($(this, b), $(this.find("*"), b.find("*"))), b
			},
			html: function(a) {
				if (a === b) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(P, "") : null;
				if (typeof a == "string" && !V.test(a) && (d.support.leadingWhitespace || !Q.test(a)) && !Y[(S.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = a.replace(R, "<$1></$2>");
					try {
						for (var c = 0, e = this.length; c < e; c++)
						this[c].nodeType === 1 && (d.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
					} catch (f) {
						this.empty().append(a)
					}
				} else d.isFunction(a) ? this.each(function(b) {
					var c = d(this);
					c.html(a.call(this, b, c.html()))
				}) : this.empty().append(a);
				return this
			},
			replaceWith: function(a) {
				return this[0] && this[0].parentNode ? d.isFunction(a) ? this.each(function(b) {
					var c = d(this),
						e = c.html();
					c.replaceWith(a.call(this, b, e))
				}) : (typeof a != "string" && (a = d(a).detach()), this.each(function() {
					var b = this.nextSibling,
						c = this.parentNode;
					d(this).remove(), b ? d(b).before(a) : d(c).append(a)
				})) : this.pushStack(d(d.isFunction(a) ? a() : a), "replaceWith", a)
			},
			detach: function(a) {
				return this.remove(a, !0)
			},
			domManip: function(a, c, e) {
				var f, g, h, i, j = a[0],
					k = [];
				if (!d.support.checkClone && arguments.length === 3 && typeof j == "string" && W.test(j)) return this.each(function() {
					d(this).domManip(a, c, e, !0)
				});
				if (d.isFunction(j)) return this.each(function(f) {
					var g = d(this);
					a[0] = j.call(this, f, c ? g.html() : b), g.domManip(a, c, e)
				});
				if (this[0]) {
					i = j && j.parentNode, d.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? f = {
						fragment: i
					} : f = d.buildFragment(a, this, k), h = f.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
					if (g) {
						c = c && d.nodeName(g, "tr");
						for (var l = 0, m = this.length; l < m; l++)
						e.call(c ? Z(this[l], g) : this[l], l > 0 || f.cacheable || this.length > 1 ? h.cloneNode(!0) : h)
					}
					k.length && d.each(k, _)
				}
				return this
			}
		}), d.buildFragment = function(a, b, e) {
			var f, g, h, i = b && b[0] ? b[0].ownerDocument || b[0] : c;
			return a.length === 1 && typeof a[0] == "string" && a[0].length < 512 && i === c && !V.test(a[0]) && (d.support.checkClone || !W.test(a[0])) && (g = !0, h = d.fragments[a[0]], h && h !== 1 && (f = h)), f || (f = i.createDocumentFragment(), d.clean(a, i, f, e)), g && (d.fragments[a[0]] = h ? f : 1), {
				fragment: f,
				cacheable: g
			}
		}, d.fragments = {}, d.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(a, b) {
			d.fn[a] = function(c) {
				var e = [],
					f = d(c),
					g = this.length === 1 && this[0].parentNode;
				if (g && g.nodeType === 11 && g.childNodes.length === 1 && f.length === 1) return f[b](this[0]), this;
				for (var h = 0, i = f.length; h < i; h++) {
					var j = (h > 0 ? this.clone(!0) : this).get();
					d(f[h])[b](j), e = e.concat(j)
				}
				return this.pushStack(e, a, f.selector)
			}
		}), d.extend({
			clean: function(a, b, e, f) {
				b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
				var g = [];
				for (var h = 0, i;
				(i = a[h]) != null; h++) {
					typeof i == "number" && (i += "");
					if (!i) continue;
					if (typeof i == "string" && !U.test(i)) i = b.createTextNode(i);
					else if (typeof i == "string") {
						i = i.replace(R, "<$1></$2>");
						var j = (S.exec(i) || ["", ""])[1].toLowerCase(),
							k = Y[j] || Y._default,
							l = k[0],
							m = b.createElement("div");
						m.innerHTML = k[1] + i + k[2];
						while (l--)
						m = m.lastChild;
						if (!d.support.tbody) {
							var n = T.test(i),
								o = j === "table" && !n ? m.firstChild && m.firstChild.childNodes : k[1] === "<table>" && !n ? m.childNodes : [];
							for (var p = o.length - 1; p >= 0; --p)
							d.nodeName(o[p], "tbody") && !o[p].childNodes.length && o[p].parentNode.removeChild(o[p])
						}!d.support.leadingWhitespace && Q.test(i) && m.insertBefore(b.createTextNode(Q.exec(i)[0]), m.firstChild), i = m.childNodes
					}
					i.nodeType ? g.push(i) : g = d.merge(g, i)
				}
				if (e) for (h = 0; g[h]; h++)
				f && d.nodeName(g[h], "script") && (!g[h].type || g[h].type.toLowerCase() === "text/javascript") ? f.push(g[h].parentNode ? g[h].parentNode.removeChild(g[h]) : g[h]) : (g[h].nodeType === 1 && g.splice.apply(g, [h + 1, 0].concat(d.makeArray(g[h].getElementsByTagName("script")))), e.appendChild(g[h]));
				return g
			},
			cleanData: function(a) {
				var b, c, e = d.cache,
					f = d.event.special,
					g = d.support.deleteExpando;
				for (var h = 0, i;
				(i = a[h]) != null; h++) {
					if (i.nodeName && d.noData[i.nodeName.toLowerCase()]) continue;
					c = i[d.expando];
					if (c) {
						b = e[c];
						if (b && b.events) for (var j in b.events)
						f[j] ? d.event.remove(i, j) : d.removeEvent(i, j, b.handle);
						g ? delete i[d.expando] : i.removeAttribute && i.removeAttribute(d.expando), delete e[c]
					}
				}
			}
		});
		var ba = /alpha\([^)]*\)/i,
			bb = /opacity=([^)]*)/,
			bc = /-([a-z])/ig,
			bd = /([A-Z])/g,
			be = /^-?\d+(?:px)?$/i,
			bf = /^-?\d/,
			bg = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			bh = ["Left", "Right"],
			bi = ["Top", "Bottom"],
			bj, bk, bl, bm = function(a, b) {
				return b.toUpperCase()
			};
		d.fn.css = function(a, c) {
			return arguments.length === 2 && c === b ? this : d.access(this, a, c, !0, function(a, c, e) {
				return e !== b ? d.style(a, c, e) : d.css(a, c)
			})
		}, d.extend({
			cssHooks: {
				opacity: {
					get: function(a, b) {
						if (b) {
							var c = bj(a, "opacity", "opacity");
							return c === "" ? "1" : c
						}
						return a.style.opacity
					}
				}
			},
			cssNumber: {
				zIndex: !0,
				fontWeight: !0,
				opacity: !0,
				zoom: !0,
				lineHeight: !0
			},
			cssProps: {
				"float": d.support.cssFloat ? "cssFloat" : "styleFloat"
			},
			style: function(a, c, e, f) {
				if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) return;
				var g, h = d.camelCase(c),
					i = a.style,
					j = d.cssHooks[h];
				c = d.cssProps[h] || h;
				if (e === b) return j && "get" in j && (g = j.get(a, !1, f)) !== b ? g : i[c];
				if (typeof e == "number" && isNaN(e) || e == null) return;
				typeof e == "number" && !d.cssNumber[h] && (e += "px");
				if (!j || !("set" in j) || (e = j.set(a, e)) !== b) try {
					i[c] = e
				} catch (k) {}
			},
			css: function(a, c, e) {
				var f, g = d.camelCase(c),
					h = d.cssHooks[g];
				c = d.cssProps[g] || g;
				if (h && "get" in h && (f = h.get(a, !0, e)) !== b) return f;
				if (bj) return bj(a, c, g)
			},
			swap: function(a, b, c) {
				var d = {};
				for (var e in b)
				d[e] = a.style[e], a.style[e] = b[e];
				c.call(a);
				for (e in b)
				a.style[e] = d[e]
			},
			camelCase: function(a) {
				return a.replace(bc, bm)
			}
		}), d.curCSS = d.css, d.each(["height", "width"], function(a, b) {
			d.cssHooks[b] = {
				get: function(a, c, e) {
					var f;
					if (c) {
						a.offsetWidth !== 0 ? f = bn(a, b, e) : d.swap(a, bg, function() {
							f = bn(a, b, e)
						});
						if (f <= 0) {
							f = bj(a, b, b), f === "0px" && bl && (f = bl(a, b, b));
							if (f != null) return f === "" || f === "auto" ? "0px" : f
						}
						return f < 0 || f == null ? (f = a.style[b], f === "" || f === "auto" ? "0px" : f) : typeof f == "string" ? f : f + "px"
					}
				},
				set: function(a, b) {
					if (!be.test(b)) return b;
					b = parseFloat(b);
					if (b >= 0) return b + "px"
				}
			}
		}), d.support.opacity || (d.cssHooks.opacity = {
			get: function(a, b) {
				return bb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
			},
			set: function(a, b) {

				var c = a.style;
				c.zoom = 1;
				var e = d.isNaN(b) ? "" : "alpha(opacity=" + b * 100 + ")",
					f = c.filter || "";
				c.filter = ba.test(f) ? f.replace(ba, e) : c.filter + " " + e
			}
		}), c.defaultView && c.defaultView.getComputedStyle && (bk = function(a, c, e) {
			var f, g, h;
			e = e.replace(bd, "-$1").toLowerCase();
			if (!(g = a.ownerDocument.defaultView)) return b;
			if (h = g.getComputedStyle(a, null)) f = h.getPropertyValue(e), f === "" && !d.contains(a.ownerDocument.documentElement, a) && (f = d.style(a, e));
			return f
		}), c.documentElement.currentStyle && (bl = function(a, b) {
			var c, d, e = a.currentStyle && a.currentStyle[b],
				f = a.style;
			return !be.test(e) && bf.test(e) && (c = f.left, d = a.runtimeStyle.left, a.runtimeStyle.left = a.currentStyle.left, f.left = b === "fontSize" ? "1em" : e || 0, e = f.pixelLeft + "px", f.left = c, a.runtimeStyle.left = d), e === "" ? "auto" : e
		}), bj = bk || bl, d.expr && d.expr.filters && (d.expr.filters.hidden = function(a) {
			var b = a.offsetWidth,
				c = a.offsetHeight;
			return b === 0 && c === 0 || !d.support.reliableHiddenOffsets && (a.style.display || d.css(a, "display")) === "none"
		}, d.expr.filters.visible = function(a) {
			return !d.expr.filters.hidden(a)
		});
		var bo = d.now(),
			bp = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
			bq = /^(?:select|textarea)/i,
			br = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
			bs = /^(?:GET|HEAD)$/,
			bt = /\[\]$/,
			bu = /\=\?(&|$)/,
			bv = /\?/,
			bw = /([?&])_=[^&]*/,
			bx = /^(\w+:)?\/\/([^\/?#]+)/,
			by = /%20/g,
			bz = /#.*$/,
			bA = d.fn.load;
		d.fn.extend({
			load: function(a, b, c) {
				if (typeof a != "string" && bA) return bA.apply(this, arguments);
				if (!this.length) return this;
				var e = a.indexOf(" ");
				if (e >= 0) {
					var f = a.slice(e, a.length);
					a = a.slice(0, e)
				}
				var g = "GET";
				b && (d.isFunction(b) ? (c = b, b = null) : typeof b == "object" && (b = d.param(b, d.ajaxSettings.traditional), g = "POST"));
				var h = this;
				return d.ajax({
					url: a,
					type: g,
					dataType: "html",
					data: b,
					complete: function(a, b) {
						(b === "success" || b === "notmodified") && h.html(f ? d("<div>").append(a.responseText.replace(bp, "")).find(f) : a.responseText), c && h.each(c, [a.responseText, b, a])
					}
				}), this
			},
			serialize: function() {
				return d.param(this.serializeArray())
			},
			serializeArray: function() {
				return this.map(function() {
					return this.elements ? d.makeArray(this.elements) : this
				}).filter(function() {
					return this.name && !this.disabled && (this.checked || bq.test(this.nodeName) || br.test(this.type))
				}).map(function(a, b) {
					var c = d(this).val();
					return c == null ? null : d.isArray(c) ? d.map(c, function(a, c) {
						return {
							name: b.name,
							value: a
						}
					}) : {
						name: b.name,
						value: c
					}
				}).get()
			}
		}), d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
			d.fn[b] = function(a) {
				return this.bind(b, a)
			}
		}), d.extend({
			get: function(a, b, c, e) {
				return d.isFunction(b) && (e = e || c, c = b, b = null), d.ajax({
					type: "GET",
					url: a,
					data: b,
					success: c,
					dataType: e
				})
			},
			getScript: function(a, b) {
				return d.get(a, null, b, "script")
			},
			getJSON: function(a, b, c) {
				return d.get(a, b, c, "json")
			},
			post: function(a, b, c, e) {
				return d.isFunction(b) && (e = e || c, c = b, b = {}), d.ajax({
					type: "POST",
					url: a,
					data: b,
					success: c,
					dataType: e
				})
			},
			ajaxSetup: function(a) {
				d.extend(d.ajaxSettings, a)
			},
			ajaxSettings: {
				url: location.href,
				global: !0,
				type: "GET",
				contentType: "application/x-www-form-urlencoded",
				processData: !0,
				async: !0,
				xhr: function() {
					return new a.XMLHttpRequest
				},
				accepts: {
					xml: "application/xml, text/xml",
					html: "text/html",
					script: "text/javascript, application/javascript",
					json: "application/json, text/javascript",
					text: "text/plain",
					_default: "*/*"
				}
			},
			ajax: function(e) {
				var f = d.extend(!0, {}, d.ajaxSettings, e),
					g, h, i, j = f.type.toUpperCase(),
					k = bs.test(j);
				f.url = f.url.replace(bz, ""), f.context = e && e.context != null ? e.context : f, f.data && f.processData && typeof f.data != "string" && (f.data = d.param(f.data, f.traditional));
				if (f.dataType === "jsonp") {
					if (j === "GET") bu.test(f.url) || (f.url += (bv.test(f.url) ? "&" : "?") + (f.jsonp || "callback") + "=?");
					else if (!f.data || !bu.test(f.data)) f.data = (f.data ? f.data + "&" : "") + (f.jsonp || "callback") + "=?";
					f.dataType = "json"
				}
				if (f.dataType === "json" && (f.data && bu.test(f.data) || bu.test(f.url))) {
					g = f.jsonpCallback || "jsonp" + bo++, f.data && (f.data = (f.data + "").replace(bu, "=" + g + "$1")), f.url = f.url.replace(bu, "=" + g + "$1"), f.dataType = "script";
					var l = a[g];
					a[g] = function(c) {
						if (d.isFunction(l)) l(c);
						else {
							a[g] = b;
							try {
								delete a[g]
							} catch (e) {}
						}
						i = c, d.handleSuccess(f, u, h, i), d.handleComplete(f, u, h, i), q && q.removeChild(r)
					}
				}
				f.dataType === "script" && f.cache === null && (f.cache = !1);
				if (f.cache === !1 && k) {
					var m = d.now(),
						n = f.url.replace(bw, "$1_=" + m);
					f.url = n + (n === f.url ? (bv.test(f.url) ? "&" : "?") + "_=" + m : "")
				}
				f.data && k && (f.url += (bv.test(f.url) ? "&" : "?") + f.data), f.global && d.active++ === 0 && d.event.trigger("ajaxStart");
				var o = bx.exec(f.url),
					p = o && (o[1] && o[1].toLowerCase() !== location.protocol || o[2].toLowerCase() !== location.host);
				if (f.dataType === "script" && j === "GET" && p) {
					var q = c.getElementsByTagName("head")[0] || c.documentElement,
						r = c.createElement("script");
					f.scriptCharset && (r.charset = f.scriptCharset), r.src = f.url;
					if (!g) {
						var s = !1;
						r.onload = r.onreadystatechange = function() {
							!s && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") && (s = !0, d.handleSuccess(f, u, h, i), d.handleComplete(f, u, h, i), r.onload = r.onreadystatechange = null, q && r.parentNode && q.removeChild(r))
						}
					}
					return q.insertBefore(r, q.firstChild), b
				}
				var t = !1,
					u = f.xhr();
				if (!u) return;
				f.username ? u.open(j, f.url, f.async, f.username, f.password) : u.open(j, f.url, f.async);
				try {
					(f.data != null && !k || e && e.contentType) && u.setRequestHeader("Content-Type", f.contentType), f.ifModified && (d.lastModified[f.url] && u.setRequestHeader("If-Modified-Since", d.lastModified[f.url]), d.etag[f.url] && u.setRequestHeader("If-None-Match", d.etag[f.url])), p || u.setRequestHeader("X-Requested-With", "XMLHttpRequest"), u.setRequestHeader("Accept", f.dataType && f.accepts[f.dataType] ? f.accepts[f.dataType] + ", */*; q=0.01" : f.accepts._default)
				} catch (v) {}
				if (f.beforeSend && f.beforeSend.call(f.context, u, f) === !1) return f.global && d.active-- === 1 && d.event.trigger("ajaxStop"), u.abort(), !1;
				f.global && d.triggerGlobal(f, "ajaxSend", [u, f]);
				var w = u.onreadystatechange = function(a) {
						if (!u || u.readyState === 0 || a === "abort") t || d.handleComplete(f, u, h, i), t = !0, u && (u.onreadystatechange = d.noop);
						else if (!t && u && (u.readyState === 4 || a === "timeout")) {
							t = !0, u.onreadystatechange = d.noop, h = a === "timeout" ? "timeout" : d.httpSuccess(u) ? f.ifModified && d.httpNotModified(u, f.url) ? "notmodified" : "success" : "error";
							var b;
							if (h === "success") try {
								i = d.httpData(u, f.dataType, f)
							} catch (c) {
								h = "parsererror", b = c
							}
							h === "success" || h === "notmodified" ? g || d.handleSuccess(f, u, h, i) : d.handleError(f, u, h, b), g || d.handleComplete(f, u, h, i), a === "timeout" && u.abort(), f.async && (u = null)
						}
					};
				try {
					var x = u.abort;
					u.abort = function() {
						u && Function.prototype.call.call(x, u), w("abort")
					}
				} catch (y) {}
				f.async && f.timeout > 0 && setTimeout(function() {
					u && !t && w("timeout")
				}, f.timeout);
				try {
					u.send(k || f.data == null ? null : f.data)
				} catch (z) {
					d.handleError(f, u, null, z), d.handleComplete(f, u, h, i)
				}
				return f.async || w(), u
			},
			param: function(a, c) {
				var e = [],
					f = function(a, b) {
						b = d.isFunction(b) ? b() : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
					};
				c === b && (c = d.ajaxSettings.traditional);
				if (d.isArray(a) || a.jquery) d.each(a, function() {
					f(this.name, this.value)
				});
				else for (var g in a)
				bB(g, a[g], c, f);
				return e.join("&").replace(by, "+")
			}
		}), d.extend({
			active: 0,
			lastModified: {},
			etag: {},
			handleError: function(a, b, c, e) {
				a.error && a.error.call(a.context, b, c, e), a.global && d.triggerGlobal(a, "ajaxError", [b, a, e])
			},
			handleSuccess: function(a, b, c, e) {
				a.success && a.success.call(a.context, e, c, b), a.global && d.triggerGlobal(a, "ajaxSuccess", [b, a])
			},
			handleComplete: function(a, b, c) {
				a.complete && a.complete.call(a.context, b, c), a.global && d.triggerGlobal(a, "ajaxComplete", [b, a]), a.global && d.active-- === 1 && d.event.trigger("ajaxStop")
			},
			triggerGlobal: function(a, b, c) {
				(a.context && a.context.url == null ? d(a.context) : d.event).trigger(b, c)
			},
			httpSuccess: function(a) {
				try {
					return !a.status && location.protocol === "file:" || a.status >= 200 && a.status < 300 || a.status === 304 || a.status === 1223
				} catch (b) {}
				return !1
			},
			httpNotModified: function(a, b) {
				var c = a.getResponseHeader("Last-Modified"),
					e = a.getResponseHeader("Etag");
				return c && (d.lastModified[b] = c), e && (d.etag[b] = e), a.status === 304
			},
			httpData: function(a, b, c) {
				var e = a.getResponseHeader("content-type") || "",
					f = b === "xml" || !b && e.indexOf("xml") >= 0,
					g = f ? a.responseXML : a.responseText;
				return f && g.documentElement.nodeName === "parsererror" && d.error("parsererror"), c && c.dataFilter && (g = c.dataFilter(g, b)), typeof g == "string" && (b === "json" || !b && e.indexOf("json") >= 0 ? g = d.parseJSON(g) : (b === "script" || !b && e.indexOf("javascript") >= 0) && d.globalEval(g)), g
			}
		}), a.ActiveXObject && (d.ajaxSettings.xhr = function() {
			if (a.location.protocol !== "file:") try {
				return new a.XMLHttpRequest
			} catch (b) {}
			try {
				return new a.ActiveXObject("Microsoft.XMLHTTP")
			} catch (c) {}
		}), d.support.ajax = !! d.ajaxSettings.xhr();
		var bC = {},
			bD = /^(?:toggle|show|hide)$/,
			bE = /^([+\-]=)?([\d+.\-]+)(.*)$/,
			bF, bG = [
				["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
				["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
				["opacity"]
			];
		d.fn.extend({
			show: function(a, b, c) {
				var e, f;
				if (a || a === 0) return this.animate(bH("show", 3), a, b, c);
				for (var g = 0, h = this.length; g < h; g++)
				e = this[g], f = e.style.display, !d.data(e, "olddisplay") && f === "none" && (f = e.style.display = ""), f === "" && d.css(e, "display") === "none" && d.data(e, "olddisplay", bI(e.nodeName));
				for (g = 0; g < h; g++) {
					e = this[g], f = e.style.display;
					if (f === "" || f === "none") e.style.display = d.data(e, "olddisplay") || ""
				}
				return this
			},
			hide: function(a, b, c) {
				if (a || a === 0) return this.animate(bH("hide", 3), a, b, c);
				for (var e = 0, f = this.length; e < f; e++) {
					var g = d.css(this[e], "display");
					g !== "none" && d.data(this[e], "olddisplay", g)
				}
				for (e = 0; e < f; e++)
				this[e].style.display = "none";
				return this
			},
			_toggle: d.fn.toggle,
			toggle: function(a, b, c) {
				var e = typeof a == "boolean";
				return d.isFunction(a) && d.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || e ? this.each(function() {
					var b = e ? a : d(this).is(":hidden");
					d(this)[b ? "show" : "hide"]()
				}) : this.animate(bH("toggle", 3), a, b, c), this
			},
			fadeTo: function(a, b, c, d) {
				return this.filter(":hidden").css("opacity", 0).show().end().animate({
					opacity: b
				}, a, c, d)
			},
			animate: function(a, b, c, e) {
				var f = d.speed(b, c, e);
				return d.isEmptyObject(a) ? this.each(f.complete) : this[f.queue === !1 ? "each" : "queue"](function() {
					var b = d.extend({}, f),
						c, e = this.nodeType === 1,
						g = e && d(this).is(":hidden"),
						h = this;
					for (c in a) {
						var i = d.camelCase(c);
						c !== i && (a[i] = a[c], delete a[c], c = i);
						if (a[c] === "hide" && g || a[c] === "show" && !g) return b.complete.call(this);
						if (e && (c === "height" || c === "width")) {
							b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
							if (d.css(this, "display") === "inline" && d.css(this, "float") === "none") if (!d.support.inlineBlockNeedsLayout) this.style.display = "inline-block";
							else {
								var j = bI(this.nodeName);
								j === "inline" ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)
							}
						}
						d.isArray(a[c]) && ((b.specialEasing = b.specialEasing || {})[c] = a[c][1], a[c] = a[c][0])
					}
					return b.overflow != null && (this.style.overflow = "hidden"), b.curAnim = d.extend({}, a), d.each(a, function(c, e) {
						var f = new d.fx(h, b, c);
						if (bD.test(e)) f[e === "toggle" ? g ? "show" : "hide" : e](a);
						else {
							var i = bE.exec(e),
								j = f.cur() || 0;
							if (i) {
								var k = parseFloat(i[2]),
									l = i[3] || "px";
								l !== "px" && (d.style(h, c, (k || 1) + l), j = (k || 1) / f.cur() * j, d.style(h, c, j + l)), i[1] && (k = (i[1] === "-=" ? -1 : 1) * k + j), f.custom(j, k, l)
							} else f.custom(j, e, "")
						}
					}), !0
				})
			},
			stop: function(a, b) {
				var c = d.timers;
				return a && this.queue([]), this.each(function() {
					for (var a = c.length - 1; a >= 0; a--)
					c[a].elem === this && (b && c[a](!0), c.splice(a, 1))
				}), b || this.dequeue(), this
			}
		}), d.each({
			slideDown: bH("show", 1),
			slideUp: bH("hide", 1),
			slideToggle: bH("toggle", 1),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(a, b) {
			d.fn[a] = function(a, c, d) {
				return this.animate(b, a, c, d)
			}
		}), d.extend({
			speed: function(a, b, c) {
				var e = a && typeof a == "object" ? d.extend({}, a) : {
					complete: c || !c && b || d.isFunction(a) && a,
					duration: a,
					easing: c && b || b && !d.isFunction(b) && b
				};
				return e.duration = d.fx.off ? 0 : typeof e.duration == "number" ? e.duration : e.duration in d.fx.speeds ? d.fx.speeds[e.duration] : d.fx.speeds._default, e.old = e.complete, e.complete = function() {
					e.queue !== !1 && d(this).dequeue(), d.isFunction(e.old) && e.old.call(this)
				}, e
			},
			easing: {
				linear: function(a, b, c, d) {
					return c + d * a
				},
				swing: function(a, b, c, d) {
					return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
				}
			},
			timers: [],
			fx: function(a, b, c) {
				this.options = b, this.elem = a, this.prop = c, b.orig || (b.orig = {})
			}
		}), d.fx.prototype = {
			update: function() {
				this.options.step && this.options.step.call(this.elem, this.now, this), (d.fx.step[this.prop] || d.fx.step._default)(this)
			},
			cur: function() {
				if (this.elem[this.prop] == null || !! this.elem.style && this.elem.style[this.prop] != null) {
					var a = parseFloat(d.css(this.elem, this.prop));
					return a && a > -1e4 ? a : 0
				}
				return this.elem[this.prop]
			},
			custom: function(a, b, c) {
				function g(a) {
					return e.step(a)
				}
				var e = this,
					f = d.fx;
				this.startTime = d.now(), this.start = a, this.end = b, this.unit = c || this.unit || "px", this.now = this.start, this.pos = this.state = 0, g.elem = this.elem, g() && d.timers.push(g) && !bF && (bF = setInterval(f.tick, f.interval))
			},
			show: function() {
				this.options.orig[this.prop] = d.style(this.elem, this.prop), this.options.show = !0, this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), d(this.elem).show()
			},
			hide: function() {
				this.options.orig[this.prop] = d.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
			},
			step: function(a) {
				var b = d.now(),
					c = !0;
				if (a || b >= this.options.duration + this.startTime) {
					this.now = this.end, this.pos = this.state = 1, this.update(), this.options.curAnim[this.prop] = !0;
					for (var e in this.options.curAnim)
					this.options.curAnim[e] !== !0 && (c = !1);
					if (c) {
						if (this.options.overflow != null && !d.support.shrinkWrapBlocks) {
							var f = this.elem,
								g = this.options;
							d.each(["", "X", "Y"], function(a, b) {
								f.style["overflow" + b] = g.overflow[a]
							})
						}
						this.options.hide && d(this.elem).hide();
						if (this.options.hide || this.options.show) for (var h in this.options.curAnim)
						d.style(this.elem, h, this.options.orig[h]);
						this.options.complete.call(this.elem)
					}
					return !1
				}
				var i = b - this.startTime;
				this.state = i / this.options.duration;
				var j = this.options.specialEasing && this.options.specialEasing[this.prop],
					k = this.options.easing || (d.easing.swing ? "swing" : "linear");
				return this.pos = d.easing[j || k](this.state, i, 0, 1, this.options.duration), this.now = this.start + (this.end - this.start) * this.pos, this.update(), !0
			}
		}, d.extend(d.fx, {
			tick: function() {
				var a = d.timers;
				for (var b = 0; b < a.length; b++)
				a[b]() || a.splice(b--, 1);
				a.length || d.fx.stop()
			},
			interval: 13,
			stop: function() {
				clearInterval(bF), bF = null
			},
			speeds: {
				slow: 600,
				fast: 200,
				_default: 400
			},
			step: {
				opacity: function(a) {
					d.style(a.elem, "opacity", a.now)
				},
				_default: function(a) {
					a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now
				}
			}
		}), d.expr && d.expr.filters && (d.expr.filters.animated = function(a) {
			return d.grep(d.timers, function(b) {
				return a === b.elem
			}).length
		});
		var bJ = /^t(?:able|d|h)$/i,
			bK = /^(?:body|html)$/i;
		"getBoundingClientRect" in c.documentElement ? d.fn.offset = function(a) {
			var b = this[0],
				c;
			if (a) return this.each(function(b) {
				d.offset.setOffset(this, a, b)
			});
			if (!b || !b.ownerDocument) return null;
			if (b === b.ownerDocument.body) return d.offset.bodyOffset(b);
			try {
				c = b.getBoundingClientRect()
			} catch (e) {}
			var f = b.ownerDocument,
				g = f.documentElement;
			if (!c || !d.contains(g, b)) return c || {
				top: 0,
				left: 0
			};
			var h = f.body,
				i = bL(f),
				j = g.clientTop || h.clientTop || 0,
				k = g.clientLeft || h.clientLeft || 0,
				l = i.pageYOffset || d.support.boxModel && g.scrollTop || h.scrollTop,
				m = i.pageXOffset || d.support.boxModel && g.scrollLeft || h.scrollLeft,
				n = c.top + l - j,
				o = c.left + m - k;
			return {
				top: n,
				left: o
			}
		} : d.fn.offset = function(a) {
			var b = this[0];
			if (a) return this.each(function(b) {
				d.offset.setOffset(this, a, b)
			});
			if (!b || !b.ownerDocument) return null;
			if (b === b.ownerDocument.body) return d.offset.bodyOffset(b);
			d.offset.initialize();
			var c, e = b.offsetParent,
				f = b,
				g = b.ownerDocument,
				h = g.documentElement,
				i = g.body,
				j = g.defaultView,
				k = j ? j.getComputedStyle(b, null) : b.currentStyle,
				l = b.offsetTop,
				m = b.offsetLeft;
			while ((b = b.parentNode) && b !== i && b !== h) {
				if (d.offset.supportsFixedPosition && k.position === "fixed") break;
				c = j ? j.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === e && (l += b.offsetTop, m += b.offsetLeft, d.offset.doesNotAddBorder && (!d.offset.doesAddBorderForTableAndCells || !bJ.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), f = e, e = b.offsetParent), d.offset.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), k = c
			}
			if (k.position === "relative" || k.position === "static") l += i.offsetTop, m += i.offsetLeft;
			return d.offset.supportsFixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft)), {
				top: l,
				left: m
			}
		}, d.offset = {
			initialize: function() {
				var a = c.body,
					b = c.createElement("div"),
					e, f, g, h, i = parseFloat(d.css(a, "marginTop")) || 0,
					j = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
				d.extend(b.style, {
					position: "absolute",
					top: 0,
					left: 0,
					margin: 0,
					border: 0,
					width: "1px",
					height: "1px",
					visibility: "hidden"
				}), b.innerHTML = j, a.insertBefore(b, a.firstChild), e = b.firstChild, f = e.firstChild, h = e.nextSibling.firstChild.firstChild, this.doesNotAddBorder = f.offsetTop !== 5, this.doesAddBorderForTableAndCells = h.offsetTop === 5, f.style.position = "fixed", f.style.top = "20px", this.supportsFixedPosition = f.offsetTop === 20 || f.offsetTop === 15, f.style.position = f.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", this.subtractsBorderForOverflowNotVisible = f.offsetTop === -5, this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== i, a.removeChild(b), a = b = e = f = g = h = null, d.offset.initialize = d.noop
			},
			bodyOffset: function(a) {
				var b = a.offsetTop,
					c = a.offsetLeft;
				return d.offset.initialize(), d.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(d.css(a, "marginTop")) || 0, c += parseFloat(d.css(a, "marginLeft")) || 0), {
					top: b,
					left: c
				}
			},
			setOffset: function(a, b, c) {
				var e = d.css(a, "position");
				e === "static" && (a.style.position = "relative");
				var f = d(a),
					g = f.offset(),
					h = d.css(a, "top"),
					i = d.css(a, "left"),
					j = e === "absolute" && d.inArray("auto", [h, i]) > -1,
					k = {},
					l = {},
					m, n;
				j && (l = f.position()), m = j ? l.top : parseInt(h, 10) || 0, n = j ? l.left : parseInt(i, 10) || 0, d.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : f.css(k)
			}
		}, d.fn.extend({
			position: function() {
				if (!this[0]) return null;
				var a = this[0],
					b = this.offsetParent(),
					c = this.offset(),
					e = bK.test(b[0].nodeName) ? {
						top: 0,
						left: 0
					} : b.offset();
				return c.top -= parseFloat(d.css(a, "marginTop")) || 0, c.left -= parseFloat(d.css(a, "marginLeft")) || 0, e.top += parseFloat(d.css(b[0], "borderTopWidth")) || 0, e.left += parseFloat(d.css(b[0], "borderLeftWidth")) || 0, {
					top: c.top - e.top,
					left: c.left - e.left
				}
			},
			offsetParent: function() {
				return this.map(function() {
					var a = this.offsetParent || c.body;
					while (a && !bK.test(a.nodeName) && d.css(a, "position") === "static")
					a = a.offsetParent;
					return a
				})
			}
		}), d.each(["Left", "Top"], function(a, c) {
			var e = "scroll" + c;
			d.fn[e] = function(c) {
				var f = this[0],
					g;
				return f ? c !== b ? this.each(function() {
					g = bL(this), g ? g.scrollTo(a ? d(g).scrollLeft() : c, a ? c : d(g).scrollTop()) : this[e] = c
				}) : (g = bL(f), g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : d.support.boxModel && g.document.documentElement[e] || g.document.body[e] : f[e]) : null
			}
		}), d.each(["Height", "Width"], function(a, c) {
			var e = c.toLowerCase();
			d.fn["inner" + c] = function() {
				return this[0] ? parseFloat(d.css(this[0], e, "padding")) : null
			}, d.fn["outer" + c] = function(a) {
				return this[0] ? parseFloat(d.css(this[0], e, a ? "margin" : "border")) : null
			}, d.fn[e] = function(a) {
				var f = this[0];
				if (!f) return a == null ? null : this;
				if (d.isFunction(a)) return this.each(function(b) {
					var c = d(this);
					c[e](a.call(this, b, c[e]()))
				});
				if (d.isWindow(f)) return f.document.compatMode === "CSS1Compat" && f.document.documentElement["client" + c] || f.document.body["client" + c];
				if (f.nodeType === 9) return Math.max(f.documentElement["client" + c], f.body["scroll" + c], f.documentElement["scroll" + c], f.body["offset" + c], f.documentElement["offset" + c]);
				if (a === b) {
					var g = d.css(f, e),
						h = parseFloat(g);
					return d.isNaN(h) ? g : h
				}
				return this.css(e, typeof a == "string" ? a : a + "px")
			}
		})
	})(window), c.exports = jQuery
})