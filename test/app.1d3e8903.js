(function (e) {
    function t(t) {
        for (var a, i, c = t[0], s = t[1], l = t[2], p = 0, u = []; p < c.length; p++) i = c[p], o[i] && u.push(o[i][0]), o[i] = 0;
        for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
        d && d(t);
        while (u.length) u.shift()();
        return r.push.apply(r, l || []), n()
    }

    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], a = !0, c = 1; c < n.length; c++) {
                var s = n[c];
                0 !== o[s] && (a = !1)
            }
            a && (r.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }
    var a = {},
        o = {
            app: 0
        },
        r = [];

    function i(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.m = e, i.c = a, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var a in e) i.d(n, a, function (t) {
                return e[t]
            }.bind(null, a));
        return n
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "/";
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        s = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var l = 0; l < c.length; l++) t(c[l]);
    var d = s;
    r.push([0, "chunk-vendors"]), n()
})({
    0: function (e, t, n) {
        e.exports = n("56d7")
    }, "034f": function (e, t, n) {
        "use strict";
        var a = n("64a9"),
            o = n.n(a);
        o.a
    }, "0357": function (e, t, n) {
        "use strict";
        var a = n("3f62"),
            o = n.n(a);
        o.a
    }, "3f62": function (e, t, n) {}, "56d7": function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n("2b0e"),
            o = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [n("div", {
                    staticClass: "page"
                }, [n("tplHeader"), n("tplMain"), n("div", {
                    staticClass: "info",
                    domProps: {
                        innerHTML: e._s(e.glob.lang.t.htmlAbout)
                    }
                })], 1), n("tplFooter"), n("Notices", {
                    attrs: {
                        notices: e.glob.notices
                    }
                })], 1)
            },
            r = [],
            i = {
                func: {},
                lang: null,
                notices: {
                    items: [],
                    lastId: 0,
                    add: function (e) {
                        e.id = ++this.lastId, this.items.unshift(e)
                    }, remove: function (e) {
                        var t = this.items.findIndex(function (t) {
                            return t.id == e
                        });
                        t >= 0 && this.items.splice(t, 1)
                    }, clean: function () {
                        this.items = []
                    }
                },
                e: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return e = this.lang.e[e] || e, this.notices.add(t ? {
                        html: e,
                        c: "error",
                        timeout: t
                    } : {
                        html: e,
                        c: "error"
                    }), !1
                }, m: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return e = this.lang.m[e] || e, this.notices.add(t ? {
                        html: e,
                        timeout: t
                    } : {
                        html: e
                    }), !1
                }
            },
            c = [{
                abbr: "EN",
                code: "en",
                match: /en/i,
                title: "English",
                e: {
                    dbConnect: "Browser database connection error.",
                    unsupportedDatabase: "Your browser is not supported local database.",
                    unsupported: "Your browser is not supported this function.",
                    invalidSecret: "Invalid secret key.",
                    invalidName: "Invalid application name.",
                    appExists: "Application with this secret key already exists.",
                    backupNoApps: "No applications for backep.",
                    backupBadFile: "Invalid backup file."
                },
                m: {
                    appAdded: "Application added.",
                    appDeleted: "Application deleted.",
                    appRenamed: "Application name changed.",
                    codeCopied: "One-time password is copied to clipboard.",
                    backupRestored: "Backup is restored."
                },
                t: {
                    dbConnect: "Connecting to local database...",
                    metaTitle: "Online one-time password generator / TOTP (Google Authenticator) Online",
                    metaDesc: "TOTP.APP - is a online generator of one-time passwords, based on TOTP (RFC 6238) algorithm. A web-based analog of the Google Authenticator mobile application.",
                    metaKeys: "totp, google authenticator, one-time password, online",
                    fieldAppSecret: "Secret key",
                    fieldAppName: "Application name",
                    buttonAdd: "Add",
                    htmlNoApps: "No applications.",
                    htmlAbout: " ",
                    keyBackup: "Download backup",
                    keyRestore: "Restore backup"
                }
            }, ],
            s = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "notices"
                }, [n("transition-group", {
                    attrs: {
                        name: "scale",
                        tag: "div"
                    }
                }, e._l(e.notices.items, function (t) {
                    return n("NoticesItem", e._b({
                        key: t.id,
                        on: {
                            closed: function (n) {
                                return e.notices.remove(t.id)
                            }
                        }
                    }, "NoticesItem", t, !1))
                }), 1)], 1)
            },
            l = [],
            d = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "notice_item",
                    class: e.c,
                    on: {
                        mouseenter: e.reset,
                        mouseleave: e.resume
                    }
                }, [n("div", {
                    staticClass: "notice_content",
                    domProps: {
                        innerHTML: e._s(e.html)
                    }
                }), e.closer ? n("div", {
                    staticClass: "notice_close",
                    on: {
                        click: e.del
                    }
                }, [n("svg", {
                    attrs: {
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 21.9 21.9"
                    }
                }, [n("path", {
                    staticClass: "notice_close_icon",
                    attrs: {
                        d: "M14.1,11.3c-0.2-0.2-0.2-0.5,0-0.7l7.5-7.5c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7l-1.4-1.4C20,0.1,19.7,0,19.5,0 c-0.3,0-0.5,0.1-0.7,0.3l-7.5,7.5c-0.2,0.2-0.5,0.2-0.7,0L3.1,0.3C2.9,0.1,2.6,0,2.4,0S1.9,0.1,1.7,0.3L0.3,1.7C0.1,1.9,0,2.2,0,2.4 s0.1,0.5,0.3,0.7l7.5,7.5c0.2,0.2,0.2,0.5,0,0.7l-7.5,7.5C0.1,19,0,19.3,0,19.5s0.1,0.5,0.3,0.7l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3 s0.5-0.1,0.7-0.3l7.5-7.5c0.2-0.2,0.5-0.2,0.7,0l7.5,7.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.2-0.2,0.3-0.5,0.3-0.7 s-0.1-0.5-0.3-0.7L14.1,11.3z"
                    }
                })])]) : e._e(), e.timeout > 0 ? n("div", {
                    staticClass: "notice_timer",
                    style: {
                        width: e.w + "%"
                    }
                }) : e._e()])
            },
            p = [],
            u = {
                name: "NoticesItem",
                data: function () {
                    return {
                        active: !0,
                        t: 0,
                        step: 250,
                        timer: null,
                        w: 100
                    }
                }, props: {
                    c: {
                        type: String,
                        default: ""
                    },
                    html: {
                        type: String,
                        default: ""
                    },
                    closer: {
                        type: Boolean,
                        default: !0
                    },
                    timeout: {
                        type: Number,
                        default: 5
                    },
                    id: {
                        type: Number,
                        required: !0
                    }
                }, methods: {
                    del: function () {
                        var e = this;
                        e.timer && clearInterval(e.timer), e.active = !1, e.$emit("closed")
                    }, reset: function () {
                        var e = this;
                        e.timeout && e.active && (e.timer && clearInterval(e.timer), e.t = 1e3 * e.timeout, e.w = 100)
                    }, resume: function () {
                        var e = this;
                        e.timeout && e.active && (e.reset(), e.timer = setInterval(function () {
                            e.t -= e.step, e.w = 100 / (1e3 * e.timeout) * e.t, e.t < 0 && e.del()
                        }, e.step))
                    }
                }, mounted: function () {
                    this.resume()
                }
            },
            m = u,
            b = n("2877"),
            f = Object(b["a"])(m, d, p, !1, null, null, null),
            v = f.exports,
            h = {
                name: "Notices",
                props: ["notices"],
                components: {
                    NoticesItem: v
                }
            },
            g = h,
            y = (n("e040"), Object(b["a"])(g, s, l, !1, null, null, null)),
            w = y.exports,
            P = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("header", [n("div", {
                    staticClass: "fl"
                }, [n("a", {
                    staticClass: "logo",
                    attrs: {
                        href: "/"
                    }
                }, [n("svg", {
                    attrs: {
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 16 16"
                    }
                }, [n("g", {
                    staticClass: "logoicon"
                }, [n("path", {
                    attrs: {
                        d: "M7.5 0c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5-3.4-7.5-7.5-7.5zM13.3 10.4c-0.2 0.5-0.5 0.9-0.9 1.3l-1.4-1.4c0.5-0.6 0.9-1.4 0.9-2.3h2c0 0.5-0.1 1-0.3 1.5l-0.9-0.4-0.4 0.9 1 0.4zM10.1 12.4l-0.9 0.4 0.4 0.9c-0.6 0.1-1.1 0.2-1.6 0.3v-2c0.9-0.1 1.6-0.4 2.3-0.9l1.4 1.4c-0.4 0.3-0.8 0.6-1.3 0.9l-0.3-1zM4.9 12.4l-0.4 0.9c-0.5-0.2-0.9-0.5-1.3-0.9l1.5-1.4c0.6 0.5 1.4 0.9 2.3 0.9v2c-0.5 0-1-0.1-1.5-0.3l0.4-0.9-1-0.3zM3.1 7h-2.1c0-0.5 0.1-1 0.3-1.5l0.9 0.4 0.4-0.9-0.9-0.4c0.2-0.5 0.5-0.9 0.9-1.3l1.4 1.4c-0.5 0.7-0.9 1.4-0.9 2.3zM4.9 2.6l0.9-0.4-0.3-0.9c0.5-0.1 1-0.2 1.5-0.3v2c-0.9 0.1-1.6 0.5-2.3 1l-1.4-1.4c0.4-0.3 0.8-0.6 1.3-0.9l0.3 0.9zM13.3 4.6l-0.9 0.4 0.4 0.9 0.9-0.4c0.1 0.5 0.2 1 0.3 1.5h-2c-0.1-0.9-0.4-1.6-1-2.3l-1.4 1.4c0.2 0.4 0.4 0.9 0.4 1.4 0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5c0-1.4 1.1-2.5 2.5-2.5 0.5 0 1 0.2 1.4 0.4l1.4-1.4c-0.7-0.5-1.4-0.9-2.3-1v-2c0.5 0 1 0.1 1.5 0.3l-0.4 0.9 0.9 0.4 0.4-0.9c0.5 0.2 0.9 0.5 1.3 0.9l-1.4 1.4 0.7 0.7 1.4-1.4c0.4 0.4 0.7 0.8 0.9 1.3zM1.7 10.4l0.9-0.4-0.4-0.9-0.9 0.4c-0.1-0.5-0.2-1-0.3-1.5h2c0.1 0.9 0.5 1.6 1 2.3l-1.4 1.4c-0.4-0.4-0.7-0.8-0.9-1.3z"
                    }
                }), n("path", {
                    attrs: {
                        d: "M9 7.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"
                    }
                })])]), e._m(0)])]), n("div", {
                    staticClass: "fr"
                }, [n("div", {
                    staticClass: "langsel"
                }, e._l(e.langs, function (t) {
                    return n("a", {
                        key: t.abbr,
                        class: e.glob.lang.abbr == t.abbr ? "c" : "",
                        attrs: {
                            href: "?lang=" + t.abbr,
                            title: t.title
                        },
                        on: {
                            click: function (n) {
                                return n.preventDefault(), e.setLang(t.abbr)
                            }
                        }
                    }, [e._v(e._s(t.abbr))])
                }), 0)]), n("div", {
                    staticClass: "cl"
                })])
            },
            T = [
                function () {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("span", [e._v("TOTP"), n("sup", [e._v(".APP")])])
                }
            ],
            k = (n("386d"), n("4917"), n("a78e")),
            _ = n.n(k),
            A = {
                name: "tplHeader",
                data: function () {
                    return {
                        langs: c,
                        glob: i
                    }
                }, methods: {
                    setLang: function (e) {
                        let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        var n = !1;
                        for (var a in c)
                            if (String(c[a].abbr).toLowerCase() === String(e).toLowerCase()) {
                                n = !0, i.lang = c[a], document.documentElement.lang = i.lang.code, document.title = i.lang.t.metaTitle, document.querySelector('meta[name="description"]').setAttribute("content", i.lang.t.metaDesc), document.querySelector('meta[name="keywords"]').setAttribute("content", i.lang.t.metaKeys), t && _.a.set("lang", c[a].abbr, {
                                    expires: 365
                                });
                                break
                            }
                        return n
                    }
                }, created: function () {
                    var e = !1,
                        t = location.search.match(/[?&]lang=([a-z]+)/i);
                    if (t && this.setLang(t[1]) && (e = !0), !e && _.a.get("lang") && this.setLang(_.a.get("lang"), !1) && (e = !0), !e) {
                        var n = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;
                        for (var a in c)
                            if (n.match(c[a].match)) {
                                i.lang = c[a], document.documentElement.lang = i.lang.code, document.title = i.lang.t.metaTitle, document.querySelector('meta[name="description"]').setAttribute("content", i.lang.t.metaDesc), document.querySelector('meta[name="keywords"]').setAttribute("content", i.lang.t.metaKeys);
                                break
                            }
                    }
                }
            },
            C = A,
            O = (n("f37d"), Object(b["a"])(C, P, T, !1, null, null, null)),
            S = O.exports,
            x = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("footer", [n("div", {
                    staticClass: "fl"
                }, [n("div", {
                    staticClass: "backup"
                }, [n("span", {
                    on: {
                        click: e.backup
                    }
                }, [e._v(e._s(e.glob.lang.t.keyBackup))]), n("span", {
                    on: {
                        click: e.restore
                    }
                }, [e._v(e._s(e.glob.lang.t.keyRestore))])])]), n("div", {
                    staticClass: "fr"
                }, [n("div", {
                    staticClass: "copy"
                }, [e._v("TOTP.APP © 2018-" + e._s(e.cyear))])]), n("div", {
                    staticClass: "cl"
                })])
            },
            N = [],
            j = {
                name: "tplFooter",
                data: function () {
                    return {
                        glob: i,
                        cyear: (new Date).getFullYear()
                    }
                }, methods: {
                    backup: function () {
                        i.func.backup && i.func.backup()
                    }, restore: function () {
                        i.func.restore && i.func.restore()
                    }
                }
            },
            I = j,
            M = (n("f3cc"), Object(b["a"])(I, x, N, !1, null, null, null)),
            R = M.exports,
            B = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "codes"
                }, [n("div", {
                    staticClass: "timer",
                    style: "width: " + e.tw + "%"
                }), "connect" == e.mode ? n("div", [e._v(e._s(e.glob.lang.t.dbConnect))]) : e._e(), "error" == e.mode ? n("div", [e._v(e._s(e.glob.lang.e.dbConnect))]) : e._e(), "ok" == e.mode ? n("div", [e.codes.length < 1 ? n("div", {
                    staticClass: "none"
                }, [e._v(e._s(e.glob.lang.t.htmlNoApps))]) : e._e(), e.codes.length > 0 ? n("div", e._l(e.codes, function (t) {
                    return n("div", {
                        key: t.secret,
                        staticClass: "codebox"
                    }, [n("div", {
                        staticClass: "timecode",
                        attrs: {
                            "data-clipboard-text": t.code
                        },
                        on: {
                            click: function (t) {
                                return e.glob.m("codeCopied")
                            }
                        }
                    }, [e._v(e._s(t.code))]), n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.name,
                            expression: "c.name"
                        }],
                        staticClass: "name",
                        attrs: {
                            type: "text",
                            maxlength: "64"
                        },
                        domProps: {
                            value: t.name
                        },
                        on: {
                            change: function (n) {
                                return e.changeName(t.secret, t.name)
                            }, input: function (n) {
                                n.target.composing || e.$set(t, "name", n.target.value)
                            }
                        }
                    })])
                }), 0) : e._e(), n("form", [n("div", {
                    staticClass: "ibox"
                }, [e._v(e._s(e.glob.lang.t.fieldAppSecret) + ":"), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.val.appSecret,
                        expression: "val.appSecret"
                    }],
                    attrs: {
                        required: "",
                        type: "text",
                        maxlength: "256"
                    },
                    domProps: {
                        value: e.val.appSecret
                    },
                    on: {
                        input: function (t) {
                            t.target.composing || e.$set(e.val, "appSecret", t.target.value)
                        }
                    }
                })]), n("div", {
                    staticClass: "ibox"
                }, [e._v(e._s(e.glob.lang.t.fieldAppName) + ":"), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.val.appName,
                        expression: "val.appName"
                    }],
                    attrs: {
                        required: "",
                        type: "text",
                        maxlength: "64"
                    },
                    domProps: {
                        value: e.val.appName
                    },
                    on: {
                        input: function (t) {
                            t.target.composing || e.$set(e.val, "appName", t.target.value)
                        }
                    }
                })]), n("div", {
                    staticClass: "ibox"
                }, [n("button", {
                    attrs: {
                        type: "submit"
                    },
                    on: {
                        click: function (t) {
                            return t.preventDefault(), e.addSecret(t)
                        }
                    }
                }, [e._v(e._s(e.glob.lang.t.buttonAdd))])])])]) : e._e()])
            },
            D = [],
            E = n("b311"),
            F = n.n(E),
            L = {
                name: "tplMain",
                data: function () {
                    return {
                        lts: 0,
                        tw: 0,
                        clip: null,
                        mode: "connect",
                        db: null,
                        glob: i,
                        val: {
                            appName: "",
                            appSecret: ""
                        },
                        codes: []
                    }
                }, methods: {
                    checkSecret: function (e) {
                        try {
                            var t = new jsOTP.totp;
                            if (!t.getOtp(e)) return !1
                        } catch (n) {
                            return !1
                        }
                        return !0
                    }, restore: function () {
                        var e = this;
                        if (window.FileReader) {
                            var t = document.getElementById("_restore_field");
                            t || (t = document.createElement("input"), t.id = "_restore_field", t.style = "visibility: hidden; position: fixed;", t.type = "file", t.accept = "application/json", t.onchange = function () {
                                if (!t.files[0]) return !1;
                                var n = t.files[0];
                                if (!n || !n.name || !n.size) return !1;
                                if ("application/json" != n.type) return i.e("backupBadFile");
                                var a = new window.FileReader;
                                return a.onload = function (n) {
                                    var a;
                                    t.value = "";
                                    try {
                                        a = JSON.parse(n.target.result)
                                    } catch (d) {
                                        return i.e("backupBadFile")
                                    }
                                    if (a.length < 1) return i.e("backupBadFile");
                                    if (!a[0] || !a[0].name || !a[0].secret) return i.e("backupBadFile");
                                    var o = e.db.transaction("totp", "readwrite");
                                    o.oncomplete = function () {
                                        e.loadKeys(), i.m("backupRestored")
                                    }, o.onerror = function (e) {
                                        console.error(e)
                                    };
                                    var r = o.objectStore("totp");
                                    for (var c in a)
                                        if (a[c].name && a[c].secret && e.checkSecret(a[c].secret)) {
                                            var s = a[c].name,
                                                l = a[c].secret;
                                            r.put({
                                                secret: l,
                                                name: s
                                            })
                                        }
                                }, a.onerror = function (e) {
                                    console.error(e), i.e("backupBadFile")
                                }, a.readAsText(n), !1
                            }, document.body.appendChild(t)), t.click()
                        } else i.e("unsupported");
                        return !1
                    }, backup: function () {
                        var e = this;
                        e.dbLoadKeys(function (e) {
                            if (e && e.length > 0) {
                                var t = e.map(function (e) {
                                        return {
                                            secret: e.secret,
                                            name: e.name
                                        }
                                    }),
                                    n = document.getElementById("_key_backup");
                                n || (n = document.createElement("a"), n.id = "_key_backup", n.style = "visibility: hidden; position: fixed;", n.download = "backup-totp.app.json", document.body.appendChild(n)), n.href = "data:application/json;base64," + window.btoa(unescape(encodeURIComponent(JSON.stringify(t)))), n.click()
                            } else i.e("backupNoApps")
                        })
                    }, addSecret: function () {
                        var e = this;
                        return e.val.appSecret && e.val.appSecret.match(/^([0-9a-z]+)$/i) ? e.val.appName ? e.checkSecret(e.val.appSecret) ? (e.db.transaction("totp").objectStore("totp").get(e.val.appSecret).onsuccess = function (t) {
                            if (t.target.result) i.e("appExists");
                            else {
                                var n = e.db.transaction("totp", "readwrite");
                                n.oncomplete = function () {
                                    return e.loadKeys(), e.val.appSecret = "", e.val.appName = "", i.m("appAdded")
                                }, n.objectStore("totp").put({
                                    secret: e.val.appSecret,
                                    name: e.val.appName
                                })
                            }
                        }, !1) : i.e("invalidSecret") : i.e("invalidName") : i.e("invalidSecret")
                    }, changeName: function (e, t) {
                        var n = this;
                        t && ("-" == t ? n.db.transaction("totp", "readwrite").objectStore("totp").delete(e).onsuccess = function () {
                            n.loadKeys(), i.m("appDeleted")
                        } : n.db.transaction("totp", "readwrite").objectStore("totp").put({
                            secret: e,
                            name: t
                        }).onsuccess = function () {
                            n.loadKeys(), i.m("appRenamed")
                        })
                    }, dbLoadKeys: function (e) {
                        var t = this,
                            n = [];
                        t.db.transaction("totp").objectStore("totp").index("name").openCursor().onsuccess = function (t) {
                            var a = t.target.result;
                            a ? (n.push({
                                name: a.value.name,
                                secret: a.value.secret,
                                code: 0
                            }), a.continue()) : "function" == typeof e && e(n)
                        }
                    }, redrawCodes: function () {
                        var e = new jsOTP.totp,
                            t = this;
                        t.clip && t.clip.destroy(), t.codes && t.codes.length && (t.codes = t.codes.map(function (t) {
                            return {
                                secret: t.secret,
                                name: t.name,
                                code: e.getOtp(t.secret)
                            }
                        }), t.clip = new F.a(".timecode"))
                    }, loadKeys: function () {
                        var e = this;
                        e.dbLoadKeys(function (t) {
                            t && t.length ? e.codes = t : e.codes = [], e.redrawCodes()
                        })
                    }, timerTick: function () {
                        var e = this,
                            t = Date.now() / 3e4,
                            n = Math.floor(t);
                        e.tw = Math.ceil(100 * (t - n)), e.lts != n && (e.lts = n, e.redrawCodes.call(e))
                    }
                }, created: function () {
                    var e = this,
                        t = location.search.match(/(^|\?|&)name=(.+?)(\?|&|$)/i),
                        n = location.search.match(/(^|\?|&)secret=(.+?)(\?|&|$)/i);
                    if (t && (e.val.appName = decodeURIComponent(t[2])), n && (e.val.appSecret = decodeURIComponent(n[2])), "object" != typeof window.indexedDB) return e.mode = "error", i.e("unsupportedDatabase", 60), !1;
                    var a = window.indexedDB.open("totp", 1);
                    a.onsuccess = function (t) {
                        e.db = t.target.result, e.mode = "ok", e.timerTick(), e.loadKeys(), i.func.backup = e.backup.bind(e), i.func.restore = e.restore.bind(e), setInterval(e.timerTick.bind(e), 1e3)
                    }, a.onupgradeneeded = function (e) {
                        var t = e.target.result.createObjectStore("totp", {
                            keyPath: "secret"
                        });
                        t.createIndex("name", "name", {
                            unique: !1
                        })
                    }, a.onerror = function () {
                        e.mode = "error", i.e("dbConnect", 60)
                    }
                }
            },
            $ = L,
            z = (n("0357"), Object(b["a"])($, B, D, !1, null, null, null)),
            K = z.exports;
        i.lang = c[0], document.documentElement.lang = i.lang.code, document.title = i.lang.t.metaTitle, document.querySelector('meta[name="description"]').setAttribute("content", i.lang.t.metaDesc), document.querySelector('meta[name="keywords"]').setAttribute("content", i.lang.t.metaKeys);
        var q = {
                name: "app",
                data: function () {
                    return {
                        glob: i
                    }
                }, components: {
                    Notices: w,
                    tplHeader: S,
                    tplFooter: R,
                    tplMain: K
                }
            },
            H = q,
            G = (n("034f"), Object(b["a"])(H, o, r, !1, null, null, null)),
            J = G.exports;
        a["a"].config.productionTip = !1, new a["a"]({
            render: e => e(J)
        }).$mount("#app")
    }, "64a9": function (e, t, n) {}, a088: function (e, t, n) {}, a27b: function (e, t, n) {}, e040: function (e, t, n) {
        "use strict";
        var a = n("e915"),
            o = n.n(a);
        o.a
    }, e915: function (e, t, n) {}, f37d: function (e, t, n) {
        "use strict";
        var a = n("a088"),
            o = n.n(a);
        o.a
    }, f3cc: function (e, t, n) {
        "use strict";
        var a = n("a27b"),
            o = n.n(a);
        o.a
    }
});