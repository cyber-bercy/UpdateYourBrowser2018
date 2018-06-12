;
(function() {
    var e = {
        site: 569111,
        log: "logc407",
        logSSL: "logs1407",
        domain: "xiti.com",
        secure: !1,
        pixelPath: "/hit.xiti",
        disableCookie: !1,
        cookieDomain: ".impots.gouv.fr",
        preview: !1,
        plgs: ["Campaigns", "Clicks", "ClientSideUserId", "ContextVariables", "IdentifiedVisitor", "InternalSearch", "OnSiteAds", "Page"],
        lazyLoadingPath: "",
        documentLevel: "document",
        redirect: !1
    };
    ! function(e, t) {
        e.ATInternet = e.ATInternet || {}, e.ATInternet.Tracker = e.ATInternet.Tracker || {}, e.ATInternet.Tracker.Plugins = e.ATInternet.Tracker.Plugins || {}
    }(window), window.ATInternet.Utils = new function() {
        function e(t) {
            var n = typeof t;
            if ("object" !== n || null === t) return "string" === n && (t = '"' + t + '"'), String(t);
            var i, r, o = [],
                a = t && t.constructor === Array;
            for (i in t) t.hasOwnProperty(i) && (r = t[i], n = typeof r, "function" !== n && "undefined" !== n && ("string" === n ? r = '"' + r.replace(/[^\\]"/g, '\\"') + '"' : "object" === n && null !== r && (r = e(r)), o.push((a ? "" : '"' + i + '":') + String(r))));
            return (a ? "[" : "{") + String(o) + (a ? "]" : "}")
        }
        var t = this;
        t.cloneSimpleObject = function n(e, t) {
            if ("object" != typeof e || null === e || e instanceof Date) return e;
            var i, r = new e.constructor || e.constructor();
            for (i in e) e.hasOwnProperty(i) && (void 0 === i || t && void 0 === e[i] || (r[i] = n(e[i])));
            return r
        }, t.jsonSerialize = function(t) {
            return "undefined" != typeof JSON && JSON.stringify ? JSON.stringify(t) : e(t)
        }, t.jsonParse = function(e) {
            try {
                if ("undefined" != typeof JSON && JSON.parse) return JSON.parse(e);
                var t;
                return t = null === e ? e : "string" == typeof e ? new Function("return " + e)() : !1
            } catch (n) {
                return null
            }
        }, t.arrayIndexOf = function(e, t) {
            return Array.indexOf ? e.indexOf(t) : function(e) {
                if (null == this) throw new TypeError;
                var t = Object(this),
                    n = t.length >>> 0;
                if (0 === n) return -1;
                var i = 0;
                if (1 < arguments.length && (i = Number(arguments[1]), i != i ? i = 0 : 0 != i && 1 / 0 != i && -(1 / 0) != i && (i = (i > 0 || -1) * Math.floor(Math.abs(i)))), i >= n) return -1;
                for (i = i >= 0 ? i : Math.max(n - Math.abs(i), 0); n > i; i++)
                    if (i in t && t[i] === e) return i;
                return -1
            }.apply(e, [t])
        }, t.genGuid = function(e) {
            var t = new Date,
                n = function(e) {
                    return e -= 100 * Math.floor(e / 100), 10 > e ? "0" + e : e
                };
            return n(t.getHours()) + "" + n(t.getMinutes()) + n(t.getSeconds()) + function(e) {
                return Math.floor(Math.random() * Math.pow(10, e))
            }(e - 6)
        }, t.getObjectKeys = function(e) {
            var t, n = [];
            for (t in e) e.hasOwnProperty(t) && n.push(t);
            return n
        }, t.completeFstLevelObj = function(e, t, n) {
            if (e) {
                if (t)
                    for (var i in t) !t.hasOwnProperty(i) || e[i] && !n || (e[i] = t[i])
            } else e = t;
            return e
        }, t.isPreview = function() {
            return window.navigator && "preview" === window.navigator.loadPurpose
        }, t.isPrerender = function(e) {
            var n, i = !1,
                r = ["webkit", "ms"];
            if ("prerender" === document.visibilityState) n = "visibilitychange";
            else
                for (var o = 0; o < r.length; o++) "prerender" === document[r[o] + "VisibilityState"] && (n = r[o] + "visibilitychange");
            if ("undefined" != typeof n) {
                var a = function(i) {
                    e(i), t.removeEvtListener(document, n, a)
                };
                t.addEvtListener(document, n, a), i = !0
            }
            return i
        }, t.addEvtListener = function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
        }, t.removeEvtListener = function(e, t, n) {
            e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
        }, t.loadScript = function(e, t) {
            var n;
            t = t || function() {}, n = document.createElement("script"), n.type = "text/javascript", n.src = e.url, n.async = !1, n.defer = !1, n.onload = n.onreadystatechange = function(e) {
                e = e || window.event, ("load" === e.type || /loaded|complete/.test(n.readyState) && (!document.documentMode || 9 > document.documentMode)) && (n.onload = n.onreadystatechange = n.onerror = null, t(null, e))
            }, n.onerror = function(e, i, r) {
                n.onload = n.onreadystatechange = n.onerror = null, t({
                    msg: "script not loaded",
                    event: e
                })
            };
            var i = document.head || document.getElementsByTagName("head")[0];
            i.insertBefore(n, i.lastChild)
        }, t.hashcode = function(e) {
            var t = 0;
            if (0 === e.length) return t;
            for (var n = 0; n < e.length; n++) var i = e.charCodeAt(n),
                t = (t << 5) - t + i,
                t = t & t;
            return t
        }, t.setLocation = function(e) {
            var t = e.location;
            e = window[e.target] || window, t && (e.location.href = t)
        }
    };
    var t = function(e) {
            var t = this,
                n = function(e, t, n) {
                    return e = "&" + e + "=", {
                        param: e,
                        paramSize: e.length,
                        str: t,
                        strSize: t.length,
                        truncate: n
                    }
                },
                i = function(t, n) {
                    var i, r = "",
                        o = 0,
                        a = !0;
                    for (i in t)
                        if (t.hasOwnProperty(i)) {
                            var s = t[i];
                            if (s) {
                                var a = !1,
                                    c = n - o;
                                if (!(s.strSize + s.paramSize < c)) {
                                    s.truncate ? (r += s.param + s.str.substr(0, c), t[i].str = s.str.substr(c, s.strSize - 1), t[i].strSize = t[i].str.length) : s.strSize + s.paramSize > n && (e.emit("Tracker:Hit:Build:Error", {
                                        lvl: "ERROR",
                                        msg: 'Too long parameter "' + s.param + '"',
                                        details: {
                                            value: s.str
                                        }
                                    }), t[i].str = t[i].str.substr(0, n - s.paramSize - 1), t[i].strSize = t[i].str.length);
                                    break
                                }
                                r += s.param + s.str, o += s.strSize + s.paramSize, t[i] = void 0, a = !0
                            } else a = !0
                        }
                    return [r, a ? null : t]
                },
                r = ["ati", "atc", "pdtl", "stc", "dz"],
                o = function(t, o, a) {
                    var s = function(e) {
                            if (e === {}) return "";
                            var t, o = [];
                            t = {};
                            var a, s, c, l = 0,
                                u = !1,
                                f = void 0;
                            for (c in e)
                                if (e.hasOwnProperty(c)) {
                                    var d = e[c].value;
                                    "function" == typeof d && (d = d()), d = d instanceof Array ? d.join(e[c].options.separator || ",") : "object" == typeof d ? window.ATInternet.Utils.jsonSerialize(d) : "undefined" == typeof d ? "undefined" : d.toString(), e[c].options.encode && (d = encodeURIComponent(d));
                                    var g = n(c, d, -1 < window.ATInternet.Utils.arrayIndexOf(r, c)),
                                        l = l + (g.paramSize + g.strSize);
                                    if (e[c].options.last) 1490 < d.length && d.substr(0, 1490), a = c, s = g;
                                    else if (t[c] = g, 1500 < t[c].paramSize + t[c].strSize && !t[c].truncate) {
                                        u = !0, f = c;
                                        break
                                    }
                                }
                            if (a && (t[a] = s), t = [t, l, u, f], e = t[0], t[2]) t = t[3], e = e[t], e.str = e.str.substr(0, 1450), e.strSize = 1450, l = {}, l.mherr = n("mherr", "1", !1), l[t] = e, o.push(i(l, 1500)[0]);
                            else if (t = i(e, 1500), null === t[1]) o = t[0];
                            else
                                for (o.push(t[0]); null !== t[1];) t = i(e, 1500), o.push(t[0]);
                            return o
                        },
                        c = "";
                    e.buffer.presentInFilters(o, "hitType") || (o = e.buffer.addInFilters(o, "hitType", ["page"])), o = e.buffer.addInFilters(o, "hitType", ["all"]);
                    var l;
                    if (t) {
                        o = e.buffer.addInFilters(o, "permanent", !0), o = e.buffer.get(o, !0);
                        for (l in t) t.hasOwnProperty(l) && (o[l] = {
                            value: t[l],
                            options: {}
                        });
                        c = s(o)
                    } else
                        for (l in o = e.buffer.get(o, !0), c = s(o), o) o.hasOwnProperty(l) && !o[l].options.permanent && e.buffer.del(l);
                    a && a(c)
                },
                a = function(t) {
                    var n = e.getConfig("secure"),
                        i = "https:" === document.location.protocol,
                        i = n || i ? e.getConfig("logSSL") : e.getConfig("log"),
                        r = e.getConfig("baseURL"),
                        o = e.getConfig("domain"),
                        a = e.getConfig("pixelPath"),
                        s = e.getConfig("site");
                    (r || i && o && a) && s ? t && t(null, (r ? r : (n ? "https://" : "//") + i + ("." + o) + a) + ("?s=" + s)) : t && t({
                        message: "Config error"
                    })
                },
                s = function(e, t, n) {
                    a(function(i, r) {
                        i ? n && n(i) : o(e, t, function(e) {
                            var t = [],
                                i = window.ATInternet.Utils.genGuid(13);
                            if (e instanceof Array)
                                if (1 === e.length) t.push(r + "&mh=1-2-" + i + e[0]);
                                else
                                    for (var o = 1; o <= e.length; o++) t.push(r + "&mh=" + o + "-" + e.length + "-" + i + e[o - 1]);
                            else t.push(r + e);
                            n && n(null, t)
                        })
                    })
                };
            t.send = function(n, i) {
                s(n, i, function(n, i) {
                    if (n) e.emit("Tracker:Hit:Build:Error", {
                        lvl: "ERROR",
                        msg: n.message,
                        details: {
                            hits: i
                        }
                    });
                    else
                        for (var r = 0; r < i.length; r++) t.sendUrl(i[r])
                })
            }, t.sendUrl = function(t) {
                var n = function(t, n) {
                        return function() {
                            return function(i) {
                                e.emit(t, {
                                    lvl: -1 === t.indexOf("Error") ? "INFO" : "ERROR",
                                    details: {
                                        hit: n,
                                        event: i
                                    }
                                })
                            }
                        }()
                    },
                    i = new Image;
                i.onload = n("Tracker:Hit:Sent:Ok", t), i.onerror = n("Tracker:Hit:Sent:Error", t), i.src = t
            }
        },
        n = function() {
            function e(e, t, n) {
                for (var i = [], r = 0; r < e.length; r++) e[r].callback(t, n), e[r].singleUse || i.push(e[r]);
                return i
            }

            function t(e, n, i, r) {
                var o = e.shift();
                return "*" === o ? (n["*"] = n["*"] || [], n["*"].push({
                    callback: i,
                    singleUse: r
                }), n["*"].length - 1) : 0 === e.length ? t([o, "*"], n, i, r) : (n["*"] = n["*"] || [], n[o] = n[o] || {}, t(e, n[o], i, r))
            }

            function n(t, i, r, o) {
                var a = i.shift();
                "*" !== a && (0 === i.length ? n(t, [a, "*"], r, o) : r[a] && (r[a]["*"] = e(r[a]["*"], t, o), n(t, i, r[a], o)))
            }
            var i = {};
            this.on = function(e, n, r) {
                return r = r || !1, t(e.split(":"), i, n, r)
            }, this.emit = function(t, r) {
                i["*"] && (i["*"] = e(i["*"], t, r)), n(t, t.split(":"), i, r)
            }
        },
        i = function(e) {
            var t = {},
                n = {},
                i = 0,
                r = {},
                o = 0,
                a = this.load = function(r, o) {
                    return "function" == typeof o ? "undefined" == typeof e.getConfig.plgAllowed || 0 === e.getConfig.plgAllowed.length || -1 < e.getConfig.plgAllowed.indexOf(r) ? (t[r] = new o(e), n[r] && t[r] && (n[r] = !1, i--, t[r + "_ll"] && s(r + "_ll"), 0 === i && e.emit("Tracker:Plugin:Lazyload:File:Complete", {
                        lvl: "INFO",
                        msg: "LazyLoading triggers are finished"
                    })), e.emit("Tracker:Plugin:Load:" + r + ":Ok", {
                        lvl: "INFO"
                    })) : e.emit("Tracker:Plugin:Load:" + r + ":Error", {
                        lvl: "ERROR",
                        msg: "Plugin not allowed",
                        details: {}
                    }) : e.emit("Tracker:Plugin:Load:" + r + ":Error", {
                        lvl: "ERROR",
                        msg: "not a function",
                        details: {
                            obj: o
                        }
                    }), e
                },
                s = this.unload = function(n) {
                    return t[n] ? (t[n] = void 0, e.emit("Tracker:Plugin:Unload:" + n + ":Ok", {
                        lvl: "INFO"
                    })) : e.emit("Tracker:Plugin:Unload:" + n + ":Error", {
                        lvl: "ERROR",
                        msg: "not a known plugin"
                    }), e
                },
                c = this.isLazyloading = function(e) {
                    return e ? !0 === n[e] : 0 !== i
                },
                l = function(e) {
                    return f(e) ? (u(e), !0) : !1
                },
                u = function(t) {
                    n[t] = !0, i++, ATInternet.Utils.loadScript({
                        url: e.getConfig("lazyLoadingPath") + t + ".js"
                    })
                },
                f = function(e) {
                    return !(t[e] || c(e) || (t[e + "_ll"] ? 0 : 1))
                },
                d = function(e) {
                    r[e] ? r[e]++ : r[e] = 1, o++
                };
            this.isExecWaitingLazyloading = function() {
                return 0 !== o
            }, e.exec = this.exec = function(n, i, a, s) {
                var l = null,
                    g = function(e, n, i, r) {
                        n = n.split("."), t[e] && t[e][n[0]] && (l = 1 < n.length && t[e][n[0]][n[1]] ? t[e][n[0]][n[1]].apply(t[e], i) : t[e][n[0]].apply(t[e], i)), r && r(l)
                    },
                    p = function(t, n, i, a) {
                        d(t), e.onTrigger("Tracker:Plugin:Load:" + t + ":Ok", function() {
                            g(t, n, i, function(n) {
                                r[t]--, o--, 0 === o && e.emit("Tracker:Plugin:Lazyload:Exec:Complete", {
                                    lvl: "INFO",
                                    msg: "All exec waiting for lazyloading are done"
                                }), a && a(n)
                            })
                        }, !0)
                    };
                f(n) ? (p(n, i, a, s), u(n)) : c(n) ? p(n, i, a, s) : g(n, i, a, s)
            }, this.waitForDependencies = function(n, i) {
                var r = function(e) {
                    for (var n = {
                            mcount: 0,
                            plugins: {}
                        }, i = 0; i < e.length; i++) t.hasOwnProperty(e[i]) || (n.mcount++, n.plugins[e[i]] = !0);
                    return n
                }(n);
                if (0 === r.mcount) e.emit("Tracker:Plugin:Dependencies:Loaded", {
                    lvl: "INFO",
                    details: {
                        dependencies: n
                    }
                }), i();
                else
                    for (var o in r.plugins) r.plugins.hasOwnProperty(o) && (e.emit("Tracker:Plugin:Dependencies:Error", {
                        lvl: "WARNING",
                        msg: "Missing plugin " + o
                    }), e.onTrigger("Tracker:Plugin:Load:" + o, function(e, t) {
                        var n = e.split(":"),
                            o = n[3];
                        "Ok" === n[4] && (r.plugins[o] = !1, r.mcount--, 0 === r.mcount && i())
                    }, !0), l(o))
            }, this.init = function() {
                for (var e in ATInternet.Tracker.pluginProtos) ATInternet.Tracker.pluginProtos.hasOwnProperty(e) && a(e, ATInternet.Tracker.pluginProtos[e])
            }
        },
        r = function(e) {
            var t = {};
            this.set = function(e, n, i) {
                i = i || {}, i.hitType = i.hitType || ["page"], t[e] = {
                    value: n,
                    options: i
                }
            };
            var n = function(e, t, n) {
                    return (e = window.ATInternet.Utils.cloneSimpleObject(e[t])) && !n ? e.value : e
                },
                i = function r(e, n) {
                    if (!(e && n instanceof Array && e instanceof Array)) return [];
                    if (0 === e.length) return n;
                    var i, o = e[0],
                        a = [],
                        s = window.ATInternet.Utils.cloneSimpleObject(e);
                    s.shift();
                    for (var c = 0; c < n.length; c++)
                        if ("object" != typeof o[1]) t[n[c]] && t[n[c]].options[o[0]] === o[1] && a.push(n[c]);
                        else {
                            i = o[1].length;
                            for (var l = 0; i > l; l++)
                                if (t[n[c]] && t[n[c]].options[o[0]] instanceof Array && 0 <= window.ATInternet.Utils.arrayIndexOf(t[n[c]].options[o[0]], o[1][l])) {
                                    a.push(n[c]);
                                    break
                                }
                        }
                    return r(s, a)
                };
            this.get = function(e, r) {
                var o = {};
                if ("string" == typeof e) o = n(t, e, r);
                else
                    for (var a = i(e, window.ATInternet.Utils.getObjectKeys(t)), s = 0; s < a.length; s++) o[a[s]] = n(t, a[s], r);
                return o
            }, this.presentInFilters = function o(e, t) {
                return e && 0 !== e.length ? e[0][0] === t ? !0 : o(e.slice(1), t) : !1
            }, this.addInFilters = function a(e, t, n, i) {
                if (!e || 0 === e.length) return i ? [] : [
                    [t, n]
                ];
                var r = e[0][0],
                    o = e[0][1];
                return r === t && (o instanceof Array && !(-1 < window.ATInternet.Utils.arrayIndexOf(o, n[0])) && o.push(n[0]), i = !0), [
                    [r, o]
                ].concat(a(e.slice(1), t, n, i))
            }, this.del = function(e) {
                t[e] = void 0
            }, this.clear = function() {
                t = {}
            }
        },
        o = function(o, a, s) {
            a = a || {};
            var c = this;
            c.version = "5.2.3";
            var l = window.ATInternet.Utils.cloneSimpleObject(a);
            c.triggers = new n(c), c.emit = c.triggers.emit, c.onTrigger = c.triggers.on;
            var u, f = window.ATInternet.Utils.cloneSimpleObject(e) || {};
            for (u in o) o.hasOwnProperty(u) && (f[u] = o[u]);
            c.getConfig = function(e) {
                return f[e]
            }, c.setConfig = function(e, t, n) {
                void 0 !== f[e] && n || (c.emit("Tracker:Config:Set:" + e, {
                    lvl: "INFO",
                    details: {
                        bef: f[e],
                        aft: t
                    }
                }), f[e] = t)
            }, c.configPlugin = function(e, t, n) {
                f[e] = f[e] || {};
                for (var i in t) t.hasOwnProperty(i) && void 0 === f[e][i] && (f[e][i] = t[i]);
                return n && (n(f[e]), c.onTrigger("Tracker:Config:Set:" + e, function(e, t) {
                    n(t.details.aft)
                })), f[e]
            }, c.getContext = function(e) {
                return l[e]
            }, c.setContext = function(e, t) {
                c.emit("Tracker:Context:Set:" + e, {
                    lvl: "INFO",
                    details: {
                        bef: l[e],
                        aft: t
                    }
                }), l[e] = t
            }, c.delContext = function(e, t) {
                if (c.emit("Tracker:Context:Deleted:" + e + ":" + t, {
                        lvl: "INFO",
                        details: {
                            key1: e,
                            key2: t
                        }
                    }), e) l.hasOwnProperty(e) && (t ? l[e] && l[e].hasOwnProperty(t) && (l[e][t] = void 0) : l[e] = void 0);
                else if (t)
                    for (var n in l) l.hasOwnProperty(n) && l[n] && l[n].hasOwnProperty(t) && (l[n][t] = void 0)
            }, c.plugins = new i(c), c.buffer = new r(c), c.setParam = c.buffer.set, c.getParams = function(e) {
                return c.buffer.get(e, !1)
            }, c.getParam = c.buffer.get, c.delParam = c.buffer.del, c.builder = new t(c), c.sendHit = c.builder.send, c.sendUrl = c.builder.sendUrl, c.setParam("ts", function() {
                return (new Date).getTime()
            }, {
                permanent: !0,
                hitType: ["all"]
            }), c.getConfig("disableCookie") && c.setParam("idclient", "xxxxxx-NO", {
                permanent: !0,
                hitType: ["all"]
            }), c.plugins.init(), ATInternet.Tracker.instances.push(c), c.emit("Tracker:Ready", {
                lvl: "INFO",
                msg: "Tracker initialized",
                details: {
                    tracker: c,
                    args: {
                        config: o,
                        context: a,
                        callback: s
                    }
                }
            }), s && s(c)
        };
    ATInternet.Tracker.Tag = o, ATInternet.Tracker.instances = [], ATInternet.Tracker.pluginProtos = {}, ATInternet.Tracker.addPlugin = function(e, t) {
        if (t = t || ATInternet.Tracker.Plugins[e], !ATInternet.Tracker.pluginProtos[e]) {
            ATInternet.Tracker.pluginProtos[e] = t;
            for (var n = 0; n < ATInternet.Tracker.instances.length; n++) ATInternet.Tracker.instances[n].plugins.load(e, t)
        }
    }, ATInternet.Tracker.delPlugin = function(e) {
        if (ATInternet.Tracker.pluginProtos[e]) {
            ATInternet.Tracker.pluginProtos[e] = void 0;
            for (var t = 0; t < ATInternet.Tracker.instances.length; t++) ATInternet.Tracker.instances[t].plugins.unload(e)
        }
    }
}).call(window),
    function() {
        var e = {
                lifetime: 30,
                lastPersistence: !0,
                listEventsForExec: [],
                domainAttribution: !0,
                info: "True"
            },
            t = {
                visitLifetime: 30,
                redirectionLifetime: 30
            };
        window.ATInternet.Tracker.Plugins.Campaigns = function(n) {
            n.setConfig("visitLifetime", t.visitLifetime, !0), n.setConfig("redirectionLifetime", t.redirectionLifetime, !0);
            var i, r, o = {};
            n.configPlugin("Campaigns", e || {}, function(e) {
                o = e
            });
            var a, s, c, l, u, f, d, g, p, m, h, v, T, y = function(e, t, i) {
                    var r = null;
                    return n.plugins.exec(e, t, i, function(e) {
                        r = e
                    }), r
                },
                w = function(e, t) {
                    return y("Cookies", e, t)
                },
                k = function(e, t) {
                    return y("Utils", e, t)
                },
                P = function(e, t) {
                    var n = w(r, [
                        [e]
                    ]);
                    return null !== n ? !("object" != typeof n || n instanceof Array) : (w(i, [e, {}, t]), !0)
                },
                b = function(e, t) {
                    var i = n.getContext("campaigns") || {};
                    i[e] = t, n.setContext("campaigns", i)
                },
                C = function(e) {
                    i = "set" + (o.domainAttribution ? "" : "Private"), r = "get" + (o.domainAttribution ? "" : "Private"), a = w(r, [
                        ["atredir", "gopc"]
                    ]), s = w(r, [
                        ["atredir", "gopc_err"]
                    ]), c = w(r, [
                        ["atredir", "camp"]
                    ]), w("del", [
                        ["atredir", "gopc"]
                    ]), w("del", [
                        ["atredir", "gopc_err"]
                    ]), w("del", [
                        ["atredir", "camp"]
                    ]), l = w(r, [
                        ["atsession", "histo_camp"]
                    ]), u = w(r, [
                        ["atreman", "camp"]
                    ]), f = w(r, [
                        ["atreman", "date"]
                    ]);
                    var t = k("getLocation", []);
                    if (d = k("getQueryStringValue", ["xtor", t]), g = k("getQueryStringValue", ["xtdt", t]), p = k("getQueryStringValue", ["xts", t]), m = n.getContext("forcedCampaign"), h = !!n.getConfig("redirect"), (v = d && g && p ? !0 : !1) && (t = (new Date).getTime() / 6e4, T = !h && p !== n.getConfig("site") || 0 > t - g || t - g >= n.getConfig("visitLifetime") ? !0 : !1), t = m || c || d, h && t && P("atredir", {
                            path: "/",
                            end: n.getConfig("redirectionLifetime")
                        }) && (w(i, [
                            ["atredir", "camp"], t
                        ]), w(i, [
                            ["atredir", "gopc"], m ? !1 : c ? a : v ? !0 : !1
                        ]), w(i, [
                            ["atredir", "gopc_err"], m ? !1 : c ? s : T ? !0 : !1
                        ])), !h && u && (b("xtor", u), t = (new Date).getTime() / 36e5, t = Math.floor(t - f), b("roinbh", t >= 0 ? t : 0)), h || (t = void 0, t = c ? a ? m || t : m || c : v ? m || t : m || d || t, l && l instanceof Array && -1 < l.indexOf(t) && (t = void 0), t && b("xto", t)), !h && !m) {
                        var y;
                        c ? s && (y = c) : T && (y = d), y && b("pgt", y)
                    }
                    h || !(y = c ? m || c : m || d || void 0) || !m && !c && v && T || !m && c && a && s || ((!l || l instanceof Array && 0 > l.indexOf(y)) && P("atsession", {
                        path: "/",
                        session: 60 * n.getConfig("visitLifetime")
                    }) && w(i, [
                        ["atsession", "histo_camp"], l && l.push(y) ? l : [y]
                    ]), u && !o.lastPersistence || !P("atreman", {
                        path: "/",
                        session: 86400 * o.lifetime
                    }) || (w(i, [
                        ["atreman", "camp"], y
                    ]), w(i, [
                        ["atreman", "date"], (new Date).getTime() / 36e5
                    ]))), n.emit("Campaigns:" + e, {
                        lvl: "INFO"
                    })
                };
            ! function() {
                var e = ["Cookies", "Utils"]; - 1 === ATInternet.Utils.arrayIndexOf(n.getConfig("plgs"), "BackwardCompat") ? n.plugins.waitForDependencies(e, function() {
                    C("process2:done")
                }) : n.onTrigger("BackCampaigns:process2:done", function(t, i) {
                    n.plugins.waitForDependencies(e, function() {
                        C("process1:done")
                    })
                }, !0)
            }()
        }, window.ATInternet.Tracker.addPlugin("Campaigns")
    }.call(window),
    function() {
        window.ATInternet.Tracker.Plugins.Clicks = function(e) {
            var t = function(e) {
                    var t = "";
                    switch (e) {
                        case "exit":
                            t = "S";
                            break;
                        case "download":
                            t = "T";
                            break;
                        case "action":
                            t = "A";
                            break;
                        case "navigation":
                            t = "N"
                    }
                    return t
                },
                n = function(t) {
                    var n = t.name;
                    return e.exec("Utils", "manageChapters", [t, "chapter", 3], function(e) {
                        n = e + (n ? n : "")
                    }), n
                },
                i = function(i) {
                    var r = {
                            p: n(i),
                            s2: i.level2 || "",
                            click: t(i.type) || ""
                        },
                        o = e.getContext("page") || {};
                    r.pclick = n(o), r.s2click = o.level2 || "", i.customObject && e.exec("Utils", "customObjectToString", [i.customObject], function(e) {
                        r.stc = e
                    }), e.sendHit(r, [
                        ["hitType", ["click"]]
                    ])
                };
            e.click = {}, e.clickListener = this.clickListener = {}, e.click.send = this.send = function(t) {
                var n = !0;
                return e.plugins.exec("TechClicks", "manageClick", [t.elem], function(e) {
                    n = e
                }), i(t), n
            }, e.clickListener.send = this.clickListener.send = function(t) {
                if (t.elem) {
                    var n;
                    e.plugins.exec("TechClicks", "isFormSubmit", [t.elem], function(e) {
                        n = e ? "submit" : "click"
                    }), ATInternet.Utils.addEvtListener(t.elem, n, function(n) {
                        e.plugins.exec("TechClicks", "manageClick", [t.elem, n]), i(t)
                    })
                }
            }, e.click.set = this.set = function(i) {
                e.dispatchSubscribe("click"), e.setContext("click", {
                    name: n(i),
                    level2: i.level2 || "",
                    customObject: i.customObject
                }), e.setParam("click", t(i.type) || "", {
                    hitType: ["click"]
                })
            }, e.click.onDispatch = this.onDispatch = function() {
                var t = {
                    hitType: ["click"]
                };
                e.setParam("p", e.getContext("click").name, t), e.setParam("s2", e.getContext("click").level2, t);
                var i = e.getContext("click").customObject;
                i && e.setParam("stc", i, {
                    hitType: ["click"],
                    encode: !0
                }), i = e.getContext("page") || {}, e.setParam("pclick", n(i), t), e.setParam("s2click", i.level2 || "", t), e.sendHit(null, [
                    ["hitType", ["click"]]
                ]), e.setContext("click", void 0)
            }
        }, window.ATInternet.Tracker.addPlugin("Clicks")
    }.call(window),
    function() {
        var e = {
            clientSideMode: "required",
            userIdCookieDuration: 397,
            userIdExpirationMode: "fixed",
            info: "True"
        };
        ! function() {
            window.ATInternet.Tracker.Plugins.ClientSideUserId = function(t) {
                var n = {},
                    i = void 0,
                    r = null;
                t.configPlugin("ClientSideUserId", e || {}, function(e) {
                    n = e
                });
                var o = function() {
                        i = t.getContext("userIdentifier"), t.exec("Cookies", "get", ["atuserid"], function(e) {
                            r = e
                        })
                    },
                    a = function(e, n) {
                        t.setParam("idclient", e, {
                            permanent: !0,
                            hitType: ["all"]
                        }), s(e, n)
                    },
                    s = function(e, i) {
                        if ("relative" === n.userIdExpirationMode || "fixed" === n.userIdExpirationMode && null === r) {
                            var o = new Date;
                            o.setTime(o.getTime() + 864e5 * n.userIdCookieDuration), t.exec("Cookies", "set", ["atuserid", e, {
                                end: o,
                                path: "/"
                            }]), t.exec("Cookies", "get", ["atuserid", !0], function(n) {
                                i || e === n || t.setParam("idclient", e + "-NO", {
                                    permanent: !0,
                                    hitType: ["all"]
                                })
                            })
                        }
                    },
                    c = function() {
                        var e = !1;
                        if ("required" === n.clientSideMode) {
                            var t = navigator.userAgent;
                            (/Safari/.test(t) && !/Chrome/.test(t) || /iPhone|iPod|iPad/.test(t)) && (e = !0)
                        } else "always" === n.clientSideMode && (e = !0);
                        return e
                    };
                t.plugins.waitForDependencies(["Cookies"], function() {
                    o();
                    var e = "";
                    if (c()) {
                        var s = !1;
                        "undefined" != typeof i ? (e = i, s = !0) : e = null !== r ? r : ATInternet.Utils.genGuid(13), a(e, s)
                    }
                    t.emit("ClientSideUserId:Ready", {
                        lvl: "INFO",
                        details: {
                            clientSideMode: n.clientSideMode,
                            userIdFromContext: i,
                            userIdFromCookie: r,
                            userId: e
                        }
                    })
                }), t.clientSideUserId = {}, t.clientSideUserId.set = function(e) {
                    c() && a(e, !0)
                }
            }, window.ATInternet.Tracker.addPlugin("ClientSideUserId")
        }()
    }.call(window),
    function() {
        var e = {
                domainAttribution: !0,
                info: "True"
            },
            t = {
                redirectionLifetime: 30
            };
        window.ATInternet.Tracker.Plugins.ContextVariables = function(n) {
            var i = "",
                r = null,
                o = "",
                a = "",
                s = {};
            n.configPlugin("ContextVariables", e || {}, function(e) {
                s = e
            }), n.setConfig("redirectionLifetime", t.redirectionLifetime, !0);
            var c = function(e, t, i) {
                    var r = null;
                    return n.plugins.exec(e, t, i, function(e) {
                        r = e
                    }), r
                },
                l = function(e, t) {
                    return c("Utils", e, t)
                },
                u = function(e, t) {
                    var i = null;
                    return n.plugins.exec("Cookies", e, t, function(e) {
                        i = e
                    }), i
                },
                f = function() {
                    n.setParam("hl", function() {
                        var e = new Date;
                        return e.getHours() + "x" + e.getMinutes() + "x" + e.getSeconds()
                    }, {
                        permanent: !0,
                        hitType: ["all"]
                    })
                },
                d = function(e) {
                    var t = "",
                        t = "acc_dir" === i ? "" : i ? i : "acc_dir" === r ? "" : r ? r : e.referrer;
                    return t.replace(/[<>]/g, "").substring(0, 1600).replace(/&/g, "$")
                };
            n.plugins.waitForDependencies(["Cookies", "Utils"], function() {
                o = "set" + (s.domainAttribution ? "" : "Private"), a = "get" + (s.domainAttribution ? "" : "Private");
                var e = l("getLocation", []);
                if (i = l("getQueryStringValue", ["xtref", e]), n.getConfig("redirect")) {
                    var t, e = l("getDocumentLevel", []),
                        e = i || e.referrer || "acc_dir";
                    if (t = e) {
                        t = {
                            path: "/",
                            end: n.getConfig("redirectionLifetime")
                        };
                        var c = u(a, [
                            ["atredir"]
                        ]);
                        null !== c ? t = !("object" != typeof c || c instanceof Array) : (u(o, ["atredir", {}, t]), t = !0)
                    }
                    t && u(o, [
                        ["atredir", "ref"], e
                    ])
                } else {
                    r = u(a, [
                        ["atredir", "ref"]
                    ]), u("del", [
                        ["atredir", "ref"]
                    ]), n.setParam("vtag", n.version, {
                        permanent: !0,
                        hitType: ["all"]
                    }), n.setParam("ptag", "js", {
                        permanent: !0,
                        hitType: ["all"]
                    }), e = "";
                    try {
                        e += window.screen.width + "x" + window.screen.height + "x" + window.screen.pixelDepth + "x" + window.screen.colorDepth
                    } catch (g) {}
                    n.setParam("r", e, {
                        permanent: !0,
                        hitType: ["all"]
                    }), e = "", window.innerWidth ? e += window.innerWidth + "x" + window.innerHeight : document.body.offsetWidth && (e += document.body.offsetWidth + "x" + document.body.offsetHeight), n.setParam("re", e, {
                        permanent: !0,
                        hitType: ["all"]
                    }), f(), n.setParam("lng", navigator.language || navigator.userLanguage, {
                        permanent: !0,
                        hitType: ["all"]
                    }), e = window.ATInternet.Utils.genGuid(13), n.setParam("idp", e, {
                        permanent: !0,
                        hitType: ["page", "clickzone"]
                    }), n.setParam("jv", navigator.javaEnabled() ? "1" : "0", {
                        hitType: ["page"]
                    }), e = l("getDocumentLevel", []), n.setParam("ref", d(e), {
                        permanent: !0,
                        last: !0,
                        hitType: ["page"]
                    })
                }
                n.emit("ContextVariables:Ready", {
                    lvl: "INFO"
                })
            })
        }, window.ATInternet.Tracker.addPlugin("ContextVariables")
    }.call(window),
    function() {
        window.ATInternet.Tracker.Plugins.Cookies = function(e) {
            var t = {},
                n = this.getCookie = function(t) {
                    return !e.getConfig("disableCookie") && t && "string" == typeof t && (t = RegExp("(?:^| )" + t + "=([^;]+)").exec(document.cookie) || null) ? decodeURIComponent(t[1]) : null
                },
                i = this.setCookie = function(t, n, i) {
                    if (!e.getConfig("disableCookie") && t && "string" == typeof t && "string" == typeof n) {
                        var r = e.getConfig("cookieDomain");
                        if (t = t + "=" + encodeURIComponent(n), i) {
                            n = i.end;
                            var o = i.domain,
                                a = i.path;
                            i = i.secure, t += n ? "function" == typeof n.toGMTString ? ";expires=" + n.toGMTString() : "number" == typeof n ? ";max-age=" + n.toString() : "" : "", t = t + (r || o ? ";domain=" + (o ? o : r) : "") + (a && "string" == typeof a ? ";path=" + a : ""), t += i && "boolean" == typeof i ? ";secure" : ""
                        }
                        return document.cookie = t, !0
                    }
                    return null
                },
                r = function(e) {
                    var t = null;
                    return (e = n(e)) && (t = ATInternet.Utils.jsonParse(e)), t
                },
                o = function(e) {
                    return i(e.name, ATInternet.Utils.jsonSerialize(e), e.options) ? e : null
                },
                a = function(e, n, i) {
                    var a = null;
                    return !i && t[e] ? a = t[e] : (a = r(e)) && (a.options.session && o(a), t[e] = a), a ? n ? (e = null, !a || "object" != typeof a.val || a.val instanceof Array || void 0 === a.val[n] || (e = a.val[n]), e) : a.val : null
                },
                s = function(e, n, i, a) {
                    var s = null;
                    return n ? (s = r(e)) && (a = s, !a || "object" != typeof a.val || a.val instanceof Array ? s = null : (a.val[n] = i, s = a), s && (s = o(s))) : (n = a = a || {}, a = {}, a.name = e, a.val = i, n.session && "number" == typeof n.session && (n.end = n.session), a.options = n, s = o(a)), s && (t[e] = s), s ? s.val : null
                },
                c = function(e, n) {
                    n ? s(e, n, void 0) : (t[e] = void 0, i(e, "", {
                        end: 0
                    }))
                },
                l = this.get = function(e, t) {
                    return t = t || !1, e instanceof Array && 2 === e.length ? a(e[0], e[1], t) : a(e, void 0, t)
                };
            this.getPrivate = function(t, n) {
                return n = n || !1, t instanceof Array ? t[0] += e.getConfig("site") : t += e.getConfig("site"), l(t, n)
            };
            var u = this.set = function(e, t, n) {
                return e instanceof Array ? s(e[0], e[1], t) : s(e, null, t, n)
            };
            this.setPrivate = function(t, n, i) {
                return t instanceof Array ? t[0] += e.getConfig("site") : t += e.getConfig("site"), u(t, n, i)
            };
            var f = this.del = function(e) {
                return e instanceof Array ? c(e[0], e[1]) : c(e)
            };
            this.delPrivate = function(t) {
                return t instanceof Array ? t[0] += e.getConfig("site") : t += e.getConfig("site"), f(t)
            }, this.cacheInvalidation = function() {
                t = {}
            }
        }, window.ATInternet.Tracker.addPlugin("Cookies")
    }.call(window),
    function() {
        var e = {
                lifetime: 182,
                domainAttribution: !0,
                info: "True"
            },
            t = {
                redirectionLifetime: 30
            };
        window.ATInternet.Tracker.Plugins.IdentifiedVisitor = function(n) {
            var i = null,
                r = null,
                o = null,
                a = null,
                s = "",
                c = "",
                l = null,
                u = null,
                f = "",
                d = "",
                g = {};
            n.configPlugin("IdentifiedVisitor", e || {}, function(e) {
                g = e
            }), n.setConfig("redirectionLifetime", t.redirectionLifetime, !0);
            var p = function(e, t, i) {
                    var r = null;
                    return n.plugins.exec(e, t, i, function(e) {
                        r = e
                    }), r
                },
                m = function(e, t) {
                    return p("Utils", e, t)
                },
                h = function(e, t) {
                    var i = null;
                    return n.plugins.exec("Cookies", e, t, function(e) {
                        i = e
                    }), i
                },
                v = function(e, t) {
                    var n = h(d, [
                        [e]
                    ]);
                    return null !== n ? !("object" != typeof n || n instanceof Array) : (h(f, [e, {}, t]), !0)
                },
                T = function() {
                    var e = function(e, t) {
                            /-/.test(t) ? (e.category = t.split("-")[0], e.id = t.split("-")[1]) : e.id = t
                        },
                        t = {
                            category: "",
                            id: ""
                        };
                    e(t, c || u);
                    var a = {
                        category: "",
                        id: ""
                    };
                    e(a, s || l), a.id ? (a.category && y("ac", a.category), y("at", a.id)) : i && n.setParam("at", i, {
                        hitType: ["all"],
                        permanent: !0
                    }), t.id ? (t.category && y("ac", t.category), y("an", t.id)) : r && n.setParam("anc", o + "-" + r, {
                        hitType: ["all"],
                        permanent: !0
                    })
                },
                y = function(e, t) {
                    n.setParam(e, t, {
                        hitType: ["all"],
                        permanent: !0
                    }), w(e, t)
                },
                w = function(e, t) {
                    v("atidvisitor", {
                        path: "/",
                        session: 86400 * g.lifetime
                    }) && h(f, [
                        ["atidvisitor", e], t
                    ])
                };
            n.plugins.waitForDependencies(["Cookies", "Utils"], function() {
                f = "set" + (g.domainAttribution ? "" : "Private"), d = "get" + (g.domainAttribution ? "" : "Private");
                var e = m("getLocation", []);
                s = m("getQueryStringValue", ["xtat", e]), c = m("getQueryStringValue", ["xtan", e]), n.getConfig("redirect") ? (s || c) && v("atredir", {
                    path: "/",
                    end: n.getConfig("redirectionLifetime")
                }) && (c && h(f, [
                    ["atredir", "an"], c
                ]), s && h(f, [
                    ["atredir", "at"], s
                ])) : (l = h(d, [
                    ["atredir", "at"]
                ]), u = h(d, [
                    ["atredir", "an"]
                ]), h("del", [
                    ["atredir", "at"]
                ]), h("del", [
                    ["atredir", "an"]
                ]), i = h(d, [
                    ["atidvisitor", "at"]
                ]), r = h(d, [
                    ["atidvisitor", "an"]
                ]), o = h(d, [
                    ["atidvisitor", "ac"]
                ]), a = h(d, [
                    ["atidvisitor", "vrn"]
                ]), T(), e = "-" + n.getConfig("site") + "-", RegExp(e).test(a) || (a = (a || "") + e, w("vrn", a), e = n.getContext("page") || {}, e.vrn = 1, n.setContext("page", e))), n.emit("IdentifiedVisitor:Ready", {
                    lvl: "INFO",
                    details: {
                        cookieRedirectTextual: l,
                        cookieRedirectNumeric: u,
                        cookieTextual: i,
                        cookieNumeric: r,
                        cookieCategory: o,
                        cookieVrn: a
                    }
                })
            }), n.identifiedVisitor = {}, n.identifiedVisitor.set = this.set = function(e) {
                var t = e.id;
                e = e.category, "number" == typeof t ? y("an", t.toString()) : y("at", t), "undefined" != typeof e && y("ac", e)
            }, n.identifiedVisitor.unset = this.unset = function() {
                for (var e = ["an", "at", "ac"], t = 0; t < e.length; t++) n.exec("Cookies", "set", [
                    ["atidvisitor", e[t], {
                        path: "/"
                    }], void 0
                ]), n.delParam(e[t]);
                n.delParam("anc")
            }
        }, window.ATInternet.Tracker.addPlugin("IdentifiedVisitor")
    }.call(window),
    function() {
        var e = {
            urlKeyword: "",
            urlResultPageNumber: "",
            urlResultPosition: "",
            info: "True"
        };
        window.ATInternet.Tracker.Plugins.InternalSearch = function(t) {
            var n = {};
            t.configPlugin("InternalSearch", e || {}, function(e) {
                n = e
            }), t.internalSearch = {}, t.internalSearch.set = this.set = function(e) {
                t.setContext("InternalSearch", {
                    keyword: e.keyword,
                    resultPageNumber: e.resultPageNumber
                })
            }, t.internalSearch.send = this.send = function(e) {
                var n = !0;
                return t.plugins.exec("TechClicks", "manageClick", [e.elem], function(e) {
                    n = e
                }), t.sendHit({
                    mc: e.keyword,
                    np: e.resultPageNumber || 0,
                    mcrg: e.resultPosition || "",
                    click: "IS"
                }, [
                    ["hitType", ["InternalSearch"]]
                ]), n
            }, t.plugins.waitForDependencies(["Utils"], function() {
                var e;
                if (n.urlKeyword) {
                    var i = document.location.href;
                    e = {}, t.plugins.exec("Utils", "getQueryStringValue", [n.urlKeyword, i], function(r) {
                        e.keyword = r, n.urlResultPageNumber && t.plugins.exec("Utils", "getQueryStringValue", [n.urlResultPageNumber, i], function(r) {
                            e.resultPageNumber = r, n.urlResultPosition && t.plugins.exec("Utils", "getQueryStringValue", [n.urlResultPosition, i], function(t) {
                                e.resultPosition = t
                            })
                        })
                    })
                }
                e && t.setContext("InternalSearch", e), t.emit("InternalSearch:Ready", {
                    lvl: "INFO",
                    details: {
                        config: {
                            urlKeyword: n.urlKeyword,
                            urlResultPageNumber: n.urlResultPageNumber,
                            urlResultPosition: n.urlResultPosition
                        },
                        url: i,
                        data: e
                    }
                })
            })
        }, window.ATInternet.Tracker.addPlugin("InternalSearch")
    }.call(window),
    function() {
        window.ATInternet.Tracker.Plugins.OnSiteAds = function(e) {
            var t = "",
                n = function(t) {
                    var n = t.name;
                    return e.exec("Utils", "manageChapters", [t, "chapter", 3], function(e) {
                        n = e + (n ? n : "")
                    }), n
                },
                i = function(e, t) {
                    return e[t] ? e[t] : ""
                },
                r = function(e, t) {
                    var n = i(e, t);
                    if (n) {
                        var r = i(e, "prefix");
                        if (n.campaignId) {
                            var r = r || "PUB",
                                o = i(n, "campaignId"),
                                a = i(n, "creation"),
                                s = i(n, "variant"),
                                c = i(n, "format"),
                                l = i(n, "generalPlacement"),
                                u = i(n, "detailedPlacement"),
                                f = i(n, "advertiserId"),
                                n = i(n, "url");
                            return r + "-" + o + "-" + a + "-" + s + "-" + c + "-" + l + "-" + u + "-" + f + "-" + n
                        }
                        if (n.adId) return r = r || "INT", o = i(n, "adId"), a = i(n, "format"), n = i(n, "productId"), r + "-" + o + "-" + a + "||" + n
                    }
                },
                o = function(t) {
                    var i = e.getContext("page") || {};
                    e.sendHit({
                        atc: r(t, "click"),
                        type: "AT",
                        patc: n(i),
                        s2atc: i.level2 || "",
                        stc: t.customObject || ""
                    }, [
                        ["hitType", ["onSiteAdsClick"]]
                    ])
                },
                a = function(t) {
                    e.sendHit({
                        ati: r(t, "impression"),
                        type: "AT",
                        stc: t.customObject || ""
                    }, [
                        ["hitType", ["onSiteAdsImpression"]]
                    ])
                },
                s = function(t, n) {
                    var i = e.buffer.get("ati", !0) || {};
                    i.value = "string" == typeof i.value ? [i.value] : i.value || [], i.options = i.options || {
                        hitType: [n, "page"]
                    }, i.value.push(t), e.buffer.set("ati", i.value, i.options)
                },
                c = function(t, n) {
                    if (t.click ? e.setParam("atc", r(t, "click"), {
                            hitType: [n, "page"]
                        }) : t.impression && e.setParam("ati", r(t, "impression"), {
                            hitType: [n, "page"]
                        }), t.customObject) {
                        e.setContext("onsiteads", {
                            customObject: t.customObject
                        });
                        var i = e.getContext("page") || {};
                        i.customObject = ATInternet.Utils.completeFstLevelObj(i.customObject, t.customObject, !1), e.setContext("page", i)
                    }
                    e.dispatchSubscribe("onSiteAds")
                };
            e.selfPromotion = this.selfPromotion = {}, e.publisher = this.publisher = {}, e.publisher.set = this.publisher.set = function(e) {
                c(e, "publisher")
            }, e.selfPromotion.set = this.selfPromotion.set = function(e) {
                c(e, "selfPromotion")
            }, e.publisher.add = this.publisher.add = function(t) {
                s(r(t, "impression"), "publisher"), e.dispatchSubscribe("onSiteAds")
            }, e.selfPromotion.add = this.selfPromotion.add = function(t) {
                s(r(t, "impression"), "selfPromotion"), e.dispatchSubscribe("onSiteAds")
            };
            var l = this.advertEvent = function(t) {
                var n = !0;
                return e.exec("TechClicks", "manageClick", [t.elem], function(e) {
                    n = e
                }), t.click ? o(t) : t.impression && a(t), n
            };
            e.publisher.send = this.publisher.send = function(e) {
                return l(e)
            }, e.selfPromotion.send = this.selfPromotion.send = function(e) {
                return l(e)
            }, e.onSiteAds = {}, e.onSiteAds.onDispatch = this.onDispatch = function() {
                if (!e.dispatchSubscribed("page")) {
                    var t = e.getContext("page") || {};
                    e.setParam("type", "AT", {
                        hitType: ["publisher", "selfPromotion"]
                    }), e.getParam("atc") && (e.setParam("patc", n(t), {
                        hitType: ["publisher", "selfPromotion"]
                    }), e.setParam("s2atc", t.level2 || "", {
                        hitType: ["publisher", "selfPromotion"]
                    })), (t = e.getContext("onsiteads")) && t.customObject && e.setParam("stc", t.customObject, {
                        encode: !0,
                        hitType: ["publisher", "selfPromotion"]
                    }), e.sendHit(null, [
                        ["hitType", ["publisher", "selfPromotion"]]
                    ])
                }
            }, e.plugins.waitForDependencies(["Utils", "TechClicks"], function() {
                t = document.location.href, e.plugins.exec("Utils", "getQueryStringValue", ["xtatc", t], function(t) {
                    t && e.setParam("atc", t, {
                        hitType: ["publisher", "selfPromotion", "page"]
                    })
                }), e.emit("OnSiteAds:Ready", {
                    lvl: "INFO",
                    details: {
                        href: t
                    }
                })
            })
        }, window.ATInternet.Tracker.addPlugin("OnSiteAds")
    }.call(window),
    function() {
        window.ATInternet.Tracker.Plugins.Page = function(e) {
            var t = ["pageId", "chapterLabel", "update"],
                n = ["pid", "pchap", "pidt"],
                i = ["page", "site"],
                r = ["f", "x"],
                o = function(t) {
                    var n = t.name;
                    return e.exec("Utils", "manageChapters", [t, "chapter", 3], function(e) {
                        n = e + (n ? n : "")
                    }), n
                },
                a = function(e, t, n) {
                    return t ? e = t : e || "undefined" == typeof n || (e = n), e
                },
                s = function(e, t, n) {
                    t.hasOwnProperty(n) && (e[n] = a(e[n], t[n]))
                },
                c = function(t) {
                    (!ATInternet.Utils.isPreview() || e.getConfig("preview")) && (ATInternet.Utils.isPrerender(function(e) {
                        t(e)
                    }) || t())
                },
                l = function(t, n, o) {
                    if (n)
                        for (var a = 0; a < i.length; a++)
                            if (n.hasOwnProperty(i[a]) && n[i[a]])
                                for (var s in n[i[a]]) n[i[a]].hasOwnProperty(s) && (o ? t[r[a] + s] = n[i[a]][s] : e.setParam(r[a] + s, n[i[a]][s]))
                },
                u = function(i, r, o) {
                    if (r) {
                        e.exec("Utils", "manageChapters", [r, "chapter", 3], function(e) {
                            e && (r.chapterLabel = e.replace(/::$/gi, ""))
                        });
                        for (var a = 0; a < n.length; a++) r.hasOwnProperty(t[a]) && (o ? i[n[a]] = r[t[a]] : e.setParam(n[a], r[t[a]]))
                    }
                },
                f = function(t, n, i) {
                    if (n && n.keywords instanceof Array) {
                        var r = n.keywords.length;
                        if (r > 0) {
                            for (var o = "", a = 0; r > a; a++) o += "[" + n.keywords[a] + "]" + (r - 1 > a ? "|" : "");
                            i ? t.tag = o : e.setParam("tag", o)
                        }
                    }
                },
                d = function(t, n, i) {
                    if (n) {
                        var r, o = function(e) {
                            return e ? e : "0"
                        };
                        r = "" + (o(n.category1) + "-"),
                            r += o(n.category2) + "-", r += o(n.category3), i ? t.ptype = r : e.setParam("ptype", r)
                    }
                },
                g = function(t, n, i) {
                    if (n)
                        for (var r in n) n.hasOwnProperty(r) && "undefined" != typeof n[r] && (i ? t[r] = n[r] : e.setParam(r, n[r]))
                };
            e.customVars = this.customVars = {}, e.customVars.set = this.customVars.set = function(t) {
                var n = e.getContext("page") || {},
                    i = n.customVars;
                if (i) {
                    if (t)
                        for (var r in t) t.hasOwnProperty(r) && (i[r] = ATInternet.Utils.completeFstLevelObj(i[r], t[r], !0))
                } else i = t;
                n.customVars = i, e.setContext("page", n)
            }, e.dynamicLabel = this.dynamicLabel = {}, e.dynamicLabel.set = this.dynamicLabel.set = function(t) {
                var n = e.getContext("page") || {};
                n.dynamicLabel = ATInternet.Utils.completeFstLevelObj(n.dynamicLabel, t, !0), e.setContext("page", n)
            }, e.tags = this.tags = {}, e.tags.set = this.tags.set = function(t) {
                var n = e.getContext("page") || {};
                n.tags = ATInternet.Utils.completeFstLevelObj(n.tags, t, !0), e.setContext("page", n)
            }, e.customTreeStructure = this.customTreeStructure = {}, e.customTreeStructure.set = this.customTreeStructure.set = function(t) {
                var n = e.getContext("page") || {};
                n.customTreeStructure = ATInternet.Utils.completeFstLevelObj(n.customTreeStructure, t, !0), e.setContext("page", n)
            }, e.page = {}, e.page.reset = this.reset = function() {
                e.setContext("page", void 0)
            }, e.page.set = this.set = function(t) {
                e.dispatchSubscribe("page");
                var n = e.getContext("page") || {};
                n.name = a(n.name, t.name, ""), n.level2 = a(n.level2, t.level2, ""), s(n, t, "chapter1"), s(n, t, "chapter2"), s(n, t, "chapter3"), n.customObject = ATInternet.Utils.completeFstLevelObj(n.customObject, t.customObject, !0), e.setContext("page", n)
            }, e.page.send = this.send = function(t) {
                var n = {
                        p: o(t),
                        s2: t.level2 || ""
                    },
                    i = !0,
                    r = t.customObject;
                if (r) {
                    var p = e.getParam("stc", !0);
                    if (p && p.options.permanent) {
                        var m = p ? p.options.hitType : [],
                            h = ATInternet.Utils.arrayIndexOf;
                        (-1 != h(m, "page") || -1 != h(m, "all")) && (r = ATInternet.Utils.completeFstLevelObj(p.value || {}, r, !0))
                    }
                    e.exec("Utils", "customObjectToString", [r], function(e) {
                        n.stc = e
                    })
                }
                return r = e.getContext("page") || {}, r.vrn && (n.vrn = r.vrn, r.vrn = void 0, e.setContext("page", r)), p = e.getContext("InternalSearch") || {}, "undefined" != typeof p.keyword && (n.mc = ATInternet.Utils.cloneSimpleObject(p.keyword), "undefined" != typeof p.resultPageNumber && (n.np = ATInternet.Utils.cloneSimpleObject(p.resultPageNumber)), "undefined" != typeof p.resultPosition && (n.mcrg = ATInternet.Utils.cloneSimpleObject(p.resultPosition)), e.setContext("InternalSearch", void 0)), ATInternet.Utils.isPreview() && e.getConfig("preview") && (n.pvw = 1), l(n, t.customVars, !0), u(n, t.dynamicLabel, !0), f(n, t.tags, !0), d(n, t.customTreeStructure, !0), p = e.getContext("campaigns") || {}, g(n, p, !0), e.setContext("campaigns", void 0), e.exec("TechClicks", "manageClick", [t.elem], function(e) {
                    i = e
                }), c(function() {
                    e.sendHit(n)
                }), r.name = a(r.name, t.name, ""), r.level2 = a(r.level2, t.level2, ""), s(r, t, "chapter1"), s(r, t, "chapter2"), s(r, t, "chapter3"), e.setContext("page", r), i
            }, e.page.onDispatch = this.onDispatch = function() {
                var t = e.getContext("page") || {},
                    n = e.getContext("InternalSearch") || {};
                e.setParam("p", o(t)), e.setParam("s2", t.level2 || ""), t.vrn && (e.setParam("vrn", t.vrn), t.vrn = void 0, e.setContext("page", t)), "undefined" != typeof n.keyword && (e.setParam("mc", ATInternet.Utils.cloneSimpleObject(n.keyword)), "undefined" != typeof n.resultPageNumber && e.setParam("np", ATInternet.Utils.cloneSimpleObject(n.resultPageNumber)), "undefined" != typeof n.resultPosition && e.setParam("mcrg", ATInternet.Utils.cloneSimpleObject(n.resultPosition)), e.setContext("InternalSearch", void 0)), ATInternet.Utils.isPreview() && e.getConfig("preview") && e.setParam("pvw", 1), l(null, t.customVars, !1), u(null, t.dynamicLabel, !1), f(null, t.tags, !1), d(null, t.customTreeStructure, !1), n = e.getContext("campaigns") || {}, g(null, n, !1), e.setContext("campaigns", void 0);
                var t = t.customObject,
                    i = [
                        ["hitType", ["page"]]
                    ];
                if (t)
                    if (n = e.getParam("stc", !0)) {
                        var r = n.options.hitType || [],
                            a = ATInternet.Utils.arrayIndexOf,
                            a = -1 != a(r, "page") || -1 != a(r, "all"),
                            r = n.options.permanent;
                        a ? (a = ATInternet.Utils.cloneSimpleObject(n), a.value = ATInternet.Utils.completeFstLevelObj(a.value || {}, t, !0), e.setParam("stc", a.value, {
                            encode: !0
                        }), c(function() {
                            e.sendHit(null, i)
                        }), r && e.setParam("stc", n.value, n.options)) : (e.setParam("stc", t, {
                            encode: !0
                        }), c(function() {
                            e.sendHit(null, i)
                        }), e.setParam("stc", n.value, n.options))
                    } else e.setParam("stc", t, {
                        encode: !0
                    }), c(function() {
                        e.sendHit(null, i)
                    });
                else c(function() {
                    e.sendHit(null, i)
                })
            }
        }, window.ATInternet.Tracker.addPlugin("Page")
    }.call(window),
    function() {
        var e = {
            clicksAutoManagementEnabled: !0,
            clicksAutoManagementTimeout: 500,
            info: "False"
        };
        window.ATInternet.Tracker.Plugins.TechClicks = function(t) {
            var n, i;
            t.configPlugin("TechClicks", e || {}, function(e) {
                n = e.clicksAutoManagementEnabled, i = e.clicksAutoManagementTimeout
            }), this.deactivateAutoManagement = function() {
                n = !1
            };
            var r = function(e) {
                    switch (e.target) {
                        case "_top":
                            window.top.location.href = e.url;
                            break;
                        case "_parent":
                            window.parent.location.href = e.url;
                            break;
                        default:
                            window.location.href = e.url
                    }
                },
                o = function(e) {
                    var t = e.timeout;
                    e.mailto ? setTimeout(function() {
                        window.location.href = e.mailto
                    }, t) : e.form ? setTimeout(function() {
                        e.form.submit()
                    }, t) : e.url && setTimeout(function() {
                        r({
                            url: e.url,
                            target: e.target
                        })
                    }, t)
                },
                a = function(e) {
                    for (var n, a = "_self", s = e.timeoutonly; e;) {
                        if (e.href && 0 === e.href.indexOf("http")) {
                            n = e.href.split('"').join('\\"'), a = e.target ? e.target : a;
                            break
                        }
                        e = e.parentNode
                    }
                    n && (s || t.onTrigger("Tracker:Hit:Sent:Ok", function() {
                        r({
                            url: n,
                            target: a
                        })
                    }), o({
                        url: n,
                        target: a,
                        timeout: i
                    }))
                },
                s = function(e) {
                    var n = e;
                    for (e = n.timeoutonly; n && "FORM" !== n.nodeName;) n = n.parentNode;
                    n && (e || t.onTrigger("Tracker:Hit:Sent:Ok", function() {
                        n.submit()
                    }), o({
                        form: n,
                        timeout: i
                    }))
                },
                c = function(e) {
                    var n = e;
                    for (e = n.timeoutonly; n && !(n.href && 0 <= n.href.indexOf("mailto:"));) n = n.parentNode;
                    n && (e || t.onTrigger("Tracker:Hit:Sent:Ok", function() {
                        window.location.href = n.href
                    }), o({
                        mailto: n.href,
                        timeout: i
                    }))
                },
                l = function(e) {
                    for (; e;) {
                        if (e.href) {
                            if (0 <= e.href.indexOf("mailto:")) return "mailto";
                            if (0 === e.href.indexOf("http")) return "redirection"
                        } else if ("FORM" === e.nodeName) return "form";
                        e = e.parentNode
                    }
                    return !1
                };
            this.manageClick = function(e, t) {
                if (n && e) {
                    var i;
                    e: {
                        for (i = e; i;) {
                            if ("function" == typeof i.getAttribute && ("_blank" === i.getAttribute("target") || "no" === i.getAttribute("data-atclickmanagement"))) {
                                i = !0;
                                break e
                            }
                            i = i.parentNode
                        }
                        i = e;
                        for (var r, o = window.location.href; i;) {
                            if ((r = i.href) && 0 < r.indexOf("#") && o.substring(0, 0 < o.indexOf("#") ? o.indexOf("#") : o.length) === r.substring(0, r.indexOf("#"))) {
                                i = !0;
                                break e
                            }
                            i = i.parentNode
                        }
                        i = !1
                    }
                    if (o = l(e), !i && o) {
                        switch (o) {
                            case "mailto":
                                c(e);
                                break;
                            case "form":
                                s(e);
                                break;
                            case "redirection":
                                a(e);
                                break;
                            default:
                                return !0
                        }
                        return t && !t.defaultPrevented && t.preventDefault(), !1
                    }
                }
                return !0
            }
        }, window.ATInternet.Tracker.addPlugin("TechClicks")
    }.call(window),
    function() {
        (function() {
            window.ATInternet.Tracker.Plugins.Utils = function(e) {
                var t = this,
                    n = {};
                t.getQueryStringValue = function(e, t) {
                    var i = window.ATInternet.Utils.hashcode(t).toString();
                    if (!n[i]) {
                        n[i] = {};
                        var r = RegExp("[&#?]{1}([^&=#?]*)=([^&#]*)?", "g"),
                            o = r.exec(t);
                        if (null !== o)
                            for (; null !== o;) n[i][o[1]] = o[2], o = r.exec(t)
                    }
                    return n[i].hasOwnProperty(e) ? n[i][e] : null
                }, t.customObjectToString = function(e) {
                    return encodeURIComponent(window.ATInternet.Utils.jsonSerialize(e))
                }, t.manageChapters = function(e, t, n) {
                    var i = "";
                    if (e) {
                        n = parseInt(n, 10);
                        for (var r = 1; n + 1 > r; r++) e.hasOwnProperty(t + r) && (i += (e[t + r] || "") + "::")
                    }
                    return i
                }, t.getDocumentLevel = function() {
                    return window[e.getConfig("documentLevel")] || document
                }, t.getLocation = function() {
                    return t.getDocumentLevel().location.href
                }, e.dispatchIndex = {}, e.dispatchStack = [], e.dispatchSubscribe = function(t) {
                    return e.dispatchIndex[t] ? !1 : (e.dispatchStack.push(t), e.dispatchIndex[t] = !0)
                }, e.dispatchSubscribed = function(t) {
                    return !0 === e.dispatchIndex[t]
                }, e.dispatch = function() {
                    var t = function(t, n) {
                        for (; 0 < e.dispatchStack.length;) {
                            var i = e.dispatchStack.pop();
                            e[i].onDispatch()
                        }
                        e.dispatchIndex = {}, e.delContext(void 0, "customObject")
                    };
                    e.plugins.isExecWaitingLazyloading() ? e.onTrigger("Tracker:Plugin:Lazyload:Exec:Complete", function(e, n) {
                        t(e, n)
                    }, !0) : t()
                }, e.dispatchRedirect = function(t) {
                    var n = !0;
                    return t && t.elem && (t.elem.timeoutonly = !0, e.plugins.exec("TechClicks", "manageClick", [t.elem], function(e) {
                        n = e
                    })), e.dispatch(), n
                }
            }, window.ATInternet.Tracker.addPlugin("Utils")
        }).call(window)
    }.call(window), "function" == typeof window.ATInternet.onTrackerLoad && window.ATInternet.onTrackerLoad();;
(function ($) {

    this.tag = new window.ATInternet.Tracker.Tag();

    /**
     * Handles page markers.
     */
    tag.trackPage = function(page) {
        tag.page.set(page);
        tag.dispatch();
    };

    /**
     * Handles page indicator markers.
     */
    tag.trackPageIndicators = function(page, indicators) {
       if(page !== null && indicators !== null){
		  tag.page.set(page);
		  tag.customVars.set({
			page: indicators
		  });
		  tag.dispatch();
	  }
    };

    /**
     * Handles site hiearchy markers.
     */
    tag.trackSiteHierarchy = function(page, structure) {
    	tag.page.set(page);
    	tag.customTreeStructure.set(structure);
    	tag.dispatch();
    };

    /**
     * Handles site indicator markers.
     */
    tag.trackSiteIndicators = function(page, indicators) {
        if (page !== null && indicators !== null) {
            tag.page.set(page);
            tag.customVars.set({
                site: indicators
            });
            tag.dispatch();
        }
    };

    /**
     * Handles clicks.
     */
    tag.trackClicks = function() {

    };

    /**
     * Handles search engine markers.
     */
    tag.trackSearchEngine = function(page, internalSearch) {
        var filterActive = $("#impots-gouv").is(':checked') || $("#bofip").is(':checked') || $("#precis").is(':checked') ;

	    if (page !== null) {
		    var tag = new ATInternet.Tracker.Tag();
		    tag.page.set({
		        name: page.name,
		        level2: page.level2
		    });
		    tag.customVars.set({
			    1: (filterActive === true) ? '1' : '2',
		    });
            tag.internalSearch.set(internalSearch);
		    tag.dispatch();
	    }
    };

    /**
     * Handles auto promo impression.
     */
    tag.promoAddImpression = function(impression) {
        tag.selfPromotion.add({
            "impression": impression
        });
    };

    /**
     * Handles auto promo click.
     */
    tag.promoClick = function(click) {
        tag.selfPromotion.send({
            "click": click
        });
    };

    $(function() {

        // Page de type node
        if ($(".page.xt").length) {
            var data = $(".page.xt").data('xt');
            tag.trackPage(data);
        }

        // Questions-Réponses
        console.log("questionV1");
         if ($(".node-question-reponse .page-title").length) {
            var forNID=$("link[rel='shortlink']").attr("href");//detection url avec NID
            var NID=forNID.substr(forNID.lastIndexOf("/")+1,forNID.length);//extraction NID
            var forTitle=$("link[rel='canonical']").attr("href");//detection url ALIASEE
            var leTitre=forTitle.substr(forTitle.lastIndexOf("/")+1,forTitle.length);//extraction ALIAS = valeur de name conforme xiti
            var leTagName=NID+"_"+leTitre;//concaténation NID et Titre (alias) pour valeur de name
            var segment=$("ul.menu").find(".active").html();//detection segment actif dans le menu
            switch(segment) {
                case "Particulier":
                    IDlevel2="20";
                break;
                case "Professionnel":
                    IDlevel2="21";
                break;
                default:
                    IDlevel2="29";
            }
            var page = {
                "name" : leTagName,
                "level2" : IDlevel2
            }; 
            console.log(page);
            tag.trackPage(page);
        }


        // Articles
        console.log("Actualites");
         if ($(".node-actualite .page-title").length) {
            var forNID=$("link[rel='shortlink']").attr("href");//detection url avec NID
            var NID=forNID.substr(forNID.lastIndexOf("/")+1,forNID.length);//extraction NID
            var forTitle=$("link[rel='canonical']").attr("href");//detection url ALIASEE
            var leTitre=forTitle.substr(forTitle.lastIndexOf("/")+1,forTitle.length);//extraction ALIAS = valeur de name conforme xiti
            var leTagName=NID+"_"+leTitre;//concaténation NID et Titre (alias) pour valeur de name
            var segment=$("ul.menu").find(".active").html();//detection segment actif dans le menu
            switch(segment) {
                default:
                    IDlevel2="30";
            }
            var page = {
                "name" : leTagName,
                "level2" : IDlevel2
            }; 
            console.log(page);
            tag.trackPage(page);
        }

        // Articles
        console.log("Articles");
         if ($(".node-article .page-title").length) {
            var forNID=$("link[rel='shortlink']").attr("href");//detection url avec NID
            var NID=forNID.substr(forNID.lastIndexOf("/")+1,forNID.length);//extraction NID
            var forTitle=$("link[rel='canonical']").attr("href");//detection url ALIASEE
            var leTitre=forTitle.substr(forTitle.lastIndexOf("/")+1,forTitle.length);//extraction ALIAS = valeur de name conforme xiti
            var leTagName=NID+"_"+leTitre;//concaténation NID et Titre (alias) pour valeur de name
            var segment=$("ul.menu").find(".active").html();//detection segment actif dans le menu
            switch(segment) {
                default:
                    IDlevel2="40";
            }
            var page = {
                "name" : leTagName,
                "level2" : IDlevel2
            }; 
            console.log(page);
            tag.trackPage(page);
        }


        // Formulaires
        if ($(".node-gweb-doc").length) {
            $(".node-gweb-doc a").on('click', function(event) {
                var data = $(this).data('xt');
                tag.click.send(data);
            });
        }

        $("#footer a").on('click', function(event) {
            var params = {
                "level2": "7",
                "chapter1": "footer",
                "name": Utils.cleanName($(this).text())
            };
            var url = $(this).attr("href");
            if (Utils.isExternalUrl(url)) {
                params.type = "exit";
            }
            tag.click.send(params);
        });
    });

    /**
     * Binds xiti click events.
     */
    (function bindOnClickEvents() {
	    $(".question a").on('click', function(event) {
		    var xt = $(this).data('xiti-site-indicator');
		    tag.trackSiteIndicators(xt.page, xt.indicators);
	    });

        // Menu comment faire pour
        $(".menu-por.xt-click a").on('click', function(event) {
            var data = $(this).data('xt');
            var chapters = $(".menu-por.xt-click").data("chps");
            tag.trackPage(data);

            // Track click
            var clickData = {
                "name": data.name,
                "chapter1": data.chapter1,
                "chapter2": chapters.chapter2,
                "level2": "7",
                "type": "exit"
            };
            if (chapters.chapter3 !== undefined) {
                clickData.chapter3 = chapters.chapter3;
            }
            tag.click.send(clickData);
        });

        // Menu comment faire pour
        $(".menu-pl.xt-click a").on('click', function(event) {
            var clickData = $(".menu-pl.xt-click").data("xt");
            tag.click.send(clickData);
        });

        // Search page
        $(".block-result-recherche a").on('click', function(event) {
            var searchKeyword = document.getElementById("search-keyword");
            var keyword = $(searchKeyword).text();
            var pageNumber = $(".pagination .active").text();
            var resultPosition = $(this).data('pos');
            tag.internalSearch.send({
                'keyword': keyword,
                'resultPageNumber': pageNumber,
                'resultPosition': resultPosition
            });
        });


        // simulateurs/SIMULATEUR IMPÔT SUR LE REVENU click
        $(".page-bloc-de-contenu a").on('click', function(event) {
            var chapter3 = $(this).data("ch3");
            if (chapter3 === undefined) {
                chapter3 = Utils.cleanName($(this).text());
            }
            tag.trackPage({
                'level2': '2',
                'name': 'home',
                'chapter1': 'vous_pouvez_aussi',
                'chapter2': 'simuler_vos_impots',
                'chapter3': chapter3
            });
        });

        /**
         * @TODO: ??? est-ce un node ?
         */
        $("#menu-conf-info-pers").on('click', function(event) {
            tag.trackPage({
                'level2': '9',
                'name': 'confidentialite_informations_personnelles',
                'chapter1': 'footer',
                'chapter2': 'informations_sur_le_site'
            });
        });

        $("#menu-nous-rejoindre").on('click', function(event) {
            tag.trackPage({
                'level2': '9',
                'name': 'nous_rejoindre',
                'chapter1': 'footer',
                'chapter2': 'rubrique_du_site'
            });
        });
    })();
})(jQuery);
;
(function ($) {
    $(function() {
        // Heder particulier
        tag.promoAddImpression({"adId": 1});
        // Header professionnel
        tag.promoAddImpression({"adId": 3});

        var xtPromoImpr = $(".xt-impr");
        if ($(xtPromoImpr).length > 0) {
            $(xtPromoImpr).each(function() {
                // Xiti Advertisement id
                var adId = $(this).data("xt");
                if (adId !== '') {
                    var impressionData = {"adId": adId};
                    // Fill or not format atttribute
                    var isFormat = $(this).data("format");
                    if (isFormat === undefined) {
                        $("a", this).each(function() {
                            impressionData.format = $(this).text();
                            tag.promoAddImpression(impressionData);
                        });
                    } else {
                        tag.promoAddImpression(impressionData);
                    }
                }
            });
        }
        tag.dispatch();

        /**
         * Handle clicks
         */
        // Header identifiaction
        $(".identification a").on("click", function() {
            // Xiti Advertisement id
            var adId = $(this).data("xt");
            tag.promoClick({"adId": adId});
        });

        // Question du moment homepage
        $(".xt-impr a").on("click", function() {
            // Xiti Advertisement id
            var adId = $(this).parents(".xt-impr").data("xt");
            var clickData = {"adId": adId};
            // Fill or not format atttribute
            var isFormat = $(this).parents(".xt-impr").data("format");
            if (isFormat === undefined) {
                clickData.format = $(this).text();
                tag.promoClick(clickData);
            } else {
                tag.promoClick(clickData);
            }
        });

    });
})(jQuery);
;
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i=0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

var Utils = {
    cleanName: function(name) {
        name = name.toLowerCase();
        name = name.replace(/\s\/\s/gi, "_");
        name = name.replace(/[\s+.]/gi, '_'); // Replace white space with dash
        name = name.replace(new RegExp(/[àâ]/g), "a");
        name = name.replace(new RegExp(/[èéêë]/g), "e");
        name = name.replace(new RegExp(/[îï]/g), "i");
        name = name.replace(new RegExp(/[ôö]/g), "o");
        name = name.replace(new RegExp(/[ùûü]/g), "u");
        name = name.replace(/[^a-zA-Z0-9\_]/gi, ""); // Strip any special charactere
        name = name.replace(new RegExp(/^_/g), "");
        return name.replace(new RegExp(/_$/g), "");
    },

    isExternalUrl: function(url) {
        var a = document.createElement("a");
        a.href = url;
        return (a.hostname != location.hostname);
    }
};
;
(function($) {
    'use strict';

    /**	Handles searchbar position when scrolling **/
    $(function() {
        var mn = $(".main-nav");
        var mns = "main-nav-scrolled";
        var hdr = $('header').height();

        // Remove activeElement.
        window.onblur = function() {
            document.activeElement.blur();
        };

        $(".toolbar-shortcuts a[href='" + Drupal.settings.basePath + "imce']").click(function() {
            window.open(Drupal.settings.basePath + 'imce?app=myApp', '', 'width=1024,height=660,resizable=1');
            return false;
        });

        /*
        		$(window).scroll(function() {
          		  if ($(this).scrollTop() > hdr) {
          		      mn.addClass("mns");
          		  } else {
          		      mn.removeClass("mns");
          		  }
        		});
        */

        /**
         * Search forcus.
         */
        $("#search-focus").attr("href", "javascript:document.getElementById('search-field').focus()");

        /**
         * Display feedback button.
         */
        if (window.matchMedia("(min-width: 1024px)").matches) {
            if ($("#webform-client-form-679").length) {
                setCookie("displ_feedb_btn", 0, "360");
            }

            var displFeedbBtn = getCookie("displ_feedb_btn");
            if (displFeedbBtn !== "0" || displFeedbBtn === "") {
                $(".feedback-block").show();
            }
        }

        /**
         * Fieldset collapse
         */
        $('.collapse').on('shown.bs.collapse', function() {
            $(this).parent().find(".glyphicon-menu-right").removeClass("glyphicon-menu-right").addClass("glyphicon-menu-down");
        }).on('hidden.bs.collapse', function(e) {
            $(this).parent().find(".glyphicon-menu-down").removeClass("glyphicon-menu-down").addClass("glyphicon-menu-right");
        });

        /**
         * Evol, cohérence entre le champs pays et le titre administratif du type de contenu: Convention internationale
         */
        if ($("#edit-field-pays-und").length && $("#edit-field-liste-des-docs-ou-liens-und-0-target-id").length) {
        	$(".form-item-title").hide();
            $("#edit-field-pays-und").change (function(){
            	$("#edit-title").val($("#edit-field-pays-und option:selected").text());
            	$("#edit-title").attr('value', $("#edit-field-pays-und option:selected").text());
            });
        }
        
        /**
         * Evol, message suppression par lot
         */
        if($("#suppr_submit_vbo").length){
        	// On supprime le titre, l'icone et le text
        	$('.page-title').remove();
        	$('.icon').remove();
        	$('.texte').remove();
        	
        	//On récupère le nombre d'élements à supprimer
        	var nbElem = $('.item-list .placeholder').text();
        	var msgSup= "Êtes-vous sûr de vouloir supprimer les "+nbElem+" ?";
        	
        	$('#suppr_submit_vbo').attr("type", "button");
        	// Ajout d'un message de confirmation
            $('#suppr_submit_vbo').click(function() {
            	if (confirm(msgSup)){
            		$('.confirmation').submit();
            	}
            });
        }
        
        /**
         * Evol, ajout lien votre avis sur le site
         */
        $(".navbar-nav").append('<li><a href="votre-avis-sur-le-site" >Votre avis sur le site</a></li>');
        

        /**
         * Prehome
         */
        if ($("#prehome-modal").length && !$("#prehomeVideoPAS").length && !$("#prehomeVideoPASDT").length) {
            var displPrehomePid = getCookie("displ_prhom");
            var pid = $("#prehome-modal").data('pid');

            if (displPrehomePid != pid) {
                $("#prehome-modal").modal();
                window.tag.trackPage({
                    "name": "pre_home",
                    "level2": "1"
                });
                setCookie("displ_prhom", pid, "30");
            }
        }
        
        /**
         * Prehome PAS DT
         */
        if($("#prehomeVideoPASDT").length) {
        	var sessionvideoPASEncours = getCookie("videoPAS_session"); //cookie session
        	
        	if (sessionvideoPASEncours!="nepasreafficher"){
        		$("#prehome-modal").modal({backdrop: "static",keyboard: false});
        		window.tag.trackPage({
                    "name": "pre_home_pas_2018",
                    "level2": "1"
                });
        	}
        	
        	function hideDTPlayer(){//fonction de masquage de la prehome vidéo PAS
        		$("#videoPAS_container").remove();//supprime le lecteur
        		$("#prehome-modal").modal("hide");//masque la prehome    
        	}
        	
        	//Si l'utilisateur passe la video
        	$(".evitement").click(function() {
        		hideDTPlayer();
        		document.cookie = "videoPAS_session=nepasreafficher; path=/"; //cree le cookie de session pour non réaffichage durant le reste de la navigation sur le site
        		window.tag.trackPage({
                    "name": "pas_2018_video_passee",
                    "level2": "1"
                });

        	});
        }
        
        
        /**
         * Prehome PAS
         */
        if($("#prehomeVideoPAS").length) {   	
        	var limit;
 
        	//test si client a acces a youtube
        	$.getScript( "https://www.youtube.com/iframe_api" )
        	  .done(function( script, textStatus ){
        		videoPASCookie();//si access
        	  })
        	  .fail(function( jqxhr, settings, exception ) {//pas access  	  
        		hideYTPlayer();//si pas access
        	  });
        	
        		
        	function hideYTPlayer(){//fonction de masquage de la prehome vidéo PAS
        		$("#videoPAS_container").remove();//supprime le lecteur
        		$("#prehome-modal").modal("hide");//masque la prehome    
        	}
        	      	
        	function videoPASCookie() {  
            	var dejavu = getCookie("videoPAS_deja_vu"); //cookie deja vu
            	var dejavuTotal = getCookie("videoPAS_deja_vu_total"); //cookie deja vu total
            	var sessionvideoPASEncours = getCookie("videoPAS_session"); //cookie session
            	
            	 if (sessionvideoPASEncours!="nepasreafficher" && dejavuTotal!=ID_de_la_videoPAS){
            		$("#prehome-modal").modal({backdrop: "static",keyboard: false});//pas cliquable - pas de touche echap
                    
            		window.tag.trackPage({
                        "name": "pre_home_pas_2018",
                        "level2": "1"
                    });
            		
    	        	if(dejavu==ID_de_la_videoPAS) {//seconde visite (affichage immediat du lien evitement)
    		        	limit=0;
    		        	PlayerControl(limit);
    	        	} else {//premiere visite (affichage lien evitement apres N)
    	        		limit=PASSER_videoPAS_apres;
    	        		PlayerControl(limit);
    	        	}
            	} else {
            		$("#videoPAS_container").remove();//supprime le lecteur
            	}            	 
        	}
        	
    		function PlayerControl(l) {
	    		setInterval(function () {
	    			if (typeof readyfortimer != "undefined") {//attend que le script YT ait repondu
	    				$("#videoPASinfo").css("visibility","visible");
	    				var timer=player.getCurrentTime();		
	    		
			    		if(Math.round(timer)<l) {//affiche le temps restant a attendre en secondes
			    			$("#tempsrestant").html(limit-Math.round(timer));	  
			    		}
			    		
			    		if(Math.round(limit-Math.round(timer))==1) {
			    			$("#pluriel").css("color","#fff");
			    		}
			
			    		if(timer>=l) {//supprimer la mention et affiche le lien d evitement si limite atteinte
			    			$("#videoPASinfo").remove();	
				    		$("#tempsrestant").remove();	
				    		$("#evitement").css("display","inline-block");
			    		}
			    		
		            	 if(done){
		            		 $("#videoPAS_container").remove();//supprime le lecteur
		            		 $("#prehome-modal").modal("hide");//masque la prehome  
		            		 document.cookie = "videoPAS_deja_vu_total="+ID_de_la_videoPAS+"; expires=Fri, 1 Jun 2018 00:00:00 UTC; path=/"; //valeur passée à 2 pour au moins une lecture complète déjà faite sur le poste client
		            		 done = false;
		             		window.tag.trackPage({
		                        "name": "pas_2018_video_complete",
		                        "level2": "1"
		                    });
		            	 }
	    			}
	    		}
	    		,500);
    		}
    		
        	//Si l'utilisateur passe la video
        	$("#evitement").click(function() {
        		hideYTPlayer();
        		document.cookie = "videoPAS_session=nepasreafficher; path=/"; //cree le cookie de session pour non réaffichage durant le reste de la navigation sur le site
        		document.cookie = "videoPAS_deja_vu="+ID_de_la_videoPAS+"; expires=Fri, 1 Jun 2018 00:00:00 UTC; path=/"; //cree le cookie pour afficher le bouton evitement sans delai à la seconde visite
        		window.tag.trackPage({
                    "name": "pas_2018_video_passee",
                    "level2": "1"
                });

        	});
        }   
        /**
         * Fin Prehome PAS
         */

        if ($("#banner").length) {
            $(window).resize(function() {
                if (window.matchMedia("(min-width: 300px) and (max-width: 767px)").matches) {
                    bannerWidth = "1250";
                } else if (window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches) {
                    bannerWidth = "1550";
                } else if (window.matchMedia("(min-width: 992px)").matches) {
                    bannerWidth = "2000";
                }
                document.getElementById("banner").style.backgroundImage = "url(" + Drupal.settings.basePath + "files/banner/" + bannerWidth + "/" + bannerFilename + ")";
            });
        }

        if ($('.dropdown-toggle').length) {
            $('.dropdown-toggle').dropdown();
        }

        // Responsive table
        if ($(".node table").length) {
            $(".node table").not(".node table.sticky-header").wrap('<div style="overflow-x:auto;"></div>');
        }

        /**
         * Accessibility
         */

        // Contrast
        var etat_contrast = false;
        var acc_contrast = getCookie("acc_contrast");
        if (acc_contrast == "true") {
            etat_contrast = true;
            $("body").addClass("contrast");
        }
        $("#contrast").click(function() {
            etat_contrast = !etat_contrast;
            if (etat_contrast === false) {
                $("body").removeClass("contrast");
                setCookie("acc_contrast", false, "30");
            } else {
                $("body").addClass("contrast");
                setCookie("acc_contrast", true, "30");
            }

            return false;
        });


        // Dyslexic
        var etat_dyslexic = false;
        var acc_dyslexic = getCookie("acc_dyslexic");
        if (acc_dyslexic == "true") {
            etat_dyslexic = true;
            $("body").addClass("dyslexic");
        }

        $("#dyslexic").click(function() {
            etat_dyslexic = !etat_dyslexic;
            if (etat_dyslexic === false) {
                $("body").removeClass("dyslexic");
                setCookie("acc_dyslexic", false, "30");
            } else {
                $("body").addClass("dyslexic");
                setCookie("acc_dyslexic", true, "30");
            }
            return false;
        });

        // Font size
        var acc_font = getCookie("acc_font");
        if (acc_font !== undefined) {
            $("body").css("font-size", acc_font + "px");
        }
        $("#smallSize").click(function() {
            var size = $("body").css("font-size");
            size = parseInt(size) - 1;
            $("body").css("font-size", size + "px");
            var acc_font = getCookie("acc_font");
            setCookie("acc_font", size, "30");
            return false;
        });
        $("#normalSize").click(function() {
            var size = 14;
            $("body").css("font-size", size + "px");
            var acc_font = getCookie("acc_font");
            setCookie("acc_font", size, "30");
            return false;
        });

        $("#largeSize").click(function() {
            var size = $("body").css("font-size");
            size = parseInt(size) + 1;
            $("body").css("font-size", size + "px");
            var acc_font = getCookie("acc_font");
            setCookie("acc_font", size, "30");

            return false;
        });
    });
})(jQuery);
;
(function($) {
    'use strict';

    var submitShareEmailform = function(nid, type) {
        var formData = $("#pu-application-share-email-form").serialize();
        $("#cancel-share-email").hide();

        $.ajax({
            type: "POST",
            url: Drupal.settings.basePath + "share/email/" + nid + "?type=" + type,
            data: formData,
            success: function(data) {
                if (data.code == 200) {
                    $("#share-email-dialog .modal-body").html(data.message);
                    $("#cancel-share-email, #submit-share-email").hide();
                    $(".close-dialog").removeClass('hide').show();
                } else {
                    $("#share-email-dialog .modal-body").html(data);
                }
            }
        });
    };

    $(function() {
        if ($(".btn-share-print").length) {
            $(".btn-share-print").click(function() {
                window.print();
                return false;
            });
        }

        if ($(".btn-share-email").length) {
            var nid, type, url;

            // Close dialog.
            $(".close-dialog").click(function() {
                $("#share-email-dialog").modal('hide');
                $("#share-email-dialog .modal-body").empty();
            });

            // Submit share mail form.
            $("#submit-share-email").click(function() {
                var type = $("input[name=type]").val();
                submitShareEmailform(nid, type);
                return false;
            });

            $(".btn-share-email").on("click", function() {
                type = $(this).data('type');
                if (type === 'node') {
                    nid = $(this).data('nid');
                } else {
                    url = $(this).data('url');
                }
                $(".close-dialog").hide();
                $("#cancel-share-email, #submit-share-email").show();

                $.ajax({
                    type: "GET",
                    url: Drupal.settings.basePath + "share/email",
                    data: {
                        "type": type,
                        "nid": nid,
                        "url": url
                    },
                    success: function(data) {
                        $('#share-email-dialog .modal-body').html(data);
                        $("#share-email-dialog").modal();
                    }
                });

                return false;
            });

            $('#share-email-dialog').on('shown.bs.modal', function() {
                $('#edit-nom').focus();
            });
        }
    });

})(jQuery);
;
