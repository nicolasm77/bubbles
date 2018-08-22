! function (e, t) {
	var n, r, i = typeof t,
		o = e.location,
		a = e.document,
		s = a.documentElement,
		l = e.jQuery,
		u = e.$,
		c = {},
		p = [],
		f = "1.10.2",
		d = p.concat,
		h = p.push,
		g = p.slice,
		m = p.indexOf,
		y = c.toString,
		v = c.hasOwnProperty,
		b = f.trim,
		x = function (e, t) {
			return new x.fn.init(e, t, r)
		},
		w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		T = /\S+/g,
		C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		E = /^[\],:{}\s]*$/,
		S = /(?:^|:|,)(?:\s*\[)+/g,
		A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
		D = /^-ms-/,
		L = /-([\da-z])/gi,
		H = function (e, t) {
			return t.toUpperCase()
		},
		q = function (e) {
			(a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
		},
		_ = function () {
			a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
		};

	function M(e) {
		var t = e.length,
			n = x.type(e);
		return !x.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && 0 < t && t - 1 in e)))
	}
	x.fn = x.prototype = {
			jquery: f,
			constructor: x,
			init: function (e, n, r) {
				var i, o;
				if (!e) return this;
				if ("string" == typeof e) {
					if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : N.exec(e)) || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
					if (i[1]) {
						if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n))
							for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
						return this
					}
					if ((o = a.getElementById(i[2])) && o.parentNode) {
						if (o.id !== i[2]) return r.find(e);
						this.length = 1, this[0] = o
					}
					return this.context = a, this.selector = e, this
				}
				return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
			},
			selector: "",
			length: 0,
			toArray: function () {
				return g.call(this)
			},
			get: function (e) {
				return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
			},
			pushStack: function (e) {
				var t = x.merge(this.constructor(), e);
				return t.prevObject = this, t.context = this.context, t
			},
			each: function (e, t) {
				return x.each(this, e, t)
			},
			ready: function (e) {
				return x.ready.promise().done(e), this
			},
			slice: function () {
				return this.pushStack(g.apply(this, arguments))
			},
			first: function () {
				return this.eq(0)
			},
			last: function () {
				return this.eq(-1)
			},
			eq: function (e) {
				var t = this.length,
					n = +e + (e < 0 ? t : 0);
				return this.pushStack(0 <= n && n < t ? [this[n]] : [])
			},
			map: function (e) {
				return this.pushStack(x.map(this, function (t, n) {
					return e.call(t, n, t)
				}))
			},
			end: function () {
				return this.prevObject || this.constructor(null)
			},
			push: h,
			sort: [].sort,
			splice: [].splice
		}, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
			var e, n, r, i, o, a, s = arguments[0] || {},
				l = 1,
				u = arguments.length,
				c = !1;
			for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); l < u; l++)
				if (null != (o = arguments[l]))
					for (i in o) e = s[i], s !== (r = o[i]) && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
			return s
		}, x.extend({
			expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
			noConflict: function (t) {
				return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
			},
			isReady: !1,
			readyWait: 1,
			holdReady: function (e) {
				e ? x.readyWait++ : x.ready(!0)
			},
			ready: function (e) {
				if (!0 === e ? !--x.readyWait : !x.isReady) {
					if (!a.body) return setTimeout(x.ready);
					(x.isReady = !0) !== e && 0 < --x.readyWait || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
				}
			},
			isFunction: function (e) {
				return "function" === x.type(e)
			},
			isArray: Array.isArray || function (e) {
				return "array" === x.type(e)
			},
			isWindow: function (e) {
				return null != e && e == e.window
			},
			isNumeric: function (e) {
				return !isNaN(parseFloat(e)) && isFinite(e)
			},
			type: function (e) {
				return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
			},
			isPlainObject: function (e) {
				var n;
				if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
				try {
					if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1
				} catch (r) {
					return !1
				}
				if (x.support.ownLast)
					for (n in e) return v.call(e, n);
				for (n in e);
				return n === t || v.call(e, n)
			},
			isEmptyObject: function (e) {
				var t;
				for (t in e) return !1;
				return !0
			},
			error: function (e) {
				throw Error(e)
			},
			parseHTML: function (e, t, n) {
				if (!e || "string" != typeof e) return null;
				"boolean" == typeof t && (n = t, t = !1), t = t || a;
				var r = k.exec(e),
					i = !n && [];
				return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
			},
			parseJSON: function (n) {
				return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && ((n = x.trim(n)) && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
			},
			parseXML: function (n) {
				var r;
				if (!n || "string" != typeof n) return null;
				try {
					e.DOMParser ? r = (new DOMParser).parseFromString(n, "text/xml") : ((r = new ActiveXObject("Microsoft.XMLDOM")).async = "false", r.loadXML(n))
				} catch (o) {
					r = t
				}
				return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
			},
			noop: function () {},
			globalEval: function (t) {
				t && x.trim(t) && (e.execScript || function (t) {
					e.eval.call(e, t)
				})(t)
			},
			camelCase: function (e) {
				return e.replace(D, "ms-").replace(L, H)
			},
			nodeName: function (e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			},
			each: function (e, t, n) {
				var i = 0,
					o = e.length,
					a = M(e);
				if (n) {
					if (a)
						for (; i < o && !1 !== t.apply(e[i], n); i++);
					else
						for (i in e)
							if (!1 === t.apply(e[i], n)) break
				} else if (a)
					for (; i < o && !1 !== t.call(e[i], i, e[i]); i++);
				else
					for (i in e)
						if (!1 === t.call(e[i], i, e[i])) break;
				return e
			},
			trim: b && !b.call("\ufeff ") ? function (e) {
				return null == e ? "" : b.call(e)
			} : function (e) {
				return null == e ? "" : (e + "").replace(C, "")
			},
			makeArray: function (e, t) {
				var n = t || [];
				return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
			},
			inArray: function (e, t, n) {
				var r;
				if (t) {
					if (m) return m.call(t, e, n);
					for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
						if (n in t && t[n] === e) return n
				}
				return -1
			},
			merge: function (e, n) {
				var r = n.length,
					i = e.length,
					o = 0;
				if ("number" == typeof r)
					for (; o < r; o++) e[i++] = n[o];
				else
					for (; n[o] !== t;) e[i++] = n[o++];
				return e.length = i, e
			},
			grep: function (e, t, n) {
				var i = [],
					o = 0,
					a = e.length;
				for (n = !!n; o < a; o++) n !== !!t(e[o], o) && i.push(e[o]);
				return i
			},
			map: function (e, t, n) {
				var r, i = 0,
					o = e.length,
					s = [];
				if (M(e))
					for (; i < o; i++) null != (r = t(e[i], i, n)) && (s[s.length] = r);
				else
					for (i in e) null != (r = t(e[i], i, n)) && (s[s.length] = r);
				return d.apply([], s)
			},
			guid: 1,
			proxy: function (e, n) {
				var r, i, o;
				return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), (i = function () {
					return e.apply(n || this, r.concat(g.call(arguments)))
				}).guid = e.guid = e.guid || x.guid++, i) : t
			},
			access: function (e, n, r, i, o, a, s) {
				var l = 0,
					u = e.length,
					c = null == r;
				if ("object" === x.type(r))
					for (l in o = !0, r) x.access(e, n, l, r[l], !0, a, s);
				else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
						return c.call(x(e), n)
					})), n))
					for (; l < u; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
				return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
			},
			now: function () {
				return (new Date).getTime()
			},
			swap: function (e, t, n, r) {
				var i, o, a = {};
				for (o in t) a[o] = e.style[o], e.style[o] = t[o];
				for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
				return i
			}
		}), x.ready.promise = function (t) {
			if (!n)
				if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready);
				else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);
			else {
				a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
				var r = !1;
				try {
					r = null == e.frameElement && a.documentElement
				} catch (i) {}
				r && r.doScroll && function o() {
					if (!x.isReady) {
						try {
							r.doScroll("left")
						} catch (e) {
							return setTimeout(o, 50)
						}
						_(), x.ready()
					}
				}()
			}
			return n.promise(t)
		}, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
			c["[object " + t + "]"] = t.toLowerCase()
		}), r = x(a),
		function (e, t) {
			var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date,
				w = e.document,
				T = 0,
				C = 0,
				N = st(),
				k = st(),
				E = st(),
				S = !1,
				A = function (e, t) {
					return e === t && (S = !0), 0
				},
				j = typeof t,
				L = {}.hasOwnProperty,
				H = [],
				q = H.pop,
				_ = H.push,
				M = H.push,
				O = H.slice,
				F = H.indexOf || function (e) {
					for (var t = 0, n = this.length; t < n; t++)
						if (this[t] === e) return t;
					return -1
				},
				B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				P = "[\\x20\\t\\r\\n\\f]",
				R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				W = R.replace("w", "w#"),
				$ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
				I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
				z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
				X = RegExp("^" + P + "*," + P + "*"),
				U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
				V = RegExp(P + "*[+~]"),
				Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
				J = RegExp(I),
				G = RegExp("^" + W + "$"),
				Q = {
					ID: RegExp("^#(" + R + ")"),
					CLASS: RegExp("^\\.(" + R + ")"),
					TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
					ATTR: RegExp("^" + $),
					PSEUDO: RegExp("^" + I),
					CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
					bool: RegExp("^(?:" + B + ")$", "i"),
					needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
				},
				K = /^[^{]+\{\s*\[native \w/,
				Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				et = /^(?:input|select|textarea|button)$/i,
				tt = /^h\d$/i,
				nt = /'|\\/g,
				rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
				it = function (e, t, n) {
					var r = "0x" + t - 65536;
					return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
				};
			try {
				M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
			} catch (ot) {
				M = {
					apply: H.length ? function (e, t) {
						_.apply(e, O.call(t))
					} : function (e, t) {
						for (var n = e.length, r = 0; e[n++] = t[r++];);
						e.length = n - 1
					}
				}
			}

			function at(e, t, n, i) {
				var o, a, s, l, u, c, d, m, y, x;
				if ((t ? t.ownerDocument || t : w) !== f && p(t), n = n || [], !e || "string" != typeof e) return n;
				if (1 !== (l = (t = t || f).nodeType) && 9 !== l) return [];
				if (h && !i) {
					if (o = Z.exec(e))
						if (s = o[1]) {
							if (9 === l) {
								if (!(a = t.getElementById(s)) || !a.parentNode) return n;
								if (a.id === s) return n.push(a), n
							} else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n
						} else {
							if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
							if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n
						}
					if (r.qsa && (!g || !g.test(e))) {
						if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
							for (c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length; u--;) c[u] = m + yt(c[u]);
							y = V.test(e) && t.parentNode || t, x = c.join(",")
						}
						if (x) try {
							return M.apply(n, y.querySelectorAll(x)), n
						} catch (T) {} finally {
							d || t.removeAttribute("id")
						}
					}
				}
				return kt(e.replace(z, "$1"), t, n, i)
			}

			function st() {
				var e = [];
				return function t(n, r) {
					return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
				}
			}

			function lt(e) {
				return e[b] = !0, e
			}

			function ut(e) {
				var t = f.createElement("div");
				try {
					return !!e(t)
				} catch (n) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}

			function ct(e, t) {
				for (var n = e.split("|"), r = e.length; r--;) o.attrHandle[n[r]] = t
			}

			function pt(e, t) {
				var n = t && e,
					r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
				if (r) return r;
				if (n)
					for (; n = n.nextSibling;)
						if (n === t) return -1;
				return e ? 1 : -1
			}

			function ft(e) {
				return function (t) {
					return "input" === t.nodeName.toLowerCase() && t.type === e
				}
			}

			function dt(e) {
				return function (t) {
					var n = t.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && t.type === e
				}
			}

			function ht(e) {
				return lt(function (t) {
					return t = +t, lt(function (n, r) {
						for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
					})
				})
			}
			for (n in s = at.isXML = function (e) {
					var t = e && (e.ownerDocument || e).documentElement;
					return !!t && "HTML" !== t.nodeName
				}, r = at.support = {}, p = at.setDocument = function (e) {
					var n = e ? e.ownerDocument || e : w,
						i = n.defaultView;
					return n !== f && 9 === n.nodeType && n.documentElement ? (d = (f = n).documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function () {
						p()
					}), r.attributes = ut(function (e) {
						return e.className = "i", !e.getAttribute("className")
					}), r.getElementsByTagName = ut(function (e) {
						return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
					}), r.getElementsByClassName = ut(function (e) {
						return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
					}), r.getById = ut(function (e) {
						return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
					}), r.getById ? (o.find.ID = function (e, t) {
						if (typeof t.getElementById !== j && h) {
							var n = t.getElementById(e);
							return n && n.parentNode ? [n] : []
						}
					}, o.filter.ID = function (e) {
						var t = e.replace(rt, it);
						return function (e) {
							return e.getAttribute("id") === t
						}
					}) : (delete o.find.ID, o.filter.ID = function (e) {
						var t = e.replace(rt, it);
						return function (e) {
							var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
							return n && n.value === t
						}
					}), o.find.TAG = r.getElementsByTagName ? function (e, n) {
						return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
					} : function (e, t) {
						var n, r = [],
							i = 0,
							o = t.getElementsByTagName(e);
						if ("*" === e) {
							for (; n = o[i++];) 1 === n.nodeType && r.push(n);
							return r
						}
						return o
					}, o.find.CLASS = r.getElementsByClassName && function (e, n) {
						return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
					}, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function (e) {
						e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
					}), ut(function (e) {
						var t = n.createElement("input");
						t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
					})), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function (e) {
						r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
					}), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function (e, t) {
						var n = 9 === e.nodeType ? e.documentElement : e,
							r = t && t.parentNode;
						return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
					} : function (e, t) {
						if (t)
							for (; t = t.parentNode;)
								if (t === e) return !0;
						return !1
					}, A = d.compareDocumentPosition ? function (e, t) {
						if (e === t) return S = !0, 0;
						var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
						return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
					} : function (e, t) {
						var r, i = 0,
							o = e.parentNode,
							a = t.parentNode,
							s = [e],
							l = [t];
						if (e === t) return S = !0, 0;
						if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
						if (o === a) return pt(e, t);
						for (r = e; r = r.parentNode;) s.unshift(r);
						for (r = t; r = r.parentNode;) l.unshift(r);
						for (; s[i] === l[i];) i++;
						return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
					}, n) : f
				}, at.matches = function (e, t) {
					return at(e, null, null, t)
				}, at.matchesSelector = function (e, t) {
					if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
						var n = y.call(e, t);
						if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
					} catch (i) {}
					return 0 < at(t, f, null, [e]).length
				}, at.contains = function (e, t) {
					return (e.ownerDocument || e) !== f && p(e), v(e, t)
				}, at.attr = function (e, n) {
					(e.ownerDocument || e) !== f && p(e);
					var i = o.attrHandle[n.toLowerCase()],
						a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
					return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
				}, at.error = function (e) {
					throw Error("Syntax error, unrecognized expression: " + e)
				}, at.uniqueSort = function (e) {
					var t, n = [],
						i = 0,
						o = 0;
					if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
						for (; t = e[o++];) t === e[o] && (i = n.push(o));
						for (; i--;) e.splice(n[i], 1)
					}
					return e
				}, a = at.getText = function (e) {
					var t, n = "",
						r = 0,
						i = e.nodeType;
					if (i) {
						if (1 === i || 9 === i || 11 === i) {
							if ("string" == typeof e.textContent) return e.textContent;
							for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
						} else if (3 === i || 4 === i) return e.nodeValue
					} else
						for (; t = e[r]; r++) n += a(t);
					return n
				}, (o = at.selectors = {
					cacheLength: 50,
					createPseudo: lt,
					match: Q,
					attrHandle: {},
					find: {},
					relative: {
						">": {
							dir: "parentNode",
							first: !0
						},
						" ": {
							dir: "parentNode"
						},
						"+": {
							dir: "previousSibling",
							first: !0
						},
						"~": {
							dir: "previousSibling"
						}
					},
					preFilter: {
						ATTR: function (e) {
							return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
						},
						CHILD: function (e) {
							return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
						},
						PSEUDO: function (e) {
							var n, r = !e[5] && e[2];
							return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
						}
					},
					filter: {
						TAG: function (e) {
							var t = e.replace(rt, it).toLowerCase();
							return "*" === e ? function () {
								return !0
							} : function (e) {
								return e.nodeName && e.nodeName.toLowerCase() === t
							}
						},
						CLASS: function (e) {
							var t = N[e + " "];
							return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function (e) {
								return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
							})
						},
						ATTR: function (e, t, n) {
							return function (r) {
								var i = at.attr(r, e);
								return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && -1 < i.indexOf(n) : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? -1 < (" " + i + " ").indexOf(n) : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
							}
						},
						CHILD: function (e, t, n, r, i) {
							var o = "nth" !== e.slice(0, 3),
								a = "last" !== e.slice(-4),
								s = "of-type" === t;
							return 1 === r && 0 === i ? function (e) {
								return !!e.parentNode
							} : function (t, n, l) {
								var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
									m = t.parentNode,
									y = s && t.nodeName.toLowerCase(),
									v = !l && !s;
								if (m) {
									if (o) {
										for (; g;) {
											for (p = t; p = p[g];)
												if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
											h = g = "only" === e && !h && "nextSibling"
										}
										return !0
									}
									if (h = [a ? m.firstChild : m.lastChild], a && v) {
										for (d = (u = (c = m[b] || (m[b] = {}))[e] || [])[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (f = d = 0) || h.pop();)
											if (1 === p.nodeType && ++f && p === t) {
												c[e] = [T, d, f];
												break
											}
									} else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];
									else
										for (;
											(p = ++d && p && p[g] || (f = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++f || (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p !== t)););
									return (f -= i) === r || 0 == f % r && 0 <= f / r
								}
							}
						},
						PSEUDO: function (e, t) {
							var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
							return r[b] ? r(t) : 1 < r.length ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function (e, n) {
								for (var i, o = r(e, t), a = o.length; a--;) e[i = F.call(e, o[a])] = !(n[i] = o[a])
							}) : function (e) {
								return r(e, 0, n)
							}) : r
						}
					},
					pseudos: {
						not: lt(function (e) {
							var t = [],
								n = [],
								r = l(e.replace(z, "$1"));
							return r[b] ? lt(function (e, t, n, i) {
								for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
							}) : function (e, i, o) {
								return t[0] = e, r(t, null, o, n), !n.pop()
							}
						}),
						has: lt(function (e) {
							return function (t) {
								return 0 < at(e, t).length
							}
						}),
						contains: lt(function (e) {
							return function (t) {
								return -1 < (t.textContent || t.innerText || a(t)).indexOf(e)
							}
						}),
						lang: lt(function (e) {
							return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
								function (t) {
									var n;
									do {
										if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
									} while ((t = t.parentNode) && 1 === t.nodeType);
									return !1
								}
						}),
						target: function (t) {
							var n = e.location && e.location.hash;
							return n && n.slice(1) === t.id
						},
						root: function (e) {
							return e === d
						},
						focus: function (e) {
							return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
						},
						enabled: function (e) {
							return !1 === e.disabled
						},
						disabled: function (e) {
							return !0 === e.disabled
						},
						checked: function (e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && !!e.checked || "option" === t && !!e.selected
						},
						selected: function (e) {
							return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
						},
						empty: function (e) {
							for (e = e.firstChild; e; e = e.nextSibling)
								if ("@" < e.nodeName || 3 === e.nodeType || 4 === e.nodeType) return !1;
							return !0
						},
						parent: function (e) {
							return !o.pseudos.empty(e)
						},
						header: function (e) {
							return tt.test(e.nodeName)
						},
						input: function (e) {
							return et.test(e.nodeName)
						},
						button: function (e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && "button" === e.type || "button" === t
						},
						text: function (e) {
							var t;
							return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
						},
						first: ht(function () {
							return [0]
						}),
						last: ht(function (e, t) {
							return [t - 1]
						}),
						eq: ht(function (e, t, n) {
							return [n < 0 ? n + t : n]
						}),
						even: ht(function (e, t) {
							for (var n = 0; n < t; n += 2) e.push(n);
							return e
						}),
						odd: ht(function (e, t) {
							for (var n = 1; n < t; n += 2) e.push(n);
							return e
						}),
						lt: ht(function (e, t, n) {
							for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
							return e
						}),
						gt: ht(function (e, t, n) {
							for (var r = n < 0 ? n + t : n; t > ++r;) e.push(r);
							return e
						})
					}
				}).pseudos.nth = o.pseudos.eq, {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) o.pseudos[n] = ft(n);
			for (n in {
					submit: !0,
					reset: !0
				}) o.pseudos[n] = dt(n);

			function gt() {}

			function mt(e, t) {
				var n, r, i, a, s, l, u, c = k[e + " "];
				if (c) return t ? 0 : c.slice(0);
				for (s = e, l = [], u = o.preFilter; s;) {
					for (a in (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
							value: n,
							type: r[0].replace(z, " ")
						}), s = s.slice(n.length)), o.filter) !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
						value: n,
						type: a,
						matches: r
					}), s = s.slice(n.length));
					if (!n) break
				}
				return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
			}

			function yt(e) {
				for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
				return r
			}

			function vt(e, t, n) {
				var r = t.dir,
					o = n && "parentNode" === r,
					a = C++;
				return t.first ? function (t, n, i) {
					for (; t = t[r];)
						if (1 === t.nodeType || o) return e(t, n, i)
				} : function (t, n, s) {
					var l, u, c, p = T + " " + a;
					if (s) {
						for (; t = t[r];)
							if ((1 === t.nodeType || o) && e(t, n, s)) return !0
					} else
						for (; t = t[r];)
							if (1 === t.nodeType || o)
								if ((u = (c = t[b] || (t[b] = {}))[r]) && u[0] === p) {
									if (!0 === (l = u[1]) || l === i) return !0 === l
								} else if ((u = c[r] = [p])[1] = e(t, n, s) || i, !0 === u[1]) return !0
				}
			}

			function bt(e) {
				return 1 < e.length ? function (t, n, r) {
					for (var i = e.length; i--;)
						if (!e[i](t, n, r)) return !1;
					return !0
				} : e[0]
			}

			function xt(e, t, n, r, i) {
				for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
				return a
			}

			function wt(e, t, n, r, i, o) {
				return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function (o, a, s, l) {
					var u, c, p, f = [],
						d = [],
						h = a.length,
						g = o || function Nt(e, t, n) {
							for (var r = 0, i = t.length; r < i; r++) at(e, t[r], n);
							return n
						}(t || "*", s.nodeType ? [s] : s, []),
						m = !e || !o && t ? g : xt(g, f, e, s, l),
						y = n ? i || (o ? e : h || r) ? [] : a : m;
					if (n && n(m, y, s, l), r)
						for (u = xt(y, d), r(u, [], s, l), c = u.length; c--;)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p));
					if (o) {
						if (i || e) {
							if (i) {
								for (u = [], c = y.length; c--;)(p = y[c]) && u.push(m[c] = p);
								i(null, y = [], u, l)
							}
							for (c = y.length; c--;)(p = y[c]) && -1 < (u = i ? F.call(o, p) : f[c]) && (o[u] = !(a[u] = p))
						}
					} else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
				})
			}

			function Tt(e) {
				for (var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, c = vt(function (e) {
						return e === t
					}, s, !0), p = vt(function (e) {
						return -1 < F.call(t, e)
					}, s, !0), f = [function (e, n, r) {
						return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
					}]; l < i; l++)
					if (n = o.relative[e[l].type]) f = [vt(bt(f), n)];
					else {
						if ((n = o.filter[e[l].type].apply(null, e[l].matches))[b]) {
							for (r = ++l; r < i && !o.relative[e[r].type]; r++);
							return wt(1 < l && bt(f), 1 < l && yt(e.slice(0, l - 1).concat({
								value: " " === e[l - 2].type ? "*" : ""
							})).replace(z, "$1"), n, l < r && Tt(e.slice(l, r)), r < i && Tt(e = e.slice(r)), r < i && yt(e))
						}
						f.push(n)
					}
				return bt(f)
			}

			function Ct(e, t) {
				var n = 0,
					r = 0 < t.length,
					a = 0 < e.length,
					s = function (s, l, c, p, d) {
						var h, g, m, y = [],
							v = 0,
							b = "0",
							x = s && [],
							w = null != d,
							C = u,
							N = s || a && o.find.TAG("*", d && l.parentNode || l),
							k = T += null == C ? 1 : Math.random() || .1;
						for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
							if (a && h) {
								for (g = 0; m = e[g++];)
									if (m(h, l, c)) {
										p.push(h);
										break
									}
								w && (T = k, i = ++n)
							}
							r && ((h = !m && h) && v--, s && x.push(h))
						}
						if (v += b, r && b !== v) {
							for (g = 0; m = t[g++];) m(x, y, l, c);
							if (s) {
								if (0 < v)
									for (; b--;) x[b] || y[b] || (y[b] = q.call(p));
								y = xt(y)
							}
							M.apply(p, y), w && !s && 0 < y.length && 1 < v + t.length && at.uniqueSort(p)
						}
						return w && (T = k, u = C), x
					};
				return r ? lt(s) : s
			}

			function kt(e, t, n, i) {
				var a, s, u, c, p, f = mt(e);
				if (!i && 1 === f.length) {
					if (2 < (s = f[0] = f[0].slice(0)).length && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
						if (!(t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0])) return n;
						e = e.slice(s.shift().value.length)
					}
					for (a = Q.needsContext.test(e) ? 0 : s.length; a-- && (u = s[a], !o.relative[c = u.type]);)
						if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
							if (s.splice(a, 1), !(e = i.length && yt(s))) return M.apply(n, i), n;
							break
						}
				}
				return l(e, f)(i, t, !h, n, V.test(e)), n
			}
			gt.prototype = o.filters = o.pseudos, o.setFilters = new gt, l = at.compile = function (e, t) {
				var n, r = [],
					i = [],
					o = E[e + " "];
				if (!o) {
					for (t || (t = mt(e)), n = t.length; n--;)(o = Tt(t[n]))[b] ? r.push(o) : i.push(o);
					o = E(e, Ct(i, r))
				}
				return o
			}, r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function (e) {
				return 1 & e.compareDocumentPosition(f.createElement("div"))
			}), ut(function (e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || ct("type|href|height|width", function (e, n, r) {
				return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
			}), r.attributes && ut(function (e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || ct("value", function (e, n, r) {
				return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
			}), ut(function (e) {
				return null == e.getAttribute("disabled")
			}) || ct(B, function (e, n, r) {
				var i;
				return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : !0 === e[n] ? n.toLowerCase() : null
			}), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
		}(e);
	var O = {};
	x.Callbacks = function (e) {
		e = "string" == typeof e ? O[e] || function F(e) {
			var t = O[e] = {};
			return x.each(e.match(T) || [], function (e, n) {
				t[n] = !0
			}), t
		}(e) : x.extend({}, e);
		var n, r, i, o, a, s, l = [],
			u = !e.once && [],
			c = function (t) {
				for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && a < o; a++)
					if (!1 === l[a].apply(t[0], t[1]) && e.stopOnFalse) {
						r = !1;
						break
					}
				n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
			},
			p = {
				add: function () {
					if (l) {
						var t = l.length;
						(function i(t) {
							x.each(t, function (t, n) {
								var r = x.type(n);
								"function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
							})
						})(arguments), n ? o = l.length : r && (s = t, c(r))
					}
					return this
				},
				remove: function () {
					return l && x.each(arguments, function (e, t) {
						for (var r; - 1 < (r = x.inArray(t, l, r));) l.splice(r, 1), n && (r <= o && o--, r <= a && a--)
					}), this
				},
				has: function (e) {
					return e ? -1 < x.inArray(e, l) : !(!l || !l.length)
				},
				empty: function () {
					return l = [], o = 0, this
				},
				disable: function () {
					return l = u = r = t, this
				},
				disabled: function () {
					return !l
				},
				lock: function () {
					return u = t, r || p.disable(), this
				},
				locked: function () {
					return !u
				},
				fireWith: function (e, t) {
					return !l || i && !u || (t = [e, (t = t || []).slice ? t.slice() : t], n ? u.push(t) : c(t)), this
				},
				fire: function () {
					return p.fireWith(this, arguments), this
				},
				fired: function () {
					return !!i
				}
			};
		return p
	}, x.extend({
		Deferred: function (e) {
			var t = [
					["resolve", "done", x.Callbacks("once memory"), "resolved"],
					["reject", "fail", x.Callbacks("once memory"), "rejected"],
					["notify", "progress", x.Callbacks("memory")]
				],
				n = "pending",
				r = {
					state: function () {
						return n
					},
					always: function () {
						return i.done(arguments).fail(arguments), this
					},
					then: function () {
						var e = arguments;
						return x.Deferred(function (n) {
							x.each(t, function (t, o) {
								var a = o[0],
									s = x.isFunction(e[t]) && e[t];
								i[o[1]](function () {
									var e = s && s.apply(this, arguments);
									e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function (e) {
						return null != e ? x.extend(e, r) : r
					}
				},
				i = {};
			return r.pipe = r.then, x.each(t, function (e, o) {
				var a = o[2],
					s = o[3];
				r[o[1]] = a.add, s && a.add(function () {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
					return i[o[0] + "With"](this === i ? r : this, arguments), this
				}, i[o[0] + "With"] = a.fireWith
			}), r.promise(i), e && e.call(i, i), i
		},
		when: function (e) {
			var s, l, u, t = 0,
				n = g.call(arguments),
				r = n.length,
				i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
				o = 1 === i ? e : x.Deferred(),
				a = function (e, t, n) {
					return function (r) {
						t[e] = this, n[e] = 1 < arguments.length ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
					}
				};
			if (1 < r)
				for (s = Array(r), l = Array(r), u = Array(r); t < r; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
			return i || o.resolveWith(u, n), o.promise()
		}
	}), x.support = function (t) {
		var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
		if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], !(r = d.getElementsByTagName("a")[0]) || !r.style || !n.length) return t;
		u = (s = a.createElement("select")).appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
		try {
			delete d.test
		} catch (h) {
			t.deleteExpando = !1
		}
		for (f in (o = a.createElement("input")).setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), (l = a.createDocumentFragment()).appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
				t.noCloneEvent = !1
			}), d.cloneNode(!0).click()), {
				submit: !0,
				change: !0,
				focusin: !0
			}) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || !1 === d.attributes[c].expando;
		for (f in d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, x(t)) break;
		return t.ownLast = "0" !== f, x(function () {
			var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				l = a.getElementsByTagName("body")[0];
			l && ((n = a.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (o = d.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {
				zoom: 1
			} : {}, function () {
				t.boxSizing = 4 === d.offsetWidth
			}), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
				width: "4px"
			}).width, (r = d.appendChild(a.createElement("div"))).style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
		}), n = s = l = u = r = o = null, t
	}({});
	var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		P = /([A-Z])/g;

	function R(e, n, r, i) {
		if (x.acceptData(e)) {
			var o, a, s = x.expando,
				l = e.nodeType,
				u = l ? x.cache : e,
				c = l ? e[s] : e[s] && s;
			if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {
				toJSON: x.noop
			}), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? null == (o = a[n]) && (o = a[x.camelCase(n)]) : o = a, o
		}
	}

	function W(e, t, n) {
		if (x.acceptData(e)) {
			var r, i, o = e.nodeType,
				a = o ? x.cache : e,
				s = o ? e[x.expando] : x.expando;
			if (a[s]) {
				if (t && (r = n ? a[s] : a[s].data)) {
					x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : t = (t = x.camelCase(t)) in r ? [t] : t.split(" "), i = t.length;
					for (; i--;) delete r[t[i]];
					if (n ? !I(r) : !x.isEmptyObject(r)) return
				}(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
			}
		}
	}

	function $(e, n, r) {
		if (r === t && 1 === e.nodeType) {
			var i = "data-" + n.replace(P, "-$1").toLowerCase();
			if ("string" == typeof (r = e.getAttribute(i))) {
				try {
					r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r)
				} catch (o) {}
				x.data(e, n, r)
			} else r = t
		}
		return r
	}

	function I(e) {
		var t;
		for (t in e)
			if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}
	x.extend({
		cache: {},
		noData: {
			applet: !0,
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function (e) {
			return !!(e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando]) && !I(e)
		},
		data: function (e, t, n) {
			return R(e, t, n)
		},
		removeData: function (e, t) {
			return W(e, t)
		},
		_data: function (e, t, n) {
			return R(e, t, n, !0)
		},
		_removeData: function (e, t) {
			return W(e, t, !0)
		},
		acceptData: function (e) {
			if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
			var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
			return !t || !0 !== t && e.getAttribute("classid") === t
		}
	}), x.fn.extend({
		data: function (e, n) {
			var r, i, o = null,
				a = 0,
				s = this[0];
			if (e === t) {
				if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
					for (r = s.attributes; r.length > a; a++) 0 === (i = r[a].name).indexOf("data-") && $(s, i = x.camelCase(i.slice(5)), o[i]);
					x._data(s, "parsedAttrs", !0)
				}
				return o
			}
			return "object" == typeof e ? this.each(function () {
				x.data(this, e)
			}) : 1 < arguments.length ? this.each(function () {
				x.data(this, e, n)
			}) : s ? $(s, e, x.data(s, e)) : null
		},
		removeData: function (e) {
			return this.each(function () {
				x.removeData(this, e)
			})
		}
	}), x.extend({
		queue: function (e, n, r) {
			var i;
			return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
		},
		dequeue: function (e, t) {
			t = t || "fx";
			var n = x.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = x._queueHooks(e, t);
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
				x.dequeue(e, t)
			}, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function (e, t) {
			var n = t + "queueHooks";
			return x._data(e, n) || x._data(e, n, {
				empty: x.Callbacks("once memory").add(function () {
					x._removeData(e, t + "queue"), x._removeData(e, n)
				})
			})
		}
	}), x.fn.extend({
		queue: function (e, n) {
			var r = 2;
			return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () {
				var t = x.queue(this, e, n);
				x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
			})
		},
		dequeue: function (e) {
			return this.each(function () {
				x.dequeue(this, e)
			})
		},
		delay: function (e, t) {
			return e = x.fx && x.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, n) {
				var r = setTimeout(t, e);
				n.stop = function () {
					clearTimeout(r)
				}
			})
		},
		clearQueue: function (e) {
			return this.queue(e || "fx", [])
		},
		promise: function (e, n) {
			var r, i = 1,
				o = x.Deferred(),
				a = this,
				s = this.length,
				l = function () {
					--i || o.resolveWith(a, [a])
				};
			for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;)(r = x._data(a[s], e + "queueHooks")) && r.empty && (i++, r.empty.add(l));
			return l(), o.promise(n)
		}
	});
	var z, X, U = /[\t\r\n\f]/g,
		V = /\r/g,
		Y = /^(?:input|select|textarea|button|object)$/i,
		J = /^(?:a|area)$/i,
		G = /^(?:checked|selected)$/i,
		Q = x.support.getSetAttribute,
		K = x.support.input;
	x.fn.extend({
		attr: function (e, t) {
			return x.access(this, x.attr, e, t, 1 < arguments.length)
		},
		removeAttr: function (e) {
			return this.each(function () {
				x.removeAttr(this, e)
			})
		},
		prop: function (e, t) {
			return x.access(this, x.prop, e, t, 1 < arguments.length)
		},
		removeProp: function (e) {
			return e = x.propFix[e] || e, this.each(function () {
				try {
					this[e] = t, delete this[e]
				} catch (n) {}
			})
		},
		addClass: function (e) {
			var t, n, r, i, o, a = 0,
				s = this.length,
				l = "string" == typeof e && e;
			if (x.isFunction(e)) return this.each(function (t) {
				x(this).addClass(e.call(this, t, this.className))
			});
			if (l)
				for (t = (e || "").match(T) || []; a < s; a++)
					if (r = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
						for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
						n.className = x.trim(r)
					}
			return this
		},
		removeClass: function (e) {
			var t, n, r, i, o, a = 0,
				s = this.length,
				l = 0 === arguments.length || "string" == typeof e && e;
			if (x.isFunction(e)) return this.each(function (t) {
				x(this).removeClass(e.call(this, t, this.className))
			});
			if (l)
				for (t = (e || "").match(T) || []; a < s; a++)
					if (r = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
						for (o = 0; i = t[o++];)
							for (; 0 <= r.indexOf(" " + i + " ");) r = r.replace(" " + i + " ", " ");
						n.className = e ? x.trim(r) : ""
					}
			return this
		},
		toggleClass: function (e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
				x(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function () {
				if ("string" === n)
					for (var t, r = 0, o = x(this), a = e.match(T) || []; t = a[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
				else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : x._data(this, "__className__") || "")
			})
		},
		hasClass: function (e) {
			for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
				if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(U, " ").indexOf(t)) return !0;
			return !1
		},
		val: function (e) {
			var n, r, i, o = this[0];
			return arguments.length ? (i = x.isFunction(e), this.each(function (n) {
				var o;
				1 === this.nodeType && (null == (o = i ? e.call(this, n, x(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function (e) {
					return null == e ? "" : e + ""
				})), (r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
			})) : o ? (r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]) && "get" in r && (n = r.get(o, "value")) !== t ? n : "string" == typeof (n = o.value) ? n.replace(V, "") : null == n ? "" : n : void 0
		}
	}), x.extend({
		valHooks: {
			option: {
				get: function (e) {
					var t = x.find.attr(e, "value");
					return null != t ? t : e.text
				}
			},
			select: {
				get: function (e) {
					for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, l = i < 0 ? s : o ? i : 0; l < s; l++)
						if (!(!(n = r[l]).selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
							if (t = x(n).val(), o) return t;
							a.push(t)
						}
					return a
				},
				set: function (e, t) {
					for (var n, r, i = e.options, o = x.makeArray(t), a = i.length; a--;)((r = i[a]).selected = 0 <= x.inArray(x(r).val(), o)) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		},
		attr: function (e, n, r) {
			var o, a, s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : null == (a = x.find.attr(e, n)) ? t : a : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
		},
		removeAttr: function (e, t) {
			var n, r, i = 0,
				o = t && t.match(T);
			if (o && 1 === e.nodeType)
				for (; n = o[i++];) r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
		},
		attrHooks: {
			type: {
				set: function (e, t) {
					if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		propFix: {
			for: "htmlFor",
			class: "className"
		},
		prop: function (e, n, r) {
			var i, o, s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s) return (1 !== s || !x.isXMLDoc(e)) && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
		},
		propHooks: {
			tabIndex: {
				get: function (e) {
					var t = x.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		}
	}), X = {
		set: function (e, t, n) {
			return !1 === t ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
		var r = x.expr.attrHandle[n] || x.find.attr;
		x.expr.attrHandle[n] = K && Q || !G.test(n) ? function (e, n, i) {
			var o = x.expr.attrHandle[n],
				a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
			return x.expr.attrHandle[n] = o, a
		} : function (e, n, r) {
			return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
		}
	}), K && Q || (x.attrHooks.value = {
		set: function (e, n, r) {
			return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
		}
	}), Q || (z = {
		set: function (e, n, r) {
			var i = e.getAttributeNode(r);
			return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
		}
	}, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (e, n, r) {
		var i;
		return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
	}, x.valHooks.button = {
		get: function (e, n) {
			var r = e.getAttributeNode(n);
			return r && r.specified ? r.value : t
		},
		set: z.set
	}, x.attrHooks.contenteditable = {
		set: function (e, t, n) {
			z.set(e, "" !== t && t, n)
		}
	}, x.each(["width", "height"], function (e, n) {
		x.attrHooks[n] = {
			set: function (e, r) {
				return "" === r ? (e.setAttribute(n, "auto"), r) : t
			}
		}
	})), x.support.hrefNormalized || x.each(["href", "src"], function (e, t) {
		x.propHooks[t] = {
			get: function (e) {
				return e.getAttribute(t, 4)
			}
		}
	}), x.support.style || (x.attrHooks.style = {
		get: function (e) {
			return e.style.cssText || t
		},
		set: function (e, t) {
			return e.style.cssText = t + ""
		}
	}), x.support.optSelected || (x.propHooks.selected = {
		get: function (e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	}), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		x.propFix[this.toLowerCase()] = this
	}), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function () {
		x.valHooks[this] = {
			set: function (e, n) {
				return x.isArray(n) ? e.checked = 0 <= x.inArray(x(e).val(), n) : t
			}
		}, x.support.checkOn || (x.valHooks[this].get = function (e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var Z = /^(?:input|select|textarea)$/i,
		et = /^key/,
		tt = /^(?:mouse|contextmenu)|click/,
		nt = /^(?:focusinfocus|focusoutblur)$/,
		rt = /^([^.]*)(?:\.(.+)|)$/;

	function it() {
		return !0
	}

	function ot() {
		return !1
	}

	function at() {
		try {
			return a.activeElement
		} catch (e) {}
	}
	x.event = {
		global: {},
		add: function (e, n, r, o, a) {
			var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
			if (v) {
				for (r.handler && (r = (c = r).handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || ((f = v.handle = function (e) {
						return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
					}).elem = e), u = (n = (n || "").match(T) || [""]).length; u--;) g = y = (s = rt.exec(n[u]) || [])[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
					type: g,
					origType: y,
					data: o,
					handler: r,
					guid: r.guid,
					selector: a,
					needsContext: a && x.expr.match.needsContext.test(a),
					namespace: m.join(".")
				}, c), (h = l[g]) || ((h = l[g] = []).delegateCount = 0, p.setup && !1 !== p.setup.call(e, o, m, f) || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
				e = null
			}
		},
		remove: function (e, t, n, r, i) {
			var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
			if (m && (c = m.events)) {
				for (u = (t = (t || "").match(T) || [""]).length; u--;)
					if (d = g = (s = rt.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
						for (p = x.event.special[d] || {}, f = c[d = (r ? p.delegateType : p.bindType) || d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
						l && !f.length && (p.teardown && !1 !== p.teardown.call(e, h, m.handle) || x.removeEvent(e, d, m.handle), delete c[d])
					} else
						for (d in c) x.event.remove(e, d + t[u], n, r, !0);
				x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
			}
		},
		trigger: function (n, r, i, o) {
			var s, l, u, c, p, f, d, h = [i || a],
				g = v.call(n, "type") ? n.type : n,
				m = v.call(n, "namespace") ? n.namespace.split(".") : [];
			if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (0 <= g.indexOf(".") && (g = (m = g.split(".")).shift(), m.sort()), l = g.indexOf(":") < 0 && "on" + g, (n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n)).isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || !1 !== p.trigger.apply(i, r))) {
				if (!o && !p.noBubble && !x.isWindow(i)) {
					for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) h.push(u), f = u;
					f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
				}
				for (d = 0;
					(u = h[d++]) && !n.isPropagationStopped();) n.type = 1 < d ? c : p.bindType || g, (s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle")) && s.apply(u, r), (s = l && u[l]) && x.acceptData(u) && s.apply && !1 === s.apply(u, r) && n.preventDefault();
				if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || !1 === p._default.apply(h.pop(), r)) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
					(f = i[l]) && (i[l] = null), x.event.triggered = g;
					try {
						i[g]()
					} catch (y) {}
					x.event.triggered = t, f && (i[l] = f)
				}
				return n.result
			}
		},
		dispatch: function (e) {
			e = x.event.fix(e);
			var n, r, i, o, a, s = [],
				l = g.call(arguments),
				u = (x._data(this, "events") || {})[e.type] || [],
				c = x.event.special[e.type] || {};
			if ((l[0] = e).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
				for (s = x.event.handlers.call(this, e, u), n = 0;
					(o = s[n++]) && !e.isPropagationStopped();)
					for (e.currentTarget = o.elem, a = 0;
						(i = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, (r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l)) !== t && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, e), e.result
			}
		},
		handlers: function (e, n) {
			var r, i, o, a, s = [],
				l = n.delegateCount,
				u = e.target;
			if (l && u.nodeType && (!e.button || "click" !== e.type))
				for (; u != this; u = u.parentNode || this)
					if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
						for (o = [], a = 0; a < l; a++) o[r = (i = n[a]).selector + " "] === t && (o[r] = i.needsContext ? 0 <= x(r, this).index(u) : x.find(r, this, null, [u]).length), o[r] && o.push(i);
						o.length && s.push({
							elem: u,
							handlers: o
						})
					}
			return n.length > l && s.push({
				elem: this,
				handlers: n.slice(l)
			}), s
		},
		fix: function (e) {
			if (e[x.expando]) return e;
			var t, n, r, i = e.type,
				o = e,
				s = this.fixHooks[i];
			for (s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
			return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (e, n) {
				var r, i, o, s = n.button,
					l = n.fromElement;
				return null == e.pageX && null != n.clientX && (o = (i = e.target.ownerDocument || a).documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					if (this !== at() && this.focus) try {
						return this.focus(), !1
					} catch (e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					return this === at() && this.blur ? (this.blur(), !1) : t
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
				},
				_default: function (e) {
					return x.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (e) {
					e.result !== t && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function (e, t, n, r) {
			var i = x.extend(new x.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, x.removeEvent = a.removeEventListener ? function (e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function (e, t, n) {
		var r = "on" + t;
		e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
	}, x.Event = function (e, n) {
		return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
	}, x.Event.prototype = {
		isDefaultPrevented: ot,
		isPropagationStopped: ot,
		isImmediatePropagationStopped: ot,
		preventDefault: function () {
			var e = this.originalEvent;
			this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function () {
			var e = this.originalEvent;
			this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function () {
			this.isImmediatePropagationStopped = it, this.stopPropagation()
		}
	}, x.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function (e, t) {
		x.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function (e) {
				var n, i = e.relatedTarget,
					o = e.handleObj;
				return (!i || i !== this && !x.contains(this, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), x.support.submitBubbles || (x.event.special.submit = {
		setup: function () {
			return !x.nodeName(this, "form") && (x.event.add(this, "click._submit keypress._submit", function (e) {
				var n = e.target,
					r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
				r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function (e) {
					e._submit_bubble = !0
				}), x._data(r, "submitBubbles", !0))
			}), t)
		},
		postDispatch: function (e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
		},
		teardown: function () {
			return !x.nodeName(this, "form") && (x.event.remove(this, "._submit"), t)
		}
	}), x.support.changeBubbles || (x.event.special.change = {
		setup: function () {
			return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function (e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), x.event.add(this, "click._change", function (e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
			})), !1) : (x.event.add(this, "beforeactivate._change", function (e) {
				var t = e.target;
				Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function (e) {
					!this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
				}), x._data(t, "changeBubbles", !0))
			}), t)
		},
		handle: function (e) {
			var n = e.target;
			return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
		},
		teardown: function () {
			return x.event.remove(this, "._change"), !Z.test(this.nodeName)
		}
	}), x.support.focusinBubbles || x.each({
		focus: "focusin",
		blur: "focusout"
	}, function (e, t) {
		var n = 0,
			r = function (e) {
				x.event.simulate(t, e.target, x.event.fix(e), !0)
			};
		x.event.special[t] = {
			setup: function () {
				0 == n++ && a.addEventListener(e, r, !0)
			},
			teardown: function () {
				0 == --n && a.removeEventListener(e, r, !0)
			}
		}
	}), x.fn.extend({
		on: function (e, n, r, i, o) {
			var a, s;
			if ("object" == typeof e) {
				for (a in "string" != typeof n && (r = r || n, n = t), e) this.on(a, n, r, e[a], o);
				return this
			}
			if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), !1 === i) i = ot;
			else if (!i) return this;
			return 1 === o && (s = i, (i = function (e) {
				return x().off(e), s.apply(this, arguments)
			}).guid = s.guid || (s.guid = x.guid++)), this.each(function () {
				x.event.add(this, e, i, r, n)
			})
		},
		one: function (e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function (e, n, r) {
			var i, o;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof e) {
				for (o in e) this.off(o, n, e[o]);
				return this
			}
			return (!1 === n || "function" == typeof n) && (r = n, n = t), !1 === r && (r = ot), this.each(function () {
				x.event.remove(this, e, r, n)
			})
		},
		trigger: function (e, t) {
			return this.each(function () {
				x.event.trigger(e, t, this)
			})
		},
		triggerHandler: function (e, n) {
			var r = this[0];
			return r ? x.event.trigger(e, n, r, !0) : t
		}
	});
	var st = /^.[^:#\[\.,]*$/,
		lt = /^(?:parents|prev(?:Until|All))/,
		ut = x.expr.match.needsContext,
		ct = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function pt(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}

	function ft(e, t, n) {
		if (x.isFunction(t)) return x.grep(e, function (e, r) {
			return !!t.call(e, r, e) !== n
		});
		if (t.nodeType) return x.grep(e, function (e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (st.test(t)) return x.filter(t, e, n);
			t = x.filter(t, e)
		}
		return x.grep(e, function (e) {
			return 0 <= x.inArray(e, t) !== n
		})
	}

	function dt(e) {
		var t = ht.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement)
			for (; t.length;) n.createElement(t.pop());
		return n
	}
	x.fn.extend({
		find: function (e) {
			var t, n = [],
				r = this,
				i = r.length;
			if ("string" != typeof e) return this.pushStack(x(e).filter(function () {
				for (t = 0; t < i; t++)
					if (x.contains(r[t], this)) return !0
			}));
			for (t = 0; t < i; t++) x.find(e, r[t], n);
			return (n = this.pushStack(1 < i ? x.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
		},
		has: function (e) {
			var t, n = x(e, this),
				r = n.length;
			return this.filter(function () {
				for (t = 0; t < r; t++)
					if (x.contains(this, n[t])) return !0
			})
		},
		not: function (e) {
			return this.pushStack(ft(this, e || [], !0))
		},
		filter: function (e) {
			return this.pushStack(ft(this, e || [], !1))
		},
		is: function (e) {
			return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
		},
		closest: function (e, t) {
			for (var n, r = 0, i = this.length, o = [], a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0; r < i; r++)
				for (n = this[r]; n && n !== t; n = n.parentNode)
					if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
						n = o.push(n);
						break
					}
			return this.pushStack(1 < o.length ? x.unique(o) : o)
		},
		index: function (e) {
			return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (e, t) {
			var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
				r = x.merge(this.get(), n);
			return this.pushStack(x.unique(r))
		},
		addBack: function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), x.each({
		parent: function (e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function (e) {
			return x.dir(e, "parentNode")
		},
		parentsUntil: function (e, t, n) {
			return x.dir(e, "parentNode", n)
		},
		next: function (e) {
			return pt(e, "nextSibling")
		},
		prev: function (e) {
			return pt(e, "previousSibling")
		},
		nextAll: function (e) {
			return x.dir(e, "nextSibling")
		},
		prevAll: function (e) {
			return x.dir(e, "previousSibling")
		},
		nextUntil: function (e, t, n) {
			return x.dir(e, "nextSibling", n)
		},
		prevUntil: function (e, t, n) {
			return x.dir(e, "previousSibling", n)
		},
		siblings: function (e) {
			return x.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function (e) {
			return x.sibling(e.firstChild)
		},
		contents: function (e) {
			return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
		}
	}, function (e, t) {
		x.fn[e] = function (n, r) {
			var i = x.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), 1 < this.length && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
		}
	}), x.extend({
		filter: function (e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
				return 1 === e.nodeType
			}))
		},
		dir: function (e, n, r) {
			for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
			return i
		},
		sibling: function (e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	});
	var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		gt = / jQuery\d+="(?:null|\d+)"/g,
		mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
		yt = /^\s+/,
		vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		bt = /<([\w:]+)/,
		xt = /<tbody/i,
		wt = /<|&#?\w+;/,
		Tt = /<(?:script|style|link)/i,
		Ct = /^(?:checkbox|radio)$/i,
		Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		kt = /^$|\/(?:java|ecma)script/i,
		Et = /^true\/(.*)/,
		St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		At = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		Dt = dt(a).appendChild(a.createElement("div"));

	function Lt(e, t) {
		return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function Ht(e) {
		return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
	}

	function qt(e) {
		var t = Et.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function _t(e, t) {
		for (var n, r = 0; null != (n = e[r]); r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
	}

	function Mt(e, t) {
		if (1 === t.nodeType && x.hasData(e)) {
			var n, r, i, o = x._data(e),
				a = x._data(t, o),
				s = o.events;
			if (s)
				for (n in delete a.handle, a.events = {}, s)
					for (r = 0, i = s[n].length; r < i; r++) x.event.add(t, n, s[n][r]);
			a.data && (a.data = x.extend({}, a.data))
		}
	}

	function Ot(e, t) {
		var n, r, i;
		if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
				for (r in (i = x._data(t)).events) x.removeEvent(t, r, i.handle);
				t.removeAttribute(x.expando)
			}
			"script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}
	}

	function Ft(e, n) {
		var r, o, a = 0,
			s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
		if (!s)
			for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
		return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
	}

	function Bt(e) {
		Ct.test(e.type) && (e.defaultChecked = e.checked)
	}
	At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
		text: function (e) {
			return x.access(this, function (e) {
				return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function () {
			return this.domManip(arguments, function (e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Lt(this, e).appendChild(e)
			})
		},
		prepend: function () {
			return this.domManip(arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Lt(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function () {
			return this.domManip(arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function () {
			return this.domManip(arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function (e, t) {
			for (var n, r = e ? x.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function () {
			for (var e, t = 0; null != (e = this[t]); t++) {
				for (1 === e.nodeType && x.cleanData(Ft(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
				e.options && x.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function (e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function () {
				return x.clone(this, e, t)
			})
		},
		html: function (e) {
			return x.access(this, function (e) {
				var n = this[0] || {},
					r = 0,
					i = this.length;
				if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
				if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(vt, "<$1></$2>");
					try {
						for (; r < i; r++) 1 === (n = this[r] || {}).nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
						n = 0
					} catch (o) {}
				}
				n && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function () {
			var e = x.map(this, function (e) {
					return [e.nextSibling, e.parentNode]
				}),
				t = 0;
			return this.domManip(arguments, function (n) {
				var r = e[t++],
					i = e[t++];
				i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
			}, !0), t ? this : this.remove()
		},
		detach: function (e) {
			return this.remove(e, !0)
		},
		domManip: function (e, t, n) {
			e = d.apply([], e);
			var r, i, o, a, s, l, u = 0,
				c = this.length,
				p = this,
				f = c - 1,
				h = e[0],
				g = x.isFunction(h);
			if (g || !(c <= 1 || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function (r) {
				var i = p.eq(r);
				g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
			});
			if (c && (r = (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this)).firstChild, 1 === l.childNodes.length && (l = r), r)) {
				for (o = (a = x.map(Ft(l, "script"), Ht)).length; u < c; u++) i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
				if (o)
					for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; u < o; u++) i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
				l = r = null
			}
			return this
		}
	}), x.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (e, t) {
		x.fn[e] = function (e) {
			for (var n, r = 0, i = [], o = x(e), a = o.length - 1; r <= a; r++) n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
			return this.pushStack(i)
		}
	}), x.extend({
		clone: function (e, t, n) {
			var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
			if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
				for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) r[a] && Ot(i, r[a]);
			if (t)
				if (n)
					for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) Mt(i, r[a]);
				else Mt(e, o);
			return 0 < (r = Ft(o, "script")).length && _t(r, !l && Ft(e, "script")), r = s = i = null, o
		},
		buildFragment: function (e, t, n, r) {
			for (var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0; h < p; h++)
				if ((o = e[h]) || 0 === o)
					if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);
					else if (wt.test(o)) {
				for (s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
				if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody)
					for (i = (o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild) && o.childNodes.length; i--;) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
				for (x.merge(d, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
				s = f.lastChild
			} else d.push(t.createTextNode(o));
			for (s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0; o = d[h++];)
				if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n))
					for (i = 0; o = s[i++];) kt.test(o.type || "") && n.push(o);
			return s = null, f
		},
		cleanData: function (e, t) {
			for (var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special; null != (n = e[s]); s++)
				if ((t || x.acceptData(n)) && (a = (o = n[l]) && u[o])) {
					if (a.events)
						for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
					u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
				}
		},
		_evalUrl: function (e) {
			return x.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				throws: !0
			})
		}
	}), x.fn.extend({
		wrapAll: function (e) {
			if (x.isFunction(e)) return this.each(function (t) {
				x(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
					for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function (e) {
			return x.isFunction(e) ? this.each(function (t) {
				x(this).wrapInner(e.call(this, t))
			}) : this.each(function () {
				var t = x(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function (e) {
			var t = x.isFunction(e);
			return this.each(function (n) {
				x(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function () {
			return this.parent().each(function () {
				x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
			}).end()
		}
	});
	var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
		It = /opacity\s*=\s*([^)]*)/,
		zt = /^(top|right|bottom|left)$/,
		Xt = /^(none|table(?!-c[ea]).+)/,
		Ut = /^margin/,
		Vt = RegExp("^(" + w + ")(.*)$", "i"),
		Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
		Jt = RegExp("^([+-])=(" + w + ")", "i"),
		Gt = {
			BODY: "block"
		},
		Qt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Kt = {
			letterSpacing: 0,
			fontWeight: 400
		},
		Zt = ["Top", "Right", "Bottom", "Left"],
		en = ["Webkit", "O", "Moz", "ms"];

	function tn(e, t) {
		if (t in e) return t;
		for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length; i--;)
			if ((t = en[i] + n) in e) return t;
		return r
	}

	function nn(e, t) {
		return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
	}

	function rn(e, t) {
		for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)(r = e[a]).style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
		for (a = 0; a < s; a++)(r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
		return e
	}

	function on(e, t, n) {
		var r = Vt.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}

	function an(e, t, n, r, i) {
		for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
		return a
	}

	function sn(e, t, n) {
		var r = !0,
			i = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = Rt(e),
			a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
		if (i <= 0 || null == i) {
			if (((i = Wt(e, t, o)) < 0 || null == i) && (i = e.style[t]), Yt.test(i)) return i;
			r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
	}

	function ln(e) {
		var t = a,
			n = Gt[e];
		return n || ("none" !== (n = un(e, t)) && n || ((t = ((Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement))[0].contentWindow || Pt[0].contentDocument).document).write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
	}

	function un(e, t) {
		var n = x(t.createElement(e)).appendTo(t.body),
			r = x.css(n[0], "display");
		return n.remove(), r
	}
	x.fn.extend({
		css: function (e, n) {
			return x.access(this, function (e, n, r) {
				var i, o, a = {},
					s = 0;
				if (x.isArray(n)) {
					for (o = Rt(e), i = n.length; s < i; s++) a[n[s]] = x.css(e, n[s], !1, o);
					return a
				}
				return r !== t ? x.style(e, n, r) : x.css(e, n)
			}, e, n, 1 < arguments.length)
		},
		show: function () {
			return rn(this, !0)
		},
		hide: function () {
			return rn(this)
		},
		toggle: function (e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
				nn(this) ? x(this).show() : x(this).hide()
			})
		}
	}), x.extend({
		cssHooks: {
			opacity: {
				get: function (e, t) {
					if (t) {
						var n = Wt(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			float: x.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function (e, n, r, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, a, s, l = x.camelCase(n),
					u = e.style;
				if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
				if ("string" === (a = typeof r) && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
					u[n] = r
				} catch (c) {}
			}
		},
		css: function (e, n, r, i) {
			var o, a, s, l = x.camelCase(n);
			return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), (s = x.cssHooks[n] || x.cssHooks[l]) && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), !0 === r || x.isNumeric(o) ? o || 0 : a) : a
		}
	}), e.getComputedStyle ? (Rt = function (t) {
		return e.getComputedStyle(t, null)
	}, Wt = function (e, n, r) {
		var i, o, a, s = r || Rt(e),
			l = s ? s.getPropertyValue(n) || s[n] : t,
			u = e.style;
		return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
	}) : a.documentElement.currentStyle && (Rt = function (e) {
		return e.currentStyle
	}, Wt = function (e, n, r) {
		var i, o, a, s = r || Rt(e),
			l = s ? s[n] : t,
			u = e.style;
		return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, (a = (o = e.runtimeStyle) && o.left) && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
	}), x.each(["height", "width"], function (e, n) {
		x.cssHooks[n] = {
			get: function (e, r, i) {
				return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function () {
					return sn(e, n, i)
				}) : sn(e, n, i) : t
			},
			set: function (e, t, r) {
				var i = r && Rt(e);
				return on(0, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}), x.support.opacity || (x.cssHooks.opacity = {
		get: function (e, t) {
			return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function (e, t) {
			var n = e.style,
				r = e.currentStyle,
				i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				o = r && r.filter || n.filter || "";
			((n.zoom = 1) <= t || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
		}
	}), x(function () {
		x.support.reliableMarginRight || (x.cssHooks.marginRight = {
			get: function (e, n) {
				return n ? x.swap(e, {
					display: "inline-block"
				}, Wt, [e, "marginRight"]) : t
			}
		}), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, n) {
			x.cssHooks[n] = {
				get: function (e, r) {
					return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
				}
			}
		})
	}), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
	}, x.expr.filters.visible = function (e) {
		return !x.expr.filters.hidden(e)
	}), x.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (e, t) {
		x.cssHooks[e + t] = {
			expand: function (n) {
				for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, Ut.test(e) || (x.cssHooks[e + t].set = on)
	});
	var cn = /%20/g,
		pn = /\[\]$/,
		fn = /\r?\n/g,
		dn = /^(?:submit|button|image|reset|file)$/i,
		hn = /^(?:input|select|textarea|keygen)/i;

	function gn(e, t, n, r) {
		var i;
		if (x.isArray(t)) x.each(t, function (t, i) {
			n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
		});
		else if (n || "object" !== x.type(t)) r(e, t);
		else
			for (i in t) gn(e + "[" + i + "]", t[i], n, r)
	}
	x.fn.extend({
		serialize: function () {
			return x.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var e = x.prop(this, "elements");
				return e ? x.makeArray(e) : this
			}).filter(function () {
				var e = this.type;
				return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
			}).map(function (e, t) {
				var n = x(this).val();
				return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
					return {
						name: t.name,
						value: e.replace(fn, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(fn, "\r\n")
				}
			}).get()
		}
	}), x.param = function (e, n) {
		var r, i = [],
			o = function (e, t) {
				t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function () {
			o(this.name, this.value)
		});
		else
			for (r in e) gn(r, e[r], n, o);
		return i.join("&").replace(cn, "+")
	}, x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
		x.fn[t] = function (e, n) {
			return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), x.fn.extend({
		hover: function (e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function (e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function (e, t) {
			return this.off(e, null, t)
		},
		delegate: function (e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function (e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var mn, yn, vn = x.now(),
		bn = /\?/,
		xn = /#.*$/,
		wn = /([?&])_=[^&]*/,
		Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Nn = /^(?:GET|HEAD)$/,
		kn = /^\/\//,
		En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		Sn = x.fn.load,
		An = {},
		jn = {},
		Dn = "*/".concat("*");
	try {
		yn = o.href
	} catch (Ln) {
		(yn = a.createElement("a")).href = "", yn = yn.href
	}

	function Hn(e) {
		return function (t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(T) || [];
			if (x.isFunction(n))
				for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}

	function qn(e, n, r, i) {
		var o = {},
			a = e === jn;

		function s(l) {
			var u;
			return o[l] = !0, x.each(e[l] || [], function (e, l) {
				var c = l(n, r, i);
				return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
			}), u
		}
		return s(n.dataTypes[0]) || !o["*"] && s("*")
	}

	function _n(e, n) {
		var r, i, o = x.ajaxSettings.flatOptions || {};
		for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
		return r && x.extend(!0, e, r), e
	}
	mn = En.exec(yn.toLowerCase()) || [], x.fn.load = function (e, n, r) {
		if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
		var i, o, a, s = this,
			l = e.indexOf(" ");
		return 0 <= l && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), 0 < s.length && x.ajax({
			url: e,
			type: a,
			dataType: "html",
			data: n
		}).done(function (e) {
			o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
		}).complete(r && function (e, t) {
			s.each(r, o || [e.responseText, t, e])
		}), this
	}, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
		x.fn[t] = function (e) {
			return this.on(t, e)
		}
	}), x.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: yn,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(mn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Dn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": x.parseJSON,
				"text xml": x.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (e, t) {
			return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
		},
		ajaxPrefilter: Hn(An),
		ajaxTransport: Hn(jn),
		ajax: function (e, n) {
			"object" == typeof e && (n = e, e = t), n = n || {};
			var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n),
				f = p.context || p,
				d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
				h = x.Deferred(),
				g = x.Callbacks("once memory"),
				m = p.statusCode || {},
				y = {},
				v = {},
				b = 0,
				w = "canceled",
				C = {
					readyState: 0,
					getResponseHeader: function (e) {
						var t;
						if (2 === b) {
							if (!c)
								for (c = {}; t = Tn.exec(a);) c[t[1].toLowerCase()] = t[2];
							t = c[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function () {
						return 2 === b ? a : null
					},
					setRequestHeader: function (e, t) {
						var n = e.toLowerCase();
						return b || (e = v[n] = v[n] || e, y[e] = t), this
					},
					overrideMimeType: function (e) {
						return b || (p.mimeType = e), this
					},
					statusCode: function (e) {
						var t;
						if (e)
							if (b < 2)
								for (t in e) m[t] = [m[t], e[t]];
							else C.always(e[C.status]);
						return this
					},
					abort: function (e) {
						var t = e || w;
						return u && u.abort(t), k(0, t), this
					}
				};
			if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C;
			for (i in (l = p.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]), p.headers) C.setRequestHeader(i, p.headers[i]);
			if (p.beforeSend && (!1 === p.beforeSend.call(f, C, p) || 2 === b)) return C.abort();
			for (i in w = "abort", {
					success: 1,
					error: 1,
					complete: 1
				}) C[i](p[i]);
			if (u = qn(jn, p, n, C)) {
				C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && 0 < p.timeout && (s = setTimeout(function () {
					C.abort("timeout")
				}, p.timeout));
				try {
					b = 1, u.send(y, k)
				} catch (N) {
					if (!(b < 2)) throw N;
					k(-1, N)
				}
			} else k(-1, "No Transport");

			function k(e, n, r, i) {
				var c, y, v, w, T, N = n;
				2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = 0 < e ? 4 : 0, c = 200 <= e && e < 300 || 304 === e, r && (w = function Mn(e, n, r) {
					var i, o, a, s, l = e.contents,
						u = e.dataTypes;
					for (;
						"*" === u[0];) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
					if (o)
						for (s in l)
							if (l[s] && l[s].test(o)) {
								u.unshift(s);
								break
							}
					if (u[0] in r) a = u[0];
					else {
						for (s in r) {
							if (!u[0] || e.converters[s + " " + u[0]]) {
								a = s;
								break
							}
							i || (i = s)
						}
						a = a || i
					}
					return a ? (a !== u[0] && u.unshift(a), r[a]) : t
				}(p, C, r)), w = function On(e, t, n, r) {
					var i, o, a, s, l, u = {},
						c = e.dataTypes.slice();
					if (c[1])
						for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
					o = c.shift();
					for (; o;)
						if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
							if ("*" === o) o = l;
							else if ("*" !== l && l !== o) {
						if (!(a = u[l + " " + o] || u["* " + o]))
							for (i in u)
								if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
									!0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));
									break
								}
						if (!0 !== a)
							if (a && e.throws) t = a(t);
							else try {
								t = a(t)
							} catch (p) {
								return {
									state: "parsererror",
									error: a ? p : "No conversion from " + l + " to " + o
								}
							}
					}
					return {
						state: "success",
						data: t
					}
				}(p, w, C, c), c ? (p.ifModified && ((T = C.getResponseHeader("Last-Modified")) && (x.lastModified[o] = T), (T = C.getResponseHeader("etag")) && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, c = !(v = w.error))) : (v = N, (e || !N) && (N = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
			}
			return C
		},
		getJSON: function (e, t, n) {
			return x.get(e, t, n, "json")
		},
		getScript: function (e, n) {
			return x.get(e, t, n, "script")
		}
	}), x.each(["get", "post"], function (e, n) {
		x[n] = function (e, r, i, o) {
			return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
				url: e,
				type: n,
				dataType: o,
				data: r,
				success: i
			})
		}
	}), x.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function (e) {
				return x.globalEval(e), e
			}
		}
	}), x.ajaxPrefilter("script", function (e) {
		e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), x.ajaxTransport("script", function (e) {
		if (e.crossDomain) {
			var n, r = a.head || x("head")[0] || a.documentElement;
			return {
				send: function (t, i) {
					(n = a.createElement("script")).async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
						(t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
					}, r.insertBefore(n, r.firstChild)
				},
				abort: function () {
					n && n.onload(t, !0)
				}
			}
		}
	});
	var Fn = [],
		Bn = /(=)\?(?=&|$)|\?\?/;
	x.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var e = Fn.pop() || x.expando + "_" + vn++;
			return this[e] = !0, e
		}
	}), x.ajaxPrefilter("json jsonp", function (n, r, i) {
		var o, a, s, l = !1 !== n.jsonp && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
		return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : !1 !== n.jsonp && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
			return s || x.error(o + " was not called"), s[0]
		}, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
			s = arguments
		}, i.always(function () {
			e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
		}), "script") : t
	});
	var Pn, Rn, Wn = 0,
		$n = e.ActiveXObject && function () {
			var e;
			for (e in Pn) Pn[e](t, !0)
		};

	function In() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	}
	x.ajaxSettings.xhr = e.ActiveXObject ? function () {
		return !this.isLocal && In() || function zn() {
			try {
				return new e.ActiveXObject("Microsoft.XMLHTTP")
			} catch (t) {}
		}()
	} : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, (Rn = x.support.ajax = !!Rn) && x.ajaxTransport(function (n) {
		var r;
		if (!n.crossDomain || x.support.cors) return {
			send: function (i, o) {
				var a, s, l = n.xhr();
				if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
					for (s in n.xhrFields) l[s] = n.xhrFields[s];
				n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
				try {
					for (s in i) l.setRequestHeader(s, i[s])
				} catch (u) {}
				l.send(n.hasContent && n.data || null), r = function (e, i) {
					var s, u, c, p;
					try {
						if (r && (i || 4 === l.readyState))
							if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort();
							else {
								p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
								try {
									c = l.statusText
								} catch (f) {
									c = ""
								}
								s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
							}
					} catch (d) {
						i || o(-1, d)
					}
					p && o(s, c, p, u)
				}, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
			},
			abort: function () {
				r && r(t, !0)
			}
		}
	});
	var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
		Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
		Jn = /queueHooks$/,
		Gn = [function nr(e, t, n) {
			var r, i, o, a, s, l, u = this,
				c = {},
				p = e.style,
				f = e.nodeType && nn(e),
				d = x._data(e, "fxshow");
			for (r in n.queue || (null == (s = x._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
					s.unqueued || l()
				}), s.unqueued++, u.always(function () {
					u.always(function () {
						s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
					})
				})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function () {
					p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
				})), t)
				if (i = t[r], Vn.exec(i)) {
					if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
					c[r] = d && d[r] || x.style(e, r)
				}
			if (!x.isEmptyObject(c))
				for (r in d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function () {
						x(e).hide()
					}), u.done(function () {
						var t;
						for (t in x._removeData(e, "fxshow"), c) x.style(e, t, c[t])
					}), c) a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
		}],
		Qn = {
			"*": [function (e, t) {
				var n = this.createTween(e, t),
					r = n.cur(),
					i = Yn.exec(t),
					o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
					a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
					s = 1,
					l = 20;
				if (a && a[3] !== o)
					for (o = o || a[3], i = i || [], a = +r || 1; a /= s = s || ".5", x.style(n.elem, e, a + o), s !== (s = n.cur() / r) && 1 !== s && --l;);
				return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
			}]
		};

	function Kn() {
		return setTimeout(function () {
			Xn = t
		}), Xn = x.now()
	}

	function Zn(e, t, n) {
		for (var r, i = (Qn[t] || []).concat(Qn["*"]), o = 0, a = i.length; o < a; o++)
			if (r = i[o].call(n, t, e)) return r
	}

	function er(e, t, n) {
		var r, i, o = 0,
			a = Gn.length,
			s = x.Deferred().always(function () {
				delete l.elem
			}),
			l = function () {
				if (i) return !1;
				for (var t = Xn || Kn(), n = Math.max(0, u.startTime + u.duration - t), o = 1 - (n / u.duration || 0), a = 0, l = u.tweens.length; a < l; a++) u.tweens[a].run(o);
				return s.notifyWith(e, [u, o, n]), o < 1 && l ? n : (s.resolveWith(e, [u]), !1)
			},
			u = s.promise({
				elem: e,
				props: x.extend({}, t),
				opts: x.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Xn || Kn(),
				duration: n.duration,
				tweens: [],
				createTween: function (t, n) {
					var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
					return u.tweens.push(r), r
				},
				stop: function (t) {
					var n = 0,
						r = t ? u.tweens.length : 0;
					if (i) return this;
					for (i = !0; n < r; n++) u.tweens[n].run(1);
					return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
				}
			}),
			c = u.props;
		for (function tr(e, t) {
				var n, r, i, o, a;
				for (n in e)
					if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = x.cssHooks[r]) && "expand" in a)
						for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
					else t[r] = i
			}(c, u.opts.specialEasing); o < a; o++)
			if (r = Gn[o].call(u, e, c, u.opts)) return r;
		return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
			elem: e,
			anim: u,
			queue: u.opts.queue
		})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
	}

	function rr(e, t, n, r, i) {
		return new rr.prototype.init(e, t, n, r, i)
	}

	function ir(e, t) {
		var n, r = {
				height: e
			},
			i = 0;
		for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = Zt[i])] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}

	function or(e) {
		return x.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
	}
	x.Animation = x.extend(er, {
		tweener: function (e, t) {
			x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			for (var n, r = 0, i = e.length; r < i; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
		},
		prefilter: function (e, t) {
			t ? Gn.unshift(e) : Gn.push(e)
		}
	}), ((x.Tween = rr).prototype = {
		constructor: rr,
		init: function (e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
		},
		cur: function () {
			var e = rr.propHooks[this.prop];
			return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
		},
		run: function (e) {
			var t, n = rr.propHooks[this.prop];
			return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
		}
	}).init.prototype = rr.prototype, (rr.propHooks = {
		_default: {
			get: function (e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
			},
			set: function (e) {
				x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}).scrollTop = rr.propHooks.scrollLeft = {
		set: function (e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, x.each(["toggle", "show", "hide"], function (e, t) {
		var n = x.fn[t];
		x.fn[t] = function (e, r, i) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
		}
	}), x.fn.extend({
		fadeTo: function (e, t, n, r) {
			return this.filter(nn).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function (e, t, n, r) {
			var i = x.isEmptyObject(e),
				o = x.speed(t, n, r),
				a = function () {
					var t = er(this, x.extend({}, e), o);
					(i || x._data(this, "finish")) && t.stop(!0)
				};
			return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function (e, n, r) {
			var i = function (e) {
				var t = e.stop;
				delete e.stop, t(r)
			};
			return "string" != typeof e && (r = n, n = e, e = t), n && !1 !== e && this.queue(e || "fx", []), this.each(function () {
				var t = !0,
					n = null != e && e + "queueHooks",
					o = x.timers,
					a = x._data(this);
				if (n) a[n] && a[n].stop && i(a[n]);
				else
					for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
				for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
				(t || !r) && x.dequeue(this, e)
			})
		},
		finish: function (e) {
			return !1 !== e && (e = e || "fx"), this.each(function () {
				var t, n = x._data(this),
					r = n[e + "queue"],
					i = n[e + "queueHooks"],
					o = x.timers,
					a = r ? r.length : 0;
				for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
				delete n.finish
			})
		}
	}), x.each({
		slideDown: ir("show"),
		slideUp: ir("hide"),
		slideToggle: ir("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function (e, t) {
		x.fn[e] = function (e, n, r) {
			return this.animate(t, e, n, r)
		}
	}), x.speed = function (e, t, n) {
		var r = e && "object" == typeof e ? x.extend({}, e) : {
			complete: n || !n && t || x.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !x.isFunction(t) && t
		};
		return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || !0 === r.queue) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
			x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
		}, r
	}, x.easing = {
		linear: function (e) {
			return e
		},
		swing: function (e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function () {
		var e, n = x.timers,
			r = 0;
		for (Xn = x.now(); n.length > r; r++)(e = n[r])() || n[r] !== e || n.splice(r--, 1);
		n.length || x.fx.stop(), Xn = t
	}, x.fx.timer = function (e) {
		e() && x.timers.push(e) && x.fx.start()
	}, x.fx.interval = 13, x.fx.start = function () {
		Un || (Un = setInterval(x.fx.tick, x.fx.interval))
	}, x.fx.stop = function () {
		clearInterval(Un), Un = null
	}, x.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
		return x.grep(x.timers, function (t) {
			return e === t.elem
		}).length
	}), x.fn.offset = function (e) {
		if (arguments.length) return e === t ? this : this.each(function (t) {
			x.offset.setOffset(this, e, t)
		});
		var n, r, o = {
				top: 0,
				left: 0
			},
			a = this[0],
			s = a && a.ownerDocument;
		return s ? (n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
			top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
			left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
		}) : o) : void 0
	}, x.offset = {
		setOffset: function (e, t, n) {
			var r = x.css(e, "position");
			"static" === r && (e.style.position = "relative");
			var p, f, i = x(e),
				o = i.offset(),
				a = x.css(e, "top"),
				s = x.css(e, "left"),
				u = {},
				c = {};
			("absolute" === r || "fixed" === r) && -1 < x.inArray("auto", [a, s]) ? (p = (c = i.position()).top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
		}
	}, x.fn.extend({
		position: function () {
			if (this[0]) {
				var e, t, n = {
						top: 0,
						left: 0
					},
					r = this[0];
				return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - x.css(r, "marginTop", !0),
					left: t.left - n.left - x.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				for (var e = this.offsetParent || s; e && !x.nodeName(e, "html") && "static" === x.css(e, "position");) e = e.offsetParent;
				return e || s
			})
		}
	}), x.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (e, n) {
		var r = /Y/.test(n);
		x.fn[e] = function (i) {
			return x.access(this, function (e, i, o) {
				var a = or(e);
				return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
			}, e, i, arguments.length, null)
		}
	}), x.each({
		Height: "height",
		Width: "width"
	}, function (e, n) {
		x.each({
			padding: "inner" + e,
			content: n,
			"": "outer" + e
		}, function (r, i) {
			x.fn[i] = function (i, o) {
				var a = arguments.length && (r || "boolean" != typeof i),
					s = r || (!0 === i || !0 === o ? "margin" : "border");
				return x.access(this, function (n, r, i) {
					var o;
					return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
				}, n, a ? i : t, a, null)
			}
		})
	}), x.fn.size = function () {
		return this.length
	}, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function () {
		return x
	}))
}(window),
function ($, undefined) {
	var orig, removeData, uuid = 0,
		runiqueId = /^ui-id-\d+$/;

	function focusable(element, isTabIndexNotNaN) {
		var map, mapName, img, nodeName = element.nodeName.toLowerCase();
		return "area" === nodeName ? (mapName = (map = element.parentNode).name, !(!element.href || !mapName || "map" !== map.nodeName.toLowerCase()) && (!!(img = $("img[usemap=#" + mapName + "]")[0]) && visible(img))) : (/input|select|textarea|button|object/.test(nodeName) ? !element.disabled : "a" === nodeName && element.href || isTabIndexNotNaN) && visible(element)
	}

	function visible(element) {
		return $.expr.filters.visible(element) && !$(element).parents().addBack().filter(function () {
			return "hidden" === $.css(this, "visibility")
		}).length
	}
	$.ui = $.ui || {}, $.extend($.ui, {
		version: "1.10.4",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), $.fn.extend({
		focus: (orig = $.fn.focus, function (delay, fn) {
			return "number" == typeof delay ? this.each(function () {
				var elem = this;
				setTimeout(function () {
					$(elem).focus(), fn && fn.call(elem)
				}, delay)
			}) : orig.apply(this, arguments)
		}),
		scrollParent: function () {
			var scrollParent;
			return scrollParent = $.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
				return /(relative|absolute|fixed)/.test($.css(this, "position")) && /(auto|scroll)/.test($.css(this, "overflow") + $.css(this, "overflow-y") + $.css(this, "overflow-x"))
			}).eq(0) : this.parents().filter(function () {
				return /(auto|scroll)/.test($.css(this, "overflow") + $.css(this, "overflow-y") + $.css(this, "overflow-x"))
			}).eq(0), /fixed/.test(this.css("position")) || !scrollParent.length ? $(document) : scrollParent
		},
		zIndex: function (zIndex) {
			if (void 0 !== zIndex) return this.css("zIndex", zIndex);
			if (this.length)
				for (var position, value, elem = $(this[0]); elem.length && elem[0] !== document;) {
					if (("absolute" === (position = elem.css("position")) || "relative" === position || "fixed" === position) && (value = parseInt(elem.css("zIndex"), 10), !isNaN(value) && 0 !== value)) return value;
					elem = elem.parent()
				}
			return 0
		},
		uniqueId: function () {
			return this.each(function () {
				this.id || (this.id = "ui-id-" + ++uuid)
			})
		},
		removeUniqueId: function () {
			return this.each(function () {
				runiqueId.test(this.id) && $(this).removeAttr("id")
			})
		}
	}), $.extend($.expr[":"], {
		data: $.expr.createPseudo ? $.expr.createPseudo(function (dataName) {
			return function (elem) {
				return !!$.data(elem, dataName)
			}
		}) : function (elem, i, match) {
			return !!$.data(elem, match[3])
		},
		focusable: function (element) {
			return focusable(element, !isNaN($.attr(element, "tabindex")))
		},
		tabbable: function (element) {
			var tabIndex = $.attr(element, "tabindex"),
				isTabIndexNaN = isNaN(tabIndex);
			return (isTabIndexNaN || 0 <= tabIndex) && focusable(element, !isTabIndexNaN)
		}
	}), $("<a>").outerWidth(1).jquery || $.each(["Width", "Height"], function (i, name) {
		var side = "Width" === name ? ["Left", "Right"] : ["Top", "Bottom"],
			type = name.toLowerCase(),
			orig = {
				innerWidth: $.fn.innerWidth,
				innerHeight: $.fn.innerHeight,
				outerWidth: $.fn.outerWidth,
				outerHeight: $.fn.outerHeight
			};

		function reduce(elem, size, border, margin) {
			return $.each(side, function () {
				size -= parseFloat($.css(elem, "padding" + this)) || 0, border && (size -= parseFloat($.css(elem, "border" + this + "Width")) || 0), margin && (size -= parseFloat($.css(elem, "margin" + this)) || 0)
			}), size
		}
		$.fn["inner" + name] = function (size) {
			return void 0 === size ? orig["inner" + name].call(this) : this.each(function () {
				$(this).css(type, reduce(this, size) + "px")
			})
		}, $.fn["outer" + name] = function (size, margin) {
			return "number" != typeof size ? orig["outer" + name].call(this, size) : this.each(function () {
				$(this).css(type, reduce(this, size, !0, margin) + "px")
			})
		}
	}), $.fn.addBack || ($.fn.addBack = function (selector) {
		return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector))
	}), $("<a>").data("a-b", "a").removeData("a-b").data("a-b") && ($.fn.removeData = (removeData = $.fn.removeData, function (key) {
		return arguments.length ? removeData.call(this, $.camelCase(key)) : removeData.call(this)
	})), $.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), $.support.selectstart = "onselectstart" in document.createElement("div"), $.fn.extend({
		disableSelection: function () {
			return this.bind(($.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (event) {
				event.preventDefault()
			})
		},
		enableSelection: function () {
			return this.unbind(".ui-disableSelection")
		}
	}), $.extend($.ui, {
		plugin: {
			add: function (module, option, set) {
				var i, proto = $.ui[module].prototype;
				for (i in set) proto.plugins[i] = proto.plugins[i] || [], proto.plugins[i].push([option, set[i]])
			},
			call: function (instance, name, args) {
				var i, set = instance.plugins[name];
				if (set && instance.element[0].parentNode && 11 !== instance.element[0].parentNode.nodeType)
					for (i = 0; i < set.length; i++) instance.options[set[i][0]] && set[i][1].apply(instance.element, args)
			}
		},
		hasScroll: function (el, a) {
			if ("hidden" === $(el).css("overflow")) return !1;
			var has, scroll = a && "left" === a ? "scrollLeft" : "scrollTop";
			return 0 < el[scroll] || (el[scroll] = 1, has = 0 < el[scroll], el[scroll] = 0, has)
		}
	})
}(jQuery),
function ($, undefined) {
	var uuid = 0,
		slice = Array.prototype.slice,
		_cleanData = $.cleanData;
	$.cleanData = function (elems) {
		for (var elem, i = 0; null != (elem = elems[i]); i++) try {
			$(elem).triggerHandler("remove")
		} catch (e) {}
		_cleanData(elems)
	}, $.widget = function (name, base, prototype) {
		var fullName, existingConstructor, constructor, basePrototype, proxiedPrototype = {},
			namespace = name.split(".")[0];
		name = name.split(".")[1], fullName = namespace + "-" + name, prototype || (prototype = base, base = $.Widget), $.expr[":"][fullName.toLowerCase()] = function (elem) {
			return !!$.data(elem, fullName)
		}, $[namespace] = $[namespace] || {}, existingConstructor = $[namespace][name], constructor = $[namespace][name] = function (options, element) {
			if (!this._createWidget) return new constructor(options, element);
			arguments.length && this._createWidget(options, element)
		}, $.extend(constructor, existingConstructor, {
			version: prototype.version,
			_proto: $.extend({}, prototype),
			_childConstructors: []
		}), (basePrototype = new base).options = $.widget.extend({}, basePrototype.options), $.each(prototype, function (prop, value) {
			var _super, _superApply;
			$.isFunction(value) ? proxiedPrototype[prop] = (_super = function () {
				return base.prototype[prop].apply(this, arguments)
			}, _superApply = function (args) {
				return base.prototype[prop].apply(this, args)
			}, function () {
				var returnValue, __super = this._super,
					__superApply = this._superApply;
				return this._super = _super, this._superApply = _superApply, returnValue = value.apply(this, arguments), this._super = __super, this._superApply = __superApply, returnValue
			}) : proxiedPrototype[prop] = value
		}), constructor.prototype = $.widget.extend(basePrototype, {
			widgetEventPrefix: existingConstructor && basePrototype.widgetEventPrefix || name
		}, proxiedPrototype, {
			constructor: constructor,
			namespace: namespace,
			widgetName: name,
			widgetFullName: fullName
		}), existingConstructor ? ($.each(existingConstructor._childConstructors, function (i, child) {
			var childPrototype = child.prototype;
			$.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto)
		}), delete existingConstructor._childConstructors) : base._childConstructors.push(constructor), $.widget.bridge(name, constructor)
	}, $.widget.extend = function (target) {
		for (var key, value, input = slice.call(arguments, 1), inputIndex = 0, inputLength = input.length; inputIndex < inputLength; inputIndex++)
			for (key in input[inputIndex]) value = input[inputIndex][key], input[inputIndex].hasOwnProperty(key) && void 0 !== value && ($.isPlainObject(value) ? target[key] = $.isPlainObject(target[key]) ? $.widget.extend({}, target[key], value) : $.widget.extend({}, value) : target[key] = value);
		return target
	}, $.widget.bridge = function (name, object) {
		var fullName = object.prototype.widgetFullName || name;
		$.fn[name] = function (options) {
			var isMethodCall = "string" == typeof options,
				args = slice.call(arguments, 1),
				returnValue = this;
			return options = !isMethodCall && args.length ? $.widget.extend.apply(null, [options].concat(args)) : options, isMethodCall ? this.each(function () {
				var methodValue, instance = $.data(this, fullName);
				return instance ? $.isFunction(instance[options]) && "_" !== options.charAt(0) ? (methodValue = instance[options].apply(instance, args)) !== instance && void 0 !== methodValue ? (returnValue = methodValue && methodValue.jquery ? returnValue.pushStack(methodValue.get()) : methodValue, !1) : void 0 : $.error("no such method '" + options + "' for " + name + " widget instance") : $.error("cannot call methods on " + name + " prior to initialization; attempted to call method '" + options + "'")
			}) : this.each(function () {
				var instance = $.data(this, fullName);
				instance ? instance.option(options || {})._init() : $.data(this, fullName, new object(options, this))
			}), returnValue
		}
	}, $.Widget = function () {}, $.Widget._childConstructors = [], $.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: !1,
			create: null
		},
		_createWidget: function (options, element) {
			element = $(element || this.defaultElement || this)[0], this.element = $(element), this.uuid = uuid++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = $.widget.extend({}, this.options, this._getCreateOptions(), options), this.bindings = $(), this.hoverable = $(), this.focusable = $(), element !== this && ($.data(element, this.widgetFullName, this), this._on(!0, this.element, {
				remove: function (event) {
					event.target === element && this.destroy()
				}
			}), this.document = $(element.style ? element.ownerDocument : element.document || element), this.window = $(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
		},
		_getCreateOptions: $.noop,
		_getCreateEventData: $.noop,
		_create: $.noop,
		_init: $.noop,
		destroy: function () {
			this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
		},
		_destroy: $.noop,
		widget: function () {
			return this.element
		},
		option: function (key, value) {
			var parts, curOption, i, options = key;
			if (0 === arguments.length) return $.widget.extend({}, this.options);
			if ("string" == typeof key)
				if (options = {}, key = (parts = key.split(".")).shift(), parts.length) {
					for (curOption = options[key] = $.widget.extend({}, this.options[key]), i = 0; i < parts.length - 1; i++) curOption[parts[i]] = curOption[parts[i]] || {}, curOption = curOption[parts[i]];
					if (key = parts.pop(), 1 === arguments.length) return void 0 === curOption[key] ? null : curOption[key];
					curOption[key] = value
				} else {
					if (1 === arguments.length) return void 0 === this.options[key] ? null : this.options[key];
					options[key] = value
				}
			return this._setOptions(options), this
		},
		_setOptions: function (options) {
			var key;
			for (key in options) this._setOption(key, options[key]);
			return this
		},
		_setOption: function (key, value) {
			return this.options[key] = value, "disabled" === key && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!value).attr("aria-disabled", value), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
		},
		enable: function () {
			return this._setOption("disabled", !1)
		},
		disable: function () {
			return this._setOption("disabled", !0)
		},
		_on: function (suppressDisabledCheck, element, handlers) {
			var delegateElement, instance = this;
			"boolean" != typeof suppressDisabledCheck && (handlers = element, element = suppressDisabledCheck, suppressDisabledCheck = !1), handlers ? (element = delegateElement = $(element), this.bindings = this.bindings.add(element)) : (handlers = element, element = this.element, delegateElement = this.widget()), $.each(handlers, function (event, handler) {
				function handlerProxy() {
					if (suppressDisabledCheck || !0 !== instance.options.disabled && !$(this).hasClass("ui-state-disabled")) return ("string" == typeof handler ? instance[handler] : handler).apply(instance, arguments)
				}
				"string" != typeof handler && (handlerProxy.guid = handler.guid = handler.guid || handlerProxy.guid || $.guid++);
				var match = event.match(/^(\w+)\s*(.*)$/),
					eventName = match[1] + instance.eventNamespace,
					selector = match[2];
				selector ? delegateElement.delegate(selector, eventName, handlerProxy) : element.bind(eventName, handlerProxy)
			})
		},
		_off: function (element, eventName) {
			eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, element.unbind(eventName).undelegate(eventName)
		},
		_delay: function (handler, delay) {
			var instance = this;
			return setTimeout(function handlerProxy() {
				return ("string" == typeof handler ? instance[handler] : handler).apply(instance, arguments)
			}, delay || 0)
		},
		_hoverable: function (element) {
			this.hoverable = this.hoverable.add(element), this._on(element, {
				mouseenter: function (event) {
					$(event.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function (event) {
					$(event.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function (element) {
			this.focusable = this.focusable.add(element), this._on(element, {
				focusin: function (event) {
					$(event.currentTarget).addClass("ui-state-focus")
				},
				focusout: function (event) {
					$(event.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function (type, event, data) {
			var prop, orig, callback = this.options[type];
			if (data = data || {}, (event = $.Event(event)).type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase(), event.target = this.element[0], orig = event.originalEvent)
				for (prop in orig) prop in event || (event[prop] = orig[prop]);
			return this.element.trigger(event, data), !($.isFunction(callback) && !1 === callback.apply(this.element[0], [event].concat(data)) || event.isDefaultPrevented())
		}
	}, $.each({
		show: "fadeIn",
		hide: "fadeOut"
	}, function (method, defaultEffect) {
		$.Widget.prototype["_" + method] = function (element, options, callback) {
			"string" == typeof options && (options = {
				effect: options
			});
			var hasOptions, effectName = options ? !0 === options || "number" == typeof options ? defaultEffect : options.effect || defaultEffect : method;
			"number" == typeof (options = options || {}) && (options = {
				duration: options
			}), hasOptions = !$.isEmptyObject(options), options.complete = callback, options.delay && element.delay(options.delay), hasOptions && $.effects && $.effects.effect[effectName] ? element[method](options) : effectName !== method && element[effectName] ? element[effectName](options.duration, options.easing, callback) : element.queue(function (next) {
				$(this)[method](), callback && callback.call(element[0]), next()
			})
		}
	})
}(jQuery),
function ($, undefined) {
	$.ui = $.ui || {};
	var cachedScrollbarWidth, max = Math.max,
		abs = Math.abs,
		round = Math.round,
		rhorizontal = /left|center|right/,
		rvertical = /top|center|bottom/,
		roffset = /[\+\-]\d+(\.[\d]+)?%?/,
		rposition = /^\w+/,
		rpercent = /%$/,
		_position = $.fn.position;

	function getOffsets(offsets, width, height) {
		return [parseFloat(offsets[0]) * (rpercent.test(offsets[0]) ? width / 100 : 1), parseFloat(offsets[1]) * (rpercent.test(offsets[1]) ? height / 100 : 1)]
	}

	function parseCss(element, property) {
		return parseInt($.css(element, property), 10) || 0
	}
	$.position = {
			scrollbarWidth: function () {
				if (void 0 !== cachedScrollbarWidth) return cachedScrollbarWidth;
				var w1, w2, div = $("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
					innerDiv = div.children()[0];
				return $("body").append(div), w1 = innerDiv.offsetWidth, div.css("overflow", "scroll"), w1 === (w2 = innerDiv.offsetWidth) && (w2 = div[0].clientWidth), div.remove(), cachedScrollbarWidth = w1 - w2
			},
			getScrollInfo: function (within) {
				var overflowX = within.isWindow || within.isDocument ? "" : within.element.css("overflow-x"),
					overflowY = within.isWindow || within.isDocument ? "" : within.element.css("overflow-y"),
					hasOverflowX = "scroll" === overflowX || "auto" === overflowX && within.width < within.element[0].scrollWidth;
				return {
					width: "scroll" === overflowY || "auto" === overflowY && within.height < within.element[0].scrollHeight ? $.position.scrollbarWidth() : 0,
					height: hasOverflowX ? $.position.scrollbarWidth() : 0
				}
			},
			getWithinInfo: function (element) {
				var withinElement = $(element || window),
					isWindow = $.isWindow(withinElement[0]);
				return {
					element: withinElement,
					isWindow: isWindow,
					isDocument: !!withinElement[0] && 9 === withinElement[0].nodeType,
					offset: withinElement.offset() || {
						left: 0,
						top: 0
					},
					scrollLeft: withinElement.scrollLeft(),
					scrollTop: withinElement.scrollTop(),
					width: isWindow ? withinElement.width() : withinElement.outerWidth(),
					height: isWindow ? withinElement.height() : withinElement.outerHeight()
				}
			}
		}, $.fn.position = function (options) {
			if (!options || !options.of) return _position.apply(this, arguments);
			options = $.extend({}, options);
			var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions, target = $(options.of),
				within = $.position.getWithinInfo(options.within),
				scrollInfo = $.position.getScrollInfo(within),
				collision = (options.collision || "flip").split(" "),
				offsets = {};
			return dimensions = function getDimensions(elem) {
				var raw = elem[0];
				return 9 === raw.nodeType ? {
					width: elem.width(),
					height: elem.height(),
					offset: {
						top: 0,
						left: 0
					}
				} : $.isWindow(raw) ? {
					width: elem.width(),
					height: elem.height(),
					offset: {
						top: elem.scrollTop(),
						left: elem.scrollLeft()
					}
				} : raw.preventDefault ? {
					width: 0,
					height: 0,
					offset: {
						top: raw.pageY,
						left: raw.pageX
					}
				} : {
					width: elem.outerWidth(),
					height: elem.outerHeight(),
					offset: elem.offset()
				}
			}(target), target[0].preventDefault && (options.at = "left top"), targetWidth = dimensions.width, targetHeight = dimensions.height, targetOffset = dimensions.offset, basePosition = $.extend({}, targetOffset), $.each(["my", "at"], function () {
				var horizontalOffset, verticalOffset, pos = (options[this] || "").split(" ");
				1 === pos.length && (pos = rhorizontal.test(pos[0]) ? pos.concat(["center"]) : rvertical.test(pos[0]) ? ["center"].concat(pos) : ["center", "center"]), pos[0] = rhorizontal.test(pos[0]) ? pos[0] : "center", pos[1] = rvertical.test(pos[1]) ? pos[1] : "center", horizontalOffset = roffset.exec(pos[0]), verticalOffset = roffset.exec(pos[1]), offsets[this] = [horizontalOffset ? horizontalOffset[0] : 0, verticalOffset ? verticalOffset[0] : 0], options[this] = [rposition.exec(pos[0])[0], rposition.exec(pos[1])[0]]
			}), 1 === collision.length && (collision[1] = collision[0]), "right" === options.at[0] ? basePosition.left += targetWidth : "center" === options.at[0] && (basePosition.left += targetWidth / 2), "bottom" === options.at[1] ? basePosition.top += targetHeight : "center" === options.at[1] && (basePosition.top += targetHeight / 2), atOffset = getOffsets(offsets.at, targetWidth, targetHeight), basePosition.left += atOffset[0], basePosition.top += atOffset[1], this.each(function () {
				var collisionPosition, using, elem = $(this),
					elemWidth = elem.outerWidth(),
					elemHeight = elem.outerHeight(),
					marginLeft = parseCss(this, "marginLeft"),
					marginTop = parseCss(this, "marginTop"),
					collisionWidth = elemWidth + marginLeft + parseCss(this, "marginRight") + scrollInfo.width,
					collisionHeight = elemHeight + marginTop + parseCss(this, "marginBottom") + scrollInfo.height,
					position = $.extend({}, basePosition),
					myOffset = getOffsets(offsets.my, elem.outerWidth(), elem.outerHeight());
				"right" === options.my[0] ? position.left -= elemWidth : "center" === options.my[0] && (position.left -= elemWidth / 2), "bottom" === options.my[1] ? position.top -= elemHeight : "center" === options.my[1] && (position.top -= elemHeight / 2), position.left += myOffset[0], position.top += myOffset[1], $.support.offsetFractions || (position.left = round(position.left), position.top = round(position.top)), collisionPosition = {
					marginLeft: marginLeft,
					marginTop: marginTop
				}, $.each(["left", "top"], function (i, dir) {
					$.ui.position[collision[i]] && $.ui.position[collision[i]][dir](position, {
						targetWidth: targetWidth,
						targetHeight: targetHeight,
						elemWidth: elemWidth,
						elemHeight: elemHeight,
						collisionPosition: collisionPosition,
						collisionWidth: collisionWidth,
						collisionHeight: collisionHeight,
						offset: [atOffset[0] + myOffset[0], atOffset[1] + myOffset[1]],
						my: options.my,
						at: options.at,
						within: within,
						elem: elem
					})
				}), options.using && (using = function (props) {
					var left = targetOffset.left - position.left,
						right = left + targetWidth - elemWidth,
						top = targetOffset.top - position.top,
						bottom = top + targetHeight - elemHeight,
						feedback = {
							target: {
								element: target,
								left: targetOffset.left,
								top: targetOffset.top,
								width: targetWidth,
								height: targetHeight
							},
							element: {
								element: elem,
								left: position.left,
								top: position.top,
								width: elemWidth,
								height: elemHeight
							},
							horizontal: right < 0 ? "left" : 0 < left ? "right" : "center",
							vertical: bottom < 0 ? "top" : 0 < top ? "bottom" : "middle"
						};
					targetWidth < elemWidth && abs(left + right) < targetWidth && (feedback.horizontal = "center"), targetHeight < elemHeight && abs(top + bottom) < targetHeight && (feedback.vertical = "middle"), max(abs(left), abs(right)) > max(abs(top), abs(bottom)) ? feedback.important = "horizontal" : feedback.important = "vertical", options.using.call(this, props, feedback)
				}), elem.offset($.extend(position, {
					using: using
				}))
			})
		}, $.ui.position = {
			fit: {
				left: function (position, data) {
					var newOverRight, within = data.within,
						withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
						outerWidth = within.width,
						collisionPosLeft = position.left - data.collisionPosition.marginLeft,
						overLeft = withinOffset - collisionPosLeft,
						overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset;
					data.collisionWidth > outerWidth ? 0 < overLeft && overRight <= 0 ? (newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset, position.left += overLeft - newOverRight) : position.left = 0 < overRight && overLeft <= 0 ? withinOffset : overRight < overLeft ? withinOffset + outerWidth - data.collisionWidth : withinOffset : 0 < overLeft ? position.left += overLeft : 0 < overRight ? position.left -= overRight : position.left = max(position.left - collisionPosLeft, position.left)
				},
				top: function (position, data) {
					var newOverBottom, within = data.within,
						withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
						outerHeight = data.within.height,
						collisionPosTop = position.top - data.collisionPosition.marginTop,
						overTop = withinOffset - collisionPosTop,
						overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset;
					data.collisionHeight > outerHeight ? 0 < overTop && overBottom <= 0 ? (newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset, position.top += overTop - newOverBottom) : position.top = 0 < overBottom && overTop <= 0 ? withinOffset : overBottom < overTop ? withinOffset + outerHeight - data.collisionHeight : withinOffset : 0 < overTop ? position.top += overTop : 0 < overBottom ? position.top -= overBottom : position.top = max(position.top - collisionPosTop, position.top)
				}
			},
			flip: {
				left: function (position, data) {
					var newOverRight, newOverLeft, within = data.within,
						withinOffset = within.offset.left + within.scrollLeft,
						outerWidth = within.width,
						offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
						collisionPosLeft = position.left - data.collisionPosition.marginLeft,
						overLeft = collisionPosLeft - offsetLeft,
						overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
						myOffset = "left" === data.my[0] ? -data.elemWidth : "right" === data.my[0] ? data.elemWidth : 0,
						atOffset = "left" === data.at[0] ? data.targetWidth : "right" === data.at[0] ? -data.targetWidth : 0,
						offset = -2 * data.offset[0];
					overLeft < 0 ? ((newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset) < 0 || newOverRight < abs(overLeft)) && (position.left += myOffset + atOffset + offset) : 0 < overRight && (0 < (newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft) || abs(newOverLeft) < overRight) && (position.left += myOffset + atOffset + offset)
				},
				top: function (position, data) {
					var newOverTop, newOverBottom, within = data.within,
						withinOffset = within.offset.top + within.scrollTop,
						outerHeight = within.height,
						offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
						collisionPosTop = position.top - data.collisionPosition.marginTop,
						overTop = collisionPosTop - offsetTop,
						overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
						myOffset = "top" === data.my[1] ? -data.elemHeight : "bottom" === data.my[1] ? data.elemHeight : 0,
						atOffset = "top" === data.at[1] ? data.targetHeight : "bottom" === data.at[1] ? -data.targetHeight : 0,
						offset = -2 * data.offset[1];
					overTop < 0 ? (newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset, position.top + myOffset + atOffset + offset > overTop && (newOverBottom < 0 || newOverBottom < abs(overTop)) && (position.top += myOffset + atOffset + offset)) : 0 < overBottom && (newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop, position.top + myOffset + atOffset + offset > overBottom && (0 < newOverTop || abs(newOverTop) < overBottom) && (position.top += myOffset + atOffset + offset))
				}
			},
			flipfit: {
				left: function () {
					$.ui.position.flip.left.apply(this, arguments), $.ui.position.fit.left.apply(this, arguments)
				},
				top: function () {
					$.ui.position.flip.top.apply(this, arguments), $.ui.position.fit.top.apply(this, arguments)
				}
			}
		},
		function () {
			var testElement, testElementParent, testElementStyle, offsetLeft, i, body = document.getElementsByTagName("body")[0],
				div = document.createElement("div");
			for (i in testElement = document.createElement(body ? "div" : "body"), testElementStyle = {
					visibility: "hidden",
					width: 0,
					height: 0,
					border: 0,
					margin: 0,
					background: "none"
				}, body && $.extend(testElementStyle, {
					position: "absolute",
					left: "-1000px",
					top: "-1000px"
				}), testElementStyle) testElement.style[i] = testElementStyle[i];
			testElement.appendChild(div), (testElementParent = body || document.documentElement).insertBefore(testElement, testElementParent.firstChild), div.style.cssText = "position: absolute; left: 10.7432222px;", offsetLeft = $(div).offset().left, $.support.offsetFractions = 10 < offsetLeft && offsetLeft < 11, testElement.innerHTML = "", testElementParent.removeChild(testElement)
		}()
}(jQuery),
function ($, undefined) {
	$.widget("ui.menu", {
		version: "1.10.4",
		defaultElement: "<ul>",
		delay: 300,
		options: {
			icons: {
				submenu: "ui-icon-carat-1-e"
			},
			menus: "ul",
			position: {
				my: "left top",
				at: "right top"
			},
			role: "menu",
			blur: null,
			focus: null,
			select: null
		},
		_create: function () {
			this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
				role: this.options.role,
				tabIndex: 0
			}).bind("click" + this.eventNamespace, $.proxy(function (event) {
				this.options.disabled && event.preventDefault()
			}, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
				"mousedown .ui-menu-item > a": function (event) {
					event.preventDefault()
				},
				"click .ui-state-disabled > a": function (event) {
					event.preventDefault()
				},
				"click .ui-menu-item:has(a)": function (event) {
					var target = $(event.target).closest(".ui-menu-item");
					!this.mouseHandled && target.not(".ui-state-disabled").length && (this.select(event), event.isPropagationStopped() || (this.mouseHandled = !0), target.has(".ui-menu").length ? this.expand(event) : !this.element.is(":focus") && $(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
				},
				"mouseenter .ui-menu-item": function (event) {
					var target = $(event.currentTarget);
					target.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(event, target)
				},
				mouseleave: "collapseAll",
				"mouseleave .ui-menu": "collapseAll",
				focus: function (event, keepActiveItem) {
					var item = this.active || this.element.children(".ui-menu-item").eq(0);
					keepActiveItem || this.focus(event, item)
				},
				blur: function (event) {
					this._delay(function () {
						$.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(event)
					})
				},
				keydown: "_keydown"
			}), this.refresh(), this._on(this.document, {
				click: function (event) {
					$(event.target).closest(".ui-menu").length || this.collapseAll(event), this.mouseHandled = !1
				}
			})
		},
		_destroy: function () {
			this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
				var elem = $(this);
				elem.data("ui-menu-submenu-carat") && elem.remove()
			}), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
		},
		_keydown: function (event) {
			var match, prev, character, skip, regex, preventDefault = !0;

			function escape(value) {
				return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
			}
			switch (event.keyCode) {
				case $.ui.keyCode.PAGE_UP:
					this.previousPage(event);
					break;
				case $.ui.keyCode.PAGE_DOWN:
					this.nextPage(event);
					break;
				case $.ui.keyCode.HOME:
					this._move("first", "first", event);
					break;
				case $.ui.keyCode.END:
					this._move("last", "last", event);
					break;
				case $.ui.keyCode.UP:
					this.previous(event);
					break;
				case $.ui.keyCode.DOWN:
					this.next(event);
					break;
				case $.ui.keyCode.LEFT:
					this.collapse(event);
					break;
				case $.ui.keyCode.RIGHT:
					this.active && !this.active.is(".ui-state-disabled") && this.expand(event);
					break;
				case $.ui.keyCode.ENTER:
				case $.ui.keyCode.SPACE:
					this._activate(event);
					break;
				case $.ui.keyCode.ESCAPE:
					this.collapse(event);
					break;
				default:
					preventDefault = !1, prev = this.previousFilter || "", character = String.fromCharCode(event.keyCode), skip = !1, clearTimeout(this.filterTimer), character === prev ? skip = !0 : character = prev + character, regex = new RegExp("^" + escape(character), "i"), match = this.activeMenu.children(".ui-menu-item").filter(function () {
						return regex.test($(this).children("a").text())
					}), (match = skip && -1 !== match.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : match).length || (character = String.fromCharCode(event.keyCode), regex = new RegExp("^" + escape(character), "i"), match = this.activeMenu.children(".ui-menu-item").filter(function () {
						return regex.test($(this).children("a").text())
					})), match.length ? (this.focus(event, match), 1 < match.length ? (this.previousFilter = character, this.filterTimer = this._delay(function () {
						delete this.previousFilter
					}, 1e3)) : delete this.previousFilter) : delete this.previousFilter
			}
			preventDefault && event.preventDefault()
		},
		_activate: function (event) {
			this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(event) : this.select(event))
		},
		refresh: function () {
			var menus, icon = this.options.icons.submenu,
				submenus = this.element.find(this.options.menus);
			this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), submenus.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
				role: this.options.role,
				"aria-hidden": "true",
				"aria-expanded": "false"
			}).each(function () {
				var menu = $(this),
					item = menu.prev("a"),
					submenuCarat = $("<span>").addClass("ui-menu-icon ui-icon " + icon).data("ui-menu-submenu-carat", !0);
				item.attr("aria-haspopup", "true").prepend(submenuCarat), menu.attr("aria-labelledby", item.attr("id"))
			}), (menus = submenus.add(this.element)).children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
				tabIndex: -1,
				role: this._itemRole()
			}), menus.children(":not(.ui-menu-item)").each(function () {
				var item = $(this);
				/[^\-\u2014\u2013\s]/.test(item.text()) || item.addClass("ui-widget-content ui-menu-divider")
			}), menus.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !$.contains(this.element[0], this.active[0]) && this.blur()
		},
		_itemRole: function () {
			return {
				menu: "menuitem",
				listbox: "option"
			}[this.options.role]
		},
		_setOption: function (key, value) {
			"icons" === key && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(value.submenu), this._super(key, value)
		},
		focus: function (event, item) {
			var nested, focused;
			this.blur(event, event && "focus" === event.type), this._scrollIntoView(item), this.active = item.first(), focused = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", focused.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), event && "keydown" === event.type ? this._close() : this.timer = this._delay(function () {
				this._close()
			}, this.delay), (nested = item.children(".ui-menu")).length && event && /^mouse/.test(event.type) && this._startOpening(nested), this.activeMenu = item.parent(), this._trigger("focus", event, {
				item: item
			})
		},
		_scrollIntoView: function (item) {
			var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
			this._hasScroll() && (borderTop = parseFloat($.css(this.activeMenu[0], "borderTopWidth")) || 0, paddingTop = parseFloat($.css(this.activeMenu[0], "paddingTop")) || 0, offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop, scroll = this.activeMenu.scrollTop(), elementHeight = this.activeMenu.height(), itemHeight = item.height(), offset < 0 ? this.activeMenu.scrollTop(scroll + offset) : elementHeight < offset + itemHeight && this.activeMenu.scrollTop(scroll + offset - elementHeight + itemHeight))
		},
		blur: function (event, fromFocus) {
			fromFocus || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", event, {
				item: this.active
			}))
		},
		_startOpening: function (submenu) {
			clearTimeout(this.timer), "true" === submenu.attr("aria-hidden") && (this.timer = this._delay(function () {
				this._close(), this._open(submenu)
			}, this.delay))
		},
		_open: function (submenu) {
			var position = $.extend({ of: this.active
			}, this.options.position);
			clearTimeout(this.timer), this.element.find(".ui-menu").not(submenu.parents(".ui-menu")).hide().attr("aria-hidden", "true"), submenu.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(position)
		},
		collapseAll: function (event, all) {
			clearTimeout(this.timer), this.timer = this._delay(function () {
				var currentMenu = all ? this.element : $(event && event.target).closest(this.element.find(".ui-menu"));
				currentMenu.length || (currentMenu = this.element), this._close(currentMenu), this.blur(event), this.activeMenu = currentMenu
			}, this.delay)
		},
		_close: function (startMenu) {
			startMenu || (startMenu = this.active ? this.active.parent() : this.element), startMenu.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
		},
		collapse: function (event) {
			var newItem = this.active && this.active.parent().closest(".ui-menu-item", this.element);
			newItem && newItem.length && (this._close(), this.focus(event, newItem))
		},
		expand: function (event) {
			var newItem = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
			newItem && newItem.length && (this._open(newItem.parent()), this._delay(function () {
				this.focus(event, newItem)
			}))
		},
		next: function (event) {
			this._move("next", "first", event)
		},
		previous: function (event) {
			this._move("prev", "last", event)
		},
		isFirstItem: function () {
			return this.active && !this.active.prevAll(".ui-menu-item").length
		},
		isLastItem: function () {
			return this.active && !this.active.nextAll(".ui-menu-item").length
		},
		_move: function (direction, filter, event) {
			var next;
			this.active && (next = "first" === direction || "last" === direction ? this.active["first" === direction ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[direction + "All"](".ui-menu-item").eq(0)), next && next.length && this.active || (next = this.activeMenu.children(".ui-menu-item")[filter]()), this.focus(event, next)
		},
		nextPage: function (event) {
			var item, base, height;
			this.active ? this.isLastItem() || (this._hasScroll() ? (base = this.active.offset().top, height = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
				return (item = $(this)).offset().top - base - height < 0
			}), this.focus(event, item)) : this.focus(event, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())) : this.next(event)
		},
		previousPage: function (event) {
			var item, base, height;
			this.active ? this.isFirstItem() || (this._hasScroll() ? (base = this.active.offset().top, height = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
				return 0 < (item = $(this)).offset().top - base + height
			}), this.focus(event, item)) : this.focus(event, this.activeMenu.children(".ui-menu-item").first())) : this.next(event)
		},
		_hasScroll: function () {
			return this.element.outerHeight() < this.element.prop("scrollHeight")
		},
		select: function (event) {
			this.active = this.active || $(event.target).closest(".ui-menu-item");
			var ui = {
				item: this.active
			};
			this.active.has(".ui-menu").length || this.collapseAll(event, !0), this._trigger("select", event, ui)
		}
	})
}(jQuery),
function ($, undefined) {
	$.widget("ui.autocomplete", {
		version: "1.10.4",
		defaultElement: "<input>",
		options: {
			appendTo: null,
			autoFocus: !1,
			delay: 300,
			minLength: 1,
			position: {
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			source: null,
			change: null,
			close: null,
			focus: null,
			open: null,
			response: null,
			search: null,
			select: null
		},
		requestIndex: 0,
		pending: 0,
		_create: function () {
			var suppressKeyPress, suppressKeyPressRepeat, suppressInput, nodeName = this.element[0].nodeName.toLowerCase(),
				isTextarea = "textarea" === nodeName,
				isInput = "input" === nodeName;
			this.isMultiLine = !!isTextarea || !isInput && this.element.prop("isContentEditable"), this.valueMethod = this.element[isTextarea || isInput ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
				keydown: function (event) {
					if (this.element.prop("readOnly")) suppressKeyPressRepeat = suppressInput = suppressKeyPress = !0;
					else {
						suppressKeyPressRepeat = suppressInput = suppressKeyPress = !1;
						var keyCode = $.ui.keyCode;
						switch (event.keyCode) {
							case keyCode.PAGE_UP:
								suppressKeyPress = !0, this._move("previousPage", event);
								break;
							case keyCode.PAGE_DOWN:
								suppressKeyPress = !0, this._move("nextPage", event);
								break;
							case keyCode.UP:
								suppressKeyPress = !0, this._keyEvent("previous", event);
								break;
							case keyCode.DOWN:
								suppressKeyPress = !0, this._keyEvent("next", event);
								break;
							case keyCode.ENTER:
							case keyCode.NUMPAD_ENTER:
								this.menu.active && (suppressKeyPress = !0, event.preventDefault(), this.menu.select(event));
								break;
							case keyCode.TAB:
								this.menu.active && this.menu.select(event);
								break;
							case keyCode.ESCAPE:
								this.menu.element.is(":visible") && (this._value(this.term), this.close(event), event.preventDefault());
								break;
							default:
								suppressKeyPressRepeat = !0, this._searchTimeout(event)
						}
					}
				},
				keypress: function (event) {
					if (suppressKeyPress) return suppressKeyPress = !1, void(this.isMultiLine && !this.menu.element.is(":visible") || event.preventDefault());
					if (!suppressKeyPressRepeat) {
						var keyCode = $.ui.keyCode;
						switch (event.keyCode) {
							case keyCode.PAGE_UP:
								this._move("previousPage", event);
								break;
							case keyCode.PAGE_DOWN:
								this._move("nextPage", event);
								break;
							case keyCode.UP:
								this._keyEvent("previous", event);
								break;
							case keyCode.DOWN:
								this._keyEvent("next", event)
						}
					}
				},
				input: function (event) {
					if (suppressInput) return suppressInput = !1, void event.preventDefault();
					this._searchTimeout(event)
				},
				focus: function () {
					this.selectedItem = null, this.previous = this._value()
				},
				blur: function (event) {
					this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(event), this._change(event))
				}
			}), this._initSource(), this.menu = $("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
				role: null
			}).hide().data("ui-menu"), this._on(this.menu.element, {
				mousedown: function (event) {
					event.preventDefault(), this.cancelBlur = !0, this._delay(function () {
						delete this.cancelBlur
					});
					var menuElement = this.menu.element[0];
					$(event.target).closest(".ui-menu-item").length || this._delay(function () {
						var that = this;
						this.document.one("mousedown", function (event) {
							event.target === that.element[0] || event.target === menuElement || $.contains(menuElement, event.target) || that.close()
						})
					})
				},
				menufocus: function (event, ui) {
					if (this.isNewMenu && (this.isNewMenu = !1, event.originalEvent && /^mouse/.test(event.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function () {
						$(event.target).trigger(event.originalEvent)
					});
					var item = ui.item.data("ui-autocomplete-item");
					!1 !== this._trigger("focus", event, {
						item: item
					}) ? event.originalEvent && /^key/.test(event.originalEvent.type) && this._value(item.value) : this.liveRegion.text(item.value)
				},
				menuselect: function (event, ui) {
					var item = ui.item.data("ui-autocomplete-item"),
						previous = this.previous;
					this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = previous, this._delay(function () {
						this.previous = previous, this.selectedItem = item
					})), !1 !== this._trigger("select", event, {
						item: item
					}) && this._value(item.value), this.term = this._value(), this.close(event), this.selectedItem = item
				}
			}), this.liveRegion = $("<span>", {
				role: "status",
				"aria-live": "polite"
			}).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
				beforeunload: function () {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_destroy: function () {
			clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
		},
		_setOption: function (key, value) {
			this._super(key, value), "source" === key && this._initSource(), "appendTo" === key && this.menu.element.appendTo(this._appendTo()), "disabled" === key && value && this.xhr && this.xhr.abort()
		},
		_appendTo: function () {
			var element = this.options.appendTo;
			return element && (element = element.jquery || element.nodeType ? $(element) : this.document.find(element).eq(0)), element || (element = this.element.closest(".ui-front")), element.length || (element = this.document[0].body), element
		},
		_initSource: function () {
			var array, url, that = this;
			$.isArray(this.options.source) ? (array = this.options.source, this.source = function (request, response) {
				response($.ui.autocomplete.filter(array, request.term))
			}) : "string" == typeof this.options.source ? (url = this.options.source, this.source = function (request, response) {
				that.xhr && that.xhr.abort(), that.xhr = $.ajax({
					url: url,
					data: request,
					dataType: "json",
					success: function (data) {
						response(data)
					},
					error: function () {
						response([])
					}
				})
			}) : this.source = this.options.source
		},
		_searchTimeout: function (event) {
			clearTimeout(this.searching), this.searching = this._delay(function () {
				this.term !== this._value() && (this.selectedItem = null, this.search(null, event))
			}, this.options.delay)
		},
		search: function (value, event) {
			return value = null != value ? value : this._value(), this.term = this._value(), value.length < this.options.minLength ? this.close(event) : !1 !== this._trigger("search", event) ? this._search(value) : void 0
		},
		_search: function (value) {
			this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
				term: value
			}, this._response())
		},
		_response: function () {
			var index = ++this.requestIndex;
			return $.proxy(function (content) {
				index === this.requestIndex && this.__response(content), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
			}, this)
		},
		__response: function (content) {
			content && (content = this._normalize(content)), this._trigger("response", null, {
				content: content
			}), !this.options.disabled && content && content.length && !this.cancelSearch ? (this._suggest(content), this._trigger("open")) : this._close()
		},
		close: function (event) {
			this.cancelSearch = !0, this._close(event)
		},
		_close: function (event) {
			this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", event))
		},
		_change: function (event) {
			this.previous !== this._value() && this._trigger("change", event, {
				item: this.selectedItem
			})
		},
		_normalize: function (items) {
			return items.length && items[0].label && items[0].value ? items : $.map(items, function (item) {
				return "string" == typeof item ? {
					label: item,
					value: item
				} : $.extend({
					label: item.label || item.value,
					value: item.value || item.label
				}, item)
			})
		},
		_suggest: function (items) {
			var ul = this.menu.element.empty();
			this._renderMenu(ul, items), this.isNewMenu = !0, this.menu.refresh(), ul.show(), this._resizeMenu(), ul.position($.extend({ of: this.element
			}, this.options.position)), this.options.autoFocus && this.menu.next()
		},
		_resizeMenu: function () {
			var ul = this.menu.element;
			ul.outerWidth(Math.max(ul.width("").outerWidth() + 1, this.element.outerWidth()))
		},
		_renderMenu: function (ul, items) {
			var that = this;
			$.each(items, function (index, item) {
				that._renderItemData(ul, item)
			})
		},
		_renderItemData: function (ul, item) {
			return this._renderItem(ul, item).data("ui-autocomplete-item", item)
		},
		_renderItem: function (ul, item) {
			return $("<li>").append($("<a>").text(item.label)).appendTo(ul)
		},
		_move: function (direction, event) {
			if (this.menu.element.is(":visible")) return this.menu.isFirstItem() && /^previous/.test(direction) || this.menu.isLastItem() && /^next/.test(direction) ? (this._value(this.term), void this.menu.blur()) : void this.menu[direction](event);
			this.search(null, event)
		},
		widget: function () {
			return this.menu.element
		},
		_value: function () {
			return this.valueMethod.apply(this.element, arguments)
		},
		_keyEvent: function (keyEvent, event) {
			this.isMultiLine && !this.menu.element.is(":visible") || (this._move(keyEvent, event), event.preventDefault())
		}
	}), $.extend($.ui.autocomplete, {
		escapeRegex: function (value) {
			return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
		},
		filter: function (array, term) {
			var matcher = new RegExp($.ui.autocomplete.escapeRegex(term), "i");
			return $.grep(array, function (value) {
				return matcher.test(value.label || value.value || value)
			})
		}
	}), $.widget("ui.autocomplete", $.ui.autocomplete, {
		options: {
			messages: {
				noResults: "No search results.",
				results: function (amount) {
					return amount + (1 < amount ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
				}
			}
		},
		__response: function (content) {
			var message;
			this._superApply(arguments), this.options.disabled || this.cancelSearch || (message = content && content.length ? this.options.messages.results(content.length) : this.options.messages.noResults, this.liveRegion.text(message))
		}
	})
}(jQuery), void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0),
	function (e, t, n) {
		function r(n) {
			var r = t.console;
			i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
		}

		function a(t, a, i, o) {
			if (Object.defineProperty) try {
				return Object.defineProperty(t, a, {
					configurable: !0,
					enumerable: !0,
					get: function () {
						return r(o), i
					},
					set: function (e) {
						r(o), i = e
					}
				}), n
			} catch (s) {}
			e._definePropertyBroken = !0, t[a] = i
		}
		var i = {};
		e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function () {
			i = {}, e.migrateWarnings.length = 0
		}, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
		var o = e("<input/>", {
				size: 1
			}).attr("size") && e.attrFn,
			s = e.attr,
			u = e.attrHooks.value && e.attrHooks.value.get || function () {
				return null
			},
			c = e.attrHooks.value && e.attrHooks.value.set || function () {
				return n
			},
			l = /^(?:input|button)$/i,
			d = /^[238]$/,
			p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
			f = /^(?:checked|selected)$/i;
		a(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"), e.attr = function (t, a, i, u) {
			var c = a.toLowerCase(),
				g = t && t.nodeType;
			return u && (s.length < 4 && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(g) && (o ? a in o : e.isFunction(e.fn[a]))) ? e(t)[a](i) : ("type" === a && i !== n && l.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = {
				get: function (t, r) {
					var a, i = e.prop(t, r);
					return !0 === i || "boolean" != typeof i && (a = t.getAttributeNode(r)) && !1 !== a.nodeValue ? r.toLowerCase() : n
				},
				set: function (t, n, r) {
					var a;
					return !1 === n ? e.removeAttr(t, r) : ((a = e.propFix[r] || r) in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r
				}
			}, f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, i))
		}, e.attrHooks.value = {
			get: function (e, t) {
				var n = (e.nodeName || "").toLowerCase();
				return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
			},
			set: function (e, t) {
				var a = (e.nodeName || "").toLowerCase();
				return "button" === a ? c.apply(this, arguments) : ("input" !== a && "option" !== a && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n)
			}
		};
		var g, h, v = e.fn.init,
			m = e.parseJSON,
			y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
		e.fn.init = function (t, n, a) {
			var i;
			return t && "string" == typeof t && !e.isPlainObject(n) && (i = y.exec(e.trim(t))) && i[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), i[3] && r("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(i[2], n, !0), n, a) : v.apply(this, arguments)
		}, e.fn.init.prototype = e.fn, e.parseJSON = function (e) {
			return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
		}, e.uaMatch = function (e) {
			e = e.toLowerCase();
			var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
			return {
				browser: t[1] || "",
				version: t[2] || "0"
			}
		}, e.browser || (h = {}, (g = e.uaMatch(navigator.userAgent)).browser && (h[g.browser] = !0, h.version = g.version), h.chrome ? h.webkit = !0 : h.webkit && (h.safari = !0), e.browser = h), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function () {
			function t(e, n) {
				return new t.fn.init(e, n)
			}
			e.extend(!0, t, this), t.superclass = this, ((t.fn = t.prototype = this()).constructor = t).sub = this.sub, t.fn.init = function (r, a) {
				return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n)
			}, t.fn.init.prototype = t.fn;
			var n = t(document);
			return r("jQuery.sub() is deprecated"), t
		}, e.ajaxSetup({
			converters: {
				"text json": e.parseJSON
			}
		});
		var b = e.fn.data;
		e.fn.data = function (t) {
			var a, i, o = this[0];
			return !o || "events" !== t || 1 !== arguments.length || (a = e.data(o, t), i = e._data(o, t), a !== n && a !== i || i === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i)
		};
		var j = /\/(java|ecma)script/i,
			w = e.fn.andSelf || e.fn.addBack;
		e.fn.andSelf = function () {
			return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments)
		}, e.clean || (e.clean = function (t, a, i, o) {
			a = (a = !(a = a || document).nodeType && a[0] || a).ownerDocument || a, r("jQuery.clean() is deprecated");
			var s, u, c, l, d = [];
			if (e.merge(d, e.buildFragment(t, a).childNodes), i)
				for (c = function (e) {
						return !e.type || j.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : n
					}, s = 0; null != (u = d[s]); s++) e.nodeName(u, "script") && c(u) || (i.appendChild(u), u.getElementsByTagName !== n && (l = e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s + 1, 0].concat(l)), s += l.length));
			return d
		});
		var Q = e.event.add,
			x = e.event.remove,
			k = e.event.trigger,
			N = e.fn.toggle,
			T = e.fn.live,
			M = e.fn.die,
			S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
			C = RegExp("\\b(?:" + S + ")\\b"),
			H = /(?:^|\s)hover(\.\S+|)\b/,
			A = function (t) {
				return "string" != typeof t || e.event.special.hover ? t : (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1"))
			};
		e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function (e, t, n, a, i) {
			e !== document && C.test(t) && r("AJAX events should be attached to document: " + t), Q.call(this, e, A(t || ""), n, a, i)
		}, e.event.remove = function (e, t, n, r, a) {
			x.call(this, e, A(t) || "", n, r, a)
		}, e.fn.error = function () {
			var e = Array.prototype.slice.call(arguments, 0);
			return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
		}, e.fn.toggle = function (t, n) {
			if (!e.isFunction(t) || !e.isFunction(n)) return N.apply(this, arguments);
			r("jQuery.fn.toggle(handler, handler...) is deprecated");
			var a = arguments,
				i = t.guid || e.guid++,
				o = 0,
				s = function (n) {
					var r = (e._data(this, "lastToggle" + t.guid) || 0) % o;
					return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1
				};
			for (s.guid = i; a.length > o;) a[o++].guid = i;
			return this.click(s)
		}, e.fn.live = function (t, n, a) {
			return r("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this)
		}, e.fn.die = function (t, n) {
			return r("jQuery.fn.die() is deprecated"), M ? M.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
		}, e.event.trigger = function (e, t, n, a) {
			return n || C.test(e) || r("Global events are undocumented and deprecated"), k.call(this, e, t, n || document, a)
		}, e.each(S.split("|"), function (t, n) {
			e.event.special[n] = {
				setup: function () {
					var t = this;
					return t !== document && (e.event.add(document, n + "." + e.guid, function () {
						e.event.trigger(n, null, t, !0)
					}), e._data(this, n, e.guid++)), !1
				},
				teardown: function () {
					return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
				}
			}
		})
	}(jQuery, window),
	function (a) {
		"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
	}(function (a) {
		a.extend(a.fn, {
			validate: function (b) {
				if (this.length) {
					var c = a.data(this[0], "validator");
					return c || (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function (b) {
						c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0)
					}), this.submit(function (b) {
						function d() {
							var d, e;
							return !c.settings.submitHandler || (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e && e)
						}
						return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? !(c.formSubmitted = !0) : d() : (c.focusInvalid(), !1)
					})), c)
				}
				b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
			},
			valid: function () {
				var b, c;
				return a(this[0]).is("form") ? b = this.validate().form() : (b = !0, c = a(this[0].form).validate(), this.each(function () {
					b = c.element(this) && b
				})), b
			},
			removeAttrs: function (b) {
				var c = {},
					d = this;
				return a.each(b.split(/\s/), function (a, b) {
					c[b] = d.attr(b), d.removeAttr(b)
				}), c
			},
			rules: function (b, c) {
				var d, e, f, g, h, i, j = this[0];
				if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
					case "add":
						a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
						break;
					case "remove":
						return c ? (i = {}, a.each(c.split(/\s/), function (b, c) {
							i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
						}), i) : (delete e[j.name], f)
				}
				return (g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j)).required && (h = g.required, delete g.required, g = a.extend({
					required: h
				}, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
					remote: h
				})), g
			}
		}), a.extend(a.expr[":"], {
			blank: function (b) {
				return !a.trim("" + a(b).val())
			},
			filled: function (b) {
				return !!a.trim("" + a(b).val())
			},
			unchecked: function (b) {
				return !a(b).prop("checked")
			}
		}), a.validator = function (b, c) {
			this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
		}, a.validator.format = function (b, c) {
			return 1 === arguments.length ? function () {
				var c = a.makeArray(arguments);
				return c.unshift(b), a.validator.format.apply(this, c)
			} : (2 < arguments.length && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
				b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
					return c
				})
			}), b)
		}, a.extend(a.validator, {
			defaults: {
				messages: {},
				groups: {},
				rules: {},
				errorClass: "error",
				validClass: "valid",
				errorElement: "label",
				focusCleanup: !1,
				focusInvalid: !0,
				errorContainer: a([]),
				errorLabelContainer: a([]),
				onsubmit: !0,
				ignore: ":hidden",
				ignoreTitle: !1,
				onfocusin: function (a) {
					this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
				},
				onfocusout: function (a) {
					this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
				},
				onkeyup: function (a, b) {
					(9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a)
				},
				onclick: function (a) {
					a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
				},
				highlight: function (b, c, d) {
					"radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
				},
				unhighlight: function (b, c, d) {
					"radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
				}
			},
			setDefaults: function (b) {
				a.extend(a.validator.defaults, b)
			},
			messages: {
				required: "Ce champs est obligatoire.",
				remote: "Please fix this field.",
				email: "Please enter a valid email address.",
				url: "Please enter a valid URL.",
				date: "Please enter a valid date.",
				dateISO: "Please enter a valid date ( ISO ).",
				number: "Please enter a valid number.",
				digits: "Veuillez saisir que des chiffres.",
				creditcard: "Please enter a valid credit card number.",
				equalTo: "Please enter the same value again.",
				maxlength: a.validator.format("Please enter no more than {0} characters."),
				minlength: a.validator.format("Please enter at least {0} characters."),
				rangelength: a.validator.format("Veuillez saisir un code postal à {0} chiffres"),
				range: a.validator.format("Please enter a value between {0} and {1}."),
				max: a.validator.format("Please enter a value less than or equal to {0}."),
				min: a.validator.format("Please enter a value greater than or equal to {0}.")
			},
			autoCreateRanges: !1,
			prototype: {
				init: function () {
					function b(b) {
						var c = a.data(this[0].form, "validator"),
							d = "on" + b.type.replace(/^validate/, ""),
							e = c.settings;
						e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b)
					}
					this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
					var c, d = this.groups = {};
					a.each(this.settings.groups, function (b, c) {
						"string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
							d[c] = b
						})
					}), c = this.settings.rules, a.each(c, function (b, d) {
						c[b] = a.validator.normalizeRule(d)
					}), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", b).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
				},
				form: function () {
					return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
				},
				checkForm: function () {
					this.prepareForm();
					for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
					return this.valid()
				},
				element: function (b) {
					var c = this.clean(b),
						d = this.validationTargetFor(c),
						e = !0;
					return void 0 === (this.lastElement = d) ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), (e = !1 !== this.check(d)) ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
				},
				showErrors: function (b) {
					if (b) {
						for (var c in a.extend(this.errorMap, b), this.errorList = [], b) this.errorList.push({
							message: b[c],
							element: this.findByName(c)[0]
						});
						this.successList = a.grep(this.successList, function (a) {
							return !(a.name in b)
						})
					}
					this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
				},
				resetForm: function () {
					a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
				},
				numberOfInvalids: function () {
					return this.objectLength(this.invalid)
				},
				objectLength: function (a) {
					var b, c = 0;
					for (b in a) c++;
					return c
				},
				hideErrors: function () {
					this.hideThese(this.toHide)
				},
				hideThese: function (a) {
					a.not(this.containers).text(""), this.addWrapper(a).hide()
				},
				valid: function () {
					return 0 === this.size()
				},
				size: function () {
					return this.errorList.length
				},
				focusInvalid: function () {
					if (this.settings.focusInvalid) try {
						a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
					} catch (b) {}
				},
				findLastActive: function () {
					var b = this.lastActive;
					return b && 1 === a.grep(this.errorList, function (a) {
						return a.element.name === b.name
					}).length && b
				},
				elements: function () {
					var b = this,
						c = {};
					return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function () {
						return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in c || !b.objectLength(a(this).rules())) && (c[this.name] = !0)
					})
				},
				clean: function (b) {
					return a(b)[0]
				},
				errors: function () {
					var b = this.settings.errorClass.split(" ").join(".");
					return a(this.settings.errorElement + "." + b, this.errorContext)
				},
				reset: function () {
					this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
				},
				prepareForm: function () {
					this.reset(), this.toHide = this.errors().add(this.containers)
				},
				prepareElement: function (a) {
					this.reset(), this.toHide = this.errorsFor(a)
				},
				elementValue: function (b) {
					var c, d = a(b),
						e = b.type;
					return "radio" === e || "checkbox" === e ? a("input[name='" + b.name + "']:checked").val() : "number" === e && void 0 !== b.validity ? !b.validity.badInput && d.val() : "string" == typeof (c = d.val()) ? c.replace(/\r/g, "") : c
				},
				check: function (b) {
					b = this.validationTargetFor(this.clean(b));
					var c, d, e, f = a(b).rules(),
						g = a.map(f, function (a, b) {
							return b
						}).length,
						h = !1,
						i = this.elementValue(b);
					for (d in f) {
						e = {
							method: d,
							parameters: f[d]
						};
						try {
							if ("dependency-mismatch" === (c = a.validator.methods[d].call(this, i, b, e.parameters)) && 1 === g) {
								h = !0;
								continue
							}
							if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
							if (!c) return this.formatAndAdd(b, e), !1
						} catch (j) {
							throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j
						}
					}
					if (!h) return this.objectLength(f) && this.successList.push(b), !0
				},
				customDataMessage: function (b, c) {
					return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
				},
				customMessage: function (a, b) {
					var c = this.settings.messages[a];
					return c && (c.constructor === String ? c : c[b])
				},
				findDefined: function () {
					for (var a = 0; a < arguments.length; a++)
						if (void 0 !== arguments[a]) return arguments[a]
				},
				defaultMessage: function (b, c) {
					return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
				},
				formatAndAdd: function (b, c) {
					var d = this.defaultMessage(b, c.method),
						e = /\$?\{(\d+)\}/g;
					"function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
						message: d,
						element: b,
						method: c.method
					}), this.errorMap[b.name] = d, this.submitted[b.name] = d
				},
				addWrapper: function (a) {
					return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
				},
				defaultShowErrors: function () {
					var a, b, c;
					for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
					if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
						for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
					if (this.settings.unhighlight)
						for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
					this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
				},
				validElements: function () {
					return this.currentElements.not(this.invalidElements())
				},
				invalidElements: function () {
					return a(this.errorList).map(function () {
						return this.element
					})
				},
				showLabel: function (b, c) {
					var d, e, f, g = this.errorsFor(b),
						h = this.idOrName(b),
						i = a(b).attr("aria-describedby");
					g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c)) : (d = g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id").replace(/(:|\.|\[|\])/g, "\\$1"), i ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), (e = this.groups[b.name]) && a.each(this.groups, function (b, c) {
						c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id"))
					}))), !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), this.toShow = this.toShow.add(g)
				},
				errorsFor: function (b) {
					var c = this.idOrName(b),
						d = a(b).attr("aria-describedby"),
						e = "label[for='" + c + "'], label[for='" + c + "'] *";
					return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e)
				},
				idOrName: function (a) {
					return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
				},
				validationTargetFor: function (b) {
					return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
				},
				checkable: function (a) {
					return /radio|checkbox/i.test(a.type)
				},
				findByName: function (b) {
					return a(this.currentForm).find("[name='" + b + "']")
				},
				getLength: function (b, c) {
					switch (c.nodeName.toLowerCase()) {
						case "select":
							return a("option:selected", c).length;
						case "input":
							if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
					}
					return b.length
				},
				depend: function (a, b) {
					return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
				},
				dependTypes: {
					boolean: function (a) {
						return a
					},
					string: function (b, c) {
						return !!a(b, c.form).length
					},
					function: function (a, b) {
						return a(b)
					}
				},
				optional: function (b) {
					var c = this.elementValue(b);
					return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
				},
				startRequest: function (a) {
					this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
				},
				stopRequest: function (b, c) {
					this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
				},
				previousValue: function (b) {
					return a.data(b, "previousValue") || a.data(b, "previousValue", {
						old: null,
						valid: !0,
						message: this.defaultMessage(b, "remote")
					})
				}
			},
			classRuleSettings: {
				required: {
					required: !0
				},
				email: {
					email: !0
				},
				url: {
					url: !0
				},
				date: {
					date: !0
				},
				dateISO: {
					dateISO: !0
				},
				number: {
					number: !0
				},
				digits: {
					digits: !0
				},
				creditcard: {
					creditcard: !0
				}
			},
			addClassRules: function (b, c) {
				b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
			},
			classRules: function (b) {
				var c = {},
					d = a(b).attr("class");
				return d && a.each(d.split(" "), function () {
					this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
				}), c
			},
			attributeRules: function (b) {
				var c, d, e = {},
					f = a(b),
					g = b.getAttribute("type");
				for (c in a.validator.methods) "required" === c ? ("" === (d = b.getAttribute(c)) && (d = !0), d = !!d) : d = f.attr(c), /min|max/.test(c) && (null === g || /number|range|text/.test(g)) && (d = Number(d)), d || 0 === d ? e[c] = d : g === c && "range" !== g && (e[c] = !0);
				return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
			},
			dataRules: function (b) {
				var c, d, e = {},
					f = a(b);
				for (c in a.validator.methods) void 0 !== (d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase())) && (e[c] = d);
				return e
			},
			staticRules: function (b) {
				var c = {},
					d = a.data(b.form, "validator");
				return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
			},
			normalizeRules: function (b, c) {
				return a.each(b, function (d, e) {
					if (!1 !== e) {
						if (e.param || e.depends) {
							var f = !0;
							switch (typeof e.depends) {
								case "string":
									f = !!a(e.depends, c.form).length;
									break;
								case "function":
									f = e.depends.call(c, c)
							}
							f ? b[d] = void 0 === e.param || e.param : delete b[d]
						}
					} else delete b[d]
				}), a.each(b, function (d, e) {
					b[d] = a.isFunction(e) ? e(c) : e
				}), a.each(["minlength", "maxlength"], function () {
					b[this] && (b[this] = Number(b[this]))
				}), a.each(["rangelength", "range"], function () {
					var c;
					b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
				}), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
			},
			normalizeRule: function (b) {
				if ("string" == typeof b) {
					var c = {};
					a.each(b.split(/\s/), function () {
						c[this] = !0
					}), b = c
				}
				return b
			},
			addMethod: function (b, c, d) {
				a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
			},
			methods: {
				required: function (b, c, d) {
					if (!this.depend(d, c)) return "dependency-mismatch";
					if ("select" === c.nodeName.toLowerCase()) {
						var e = a(c).val();
						return e && 0 < e.length
					}
					return this.checkable(c) ? 0 < this.getLength(b, c) : 0 < a.trim(b).length
				},
				email: function (a, b) {
					return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
				},
				url: function (a, b) {
					return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
				},
				date: function (a, b) {
					return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
				},
				dateISO: function (a, b) {
					return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
				},
				number: function (a, b) {
					return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
				},
				digits: function (a, b) {
					return this.optional(b) || /^\d+$/.test(a)
				},
				creditcard: function (a, b) {
					if (this.optional(b)) return "dependency-mismatch";
					if (/[^0-9 \-]+/.test(a)) return !1;
					var c, d, e = 0,
						f = 0,
						g = !1;
					if ((a = a.replace(/\D/g, "")).length < 13 || 19 < a.length) return !1;
					for (c = a.length - 1; 0 <= c; c--) d = a.charAt(c), f = parseInt(d, 10), g && 9 < (f *= 2) && (f -= 9), e += f, g = !g;
					return e % 10 == 0
				},
				minlength: function (b, c, d) {
					var e = a.isArray(b) ? b.length : this.getLength(b, c);
					return this.optional(c) || d <= e
				},
				maxlength: function (b, c, d) {
					var e = a.isArray(b) ? b.length : this.getLength(b, c);
					return this.optional(c) || e <= d
				},
				rangelength: function (b, c, d) {
					var e = a.isArray(b) ? b.length : this.getLength(b, c);
					return this.optional(c) || e >= d[0] && e <= d[1]
				},
				min: function (a, b, c) {
					return this.optional(b) || c <= a
				},
				max: function (a, b, c) {
					return this.optional(b) || a <= c
				},
				range: function (a, b, c) {
					return this.optional(b) || a >= c[0] && a <= c[1]
				},
				equalTo: function (b, c, d) {
					var e = a(d);
					return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
						a(c).valid()
					}), b === e.val()
				},
				remote: function (b, c, d) {
					if (this.optional(c)) return "dependency-mismatch";
					var e, f, g = this.previousValue(c);
					return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && {
						url: d
					} || d, g.old === b ? g.valid : (g.old = b, (e = this).startRequest(c), (f = {})[c.name] = b, a.ajax(a.extend(!0, {
						url: d,
						mode: "abort",
						port: "validate" + c.name,
						dataType: "json",
						data: f,
						context: e.currentForm,
						success: function (d) {
							var f, h, i, j = !0 === d || "true" === d;
							e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
						}
					}, d)), "pending")
				}
			}
		}), a.format = function () {
			throw "$.format has been deprecated. Please use $.validator.format instead."
		};
		var b, c = {};
		a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
			var e = a.port;
			"abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
		}) : (b = a.ajax, a.ajax = function (d) {
			var e = ("mode" in d ? d : a.ajaxSettings).mode,
				f = ("port" in d ? d : a.ajaxSettings).port;
			return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
		}), a.extend(a.fn, {
			validateDelegate: function (b, c, d) {
				return this.bind(c, function (c) {
					var e = a(c.target);
					return e.is(b) ? d.apply(e, arguments) : void 0
				})
			}
		})
	}),
	function (a) {
		"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
	}(function (a) {
		! function () {
			function b(a) {
				return a.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "")
			}
			a.validator.addMethod("maxWords", function (a, c, d) {
				return this.optional(c) || b(a).match(/\b\w+\b/g).length <= d
			}, a.validator.format("Please enter {0} words or less.")), a.validator.addMethod("minWords", function (a, c, d) {
				return this.optional(c) || b(a).match(/\b\w+\b/g).length >= d
			}, a.validator.format("Please enter at least {0} words.")), a.validator.addMethod("rangeWords", function (a, c, d) {
				var e = b(a),
					f = /\b\w+\b/g;
				return this.optional(c) || e.match(f).length >= d[0] && e.match(f).length <= d[1]
			}, a.validator.format("Please enter between {0} and {1} words."))
		}(), a.validator.addMethod("accept", function (b, c, d) {
			var e, g = "string" == typeof d ? d.replace(/\s/g, "").replace(/,/g, "|") : "image/*",
				h = this.optional(c);
			if (h) return h;
			if ("file" === a(c).attr("type") && (g = g.replace(/\*/g, ".*"), c.files && c.files.length))
				for (e = 0; e < c.files.length; e++)
					if (!c.files[e].type.match(new RegExp(".?(" + g + ")$", "i"))) return !1;
			return !0
		}, a.validator.format("Please enter a value with a valid mimetype.")), a.validator.addMethod("alphanumeric", function (a, b) {
			return this.optional(b) || /^\w+$/i.test(a)
		}, "Letters, numbers, and underscores only please"), a.validator.addMethod("bankaccountNL", function (a, b) {
			if (this.optional(b)) return !0;
			if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(a)) return !1;
			var c, f = a.replace(/ /g, ""),
				g = 0,
				h = f.length;
			for (c = 0; c < h; c++) g += (h - c) * f.substring(c, c + 1);
			return g % 11 == 0
		}, "Please specify a valid bank account number"), a.validator.addMethod("bankorgiroaccountNL", function (b, c) {
			return this.optional(c) || a.validator.methods.bankaccountNL.call(this, b, c) || a.validator.methods.giroaccountNL.call(this, b, c)
		}, "Please specify a valid bank or giro account number"), a.validator.addMethod("bic", function (a, b) {
			return this.optional(b) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-2])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(a)
		}, "Please specify a valid BIC code"), a.validator.addMethod("cifES", function (a) {
			"use strict";
			var b, c, d, e, f, g, h = [];
			if (!(a = a.toUpperCase()).match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)")) return !1;
			for (d = 0; d < 9; d++) h[d] = parseInt(a.charAt(d), 10);
			for (c = h[2] + h[4] + h[6], e = 1; e < 8; e += 2) g = (f = (2 * h[e]).toString()).charAt(1), c += parseInt(f.charAt(0), 10) + ("" === g ? 0 : parseInt(g, 10));
			return !!/^[ABCDEFGHJNPQRSUVW]{1}/.test(a) && (c += "", a += b = 10 - parseInt(c.charAt(c.length - 1), 10), h[8].toString() === String.fromCharCode(64 + b) || h[8].toString() === a.charAt(a.length - 1))
		}, "Please specify a valid CIF number."), a.validator.addMethod("creditcardtypes", function (a, b, c) {
			if (/[^0-9\-]+/.test(a)) return !1;
			a = a.replace(/\D/g, "");
			var d = 0;
			return c.mastercard && (d |= 1), c.visa && (d |= 2), c.amex && (d |= 4), c.dinersclub && (d |= 8), c.enroute && (d |= 16), c.discover && (d |= 32), c.jcb && (d |= 64), c.unknown && (d |= 128), c.all && (d = 255), 1 & d && /^(5[12345])/.test(a) ? 16 === a.length : 2 & d && /^(4)/.test(a) ? 16 === a.length : 4 & d && /^(3[47])/.test(a) ? 15 === a.length : 8 & d && /^(3(0[012345]|[68]))/.test(a) ? 14 === a.length : 16 & d && /^(2(014|149))/.test(a) ? 15 === a.length : 32 & d && /^(6011)/.test(a) ? 16 === a.length : 64 & d && /^(3)/.test(a) ? 16 === a.length : 64 & d && /^(2131|1800)/.test(a) ? 15 === a.length : !!(128 & d)
		}, "Please enter a valid credit card number."), a.validator.addMethod("currency", function (a, b, c) {
			var d, e = "string" == typeof c,
				f = e ? c : c[0],
				g = !!e || c[1];
			return f = f.replace(/,/g, ""), d = "^[" + (f = g ? f + "]" : f + "]?") + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$", d = new RegExp(d), this.optional(b) || d.test(a)
		}, "Please specify a valid currency"), a.validator.addMethod("dateFA", function (a, b) {
			return this.optional(b) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(a)
		}, "Please enter a correct date"), a.validator.addMethod("dateITA", function (a, b) {
			var c, d, e, f, g, h = !1;
			return /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(a) ? (c = a.split("/"), d = parseInt(c[0], 10), e = parseInt(c[1], 10), f = parseInt(c[2], 10), h = (g = new Date(f, e - 1, d, 12, 0, 0, 0)).getUTCFullYear() === f && g.getUTCMonth() === e - 1 && g.getUTCDate() === d) : h = !1, this.optional(b) || h
		}, "Please enter a correct date"), a.validator.addMethod("dateNL", function (a, b) {
			return this.optional(b) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(a)
		}, "Please enter a correct date"), a.validator.addMethod("extension", function (a, b, c) {
			return c = "string" == typeof c ? c.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(b) || a.match(new RegExp(".(" + c + ")$", "i"))
		}, a.validator.format("Please enter a value with a valid extension.")), a.validator.addMethod("giroaccountNL", function (a, b) {
			return this.optional(b) || /^[0-9]{1,7}$/.test(a)
		}, "Please specify a valid giro account number"), a.validator.addMethod("iban", function (a, b) {
			if (this.optional(b)) return !0;
			var d, e, g, j, k, l = a.replace(/ /g, "").toUpperCase(),
				m = "",
				n = !0,
				o = "";
			if (!/^([a-zA-Z0-9]{4} ){2,8}[a-zA-Z0-9]{1,4}|[a-zA-Z0-9]{12,34}$/.test(l)) return !1;
			if (void 0 !== (g = {
					AL: "\\d{8}[\\dA-Z]{16}",
					AD: "\\d{8}[\\dA-Z]{12}",
					AT: "\\d{16}",
					AZ: "[\\dA-Z]{4}\\d{20}",
					BE: "\\d{12}",
					BH: "[A-Z]{4}[\\dA-Z]{14}",
					BA: "\\d{16}",
					BR: "\\d{23}[A-Z][\\dA-Z]",
					BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
					CR: "\\d{17}",
					HR: "\\d{17}",
					CY: "\\d{8}[\\dA-Z]{16}",
					CZ: "\\d{20}",
					DK: "\\d{14}",
					DO: "[A-Z]{4}\\d{20}",
					EE: "\\d{16}",
					FO: "\\d{14}",
					FI: "\\d{14}",
					FR: "\\d{10}[\\dA-Z]{11}\\d{2}",
					GE: "[\\dA-Z]{2}\\d{16}",
					DE: "\\d{18}",
					GI: "[A-Z]{4}[\\dA-Z]{15}",
					GR: "\\d{7}[\\dA-Z]{16}",
					GL: "\\d{14}",
					GT: "[\\dA-Z]{4}[\\dA-Z]{20}",
					HU: "\\d{24}",
					IS: "\\d{22}",
					IE: "[\\dA-Z]{4}\\d{14}",
					IL: "\\d{19}",
					IT: "[A-Z]\\d{10}[\\dA-Z]{12}",
					KZ: "\\d{3}[\\dA-Z]{13}",
					KW: "[A-Z]{4}[\\dA-Z]{22}",
					LV: "[A-Z]{4}[\\dA-Z]{13}",
					LB: "\\d{4}[\\dA-Z]{20}",
					LI: "\\d{5}[\\dA-Z]{12}",
					LT: "\\d{16}",
					LU: "\\d{3}[\\dA-Z]{13}",
					MK: "\\d{3}[\\dA-Z]{10}\\d{2}",
					MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
					MR: "\\d{23}",
					MU: "[A-Z]{4}\\d{19}[A-Z]{3}",
					MC: "\\d{10}[\\dA-Z]{11}\\d{2}",
					MD: "[\\dA-Z]{2}\\d{18}",
					ME: "\\d{18}",
					NL: "[A-Z]{4}\\d{10}",
					NO: "\\d{11}",
					PK: "[\\dA-Z]{4}\\d{16}",
					PS: "[\\dA-Z]{4}\\d{21}",
					PL: "\\d{24}",
					PT: "\\d{21}",
					RO: "[A-Z]{4}[\\dA-Z]{16}",
					SM: "[A-Z]\\d{10}[\\dA-Z]{12}",
					SA: "\\d{2}[\\dA-Z]{18}",
					RS: "\\d{18}",
					SK: "\\d{20}",
					SI: "\\d{15}",
					ES: "\\d{20}",
					SE: "\\d{20}",
					CH: "\\d{5}[\\dA-Z]{12}",
					TN: "\\d{20}",
					TR: "\\d{5}[\\dA-Z]{17}",
					AE: "\\d{3}\\d{16}",
					GB: "[A-Z]{4}\\d{14}",
					VG: "[\\dA-Z]{4}\\d{16}"
				}[l.substring(0, 2)]) && !new RegExp("^[A-Z]{2}\\d{2}" + g + "$", "").test(l)) return !1;
			for (d = l.substring(4, l.length) + l.substring(0, 4), j = 0; j < d.length; j++) "0" !== (e = d.charAt(j)) && (n = !1), n || (m += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(e));
			for (k = 0; k < m.length; k++) o = ("" + o + m.charAt(k)) % 97;
			return 1 === o
		}, "Please specify a valid IBAN"), a.validator.addMethod("integer", function (a, b) {
			return this.optional(b) || /^-?\d+$/.test(a)
		}, "A positive or negative non-decimal number please"), a.validator.addMethod("ipv4", function (a, b) {
			return this.optional(b) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(a)
		}, "Please enter a valid IP v4 address."), a.validator.addMethod("ipv6", function (a, b) {
			return this.optional(b) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(a)
		}, "Please enter a valid IP v6 address."), a.validator.addMethod("lettersonly", function (a, b) {
			return this.optional(b) || /^[a-z]+$/i.test(a)
		}, "Letters only please"), a.validator.addMethod("letterswithbasicpunc", function (a, b) {
			return this.optional(b) || /^[a-z\-.,()'"\s]+$/i.test(a)
		}, "Letters or punctuation only please"), a.validator.addMethod("mobileNL", function (a, b) {
			return this.optional(b) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(a)
		}, "Please specify a valid mobile number"), a.validator.addMethod("mobileUK", function (a, b) {
			return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || 9 < a.length && a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/)
		}, "Please specify a valid mobile number"), a.validator.addMethod("nieES", function (a) {
			"use strict";
			return !!(a = a.toUpperCase()).match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") && (/^[T]{1}/.test(a) ? a[8] === /^[T]{1}[A-Z0-9]{8}$/.test(a) : !!/^[XYZ]{1}/.test(a) && a[8] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.replace("X", "0").replace("Y", "1").replace("Z", "2").substring(0, 8) % 23))
		}, "Please specify a valid NIE number."), a.validator.addMethod("nifES", function (a) {
			"use strict";
			return !!(a = a.toUpperCase()).match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") && (/^[0-9]{8}[A-Z]{1}$/.test(a) ? "TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.substring(8, 0) % 23) === a.charAt(8) : !!/^[KLM]{1}/.test(a) && a[8] === String.fromCharCode(64))
		}, "Please specify a valid NIF number."), a.validator.addMethod("nowhitespace", function (a, b) {
			return this.optional(b) || /^\S+$/i.test(a)
		}, "No white space please"), a.validator.addMethod("pattern", function (a, b, c) {
			return !!this.optional(b) || ("string" == typeof c && (c = new RegExp("^(?:" + c + ")$")), c.test(a))
		}, "Invalid format."), a.validator.addMethod("phoneNL", function (a, b) {
			return this.optional(b) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(a)
		}, "Please specify a valid phone number."), a.validator.addMethod("phoneUK", function (a, b) {
			return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || 9 < a.length && a.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)
		}, "Please specify a valid phone number"), a.validator.addMethod("phoneUS", function (a, b) {
			return a = a.replace(/\s+/g, ""), this.optional(b) || 9 < a.length && a.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/)
		}, "Please specify a valid phone number"), a.validator.addMethod("phonesUK", function (a, b) {
			return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || 9 < a.length && a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/)
		}, "Please specify a valid uk phone number"), a.validator.addMethod("postalCodeCA", function (a, b) {
			return this.optional(b) || /^[ABCEGHJKLMNPRSTVXY]\d[A-Z] \d[A-Z]\d$/.test(a)
		}, "Please specify a valid postal code"), a.validator.addMethod("postalcodeBR", function (a, b) {
			return this.optional(b) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(a)
		}, "Informe um CEP válido."), a.validator.addMethod("postalcodeIT", function (a, b) {
			return this.optional(b) || /^\d{5}$/.test(a)
		}, "Please specify a valid postal code"), a.validator.addMethod("postalcodeNL", function (a, b) {
			return this.optional(b) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(a)
		}, "Please specify a valid postal code"), a.validator.addMethod("postcodeUK", function (a, b) {
			return this.optional(b) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(a)
		}, "Please specify a valid UK postcode"), a.validator.addMethod("require_from_group", function (b, c, d) {
			var e = a(d[1], c.form),
				f = e.eq(0),
				g = f.data("valid_req_grp") ? f.data("valid_req_grp") : a.extend({}, this),
				h = e.filter(function () {
					return g.elementValue(this)
				}).length >= d[0];
			return f.data("valid_req_grp", g), a(c).data("being_validated") || (e.data("being_validated", !0), e.each(function () {
				g.element(this)
			}), e.data("being_validated", !1)), h
		}, a.validator.format("Please fill at least {0} of these fields.")), a.validator.addMethod("skip_or_fill_minimum", function (b, c, d) {
			var e = a(d[1], c.form),
				f = e.eq(0),
				g = f.data("valid_skip") ? f.data("valid_skip") : a.extend({}, this),
				h = e.filter(function () {
					return g.elementValue(this)
				}).length,
				i = 0 === h || h >= d[0];
			return f.data("valid_skip", g), a(c).data("being_validated") || (e.data("being_validated", !0), e.each(function () {
				g.element(this)
			}), e.data("being_validated", !1)), i
		}, a.validator.format("Please either skip these fields or fill at least {0} of them.")), jQuery.validator.addMethod("stateUS", function (a, b, c) {
			var d, e = void 0 === c,
				f = !e && void 0 !== c.caseSensitive && c.caseSensitive,
				g = !e && void 0 !== c.includeTerritories && c.includeTerritories,
				h = !e && void 0 !== c.includeMilitary && c.includeMilitary;
			return d = g || h ? g && h ? "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : g ? "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$" : "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$", d = f ? new RegExp(d) : new RegExp(d, "i"), this.optional(b) || d.test(a)
		}, "Please specify a valid state"), a.validator.addMethod("strippedminlength", function (b, c, d) {
			return a(b).text().length >= d
		}, a.validator.format("Please enter at least {0} characters")), a.validator.addMethod("time", function (a, b) {
			return this.optional(b) || /^([01]\d|2[0-3])(:[0-5]\d){1,2}$/.test(a)
		}, "Please enter a valid time, between 00:00 and 23:59"), a.validator.addMethod("time12h", function (a, b) {
			return this.optional(b) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(a)
		}, "Please enter a valid time in 12-hour am/pm format"), a.validator.addMethod("url2", function (a, b) {
			return this.optional(b) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
		}, a.validator.messages.url), a.validator.addMethod("vinUS", function (a) {
			if (17 !== a.length) return !1;
			var b, c, d, e, f, g, h = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
				i = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9],
				j = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
				k = 0;
			for (b = 0; b < 17; b++) {
				if (e = j[b], d = a.slice(b, b + 1), 8 === b && (g = d), isNaN(d)) {
					for (c = 0; c < h.length; c++)
						if (d.toUpperCase() === h[c]) {
							d = i[c], d *= e, isNaN(g) && 8 === c && (g = h[c]);
							break
						}
				} else d *= e;
				k += d
			}
			return 10 === (f = k % 11) && (f = "X"), f === g
		}, "The specified vehicle identification number (VIN) is invalid."), a.validator.addMethod("zipcodeUS", function (a, b) {
			return this.optional(b) || /^\d{5}(-\d{4})?$/.test(a)
		}, "The specified US ZIP Code is invalid"), a.validator.addMethod("ziprange", function (a, b) {
			return this.optional(b) || /^90[2-5]\d\{2\}-\d{4}$/.test(a)
		}, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx")
	}),
	function (t, e) {
		function r(e, n, i, d, l) {
			var s = !1;
			return e.contents().detach().each(function () {
				var h = this,
					f = t(h);
				if (void 0 === h) return !0;
				if (f.is("script, .dotdotdot-keep")) e.append(f);
				else {
					if (s) return !0;
					e.append(f), !l || f.is(d.after) || f.find(d.after).length || e[e.is("a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style") ? "after" : "append"](l), a(i, d) && (s = 3 == h.nodeType ? o(f, n, i, d, l) : r(f, n, i, d, l)), s || l && l.detach()
				}
			}), n.addClass("is-truncated"), s
		}

		function o(e, n, r, o, d) {
			var c = e[0];
			if (!c) return !1;
			var h = s(c),
				f = -1 !== h.indexOf(" ") ? " " : "　",
				p = "letter" == o.wrap ? "" : f,
				g = h.split(p),
				v = -1,
				w = -1,
				b = 0,
				m = g.length - 1;
			for (o.fallbackToLetter && 0 == b && 0 == m && (p = "", m = (g = h.split(p)).length - 1); b <= m && (0 != b || 0 != m);) {
				var y = Math.floor((b + m) / 2);
				if (y == w) break;
				w = y, l(c, g.slice(0, w + 1).join(p) + o.ellipsis), r.children().each(function () {
					t(this).toggle().toggle()
				}), a(r, o) ? (m = w, o.fallbackToLetter && 0 == b && 0 == m && (p = "", w = v = -1, m = (g = g[b = 0].split(p)).length - 1)) : b = v = w
			}
			if (-1 == v || 1 == g.length && 0 == g[0].length) {
				var x = e.parent();
				e.detach();
				var C = d && d.closest(x).length ? d.length : 0;
				if (x.contents().length > C ? c = u(x.contents().eq(-1 - C), n) : (c = u(x, n, !0), C || x.detach()), c && (l(c, h = i(s(c), o)), C && d)) {
					var T = d.parent();
					t(c).parent().append(d), t.trim(T.html()) || T.remove()
				}
			} else l(c, h = i(g.slice(0, v + 1).join(p), o));
			return !0
		}

		function a(t, e) {
			return t.innerHeight() > e.maxHeight
		}

		function i(e, n) {
			for (; - 1 < t.inArray(e.slice(-1), n.lastCharacter.remove);) e = e.slice(0, -1);
			return t.inArray(e.slice(-1), n.lastCharacter.noEllipsis) < 0 && (e += n.ellipsis), e
		}

		function d(t) {
			return {
				width: t.innerWidth(),
				height: t.innerHeight()
			}
		}

		function l(t, e) {
			t.innerText ? t.innerText = e : t.nodeValue ? t.nodeValue = e : t.textContent && (t.textContent = e)
		}

		function s(t) {
			return t.innerText ? t.innerText : t.nodeValue ? t.nodeValue : t.textContent ? t.textContent : ""
		}

		function c(t) {
			for (;
				(t = t.previousSibling) && 1 !== t.nodeType && 3 !== t.nodeType;);
			return t
		}

		function u(e, n, r) {
			var o, a = e && e[0];
			if (a) {
				if (!r) {
					if (3 === a.nodeType) return a;
					if (t.trim(e.text())) return u(e.contents().last(), n)
				}
				for (o = c(a); !o;) {
					if ((e = e.parent()).is(n) || !e.length) return !1;
					o = c(e[0])
				}
				if (o) return u(t(o), n)
			}
			return !1
		}
		if (!t.fn.dotdotdot) {
			t.fn.dotdotdot = function (e) {
				if (0 == this.length) return t.fn.dotdotdot.debug('No element found for "' + this.selector + '".'), this;
				if (1 < this.length) return this.each(function () {
					t(this).dotdotdot(e)
				});
				var o = this,
					i = o.contents();
				o.data("dotdotdot") && o.trigger("destroy.dot"), o.data("dotdotdot-style", o.attr("style") || ""), o.css("word-wrap", "break-word"), "nowrap" === o.css("white-space") && o.css("white-space", "normal"), o.bind_events = function () {
					return o.bind("update.dot", function (e, d) {
						switch (o.removeClass("is-truncated"), e.preventDefault(), e.stopPropagation(), typeof l.height) {
							case "number":
								l.maxHeight = l.height;
								break;
							case "function":
								l.maxHeight = l.height.call(o[0]);
								break;
							default:
								l.maxHeight = function f(t) {
									for (var e = t.innerHeight(), n = ["paddingTop", "paddingBottom"], r = 0, o = n.length; r < o; r++) {
										var a = parseInt(t.css(n[r]), 10);
										isNaN(a) && (a = 0), e -= a
									}
									return e
								}(o)
						}
						l.maxHeight += l.tolerance, void 0 !== d && (("string" == typeof d || "nodeType" in d && 1 === d.nodeType) && (d = t("<div />").append(d).contents()), d instanceof t && (i = d)), (g = o.wrapInner('<div class="dotdotdot" />').children()).contents().detach().end().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({
							height: "auto",
							width: "auto",
							border: "none",
							padding: 0,
							margin: 0
						});
						var c = !1,
							u = !1;
						return s.afterElement && ((c = s.afterElement.clone(!0)).show(), s.afterElement.detach()), a(g, l) && (u = "children" == l.wrap ? function n(t, e, n) {
							var r = t.children(),
								o = !1;
							t.empty();
							for (var i = 0, d = r.length; i < d; i++) {
								var l = r.eq(i);
								if (t.append(l), n && t.append(n), a(t, e)) {
									l.remove(), o = !0;
									break
								}
								n && n.detach()
							}
							return o
						}(g, l, c) : r(g, o, g, l, c)), g.replaceWith(g.contents()), g = null, t.isFunction(l.callback) && l.callback.call(o[0], u, i), s.isTruncated = u
					}).bind("isTruncated.dot", function (t, e) {
						return t.preventDefault(), t.stopPropagation(), "function" == typeof e && e.call(o[0], s.isTruncated), s.isTruncated
					}).bind("originalContent.dot", function (t, e) {
						return t.preventDefault(), t.stopPropagation(), "function" == typeof e && e.call(o[0], i), i
					}).bind("destroy.dot", function (t) {
						t.preventDefault(), t.stopPropagation(), o.unwatch().unbind_events().contents().detach().end().append(i).attr("style", o.data("dotdotdot-style") || "").removeClass("is-truncated").data("dotdotdot", !1)
					}), o
				}, o.unbind_events = function () {
					return o.unbind(".dot"), o
				}, o.watch = function () {
					if (o.unwatch(), "window" == l.watch) {
						var e = t(window),
							n = e.width(),
							r = e.height();
						e.bind("resize.dot" + s.dotId, function () {
							n == e.width() && r == e.height() && l.windowResizeFix || (n = e.width(), r = e.height(), u && clearInterval(u), u = setTimeout(function () {
								o.trigger("update.dot")
							}, 100))
						})
					} else c = d(o), u = setInterval(function () {
						if (o.is(":visible")) {
							var t = d(o);
							c.width == t.width && c.height == t.height || (o.trigger("update.dot"), c = t)
						}
					}, 500);
					return o
				}, o.unwatch = function () {
					return t(window).unbind("resize.dot" + s.dotId), u && clearInterval(u), o
				};
				var l = t.extend(!0, {}, t.fn.dotdotdot.defaults, e),
					s = {},
					c = {},
					u = null,
					g = null;
				return l.lastCharacter.remove instanceof Array || (l.lastCharacter.remove = t.fn.dotdotdot.defaultArrays.lastCharacter.remove), l.lastCharacter.noEllipsis instanceof Array || (l.lastCharacter.noEllipsis = t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis), s.afterElement = function h(e, n) {
					return !!e && ("string" == typeof e ? !!(e = t(e, n)).length && e : !!e.jquery && e)
				}(l.after, o), s.isTruncated = !1, s.dotId = p++, o.data("dotdotdot", !0).bind_events().trigger("update.dot"), l.watch && o.watch(), o
			}, t.fn.dotdotdot.defaults = {
				ellipsis: "... ",
				wrap: "word",
				fallbackToLetter: !0,
				lastCharacter: {},
				tolerance: 0,
				callback: null,
				after: null,
				height: null,
				watch: !1,
				windowResizeFix: !0
			}, t.fn.dotdotdot.defaultArrays = {
				lastCharacter: {
					remove: [" ", "　", ",", ";", ".", "!", "?"],
					noEllipsis: []
				}
			}, t.fn.dotdotdot.debug = function (t) {};
			var p = 1,
				g = t.fn.html;
			t.fn.html = function (n) {
				return n != e && !t.isFunction(n) && this.data("dotdotdot") ? this.trigger("update", [n]) : g.apply(this, arguments)
			};
			var v = t.fn.text;
			t.fn.text = function (n) {
				return n != e && !t.isFunction(n) && this.data("dotdotdot") ? (n = t("<div />").text(n).html(), this.trigger("update", [n])) : v.apply(this, arguments)
			}
		}
	}(jQuery), jQuery(document).ready(function (t) {
		t(".dot-ellipsis").each(function () {
			var e = t(this).hasClass("dot-resize-update"),
				n = t(this).hasClass("dot-timer-update"),
				r = 0,
				o = t(this).attr("class").split(/\s+/);
			t.each(o, function (t, e) {
				var n = e.match(/^dot-height-(\d+)$/);
				null !== n && (r = Number(n[1]))
			});
			var a = new Object;
			n && (a.watch = !0), e && (a.watch = "window"), 0 < r && (a.height = r), t(this).dotdotdot(a)
		})
	}), jQuery(window).on("load", function () {
		jQuery(".dot-ellipsis.dot-load-update").trigger("update.dot")
	});
