// https://longbill.github.io/jquery-date-range-picker/


!
function(e, t){
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
} (this,
function(){
    "use strict";
    var e,
    i;
    function c(){
        return e.apply(null, arguments)
    }
    function o(e){
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }
    function u(e){
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
    }
    function l(e){
        return void 0 === e
    }
    function d(e){
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }
    function h(e){
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }
    function f(e, t){
        var n,
        s = [];
        for (n = 0; n < e.length; ++n) s.push(t(e[n], n));
        return s
    }
    function m(e, t){
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function _(e, t){
        for (var n in t) m(t, n) && (e[n] = t[n]);
        return m(t, "toString") && (e.toString = t.toString),
        m(t, "valueOf") && (e.valueOf = t.valueOf),
        e
    }
    function y(e, t, n, s){
        return Ot(e, t, n, s, !0).utc()
    }
    function g(e){
        return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }),
        e._pf
    }
    function p(e){
        if (null == e._isValid){
            var t = g(e),
            n = i.call(t.parsedDateParts,
            function(e){
                return null != e
            }),
            s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
            if (e._strict && (s = s && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return s;
            e._isValid = s
        }
        return e._isValid
    }
    function v(e){
        var t = y(NaN);
        return null != e ? _(g(t), e) : g(t).userInvalidated = !0,
        t
    }
    i = Array.prototype.some ? Array.prototype.some: function(e){
        for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++) if (s in t && e.call(this, t[s], s, t)) return ! 0;
        return ! 1
    };
    var r = c.momentProperties = [];
    function w(e, t){
        var n,
        s,
        i;
        if (l(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), l(t._i) || (e._i = t._i), l(t._f) || (e._f = t._f), l(t._l) || (e._l = t._l), l(t._strict) || (e._strict = t._strict), l(t._tzm) || (e._tzm = t._tzm), l(t._isUTC) || (e._isUTC = t._isUTC), l(t._offset) || (e._offset = t._offset), l(t._pf) || (e._pf = g(t)), l(t._locale) || (e._locale = t._locale), 0 < r.length) for (n = 0; n < r.length; n++) l(i = t[s = r[n]]) || (e[s] = i);
        return e
    }
    var t = !1;
    function M(e){
        w(this, e),
        this._d = new Date(null != e._d ? e._d.getTime() : NaN),
        this.isValid() || (this._d = new Date(NaN)),
        !1 === t && (t = !0, c.updateOffset(this), t = !1)
    }
    function S(e){
        return e instanceof M || null != e && null != e._isAMomentObject
    }
    function D(e){
        return e < 0 ? Math.ceil(e) || 0: Math.floor(e)
    }
    function k(e){
        var t = +e,
        n = 0;
        return 0 !== t && isFinite(t) && (n = D(t)),
        n
    }
    function a(e, t, n){
        var s,
        i = Math.min(e.length, t.length),
        r = Math.abs(e.length - t.length),
        a = 0;
        for (s = 0; s < i; s++)(n && e[s] !== t[s] || !n && k(e[s]) !== k(t[s])) && a++;
        return a + r
    }
    function Y(e){ ! 1 === c.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }
    function n(i, r){
        var a = !0;
        return _(function(){
            if (null != c.deprecationHandler && c.deprecationHandler(null, i), a){
                for (var e, t = [], n = 0; n < arguments.length; n++){
                    if (e = "", "object" == typeof arguments[n]){
                        for (var s in e += "\n[" + n + "] ", arguments[0]) e += s + ": " + arguments[0][s] + ", ";
                        e = e.slice(0, -2)
                    } else e = arguments[n];
                    t.push(e)
                }
                Y(i + "\nArguments: " + Array.prototype.slice.call(t).join("") + "\n" + (new Error).stack),
                a = !1
            }
            return r.apply(this, arguments)
        },
        r)
    }
    var s,
    O = {};
    function T(e, t){
        null != c.deprecationHandler && c.deprecationHandler(e, t),
        O[e] || (Y(t), O[e] = !0)
    }
    function x(e){
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }
    function b(e, t){
        var n,
        s = _({},
        e);
        for (n in t) m(t, n) && (u(e[n]) && u(t[n]) ? (s[n] = {},
        _(s[n], e[n]), _(s[n], t[n])) : null != t[n] ? s[n] = t[n] : delete s[n]);
        for (n in e) m(e, n) && !m(t, n) && u(e[n]) && (s[n] = _({},
        s[n]));
        return s
    }
    function P(e){
        null != e && this.set(e)
    }
    c.suppressDeprecationWarnings = !1,
    c.deprecationHandler = null,
    s = Object.keys ? Object.keys: function(e){
        var t,
        n = [];
        for (t in e) m(e, t) && n.push(t);
        return n
    };
    var W = {};
    function H(e, t){
        var n = e.toLowerCase();
        W[n] = W[n + "s"] = W[t] = e
    }
    function R(e){
        return "string" == typeof e ? W[e] || W[e.toLowerCase()] : void 0
    }
    function C(e){
        var t,
        n,
        s = {};
        for (n in e) m(e, n) && (t = R(n)) && (s[t] = e[n]);
        return s
    }
    var F = {};
    function L(e, t){
        F[e] = t
    }
    function U(e, t, n){
        var s = "" + Math.abs(e),
        i = t - s.length;
        return (0 <= e ? n ? "+": "": "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + s
    }
    var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    G = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    V = {},
    E = {};
    function I(e, t, n, s){
        var i = s;
        "string" == typeof s && (i = function(){
            return this[s]()
        }),
        e && (E[e] = i),
        t && (E[t[0]] = function(){
            return U(i.apply(this, arguments), t[1], t[2])
        }),
        n && (E[n] = function(){
            return this.localeData().ordinal(i.apply(this, arguments), e)
        })
    }
    function A(e, t){
        return e.isValid() ? (t = j(t, e.localeData()), V[t] = V[t] ||
        function(s){
            var e,
            i,
            t,
            r = s.match(N);
            for (e = 0, i = r.length; e < i; e++) E[r[e]] ? r[e] = E[r[e]] : r[e] = (t = r[e]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
            return function(e){
                var t,
                n = "";
                for (t = 0; t < i; t++) n += x(r[t]) ? r[t].call(e, s) : r[t];
                return n
            }
        } (t), V[t](e)) : e.localeData().invalidDate()
    }
    function j(e, t){
        var n = 5;
        function s(e){
            return t.longDateFormat(e) || e
        }
        for (G.lastIndex = 0; 0 <= n && G.test(e);) e = e.replace(G, s),
        G.lastIndex = 0,
        n -= 1;
        return e
    }
    var Z = /\d/,
    z = /\d\d/,
    $ = /\d{3}/,
    q = /\d{4}/,
    J = /[+-]?\d{6}/,
    B = /\d\d?/,
    Q = /\d\d\d\d?/,
    X = /\d\d\d\d\d\d?/,
    K = /\d{1,3}/,
    ee = /\d{1,4}/,
    te = /[+-]?\d{1,6}/,
    ne = /\d+/,
    se = /[+-]?\d+/,
    ie = /Z|[+-]\d\d:?\d\d/gi,
    re = /Z|[+-]\d\d(?::?\d\d)?/gi,
    ae = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    oe = {};
    function ue(e, n, s){
        oe[e] = x(n) ? n: function(e, t){
            return e && s ? s: n
        }
    }
    function le(e, t){
        return m(oe, e) ? oe[e](t._strict, t._locale) : new RegExp(de(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
        function(e, t, n, s, i){
            return t || n || s || i
        })))
    }
    function de(e){
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    var he = {};
    function ce(e, n){
        var t,
        s = n;
        for ("string" == typeof e && (e = [e]), d(n) && (s = function(e, t){
            t[n] = k(e)
        }), t = 0; t < e.length; t++) he[e[t]] = s
    }
    function fe(e, i){
        ce(e,
        function(e, t, n, s){
            n._w = n._w || {},
            i(e, n._w, n, s)
        })
    }
    var me = 0,
    _e = 1,
    ye = 2,
    ge = 3,
    pe = 4,
    ve = 5,
    we = 6,
    Me = 7,
    Se = 8;
    function De(e){
        return ke(e) ? 366: 365
    }
    function ke(e){
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }
    I("Y", 0, 0,
    function(){
        var e = this.year();
        return e <= 9999 ? "" + e: "+" + e
    }),
    I(0, ["YY", 2], 0,
    function(){
        return this.year() % 100
    }),
    I(0, ["YYYY", 4], 0, "year"),
    I(0, ["YYYYY", 5], 0, "year"),
    I(0, ["YYYYYY", 6, !0], 0, "year"),
    H("year", "y"),
    L("year", 1),
    ue("Y", se),
    ue("YY", B, z),
    ue("YYYY", ee, q),
    ue("YYYYY", te, J),
    ue("YYYYYY", te, J),
    ce(["YYYYY", "YYYYYY"], me),
    ce("YYYY",
    function(e, t){
        t[me] = 2 === e.length ? c.parseTwoDigitYear(e) : k(e)
    }),
    ce("YY",
    function(e, t){
        t[me] = c.parseTwoDigitYear(e)
    }),
    ce("Y",
    function(e, t){
        t[me] = parseInt(e, 10)
    }),
    c.parseTwoDigitYear = function(e){
        return k(e) + (68 < k(e) ? 1900: 2e3)
    };
    var Ye,
    Oe = Te("FullYear", !0);
    function Te(t, n){
        return function(e){
            return null != e ? (be(this, t, e), c.updateOffset(this, n), this) : xe(this, t)
        }
    }
    function xe(e, t){
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC": "") + t]() : NaN
    }
    function be(e, t, n){
        e.isValid() && !isNaN(n) && ("FullYear" === t && ke(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC": "") + t](n, e.month(), Pe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC": "") + t](n))
    }
    function Pe(e, t){
        if (isNaN(e) || isNaN(t)) return NaN;
        var n,
        s = (t % (n = 12) + n) % n;
        return e += (t - s) / 12,
        1 === s ? ke(e) ? 29: 28: 31 - s % 7 % 2
    }
    Ye = Array.prototype.indexOf ? Array.prototype.indexOf: function(e){
        var t;
        for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
        return - 1
    },
    I("M", ["MM", 2], "Mo",
    function(){
        return this.month() + 1
    }),
    I("MMM", 0, 0,
    function(e){
        return this.localeData().monthsShort(this, e)
    }),
    I("MMMM", 0, 0,
    function(e){
        return this.localeData().months(this, e)
    }),
    H("month", "M"),
    L("month", 8),
    ue("M", B),
    ue("MM", B, z),
    ue("MMM",
    function(e, t){
        return t.monthsShortRegex(e)
    }),
    ue("MMMM",
    function(e, t){
        return t.monthsRegex(e)
    }),
    ce(["M", "MM"],
    function(e, t){
        t[_e] = k(e) - 1
    }),
    ce(["MMM", "MMMM"],
    function(e, t, n, s){
        var i = n._locale.monthsParse(e, s, n._strict);
        null != i ? t[_e] = i: g(n).invalidMonth = e
    });
    var We = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    He = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
    var Re = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
    function Ce(e, t){
        var n;
        if (!e.isValid()) return e;
        if ("string" == typeof t) if (/^\d+$/.test(t)) t = k(t);
        else if (!d(t = e.localeData().monthsParse(t))) return e;
        return n = Math.min(e.date(), Pe(e.year(), t)),
        e._d["set" + (e._isUTC ? "UTC": "") + "Month"](t, n),
        e
    }
    function Fe(e){
        return null != e ? (Ce(this, e), c.updateOffset(this, !0), this) : xe(this, "Month")
    }
    var Le = ae;
    var Ue = ae;
    function Ne(){
        function e(e, t){
            return t.length - e.length
        }
        var t,
        n,
        s = [],
        i = [],
        r = [];
        for (t = 0; t < 12; t++) n = y([2e3, t]),
        s.push(this.monthsShort(n, "")),
        i.push(this.months(n, "")),
        r.push(this.months(n, "")),
        r.push(this.monthsShort(n, ""));
        for (s.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++) s[t] = de(s[t]),
        i[t] = de(i[t]);
        for (t = 0; t < 24; t++) r[t] = de(r[t]);
        this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"),
        this._monthsShortRegex = this._monthsRegex,
        this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"),
        this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
    }
    function Ge(e){
        var t = new Date(Date.UTC.apply(null, arguments));
        return e < 100 && 0 <= e && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e),
        t
    }
    function Ve(e, t, n){
        var s = 7 + t - n;
        return - ((7 + Ge(e, 0, s).getUTCDay() - t) % 7) + s - 1
    }
    function Ee(e, t, n, s, i){
        var r,
        a,
        o = 1 + 7 * (t - 1) + (7 + n - s) % 7 + Ve(e, s, i);
        return o <= 0 ? a = De(r = e - 1) + o: o > De(e) ? (r = e + 1, a = o - De(e)) : (r = e, a = o),
        {
            year: r,
            dayOfYear: a
        }
    }
    function Ie(e, t, n){
        var s,
        i,
        r = Ve(e.year(), t, n),
        a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
        return a < 1 ? s = a + Ae(i = e.year() - 1, t, n) : a > Ae(e.year(), t, n) ? (s = a - Ae(e.year(), t, n), i = e.year() + 1) : (i = e.year(), s = a),
        {
            week: s,
            year: i
        }
    }
    function Ae(e, t, n){
        var s = Ve(e, t, n),
        i = Ve(e + 1, t, n);
        return (De(e) - s + i) / 7
    }
    I("w", ["ww", 2], "wo", "week"),
    I("W", ["WW", 2], "Wo", "isoWeek"),
    H("week", "w"),
    H("isoWeek", "W"),
    L("week", 5),
    L("isoWeek", 5),
    ue("w", B),
    ue("ww", B, z),
    ue("W", B),
    ue("WW", B, z),
    fe(["w", "ww", "W", "WW"],
    function(e, t, n, s){
        t[s.substr(0, 1)] = k(e)
    });
    I("d", 0, "do", "day"),
    I("dd", 0, 0,
    function(e){
        return this.localeData().weekdaysMin(this, e)
    }),
    I("ddd", 0, 0,
    function(e){
        return this.localeData().weekdaysShort(this, e)
    }),
    I("dddd", 0, 0,
    function(e){
        return this.localeData().weekdays(this, e)
    }),
    I("e", 0, 0, "weekday"),
    I("E", 0, 0, "isoWeekday"),
    H("day", "d"),
    H("weekday", "e"),
    H("isoWeekday", "E"),
    L("day", 11),
    L("weekday", 11),
    L("isoWeekday", 11),
    ue("d", B),
    ue("e", B),
    ue("E", B),
    ue("dd",
    function(e, t){
        return t.weekdaysMinRegex(e)
    }),
    ue("ddd",
    function(e, t){
        return t.weekdaysShortRegex(e)
    }),
    ue("dddd",
    function(e, t){
        return t.weekdaysRegex(e)
    }),
    fe(["dd", "ddd", "dddd"],
    function(e, t, n, s){
        var i = n._locale.weekdaysParse(e, s, n._strict);
        null != i ? t.d = i: g(n).invalidWeekday = e
    }),
    fe(["d", "e", "E"],
    function(e, t, n, s){
        t[s] = k(e)
    });
    var je = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
    var Ze = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
    var ze = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    var $e = ae;
    var qe = ae;
    var Je = ae;
    function Be(){
        function e(e, t){
            return t.length - e.length
        }
        var t,
        n,
        s,
        i,
        r,
        a = [],
        o = [],
        u = [],
        l = [];
        for (t = 0; t < 7; t++) n = y([2e3, 1]).day(t),
        s = this.weekdaysMin(n, ""),
        i = this.weekdaysShort(n, ""),
        r = this.weekdays(n, ""),
        a.push(s),
        o.push(i),
        u.push(r),
        l.push(s),
        l.push(i),
        l.push(r);
        for (a.sort(e), o.sort(e), u.sort(e), l.sort(e), t = 0; t < 7; t++) o[t] = de(o[t]),
        u[t] = de(u[t]),
        l[t] = de(l[t]);
        this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"),
        this._weekdaysShortRegex = this._weekdaysRegex,
        this._weekdaysMinRegex = this._weekdaysRegex,
        this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"),
        this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"),
        this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
    }
    function Qe(){
        return this.hours() % 12 || 12
    }
    function Xe(e, t){
        I(e, 0, 0,
        function(){
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }
    function Ke(e, t){
        return t._meridiemParse
    }
    I("H", ["HH", 2], 0, "hour"),
    I("h", ["hh", 2], 0, Qe),
    I("k", ["kk", 2], 0,
    function(){
        return this.hours() || 24
    }),
    I("hmm", 0, 0,
    function(){
        return "" + Qe.apply(this) + U(this.minutes(), 2)
    }),
    I("hmmss", 0, 0,
    function(){
        return "" + Qe.apply(this) + U(this.minutes(), 2) + U(this.seconds(), 2)
    }),
    I("Hmm", 0, 0,
    function(){
        return "" + this.hours() + U(this.minutes(), 2)
    }),
    I("Hmmss", 0, 0,
    function(){
        return "" + this.hours() + U(this.minutes(), 2) + U(this.seconds(), 2)
    }),
    Xe("a", !0),
    Xe("A", !1),
    H("hour", "h"),
    L("hour", 13),
    ue("a", Ke),
    ue("A", Ke),
    ue("H", B),
    ue("h", B),
    ue("k", B),
    ue("HH", B, z),
    ue("hh", B, z),
    ue("kk", B, z),
    ue("hmm", Q),
    ue("hmmss", X),
    ue("Hmm", Q),
    ue("Hmmss", X),
    ce(["H", "HH"], ge),
    ce(["k", "kk"],
    function(e, t, n){
        var s = k(e);
        t[ge] = 24 === s ? 0: s
    }),
    ce(["a", "A"],
    function(e, t, n){
        n._isPm = n._locale.isPM(e),
        n._meridiem = e
    }),
    ce(["h", "hh"],
    function(e, t, n){
        t[ge] = k(e),
        g(n).bigHour = !0
    }),
    ce("hmm",
    function(e, t, n){
        var s = e.length - 2;
        t[ge] = k(e.substr(0, s)),
        t[pe] = k(e.substr(s)),
        g(n).bigHour = !0
    }),
    ce("hmmss",
    function(e, t, n){
        var s = e.length - 4,
        i = e.length - 2;
        t[ge] = k(e.substr(0, s)),
        t[pe] = k(e.substr(s, 2)),
        t[ve] = k(e.substr(i)),
        g(n).bigHour = !0
    }),
    ce("Hmm",
    function(e, t, n){
        var s = e.length - 2;
        t[ge] = k(e.substr(0, s)),
        t[pe] = k(e.substr(s))
    }),
    ce("Hmmss",
    function(e, t, n){
        var s = e.length - 4,
        i = e.length - 2;
        t[ge] = k(e.substr(0, s)),
        t[pe] = k(e.substr(s, 2)),
        t[ve] = k(e.substr(i))
    });
    var et,
    tt = Te("Hours", !0),
    nt = {
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        months: He,
        monthsShort: Re,
        week: {
            dow: 0,
            doy: 6
        },
        weekdays: je,
        weekdaysMin: ze,
        weekdaysShort: Ze,
        meridiemParse: /[ap]\.?m?\.?/i
    },
    st = {},
    it = {};
    function rt(e){
        return e ? e.toLowerCase().replace("_", "-") : e
    }
    function at(e){
        var t = null;
        if (!st[e] && "undefined" != typeof module && module && module.exports) try{
            t = et._abbr,
            require("./locale/" + e),
            ot(t)
        } catch(e){}
        return st[e]
    }
    function ot(e, t){
        var n;
        return e && ((n = l(t) ? lt(e) : ut(e, t)) ? et = n: "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")),
        et._abbr
    }
    function ut(e, t){
        if (null !== t){
            var n,
            s = nt;
            if (t.abbr = e, null != st[e]) T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
            s = st[e]._config;
            else if (null != t.parentLocale) if (null != st[t.parentLocale]) s = st[t.parentLocale]._config;
            else{
                if (null == (n = at(t.parentLocale))) return it[t.parentLocale] || (it[t.parentLocale] = []),
                it[t.parentLocale].push({
                    name: e,
                    config: t
                }),
                null;
                s = n._config
            }
            return st[e] = new P(b(s, t)),
            it[e] && it[e].forEach(function(e){
                ut(e.name, e.config)
            }),
            ot(e),
            st[e]
        }
        return delete st[e],
        null
    }
    function lt(e){
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return et;
        if (!o(e)){
            if (t = at(e)) return t;
            e = [e]
        }
        return function(e){
            for (var t, n, s, i, r = 0; r < e.length;){
                for (t = (i = rt(e[r]).split("-")).length, n = (n = rt(e[r + 1])) ? n.split("-") : null; 0 < t;){
                    if (s = at(i.slice(0, t).join("-"))) return s;
                    if (n && n.length >= t && a(i, n, !0) >= t - 1) break;
                    t--
                }
                r++
            }
            return et
        } (e)
    }
    function dt(e){
        var t,
        n = e._a;
        return n && -2 === g(e).overflow && (t = n[_e] < 0 || 11 < n[_e] ? _e: n[ye] < 1 || n[ye] > Pe(n[me], n[_e]) ? ye: n[ge] < 0 || 24 < n[ge] || 24 === n[ge] && (0 !== n[pe] || 0 !== n[ve] || 0 !== n[we]) ? ge: n[pe] < 0 || 59 < n[pe] ? pe: n[ve] < 0 || 59 < n[ve] ? ve: n[we] < 0 || 999 < n[we] ? we: -1, g(e)._overflowDayOfYear && (t < me || ye < t) && (t = ye), g(e)._overflowWeeks && -1 === t && (t = Me), g(e)._overflowWeekday && -1 === t && (t = Se), g(e).overflow = t),
        e
    }
    function ht(e, t, n){
        return null != e ? e: null != t ? t: n
    }
    function ct(e){
        var t,
        n,
        s,
        i,
        r,
        a = [];
        if (!e._d){
            var o,
            u;
            for (o = e, u = new Date(c.now()), s = o._useUTC ? [u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate()] : [u.getFullYear(), u.getMonth(), u.getDate()], e._w && null == e._a[ye] && null == e._a[_e] &&
            function(e){
                var t,
                n,
                s,
                i,
                r,
                a,
                o,
                u;
                if (null != (t = e._w).GG || null != t.W || null != t.E) r = 1,
                a = 4,
                n = ht(t.GG, e._a[me], Ie(Tt(), 1, 4).year),
                s = ht(t.W, 1),
                ((i = ht(t.E, 1)) < 1 || 7 < i) && (u = !0);
                else{
                    r = e._locale._week.dow,
                    a = e._locale._week.doy;
                    var l = Ie(Tt(), r, a);
                    n = ht(t.gg, e._a[me], l.year),
                    s = ht(t.w, l.week),
                    null != t.d ? ((i = t.d) < 0 || 6 < i) && (u = !0) : null != t.e ? (i = t.e + r, (t.e < 0 || 6 < t.e) && (u = !0)) : i = r
                }
                s < 1 || s > Ae(n, r, a) ? g(e)._overflowWeeks = !0: null != u ? g(e)._overflowWeekday = !0: (o = Ee(n, s, i, r, a), e._a[me] = o.year, e._dayOfYear = o.dayOfYear)
            } (e), null != e._dayOfYear && (r = ht(e._a[me], s[me]), (e._dayOfYear > De(r) || 0 === e._dayOfYear) && (g(e)._overflowDayOfYear = !0), n = Ge(r, 0, e._dayOfYear), e._a[_e] = n.getUTCMonth(), e._a[ye] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = a[t] = s[t];
            for (; t < 7; t++) e._a[t] = a[t] = null == e._a[t] ? 2 === t ? 1: 0: e._a[t];
            24 === e._a[ge] && 0 === e._a[pe] && 0 === e._a[ve] && 0 === e._a[we] && (e._nextDay = !0, e._a[ge] = 0),
            e._d = (e._useUTC ? Ge: function(e, t, n, s, i, r, a){
                var o = new Date(e, t, n, s, i, r, a);
                return e < 100 && 0 <= e && isFinite(o.getFullYear()) && o.setFullYear(e),
                o
            }).apply(null, a),
            i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
            null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            e._nextDay && (e._a[ge] = 24),
            e._w && void 0 !== e._w.d && e._w.d !== i && (g(e).weekdayMismatch = !0)
        }
    }
    var ft = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    mt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    _t = /Z|[+-]\d\d(?::?\d\d)?/,
    yt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
    gt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
    pt = /^\/?Date\((\-?\d+)/i;
    function vt(e){
        var t,
        n,
        s,
        i,
        r,
        a,
        o = e._i,
        u = ft.exec(o) || mt.exec(o);
        if (u){
            for (g(e).iso = !0, t = 0, n = yt.length; t < n; t++) if (yt[t][1].exec(u[1])){
                i = yt[t][0],
                s = !1 !== yt[t][2];
                break
            }
            if (null == i) return void(e._isValid = !1);
            if (u[3]){
                for (t = 0, n = gt.length; t < n; t++) if (gt[t][1].exec(u[3])){
                    r = (u[2] || " ") + gt[t][0];
                    break
                }
                if (null == r) return void(e._isValid = !1)
            }
            if (!s && null != r) return void(e._isValid = !1);
            if (u[4]){
                if (!_t.exec(u[4])) return void(e._isValid = !1);
                a = "Z"
            }
            e._f = i + (r || "") + (a || ""),
            kt(e)
        } else e._isValid = !1
    }
    var wt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
    function Mt(e, t, n, s, i, r){
        var a = [function(e){
            var t = parseInt(e, 10);{
                if (t <= 49) return 2e3 + t;
                if (t <= 999) return 1900 + t
            }
            return t
        } (e), Re.indexOf(t), parseInt(n, 10), parseInt(s, 10), parseInt(i, 10)];
        return r && a.push(parseInt(r, 10)),
        a
    }
    var St = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    function Dt(e){
        var t,
        n,
        s,
        i = wt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim());
        if (i){
            var r = Mt(i[4], i[3], i[2], i[5], i[6], i[7]);
            if (t = i[1], n = r, s = e, t && Ze.indexOf(t) !== new Date(n[0], n[1], n[2]).getDay() && (g(s).weekdayMismatch = !0, !(s._isValid = !1))) return;
            e._a = r,
            e._tzm = function(e, t, n){
                if (e) return St[e];
                if (t) return 0;
                var s = parseInt(n, 10),
                i = s % 100;
                return (s - i) / 100 * 60 + i
            } (i[8], i[9], i[10]),
            e._d = Ge.apply(null, e._a),
            e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            g(e).rfc2822 = !0
        } else e._isValid = !1
    }
    function kt(e){
        if (e._f !== c.ISO_8601) if (e._f !== c.RFC_2822){
            e._a = [],
            g(e).empty = !0;
            var t,
            n,
            s,
            i,
            r,
            a,
            o,
            u,
            l = "" + e._i,
            d = l.length,
            h = 0;
            for (s = j(e._f, e._locale).match(N) || [], t = 0; t < s.length; t++) i = s[t],
            (n = (l.match(le(i, e)) || [])[0]) && (0 < (r = l.substr(0, l.indexOf(n))).length && g(e).unusedInput.push(r), l = l.slice(l.indexOf(n) + n.length), h += n.length),
            E[i] ? (n ? g(e).empty = !1: g(e).unusedTokens.push(i), a = i, u = e, null != (o = n) && m(he, a) && he[a](o, u._a, u, a)) : e._strict && !n && g(e).unusedTokens.push(i);
            g(e).charsLeftOver = d - h,
            0 < l.length && g(e).unusedInput.push(l),
            e._a[ge] <= 12 && !0 === g(e).bigHour && 0 < e._a[ge] && (g(e).bigHour = void 0),
            g(e).parsedDateParts = e._a.slice(0),
            g(e).meridiem = e._meridiem,
            e._a[ge] = function(e, t, n){
                var s;
                if (null == n) return t;
                return null != e.meridiemHour ? e.meridiemHour(t, n) : (null != e.isPM && ((s = e.isPM(n)) && t < 12 && (t += 12), s || 12 !== t || (t = 0)), t)
            } (e._locale, e._a[ge], e._meridiem),
            ct(e),
            dt(e)
        } else Dt(e);
        else vt(e)
    }
    function Yt(e){
        var t,
        n,
        s,
        i,
        r = e._i,
        a = e._f;
        return e._locale = e._locale || lt(e._l),
        null === r || void 0 === a && "" === r ? v({
            nullInput: !0
        }) : ("string" == typeof r && (e._i = r = e._locale.preparse(r)), S(r) ? new M(dt(r)) : (h(r) ? e._d = r: o(a) ?
        function(e){
            var t,
            n,
            s,
            i,
            r;
            if (0 === e._f.length) return g(e).invalidFormat = !0,
            e._d = new Date(NaN);
            for (i = 0; i < e._f.length; i++) r = 0,
            t = w({},
            e),
            null != e._useUTC && (t._useUTC = e._useUTC),
            t._f = e._f[i],
            kt(t),
            p(t) && (r += g(t).charsLeftOver, r += 10 * g(t).unusedTokens.length, g(t).score = r, (null == s || r < s) && (s = r, n = t));
            _(e, n || t)
        } (e) : a ? kt(e) : l(n = (t = e)._i) ? t._d = new Date(c.now()) : h(n) ? t._d = new Date(n.valueOf()) : "string" == typeof n ? (s = t, null === (i = pt.exec(s._i)) ? (vt(s), !1 === s._isValid && (delete s._isValid, Dt(s), !1 === s._isValid && (delete s._isValid, c.createFromInputFallback(s)))) : s._d = new Date( + i[1])) : o(n) ? (t._a = f(n.slice(0),
        function(e){
            return parseInt(e, 10)
        }), ct(t)) : u(n) ?
        function(e){
            if (!e._d){
                var t = C(e._i);
                e._a = f([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond],
                function(e){
                    return e && parseInt(e, 10)
                }),
                ct(e)
            }
        } (t) : d(n) ? t._d = new Date(n) : c.createFromInputFallback(t), p(e) || (e._d = null), e))
    }
    function Ot(e, t, n, s, i){
        var r,
        a = {};
        return ! 0 !== n && !1 !== n || (s = n, n = void 0),
        (u(e) &&
        function(e){
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
            var t;
            for (t in e) if (e.hasOwnProperty(t)) return ! 1;
            return ! 0
        } (e) || o(e) && 0 === e.length) && (e = void 0),
        a._isAMomentObject = !0,
        a._useUTC = a._isUTC = i,
        a._l = n,
        a._i = e,
        a._f = t,
        a._strict = s,
        (r = new M(dt(Yt(a))))._nextDay && (r.add(1, "d"), r._nextDay = void 0),
        r
    }
    function Tt(e, t, n, s){
        return Ot(e, t, n, s, !1)
    }
    c.createFromInputFallback = n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function(e){
        e._d = new Date(e._i + (e._useUTC ? " UTC": ""))
    }),
    c.ISO_8601 = function(){},
    c.RFC_2822 = function(){};
    var xt = n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
    function(){
        var e = Tt.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this: e: v()
    }),
    bt = n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
    function(){
        var e = Tt.apply(null, arguments);
        return this.isValid() && e.isValid() ? this < e ? this: e: v()
    });
    function Pt(e, t){
        var n,
        s;
        if (1 === t.length && o(t[0]) && (t = t[0]), !t.length) return Tt();
        for (n = t[0], s = 1; s < t.length; ++s) t[s].isValid() && !t[s][e](n) || (n = t[s]);
        return n
    }
    var Wt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    function Ht(e){
        var t = C(e),
        n = t.year || 0,
        s = t.quarter || 0,
        i = t.month || 0,
        r = t.week || 0,
        a = t.day || 0,
        o = t.hour || 0,
        u = t.minute || 0,
        l = t.second || 0,
        d = t.millisecond || 0;
        this._isValid = function(e){
            for (var t in e) if ( - 1 === Ye.call(Wt, t) || null != e[t] && isNaN(e[t])) return ! 1;
            for (var n = !1, s = 0; s < Wt.length; ++s) if (e[Wt[s]]){
                if (n) return ! 1;
                parseFloat(e[Wt[s]]) !== k(e[Wt[s]]) && (n = !0)
            }
            return ! 0
        } (t),
        this._milliseconds = +d + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60,
        this._days = +a + 7 * r,
        this._months = +i + 3 * s + 12 * n,
        this._data = {},
        this._locale = lt(),
        this._bubble()
    }
    function Rt(e){
        return e instanceof Ht
    }
    function Ct(e){
        return e < 0 ? -1 * Math.round( - 1 * e) : Math.round(e)
    }
    function Ft(e, n){
        I(e, 0, 0,
        function(){
            var e = this.utcOffset(),
            t = "+";
            return e < 0 && (e = -e, t = "-"),
            t + U(~~ (e / 60), 2) + n + U(~~e % 60, 2)
        })
    }
    Ft("Z", ":"),
    Ft("ZZ", ""),
    ue("Z", re),
    ue("ZZ", re),
    ce(["Z", "ZZ"],
    function(e, t, n){
        n._useUTC = !0,
        n._tzm = Ut(re, e)
    });
    var Lt = /([\+\-]|\d\d)/gi;
    function Ut(e, t){
        var n = (t || "").match(e);
        if (null === n) return null;
        var s = ((n[n.length - 1] || []) + "").match(Lt) || ["-", 0, 0],
        i = 60 * s[1] + k(s[2]);
        return 0 === i ? 0: "+" === s[0] ? i: -i
    }
    function Nt(e, t){
        var n,
        s;
        return t._isUTC ? (n = t.clone(), s = (S(e) || h(e) ? e.valueOf() : Tt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + s), c.updateOffset(n, !1), n) : Tt(e).local()
    }
    function Gt(e){
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
    }
    function Vt(){
        return !! this.isValid() && (this._isUTC && 0 === this._offset)
    }
    c.updateOffset = function(){};
    var Et = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
    It = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function At(e, t){
        var n,
        s,
        i,
        r = e,
        a = null;
        return Rt(e) ? r = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        }: d(e) ? (r = {},
        t ? r[t] = e: r.milliseconds = e) : (a = Et.exec(e)) ? (n = "-" === a[1] ? -1: 1, r = {
            y: 0,
            d: k(a[ye]) * n,
            h: k(a[ge]) * n,
            m: k(a[pe]) * n,
            s: k(a[ve]) * n,
            ms: k(Ct(1e3 * a[we])) * n
        }) : (a = It.exec(e)) ? (n = "-" === a[1] ? -1: (a[1], 1), r = {
            y: jt(a[2], n),
            M: jt(a[3], n),
            w: jt(a[4], n),
            d: jt(a[5], n),
            h: jt(a[6], n),
            m: jt(a[7], n),
            s: jt(a[8], n)
        }) : null == r ? r = {}: "object" == typeof r && ("from" in r || "to" in r) && (i = function(e, t){
            var n;
            if (!e.isValid() || !t.isValid()) return{
                milliseconds: 0,
                months: 0
            };
            t = Nt(t, e),
            e.isBefore(t) ? n = Zt(e, t) : ((n = Zt(t, e)).milliseconds = -n.milliseconds, n.months = -n.months);
            return n
        } (Tt(r.from), Tt(r.to)), (r = {}).ms = i.milliseconds, r.M = i.months),
        s = new Ht(r),
        Rt(e) && m(e, "_locale") && (s._locale = e._locale),
        s
    }
    function jt(e, t){
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0: n) * t
    }
    function Zt(e, t){
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()),
        e.clone().add(n.months, "M").isAfter(t) && --n.months,
        n.milliseconds = +t - +e.clone().add(n.months, "M"),
        n
    }
    function zt(s, i){
        return function(e, t){
            var n;
            return null === t || isNaN( + t) || (T(i, "moment()." + i + "(period, number) is deprecated. Please use moment()." + i + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = e, e = t, t = n),
            $t(this, At(e = "string" == typeof e ? +e: e, t), s),
            this
        }
    }
    function $t(e, t, n, s){
        var i = t._milliseconds,
        r = Ct(t._days),
        a = Ct(t._months);
        e.isValid() && (s = null == s || s, a && Ce(e, xe(e, "Month") + a * n), r && be(e, "Date", xe(e, "Date") + r * n), i && e._d.setTime(e._d.valueOf() + i * n), s && c.updateOffset(e, r || a))
    }
    At.fn = Ht.prototype,
    At.invalid = function(){
        return At(NaN)
    };
    var qt = zt(1, "add"),
    Jt = zt( - 1, "subtract");
    function Bt(e, t){
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
        s = e.clone().add(n, "months");
        return - (n + (t - s < 0 ? (t - s) / (s - e.clone().add(n - 1, "months")) : (t - s) / (e.clone().add(n + 1, "months") - s))) || 0
    }
    function Qt(e){
        var t;
        return void 0 === e ? this._locale._abbr: (null != (t = lt(e)) && (this._locale = t), this)
    }
    c.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
    c.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Xt = n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function(e){
        return void 0 === e ? this.localeData() : this.locale(e)
    });
    function Kt(){
        return this._locale
    }
    function en(e, t){
        I(0, [e, e.length], 0, t)
    }
    function tn(e, t, n, s, i){
        var r;
        return null == e ? Ie(this, s, i).year: ((r = Ae(e, s, i)) < t && (t = r),
        function(e, t, n, s, i){
            var r = Ee(e, t, n, s, i),
            a = Ge(r.year, 0, r.dayOfYear);
            return this.year(a.getUTCFullYear()),
            this.month(a.getUTCMonth()),
            this.date(a.getUTCDate()),
            this
        }.call(this, e, t, n, s, i))
    }
    I(0, ["gg", 2], 0,
    function(){
        return this.weekYear() % 100
    }),
    I(0, ["GG", 2], 0,
    function(){
        return this.isoWeekYear() % 100
    }),
    en("gggg", "weekYear"),
    en("ggggg", "weekYear"),
    en("GGGG", "isoWeekYear"),
    en("GGGGG", "isoWeekYear"),
    H("weekYear", "gg"),
    H("isoWeekYear", "GG"),
    L("weekYear", 1),
    L("isoWeekYear", 1),
    ue("G", se),
    ue("g", se),
    ue("GG", B, z),
    ue("gg", B, z),
    ue("GGGG", ee, q),
    ue("gggg", ee, q),
    ue("GGGGG", te, J),
    ue("ggggg", te, J),
    fe(["gggg", "ggggg", "GGGG", "GGGGG"],
    function(e, t, n, s){
        t[s.substr(0, 2)] = k(e)
    }),
    fe(["gg", "GG"],
    function(e, t, n, s){
        t[s] = c.parseTwoDigitYear(e)
    }),
    I("Q", 0, "Qo", "quarter"),
    H("quarter", "Q"),
    L("quarter", 7),
    ue("Q", Z),
    ce("Q",
    function(e, t){
        t[_e] = 3 * (k(e) - 1)
    }),
    I("D", ["DD", 2], "Do", "date"),
    H("date", "D"),
    L("date", 9),
    ue("D", B),
    ue("DD", B, z),
    ue("Do",
    function(e, t){
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse: t._dayOfMonthOrdinalParseLenient
    }),
    ce(["D", "DD"], ye),
    ce("Do",
    function(e, t){
        t[ye] = k(e.match(B)[0])
    });
    var nn = Te("Date", !0);
    I("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    H("dayOfYear", "DDD"),
    L("dayOfYear", 4),
    ue("DDD", K),
    ue("DDDD", $),
    ce(["DDD", "DDDD"],
    function(e, t, n){
        n._dayOfYear = k(e)
    }),
    I("m", ["mm", 2], 0, "minute"),
    H("minute", "m"),
    L("minute", 14),
    ue("m", B),
    ue("mm", B, z),
    ce(["m", "mm"], pe);
    var sn = Te("Minutes", !1);
    I("s", ["ss", 2], 0, "second"),
    H("second", "s"),
    L("second", 15),
    ue("s", B),
    ue("ss", B, z),
    ce(["s", "ss"], ve);
    var rn,
    an = Te("Seconds", !1);
    for (I("S", 0, 0,
    function(){
        return~~ (this.millisecond() / 100)
    }), I(0, ["SS", 2], 0,
    function(){
        return~~ (this.millisecond() / 10)
    }), I(0, ["SSS", 3], 0, "millisecond"), I(0, ["SSSS", 4], 0,
    function(){
        return 10 * this.millisecond()
    }), I(0, ["SSSSS", 5], 0,
    function(){
        return 100 * this.millisecond()
    }), I(0, ["SSSSSS", 6], 0,
    function(){
        return 1e3 * this.millisecond()
    }), I(0, ["SSSSSSS", 7], 0,
    function(){
        return 1e4 * this.millisecond()
    }), I(0, ["SSSSSSSS", 8], 0,
    function(){
        return 1e5 * this.millisecond()
    }), I(0, ["SSSSSSSSS", 9], 0,
    function(){
        return 1e6 * this.millisecond()
    }), H("millisecond", "ms"), L("millisecond", 16), ue("S", K, Z), ue("SS", K, z), ue("SSS", K, $), rn = "SSSS"; rn.length <= 9; rn += "S") ue(rn, ne);
    function on(e, t){
        t[we] = k(1e3 * ("0." + e))
    }
    for (rn = "S"; rn.length <= 9; rn += "S") ce(rn, on);
    var un = Te("Milliseconds", !1);
    I("z", 0, 0, "zoneAbbr"),
    I("zz", 0, 0, "zoneName");
    var ln = M.prototype;
    function dn(e){
        return e
    }
    ln.add = qt,
    ln.calendar = function(e, t){
        var n = e || Tt(),
        s = Nt(n, this).startOf("day"),
        i = c.calendarFormat(this, s) || "sameElse",
        r = t && (x(t[i]) ? t[i].call(this, n) : t[i]);
        return this.format(r || this.localeData().calendar(i, this, Tt(n)))
    },
    ln.clone = function(){
        return new M(this)
    },
    ln.diff = function(e, t, n){
        var s,
        i,
        r;
        if (!this.isValid()) return NaN;
        if (! (s = Nt(e, this)).isValid()) return NaN;
        switch (i = 6e4 * (s.utcOffset() - this.utcOffset()), t = R(t)){
        case "year":
            r = Bt(this, s) / 12;
            break;
        case "month":
            r = Bt(this, s);
            break;
        case "quarter":
            r = Bt(this, s) / 3;
            break;
        case "second":
            r = (this - s) / 1e3;
            break;
        case "minute":
            r = (this - s) / 6e4;
            break;
        case "hour":
            r = (this - s) / 36e5;
            break;
        case "day":
            r = (this - s - i) / 864e5;
            break;
        case "week":
            r = (this - s - i) / 6048e5;
            break;
        default:
            r = this - s
        }
        return n ? r: D(r)
    },
    ln.endOf = function(e){
        return void 0 === (e = R(e)) || "millisecond" === e ? this: ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week": e).subtract(1, "ms"))
    },
    ln.format = function(e){
        e || (e = this.isUtc() ? c.defaultFormatUtc: c.defaultFormat);
        var t = A(this, e);
        return this.localeData().postformat(t)
    },
    ln.from = function(e, t){
        return this.isValid() && (S(e) && e.isValid() || Tt(e).isValid()) ? At({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    },
    ln.fromNow = function(e){
        return this.from(Tt(), e)
    },
    ln.to = function(e, t){
        return this.isValid() && (S(e) && e.isValid() || Tt(e).isValid()) ? At({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    },
    ln.toNow = function(e){
        return this.to(Tt(), e)
    },
    ln.get = function(e){
        return x(this[e = R(e)]) ? this[e]() : this
    },
    ln.invalidAt = function(){
        return g(this).overflow
    },
    ln.isAfter = function(e, t){
        var n = S(e) ? e: Tt(e);
        return ! (!this.isValid() || !n.isValid()) && ("millisecond" === (t = R(l(t) ? "millisecond": t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
    },
    ln.isBefore = function(e, t){
        var n = S(e) ? e: Tt(e);
        return ! (!this.isValid() || !n.isValid()) && ("millisecond" === (t = R(l(t) ? "millisecond": t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
    },
    ln.isBetween = function(e, t, n, s){
        return ("(" === (s = s || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === s[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
    },
    ln.isSame = function(e, t){
        var n,
        s = S(e) ? e: Tt(e);
        return ! (!this.isValid() || !s.isValid()) && ("millisecond" === (t = R(t || "millisecond")) ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
    },
    ln.isSameOrAfter = function(e, t){
        return this.isSame(e, t) || this.isAfter(e, t)
    },
    ln.isSameOrBefore = function(e, t){
        return this.isSame(e, t) || this.isBefore(e, t)
    },
    ln.isValid = function(){
        return p(this)
    },
    ln.lang = Xt,
    ln.locale = Qt,
    ln.localeData = Kt,
    ln.max = bt,
    ln.min = xt,
    ln.parsingFlags = function(){
        return _({},
        g(this))
    },
    ln.set = function(e, t){
        if ("object" == typeof e) for (var n = function(e){
            var t = [];
            for (var n in e) t.push({
                unit: n,
                priority: F[n]
            });
            return t.sort(function(e, t){
                return e.priority - t.priority
            }),
            t
        } (e = C(e)), s = 0; s < n.length; s++) this[n[s].unit](e[n[s].unit]);
        else if (x(this[e = R(e)])) return this[e](t);
        return this
    },
    ln.startOf = function(e){
        switch (e = R(e)){
        case "year":
            this.month(0);
        case "quarter":
        case "month":
            this.date(1);
        case "week":
        case "isoWeek":
        case "day":
        case "date":
            this.hours(0);
        case "hour":
            this.minutes(0);
        case "minute":
            this.seconds(0);
        case "second":
            this.milliseconds(0)
        }
        return "week" === e && this.weekday(0),
        "isoWeek" === e && this.isoWeekday(1),
        "quarter" === e && this.month(3 * Math.floor(this.month() / 3)),
        this
    },
    ln.subtract = Jt,
    ln.toArray = function(){
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    },
    ln.toObject = function(){
        var e = this;
        return{
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    },
    ln.toDate = function(){
        return new Date(this.valueOf())
    },
    ln.toISOString = function(e){
        if (!this.isValid()) return null;
        var t = !0 !== e,
        n = t ? this.clone().utc() : this;
        return n.year() < 0 || 9999 < n.year() ? A(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]": "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : x(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", A(n, "Z")) : A(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]": "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    },
    ln.inspect = function(){
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e = "moment",
        t = "";
        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc": "moment.parseZone", t = "Z");
        var n = "[" + e + '("]',
        s = 0 <= this.year() && this.year() <= 9999 ? "YYYY": "YYYYYY",
        i = t + '[")]';
        return this.format(n + s + "-MM-DD[T]HH:mm:ss.SSS" + i)
    },
    ln.toJSON = function(){
        return this.isValid() ? this.toISOString() : null
    },
    ln.toString = function(){
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    },
    ln.unix = function(){
        return Math.floor(this.valueOf() / 1e3)
    },
    ln.valueOf = function(){
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    },
    ln.creationData = function(){
        return{
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    },
    ln.year = Oe,
    ln.isLeapYear = function(){
        return ke(this.year())
    },
    ln.weekYear = function(e){
        return tn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    },
    ln.isoWeekYear = function(e){
        return tn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    },
    ln.quarter = ln.quarters = function(e){
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    },
    ln.month = Fe,
    ln.daysInMonth = function(){
        return Pe(this.year(), this.month())
    },
    ln.week = ln.weeks = function(e){
        var t = this.localeData().week(this);
        return null == e ? t: this.add(7 * (e - t), "d")
    },
    ln.isoWeek = ln.isoWeeks = function(e){
        var t = Ie(this, 1, 4).week;
        return null == e ? t: this.add(7 * (e - t), "d")
    },
    ln.weeksInYear = function(){
        var e = this.localeData()._week;
        return Ae(this.year(), e.dow, e.doy)
    },
    ln.isoWeeksInYear = function(){
        return Ae(this.year(), 1, 4)
    },
    ln.date = nn,
    ln.day = ln.days = function(e){
        if (!this.isValid()) return null != e ? this: NaN;
        var t,
        n,
        s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (t = e, n = this.localeData(), e = "string" != typeof t ? t: isNaN(t) ? "number" == typeof(t = n.weekdaysParse(t)) ? t: null: parseInt(t, 10), this.add(e - s, "d")) : s
    },
    ln.weekday = function(e){
        if (!this.isValid()) return null != e ? this: NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t: this.add(e - t, "d")
    },
    ln.isoWeekday = function(e){
        if (!this.isValid()) return null != e ? this: NaN;
        if (null != e){
            var t = (n = e, s = this.localeData(), "string" == typeof n ? s.weekdaysParse(n) % 7 || 7: isNaN(n) ? null: n);
            return this.day(this.day() % 7 ? t: t - 7)
        }
        return this.day() || 7;
        var n,
        s
    },
    ln.dayOfYear = function(e){
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t: this.add(e - t, "d")
    },
    ln.hour = ln.hours = tt,
    ln.minute = ln.minutes = sn,
    ln.second = ln.seconds = an,
    ln.millisecond = ln.milliseconds = un,
    ln.utcOffset = function(e, t, n){
        var s,
        i = this._offset || 0;
        if (!this.isValid()) return null != e ? this: NaN;
        if (null != e){
            if ("string" == typeof e){
                if (null === (e = Ut(re, e))) return this
            } else Math.abs(e) < 16 && !n && (e *= 60);
            return ! this._isUTC && t && (s = Gt(this)),
            this._offset = e,
            this._isUTC = !0,
            null != s && this.add(s, "m"),
            i !== e && (!t || this._changeInProgress ? $t(this, At(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, c.updateOffset(this, !0), this._changeInProgress = null)),
            this
        }
        return this._isUTC ? i: Gt(this)
    },
    ln.utc = function(e){
        return this.utcOffset(0, e)
    },
    ln.local = function(e){
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Gt(this), "m")),
        this
    },
    ln.parseZone = function(){
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i){
            var e = Ut(ie, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
    },
    ln.hasAlignedHourOffset = function(e){
        return !! this.isValid() && (e = e ? Tt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
    },
    ln.isDST = function(){
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    },
    ln.isLocal = function(){
        return !! this.isValid() && !this._isUTC
    },
    ln.isUtcOffset = function(){
        return !! this.isValid() && this._isUTC
    },
    ln.isUtc = Vt,
    ln.isUTC = Vt,
    ln.zoneAbbr = function(){
        return this._isUTC ? "UTC": ""
    },
    ln.zoneName = function(){
        return this._isUTC ? "Coordinated Universal Time": ""
    },
    ln.dates = n("dates accessor is deprecated. Use date instead.", nn),
    ln.months = n("months accessor is deprecated. Use month instead", Fe),
    ln.years = n("years accessor is deprecated. Use year instead", Oe),
    ln.zone = n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
    function(e, t){
        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
    }),
    ln.isDSTShifted = n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
    function(){
        if (!l(this._isDSTShifted)) return this._isDSTShifted;
        var e = {};
        if (w(e, this), (e = Yt(e))._a){
            var t = e._isUTC ? y(e._a) : Tt(e._a);
            this._isDSTShifted = this.isValid() && 0 < a(e._a, t.toArray())
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    });
    var hn = P.prototype;
    function cn(e, t, n, s){
        var i = lt(),
        r = y().set(s, t);
        return i[n](r, e)
    }
    function fn(e, t, n){
        if (d(e) && (t = e, e = void 0), e = e || "", null != t) return cn(e, t, n, "month");
        var s,
        i = [];
        for (s = 0; s < 12; s++) i[s] = cn(e, s, n, "month");
        return i
    }
    function mn(e, t, n, s){
        "boolean" == typeof e ? d(t) && (n = t, t = void 0) : (t = e, e = !1, d(n = t) && (n = t, t = void 0)),
        t = t || "";
        var i,
        r = lt(),
        a = e ? r._week.dow: 0;
        if (null != n) return cn(t, (n + a) % 7, s, "day");
        var o = [];
        for (i = 0; i < 7; i++) o[i] = cn(t, (i + a) % 7, s, "day");
        return o
    }
    hn.calendar = function(e, t, n){
        var s = this._calendar[e] || this._calendar.sameElse;
        return x(s) ? s.call(t, n) : s
    },
    hn.longDateFormat = function(e){
        var t = this._longDateFormat[e],
        n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t: (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g,
        function(e){
            return e.slice(1)
        }), this._longDateFormat[e])
    },
    hn.invalidDate = function(){
        return this._invalidDate
    },
    hn.ordinal = function(e){
        return this._ordinal.replace("%d", e)
    },
    hn.preparse = dn,
    hn.postformat = dn,
    hn.relativeTime = function(e, t, n, s){
        var i = this._relativeTime[n];
        return x(i) ? i(e, t, n, s) : i.replace(/%d/i, e)
    },
    hn.pastFuture = function(e, t){
        var n = this._relativeTime[0 < e ? "future": "past"];
        return x(n) ? n(t) : n.replace(/%s/i, t)
    },
    hn.set = function(e){
        var t,
        n;
        for (n in e) x(t = e[n]) ? this[n] = t: this["_" + n] = t;
        this._config = e,
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    },
    hn.months = function(e, t){
        return e ? o(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || We).test(t) ? "format": "standalone"][e.month()] : o(this._months) ? this._months: this._months.standalone
    },
    hn.monthsShort = function(e, t){
        return e ? o(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[We.test(t) ? "format": "standalone"][e.month()] : o(this._monthsShort) ? this._monthsShort: this._monthsShort.standalone
    },
    hn.monthsParse = function(e, t, n){
        var s,
        i,
        r;
        if (this._monthsParseExact) return function(e, t, n){
            var s,
            i,
            r,
            a = e.toLocaleLowerCase();
            if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s) r = y([2e3, s]),
            this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(),
            this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
            return n ? "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i: null: -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i: null: "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i: -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i: null: -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i: -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i: null
        }.call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++){
            if (i = y([2e3, s]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[s] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[s] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e)) return s;
            if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
            if (!n && this._monthsParse[s].test(e)) return s
        }
    },
    hn.monthsRegex = function(e){
        return this._monthsParseExact ? (m(this, "_monthsRegex") || Ne.call(this), e ? this._monthsStrictRegex: this._monthsRegex) : (m(this, "_monthsRegex") || (this._monthsRegex = Ue), this._monthsStrictRegex && e ? this._monthsStrictRegex: this._monthsRegex)
    },
    hn.monthsShortRegex = function(e){
        return this._monthsParseExact ? (m(this, "_monthsRegex") || Ne.call(this), e ? this._monthsShortStrictRegex: this._monthsShortRegex) : (m(this, "_monthsShortRegex") || (this._monthsShortRegex = Le), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex: this._monthsShortRegex)
    },
    hn.week = function(e){
        return Ie(e, this._week.dow, this._week.doy).week
    },
    hn.firstDayOfYear = function(){
        return this._week.doy
    },
    hn.firstDayOfWeek = function(){
        return this._week.dow
    },
    hn.weekdays = function(e, t){
        return e ? o(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format": "standalone"][e.day()] : o(this._weekdays) ? this._weekdays: this._weekdays.standalone
    },
    hn.weekdaysMin = function(e){
        return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    },
    hn.weekdaysShort = function(e){
        return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    },
    hn.weekdaysParse = function(e, t, n){
        var s,
        i,
        r;
        if (this._weekdaysParseExact) return function(e, t, n){
            var s,
            i,
            r,
            a = e.toLocaleLowerCase();
            if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s) r = y([2e3, 1]).day(s),
            this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(),
            this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(),
            this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
            return n ? "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i: null: "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i: null: -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i: null: "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i: -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i: -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i: null: "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i: -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i: -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i: null: -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i: -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i: -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i: null
        }.call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++){
            if (i = y([2e3, 1]).day(s), n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[s] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[s] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[s].test(e)) return s;
            if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;
            if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;
            if (!n && this._weekdaysParse[s].test(e)) return s
        }
    },
    hn.weekdaysRegex = function(e){
        return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysStrictRegex: this._weekdaysRegex) : (m(this, "_weekdaysRegex") || (this._weekdaysRegex = $e), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex: this._weekdaysRegex)
    },
    hn.weekdaysShortRegex = function(e){
        return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysShortStrictRegex: this._weekdaysShortRegex) : (m(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = qe), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex: this._weekdaysShortRegex)
    },
    hn.weekdaysMinRegex = function(e){
        return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysMinStrictRegex: this._weekdaysMinRegex) : (m(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Je), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex: this._weekdaysMinRegex)
    },
    hn.isPM = function(e){
        return "p" === (e + "").toLowerCase().charAt(0)
    },
    hn.meridiem = function(e, t, n){
        return 11 < e ? n ? "pm": "PM": n ? "am": "AM"
    },
    ot("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e){
            var t = e % 10;
            return e + (1 === k(e % 100 / 10) ? "th": 1 === t ? "st": 2 === t ? "nd": 3 === t ? "rd": "th")
        }
    }),
    c.lang = n("moment.lang is deprecated. Use moment.locale instead.", ot),
    c.langData = n("moment.langData is deprecated. Use moment.localeData instead.", lt);
    var _n = Math.abs;
    function yn(e, t, n, s){
        var i = At(t, n);
        return e._milliseconds += s * i._milliseconds,
        e._days += s * i._days,
        e._months += s * i._months,
        e._bubble()
    }
    function gn(e){
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }
    function pn(e){
        return 4800 * e / 146097
    }
    function vn(e){
        return 146097 * e / 4800
    }
    function wn(e){
        return function(){
            return this.as(e)
        }
    }
    var Mn = wn("ms"),
    Sn = wn("s"),
    Dn = wn("m"),
    kn = wn("h"),
    Yn = wn("d"),
    On = wn("w"),
    Tn = wn("M"),
    xn = wn("y");
    function bn(e){
        return function(){
            return this.isValid() ? this._data[e] : NaN
        }
    }
    var Pn = bn("milliseconds"),
    Wn = bn("seconds"),
    Hn = bn("minutes"),
    Rn = bn("hours"),
    Cn = bn("days"),
    Fn = bn("months"),
    Ln = bn("years");
    var Un = Math.round,
    Nn = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    };
    var Gn = Math.abs;
    function Vn(e){
        return (0 < e) - (e < 0) || +e
    }
    function En(){
        if (!this.isValid()) return this.localeData().invalidDate();
        var e,
        t,
        n = Gn(this._milliseconds) / 1e3,
        s = Gn(this._days),
        i = Gn(this._months);
        t = D((e = D(n / 60)) / 60),
        n %= 60,
        e %= 60;
        var r = D(i / 12),
        a = i %= 12,
        o = s,
        u = t,
        l = e,
        d = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
        h = this.asSeconds();
        if (!h) return "P0D";
        var c = h < 0 ? "-": "",
        f = Vn(this._months) !== Vn(h) ? "-": "",
        m = Vn(this._days) !== Vn(h) ? "-": "",
        _ = Vn(this._milliseconds) !== Vn(h) ? "-": "";
        return c + "P" + (r ? f + r + "Y": "") + (a ? f + a + "M": "") + (o ? m + o + "D": "") + (u || l || d ? "T": "") + (u ? _ + u + "H": "") + (l ? _ + l + "M": "") + (d ? _ + d + "S": "")
    }
    var In = Ht.prototype;
    return In.isValid = function(){
        return this._isValid
    },
    In.abs = function(){
        var e = this._data;
        return this._milliseconds = _n(this._milliseconds),
        this._days = _n(this._days),
        this._months = _n(this._months),
        e.milliseconds = _n(e.milliseconds),
        e.seconds = _n(e.seconds),
        e.minutes = _n(e.minutes),
        e.hours = _n(e.hours),
        e.months = _n(e.months),
        e.years = _n(e.years),
        this
    },
    In.add = function(e, t){
        return yn(this, e, t, 1)
    },
    In.subtract = function(e, t){
        return yn(this, e, t, -1)
    },
    In.as = function(e){
        if (!this.isValid()) return NaN;
        var t,
        n,
        s = this._milliseconds;
        if ("month" === (e = R(e)) || "year" === e) return t = this._days + s / 864e5,
        n = this._months + pn(t),
        "month" === e ? n: n / 12;
        switch (t = this._days + Math.round(vn(this._months)), e){
        case "week":
            return t / 7 + s / 6048e5;
        case "day":
            return t + s / 864e5;
        case "hour":
            return 24 * t + s / 36e5;
        case "minute":
            return 1440 * t + s / 6e4;
        case "second":
            return 86400 * t + s / 1e3;
        case "millisecond":
            return Math.floor(864e5 * t) + s;
        default:
            throw new Error("Unknown unit " + e)
        }
    },
    In.asMilliseconds = Mn,
    In.asSeconds = Sn,
    In.asMinutes = Dn,
    In.asHours = kn,
    In.asDays = Yn,
    In.asWeeks = On,
    In.asMonths = Tn,
    In.asYears = xn,
    In.valueOf = function(){
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN
    },
    In._bubble = function(){
        var e,
        t,
        n,
        s,
        i,
        r = this._milliseconds,
        a = this._days,
        o = this._months,
        u = this._data;
        return 0 <= r && 0 <= a && 0 <= o || r <= 0 && a <= 0 && o <= 0 || (r += 864e5 * gn(vn(o) + a), o = a = 0),
        u.milliseconds = r % 1e3,
        e = D(r / 1e3),
        u.seconds = e % 60,
        t = D(e / 60),
        u.minutes = t % 60,
        n = D(t / 60),
        u.hours = n % 24,
        o += i = D(pn(a += D(n / 24))),
        a -= gn(vn(i)),
        s = D(o / 12),
        o %= 12,
        u.days = a,
        u.months = o,
        u.years = s,
        this
    },
    In.clone = function(){
        return At(this)
    },
    In.get = function(e){
        return e = R(e),
        this.isValid() ? this[e + "s"]() : NaN
    },
    In.milliseconds = Pn,
    In.seconds = Wn,
    In.minutes = Hn,
    In.hours = Rn,
    In.days = Cn,
    In.weeks = function(){
        return D(this.days() / 7)
    },
    In.months = Fn,
    In.years = Ln,
    In.humanize = function(e){
        if (!this.isValid()) return this.localeData().invalidDate();
        var t,
        n,
        s,
        i,
        r,
        a,
        o,
        u,
        l,
        d,
        h,
        c = this.localeData(),
        f = (n = !e, s = c, i = At(t = this).abs(), r = Un(i.as("s")), a = Un(i.as("m")), o = Un(i.as("h")), u = Un(i.as("d")), l = Un(i.as("M")), d = Un(i.as("y")), (h = r <= Nn.ss && ["s", r] || r < Nn.s && ["ss", r] || a <= 1 && ["m"] || a < Nn.m && ["mm", a] || o <= 1 && ["h"] || o < Nn.h && ["hh", o] || u <= 1 && ["d"] || u < Nn.d && ["dd", u] || l <= 1 && ["M"] || l < Nn.M && ["MM", l] || d <= 1 && ["y"] || ["yy", d])[2] = n, h[3] = 0 < +t, h[4] = s,
        function(e, t, n, s, i){
            return i.relativeTime(t || 1, !!n, e, s)
        }.apply(null, h));
        return e && (f = c.pastFuture( + this, f)),
        c.postformat(f)
    },
    In.toISOString = En,
    In.toString = En,
    In.toJSON = En,
    In.locale = Qt,
    In.localeData = Kt,
    In.toIsoString = n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", En),
    In.lang = Xt,
    I("X", 0, 0, "unix"),
    I("x", 0, 0, "valueOf"),
    ue("x", se),
    ue("X", /[+-]?\d+(\.\d{1,3})?/),
    ce("X",
    function(e, t, n){
        n._d = new Date(1e3 * parseFloat(e, 10))
    }),
    ce("x",
    function(e, t, n){
        n._d = new Date(k(e))
    }),
    c.version = "2.22.1",
    e = Tt,
    c.fn = ln,
    c.min = function(){
        return Pt("isBefore", [].slice.call(arguments, 0))
    },
    c.max = function(){
        return Pt("isAfter", [].slice.call(arguments, 0))
    },
    c.now = function(){
        return Date.now ? Date.now() : +new Date
    },
    c.utc = y,
    c.unix = function(e){
        return Tt(1e3 * e)
    },
    c.months = function(e, t){
        return fn(e, t, "months")
    },
    c.isDate = h,
    c.locale = ot,
    c.invalid = v,
    c.duration = At,
    c.isMoment = S,
    c.weekdays = function(e, t, n){
        return mn(e, t, n, "weekdays")
    },
    c.parseZone = function(){
        return Tt.apply(null, arguments).parseZone()
    },
    c.localeData = lt,
    c.isDuration = Rt,
    c.monthsShort = function(e, t){
        return fn(e, t, "monthsShort")
    },
    c.weekdaysMin = function(e, t, n){
        return mn(e, t, n, "weekdaysMin")
    },
    c.defineLocale = ut,
    c.updateLocale = function(e, t){
        if (null != t){
            var n,
            s,
            i = nt;
            null != (s = at(e)) && (i = s._config),
            (n = new P(t = b(i, t))).parentLocale = st[e],
            st[e] = n,
            ot(e)
        } else null != st[e] && (null != st[e].parentLocale ? st[e] = st[e].parentLocale: null != st[e] && delete st[e]);
        return st[e]
    },
    c.locales = function(){
        return s(st)
    },
    c.weekdaysShort = function(e, t, n){
        return mn(e, t, n, "weekdaysShort")
    },
    c.normalizeUnits = R,
    c.relativeTimeRounding = function(e){
        return void 0 === e ? Un: "function" == typeof e && (Un = e, !0)
    },
    c.relativeTimeThreshold = function(e, t){
        return void 0 !== Nn[e] && (void 0 === t ? Nn[e] : (Nn[e] = t, "s" === e && (Nn.ss = t - 1), !0))
    },
    c.calendarFormat = function(e, t){
        var n = e.diff(t, "days", !0);
        return n < -6 ? "sameElse": n < -1 ? "lastWeek": n < 0 ? "lastDay": n < 1 ? "sameDay": n < 2 ? "nextDay": n < 7 ? "nextWeek": "sameElse"
    },
    c.prototype = ln,
    c.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "YYYY-[W]WW",
        MONTH: "YYYY-MM"
    },
    c
});

/**
 * jquery-date-range-picker
 * @version v0.18.0
 * @link https://github.com/longbill/jquery-date-range-picker
 * @license MIT
 */
 !
function(e){
    "function" == typeof define && define.amd ? define(["jquery", "moment"], e) : "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery"), require("moment")) : e(jQuery, moment)
} (function(e, t){
    "use strict";
    e.dateRangePickerLanguages = {
    default:
        {
            selected:
            "Selected:",
            day: "Day",
            days: "Days",
            apply: "Close",
            "week-1": "mo",
            "week-2": "tu",
            "week-3": "we",
            "week-4": "th",
            "week-5": "fr",
            "week-6": "sa",
            "week-7": "su",
            "week-number": "W",
            "month-name": ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
            shortcuts: "Shortcuts",
            "custom-values": "Custom Values",
            past: "Past",
            following: "Following",
            previous: "Previous",
            "prev-week": "Week",
            "prev-month": "Month",
            "prev-year": "Year",
            next: "Next",
            "next-week": "Week",
            "next-month": "Month",
            "next-year": "Year",
            "less-than": "Date range should not be more than %d days",
            "more-than": "Date range should not be less than %d days",
            "default-more": "Please select a date range longer than %d days",
            "default-single": "Please select a date",
            "default-less": "Please select a date range less than %d days",
            "default-range": "Please select a date range between %d and %d days",
            "default-default": "Please select a date range",
            time: "Time",
            hour: "Hour",
            minute: "Minute"
        },
        id: {
            selected: "Terpilih:",
            day: "Hari",
            days: "Hari",
            apply: "Tutup",
            "week-1": "sen",
            "week-2": "sel",
            "week-3": "rab",
            "week-4": "kam",
            "week-5": "jum",
            "week-6": "sab",
            "week-7": "min",
            "week-number": "W",
            "month-name": ["januari", "februari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "desember"],
            shortcuts: "Pintas",
            "custom-values": "Nilai yang ditentukan",
            past: "Yang Lalu",
            following: "Mengikuti",
            previous: "Sebelumnya",
            "prev-week": "Minggu",
            "prev-month": "Bulan",
            "prev-year": "Tahun",
            next: "Selanjutnya",
            "next-week": "Minggu",
            "next-month": "Bulan",
            "next-year": "Tahun",
            "less-than": "Tanggal harus lebih dari %d hari",
            "more-than": "Tanggal harus kurang dari %d hari",
            "default-more": "Jarak tanggal harus lebih lama dari %d hari",
            "default-single": "Silakan pilih tanggal",
            "default-less": "Jarak rentang tanggal tidak boleh lebih lama dari %d hari",
            "default-range": "Rentang tanggal harus antara %d dan %d hari",
            "default-default": "Silakan pilih rentang tanggal",
            time: "Waktu",
            hour: "Jam",
            minute: "Menit"
        },
        az: {
            selected: "Seçildi:",
            day: " gün",
            days: " gün",
            apply: "tətbiq",
            "week-1": "1",
            "week-2": "2",
            "week-3": "3",
            "week-4": "4",
            "week-5": "5",
            "week-6": "6",
            "week-7": "7",
            "month-name": ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"],
            shortcuts: "Qısayollar",
            past: "Keçmiş",
            following: "Növbəti",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "Öncəki həftə",
            "prev-month": "Öncəki ay",
            "prev-year": "Öncəki il",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "Növbəti həftə",
            "next-month": "Növbəti ay",
            "next-year": "Növbəti il",
            "less-than": "Tarix aralığı %d gündən çox olmamalıdır",
            "more-than": "Tarix aralığı %d gündən az olmamalıdır",
            "default-more": "%d gündən çox bir tarix seçin",
            "default-single": "Tarix seçin",
            "default-less": "%d gündən az bir tarix seçin",
            "default-range": "%d və %d gün aralığında tarixlər seçin",
            "default-default": "Tarix aralığı seçin"
        },
        bg: {
            selected: "Избрано:",
            day: "Ден",
            days: "Дни",
            apply: "Затвори",
            "week-1": "пн",
            "week-2": "вт",
            "week-3": "ср",
            "week-4": "чт",
            "week-5": "пт",
            "week-6": "сб",
            "week-7": "нд",
            "week-number": "С",
            "month-name": ["януари", "февруари", "март", "април", "май", "юни", "юли", "август", "септември", "октомври", "ноември", "декември"],
            shortcuts: "Преки пътища",
            "custom-values": "Персонализирани стойности",
            past: "Минал",
            following: "Следващ",
            previous: "Предишен",
            "prev-week": "Седмица",
            "prev-month": "Месец",
            "prev-year": "Година",
            next: "Следващ",
            "next-week": "Седмица",
            "next-month": "Месец",
            "next-year": "Година",
            "less-than": "Периодът от време не трябва да е повече от %d дни",
            "more-than": "Периодът от време не трябва да е по-малко от %d дни",
            "default-more": "Моля изберете период по-дълъг от %d дни",
            "default-single": "Моля изберете дата",
            "default-less": "Моля изберете период по-къс от %d дни",
            "default-range": "Моля изберете период между %d и %d дни",
            "default-default": "Моля изберете период",
            time: "Време",
            hour: "Час",
            minute: "Минута"
        },
        cn: {
            selected: "已选择:",
            day: "天",
            days: "天",
            apply: "确定",
            "week-1": "一",
            "week-2": "二",
            "week-3": "三",
            "week-4": "四",
            "week-5": "五",
            "week-6": "六",
            "week-7": "日",
            "week-number": "周",
            "month-name": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            shortcuts: "快捷选择",
            past: "过去",
            following: "将来",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "上周",
            "prev-month": "上个月",
            "prev-year": "去年",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "下周",
            "next-month": "下个月",
            "next-year": "明年",
            "less-than": "所选日期范围不能大于%d天",
            "more-than": "所选日期范围不能小于%d天",
            "default-more": "请选择大于%d天的日期范围",
            "default-less": "请选择小于%d天的日期范围",
            "default-range": "请选择%d天到%d天的日期范围",
            "default-single": "请选择一个日期",
            "default-default": "请选择一个日期范围",
            time: "时间",
            hour: "小时",
            minute: "分钟"
        },
        cz: {
            selected: "Vybráno:",
            day: "Den",
            days: "Dny",
            apply: "Zavřít",
            "week-1": "po",
            "week-2": "út",
            "week-3": "st",
            "week-4": "čt",
            "week-5": "pá",
            "week-6": "so",
            "week-7": "ne",
            "month-name": ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"],
            shortcuts: "Zkratky",
            past: "po",
            following: "následující",
            previous: "předchozí",
            "prev-week": "týden",
            "prev-month": "měsíc",
            "prev-year": "rok",
            next: "další",
            "next-week": "týden",
            "next-month": "měsíc",
            "next-year": "rok",
            "less-than": "Rozsah data by neměl být větší než %d dnů",
            "more-than": "Rozsah data by neměl být menší než %d dnů",
            "default-more": "Prosím zvolte rozsah data větší než %d dnů",
            "default-single": "Prosím zvolte datum",
            "default-less": "Prosím zvolte rozsah data menší než %d dnů",
            "default-range": "Prosím zvolte rozsah data mezi %d a %d dny",
            "default-default": "Prosím zvolte rozsah data"
        },
        de: {
            selected: "Auswahl:",
            day: "Tag",
            days: "Tage",
            apply: "Schließen",
            "week-1": "mo",
            "week-2": "di",
            "week-3": "mi",
            "week-4": "do",
            "week-5": "fr",
            "week-6": "sa",
            "week-7": "so",
            "month-name": ["januar", "februar", "märz", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "dezember"],
            shortcuts: "Schnellwahl",
            past: "Vorherige",
            following: "Folgende",
            previous: "Vorherige",
            "prev-week": "Woche",
            "prev-month": "Monat",
            "prev-year": "Jahr",
            next: "Nächste",
            "next-week": "Woche",
            "next-month": "Monat",
            "next-year": "Jahr",
            "less-than": "Datumsbereich darf nicht größer sein als %d Tage",
            "more-than": "Datumsbereich darf nicht kleiner sein als %d Tage",
            "default-more": "Bitte mindestens %d Tage auswählen",
            "default-single": "Bitte ein Datum auswählen",
            "default-less": "Bitte weniger als %d Tage auswählen",
            "default-range": "Bitte einen Datumsbereich zwischen %d und %d Tagen auswählen",
            "default-default": "Bitte ein Start- und Enddatum auswählen",
            Time: "Zeit",
            hour: "Stunde",
            minute: "Minute"
        },
        es: {
            selected: "Seleccionado:",
            day: "Día",
            days: "Días",
            apply: "Cerrar",
            "week-1": "lu",
            "week-2": "ma",
            "week-3": "mi",
            "week-4": "ju",
            "week-5": "vi",
            "week-6": "sa",
            "week-7": "do",
            "month-name": ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            shortcuts: "Accesos directos",
            past: "Pasado",
            following: "Siguiente",
            previous: "Anterior",
            "prev-week": "Semana",
            "prev-month": "Mes",
            "prev-year": "Año",
            next: "Siguiente",
            "next-week": "Semana",
            "next-month": "Mes",
            "next-year": "Año",
            "less-than": "El rango no debería ser mayor de %d días",
            "more-than": "El rango no debería ser menor de %d días",
            "default-more": "Por favor selecciona un rango mayor a %d días",
            "default-single": "Por favor selecciona un día",
            "default-less": "Por favor selecciona un rango menor a %d días",
            "default-range": "Por favor selecciona un rango entre %d y %d días",
            "default-default": "Por favor selecciona un rango de fechas."
        },
        fr: {
            selected: "Sélection:",
            day: "Jour",
            days: "Jours",
            apply: "Fermer",
            "week-1": "lu",
            "week-2": "ma",
            "week-3": "me",
            "week-4": "je",
            "week-5": "ve",
            "week-6": "sa",
            "week-7": "di",
            "month-name": ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
            shortcuts: "Raccourcis",
            past: "Passé",
            following: "Suivant",
            previous: "Précédent",
            "prev-week": "Semaine",
            "prev-month": "Mois",
            "prev-year": "Année",
            next: "Suivant",
            "next-week": "Semaine",
            "next-month": "Mois",
            "next-year": "Année",
            "less-than": "L'intervalle ne doit pas être supérieure à %d jours",
            "more-than": "L'intervalle ne doit pas être inférieure à %d jours",
            "default-more": "Merci de choisir une intervalle supérieure à %d jours",
            "default-single": "Merci de choisir une date",
            "default-less": "Merci de choisir une intervalle inférieure %d jours",
            "default-range": "Merci de choisir une intervalle comprise entre %d et %d jours",
            "default-default": "Merci de choisir une date"
        },
        hu: {
            selected: "Kiválasztva:",
            day: "Nap",
            days: "Nap",
            apply: "Ok",
            "week-1": "h",
            "week-2": "k",
            "week-3": "sz",
            "week-4": "cs",
            "week-5": "p",
            "week-6": "sz",
            "week-7": "v",
            "month-name": ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"],
            shortcuts: "Gyorsválasztó",
            past: "Múlt",
            following: "Következő",
            previous: "Előző",
            "prev-week": "Hét",
            "prev-month": "Hónap",
            "prev-year": "Év",
            next: "Következő",
            "next-week": "Hét",
            "next-month": "Hónap",
            "next-year": "Év",
            "less-than": "A kiválasztás nem lehet több %d napnál",
            "more-than": "A kiválasztás nem lehet több %d napnál",
            "default-more": "Válassz ki egy időszakot ami hosszabb mint %d nap",
            "default-single": "Válassz egy napot",
            "default-less": "Válassz ki egy időszakot ami rövidebb mint %d nap",
            "default-range": "Válassz ki egy %d - %d nap hosszú időszakot",
            "default-default": "Válassz ki egy időszakot"
        },
        it: {
            selected: "Selezionati:",
            day: "Giorno",
            days: "Giorni",
            apply: "Chiudi",
            "week-1": "lu",
            "week-2": "ma",
            "week-3": "me",
            "week-4": "gi",
            "week-5": "ve",
            "week-6": "sa",
            "week-7": "do",
            "month-name": ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
            shortcuts: "Scorciatoie",
            past: "Scorso",
            following: "Successivo",
            previous: "Precedente",
            "prev-week": "Settimana",
            "prev-month": "Mese",
            "prev-year": "Anno",
            next: "Prossimo",
            "next-week": "Settimana",
            "next-month": "Mese",
            "next-year": "Anno",
            "less-than": "L'intervallo non dev'essere maggiore di %d giorni",
            "more-than": "L'intervallo non dev'essere minore di %d giorni",
            "default-more": "Seleziona un intervallo maggiore di %d giorni",
            "default-single": "Seleziona una data",
            "default-less": "Seleziona un intervallo minore di %d giorni",
            "default-range": "Seleziona un intervallo compreso tra i %d e i %d giorni",
            "default-default": "Seleziona un intervallo di date"
        },
        ko: {
            selected: "기간:",
            day: "일",
            days: "일간",
            apply: "닫기",
            "week-1": "월",
            "week-2": "화",
            "week-3": "수",
            "week-4": "목",
            "week-5": "금",
            "week-6": "토",
            "week-7": "일",
            "week-number": "주",
            "month-name": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            shortcuts: "단축키들",
            past: "지난(오늘기준)",
            following: "이후(오늘기준)",
            previous: "이전",
            "prev-week": "1주",
            "prev-month": "1달",
            "prev-year": "1년",
            next: "다음",
            "next-week": "1주",
            "next-month": "1달",
            "next-year": "1년",
            "less-than": "날짜 범위는 %d 일보다 많을 수 없습니다",
            "more-than": "날짜 범위는 %d 일보다 작을 수 없습니다",
            "default-more": "날짜 범위를 %d 일보다 길게 선택해 주세요",
            "default-single": "날짜를 선택해 주세요",
            "default-less": "%d 일보다 작은 날짜를 선택해 주세요",
            "default-range": "%d와 %d 일 사이의 날짜 범위를 선택해 주세요",
            "default-default": "날짜 범위를 선택해 주세요",
            time: "시각",
            hour: "시",
            minute: "분"
        },
        no: {
            selected: "Valgt:",
            day: "Dag",
            days: "Dager",
            apply: "Lukk",
            "week-1": "ma",
            "week-2": "ti",
            "week-3": "on",
            "week-4": "to",
            "week-5": "fr",
            "week-6": "lø",
            "week-7": "sø",
            "month-name": ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
            shortcuts: "Snarveier",
            "custom-values": "Egendefinerte Verdier",
            past: "Over",
            following: "Følger",
            previous: "Forrige",
            "prev-week": "Uke",
            "prev-month": "Måned",
            "prev-year": "År",
            next: "Neste",
            "next-week": "Uke",
            "next-month": "Måned",
            "next-year": "År",
            "less-than": "Datoperioden skal ikkje være lengre enn %d dager",
            "more-than": "Datoperioden skal ikkje være kortere enn %d dager",
            "default-more": "Vennligst velg ein datoperiode lengre enn %d dager",
            "default-single": "Vennligst velg ein dato",
            "default-less": "Vennligst velg ein datoperiode mindre enn %d dager",
            "default-range": "Vennligst velg ein datoperiode mellom %d og %d dager",
            "default-default": "Vennligst velg ein datoperiode",
            time: "Tid",
            hour: "Time",
            minute: "Minutter"
        },
        nl: {
            selected: "Geselecteerd:",
            day: "Dag",
            days: "Dagen",
            apply: "Ok",
            "week-1": "ma",
            "week-2": "di",
            "week-3": "wo",
            "week-4": "do",
            "week-5": "vr",
            "week-6": "za",
            "week-7": "zo",
            "month-name": ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            shortcuts: "Snelkoppelingen",
            "custom-values": "Aangepaste waarden",
            past: "Verleden",
            following: "Komend",
            previous: "Vorige",
            "prev-week": "Week",
            "prev-month": "Maand",
            "prev-year": "Jaar",
            next: "Volgende",
            "next-week": "Week",
            "next-month": "Maand",
            "next-year": "Jaar",
            "less-than": "Interval moet langer dan %d dagen zijn",
            "more-than": "Interval mag niet minder dan %d dagen zijn",
            "default-more": "Selecteer een interval langer dan %dagen",
            "default-single": "Selecteer een datum",
            "default-less": "Selecteer een interval minder dan %d dagen",
            "default-range": "Selecteer een interval tussen %d en %d dagen",
            "default-default": "Selecteer een interval",
            time: "Tijd",
            hour: "Uur",
            minute: "Minuut"
        },
        ru: {
            selected: "Выбрано:",
            day: "День",
            days: "Дней",
            apply: "Применить",
            "week-1": "пн",
            "week-2": "вт",
            "week-3": "ср",
            "week-4": "чт",
            "week-5": "пт",
            "week-6": "сб",
            "week-7": "вс",
            "month-name": ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
            shortcuts: "Быстрый выбор",
            "custom-values": "Пользовательские значения",
            past: "Прошедшие",
            following: "Следующие",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "Неделя",
            "prev-month": "Месяц",
            "prev-year": "Год",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "Неделя",
            "next-month": "Месяц",
            "next-year": "Год",
            "less-than": "Диапазон не может быть больше %d дней",
            "more-than": "Диапазон не может быть меньше %d дней",
            "default-more": "Пожалуйста выберите диапазон больше %d дней",
            "default-single": "Пожалуйста выберите дату",
            "default-less": "Пожалуйста выберите диапазон меньше %d дней",
            "default-range": "Пожалуйста выберите диапазон между %d и %d днями",
            "default-default": "Пожалуйста выберите диапазон",
            time: "Время",
            hour: "Часы",
            minute: "Минуты"
        },
        uk: {
            selected: "Вибрано:",
            day: "День",
            days: "Днів",
            apply: "Застосувати",
            "week-1": "пн",
            "week-2": "вт",
            "week-3": "ср",
            "week-4": "чт",
            "week-5": "пт",
            "week-6": "сб",
            "week-7": "нд",
            "month-name": ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"],
            shortcuts: "Швидкий вибір",
            "custom-values": "Значення користувача",
            past: "Минулі",
            following: "Наступні",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "Тиждень",
            "prev-month": "Місяць",
            "prev-year": "Рік",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "Тиждень",
            "next-month": "Місяць",
            "next-year": "Рік",
            "less-than": "Діапазон не може бути більш ніж %d днів",
            "more-than": "Діапазон не може бути меньш ніж %d днів",
            "default-more": "Будь ласка виберіть діапазон більше %d днів",
            "default-single": "Будь ласка виберіть дату",
            "default-less": "Будь ласка виберіть діапазон менше %d днів",
            "default-range": "Будь ласка виберіть діапазон між %d та %d днями",
            "default-default": "Будь ласка виберіть діапазон",
            time: "Час",
            hour: "Години",
            minute: "Хвилини"
        },
        pl: {
            selected: "Wybrany:",
            day: "Dzień",
            days: "Dni",
            apply: "Zamknij",
            "week-1": "pon",
            "week-2": "wt",
            "week-3": "śr",
            "week-4": "czw",
            "week-5": "pt",
            "week-6": "so",
            "week-7": "nd",
            "month-name": ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"],
            shortcuts: "Skróty",
            "custom-values": "Niestandardowe wartości",
            past: "Przeszłe",
            following: "Następne",
            previous: "Poprzednie",
            "prev-week": "tydzień",
            "prev-month": "miesiąc",
            "prev-year": "rok",
            next: "Następny",
            "next-week": "tydzień",
            "next-month": "miesiąc",
            "next-year": "rok",
            "less-than": "Okres nie powinien być dłuższy niż %d dni",
            "more-than": "Okres nie powinien być krótszy niż  %d ni",
            "default-more": "Wybierz okres dłuższy niż %d dni",
            "default-single": "Wybierz datę",
            "default-less": "Wybierz okres krótszy niż %d dni",
            "default-range": "Wybierz okres trwający od %d do %d dni",
            "default-default": "Wybierz okres",
            time: "Czas",
            hour: "Godzina",
            minute: "Minuta"
        },
        se: {
            selected: "Vald:",
            day: "dag",
            days: "dagar",
            apply: "godkänn",
            "week-1": "ma",
            "week-2": "ti",
            "week-3": "on",
            "week-4": "to",
            "week-5": "fr",
            "week-6": "lö",
            "week-7": "sö",
            "month-name": ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"],
            shortcuts: "genvägar",
            "custom-values": "Anpassade värden",
            past: "över",
            following: "följande",
            previous: "förra",
            "prev-week": "vecka",
            "prev-month": "månad",
            "prev-year": "år",
            next: "nästa",
            "next-week": "vecka",
            "next-month": "måned",
            "next-year": "år",
            "less-than": "Datumintervall bör inte vara mindre än %d dagar",
            "more-than": "Datumintervall bör inte vara mer än %d dagar",
            "default-more": "Välj ett datumintervall längre än %d dagar",
            "default-single": "Välj ett datum",
            "default-less": "Välj ett datumintervall mindre än %d dagar",
            "default-range": "Välj ett datumintervall mellan %d och %d dagar",
            "default-default": "Välj ett datumintervall",
            time: "tid",
            hour: "timme",
            minute: "minut"
        },
        pt: {
            selected: "Selecionado:",
            day: "Dia",
            days: "Dias",
            apply: "Fechar",
            "week-1": "seg",
            "week-2": "ter",
            "week-3": "qua",
            "week-4": "qui",
            "week-5": "sex",
            "week-6": "sab",
            "week-7": "dom",
            "week-number": "N",
            "month-name": ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
            shortcuts: "Atalhos",
            "custom-values": "Valores Personalizados",
            past: "Passado",
            following: "Seguinte",
            previous: "Anterior",
            "prev-week": "Semana",
            "prev-month": "Mês",
            "prev-year": "Ano",
            next: "Próximo",
            "next-week": "Próxima Semana",
            "next-month": "Próximo Mês",
            "next-year": "Próximo Ano",
            "less-than": "O período selecionado não deve ser maior que %d dias",
            "more-than": "O período selecionado não deve ser menor que %d dias",
            "default-more": "Selecione um período superior a %d dias",
            "default-single": "Selecione uma data",
            "default-less": "Selecione um período inferior a %d dias",
            "default-range": "Selecione um período de %d a %d dias",
            "default-default": "Selecione um período",
            time: "Tempo",
            hour: "Hora",
            minute: "Minuto"
        },
        tc: {
            selected: "已選擇:",
            day: "天",
            days: "天",
            apply: "確定",
            "week-1": "一",
            "week-2": "二",
            "week-3": "三",
            "week-4": "四",
            "week-5": "五",
            "week-6": "六",
            "week-7": "日",
            "week-number": "周",
            "month-name": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            shortcuts: "快速選擇",
            past: "過去",
            following: "將來",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "上週",
            "prev-month": "上個月",
            "prev-year": "去年",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "下周",
            "next-month": "下個月",
            "next-year": "明年",
            "less-than": "所選日期範圍不能大於%d天",
            "more-than": "所選日期範圍不能小於%d天",
            "default-more": "請選擇大於%d天的日期範圍",
            "default-less": "請選擇小於%d天的日期範圍",
            "default-range": "請選擇%d天到%d天的日期範圍",
            "default-single": "請選擇一個日期",
            "default-default": "請選擇一個日期範圍",
            time: "日期",
            hour: "小時",
            minute: "分鐘"
        },
        ja: {
            selected: "選択しました:",
            day: "日",
            days: "日々",
            apply: "閉じる",
            "week-1": "月",
            "week-2": "火",
            "week-3": "水",
            "week-4": "木",
            "week-5": "金",
            "week-6": "土",
            "week-7": "日",
            "month-name": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            shortcuts: "クイック選択",
            past: "過去",
            following: "将来",
            previous: "&nbsp;&nbsp;&nbsp;",
            "prev-week": "先週、",
            "prev-month": "先月",
            "prev-year": "昨年",
            next: "&nbsp;&nbsp;&nbsp;",
            "next-week": "来週",
            "next-month": "来月",
            "next-year": "来年",
            "less-than": "日付の範囲は ％d 日以上にすべきではありません",
            "more-than": "日付の範囲は ％d 日を下回ってはいけません",
            "default-more": "％d 日よりも長い期間を選択してください",
            "default-less": "％d 日未満の期間を選択してください",
            "default-range": "％d と％ d日の間の日付範囲を選択してください",
            "default-single": "日付を選択してください",
            "default-default": "日付範囲を選択してください",
            time: "時間",
            hour: "時間",
            minute: "分"
        },
        da: {
            selected: "Valgt:",
            day: "Dag",
            days: "Dage",
            apply: "Luk",
            "week-1": "ma",
            "week-2": "ti",
            "week-3": "on",
            "week-4": "to",
            "week-5": "fr",
            "week-6": "lö",
            "week-7": "sö",
            "month-name": ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"],
            shortcuts: "genveje",
            "custom-values": "Brugerdefinerede værdier",
            past: "Forbi",
            following: "Følgende",
            previous: "Forrige",
            "prev-week": "uge",
            "prev-month": "månad",
            "prev-year": "år",
            next: "Næste",
            "next-week": "Næste uge",
            "next-month": "Næste måned",
            "next-year": "Næste år",
            "less-than": "Dato interval bør ikke være med end %d dage",
            "more-than": "Dato interval bør ikke være mindre end %d dage",
            "default-more": "Vælg datointerval længere end %d dage",
            "default-single": "Vælg dato",
            "default-less": "Vælg datointerval mindre end %d dage",
            "default-range": "Vælg datointerval mellem %d og %d dage",
            "default-default": "Vælg datointerval",
            time: "tid",
            hour: "time",
            minute: "minut"
        },
        fi: {
            selected: "Valittu:",
            day: "Päivä",
            days: "Päivää",
            apply: "Sulje",
            "week-1": "ma",
            "week-2": "ti",
            "week-3": "ke",
            "week-4": "to",
            "week-5": "pe",
            "week-6": "la",
            "week-7": "su",
            "week-number": "V",
            "month-name": ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
            shortcuts: "Pikavalinnat",
            "custom-values": "Mukautetut Arvot",
            past: "Menneet",
            following: "Tulevat",
            previous: "Edellinen",
            "prev-week": "Viikko",
            "prev-month": "Kuukausi",
            "prev-year": "Vuosi",
            next: "Seuraava",
            "next-week": "Viikko",
            "next-month": "Kuukausi",
            "next-year": "Vuosi",
            "less-than": "Aikajakson tulisi olla vähemmän kuin %d päivää",
            "more-than": "Aikajakson ei tulisi olla vähempää kuin %d päivää",
            "default-more": "Valitse pidempi aikajakso kuin %d päivää",
            "default-single": "Valitse päivä",
            "default-less": "Valitse lyhyempi aikajakso kuin %d päivää",
            "default-range": "Valitse aikajakso %d ja %d päivän väliltä",
            "default-default": "Valitse aikajakso",
            time: "Aika",
            hour: "Tunti",
            minute: "Minuutti"
        },
        cat: {
            selected: "Seleccionats:",
            day: "Dia",
            days: "Dies",
            apply: "Tanca",
            "week-1": "Dl",
            "week-2": "Dm",
            "week-3": "Dc",
            "week-4": "Dj",
            "week-5": "Dv",
            "week-6": "Ds",
            "week-7": "Dg",
            "week-number": "S",
            "month-name": ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"],
            shortcuts: "Dreçeres",
            "custom-values": "Valors personalitzats",
            past: "Passat",
            following: "Futur",
            previous: "Anterior",
            "prev-week": "Setmana",
            "prev-month": "Mes",
            "prev-year": "Any",
            next: "Següent",
            "next-week": "Setmana",
            "next-month": "Mes",
            "next-year": "Any",
            "less-than": "El període no hauria de ser de més de %d dies",
            "more-than": "El període no hauria de ser de menys de %d dies",
            "default-more": "Perfavor selecciona un període més gran de %d dies",
            "default-single": "Perfavor selecciona una data",
            "default-less": "Perfavor selecciona un període de menys de %d dies",
            "default-range": "Perfavor selecciona un període d'entre %d i %d dies",
            "default-default": "Perfavor selecciona un període",
            time: "Temps",
            hour: "Hora",
            minute: "Minut"
        }
    },
    e.fn.dateRangePicker = function(a){
        function n(t, a){
            return a.contains(t.target) || t.target == a || void 0 != a.childNodes && e.inArray(t.target, a.childNodes) >= 0
        }
        function r(){
            if (!a.inline){
                var t = e(le).offset();
                if ("relative" == e(a.container).css("position")){
                    var n = e(a.container).offset(),
                    r = Math.max(0, t.left + se.outerWidth() - e("body").width() + 16);
                    se.css({
                        top: t.top - n.top + e(le).outerHeight() + 4,
                        left: t.left - n.left - r
                    })
                } else t.left < 460 ? se.css({
                    top: t.top + e(le).outerHeight() + parseInt(e("body").css("border-top") || 0, 10),
                    left: t.left
                }) : se.css({
                    top: t.top + e(le).outerHeight() + parseInt(e("body").css("border-top") || 0, 10),
                    /*left: t.left + e(le).width() - se.width() - 16*/
                    left: t.left
                })
            }
        }
        function s(t){
            F(),
            o(),
            a.customOpenAnimation ? a.customOpenAnimation.call(se.get(0),
            function(){
                e(le).trigger("datepicker-opened", {
                    relatedTarget: se
                })
            }) : se.slideDown(t,
            function(){
                e(le).trigger("datepicker-opened", {
                    relatedTarget: se
                })
            }),
            e(le).trigger("datepicker-open", {
                relatedTarget: se
            }),
            B(),
            d(),
            r()
        }
        function o(){
            var e = a.getValue.call(ue),
            n = e ? e.split(a.separator) : "";
            if (n && (1 == n.length && a.singleDate || n.length >= 2)){
                var r = a.format;
                r.match(/Do/) && (r = r.replace(/Do/, "D"), n[0] = n[0].replace(/(\d+)(th|nd|st)/, "$1"), n.length >= 2 && (n[1] = n[1].replace(/(\d+)(th|nd|st)/, "$1"))),
                de = !1,
                n.length >= 2 ? C(i(n[0], r, t.locale(a.language)), i(n[1], r, t.locale(a.language))) : 1 == n.length && a.singleDate && O(i(n[0], r, t.locale(a.language))),
                de = !0
            }
        }
        function i(e, a, n){
            return t(e, a, n).isValid() ? t(e, a, n).toDate() : t().toDate()
        }
        function d(){
            var e = se.find(".gap").css("margin-left");
            e && (e = parseInt(e));
            var t = se.find(".month1").width(),
            a = se.find(".gap").width() + (e ? 2 * e: 0),
            n = se.find(".month2").width();
            se.find(".month-wrapper").width(t + a + n)
        }
        function l(e, a){
            se.find("." + e + " input[type=range].hour-range").val(t(a).hours()),
            se.find("." + e + " input[type=range].minute-range").val(t(a).minutes()),
            h(e, t(a).format("HH"), t(a).format("mm"))
        }
        function u(e, n){
            a[e] = parseInt(t(parseInt(n)).startOf("day").add(t(a[e + "Time"]).format("HH"), "h").add(t(a[e + "Time"]).format("mm"), "m").valueOf())
        }
        function m(){
            l("time1", a.start),
            l("time2", a.end)
        }
        function h(e, n, r){
            function s(e, t){
                var s = t.format("HH"),
                o = t.format("mm");
                a[e] = t.startOf("day").add(n || s, "h").add(r || o, "m").valueOf()
            }
            switch (n && se.find("." + e + " .hour-val").text(n), r && se.find("." + e + " .minute-val").text(r), e){
            case "time1":
                a.start && s("start", t(a.start)),
                s("startTime", t(a.startTime || t().valueOf()));
                break;
            case "time2":
                a.end && s("end", t(a.end)),
                s("endTime", t(a.endTime || t().valueOf()))
            }
            x(),
            M(),
            T()
        }
        function c(e){
            var n = e;
            return "week-range" === a.batchMode ? n = "monday" === a.startOfWeek ? t(parseInt(e)).startOf("isoweek").valueOf() : t(parseInt(e)).startOf("week").valueOf() : "month-range" === a.batchMode && (n = t(parseInt(e)).startOf("month").valueOf()),
            n
        }
        function p(e){
            var n = e;
            return "week-range" === a.batchMode ? n = "monday" === a.startOfWeek ? t(parseInt(e)).endOf("isoweek").valueOf() : t(parseInt(e)).endOf("week").valueOf() : "month-range" === a.batchMode && (n = t(parseInt(e)).endOf("month").valueOf()),
            n
        }
        function f(n){
            if (!n.hasClass("invalid")){
                var r = n.attr("time");
                if (n.addClass("checked"), a.singleDate ? (a.start = r, a.end = !1) : "week" === a.batchMode ? "monday" === a.startOfWeek ? (a.start = t(parseInt(r)).startOf("isoweek").valueOf(), a.end = t(parseInt(r)).endOf("isoweek").valueOf()) : (a.end = t(parseInt(r)).endOf("week").valueOf(), a.start = t(parseInt(r)).startOf("week").valueOf()) : "workweek" === a.batchMode ? (a.start = t(parseInt(r)).day(1).valueOf(), a.end = t(parseInt(r)).day(5).valueOf()) : "weekend" === a.batchMode ? (a.start = t(parseInt(r)).day(6).valueOf(), a.end = t(parseInt(r)).day(7).valueOf()) : "month" === a.batchMode ? (a.start = t(parseInt(r)).startOf("month").valueOf(), a.end = t(parseInt(r)).endOf("month").valueOf()) : a.start && a.end || !a.start && !a.end ? (a.start = c(r), a.end = !1) : a.start && (a.end = p(r), a.time.enabled && u("end", a.end)), a.time.enabled && (a.start && u("start", a.start), a.end && u("end", a.end)), !a.singleDate && a.start && a.end && a.start > a.end){
                    var s = a.end;
                    a.end = p(a.start),
                    a.start = c(s),
                    a.time.enabled && a.swapTime && m()
                }
                a.start = parseInt(a.start),
                a.end = parseInt(a.end),
                y(),
                a.start && !a.end && (e(le).trigger("datepicker-first-date-selected", {
                    date1: new Date(a.start)
                }), w(n)),
                k(r),
                x(),
                M(),
                T(),
                D()
            }
        }
        function v(e){
            var n,
            r,
            s = parseInt(e.attr("data-start-time"), 10);
            a.startWeek ? (se.find(".week-number-selected").removeClass("week-number-selected"), n = new Date(s < a.startWeek ? s: a.startWeek), r = new Date(s < a.startWeek ? a.startWeek: s), a.startWeek = !1, a.start = t(n).day("monday" == a.startOfWeek ? 1: 0).valueOf(), a.end = t(r).day("monday" == a.startOfWeek ? 7: 6).valueOf()) : (a.startWeek = s, e.addClass("week-number-selected"), n = new Date(s), a.start = t(n).day("monday" == a.startOfWeek ? 1: 0).valueOf(), a.end = t(n).day("monday" == a.startOfWeek ? 7: 6).valueOf()),
            k(),
            x(),
            M(),
            T(),
            D()
        }
        function g(e){
            if (e = parseInt(e, 10), a.startDate && R(e, a.startDate) < 0) return ! 1;
            if (a.endDate && R(e, a.endDate) > 0) return ! 1;
            if (a.start && !a.end && !a.singleDate){
                if (a.maxDays > 0 && S(e, a.start) > a.maxDays) return ! 1;
                if (a.minDays > 0 && S(e, a.start) < a.minDays) return ! 1;
                if (a.selectForward && e < a.start) return ! 1;
                if (a.selectBackward && e > a.start) return ! 1;
                if (a.beforeShowDay && "function" == typeof a.beforeShowDay){
                    for (var t = !0, n = e; S(n, a.start) > 1;){
                        if (!a.beforeShowDay(new Date(n))[0]){
                            t = !1;
                            break
                        }
                        if (Math.abs(n - a.start) < 864e5) break;
                        n > a.start && (n -= 864e5),
                        n < a.start && (n += 864e5)
                    }
                    if (!t) return ! 1
                }
            }
            return ! 0
        }
        function k(){
            return se.find(".day.invalid.tmp").removeClass("tmp invalid").addClass("valid"),
            a.start && !a.end && se.find(".day.toMonth.valid").each(function(){
                g(parseInt(e(this).attr("time"), 10)) ? e(this).addClass("valid tmp").removeClass("invalid") : e(this).addClass("invalid tmp").removeClass("valid")
            }),
            !0
        }
        function w(t){
            var n = parseInt(t.attr("time")),
            r = "";
            if (t.hasClass("has-tooltip") && t.attr("data-tooltip")) r = '<span class="tooltip-content">' + t.attr("data-tooltip") + "</span>";
            else if (!t.hasClass("invalid")) if (a.singleDate) se.find(".day.hovering").removeClass("hovering"),
            t.addClass("hovering");
            else if (se.find(".day").each(function(){
                var t = parseInt(e(this).attr("time"));
                a.start,
                a.end;
                t == n ? e(this).addClass("hovering") : e(this).removeClass("hovering"),
                a.start && !a.end && (a.start < t && n >= t || a.start > t && n <= t) ? e(this).addClass("hovering") : e(this).removeClass("hovering")
            }), a.start && !a.end){
                var s = S(n, a.start);
                a.hoveringTooltip && ("function" == typeof a.hoveringTooltip ? r = a.hoveringTooltip(s, a.start, n) : !0 === a.hoveringTooltip && s > 1 && (r = s + " " + te("days")))
            }
            if (r){
                var o = t.offset(),
                i = se.offset(),
                d = o.left - i.left,
                l = o.top - i.top;
                d += t.width() / 2;
                var u = se.find(".date-range-length-tip"),
                m = u.css({
                    visibility: "hidden",
                    display: "none"
                }).html(r).width(),
                h = u.height();
                d -= m / 2,
                l -= h,
                setTimeout(function(){
                    u.css({
                        left: d,
                        top: l,
                        display: "block",
                        visibility: "visible"
                    })
                },
                10)
            } else se.find(".date-range-length-tip").hide()
        }
        function y(){
            se.find(".day.hovering").removeClass("hovering"),
            se.find(".date-range-length-tip").hide()
        }
        function b(e){
            var n = e.val(),
            r = e.attr("name"),
            s = e.parents("table").hasClass("month1") ? "month1": "month2",
            o = "month1" === s ? "month2": "month1",
            i = !!a.startDate && t(a.startDate),
            d = !!a.endDate && t(a.endDate),
            l = t(a[s])[r](n);
            i && l.isSameOrBefore(i) && (l = i.add("month2" === s ? 1: 0, "month")),
            d && l.isSameOrAfter(d) && (l = d.add(a.singleMonth || "month1" !== s ? 0: -1, "month")),
            j(l, s),
            "month1" === s ? (a.stickyMonths || t(l).isSameOrAfter(a[o], "month")) && j(t(l).add(1, "month"), o) : (a.stickyMonths || t(l).isSameOrBefore(a[o], "month")) && j(t(l).add( - 1, "month"), o),
            B()
        }
        function D(){ ! 0 === a.singleDate ? de && a.start && a.autoClose && L() : de && a.start && a.end && a.autoClose && L()
        }
        function x(){
            var e = Math.ceil((a.end - a.start) / 864e5) + 1;
            a.singleDate ? a.start && !a.end ? se.find(".drp_top-bar").removeClass("error").addClass("normal") : se.find(".drp_top-bar").removeClass("error").removeClass("normal") : a.maxDays && e > a.maxDays ? (a.start = !1, a.end = !1, se.find(".day").removeClass("checked"), se.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(te("less-than").replace("%d", a.maxDays))) : a.minDays && e < a.minDays ? (a.start = !1, a.end = !1, se.find(".day").removeClass("checked"), se.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(te("more-than").replace("%d", a.minDays))) : a.start || a.end ? se.find(".drp_top-bar").removeClass("error").addClass("normal") : se.find(".drp_top-bar").removeClass("error").removeClass("normal"),
            a.singleDate && a.start && !a.end || !a.singleDate && a.start && a.end ? se.find(".apply-btn").removeClass("disabled") : se.find(".apply-btn").addClass("disabled"),
            a.batchMode && (a.start && a.startDate && R(a.start, a.startDate) < 0 || a.end && a.endDate && R(a.end, a.endDate) > 0) && (a.start = !1, a.end = !1, se.find(".day").removeClass("checked"))
        }
        function M(t, n){
            se.find(".start-day").html("..."),
            se.find(".end-day").html("..."),
            se.find(".selected-days").hide(),
            a.start && se.find(".start-day").html(N(new Date(parseInt(a.start)))),
            a.end && se.find(".end-day").html(N(new Date(parseInt(a.end))));
            var r;
            a.start && a.singleDate ? (se.find(".apply-btn").removeClass("disabled"), r = N(new Date(a.start)), a.setValue.call(ue, r, N(new Date(a.start)), N(new Date(a.end))), de && !n && e(le).trigger("datepicker-change", {
                value: r,
                date1: new Date(a.start)
            })) : a.start && a.end ? (se.find(".selected-days").show().find(".selected-days-num").html(S(a.end, a.start)), se.find(".apply-btn").removeClass("disabled"), r = N(new Date(a.start)) + a.separator + N(new Date(a.end)), a.setValue.call(ue, r, N(new Date(a.start)), N(new Date(a.end))), de && !n && e(le).trigger("datepicker-change", {
                value: r,
                date1: new Date(a.start),
                date2: new Date(a.end)
            })) : t ? se.find(".apply-btn").removeClass("disabled") : se.find(".apply-btn").addClass("disabled")
        }
        function S(e, a){
            return Math.abs(t(e).diff(t(a), "d")) + 1
        }
        function C(e, t, n){
            if (e.getTime() > t.getTime()){
                var r = t;
                t = e,
                e = r,
                r = null
            }
            var s = !0;
            if (a.startDate && R(e, a.startDate) < 0 && (s = !1), a.endDate && R(t, a.endDate) > 0 && (s = !1), !s) return j(a.startDate, "month1"),
            j(E(a.startDate), "month2"),
            void B();
            a.start = e.getTime(),
            a.end = t.getTime(),
            a.time.enabled && (l("time1", e), l("time2", t)),
            (a.stickyMonths || R(e, t) > 0 && 0 === H(e, t)) && (a.lookBehind ? e = q(t) : t = E(e)),
            a.stickyMonths && !1 !== a.endDate && H(t, a.endDate) > 0 && (e = q(e), t = q(t)),
            a.stickyMonths || 0 === H(e, t) && (a.lookBehind ? e = q(t) : t = E(e)),
            j(e, "month1"),
            j(t, "month2"),
            B(),
            x(),
            M(!1, n),
            D()
        }
        function O(e){
            var t = !0;
            a.startDate && R(e, a.startDate) < 0 && (t = !1),
            a.endDate && R(e, a.endDate) > 0 && (t = !1),
            t ? (a.start = e.getTime(), a.time.enabled && l("time1", e), j(e, "month1"), !0 !== a.singleMonth && j(E(e), "month2"), B(), M(), D()) : j(a.startDate, "month1")
        }
        function T(){ (a.start || a.end) && (se.find(".day").each(function(){
                var n = parseInt(e(this).attr("time")),
                r = a.start,
                s = a.end;
                a.time.enabled && (n = t(n).startOf("day").valueOf(), r = t(r || t().valueOf()).startOf("day").valueOf(), s = t(s || t().valueOf()).startOf("day").valueOf()),
                a.start && a.end && s >= n && r <= n || a.start && !a.end && t(r).format("YYYY-MM-DD") == t(n).format("YYYY-MM-DD") ? e(this).addClass("checked") : e(this).removeClass("checked"),
                a.start && t(r).format("YYYY-MM-DD") == t(n).format("YYYY-MM-DD") ? e(this).addClass("first-date-selected") : e(this).removeClass("first-date-selected"),
                a.end && t(s).format("YYYY-MM-DD") == t(n).format("YYYY-MM-DD") ? e(this).addClass("last-date-selected") : e(this).removeClass("last-date-selected")
            }), se.find(".week-number").each(function(){
                e(this).attr("data-start-time") == a.startWeek && e(this).addClass("week-number-selected")
            }))
        }
        function j(e, n){
            var r = z(e = t(e).toDate(), n),
            s = P(e, n);
            se.find("." + n + " .month-name").html(r + " " + s),
            se.find("." + n + " tbody").html(X(e)),
            a[n] = e,
            k(),
            A()
        }
        function z(e, n){
            var r,
            s = !!a.startDate && t(a.startDate).add(a.singleMonth || "month2" !== n ? 0: 1, "month"),
            o = !!a.endDate && t(a.endDate).add(a.singleMonth || "month1" !== n ? 0: -1, "month");
            return e = t(e),
            !a.monthSelect || s && o && s.isSame(o, "month") ? '<div class="month-element">' + I(e.get("month")) + "</div>": (r = [s && e.isSame(s, "year") ? s.get("month") : 0, e ? e.get("month") : 11])[0] === r[1] ? '<div class="month-element">' + I(e.get("month")) + "</div>": Y("month", V(r, e.get("month"),
            function(e){
                return I(e)
            }))
        }
        function P(e, n){
            e = t(e);
            var r,
            s = !!a.startDate && t(a.startDate).add(a.singleMonth || "month2" !== n ? 0: 1, "month"),
            o = !!a.endDate && t(a.endDate).add(a.singleMonth || "month1" !== n ? 0: -1, "month"),
            i = e.get("year"),
            d = a.yearSelect && "function" == typeof a.yearSelect;
            return ! a.yearSelect || s && o && s.isSame(t(o), "year") ? '<div class="month-element">' + i + "</div>": (r = d ? a.yearSelect(i) : a.yearSelect.slice(), r = [s ? Math.max(r[0], s.get("year")) : Math.min(r[0], i), o ? Math.min(r[1], o.get("year")) : Math.max(r[1], i)], Y("year", V(r, i)))
        }
        function V(e, t, a){
            var n = [];
            a = a ||
            function(e){
                return e
            };
            for (var r = e[0]; r <= e[1]; r++) n.push({
                value: r,
                text: a(r),
                isCurrent: r === t
            });
            return n
        }
        function Y(e, t){
            for (var a, n = '<div class="select-wrapper"><select class="' + e + '" name="' + e + '">', r = 0, s = t.length; r < s; r++) n += '<option value="' + t[r].value + '"' + (t[r].isCurrent ? " selected": "") + ">",
            n += t[r].text,
            n += "</option>",
            t[r].isCurrent && (a = t[r].text);
            return n += "</select>" + a + "</div>"
        }
        function A(){
            se.find(".day").off("click").click(function(t){
                f(e(this))
            }),
            se.find(".day").off("mouseenter").mouseenter(function(t){
                w(e(this))
            }),
            se.find(".day").off("mouseleave").mouseleave(function(e){
                se.find(".date-range-length-tip").hide(),
                a.singleDate && y()
            }),
            se.find(".week-number").off("click").click(function(t){
                v(e(this))
            }),
            se.find(".month").off("change").change(function(t){
                b(e(this))
            }),
            se.find(".year").off("change").change(function(t){
                b(e(this))
            })
        }
        function W(e, t){
            se.find("." + t).append($()),
            l(t, e)
        }
        function I(e){
            return te("month-name")[e]
        }
        function N(e){
            return t(e).format(a.format)
        }
        function B(){
            T();
            var e = parseInt(t(a.month1).format("YYYYMM")),
            n = parseInt(t(a.month2).format("YYYYMM")),
            r = Math.abs(e - n);
            r > 1 && 89 != r ? se.addClass("has-gap").removeClass("no-gap").find(".gap").css("visibility", "visible") : se.removeClass("has-gap").addClass("no-gap").find(".gap").css("visibility", "hidden");
            var s = se.find("table.month1").height(),
            o = se.find("table.month2").height();
            se.find(".gap").height(Math.max(s, o) + 10)
        }
        function L(){
            if (!a.alwaysOpen){
                var t = function(){
                    e(le).data("date-picker-opened", !1),
                    e(le).trigger("datepicker-closed", {
                        relatedTarget: se
                    })
                };
                a.customCloseAnimation ? a.customCloseAnimation.call(se.get(0), t) : e(se).slideUp(a.duration, t),
                e(le).trigger("datepicker-close", {
                    relatedTarget: se
                })
            }
        }
        function F(){
            j(a.month1, "month1"),
            j(a.month2, "month2")
        }
        function H(e, a){
            var n = parseInt(t(e).format("YYYYMM")) - parseInt(t(a).format("YYYYMM"));
            return n > 0 ? 1: 0 === n ? 0: -1
        }
        function R(e, a){
            var n = parseInt(t(e).format("YYYYMMDD")) - parseInt(t(a).format("YYYYMMDD"));
            return n > 0 ? 1: 0 === n ? 0: -1
        }
        function E(e){
            return t(e).add(1, "months").toDate()
        }
        function q(e){
            return t(e).add( - 1, "months").toDate()
        }
        function $(){
            return "<div><span>" + te("Time") + ': <span class="hour-val">00</span>:<span class="minute-val">00</span></span></div><div class="hour"><label>' + te("Hour") + ': <input type="range" class="hour-range" name="hour" min="0" max="23"></label></div><div class="minute"><label>' + te("Minute") + ': <input type="range" class="minute-range" name="minute" min="0" max="59"></label></div>'
        }
        function J(){
            var t = '<div class="date-picker-wrapper';
            a.extraClass && (t += " " + a.extraClass + " "),
            a.singleDate && (t += " single-date "),
            a.showShortcuts || (t += " no-shortcuts "),
            a.showTopbar || (t += " no-topbar "),
            a.customTopBar && (t += " custom-topbar "),
            t += '">',
            a.showTopbar && (t += '<div class="drp_top-bar">', a.customTopBar ? ("function" == typeof a.customTopBar && (a.customTopBar = a.customTopBar()), t += '<div class="custom-top">' + a.customTopBar + "</div>") : (t += '<div class="normal-top"><span class="selection-top">' + te("selected") + ' </span> <b class="start-day">...</b>', a.singleDate || (t += ' <span class="separator-day">' + a.separator + '</span> <b class="end-day">...</b> <i class="selected-days">(<span class="selected-days-num">3</span> ' + te("days") + ")</i>"), t += "</div>", t += '<div class="error-top">error</div><div class="default-top">default</div>'), t += '<input type="button" class="apply-btn disabled' + K() + '" value="' + te("apply") + '" />', t += "</div>");
            var n = a.showWeekNumbers ? 6: 5,
            r = "&lt;";
            a.customArrowPrevSymbol && (r = a.customArrowPrevSymbol);
            var s = "&gt;";
            if (a.customArrowNextSymbol && (s = a.customArrowNextSymbol), t += '<div class="month-wrapper">   <table class="month1" cellspacing="0" border="0" cellpadding="0">       <thead>           <tr class="caption">               <th>                   <span class="prev">' + r + '                   </span>               </th>               <th colspan="' + n + '" class="month-name">               </th>               <th>' + (a.singleDate || !a.stickyMonths ? '<span class="next">' + s + "</span>": "") + '               </th>           </tr>           <tr class="week-name">' + _() + "       </thead>       <tbody></tbody>   </table>", Z() && (t += '<div class="gap">' + U() + '</div><table class="month2" cellspacing="0" border="0" cellpadding="0">   <thead>   <tr class="caption">       <th>' + (a.stickyMonths ? "": '<span class="prev">' + r + "</span>") + '       </th>       <th colspan="' + n + '" class="month-name">       </th>       <th>           <span class="next">' + s + '</span>       </th>   </tr>   <tr class="week-name">' + _() + "   </thead>   <tbody></tbody></table>"), t += '<div class="dp-clearfix"></div><div class="time"><div class="time1"></div>', a.singleDate || (t += '<div class="time2"></div>'), t += '</div><div class="dp-clearfix"></div></div>', t += '<div class="footer"><button class="btn small2 btnRedate">날짜 다시 선택</button><button class="btn small2 btnSubmit">날짜 선택 완료</button><button class="btn small2 btnSingleSubmit">적용</button>', a.showShortcuts){
                t += '<div class="shortcuts"><b>' + te("shortcuts") + "</b>";
                var o = a.shortcuts;
                if (o){
                    var i;
                    if (o["prev-days"] && o["prev-days"].length > 0){
                        t += '&nbsp;<span class="prev-days">' + te("past");
                        for (d = 0; d < o["prev-days"].length; d++) i = o["prev-days"][d],
                        i += te(o["prev-days"][d] > 1 ? "days": "day"),
                        t += ' <a href="javascript:;" shortcut="day,-' + o["prev-days"][d] + '">' + i + "</a>";
                        t += "</span>"
                    }
                    if (o["next-days"] && o["next-days"].length > 0){
                        t += '&nbsp;<span class="next-days">' + te("following");
                        for (d = 0; d < o["next-days"].length; d++) i = o["next-days"][d],
                        i += te(o["next-days"][d] > 1 ? "days": "day"),
                        t += ' <a href="javascript:;" shortcut="day,' + o["next-days"][d] + '">' + i + "</a>";
                        t += "</span>"
                    }
                    if (o.prev && o.prev.length > 0){
                        t += '&nbsp;<span class="prev-buttons">' + te("previous");
                        for (d = 0; d < o.prev.length; d++) i = te("prev-" + o.prev[d]),
                        t += ' <a href="javascript:;" shortcut="prev,' + o.prev[d] + '">' + i + "</a>";
                        t += "</span>"
                    }
                    if (o.next && o.next.length > 0){
                        t += '&nbsp;<span class="next-buttons">' + te("next");
                        for (d = 0; d < o.next.length; d++) i = te("next-" + o.next[d]),
                        t += ' <a href="javascript:;" shortcut="next,' + o.next[d] + '">' + i + "</a>";
                        t += "</span>"
                    }
                }
                if (a.customShortcuts) for (d = 0; d < a.customShortcuts.length; d++) t += '&nbsp;<span class="custom-shortcut"><a href="javascript:;" shortcut="custom">' + a.customShortcuts[d].name + "</a></span>";
                t += "</div>"
            }
            if (a.showCustomValues && (t += '<div class="customValues"><b>' + (a.customValueLabel || te("custom-values")) + "</b>", a.customValues)) for (var d = 0; d < a.customValues.length; d++){
                var l = a.customValues[d];
                t += '&nbsp;<span class="custom-value"><a href="javascript:;" custom="' + l.value + '">' + l.name + "</a></span>"
            }
            return t += "</div></div>",
            e(t)
        }
        function K(){
            var e = "";
            return ! 0 === a.autoClose && (e += " hide"),
            "" !== a.applyBtnClass && (e += " " + a.applyBtnClass),
            e
        }
        function _(){
            var e = a.showWeekNumbers ? "<th>" + te("week-number") + "</th>": "";
            return "monday" == a.startOfWeek ? e + "<th>" + te("week-1") + "</th><th>" + te("week-2") + "</th><th>" + te("week-3") + "</th><th>" + te("week-4") + "</th><th>" + te("week-5") + "</th><th>" + te("week-6") + "</th><th>" + te("week-7") + "</th>": e + "<th>" + te("week-7") + "</th><th>" + te("week-1") + "</th><th>" + te("week-2") + "</th><th>" + te("week-3") + "</th><th>" + te("week-4") + "</th><th>" + te("week-5") + "</th><th>" + te("week-6") + "</th>"
        }
        function G(e){
            return e = t(e),
            !(!a.startDate || !e.endOf("month").isBefore(a.startDate)) || !(!a.endDate || !e.startOf("month").isAfter(a.endDate))
        }
        function U(){
            for (var e = ['<div class="gap-top-mask"></div><div class="gap-bottom-mask"></div><div class="gap-lines">'], t = 0; t < 20; t++) e.push('<div class="gap-line"><div class="gap-1"></div><div class="gap-2"></div><div class="gap-3"></div></div>');
            return e.push("</div>"),
            e.join("")
        }
        function Z(){
            return ! a.singleMonth
        }
        function Q(t, a, n){
            var r = e.extend(!0, {},
            t);
            e.each(a,
            function(e, t){
                var a = t(n);
                for (var s in a) r.hasOwnProperty(s) ? r[s] += a[s] : r[s] = a[s]
            });
            var s = "";
            for (var o in r) r.hasOwnProperty(o) && (s += o + '="' + r[o] + '" ');
            return s
        }
        function X(e){
            var n = [];
            e.setDate(1);
            new Date(e.getTime() - 864e5);
            var r = new Date,
            s = e.getDay();
            0 === s && "monday" === a.startOfWeek && (s = 7);
            var o,
            i;
            if (s > 0) for (l = s; l > 0; l--) i = g((h = new Date(e.getTime() - 864e5 * l)).getTime()),
            a.startDate && R(h, a.startDate) < 0 && (i = !1),
            a.endDate && R(h, a.endDate) > 0 && (i = !1),
            n.push({
                date: h,
                type: "lastMonth",
                day: h.getDate(),
                time: h.getTime(),
                valid: i
            });
            for (var d = e.getMonth(), l = 0; l < 40; l++) i = g((o = t(e).add(l, "days").toDate()).getTime()),
            a.startDate && R(o, a.startDate) < 0 && (i = !1),
            a.endDate && R(o, a.endDate) > 0 && (i = !1),
            n.push({
                date: o,
                type: o.getMonth() == d ? "toMonth": "nextMonth",
                day: o.getDate(),
                time: o.getTime(),
                valid: i
            });
            for (var u = [], m = 0; m < 6 && "nextMonth" != n[7 * m].type; m++){
                u.push("<tr>");
                for (var h = 0; h < 7; h++){
                    o = n[7 * m + ("monday" == a.startOfWeek ? h + 1: h)];
                    var c = t(o.time).format("L") == t(r).format("L");
                    if (o.extraClass = "", o.tooltip = "", o.valid && a.beforeShowDay && "function" == typeof a.beforeShowDay){
                        var p = a.beforeShowDay(t(o.time).toDate());
                        o.valid = p[0],
                        o.extraClass = p[1] || "",
                        o.tooltip = p[2] || "",
                        "" !== o.tooltip && (o.extraClass += " has-tooltip ")
                    }
                    var f = {
                        time: o.time,
                        "data-tooltip": o.tooltip,
                        class: "day " + o.type + " " + o.extraClass + " " + (o.valid ? "valid": "invalid") + " " + (c ? "real-today": "")
                    };
                    0 === h && a.showWeekNumbers && u.push('<td><div class="week-number" data-start-time="' + o.time + '">' + a.getWeekNumber(o.date) + "</div></td>"),
                    u.push("<td " + Q({},
                    a.dayTdAttrs, o) + "><div " + Q(f, a.dayDivAttrs, o) + ">" + ee(o.time, o.day) + "</div></td>")
                }
                u.push("</tr>")
            }
            return u.join("")
        }
        function ee(e, t){
            return a.showDateFilter && "function" == typeof a.showDateFilter ? a.showDateFilter(e, t) : t
        }
        function te(t){
            var a = t.toLowerCase(),
            n = t in ie ? ie[t] : a in ie ? ie[a] : null,
            r = e.dateRangePickerLanguages.
        default;
            return null == n && (n = t in r ? r[t] : a in r ? r[a] : ""),
            n
        }
        function ae(){
            var e = a.defaultTime ? a.defaultTime: new Date;
            return a.lookBehind ? (a.startDate && H(e, a.startDate) < 0 && (e = E(t(a.startDate).toDate())), a.endDate && H(e, a.endDate) > 0 && (e = t(a.endDate).toDate())) : (a.startDate && H(e, a.startDate) < 0 && (e = t(a.startDate).toDate()), a.endDate && H(E(e), a.endDate) > 0 && (e = q(t(a.endDate).toDate()))),
            a.singleDate && (a.startDate && H(e, a.startDate) < 0 && (e = t(a.startDate).toDate()), a.endDate && H(e, a.endDate) > 0 && (e = t(a.endDate).toDate())),
            e
        }
        function ne(e){
            e || (e = ae()),
            a.lookBehind ? (j(q(e), "month1"), j(e, "month2")) : (j(e, "month1"), j(E(e), "month2")),
            a.singleDate && j(e, "month1"),
            T(),
            B()
        }
        function re(e){
            n(e, le[0]) || se.is(":visible") && L()
        }
        a || (a = {}),
        (a = e.extend(!0, {
            autoClose: !1,
            format: "YYYY-MM-DD",
            separator: " to ",
            language: "auto",
            startOfWeek: "sunday",
            getValue: function(){
                return e(this).val()
            },
            setValue: function(t){
                e(this).attr("readonly") || e(this).is(":disabled") || t == e(this).val() || e(this).val(t)
            },
            startDate: !1,
            endDate: !1,
            time: {
                enabled: !1
            },
            minDays: 0,
            maxDays: 0,
            showShortcuts: !1,
            shortcuts: {},
            customShortcuts: [],
            inline: !1,
            container: "body",
            alwaysOpen: !1,
            singleDate: !1,
            lookBehind: !1,
            batchMode: !1,
            duration: 200,
            stickyMonths: !1,
            dayDivAttrs: [],
            dayTdAttrs: [],
            selectForward: !1,
            selectBackward: !1,
            applyBtnClass: "",
            singleMonth: "auto",
            hoveringTooltip: function(e, t, a){
                return e > 1 ? e + " " + te("days") : ""
            },
            showTopbar: !0,
            swapTime: !1,
            showWeekNumbers: !1,
            getWeekNumber: function(e){
                return t(e).format("w")
            },
            customOpenAnimation: null,
            customCloseAnimation: null,
            customArrowPrevSymbol: null,
            customArrowNextSymbol: null,
            monthSelect: !1,
            yearSelect: !1
        },
        a)).start = !1,
        a.end = !1,
        a.startWeek = !1,
        a.isTouchDevice = "ontouchstart" in window || navigator.msMaxTouchPoints,
        a.isTouchDevice && (a.hoveringTooltip = !1),
        "auto" == a.singleMonth && (a.singleMonth = e(window).width() < 480),
        a.singleMonth && (a.stickyMonths = !1),
        a.showTopbar || (a.autoClose = !0),
        a.startDate && "string" == typeof a.startDate && (a.startDate = t(a.startDate, a.format).toDate()),
        a.endDate && "string" == typeof a.endDate && (a.endDate = t(a.endDate, a.format).toDate()),
        a.yearSelect && "boolean" == typeof a.yearSelect && (a.yearSelect = function(e){
            return [e - 5, e + 5]
        });
        var se,
        oe,
        ie = function(){
            if ("auto" == a.language){
                var t = navigator.language ? navigator.language: navigator.browserLanguage;
                return t && (t = t.toLowerCase()) in e.dateRangePickerLanguages ? e.dateRangePickerLanguages[t] : e.dateRangePickerLanguages.
            default
            }
            return a.language && a.language in e.dateRangePickerLanguages ? e.dateRangePickerLanguages[a.language] : e.dateRangePickerLanguages.
        default
        } (),
        de = !1,
        le = this,
        ue = e(le).get(0);
        return e(this).off(".datepicker").on("click.datepicker",
        function(e){
            se.is(":visible") || s(a.duration)
        }).on("change.datepicker",
        function(e){
            o()
        }).on("keyup.datepicker",
        function(){
            try{
                clearTimeout(oe)
            } catch(e){}
            oe = setTimeout(function(){
                o()
            },
            2e3)
        }),
        function(){
            function n(t){
                var n = e(t).parents("table").hasClass("month2"),
                r = n ? a.month2: a.month1;
                r = E(r),
                !a.singleMonth && !a.singleDate && !n && H(r, a.month2) >= 0 || G(r) || (j(r, n ? "month2": "month1"), B())
            }
            function s(e){
                var t = E(a.month1),
                n = E(a.month2);
                G(n) || !a.singleDate && H(t, n) >= 0 || (j(t, "month1"), j(n, "month2"), T())
            }
            function o(t){
                var n = e(t).parents("table").hasClass("month2"),
                r = n ? a.month2: a.month1;
                r = q(r),
                n && H(r, a.month1) <= 0 || G(r) || (j(r, n ? "month2": "month1"), B())
            }
            function i(e){
                var t = q(a.month1),
                n = q(a.month2);
                G(t) || !a.singleDate && H(n, t) <= 0 || (j(n, "month2"), j(t, "month1"), T())
            }
            var l = this;
            if (e(this).data("date-picker-opened")) L();
            else{
                e(this).data("date-picker-opened", !0),
                (se = J().hide()).append('<div class="date-range-length-tip"></div>'),
                e(a.container).append(se),
                a.inline ? se.addClass("inline-wrapper") : r(),
                a.alwaysOpen && se.find(".apply-btn").hide();
                var u = ae();
                if (ne(u), a.time.enabled) if (a.startDate && a.endDate || a.start && a.end) W(t(a.start || a.startDate).toDate(), "time1"),
                W(t(a.end || a.endDate).toDate(), "time2");
                else{
                    var m = a.defaultEndTime ? a.defaultEndTime: u;
                    W(u, "time1"),
                    W(m, "time2")
                }
                var c = "";
                c = te(a.singleDate ? "default-single": a.minDays && a.maxDays ? "default-range": a.minDays ? "default-more": a.maxDays ? "default-less": "default-default"),
                se.find(".default-top").html(c.replace(/\%d/, a.minDays).replace(/\%d/, a.maxDays)),
                a.singleMonth ? se.addClass("single-month") : se.addClass("two-months"),
                setTimeout(function(){
                    d(),
                    de = !0
                },
                0),
                se.click(function(e){
	            	e.stopPropagation()
                }),
                se.find('.btnSubmit, .btnSingleSubmit').on("click",function(){
                	console.log('a')
                	L();
                    var t = N(new Date(a.start)) + a.separator + N(new Date(a.end));
                    e(l).trigger("datepicker-apply", {
                        value: t,
                        date1: new Date(a.start),
                        date2: new Date(a.end)
                    })
                }),
                se.find('.btnRedate').on("click",function(){
                	console.log('b')
                	a.start = !1,
	                a.end = !1,
	                se.find(".day.checked").removeClass("checked"),
	                se.find(".day.last-date-selected").removeClass("last-date-selected"),
	                se.find(".day.first-date-selected").removeClass("first-date-selected"),
	                a.setValue.call(ue, ""),
	                x(),
	                M(),
	                T()
                }),
                e(document).on("click.datepicker", re),
                se.find(".next").click(function(){
                    a.stickyMonths ? s() : n(this)
                }),
                se.find(".prev").click(function(){
                    a.stickyMonths ? i() : o(this)
                }),
                se.attr("unselectable", "on").css("user-select", "none").on("selectstart",
                function(e){
                    return e.preventDefault(),
                    !1
                }),
                se.find(".apply-btn").click(function(){
                    L();
                    var t = N(new Date(a.start)) + a.separator + N(new Date(a.end));
                    e(l).trigger("datepicker-apply", {
                        value: t,
                        date1: new Date(a.start),
                        date2: new Date(a.end)
                    })
                }),
                se.find("[custom]").click(function(){
                    var t = e(this).attr("custom");
                    a.start = !1,
                    a.end = !1,
                    se.find(".day.checked").removeClass("checked"),
                    a.setValue.call(ue, t),
                    x(),
                    M(!0),
                    T(),
                    a.autoClose && L()
                }),
                se.find("[shortcut]").click(function(){
                    var t,
                    n = e(this).attr("shortcut"),
                    r = new Date,
                    s = !1;
                    if ( - 1 != n.indexOf("day")){
                        var o = parseInt(n.split(",", 2)[1], 10);
                        s = new Date((new Date).getTime() + 864e5 * o),
                        r = new Date(r.getTime() + 864e5 * (o > 0 ? 1: -1))
                    } else if ( - 1 != n.indexOf("week")){
                        var i;
                        for (i = 1 == (t = -1 != n.indexOf("prev,") ? -1: 1) ? "monday" == a.startOfWeek ? 1: 0: "monday" == a.startOfWeek ? 0: 6, r = new Date(r.getTime() - 864e5); r.getDay() != i;) r = new Date(r.getTime() + 864e5 * t);
                        s = new Date(r.getTime() + 864e5 * t * 6)
                    } else if ( - 1 != n.indexOf("month"))(s = 1 == (t = -1 != n.indexOf("prev,") ? -1: 1) ? E(r) : q(r)).setDate(1),
                    (r = E(s)).setDate(1),
                    r = new Date(r.getTime() - 864e5);
                    else if ( - 1 != n.indexOf("year")) t = -1 != n.indexOf("prev,") ? -1: 1,
                    (s = new Date).setFullYear(r.getFullYear() + t),
                    s.setMonth(0),
                    s.setDate(1),
                    r.setFullYear(r.getFullYear() + t),
                    r.setMonth(11),
                    r.setDate(31);
                    else if ("custom" == n){
                        var d = e(this).html();
                        if (a.customShortcuts && a.customShortcuts.length > 0) for (var l = 0; l < a.customShortcuts.length; l++){
                            var u = a.customShortcuts[l];
                            if (u.name == d){
                                var m = [];
                                if ((m = u.dates.call()) && 2 == m.length && (s = m[0], r = m[1]), m && 1 == m.length){
                                    var h = m[0];
                                    j(h, "month1"),
                                    j(E(h), "month2"),
                                    B()
                                }
                                break
                            }
                        }
                    }
                    s && r && (C(s, r), x())
                }),
                se.find(".time1 input[type=range]").on("change touchmove",
                function(t){
                    var a = t.target;
                    h("time1", "hour" == a.name ? e(a).val().replace(/^(\d{1})$/, "0$1") : void 0, "minute" == a.name ? e(a).val().replace(/^(\d{1})$/, "0$1") : void 0)
                }),
                se.find(".time2 input[type=range]").on("change touchmove",
                function(t){
                    var a = t.target;
                    h("time2", "hour" == a.name ? e(a).val().replace(/^(\d{1})$/, "0$1") : void 0, "minute" == a.name ? e(a).val().replace(/^(\d{1})$/, "0$1") : void 0)
                })
            }
        }.call(this),
        a.alwaysOpen && s(0),
        e(this).data("dateRangePicker", {
            setStart: function(e){
                return "string" == typeof e && (e = t(e, a.format).toDate()),
                a.end = !1,
                O(e),
                this
            },
            setEnd: function(e, n){
                var r = new Date;
                return r.setTime(a.start),
                "string" == typeof e && (e = t(e, a.format).toDate()),
                C(r, e, n),
                this
            },
            setDateRange: function(e, n, r){
                "string" == typeof e && "string" == typeof n && (e = t(e, a.format).toDate(), n = t(n, a.format).toDate()),
                C(e, n, r)
            },
            clear: function(){
                a.start = !1,
                a.end = !1,
                se.find(".day.checked").removeClass("checked"),
                se.find(".day.last-date-selected").removeClass("last-date-selected"),
                se.find(".day.first-date-selected").removeClass("first-date-selected"),
                a.setValue.call(ue, ""),
                x(),
                M(),
                T()
            },
            close: L,
            open: s,
            redraw: F,
            getDatePicker: function(){
                return se
            },
            resetMonthsView: ne,
            destroy: function(){
                e(le).off(".datepicker"),
                e(le).data("dateRangePicker", ""),
                e(le).data("date-picker-opened", null),
                se.remove(),
                e(window).off("resize.datepicker", r),
                e(document).off("click.datepicker", re)
            }
        }),
        e(window).on("resize.datepicker", r),
        this
    }
});