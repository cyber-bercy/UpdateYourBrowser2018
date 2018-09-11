try {
    /*
     updatemybrowser-fork MEF 
     Copyright 2018
     Licensed under the GPL Version 3 license.
     http://www.gnu.org/licenses/gpl.html
     Based on:
     - updatemybrowser.org JavaScript Library v1
     see http://updatemybrowser.org/
     Joram van den Boezem

     -Browser detect script by Peter-Paul Koch
     See http://www.quirksmode.org/js/detect.html

    */
    // vérification de la présence de date et chargement du fichier
    var now = new Date();
    var startDate = new Date("1971-12");
    if (window._umb&&window._umb.hasOwnProperty('startDate')) {
        startDate = new Date(window._umb.startDate);
    } else {
        var startDate = new Date("1971-12");
    }
    if (window._umb&&window._umb.hasOwnProperty('endDate')) {
       var endDate = new Date(window._umb.endDate);
    } else {
        var endDate = new Date("2020-12");
    }

    if ((now >= startDate) && (now <= endDate)) {
        //debut du callback
        UMB = function () {
            function c(f, a, e) {
                e = e || 0;
                for (var l in f) try {
                    f[l] = a[l].constructor == Object ? c(f[l], a[l], e + 1) : a[l]
                } catch (d) {}
                return f
            }
            var a = !1,
                g = !1,
                h = {},
                e = function () {
                    if (!a) {
                        a = !0;
                        UMB.Detect.init();
                        var f = window._umb || {};
                        h = {
                            require: {
                                chrome: UMB.Browsers.chrome.minimum,
                                firefox: UMB.Browsers.firefox.minimum,
                                ie: UMB.Browsers.ie.minimum,
                                opera: UMB.Browsers.opera.minimum,
                                safari: UMB.Browsers.safari.minimum,
                                edge: UMB.Browsers.edge.minimum
                            },
                            current: {
                                chrome: UMB.Browsers.chrome.current,
                                firefox: UMB.Browsers.firefox.current,
                                ie: UMB.Browsers.ie.current,
                                opera: UMB.Browsers.opera.current,
                                safari: UMB.Browsers.safari.current,
                                edge: UMB.Browsers.edge.current
                            },
                            esr: {
                                chrome: "-1",
                                firefox: UMB.Browsers.firefox.esr,
                                ie: "-1",
                                opera: "-1",
                                safari: "-1",
                                edge: "-1"
                            },
                            build: {
                                chrome: "-1",
                                firefox: UMB.Browsers.firefox.build,
                                ie: "-1",
                                opera: "-1",
                                safari: "-1",
                                edge: "-1"
                            },
                            //UMB.message.color
                            message: {
                                update: "",
                                linkUrl: "",
                                warning: "",
                                backgroundColor: "#FDF2AB",
                                backgroundUpdateColor: "",
                                linkColor: "#ED1C24",
                                textColor: "black",
                                textUpdateColor: "#00A651",
                                textCaseUpdate :{

                                }
                            },
                            display: true,
                            nonCritical: false,
                            mobile: true,
                            androidMode : true,
                            xpMode : true,
                            offset : 40

                        };
                        h = c(h, f);
                    }
                };
            return {
                load: function () {
                    g || (g = !0, UMB.attach(window,
                        "load",
                        function () {
                            e();
                            h.display && UMB.autoDisplayWidget()
                        }))
                },
                attach: function (a, c, e) {
                    a.addEventListener ? window.addEventListener(c, e, !1) : a.attachEvent && a.attachEvent("on" + c, e)
                },
                getConfig: function () {
                    e();
                    return h
                },
                getCurrentBrowser: function () {
                    e();
                    return UMB.Detect.browser
                },
                getCurrentVersion: function () {
                    e();
                    return UMB.Detect.version
                },
                getBrowserInfo: function (a) {
                    e();
                    return UMB.Browsers[a]
                },
                getStatus: function () {
                    e();
                    return UMB.Status.getStatus()
                },
                displayWidget: function () {
                    e();
                    UMB.Widget.display()
                },
                hideWidget: function () {
                    e();
                    UMB.Widget.hide()
                },
                autoDisplayWidget: function () {
                    e();
                    if (-1 == document.cookie.indexOf("_umb=hide")) {
                        var a = UMB.getStatus();
                        if (a!="unsupported"){
                        "latest" == a && h.nonCritical ? UMB.displayWidget() : ("latest" != a) && UMB.displayWidget()
                        }
                    }
                },
                scrollToTop: function () {
                    var a = document.body,
                        c = document.documentElement;
                    c = a.clientHeight ? a : c;
                    c.scrollTop = 0
                }
            }
        }();
        //execution :
        UMB.load();
        "undefined" === typeof UMB && (UMB = function () {});
        UMB.Browsers = {
            SamsungBrowser: {
                name: "SamsungBrowser",
                vendor: "Samsung",
                current: "6",
                minimum: "6",
                update_url: "https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser&hl=fr",
                info_url: "https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser&hl=fr"
            },
            chrome: {
                name: "Chrome",
                vendor: "Google",
                current: "66",
                minimum: "66",
                update_url: "https://www.google.com/chrome/browser/desktop/index.html",
                info_url: "https://www.google.com/chrome/"
            },
            safari: {
                name: "Safari",
                vendor: "Apple",
                current: "11",
                minimum: "11",
                update_url: "http://www.apple.fr/safari/",
                info_url: "http://www.apple.fr/safari/"
            },
            edge: {
                name: "Edge",
                vendor: "Microsoft",
                current: "42",
                minimum: "40",
                update_url: "https://www.microsoft.com/en-us/download/details.aspx?id=48126",
                info_url: "https://www.microsoft.com/fr-fr/windows/microsoft-edge"
            },
            firefox: {
                name: "Firefox",
                vendor: "Mozilla",
                esr: "52",
                build: "20171226003912",
                current: "60",
                minimum: "60",
                update_url: "https://www.mozilla.org/fr/firefox/new/",
                info_url: "https://www.mozilla.org/fr/firefox/new/"
            },
            ie: {
                name: "Internet Explorer",
                vendor: "Microsoft",
                current: "11",
                minimum: "10",
                update_url: "http://www.microsoft.com/ie",
                info_url: "http://windows.microsoft.com/internet-explorer"
            },
            opera: {
                name: "Opera",
                vendor: null,
                current: "48",
                minimum: "47",
                update_url: "https://www.opera.com/fr",
                info_url: "https://www.opera.com/fr/computer"
            }
        };
        "undefined" === typeof UMB && (UMB = function () {});
        UMB.Detect = {
            init: function () {
                this.browser = this.searchString(this.dataBrowser) || "unknown";
                this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
                this.OS = this.searchString(this.dataOS) || "unknown"
                this.OSVersion = this.searchVersion(navigator.userAgent)
                this.deviceType = this.searchString(this.deviceType) || "unknown"
            },
            searchString: function (c) {
                for (var a = 0; a < c.length; a++) {
                    var g = c[a].string,
                        h = c[a].prop;
                    this.versionSearchString = c[a].versionSearch || c[a].identity;
                    if (g) {
                        if (-1 != g.indexOf(c[a].subString)) return c[a].identity
                    } else if (h) return c[a].identity
                }
            },
            searchVersion: function (c) {
                var a =
                    c.indexOf(this.versionSearchString);
                if (-1 != a) return parseFloat(c.substring(a + this.versionSearchString.length + 1))
            },

            dataBrowser: [{
                string: navigator.userAgent,
                subString: "SamsungBrowser",
                identity: "SamsungBrowser",
                versionSearch: "SamsungBrowser"
            }, {
                string: navigator.userAgent,
                subString: "OPR/",
                identity: "opera",
                versionSearch: "OPR"
            }, {
                string: navigator.userAgent,
                subString: "Edge",
                identity: "edge",
                versionSearch: "Edge"
            }, {
                string: navigator.userAgent,
                subString: "Chrome",
                versionSearch: "Chrome",
                identity: "chrome"
            }, {
                string: navigator.vendor,
                subString: "Apple",
                identity: "safari",
                versionSearch: "Version"
            }, {
                string: navigator.userAgent,
                subString: "Firefox",
                versionSearch: "Firefox",
                identity: "firefox"
            }, {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "ie",
                versionSearch: "MSIE"
            }, {
                string: navigator.userAgent,
                subString: "Trident",
                identity: "ie",
                versionSearch: "rv"
            }],
            // matching by first found
            dataOS: [{
                string: navigator.userAgent,
                subString: "iPhone",
                identity: "iOS"
            }, {
                string: navigator.userAgent,
                subString: "iPad",
                identity: "iOS"
            }, {
                string: navigator.userAgent,
                subString: "Android",
                identity: "Android",
                versionSearch: "Android"
            }, {
                string: navigator.userAgent,
                subString: "Windows NT 5.1",
                identity: "WinXP"
            }, {
                string: navigator.platform,
                subString: "Win",
                identity: "Windows"
            }, {
                string: navigator.platform,
                subString: "Mac",
                identity: "Mac"
            }, {
                string: navigator.platform,
                subString: "Linux",
                identity: "Linux"
            }],
            deviceType: [{
                string: navigator.userAgent,
                subString: "mobile",
                identity: "mobile"
            }, {
                string: navigator.userAgent,
                subString: "phone",
                identity: "mobile"
            }, {
                string: navigator.userAgent,
                subString: "tablet",
                identity: "mobile"
            }]
        };
        "undefined" === typeof UMB && (UMB = function () {});
        UMB.Status = function () {
            return {
                getStatus: function () {
                    var c = UMB.getBrowserInfo(UMB.Detect.browser),
                        a2 = UMB.Detect.OS,
                        b = UMB.Detect.deviceType;
                    if ((!c) || ("iOS" == a2) ||((b=="mobile")&&(UMB.getConfig().mobile===false))) return "unsupported";
                    c = parseFloat(c.current);
                    a = parseFloat(UMB.getConfig().require[UMB.Detect.browser]);
                    d = parseFloat(UMB.getConfig().esr[UMB.Detect.browser]);

                    // check for not mobile :
                    if (b != "mobile") {
                        //not mobile
                        //filter windows xp (fin de support) avec xpMode à true par défaut.
                        if ((a2 == "WinXP") && (UMB.getConfig().xpMode===true)) {
                            return UMB.Detect.version >= c ? "latest" : "updateOs"
                        };
                        //check for ESR version (elles ont une builddate, risque de casse si firefox decide de supprimer la builddate) :
                        if ((UMB.Detect.version >= d) && (navigator.buildID)) {
                            buildate = parseFloat(navigator.buildID);
                            buildlimite = parseFloat(UMB.getConfig().build[UMB.Detect.browser]);
                            //(on determine si la version ESR est à jour avec la date de référence)
                            return buildate >= buildlimite ? "latest" : "warning"
                        };
                    } else {
                        // this is a mobile platform
                        // check if Android < 4 and androidmode
                        if ((e == "Android") && (UMB.getConfig().androidMode) && (UMB.Detect.OSVersion < 4)) {
                            return "androidDeprecated"
                        };
                    }
                    //standard routine
                    return UMB.Detect.version >= c ? "latest" : UMB.Detect.version >= a ? "update" : "warning"
                }

            }
        }();
        "undefined" === typeof UMB && (UMB = function () {});
        UMB.Widget = function () {
            var conf = UMB.getConfig()
            var backgroundColor = conf.message.backgroundColor,
                backgroundUpdateColor = conf.message.backgroundUpdateColor || backgroundColor,
                textColor = conf.message.textColor,
                linkColor = conf.message.linkColor,
                textUpdateColor = conf.message.textUpdateColor,
                deviceType = UMB.Detect.deviceType;
            var c = !1,
                a = !1,
                g = function (d, b) {
                    for (var a in d) b.style[a] = d[a]
                },
                h = function () {
                    a = !1;
                    var d = document.getElementById("BrowserBar");
                    d && document.getElementsByTagName("body")[0].removeChild(d);
                    d = document.createElement("div");
                    g({
                        display: "none",
                        position: "fixed",
                        //height: "1em",
                        fontSize: "1em",
                        fontWeight: "bold",
                        LineHeight: "1em",
                        fontFamily: "Arial, sans-serif",
                        color: textColor,
                        padding: "5px 0",
                        top: "0px",
                        left: "0px",
                        backgroundColor: backgroundColor,
                        backgroundImage: "url(./umb/warning.png)",
                        backgroundPosition: "10px center",
                        backgroundRepeat: "no-repeat",
                        //borderBottom: "1px solid #A29330", modification esthétique.
                        width: "100%",
                        textAlign: "left",
                        cursor: "pointer",
                        zoom: "1",
                        zIndex: 9999,
                        "-webkit-box-sizing": "content-box",
                        "-moz-box-sizing": "content-box",
                        "box-sizing": "content-box",
                        overflow: "hidden"
                    }, d);
                    if ( UMB.Detect.OS == "Android" ) {
                        g({height: "",
                           textAlign: "center"},
                           d)} 
                    d.setAttribute("id", "BrowserBar");
                    var b = document.createElement("p");
                    g({
                        margin: "0px 2em 0px 4em",
                        padding: "0px",
                        lineHeight: "1.5em"
                    }, b);
                    if ( UMB.Detect.OS == "Android" ) {
                        g({margin: "0px 1.8em 0px 1.8em"},
                           b)} 
                    var c = document.createElement("a");
                    c.href = "javascript:void(0);";
                    c.title = "faire disparaître pour une heure";
                    c.onclick = function (b) {
                        b || (b = window.event);
                        b.cancelBubble = !0;
                        b.stopPropagation && b.stopPropagation();
                        UMB.Widget.hidePersistent(1);
                        return !1
                    };
                    g({
                        display: "block",
                        width: "1.8em",
                        height: "1.8em",
                        margin: "0px 0px 0px 4em",
                        padding: "0px",
                        lineHeight: "1.8em",
                        position: "fixed",
                        top: "5px",
                        right: "10px",
                        backgroundImage: "url(./umb/close.png)",
                        backgroundPosition: "0 center",
                        backgroundRepeat: "no-repeat"
                    }, c);
                    d.appendChild(b);
                    d.appendChild(c);
                    document.getElementsByTagName("body")[0].appendChild(d)
                },
                e = function () {
                    var d = UMB.getStatus(),
                        b = UMB.getBrowserInfo(UMB.getCurrentBrowser()),
                        c = UMB.getCurrentVersion();
                    if (d && b && c) {
                        var e = document.getElementById("BrowserBar"),
                            k = document.createElement("a");
                        k.href = b.update_url;
                        var foncBrowserBarOnclick = document.getElementById("BrowserBar").onclick;
                        k.onclick = function (foncBrowserBarOnclick) {
                            foncBrowserBarOnclick.stopPropagation()
                        };
                        k.style.color = "#2183d0";
                        k.style.fontWeight = "bold";
                        k.target = "_blank";
                        var f = "",
                            l = ".";
                        switch (d) {
                            case "latest":
                                g({ backgroundImage : "",
                                    backgroundColor : backgroundUpdateColor,
                                    color : textUpdateColor }
                                    ,e);
                                f = "Vous avez installé la dernière version disponible de " + b.name + " . ", 
                                k.style.color = linkColor, 
                                k.appendChild(document.createTextNode("En savoir plus"));
                                break;
                            case "update":
                                g({ backgroundImage : ""},e);
                                f = "Une mise à jour de (" + b.name + " " + b.current + ") est disponible. ", 
                                k.style.color = linkColor, 
                                k.appendChild(document.createTextNode("Veuillez mettre à jour votre navigateur"));
                                break;
                            case "warning":
                                f = "Une mise à jour importante de sécurité de " + b.name + "  est disponible. ",
                                k.style.color = linkColor,
                                k.appendChild(document.createTextNode("Veuillez mettre à jour votre navigateur")),
                                a = !0;
                                break;
                            case "updateOs":
                                k.href = "https://www.microsoft.com/fr-fr/windowsforbusiness/end-of-xp-support",
                                f = "Votre système d'exploitation ne dispose plus de mise à jour de sécurité, vos informations sont en dangers. ",
                                k.style.color = linkColor, 
                                k.appendChild(document.createTextNode("Plus d'informations"));
                                break;
                            case "androidDeprecated":
                                f = "Votre système d'exploitation Android ne dispose plus de mise à jour de sécurité. ", 
                                k.style.color = linkColor, 
                                k.appendChild(document.createTextNode("En savoir plus"));
                                break;
                            case "warning2":
                                f = "Une mise à jour importante de sécurité de " + b.name + "  est disponible. Veuillez ",
                                k.style.color = linkColor, k.appendChild(document.createTextNode("installer ce correctif critique"));
                                a = !0;
                                break;
                        }
                        e.getElementsByTagName("p")[0].appendChild(document.createTextNode(f));
                        e.getElementsByTagName("p")[0].appendChild(k);
                        e.getElementsByTagName("p")[0].appendChild(document.createTextNode(l));
                        e.getElementsByTagName("p")[0].appendChild(document.createElement("br"));
                        var k2 = document.createElement("a");
                        k2.style.color = linkColor,
                        k2.target = "_blank";
                        k2.href = "https://www.economie.gouv.fr/hfds/cybersecurite-et-politique-ministerielle-ssi";
                        k2.appendChild(document.createTextNode("Ce message s'affiche dans le cadre de l'opération du Mois européen de la cybersécurité dont notre site est partenaire"));
                        k2.onclick = function (foncBrowserBarOnclick) {
                            foncBrowserBarOnclick.stopPropagation()
                        };
                        e.getElementsByTagName("p")[0].appendChild(k2);
                        document.getElementById("BrowserBar").onclick = function () {
                            window.open(k2.href)
                        }
                    }
                },
                f = function (d, b) {
                    var a;
                    window.getComputedStyle ? a = window.getComputedStyle(d)[b] : d.currentStyle && (a = d.currentStyle[b]);
                    a || (a = d.style[b]);
                    return a
                },
                l = function (a, b, c, e, k, h, g) {
                    "opacity" == b && l(a, "filter", 100 * c, e, k, "alpha(opacity=", ")");
                    h = h || "";
                    g = g || ""; - 1 < "|top|marginTop|".indexOf(b) && (g = g || "px");
                    var d = parseFloat(f(a, b).replace(h, "").replace(g, "")) || 0;
                    if (0 == c.toString().indexOf("+") || 0 == c.toString().indexOf("-")) c = d + parseFloat(c);
                    var r = 1 / (e / 10),
                        n = 0,
                        p = function (b) {
                            return Math.round(100 * (d + (c - d) * (.5 - Math.cos(b * Math.PI) / 2))) / 100
                        },
                        m = setInterval(function () {
                            n += r;
                            a.style[b] = h + p(n) + g;
                            1 <= n && (clearInterval(m), a.style[b] = h + p(1) + g, k && k())
                        }, 10)
                },
                m = function () {
                    var d = document.getElementsByTagName("body")[0],
                        b = document.getElementById("BrowserBar");
                    if ("none" === f(b, "display") && (d.className += " umb-active", b.style.opacity = "0", b.style.filter = "alpha(opacity=0)", b.style.display = "block", l(b, "opacity", .95, 600), "ie" == UMB.getCurrentBrowser() && "BackCompat" ==
                            document.compatMode ? (b.style.top = "0px", b.style.width = (document.documentElement.clientWidth || document.body.clientWidth) + "px") : (d.style.position = "relative", d.style.overflow = "visible", l(d, "top", "+"+conf.offset, 300), a || (UMB.attach(window, "resize", function () {
                                b.style.width = (document.documentElement.clientWidth || document.body.clientWidth) + "px"
                            }), b.style.width = (document.documentElement.clientWidth || document.body.clientWidth) + "px", b.style.top = "Opx", b.style.left = "-" + parseFloat(f(d,
                                "marginLeft")) + "px")), a))
                        if ("ie" == UMB.getCurrentBrowser() && "BackCompat" == document.compatMode) UMB.attach(window, "scroll", function () {
                            b.style.top = (document.documentElement.scrollTop || document.body.scrollTop) + (!b.offsetHeight && 0) + "px"
                        }), b.style.top = (document.documentElement.scrollTop || document.body.scrollTop) + (!b.offsetHeight && 0) + "px";
                        else if ("ie" == UMB.getCurrentBrowser() && 6 >= UMB.getCurrentVersion()) {
                        UMB.attach(window, "resize", function () {
                            b.style.width = (document.documentElement.clientWidth || document.body.clientWidth) +
                                "px"
                        });
                        b.style.width = (document.documentElement.clientWidth || document.body.clientWidth) + "px";
                        var c = 0;
                        b.style.top = "-" + c + "px";
                        b.style.left = "-" + parseFloat(f(d, "marginLeft")) + "px";
                        UMB.attach(window, "scroll", function () {
                            b.style.top = (document.documentElement.scrollTop || document.body.scrollTop) - c + "px"
                        });
                        b.style.top = (document.documentElement.scrollTop || document.body.scrollTop) - c + "px"
                    } else b.style.top = "0px", b.style.position = "fixed"
                },
                q = function () {
                    var a = document.getElementsByTagName("body")[0],
                        b = document.getElementById("BrowserBar");
                    "block" === f(b, "display") && (a.className = a.className.replace(" umb-active", ""), l(b, "opacity", 0, 600, function () {
                        b.style.display = "none"
                    }), "ie" == UMB.getCurrentBrowser() && "BackCompat" == document.compatMode || l(a, "top", "-"+conf.offset, 300))
                };
            return {
                init: function () {
                    c || (c = !0, UMB.Widget.redraw())
                },
                redraw: function () {
                    h();
                    e()
                },
                display: function () {
                    UMB.Widget.init();
                    m()
                },
                hide: function () {
                    UMB.Widget.init();
                    q()
                },
                hidePersistent: function (a) {
                    a = a || 1;
                    var b = new Date;
                    //b.setDate(b.getDate() + a); change to 1h delay.
                    b.setHours(b.getHours() + a);
                    a = encodeURIComponent("hide") +
                        (null == a ? "" : "; expires=" + b.toUTCString()) + "; path=/";
                    document.cookie = "_umb=" + a;
                    UMB.hideWidget()
                }
            }
        }();
    }
    //UMB.displayWidget()
} catch (e) {
    throw 'JavaScript parse error (' + e.message + ').';
}