var $j = jQuery.noConflict(),
	validatorRules = {
		nameAddress: {
			required: !0,
			maxlength: 100,
			pattern: /[a-zA-Z\-'\s0-9àáâãäåæçèéêëìíîïñòóôõöœùúûüýÿÂÄÀÊËÉÈÇ]/
		},
		lastName: {
			required: !0,
			rangelength: [2, 25],
			pattern: /[a-zA-Z\-'\sàáâãäåæçèéêëìíîïñòóôõöœùúûüýÿÂÄÀÊËÉÈÇ]/
		},
		firstName: {
			required: !0,
			rangelength: [2, 20],
			pattern: /[a-zA-Z\-'\sàáâãäåæçèéêëìíîïñòóôõöœùúûüýÿÂÄÀÊËÉÈÇ]/
		},
		address1: {
			required: !0,
			rangelength: [2, 38],
			pattern: /[a-zA-Z\-'\s0-9àáâãäåæçèéêëìíîïñòóôõöœùúûüýÿÂÄÀÊËÉÈÇ]/
		},
		addressMore: {
			rangelength: [2, 38],
			pattern: /[a-zA-Z\-'\s0-9àáâãäåæçèéêëìíîïñòóôõöœùúûüýÿÂÄÀÊËÉÈÇ]/
		},
		digicode: {
			maxlength: 60,
			pattern: /[a-zA-Z\-'\s0-9àáâãäåæçèéêëìíîïñòóôõöœùúûüýÿÂÄÀÊËÉÈÇ]/
		},
		city: {
			required: !0
		},
		voucherCode: {
			required: !0,
			rangelength: [19, 19],
			pattern: /^[kK0-9]*$/
		},
		zipCode: {
			required: !0,
			digits: !0,
			rangelength: [5, 5],
			pattern: /^[0-9]/
		},
		postalCode: {
			required: !0,
			digits: !0,
			rangelength: [5, 5],
			pattern: /^[0-9]/
		},
		phone1: {
			required: !0,
			digits: !0,
			rangelength: [10, 10],
			firstNumber: !0,
			sequentialArray: !0,
			serieArray: !0,
			pattern: /^[0-9]/
		},
		phone2: {
			digits: !0,
			rangelength: [10, 10],
			sequentialArray: !0,
			serieArray: !0,
			pattern: /^[0-9]/
		},
		phoneMobile: {
			required: !0,
			digits: !0,
			rangelength: [10, 10],
			sequentialArray: !0,
			serieArray: !0,
			mobileFormat: !0,
			pattern: /^[0-9]/
		},
		phoneMobile2: {
			digits: !0,
			rangelength: [10, 10],
			sequentialArray: !0,
			serieArray: !0,
			mobileFormat: !0,
			pattern: /^[0-9]/
		},
		phoneMobileFix: {
			digits: !0,
			rangelength: [10, 10],
			sequentialArray: !0,
			serieArray: !0,
			mobileFixFormat: !0,
			pattern: /^[0-9]/
		},
		cardNumber: {
			required: !0,
			rangelength: [9, 10]
		},
		logonId: {
			required: !0,
			lengthemail: !0,
			rangelength: [6, 70],
			email: !0,
			emailFormat: !0,
			pattern: /[@a-zA-Z0-9._-]/
		},
		email: {
			required: !0,
			lengthemail: !1,
			rangelength: [6, 70],
			email: !0,
			emailFormat: !0,
			pattern: /[@a-z0-9._-]/
		},
		emailConfirm: {
			required: !0,
			equalTo: "#email"
		},
		logonPassword: {
			required: !0,
			rangelength: [5, 55],
			pattern: /^[^<\>]/
		},
		password: {
			required: !0,
			security: !0,
			rangelength: [8, 55],
			pattern: /^[^<\>]/
		},
		passwordConfirm: {
			required: !0,
			equalTo: "#password"
		},
		birthDay: {
			require_from_group: [3, ".validateBirth"]
		},
		orgName: {
			required: !0
		},
		orgUnitName: {
			required: !0,
			rangelength: [2, 50],
			pattern: /[a-zA-Z\-'\s0-9àáâãäåæçèéêëìíîïñòóôõöœùúûüýÿÂÄÀÊËÉÈÇ]/
		}
	};

function replaceAccentedCharactersBlur(element) {
	var value = element.val();
	value = (value = (value = (value = (value = (value = (value = (value = (value = (value = (value = (value = (value = (value = value.replace(new RegExp(/[àáâãäå]/g), "a")).replace(new RegExp(/æ/g), "ae")).replace(new RegExp(/ç/g), "c")).replace(new RegExp(/[èéêë]/g), "e")).replace(new RegExp(/[ìíîï]/g), "i")).replace(new RegExp(/ñ/g), "n")).replace(new RegExp(/[òóôõö]/g), "o")).replace(new RegExp(/œ/g), "oe")).replace(new RegExp(/[ùúûü]/g), "u")).replace(new RegExp(/[ýÿ]/g), "y")).replace(new RegExp(/[ÂÄÀ]/g), "A")).replace(new RegExp(/[ÊËÉÈ]/g), "E")).replace(new RegExp(/Ç/g), "C")).toUpperCase(), element.val(value)
}

function activeSubmit(form) {
	for (var inputError = $j("#" + form + " :not(label):not(span).error").add($j("#" + form + " :not(label):not(span).grp-error")).length, inputRequired = $j("#" + form + " :not(label):not(span).required").length, inputRequiredVal = $j("#" + form + " :not(label):not(span):not(p):not(select).required").add($j("#" + form + " .select.required option:selected")), c = 0, i = 0; i < inputRequiredVal.length; i++) {
		"" != inputRequiredVal[i].value && c++
	}
	0 === inputError && inputRequired <= c ? $j("#" + form + " .action").removeClass("off") : $j("#" + form + " .action").addClass("off")
}

function grpSpecific(element, errorClass, validClass) {
	$j(element).parents("div").hasClass("birthday") ? "false" === $j(element).attr("aria-invalid") ? $j(element).parents("div.birthday").addClass("grp-success").removeClass("grp-error") : $j(element).parents("div.birthday").addClass("grp-error").removeClass("grp-success") : $j(element).parent("p").hasClass("radio") && ($j(element).hasClass("success") ? $j(element).parent().addClass(validClass).removeClass(errorClass) : $j(element).parent().addClass(errorClass).removeClass(validClass))
}
jQuery.validator.setDefaults({
	ignore: ":hidden, #UserData, #ShopCartForm, #accountRegistrationForm, #myAddressForm, #passwordForm, #depositForm, #CityData, #mobileAccountRegistrationForm,.ignoreCarglass",
	debug: !1,
	focusInvalid: !0,
	validClass: "success",
	success: "success",
	errorClass: "error",
	onfocusout: function (element, errorClass, validClass) {
		$j(element).valid()
	},
	onkeyup: function (element, errorClass, validClass) {
		$j(element).valid(), activeSubmit($j(element).parents("form").attr("id"))
	},
	highlight: function (element, errorClass, validClass) {
		$j(element).addClass(errorClass).removeClass(validClass), grpSpecific(element, errorClass, validClass)
	},
	unhighlight: function (element, errorClass, validClass) {
		$j(element).addClass(validClass).removeClass(errorClass), grpSpecific(element, errorClass, validClass)
	},
	rules: {
		civility: {
			required: !0
		}
	},
	messages: {
		civility: {
			required: "Sélectionnez votre civilit&eacute;"
		},
		nameAddress: {
			required: "Ce champ est obligatoire",
			maxlength: "",
			pattern: ""
		},
		lastName: {
			required: "Indiquez votre nom",
			rangelength: "Indiquez votre nom",
			pattern: "Indiquez votre nom"
		},
		firstName: {
			required: "Indiquez votre pr&eacute;nom",
			rangelength: "Indiquez votre pr&eacute;nom",
			pattern: "Indiquez votre pr&eacute;nom"
		},
		address1: {
			required: "Indiquer votre adresse",
			rangelength: "Adresse invalide",
			pattern: "Adresse invalide"
		},
		addressMore: {
			rangelength: "Adresse invalide",
			pattern: "Adresse invalide"
		},
		digicode: {
			maxlength: "Indiquez votre digicode",
			pattern: "Indiquez votre digicode"
		},
		city: {
			required: "Indiquez votre ville"
		},
		voucherCode: {
			required: "Indiquez votre code personnel",
			rangelength: "code personnel invalide",
			pattern: "Code personnel invalide"
		},
		postalCode: {
			required: "Indiquez votre code postal",
			digits: "Code postal inexistant",
			rangelength: "Code postal inexistant",
			pattern: "Code postal inexistant"
		},
		phone1: {
			required: "Indiquer un num&eacute;ro de t&eacute;l&eacute;phone",
			digits: "",
			rangelength: "Indiquer un num&eacute;ro de t&eacute;l&eacute;phone",
			firstNumber: "",
			sequentialArray: "Les num&eacute;ros de t&eacute;l&eacute;phone ne doivent pas avoir des chiffres s&eacute;quentiels",
			serieArray: "Les num&eacute;ros de t&eacute;l&eacute;phone ne doivent pas avoir de s&eacute;rie de chiffres identiques",
			pattern: "Indiquer un num&eacute;ro de t&eacute;l&eacute;phone"
		},
		phone2: {
			digits: "",
			rangelength: "Indiquer un num&eacute;ro de t&eacute;l&eacute;phone",
			sequentialArray: "Les num&eacute;ros de t&eacute;l&eacute;phone ne doivent pas avoir des chiffres s&eacute;quentiels",
			serieArray: "Les num&eacute;ros de t&eacute;l&eacute;phone ne doivent pas avoir de s&eacute;rie de chiffres identiques",
			pattern: "Indiquer un num&eacute;ro de t&eacute;l&eacute;phone"
		},
		phoneMobile: {
			required: "Indiquer votre num&eacute;ro de t&eacute;l&eacute;phone portable",
			digits: "",
			rangelength: "Indiquer votre num&eacute;ro de t&eacute;l&eacute;phone portable",
			sequentialArray: "Les num&eacute;ros de t&eacute;l&eacute;phone ne doivent pas avoir des chiffres s&eacute;quentiels",
			serieArray: "Les num&eacute;ros de t&eacute;l&eacute;phone ne doivent pas avoir de s&eacute;rie de chiffres identiques",
			mobileFormat: "Indiquer votre num&eacute;ro de t&eacute;l&eacute;phone portable",
			pattern: "Indiquer votre num&eacute;ro de t&eacute;l&eacute;phone portable"
		},
		phoneMobile2: {
			required: "Indiquer votre num&eacute;ro de t&eacute;l&eacute;phone portable",
			digits: "",
			rangelength: "Indiquer votre num&eacute;ro de t&eacute;l&eacute;phone portable",
			sequentialArray: "Les num&eacute;ros de t&eacute;l&eacute;phone ne doivent pas avoir des chiffres s&eacute;quentiels",
			serieArray: "Les num&eacute;ros de t&eacute;l&eacute;phone ne doivent pas avoir de s&eacute;rie de chiffres identiques",
			mobileFormat: "Indiquer votre num&eacute;ro de t&eacute;l&eacute;phone portable",
			pattern: "Indiquer votre num&eacute;ro de t&eacute;l&eacute;phone portable"
		},
		phoneMobileFix: {
			required: "Indiquer votre num&eacute;ro de t&eacute;l&eacute;phone",
			digits: "",
			rangelength: "Indiquer votre num&eacute;ro de t&eacute;l&eacute;phone",
			sequentialArray: "Les num&eacute;ros de t&eacute;l&eacute;phone ne doivent pas avoir des chiffres s&eacute;quentiels",
			serieArray: "Les num&eacute;ros de t&eacute;l&eacute;phone ne doivent pas avoir de s&eacute;rie de chiffres identiques",
			mobileFixFormat: "Indiquer votre num&eacute;ro de t&eacute;l&eacute;phone",
			pattern: "Indiquer votre num&eacute;ro de t&eacute;l&eacute;phone"
		},
		cardNumber: {
			required: "Indiquer votre num&eacute;ro de carte valide",
			rangelength: "Indiquer votre num&eacute;ro de carte valide"
		},
		logonId: {
			required: "Indiquez votre email",
			lengthemail: "Email invalide",
			rangelength: "Email invalide",
			email: "Email invalide",
			emailFormat: "Email invalide",
			pattern: "Email invalide"
		},
		email: {
			required: "Indiquez votre email",
			lengthemail: "Email invalide",
			rangelength: "Email invalide",
			email: "Email invalide",
			pattern: "Email invalide",
			emailFormat: "Email invalide"
		},
		emailConfirm: {
			required: "Indiquez votre email",
			lengthemail: "",
			rangelength: "",
			email: "",
			pattern: "",
			equalTo: "Email diff&eacute;rent"
		},
		logonPassword: {
			required: "Indiquez votre mot de passe",
			rangelength: "S'il vous pla&icirc;t entrer une valeur comprise entre 5 et 54 caract&egrave;res de long",
			pattern: "Le mot de passe n'est pas valide"
		},
		password: {
			required: "Indiquez votre mot de passe",
			security: "Mot de passe invalide",
			rangelength: "S'il vous pla&icirc;t entrer une valeur comprise entre 5 et 54 caract&egrave;res de long",
			pattern: "Le mot de passe n'est pas valide"
		},
		passwordConfirm: {
			required: "Indiquez votre mot de passe",
			equalTo: "Mot de passe diff&eacute;rent"
		},
		day: {
			require_from_group: "S'il vous pla&icirc;t, veuillez remplir les 3 champs"
		},
		month: {
			require_from_group: "S'il vous pla&icirc;t, veuillez remplir les 3 champs"
		},
		year: {
			require_from_group: "S'il vous pla&icirc;t, veuillez remplir les 3 champs"
		},
		orgName: {
			required: "Ce champ est obligatoire"
		},
		orgUnitName: {
			required: "Ce champ est obligatoire",
			rangelength: "S'il vous pla&icirc;t entrer une valeur comprise entre 0 et 50 caract&egrave;res de long",
			pattern: ""
		}
	},
	errorPlacement: function (error, element) {
		"day" === element.attr("id") || "month" === element.attr("id") || "year" === element.attr("id") ? (error.appendTo(element.parents(".birthday")), element.parents(".birthday").removeClass("grp-success").addClass("grp-error")) : error.appendTo(element.parent())
	}
}), jQuery.validator.addMethod("sequentialArray", function (value, element) {
	var sequentialArray = new Array("01234567", "12345678", "23456789", "34567890", "09876543", "98765432", "87654321", "76543210"),
		isWrong = !1;
	for (i = 0; i < sequentialArray.length; i++) - 1 < value.indexOf(sequentialArray[i].substr(0, 8)) && (isWrong = !0);
	return this.optional(element) || !isWrong
}, "Les num&eacute;ros de t&eacute;l&eacute;phone ne doivent pas avoir des chiffres s&eacute;quentiels"), jQuery.validator.addMethod("serieArray", function (value, element) {
	var serieArray = new Array("00000000", "11111111", "22222222", "33333333", "44444444", "55555555", "66666666", "77777777", "88888888", "99999999"),
		isWrong = !1;
	for (i = 0; i < serieArray.length; i++) - 1 < value.indexOf(serieArray[i].substr(0, 8)) && (isWrong = !0);
	return this.optional(element) || !isWrong
}, "Les num&eacute;ros de t&eacute;l&eacute;phone ne doivent pas avoir de s&eacute;rie de chiffres identiques"), jQuery.validator.addMethod("firstNumber", function (value, element) {
	return "0" == value.substring(0, 1) && "8" !== value.substring(1, 2) && "0" !== value.substring(1, 2) || (isFormValidated = !1)
}, "Merci d'indiquer un num&eacute;ro de t&eacute;l&eacute;phone valide au format : 0601020304"), jQuery.validator.addMethod("mobileFormat", function (value, element) {
	return "" == value || "0" == value.substring(0, 1) && ("6" === value.substring(1, 2) || "7" === value.substring(1, 2))
}, "Merci d'indiquer un num&eacute;ro de t&eacute;l&eacute;phone valide au format : 0601020304"), jQuery.validator.addMethod("mobileFixFormat", function (value, element) {
	return /^(01|02|03|04|05|06|07|09)[0-9]{8}$/.test(value)
}, "Merci d'indiquer un num&eacute;ro de t&eacute;l&eacute;phone valide au format : 0601020304"), jQuery.validator.addMethod("lengthemail", function (value, element) {
	return this.optional(element) || value.indexOf("@") <= 40 && value.length - value.indexOf("@") <= 29
}, "Message trop long"), jQuery.validator.addMethod("emailFormat", function (value, element) {
	return /^[a-zA-Z0-9\+._-]{1,64}@{1}[a-zA-Z0-9._-]{1,64}\.[a-zA-Z]{2,64}$/.test(value)
}, "Email invalide"), jQuery.validator.addMethod("security", function (value, element) {
	var securityLevel = new Array;
	securityLevel[0] = "", securityLevel[1] = "s&eacute;curit&eacute; insuffisante", securityLevel[2] = "S&eacute;curit&eacute; moyenne", securityLevel[3] = "S&eacute;curit&eacute; forte";
	return null != value && 0 == value.length ? ($j("#passwordValidationDescription").html(securityLevel[0]), $j("#passwordValidationImage").removeClass(), !1) : null != value && value.length < 8 || value.match(/\s/gi) ? ($j(".compare").addClass("error").removeClass("success"), $j("#passwordValidationDescription").html(securityLevel[1]).css("color", "#db4453"), $j("#passwordValidationImage").removeClass(), $j("#passwordValidationImage").addClass("level1"), !1) : null != value && 8 <= value.length && (!value.match(/[a-z]/) && !value.match(/[A-Z]/) || !value.match(/\d+/)) ? ($j(".compare").addClass("error").removeClass("success"), $j("#passwordValidationDescription").html(securityLevel[1]).css("color", "#db4453"), $j("#passwordValidationImage").removeClass(), $j("#passwordValidationImage").addClass("level1"), !1) : null != value && 8 <= value.length && (value.match(/[a-z]/) || value.match(/[A-Z]/)) && value.match(/\d+/) ? (value.match(/[a-z]/) && value.match(/[A-Z]/) || value.match(/.[!,@,#,$,%,^,&,*,?,_,~,\-,+,=,{,},;,:,",|,.,(,),\[,\],§,\,,\\,\',\`]/) || value.match(/.[à,á,â,ã,ä,å,â,è,é,ê,ë,ê,ì,í,î,ï,ò,ó,ô,õ,ö,ù,ú,û,ü,ÿ,ý,ç,,À,Á,Â,Ã,Ä,Å,Â,È,É,Ê,Ë,Ê,Ì,Í,Î,Ï,Ò,Ó,Ô,Õ,Ö,Ù,Ú,Û,Ü,Ÿ,Ý,Ç]/) ? ($j("#passwordValidationDescription").html(securityLevel[3]).css("color", "#3cb878"), $j("#passwordValidationImage").removeClass(), $j("#passwordValidationImage").addClass("level3")) : ($j("#passwordValidationDescription").html(securityLevel[2]).css("color", "#fb6e52"), $j("#passwordValidationImage").removeClass(), $j("#passwordValidationImage").addClass("level2")), $j(".compare").removeClass("error").addClass("success"), !0) : void 0
}, ""), jQuery.validator.addClassRules(validatorRules), $j(document).ready(function () {
	var elements = $j("form:not('#UserData'):not('#depositForm'):not('#ShopCartForm'):not('#accountRegistrationForm'):not('#myAddressForm'):not('#passwordForm'):not('#mobileAccountRegistrationForm') input[type!='submit'], form:not('#UserData'):not('#depositForm'):not('#ShopCartForm'):not('#accountRegistrationForm'):not('#myAddressForm'):not('#passwordForm'):not('#mobileAccountRegistrationForm') textarea, form:not('#UserData'):not('#depositForm'):not('#ShopCartForm'):not('#accountRegistrationForm'):not('#myAddressForm'):not('#passwordForm'):not('#mobileAccountRegistrationForm') select");
	elements.focus(function () {
		$j(this).parents("p").addClass("active")
	}), elements.blur(function () {
		$j("input[name*='search']") || "email" == $j(this).attr("type") || "password" == $j(this).attr("type") || "checkbox" == $j(this).attr("type") || $j(this).hasClass("select") || $j(this).hasClass("noUppercase") || replaceAccentedCharactersBlur($j(this)), $j(this).parents("p").removeClass("active"), setTimeout(function () {
			activeSubmit($j(this).parents("form").attr("id"))
		}, 100)
	}), elements.on("change", function () {
		$j(this).valid(), activeSubmit($j(this).parents("form").attr("id"))
	}), elements.keypress(function (e) {
		var nameEl = this.name;
		if (void 0 !== validatorRules[nameEl]) {
			var pattern = validatorRules[nameEl].pattern;
			if (null != pattern) {
				for (var x = e.which || e.keyCode, y = String.fromCharCode(x), keyCodeBasic = [8, 9, 13, 16, 17, 18, 20, 27, 37, 39, 144], resultKeyCodeBasic = !1, i = 0; i < keyCodeBasic.length; i++) e.keyCode === keyCodeBasic[i] && 0 != e.keyCode && (resultKeyCodeBasic = !0);
				if (null == y.match(pattern) && !1 === resultKeyCodeBasic) return !1
			}
			13 == e.keyCode && $j("this").parents("form").submit()
		}
	})
});
var json2html = {
	transform: function (json, transform, _options) {
		var out = {
				events: [],
				html: ""
			},
			options = {
				events: !1
			};
		if (options = json2html._extend(options, _options), void 0 !== transform || void 0 !== json) {
			var obj = "string" == typeof json ? JSON.parse(json) : json;
			out = json2html._transform(obj, transform, options)
		}
		return options.events ? out : out.html
	},
	_extend: function (obj1, obj2) {
		var obj3 = {};
		for (var attrname in obj1) obj3[attrname] = obj1[attrname];
		for (var attrname in obj2) obj3[attrname] = obj2[attrname];
		return obj3
	},
	_append: function (obj1, obj2) {
		var out = {
			html: "",
			event: []
		};
		return void 0 !== obj1 && void 0 !== obj2 && (out.html = obj1.html + obj2.html, out.events = obj1.events.concat(obj2.events)), out
	},
	_isArray: function (obj) {
		return "[object Array]" === Object.prototype.toString.call(obj)
	},
	_transform: function (json, transform, options) {
		var elements = {
			events: [],
			html: ""
		};
		if (json2html._isArray(json))
			for (var len = json.length, j = 0; j < len; ++j) elements = json2html._append(elements, json2html._apply(json[j], transform, j, options));
		else "object" == typeof json && (elements = json2html._append(elements, json2html._apply(json, transform, void 0, options)));
		return elements
	},
	_apply: function (obj, transform, index, options) {
		var element = {
			events: [],
			html: ""
		};
		if (json2html._isArray(transform))
			for (var t_len = transform.length, t = 0; t < t_len; ++t) element = json2html._append(element, json2html._apply(obj, transform[t], index, options));
		else if ("object" == typeof transform && void 0 !== transform.tag) {
			var tag = json2html._getValue(obj, transform, "tag", index);
			element.html += "<" + tag;
			var html, children = {
				events: [],
				html: ""
			};
			for (var key in transform) switch (key) {
				case "tag":
					break;
				case "children":
					if (json2html._isArray(transform.children)) children = json2html._append(children, json2html._apply(obj, transform.children, index, options));
					else if ("function" == typeof transform.children) {
						var temp = transform.children.call(obj, obj, index);
						"object" == typeof temp ? void 0 !== temp.html && void 0 !== temp.events && (children = json2html._append(children, temp)) : "string" == typeof temp && (children.html += temp)
					}
					break;
				case "html":
					html = json2html._getValue(obj, transform, "html", index);
					break;
				default:
					var isEvent = !1;
					if (2 < key.length && "on" == key.substring(0, 2).toLowerCase()) {
						if (options.events) {
							var data = {
									action: transform[key],
									obj: obj,
									data: options.eventData,
									index: index
								},
								id = json2html._guid();
							element.events[element.events.length] = {
								id: id,
								type: key.substring(2),
								data: data
							}, element.html += " json2html-event-id-" + key.substring(2) + "='" + id + "'"
						}
						isEvent = !0
					}
					if (!isEvent) {
						var out, val = json2html._getValue(obj, transform, key, index);
						if (void 0 !== val) out = "string" == typeof val ? '"' + val.replace(/"/g, "&quot;") + '"' : val, element.html += " " + key + "=" + out
					}
			}
			element.html += ">", html && (element.html += html), (element = json2html._append(element, children)).html += "</" + tag + ">"
		}
		return element
	},
	_guid: function () {
		var S4 = function () {
			return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
		};
		return S4() + S4() + "-" + S4() + S4() + "-" + S4() + S4()
	},
	_getValue: function (obj, transform, key, index) {
		var val = transform[key],
			type = jQuery.type(val);
		return "function" === type ? val.call(obj, obj, index) : "string" === type ? new json2html._tokenizer([/\$\{([^\}\{]+)\}/], function (src, real, re) {
			return real ? src.replace(re, function (all, name) {
				for (var components = name.split("."), useObj = obj, outVal = "", c_len = components.length, i = 0; i < c_len; ++i) {
					if (0 < components[i].length)
						if (null == (useObj = useObj[components[i]])) break
				}
				return null != useObj && (outVal = useObj), outVal
			}) : src
		}).parse(val).join("") : val
	},
	_tokenizer: function (tokenizers, doBuild) {
		if (!(this instanceof json2html._tokenizer)) return new json2html._tokenizer(tokenizers, doBuild);
		this.tokenizers = tokenizers.splice ? tokenizers : [tokenizers], doBuild && (this.doBuild = doBuild), this.parse = function (src) {
			for (this.src = src, this.ended = !1, this.tokens = []; this.next(), !this.ended;);
			return this.tokens
		}, this.build = function (src, real) {
			src && this.tokens.push(this.doBuild ? this.doBuild(src, real, this.tkn) : src)
		}, this.next = function () {
			var plain, self = this;
			self.findMin(), plain = self.src.slice(0, self.min), self.build(plain, !1), self.src = self.src.slice(self.min).replace(self.tkn, function (all) {
				return self.build(all, !0), ""
			}), self.src || (self.ended = !0)
		}, this.findMin = function () {
			var tkn, idx, i = 0;
			for (this.min = -1, this.tkn = ""; void 0 !== (tkn = this.tokenizers[i++]);) - 1 != (idx = this.src[tkn.test ? "search" : "indexOf"](tkn)) && (-1 == this.min || idx < this.min) && (this.tkn = tkn, this.min = idx); - 1 == this.min && (this.min = this.src.length)
		}
	}
};
! function ($) {
	$.fn.json2html = function (json, transform, _options) {
		if (void 0 !== json2html) {
			var options = {
				append: !0,
				replace: !1,
				prepend: !1,
				eventData: {}
			};
			return void 0 !== _options && $.extend(options, _options), options.events = !0, this.each(function () {
				for (var result = json2html.transform(json, transform, options), dom = $(document.createElement("i")).html(result.html), i = 0; i < result.events.length; i++) {
					var event = result.events[i],
						obj = $(dom).find("[json2html-event-id-" + event.type + "='" + event.id + "']");
					if (0 === obj.length) throw "jquery.json2html was unable to attach event " + event.id + " to DOM";
					$(obj).removeAttr("json2html-event-id-" + event.type), $(obj).on(event.type, event.data, function (e) {
						(e.data.event = e).data.action.call($(this), e.data)
					})
				}
				options.replace ? $.fn.replaceWith.call($(this), $(dom).children()) : options.prepend ? $.fn.prepend.call($(this), $(dom).children()) : $.fn.append.call($(this), $(dom).children())
			})
		}
	}
}(jQuery);
$j = jQuery.noConflict();