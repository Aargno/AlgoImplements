/* JS */
gapi.loaded_0(function(_) {
    var window = this;
    var qb, Mb, vf, Na, Te;
    _.b = function(a) {
        return function() {
            return _.aa[a].apply(this, arguments)
        }
    };
    _._DumpException = function(a) {
        throw a;
    };
    _.aa = [];
    qb = function(a) {
        var c = 0;
        return function() {
            return c < a.length ? {
                done: !1,
                value: a[c++]
            } : {
                done: !0
            }
        }
    };
    _.PK = function(a) {
        var c = "undefined" != typeof window.Symbol && window.Symbol.iterator && a[window.Symbol.iterator];
        return c ? c.call(a) : {
            next: qb(a)
        }
    };
    _.jb = "function" == typeof Object.create ? Object.create : function(a) {
        var c = function() {};
        c.prototype = a;
        return new c
    };
    if ("function" == typeof Object.setPrototypeOf) Mb = Object.setPrototypeOf;
    else {
        var cc;
        a: {
            var wd = {
                    a: !0
                },
                Ed = {};
            try {
                Ed.__proto__ = wd;
                cc = Ed.a;
                break a
            } catch (a) {}
            cc = !1
        }
        Mb = cc ? function(a, c) {
            a.__proto__ = c;
            if (a.__proto__ !== c) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    _.fe = Mb;
    vf = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, c, f) {
        a != Array.prototype && a != Object.prototype && (a[c] = f.value)
    };
    Na = "undefined" != typeof window && window === this ? this : "undefined" != typeof window.global && null != window.global ? window.global : this;
    Te = function(a, c) {
        if (c) {
            var f = Na;
            a = a.split(".");
            for (var g = 0; g < a.length - 1; g++) {
                var h = a[g];
                h in f || (f[h] = {});
                f = f[h]
            }
            a = a[a.length - 1];
            g = f[a];
            c = c(g);
            c != g && null != c && vf(f, a, {
                configurable: !0,
                writable: !0,
                value: c
            })
        }
    };
    Te("Array.prototype.find", function(a) {
        return a ? a : function(a, f) {
            a: {
                var c = this;c instanceof String && (c = String(c));
                for (var h = c.length, l = 0; l < h; l++) {
                    var n = c[l];
                    if (a.call(f, n, l, c)) {
                        a = n;
                        break a
                    }
                }
                a = void 0
            }
            return a
        }
    });
    var Pa = function() {
            Pa = function() {};
            Na.Symbol || (Na.Symbol = ib)
        },
        ib = function() {
            var a = 0;
            return function(c) {
                return "jscomp_symbol_" + (c || "") + a++
            }
        }(),
        sb = function() {
            Pa();
            var a = Na.Symbol.iterator;
            a || (a = Na.Symbol.iterator = Na.Symbol("iterator"));
            "function" != typeof Array.prototype[a] && vf(Array.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return Fb(qb(this))
                }
            });
            sb = function() {}
        },
        Fb = function(a) {
            sb();
            a = {
                next: a
            };
            a[Na.Symbol.iterator] = function() {
                return this
            };
            return a
        };
    Te("Array.from", function(a) {
        return a ? a : function(a, f, g) {
            f = null != f ? f : function(a) {
                return a
            };
            var c = [],
                l = "undefined" != typeof window.Symbol && window.Symbol.iterator && a[window.Symbol.iterator];
            if ("function" == typeof l) {
                a = l.call(a);
                for (var n = 0; !(l = a.next()).done;) c.push(f.call(g, l.value, n++))
            } else
                for (l = a.length, n = 0; n < l; n++) c.push(f.call(g, a[n], n));
            return c
        }
    });
    var wf = function(a, c) {
        return Object.prototype.hasOwnProperty.call(a, c)
    };
    Te("WeakMap", function(a) {
        function c() {}

        function f(a) {
            wf(a, h) || vf(a, h, {
                value: new c
            })
        }

        function g(a) {
            var g = Object[a];
            g && (Object[a] = function(a) {
                if (a instanceof c) return a;
                f(a);
                return g(a)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var c = Object.seal({}),
                        f = Object.seal({}),
                        g = new a([
                            [c, 2],
                            [f, 3]
                        ]);
                    if (2 != g.get(c) || 3 != g.get(f)) return !1;
                    g["delete"](c);
                    g.set(f, 4);
                    return !g.has(c) && 4 == g.get(f)
                } catch (w) {
                    return !1
                }
            }()) return a;
        var h = "$jscomp_hidden_" + Math.random();
        g("freeze");
        g("preventExtensions");
        g("seal");
        var l = 0,
            n = function(a) {
                this.El = (l += Math.random() + 1).toString();
                if (a) {
                    a = _.PK(a);
                    for (var c; !(c = a.next()).done;) c = c.value, this.set(c[0], c[1])
                }
            };
        n.prototype.set = function(a, c) {
            f(a);
            if (!wf(a, h)) throw Error("ua`" + a);
            a[h][this.El] = c;
            return this
        };
        n.prototype.get = function(a) {
            return wf(a, h) ? a[h][this.El] : void 0
        };
        n.prototype.has = function(a) {
            return wf(a, h) && wf(a[h], this.El)
        };
        n.prototype["delete"] = function(a) {
            return wf(a, h) && wf(a[h], this.El) ? delete a[h][this.El] : !1
        };
        return n
    });
    Te("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        f = new a(_.PK([
                            [c, "s"]
                        ]));
                    if ("s" != f.get(c) || 1 != f.size || f.get({
                            x: 4
                        }) || f.set({
                            x: 4
                        }, "t") != f || 2 != f.size) return !1;
                    var g = f.entries(),
                        h = g.next();
                    if (h.done || h.value[0] != c || "s" != h.value[1]) return !1;
                    h = g.next();
                    return h.done || 4 != h.value[0].x || "t" != h.value[1] || !g.next().done ? !1 : !0
                } catch (A) {
                    return !1
                }
            }()) return a;
        sb();
        var c = new window.WeakMap,
            f = function(a) {
                this.bw = {};
                this.p4 = l();
                this.size = 0;
                if (a) {
                    a = _.PK(a);
                    for (var c; !(c = a.next()).done;) c = c.value, this.set(c[0], c[1])
                }
            };
        f.prototype.set = function(a, c) {
            a = 0 === a ? 0 : a;
            var f = g(this, a);
            f.list || (f.list = this.bw[f.id] = []);
            f.DK ? f.DK.value = c : (f.DK = {
                next: this.p4,
                qia: this.p4.qia,
                head: this.p4,
                key: a,
                value: c
            }, f.list.push(f.DK), this.p4.qia.next = f.DK, this.p4.qia = f.DK, this.size++);
            return this
        };
        f.prototype["delete"] = function(a) {
            a = g(this, a);
            return a.DK && a.list ? (a.list.splice(a.index, 1), a.list.length || delete this.bw[a.id], a.DK.qia.next =
                a.DK.next, a.DK.next.qia = a.DK.qia, a.DK.head = null, this.size--, !0) : !1
        };
        f.prototype.clear = function() {
            this.bw = {};
            this.p4 = this.p4.qia = l();
            this.size = 0
        };
        f.prototype.has = function(a) {
            return !!g(this, a).DK
        };
        f.prototype.get = function(a) {
            return (a = g(this, a).DK) && a.value
        };
        f.prototype.entries = function() {
            return h(this, function(a) {
                return [a.key, a.value]
            })
        };
        f.prototype.keys = function() {
            return h(this, function(a) {
                return a.key
            })
        };
        f.prototype.values = function() {
            return h(this, function(a) {
                return a.value
            })
        };
        f.prototype.forEach =
            function(a, c) {
                for (var f = this.entries(), g; !(g = f.next()).done;) g = g.value, a.call(c, g[1], g[0], this)
            };
        f.prototype[window.Symbol.iterator] = f.prototype.entries;
        var g = function(a, f) {
                var g = f && typeof f;
                "object" == g || "function" == g ? c.has(f) ? g = c.get(f) : (g = "" + ++n, c.set(f, g)) : g = "p_" + f;
                var h = a.bw[g];
                if (h && wf(a.bw, g))
                    for (a = 0; a < h.length; a++) {
                        var l = h[a];
                        if (f !== f && l.key !== l.key || f === l.key) return {
                            id: g,
                            list: h,
                            index: a,
                            DK: l
                        }
                    }
                return {
                    id: g,
                    list: h,
                    index: -1,
                    DK: void 0
                }
            },
            h = function(a, c) {
                var f = a.p4;
                return Fb(function() {
                    if (f) {
                        for (; f.head !=
                            a.p4;) f = f.qia;
                        for (; f.next != f.head;) return f = f.next, {
                            done: !1,
                            value: c(f)
                        };
                        f = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            l = function() {
                var a = {};
                return a.qia = a.next = a.head = a
            },
            n = 0;
        return f
    });
    Te("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        g = new a(_.PK([c]));
                    if (!g.has(c) || 1 != g.size || g.add(c) != g || 1 != g.size || g.add({
                            x: 4
                        }) != g || 2 != g.size) return !1;
                    var h = g.entries(),
                        l = h.next();
                    if (l.done || l.value[0] != c || l.value[1] != c) return !1;
                    l = h.next();
                    return l.done || l.value[0] == c || 4 != l.value[0].x || l.value[1] != l.value[0] ? !1 : h.next().done
                } catch (n) {
                    return !1
                }
            }()) return a;
        sb();
        var c = function(a) {
            this.Ka = new window.Map;
            if (a) {
                a = _.PK(a);
                for (var c; !(c = a.next()).done;) this.add(c.value)
            }
            this.size = this.Ka.size
        };
        c.prototype.add = function(a) {
            a = 0 === a ? 0 : a;
            this.Ka.set(a, a);
            this.size = this.Ka.size;
            return this
        };
        c.prototype["delete"] = function(a) {
            a = this.Ka["delete"](a);
            this.size = this.Ka.size;
            return a
        };
        c.prototype.clear = function() {
            this.Ka.clear();
            this.size = 0
        };
        c.prototype.has = function(a) {
            return this.Ka.has(a)
        };
        c.prototype.entries = function() {
            return this.Ka.entries()
        };
        c.prototype.values = function() {
            return this.Ka.values()
        };
        c.prototype.keys =
            c.prototype.values;
        c.prototype[window.Symbol.iterator] = c.prototype.values;
        c.prototype.forEach = function(a, c) {
            var f = this;
            this.Ka.forEach(function(g) {
                return a.call(c, g, g, f)
            })
        };
        return c
    });
    Te("Number.isFinite", function(a) {
        return a ? a : function(a) {
            return "number" !== typeof a ? !1 : !(0, window.isNaN)(a) && window.Infinity !== a && -window.Infinity !== a
        }
    });
    Te("Object.is", function(a) {
        return a ? a : function(a, f) {
            return a === f ? 0 !== a || 1 / a === 1 / f : a !== a && f !== f
        }
    });
    _.na = _.na || {};
    _.D = this;
    _.kf = function(a) {
        return void 0 !== a
    };
    _.fa = function(a) {
        return "string" == typeof a
    };
    _.da = function(a) {
        var c = typeof a;
        if ("object" == c)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return c;
                var f = Object.prototype.toString.call(a);
                if ("[object Window]" == f) return "object";
                if ("[object Array]" == f || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == f || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == c && "undefined" == typeof a.call) return "object";
        return c
    };
    _.ea = function(a) {
        return "array" == _.da(a)
    };
    _.oa = "closure_uid_" + (1E9 * Math.random() >>> 0);
    _.pa = Date.now || function() {
        return +new Date
    };
    _.Mu = function(a, c) {
        a = a.split(".");
        var f = _.D;
        a[0] in f || "undefined" == typeof f.execScript || f.execScript("var " + a[0]);
        for (var g; a.length && (g = a.shift());) !a.length && _.kf(c) ? f[g] = c : f = f[g] && f[g] !== Object.prototype[g] ? f[g] : f[g] = {}
    };
    _.J = function(a, c) {
        function f() {}
        f.prototype = c.prototype;
        a.T = c.prototype;
        a.prototype = new f;
        a.prototype.constructor = a;
        a.yc = function(a, f, l) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return c.prototype[f].apply(a, g)
        }
    };
    _.L = window.osapi = window.osapi || {};
    window.___jsl = window.___jsl || {};
    (window.___jsl.cd = window.___jsl.cd || []).push({
        gwidget: {
            parsetags: "explicit"
        },
        appsapi: {
            plus_one_service: "/plus/v1"
        },
        csi: {
            rate: .01
        },
        poshare: {
            hangoutContactPickerServer: "https://plus.google.com"
        },
        gappsutil: {
            required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
            display_on_page_ready: !1
        },
        appsutil: {
            required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
            display_on_page_ready: !1
        },
        "oauth-flow": {
            authUrl: "https://accounts.google.com/o/oauth2/auth",
            proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
            redirectUri: "postmessage"
        },
        iframes: {
            sharebox: {
                params: {
                    json: "&"
                },
                url: ":socialhost:/:session_prefix:_/sharebox/dialog"
            },
            plus: {
                url: ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"
            },
            ":socialhost:": "https://apis.google.com",
            ":im_socialhost:": "https://plus.googleapis.com",
            domains_suggest: {
                url: "https://domains.google.com/suggest/flow"
            },
            card: {
                params: {
                    s: "#",
                    userid: "&"
                },
                url: ":socialhost:/:session_prefix:_/hovercard/internalcard"
            },
            ":signuphost:": "https://plus.google.com",
            ":gplus_url:": "https://plus.google.com",
            plusone: {
                url: ":socialhost:/:session_prefix:_/+1/fastbutton?usegapi=1"
            },
            plus_share: {
                url: ":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&usegapi=1"
            },
            plus_circle: {
                url: ":socialhost:/:session_prefix:_/widget/plus/circle?usegapi=1"
            },
            plus_followers: {
                url: ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"
            },
            configurator: {
                url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"
            },
            appcirclepicker: {
                url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
            },
            page: {
                url: ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"
            },
            person: {
                url: ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"
            },
            community: {
                url: ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"
            },
            follow: {
                url: ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"
            },
            commentcount: {
                url: ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"
            },
            comments: {
                url: ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1"
            },
            blogger: {
                url: ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1"
            },
            youtube: {
                url: ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1"
            },
            reportabuse: {
                url: ":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi=1"
            },
            additnow: {
                url: ":socialhost:/additnow/additnow.html"
            },
            appfinder: {
                url: "https://gsuite.google.com/:session_prefix:marketplace/appfinder?usegapi=1"
            },
            ":source:": "1p"
        },
        poclient: {
            update_session: "google.updateSessionCallback"
        },
        "googleapis.config": {
            methods: {
                "pos.plusones.list": !0,
                "pos.plusones.get": !0,
                "pos.plusones.insert": !0,
                "pos.plusones.delete": !0,
                "pos.plusones.getSignupState": !0
            },
            versions: {
                pos: "v1"
            },
            rpc: "/rpc",
            root: "https://content.googleapis.com",
            "root-1p": "https://clients6.google.com",
            useGapiForXd3: !0,
            xd3: "/static/proxy.html",
            developerKey: "AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ",
            auth: {
                useInterimAuth: !1
            }
        },
        report: {
            apis: ["iframes\\..*", "gadgets\\..*", "gapi\\.appcirclepicker\\..*", "gapi\\.client\\..*"],
            rate: 1E-4
        },
        client: {
            perApiBatch: !0
        }
    });

    window.___jsl = window.___jsl || {};
    (window.___jsl.cd = window.___jsl.cd || []).push({
        gwidget: {
            parsetags: "onload"
        },
        iframes: {
            ":source:": "3p"
        }
    });
    var pe, ia, la;
    _.qe = function(a) {
        return "number" == typeof a
    };
    _.gh = function() {};
    _.re = function(a) {
        var c = _.da(a);
        return "array" == c || "object" == c && "number" == typeof a.length
    };
    _.Vg = function(a) {
        var c = typeof a;
        return "object" == c && null != a || "function" == c
    };
    _.vd = function(a) {
        return "function" == _.da(a)
    };
    pe = 0;
    _.oe = function(a) {
        return a[_.oa] || (a[_.oa] = ++pe)
    };
    ia = function(a, c, f) {
        return a.call.apply(a.bind, arguments)
    };
    la = function(a, c, f) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var g = Array.prototype.slice.call(arguments, 2);
            return function() {
                var f = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(f, g);
                return a.apply(c, f)
            }
        }
        return function() {
            return a.apply(c, arguments)
        }
    };
    _.H = function(a, c, f) {
        _.H = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : la;
        return _.H.apply(null, arguments)
    };
    _.we = Array.prototype.indexOf ? function(a, c) {
        return Array.prototype.indexOf.call(a, c, void 0)
    } : function(a, c) {
        if (_.fa(a)) return _.fa(c) && 1 == c.length ? a.indexOf(c, 0) : -1;
        for (var f = 0; f < a.length; f++)
            if (f in a && a[f] === c) return f;
        return -1
    };
    _.Wf = Array.prototype.lastIndexOf ? function(a, c) {
        return Array.prototype.lastIndexOf.call(a, c, a.length - 1)
    } : function(a, c) {
        var f = a.length - 1;
        0 > f && (f = Math.max(0, a.length + f));
        if (_.fa(a)) return _.fa(c) && 1 == c.length ? a.lastIndexOf(c, f) : -1;
        for (; 0 <= f; f--)
            if (f in a && a[f] === c) return f;
        return -1
    };
    _.Be = Array.prototype.forEach ? function(a, c, f) {
        Array.prototype.forEach.call(a, c, f)
    } : function(a, c, f) {
        for (var g = a.length, h = _.fa(a) ? a.split("") : a, l = 0; l < g; l++) l in h && c.call(f, h[l], l, a)
    };
    _.Ce = Array.prototype.filter ? function(a, c) {
        return Array.prototype.filter.call(a, c, void 0)
    } : function(a, c) {
        for (var f = a.length, g = [], h = 0, l = _.fa(a) ? a.split("") : a, n = 0; n < f; n++)
            if (n in l) {
                var q = l[n];
                c.call(void 0, q, n, a) && (g[h++] = q)
            } return g
    };
    _.De = Array.prototype.map ? function(a, c) {
        return Array.prototype.map.call(a, c, void 0)
    } : function(a, c) {
        for (var f = a.length, g = Array(f), h = _.fa(a) ? a.split("") : a, l = 0; l < f; l++) l in h && (g[l] = c.call(void 0, h[l], l, a));
        return g
    };
    _.Ee = Array.prototype.some ? function(a, c, f) {
        return Array.prototype.some.call(a, c, f)
    } : function(a, c, f) {
        for (var g = a.length, h = _.fa(a) ? a.split("") : a, l = 0; l < g; l++)
            if (l in h && c.call(f, h[l], l, a)) return !0;
        return !1
    };
    _.Fe = Array.prototype.every ? function(a, c, f) {
        return Array.prototype.every.call(a, c, f)
    } : function(a, c, f) {
        for (var g = a.length, h = _.fa(a) ? a.split("") : a, l = 0; l < g; l++)
            if (l in h && !c.call(f, h[l], l, a)) return !1;
        return !0
    };
    _.ve = function(a, c) {
        return 0 <= (0, _.we)(a, c)
    };
    var lk;
    _.Ge = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    _.Gf = String.prototype.repeat ? function(a, c) {
        return a.repeat(c)
    } : function(a, c) {
        return Array(c + 1).join(a)
    };
    _.rk = function(a, c) {
        var f = 0;
        a = (0, _.Ge)(String(a)).split(".");
        c = (0, _.Ge)(String(c)).split(".");
        for (var g = Math.max(a.length, c.length), h = 0; 0 == f && h < g; h++) {
            var l = a[h] || "",
                n = c[h] || "";
            do {
                l = /(\d*)(\D*)(.*)/.exec(l) || ["", "", "", ""];
                n = /(\d*)(\D*)(.*)/.exec(n) || ["", "", "", ""];
                if (0 == l[0].length && 0 == n[0].length) break;
                f = lk(0 == l[1].length ? 0 : (0, window.parseInt)(l[1], 10), 0 == n[1].length ? 0 : (0, window.parseInt)(n[1], 10)) || lk(0 == l[2].length, 0 == n[2].length) || lk(l[2], n[2]);
                l = l[3];
                n = n[3]
            } while (0 == f)
        }
        return f
    };
    lk = function(a, c) {
        return a < c ? -1 : a > c ? 1 : 0
    };
    _.ne = 2147483648 * Math.random() | 0;
    a: {
        var ye = _.D.navigator;
        if (ye) {
            var Bf = ye.userAgent;
            if (Bf) {
                _.We = Bf;
                break a
            }
        }
        _.We = ""
    }
    _.pf = function(a) {
        return -1 != _.We.indexOf(a)
    };
    var tf;
    _.qf = function(a, c, f) {
        for (var g in a) c.call(f, a[g], g, a)
    };
    tf = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    _.sf = function(a, c) {
        for (var f, g, h = 1; h < arguments.length; h++) {
            g = arguments[h];
            for (f in g) a[f] = g[f];
            for (var l = 0; l < tf.length; l++) f = tf[l], Object.prototype.hasOwnProperty.call(g, f) && (a[f] = g[f])
        }
    };
    _.$e = function() {
        return _.pf("Opera")
    };
    _.B = function() {
        return _.pf("Trident") || _.pf("MSIE")
    };
    _.mZ = function() {
        return _.pf("iPhone") && !_.pf("iPod") && !_.pf("iPad")
    };
    _.wk = function() {
        return _.mZ() || _.pf("iPad") || _.pf("iPod")
    };
    var lh = function(a) {
            lh[" "](a);
            return a
        },
        Oe;
    lh[" "] = _.gh;
    _.Eo = function(a, c) {
        try {
            return lh(a[c]), !0
        } catch (f) {}
        return !1
    };
    Oe = function(a, c) {
        var f = Zk;
        return Object.prototype.hasOwnProperty.call(f, a) ? f[a] : f[a] = c(a)
    };
    var Pe, Xg, Zk, bc;
    _.cf = _.$e();
    _.W = _.B();
    _.yk = _.pf("Edge");
    _.Vi = _.yk || _.W;
    _.df = _.pf("Gecko") && !(-1 != _.We.toLowerCase().indexOf("webkit") && !_.pf("Edge")) && !(_.pf("Trident") || _.pf("MSIE")) && !_.pf("Edge");
    _.ef = -1 != _.We.toLowerCase().indexOf("webkit") && !_.pf("Edge");
    _.ff = _.ef && _.pf("Mobile");
    _.Gg = _.pf("Macintosh");
    _.Im = _.pf("Windows");
    _.Jg = _.pf("Linux") || _.pf("CrOS");
    _.kO = _.pf("Android");
    _.yO = _.mZ();
    _.WP = _.pf("iPad");
    _.XQ = _.pf("iPod");
    _.DU = _.wk();
    Pe = function() {
        var a = _.D.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var Mh = "",
            ci = function() {
                var a = _.We;
                if (_.df) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (_.yk) return /Edge\/([\d\.]+)/.exec(a);
                if (_.W) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (_.ef) return /WebKit\/(\S+)/.exec(a);
                if (_.cf) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();ci && (Mh = ci ? ci[1] : "");
        if (_.W) {
            var sk = Pe();
            if (null != sk && sk > (0, window.parseFloat)(Mh)) {
                Xg = String(sk);
                break a
            }
        }
        Xg = Mh
    }
    _.Se = Xg;
    Zk = {};
    _.sl = function(a) {
        return Oe(a, function() {
            return 0 <= _.rk(_.Se, a)
        })
    };
    _.gq = function(a) {
        return Number(_.Ue) >= a
    };
    var Hm = _.D.document;
    bc = Hm && _.W ? Pe() || ("CSS1Compat" == Hm.compatMode ? (0, window.parseInt)(_.Se, 10) : 5) : void 0;
    _.Ue = bc;

    var Af, Ye, Xe, Re, Me, Le, Ze, Ke;
    _.d = function(a, c) {
        return _.aa[a] = c
    };
    _.bj = function(a) {
        return Array.prototype.concat.apply([], arguments)
    };
    _.ze = function(a) {
        var c = a.length;
        if (0 < c) {
            for (var f = Array(c), g = 0; g < c; g++) f[g] = a[g];
            return f
        }
        return []
    };
    _.jd = function(a, c) {
        return 0 == a.lastIndexOf(c, 0)
    };
    Ye = /&/g;
    Xe = /</g;
    Re = />/g;
    Me = /"/g;
    Le = /'/g;
    Ze = /\x00/g;
    Ke = /[\x00&<>"']/;
    _.He = function(a) {
        if (!Ke.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ye, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Xe, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Re, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Me, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Le, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ze, "&#0;"));
        return a
    };
    _.Cg = function(a) {
        return String(a).replace(/\-([a-z])/g, function(a, f) {
            return f.toUpperCase()
        })
    };
    _.hi = function(a, c) {
        for (var f in a)
            if (a[f] == c) return !0;
        return !1
    };
    var Nf, Xo;
    Nf = !_.W || _.gq(9);
    Xo = !_.df && !_.W || _.W && _.gq(9) || _.df && _.sl("1.9.1");
    _.ag = _.W && !_.sl("9");
    _.Zn = _.W || _.cf || _.ef;
    _.qm = _.W && !_.gq(9);
    _.hq = function(a) {
        var c = !1,
            f;
        return function() {
            c || (f = a(), c = !0);
            return f
        }
    };
    var Us, Kh;
    _.ou = function(a, c) {
        this.C5 = a === Kh && c || "";
        this.sda = Us
    };
    _.ou.prototype.nK = !0;
    _.ou.prototype.cR = function() {
        return this.C5
    };
    _.ou.prototype.toString = function() {
        return "Const{" + this.C5 + "}"
    };
    _.ru = function(a) {
        return a instanceof _.ou && a.constructor === _.ou && a.sda === Us ? a.C5 : "type_error:Const"
    };
    _.Nq = function(a) {
        return new _.ou(Kh, a)
    };
    Us = {};
    Kh = {};
    var WD;
    _.qE = function() {
        this.N8 = "";
        this.tda = WD
    };
    _.qE.prototype.nK = !0;
    _.qE.prototype.cR = function() {
        return this.N8
    };
    _.qE.prototype.mK = !0;
    _.qE.prototype.Im = function() {
        return 1
    };
    _.wx = function(a) {
        if (a instanceof _.qE && a.constructor === _.qE && a.tda === WD) return a.N8;
        _.da(a);
        return "type_error:TrustedResourceUrl"
    };
    _.nq = function(a) {
        return _.l_(_.ru(a))
    };
    WD = {};
    _.l_ = function(a) {
        var c = new _.qE;
        c.N8 = a;
        return c
    };
    var vU, pu, hg;
    _.su = function() {
        this.d_ = "";
        this.rda = pu
    };
    _.su.prototype.nK = !0;
    _.su.prototype.cR = function() {
        return this.d_
    };
    _.su.prototype.mK = !0;
    _.su.prototype.Im = function() {
        return 1
    };
    _.Ls = function(a) {
        if (a instanceof _.su && a.constructor === _.su && a.rda === pu) return a.d_;
        _.da(a);
        return "type_error:SafeUrl"
    };
    vU = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    _.jw = function(a) {
        if (a instanceof _.su) return a;
        a = "object" == typeof a && a.nK ? a.cR() : String(a);
        vU.test(a) || (a = "about:invalid#zClosurez");
        return hg(a)
    };
    _.Lm = function(a) {
        if (a instanceof _.su) return a;
        a = "object" == typeof a && a.nK ? a.cR() : String(a);
        vU.test(a) || (a = "about:invalid#zClosurez");
        return hg(a)
    };
    pu = {};
    hg = function(a) {
        var c = new _.su;
        c.d_ = a;
        return c
    };
    hg("about:blank");
    _.pm = function() {
        this.M8 = "";
        this.qda = _.nm
    };
    _.pm.prototype.nK = !0;
    _.nm = {};
    _.pm.prototype.cR = function() {
        return this.M8
    };
    _.pm.prototype.XY = function(a) {
        this.M8 = a;
        return this
    };
    _.rm = (new _.pm).XY("");
    _.xm = function() {
        this.L8 = "";
        this.pda = _.Bl
    };
    _.xm.prototype.nK = !0;
    _.Bl = {};
    _.iM = function(a) {
        a = _.ru(a);
        return 0 === a.length ? ns : (new _.xm).XY(a)
    };
    _.xm.prototype.cR = function() {
        return this.L8
    };
    _.xm.prototype.XY = function(a) {
        this.L8 = a;
        return this
    };
    var ns = (new _.xm).XY("");
    var XM;
    _.NG = function() {
        this.d_ = "";
        this.oda = XM;
        this.Z$ = null
    };
    _.NG.prototype.mK = !0;
    _.NG.prototype.Im = function() {
        return this.Z$
    };
    _.NG.prototype.nK = !0;
    _.NG.prototype.cR = function() {
        return this.d_
    };
    _.OG = function(a) {
        if (a instanceof _.NG && a.constructor === _.NG && a.oda === XM) return a.d_;
        _.da(a);
        return "type_error:SafeHtml"
    };
    XM = {};
    _.uf = function(a, c) {
        return (new _.NG).XY(a, c)
    };
    _.NG.prototype.XY = function(a, c) {
        this.d_ = a;
        this.Z$ = c;
        return this
    };
    _.uf("<!DOCTYPE html>", 0);
    _.RG = _.uf("", 0);
    _.Pp = _.uf("<br>", 0);
    _.Hq = _.hq(function() {
        var a = window.document.createElement("div");
        a.innerHTML = "<div><div></div></div>";
        var c = a.firstChild.firstChild;
        a.innerHTML = "";
        return !c.parentElement
    });
    _.ht = function(a, c) {
        c = c instanceof _.su ? c : _.Lm(c);
        a.href = _.Ls(c)
    };
    var Ff, Of, pg;
    _.xf = function(a) {
        return a ? new _.yf(_.zf(a)) : Af || (Af = new _.yf)
    };
    _.Ci = function(a, c) {
        return _.fa(c) ? a.getElementById(c) : c
    };
    _.Cf = function(a, c, f, g) {
        a = g || a;
        c = c && "*" != c ? String(c).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (c || f)) return a.querySelectorAll(c + (f ? "." + f : ""));
        if (f && a.getElementsByClassName) {
            a = a.getElementsByClassName(f);
            if (c) {
                g = {};
                for (var h = 0, l = 0, n; n = a[l]; l++) c == n.nodeName && (g[h++] = n);
                g.length = h;
                return g
            }
            return a
        }
        a = a.getElementsByTagName(c || "*");
        if (f) {
            g = {};
            for (l = h = 0; n = a[l]; l++) c = n.className, "function" == typeof c.split && _.ve(c.split(/\s+/), f) && (g[h++] = n);
            g.length = h;
            return g
        }
        return a
    };
    _.Ef = function(a, c) {
        _.qf(c, function(c, g) {
            c && "object" == typeof c && c.nK && (c = c.cR());
            "style" == g ? a.style.cssText = c : "class" == g ? a.className = c : "for" == g ? a.htmlFor = c : Ff.hasOwnProperty(g) ? a.setAttribute(Ff[g], c) : _.jd(g, "aria-") || _.jd(g, "data-") ? a.setAttribute(g, c) : a[g] = c
        })
    };
    Ff = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    _.jg = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    _.Mf = function(a, c) {
        var f = String(c[0]),
            g = c[1];
        if (!Nf && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', _.He(g.name), '"');
            if (g.type) {
                f.push(' type="', _.He(g.type), '"');
                var h = {};
                _.sf(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = a.createElement(f);
        g && (_.fa(g) ? f.className = g : _.ea(g) ? f.className = g.join(" ") : _.Ef(f, g));
        2 < c.length && Of(a, f, c, 2);
        return f
    };
    Of = function(a, c, f, g) {
        function h(f) {
            f && c.appendChild(_.fa(f) ? a.createTextNode(f) : f)
        }
        for (; g < f.length; g++) {
            var l = f[g];
            !_.re(l) || _.Vg(l) && 0 < l.nodeType ? h(l) : (0, _.Be)(pg(l) ? _.ze(l) : l, h)
        }
    };
    _.Br = function(a) {
        return window.document.createElement(String(a))
    };
    _.Qx = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    _.xp = function(a, c) {
        Of(_.zf(a), a, arguments, 1)
    };
    _.Qf = function(a) {
        for (var c; c = a.firstChild;) a.removeChild(c)
    };
    _.Rf = function(a, c) {
        c.parentNode && c.parentNode.insertBefore(a, c)
    };
    _.Tf = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.Uf = function(a) {
        var c, f = a.parentNode;
        if (f && 11 != f.nodeType) {
            if (a.removeNode) return a.removeNode(!1);
            for (; c = a.firstChild;) f.insertBefore(c, a);
            return _.Tf(a)
        }
    };
    _.SO = function(a) {
        return Xo && void 0 != a.children ? a.children : (0, _.Ce)(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    };
    _.iz = function(a) {
        return _.Vg(a) && 1 == a.nodeType
    };
    _.Yf = function(a, c) {
        if (!a || !c) return !1;
        if (a.contains && 1 == c.nodeType) return a == c || a.contains(c);
        if ("undefined" != typeof a.compareDocumentPosition) return a == c || !!(a.compareDocumentPosition(c) & 16);
        for (; c && a != c;) c = c.parentNode;
        return c == a
    };
    _.zf = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    _.Zf = function(a, c) {
        if ("textContent" in a) a.textContent = c;
        else if (3 == a.nodeType) a.data = String(c);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = String(c)
        } else _.Qf(a), a.appendChild(_.zf(a).createTextNode(String(c)))
    };
    pg = function(a) {
        if (a && "number" == typeof a.length) {
            if (_.Vg(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (_.vd(a)) return "function" == typeof a.item
        }
        return !1
    };
    _.yf = function(a) {
        this.wc = a || _.D.document || window.document
    };
    _.k = _.yf.prototype;
    _.k.Ha = _.xf;
    _.k.v5 = _.b(0);
    _.k.Wb = function() {
        return this.wc
    };
    _.k.Kb = function(a) {
        return _.Ci(this.wc, a)
    };
    _.k.getElementsByTagName = function(a, c) {
        return (c || this.wc).getElementsByTagName(String(a))
    };
    _.k.R = function(a, c, f) {
        return _.Mf(this.wc, arguments)
    };
    _.k.createElement = function(a) {
        return this.wc.createElement(String(a))
    };
    _.k.createTextNode = function(a) {
        return this.wc.createTextNode(String(a))
    };
    _.k.Aa = function() {
        var a = this.wc;
        return a.parentWindow || a.defaultView
    };
    _.k.appendChild = function(a, c) {
        a.appendChild(c)
    };
    _.k.append = _.xp;
    _.k.canHaveChildren = _.Qx;
    _.k.u0 = _.Qf;
    _.k.Sl = _.Rf;
    _.k.removeNode = _.Tf;
    _.k.Hp = _.Uf;
    _.k.NR = _.SO;
    _.k.isElement = _.iz;
    _.k.contains = _.Yf;
    _.k.kJ = _.b(1);
    /*
     gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
    _.ta = window;
    _.ua = window.document;
    _.Ha = _.ta.location;
    _.Ia = /\[native code\]/;
    _.Ka = function(a, c, f) {
        return a[c] = a[c] || f
    };
    _.r = function() {
        var a;
        if ((a = Object.create) && _.Ia.test(a)) a = a(null);
        else {
            a = {};
            for (var c in a) a[c] = void 0
        }
        return a
    };
    _.Qa = function(a, c) {
        return Object.prototype.hasOwnProperty.call(a, c)
    };
    _.Sl = function(a, c) {
        a = a || {};
        for (var f in a) _.Qa(a, f) && (c[f] = a[f])
    };
    _.Ua = _.Ka(_.ta, "gapi", {});
    _.e = function(a, c, f) {
        var g = new RegExp("([#].*&|[#])" + c + "=([^&#]*)", "g");
        c = new RegExp("([?#].*&|[?#])" + c + "=([^&#]*)", "g");
        if (a = a && (g.exec(a) || c.exec(a))) try {
            f = (0, window.decodeURIComponent)(a[2])
        } catch (h) {}
        return f
    };
    _.Xa = new RegExp(/^/.source + /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source + /(\/\/[^\/?#]*)?/.source + /([^?#]*)?/.source + /(\?([^#]*))?/.source + /(#((#|[^#])*))?/.source + /$/.source);
    _.Za = new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source + /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source, "g");
    _.lc = new RegExp(/\/?\??#?/.source + "(" + /[\/?#]/i.source + "|" + /[\uD800-\uDBFF]/i.source + "|" + /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source + "|" + /%[0-9a-f]?/i.source + ")$", "i");
    _.La = function(a, c, f) {
        _.ra(a, c, f, "add", "at")
    };
    _.ra = function(a, c, f, g, h) {
        if (a[g + "EventListener"]) a[g + "EventListener"](c, f, !1);
        else if (a[h + "tachEvent"]) a[h + "tachEvent"]("on" + c, f)
    };
    _.bb = _.Ka(_.ta, "___jsl", _.r());
    _.Ka(_.bb, "I", 0);
    _.Ka(_.bb, "hel", 10);
    var ya, za, Aa, Ba, Da, Ea, Hg;
    ya = function(a) {
        var c = window.___jsl = window.___jsl || {};
        c[a] = c[a] || [];
        return c[a]
    };
    za = function(a) {
        var c = window.___jsl = window.___jsl || {};
        c.cfg = !a && c.cfg || {};
        return c.cfg
    };
    Aa = function(a) {
        return "object" === typeof a && /\[native code\]/.test(a.push)
    };
    Ba = function(a, c, f) {
        if (c && "object" === typeof c)
            for (var g in c) !Object.prototype.hasOwnProperty.call(c, g) || f && "___goc" === g && "undefined" === typeof c[g] || (a[g] && c[g] && "object" === typeof a[g] && "object" === typeof c[g] && !Aa(a[g]) && !Aa(c[g]) ? Ba(a[g], c[g]) : c[g] && "object" === typeof c[g] ? (a[g] = Aa(c[g]) ? [] : {}, Ba(a[g], c[g])) : a[g] = c[g])
    };
    Da = function(a) {
        if (a && !/^\s+$/.test(a)) {
            for (; 0 == a.charCodeAt(a.length - 1);) a = a.substring(0, a.length - 1);
            try {
                var c = window.JSON.parse(a)
            } catch (f) {}
            if ("object" === typeof c) return c;
            try {
                c = (new Function("return (" + a + "\n)"))()
            } catch (f) {}
            if ("object" === typeof c) return c;
            try {
                c = (new Function("return ({" + a + "\n})"))()
            } catch (f) {}
            return "object" === typeof c ? c : {}
        }
    };
    Ea = function(a, c) {
        var f = {
            ___goc: void 0
        };
        a.length && a[a.length - 1] && Object.hasOwnProperty.call(a[a.length - 1], "___goc") && "undefined" === typeof a[a.length - 1].___goc && (f = a.pop());
        Ba(f, c);
        a.push(f)
    };
    Hg = function(a) {
        za(!0);
        var c = window.___gcfg,
            f = ya("cu"),
            g = window.___gu;
        c && c !== g && (Ea(f, c), window.___gu = c);
        c = ya("cu");
        var h = window.document.scripts || window.document.getElementsByTagName("script") || [];
        g = [];
        var l = [];
        l.push.apply(l, ya("us"));
        for (var n = 0; n < h.length; ++n)
            for (var q = h[n], t = 0; t < l.length; ++t) q.src && 0 == q.src.indexOf(l[t]) && g.push(q);
        0 == g.length && 0 < h.length && h[h.length - 1].src && g.push(h[h.length - 1]);
        for (h = 0; h < g.length; ++h) g[h].getAttribute("gapi_processed") || (g[h].setAttribute("gapi_processed", !0),
            (l = g[h]) ? (n = l.nodeType, l = 3 == n || 4 == n ? l.nodeValue : l.textContent || l.innerText || l.innerHTML || "") : l = void 0, (l = Da(l)) && c.push(l));
        a && Ea(f, a);
        g = ya("cd");
        a = 0;
        for (c = g.length; a < c; ++a) Ba(za(), g[a], !0);
        g = ya("ci");
        a = 0;
        for (c = g.length; a < c; ++a) Ba(za(), g[a], !0);
        a = 0;
        for (c = f.length; a < c; ++a) Ba(za(), f[a], !0)
    };
    _.P = function(a, c) {
        var f = za();
        if (!a) return f;
        a = a.split("/");
        for (var g = 0, h = a.length; f && "object" === typeof f && g < h; ++g) f = f[a[g]];
        return g === a.length && void 0 !== f ? f : c
    };
    _.Fa = function(a, c) {
        var f;
        if ("string" === typeof a) {
            var g = f = {};
            a = a.split("/");
            for (var h = 0, l = a.length; h < l - 1; ++h) {
                var n = {};
                g = g[a[h]] = n
            }
            g[a[h]] = c
        } else f = a;
        Hg(f)
    };
    var Ga = function() {
        var a = window.__GOOGLEAPIS;
        a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis), _.Ka(_.bb, "ci", []).push(a), window.__GOOGLEAPIS = void 0)
    };
    Ga && Ga();
    Hg();
    _.Mu("gapi.config.get", _.P);
    _.Mu("gapi.config.update", _.Fa);
    _.Gl = function(a, c) {
        for (var f = 1; f < arguments.length; f++) {
            var g = arguments[f];
            if (_.re(g)) {
                var h = a.length || 0,
                    l = g.length || 0;
                a.length = h + l;
                for (var n = 0; n < l; n++) a[h + n] = g[n]
            } else a.push(g)
        }
    };
    _.im = function(a) {
        return /^[\s\xa0]*$/.test(a)
    };
    _.Df = function(a, c) {
        var f = c || window.document;
        if (f.getElementsByClassName) a = f.getElementsByClassName(a)[0];
        else {
            f = window.document;
            var g = c || f;
            a = g.querySelectorAll && g.querySelector && a ? g.querySelector(a ? "." + a : "") : _.Cf(f, "*", a, c)[0] || null
        }
        return a || null
    };

    _.ma = function(a, c) {
        var f = Array.prototype.slice.call(arguments, 1);
        return function() {
            var c = f.slice();
            c.push.apply(c, arguments);
            return a.apply(this, c)
        }
    };
    _.ue = function(a, c) {
        a: {
            for (var f = a.length, g = _.fa(a) ? a.split("") : a, h = 0; h < f; h++)
                if (h in g && c.call(void 0, g[h], h, a)) {
                    c = h;
                    break a
                } c = -1
        }
        return 0 > c ? null : _.fa(a) ? a.charAt(c) : a[c]
    };
    _.ih = [];
    _.kh = [];
    _.jh = !1;
    _.hh = function(a) {
        _.ih[_.ih.length] = a;
        if (_.jh)
            for (var c = 0; c < _.kh.length; c++) a((0, _.H)(_.kh[c].wrap, _.kh[c]))
    };

    var jk, kk, hD;
    jk = null;
    kk = /^[\w+/_-]+[=]{0,2}$/;
    _.se = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, _.se);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a))
    };
    _.J(_.se, Error);
    _.se.prototype.name = "CustomError";
    _.yY = function(a, c) {
        for (var f in a)
            if (!(f in c) || a[f] !== c[f]) return !1;
        for (f in c)
            if (!(f in a)) return !1;
        return !0
    };
    _.rf = function(a) {
        var c = {},
            f;
        for (f in a) c[f] = a[f];
        return c
    };
    _.vC = function(a) {
        return a
    };
    _.fv = function(a, c) {
        a.src = _.wx(c);
        if (null === jk) b: {
            c = _.D.document;
            if ((c = c.querySelector && c.querySelector("script[nonce]")) && (c = c.nonce || c.getAttribute("nonce")) && kk.test(c)) {
                jk = c;
                break b
            }
            jk = ""
        }
        c = jk;
        c && a.setAttribute("nonce", c)
    };
    hD = function(a, c) {
        this.cea = a;
        this.Cha = c;
        this.M4 = 0;
        this.p4 = null
    };
    hD.prototype.get = function() {
        if (0 < this.M4) {
            this.M4--;
            var a = this.p4;
            this.p4 = a.next;
            a.next = null
        } else a = this.cea();
        return a
    };
    hD.prototype.put = function(a) {
        this.Cha(a);
        100 > this.M4 && (this.M4++, a.next = this.p4, this.p4 = a)
    };
    var tp, $o, ep, Yo;
    tp = function(a) {
        _.D.setTimeout(function() {
            throw a;
        }, 0)
    };
    _.qk = function(a) {
        a = Yo(a);
        !_.vd(_.D.setImmediate) || _.D.Window && _.D.Window.prototype && !_.pf("Edge") && _.D.Window.prototype.setImmediate == _.D.setImmediate ? ($o || ($o = ep()), $o(a)) : _.D.setImmediate(a)
    };
    ep = function() {
        var a = _.D.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !_.pf("Presto") && (a = function() {
            var a = window.document.createElement("IFRAME");
            a.style.display = "none";
            a.src = "";
            window.document.documentElement.appendChild(a);
            var c = a.contentWindow;
            a = c.document;
            a.open();
            a.write("");
            a.close();
            var f = "callImmediate" + Math.random(),
                g = "file:" == c.location.protocol ? "*" : c.location.protocol + "//" + c.location.host;
            a = (0, _.H)(function(a) {
                if (("*" ==
                        g || a.origin == g) && a.data == f) this.port1.onmessage()
            }, this);
            c.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    c.postMessage(f, g)
                }
            }
        });
        if ("undefined" !== typeof a && !_.B()) {
            var c = new a,
                f = {},
                g = f;
            c.port1.onmessage = function() {
                if (_.kf(f.next)) {
                    f = f.next;
                    var a = f.cb;
                    f.cb = null;
                    a()
                }
            };
            return function(a) {
                g.next = {
                    cb: a
                };
                g = g.next;
                c.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof window.document && "onreadystatechange" in window.document.createElement("SCRIPT") ? function(a) {
            var c = window.document.createElement("SCRIPT");
            c.onreadystatechange = function() {
                c.onreadystatechange = null;
                c.parentNode.removeChild(c);
                c = null;
                a();
                a = null
            };
            window.document.documentElement.appendChild(c)
        } : function(a) {
            _.D.setTimeout(a, 0)
        }
    };
    Yo = _.vC;
    _.hh(function(a) {
        Yo = a
    });
    var LD = function() {
            this.N5 = this.Y0 = null
        },
        xE = new hD(function() {
            return new uE
        }, function(a) {
            a.reset()
        });
    LD.prototype.add = function(a, c) {
        var f = xE.get();
        f.set(a, c);
        this.N5 ? this.N5.next = f : this.Y0 = f;
        this.N5 = f
    };
    LD.prototype.remove = function() {
        var a = null;
        this.Y0 && (a = this.Y0, this.Y0 = this.Y0.next, this.Y0 || (this.N5 = null), a.next = null);
        return a
    };
    var uE = function() {
        this.next = this.scope = this.Ip = null
    };
    uE.prototype.set = function(a, c) {
        this.Ip = a;
        this.scope = c;
        this.next = null
    };
    uE.prototype.reset = function() {
        this.next = this.scope = this.Ip = null
    };
    var um, Pm, up, Lp, Ap;
    _.Qp = function(a, c) {
        um || Pm();
        up || (um(), up = !0);
        Lp.add(a, c)
    };
    Pm = function() {
        if (_.D.Promise && _.D.Promise.resolve) {
            var a = _.D.Promise.resolve(void 0);
            um = function() {
                a.then(Ap)
            }
        } else um = function() {
            _.qk(Ap)
        }
    };
    up = !1;
    Lp = new LD;
    Ap = function() {
        for (var a; a = Lp.remove();) {
            try {
                a.Ip.call(a.scope)
            } catch (c) {
                tp(c)
            }
            xE.put(a)
        }
        up = !1
    };
    _.Rp = function(a) {
        a.prototype.$goog_Thenable = !0
    };
    _.Wp = function(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (c) {
            return !1
        }
    };
    var Xq, Bs, Mq, uq;
    _.C = function(a, c) {
        this.ub = 0;
        this.rW = void 0;
        this.B_ = this.iY = this.Vb = null;
        this.j4 = this.Q6 = !1;
        if (a != _.gh) try {
            var f = this;
            a.call(c, function(a) {
                f.fl(2, a)
            }, function(a) {
                f.fl(3, a)
            })
        } catch (g) {
            this.fl(3, g)
        }
    };
    Xq = function() {
        this.next = this.context = this.o0 = this.r2 = this.xZ = null;
        this.b1 = !1
    };
    Xq.prototype.reset = function() {
        this.context = this.o0 = this.r2 = this.xZ = null;
        this.b1 = !1
    };
    Bs = new hD(function() {
        return new Xq
    }, function(a) {
        a.reset()
    });
    _.Dt = function(a, c, f) {
        var g = Bs.get();
        g.r2 = a;
        g.o0 = c;
        g.context = f;
        return g
    };
    _.Nu = function(a) {
        if (a instanceof _.C) return a;
        var c = new _.C(_.gh);
        c.fl(2, a);
        return c
    };
    _.$H = function(a) {
        return new _.C(function(c, f) {
            f(a)
        })
    };
    _.dq = function(a, c, f) {
        Vp(a, c, f, null) || _.Qp(_.ma(c, a))
    };
    _.Su = function() {
        var a, c, f = new _.C(function(f, h) {
            a = f;
            c = h
        });
        return new Bp(f, a, c)
    };
    _.C.prototype.then = function(a, c, f) {
        return uq(this, _.vd(a) ? a : null, _.vd(c) ? c : null, f)
    };
    _.Rp(_.C);
    _.C.prototype.r9 = function(a, c) {
        return uq(this, null, a, c)
    };
    _.C.prototype.cancel = function(a) {
        0 == this.ub && _.Qp(function() {
            var c = new tq(a);
            Mq(this, c)
        }, this)
    };
    Mq = function(a, c) {
        if (0 == a.ub)
            if (a.Vb) {
                var f = a.Vb;
                if (f.iY) {
                    for (var g = 0, h = null, l = null, n = f.iY; n && (n.b1 || (g++, n.xZ == a && (h = n), !(h && 1 < g))); n = n.next) h || (l = n);
                    h && (0 == f.ub && 1 == g ? Mq(f, c) : (l ? (g = l, g.next == f.B_ && (f.B_ = g), g.next = g.next.next) : ju(f), Wq(f, h, 3, c)))
                }
                a.Vb = null
            } else a.fl(3, c)
    };
    _.lr = function(a, c) {
        a.iY || 2 != a.ub && 3 != a.ub || er(a);
        a.B_ ? a.B_.next = c : a.iY = c;
        a.B_ = c
    };
    uq = function(a, c, f, g) {
        var h = _.Dt(null, null, null);
        h.xZ = new _.C(function(a, n) {
            h.r2 = c ? function(f) {
                try {
                    var h = c.call(g, f);
                    a(h)
                } catch (v) {
                    n(v)
                }
            } : a;
            h.o0 = f ? function(c) {
                try {
                    var h = f.call(g, c);
                    !_.kf(h) && c instanceof tq ? n(c) : a(h)
                } catch (v) {
                    n(v)
                }
            } : n
        });
        h.xZ.Vb = a;
        _.lr(a, h);
        return h.xZ
    };
    _.C.prototype.ria = function(a) {
        this.ub = 0;
        this.fl(2, a)
    };
    _.C.prototype.sia = function(a) {
        this.ub = 0;
        this.fl(3, a)
    };
    _.C.prototype.fl = function(a, c) {
        0 == this.ub && (this === c && (a = 3, c = new TypeError("Promise cannot resolve to itself")), this.ub = 1, Vp(c, this.ria, this.sia, this) || (this.rW = c, this.ub = a, this.Vb = null, er(this), 3 != a || c instanceof tq || wq(this, c)))
    };
    var Vp = function(a, c, f, g) {
            if (a instanceof _.C) return _.lr(a, _.Dt(c || _.gh, f || null, g)), !0;
            if (_.Wp(a)) return a.then(c, f, g), !0;
            if (_.Vg(a)) try {
                var h = a.then;
                if (_.vd(h)) return bq(a, h, c, f, g), !0
            } catch (l) {
                return f.call(g, l), !0
            }
            return !1
        },
        bq = function(a, c, f, g, h) {
            var l = !1,
                n = function(a) {
                    l || (l = !0, f.call(h, a))
                },
                q = function(a) {
                    l || (l = !0, g.call(h, a))
                };
            try {
                c.call(a, n, q)
            } catch (t) {
                q(t)
            }
        },
        er = function(a) {
            a.Q6 || (a.Q6 = !0, _.Qp(a.uea, a))
        },
        ju = function(a) {
            var c = null;
            a.iY && (c = a.iY, a.iY = c.next, c.next = null);
            a.iY || (a.B_ = null);
            return c
        };
    _.C.prototype.uea = function() {
        for (var a; a = ju(this);) Wq(this, a, this.ub, this.rW);
        this.Q6 = !1
    };
    var Wq = function(a, c, f, g) {
            if (3 == f && c.o0 && !c.b1)
                for (; a && a.j4; a = a.Vb) a.j4 = !1;
            if (c.xZ) c.xZ.Vb = null, xs(c, f, g);
            else try {
                c.b1 ? c.r2.call(c.context) : xs(c, f, g)
            } catch (h) {
                nr.call(null, h)
            }
            Bs.put(c)
        },
        xs = function(a, c, f) {
            2 == c ? a.r2.call(a.context, f) : a.o0 && a.o0.call(a.context, f)
        },
        wq = function(a, c) {
            a.j4 = !0;
            _.Qp(function() {
                a.j4 && nr.call(null, c)
            })
        },
        nr = tp,
        tq = function(a) {
            _.se.call(this, a)
        };
    _.J(tq, _.se);
    tq.prototype.name = "cancel";
    var Bp = function(a, c, f) {
        this.promise = a;
        this.resolve = c;
        this.reject = f
    };

    var Tn = function() {};
    Tn.prototype.x$ = null;
    Tn.prototype.getOptions = function() {
        var a;
        (a = this.x$) || (a = {}, _.Vn(this) && (a[0] = !0, a[1] = !0), a = this.x$ = a);
        return a
    };
    var Wn;
    Wn = function() {};
    _.J(Wn, Tn);
    _.Vn = function(a) {
        if (!a.Naa && "undefined" == typeof window.XMLHttpRequest && "undefined" != typeof window.ActiveXObject) {
            for (var c = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], f = 0; f < c.length; f++) {
                var g = c[f];
                try {
                    return new window.ActiveXObject(g), a.Naa = g
                } catch (h) {}
            }
            throw Error("I");
        }
        return a.Naa
    };
    _.fo = new Wn;

    _.R = _.R || {};
    _.R = _.R || {};
    (function() {
        function a(a, c) {
            return String.fromCharCode(c)
        }
        var c = {
            0: !1,
            10: !0,
            13: !0,
            34: !0,
            39: !0,
            60: !0,
            62: !0,
            92: !0,
            8232: !0,
            8233: !0,
            65282: !0,
            65287: !0,
            65308: !0,
            65310: !0,
            65340: !0
        };
        _.R.escape = function(a, c) {
            if (a) {
                if ("string" === typeof a) return _.R.Qf(a);
                if ("Array" === typeof a) {
                    var f = 0;
                    for (c = a.length; f < c; ++f) a[f] = _.R.escape(a[f])
                } else if ("object" === typeof a && c) {
                    c = {};
                    for (f in a) a.hasOwnProperty(f) && (c[_.R.Qf(f)] = _.R.escape(a[f], !0));
                    return c
                }
            }
            return a
        };
        _.R.Qf = function(a) {
            if (!a) return a;
            for (var f = [], h, l, n = 0, q = a.length; n < q; ++n) h = a.charCodeAt(n), l = c[h], !0 === l ? f.push("&#", h, ";") : !1 !== l && f.push(a.charAt(n));
            return f.join("")
        };
        _.R.YX = function(c) {
            return c ? c.replace(/&#([0-9]+);/g, a) : c
        }
    })();

    _.R = _.R || {};
    (function() {
        function a(c) {
            var f = "";
            if (3 == c.nodeType || 4 == c.nodeType) f = c.nodeValue;
            else if (c.innerText) f = c.innerText;
            else if (c.innerHTML) f = c.innerHTML;
            else if (c.firstChild) {
                f = [];
                for (c = c.firstChild; c; c = c.nextSibling) f.push(a(c));
                f = f.join("")
            }
            return f
        }
        _.R.createElement = function(a) {
            if (!window.document.body || window.document.body.namespaceURI) try {
                var c = window.document.createElementNS("http://www.w3.org/1999/xhtml", a)
            } catch (g) {}
            return c || window.document.createElement(a)
        };
        _.R.Fh = function(a) {
            var c = _.R.createElement("iframe");
            try {
                var g = ["<", "iframe"],
                    h = a || {},
                    l;
                for (l in h) h.hasOwnProperty(l) && (g.push(" "), g.push(l), g.push('="'), g.push(_.R.Qf(h[l])), g.push('"'));
                g.push("></");
                g.push("iframe");
                g.push(">");
                var n = _.R.createElement(g.join(""));
                n && (!c || n.tagName == c.tagName && n.namespaceURI == c.namespaceURI) && (c = n)
            } catch (t) {}
            g = c;
            a = a || {};
            for (var q in a) a.hasOwnProperty(q) && (g[q] = a[q]);
            return c
        };
        _.R.Jk = function() {
            if (window.document.body) return window.document.body;
            try {
                var a = window.document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "body");
                if (a && 1 == a.length) return a[0]
            } catch (f) {}
            return window.document.documentElement || window.document
        };
        _.R.Qt = function(c) {
            return a(c)
        }
    })();

    (function() {
        function a(a, c) {
            if (!(a < f) && g)
                if (2 === a && g.warn) g.warn(c);
                else if (3 === a && g.error) try {
                g.error(c)
            } catch (n) {} else g.log && g.log(c)
        }
        var c = function(c) {
            a(1, c)
        };
        _.Lb = function(c) {
            a(2, c)
        };
        _.sa = function(c) {
            a(3, c)
        };
        _.Fc = function() {};
        c.INFO = 1;
        c.WARNING = 2;
        c.NONE = 4;
        var f = 1,
            g = window.console ? window.console : window.opera ? window.opera.postError : void 0;
        return c
    })();

    _.R = _.R || {};
    (function() {
        var a = [];
        _.R.du = function(c) {
            a.push(c)
        };
        _.R.XX = function() {
            for (var c = 0, f = a.length; c < f; ++c) a[c]()
        }
    })();
    _.R = _.R || {};
    (function() {
        var a = null;
        _.R.Qc = function(c) {
            var f = "undefined" === typeof c;
            if (null !== a && f) return a;
            var g = {};
            c = c || window.location.href;
            var h = c.indexOf("?"),
                l = c.indexOf("#");
            c = (-1 === l ? c.substr(h + 1) : [c.substr(h + 1, l - h - 1), "&", c.substr(l + 1)].join("")).split("&");
            h = window.decodeURIComponent ? window.decodeURIComponent : window.unescape;
            l = 0;
            for (var n = c.length; l < n; ++l) {
                var q = c[l].indexOf("=");
                if (-1 !== q) {
                    var t = c[l].substring(0, q);
                    q = c[l].substring(q + 1);
                    q = q.replace(/\+/g, " ");
                    try {
                        g[t] = h(q)
                    } catch (v) {}
                }
            }
            f && (a = g);
            return g
        };
        _.R.Qc()
    })();
    _.Mu("gadgets.util.getUrlParameters", _.R.Qc);
    var Kd;
    Kd = window.console;
    _.kd = function(a) {
        Kd && Kd.log && Kd.log(a)
    };
    _.nH = function(a) {
        Kd && (Kd.error ? Kd.error(a) : Kd.log && Kd.log(a))
    };
    _.ke = function() {};
    _.Pb = function() {
        var a = window.gadgets && window.gadgets.config && window.gadgets.config.get;
        a && _.Fa(a());
        return {
            register: function(a, f, g) {
                g && g(_.P())
            },
            get: function(a) {
                return _.P(a)
            },
            update: function(a, f) {
                if (f) throw "Config replacement is not supported";
                _.Fa(a)
            },
            kc: function() {}
        }
    }();
    _.Mu("gadgets.config.register", _.Pb.register);
    _.Mu("gadgets.config.get", _.Pb.get);
    _.Mu("gadgets.config.init", _.Pb.kc);
    _.Mu("gadgets.config.update", _.Pb.update);
    var Qe, af, aj, yu, Zi, mk, Iu, vl, xl, zD, jq, qt, Is, Js, AF, aH, DH, QL, SL, bN, aR, CR, DR, ES, KT, xU, pV, vW, KX, me, SE, qy, QA;
    aj = void 0;
    yu = function(a) {
        try {
            return _.D.JSON.parse.call(_.D.JSON, a)
        } catch (c) {
            return !1
        }
    };
    Zi = function(a) {
        return Object.prototype.toString.call(a)
    };
    mk = Zi(0);
    Iu = Zi(new Date(0));
    vl = Zi(!0);
    xl = Zi("");
    zD = Zi({});
    jq = Zi([]);
    qt = function(a, c) {
        if (c)
            for (var f = 0, g = c.length; f < g; ++f)
                if (a === c[f]) throw new TypeError("Converting circular structure to JSON");
        g = typeof a;
        if ("undefined" !== g) {
            f = Array.prototype.slice.call(c || [], 0);
            f[f.length] = a;
            c = [];
            var h = Zi(a);
            if (null != a && "function" === typeof a.toJSON && (Object.prototype.hasOwnProperty.call(a, "toJSON") || (h !== jq || a.constructor !== Array && a.constructor !== Object) && (h !== zD || a.constructor !== Array && a.constructor !== Object) && h !== xl && h !== mk && h !== vl && h !== Iu)) return qt(a.toJSON.call(a), f);
            if (null ==
                a) c[c.length] = "null";
            else if (h === mk) a = Number(a), (0, window.isNaN)(a) || (0, window.isNaN)(a - a) ? a = "null" : -0 === a && 0 > 1 / a && (a = "-0"), c[c.length] = String(a);
            else if (h === vl) c[c.length] = String(!!Number(a));
            else {
                if (h === Iu) return qt(a.toISOString.call(a), f);
                if (h === jq && Zi(a.length) === mk) {
                    c[c.length] = "[";
                    var l = 0;
                    for (g = Number(a.length) >> 0; l < g; ++l) l && (c[c.length] = ","), c[c.length] = qt(a[l], f) || "null";
                    c[c.length] = "]"
                } else if (h == xl && Zi(a.length) === mk) {
                    c[c.length] = '"';
                    l = 0;
                    for (f = Number(a.length) >> 0; l < f; ++l) g = String.prototype.charAt.call(a,
                        l), h = String.prototype.charCodeAt.call(a, l), c[c.length] = "\b" === g ? "\\b" : "\f" === g ? "\\f" : "\n" === g ? "\\n" : "\r" === g ? "\\r" : "\t" === g ? "\\t" : "\\" === g || '"' === g ? "\\" + g : 31 >= h ? "\\u" + (h + 65536).toString(16).substr(1) : 32 <= h && 65535 >= h ? g : "\ufffd";
                    c[c.length] = '"'
                } else if ("object" === g) {
                    c[c.length] = "{";
                    g = 0;
                    for (l in a) Object.prototype.hasOwnProperty.call(a, l) && (h = qt(a[l], f), void 0 !== h && (g++ && (c[c.length] = ","), c[c.length] = qt(l), c[c.length] = ":", c[c.length] = h));
                    c[c.length] = "}"
                } else return
            }
            return c.join("")
        }
    };
    Is = /[\0-\x07\x0b\x0e-\x1f]/;
    Js = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/;
    AF = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/;
    aH = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/;
    DH = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g;
    QL = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g;
    SL = /[ \t\n\r]+/g;
    bN = /[^"]:/;
    aR = /""/g;
    CR = /true|false|null/g;
    DR = /00/;
    ES = /[\{]([^0\}]|0[^:])/;
    KT = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/;
    xU = /[^\[,:][\[\{]/;
    pV = /^(\{|\}|\[|\]|,|:|0)+/;
    vW = /\u2028/g;
    KX = /\u2029/g;
    me = function(a) {
        a = String(a);
        if (Is.test(a) || Js.test(a) || AF.test(a) || aH.test(a)) return !1;
        var c = a.replace(DH, '""');
        c = c.replace(QL, "0");
        c = c.replace(SL, "");
        if (bN.test(c)) return !1;
        c = c.replace(aR, "0");
        c = c.replace(CR, "0");
        if (DR.test(c) || ES.test(c) || KT.test(c) || xU.test(c) || !c || (c = c.replace(pV, ""))) return !1;
        a = a.replace(vW, "\\u2028").replace(KX, "\\u2029");
        c = void 0;
        try {
            c = aj ? [yu(a)] : eval("(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" + a + "\n)")
        } catch (f) {
            return !1
        }
        return c && 1 ===
            c.length ? c[0] : !1
    };
    SE = function() {
        var a = ((_.D.document || {}).scripts || []).length;
        if ((void 0 === Qe || void 0 === aj || af !== a) && -1 !== af) {
            Qe = aj = !1;
            af = -1;
            try {
                try {
                    aj = !!_.D.JSON && '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' === _.D.JSON.stringify.call(_.D.JSON, {
                        a: [3, !0, new Date(0)],
                        c: function() {}
                    }) && !0 === yu("true") && 3 === yu('[{"a":3}]')[0].a
                } catch (c) {}
                Qe = aj && !yu("[00]") && !yu('"\u0007"') && !yu('"\\0"') && !yu('"\\v"')
            } finally {
                af = a
            }
        }
    };
    _.of = function(a) {
        if (-1 === af) return !1;
        SE();
        return (Qe ? yu : me)(a)
    };
    _.mf = function(a) {
        if (-1 !== af) return SE(), aj ? _.D.JSON.stringify.call(_.D.JSON, a) : qt(a)
    };
    qy = !Date.prototype.toISOString || "function" !== typeof Date.prototype.toISOString || "1970-01-01T00:00:00.000Z" !== (new Date(0)).toISOString();
    QA = function() {
        var a = Date.prototype.getUTCFullYear.call(this);
        return [0 > a ? "-" + String(1E6 - a).substr(1) : 9999 >= a ? String(1E4 + a).substr(1) : "+" + String(1E6 + a).substr(1), "-", String(101 + Date.prototype.getUTCMonth.call(this)).substr(1), "-", String(100 + Date.prototype.getUTCDate.call(this)).substr(1), "T", String(100 + Date.prototype.getUTCHours.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1), ".", String(1E3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1), "Z"].join("")
    };
    Date.prototype.toISOString = qy ? QA : Date.prototype.toISOString;

    _.Mu("gadgets.json.stringify", _.mf);
    _.Mu("gadgets.json.parse", _.of);
    _.e(_.ta.location.href, "rpctoken") && _.La(_.ua, "unload", function() {});
    var Qb;
    _.Ma = function() {
        var a = _.ua.readyState;
        return "complete" === a || "interactive" === a && -1 == window.navigator.userAgent.indexOf("MSIE")
    };
    _.Wa = function(a) {
        if (_.Ma()) a();
        else {
            var c = !1,
                f = function() {
                    if (!c) return c = !0, a.apply(this, arguments)
                };
            _.ta.addEventListener ? (_.ta.addEventListener("load", f, !1), _.ta.addEventListener("DOMContentLoaded", f, !1)) : _.ta.attachEvent && (_.ta.attachEvent("onreadystatechange", function() {
                _.Ma() && f.apply(this, arguments)
            }), _.ta.attachEvent("onload", f))
        }
    };
    Qb = Qb || {};
    Qb.Km = null;
    Qb.bm = null;
    Qb.FM = null;
    Qb.frameElement = null;
    Qb = Qb || {};
    Qb.Lj || (Qb.Lj = function() {
        function a(a, c, f) {
            "undefined" != typeof window.addEventListener ? window.addEventListener(a, c, f) : "undefined" != typeof window.attachEvent && window.attachEvent("on" + a, c);
            "message" === a && (window.___jsl = window.___jsl || {}, a = window.___jsl, a.RPMQ = a.RPMQ || [], a.RPMQ.push(c))
        }

        function c(a) {
            var c = _.of(a.data);
            if (c && c.f) {
                (0, _.Fc)("gadgets.rpc.receive(" + window.name + "): " + a.data);
                var g = _.T.$d(c.f);
                h && ("undefined" !== typeof a.origin ? a.origin !== g : a.domain !== /^.+:\/\/([^:]+).*/.exec(g)[1]) ? _.sa("Invalid rpc message origin. " +
                    g + " vs " + (a.origin || "")) : f(c, a.origin)
            }
        }
        var f, g, h = !0;
        return {
            Kk: function() {
                return "wpm"
            },
            jga: function() {
                return !0
            },
            kc: function(l, n) {
                _.Pb.register("rpc", null, function(a) {
                    "true" === String((a && a.rpc || {}).disableForceSecure) && (h = !1)
                });
                f = l;
                g = n;
                a("message", c, !1);
                g("..", !0);
                return !0
            },
            sf: function(a) {
                g(a, !0);
                return !0
            },
            call: function(a, c, f) {
                var g = _.T.$d(a),
                    h = _.T.dk(a);
                g ? window.setTimeout(function() {
                    var a = _.mf(f);
                    (0, _.Fc)("gadgets.rpc.send(" + window.name + "): " + a);
                    h.postMessage(a, g)
                }, 0) : ".." != a && _.sa("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message");
                return !0
            }
        }
    }());
    if (window.gadgets && window.gadgets.rpc) "undefined" != typeof _.T && _.T || (_.T = window.gadgets.rpc, _.T.config = _.T.config, _.T.register = _.T.register, _.T.unregister = _.T.unregister, _.T.Am = _.T.registerDefault, _.T.aB = _.T.unregisterDefault, _.T.Fk = _.T.forceParentVerifiable, _.T.call = _.T.call, _.T.Rk = _.T.getRelayUrl, _.T.Xg = _.T.setRelayUrl, _.T.Wg = _.T.setAuthToken, _.T.tf = _.T.setupReceiver, _.T.Wd = _.T.getAuthToken, _.T.mj = _.T.removeReceiver, _.T.Qk = _.T.getRelayChannel, _.T.ym = _.T.receive, _.T.zm = _.T.receiveSameDomain, _.T.Pq =
        _.T.getOrigin, _.T.$d = _.T.getTargetOrigin, _.T.dk = _.T._getTargetWin, _.T.Uo = _.T._parseSiblingId);
    else {
        _.T = function() {
            function a(a, c) {
                if (!Ta[a]) {
                    var f = fc;
                    c || (f = te);
                    Ta[a] = f;
                    c = Ya[a] || [];
                    for (var g = 0; g < c.length; ++g) {
                        var h = c[g];
                        h.t = ka[a];
                        f.call(a, h.f, h)
                    }
                    Ya[a] = []
                }
            }

            function c() {
                function a() {
                    Go = !0
                }
                Ho || ("undefined" != typeof window.addEventListener ? window.addEventListener("unload", a, !1) : "undefined" != typeof window.attachEvent && window.attachEvent("onunload", a), Ho = !0)
            }

            function f(a, f, g, h, l) {
                ka[f] && ka[f] === g || (_.sa("Invalid gadgets.rpc token. " +
                    ka[f] + " vs " + g), ok(f, 2));
                l.onunload = function() {
                    ja[f] && !Go && (ok(f, 1), _.T.mj(f))
                };
                c();
                h = _.of((0, window.decodeURIComponent)(h))
            }

            function g(c, f) {
                if (c && "string" === typeof c.s && "string" === typeof c.f && c.a instanceof Array)
                    if (ka[c.f] && ka[c.f] !== c.t && (_.sa("Invalid gadgets.rpc token. " + ka[c.f] + " vs " + c.t), ok(c.f, 2)), "__ack" === c.s) window.setTimeout(function() {
                        a(c.f, !0)
                    }, 0);
                    else {
                        c.c && (c.callback = function(a) {
                            _.T.call(c.f, (c.g ? "legacy__" : "") + "__cb", null, c.c, a)
                        });
                        if (f) {
                            var g = h(f);
                            c.origin = f;
                            var l = c.r;
                            try {
                                var n =
                                    h(l)
                            } catch ($B) {}
                            l && n == g || (l = f);
                            c.referer = l
                        }
                        f = (E[c.s] || E[""]).apply(c, c.a);
                        c.c && "undefined" !== typeof f && _.T.call(c.f, "__cb", null, c.c, f)
                    }
            }

            function h(a) {
                if (!a) return "";
                a = a.split("#")[0].split("?")[0];
                a = a.toLowerCase();
                0 == a.indexOf("//") && (a = window.location.protocol + a); - 1 == a.indexOf("://") && (a = window.location.protocol + "//" + a);
                var c = a.substring(a.indexOf("://") + 3),
                    f = c.indexOf("/"); - 1 != f && (c = c.substring(0, f));
                a = a.substring(0, a.indexOf("://"));
                if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !==
                    a && "android-app" !== a && "chrome-search" !== a) throw Error("Pa");
                f = "";
                var g = c.indexOf(":");
                if (-1 != g) {
                    var h = c.substring(g + 1);
                    c = c.substring(0, g);
                    if ("http" === a && "80" !== h || "https" === a && "443" !== h) f = ":" + h
                }
                return a + "://" + c + f
            }

            function l(a) {
                if ("/" == a.charAt(0)) {
                    var c = a.indexOf("|");
                    return {
                        id: 0 < c ? a.substring(1, c) : a.substring(1),
                        origin: 0 < c ? a.substring(c + 1) : null
                    }
                }
                return null
            }

            function n(a) {
                if ("undefined" === typeof a || ".." === a) return window.parent;
                var c = l(a);
                if (c) return window.top.frames[c.id];
                a = String(a);
                return (c = window.frames[a]) ?
                    c : (c = window.document.getElementById(a)) && c.contentWindow ? c.contentWindow : null
            }

            function q(a, c) {
                if (!0 !== ja[a]) {
                    "undefined" === typeof ja[a] && (ja[a] = 0);
                    var f = n(a);
                    ".." !== a && null == f || !0 !== fc.sf(a, c) ? !0 !== ja[a] && 10 > ja[a]++ ? window.setTimeout(function() {
                        q(a, c)
                    }, 500) : (Ta[a] = te, ja[a] = !0) : ja[a] = !0
                }
            }

            function t(a) {
                (a = K[a]) && "/" === a.substring(0, 1) && (a = "/" === a.substring(1, 2) ? window.document.location.protocol + a : window.document.location.protocol + "//" + window.document.location.host + a);
                return a
            }

            function v(a, c, f) {
                c && !/http(s)?:\/\/.+/.test(c) &&
                    (0 == c.indexOf("//") ? c = window.location.protocol + c : "/" == c.charAt(0) ? c = window.location.protocol + "//" + window.location.host + c : -1 == c.indexOf("://") && (c = window.location.protocol + "//" + c));
                K[a] = c;
                "undefined" !== typeof f && (U[a] = !!f)
            }

            function w(a, c) {
                c = c || "";
                ka[a] = String(c);
                q(a, c)
            }

            function A(a) {
                a = (a.passReferrer || "").split(":", 2);
                If = a[0] || "none";
                wh = a[1] || "origin"
            }

            function F(c) {
                "true" === String(c.useLegacyProtocol) && (fc = Qb.FM || te, fc.kc(g, a))
            }

            function z(a, c) {
                function f(f) {
                    f = f && f.rpc || {};
                    A(f);
                    var g = f.parentRelayUrl ||
                        "";
                    g = h(rw.parent || c) + g;
                    v("..", g, "true" === String(f.useLegacyProtocol));
                    F(f);
                    w("..", a)
                }!rw.parent && c ? f({}) : _.Pb.register("rpc", null, f)
            }

            function I(a, c, f) {
                if (".." === a) z(f || rw.rpctoken || rw.ifpctok || "", c);
                else a: {
                    var g = null;
                    if ("/" != a.charAt(0)) {
                        if (!_.R) break a;
                        g = window.document.getElementById(a);
                        if (!g) throw Error("h`" + a);
                    }
                    g = g && g.src;c = c || _.T.Pq(g);v(a, c);c = _.R.Qc(g);w(a, f || c.rpctoken)
                }
            }
            var E = {},
                K = {},
                U = {},
                ka = {},
                S = 0,
                Ca = {},
                ja = {},
                rw = {},
                Ta = {},
                Ya = {},
                If = null,
                wh = null,
                nk = window.top !== window.self,
                Yw = window.name,
                ok = function() {},
                pk = window.console,
                Io = pk && pk.log && function(a) {
                    pk.log(a)
                } || function() {},
                te = function() {
                    function a(a) {
                        return function() {
                            Io(a + ": call ignored")
                        }
                    }
                    return {
                        Kk: function() {
                            return "noop"
                        },
                        jga: function() {
                            return !0
                        },
                        kc: a("init"),
                        sf: a("setup"),
                        call: a("call")
                    }
                }();
            _.R && (rw = _.R.Qc());
            var Go = !1,
                Ho = !1,
                fc = function() {
                    if ("rmr" == rw.rpctx) return Qb.Km;
                    var a = "function" === typeof window.postMessage ? Qb.Lj : "object" === typeof window.postMessage ? Qb.Lj : window.ActiveXObject ? Qb.bm ? Qb.bm : Qb.FM : 0 < window.navigator.userAgent.indexOf("WebKit") ?
                        Qb.Km : "Gecko" === window.navigator.product ? Qb.frameElement : Qb.FM;
                    a || (a = te);
                    return a
                }();
            E[""] = function() {
                Io("Unknown RPC service: " + this.s)
            };
            E.__cb = function(a, c) {
                var f = Ca[a];
                f && (delete Ca[a], f.call(this, c))
            };
            return {
                config: function(a) {
                    "function" === typeof a.Mm && (ok = a.Mm)
                },
                register: function(a, c) {
                    if ("__cb" === a || "__ack" === a) throw Error("i");
                    if ("" === a) throw Error("j");
                    E[a] = c
                },
                unregister: function(a) {
                    if ("__cb" === a || "__ack" === a) throw Error("k");
                    if ("" === a) throw Error("l");
                    delete E[a]
                },
                Am: function(a) {
                    E[""] = a
                },
                aB: function() {
                    delete E[""]
                },
                Fk: function() {},
                call: function(a, c, f, g) {
                    a = a || "..";
                    var h = "..";
                    ".." === a ? h = Yw : "/" == a.charAt(0) && (h = _.T.Pq(window.location.href), h = "/" + Yw + (h ? "|" + h : ""));
                    ++S;
                    f && (Ca[S] = f);
                    var n = {
                        s: c,
                        f: h,
                        c: f ? S : 0,
                        a: Array.prototype.slice.call(arguments, 3),
                        t: ka[a],
                        l: !!U[a]
                    };
                    a: if ("bidir" === If || "c2p" === If && ".." === a || "p2c" === If && ".." !== a) {
                        var q = window.location.href;
                        var t = "?";
                        if ("query" === wh) t = "#";
                        else if ("hash" === wh) break a;
                        t = q.lastIndexOf(t);
                        t = -1 === t ? q.length : t;
                        q = q.substring(0, t)
                    } else q = null;
                    q && (n.r =
                        q);
                    if (".." === a || null != l(a) || window.document.getElementById(a))(q = Ta[a]) || null === l(a) || (q = fc), 0 === c.indexOf("legacy__") && (q = fc, n.s = c.substring(8), n.c = n.c ? n.c : S), n.g = !0, n.r = h, q ? (U[a] && (q = Qb.FM), !1 === q.call(a, h, n) && (Ta[a] = te, fc.call(a, h, n))) : Ya[a] ? Ya[a].push(n) : Ya[a] = [n]
                },
                Rk: t,
                Xg: v,
                Wg: w,
                tf: I,
                Wd: function(a) {
                    return ka[a]
                },
                mj: function(a) {
                    delete K[a];
                    delete U[a];
                    delete ka[a];
                    delete ja[a];
                    delete Ta[a]
                },
                Qk: function() {
                    return fc.Kk()
                },
                ym: function(a, c) {
                    4 < a.length ? fc.Vo(a, g) : f.apply(null, a.concat(c))
                },
                zm: function(a) {
                    a.a =
                        Array.prototype.slice.call(a.a);
                    window.setTimeout(function() {
                        g(a)
                    }, 0)
                },
                Pq: h,
                $d: function(a) {
                    var c = null,
                        f = t(a);
                    f ? c = f : (f = l(a)) ? c = f.origin : ".." == a ? c = rw.parent : (a = window.document.getElementById(a)) && "iframe" === a.tagName.toLowerCase() && (c = a.src);
                    return h(c)
                },
                kc: function() {
                    !1 === fc.kc(g, a) && (fc = te);
                    nk ? I("..") : _.Pb.register("rpc", null, function(a) {
                        a = a.rpc || {};
                        A(a);
                        F(a)
                    })
                },
                dk: n,
                Uo: l,
                Iia: "__ack",
                lh: Yw || "..",
                Pia: 0,
                Oia: 1,
                Nia: 2
            }
        }();
        _.T.kc()
    };
    _.T.config({
        Mm: function(a) {
            throw Error("m`" + a);
        }
    });
    _.Fc = _.ke;
    _.Mu("gadgets.rpc.config", _.T.config);
    _.Mu("gadgets.rpc.register", _.T.register);
    _.Mu("gadgets.rpc.unregister", _.T.unregister);
    _.Mu("gadgets.rpc.registerDefault", _.T.Am);
    _.Mu("gadgets.rpc.unregisterDefault", _.T.aB);
    _.Mu("gadgets.rpc.forceParentVerifiable", _.T.Fk);
    _.Mu("gadgets.rpc.call", _.T.call);
    _.Mu("gadgets.rpc.getRelayUrl", _.T.Rk);
    _.Mu("gadgets.rpc.setRelayUrl", _.T.Xg);
    _.Mu("gadgets.rpc.setAuthToken", _.T.Wg);
    _.Mu("gadgets.rpc.setupReceiver", _.T.tf);
    _.Mu("gadgets.rpc.getAuthToken", _.T.Wd);
    _.Mu("gadgets.rpc.removeReceiver", _.T.mj);
    _.Mu("gadgets.rpc.getRelayChannel", _.T.Qk);
    _.Mu("gadgets.rpc.receive", _.T.ym);
    _.Mu("gadgets.rpc.receiveSameDomain", _.T.zm);
    _.Mu("gadgets.rpc.getOrigin", _.T.Pq);
    _.Mu("gadgets.rpc.getTargetOrigin", _.T.$d);

    _.Rb = window.gapi && window.gapi.util || {};
    var cr = _.Rb = _.Rb || {};
    window.___jsl = window.___jsl || {};
    cr.aX = {
        dja: function() {
            return window.___jsl.bsh
        },
        Ok: function() {
            return window.___jsl.h
        },
        NT: function(a) {
            window.___jsl.bsh = a
        },
        ys: function(a) {
            window.___jsl.h = a
        }
    };
    _.Vo = function(a) {
        if (!a) return "";
        a = a.split("#")[0].split("?")[0];
        a = a.toLowerCase();
        0 == a.indexOf("//") && (a = window.location.protocol + a);
        /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
        var c = a.substring(a.indexOf("://") + 3),
            f = c.indexOf("/"); - 1 != f && (c = c.substring(0, f));
        a = a.substring(0, a.indexOf("://"));
        if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a && "android-app" !== a && "chrome-search" !== a && "app" !== a) throw Error("d`" + a);
        f = "";
        var g = c.indexOf(":");
        if (-1 != g) {
            var h = c.substring(g + 1);
            c = c.substring(0, g);
            if ("http" === a && "80" !== h || "https" === a && "443" !== h) f = ":" + h
        }
        return a + "://" + c + f
    };

    _.Rb.Pq = function(a) {
        return _.Vo(a)
    };
    var uh;
    uh = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//;
    _.Dh = function(a) {
        var c = _.P("googleapis.config/sessionIndex");
        "string" === typeof c && 254 < c.length && (c = null);
        null == c && (c = window.__X_GOOG_AUTHUSER);
        "string" === typeof c && 254 < c.length && (c = null);
        if (null == c) {
            var f = window.google;
            f && (c = f.authuser)
        }
        "string" === typeof c && 254 < c.length && (c = null);
        null == c && (a = a || window.location.href, c = _.e(a, "authuser") || null, null == c && (c = (c = a.match(uh)) ? c[1] : null));
        if (null == c) return null;
        c = String(c);
        254 < c.length && (c = null);
        return c
    };

    _.Hb = {};
    _.au = function(a) {
        return _.Hb[a || "token"] || null
    };
    var wb = function() {
        this.fY = -1
    };
    _.xb = function() {
        this.fY = 64;
        this.Ej = [];
        this.i6 = [];
        this.uda = [];
        this.V4 = [];
        this.V4[0] = 128;
        for (var a = 1; a < this.fY; ++a) this.V4[a] = 0;
        this.G5 = this.b0 = 0;
        this.reset()
    };
    _.J(_.xb, wb);
    _.xb.prototype.reset = function() {
        this.Ej[0] = 1732584193;
        this.Ej[1] = 4023233417;
        this.Ej[2] = 2562383102;
        this.Ej[3] = 271733878;
        this.Ej[4] = 3285377520;
        this.G5 = this.b0 = 0
    };
    var Cm = function(a, c, f) {
        f || (f = 0);
        var g = a.uda;
        if (_.fa(c))
            for (var h = 0; 16 > h; h++) g[h] = c.charCodeAt(f) << 24 | c.charCodeAt(f + 1) << 16 | c.charCodeAt(f + 2) << 8 | c.charCodeAt(f + 3), f += 4;
        else
            for (h = 0; 16 > h; h++) g[h] = c[f] << 24 | c[f + 1] << 16 | c[f + 2] << 8 | c[f + 3], f += 4;
        for (h = 16; 80 > h; h++) {
            var l = g[h - 3] ^ g[h - 8] ^ g[h - 14] ^ g[h - 16];
            g[h] = (l << 1 | l >>> 31) & 4294967295
        }
        c = a.Ej[0];
        f = a.Ej[1];
        var n = a.Ej[2],
            q = a.Ej[3],
            t = a.Ej[4];
        for (h = 0; 80 > h; h++) {
            if (40 > h)
                if (20 > h) {
                    l = q ^ f & (n ^ q);
                    var v = 1518500249
                } else l = f ^ n ^ q, v = 1859775393;
            else 60 > h ? (l = f & n | q & (f | n), v = 2400959708) :
                (l = f ^ n ^ q, v = 3395469782);
            l = (c << 5 | c >>> 27) + l + t + v + g[h] & 4294967295;
            t = q;
            q = n;
            n = (f << 30 | f >>> 2) & 4294967295;
            f = c;
            c = l
        }
        a.Ej[0] = a.Ej[0] + c & 4294967295;
        a.Ej[1] = a.Ej[1] + f & 4294967295;
        a.Ej[2] = a.Ej[2] + n & 4294967295;
        a.Ej[3] = a.Ej[3] + q & 4294967295;
        a.Ej[4] = a.Ej[4] + t & 4294967295
    };
    _.xb.prototype.update = function(a, c) {
        if (null != a) {
            _.kf(c) || (c = a.length);
            for (var f = c - this.fY, g = 0, h = this.i6, l = this.b0; g < c;) {
                if (0 == l)
                    for (; g <= f;) Cm(this, a, g), g += this.fY;
                if (_.fa(a))
                    for (; g < c;) {
                        if (h[l] = a.charCodeAt(g), ++l, ++g, l == this.fY) {
                            Cm(this, h);
                            l = 0;
                            break
                        }
                    } else
                        for (; g < c;)
                            if (h[l] = a[g], ++l, ++g, l == this.fY) {
                                Cm(this, h);
                                l = 0;
                                break
                            }
            }
            this.b0 = l;
            this.G5 += c
        }
    };
    _.xb.prototype.digest = function() {
        var a = [],
            c = 8 * this.G5;
        56 > this.b0 ? this.update(this.V4, 56 - this.b0) : this.update(this.V4, this.fY - (this.b0 - 56));
        for (var f = this.fY - 1; 56 <= f; f--) this.i6[f] = c & 255, c /= 256;
        Cm(this, this.i6);
        for (f = c = 0; 5 > f; f++)
            for (var g = 24; 0 <= g; g -= 8) a[c] = this.Ej[f] >> g & 255, ++c;
        return a
    };

    _.pi = function() {
        this.zx = new _.xb
    };
    _.k = _.pi.prototype;
    _.k.reset = function() {
        this.zx.reset()
    };
    _.k.AF = function(a) {
        this.zx.update(a)
    };
    _.k.GC = function() {
        return this.zx.digest()
    };
    _.k.bB = function(a) {
        a = (0, window.unescape)((0, window.encodeURIComponent)(a));
        for (var c = [], f = 0, g = a.length; f < g; ++f) c.push(a.charCodeAt(f));
        this.AF(c)
    };
    _.k.Of = function() {
        for (var a = this.GC(), c = "", f = 0; f < a.length; f++) c += "0123456789ABCDEF".charAt(Math.floor(a[f] / 16)) + "0123456789ABCDEF".charAt(a[f] % 16);
        return c
    };

    var LC, MC;
    _.Vj = function(a, c) {
        this.ig = a;
        a = c || {};
        this.wga = Number(a.maxAge) || 0;
        this.Ix = a.domain;
        this.iW = a.path;
        this.Kha = !!a.secure
    };
    LC = /^[-+/_=.:|%&a-zA-Z0-9@]*$/;
    MC = /^[A-Z_][A-Z0-9_]{0,63}$/;
    _.Vj.prototype.read = function() {
        for (var a = this.ig + "=", c = window.document.cookie.split(/;\s*/), f = 0; f < c.length; ++f) {
            var g = c[f];
            if (0 == g.indexOf(a)) return g.substr(a.length)
        }
    };
    _.Vj.prototype.write = function(a, c) {
        if (!MC.test(this.ig)) throw "Invalid cookie name";
        if (!LC.test(a)) throw "Invalid cookie value";
        a = this.ig + "=" + a;
        this.Ix && (a += ";domain=" + this.Ix);
        this.iW && (a += ";path=" + this.iW);
        c = "number" === typeof c ? c : this.wga;
        if (0 <= c) {
            var f = new Date;
            f.setSeconds(f.getSeconds() + c);
            a += ";expires=" + f.toUTCString()
        }
        this.Kha && (a += ";secure");
        window.document.cookie = a;
        return !0
    };
    _.Vj.prototype.clear = function() {
        this.write("", 0)
    };
    _.Vj.iterate = function(a) {
        for (var c = window.document.cookie.split(/;\s*/), f = 0; f < c.length; ++f) {
            var g = c[f].split("="),
                h = g.shift();
            a(h, g.join("="))
        }
    };
    var Ok;
    _.dk = function(a) {
        this.SS = a
    };
    Ok = {};
    _.dk.prototype.read = function() {
        if (Ok.hasOwnProperty(this.SS)) return Ok[this.SS]
    };
    _.dk.prototype.write = function(a) {
        Ok[this.SS] = a;
        return !0
    };
    _.dk.prototype.clear = function() {
        delete Ok[this.SS]
    };
    _.dk.iterate = function(a) {
        for (var c in Ok) Ok.hasOwnProperty(c) && a(c, Ok[c])
    };
    var aw = function() {
            this.Ab = null;
            this.key = function() {
                return null
            };
            this.getItem = function() {
                return this.Ab
            };
            this.setItem = function(a, c) {
                this.Ab = c;
                this.length = 1
            };
            this.removeItem = function() {
                this.clear()
            };
            this.clear = function() {
                this.Ab = null;
                this.length = 0
            };
            this.length = 0
        },
        us = function(a) {
            try {
                var c = a || window.sessionStorage;
                if (!c) return !1;
                c.setItem("gapi.sessionStorageTest", "gapi.sessionStorageTest" + c.length);
                c.removeItem("gapi.sessionStorageTest");
                return !0
            } catch (f) {
                return !1
            }
        },
        fk = function(a, c) {
            this.ig = a;
            this.L9 =
                us(c) ? c || window.sessionStorage : new aw
        };
    fk.prototype.read = function() {
        return this.L9.getItem(this.ig)
    };
    fk.prototype.write = function(a) {
        try {
            this.L9.setItem(this.ig, a)
        } catch (c) {
            return !1
        }
        return !0
    };
    fk.prototype.clear = function() {
        this.L9.removeItem(this.ig)
    };
    fk.iterate = function(a) {
        if (us())
            for (var c = 0, f = window.sessionStorage.length; c < f; ++c) {
                var g = window.sessionStorage.key(c);
                a(g, window.sessionStorage[g])
            }
    };
    for (var Qt = 0; 64 > Qt; ++Qt);
    _.rc = "https:" === window.location.protocol;
    _.dj = _.rc || "http:" === window.location.protocol ? _.Vj : _.dk;
    _.jj = function(a) {
        var c = a.substr(1),
            f = "",
            g = window.location.hostname;
        if ("" !== c) {
            f = (0, window.parseInt)(c, 10);
            if ((0, window.isNaN)(f)) return null;
            c = g.split(".");
            if (c.length < f - 1) return null;
            c.length == f - 1 && (g = "." + g)
        } else g = "";
        return {
            Gb: "S" == a.charAt(0),
            domain: g,
            Ke: f
        }
    };
    _.wj = function(a) {
        if (0 !== a.indexOf("GCSC")) return null;
        var c = {
            uf: !1
        };
        a = a.substr(4);
        if (!a) return c;
        var f = a.charAt(0);
        a = a.substr(1);
        var g = a.lastIndexOf("_");
        if (-1 == g) return c;
        var h = _.jj(a.substr(g + 1));
        if (null == h) return c;
        a = a.substring(0, g);
        if ("_" !== a.charAt(0)) return c;
        g = "E" === f && h.Gb;
        return !g && ("U" !== f || h.Gb) || g && !_.rc ? c : {
            uf: !0,
            Gb: g,
            ep: a.substr(1),
            domain: h.domain,
            Ke: h.Ke
        }
    };
    var Bj, Oj, ak, bk, ck;
    Bj = _.r();
    Oj = _.r();
    _.Pj = _.r();
    _.Tj = _.r();
    ak = "state code cookie_policy g_user_cookie_policy authuser prompt g-oauth-window status".split(" ");
    bk = function(a) {
        this.D8 = a;
        this.Z7 = null
    };
    bk.prototype.write = function(a) {
        var c = _.r(),
            f = _.r();
        for (g in a) _.Qa(a, g) && (f[g] = a[g], c[g] = a[g]);
        var g = 0;
        for (var h = ak.length; g < h; ++g) delete f[ak[g]];
        a = String(a.authuser || 0);
        g = _.r();
        g[a] = _.R.Qc("#" + ck(f));
        this.D8.write(_.mf(g));
        this.Z7 = c
    };
    bk.prototype.read = function() {
        return this.Z7
    };
    bk.prototype.clear = function() {
        this.D8.clear();
        this.Z7 = _.r()
    };
    _.hk = function(a) {
        return a ? {
            domain: a.domain,
            path: "/",
            secure: a.Gb
        } : null
    };
    ck = function(a) {
        var c = "";
        if (!a) return c;
        for (var f in a)
            if ({}.hasOwnProperty.call(a, f)) {
                var g = a[f];
                if (null != g) {
                    var h = [(0, window.encodeURIComponent)(f), "="];
                    if (g instanceof Array) {
                        for (var l = [], n = 0; n < g.length; n++) l.push((0, window.encodeURIComponent)(g[n]));
                        h.push(l.join("+"))
                    } else h.push((0, window.encodeURIComponent)(g));
                    g = h.join("")
                } else g = "";
                g && (c && (c += "&"), c += g)
            } return c
    };
    fk.iterate(function(a) {
        var c = _.wj(a);
        c && c.uf && (Bj[a] = new bk(new fk(a)))
    });
    _.dj.iterate(function(a) {
        Bj[a] && (Oj[a] = new _.dj(a, _.hk(_.wj(a))))
    });

    _.Xj = window.googleapis && window.googleapis.server || {};
    _.Yj = function() {
        var a = /\s*;\s*/;
        return {
            get: function(c, f) {
                c += "=";
                for (var g = (window.document.cookie || "").split(a), h = 0, l; l = g[h]; ++h)
                    if (0 == l.indexOf(c)) return l.substr(c.length);
                return f
            }
        }
    }();
    var dp;
    _.bp = function(a) {
        this.wc = a || {
            cookie: ""
        }
    };
    _.k = _.bp.prototype;
    _.k.isEnabled = function() {
        return window.navigator.cookieEnabled
    };
    _.k.set = function(a, c, f, g, h, l) {
        if (/[;=\s]/.test(a)) throw Error("O`" + a);
        if (/[;\r\n]/.test(c)) throw Error("aa`" + c);
        _.kf(f) || (f = -1);
        h = h ? ";domain=" + h : "";
        g = g ? ";path=" + g : "";
        l = l ? ";secure" : "";
        f = 0 > f ? "" : 0 == f ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date((0, _.pa)() + 1E3 * f)).toUTCString();
        this.wc.cookie = a + "=" + c + h + g + f + l
    };
    _.k.get = function(a, c) {
        for (var f = a + "=", g = (this.wc.cookie || "").split(";"), h = 0, l; h < g.length; h++) {
            l = (0, _.Ge)(g[h]);
            if (0 == l.lastIndexOf(f, 0)) return l.substr(f.length);
            if (l == a) return ""
        }
        return c
    };
    _.k.remove = function(a, c, f) {
        var g = this.YR(a);
        this.set(a, "", 0, c, f);
        return g
    };
    _.k.$b = function() {
        return dp(this).keys
    };
    _.k.Va = function() {
        return dp(this).values
    };
    _.k.isEmpty = function() {
        return !this.wc.cookie
    };
    _.k.Da = function() {
        return this.wc.cookie ? (this.wc.cookie || "").split(";").length : 0
    };
    _.k.YR = function(a) {
        return _.kf(this.get(a))
    };
    _.k.zn = function(a) {
        for (var c = dp(this).values, f = 0; f < c.length; f++)
            if (c[f] == a) return !0;
        return !1
    };
    _.k.clear = function() {
        for (var a = dp(this).keys, c = a.length - 1; 0 <= c; c--) this.remove(a[c])
    };
    dp = function(a) {
        a = (a.wc.cookie || "").split(";");
        for (var c = [], f = [], g, h, l = 0; l < a.length; l++) h = (0, _.Ge)(a[l]), g = h.indexOf("="), -1 == g ? (c.push(""), f.push(h)) : (c.push(h.substring(0, g)), f.push(h.substring(g + 1)));
        return {
            keys: c,
            values: f
        }
    };
    _.hp = new _.bp("undefined" == typeof window.document ? null : window.document);

    _.Hp = function() {
        function a() {
            h[0] = 1732584193;
            h[1] = 4023233417;
            h[2] = 2562383102;
            h[3] = 271733878;
            h[4] = 3285377520;
            w = v = 0
        }

        function c(a) {
            for (var c = n, f = 0; 64 > f; f += 4) c[f / 4] = a[f] << 24 | a[f + 1] << 16 | a[f + 2] << 8 | a[f + 3];
            for (f = 16; 80 > f; f++) a = c[f - 3] ^ c[f - 8] ^ c[f - 14] ^ c[f - 16], c[f] = (a << 1 | a >>> 31) & 4294967295;
            a = h[0];
            var g = h[1],
                l = h[2],
                q = h[3],
                t = h[4];
            for (f = 0; 80 > f; f++) {
                if (40 > f)
                    if (20 > f) {
                        var v = q ^ g & (l ^ q);
                        var w = 1518500249
                    } else v = g ^ l ^ q, w = 1859775393;
                else 60 > f ? (v = g & l | q & (g | l), w = 2400959708) : (v = g ^ l ^ q, w = 3395469782);
                v = ((a << 5 | a >>> 27) & 4294967295) +
                    v + t + w + c[f] & 4294967295;
                t = q;
                q = l;
                l = (g << 30 | g >>> 2) & 4294967295;
                g = a;
                a = v
            }
            h[0] = h[0] + a & 4294967295;
            h[1] = h[1] + g & 4294967295;
            h[2] = h[2] + l & 4294967295;
            h[3] = h[3] + q & 4294967295;
            h[4] = h[4] + t & 4294967295
        }

        function f(a, f) {
            if ("string" === typeof a) {
                a = (0, window.unescape)((0, window.encodeURIComponent)(a));
                for (var g = [], h = 0, n = a.length; h < n; ++h) g.push(a.charCodeAt(h));
                a = g
            }
            f || (f = a.length);
            g = 0;
            if (0 == v)
                for (; g + 64 < f;) c(a.slice(g, g + 64)), g += 64, w += 64;
            for (; g < f;)
                if (l[v++] = a[g++], w++, 64 == v)
                    for (v = 0, c(l); g + 64 < f;) c(a.slice(g, g + 64)), g += 64, w += 64
        }

        function g() {
            var a = [],
                g = 8 * w;
            56 > v ? f(q, 56 - v) : f(q, 64 - (v - 56));
            for (var n = 63; 56 <= n; n--) l[n] = g & 255, g >>>= 8;
            c(l);
            for (n = g = 0; 5 > n; n++)
                for (var t = 24; 0 <= t; t -= 8) a[g++] = h[n] >> t & 255;
            return a
        }
        for (var h = [], l = [], n = [], q = [128], t = 1; 64 > t; ++t) q[t] = 0;
        var v, w;
        a();
        return {
            reset: a,
            update: f,
            digest: g,
            Of: function() {
                for (var a = g(), c = "", f = 0; f < a.length; f++) c += "0123456789ABCDEF".charAt(Math.floor(a[f] / 16)) + "0123456789ABCDEF".charAt(a[f] % 16);
                return c
            }
        }
    };
    var Ck = function(a, c, f) {
            var g = [],
                h = [];
            if (1 == (_.ea(f) ? 2 : 1)) return h = [c, a], (0, _.Be)(g, function(a) {
                h.push(a)
            }), Wi(h.join(" "));
            var l = [],
                n = [];
            (0, _.Be)(f, function(a) {
                n.push(a.key);
                l.push(a.value)
            });
            f = Math.floor((new Date).getTime() / 1E3);
            h = 0 == l.length ? [f, c, a] : [l.join(":"), f, c, a];
            (0, _.Be)(g, function(a) {
                h.push(a)
            });
            a = Wi(h.join(" "));
            a = [f, a];
            0 == n.length || a.push(n.join(""));
            return a.join("_")
        },
        Wi = function(a) {
            var c = _.Hp();
            c.update(a);
            return c.Of().toLowerCase()
        };
    _.Ip = function() {
        var a = _.D.__OVERRIDE_SID;
        null == a && (a = (new _.bp(window.document)).get("SID"));
        return !!a
    };
    _.lq = function(a) {
        var c = _.Vo(String(_.D.location.href));
        if (_.Ip()) {
            var f = 0 == c.indexOf("https:") || 0 == c.indexOf("chrome-extension:");
            c = f ? _.D.__SAPISID : _.D.__APISID;
            null == c && (c = (new _.bp(window.document)).get(f ? "SAPISID" : "APISID"));
            if (c) {
                f = f ? "SAPISIDHASH" : "APISIDHASH";
                var g = String(_.D.location.href);
                return g && c && f ? [f, Ck(_.Vo(g), c, a || null)].join(" ") : null
            }
        }
        return null
    };

    _.sE = function(a) {
        var c = {
            SAPISIDHASH: !0,
            APISIDHASH: !0
        };
        return a && (a.OriginToken || a.Authorization && c[String(a.Authorization).split(" ")[0]]) ? !0 : !1
    };
    _.Qj = {
        Nq: _.sE,
        er: _.Ip,
        bq: function() {
            var a = null;
            _.Ip() && (a = window.__PVT, null == a && (a = _.Yj.get("BEAT")));
            return a
        },
        Qe: _.lq
    };

    _.R = _.R || {};
    _.R.Ee = function(a, c, f, g) {
        "undefined" != typeof a.addEventListener ? a.addEventListener(c, f, g) : "undefined" != typeof a.attachEvent ? a.attachEvent("on" + c, f) : _.Lb("cannot attachBrowserEvent: " + c)
    };
    _.R.Vr = function(a) {
        var c = window;
        c.removeEventListener ? c.removeEventListener("mousemove", a, !1) : c.detachEvent ? c.detachEvent("onmousemove", a) : _.Lb("cannot removeBrowserEvent: mousemove")
    };

    _.Tb = function() {
        function a() {
            h[0] = 1732584193;
            h[1] = 4023233417;
            h[2] = 2562383102;
            h[3] = 271733878;
            h[4] = 3285377520;
            w = v = 0
        }

        function c(a) {
            for (var c = n, f = 0; 64 > f; f += 4) c[f / 4] = a[f] << 24 | a[f + 1] << 16 | a[f + 2] << 8 | a[f + 3];
            for (f = 16; 80 > f; f++) a = c[f - 3] ^ c[f - 8] ^ c[f - 14] ^ c[f - 16], c[f] = (a << 1 | a >>> 31) & 4294967295;
            a = h[0];
            var g = h[1],
                l = h[2],
                q = h[3],
                t = h[4];
            for (f = 0; 80 > f; f++) {
                if (40 > f)
                    if (20 > f) {
                        var v = q ^ g & (l ^ q);
                        var w = 1518500249
                    } else v = g ^ l ^ q, w = 1859775393;
                else 60 > f ? (v = g & l | q & (g | l), w = 2400959708) : (v = g ^ l ^ q, w = 3395469782);
                v = ((a << 5 | a >>> 27) & 4294967295) +
                    v + t + w + c[f] & 4294967295;
                t = q;
                q = l;
                l = (g << 30 | g >>> 2) & 4294967295;
                g = a;
                a = v
            }
            h[0] = h[0] + a & 4294967295;
            h[1] = h[1] + g & 4294967295;
            h[2] = h[2] + l & 4294967295;
            h[3] = h[3] + q & 4294967295;
            h[4] = h[4] + t & 4294967295
        }

        function f(a, f) {
            if ("string" === typeof a) {
                a = (0, window.unescape)((0, window.encodeURIComponent)(a));
                for (var g = [], h = 0, n = a.length; h < n; ++h) g.push(a.charCodeAt(h));
                a = g
            }
            f || (f = a.length);
            g = 0;
            if (0 == v)
                for (; g + 64 < f;) c(a.slice(g, g + 64)), g += 64, w += 64;
            for (; g < f;)
                if (l[v++] = a[g++], w++, 64 == v)
                    for (v = 0, c(l); g + 64 < f;) c(a.slice(g, g + 64)), g += 64, w += 64
        }

        function g() {
            var a = [],
                g = 8 * w;
            56 > v ? f(q, 56 - v) : f(q, 64 - (v - 56));
            for (var n = 63; 56 <= n; n--) l[n] = g & 255, g >>>= 8;
            c(l);
            for (n = g = 0; 5 > n; n++)
                for (var t = 24; 0 <= t; t -= 8) a[g++] = h[n] >> t & 255;
            return a
        }
        for (var h = [], l = [], n = [], q = [128], t = 1; 64 > t; ++t) q[t] = 0;
        var v, w;
        a();
        return {
            reset: a,
            update: f,
            digest: g,
            Of: function() {
                for (var a = g(), c = "", f = 0; f < a.length; f++) c += "0123456789ABCDEF".charAt(Math.floor(a[f] / 16)) + "0123456789ABCDEF".charAt(a[f] % 16);
                return c
            }
        }
    };
    _.Vb = function() {
        function a(a) {
            var c = _.Tb();
            c.update(a);
            return c.Of()
        }
        var c = window.crypto;
        if (c && "function" == typeof c.getRandomValues) return function() {
            var a = new window.Uint32Array(1);
            c.getRandomValues(a);
            return Number("0." + a[0])
        };
        var f = _.P("random/maxObserveMousemove");
        null == f && (f = -1);
        var g = 0,
            h = Math.random(),
            l = 1,
            n = 1E6 * (window.screen.width * window.screen.width + window.screen.height),
            q = function(a) {
                a = a || window.event;
                var c = a.screenX + a.clientX << 16;
                c += a.screenY + a.clientY;
                c *= (new Date).getTime() % 1E6;
                l = l * c %
                    n;
                0 < f && ++g == f && _.R.Vr(q)
            };
        0 != f && _.R.Ee(window, "mousemove", q, !1);
        var t = a(window.document.cookie + "|" + window.document.location + "|" + (new Date).getTime() + "|" + h);
        return function() {
            var c = l;
            c += (0, window.parseInt)(t.substr(0, 20), 16);
            t = a(t);
            return c / (n + Math.pow(16, 20))
        }
    }();
    _.Mu("shindig.random", _.Vb);
    _.fq = function(a) {
        return (0, window.encodeURIComponent)(String(a))
    };
    _.Eh = function(a) {
        return null == a ? "" : String(a)
    };
    _.Ar = function(a, c, f, g, h, l, n) {
        var q = "";
        a && (q += a + ":");
        f && (q += "//", c && (q += c + "@"), q += f, g && (q += ":" + g));
        h && (q += h);
        l && (q += "?" + l);
        n && (q += "#" + n);
        return q
    };
    _.Xi = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    _.Am = function(a, c) {
        if (!c) return a;
        var f = a.indexOf("#");
        0 > f && (f = a.length);
        var g = a.indexOf("?");
        if (0 > g || g > f) {
            g = f;
            var h = ""
        } else h = a.substring(g + 1, f);
        a = [a.substr(0, g), h, a.substr(f)];
        f = a[1];
        a[1] = c ? f ? f + "&" + c : c : f;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    };
    _.$i = function(a, c, f) {
        if (_.ea(c))
            for (var g = 0; g < c.length; g++) _.$i(a, String(c[g]), f);
        else null != c && f.push(a + ("" === c ? "" : "=" + _.fq(c)))
    };
    _.Bm = function(a) {
        var c = [],
            f;
        for (f in a) _.$i(f, a[f], c);
        return c.join("&")
    };
    _.Dm = function(a, c) {
        c = _.Bm(c);
        return _.Am(a, c)
    };
    _.Nb = function(a, c, f) {
        for (var g = 0, h = c.length; 0 <= (g = a.indexOf(c, g)) && g < f;) {
            var l = a.charCodeAt(g - 1);
            if (38 == l || 63 == l)
                if (l = a.charCodeAt(g + h), !l || 61 == l || 38 == l || 35 == l) return g;
            g += h + 1
        }
        return -1
    };
    _.jZ = /#|$/;

    var zk;
    zk = function(a, c) {
        a = _.R.Fh({
            id: a,
            name: a
        });
        a.style.width = "1px";
        a.style.height = "1px";
        a.style.position = "absolute";
        a.style.top = "-100px";
        a.style.display = "none";
        if (window.navigator) {
            var f = window.navigator.userAgent || "";
            var g = window.navigator.product || "";
            f = 0 != f.indexOf("Opera") && -1 == f.indexOf("WebKit") && "Gecko" == g && 0 < f.indexOf("rv:1.")
        } else f = !1;
        a.src = f ? "about:blank" : c;
        a.tabIndex = -1;
        "function" === typeof a.setAttribute ? a.setAttribute("aria-hidden", "true") : a["aria-hidden"] = "true";
        window.document.body.appendChild(a);
        f &&
            (a.src = c);
        return a
    };
    _.Bk = function() {
        function a() {
            return !!n("auth/useFirstPartyAuthV2")
        }

        function c(a, c, f, g, h) {
            var l = n("proxy");
            if (g || !l) {
                l = n("root");
                var q = n("root-1p") || l;
                l = l || "https://content.googleapis.com";
                q = q || "https://clients6.google.com";
                var t = n("xd3") || "/static/proxy.html";
                l = (g || String(c ? q : l)) + t
            }
            l = String(l);
            f && (l += (0 <= l.indexOf("?") ? "&" : "?") + "usegapi=1");
            (c = _.R.Qc().jsh || _.Rb.aX.Ok()) && (l += (0 <= l.indexOf("?") ? "&" : "?") + "jsh=" + (0, window.encodeURIComponent)(c));
            l += "#parent=" + (0, window.encodeURIComponent)(null != h ? String(h) :
                _.Rb.Pq(window.document.location.href));
            return l + ("&rpctoken=" + a)
        }

        function f(a, c, f, g, n) {
            var q = h(f, g, n);
            t[q] || (f = zk(q, c), _.T.register("ready:" + a, function() {
                _.T.unregister("ready:" + a);
                if (!v[q]) {
                    v[q] = !0;
                    var c = w[q];
                    w[q] = [];
                    for (var f = 0, g = c.length; f < g; ++f) {
                        var h = c[f];
                        l(h.qf, h.$r, h.Ga)
                    }
                }
            }), _.T.tf(q, c), t[q] = f)
        }

        function g(a, g, h) {
            var l = String(2147483647 * (0, _.Vb)() | 0),
                n = c(l, a, g, h);
            _.Wa(function() {
                f(l, n, a, g, h)
            })
        }

        function h(a, f, g) {
            a = c("", a, f, g, "");
            g = q[a + f];
            if (!g) {
                g = _.Tb();
                g.update(a);
                g = g.Of().toLowerCase();
                var h =
                    (0, _.Vb)();
                g += h;
                q[a + f] = g
            }
            return "apiproxy" + g
        }

        function l(a, c, f) {
            var l = void 0,
                q = !1;
            if ("makeHttpRequests" !== a) throw 'only "makeHttpRequests" RPCs are implemented';
            var A = function(a) {
                if (a) {
                    if ("undefined" != typeof l && "undefined" != typeof a.root && l != a.root) throw "all requests in a batch must have the same root URL";
                    l = a.root || l;
                    q = _.Qj.Nq(a.headers)
                }
            };
            if (c)
                for (var z = 0, F = c.length; z < F; ++z) {
                    var S = c[z];
                    S && A(S.params)
                }
            A = !!n("useGapiForXd3");
            var Ca = h(q, A, l);
            t[Ca] || g(q, A, l);
            v[Ca] ? _.T.call(Ca, a, function(a) {
                if (this.f ==
                    Ca && this.t == _.T.Wd(this.f) && this.origin == _.T.$d(this.f)) {
                    var c = _.of(a);
                    f(c, a)
                }
            }, c) : (w[Ca] || (w[Ca] = []), w[Ca].push({
                qf: a,
                $r: c,
                Ga: f
            }))
        }

        function n(a) {
            return _.P("googleapis.config/" + a)
        }
        var q = {},
            t = {},
            v = {},
            w = {};
        return {
            SU: function(c, f, g) {
                var h = g || "auto";
                c = c || {};
                if ("none" == h) return c;
                f = f || window.location.href;
                g = c.Authorization;
                var l = c.OriginToken;
                if (!g && !l) {
                    (l = _.au()) && l.access_token && ("oauth2" == h || "auto" == h) && (g = String(l.token_type || "Bearer") + " " + l.access_token);
                    if (l = !g) l = (!!n("auth/useFirstPartyAuth") ||
                        "1p" == h) && "oauth2" != h;
                    if (l && _.Qj.er()) {
                        if (a()) {
                            g = n("primaryEmail");
                            h = n("appDomain");
                            l = n("fogId");
                            var q = [];
                            g && q.push({
                                key: "e",
                                value: g
                            });
                            h && q.push({
                                key: "a",
                                value: h
                            });
                            l && q.push({
                                key: "u",
                                value: l
                            });
                            g = _.Qj.Qe(q)
                        } else g = _.Qj.Qe();
                        g && (f = _.Dh(f), f = c["X-Goog-AuthUser"] || f, _.im(_.Eh(f)) && (!a() || a() && _.im(_.Eh(n("primaryEmail"))) && _.im(_.Eh(n("appDomain"))) && _.im(_.Eh(n("fogId")))) && (f = "0"), _.im(_.Eh(f)) || (c["X-Goog-AuthUser"] = f))
                    }
                    g ? c.Authorization = g : !1 !== n("auth/useOriginToken") && (l = _.Qj.bq()) && (c.OriginToken = l)
                }
                return c
            },
            Dd: l
        }
    }();

    var tk, uk;
    _.Al = {
        tka: "Authorization",
        MH: "Content-ID",
        oka: "Content-Transfer-Encoding",
        jka: "Content-Type",
        uka: "Date",
        wka: "OriginToken",
        xka: "WWW-Authenticate",
        pka: "X-ClientDetails",
        yka: "X-Goog-AuthUser",
        qka: "X-Goog-Encode-Response-If-Executable",
        Ika: "X-Goog-Meeting-Botguardid",
        Jka: "X-Goog-Meeting-Debugid",
        Kka: "X-Goog-Meeting-Token",
        zka: "X-Goog-PageId",
        kka: "X-Goog-Safety-Content-Type",
        lka: "X-Goog-Safety-Encoding",
        Aka: "X-HTTP-Method-Override",
        mka: "X-JavaScript-User-Agent",
        rka: "X-Origin",
        nka: "X-Referer",
        Bka: "X-Requested-With",
        Cka: "X-Use-HTTP-Status-Code-Override"
    };
    tk = ["Accept", "Accept-Language", _.Al.tka, "Cache-Control", "Content-Disposition", "Content-Encoding", "Content-Language", "Content-Length", "Content-MD5", "Content-Range", _.Al.oka, _.Al.jka, _.Al.uka, "GData-Version", "google-cloud-resource-prefix", "Host", "If-Match", "If-Modified-Since", "If-None-Match", "If-Unmodified-Since", "MIME-Version", "Origin", _.Al.wka, "Pragma", "Range", "Slug", "Transfer-Encoding", "Want-Digest", "x-chrome-connected", "X-Client-Data", _.Al.pka, "X-Client-Version", "X-Firebase-Locale", "X-GData-Client",
        "X-GData-Key", _.Al.yka, _.Al.zka, _.Al.qka, "X-Goog-AdX-Buyer-Impersonation", "X-Goog-Api-Client", "X-Goog-Correlation-Id", "X-Goog-Request-Info", "X-Goog-Request-Reason", "X-Goog-Experiments", "x-goog-iam-authority-selector", "x-goog-iam-authorization-token", "X-Goog-Spatula", "X-Goog-Upload-Command", "X-Goog-Upload-Content-Disposition", "X-Goog-Upload-Content-Length", "X-Goog-Upload-Content-Type", "X-Goog-Upload-File-Name", "X-Goog-Upload-Header-Content-Length", "X-Goog-Upload-Offset", "X-Goog-Upload-Protocol", "X-Goog-Visitor-Id",
        _.Al.Aka, _.Al.mka, "X-Pan-Versionid", "X-Proxied-User-IP", _.Al.rka, _.Al.nka, _.Al.Bka, "X-Upload-Content-Length", "X-Upload-Content-Type", _.Al.Cka, "X-Ios-Bundle-Identifier", "X-Android-Package", "X-Ariane-Xsrf-Token", "X-YouTube-VVT", "X-YouTube-Page-CL", "X-YouTube-Page-Timestamp", _.Al.Ika, _.Al.Jka, _.Al.Kka, "X-Sfdc-Authorization"
    ];
    uk = ["Digest", "Cache-Control", "Content-Disposition", "Content-Encoding", "Content-Language", "Content-Length", "Content-MD5", "Content-Range", _.Al.oka, _.Al.jka, "Date", "ETag", "Expires", "Last-Modified", "Location", "Pragma", "Range", "Server", "Transfer-Encoding", _.Al.xka, "Vary", "Unzipped-Content-MD5", "X-Goog-Generation", "X-Goog-Metageneration", _.Al.kka, _.Al.lka, "X-Google-Trace", "X-Goog-Upload-Chunk-Granularity", "X-Goog-Upload-Control-URL", "X-Goog-Upload-Size-Received", "X-Goog-Upload-Status", "X-Goog-Upload-URL", "X-Goog-Diff-Download-Range", "X-Goog-Hash", "X-Goog-Updated-Authorization", "X-Server-Object-Version", "X-Guploader-Customer", "X-Guploader-Upload-Result", "X-Guploader-Uploadid", "X-Google-Gfe-Backend-Request-Cost", _.Al.Ika, _.Al.Jka, _.Al.Kka];
    var Bt, lm, em, wl, jm, Cr, am, yl, Wl, Ul, hm, Tl;
    Bt = null;
    lm = null;
    em = null;
    wl = function(a, c) {
        var f = a.length;
        if (f != c.length) return !1;
        for (var g = 0; g < f; ++g) {
            var h = a.charCodeAt(g),
                l = c.charCodeAt(g);
            65 <= h && 90 >= h && (h += 32);
            65 <= l && 90 >= l && (l += 32);
            if (h != l) return !1
        }
        return !0
    };
    _.Cl = function(a) {
        a = String(a || "").split("\x00").join("");
        for (var c = [], f = !0, g = 0, h = a.length; g < h; ++g) {
            var l = a.charAt(g),
                n = a.charCodeAt(g);
            if (55296 <= n && 56319 >= n && g + 1 < h) {
                var q = a.charAt(g + 1),
                    t = a.charCodeAt(g + 1);
                56320 <= t && 57343 >= t && (l += q, n = 65536 + (n - 55296 << 10) + (t - 56320), ++g)
            }
            if (!(0 <= n && 1114109 >= n) || 55296 <= n && 57343 >= n || 64976 <= n && 65007 >= n || 65534 == (n & 65534)) n = 65533, l = String.fromCharCode(n);
            q = !(32 <= n && 126 >= n) || " " == l || f && ":" == l || "\\" == l;
            !f || "/" != l && "?" != l || (f = !1);
            "%" == l && (g + 2 >= h ? q = !0 : (t = 16 * (0, window.parseInt)(a.charAt(g +
                1), 16) + (0, window.parseInt)(a.charAt(g + 2), 16), 0 <= t && 255 >= t ? (n = t, l = 0 == n ? "" : "%" + (256 + t).toString(16).toUpperCase().substr(1), g += 2) : q = !0));
            q && (l = (0, window.encodeURIComponent)(l), 1 >= l.length && (0 <= n && 127 >= n ? l = "%" + (256 + n).toString(16).toUpperCase().substr(1) : (n = 65533, l = (0, window.encodeURIComponent)(String.fromCharCode(n)))));
            c.push(l)
        }
        a = c.join("");
        a = a.split("#")[0];
        a = a.split("?");
        c = a[0].split("/");
        f = [];
        g = 0;
        for (h = c.length; g < h; ++g) l = c[g], n = l.split("%2E").join("."), n = n.split((0, window.encodeURIComponent)("\uff0e")).join("."),
            "." == n ? g + 1 == h && f.push("") : ".." == n ? (0 < f.length && f.pop(), g + 1 == h && f.push("")) : f.push(l);
        a[0] = f.join("/");
        for (a = a.join("?"); a && "/" == a.charAt(0);) a = a.substr(1);
        return "/" + a
    };
    jm = {
        "access-control-allow-origin": !0,
        "access-control-allow-credentials": !0,
        "access-control-expose-headers": !0,
        "access-control-max-age": !0,
        "access-control-allow-headers": !0,
        "access-control-allow-methods": !0,
        p3p: !0,
        "proxy-authenticate": !0,
        "set-cookie": !0,
        "set-cookie2": !0,
        status: !0,
        tsv: !0,
        "": !0
    };
    Cr = {
        "accept-charset": !0,
        "accept-encoding": !0,
        "access-control-request-headers": !0,
        "access-control-request-method": !0,
        "client-ip": !0,
        clientip: !0,
        connection: !0,
        "content-length": !0,
        cookie: !0,
        cookie2: !0,
        date: !0,
        dnt: !0,
        expect: !0,
        forwarded: !0,
        "forwarded-for": !0,
        "front-end-https": !0,
        host: !0,
        "keep-alive": !0,
        "max-forwards": !0,
        method: !0,
        origin: !0,
        "raw-post-data": !0,
        referer: !0,
        te: !0,
        trailer: !0,
        "transfer-encoding": !0,
        upgrade: !0,
        url: !0,
        "user-agent": !0,
        version: !0,
        via: !0,
        "x-att-deviceid": !0,
        "x-chrome-connected": !0,
        "x-client-data": !0,
        "x-client-ip": !0,
        "x-do-not-track": !0,
        "x-forwarded-by": !0,
        "x-forwarded-for": !0,
        "x-forwarded-host": !0,
        "x-forwarded-proto": !0,
        "x-geo": !0,
        "x-googapps-allowed-domains": !0,
        "x-origin": !0,
        "x-proxyuser-ip": !0,
        "x-real-ip": !0,
        "x-referer": !0,
        "x-uidh": !0,
        "x-user-ip": !0,
        "x-wap-profile": !0,
        "": !0
    };
    am = function(a) {
        if (!_.re(a)) return null;
        for (var c = {}, f = 0; f < a.length; f++) {
            var g = a[f];
            if ("string" === typeof g && g) {
                var h = g.toLowerCase();
                wl(g, h) && (c[h] = g)
            }
        }
        for (var l in _.Al) Object.prototype.hasOwnProperty.call(_.Al, l) && (g = _.Al[l], h = g.toLowerCase(), wl(g, h) && Object.prototype.hasOwnProperty.call(c, h) && (c[h] = g));
        return c
    };
    yl = new RegExp("(" + /[\t -~\u00A0-\u2027\u202A-\uD7FF\uE000-\uFFFF]/.source + "|" + /[\uD800-\uDBFF][\uDC00-\uDFFF]/.source + "){1,100}", "g");
    Wl = /[ \t]*(\r?\n[ \t]+)+/g;
    Ul = /^[ \t]+|[ \t]+$/g;
    hm = function(a, c) {
        if (!c && "object" === typeof a && a && "number" === typeof a.length) {
            c = a;
            a = "";
            for (var f = 0, g = c.length; f < g; ++f) {
                var h = hm(c[f], !0);
                h && (a && (h = a + ", " + h), a = h)
            }
        }
        if ("string" === typeof a && (a = a.replace(Wl, " "), a = a.replace(Ul, ""), "" == a.replace(yl, "") && a)) return a
    };
    Tl = /^[-0-9A-Za-z!#\$%&'\*\+\.\^_`\|~]+$/g;
    _.gm = function(a) {
        if ("string" !== typeof a || !a || !a.match(Tl)) return null;
        a = a.toLowerCase();
        if (null == em) {
            var c = [],
                f = _.P("googleapis/headers/response");
            f && "object" === typeof f && "number" === typeof f.length || (f = null);
            null != f && (c = c.concat(f));
            (f = _.P("client/headers/response")) && "object" === typeof f && "number" === typeof f.length || (f = null);
            null != f && (c = c.concat(f));
            c = c.concat(uk);
            (f = _.P("googleapis/headers/request")) && "object" === typeof f && "number" === typeof f.length || (f = null);
            null != f && (c = c.concat(f));
            (f = _.P("client/headers/request")) &&
            "object" === typeof f && "number" === typeof f.length || (f = null);
            null != f && (c = c.concat(f));
            c = c.concat(tk);
            for (var g in _.Al) Object.prototype.hasOwnProperty.call(_.Al, g) && c.push(_.Al[g]);
            em = am(c)
        }
        return null != em && em.hasOwnProperty(a) ? em[a] : a
    };
    _.hu = function(a, c) {
        if (!_.gm(a) || !hm(c)) return null;
        a = a.toLowerCase();
        if (a.match(/^x-google|^x-gfe|^proxy-|^sec-/i) || Cr[a]) return null;
        if (null == Bt) {
            c = [];
            var f = _.P("googleapis/headers/request");
            f && "object" === typeof f && "number" === typeof f.length || (f = null);
            null != f && (c = c.concat(f));
            (f = _.P("client/headers/request")) && "object" === typeof f && "number" === typeof f.length || (f = null);
            null != f && (c = c.concat(f));
            c = c.concat(tk);
            Bt = am(c)
        }
        return null != Bt && Bt.hasOwnProperty(a) ? Bt[a] : null
    };
    _.Zo = function(a, c) {
        if (!_.gm(a) || !hm(c)) return null;
        a = a.toLowerCase();
        if (jm[a]) return null;
        if (null == lm) {
            c = [];
            var f = _.P("googleapis/headers/response");
            f && "object" === typeof f && "number" === typeof f.length || (f = null);
            null != f && (c = c.concat(f));
            (f = _.P("client/headers/response")) && "object" === typeof f && "number" === typeof f.length || (f = null);
            null != f && (c = c.concat(f));
            c = c.concat(uk);
            lm = am(c)
        }
        return null != lm && lm.hasOwnProperty(a) ? a : null
    };
    _.zl = function(a, c) {
        if (_.gm(c) && null != a && "object" === typeof a) {
            var f = void 0,
                g;
            for (g in a)
                if (Object.prototype.hasOwnProperty.call(a, g) && wl(g, c)) {
                    var h = hm(a[g]);
                    h && (void 0 !== f && (h = f + ", " + h), f = h)
                } return f
        }
    };
    _.om = function(a, c, f, g) {
        var h = _.gm(c);
        if (h) {
            f && (f = hm(f));
            c = c.toLowerCase();
            for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && wl(l, c) && delete a[l];
            f && (g || (c = h), a[c] = f)
        }
    };
    _.Vt = function(a, c) {
        var f = {};
        if (!a) return f;
        a = a.split("\r\n");
        for (var g = 0, h = a.length; g < h; ++g) {
            var l = a[g];
            if (!l) break;
            var n = l.indexOf(":");
            if (!(0 >= n)) {
                var q = l.substring(0, n);
                if (q = _.gm(q)) {
                    for (l = l.substring(n + 1); g + 1 < h && a[g + 1].match(/^[ \t]/);) l += "\r\n" + a[g + 1], ++g;
                    if (l = hm(l))
                        if (q = _.Zo(q, l) || (c ? void 0 : q)) q = q.toLowerCase(), n = _.zl(f, q), void 0 !== n && (l = n + ", " + l), _.om(f, q, l, !0)
                }
            }
        }
        return f
    };

    _.Qw = function() {
        return _.pf("Firefox") || _.pf("FxiOS")
    };
    _.DY = function() {
        return (_.pf("Chrome") || _.pf("CriOS")) && !_.pf("Edge")
    };
    _.GY = function() {
        return _.pf("Safari") && !(_.DY() || _.pf("Coast") || _.$e() || _.pf("Edge") || _.Qw() || _.pf("Silk") || _.pf("Android"))
    };
    _.ux = _.Qw();
    _.mN = _.mZ() || _.pf("iPod");
    _.nN = _.pf("iPad");
    _.oN = _.pf("Android") && !(_.DY() || _.Qw() || _.$e() || _.pf("Silk"));
    _.tx = _.DY();
    _.vx = _.GY() && !_.wk();

    _.RE = function(a) {
        for (var c = {}, f = 0, g = 0; g < a.length;) {
            var h = a[g++];
            var l = h;
            l = _.Vg(l) ? "o" + _.oe(l) : (typeof l).charAt(0) + l;
            Object.prototype.hasOwnProperty.call(c, l) || (c[l] = !0, a[f++] = h)
        }
        a.length = f
    };
    var tv, Cx;
    tv = null;
    _.ch = null;
    Cx = null;
    _.Bv = _.df || _.ef && !_.vx || _.cf || !_.vx && !_.W && "function" == typeof _.D.atob;
    _.aB = function(a, c) {
        _.vi();
        c = c ? Cx : tv;
        for (var f = [], g = 0; g < a.length; g += 3) {
            var h = a[g],
                l = g + 1 < a.length,
                n = l ? a[g + 1] : 0,
                q = g + 2 < a.length,
                t = q ? a[g + 2] : 0,
                v = h >> 2;
            h = (h & 3) << 4 | n >> 4;
            n = (n & 15) << 2 | t >> 6;
            t &= 63;
            q || (t = 64, l || (n = 64));
            f.push(c[v], c[h], c[n], c[t])
        }
        return f.join("")
    };
    _.vi = function() {
        if (!tv) {
            tv = {};
            _.ch = {};
            Cx = {};
            for (var a = 0; 65 > a; a++) tv[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), _.ch[tv[a]] = a, Cx[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a), 62 <= a && (_.ch["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a)
        }
    };

    var lo;
    _.fh = function(a, c) {
        a = a.split(".");
        c = c || _.D;
        for (var f = 0; f < a.length; f++)
            if (c = c[a[f]], null == c) return null;
        return c
    };
    _.xe = function(a, c) {
        c = (0, _.we)(a, c);
        var f;
        (f = 0 <= c) && Array.prototype.splice.call(a, c, 1);
        return f
    };
    lo = function(a, c) {
        for (var f in a)
            if (c.call(void 0, a[f], f, a)) return !0;
        return !1
    };
    _.dh = function() {
        this.Oj = this.Oj;
        this.XZ = this.XZ
    };
    _.dh.prototype.Oj = !1;
    _.dh.prototype.Ma = function() {
        return this.Oj
    };
    _.dh.prototype.U = function() {
        this.Oj || (this.Oj = !0, this.wj())
    };
    _.pD = function(a, c) {
        _.Yi(a, _.ma(_.eh, c))
    };
    _.Yi = function(a, c) {
        a.Oj ? _.kf(void 0) ? c.call(void 0) : c() : (a.XZ || (a.XZ = []), a.XZ.push(_.kf(void 0) ? (0, _.H)(c, void 0) : c))
    };
    _.dh.prototype.wj = function() {
        if (this.XZ)
            for (; this.XZ.length;) this.XZ.shift()()
    };
    _.eh = function(a) {
        a && "function" == typeof a.U && a.U()
    };
    _.mh = function(a, c) {
        this.type = a;
        this.currentTarget = this.target = c;
        this.defaultPrevented = this.Ad = !1;
        this.Tg = !0
    };
    _.mh.prototype.stopPropagation = function() {
        this.Ad = !0
    };
    _.mh.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Tg = !1
    };
    var yh, Jh;
    _.Ih = !_.W || _.gq(9);
    yh = !_.W || _.gq(9);
    Jh = _.W && !_.sl("9");
    !_.ef || _.sl("528");
    _.df && _.sl("1.9b") || _.W && _.sl("8") || _.cf && _.sl("9.5") || _.ef && _.sl("528");
    _.df && !_.sl("8") || _.W && _.sl("9");
    var yn = function() {
        if (!_.D.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            c = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            _.D.addEventListener("test", _.gh, c), _.D.removeEventListener("test", _.gh, c)
        } catch (f) {}
        return a
    }();
    var Gt;
    Gt = function(a) {
        return _.ef ? "webkit" + a : _.cf ? "o" + a.toLowerCase() : a.toLowerCase()
    };
    _.Ht = Gt("TransitionEnd");
    _.G = {
        JF: "click",
        DN: "rightclick",
        MD: "dblclick",
        hy: "mousedown",
        my: "mouseup",
        Ez: "mouseover",
        Py: "mouseout",
        rJ: "mousemove",
        iJ: "mouseenter",
        mJ: "mouseleave",
        jv: "mousecancel",
        LN: "selectionchange",
        QN: "selectstart",
        KQ: "wheel",
        mH: "keypress",
        lH: "keydown",
        nH: "keyup",
        VA: "blur",
        rG: "focus",
        TD: "deactivate",
        sG: "focusin",
        uG: "focusout",
        AB: "change",
        cH: "reset",
        JN: "select",
        MP: "submit",
        BG: "input",
        IM: "propertychange",
        LF: "dragstart",
        SE: "drag",
        YE: "dragenter",
        tF: "dragover",
        ZE: "dragleave",
        DROP: "drop",
        XE: "dragend",
        zQ: "touchstart",
        rQ: "touchmove",
        oQ: "touchend",
        nQ: "touchcancel",
        UA: "beforeunload",
        qC: "consolemessage",
        sC: "contextmenu",
        fE: "devicechange",
        pE: "devicemotion",
        qE: "deviceorientation",
        xE: "DOMContentLoaded",
        ERROR: "error",
        AG: "help",
        oH: "load",
        ZH: "losecapture",
        cL: "orientationchange",
        mN: "readystatechange",
        oN: "resize",
        EN: "scroll",
        BQ: "unload",
        iB: "canplay",
        wB: "canplaythrough",
        MF: "durationchange",
        NF: "emptied",
        ENDED: "ended",
        yH: "loadeddata",
        zH: "loadedmetadata",
        QL: "pause",
        SL: "play",
        PLAYING: "playing",
        YM: "ratechange",
        GN: "seeked",
        IN: "seeking",
        $O: "stalled",
        VP: "suspend",
        mQ: "timeupdate",
        IQ: "volumechange",
        JQ: "waiting",
        SO: "sourceopen",
        HO: "sourceended",
        GO: "sourceclosed",
        Zz: "abort",
        DQ: "update",
        GQ: "updatestart",
        EQ: "updateend",
        zG: "hashchange",
        fL: "pagehide",
        PL: "pageshow",
        AM: "popstate",
        IC: "copy",
        NG: "paste",
        OC: "cut",
        BA: "beforecopy",
        EA: "beforecut",
        SA: "beforepaste",
        ZK: "online",
        SK: "offline",
        xI: "message",
        pC: "connect",
        WG: "install",
        sM: "activate",
        eG: "fetch",
        xG: "foreignfetch",
        gJ: "messageerror",
        hP: "statechange",
        FQ: "updatefound",
        EC: "controllerchange",
        rA: Gt("AnimationStart"),
        jA: Gt("AnimationEnd"),
        pA: Gt("AnimationIteration"),
        AQ: _.Ht,
        cM: "pointerdown",
        uM: "pointerup",
        UL: "pointercancel",
        nM: "pointermove",
        tM: "pointerover",
        rM: "pointerout",
        dM: "pointerenter",
        kM: "pointerleave",
        yG: "gotpointercapture",
        qI: "lostpointercapture",
        tJ: "MSGestureChange",
        uJ: "MSGestureEnd",
        vJ: "MSGestureHold",
        wJ: "MSGestureStart",
        yJ: "MSGestureTap",
        AJ: "MSGotPointerCapture",
        DJ: "MSInertiaStart",
        FJ: "MSLostPointerCapture",
        GJ: "MSPointerCancel",
        HJ: "MSPointerDown",
        MJ: "MSPointerEnter",
        NJ: "MSPointerHover",
        dK: "MSPointerLeave",
        KK: "MSPointerMove",
        LK: "MSPointerOut",
        PK: "MSPointerOver",
        QK: "MSPointerUp",
        kQ: "text",
        lQ: _.W ? "textinput" : "textInput",
        YB: "compositionstart",
        gC: "compositionupdate",
        LB: "compositionend",
        FA: "beforeinput",
        bG: "exit",
        vH: "loadabort",
        wH: "loadcommit",
        AH: "loadredirect",
        GH: "loadstart",
        PH: "loadstop",
        qN: "responsive",
        bO: "sizechanged",
        CQ: "unresponsive",
        HQ: "visibilitychange",
        oP: "storage",
        ME: "DOMSubtreeModified",
        yE: "DOMNodeInserted",
        HE: "DOMNodeRemoved",
        LE: "DOMNodeRemovedFromDocument",
        zE: "DOMNodeInsertedIntoDocument",
        sE: "DOMAttrModified",
        wE: "DOMCharacterDataModified",
        TA: "beforeprint",
        iA: "afterprint",
        LA: "beforeinstallprompt",
        wA: "appinstalled"
    };
    _.nh = function(a, c) {
        _.mh.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.TW = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.fW = null;
        a && this.kc(a, c)
    };
    _.J(_.nh, _.mh);
    var BH = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    _.nh.prototype.kc = function(a, c) {
        var f = this.type = a.type,
            g = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = c;
        (c = a.relatedTarget) ? _.df && (_.Eo(c, "nodeName") || (c = null)): "mouseover" == f ? c = a.fromElement : "mouseout" == f && (c = a.toElement);
        this.relatedTarget = c;
        g ? (this.clientX = void 0 !== g.clientX ? g.clientX : g.pageX, this.clientY = void 0 !== g.clientY ? g.clientY : g.pageY, this.screenX = g.screenX || 0, this.screenY = g.screenY || 0) : (this.offsetX = _.ef || void 0 !==
            a.offsetX ? a.offsetX : a.layerX, this.offsetY = _.ef || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == f ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.TW = _.Gg ? a.metaKey : a.ctrlKey;
        this.pointerId = a.pointerId ||
            0;
        this.pointerType = _.fa(a.pointerType) ? a.pointerType : BH[a.pointerType] || "";
        this.state = a.state;
        this.fW = a;
        a.defaultPrevented && this.preventDefault()
    };
    _.nh.prototype.stopPropagation = function() {
        _.nh.T.stopPropagation.call(this);
        this.fW.stopPropagation ? this.fW.stopPropagation() : this.fW.cancelBubble = !0
    };
    _.nh.prototype.preventDefault = function() {
        _.nh.T.preventDefault.call(this);
        var a = this.fW;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Jh) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (c) {}
    };
    var Lh;
    _.cC = "closure_listenable_" + (1E6 * Math.random() | 0);
    _.wB = function(a) {
        return !(!a || !a[_.cC])
    };
    Lh = 0;
    var oh = function(a, c, f, g, h) {
            this.listener = a;
            this.f5 = null;
            this.src = c;
            this.type = f;
            this.capture = !!g;
            this.Tc = h;
            this.key = ++Lh;
            this.gR = this.If = !1
        },
        hs = function(a) {
            a.gR = !0;
            a.listener = null;
            a.f5 = null;
            a.src = null;
            a.Tc = null
        };
    _.ts = function(a) {
        this.src = a;
        this.Wq = {};
        this.i3 = 0
    };
    _.ts.prototype.add = function(a, c, f, g, h) {
        var l = a.toString();
        a = this.Wq[l];
        a || (a = this.Wq[l] = [], this.i3++);
        var n = zs(a, c, g, h); - 1 < n ? (c = a[n], f || (c.If = !1)) : (c = new oh(c, this.src, l, !!g, h), c.If = f, a.push(c));
        return c
    };
    _.ts.prototype.remove = function(a, c, f, g) {
        a = a.toString();
        if (!(a in this.Wq)) return !1;
        var h = this.Wq[a];
        c = zs(h, c, f, g);
        return -1 < c ? (hs(h[c]), Array.prototype.splice.call(h, c, 1), 0 == h.length && (delete this.Wq[a], this.i3--), !0) : !1
    };
    _.et = function(a, c) {
        var f = c.type;
        if (!(f in a.Wq)) return !1;
        var g = _.xe(a.Wq[f], c);
        g && (hs(c), 0 == a.Wq[f].length && (delete a.Wq[f], a.i3--));
        return g
    };
    _.ts.prototype.removeAll = function(a) {
        a = a && a.toString();
        var c = 0,
            f;
        for (f in this.Wq)
            if (!a || f == a) {
                for (var g = this.Wq[f], h = 0; h < g.length; h++) ++c, hs(g[h]);
                delete this.Wq[f];
                this.i3--
            } return c
    };
    _.ts.prototype.Q_ = function(a, c, f, g) {
        a = this.Wq[a.toString()];
        var h = -1;
        a && (h = zs(a, c, f, g));
        return -1 < h ? a[h] : null
    };
    _.ts.prototype.hasListener = function(a, c) {
        var f = _.kf(a),
            g = f ? a.toString() : "",
            h = _.kf(c);
        return lo(this.Wq, function(a) {
            for (var l = 0; l < a.length; ++l)
                if (!(f && a[l].type != g || h && a[l].capture != c)) return !0;
            return !1
        })
    };
    var zs = function(a, c, f, g) {
        for (var h = 0; h < a.length; ++h) {
            var l = a[h];
            if (!l.gR && l.listener == c && l.capture == !!f && l.Tc == g) return h
        }
        return -1
    };
    var lt, vh, st, qh, th, Gk, Fh, Gh, xh, lC;
    lt = "closure_lm_" + (1E6 * Math.random() | 0);
    vh = {};
    st = 0;
    _.ph = function(a, c, f, g, h) {
        if (g && g.once) return _.zh(a, c, f, g, h);
        if (_.ea(c)) {
            for (var l = 0; l < c.length; l++) _.ph(a, c[l], f, g, h);
            return null
        }
        f = _.tl(f);
        return _.wB(a) ? a.Ei(c, f, _.Vg(g) ? !!g.capture : !!g, h) : qh(a, c, f, !1, g, h)
    };
    qh = function(a, c, f, g, h, l) {
        if (!c) throw Error("u");
        var n = _.Vg(h) ? !!h.capture : !!h,
            q = _.zt(a);
        q || (a[lt] = q = new _.ts(a));
        f = q.add(c, f, g, n, l);
        if (f.f5) return f;
        g = th();
        f.f5 = g;
        g.src = a;
        g.listener = f;
        if (a.addEventListener) yn || (h = n), void 0 === h && (h = !1), a.addEventListener(c.toString(), g, h);
        else if (a.attachEvent) a.attachEvent(Gk(c.toString()), g);
        else if (a.addListener && a.removeListener) a.addListener(g);
        else throw Error("c");
        st++;
        return f
    };
    th = function() {
        var a = xh,
            c = yh ? function(f) {
                return a.call(c.src, c.listener, f)
            } : function(f) {
                f = a.call(c.src, c.listener, f);
                if (!f) return f
            };
        return c
    };
    _.zh = function(a, c, f, g, h) {
        if (_.ea(c)) {
            for (var l = 0; l < c.length; l++) _.zh(a, c[l], f, g, h);
            return null
        }
        f = _.tl(f);
        return _.wB(a) ? a.bZ(c, f, _.Vg(g) ? !!g.capture : !!g, h) : qh(a, c, f, !0, g, h)
    };
    _.Ch = function(a) {
        if (_.qe(a) || !a || a.gR) return !1;
        var c = a.src;
        if (_.wB(c)) return c.PG(a);
        var f = a.type,
            g = a.f5;
        c.removeEventListener ? c.removeEventListener(f, g, a.capture) : c.detachEvent ? c.detachEvent(Gk(f), g) : c.addListener && c.removeListener && c.removeListener(g);
        st--;
        (f = _.zt(c)) ? (_.et(f, a), 0 == f.i3 && (f.src = null, c[lt] = null)) : hs(a);
        return !0
    };
    Gk = function(a) {
        return a in vh ? vh[a] : vh[a] = "on" + a
    };
    Fh = function(a, c, f, g) {
        var h = !0;
        if (a = _.zt(a))
            if (c = a.Wq[c.toString()])
                for (c = c.concat(), a = 0; a < c.length; a++) {
                    var l = c[a];
                    l && l.capture == f && !l.gR && (l = Gh(l, g), h = h && !1 !== l)
                }
        return h
    };
    Gh = function(a, c) {
        var f = a.listener,
            g = a.Tc || a.src;
        a.If && _.Ch(a);
        return f.call(g, c)
    };
    xh = function(a, c) {
        if (a.gR) return !0;
        if (!yh) {
            var f = c || _.fh("window.event");
            c = new _.nh(f, this);
            var g = !0;
            if (!(0 > f.keyCode || void 0 != f.returnValue)) {
                a: {
                    var h = !1;
                    if (0 == f.keyCode) try {
                        f.keyCode = -1;
                        break a
                    } catch (n) {
                        h = !0
                    }
                    if (h || void 0 == f.returnValue) f.returnValue = !0
                }
                f = [];
                for (h = c.currentTarget; h; h = h.parentNode) f.push(h);a = a.type;
                for (h = f.length - 1; !c.Ad && 0 <= h; h--) {
                    c.currentTarget = f[h];
                    var l = Fh(f[h], a, !0, c);
                    g = g && l
                }
                for (h = 0; !c.Ad && h < f.length; h++) c.currentTarget = f[h],
                l = Fh(f[h], a, !1, c),
                g = g && l
            }
            return g
        }
        return Gh(a, new _.nh(c, this))
    };
    _.zt = function(a) {
        a = a[lt];
        return a instanceof _.ts ? a : null
    };
    lC = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    _.tl = function(a) {
        if (_.vd(a)) return a;
        a[lC] || (a[lC] = function(c) {
            return a.handleEvent(c)
        });
        return a[lC]
    };
    _.hh(function(a) {
        xh = a(xh)
    });

    _.Up = function(a) {
        a.Tl = void 0;
        a.ma = function() {
            return a.Tl ? a.Tl : a.Tl = new a
        }
    };
    _.jr = function(a, c) {
        var f = a.length - c.length;
        return 0 <= f && a.indexOf(c, f) == f
    };
    _.Og = function(a) {
        for (var c in a) return !1;
        return !0
    };
    _.Ah = function(a, c, f, g, h) {
        if (_.ea(c))
            for (var l = 0; l < c.length; l++) _.Ah(a, c[l], f, g, h);
        else g = _.Vg(g) ? !!g.capture : !!g, f = _.tl(f), _.wB(a) ? a.nx(c, f, g, h) : a && (a = _.zt(a)) && (c = a.Q_(c, f, g, h)) && _.Ch(c)
    };
    _.Hh = function() {
        _.dh.call(this);
        this.zY = new _.ts(this);
        this.vda = this;
        this.z8 = null
    };
    _.J(_.Hh, _.dh);
    _.Hh.prototype[_.cC] = !0;
    _.k = _.Hh.prototype;
    _.k.KR = function() {
        return this.z8
    };
    _.k.tj = _.b(17);
    _.k.addEventListener = function(a, c, f, g) {
        _.ph(this, a, c, f, g)
    };
    _.k.removeEventListener = function(a, c, f, g) {
        _.Ah(this, a, c, f, g)
    };
    _.k.dispatchEvent = function(a) {
        var c, f = this.KR();
        if (f)
            for (c = []; f; f = f.KR()) c.push(f);
        f = this.vda;
        var g = a.type || a;
        if (_.fa(a)) a = new _.mh(a, f);
        else if (a instanceof _.mh) a.target = a.target || f;
        else {
            var h = a;
            a = new _.mh(g, f);
            _.sf(a, h)
        }
        h = !0;
        if (c)
            for (var l = c.length - 1; !a.Ad && 0 <= l; l--) {
                var n = a.currentTarget = c[l];
                h = n.ef(g, !0, a) && h
            }
        a.Ad || (n = a.currentTarget = f, h = n.ef(g, !0, a) && h, a.Ad || (h = n.ef(g, !1, a) && h));
        if (c)
            for (l = 0; !a.Ad && l < c.length; l++) n = a.currentTarget = c[l], h = n.ef(g, !1, a) && h;
        return h
    };
    _.k.wj = function() {
        _.Hh.T.wj.call(this);
        this.LI();
        this.z8 = null
    };
    _.k.Ei = function(a, c, f, g) {
        return this.zY.add(String(a), c, !1, f, g)
    };
    _.k.bZ = function(a, c, f, g) {
        return this.zY.add(String(a), c, !0, f, g)
    };
    _.k.nx = function(a, c, f, g) {
        return this.zY.remove(String(a), c, f, g)
    };
    _.k.PG = function(a) {
        return _.et(this.zY, a)
    };
    _.k.LI = function(a) {
        this.zY && this.zY.removeAll(a)
    };
    _.k.ef = function(a, c, f) {
        a = this.zY.Wq[String(a)];
        if (!a) return !0;
        a = a.concat();
        for (var g = !0, h = 0; h < a.length; ++h) {
            var l = a[h];
            if (l && !l.gR && l.capture == c) {
                var n = l.listener,
                    q = l.Tc || l.src;
                l.If && this.PG(l);
                g = !1 !== n.call(q, f) && g
            }
        }
        return g && 0 != f.Tg
    };
    _.k.Q_ = function(a, c, f, g) {
        return this.zY.Q_(String(a), c, f, g)
    };
    _.k.hasListener = function(a, c) {
        return this.zY.hasListener(_.kf(a) ? String(a) : void 0, c)
    };

    _.Sf = function(a, c) {
        c.parentNode && c.parentNode.insertBefore(a, c.nextSibling)
    };
    _.Si = "StopIteration" in _.D ? _.D.StopIteration : {
        message: "StopIteration",
        stack: ""
    };
    _.Mi = function() {};
    _.Mi.prototype.next = function() {
        throw _.Si;
    };
    _.Mi.prototype.xc = function() {
        return this
    };

    _.Pi = function(a, c) {
        this.Ka = {};
        this.Ye = [];
        this.IE = this.Kf = 0;
        var f = arguments.length;
        if (1 < f) {
            if (f % 2) throw Error("q");
            for (var g = 0; g < f; g += 2) this.set(arguments[g], arguments[g + 1])
        } else a && this.addAll(a)
    };
    _.k = _.Pi.prototype;
    _.k.Da = function() {
        return this.Kf
    };
    _.k.Va = function() {
        Qi(this);
        for (var a = [], c = 0; c < this.Ye.length; c++) a.push(this.Ka[this.Ye[c]]);
        return a
    };
    _.k.$b = function() {
        Qi(this);
        return this.Ye.concat()
    };
    _.k.YR = function(a) {
        return _.Ri(this.Ka, a)
    };
    _.k.zn = _.b(2);
    _.k.equals = function(a, c) {
        if (this === a) return !0;
        if (this.Kf != a.Da()) return !1;
        c = c || kA;
        Qi(this);
        for (var f, g = 0; f = this.Ye[g]; g++)
            if (!c(this.get(f), a.get(f))) return !1;
        return !0
    };
    var kA = function(a, c) {
        return a === c
    };
    _.Pi.prototype.isEmpty = function() {
        return 0 == this.Kf
    };
    _.Pi.prototype.clear = function() {
        this.Ka = {};
        this.IE = this.Kf = this.Ye.length = 0
    };
    _.Pi.prototype.remove = function(a) {
        return _.Ri(this.Ka, a) ? (delete this.Ka[a], this.Kf--, this.IE++, this.Ye.length > 2 * this.Kf && Qi(this), !0) : !1
    };
    var Qi = function(a) {
        if (a.Kf != a.Ye.length) {
            for (var c = 0, f = 0; c < a.Ye.length;) {
                var g = a.Ye[c];
                _.Ri(a.Ka, g) && (a.Ye[f++] = g);
                c++
            }
            a.Ye.length = f
        }
        if (a.Kf != a.Ye.length) {
            var h = {};
            for (f = c = 0; c < a.Ye.length;) g = a.Ye[c], _.Ri(h, g) || (a.Ye[f++] = g, h[g] = 1), c++;
            a.Ye.length = f
        }
    };
    _.k = _.Pi.prototype;
    _.k.get = function(a, c) {
        return _.Ri(this.Ka, a) ? this.Ka[a] : c
    };
    _.k.set = function(a, c) {
        _.Ri(this.Ka, a) || (this.Kf++, this.Ye.push(a), this.IE++);
        this.Ka[a] = c
    };
    _.k.addAll = function(a) {
        if (a instanceof _.Pi)
            for (var c = a.$b(), f = 0; f < c.length; f++) this.set(c[f], a.get(c[f]));
        else
            for (c in a) this.set(c, a[c])
    };
    _.k.forEach = function(a, c) {
        for (var f = this.$b(), g = 0; g < f.length; g++) {
            var h = f[g],
                l = this.get(h);
            a.call(c, l, h, this)
        }
    };
    _.k.clone = function() {
        return new _.Pi(this)
    };
    _.k.xc = function(a) {
        Qi(this);
        var c = 0,
            f = this.IE,
            g = this,
            h = new _.Mi;
        h.next = function() {
            if (f != g.IE) throw Error("z");
            if (c >= g.Ye.length) throw _.Si;
            var h = g.Ye[c++];
            return a ? h : g.Ka[h]
        };
        return h
    };
    _.Ri = function(a, c) {
        return Object.prototype.hasOwnProperty.call(a, c)
    };

    _.qA = function(a) {
        var c = 0,
            f;
        for (f in a) c++;
        return c
    };
    _.Li = function(a) {
        var c = [],
            f = 0,
            g;
        for (g in a) c[f++] = a[g];
        return c
    };
    _.Ki = function(a) {
        var c = [],
            f = 0,
            g;
        for (g in a) c[f++] = g;
        return c
    };
    _.yH = function(a, c) {
        var f = _.re(c),
            g = f ? c : arguments;
        for (f = f ? 0 : 1; f < g.length; f++) {
            if (null == a) return;
            a = a[g[f]]
        }
        return a
    };
    _.Ni = function(a) {
        if (a.Va && "function" == typeof a.Va) return a.Va();
        if (_.fa(a)) return a.split("");
        if (_.re(a)) {
            for (var c = [], f = a.length, g = 0; g < f; g++) c.push(a[g]);
            return c
        }
        return _.Li(a)
    };
    _.hz = function(a) {
        if (a.$b && "function" == typeof a.$b) return a.$b();
        if (!a.Va || "function" != typeof a.Va) {
            if (_.re(a) || _.fa(a)) {
                var c = [];
                a = a.length;
                for (var f = 0; f < a; f++) c.push(f);
                return c
            }
            return _.Ki(a)
        }
    };
    _.Oi = function(a, c, f) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(c, f);
        else if (_.re(a) || _.fa(a))(0, _.Be)(a, c, f);
        else
            for (var g = _.hz(a), h = _.Ni(a), l = h.length, n = 0; n < l; n++) c.call(f, h[n], g && g[n], a)
    };

    _.ah = function(a, c) {
        var f = {},
            g;
        for (g in a) c.call(void 0, a[g], g, a) && (f[g] = a[g]);
        return f
    };
    var zp;
    _.PC = function(a) {
        return (new zp).kZ(a)
    };
    zp = function() {};
    zp.prototype.kZ = function(a) {
        var c = [];
        Qk(this, a, c);
        return c.join("")
    };
    var Qk = function(a, c, f) {
            if (null == c) f.push("null");
            else {
                if ("object" == typeof c) {
                    if (_.ea(c)) {
                        var g = c;
                        c = g.length;
                        f.push("[");
                        for (var h = "", l = 0; l < c; l++) f.push(h), Qk(a, g[l], f), h = ",";
                        f.push("]");
                        return
                    }
                    if (c instanceof String || c instanceof Number || c instanceof Boolean) c = c.valueOf();
                    else {
                        f.push("{");
                        h = "";
                        for (g in c) Object.prototype.hasOwnProperty.call(c, g) && (l = c[g], "function" != typeof l && (f.push(h), Cp(g, f), f.push(":"), Qk(a, l, f), h = ","));
                        f.push("}");
                        return
                    }
                }
                switch (typeof c) {
                    case "string":
                        Cp(c, f);
                        break;
                    case "number":
                        f.push((0, window.isFinite)(c) &&
                            !(0, window.isNaN)(c) ? String(c) : "null");
                        break;
                    case "boolean":
                        f.push(String(c));
                        break;
                    case "function":
                        f.push("null");
                        break;
                    default:
                        throw Error("H`" + typeof c);
                }
            }
        },
        Dp = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        Sn = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
        Cp = function(a, c) {
            c.push('"', a.replace(Sn, function(a) {
                var c = Dp[a];
                c || (c = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), Dp[a] = c);
                return c
            }), '"')
        };

    _.Rn = function(a, c, f) {
        if (_.vd(a)) f && (a = (0, _.H)(a, f));
        else if (a && "function" == typeof a.handleEvent) a = (0, _.H)(a.handleEvent, a);
        else throw Error("t");
        return 2147483647 < Number(c) ? -1 : _.D.setTimeout(a, c || 0)
    };
    _.fM = function(a) {
        var c = null;
        return (new _.C(function(f, g) {
            c = _.Rn(function() {
                f(void 0)
            }, a); - 1 == c && g(Error("a"))
        })).r9(function(a) {
            _.D.clearTimeout(c);
            throw a;
        })
    };

    var Ti, Gm, io, ho, Co;
    _.Xn = function(a) {
        return (a = _.Vn(a)) ? new window.ActiveXObject(a) : new window.XMLHttpRequest
    };
    _.sA = function(a) {
        if (!_.ea(a))
            for (var c = a.length - 1; 0 <= c; c--) delete a[c];
        a.length = 0
    };
    Ti = function(a) {
        return Array.prototype.join.call(arguments, "")
    };
    _.TO = function(a) {
        var c = _.da(a);
        if ("object" == c || "array" == c) {
            if (_.vd(a.clone)) return a.clone();
            c = "array" == c ? [] : {};
            for (var f in a) c[f] = _.TO(a[f]);
            return c
        }
        return a
    };
    Gm = function(a, c) {
        var f = [];
        for (c = c || 0; c < a.length; c += 2) _.$i(a[c], a[c + 1], f);
        return f.join("&")
    };
    _.po = function(a, c) {
        var f = 2 == arguments.length ? Gm(arguments[1], 0) : Gm(arguments, 1);
        return _.Am(a, f)
    };
    _.LM = function(a, c, f) {
        f = null != f ? "=" + _.fq(f) : "";
        return _.Am(a, c + f)
    };
    _.ul = function(a, c) {
        _.jr(a, "/") && (a = a.substr(0, a.length - 1));
        _.jd(c, "/") && (c = c.substr(1));
        return Ti(a, "/", c)
    };
    io = {};
    ho = function(a) {
        if (io[a]) return io[a];
        a = String(a);
        if (!io[a]) {
            var c = /function\s+([^\(]+)/m.exec(a);
            io[a] = c ? c[1] : "[Anonymous]"
        }
        return io[a]
    };
    Co = function(a, c) {
        var f = [];
        if (_.ve(c, a)) f.push("[...circular reference...]");
        else if (a && 50 > c.length) {
            f.push(ho(a) + "(");
            for (var g = a.arguments, h = 0; g && h < g.length; h++) {
                0 < h && f.push(", ");
                var l = g[h];
                switch (typeof l) {
                    case "object":
                        l = l ? "object" : "null";
                        break;
                    case "string":
                        break;
                    case "number":
                        l = String(l);
                        break;
                    case "boolean":
                        l = l ? "true" : "false";
                        break;
                    case "function":
                        l = (l = ho(l)) ? l : "[fn]";
                        break;
                    default:
                        l = typeof l
                }
                40 < l.length && (l = l.substr(0, 40) + "...");
                f.push(l)
            }
            c.push(a);
            f.push(")\n");
            try {
                f.push(Co(a.caller, c))
            } catch (n) {
                f.push("[exception trying to get caller]\n")
            }
        } else a ?
            f.push("[...long stack...]") : f.push("[end]");
        return f.join("")
    };
    _.Do = function(a) {
        var c = Error();
        if (Error.captureStackTrace) Error.captureStackTrace(c, a || _.Do), c = String(c.stack);
        else {
            try {
                throw c;
            } catch (f) {
                c = f
            }
            c = (c = c.stack) ? String(c) : null
        }
        c || (c = Co(a || arguments.callee.caller, []));
        return c
    };
    _.Em = function(a) {
        switch (a) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                return !0;
            default:
                return !1
        }
    };
    _.OA = function(a, c) {
        _.Hh.call(this);
        this.RZ = a || 1;
        this.R0 = c || _.D;
        this.h6 = (0, _.H)(this.bM, this);
        this.R7 = (0, _.pa)()
    };
    _.J(_.OA, _.Hh);
    _.k = _.OA.prototype;
    _.k.enabled = !1;
    _.k.wd = null;
    _.k.setInterval = function(a) {
        this.RZ = a;
        this.wd && this.enabled ? (this.stop(), this.start()) : this.wd && this.stop()
    };
    _.k.bM = function() {
        if (this.enabled) {
            var a = (0, _.pa)() - this.R7;
            0 < a && a < .8 * this.RZ ? this.wd = this.R0.setTimeout(this.h6, this.RZ - a) : (this.wd && (this.R0.clearTimeout(this.wd), this.wd = null), this.dispatchEvent("tick"), this.enabled && (this.stop(), this.start()))
        }
    };
    _.k.start = function() {
        this.enabled = !0;
        this.wd || (this.wd = this.R0.setTimeout(this.h6, this.RZ), this.R7 = (0, _.pa)())
    };
    _.k.stop = function() {
        this.enabled = !1;
        this.wd && (this.R0.clearTimeout(this.wd), this.wd = null)
    };
    _.k.wj = function() {
        _.OA.T.wj.call(this);
        this.stop();
        delete this.R0
    };
    var go, VA, ko;
    _.Yn = function(a) {
        _.Hh.call(this);
        this.headers = new _.Pi;
        this.P5 = a || null;
        this.ez = !1;
        this.O5 = this.nb = null;
        this.D4 = "";
        this.e0 = 0;
        this.OZ = this.B7 = this.u4 = this.N6 = !1;
        this.q_ = 0;
        this.p_ = null;
        this.gZ = "";
        this.X9 = this.eM = !1
    };
    _.J(_.Yn, _.Hh);
    _.Yn.prototype.vu = null;
    go = /^https?$/i;
    VA = ["POST", "PUT"];
    ko = [];
    _.mo = function(a, c, f, g, h, l, n) {
        var q = new _.Yn;
        ko.push(q);
        c && q.Ei("complete", c);
        q.bZ("ready", q.Yda);
        l && q.C9(l);
        n && (q.eM = n);
        q.send(a, f, g, h)
    };
    _.Yn.prototype.Yda = function() {
        this.U();
        _.xe(ko, this)
    };
    _.Yn.prototype.C9 = function(a) {
        this.q_ = Math.max(0, a)
    };
    _.Yn.prototype.send = function(a, c, f, g) {
        if (this.nb) throw Error("J`" + this.D4 + "`" + a);
        c = c ? c.toUpperCase() : "GET";
        this.D4 = a;
        this.e0 = 0;
        this.N6 = !1;
        this.ez = !0;
        this.nb = this.P5 ? _.Xn(this.P5) : _.Xn(_.fo);
        this.O5 = this.P5 ? this.P5.getOptions() : _.fo.getOptions();
        this.nb.onreadystatechange = (0, _.H)(this.Fba, this);
        try {
            this.B7 = !0, this.nb.open(c, String(a), !0), this.B7 = !1
        } catch (l) {
            this.V3(5, l);
            return
        }
        a = f || "";
        var h = this.headers.clone();
        g && _.Oi(g, function(a, c) {
            h.set(c, a)
        });
        g = _.ue(h.$b(), SC);
        f = _.D.FormData && a instanceof _.D.FormData;
        !_.ve(VA, c) || g || f || h.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        h.forEach(function(a, c) {
            this.nb.setRequestHeader(c, a)
        }, this);
        this.gZ && (this.nb.responseType = this.gZ);
        "withCredentials" in this.nb && this.nb.withCredentials !== this.eM && (this.nb.withCredentials = this.eM);
        try {
            $A(this), 0 < this.q_ && ((this.X9 = sh(this.nb)) ? (this.nb.timeout = this.q_, this.nb.ontimeout = (0, _.H)(this.Ss, this)) : this.p_ = _.Rn(this.Ss, this.q_, this)), this.u4 = !0, this.nb.send(a), this.u4 = !1
        } catch (l) {
            this.V3(5, l)
        }
    };
    var sh = function(a) {
            return _.W && _.sl(9) && _.qe(a.timeout) && _.kf(a.ontimeout)
        },
        SC = function(a) {
            return "content-type" == a.toLowerCase()
        };
    _.Yn.prototype.Ss = function() {
        "undefined" != typeof _.na && this.nb && (this.e0 = 8, this.dispatchEvent("timeout"), this.abort(8))
    };
    _.Yn.prototype.V3 = function(a) {
        this.ez = !1;
        this.nb && (this.OZ = !0, this.nb.abort(), this.OZ = !1);
        this.e0 = a;
        $n(this);
        ao(this)
    };
    var $n = function(a) {
        a.N6 || (a.N6 = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
    };
    _.Yn.prototype.abort = function(a) {
        this.nb && this.ez && (this.ez = !1, this.OZ = !0, this.nb.abort(), this.OZ = !1, this.e0 = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ao(this))
    };
    _.Yn.prototype.wj = function() {
        this.nb && (this.ez && (this.ez = !1, this.OZ = !0, this.nb.abort(), this.OZ = !1), ao(this, !0));
        _.Yn.T.wj.call(this)
    };
    _.Yn.prototype.Fba = function() {
        this.Oj || (this.B7 || this.u4 || this.OZ ? bo(this) : this.r8())
    };
    _.Yn.prototype.r8 = function() {
        bo(this)
    };
    var bo = function(a) {
            if (a.ez && "undefined" != typeof _.na && (!a.O5[1] || 4 != _.iB(a) || 2 != a.getStatus()))
                if (a.u4 && 4 == _.iB(a)) _.Rn(a.Fba, 0, a);
                else if (a.dispatchEvent("readystatechange"), 4 == _.iB(a)) {
                a.ez = !1;
                try {
                    _.Eu(a) ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : (a.e0 = 6, a.getStatus(), $n(a))
                } finally {
                    ao(a)
                }
            }
        },
        ao = function(a, c) {
            if (a.nb) {
                $A(a);
                var f = a.nb,
                    g = a.O5[0] ? _.gh : null;
                a.nb = null;
                a.O5 = null;
                c || a.dispatchEvent("ready");
                try {
                    f.onreadystatechange = g
                } catch (h) {}
            }
        },
        $A = function(a) {
            a.nb && a.X9 && (a.nb.ontimeout =
                null);
            a.p_ && (_.D.clearTimeout(a.p_), a.p_ = null)
        };
    _.Yn.prototype.kh = function() {
        return !!this.nb
    };
    _.Eu = function(a) {
        var c = a.getStatus(),
            f;
        if (!(f = _.Em(c))) {
            if (c = 0 === c) a = String(a.D4).match(_.Xi)[1] || null, !a && _.D.self && _.D.self.location && (a = _.D.self.location.protocol, a = a.substr(0, a.length - 1)), c = !go.test(a ? a.toLowerCase() : "");
            f = c
        }
        return f
    };
    _.iB = function(a) {
        return a.nb ? a.nb.readyState : 0
    };
    _.Yn.prototype.getStatus = function() {
        try {
            return 2 < _.iB(this) ? this.nb.status : -1
        } catch (a) {
            return -1
        }
    };
    _.KI = function(a) {
        try {
            return a.nb ? a.nb.responseText : ""
        } catch (c) {
            return ""
        }
    };
    _.pA = function(a) {
        try {
            if (!a.nb) return null;
            if ("response" in a.nb) return a.nb.response;
            switch (a.gZ) {
                case "":
                case "text":
                    return a.nb.responseText;
                case "arraybuffer":
                    if ("mozResponseArrayBuffer" in a.nb) return a.nb.mozResponseArrayBuffer
            }
            return null
        } catch (c) {
            return null
        }
    };
    _.Yn.prototype.getResponseHeader = function(a) {
        if (this.nb && 4 == _.iB(this)) return a = this.nb.getResponseHeader(a), null === a ? void 0 : a
    };
    _.Yn.prototype.getAllResponseHeaders = function() {
        return this.nb && 4 == _.iB(this) ? this.nb.getAllResponseHeaders() || "" : ""
    };
    _.hh(function(a) {
        _.Yn.prototype.r8 = a(_.Yn.prototype.r8)
    });

    var ku = function(a) {
            return {
                execute: function(c) {
                    var f = {
                            method: a.httpMethod || "GET",
                            root: a.root,
                            path: a.url,
                            params: a.urlParams,
                            headers: a.headers,
                            body: a.body
                        },
                        g = window.gapi,
                        h = function() {
                            var a = g.config.get("client/apiKey"),
                                h = g.config.get("client/version");
                            try {
                                var q = g.config.get("googleapis.config/developerKey"),
                                    t = g.config.get("client/apiKey", q);
                                g.config.update("client/apiKey", t);
                                g.config.update("client/version", "1.0.0-alpha");
                                var v = g.client;
                                v.request.call(v, f).then(c, c)
                            } finally {
                                g.config.update("client/apiKey",
                                    a), g.config.update("client/version", h)
                            }
                        };
                    g.client ? h() : g.load.call(g, "client", h)
                }
            }
        },
        pC = function(a, c) {
            return function(f) {
                var g = {};
                f = f.body;
                var h = _.of(f),
                    l = {};
                if (h && h.length)
                    for (var n = 0, q = h.length; n < q; ++n) {
                        var t = h[n];
                        l[t.id] = t
                    }
                n = 0;
                for (q = c.length; n < q; ++n) t = c[n].id, g[t] = h && h.length ? l[t] : h;
                a(g, f)
            }
        },
        HG = function(a) {
            a.transport = {
                name: "googleapis",
                execute: function(c, f) {
                    for (var g = [], h = 0, l = c.length; h < l; ++h) {
                        var n = c[h],
                            q = n.method,
                            t = String(q).split(".")[0];
                        t = _.P("googleapis.config/versions/" + q) || _.P("googleapis.config/versions/" +
                            t) || "v1";
                        g.push({
                            jsonrpc: "2.0",
                            id: n.id,
                            method: q,
                            apiVersion: String(t),
                            params: n.params
                        })
                    }
                    c = ku({
                        httpMethod: "POST",
                        root: a.transport.root,
                        url: "/rpc?pp=0",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: g
                    });
                    c.execute.call(c, pC(f, g))
                },
                root: void 0
            }
        },
        QH = function(a) {
            var c = this.method,
                f = this.transport;
            f.execute.call(f, [{
                method: c,
                id: c,
                params: this.rpc
            }], function(f) {
                f = f[c];
                f.error || (f = f.data || f.result);
                a(f)
            })
        },
        JI = function() {
            for (var a = dr, c = a.split("."), f = function(c) {
                    c = c || {};
                    c.groupId = c.groupId || "@self";
                    c.userId =
                        c.userId || "@viewer";
                    c = {
                        method: a,
                        rpc: c || {}
                    };
                    HG(c);
                    c.execute = QH;
                    return c
                }, g = _.D, h = 0, l = c.length; h < l; ++h) {
                var n = g[c[h]] || {};
                h + 1 == l && (n = f);
                g = g[c[h]] = n
            }
            if (1 < c.length && "googleapis" != c[0])
                for (c[0] = "googleapis", "delete" == c[c.length - 1] && (c[c.length - 1] = "remove"), g = _.D, h = 0, l = c.length; h < l; ++h) n = g[c[h]] || {}, h + 1 == l && (n = f), g = g[c[h]] = n
        },
        dr;
    for (dr in _.P("googleapis.config/methods")) JI();
    _.Mu("googleapis.newHttpRequest", function(a) {
        return ku(a)
    });
    _.Mu("googleapis.setUrlParameter", function(a, c) {
        if ("trace" !== a) throw Error("N");
        _.Fa("client/trace", c)
    });
    var d_, f_, q_, s_, E_, I_, T_, U2, BF;
    _.c_ = !1;
    d_ = function(a) {
        try {
            _.c_ && window.console && window.console.log && window.console.log(a)
        } catch (c) {}
    };
    f_ = function(a, c) {
        if (!a) return -1;
        if (a.indexOf) return a.indexOf(c, void 0);
        for (var f = 0, g = a.length; f < g; f++)
            if (a[f] === c) return f;
        return -1
    };
    q_ = function(a, c) {
        function f() {}
        if (!a) throw "Child class cannot be empty.";
        if (!c) throw "Parent class cannot be empty.";
        f.prototype = c.prototype;
        a.prototype = new f;
        a.prototype.constructor = a
    };
    s_ = function(a) {
        return "[object Function]" === Object.prototype.toString.call(a)
    };
    _.A_ = function(a) {
        var c = {};
        if (a)
            for (var f in a) a.hasOwnProperty(f) && (c[f] = a[f]);
        return c
    };
    E_ = function(a) {
        var c = window.location.hash;
        a = new RegExp("[&#]" + a + "=([^&]*)");
        c = (0, window.decodeURIComponent)(c);
        c = a.exec(c);
        return null == c ? "" : c[1].replace(/\+/g, " ")
    };
    I_ = function(a, c, f) {
        if (a.addEventListener) a.addEventListener(c, f, !1);
        else if (a.attachEvent) a.attachEvent("on" + c, f);
        else throw "Add event handler for " + c + " failed.";
    };
    T_ = {
        token: 1,
        id_token: 1
    };
    U2 = function() {
        var a = window.navigator.userAgent.toLowerCase();
        return -1 != a.indexOf("msie") && 8 == (0, window.parseInt)(a.split("msie")[1], 10)
    };
    _.l0 = window.JSON;
    BF = function(a) {
        this.b$ = a || [];
        this.hg = {}
    };
    BF.prototype.addEventListener = function(a, c) {
        if (!(0 <= f_(this.b$, a))) throw "Unrecognized event type: " + a;
        if (!s_(c)) throw "The listener for event '" + a + "' is not a function.";
        this.hg[a] || (this.hg[a] = []);
        0 > f_(this.hg[a], c) && this.hg[a].push(c)
    };
    BF.prototype.removeEventListener = function(a, c) {
        if (!(0 <= f_(this.b$, a))) throw "Unrecognized event type: " + a;
        s_(c) && this.hg[a] && this.hg[a].length && (c = f_(this.hg[a], c), 0 <= c && this.hg[a].splice(c, 1))
    };
    BF.prototype.dispatchEvent = function(a) {
        var c = a.type;
        if (!(c && 0 <= f_(this.b$, c))) throw "Failed to dispatch unrecognized event type: " + c;
        if (this.hg[c] && this.hg[c].length)
            for (var f = 0, g = this.hg[c].length; f < g; f++) this.hg[c][f](a)
    };
    var CF, UZ, QQ, QD, Qu, NU, JX, KJ, LX, np;
    CF = {};
    UZ = {};
    _.VG = {
        google: {
            authServerUrl: "https://accounts.google.com/o/oauth2/auth",
            idpIFrameUrl: "https://accounts.google.com/o/oauth2/iframe"
        }
    };
    _.zI = function(a, c) {
        if (a = _.VG[a]) return a[c]
    };
    QQ = function(a) {
        a.style.position = "absolute";
        a.style.width = "1px";
        a.style.height = "1px";
        a.style.left = "-9999px";
        a.style.top = "-9999px";
        a.style.right = "-9999px";
        a.style.bottom = "-9999px";
        a.style.display = "none";
        a.setAttribute("aria-hidden", "true")
    };
    QD = function() {
        this.Jr = window;
        this.wba = this.u1 = this.B$ = this.h8 = null
    };
    QD.prototype.open = function(a, c, f, g) {
        TD(this);
        this.B$ ? (this.u1 && (this.u1(), this.u1 = null), FF(this)) : this.B$ = "authPopup" + Math.floor(1E6 * Math.random() + 1);
        a: {
            this.h8 = this.Jr.open(a, this.B$, c);
            try {
                if (this.h8.focus(), this.h8.closed || "undefined" == typeof this.h8.closed) throw Error("pa");
            } catch (h) {
                g && (0, window.setTimeout)(g, 0);
                this.h8 = null;
                break a
            }
            f && (this.u1 = f, PF(this))
        }
    };
    var TD = function(a) {
            try {
                if (null == a.h8 || a.h8.closed) a.h8 = null, a.B$ = null, FF(a), a.u1 && (a.u1(), a.u1 = null)
            } catch (c) {
                a.h8 = null, a.B$ = null, FF(a)
            }
        },
        PF = function(a) {
            a.wba = window.setInterval(function() {
                TD(a)
            }, 300)
        },
        FF = function(a) {
            a.wba && (window.clearInterval(a.wba), a.wba = null)
        };
    UZ = UZ || {};
    var t0 = function(a, c) {
        this.Jf = a;
        this.kV = c;
        this.p_ = null;
        this.kU = !1
    };
    t0.prototype.start = function() {
        if (!this.kU && !this.p_) {
            var a = this;
            this.p_ = window.setTimeout(function() {
                a.clear();
                a.kU || (a.Jf(), a.kU = !0)
            }, UZ.nV(this.kV))
        }
    };
    t0.prototype.clear = function() {
        this.p_ && (window.clearTimeout(this.p_), this.p_ = null)
    };
    var M1 = function(a, c) {
        var f = UZ.aV;
        this.WV = UZ.oU;
        this.pV = f;
        this.Jf = a;
        this.kV = c;
        this.p_ = null;
        this.kU = !1;
        var g = this;
        this.sV = function() {
            window.document[g.WV] || (g.clear(), g.start())
        }
    };
    M1.prototype.start = function() {
        if (!this.kU && !this.p_) {
            I_(window.document, this.pV, this.sV);
            var a = this;
            this.p_ = window.setTimeout(function() {
                a.clear();
                a.kU || (a.Jf(), a.kU = !0)
            }, UZ.nV(this.kV))
        }
    };
    M1.prototype.clear = function() {
        var a = this.pV,
            c = this.sV,
            f = window.document;
        if (f.removeEventListener) f.removeEventListener(a, c, !1);
        else if (f.detachEvent) f.detachEvent("on" + a, c);
        else throw "Remove event handler for " + a + " failed.";
        this.p_ && (window.clearTimeout(this.p_), this.p_ = null)
    };
    UZ.oU = null;
    UZ.aV = null;
    UZ.uY = function() {
        var a = window.document;
        "undefined" !== typeof a.hidden ? (UZ.oU = "hidden", UZ.aV = "visibilitychange") : "undefined" !== typeof a.msHidden ? (UZ.oU = "msHidden", UZ.aV = "msvisibilitychange") : "undefined" !== typeof a.webkitHidden && (UZ.oU = "webkitHidden", UZ.aV = "webkitvisibilitychange")
    };
    UZ.uY();
    UZ.VV = function(a, c) {
        return UZ.oU && UZ.aV ? new M1(a, c) : new t0(a, c)
    };
    UZ.nV = function(a) {
        return Math.max(1, a - (new Date).getTime())
    };
    var v0 = function() {
            function a() {
                h[0] = 1732584193;
                h[1] = 4023233417;
                h[2] = 2562383102;
                h[3] = 271733878;
                h[4] = 3285377520;
                w = v = 0
            }

            function c(a) {
                for (var c = n, f = 0; 64 > f; f += 4) c[f / 4] = a[f] << 24 | a[f + 1] << 16 | a[f + 2] << 8 | a[f + 3];
                for (f = 16; 80 > f; f++) a = c[f - 3] ^ c[f - 8] ^ c[f - 14] ^ c[f - 16], c[f] = (a << 1 | a >>> 31) & 4294967295;
                a = h[0];
                var g = h[1],
                    l = h[2],
                    q = h[3],
                    t = h[4];
                for (f = 0; 80 > f; f++) {
                    if (40 > f)
                        if (20 > f) {
                            var v = q ^ g & (l ^ q);
                            var w = 1518500249
                        } else v = g ^ l ^ q, w = 1859775393;
                    else 60 > f ? (v = g & l | q & (g | l), w = 2400959708) : (v = g ^ l ^ q, w = 3395469782);
                    v = ((a << 5 | a >>> 27) & 4294967295) +
                        v + t + w + c[f] & 4294967295;
                    t = q;
                    q = l;
                    l = (g << 30 | g >>> 2) & 4294967295;
                    g = a;
                    a = v
                }
                h[0] = h[0] + a & 4294967295;
                h[1] = h[1] + g & 4294967295;
                h[2] = h[2] + l & 4294967295;
                h[3] = h[3] + q & 4294967295;
                h[4] = h[4] + t & 4294967295
            }

            function f(a, f) {
                if ("string" === typeof a) {
                    a = (0, window.unescape)((0, window.encodeURIComponent)(a));
                    for (var g = [], h = 0, n = a.length; h < n; ++h) g.push(a.charCodeAt(h));
                    a = g
                }
                f || (f = a.length);
                g = 0;
                if (0 == v)
                    for (; g + 64 < f;) c(a.slice(g, g + 64)), g += 64, w += 64;
                for (; g < f;)
                    if (l[v++] = a[g++], w++, 64 == v)
                        for (v = 0, c(l); g + 64 < f;) c(a.slice(g, g + 64)), g += 64, w += 64
            }

            function g() {
                var a = [],
                    g = 8 * w;
                56 > v ? f(q, 56 - v) : f(q, 64 - (v - 56));
                for (var n = 63; 56 <= n; n--) l[n] = g & 255, g >>>= 8;
                c(l);
                for (n = g = 0; 5 > n; n++)
                    for (var t = 24; 0 <= t; t -= 8) a[g++] = h[n] >> t & 255;
                return a
            }
            for (var h = [], l = [], n = [], q = [128], t = 1; 64 > t; ++t) q[t] = 0;
            var v, w;
            a();
            return {
                reset: a,
                update: f,
                digest: g,
                Of: function() {
                    for (var a = g(), c = "", f = 0; f < a.length; f++) c += "0123456789ABCDEF".charAt(Math.floor(a[f] / 16)) + "0123456789ABCDEF".charAt(a[f] % 16);
                    return c
                }
            }
        },
        A0 = window.crypto,
        B0 = !1,
        H0 = 0,
        L0 = 1,
        c1 = 0,
        F1 = "",
        I1 = function(a) {
            a = a || window.event;
            var c =
                a.screenX + a.clientX << 16;
            c += a.screenY + a.clientY;
            c *= (new Date).getTime() % 1E6;
            L0 = L0 * c % c1;
            if (3 == ++H0)
                if (a = window, c = I1, a.removeEventListener) a.removeEventListener("mousemove", c, !1);
                else if (a.detachEvent) a.detachEvent("onmousemove", c);
            else throw Error("la`mousemove");
        },
        L1 = function(a) {
            var c = v0();
            c.update(a);
            return c.Of()
        };
    B0 = !!A0 && "function" == typeof A0.getRandomValues;
    B0 || (c1 = 1E6 * (window.screen.width * window.screen.width + window.screen.height), F1 = L1(window.document.cookie + "|" + window.document.location + "|" + (new Date).getTime() + "|" + Math.random()), I_(window, "mousemove", I1));
    CF = CF || {};
    CF.KS = "ssIFrame_";
    _.MI = function(a, c) {
        this.Rd = a;
        if (!this.Rd) throw Error("Fb");
        a = _.zI(a, "idpIFrameUrl");
        if (!a) throw Error("Gb");
        this.Laa = a;
        if (!c) throw Error("Hb");
        this.y0 = c;
        a = this.Laa;
        c = window.document.createElement("a");
        c.setAttribute("href", a);
        a = [c.protocol, "//", c.hostname];
        "http:" == c.protocol && "" != c.port && "0" != c.port && "80" != c.port ? (a.push(":"), a.push(c.port)) : "https:" == c.protocol && "" != c.port && "0" != c.port && "443" != c.port && (a.push(":"), a.push(c.port));
        this.Maa = a.join("");
        this.Gha = [window.location.protocol, "//", window.location.host].join("");
        this.bka = this.A7 = !1;
        this.eka = null;
        this.S4 = [];
        this.A2 = [];
        this.PU = {};
        this.a2 = void 0
    };
    _.MI.prototype.show = function() {
        var a = this.a2;
        a.style.position = "fixed";
        a.style.width = "100%";
        a.style.height = "100%";
        a.style.left = "0px";
        a.style.top = "0px";
        a.style.right = "0px";
        a.style.bottom = "0px";
        a.style.display = "block";
        a.style.zIndex = "9999999";
        a.style.overflow = "hidden";
        a.setAttribute("aria-hidden", "false")
    };
    _.MI.prototype.Gl = function() {
        QQ(this.a2)
    };
    _.MI.prototype.tS = function(a) {
        if (this.A7) a && a(this);
        else {
            if (!this.a2) {
                var c = CF.KS + this.Rd;
                var f = this.Rd;
                var g = window.location.hostname;
                var h, l = window.document.cookie.match("(^|;) ?G_ENABLED_IDPS=([^;]*)(;|$)");
                l && 2 < l.length && (h = l[2]);
                l = h && 0 <= f_(h.split("|"), f);
                l || (window.document.cookie = "G_ENABLED_IDPS=" + (h ? h + "|" + f : f) + ";domain=." + g + ";expires=Fri, 31 Dec 9999 12:00:00 GMT;path=/");
                f = !l;
                l = this.Laa;
                var n = this.Gha;
                g = this.y0;
                h = window.document.createElement("iframe");
                h.setAttribute("id", c);
                c = "allow-scripts allow-same-origin";
                window.document.requestStorageAccess && s_(window.document.requestStorageAccess) && (c += " allow-storage-access-by-user-activation");
                h.setAttribute("sandbox", c);
                QQ(h);
                h.setAttribute("frame-border", "0");
                c = [l, "#origin=", (0, window.encodeURIComponent)(n)];
                c.push("&rpcToken=");
                c.push((0, window.encodeURIComponent)(g));
                f && c.push("&clearCache=1");
                _.c_ && c.push("&debug=1");
                window.document.body.appendChild(h);
                h.setAttribute("src", c.join(""));
                this.a2 = h
            }
            a && this.S4.push(a)
        }
    };
    _.MI.prototype.vY = function() {
        return this.eka
    };
    Qu = function(a) {
        for (var c = 0; c < a.S4.length; c++) a.S4[c](a);
        a.S4 = []
    };
    _.BX = function(a, c, f, g) {
        if (a.A7) {
            if (a.A7 && a.bka) throw a = "Failed to communicate with IDP IFrame due to unitialization error: " + a.vY(), d_(a), Error(a);
            NU(a, {
                method: c,
                params: f
            }, g)
        } else a.A2.push({
            qf: {
                method: c,
                params: f
            },
            Ga: g
        }), a.tS()
    };
    NU = function(a, c, f) {
        if (f) {
            for (var g = c.id; !g || a.PU[g];) g = (new Date).getMilliseconds() + "-" + (1E6 * Math.random() + 1);
            c.id = g;
            a.PU[g] = f
        }
        c.rpcToken = a.y0;
        a.a2.contentWindow.postMessage(_.l0.stringify(c), a.Maa)
    };
    JX = function(a) {
        if (a && 0 <= a.indexOf("::")) throw Error("Ib");
    };
    _.MI.prototype.LJ = function(a, c, f, g, h, l, n, q) {
        JX(l);
        c = _.A_(c);
        _.BX(this, "getTokenResponse", {
            clientId: a,
            loginHint: f,
            request: c,
            sessionSelector: g,
            forceRefresh: n,
            skipCache: q,
            id: l
        }, h)
    };
    _.MI.prototype.Gt = function(a, c, f, g, h) {
        c = _.A_(c);
        _.BX(this, "listIdpSessions", {
            clientId: a,
            request: c,
            sessionSelector: f,
            forceRefresh: h
        }, g)
    };
    KJ = function(a, c, f) {
        JX(c.identifier);
        _.BX(a, "getSessionSelector", c, f)
    };
    _.jY = function(a, c, f, g, h) {
        JX(c.identifier);
        _.BX(a, "setSessionSelector", {
            domain: c.domain,
            crossSubDomains: c.crossSubDomains,
            policy: c.policy,
            id: c.id,
            hint: g,
            disabled: !!f
        }, h)
    };
    LX = function(a, c, f) {
        _.BX(a, "monitorClient", {
            clientId: c
        }, f)
    };
    _.MI.prototype.Ic = _.b(24);
    _.MI.prototype.Sz = function(a, c) {
        _.BX(this, "showDialog", {
            RY: a
        }, c)
    };
    CF.wS = {};
    CF.ES = function(a) {
        return CF.wS[a]
    };
    CF.tS = function(a, c) {
        var f = CF.ES(a);
        if (!f) {
            f = String;
            if (B0) {
                var g = new window.Uint32Array(1);
                A0.getRandomValues(g);
                g = Number("0." + g[0])
            } else g = L0, g += (0, window.parseInt)(F1.substr(0, 20), 16), F1 = L1(F1), g /= c1 + Math.pow(16, 20);
            f = f(2147483647 * g);
            f = new _.MI(a, f);
            CF.wS[a] = f
        }
        f.tS(c)
    };
    CF.TS = function(a) {
        for (var c in CF.wS) {
            var f = CF.ES(c);
            if (f && f.a2 && f.a2.contentWindow == a.source && f.Maa == a.origin) return f
        }
    };
    CF.Pja = function(a) {
        for (var c in CF.wS) {
            var f = CF.ES(c);
            if (f && f.Maa == a) return f
        }
    };
    CF = CF || {};
    var RX = function() {
        var a = [],
            c;
        for (c in QX) a.push(QX[c]);
        BF.call(this, a);
        this.VY = {};
        d_("EventBus is ready.")
    };
    q_(RX, BF);
    var QX = {
            MS: "sessionSelectorChanged",
            vS: "sessionStateChanged",
            uS: "authResult",
            gY: "displayIFrame"
        },
        gN = function(a) {
            var c = SX;
            a && (c.VY[a] || (c.VY[a] = []))
        },
        UX = function(a, c, f) {
            return c && a.VY[c] && 0 <= f_(a.VY[c], f)
        };
    _.k = RX.prototype;
    _.k.fT = function(a) {
        var c, f = !!a.source && a.source.opener === window;
        if (c = f ? CF.Pja(a.origin) : CF.TS(a)) {
            try {
                var g = _.l0.parse(a.data)
            } catch (h) {
                d_("Bad event, an error happened when parsing data.");
                return
            }
            if (!f) {
                if (!g || !g.rpcToken || g.rpcToken != c.y0) {
                    d_("Bad event, no RPC token.");
                    return
                }
                if (g.id && !g.method) {
                    f = g;
                    if (a = c.PU[f.id]) delete c.PU[f.id], a(f.result, f.error);
                    return
                }
            }
            "fireIdpEvent" != g.method ? d_("Bad IDP event, method unknown.") : (a = g.params) && a.type && this.Kaa[a.type] ? (g = this.Kaa[a.type], f && !g.Oja ? d_("Bad IDP event. Source window cannot be a popup.") :
                g.Us && !g.Us.call(this, c, a) ? d_("Bad IDP event.") : g.Tc.call(this, c, a)) : d_("Bad IDP event.")
        } else d_("Bad event, no corresponding Idp Stub.")
    };
    _.k.iT = function(a, c) {
        return UX(this, a.Rd, c.clientId)
    };
    _.k.hT = function(a, c) {
        c = c.clientId;
        return !c || UX(this, a.Rd, c)
    };
    _.k.RS = function(a, c) {
        return UX(this, a.Rd, c.clientId)
    };
    _.k.cT = function(a) {
        a.A7 = !0;
        Qu(a);
        for (var c = 0; c < a.A2.length; c++) NU(a, a.A2[c].qf, a.A2[c].Ga);
        a.A2 = []
    };
    _.k.gka = function(a, c) {
        c = {
            error: c.error
        };
        a.A7 = !0;
        a.bka = !0;
        a.eka = c;
        a.A2 = [];
        Qu(a)
    };
    _.k.yS = function(a, c) {
        c.originIdp = a.Rd;
        this.dispatchEvent(c)
    };
    var SX = new RX,
        BQ = SX,
        CQ = {};
    CQ.idpReady = {
        Tc: BQ.cT
    };
    CQ.idpError = {
        Tc: BQ.gka
    };
    CQ.sessionStateChanged = {
        Tc: BQ.yS,
        Us: BQ.iT
    };
    CQ.sessionSelectorChanged = {
        Tc: BQ.yS,
        Us: BQ.hT
    };
    CQ.authResult = {
        Tc: BQ.yS,
        Us: BQ.RS,
        Oja: !0
    };
    CQ.displayIFrame = {
        Tc: BQ.yS
    };
    SX.Kaa = CQ || {};
    I_(window, "message", function(a) {
        SX.fT.call(SX, a)
    });
    var j0 = function(a, c) {
        this.Ux = !1;
        if (!a) throw Error("Jb");
        var f = [],
            g;
        for (g in a) f.push(a[g]);
        BF.call(this, f);
        this.Db = [window.location.protocol, "//", window.location.host].join("");
        this.Ix = c.crossSubDomains ? c.domain || this.Db : this.Db;
        if (!c) throw Error("Kb");
        if (!c.idpId) throw Error("Lb");
        if (!_.zI(c.idpId, "authServerUrl") || !_.zI(c.idpId, "idpIFrameUrl")) throw Error("Mb`" + c.idpId);
        this.Rd = c.idpId;
        this.$k = void 0;
        this.iea = !!c.disableTokenRefresh;
        this.ZY = !!c.forceTokenRefresh;
        this.e$ = !!c.skipTokenCache;
        this.setOptions(c);
        this.F_ = [];
        this.RV = this.G7 = !1;
        this.iQ = void 0;
        this.cca();
        this.Rx = void 0;
        var h = this,
            l = function() {
                d_("Token Manager is ready.");
                if (h.F_.length)
                    for (var a = 0; a < h.F_.length; a++) h.F_[a].call(h);
                h.G7 = !0;
                h.F_ = []
            };
        CF.tS(this.Rd, function(a) {
            h.Rx = a;
            a.A7 && a.bka ? (h.RV = !0, h.iQ = a.vY(), h.fka(h.iQ)) : h.$k ? LX(h.Rx, h.$k, function(a) {
                if (a) {
                    a = h.Rd;
                    var c = h.$k,
                        f = SX;
                    a && c && (f.VY[a] || (f.VY[a] = []), 0 > f_(f.VY[a], c) && f.VY[a].push(c));
                    l()
                } else h.iQ = {
                    error: "Not a valid origin for the client: " + h.Db + " has not been whitelisted for client ID " +
                        h.$k + ". Please go to https://console.developers.google.com/ and whitelist this origin for your project's client ID."
                }, h.RV = !0, h.fka(h.iQ)
            }) : (gN(h.Rd), l())
        })
    };
    q_(j0, BF);
    j0.prototype.setOptions = function() {};
    j0.prototype.cca = function() {};
    j0.prototype.fka = function() {};
    j0.prototype.vY = function() {
        return this.iQ
    };
    np = function(a, c, f) {
        return function() {
            c.apply(a, f)
        }
    };
    _.gr = function(a, c, f) {
        if (a.G7) c.apply(a, f);
        else {
            if (a.RV) throw a.iQ;
            a.F_.push(np(a, c, f))
        }
    };
    _.YX = function(a, c) {
        j0.call(this, a, c);
        this.kga = new QD;
        this.S8 = this.ija = null;
        X2(this)
    };
    q_(_.YX, j0);
    _.YX.prototype.setOptions = function() {};
    var MJ = function(a, c) {
            a.Cs = {
                crossSubDomains: !!c.crossSubDomains,
                id: c.sessionSelectorId,
                domain: a.Ix
            };
            c.crossSubDomains && (a.Cs.policy = c.policy)
        },
        TJ = function(a, c) {
            if (!c.authParameters) throw Error("Ja");
            if (!c.authParameters.scope) throw Error("Ka");
            if (!c.authParameters.response_type) throw Error("ma");
            a.bY = c.authParameters;
            a.bY.redirect_uri || (a.bY.redirect_uri = [window.location.protocol, "//", window.location.host, window.location.pathname].join(""));
            a.x0 = _.A_(c.rpcAuthParameters || a.bY);
            if (!a.x0.scope) throw Error("Qa");
            if (!a.x0.response_type) throw Error("mb");
            a: {
                var f = a.x0.response_type.split(" ");
                for (var g = 0, h = f.length; g < h; g++)
                    if (f[g] && !T_[f[g]]) {
                        f = !0;
                        break a
                    } f = !1
            }
            if (f) throw Error("rb");
            c.enableSerialConsent && (a.x0.enable_serial_consent = !0);
            c.authResultIdentifier && (a.Hda = c.authResultIdentifier)
        };
    _.YX.prototype.cca = function() {
        var a = this;
        SX.addEventListener(QX.MS, function(c) {
            a.Ux && a.Cs && c.originIdp == a.Rd && !c.crossSubDomains == !a.Cs.crossSubDomains && c.domain == a.Cs.domain && c.id == a.Cs.id && a.Hba(c)
        });
        SX.addEventListener(QX.vS, function(c) {
            a.Ux && c.originIdp == a.Rd && c.clientId == a.$k && a.Iba(c)
        });
        SX.addEventListener(QX.uS, function(c) {
            a.Ux && c.originIdp == a.Rd && c.clientId == a.$k && c.id == a.X4 && (a.ija && (window.clearTimeout(a.ija), a.ija = null), a.X4 = void 0, a.k8(c))
        });
        SX.addEventListener(QX.gY, function(c) {
            a.Ux &&
                c.originIdp == a.Rd && (c.Gl ? a.Rx.Gl() : a.Rx.show())
        })
    };
    _.YX.prototype.Hba = function() {};
    _.YX.prototype.Iba = function() {};
    _.YX.prototype.k8 = function() {};
    var ZX = function(a, c) {
            A2(a);
            a.iea || (a.S8 = UZ.VV(function() {
                a.LJ(!0)
            }, c - 3E5), window.navigator.onLine && a.S8.start())
        },
        A2 = function(a) {
            a.S8 && (a.S8.clear(), a.S8 = null)
        },
        X2 = function(a) {
            var c = window;
            U2() && (c = window.document.body);
            I_(c, "online", function() {
                a.S8 && a.S8.start()
            });
            I_(c, "offline", function() {
                a.S8 && a.S8.clear()
            })
        };
    _.k = _.YX.prototype;
    _.k.LJ = function() {};
    _.k.Sz = function(a, c) {
        this.Rx.Sz(a, c)
    };
    _.k.oV = _.b(25);
    _.k.cu = function(a, c) {
        if (!this.$k) throw Error("pb");
        this.Rx.Gt(this.$k, this.x0, this.Cs, a, c)
    };
    _.k.Gt = function(a, c) {
        _.gr(this, this.cu, [a, c])
    };
    _.bY = function(a) {
        this.Bp = void 0;
        this.eJ = !1;
        this.E0 = void 0;
        _.YX.call(this, _.aY, a)
    };
    q_(_.bY, _.YX);
    _.aY = {
        LS: "noSessionBound",
        lS: "userLoggedOut",
        IS: "activeSessionChanged",
        vS: "sessionStateChanged",
        QS: "tokenReady",
        PS: "tokenFailed",
        uS: "authResult",
        ERROR: "error"
    };
    _.bY.prototype.setOptions = function(a) {
        if (!a.clientId) throw Error("Nb");
        this.$k = a.clientId;
        this.El = a.id;
        MJ(this, a);
        TJ(this, a)
    };
    _.bY.prototype.fka = function(a) {
        this.dispatchEvent({
            type: _.aY.ERROR,
            error: "idpiframe_initialization_failed",
            details: a.error,
            idpId: this.Rd
        })
    };
    var cY = function(a) {
        A2(a);
        a.E0 = void 0;
        a.Q7 = void 0
    };
    _.k = _.bY.prototype;
    _.k.Hba = function(a) {
        var c = a.newValue || {};
        if (this.Bp != c.hint || this.eJ != !!c.disabled) {
            a = this.Bp;
            var f = !this.Bp || this.eJ;
            cY(this);
            this.Bp = c.hint;
            this.eJ = !!c.disabled;
            (c = !this.Bp || this.eJ) && !f ? this.dispatchEvent({
                type: _.aY.lS,
                idpId: this.Rd
            }) : c || (a != this.Bp && this.dispatchEvent({
                type: _.aY.IS,
                idpId: this.Rd
            }), this.Bp && this.LJ())
        }
    };
    _.k.Iba = function(a) {
        this.eJ || (this.Bp ? a.user || this.E0 ? a.user == this.Bp && (this.E0 ? a.sessionState ? this.E0 = a.sessionState : (cY(this), this.dispatchEvent({
            type: _.aY.lS,
            idpId: this.Rd
        })) : a.sessionState && (this.E0 = a.sessionState, this.LJ())) : this.LJ() : this.dispatchEvent({
            type: _.aY.vS,
            idpId: this.Rd
        }))
    };
    _.k.k8 = function(a) {
        this.dispatchEvent({
            type: _.aY.uS,
            authResult: a.authResult
        })
    };
    _.k.lja = _.b(27);
    _.k.H1 = function(a) {
        _.gr(this, this.a7, [a])
    };
    _.k.a7 = function(a) {
        KJ(this.Rx, this.Cs, a)
    };
    _.k.DS = function(a, c, f) {
        if (!a) throw Error("Ob");
        cY(this);
        this.Bp = a;
        this.eJ = !1;
        c && _.jY(this.Rx, this.Cs, !1, this.Bp);
        this.Ux = !0;
        this.LJ(f)
    };
    _.k.start = function() {
        _.gr(this, this.Bv, [])
    };
    _.k.Bv = function() {
        var a = this.$k == E_("client_id") ? E_("login_hint") : void 0;
        if (a) window.history.replaceState ? window.history.replaceState(null, window.document.title, window.location.href.split("#")[0]) : window.location.href.hash = "", this.DS(a, !0, !0);
        else {
            var c = this;
            this.H1(function(a) {
                c.Ux = !0;
                a && a.hint ? (cY(c), c.Bp = a.hint, c.eJ = !!a.disabled, c.eJ ? c.dispatchEvent({
                    type: _.aY.lS,
                    idpId: c.Rd
                }) : c.DS(a.hint)) : (cY(c), c.Bp = void 0, c.eJ = !(!a || !a.disabled), c.dispatchEvent({
                    type: _.aY.LS,
                    autoOpenAuthUrl: !c.eJ,
                    idpId: c.Rd
                }))
            })
        }
    };
    _.k.Bea = _.b(28);
    _.k.LJ = function(a) {
        var c = this;
        this.Rx.LJ(this.$k, this.x0, this.Bp, this.Cs, function(a, g) {
            (g = g || a.error) ? "user_logged_out" == g ? (cY(c), c.dispatchEvent({
                type: _.aY.lS,
                idpId: c.Rd
            })) : (c.Q7 = null, c.dispatchEvent({
                type: _.aY.PS,
                idpId: c.Rd,
                error: g
            })): (c.Q7 = a, c.E0 = a.session_state, ZX(c, a.expires_at), a.idpId = c.Rd, c.dispatchEvent({
                type: _.aY.QS,
                idpId: c.Rd,
                response: a
            }))
        }, this.El, a)
    };
    _.k.Ic = _.b(23);
    _.k.a9 = _.b(29);
    _.aK = function(a) {
        this.V5 = null;
        _.YX.call(this, {}, a);
        this.Ux = !0
    };
    q_(_.aK, _.YX);
    _.k = _.aK.prototype;
    _.k.setOptions = function(a) {
        if (!a.clientId) throw Error("Nb");
        this.$k = a.clientId;
        this.El = a.id;
        MJ(this, a);
        TJ(this, a)
    };
    _.k.fka = function(a) {
        this.V5 && (this.V5({
            authResult: {
                error: "idpiframe_initialization_failed",
                details: a.error
            }
        }), this.V5 = null)
    };
    _.k.k8 = function(a) {
        if (this.V5) {
            var c = this.V5;
            this.V5 = null;
            c(a)
        }
    };
    _.k.lja = _.b(26);
    _.k.H1 = function(a) {
        this.RV ? a(this.vY()) : _.gr(this, this.a7, [a])
    };
    _.k.a7 = function(a) {
        KJ(this.Rx, this.Cs, a)
    };
    _.OF = function(a, c, f) {
        a.RV ? f(a.vY()) : _.gr(a, a.Yt, [c, f])
    };
    _.aK.prototype.Yt = function(a, c) {
        this.Rx.LJ(this.$k, this.x0, a, this.Cs, function(a, g) {
            g ? c({
                error: g
            }) : c(a)
        }, this.El, this.ZY, this.e$)
    };
    _.aK.prototype.aka = _.b(30);

    var tE = function(a, c, f) {
            if (!a.Ux) throw Error("nb");
            c ? _.jY(a.Rx, a.Cs, !0, void 0, f) : _.jY(a.Rx, a.Cs, !0, a.Bp, f)
        },
        $R = function(a) {
            if (!a.Ux) throw Error("nb");
            return a.Q7
        },
        P1, RQ, Q1, SF, nv, Tz, rl, mO, V_, mY, Ks, N1;
    _.aK.prototype.aka = _.d(30, function(a, c) {
        var f = this.Rx,
            g = this.$k,
            h = this.Cs,
            l = _.A_(this.x0);
        delete l.response_type;
        _.BX(f, "getOnlineCode", {
            clientId: g,
            loginHint: a,
            request: l,
            sessionSelector: h
        }, c)
    });
    _.bY.prototype.a9 = _.d(29, function(a) {
        $R(this) && $R(this).access_token && (this.Rx.Ic(this.$k, $R(this).access_token, a), tE(this, !0))
    });
    _.bY.prototype.Bea = _.d(28, function() {
        var a = this;
        this.H1(function(c) {
            c && c.hint ? c.disabled ? a.dispatchEvent({
                type: _.aY.lS,
                idpId: a.Rd
            }) : a.LJ(!0) : a.dispatchEvent({
                type: _.aY.LS,
                idpId: a.Rd
            })
        })
    });
    _.bY.prototype.lja = _.d(27, function() {
        var a = this;
        return function(c) {
            c && c.authResult && c.authResult.login_hint && a.DS(c.authResult.login_hint, a.eJ || c.authResult.login_hint != a.Bp, !0)
        }
    });
    _.aK.prototype.lja = _.d(26, function(a) {
        var c = this;
        return function(f) {
            f && f.authResult && f.authResult.login_hint ? c.H1(function(g) {
                _.jY(c.Rx, c.Cs, g && g.disabled, f.authResult.login_hint, function() {
                    _.OF(c, f.authResult.login_hint, a)
                })
            }) : a(f && f.authResult && f.authResult.error ? f.authResult : f && f.authResult && !f.authResult.login_hint ? {
                error: "wrong_response_type"
            } : {
                error: "unknown_error"
            })
        }
    });
    _.YX.prototype.oV = _.d(25, function() {
        this.$k && _.BX(this.Rx, "startPolling", {
            clientId: this.$k,
            origin: this.Db,
            id: this.X4
        }, void 0)
    });
    _.MI.prototype.Ic = _.d(24, function(a, c, f) {
        _.BX(this, "revoke", {
            clientId: a,
            token: c
        }, f)
    });
    _.bY.prototype.Ic = _.d(23, function(a) {
        _.gr(this, this.a9, [a])
    });
    P1 = function() {
        var a = window.navigator.userAgent,
            c;
        if (c = !!a && -1 != a.indexOf("CriOS")) c = -1, (a = a.match(/CriOS\/(\d+)/)) && a[1] && (c = (0, window.parseInt)(a[1], 10) || -1), c = 48 > c;
        return c
    };
    RQ = function() {
        var a = window.navigator.userAgent.toLowerCase();
        if (!(-1 < a.indexOf("safari/") && 0 > a.indexOf("chrome/") && 0 > a.indexOf("crios/") && 0 > a.indexOf("android"))) return !1;
        var c = /version\/(\d+)\.(\d+)[\.0-9]*/.exec(window.navigator.userAgent.toLowerCase());
        if (!c || 3 > c.length) return !1;
        a = (0, window.parseInt)(c[1], 10);
        c = (0, window.parseInt)(c[2], 10);
        return 12 < a || 12 == a && 1 <= c
    };
    Q1 = function(a, c, f, g, h, l, n) {
        var q = _.zI(a, "authServerUrl");
        if (!q) throw Error("ka`" + a);
        a = _.A_(g);
        a.response_type = n || "permission";
        a.client_id = f;
        a.ss_domain = c;
        if (l && l.extraQueryParams)
            for (var t in l.extraQueryParams) a[t] = l.extraQueryParams[t];
        h && RQ() && !a.prompt && (a.prompt = "select_account");
        c = q + (0 > q.indexOf("?") ? "?" : "&");
        f = [];
        for (var v in a)
            if (a.hasOwnProperty(v)) {
                h = a[v];
                if (null === h || void 0 === h) h = "";
                f.push((0, window.encodeURIComponent)(v) + "=" + (0, window.encodeURIComponent)(h))
            } return c + f.join("&")
    };
    SF = function(a, c, f, g) {
        if (!a.$k) throw Error("ob");
        a.X4 = f || a.Hda || "auth" + Math.floor(1E6 * Math.random() + 1);
        c = c || {};
        c.extraQueryParams = c.extraQueryParams || {};
        if (!c.extraQueryParams.redirect_uri) {
            var h = a.Db.split("//");
            f = c.extraQueryParams;
            var l = h[0],
                n = l.indexOf(":");
            0 < n && (l = l.substring(0, n));
            h = ["storagerelay://", l, "/", h[1], "?"];
            h.push("id=" + a.X4);
            f.redirect_uri = h.join("")
        }
        return Q1(a.Rd, a.Ix, a.$k, a.bY, !0, c, g)
    };
    nv = function(a, c, f) {
        if (!a.$k) throw Error("ob");
        return Q1(a.Rd, a.Ix, a.$k, a.bY, !1, c, f)
    };
    Tz = function(a, c) {
        a.ija && window.clearTimeout(a.ija);
        a.ija = window.setTimeout(function() {
            a.X4 == c && (a.ija = null, a.X4 = void 0, a.k8({
                authResult: {
                    error: "popup_closed_by_user"
                }
            }))
        }, 1E3)
    };
    rl = function(a, c, f) {
        if (!a.$k) throw Error("Pb");
        f = f || {};
        f = SF(a, f.sessionMeta, f.oneTimeId, f.responseType);
        (Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject || P1()) && _.gr(a, a.oV, []);
        var g = a.X4;
        a.kga.open(f, c, function() {
            a.X4 == g && Tz(a, g)
        }, function() {
            a.X4 = void 0;
            a.k8({
                authResult: {
                    error: "popup_blocked_by_browser"
                }
            })
        })
    };
    mO = function(a) {
        _.gr(a, a.Bea, [])
    };
    V_ = function(a, c, f) {
        a.RV ? f(a.vY()) : _.gr(a, a.aka, [c, f])
    };
    mY = function(a) {
        return Array.prototype.concat.apply([], arguments)
    };
    _.yx = function(a) {
        for (var c = [], f = 0, g = 0; f < a.length;) {
            var h = a[f++];
            if (128 > h) c[g++] = String.fromCharCode(h);
            else if (191 < h && 224 > h) {
                var l = a[f++];
                c[g++] = String.fromCharCode((h & 31) << 6 | l & 63)
            } else if (239 < h && 365 > h) {
                l = a[f++];
                var n = a[f++],
                    q = a[f++];
                h = ((h & 7) << 18 | (l & 63) << 12 | (n & 63) << 6 | q & 63) - 65536;
                c[g++] = String.fromCharCode(55296 + (h >> 10));
                c[g++] = String.fromCharCode(56320 + (h & 1023))
            } else l = a[f++], n = a[f++], c[g++] = String.fromCharCode((h & 15) << 12 | (l & 63) << 6 | n & 63)
        }
        return c.join("")
    };
    _.nw = function(a, c) {
        function f(c) {
            for (; g < a.length;) {
                var f = a.charAt(g++),
                    h = _.ch[f];
                if (null != h) return h;
                if (!_.im(f)) throw Error("Sa`" + f);
            }
            return c
        }
        _.vi();
        for (var g = 0;;) {
            var h = f(-1),
                l = f(0),
                n = f(64),
                q = f(64);
            if (64 === q && -1 === h) break;
            c(h << 2 | l >> 4);
            64 != n && (c(l << 4 & 240 | n >> 2), 64 != q && c(n << 6 & 192 | q))
        }
    };
    Ks = function(a) {
        var c = [];
        _.nw(a, function(a) {
            c.push(a)
        });
        return c
    };
    _.RF = function(a, c) {
        _.Hb[c || "token"] = a
    };
    _.Kb = function(a) {
        delete _.Hb[a || "token"]
    };
    N1 = function() {
        var a = window.crypto || window.msCrypto;
        a && a.getRandomValues && (this.pT = !0, this.bT = window.Infinity);
        if (1 > this.bT) {
            var c = this.pB;
            a = this.bT;
            this.pB = "";
            this.bT = 1;
            a = Math.max(0, a);
            if (!this.pT) {
                c = this.oT + c;
                var f = new _.xb;
                f.update(c);
                c = String.fromCharCode.apply(String, f.digest());
                this.kT += a;
                this.kT >= this.bT ? (f.reset(), f.update("SEED_SALT:" + c + this.pB), this.pB = String.fromCharCode.apply(String, f.digest()), this.oT = "", this.kT = 0) : this.oT = c
            }
        }
    };
    _.k = N1.prototype;
    _.k.pT = !1;
    _.k.pB = "";
    _.k.oT = "";
    _.k.kT = 0;
    _.k.bT = -1;
    var U1 = function(a) {
            var c = S1,
                f = [];
            if (c.pT) a = new window.Uint8Array(Math.min(65536, a || 1)), (window.crypto || window.msCrypto).getRandomValues(a), f = [].slice.call(a);
            else {
                if (0 > c.bT || 0 == c.pB.length) throw new T1;
                var g = new _.xb;
                g.update("RANDOM_SALT:" + c.pB);
                var h = g.digest();
                null !== h && (g.reset(), g.update("SEED_SALT:" + c.pB), c.pB = String.fromCharCode.apply(String, g.digest()), f = h.slice(0, a || h.length))
            }
            return f
        },
        T1 = function() {};
    _.J(T1, Error);
    T1.prototype.name = "Insufficient Entropy";
    _.l0 = {
        parse: function(a) {
            a = _.of("[" + String(a) + "]");
            if (!1 === a || 1 !== a.length) throw new SyntaxError("JSON parsing failed.");
            return a[0]
        },
        stringify: function(a) {
            return _.mf(a)
        }
    };
    _.aK.prototype.S3 = function(a, c) {
        _.gr(this, this.C8, [a, c])
    };
    _.aK.prototype.C8 = function(a, c) {
        this.Rx.S3(this.$k, a, this.x0, this.Cs, c)
    };
    _.MI.prototype.S3 = function(a, c, f, g, h) {
        f = _.A_(f);
        _.BX(this, "gsi:fetchLoginHint", {
            clientId: a,
            loginHint: c,
            request: f,
            sessionSelector: g
        }, h)
    };
    var pF, kZ = ["client_id", "cookie_policy", "scope"],
        GN = "client_id cookie_policy fetch_basic_profile hosted_domain scope openid_realm disable_token_refresh login_hint app_package_name ux_mode redirect_uri state prompt oidc_spec_compliant nonce enable_serial_consent include_granted_scopes response_type session_selection gsiwebsdk".split(" "),
        iw = ["authuser", "after_redirect", "access_type", "hl"],
        EB = ["app_package_name", "login_hint", "prompt"],
        wW = {
            clientid: "client_id",
            cookiepolicy: "cookie_policy"
        },
        UD = "approval_prompt app_package_name authuser login_hint prompt hd".split(" "),
        WF = ["login_hint", "g-oauth-window", "status"],
        nY = Math.min(_.P("oauth-flow/authWindowWidth", 599), window.screen.width - 20),
        oY = Math.min(_.P("oauth-flow/authWindowHeight", 600), window.screen.height - 30);
    var uO = function(a) {
        _.se.call(this, a)
    };
    _.J(uO, _.se);
    uO.prototype.name = "gapi.auth2.ExternallyVisibleError";
    var cm = function() {};
    cm.prototype.select = function(a, c) {
        if (a.sessions && 1 == a.sessions.length && (a = a.sessions[0], a.login_hint)) {
            c(a);
            return
        }
        c()
    };
    var gv = function() {};
    gv.prototype.select = function(a, c) {
        if (a.sessions && a.sessions.length)
            for (var f = 0; f < a.sessions.length; f++) {
                var g = a.sessions[f];
                if (g.login_hint) {
                    c(g);
                    return
                }
            }
        c()
    };
    var KW = function(a) {
        this.Uka = a
    };
    KW.prototype.select = function(a, c) {
        if (a.sessions)
            for (var f = 0; f < a.sessions.length; f++) {
                var g = a.sessions[f];
                if (g.session_state && g.session_state.extraQueryParams && g.session_state.extraQueryParams.authuser == this.Uka) {
                    g.login_hint ? c(g) : c();
                    return
                }
            }
        c()
    };
    var dm = function(a) {
        this.$K = a;
        this.UH = []
    };
    dm.prototype.select = function(a) {
        var c = 0,
            f = this,
            g = function(h) {
                if (h) a(h);
                else {
                    var l = f.UH[c];
                    l ? (c++, f.$K.Gt(function(a) {
                        a ? l.select(a, g) : g()
                    })) : a()
                }
            };
        g()
    };
    var WW = function(a) {
            a = new dm(a);
            a.UH.push(new cm);
            return a
        },
        iv = function(a) {
            a = new dm(a);
            a.UH.push(new gv);
            return a
        },
        lX = function(a, c) {
            void 0 === c || null === c ? c = WW(a) : (a = new dm(a), a.UH.push(new KW(c)), c = a);
            return c
        };
    var mF = function(a) {
        this.Tc = a;
        this.kh = !0
    };
    mF.prototype.remove = function() {
        this.kh = !1
    };
    mF.prototype.trigger = function() {};
    var nF = function(a) {
            this.remove = function() {
                a.remove()
            };
            this.trigger = function() {
                a.trigger()
            }
        },
        sF = function() {
            this.hg = []
        };
    sF.prototype.add = function(a) {
        this.hg.push(a)
    };
    sF.prototype.notify = function(a) {
        for (var c = this.hg, f = [], g = 0; g < c.length; g++) {
            var h = c[g];
            h.kh && (f.push(h), _.qk(pY(h.Tc, a)))
        }
        this.hg = f
    };
    var pY = function(a, c) {
        return function() {
            a(c)
        }
    };
    var xF = function(a) {
        this.Ab = null;
        this.Aia = new vF(this);
        this.hg = new sF;
        void 0 != a && this.set(a)
    };
    xF.prototype.set = function(a) {
        a != this.Ab && (this.Ab = a, this.Aia.value = a, this.hg.notify(this.Ab))
    };
    xF.prototype.get = function() {
        return this.Ab
    };
    xF.prototype.Ei = function(a) {
        a = new yF(this, a);
        this.hg.add(a);
        return a
    };
    var yF = function(a, c) {
        mF.call(this, c);
        this.sga = a
    };
    _.J(yF, mF);
    yF.prototype.trigger = function() {
        var a = this.Tc;
        a(this.sga.get())
    };
    var vF = function(a) {
        this.value = null;
        this.Ei = function(c) {
            return new nF(a.Ei(c))
        }
    };
    var hY = {
            XV: "app_package_name",
            iU: "fetch_basic_profile",
            TT: "login_hint",
            $ja: "prompt",
            Qs: "redirect_uri",
            dU: "scope",
            Hka: "ux_mode"
        },
        iY = function(a) {
            this.zd = {};
            if (a && !_.Og(a))
                if ("function" == typeof a.get) this.zd = a.get();
                else
                    for (var c in hY) {
                        var f = hY[c];
                        f in a && (this.zd[f] = a[f])
                    }
        };
    iY.prototype.get = function() {
        return this.zd
    };
    iY.prototype.yca = function(a) {
        this.zd.scope = a;
        return this
    };
    iY.prototype.P1 = function() {
        return this.zd.scope
    };
    var qF = function(a, c) {
        var f = a.zd.scope;
        c = mY(c.split(" "), f ? f.split(" ") : []);
        _.RE(c);
        a.zd.scope = c.join(" ")
    };
    iY.prototype.Vha = function(a) {
        this.zd.prompt = a;
        return this
    };
    iY.prototype.ifa = function() {
        return this.zd.prompt
    };
    iY.prototype.Pha = function(a) {
        this.zd.app_package_name = a;
        return this
    };
    iY.prototype.Fea = function() {
        return this.zd.app_package_name
    };
    var ol = function() {
            return ["toolbar=no", "location=" + (window.opera ? "no" : "yes"), "directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no", "width=" + nY, "height=" + oY, "top=" + (window.screen.height - oY) / 2, "left=" + (window.screen.width - nY) / 2].join()
        },
        XE = function(a) {
            a = a && a.id_token;
            if (!a || !a.split(".")[1]) return null;
            a = (a.split(".")[1] + "...").replace(/^((....)+).?.?.?$/, "$1");
            return JSON.parse(_.yx(Ks(a)))
        },
        bm = function() {
            pF = _.P("auth2/idpValue", "google");
            var a = _.P("oauth-flow/authUrl", "https://accounts.google.com/o/oauth2/auth"),
                c = _.P("oauth-flow/idpIframeUrl", "https://accounts.google.com/o/oauth2/iframe");
            a = {
                authServerUrl: a,
                idpIFrameUrl: c
            };
            c = pF;
            if (!c) throw Error("da");
            if (!a.authServerUrl) throw Error("ia");
            if (!a.idpIFrameUrl) throw Error("ja");
            _.VG[c] = {
                authServerUrl: a.authServerUrl,
                idpIFrameUrl: a.idpIFrameUrl
            }
        },
        Gw = function(a, c, f) {
            for (var g = 0; g < c.length; g++) {
                var h = c[g];
                if (g === c.length - 1) {
                    a[h] = f;
                    break
                }
                _.Vg(a[h]) || (a[h] = {});
                a = a[h]
            }
        },
        uA = function() {
            var a = window.location.origin;
            a || (a = window.location.protocol + "//" + window.location.host);
            return a
        };
    var WE = function(a) {
        var c = a ? (c = XE(a)) ? c.sub : null : null;
        this.El = c;
        this.Zi = a ? _.rf(a) : null
    };
    _.k = WE.prototype;
    _.k.Hh = function() {
        return this.El
    };
    _.k.eU = function() {
        var a = XE(this.Zi);
        return a ? a.hd : null
    };
    _.k.jz = function() {
        return !!this.Zi
    };
    _.k.DT = function(a) {
        if (a) return this.Zi;
        a = HE;
        var c = _.rf(this.Zi);
        !a.d2 || a.u7 || a.Ofa || (delete c.access_token, delete c.scope);
        return c
    };
    _.k.T8 = function() {
        return HE.T8()
    };
    _.k.BT = function() {
        this.Zi = null
    };
    _.k.Dl = function() {
        return this.Zi ? this.Zi.scope : null
    };
    _.k.update = function(a) {
        this.El = a.El;
        this.Zi = a.Zi;
        this.Zi.id_token ? this.w3 = new PG(this.Zi) : this.w3 && (this.w3 = null)
    };
    var wE = function(a) {
        return a.Zi && "object" == typeof a.Zi.session_state ? _.rf(a.Zi.session_state.extraQueryParams || {}) : {}
    };
    _.k = WE.prototype;
    _.k.fk = function() {
        var a = wE(this);
        return a && void 0 !== a.authuser && null !== a.authuser ? a.authuser : null
    };
    _.k.W2 = function(a) {
        var c = HE,
            f = new iY(a);
        c.u7 = f.P1() ? !0 : !1;
        HE.d2 && qF(f, "openid profile email");
        return new _.C(function(a, h) {
            var g = wE(this);
            g.login_hint = this.Hh();
            g.scope = f.P1();
            qY(c, a, h, g)
        }, this)
    };
    _.k.Q1 = function(a) {
        return new _.C(function(c, f) {
            var g = a || {},
                h = HE;
            g.login_hint = this.Hh();
            h.Q1(g).then(c, f)
        }, this)
    };
    _.k.sY = function(a) {
        return this.W2(a)
    };
    _.k.disconnect = function() {
        return HE.disconnect()
    };
    _.k.rY = function() {
        return this.w3
    };
    _.k.qV = function(a) {
        if (!this.jz()) return !1;
        var c = this.Zi && this.Zi.scope ? this.Zi.scope.split(" ") : "";
        return (0, _.Fe)(a ? a.split(" ") : [], function(a) {
            return _.ve(c, a)
        })
    };
    var PG = function(a) {
        a = XE(a);
        this.Eea = a.sub;
        this.ig = a.name;
        this.ofa = a.given_name;
        this.wea = a.family_name;
        this.Paa = a.picture;
        this.U3 = a.email
    };
    _.k = PG.prototype;
    _.k.Hh = function() {
        return this.Eea
    };
    _.k.getName = function() {
        return this.ig
    };
    _.k.CY = function() {
        return this.ofa
    };
    _.k.BY = function() {
        return this.wea
    };
    _.k.Uea = function() {
        return this.Paa
    };
    _.k.a4 = function() {
        return this.U3
    };
    var Ay = function(a, c, f) {
            this.j8 = c;
            this.Xo = a;
            for (var g in a) a.hasOwnProperty(g) && Qv(this, g);
            if (f && f.length)
                for (a = 0; a < f.length; a++) this[f[a]] = this.j8[f[a]]
        },
        Qv = function(a, c) {
            a[c] = function() {
                return a.Xo[c].apply(a.j8, arguments)
            }
        };
    Ay.prototype.then = function(a, c, f) {
        var g = this;
        return _.Nu().then(function() {
            return EQ(g.j8, a, c, f)
        })
    };
    _.Rp(Ay);
    var Ex;
    Ex = function(a) {
        var c = window.location;
        if (a && "none" != a) return "single_host_origin" == a ? c.protocol + "//" + c.host : a
    };
    _.tY = function(a) {
        if (!a) throw new uO("No cookiePolicy");
        var c = window.location.hostname;
        "single_host_origin" == a && (a = window.location.protocol + "//" + c);
        if ("none" == a) return null;
        var f = /^(https?:\/\/)([0-9.\-_A-Za-z]+)(?::(\d+))?$/.exec(a);
        if (!f) throw new uO("Invalid cookiePolicy");
        a = f[2];
        f = f[1];
        var g = {};
        g.dotValue = a.split(".").length;
        g.isSecure = -1 != f.indexOf("https");
        g.domain = a;
        if (!_.jr(c, "." + a) && !_.jr(c, a)) throw new uO("Invalid cookiePolicy domain");
        return g
    };
    var S1 = new N1,
        V1 = function() {
            try {
                for (var a = [], c = 0; 64 > a.length && 128 > c;) a.push.apply(a, U1(64 - a.length)), c++;
                if (64 > a.length) throw new T1;
                var f = a.slice(0, 64)
            } catch (g) {
                for (f = [], a = 0; 64 > a; a++) f[a] = Math.floor(256 * Math.random())
            }
            return _.aB(f, !0).substring(0, 64)
        };
    var vm = function(a) {
            var c = a || {},
                f = km();
            (0, _.Be)(GN, function(a) {
                "undefined" === typeof c[a] && "undefined" !== typeof f[a] && (c[a] = f[a])
            });
            return c
        },
        km = function() {
            for (var a = {}, c = window.document.getElementsByTagName("meta"), f = 0; f < c.length; ++f)
                if (c[f].name) {
                    var g = c[f].name;
                    if (0 == g.indexOf("google-signin-")) {
                        g = g.substring(14);
                        var h = c[f].content;
                        wW[g] && (g = wW[g]);
                        _.ve(GN, g) && h && (a[g] = "true" == h ? !0 : "false" == h ? !1 : h)
                    }
                } return a
        },
        Xx = function(a) {
            return String(a).replace(/_([a-z])/g, function(a, f) {
                return f.toUpperCase()
            })
        },
        ey = function(a) {
            (0, _.Be)(GN, function(c) {
                var f = Xx(c);
                "undefined" !== typeof a[f] && "undefined" === typeof a[c] && (a[c] = a[f], delete a[f])
            })
        },
        Mm = function(a) {
            a = vm(a);
            ey(a);
            a.cookie_policy || (a.cookie_policy = "single_host_origin");
            var c = GN + iw,
                f;
            for (f in a) 0 > c.indexOf(f) && delete a[f];
            return a
        },
        Nm = function(a, c) {
            if (!a) throw new uO("Empty initial options.");
            for (var f = 0; f < kZ.length; ++f)
                if (!(c && "scope" == kZ[f] || a[kZ[f]])) throw new uO("Missing required parameter '" + kZ[f] + "'");
            _.tY(a.cookie_policy)
        },
        Om = function(a) {
            var c = {
                authParameters: {
                    redirect_uri: void 0,
                    response_type: "token id_token",
                    scope: a.scope,
                    "openid.realm": a.openid_realm
                },
                clientId: a.client_id,
                crossSubDomains: !0,
                domain: Ex(a.cookie_policy),
                disableTokenRefresh: !!a.disable_token_refresh,
                idpId: pF
            };
            (0, _.Be)(EB, function(f) {
                a[f] && (c.authParameters[f] = a[f])
            });
            "boolean" == typeof a.enable_serial_consent && (c.enableSerialConsent = a.enable_serial_consent);
            return c
        },
        gz = function(a) {
            var c = a.client_id,
                f = a.cookie_policy,
                g = a.scope,
                h = a.openid_realm,
                l = a.hosted_domain,
                n = a.oidc_spec_compliant,
                q = a.nonce,
                t = my(a),
                v = {
                    authParameters: {
                        response_type: t,
                        scope: g,
                        "openid.realm": h
                    },
                    rpcAuthParameters: {
                        response_type: t,
                        scope: g,
                        "openid.realm": h
                    },
                    clientId: c,
                    crossSubDomains: !0,
                    domain: Ex(f),
                    idpId: pF
                };
            l && (v.authParameters.hd = l, v.rpcAuthParameters.hd = l);
            n && (v.rpcAuthParameters.spec_compliant = n, q = q || V1());
            q && (v.authParameters.nonce = q, v.rpcAuthParameters.nonce = q, v.forceTokenRefresh = !0, v.skipTokenCache = !0);
            (0, _.Be)(EB.concat(iw), function(c) {
                a[c] && (v.authParameters[c] = a[c])
            });
            void 0 !== a.authuser && null !== a.authuser &&
                (v.authParameters.authuser = a.authuser);
            "boolean" == typeof a.include_granted_scopes && (c = new Tm(a.response_type || "token"), Cs(c) && (v.authParameters.include_granted_scopes = a.include_granted_scopes), Ey(c) && (v.rpcAuthParameters.include_granted_scopes = a.include_granted_scopes, !1 === a.include_granted_scopes && (v.forceTokenRefresh = !0, v.skipTokenCache = !0)));
            "boolean" == typeof a.enable_serial_consent && (v.enableSerialConsent = a.enable_serial_consent);
            return v
        },
        my = function(a) {
            a = new Tm(a.response_type || "token");
            var c = [];
            Ey(a) && c.push("token");
            kn(a, "id_token") && c.push("id_token");
            0 == c.length && (c = ["token", "id_token"]);
            return c.join(" ")
        },
        ym = ["permission", "id_token"],
        zm = /(^|[^_])token/,
        Tm = function(a) {
            this.E2 = [];
            this.uja(a)
        };
    Tm.prototype.uja = function(a) {
        a ? ((0 <= a.indexOf("permission") || a.match(zm)) && this.E2.push("permission"), 0 <= a.indexOf("id_token") && this.E2.push("id_token"), 0 <= a.indexOf("code") && this.E2.push("code")) : this.E2 = ym
    };
    var Cs = function(a) {
            return kn(a, "code")
        },
        Ey = function(a) {
            return kn(a, "permission")
        };
    Tm.prototype.toString = function() {
        return this.E2.join(" ")
    };
    var kn = function(a, c) {
        var f = !1;
        (0, _.Be)(a.E2, function(a) {
            a == c && (f = !0)
        });
        return f
    };
    var HE, FQ, jF, IF, kF, EQ;
    HE = null;
    _.GQ = function() {
        return HE ? FQ() : null
    };
    FQ = function() {
        return new Ay(jF.prototype, HE, ["currentUser", "isSignedIn"])
    };
    jF = function(a) {
        delete a.include_granted_scopes;
        this.zd = Om(a);
        this.aea = a.cookie_policy;
        this.Ofa = !!a.scope;
        (this.d2 = !1 !== a.fetch_basic_profile) && (this.zd.authParameters.scope = pZ(this, "openid profile email"));
        this.Z1 = a.hosted_domain;
        this.Gka = a.ux_mode || "popup";
        this.Sia = a.redirect_uri || null;
        IF(this)
    };
    IF = function(a) {
        a.currentUser = new xF(new WE(null));
        a.isSignedIn = new xF(!1);
        a.$K = new _.bY(a.zd);
        a.z4 = null;
        a.cka = null;
        a.lga = new _.C(function(a, f) {
            this.z4 = a;
            this.cka = f
        }, a);
        a.R4 = {};
        a.GS = !0;
        kF(a);
        a.$K.start()
    };
    kF = function(a) {
        a.$K.addEventListener("error", function(c) {
            a.GS && a.z4 && (a.GS = !1, a.cka({
                error: c.error,
                details: c.details
            }), a.z4 = null, a.cka = null)
        });
        a.$K.addEventListener("authResult", function(c) {
            c && c.authResult && a.xx(c);
            a.$K.lja()(c)
        });
        a.$K.addEventListener("tokenReady", function(c) {
            var f = new WE(c.response);
            if (a.Z1 && a.Z1 != f.eU()) a.xx({
                type: "tokenFailed",
                reason: "Account domain does not match hosted_domain specified by gapi.auth2.init.",
                accountDomain: f.eU(),
                expectedDomain: a.Z1
            });
            else {
                a.currentUser.get().update(f);
                var g = a.currentUser;
                g.hg.notify(g.Ab);
                a.isSignedIn.set(!0);
                f = f.fk();
                (g = _.tY(a.aea)) && f && _.hp.set(["G_AUTHUSER_", "https:" === window.location.protocol && g.Gb ? "S" : "H", g.Ke].join(""), f, void 0, void 0, g.domain, g.isSecure);
                _.RF(c.response);
                a.xx(c)
            }
        });
        a.$K.addEventListener("noSessionBound", function(c) {
            a.GS && c.autoOpenAuthUrl ? (a.GS = !1, WW(a.$K).select(function(f) {
                if (f && f.login_hint) {
                    var g = a.$K;
                    _.gr(g, g.DS, [f.login_hint, !0])
                } else a.currentUser.set(new WE(null)), a.isSignedIn.set(!1), _.Kb(), a.xx(c)
            })) : (a.currentUser.set(new WE(null)),
                a.isSignedIn.set(!1), _.Kb(), a.xx(c))
        });
        a.$K.addEventListener("tokenFailed", function(c) {
            a.xx(c)
        });
        a.$K.addEventListener("userLoggedOut", function(c) {
            a.currentUser.get().BT();
            var f = a.currentUser;
            f.hg.notify(f.Ab);
            a.isSignedIn.set(!1);
            _.Kb();
            a.xx(c)
        })
    };
    EQ = function(a, c, f, g) {
        return a.lga.then(function(a) {
            if (c) return c(a.DY)
        }, f, g)
    };
    jF.prototype.xx = function(a) {
        if (a) {
            this.GS = !1;
            var c = a.type || "";
            if (this.R4[c]) this.R4[c](a);
            this.z4 && (this.z4({
                DY: this
            }), this.cka = this.z4 = null)
        }
    };
    var vP = function(a, c) {
            _.qf(c, function(c, g) {
                a.R4[g] = function(f) {
                    a.R4 = {};
                    c(f)
                }
            })
        },
        qY = function(a, c, f, g) {
            g = _.rf(g);
            a.Z1 && (g.hd = a.Z1);
            var h = g.ux_mode || a.Gka;
            delete g.ux_mode;
            var l = {
                sessionMeta: {
                    extraQueryParams: g
                },
                responseType: "permission id_token"
            };
            "redirect" == h ? (g.redirect_uri || (g.redirect_uri = a.Sia || uA() + window.location.pathname), xA(a, l)) : (delete g.redirect_uri, pP(a, l), vP(a, {
                authResult: function(g) {
                    g.authResult && g.authResult.error ? f(g.authResult) : vP(a, {
                        tokenReady: function() {
                            c(a.currentUser.get())
                        },
                        tokenFailed: f
                    })
                }
            }))
        };
    jF.prototype.W2 = function(a) {
        return new _.C(function(c, f) {
            var g = new iY(a);
            this.u7 = g.P1() ? !0 : !1;
            this.d2 ? (g.zd.fetch_basic_profile = !0, qF(g, "email profile openid")) : g.zd.fetch_basic_profile = !1;
            var h = pZ(this, g.P1());
            g.yca(h);
            qY(this, c, f, g.get())
        }, this)
    };
    jF.prototype.Q1 = function(a) {
        var c = a || {};
        this.u7 = !!c.scope;
        a = pZ(this, c.scope);
        if ("" == a) return _.$H({
            error: "Missing required parameter: scope"
        });
        var f = {
            scope: a,
            access_type: "offline",
            include_granted_scopes: !0
        };
        (0, _.Be)(UD, function(a) {
            null != c[a] && (f[a] = c[a])
        });
        f.hasOwnProperty("prompt") || f.hasOwnProperty("approval_prompt") || (f.prompt = "consent");
        return "postmessage" == c.redirect_uri || void 0 == c.redirect_uri ? OZ(this, f) : RZ(this, f, c.redirect_uri)
    };
    var RZ = function(a, c, f) {
            c.redirect_uri = f;
            xA(a, {
                sessionMeta: {
                    extraQueryParams: c
                },
                responseType: "code id_token"
            });
            return _.Nu({
                message: "Redirecting to IDP."
            })
        },
        OZ = function(a, c) {
            c.origin = uA();
            delete c.redirect_uri;
            pP(a, {
                sessionMeta: {
                    extraQueryParams: c
                },
                responseType: "code permission id_token"
            });
            return new _.C(function(a, c) {
                vP(this, {
                    authResult: function(f) {
                        (f = f && f.authResult) && f.code ? a({
                            code: f.code
                        }) : c(f && f.error ? f : {
                            error: "unknown_error"
                        })
                    }
                })
            }, a)
        },
        pP = function(a, c) {
            Gw(c, ["sessionMeta", "extraQueryParams", "gsiwebsdk"],
                "2");
            rl(a.$K, ol(), c)
        },
        xA = function(a, c) {
            Gw(c, ["sessionMeta", "extraQueryParams", "gsiwebsdk"], "2");
            c = c || {};
            window.location.assign(nv(a.$K, c.sessionMeta, c.responseType))
        };
    jF.prototype.BT = function(a) {
        var c = a || !1;
        return new _.C(function(a) {
            tE(this.$K, c, function() {
                a()
            })
        }, this)
    };
    jF.prototype.g7 = function() {
        return this.zd.authParameters.scope
    };
    var pZ = function(a, c) {
        a = a.g7();
        c = mY(c ? c.split(" ") : [], a ? a.split(" ") : []);
        _.RE(c);
        return c.join(" ")
    };
    jF.prototype.T8 = function() {
        var a = this;
        return new _.C(function(c, f) {
            vP(a, {
                noSessionBound: f,
                tokenFailed: f,
                userLoggedOut: f,
                tokenReady: function(a) {
                    c(a.response)
                }
            });
            mO(a.$K)
        })
    };
    jF.prototype.Fda = function(a, c, f, g) {
        if (a = _.fa(a) ? window.document.getElementById(a) : a) {
            var h = this;
            _.ph(a, "click", function() {
                var a = c;
                "function" == typeof c && (a = c());
                h.W2(a).then(function(a) {
                    f && f(a)
                }, function(a) {
                    g && g(a)
                })
            })
        } else g && g({
            error: "Could not attach click handler to the element. Reason: element not found."
        })
    };
    jF.prototype.disconnect = function() {
        return new _.C(function(a) {
            this.$K.Ic(function() {
                a()
            })
        }, this)
    };
    var xY;
    _.C.prototype["catch"] = _.C.prototype.r9;
    xY = null;
    _.hN = function(a) {
        a = Mm(a);
        if (HE) {
            if (_.yY(a, xY || {})) return FQ();
            throw new uO("gapi.auth2 has been initialized with different options. Consider calling gapi.auth2.getAuthInstance() instead of gapi.auth2.init().");
        }
        Nm(a, !1 !== a.fetch_basic_profile);
        bm();
        xY = a;
        HE = new jF(a);
        _.bb.ga = 1;
        return FQ()
    };
    var ZF, An, Bn, uw, zn, kH;
    _.jH = function(a, c) {
        bm();
        a = Mm(a);
        Nm(a);
        var f = gz(a),
            g = new _.aK(f);
        "none" == a.prompt ? Bn(g, a, function(a) {
            a.status = a.error ? {
                signed_in: !1,
                method: null,
                google_logged_in: !1
            } : {
                signed_in: !0,
                method: "AUTO",
                google_logged_in: !0
            };
            c(a)
        }) : ZF(g, a, function(a) {
            if (a.error) a.status = {
                signed_in: !1,
                method: null,
                google_logged_in: !1
            };
            else {
                var f = a.access_token || a.id_token;
                a.status = {
                    signed_in: !!f,
                    method: "PROMPT",
                    google_logged_in: !!f
                }
            }
            a["g-oauth-window"] = g.kga.h8;
            c(a)
        })
    };
    ZF = function(a, c, f) {
        var g = new Tm(c.response_type);
        f = An(a, g, f);
        var h = {
            responseType: g.toString()
        };
        Gw(h, ["sessionMeta", "extraQueryParams", "gsiwebsdk"], c.gsiwebsdk || "2");
        Cs(g) && Gw(h, ["sessionMeta", "extraQueryParams", "access_type"], c.access_type || "offline");
        c.redirect_uri && Gw(h, ["sessionMeta", "extraQueryParams", "redirect_uri"], c.redirect_uri);
        c.state && Gw(h, ["sessionMeta", "extraQueryParams", "state"], c.state);
        c = ol();
        a.RV ? f({
            authResult: {
                error: "idpiframe_initialization_failed",
                details: a.vY().error
            }
        }) : (a.V5 =
            f, rl(a, c, h))
    };
    An = function(a, c, f) {
        if (Ey(c)) {
            var g = zn(f);
            return function(f) {
                f && f.authResult && !f.authResult.error ? a.lja(function(a) {
                    a && !a.error ? (a = _.rf(a), Cs(c) && (a.code = f.authResult.code), g(a)) : g(a ? a : {
                        error: "unknown_error"
                    })
                })(f) : g(f && f.authResult ? f.authResult : {
                    error: "unknown_error"
                })
            }
        }
        return function(a) {
            a && a.authResult && !a.authResult.error ? f(_.rf(a.authResult)) : f(a && a.authResult ? a.authResult : {
                error: "unknown_error"
            })
        }
    };
    Bn = function(a, c, f) {
        if (Cs(new Tm(c.response_type)) && "offline" == c.access_type) f({
            error: "immediate_failed",
            error_subtype: "access_denied"
        });
        else {
            var g = zn(f);
            c.login_hint ? a.S3(c.login_hint, function(h) {
                h ? uw(a, c, h, g) : f({
                    error: "immediate_failed",
                    error_subtype: "access_denied"
                })
            }) : void 0 !== c.authuser && null !== c.authuser ? lX(a, c.authuser).select(function(f) {
                f && f.login_hint ? uw(a, c, f.login_hint, g) : g({
                    error: "immediate_failed",
                    error_subtype: "access_denied"
                })
            }) : a.H1(function(f) {
                f && f.hint ? uw(a, c, f.hint, g) : f && f.disabled ?
                    g({
                        error: "immediate_failed",
                        error_subtype: "no_user_bound"
                    }) : ("first_valid" == c.session_selection ? iv(a) : WW(a)).select(function(f) {
                        f && f.login_hint ? uw(a, c, f.login_hint, g) : g({
                            error: "immediate_failed",
                            error_subtype: "no_user_bound"
                        })
                    })
            })
        }
    };
    uw = function(a, c, f, g) {
        c = new Tm(c.response_type);
        var h = 0,
            l = {},
            n = function(a) {
                !a || a.error ? g(a) : (h--, _.sf(l, a), 0 == h && g(l))
            };
        (Ey(c) || kn(c, "id_token")) && h++;
        Cs(c) && h++;
        (Ey(c) || kn(c, "id_token")) && _.OF(a, f, n);
        Cs(c) && V_(a, f, n)
    };
    zn = function(a) {
        return function(c) {
            if (!c || c.error) _.Kb(), c ? a(c) : a({
                error: "unknown_error"
            });
            else {
                if (c.access_token) {
                    var f = _.rf(c);
                    kH(f);
                    delete f.id_token;
                    delete f.code;
                    _.RF(f)
                }
                a(c)
            }
        }
    };
    kH = function(a) {
        (0, _.Be)(WF, function(c) {
            delete a[c]
        })
    };
    _.Mu("gapi.auth2.init", _.hN);
    _.Mu("gapi.auth2.authorize", function(a, c) {
        if (null != HE) throw new uO("gapi.auth2.authorize cannot be called after GoogleAuth has been initialized (i.e. with a call to gapi.auth2.init, or gapi.client.init when given a 'clientId' and a 'scope' parameters).");
        _.jH(a, function(a) {
            kH(a);
            c(a)
        })
    });
    _.Mu("gapi.auth2._gt", function() {
        return _.au()
    });
    _.Mu("gapi.auth2.enableDebugLogs", function(a) {
        a = !1 !== a;
        _.c_ = "0" != a && !!a
    });
    _.Mu("gapi.auth2.getAuthInstance", _.GQ);
    _.Mu("gapi.auth2.BasicProfile", PG);
    _.Mu("gapi.auth2.BasicProfile.prototype.getId", PG.prototype.Hh);
    _.Mu("gapi.auth2.BasicProfile.prototype.getName", PG.prototype.getName);
    _.Mu("gapi.auth2.BasicProfile.prototype.getGivenName", PG.prototype.CY);
    _.Mu("gapi.auth2.BasicProfile.prototype.getFamilyName", PG.prototype.BY);
    _.Mu("gapi.auth2.BasicProfile.prototype.getImageUrl", PG.prototype.Uea);
    _.Mu("gapi.auth2.BasicProfile.prototype.getEmail", PG.prototype.a4);
    _.Mu("gapi.auth2.GoogleAuth", jF);
    _.Mu("gapi.auth2.GoogleAuth.prototype.attachClickHandler", jF.prototype.Fda);
    _.Mu("gapi.auth2.GoogleAuth.prototype.disconnect", jF.prototype.disconnect);
    _.Mu("gapi.auth2.GoogleAuth.prototype.grantOfflineAccess", jF.prototype.Q1);
    _.Mu("gapi.auth2.GoogleAuth.prototype.signIn", jF.prototype.W2);
    _.Mu("gapi.auth2.GoogleAuth.prototype.signOut", jF.prototype.BT);
    _.Mu("gapi.auth2.GoogleAuth.prototype.getInitialScopes", jF.prototype.g7);
    _.Mu("gapi.auth2.GoogleUser", WE);
    _.Mu("gapi.auth2.GoogleUser.prototype.grant", WE.prototype.sY);
    _.Mu("gapi.auth2.GoogleUser.prototype.getId", WE.prototype.Hh);
    _.Mu("gapi.auth2.GoogleUser.prototype.isSignedIn", WE.prototype.jz);
    _.Mu("gapi.auth2.GoogleUser.prototype.getAuthResponse", WE.prototype.DT);
    _.Mu("gapi.auth2.GoogleUser.prototype.getBasicProfile", WE.prototype.rY);
    _.Mu("gapi.auth2.GoogleUser.prototype.getGrantedScopes", WE.prototype.Dl);
    _.Mu("gapi.auth2.GoogleUser.prototype.getHostedDomain", WE.prototype.eU);
    _.Mu("gapi.auth2.GoogleUser.prototype.grantOfflineAccess", WE.prototype.Q1);
    _.Mu("gapi.auth2.GoogleUser.prototype.hasGrantedScopes", WE.prototype.qV);
    _.Mu("gapi.auth2.GoogleUser.prototype.reloadAuthResponse", WE.prototype.T8);
    _.Mu("gapi.auth2.LiveValue", xF);
    _.Mu("gapi.auth2.LiveValue.prototype.listen", xF.prototype.Ei);
    _.Mu("gapi.auth2.LiveValue.prototype.get", xF.prototype.get);
    _.Mu("gapi.auth2.SigninOptionsBuilder", iY);
    _.Mu("gapi.auth2.SigninOptionsBuilder.prototype.getAppPackageName", iY.prototype.Fea);
    _.Mu("gapi.auth2.SigninOptionsBuilder.prototype.setAppPackageName", iY.prototype.Pha);
    _.Mu("gapi.auth2.SigninOptionsBuilder.prototype.getScope", iY.prototype.P1);
    _.Mu("gapi.auth2.SigninOptionsBuilder.prototype.setScope", iY.prototype.yca);
    _.Mu("gapi.auth2.SigninOptionsBuilder.prototype.getPrompt", iY.prototype.ifa);
    _.Mu("gapi.auth2.SigninOptionsBuilder.prototype.setPrompt", iY.prototype.Vha);
    _.Mu("gapi.auth2.SigninOptionsBuilder.prototype.get", iY.prototype.get);

    var jz = function() {
            this.h3 = {
                RE: Dl ? "../" + Dl : null,
                zp: Jz,
                kq: nz,
                GP: Qz,
                $f: oz,
                $P: Bz
            };
            this.uu = _.ta;
            this.Vba = this.gea;
            this.Aea = /MSIE\s*[0-8](\D|$)/.test(window.navigator.userAgent);
            if (this.h3.RE) {
                this.uu = this.h3.kq(this.uu, this.h3.RE);
                var a = this.uu.document,
                    c = a.createElement("script");
                c.setAttribute("type", "text/javascript");
                c.text = "window.doPostMsg=function(w,s,o) {window.setTimeout(function(){w.postMessage(s,o);},0);};";
                a.body.appendChild(c);
                this.Vba = this.uu.doPostMsg
            }
            this.E9 = {};
            this.T9 = {};
            a = (0, _.H)(this.p7,
                this);
            _.La(this.uu, "message", a);
            _.Ka(_.bb, "RPMQ", []).push(a);
            this.uu != this.uu.parent && CC(this, this.uu.parent, '{"h":"' + (0, window.escape)(this.uu.name) + '"}', "*")
        },
        qn = function(a) {
            var c = null;
            0 === a.indexOf('{"h":"') && a.indexOf('"}') === a.length - 2 && (c = (0, window.unescape)(a.substring(6, a.length - 2)));
            return c
        },
        kz = function(a) {
            if (!/^\s*{/.test(a)) return !1;
            a = _.of(a);
            return null !== a && "object" === typeof a && !!a.g
        };
    jz.prototype.p7 = function(a) {
        var c = String(a.data);
        (0, _.ke)("gapi.rpc.receive(" + Qz + "): " + (!c || 512 >= c.length ? c : c.substr(0, 512) + "... (" + c.length + " bytes)"));
        var f = 0 !== c.indexOf("!_");
        f || (c = c.substring(2));
        var g = kz(c);
        if (!f && !g) {
            if (!g && (f = qn(c))) {
                if (this.E9[f]) this.E9[f]();
                else this.T9[f] = 1;
                return
            }
            var h = a.origin,
                l = this.h3.zp;
            this.Aea ? _.ta.setTimeout(function() {
                l(c, h)
            }, 0) : l(c, h)
        }
    };
    jz.prototype.sf = function(a, c) {
        ".." === a || this.T9[a] ? (c(), delete this.T9[a]) : this.E9[a] = c
    };
    var CC = function(a, c, f, g) {
        var h = kz(f) ? "" : "!_";
        (0, _.ke)("gapi.rpc.send(" + Qz + "): " + (!f || 512 >= f.length ? f : f.substr(0, 512) + "... (" + f.length + " bytes)"));
        a.Vba(c, h + f, g)
    };
    jz.prototype.gea = function(a, c, f) {
        a.postMessage(c, f)
    };
    jz.prototype.send = function(a, c, f) {
        (a = this.h3.kq(this.uu, a)) && !a.closed && CC(this, a, c, f)
    };
    var Rz, Hz, pz, uz, Nz, Sz, Pz, Oz, Dl, Qz, Cz, Ez, mz, Gz, nz, oz, qz, rz, yz, xz, zz, Bz, Dz, Fz, tz, vz, Iz, Jz, Kz, Lz;
    Rz = 0;
    Hz = [];
    pz = {};
    uz = {};
    Nz = _.R.Qc;
    Sz = Nz();
    Pz = Sz.rpctoken;
    Oz = Sz.parent || _.ua.referrer;
    Dl = Sz.rly;
    Qz = Dl || (_.ta !== _.ta.top || _.ta.opener) && _.ta.name || "..";
    Cz = null;
    Ez = {};
    mz = function() {};
    Gz = {
        send: mz,
        sf: mz
    };
    nz = function(a, c) {
        "/" == c.charAt(0) && (c = c.substring(1), a = _.ta.top);
        for (c = c.split("/"); c.length;) {
            var f = c.shift();
            "{" == f.charAt(0) && "}" == f.charAt(f.length - 1) && (f = f.substring(1, f.length - 1));
            if (".." === f) a = a == a.parent ? a.opener : a.parent;
            else if (".." !== f && a.frames[f]) {
                if (a = a.frames[f], !("postMessage" in a)) throw "Not a window";
            } else return null
        }
        return a
    };
    oz = function(a) {
        return (a = pz[a]) && a.ve
    };
    qz = function(a) {
        if (a.f in {}) return !1;
        var c = a.t,
            f = pz[a.r];
        a = a.origin;
        return f && (f.ve === c || !f.ve && !c) && (a === f.origin || "*" === f.origin)
    };
    rz = function(a) {
        var c = a.id.split("/"),
            f = c[c.length - 1],
            g = a.origin;
        return function(a) {
            var c = a.origin;
            return a.f == f && (g == c || "*" == g)
        }
    };
    _.sz = function(a, c, f) {
        a = tz(a);
        uz[a.name] = {
            Ip: c,
            lf: a.lf,
            Us: f || qz
        };
        vz()
    };
    _.wz = function(a) {
        delete uz[tz(a).name]
    };
    yz = {};
    xz = function(a, c) {
        (a = yz["_" + a]) && a[1](this) && a[0].call(this, c)
    };
    zz = function(a) {
        var c = a.c;
        if (!c) return mz;
        var f = a.r,
            g = a.g ? "legacy__" : "";
        return function() {
            var a = [].slice.call(arguments, 0);
            a.unshift(f, g + "__cb", null, c);
            _.Az.apply(null, a)
        }
    };
    Bz = function(a) {
        Cz = a
    };
    Dz = function(a) {
        Ez[a] || (Ez[a] = _.ta.setTimeout(function() {
            Ez[a] = !1;
            Fz(a)
        }, 0))
    };
    Fz = function(a) {
        var c = pz[a];
        if (c && c.ready) {
            var f = c.kj;
            for (c.kj = []; f.length;) Gz.send(a, _.mf(f.shift()), c.origin)
        }
    };
    tz = function(a) {
        return 0 === a.indexOf("legacy__") ? {
            name: a.substring(8),
            lf: !0
        } : {
            name: a,
            lf: !1
        }
    };
    vz = function() {
        for (var a = _.P("rpc/residenceSec") || 60, c = (new Date).getTime() / 1E3, f = 0, g; g = Hz[f]; ++f) {
            var h = g.qf;
            if (!h || 0 < a && c - g.timestamp > a) Hz.splice(f, 1), --f;
            else {
                var l = h.s,
                    n = uz[l] || uz["*"];
                if (n)
                    if (Hz.splice(f, 1), --f, h.origin = g.origin, g = zz(h), h.callback = g, n.Us(h)) {
                        if ("__cb" !== l && !!n.lf != !!h.g) break;
                        h = n.Ip.apply(h, h.a);
                        void 0 !== h && g(h)
                    } else(0, _.ke)("gapi.rpc.rejected(" + Qz + "): " + l)
            }
        }
    };
    Iz = function(a, c, f) {
        Hz.push({
            qf: a,
            origin: c,
            timestamp: (new Date).getTime() / 1E3
        });
        f || vz()
    };
    Jz = function(a, c) {
        a = _.of(a);
        Iz(a, c, !1)
    };
    Kz = function(a) {
        for (; a.length;) Iz(a.shift(), this.origin, !0);
        vz()
    };
    Lz = function(a) {
        var c = !1;
        a = a.split("|");
        var f = a[0];
        0 <= f.indexOf("/") && (c = !0);
        return {
            id: f,
            origin: a[1] || "*",
            Ki: c
        }
    };
    _.Mz = function(a, c, f, g) {
        var h = Lz(a);
        g && (_.ta.frames[h.id] = _.ta.frames[h.id] || g);
        a = h.id;
        if (!pz.hasOwnProperty(a)) {
            f = f || null;
            g = h.origin;
            if (".." === a) g = _.Rb.Pq(Oz), f = f || Pz;
            else if (!h.Ki) {
                var l = _.ua.getElementById(a);
                l && (l = l.src, g = _.Rb.Pq(l), f = f || Nz(l).rpctoken)
            }
            "*" === h.origin && g || (g = h.origin);
            pz[a] = {
                ve: f,
                kj: [],
                origin: g,
                hs: c,
                xm: function() {
                    var c = a;
                    pz[c].ready = 1;
                    Fz(c)
                }
            };
            Gz.sf(a, pz[a].xm)
        }
        return pz[a].xm
    };
    _.Az = function(a, c, f, g) {
        a = a || "..";
        _.Mz(a);
        a = a.split("|", 1)[0];
        var h = c,
            l = [].slice.call(arguments, 3),
            n = f,
            q = Qz,
            t = Pz,
            v = pz[a],
            w = q,
            A = Lz(a);
        if (v && ".." !== a) {
            if (A.Ki) {
                if (!(t = pz[a].hs)) {
                    t = Cz ? Cz.substring(1).split("/") : [Qz];
                    w = t.length - 1;
                    for (var F = _.ta.parent; F !== _.ta.top;) {
                        var z = F.parent;
                        if (!w--) {
                            for (var I = null, E = z.frames.length, K = 0; K < E; ++K) z.frames[K] == F && (I = K);
                            t.unshift("{" + I + "}")
                        }
                        F = z
                    }
                    t = "/" + t.join("/")
                }
                w = t
            } else w = q = "..";
            t = v.ve
        }
        n && A ? (v = qz, A.Ki && (v = rz(A)), yz["_" + ++Rz] = [n, v], n = Rz) : n = null;
        l = {
            s: h,
            f: q,
            r: w,
            t: t,
            c: n,
            a: l
        };
        h = tz(h);
        l.s = h.name;
        l.g = h.lf;
        pz[a].kj.push(l);
        Dz(a)
    };
    if ("function" === typeof _.ta.postMessage || "object" === typeof _.ta.postMessage) Gz = new jz, _.sz("__cb", xz, function() {
        return !0
    }), _.sz("_processBatch", Kz, function() {
        return !0
    }), _.Mz("..");

    _.Fu = function(a) {
        return new _.C(a)
    };
    _.Ob = _.Ob || {};
    _.Ob.Xk = function() {
        var a = 0,
            c = 0;
        window.self.innerHeight ? (a = window.self.innerWidth, c = window.self.innerHeight) : window.document.documentElement && window.document.documentElement.clientHeight ? (a = window.document.documentElement.clientWidth, c = window.document.documentElement.clientHeight) : window.document.body && (a = window.document.body.clientWidth, c = window.document.body.clientHeight);
        return {
            width: a,
            height: c
        }
    };

    _.Ob = _.Ob || {};
    (function() {
        function a(a, f) {
            window.getComputedStyle(a, "").getPropertyValue(f).match(/^([0-9]+)/);
            return (0, window.parseInt)(RegExp.$1, 10)
        }
        _.Ob.Cd = function() {
            var c = _.Ob.Xk().height,
                f = window.document.body,
                g = window.document.documentElement;
            if ("CSS1Compat" === window.document.compatMode && g.scrollHeight) return g.scrollHeight !== c ? g.scrollHeight : g.offsetHeight;
            if (0 <= window.navigator.userAgent.indexOf("AppleWebKit")) {
                c = 0;
                for (f = [window.document.body]; 0 < f.length;) {
                    var h = f.shift();
                    g = h.childNodes;
                    if ("undefined" !==
                        typeof h.style) {
                        var l = h.style.overflowY;
                        l || (l = (l = window.document.defaultView.getComputedStyle(h, null)) ? l.overflowY : null);
                        if ("visible" != l && "inherit" != l && (l = h.style.height, l || (l = (l = window.document.defaultView.getComputedStyle(h, null)) ? l.height : ""), 0 < l.length && "auto" != l)) continue
                    }
                    for (h = 0; h < g.length; h++) {
                        l = g[h];
                        if ("undefined" !== typeof l.offsetTop && "undefined" !== typeof l.offsetHeight) {
                            var n = l.offsetTop + l.offsetHeight + a(l, "margin-bottom");
                            c = Math.max(c, n)
                        }
                        f.push(l)
                    }
                }
                return c + a(window.document.body, "border-bottom") + a(window.document.body, "margin-bottom") + a(window.document.body, "padding-bottom")
            }
            if (f && g) return h = g.scrollHeight, l = g.offsetHeight, g.clientHeight !== l && (h = f.scrollHeight, l = f.offsetHeight), h > c ? h > l ? h : l : h < l ? h : l
        }
    })();

    var Ib, Jb, Cb, Db, Ab, Bb, Gb, zb, Eb;
    _.Rl = function() {
        if (Jb) {
            var a = new _.ta.Uint32Array(1);
            Ib.getRandomValues(a);
            a = Number("0." + a[0])
        } else a = Ab, a += (0, window.parseInt)(Gb.substr(0, 20), 16), Gb = Eb(Gb), a /= Bb + Math.pow(16, 20);
        return a
    };
    Ib = _.ta.crypto;
    Jb = !1;
    Cb = 0;
    Db = 0;
    Ab = 1;
    Bb = 0;
    Gb = "";
    zb = function(a) {
        a = a || _.ta.event;
        var c = a.screenX + a.clientX << 16;
        c += a.screenY + a.clientY;
        c *= (new Date).getTime() % 1E6;
        Ab = Ab * c % Bb;
        0 < Cb && ++Db == Cb && _.ra(_.ta, "mousemove", zb, "remove", "de")
    };
    Eb = function(a) {
        var c = new _.pi;
        c.bB(a);
        return c.Of()
    };
    Jb = !!Ib && "function" == typeof Ib.getRandomValues;
    Jb || (Bb = 1E6 * (window.screen.width * window.screen.width + window.screen.height), Gb = Eb(_.ua.cookie + "|" + _.ua.location + "|" + (new Date).getTime() + "|" + Math.random()), Cb = _.P("random/maxObserveMousemove") || 0, 0 != Cb && _.La(_.ta, "mousemove", zb));

    var kc, xn, wn, vn, on, Um, Cn, ws, Nr, mr, Hf, lf, Je, kg, Bh, Rh, mb, nb, ob, pb;
    _.cu = function(a, c) {
        c = c instanceof _.su ? c : _.Lm(c);
        a.href = _.Ls(c)
    };
    _.cb = function(a) {
        return !!a && "object" === typeof a && _.Ia.test(a.push)
    };
    _.xd = function(a) {
        for (var c = 0; c < this.length; c++)
            if (this[c] === a) return c;
        return -1
    };
    _.Sa = function(a, c) {
        if (!a) throw Error(c || "");
    };
    xn = /&/g;
    wn = /</g;
    vn = />/g;
    on = /"/g;
    Um = /'/g;
    Cn = function(a) {
        return String(a).replace(xn, "&amp;").replace(wn, "&lt;").replace(vn, "&gt;").replace(on, "&quot;").replace(Um, "&#39;")
    };
    ws = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g;
    Nr = /%([a-f]|[0-9a-fA-F][a-f])/g;
    mr = /^(https?|ftp|file|chrome-extension):$/i;
    Hf = function(a) {
        a = String(a);
        a = a.replace(ws, function(a) {
            try {
                return (0, window.encodeURIComponent)(a)
            } catch (l) {
                return (0, window.encodeURIComponent)(a.replace(/^[^%]+$/g, "\ufffd"))
            }
        }).replace(_.Za, function(a) {
            return a.replace(/%/g, "%25")
        }).replace(Nr, function(a) {
            return a.toUpperCase()
        });
        a = a.match(_.Xa) || [];
        var c = _.r(),
            f = function(a) {
                return a.replace(/\\/g, "%5C").replace(/\^/g, "%5E").replace(/`/g, "%60").replace(/\{/g, "%7B").replace(/\|/g, "%7C").replace(/\}/g, "%7D")
            },
            g = !!(a[1] || "").match(mr);
        c.yc = f((a[1] ||
            "") + (a[2] || "") + (a[3] || (a[2] && g ? "/" : "")));
        g = function(a) {
            return f(a.replace(/\?/g, "%3F").replace(/#/g, "%23"))
        };
        c.query = a[5] ? [g(a[5])] : [];
        c.Vf = a[7] ? [g(a[7])] : [];
        return c
    };
    lf = function(a) {
        return a.yc + (0 < a.query.length ? "?" + a.query.join("&") : "") + (0 < a.Vf.length ? "#" + a.Vf.join("&") : "")
    };
    Je = function(a, c) {
        var f = [];
        if (a)
            for (var g in a)
                if (_.Qa(a, g) && null != a[g]) {
                    var h = c ? c(a[g]) : a[g];
                    f.push((0, window.encodeURIComponent)(g) + "=" + (0, window.encodeURIComponent)(h))
                } return f
    };
    _.yg = function(a, c, f, g) {
        a = Hf(a);
        a.query.push.apply(a.query, Je(c, g));
        a.Vf.push.apply(a.Vf, Je(f, g));
        return lf(a)
    };
    _.vg = function(a, c) {
        var f = Hf(c);
        c = f.yc;
        f.query.length && (c += "?" + f.query.join(""));
        f.Vf.length && (c += "#" + f.Vf.join(""));
        var g = "";
        2E3 < c.length && (f = c, c = c.substr(0, 2E3), c = c.replace(_.lc, ""), g = f.substr(c.length));
        var h = a.createElement("div");
        a = a.createElement("a");
        f = Hf(c);
        c = f.yc;
        f.query.length && (c += "?" + f.query.join(""));
        f.Vf.length && (c += "#" + f.Vf.join(""));
        a.href = c;
        h.appendChild(a);
        h.innerHTML = h.innerHTML;
        c = String(h.firstChild.href);
        h.parentNode && h.parentNode.removeChild(h);
        f = Hf(c + g);
        c = f.yc;
        f.query.length &&
            (c += "?" + f.query.join(""));
        f.Vf.length && (c += "#" + f.Vf.join(""));
        return c
    };
    _.Ie = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
    kg = function(a) {
        for (; a.firstChild;) a.removeChild(a.firstChild)
    };
    _.Sc = function(a, c) {
        var f = _.Ka(_.bb, "watt", _.r());
        _.Ka(f, a, c)
    };
    Bh = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//;
    Rh = function(a) {
        var c = _.P("googleapis.config/sessionDelegate");
        "string" === typeof c && 21 < c.length && (c = null);
        null == c && (c = (a = (a || window.location.href).match(Bh)) ? a[1] : null);
        if (null == c) return null;
        c = String(c);
        21 < c.length && (c = null);
        return c
    };
    mb = function() {
        var a = _.bb.onl;
        if (!a) {
            a = _.r();
            _.bb.onl = a;
            var c = _.r();
            a.e = function(a) {
                var f = c[a];
                f && (delete c[a], f())
            };
            a.a = function(a, g) {
                c[a] = g
            };
            a.r = function(a) {
                delete c[a]
            }
        }
        return a
    };
    nb = function(a, c) {
        c = c.onload;
        return "function" === typeof c ? (mb().a(a, c), c) : null
    };
    ob = function(a) {
        _.Sa(/^\w+$/.test(a), "Unsupported id - " + a);
        mb();
        return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
    };
    pb = function(a) {
        mb().r(a)
    };
    var rb, ub, hc;
    _.vb = {
        allowtransparency: "true",
        frameborder: "0",
        hspace: "0",
        marginheight: "0",
        marginwidth: "0",
        scrolling: "no",
        style: "",
        tabindex: "0",
        vspace: "0",
        width: "100%"
    };
    rb = {
        allowtransparency: !0,
        onload: !0
    };
    ub = 0;
    _.Dn = function(a, c) {
        var f = 0;
        do var g = c.id || ["I", ub++, "_", (new Date).getTime()].join(""); while (a.getElementById(g) && 5 > ++f);
        _.Sa(5 > f, "Error creating iframe id");
        return g
    };
    _.Ln = function(a, c) {
        return a ? c + "/" + a : ""
    };
    _.qa = function(a, c, f, g) {
        var h = {},
            l = {};
        a.documentMode && 9 > a.documentMode && (h.hostiemode = a.documentMode);
        _.Sl(g.queryParams || {}, h);
        _.Sl(g.fragmentParams || {}, l);
        var n = g.pfname;
        var q = _.r();
        _.P("iframes/dropLegacyIdParam") || (q.id = f);
        q._gfid = f;
        q.parent = a.location.protocol + "//" + a.location.host;
        f = _.e(a.location.href, "parent");
        n = n || "";
        !n && f && (n = _.e(a.location.href, "_gfid", "") || _.e(a.location.href, "id", ""), n = _.Ln(n, _.e(a.location.href, "pfname", "")));
        n || (f = _.of(_.e(a.location.href, "jcp", ""))) && "object" == typeof f &&
            (n = _.Ln(f.id, f.pfname));
        q.pfname = n;
        g.connectWithJsonParam && (n = {}, n.jcp = _.mf(q), q = n);
        n = _.e(c, "rpctoken") || h.rpctoken || l.rpctoken;
        n || (n = g.rpctoken || String(Math.round(1E8 * _.Rl())), q.rpctoken = n);
        g.rpctoken = n;
        _.Sl(q, g.connectWithQueryParams ? h : l);
        q = a.location.href;
        a = _.r();
        (n = _.e(q, "_bsh", _.bb.bsh)) && (a._bsh = n);
        (q = _.bb.dpo ? _.bb.h : _.e(q, "jsh", _.bb.h)) && (a.jsh = q);
        g.hintInFragment ? _.Sl(a, l) : _.Sl(a, h);
        return _.yg(c, h, l, g.paramsSerializer)
    };
    hc = function(a) {
        _.Sa(!a || _.Ie.test(a), "Illegal url for new iframe - " + a)
    };
    _.Pn = function(a, c, f, g, h) {
        hc(f.src);
        var l, n = nb(g, f),
            q = n ? ob(g) : "";
        try {
            window.document.all && (l = a.createElement('<iframe frameborder="' + Cn(String(f.frameborder)) + '" scrolling="' + Cn(String(f.scrolling)) + '" ' + q + ' name="' + Cn(String(f.name)) + '"/>'))
        } catch (v) {} finally {
            l || (l = a.createElement("iframe"), n && (l.onload = function() {
                l.onload = null;
                n.call(this)
            }, pb(g)))
        }
        l.setAttribute("ng-non-bindable", "");
        for (var t in f) a = f[t], "style" === t && "object" === typeof a ? _.Sl(a, l.style) : rb[t] || l.setAttribute(t, String(a));
        (t = h && h.beforeNode || null) || h && h.dontclear || kg(c);
        c.insertBefore(l, t);
        l = t ? t.previousSibling : c.lastChild;
        f.allowtransparency && (l.allowTransparency = !0);
        return l
    };
    var zd, jc;
    zd = /^:[\w]+$/;
    _.nc = /:([a-zA-Z_]+):/g;
    _.ql = function() {
        var a = _.Dh() || "0",
            c = Rh();
        var f = _.Dh(void 0) || a;
        var g = Rh(void 0),
            h = "";
        f && (h += "u/" + (0, window.encodeURIComponent)(String(f)) + "/");
        g && (h += "b/" + (0, window.encodeURIComponent)(String(g)) + "/");
        f = h || null;
        (h = (g = !1 === _.P("isLoggedIn")) ? "_/im/" : "") && (f = "");
        var l = _.P("iframes/:socialhost:"),
            n = _.P("iframes/:im_socialhost:");
        return kc = {
            socialhost: l,
            ctx_socialhost: g ? n : l,
            session_index: a,
            session_delegate: c,
            session_prefix: f,
            im_prefix: h
        }
    };
    jc = function(a, c) {
        return _.ql()[c] || ""
    };
    _.mc = function(a) {
        return _.vg(_.ua, a.replace(_.nc, jc))
    };
    _.Un = function(a) {
        var c = a;
        zd.test(a) && (c = _.P("iframes/" + c.substring(1) + "/url"), _.Sa(!!c, "Unknown iframe url config for - " + a));
        return _.mc(c)
    };
    _.tb = function(a, c, f) {
        var g = f || {};
        f = g.attributes || {};
        _.Sa(!(g.allowPost || g.forcePost) || !f.onload, "onload is not supported by post iframe (allowPost or forcePost)");
        a = _.Un(a);
        f = c.ownerDocument || _.ua;
        var h = _.Dn(f, g);
        a = _.qa(f, a, h, g);
        var l = _.r();
        _.Sl(_.vb, l);
        _.Sl(g.attributes, l);
        l.name = l.id = h;
        l.src = a;
        g.eurl = a;
        var n = g || {},
            q = !!n.allowPost;
        if (n.forcePost || q && 2E3 < a.length) {
            n = Hf(a);
            l.src = "";
            g.dropDataPostorigin || (l["data-postorigin"] = a);
            a = _.Pn(f, c, l, h);
            if (-1 != window.navigator.userAgent.indexOf("WebKit")) {
                var t =
                    a.contentWindow.document;
                t.open();
                l = t.createElement("div");
                q = {};
                var v = h + "_inner";
                q.name = v;
                q.src = "";
                q.style = "display:none";
                _.Pn(f, l, q, v, g)
            }
            l = (g = n.query[0]) ? g.split("&") : [];
            g = [];
            for (q = 0; q < l.length; q++) v = l[q].split("=", 2), g.push([(0, window.decodeURIComponent)(v[0]), (0, window.decodeURIComponent)(v[1])]);
            n.query = [];
            l = lf(n);
            _.Sa(_.Ie.test(l), "Invalid URL: " + l);
            n = f.createElement("form");
            n.action = l;
            n.method = "POST";
            n.target = h;
            n.style.display = "none";
            for (h = 0; h < g.length; h++) l = f.createElement("input"), l.type = "hidden", l.name = g[h][0], l.value = g[h][1], n.appendChild(l);
            c.appendChild(n);
            n.submit();
            n.parentNode.removeChild(n);
            t && t.close();
            c = a
        } else c = _.Pn(f, c, l, h, g);
        return c
    };

    _.AB = function(a) {
        this.Ea = a
    };
    _.k = _.AB.prototype;
    _.k.value = function() {
        return this.Ea
    };
    _.k.Es = function(a) {
        this.Ea.width = a;
        return this
    };
    _.k.Ne = function() {
        return this.Ea.width
    };
    _.k.Rm = function(a) {
        this.Ea.height = a;
        return this
    };
    _.k.Cd = function() {
        return this.Ea.height
    };
    _.k.rl = function(a) {
        this.Ea.style = a;
        return this
    };
    _.k.IZ = _.b(5);
    var FN = function(a) {
        this.Ea = a
    };
    FN.prototype.N2 = function(a) {
        this.Ea.anchor = a;
        return this
    };
    FN.prototype.oA = function() {
        return this.Ea.anchor
    };
    FN.prototype.m9 = function(a) {
        this.Ea.anchorPosition = a;
        return this
    };
    _.uW = function(a) {
        a.Ea.show = !0;
        return a
    };
    FN.prototype.Rm = function(a) {
        this.Ea.height = a;
        return this
    };
    FN.prototype.Cd = function() {
        return this.Ea.height
    };
    FN.prototype.Es = function(a) {
        this.Ea.width = a;
        return this
    };
    FN.prototype.Ne = function() {
        return this.Ea.width
    };
    _.BB = function(a) {
        this.Ea = a || {}
    };
    _.BB.prototype.value = function() {
        return this.Ea
    };
    _.BB.prototype.setUrl = function(a) {
        this.Ea.url = a;
        return this
    };
    _.BB.prototype.getUrl = function() {
        return this.Ea.url
    };
    _.JB = function(a, c) {
        a.Ea.where = c;
        return a
    };
    _.k = _.BB.prototype;
    _.k.rl = function(a) {
        this.Ea.style = a;
        return this
    };
    _.k.IZ = _.b(4);
    _.k.DD = function(a) {
        this.Ea.id = a;
        return this
    };
    _.k.Hh = function() {
        return this.Ea.id
    };
    _.k.oZ = _.b(6);
    _.CN = function(a, c) {
        a.Ea.queryParams = c;
        return a
    };
    _.Ko = function(a, c) {
        a.Ea.relayOpen = c;
        return a
    };
    _.BN = function(a, c) {
        a.Ea.messageHandlers = c;
        return a
    };
    _.AN = function(a, c) {
        a.Ea.messageHandlersFilter = c;
        return a
    };
    _.BB.prototype.H0 = _.b(7);
    _.BB.prototype.getContext = function() {
        return this.Ea.context
    };
    _.BB.prototype.ua = function() {
        return this.Ea.openerIframe
    };
    _.Du = function(a) {
        return new FN(a.Ea)
    };
    _.BB.prototype.Wp = function() {
        this.Ea.attributes = this.Ea.attributes || {};
        return new _.AB(this.Ea.attributes)
    };
    _.KN = function(a) {
        a.Ea.connectWithQueryParams = !0;
        return a
    };

    var pl, Ek, Xz, Zz, Lu, Ku;
    _.AB.prototype.IZ = _.d(5, function() {
        return this.Ea.style
    });
    _.BB.prototype.IZ = _.d(4, function() {
        return this.Ea.style
    });
    pl = function(a, c) {
        a.Ea.onload = c
    };
    _.jN = function(a) {
        a.Ea.closeClickDetection = !0
    };
    _.Wb = function(a) {
        return a.Ea.rpctoken
    };
    _.Qm = function(a) {
        a.Ea.waitForOnload = !0;
        return a
    };
    Ek = function(a) {
        return (a = a.Ea.timeout) ? a : null
    };
    _.eb = function(a, c, f) {
        if (a) {
            _.Sa(_.cb(a), "arrayForEach was called with a non array value");
            for (var g = 0; g < a.length; g++) c.call(f, a[g], g)
        }
    };
    _.fb = function(a, c, f) {
        if (a)
            if (_.cb(a)) _.eb(a, c, f);
            else {
                _.Sa("object" === typeof a, "objectForEach was called with a non object value");
                f = f || a;
                for (var g in a) _.Qa(a, g) && void 0 !== a[g] && c.call(f, a[g], g)
            }
    };
    _.Pr = function(a) {
        return new _.C(function(c, f) {
            var g = a.length,
                h = [];
            if (g)
                for (var l = function(a, f) {
                        g--;
                        h[a] = f;
                        0 == g && c(h)
                    }, n = function(a) {
                        f(a)
                    }, q = 0, t; q < a.length; q++) t = a[q], _.dq(t, _.ma(l, q), n);
            else c(h)
        })
    };
    Lu = function(a) {
        this.resolve = this.reject = null;
        this.promise = _.Fu((0, _.H)(function(a, f) {
            this.resolve = a;
            this.reject = f
        }, this));
        a && (this.promise = Ku(this.promise, a))
    };
    Ku = function(a, c) {
        return a.then(function(a) {
            try {
                c(a)
            } catch (g) {}
            return a
        })
    };
    _.yp = function(a) {
        this.Ea = a || {}
    };
    _.J(_.yp, _.BB);
    _.oq = function(a, c) {
        a.Ea.frameName = c;
        return a
    };
    _.yp.prototype.Tp = function() {
        return this.Ea.frameName
    };
    _.Lr = function(a, c) {
        a.Ea.rpcAddr = c;
        return a
    };
    _.yp.prototype.Fl = function() {
        return this.Ea.rpcAddr
    };
    _.Mr = function(a, c) {
        a.Ea.retAddr = c;
        return a
    };
    _.Ss = function(a) {
        return a.Ea.retAddr
    };
    _.yp.prototype.Og = function(a) {
        this.Ea.origin = a;
        return this
    };
    _.yp.prototype.Pq = function() {
        return this.Ea.origin
    };
    _.yp.prototype.vj = function(a) {
        this.Ea.setRpcReady = a;
        return this
    };
    _.Yb = function(a) {
        return a.Ea.setRpcReady
    };
    _.yp.prototype.Pm = function(a) {
        this.Ea.context = a
    };
    var ft = function(a, c) {
        a.Ea._rpcReadyFn = c
    };
    _.yp.prototype.rb = function() {
        return this.Ea.iframeEl
    };
    var co, Wz, Jp;
    co = /^[\w\.\-]*$/;
    _.Uz = function(a) {
        return a.Db === a.getContext().Db
    };
    _.Vz = function() {
        return !0
    };
    _.AD = function(a) {
        for (var c = _.r(), f = 0; f < a.length; f++) c[a[f]] = !0;
        return function(a) {
            return !!c[a.Db]
        }
    };
    Wz = function(a, c, f) {
        return function(g) {
            if (!c.Oj) {
                _.Sa(this.origin === c.Db, "Wrong origin " + this.origin + " != " + c.Db);
                var h = this.callback;
                g = Jp(a, g, c);
                !f && 0 < g.length && _.Pr(g).then(h)
            }
        }
    };
    Jp = function(a, c, f) {
        a = Xz[a];
        if (!a) return [];
        for (var g = [], h = 0; h < a.length; h++) g.push(_.Nu(a[h].call(f, c, f)));
        return g
    };
    _.Yz = function(a, c, f) {
        _.Sa("_default" != a, "Cannot update default api");
        Zz[a] = {
            map: c,
            filter: f
        }
    };
    _.$z = function(a, c, f) {
        _.Sa("_default" != a, "Cannot update default api");
        _.Ka(Zz, a, {
            map: {},
            filter: _.Uz
        }).map[c] = f
    };
    _.aA = function(a, c) {
        _.Ka(Zz, "_default", {
            map: {},
            filter: _.Vz
        }).map[a] = c;
        _.fb(_.Sm.Uv, function(f) {
            f.register(a, c, _.Vz)
        })
    };
    _.jo = function() {
        return _.Sm
    };
    _.bA = function(a) {
        a = a || {};
        this.Oj = !1;
        this.gW = _.r();
        this.Uv = _.r();
        this.uu = a._window || _.ta;
        this.Il = this.uu.location.href;
        this.Pba = (this.Qba = xu(this.Il, "parent")) ? xu(this.Il, "pfname") : "";
        this.El = this.Qba ? xu(this.Il, "_gfid") || xu(this.Il, "id") : "";
        this.Jh = _.Ln(this.El, this.Pba);
        this.Db = _.Rb.Pq(this.Il);
        if (this.El) {
            var c = new _.yp;
            _.Lr(c, a._parentRpcAddr || "..");
            _.Mr(c, a._parentRetAddr || this.El);
            c.Og(_.Rb.Pq(this.Qba || this.Il));
            _.oq(c, this.Pba);
            this.Vb = this.OH(c.value())
        } else this.Vb = null
    };
    _.k = _.bA.prototype;
    _.k.Ma = _.b(9);
    _.k.U = function() {
        if (!this.Oj) {
            for (var a = 0; a < this.Uv.length; a++) this.Uv[a].U();
            this.Oj = !0
        }
    };
    _.k.Tp = function() {
        return this.Jh
    };
    _.k.Aa = function() {
        return this.uu
    };
    _.k.Wb = function() {
        return this.uu.document
    };
    _.k.sj = _.b(10);
    _.k.$h = function(a) {
        return this.gW[a]
    };
    _.k.OH = function(a) {
        _.Sa(!this.Oj, "Cannot attach iframe in disposed context");
        a = new _.yp(a);
        a.Fl() || _.Lr(a, a.Hh());
        _.Ss(a) || _.Mr(a, "..");
        a.Pq() || a.Og(_.Rb.Pq(a.getUrl()));
        a.Tp() || _.oq(a, _.Ln(a.Hh(), this.Jh));
        var c = a.Tp();
        if (this.Uv[c]) return this.Uv[c];
        var f = a.Fl(),
            g = f;
        a.Pq() && (g = f + "|" + a.Pq());
        var h = _.Ss(a),
            l = _.Wb(a);
        l || (l = (l = a.rb()) && (l.getAttribute("data-postorigin") || l.src) || a.getUrl(), l = _.e(l, "rpctoken"));
        ft(a, _.Mz(g, h, l, a.Ea._popupWindow));
        g = ((window.gadgets || {}).rpc || {}).setAuthToken;
        l && g && g(f,
            l);
        var n = new _.Rm(this, f, c, a),
            q = a.Ea.messageHandlersFilter;
        _.fb(a.Ea.messageHandlers, function(a, c) {
            n.register(c, a, q)
        });
        _.Yb(a) && n.vj();
        _.jA(n, "_g_rpcReady");
        return n
    };
    _.k.CA = function(a) {
        _.oq(a, null);
        var c = a.Hh();
        !c || co.test(c) && !this.Aa().document.getElementById(c) || (_.kd("Ignoring requested iframe ID - " + c), a.DD(null))
    };
    var xu = function(a, c) {
        var f = _.e(a, c);
        f || (f = _.of(_.e(a, "jcp", ""))[c]);
        return f || ""
    };
    _.bA.prototype.Nf = function(a) {
        _.Sa(!this.Oj, "Cannot open iframe in disposed context");
        var c = new _.yp(a);
        rt(this, c);
        var f = c.Tp();
        if (f && this.Uv[f]) return this.Uv[f];
        this.CA(c);
        f = c.getUrl();
        _.Sa(f, "No url for new iframe");
        var g = c.Ea.queryParams || {};
        g.usegapi = "1";
        _.CN(c, g);
        g = this.Eaa && this.Eaa(f, c);
        g || (g = c.Ea.where, _.Sa(!!g, "No location for new iframe"), f = _.tb(f, g, a), c.Ea.iframeEl = f, g = f.getAttribute("id"));
        _.Lr(c, g).DD(g);
        c.Og(_.Rb.Pq(c.Ea.eurl || ""));
        this.mba && this.mba(c, c.rb());
        f = this.OH(a);
        f.NA && f.NA(f,
            a);
        (a = c.Ea.onCreate) && a(f);
        c.Ea.disableRelayOpen || f.Ce("_open");
        return f
    };
    var cA = function(a, c, f) {
            var g = c.Ea.canvasUrl;
            if (!g) return f;
            _.Sa(!c.Ea.allowPost && !c.Ea.forcePost, "Post is not supported when using canvas url");
            var h = c.getUrl();
            _.Sa(h && _.Rb.Pq(h) === a.Db && _.Rb.Pq(g) === a.Db, "Wrong origin for canvas or hidden url " + g);
            c.setUrl(g);
            _.Qm(c);
            c.Ea.canvasUrl = null;
            return function(a) {
                var c = a.Aa(),
                    g = c.location.hash;
                g = _.Un(h) + (/#/.test(h) ? g.replace(/^#/, "&") : g);
                c.location.replace(g);
                f && f(a)
            }
        },
        dA = function(a, c, f) {
            var g = c.Ea.relayOpen;
            if (g) {
                var h = a.Vb;
                g instanceof _.Rm ? (h = g, _.Ko(c,
                    0)) : 0 < Number(g) && _.Ko(c, Number(g) - 1);
                if (h) {
                    _.Sa(!!h.DE, "Relaying iframe open is disabled");
                    if (g = c.IZ())
                        if (g = _.eA[g]) c.Pm(a), g(c.value()), c.Pm(null);
                    c.Ea.openerIframe = null;
                    f.resolve(h.DE(c));
                    return !0
                }
            }
            return !1
        },
        fA = function(a, c, f) {
            var g = c.IZ();
            if (g)
                if (_.Sa(!!_.gA, "Defer style is disabled, when requesting style " + g), _.hA[g]) rt(a, c);
                else return iA(g, function() {
                    _.Sa(!!_.hA[g], "Fail to load style - " + g);
                    f.resolve(a.open(c.value()))
                }), !0;
            return !1
        };
    _.bA.prototype.open = function(a, c) {
        _.Sa(!this.Oj, "Cannot open iframe in disposed context");
        var f = new _.yp(a);
        c = cA(this, f, c);
        var g = new Lu(c);
        (c = f.getUrl()) && f.setUrl(_.Un(c));
        if (dA(this, f, g) || fA(this, f, g) || dA(this, f, g)) return g.promise;
        if (null != Ek(f)) {
            var h = (0, window.setTimeout)(function() {
                    n.rb().src = "about:blank";
                    g.reject({
                        timeout: "Exceeded time limit of :" + Ek(f) + "milliseconds"
                    })
                }, Ek(f)),
                l = g.resolve;
            g.resolve = function(a) {
                (0, window.clearTimeout)(h);
                l(a)
            }
        }
        f.Ea.waitForOnload && pl(f.Wp(), function() {
            g.resolve(n)
        });
        var n = this.Nf(a);
        f.Ea.waitForOnload || g.resolve(n);
        return g.promise
    };
    _.bA.prototype.taa = _.b(11);
    _.Rm = function(a, c, f, g) {
        this.Oj = !1;
        this.Yf = a;
        this.Nc = c;
        this.Jh = f;
        this.zd = g;
        this.re = _.Ss(this.zd);
        this.Db = this.zd.Pq();
        this.iK = this.zd.rb();
        this.vF = this.zd.Ea.where;
        this.$o = [];
        this.Ce("_default");
        a = this.zd.Ea.apis || [];
        for (c = 0; c < a.length; c++) this.Ce(a[c]);
        this.Yf.Uv[f] = this
    };
    _.k = _.Rm.prototype;
    _.k.Ma = _.b(8);
    _.k.U = function() {
        if (!this.Oj) {
            for (var a = 0; a < this.$o.length; a++) this.unregister(this.$o[a]);
            delete _.Sm.Uv[this.Tp()];
            this.Oj = !0
        }
    };
    _.k.getContext = function() {
        return this.Yf
    };
    _.k.Fl = function() {
        return this.Nc
    };
    _.k.Tp = function() {
        return this.Jh
    };
    _.k.rb = function() {
        return this.iK
    };
    _.k.V = function() {
        return this.vF
    };
    _.k.qc = function(a) {
        this.vF = a
    };
    _.k.vj = function() {
        (0, this.zd.Ea._rpcReadyFn)()
    };
    _.k.Vm = function(a, c) {
        this.zd.value()[a] = c
    };
    _.k.Zf = function(a) {
        return this.zd.value()[a]
    };
    _.k.va = function() {
        return this.zd.value()
    };
    _.k.Hh = function() {
        return this.zd.Hh()
    };
    _.k.Pq = function() {
        return this.Db
    };
    _.k.register = function(a, c, f) {
        _.Sa(!this.Oj, "Cannot register handler on disposed iframe " + a);
        _.Sa((f || _.Uz)(this), "Rejecting untrusted message " + a);
        f = this.Jh + ":" + this.Yf.Jh + ":" + a;
        1 == _.Ka(Xz, f, []).push(c) && (this.$o.push(a), _.sz(f, Wz(f, this, "_g_wasClosed" === a)))
    };
    _.k.unregister = function(a, c) {
        var f = this.Jh + ":" + this.Yf.Jh + ":" + a,
            g = Xz[f];
        g && (c ? (c = _.xd.call(g, c), 0 <= c && g.splice(c, 1)) : g.splice(0, g.length), 0 == g.length && (c = _.xd.call(this.$o, a), 0 <= c && this.$o.splice(c, 1), _.wz(f)))
    };
    _.k.fq = function() {
        return this.$o
    };
    _.k.Ce = function(a) {
        this.Sy = this.Sy || [];
        if (!(0 <= _.xd.call(this.Sy, a))) {
            this.Sy.push(a);
            a = Zz[a] || {
                map: {}
            };
            for (var c in a.map) _.Qa(a.map, c) && this.register(c, a.map[c], a.filter)
        }
    };
    _.k.send = function(a, c, f, g) {
        _.Sa(!this.Oj, "Cannot send message to disposed iframe - " + a);
        _.Sa((g || _.Uz)(this), "Wrong target for message " + a);
        f = new Lu(f);
        _.Az(this.Nc, this.Yf.Jh + ":" + this.Jh + ":" + a, f.resolve, c);
        return f.promise
    };
    _.jA = function(a, c, f, g) {
        return a.send(c, f, g, _.Vz)
    };
    _.Rm.prototype.aL = function(a) {
        return a
    };
    _.Rm.prototype.ping = function(a, c) {
        return _.jA(this, "_g_ping", c, a)
    };
    Xz = _.r();
    Zz = _.r();
    _.Sm = new _.bA;
    _.aA("_g_rpcReady", _.Rm.prototype.vj);
    _.aA("_g_discover", _.Rm.prototype.fq);
    _.aA("_g_ping", _.Rm.prototype.aL);
    var iA, rt;
    _.hA = _.r();
    _.eA = _.r();
    _.gA = function(a) {
        return _.hA[a]
    };
    iA = function(a, c) {
        _.Ua.load("gapi.iframes.style." + a, c)
    };
    rt = function(a, c) {
        var f = c.IZ();
        if (f) {
            c.rl(null);
            var g = _.hA[f];
            _.Sa(g, "No such style: " + f);
            c.Pm(a);
            g(c.value());
            c.Pm(null)
        }
    };
    var nA, oA;
    nA = {
        height: !0,
        width: !0
    };
    oA = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i;
    _.no = function(a) {
        "number" === typeof a && (a = String(a) + "px");
        return a
    };
    _.Rm.prototype.Aa = function() {
        if (!_.Uz(this)) return null;
        var a = this.zd.Ea._popupWindow;
        if (a) return a;
        var c = this.Nc.split("/");
        a = this.getContext().Aa();
        for (var f = 0; f < c.length && a; f++) {
            var g = c[f];
            a = ".." === g ? a == a.parent ? a.opener : a.parent : a.frames[g]
        }
        return a
    };
    var lA = function(a, c) {
        var f = a.Vb,
            g = !0;
        c.filter && (g = c.filter.call(c.qg, c.params));
        return _.Nu(g).then(function(g) {
            return g && f ? (c.um && c.um.call(a, c.params), g = c.sender ? c.sender(c.params) : _.jA(f, c.message, c.params), c.Kz ? g.then(function() {
                return !0
            }) : !0) : !1
        })
    };
    _.bA.prototype.s6 = function(a, c, f) {
        a = lA(this, {
            sender: function(a) {
                var c = _.Sm.Vb;
                _.fb(_.Sm.Uv, function(f) {
                    f !== c && _.jA(f, "_g_wasClosed", a)
                });
                return _.jA(c, "_g_closeMe", a)
            },
            message: "_g_closeMe",
            params: a,
            qg: f,
            filter: this.$h("onCloseSelfFilter")
        });
        c = new Lu(c);
        c.resolve(a);
        return c.promise
    };
    _.bA.prototype.Y8 = function(a, c, f) {
        a = a || {};
        c = new Lu(c);
        c.resolve(lA(this, {
            message: "_g_restyleMe",
            params: a,
            qg: f,
            filter: this.$h("onRestyleSelfFilter"),
            Kz: !0,
            um: this.$ca
        }));
        return c.promise
    };
    _.bA.prototype.$ca = function(a) {
        "auto" === a.height && (a.height = _.Ob.Cd())
    };
    _.mA = function(a) {
        var c = {};
        if (a)
            for (var f in a) _.Qa(a, f) && _.Qa(nA, f) && oA.test(a[f]) && (c[f] = a[f]);
        return c
    };
    _.k = _.Rm.prototype;
    _.k.close = function(a, c) {
        return _.jA(this, "_g_close", a, c)
    };
    _.k.sD = function(a, c) {
        return _.jA(this, "_g_restyle", a, c)
    };
    _.k.ds = function(a, c) {
        return _.jA(this, "_g_restyleDone", a, c)
    };
    _.k.qp = function(a) {
        return this.getContext().s6(a, void 0, this)
    };
    _.k.tD = function(a) {
        if (a && "object" === typeof a) return this.getContext().Y8(a, void 0, this)
    };
    _.k.mu = function(a) {
        var c = this.zd.Ea.onRestyle;
        c && c.call(this, a, this);
        a = a && "object" === typeof a ? _.mA(a) : {};
        (c = this.rb()) && a && "object" === typeof a && (_.Qa(a, "height") && (a.height = _.no(a.height)), _.Qa(a, "width") && (a.width = _.no(a.width)), _.Sl(a, c.style))
    };
    _.k.rp = function(a) {
        var c = this.zd.Ea.onClose;
        c && c.call(this, a, this);
        this.BC && this.BC() || (c = this.rb()) && c.parentNode && c.parentNode.removeChild(c);
        if (c = this.zd.Ea.controller) {
            var f = {};
            f.frameName = this.Tp();
            _.jA(c, "_g_disposeControl", f)
        }
        Jp(this.Jh + ":" + this.Yf.Jh + ":_g_wasClosed", a, this)
    };
    _.bA.prototype.rca = _.b(12);
    _.bA.prototype.xca = _.b(13);
    _.Rm.prototype.QE = _.b(14);
    _.Rm.prototype.PE = function(a, c) {
        this.register("_g_wasClosed", a, c)
    };
    _.Rm.prototype.pM = function() {
        delete this.getContext().Uv[this.Tp()];
        this.getContext().Aa().setTimeout((0, _.H)(function() {
            this.U()
        }, this), 0)
    };
    _.aA("_g_close", _.Rm.prototype.qp);
    _.aA("_g_closeMe", _.Rm.prototype.rp);
    _.aA("_g_restyle", _.Rm.prototype.tD);
    _.aA("_g_restyleMe", _.Rm.prototype.mu);
    _.aA("_g_wasClosed", _.Rm.prototype.pM);

    var Tu, $v, fB, bB;
    _.BB.prototype.H0 = _.d(7, function(a) {
        this.Ea.apis = a;
        return this
    });
    _.BB.prototype.oZ = _.d(6, function(a) {
        this.Ea.rpctoken = a;
        return this
    });
    _.Pu = function(a, c) {
        a.Ea.onClose = c
    };
    _.kv = function(a) {
        this.Ea = a || {}
    };
    _.kv.prototype.value = function() {
        return this.Ea
    };
    _.kv.prototype.getIframe = function() {
        return this.Ea.iframe
    };
    _.lv = function(a, c) {
        a.Ea.role = c;
        return a
    };
    _.kv.prototype.vj = function(a) {
        this.Ea.setRpcReady = a;
        return this
    };
    _.kv.prototype.oZ = function(a) {
        this.Ea.rpctoken = a;
        return this
    };
    _.tB = function(a) {
        a.Ea.selfConnect = !0;
        return a
    };
    Tu = function(a) {
        this.Ea = a || {}
    };
    Tu.prototype.value = function() {
        return this.Ea
    };
    var Kv = function(a) {
        var c = new Tu;
        c.Ea.role = a;
        return c
    };
    Tu.prototype.e4 = function() {
        return this.Ea.role
    };
    Tu.prototype.Mo = function(a) {
        this.Ea.handler = a;
        return this
    };
    Tu.prototype.Cr = function() {
        return this.Ea.handler
    };
    var Ii = function(a, c) {
        a.Ea.filter = c;
        return a
    };
    Tu.prototype.H0 = function(a) {
        this.Ea.apis = a;
        return this
    };
    $v = function(a) {
        a.Ea.runOnce = !0;
        return a
    };
    fB = /^https?:\/\/[^\/%\\?#\s]+$/i;
    bB = {
        longdesc: !0,
        name: !0,
        src: !0,
        frameborder: !0,
        marginwidth: !0,
        marginheight: !0,
        scrolling: !0,
        align: !0,
        height: !0,
        width: !0,
        id: !0,
        "class": !0,
        title: !0,
        tabindex: !0,
        hspace: !0,
        vspace: !0,
        allowtransparency: !0
    };
    _.ZA = function(a, c, f) {
        var g = a.Nc,
            h = c.re;
        _.Mr(_.Lr(f, a.re + "/" + c.Nc), h + "/" + g);
        _.oq(f, c.Tp()).Og(c.Db)
    };
    _.bA.prototype.u6 = _.b(15);
    _.k = _.Rm.prototype;
    _.k.$H = function(a) {
        var c = new _.yp(a);
        a = new _.kv(c.value());
        if (a.Ea.selfConnect) var f = this;
        else(_.Sa(fB.test(c.Pq()), "Illegal origin for connected iframe - " + c.Pq()), f = this.Yf.Uv[c.Tp()], f) ? _.Yb(c) && (f.vj(), _.jA(f, "_g_rpcReady")) : (c = _.oq(_.Mr(_.Lr((new _.yp).oZ(_.Wb(c)), c.Fl()), _.Ss(c)).Og(c.Pq()), c.Tp()).vj(_.Yb(c)), f = this.Yf.OH(c.value()));
        c = this.Yf;
        var g = a.Ea.role;
        a = a.Ea.data;
        dB(c);
        g = g || "";
        _.Ka(c.v6, g, []).push({
            qg: f.Tp(),
            data: a
        });
        eB(f, a, c.m8[g])
    };
    _.k.NA = function(a, c) {
        (new _.yp(c)).Ea._relayedDepth || (c = {}, _.tB(_.lv(new _.kv(c), "_opener")), _.jA(a, "_g_connect", c))
    };
    _.k.DE = function(a) {
        var c = this,
            f = a.Ea.messageHandlers,
            g = a.Ea.messageHandlersFilter,
            h = a.Ea.onClose;
        _.Pu(_.AN(_.BN(a, null), null), null);
        _.Su();
        return _.jA(this, "_g_open", a.value()).then(function(l) {
            var n = new _.yp(l[0]),
                q = n.Tp();
            l = new _.yp;
            var t = c.re,
                v = _.Ss(n);
            _.Mr(_.Lr(l, c.Nc + "/" + n.Fl()), v + "/" + t);
            _.oq(l, q);
            l.Og(n.Pq());
            l.H0(n.Ea.apis);
            l.oZ(_.Wb(a));
            _.BN(l, f);
            _.AN(l, g);
            _.Pu(l, h);
            (n = c.Yf.Uv[q]) || (n = c.Yf.OH(l.value()));
            return n
        })
    };
    _.k.CA = function(a) {
        var c = a.getUrl();
        _.Sa(!c || _.Ie.test(c), "Illegal url for new iframe - " + c);
        var f = a.Wp().value();
        c = {};
        for (var g in f) _.Qa(f, g) && _.Qa(bB, g) && (c[g] = f[g]);
        _.Qa(f, "style") && (g = f.style, "object" === typeof g && (c.style = _.mA(g)));
        a.value().attributes = c
    };
    _.k.VK = function(a) {
        a = new _.yp(a);
        this.CA(a);
        var c = a.Ea._relayedDepth || 0;
        a.Ea._relayedDepth = c + 1;
        a.Ea.openerIframe = this;
        _.Su();
        var f = _.Wb(a);
        a.oZ(null);
        return this.Yf.open(a.value()).then((0, _.H)(function(a) {
            var g = (new _.yp(a.va())).Ea.apis,
                l = new _.yp;
            _.ZA(a, this, l);
            0 == c && _.lv(new _.kv(l.value()), "_opener");
            l.vj(!0);
            l.oZ(f);
            _.jA(a, "_g_connect", l.value());
            l = new _.yp;
            _.oq(_.Mr(_.Lr(l.H0(g), a.Fl()), a.re), a.Tp()).Og(a.Pq());
            return l.value()
        }, this))
    };
    var dB = function(a) {
        a.v6 || (a.v6 = _.r(), a.m8 = _.r())
    };
    _.bA.prototype.p3 = function(a, c, f, g) {
        dB(this);
        "object" === typeof a ? (c = new Tu(a), f = c.e4() || "") : (c = Ii(Kv(a).Mo(c).H0(f), g), f = a);
        g = this.v6[f] || [];
        a = !1;
        for (var h = 0; h < g.length && !a; h++) eB(this.Uv[g[h].qg], g[h].data, [c]), a = c.Ea.runOnce;
        f = _.Ka(this.m8, f, []);
        a || c.Ea.dontWait || f.push(c)
    };
    _.bA.prototype.dca = _.b(16);
    var eB = function(a, c, f) {
        f = f || [];
        for (var g = 0; g < f.length; g++) {
            var h = f[g];
            if (h && a) {
                var l = h.Ea.filter || _.Uz;
                if (a && l(a)) {
                    l = h.Ea.apis || [];
                    for (var n = 0; n < l.length; n++) a.Ce(l[n]);
                    h.Cr() && h.Cr()(a, c);
                    h.Ea.runOnce && (f.splice(g, 1), --g)
                }
            }
        }
    };
    _.bA.prototype.a1 = function(a, c, f) {
        this.p3($v(Ii(Kv("_opener").Mo(a).H0(c), f)).value())
    };
    _.Rm.prototype.pL = function(a) {
        this.getContext().a1(function(c) {
            c.send("_g_wasRestyled", a, void 0, _.Vz)
        }, null, _.Vz)
    };
    var gB = _.Sm.Vb;
    gB && gB.register("_g_restyleDone", _.Rm.prototype.pL, _.Vz);
    _.aA("_g_connect", _.Rm.prototype.$H);
    var hB = {};
    hB._g_open = _.Rm.prototype.VK;
    _.Yz("_open", hB, _.Vz);

    _.Pb.ft = function(a) {
        var c = [];
        if (1 < arguments.length)
            for (var f = 0, g; g = arguments[f]; ++f) c.push(g);
        else c = a;
        return function(a) {
            for (var f = 0; c[f]; ++f)
                if (a === c[f]) return !0;
            return !1
        }
    };
    _.Pb.Dt = function(a) {
        return function(c) {
            return a.test(c)
        }
    };
    _.Pb.Sn = function(a) {
        return "undefined" !== typeof a
    };
    _.Pb.yt = function(a) {
        return "string" === typeof a && 0 < a.length
    };
    _.Pb.DM = function(a) {
        return "boolean" === typeof a
    };
    _.Pb.rt = function(a) {
        return function(c) {
            for (var f in a)
                if (a.hasOwnProperty(f) && !(0, a[f])(c[f])) return !1;
            return !0
        }
    };

    _.R = _.R || {};
    _.R.Dg = function(a, c, f) {
        for (var g = [], h = 2, l = arguments.length; h < l; ++h) g.push(arguments[h]);
        return function() {
            for (var f = g.slice(), h = 0, l = arguments.length; h < l; ++h) f.push(arguments[h]);
            return c.apply(a, f)
        }
    };
    _.R.nf = function(a) {
        var c, f, g = {};
        for (c = 0; f = a[c]; ++c) g[f] = f;
        return g
    };

    _.R = _.R || {};
    (function() {
        function a(a) {
            c = a["core.util"] || {}
        }
        var c = {},
            f = {};
        _.Pb && _.Pb.register("core.util", null, a);
        _.R.Nt = function(a) {
            return "undefined" === typeof c[a] ? null : c[a]
        };
        _.R.hasFeature = function(a) {
            return "undefined" !== typeof c[a]
        };
        _.R.Rt = function() {
            return f
        }
    })();

    _.Uo = _.r();
    _.Uu = function(a) {
        var c = window;
        a = (a || c.location.href).match(/.*(\?|#|&)usegapi=([^&#]+)/) || [];
        return "1" === (0, window.decodeURIComponent)(a[a.length - 1] || "")
    };
    var Dg, To, Pv, qu, MQ, NQ, zH, vs, dg, eg, bg;
    _.eG = function(a) {
        if (a instanceof _.NG) return a;
        var c = "object" == typeof a,
            f = null;
        c && a.mK && (f = a.Im());
        return _.uf(_.He(c && a.nK ? a.cR() : String(a)), f)
    };
    _.Ne = function(a, c) {
        return a == c ? !0 : a && c ? a.x == c.x && a.y == c.y : !1
    };
    _.X = function(a, c) {
        this.x = _.kf(a) ? a : 0;
        this.y = _.kf(c) ? c : 0
    };
    _.k = _.X.prototype;
    _.k.clone = function() {
        return new _.X(this.x, this.y)
    };
    _.k.equals = function(a) {
        return a instanceof _.X && _.Ne(this, a)
    };
    _.k.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.k.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.k.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.k.translate = function(a, c) {
        a instanceof _.X ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), _.qe(c) && (this.y += c));
        return this
    };
    _.k.scale = function(a, c) {
        c = _.qe(c) ? c : a;
        this.x *= a;
        this.y *= c;
        return this
    };
    _.fg = function(a, c) {
        this.width = a;
        this.height = c
    };
    _.k = _.fg.prototype;
    _.k.clone = function() {
        return new _.fg(this.width, this.height)
    };
    _.k.Cda = function() {
        return this.width * this.height
    };
    _.k.aspectRatio = function() {
        return this.width / this.height
    };
    _.k.isEmpty = function() {
        return !this.Cda()
    };
    _.k.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.k.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.k.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    _.k.scale = function(a, c) {
        c = _.qe(c) ? c : a;
        this.width *= a;
        this.height *= c;
        return this
    };
    _.Lf = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    _.Ct = function(a) {
        a = a.document;
        a = _.Lf(a) ? a.documentElement : a.body;
        return new _.fg(a.clientWidth, a.clientHeight)
    };
    _.ig = function(a) {
        return _.Ct(a || window)
    };
    _.Kf = function(a) {
        return a.scrollingElement ? a.scrollingElement : !_.ef && _.Lf(a) ? a.documentElement : a.body || a.documentElement
    };
    _.Jf = function(a) {
        var c = _.Kf(a);
        a = a.parentWindow || a.defaultView;
        return _.W && _.sl("10") && a.pageYOffset != c.scrollTop ? new _.X(c.scrollLeft, c.scrollTop) : new _.X(a.pageXOffset || c.scrollLeft, a.pageYOffset || c.scrollTop)
    };
    Dg = function(a) {
        var c = _.fa(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"), function(a, c, h) {
            return c + h.toUpperCase()
        })
    };
    _.CM = function(a, c, f) {
        if (null !== a && c in a) throw Error("p`" + c);
        a[c] = f
    };
    _.Bw = function(a) {
        if (a instanceof _.pm && a.constructor === _.pm && a.qda === _.nm) return a.M8;
        _.da(a);
        return "type_error:SafeStyle"
    };
    To = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g;
    Pv = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;
    qu = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/;
    MQ = /\/\*/;
    NQ = function(a) {
        for (var c = !0, f = /^[-_a-zA-Z0-9]$/, g = 0; g < a.length; g++) {
            var h = a.charAt(g);
            if ("]" == h) {
                if (c) return !1;
                c = !0
            } else if ("[" == h) {
                if (!c) return !1;
                c = !1
            } else if (!c && !f.test(h)) return !1
        }
        return c
    };
    zH = function(a) {
        return a.replace(Pv, function(a, f, g, h) {
            var c = "";
            g = g.replace(/^(['"])(.*)\1$/, function(a, f, g) {
                c = f;
                return g
            });
            a = _.jw(g).cR();
            return f + c + a + c + h
        })
    };
    vs = function(a) {
        if (a instanceof _.su) a = 'url("' + _.Ls(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        else if (a instanceof _.ou) a = _.ru(a);
        else {
            a = String(a);
            var c = a.replace(To, "$1").replace(To, "$1").replace(Pv, "url");
            if (qu.test(c)) {
                if (c = !MQ.test(a)) {
                    for (var f = c = !0, g = 0; g < a.length; g++) {
                        var h = a.charAt(g);
                        "'" == h && f ? c = !c : '"' == h && c && (f = !f)
                    }
                    c = c && f && NQ(a)
                }
                a = c ? zH(a) : "zClosurez"
            } else a = "zClosurez"
        }
        return a
    };
    _.cp = function(a) {
        var c = "",
            f;
        for (f in a) {
            if (!/^[-_a-zA-Z0-9]+$/.test(f)) throw Error("e`" + f);
            var g = a[f];
            null != g && (g = _.ea(g) ? (0, _.De)(g, vs).join(" ") : vs(g), c += f + ":" + g + ";")
        }
        return c ? (new _.pm).XY(c) : _.rm
    };
    _.wm = function(a) {
        if (a instanceof _.xm && a.constructor === _.xm && a.pda === _.Bl) return a.L8;
        _.da(a);
        return "type_error:SafeStyleSheet"
    };
    _.KQ = function(a, c) {
        if ((0, _.Hq)())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = c
    };
    _.Ng = function(a, c, f) {
        return _.Mf(window.document, arguments)
    };
    _.bw = function(a) {
        var c;
        if (_.Zn && !(_.W && _.sl("9") && !_.sl("10") && _.D.SVGElement && a instanceof _.D.SVGElement) && (c = a.parentElement)) return c;
        c = a.parentNode;
        return _.iz(c) ? c : null
    };
    dg = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    };
    eg = {
        IMG: " ",
        BR: "\n"
    };
    bg = function(a, c, f) {
        if (!(a.nodeName in dg))
            if (3 == a.nodeType) f ? c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : c.push(a.nodeValue);
            else if (a.nodeName in eg) c.push(eg[a.nodeName]);
        else
            for (a = a.firstChild; a;) bg(a, c, f), a = a.nextSibling
    };
    _.$f = function(a) {
        if (_.ag && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var c = [];
            bg(a, c, !0);
            a = c.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        _.ag || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    };
    _.cg = function(a) {
        var c = [];
        bg(a, c, !1);
        return c.join("")
    };
    _.Pg = function(a, c, f, g) {
        this.top = a;
        this.right = c;
        this.bottom = f;
        this.left = g
    };
    _.k = _.Pg.prototype;
    _.k.Ne = _.b(3);
    _.k.Cd = function() {
        return this.bottom - this.top
    };
    _.k.clone = function() {
        return new _.Pg(this.top, this.right, this.bottom, this.left)
    };
    _.k.contains = function(a) {
        return this && a ? a instanceof _.Pg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    _.k.expand = function(a, c, f, g) {
        _.Vg(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(c), this.bottom += Number(f), this.left -= Number(g));
        return this
    };
    _.k.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.k.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.k.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    _.k.translate = function(a, c) {
        a instanceof _.X ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, _.qe(c) && (this.top += c, this.bottom += c));
        return this
    };
    _.k.scale = function(a, c) {
        c = _.qe(c) ? c : a;
        this.left *= a;
        this.right *= a;
        this.top *= c;
        this.bottom *= c;
        return this
    };
    var bZ, qg, xg, zg, Sg, Rg;
    _.Mg = function(a, c, f) {
        if (_.fa(c))(c = _.Fg(a, c)) && (a.style[c] = f);
        else
            for (var g in c) {
                f = a;
                var h = c[g],
                    l = _.Fg(f, g);
                l && (f.style[l] = h)
            }
    };
    bZ = {};
    _.Fg = function(a, c) {
        var f = bZ[c];
        if (!f) {
            var g = _.Cg(c);
            f = g;
            void 0 === a.style[g] && (g = (_.ef ? "Webkit" : _.df ? "Moz" : _.W ? "ms" : _.cf ? "O" : null) + Dg(g), void 0 !== a.style[g] && (f = g));
            bZ[c] = f
        }
        return f
    };
    _.lg = function(a, c) {
        var f = _.zf(a);
        return f.defaultView && f.defaultView.getComputedStyle && (a = f.defaultView.getComputedStyle(a, null)) ? a[c] || a.getPropertyValue(c) || "" : ""
    };
    _.mg = function(a, c) {
        return a.currentStyle ? a.currentStyle[c] : null
    };
    _.ng = function(a, c) {
        return _.lg(a, c) || _.mg(a, c) || a.style && a.style[c]
    };
    _.Zg = function(a, c, f) {
        if (c instanceof _.X) {
            var g = c.x;
            c = c.y
        } else g = c, c = f;
        a.style.left = xg(g, !1);
        a.style.top = xg(c, !1)
    };
    qg = function(a) {
        try {
            var c = a.getBoundingClientRect()
        } catch (f) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        _.W && a.ownerDocument.body && (a = a.ownerDocument, c.left -= a.documentElement.clientLeft + a.body.clientLeft, c.top -= a.documentElement.clientTop + a.body.clientTop);
        return c
    };
    _.Yr = function(a, c) {
        c = c || _.Kf(window.document);
        var f = c || _.Kf(window.document);
        var g = _.sg(a),
            h = _.sg(f),
            l = _.Ug(f);
        if (f == _.Kf(window.document)) {
            var n = g.x - f.scrollLeft;
            g = g.y - f.scrollTop;
            _.W && !_.gq(10) && (n += l.left, g += l.top)
        } else n = g.x - h.x - l.left, g = g.y - h.y - l.top;
        a = zg(a);
        l = f.clientHeight - a.height;
        h = f.scrollLeft;
        var q = f.scrollTop;
        h += Math.min(n, Math.max(n - (f.clientWidth - a.width), 0));
        q += Math.min(g, Math.max(g - l, 0));
        f = new _.X(h, q);
        c.scrollLeft = f.x;
        c.scrollTop = f.y
    };
    _.sg = function(a) {
        var c = _.zf(a),
            f = new _.X(0, 0);
        var g = c ? _.zf(c) : window.document;
        g = !_.W || _.gq(9) || _.Lf(_.xf(g).wc) ? g.documentElement : g.body;
        if (a == g) return f;
        a = qg(a);
        c = _.Jf(_.xf(c).wc);
        f.x = a.left + c.x;
        f.y = a.top + c.y;
        return f
    };
    _.tg = function(a, c) {
        var f = new _.X(0, 0),
            g = _.jg(_.zf(a));
        if (!_.Eo(g, "parent")) return f;
        do {
            var h = g == c ? _.sg(a) : _.Kt(a);
            f.x += h.x;
            f.y += h.y
        } while (g && g != c && g != g.parent && (a = g.frameElement) && (g = g.parent));
        return f
    };
    _.Kt = function(a) {
        a = qg(a);
        return new _.X(a.left, a.top)
    };
    _.wg = function(a, c, f) {
        if (c instanceof _.fg) f = c.height, c = c.width;
        else if (void 0 == f) throw Error("r");
        a.style.width = xg(c, !0);
        a.style.height = xg(f, !0)
    };
    xg = function(a, c) {
        "number" == typeof a && (a = (c ? Math.round(a) : a) + "px");
        return a
    };
    _.Nt = function(a) {
        var c = zg;
        if ("none" != _.ng(a, "display")) return c(a);
        var f = a.style,
            g = f.display,
            h = f.visibility,
            l = f.position;
        f.visibility = "hidden";
        f.position = "absolute";
        f.display = "inline";
        a = c(a);
        f.display = g;
        f.position = l;
        f.visibility = h;
        return a
    };
    zg = function(a) {
        var c = a.offsetWidth,
            f = a.offsetHeight,
            g = _.ef && !c && !f;
        return _.kf(c) && !g || !a.getBoundingClientRect ? new _.fg(c, f) : (a = qg(a), new _.fg(a.right - a.left, a.bottom - a.top))
    };
    _.Ag = function(a, c) {
        a = a.style;
        "opacity" in a ? a.opacity = c : "MozOpacity" in a ? a.MozOpacity = c : "filter" in a && (a.filter = "" === c ? "" : "alpha(opacity=" + 100 * Number(c) + ")")
    };
    _.Rj = function(a, c) {
        a.style.display = c ? "" : "none"
    };
    _.tO = function(a) {
        var c = _.xf(void 0),
            f = c.Wb();
        if (_.W && f.createStyleSheet) return c = f.createStyleSheet(), _.QF(c, a), c;
        f = _.Cf(c.wc, "HEAD", void 0, void 0)[0];
        if (!f) {
            var g = _.Cf(c.wc, "BODY", void 0, void 0)[0];
            f = c.R("HEAD");
            g.parentNode.insertBefore(f, g)
        }
        g = c.R("STYLE");
        _.QF(g, a);
        c.appendChild(f, g);
        return g
    };
    _.QF = function(a, c) {
        c = _.wm(c);
        _.W && _.kf(a.cssText) ? a.cssText = c : a.innerHTML = c
    };
    _.Eg = function(a) {
        return "rtl" == _.ng(a, "direction")
    };
    _.Bg = _.df ? "MozUserSelect" : _.ef || _.yk ? "WebkitUserSelect" : null;
    _.Qg = function(a, c) {
        if (/^\d+px?$/.test(c)) return (0, window.parseInt)(c, 10);
        var f = a.style.left,
            g = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = c;
        c = a.style.pixelLeft;
        a.style.left = f;
        a.runtimeStyle.left = g;
        return +c
    };
    Sg = {
        thin: 2,
        medium: 4,
        thick: 6
    };
    Rg = function(a, c) {
        if ("none" == _.mg(a, c + "Style")) return 0;
        c = _.mg(a, c + "Width");
        return c in Sg ? Sg[c] : _.Qg(a, c)
    };
    _.Ug = function(a) {
        if (_.W && !_.gq(9)) {
            var c = Rg(a, "borderLeft"),
                f = Rg(a, "borderRight"),
                g = Rg(a, "borderTop");
            a = Rg(a, "borderBottom");
            return new _.Pg(g, f, a, c)
        }
        c = _.lg(a, "borderLeftWidth");
        f = _.lg(a, "borderRightWidth");
        g = _.lg(a, "borderTopWidth");
        a = _.lg(a, "borderBottomWidth");
        return new _.Pg((0, window.parseFloat)(g), (0, window.parseFloat)(f), (0, window.parseFloat)(a), (0, window.parseFloat)(c))
    };

    _.rF = function(a) {
        this.U0 = a
    };
    _.rF.prototype.toString = function() {
        return this.U0
    };
    _.fp = function(a) {
        _.dh.call(this);
        this.SS = 1;
        this.Y4 = [];
        this.g5 = 0;
        this.$x = [];
        this.yU = {};
        this.Eda = !!a
    };
    _.J(_.fp, _.dh);
    _.k = _.fp.prototype;
    _.k.subscribe = function(a, c, f) {
        var g = this.yU[a];
        g || (g = this.yU[a] = []);
        var h = this.SS;
        this.$x[h] = a;
        this.$x[h + 1] = c;
        this.$x[h + 2] = f;
        this.SS = h + 3;
        g.push(h);
        return h
    };
    _.k.b3 = _.b(32);
    _.k.unsubscribe = function(a, c, f) {
        if (a = this.yU[a]) {
            var g = this.$x;
            if (a = _.ue(a, function(a) {
                    return g[a + 1] == c && g[a + 2] == f
                })) return this.zf(a)
        }
        return !1
    };
    _.k.zf = function(a) {
        var c = this.$x[a];
        if (c) {
            var f = this.yU[c];
            0 != this.g5 ? (this.Y4.push(a), this.$x[a + 1] = _.gh) : (f && _.xe(f, a), delete this.$x[a], delete this.$x[a + 1], delete this.$x[a + 2])
        }
        return !!c
    };
    _.k.q0 = function(a, c) {
        var f = this.yU[a];
        if (f) {
            for (var g = Array(arguments.length - 1), h = 1, l = arguments.length; h < l; h++) g[h - 1] = arguments[h];
            if (this.Eda)
                for (h = 0; h < f.length; h++) {
                    var n = f[h];
                    iN(this.$x[n + 1], this.$x[n + 2], g)
                } else {
                    this.g5++;
                    try {
                        for (h = 0, l = f.length; h < l; h++) n = f[h], this.$x[n + 1].apply(this.$x[n + 2], g)
                    } finally {
                        if (this.g5--, 0 < this.Y4.length && 0 == this.g5)
                            for (; f = this.Y4.pop();) this.zf(f)
                    }
                }
            return 0 != h
        }
        return !1
    };
    var iN = function(a, c, f) {
        _.Qp(function() {
            a.apply(c, f)
        })
    };
    _.fp.prototype.clear = function(a) {
        if (a) {
            var c = this.yU[a];
            c && ((0, _.Be)(c, this.zf, this), delete this.yU[a])
        } else this.$x.length = 0, this.yU = {}
    };
    _.fp.prototype.Da = function(a) {
        if (a) {
            var c = this.yU[a];
            return c ? c.length : 0
        }
        a = 0;
        for (c in this.yU) a += this.Da(c);
        return a
    };
    _.fp.prototype.wj = function() {
        _.fp.T.wj.call(this);
        this.clear();
        this.Y4.length = 0
    };
    _.lH = function(a) {
        _.dh.call(this);
        this.ho = new _.fp(a);
        _.pD(this, this.ho)
    };
    _.J(_.lH, _.dh);
    _.k = _.lH.prototype;
    _.k.subscribe = function(a, c, f) {
        return this.ho.subscribe(a.toString(), c, f)
    };
    _.k.b3 = _.b(31);
    _.k.unsubscribe = function(a, c, f) {
        return this.ho.unsubscribe(a.toString(), c, f)
    };
    _.k.zf = function(a) {
        return this.ho.zf(a)
    };
    _.k.q0 = function(a, c) {
        return this.ho.q0(a.toString(), c)
    };
    _.k.clear = function(a) {
        this.ho.clear(_.kf(a) ? a.toString() : void 0)
    };
    _.k.Da = function(a) {
        return this.ho.Da(_.kf(a) ? a.toString() : void 0)
    };

    var mm, uu, sm, tm;
    mm = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    uu = /^[a-zA-Z0-9-]+$/;
    sm = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    };
    tm = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    _.tu = function(a) {
        var c = 0,
            f = "",
            g = function(a) {
                _.ea(a) ? (0, _.Be)(a, g) : (a = _.eG(a), f += _.OG(a), a = a.Im(), 0 == c ? c = a : 0 != a && c != a && (c = null))
            };
        (0, _.Be)(arguments, g);
        return _.uf(f, c)
    };
    _.Dr = function(a, c) {
        if (!uu.test("div")) throw Error("s`div");
        if ("DIV" in tm) throw Error("D`div");
        var f = null,
            g = "";
        if (a)
            for (n in a) {
                if (!uu.test(n)) throw Error("E`" + n);
                var h = a[n];
                if (null != h) {
                    var l = n;
                    if (h instanceof _.ou) h = _.ru(h);
                    else if ("style" == l.toLowerCase()) {
                        if (!_.Vg(h)) throw Error("M`" + typeof h + "`" + h);
                        h instanceof _.pm || (h = _.cp(h));
                        h = _.Bw(h)
                    } else {
                        if (/^on/i.test(l)) throw Error("F`" + l + "`" + h);
                        if (l.toLowerCase() in sm)
                            if (h instanceof _.qE) h = _.wx(h);
                            else if (h instanceof _.su) h = _.Ls(h);
                        else if (_.fa(h)) h =
                            _.jw(h).cR();
                        else throw Error("ea`" + l + "`div`" + h);
                    }
                    h.nK && (h = h.cR());
                    l = l + '="' + _.He(String(h)) + '"';
                    g += " " + l
                }
            }
        var n = "<div" + g;
        null != c ? _.ea(c) || (c = [c]) : c = [];
        !0 === mm.div ? n += ">" : (f = _.tu(c), n += ">" + _.OG(f) + "</div>", f = f.Im());
        (a = a && a.dir) && (f = /^(ltr|rtl|auto)$/i.test(a) ? 0 : null);
        return _.uf(n, f)
    };
    _.Nk = function(a, c) {
        _.ea(c) || (c = [c]);
        c = (0, _.De)(c, function(a) {
            return _.fa(a) ? a : a.Rr + " " + a.duration + "s " + a.timing + " " + a.delay + "s"
        });
        _.Mg(a, "transition", c.join(","))
    };
    _.Pk = _.hq(function() {
        if (_.W) return _.sl("10.0");
        var a = _.Br("DIV"),
            c = _.ef ? "-webkit" : _.df ? "-moz" : _.W ? "-ms" : _.cf ? "-o" : null,
            f = {
                transition: "opacity 1s linear"
            };
        c && (f[c + "-transition"] = "opacity 1s linear");
        c = _.Dr({
            style: f
        });
        _.KQ(a, _.OG(c));
        a = a.firstChild;
        c = a.style[_.Cg("transition")];
        return "" != ("undefined" !== typeof c ? c : a.style[_.Fg(a, "transition")] || "")
    });

    var Rv, LQ, OQ, PQ, Tv, PZ, Gi, fj, hw, yE, yw, Iw;
    _.MA = function(a, c) {
        if (_.Bv && !c) return _.D.atob(a);
        var f = "";
        _.nw(a, function(a) {
            f += String.fromCharCode(a)
        });
        return f
    };
    _.Ei = function(a) {
        var c = String(a("immediate") || "");
        a = String(a("prompt") || "");
        return "true" === c || "none" === a
    };
    PZ = function() {
        var a, c = null;
        _.dj.iterate(function(f, g) {
            0 === f.indexOf("G_AUTHUSER_") && (f = _.jj(f.substring(11)), !a || f.Gb && !a.Gb || f.Gb == a.Gb && f.Ke > a.Ke) && (a = f, c = g)
        });
        return {
            fU: a,
            authuser: c
        }
    };
    Gi = [".APPS.GOOGLEUSERCONTENT.COM", "@DEVELOPER.GSERVICEACCOUNT.COM"];
    fj = function(a) {
        a = a.toUpperCase();
        for (var c = 0, f = Gi.length; c < f; ++c) {
            var g = a.split(Gi[c]);
            2 == g.length && "" === g[1] && (a = g[0])
        }
        a = a.replace(/-/g, "_").toUpperCase();
        40 < a.length && (c = new _.pi, c.bB(a), a = c.Of().toUpperCase());
        return a
    };
    hw = function(a) {
        if (!a) return [];
        a = a.split("=");
        return a[1] ? a[1].split("|") : []
    };
    yE = function(a) {
        a = a.split(":");
        return {
            clientId: a[0].split("=")[1],
            EL: hw(a[1]),
            DP: hw(a[2]),
            fP: hw(a[3])
        }
    };
    yw = function(a) {
        var c = PZ(),
            f = c.fU;
        c = c.authuser;
        var g = a && fj(a);
        if (null !== c) {
            var h;
            _.dj.iterate(function(a, c) {
                (a = _.wj(a)) && a.uf && (g && a.ep != g || a.Gb == f.Gb && a.Ke == f.Ke && (h = c))
            });
            if (h) {
                var l = yE(h);
                a = l && l.EL[Number(c)];
                l = l && l.clientId;
                if (a) return {
                    authuser: c,
                    ZP: a,
                    clientId: l
                }
            }
        }
        return null
    };
    _.YF = function(a, c) {
        a = _.au(a);
        if (!a || !c && a.error) return null;
        c = Math.floor((new Date).getTime() / 1E3);
        return a.expires_at && c > a.expires_at ? null : a
    };
    _.Lw = function(a, c) {
        if (c) {
            var f = c;
            var g = a
        } else _.fa(a) ? g = a : f = a;
        f ? _.RF(f, g) : _.Kb(g)
    };
    _.ek = function(a) {
        if (!a) return null;
        "single_host_origin" !== a && (a = _.T.Pq(a));
        var c = window.location.hostname,
            f = c,
            g = _.rc;
        if ("single_host_origin" !== a) {
            f = a.split("://");
            if (2 == f.length) g = "https" === f.shift();
            else return _.kd("WARNING invalid cookie_policy: " + a), null;
            f = f[0]
        }
        if (-1 !== f.indexOf(":")) f = c = "";
        else {
            a = "." + f;
            if (c.lastIndexOf(a) !== c.length - a.length) return _.kd("Invalid cookie_policy domain: " + f), null;
            f = a;
            c = f.split(".").length - 1
        }
        return {
            domain: f,
            Gb: g,
            Ke: c
        }
    };
    _.ZM = function(a) {
        var c = _.ek(a);
        if (!c) return new _.dk("G_USERSTATE_");
        a = ["G_USERSTATE_", _.rc && c.Gb ? "S" : "H", c.Ke].join("");
        var f = _.Tj[a];
        f || (f = {
            Fr: 63072E3
        }, _.Sl(_.hk(c), f), f = new _.Vj(a, f), _.Tj[a] = f, c = f.read(), "undefined" !== typeof c && null !== c && (window.document.cookie = a + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/", f.write(c)));
        return f
    };
    _.Zv = function(a) {
        var c = _.ZM(a).read();
        a = _.r();
        if (c) {
            c = c.split(":");
            for (var f; f = c.shift();) f = f.split("="), a[f[0]] = f[1]
        }
        return a
    };
    Iw = function(a) {
        return _.Ei(function(c) {
            return a[c]
        })
    };
    var Sw, vw, Pw, Nw, Kw, Jm, u0, rE, ND, Q_, mw, Yv, Xv, Wv, Sv, Au;
    Sw = 0;
    vw = !1;
    Pw = [];
    Nw = {};
    Kw = {};
    _.MD = null;
    _.Rw = function(a) {
        var c = _.wu;
        return function(f) {
            if (this.f == c && this.t == _.T.Wd(this.f) && this.origin == _.T.$d(this.f)) return a.apply(this, arguments)
        }
    };
    _.Xw = function(a) {
        null === Pw ? a && a() : rE(a)
    };
    Jm = function(a) {
        "function" === typeof a.setAttribute ? a.setAttribute("aria-hidden", "true") : a["aria-hidden"] = "true"
    };
    u0 = function(a) {
        var c = _.R.Qc;
        if (null != c(a).jsh) return a;
        if (c = String(c().jsh || _.bb.h || "")) {
            var f = (a + "#").indexOf("#");
            a = a.substr(0, f) + (-1 !== a.substr(0, f).indexOf("?") ? "&" : "?") + "jsh=" + (0, window.encodeURIComponent)(c) + a.substr(f)
        }
        return a
    };
    rE = function(a) {
        a && Pw.push(a);
        a = _.wu;
        var c = window.document.getElementById(a),
            f = (new Date).getTime();
        if (c) {
            if (Sw && 6E4 > f - Sw) return;
            var g = _.T.Wd(a);
            g && (Q_("oauth2relayReady", g), Q_("oauth2callback", g));
            c.parentNode.removeChild(c);
            if (/Firefox/.test(window.navigator.userAgent)) try {
                window.frames[a] = void 0
            } catch (l) {}
            Au();
            a = _.wu
        }
        Sw = f;
        var h = String(2147483647 * (0, _.Vb)() | 0);
        c = _.P("oauth-flow/proxyUrl") || _.P("oauth-flow/relayUrl");
        _.vE() ? _.MD = _.Sm.Nf({
            where: _.R.Jk(),
            url: c,
            id: a,
            attributes: {
                style: {
                    width: "1px",
                    height: "1px",
                    position: "absolute",
                    top: "-100px",
                    display: "none"
                },
                "aria-hidden": "true"
            },
            dontclear: !0
        }) : (c = [c, "?parent=", (0, window.encodeURIComponent)(_.Rb.Pq(window.location.href)), "#rpctoken=", h, "&forcesecure=1"].join(""), f = _.R.Jk(), g = _.R.Fh({
            name: a,
            id: a
        }), g.src = u0(c), g.style.width = "1px", g.style.height = "1px", g.style.position = "absolute", g.style.top = "-100px", g.tabIndex = -1, Jm(g), f.appendChild(g), _.T.tf(a));
        ND("oauth2relayReady", h, function() {
            Q_("oauth2relayReady", h);
            var a = Pw;
            if (null !== a) {
                Pw = null;
                for (var c = 0, f = a.length; c <
                    f; ++c) a[c]()
            }
        });
        ND("oauth2callback", h, function(a) {
            var c = _.R.Qc;
            c = c(a);
            var f = c.state;
            a = f.replace(/\|.*$/, "");
            a = {}.hasOwnProperty.call(Kw, a) ? Kw[a] : null;
            c.state = a;
            if (null != c.state) {
                a = Nw[f];
                delete Nw[f];
                f = a && a.key || "token";
                var g = c = _.Jw(a && a.params, c),
                    h = _.lw(g);
                if (h) {
                    var l = _.Zv(g.cookie_policy);
                    h = "0" == l[h] || "X" == l[h]
                } else h = !1;
                !h && g && 0 <= (" " + (g.scope || "") + " ").indexOf(" https://www.googleapis.com/auth/plus.login ") && _.P("isLoggedIn") && "1" === (g && g._aa) && (g._aa = "0", vw || (vw = !0, _.pw(g)));
                _.Lw(f, c);
                c = _.YF(f);
                if (a) {
                    f = a.popup;
                    g = a.after_redirect;
                    if (f && "keep_open" != g) try {
                        f.close()
                    } catch (A) {}
                    a.callback && (a.callback(c), a.callback = null)
                }
            }
        })
    };
    ND = function(a, c, f) {
        _.vE() ? _.MD.register(a, f, _.Vz) : _.T.register(a + ":" + c, _.Rw(f))
    };
    Q_ = function(a, c) {
        _.vE() ? _.MD.unregister(a) : _.T.unregister(a + ":" + c)
    };
    _.pw = function(a) {
        var c = _.P("oauth-flow/toast/position");
        "top" !== c && (c = "bottom");
        var f = window.document.createElement("div");
        Rv = f;
        f.style.cssText = "position:fixed;left:0px;z-index:1000;width:100%;";
        _.Mg(f, "visibility", "hidden");
        _.Mg(f, c, "-40px");
        _.Mg(f, "height", "128px");
        var g = f;
        if ("desktop" == _.P("deviceType")) {
            g = window.document.createElement("div");
            g.style.cssText = "float:left;position:relative;left:50%;";
            f.appendChild(g);
            var h = window.document.createElement("div");
            h.style.cssText = "float:left;position:relative;left:-50%";
            g.appendChild(h);
            g = h
        }
        h = "top" == c ? "-" : "";
        Tv = (0, window.parseInt)(h + 88, 10);
        Rv.style.webkitTransform = "translate3d(0px," + h + 88 + "px,0px)";
        Rv.style.transform = "translate3d(0px," + h + 88 + "px,0px)";
        h = window;
        try {
            for (; h.parent != h && h.parent.document;) h = h.parent
        } catch (l) {}
        h = h.document.body;
        try {
            h.insertBefore(f, h.firstChild)
        } catch (l) {}
        _.Sm.Nf({
            url: ":socialhost:/:session_prefix:_/widget/oauthflow/toast",
            queryParams: {
                clientId: a.client_id,
                idToken: a.id_token
            },
            where: g,
            onRestyle: function() {
                "top" === c ? mw(!0) : mw(!1)
            }
        })
    };
    mw = function(a) {
        var c = a ? Xv : Yv,
            f = a ? Yv : Xv;
        a = a ? "-" : "";
        Tv = (0, window.parseInt)(a + 88, 10);
        Rv.style.webkitTransform = "translate3d(0px," + a + 88 + "px,0px)";
        Rv.style.transform = "translate3d(0px," + a + 88 + "px,0px)";
        Rv.style.display = "";
        Rv.style.visibility = "visible";
        c();
        _.Rn(f, LQ + OQ);
        _.Rn(Wv, LQ + OQ + PQ)
    };
    Yv = function() {
        var a = Tv - 88;
        Sv(a, LQ);
        Tv = a
    };
    Xv = function() {
        var a = Tv + 88;
        Sv(a, PQ);
        Tv = a
    };
    Wv = function() {
        Rv.parentNode.removeChild(Rv)
    };
    Sv = function(a, c) {
        var f = Rv;
        _.Nk(f, [{
            Rr: "-webkit-transform",
            duration: c / 1E3,
            timing: "ease",
            delay: 0
        }]);
        _.Nk(f, [{
            Rr: "transform",
            duration: c / 1E3,
            timing: "ease",
            delay: 0
        }]);
        _.Rn(function() {
            f.style.webkitTransform = "translate3d(0px," + a + "px,0px)";
            f.style.transform = "translate3d(0px," + a + "px,0px)"
        }, 0)
    };
    _.Jw = function(a, c) {
        var f = null;
        a && c && (f = c.client_id = c.client_id || a.client_id, c.scope = c.scope || a.scope, c.g_user_cookie_policy = a.cookie_policy, c.cookie_policy = c.cookie_policy || a.cookie_policy, c.response_type = c.response_type || a.response_type);
        if (c) {
            c.issued_at || (c.issued_at = String(Math.floor((new Date).getTime() / 1E3)));
            var g = (0, window.parseInt)(c.expires_in, 10) || 86400;
            c.error && (g = _.P("oauth-flow/errorMaxAge") || 86400);
            c.expires_in = String(g);
            c.expires_at || (c.expires_at = String(Math.floor((new Date).getTime() /
                1E3) + g));
            a && Iw(a) || (c["g-oauth-window"] = {}.popup);
            c._aa || c.error || null != yw(f) || !Iw(a) || (c._aa = "1");
            a = c.status = {};
            a.google_logged_in = !!c.session_state;
            f = a.signed_in = !!c.access_token;
            a.method = f ? c["g-oauth-window"] ? "PROMPT" : "AUTO" : null
        }
        return c
    };
    Au = function() {
        _.wu = "oauth2relay" + String(2147483647 * (0, _.Vb)() | 0)
    };
    _.Vv = function(a) {
        a = a && a.id_token;
        if (!a || !a.split(".")[1]) return null;
        a = (a.split(".")[1] + "...").replace(/^((....)+)\.?\.?\.?$/, "$1");
        a = _.of(_.MA(a, !0));
        if (!1 === a) throw Error("yb");
        return a
    };
    _.lw = function(a) {
        return (a = _.Vv(a)) ? a.sub : null
    };
    _.Bu = new _.lH;
    _.mH = new _.rF("oauth");
    _.vE = function() {
        return !!_.P("oauth-flow/usegapi")
    };
    Au();
    _.P("oauth-flow/client_id");
    var fS = String(_.P("oauth-flow/redirectUri"));
    if (fS) fS.replace(/[#][\s\S]*/, "");
    else {
        var gS = _.Rb.Pq(window.location.href);
        _.P("oauth-flow/callbackUrl");
        (0, window.encodeURIComponent)(gS)
    }
    _.Rb.Pq(window.location.href);
    LQ = 1E3;
    OQ = 3E3;
    PQ = 1E3;

    _.Tc = _.Ka(_.bb, "rw", _.r());
    var Uc = function(a, c) {
        (a = _.Tc[a]) && a.state < c && (a.state = c)
    };
    var Vc = function(a) {
        a = (a = _.Tc[a]) ? a.oid : void 0;
        if (a) {
            var c = _.ua.getElementById(a);
            c && c.parentNode.removeChild(c);
            delete _.Tc[a];
            Vc(a)
        }
    };
    _.bf = function(a) {
        a = a.container;
        "string" === typeof a && (a = window.document.getElementById(a));
        return a
    };
    _.gf = function(a) {
        var c = a.clientWidth;
        return "position:absolute;top:-10000px;width:" + (c ? c + "px" : a.style.width || "300px") + ";margin:0px;border-style:none;"
    };
    _.hf = function(a, c) {
        var f = {},
            g = a.va(),
            h = c && c.width,
            l = c && c.height,
            n = c && c.verticalAlign;
        n && (f.verticalAlign = n);
        h || (h = g.width || a.width);
        l || (l = g.height || a.height);
        g.width = f.width = h;
        g.height = f.height = l;
        g = a.rb();
        h = a.Hh();
        Uc(h, 2);
        a: {
            h = a.V();f = f || {};
            if (_.bb.oa) {
                var q = g.id;
                if (q) {
                    l = (l = _.Tc[q]) ? l.state : void 0;
                    if (1 === l || 4 === l) break a;
                    Vc(q)
                }
            }(l = h.nextSibling) && l.getAttribute && l.getAttribute("data-gapistub") && (h.parentNode.removeChild(l), h.style.cssText = "");l = f.width;n = f.height;
            var t = h.style;t.textIndent = "0";t.margin =
            "0";t.padding = "0";t.background = "transparent";t.borderStyle = "none";t.cssFloat = "none";t.styleFloat = "none";t.lineHeight = "normal";t.fontSize = "1px";t.verticalAlign = "baseline";h = h.style;h.display = "inline-block";g = g.style;g.position = "static";g.left = "0";g.top = "0";g.visibility = "visible";l && (h.width = g.width = l + "px");n && (h.height = g.height = n + "px");f.verticalAlign && (h.verticalAlign = f.verticalAlign);q && Uc(q, 3)
        }(q = c ? c.title : null) && a.rb().setAttribute("title", q);
        (c = c ? c.ariaLabel : null) && a.rb().setAttribute("aria-label",
            c)
    };
    _.jf = function(a) {
        var c = a.V();
        c && c.removeChild(a.rb())
    };
    _.Ru = function(a) {
        a.where = _.bf(a);
        var c = a.messageHandlers = a.messageHandlers || {},
            f = function(a) {
                _.hf(this, a)
            };
        c._ready = f;
        c._renderstart = f;
        var g = a.onClose;
        a.onClose = function(a) {
            g && g.call(this, a);
            _.jf(this)
        };
        a.onCreate = function(a) {
            a = a.rb();
            a.style.cssText = _.gf(a)
        }
    };

    _.V = {};
    _.Sb = {};
    window.iframer = _.Sb;
    _.V.Kh = _.V.Kh || {};
    _.V.Kh.jp = function(a) {
        try {
            return !!a.document
        } catch (c) {}
        return !1
    };
    _.V.Kh.Uk = function(a) {
        var c = a.parent;
        return a != c && _.V.Kh.jp(c) ? _.V.Kh.Uk(c) : a
    };
    _.V.Kh.St = function(a) {
        var c = a.userAgent || "";
        a = a.product || "";
        return 0 != c.indexOf("Opera") && -1 == c.indexOf("WebKit") && "Gecko" == a && 0 < c.indexOf("rv:1.")
    };

    var gc, ic, bG, oc, qc, hG, uc, vc, eo, xc, yc, Mc, Nc, Oc, Qc, ec;
    gc = function() {
        _.V.Kl++;
        return ["I", _.V.Kl, "_", (new Date).getTime()].join("")
    };
    ic = function(a) {
        return a instanceof Array ? a.join(",") : a instanceof Object ? _.mf(a) : a
    };
    bG = function(a) {
        var c = _.P("googleapis.config/elog");
        if (c) try {
            c(a)
        } catch (f) {}
    };
    oc = function(a) {
        a && a.match(pc) && _.Fa("googleapis.config/gcv", a)
    };
    qc = function(a) {
        _.Rb.aX.ys(a)
    };
    hG = function(a) {
        _.Rb.aX.NT(a)
    };
    _.sc = function(a, c) {
        c = c || {};
        for (var f in a) a.hasOwnProperty(f) && (c[f] = a[f]);
        return c
    };
    _.tc = function(a, c, f, g, h) {
        var l = [],
            n;
        for (n in a)
            if (a.hasOwnProperty(n)) {
                var q = c,
                    t = f,
                    v = a[n],
                    w = g,
                    A = Zb(n);
                A[q] = A[q] || {};
                w = _.R.Dg(w, v);
                v._iframe_wrapped_rpc_ && (w._iframe_wrapped_rpc_ = !0);
                A[q][t] = w;
                l.push(n)
            } if (h)
            for (n in _.V.uW) _.V.uW.hasOwnProperty(n) && l.push(n);
        return l.join(",")
    };
    uc = function(a, c, f) {
        var g = {};
        if (a && a._methods) {
            a = a._methods.split(",");
            for (var h = 0; h < a.length; h++) {
                var l = a[h];
                g[l] = $b(l, c, f)
            }
        }
        return g
    };
    vc = function(a) {
        if (a && a.disableMultiLevelParentRelay) a = !1;
        else {
            var c;
            if (c = _.Sb && _.Sb._open && "inline" != a.style && !0 !== a.inline) a = a.container, c = !(a && ("string" == typeof a && window.document.getElementById(a) || window.document == (a.ownerDocument || a.document)));
            a = c
        }
        return a
    };
    eo = function(a, c) {
        var f = {};
        c = c.params || {};
        for (var g in a) "#" == g.charAt(0) && (f[g.substring(1)] = a[g]), 0 == g.indexOf("fr-") && (f[g.substring(3)] = a[g]), "#" == c[g] && (f[g] = a[g]);
        for (var h in f) delete a["fr-" + h], delete a["#" + h], delete a[h];
        return f
    };
    xc = function(a) {
        if (":" == a.charAt(0)) {
            var c = _.P("iframes/" + a.substring(1));
            a = {};
            _.Sl(c, a);
            (c = a.url) && (a.url = _.mc(c));
            a.params || (a.params = {});
            return a
        }
        return {
            url: _.mc(a)
        }
    };
    yc = function(a) {
        function c() {}
        c.prototype = zc.prototype;
        a.prototype = new c
    };
    Mc = function(a) {
        return _.V.yf[a]
    };
    Nc = function(a, c) {
        _.V.yf[a] = c
    };
    Oc = function(a) {
        a = a || {};
        "auto" === a.height && (a.height = _.Ob.Cd());
        var c = window && Pc && Pc.ma();
        c ? c.Gm(a.width || 0, a.height || 0) : _.Sb && _.Sb._resizeMe && _.Sb._resizeMe(a)
    };
    Qc = function(a) {
        oc(a)
    };
    _.ba = function() {
        return _.ta.location.origin || _.ta.location.protocol + "//" + _.ta.location.host
    };
    ec = function(a) {
        var c = _.e(a.location.href, "urlindex");
        if (c = _.Ka(_.bb, "fUrl", [])[c]) {
            var f = a.location.hash;
            c += /#/.test(c) ? f.replace(/^#/, "&") : f;
            a.location.replace(c)
        }
    };
    if (window.ToolbarApi) Pc = window.ToolbarApi, Pc.ma = window.ToolbarApi.getInstance, Pc.prototype = window.ToolbarApi.prototype, _.k = Pc.prototype, _.k.openWindow = Pc.prototype.openWindow, _.k.rk = Pc.prototype.closeWindow, _.k.Tm = Pc.prototype.setOnCloseHandler, _.k.jj = Pc.prototype.canClosePopup, _.k.Gm = Pc.prototype.resizeWindow;
    else {
        var Pc = function() {},
            Rc = null;
        Pc.ma = function() {
            !Rc && window.external && window.external.GTB_IsToolbar && (Rc = new Pc);
            return Rc
        };
        _.k = Pc.prototype;
        _.k.openWindow = function(a) {
            return window.external.GTB_OpenPopup &&
                window.external.GTB_OpenPopup(a)
        };
        _.k.rk = function(a) {
            window.external.GTB_ClosePopupWindow && window.external.GTB_ClosePopupWindow(a)
        };
        _.k.Tm = function(a, c) {
            window.external.GTB_SetOnCloseHandler && window.external.GTB_SetOnCloseHandler(a, c)
        };
        _.k.jj = function(a) {
            return window.external.GTB_CanClosePopup && window.external.GTB_CanClosePopup(a)
        };
        _.k.Gm = function(a, c) {
            return window.external.GTB_ResizeWindow && window.external.GTB_ResizeWindow(a, c)
        };
        window.ToolbarApi = Pc;
        window.ToolbarApi.getInstance = Pc.ma
    };
    var iH = function() {
            _.T.register("_noop_echo", function() {
                this.callback(_.V.UI(_.V.Uc[this.f]))
            })
        },
        ac = function() {
            window.setTimeout(function() {
                _.T.call("..", "_noop_echo", _.V.Lr)
            }, 0)
        },
        $b = function(a, c, f) {
            var g = function(g) {
                var h = Array.prototype.slice.call(arguments, 0),
                    n = h[h.length - 1];
                if ("function" === typeof n) {
                    var q = n;
                    h.pop()
                }
                h.unshift(c, a, q, f);
                _.T.call.apply(_.T, h)
            };
            g._iframe_wrapped_rpc_ = !0;
            return g
        },
        Zb = function(a) {
            _.V.Rg[a] || (_.V.Rg[a] = {}, _.T.register(a, function(c, f) {
                var g = this.f;
                if (!("string" != typeof c ||
                        c in {} || g in {})) {
                    var h = this.callback,
                        l = _.V.Rg[a][g],
                        n;
                    l && Object.hasOwnProperty.call(l, c) ? n = l[c] : Object.hasOwnProperty.call(_.V.uW, a) && (n = _.V.uW[a]);
                    if (n) return g = Array.prototype.slice.call(arguments, 1), n._iframe_wrapped_rpc_ && h && g.push(h), n.apply({}, g)
                }
                _.sa(['Unregistered call in window "', window.name, '" for method "', a, '", via proxyId "', c, '" from frame "', g, '".'].join(""));
                return null
            }));
            return _.V.Rg[a]
        };
    _.V.ip = function(a, c, f) {
        var g = Array.prototype.slice.call(arguments);
        _.V.Pk(function(a) {
            a.sameOrigin && (g.unshift("/" + a.claimedOpenerId + "|" + window.location.protocol + "//" + window.location.host), _.T.call.apply(_.T, g))
        })
    };
    _.V.Sr = function(a, c) {
        _.T.register(a, c)
    };
    var pc = /^[-_.0-9A-Za-z]+$/,
        Hc = {
            open: "open",
            onready: "ready",
            close: "close",
            onresize: "resize",
            onOpen: "open",
            onReady: "ready",
            onClose: "close",
            onResize: "resize",
            onRenderStart: "renderstart"
        },
        Jc = {
            onBeforeParentOpen: "beforeparentopen"
        },
        Cc = {
            onOpen: function(a) {
                var c = a.va();
                a.Pa(c.container || c.element);
                return a
            },
            onClose: function(a) {
                a.remove()
            }
        };
    _.V.Wp = function(a) {
        var c = _.r();
        _.Sl(_.vb, c);
        _.Sl(a, c);
        return c
    };
    var zc = function(a, c, f, g, h, l, n, q) {
        this.config = xc(a);
        this.openParams = this.DW = c || {};
        this.params = f || {};
        this.methods = g;
        this.qy = !1;
        Ac(this, c.style);
        this.Aq = {};
        Bc(this, function() {
            var a;
            (a = this.DW.style) && _.V.yf[a] ? a = _.V.yf[a] : a ? (_.Lb(['Missing handler for style "', a, '". Continuing with default handler.'].join("")), a = null) : a = Cc;
            if (a) {
                if ("function" === typeof a) var c = a(this);
                else {
                    var f = {};
                    for (c in a) {
                        var g = a[c];
                        f[c] = "function" === typeof g ? _.R.Dg(a, g, this) : g
                    }
                    c = f
                }
                for (var n in h) a = c[n], "function" === typeof a && Dc(this,
                    h[n], _.R.Dg(c, a))
            }
            l && Dc(this, "close", l)
        });
        this.ya = this.ac = n;
        this.dj = (q || []).slice();
        n && this.dj.unshift(n.Hh())
    };
    zc.prototype.va = function() {
        return this.DW
    };
    zc.prototype.tb = function() {
        return this.params
    };
    zc.prototype.LW = function() {
        return this.methods
    };
    zc.prototype.ua = function() {
        return this.ya
    };
    var Ac = function(a, c) {
            a.qy || ((c = c && !_.V.yf[c] && _.V.XR[c]) ? (a.kz = [], c(function() {
                a.qy = !0;
                for (var c = 0, g = a.kz.length; c < g; ++c) a.kz[c].call(a)
            })) : a.qy = !0)
        },
        Bc = function(a, c) {
            a.qy ? c.call(a) : a.kz.push(c)
        };
    zc.prototype.zh = function(a, c) {
        Bc(this, function() {
            Dc(this, a, c)
        })
    };
    var Dc = function(a, c, f) {
        a.Aq[c] = a.Aq[c] || [];
        a.Aq[c].push(f)
    };
    zc.prototype.Ub = function(a, c) {
        Bc(this, function() {
            var f = this.Aq[a];
            if (f)
                for (var g = 0, h = f.length; g < h; ++g)
                    if (f[g] === c) {
                        f.splice(g, 1);
                        break
                    }
        })
    };
    zc.prototype.Pb = function(a, c) {
        var f = this.Aq[a];
        if (f)
            for (var g = Array.prototype.slice.call(arguments, 1), h = 0, l = f.length; h < l; ++h) try {
                var n = f[h].apply({}, g)
            } catch (q) {
                _.sa(['Exception when calling callback "', a, '" with exception "', q.name, ": ", q.message, '".'].join("")), bG(q)
            }
        return n
    };
    var Ec = function(a) {
            return "number" == typeof a ? {
                value: a,
                od: a + "px"
            } : "100%" == a ? {
                value: 100,
                od: "100%",
                Ul: !0
            } : null
        },
        Gc = function(a, c, f, g, h, l, n) {
            zc.call(this, a, c, f, g, Hc, h, l, n);
            this.id = c.id || gc();
            this.J2 = c.rpctoken && String(c.rpctoken) || Math.round(1E9 * (0, _.Vb)());
            this.Qfa = eo(this.params, this.config);
            this.Cz = {};
            Bc(this, function() {
                this.Pb("open");
                _.sc(this.Cz, this)
            })
        };
    yc(Gc);
    _.k = Gc.prototype;
    _.k.Pa = function(a, c) {
        if (!this.config.url) return _.sa("Cannot open iframe, empty URL."), this;
        var f = this.id;
        _.V.Uc[f] = this;
        var g = _.sc(this.methods);
        g._ready = this.Jg;
        g._close = this.close;
        g._open = this.T4;
        g._resizeMe = this.w0;
        g._renderstart = this.PA;
        var h = this.Qfa;
        this.J2 && (h.rpctoken = this.J2);
        h._methods = _.tc(g, f, "", this, !0);
        this.el = a = "string" === typeof a ? window.document.getElementById(a) : a;
        g = {};
        g.id = f;
        if (c) {
            g.attributes = c;
            var l = c.style;
            if ("string" === typeof l) {
                if (l) {
                    var n = [];
                    l = l.split(";");
                    for (var q = 0, t = l.length; q <
                        t; ++q) {
                        var v = l[q];
                        if (0 != v.length || q + 1 != t) v = v.split(":"), 2 == v.length && v[0].match(/^[ a-zA-Z_-]+$/) && v[1].match(/^[ +.%0-9a-zA-Z_-]+$/) ? n.push(v.join(":")) : _.sa(['Iframe style "', l[q], '" not allowed.'].join(""))
                    }
                    n = n.join(";")
                } else n = "";
                c.style = n
            }
        }
        this.va().allowPost && (g.allowPost = !0);
        this.va().forcePost && (g.forcePost = !0);
        g.queryParams = this.params;
        g.fragmentParams = h;
        g.paramsSerializer = ic;
        this.jJ = _.tb(this.config.url, a, g);
        a = this.jJ.getAttribute("data-postorigin") || this.jJ.src;
        _.V.Uc[f] = this;
        _.T.Wg(this.id,
            this.J2);
        _.T.Xg(this.id, a);
        return this
    };
    _.k.fg = function(a, c) {
        this.Cz[a] = c
    };
    _.k.Hh = function() {
        return this.id
    };
    _.k.rb = function() {
        return this.jJ
    };
    _.k.V = function() {
        return this.el
    };
    _.k.qc = function(a) {
        this.el = a
    };
    _.k.Jg = function(a) {
        var c = uc(a, this.id, "");
        this.ya && "function" == typeof this.methods._ready && (a._methods = _.tc(c, this.ya.Hh(), this.id, this, !1), this.methods._ready(a));
        _.sc(a, this);
        _.sc(c, this);
        this.Pb("ready", a)
    };
    _.k.PA = function(a) {
        this.Pb("renderstart", a)
    };
    _.k.close = function(a) {
        a = this.Pb("close", a);
        delete _.V.Uc[this.id];
        return a
    };
    _.k.remove = function() {
        var a = window.document.getElementById(this.id);
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    _.k.T4 = function(a) {
        var c = uc(a.params, this.id, a.proxyId);
        delete a.params._methods;
        "_parent" == a.openParams.anchor && (a.openParams.anchor = this.el);
        if (vc(a.openParams)) new Ic(a.url, a.openParams, a.params, c, c._onclose, this, a.openedByProxyChain);
        else {
            var f = new Gc(a.url, a.openParams, a.params, c, c._onclose, this, a.openedByProxyChain),
                g = this;
            Bc(f, function() {
                var a = {
                        childId: f.Hh()
                    },
                    l = f.Cz;
                l._toclose = f.close;
                a._methods = _.tc(l, g.id, f.id, f, !1);
                c._onopen(a)
            })
        }
    };
    _.k.w0 = function(a) {
        if (void 0 === this.Pb("resize", a) && this.jJ) {
            var c = Ec(a.width);
            null != c && (this.jJ.style.width = c.od);
            a = Ec(a.height);
            null != a && (this.jJ.style.height = a.od);
            this.jJ.parentElement && (null != c && c.Ul || null != a && a.Ul) && (this.jJ.parentElement.style.display = "block")
        }
    };
    var Ic = function(a, c, f, g, h, l, n) {
        zc.call(this, a, c, f, g, Jc, h, l, n);
        this.url = a;
        this.o_ = null;
        this.xA = gc();
        Bc(this, function() {
            this.Pb("beforeparentopen");
            var a = _.sc(this.methods);
            a._onopen = this.UK;
            a._ready = this.Jg;
            a._onclose = this.TK;
            this.params._methods = _.tc(a, "..", this.xA, this, !0);
            a = {};
            for (f in this.params) a[f] = ic(this.params[f]);
            var c = this.config.url;
            if (this.DW.hideUrlFromParent) {
                var f = window.name;
                var g = c;
                c = _.yg(this.config.url, this.params, {}, ic);
                var h = a;
                a = {};
                a._methods = h._methods;
                a["#opener"] = h["#opener"];
                a["#urlindex"] = h["#urlindex"];
                a["#opener"] && void 0 != h["#urlindex"] ? (a["#opener"] = f + "," + a["#opener"], f = g) : (g = _.Ka(_.bb, "fUrl", []), h = g.length, g[h] = c, _.bb.rUrl = ec, a["#opener"] = f, a["#urlindex"] = h, f = _.Rb.Pq(_.ta.location.href), c = _.P("iframes/relay_url_" + (0, window.encodeURIComponent)(f)) || "/_/gapi/sibling/1/frame.html", f += c);
                c = f
            }
            _.Sb._open({
                url: c,
                openParams: this.DW,
                params: a,
                proxyId: this.xA,
                openedByProxyChain: this.dj
            })
        })
    };
    yc(Ic);
    Ic.prototype.lfa = function() {
        return this.o_
    };
    Ic.prototype.UK = function(a) {
        this.o_ = a.childId;
        var c = uc(a, "..", this.o_);
        _.sc(c, this);
        this.close = c._toclose;
        _.V.Uc[this.o_] = this;
        this.ya && this.methods._onopen && (a._methods = _.tc(c, this.ya.Hh(), this.o_, this, !1), this.methods._onopen(a))
    };
    Ic.prototype.Jg = function(a) {
        var c = String(this.o_),
            f = uc(a, "..", c);
        _.sc(a, this);
        _.sc(f, this);
        this.Pb("ready", a);
        this.ya && this.methods._ready && (a._methods = _.tc(f, this.ya.Hh(), c, this, !1), this.methods._ready(a))
    };
    Ic.prototype.TK = function(a) {
        if (this.ya && this.methods._onclose) this.methods._onclose(a);
        else return a = this.Pb("close", a), delete _.V.Uc[this.o_], a
    };
    var Kc = function(a, c, f, g, h, l, n) {
        zc.call(this, a, c, f, g, Jc, l, n);
        this.id = c.id || gc();
        this.oia = h;
        g._close = this.close;
        this.onClosed = this.Cba;
        this.DF = 0;
        Bc(this, function() {
            this.Pb("beforeparentopen");
            var c = _.sc(this.methods);
            this.params._methods = _.tc(c, "..", this.xA, this, !0);
            c = {};
            c.queryParams = this.params;
            a = _.qa(_.ua, this.config.url, this.id, c);
            var f = h.openWindow(a);
            this.canAutoClose = function(a) {
                a(h.jj(f))
            };
            h.Tm(f, this);
            this.DF = f
        })
    };
    yc(Kc);
    Kc.prototype.close = function(a) {
        a = this.Pb("close", a);
        this.oia.rk(this.DF);
        return a
    };
    Kc.prototype.Cba = function() {
        this.Pb("close")
    };
    (function() {
        _.V.Uc = {};
        _.V.yf = {};
        _.V.XR = {};
        _.V.Kl = 0;
        _.V.Rg = {};
        _.V.uW = {};
        _.V.Ng = null;
        _.V.Mg = [];
        _.V.Lr = function(a) {
            var c = !1;
            try {
                if (null != a) {
                    var f = window.parent.frames[a.id];
                    c = f.iframer.id == a.id && f.iframes.openedId_(_.Sb.id)
                }
            } catch (l) {}
            try {
                _.V.Ng = {
                    origin: this.origin,
                    referer: this.referer,
                    claimedOpenerId: a && a.id,
                    claimedOpenerProxyChain: a && a.proxyChain || [],
                    sameOrigin: c
                };
                for (a = 0; a < _.V.Mg.length; ++a) _.V.Mg[a](_.V.Ng);
                _.V.Mg = []
            } catch (l) {
                bG(l)
            }
        };
        _.V.UI = function(a) {
            var c = a && a.ya,
                f = null;
            c && (f = {}, f.id = c.Hh(), f.proxyChain =
                a.dj);
            return f
        };
        iH();
        if (window.parent != window) {
            var a = _.R.Qc();
            a.gcv && oc(a.gcv);
            var c = a.jsh;
            c && qc(c);
            _.sc(uc(a, "..", ""), _.Sb);
            _.sc(a, _.Sb);
            ac()
        }
        _.V.Cr = Mc;
        _.V.Mo = Nc;
        _.V.xs = Qc;
        _.V.resize = Oc;
        _.V.Rp = function(a) {
            return _.V.XR[a]
        };
        _.V.qj = function(a, c) {
            _.V.XR[a] = c
        };
        _.V.rD = Oc;
        _.V.Ds = Qc;
        _.V.ng = {};
        _.V.ng.get = Mc;
        _.V.ng.set = Nc;
        _.V.Zo = function(a, c) {
            Zb(a);
            _.V.uW[a] = c || window[a]
        };
        _.V.Mt = function(a) {
            delete _.V.uW[a]
        };
        _.V.open = function(a, c, h, l, n, q) {
            3 == arguments.length ? l = {} : 4 == arguments.length && "function" === typeof l &&
                (n = l, l = {});
            var f = "bubble" === c.style && Pc ? Pc.ma() : null;
            return f ? new Kc(a, c, h, l, f, n, q) : vc(c) ? new Ic(a, c, h, l, n, q) : new Gc(a, c, h, l, n, q)
        };
        _.V.close = function(a, c) {
            _.Sb && _.Sb._close && _.Sb._close(a, c)
        };
        _.V.ready = function(a, c, h) {
            2 == arguments.length && "function" === typeof c && (h = c, c = {});
            var f = a || {};
            "height" in f || (f.height = _.Ob.Cd());
            f._methods = _.tc(c || {}, "..", "", _.Sb, !0);
            _.Sb && _.Sb._ready && _.Sb._ready(f, h)
        };
        _.V.Pk = function(a) {
            _.V.Ng ? a(_.V.Ng) : _.V.Mg.push(a)
        };
        _.V.Ir = function(a) {
            return !!_.V.Uc[a]
        };
        _.V.Vp = function() {
            return ["https://ssl.gstatic.com/gb/js/",
                _.P("googleapis.config/gcv")
            ].join("")
        };
        _.V.Qr = function(a) {
            var c = {
                mouseover: 1,
                mouseout: 1
            };
            if (_.Sb._event)
                for (var f = 0; f < a.length; f++) {
                    var l = a[f];
                    l in c && _.R.Ee(window.document, l, function(a) {
                        _.Sb._event({
                            event: a.type,
                            timestamp: (new Date).getTime()
                        })
                    }, !0)
                }
        };
        _.V.zs = qc;
        _.V.NT = hG;
        _.V.kr = bG;
        _.V.dE = _.Sb
    })();
    _.Mu("iframes.allow", _.V.Zo);
    _.Mu("iframes.callSiblingOpener", _.V.ip);
    _.Mu("iframes.registerForOpenedSibling", _.V.Sr);
    _.Mu("iframes.close", _.V.close);
    _.Mu("iframes.getGoogleConnectJsUri", _.V.Vp);
    _.Mu("iframes.getHandler", _.V.Cr);
    _.Mu("iframes.getDeferredHandler", _.V.Rp);
    _.Mu("iframes.getParentInfo", _.V.Pk);
    _.Mu("iframes.iframer", _.V.dE);
    _.Mu("iframes.open", _.V.open);
    _.Mu("iframes.openedId_", _.V.Ir);
    _.Mu("iframes.propagate", _.V.Qr);
    _.Mu("iframes.ready", _.V.ready);
    _.Mu("iframes.resize", _.V.resize);
    _.Mu("iframes.setGoogleConnectJsVersion", _.V.xs);
    _.Mu("iframes.setBootstrapHint", _.V.NT);
    _.Mu("iframes.setJsHint", _.V.zs);
    _.Mu("iframes.setHandler", _.V.Mo);
    _.Mu("iframes.setDeferredHandler", _.V.qj);
    _.Mu("IframeBase", zc);
    _.Mu("IframeBase.prototype.addCallback", zc.prototype.zh);
    _.Mu("IframeBase.prototype.getMethods", zc.prototype.LW);
    _.Mu("IframeBase.prototype.getOpenerIframe", zc.prototype.ua);
    _.Mu("IframeBase.prototype.getOpenParams", zc.prototype.va);
    _.Mu("IframeBase.prototype.getParams", zc.prototype.tb);
    _.Mu("IframeBase.prototype.removeCallback", zc.prototype.Ub);
    _.Mu("Iframe", Gc);
    _.Mu("Iframe.prototype.close", Gc.prototype.close);
    _.Mu("Iframe.prototype.exposeMethod", Gc.prototype.fg);
    _.Mu("Iframe.prototype.getId", Gc.prototype.Hh);
    _.Mu("Iframe.prototype.getIframeEl", Gc.prototype.rb);
    _.Mu("Iframe.prototype.getSiteEl", Gc.prototype.V);
    _.Mu("Iframe.prototype.openInto", Gc.prototype.Pa);
    _.Mu("Iframe.prototype.remove", Gc.prototype.remove);
    _.Mu("Iframe.prototype.setSiteEl", Gc.prototype.qc);
    _.Mu("Iframe.prototype.addCallback", Gc.prototype.zh);
    _.Mu("Iframe.prototype.getMethods", Gc.prototype.LW);
    _.Mu("Iframe.prototype.getOpenerIframe", Gc.prototype.ua);
    _.Mu("Iframe.prototype.getOpenParams", Gc.prototype.va);
    _.Mu("Iframe.prototype.getParams", Gc.prototype.tb);
    _.Mu("Iframe.prototype.removeCallback", Gc.prototype.Ub);
    _.Mu("IframeProxy", Ic);
    _.Mu("IframeProxy.prototype.getTargetIframeId", Ic.prototype.lfa);
    _.Mu("IframeProxy.prototype.addCallback", Ic.prototype.zh);
    _.Mu("IframeProxy.prototype.getMethods", Ic.prototype.LW);
    _.Mu("IframeProxy.prototype.getOpenerIframe", Ic.prototype.ua);
    _.Mu("IframeProxy.prototype.getOpenParams", Ic.prototype.va);
    _.Mu("IframeProxy.prototype.getParams", Ic.prototype.tb);
    _.Mu("IframeProxy.prototype.removeCallback", Ic.prototype.Ub);
    _.Mu("IframeWindow", Kc);
    _.Mu("IframeWindow.prototype.close", Kc.prototype.close);
    _.Mu("IframeWindow.prototype.onClosed", Kc.prototype.Cba);
    _.Mu("iframes.util.getTopMostAccessibleWindow", _.V.Kh.Uk);
    _.Mu("iframes.handlers.get", _.V.ng.get);
    _.Mu("iframes.handlers.set", _.V.ng.set);
    _.Mu("iframes.resizeMe", _.V.rD);
    _.Mu("iframes.setVersionOverride", _.V.Ds);
    zc.prototype.send = function(a, c, f) {
        _.V.Gr(this, a, c, f)
    };
    _.Sb.send = function(a, c, f) {
        _.V.Gr(_.Sb, a, c, f)
    };
    zc.prototype.register = function(a, c) {
        var f = this;
        f.zh(a, function(a) {
            c.call(f, a)
        })
    };
    _.V.Gr = function(a, c, f, g) {
        var h = [];
        void 0 !== f && h.push(f);
        g && h.push(function(a) {
            g.call(this, [a])
        });
        a[c] && a[c].apply(a, h)
    };
    _.V.Fa = function() {
        return !0
    };
    _.Mu("iframes.CROSS_ORIGIN_IFRAMES_FILTER", _.V.Fa);
    _.Mu("IframeBase.prototype.send", zc.prototype.send);
    _.Mu("IframeBase.prototype.register", zc.prototype.register);
    _.Mu("Iframe.prototype.send", Gc.prototype.send);
    _.Mu("Iframe.prototype.register", Gc.prototype.register);
    _.Mu("IframeProxy.prototype.send", Ic.prototype.send);
    _.Mu("IframeProxy.prototype.register", Ic.prototype.register);
    _.Mu("IframeWindow.prototype.send", Kc.prototype.send);
    _.Mu("IframeWindow.prototype.register", Kc.prototype.register);
    _.Mu("iframes.iframer.send", _.V.dE.send);

    var bQ = _.V.Mo,
        rQ = {
            open: function(a) {
                var c = _.bf(a.va());
                return a.Pa(c, {
                    style: _.gf(c)
                })
            },
            attach: function(a, c) {
                var f = _.bf(a.va()),
                    g = c.id,
                    h = c.getAttribute("data-postorigin") || c.src,
                    l = /#(?:.*&)?rpctoken=(\d+)/.exec(h);
                l = l && l[1];
                a.id = g;
                a.J2 = l;
                a.el = f;
                a.jJ = c;
                _.V.Uc[g] = a;
                c = _.sc(a.methods);
                c._ready = a.Jg;
                c._close = a.close;
                c._open = a.T4;
                c._resizeMe = a.w0;
                c._renderstart = a.PA;
                _.tc(c, g, "", a, !0);
                _.T.Wg(a.id, a.J2);
                _.T.Xg(a.id, h);
                f = _.V.Wp({
                    style: _.gf(f)
                });
                for (var n in f) Object.prototype.hasOwnProperty.call(f, n) && ("style" == n ? a.jJ.style.cssText = f[n] : a.jJ.setAttribute(n, f[n]))
            }
        };
    rQ.onready = _.hf;
    rQ.onRenderStart = _.hf;
    rQ.close = _.jf;
    bQ("inline", rQ);

    _.At = (window.gapi || {}).load;
    var kb, rh, $g, $u, Zu, dC, Xc, Yc;
    kb = function(a) {
        if (_.Ia.test(Object.keys)) return Object.keys(a);
        var c = [],
            f;
        for (f in a) _.Qa(a, f) && c.push(f);
        return c
    };
    rh = function(a, c) {
        if (!_.Ma()) try {
            a()
        } catch (f) {}
        _.Wa(c)
    };
    $g = {
        button: !0,
        div: !0,
        span: !0
    };
    $u = function(a) {
        var c = _.Ka(_.bb, "sws", []);
        return 0 <= _.xd.call(c, a)
    };
    Zu = function(a) {
        return _.Ka(_.bb, "watt", _.r())[a]
    };
    dC = function(a) {
        return function(c, f) {
            return a ? _.ql()[f] || a[f] || "" : _.ql()[f] || ""
        }
    };
    _.Vu = {
        apppackagename: 1,
        callback: 1,
        clientid: 1,
        cookiepolicy: 1,
        openidrealm: -1,
        includegrantedscopes: -1,
        requestvisibleactions: 1,
        scope: 1
    };
    _.Wu = !1;
    _.Xu = function() {
        if (!_.Wu) {
            for (var a = window.document.getElementsByTagName("meta"), c = 0; c < a.length; ++c) {
                var f = a[c].name.toLowerCase();
                if (_.jd(f, "google-signin-")) {
                    f = f.substring(14);
                    var g = a[c].content;
                    _.Vu[f] && g && (_.Uo[f] = g)
                }
            }
            if (window.self !== window.top) {
                a = window.document.location.toString();
                for (var h in _.Vu) 0 < _.Vu[h] && (c = _.e(a, h, "")) && (_.Uo[h] = c)
            }
            _.Wu = !0
        }
        h = _.r();
        _.Sl(_.Uo, h);
        return h
    };
    Xc = function(a) {
        var c;
        a.match(/^https?%3A/i) && (c = (0, window.decodeURIComponent)(a));
        return _.vg(window.document, c ? c : a)
    };
    Yc = function(a) {
        a = a || "canonical";
        for (var c = window.document.getElementsByTagName("link"), f = 0, g = c.length; f < g; f++) {
            var h = c[f],
                l = h.getAttribute("rel");
            if (l && l.toLowerCase() == a && (h = h.getAttribute("href")) && (h = Xc(h)) && null != h.match(/^https?:\/\/[\w\-_\.]+/i)) return h
        }
        return window.location.href
    };
    _.md = function() {
        return window.location.origin || window.location.protocol + "//" + window.location.host
    };
    _.Zc = function(a, c, f, g) {
        return (a = "string" == typeof a ? a : void 0) ? Xc(a) : Yc(g)
    };
    _.fd = function(a, c, f) {
        null == a && f && (a = f.db, null == a && (a = f.gwidget && f.gwidget.db));
        return a || void 0
    };
    _.gd = function(a, c, f) {
        null == a && f && (a = f.ecp, null == a && (a = f.gwidget && f.gwidget.ecp));
        return a || void 0
    };
    _.ld = function(a, c, f) {
        return _.Zc(a, c, f, c.action ? void 0 : "publisher")
    };
    var Wo, av, Md, Ld, id, Gd, bv, nd;
    Wo = {
        se: "0"
    };
    av = {
        post: !0
    };
    Md = {
        style: "position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"
    };
    Ld = "onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" ");
    id = _.Ka(_.bb, "WI", _.r());
    Gd = ["style", "data-gapiscan"];
    bv = function(a) {
        for (var c = _.r(), f = 0 != a.nodeName.toLowerCase().indexOf("g:"), g = 0, h = a.attributes.length; g < h; g++) {
            var l = a.attributes[g],
                n = l.name,
                q = l.value;
            0 <= _.xd.call(Gd, n) || f && 0 != n.indexOf("data-") || "null" === q || "specified" in l && !l.specified || (f && (n = n.substr(5)), c[n.toLowerCase()] = q)
        }
        a = a.style;
        (f = nd(a && a.height)) && (c.height = String(f));
        (a = nd(a && a.width)) && (c.width = String(a));
        return c
    };
    _.cv = function(a, c, f, g, h, l) {
        if (f.rd) var n = c;
        else n = window.document.createElement("div"), c.setAttribute("data-gapistub", !0), n.style.cssText = "position:absolute;width:450px;left:-10000px;", c.parentNode.insertBefore(n, c);
        l.siteElement = n;
        n.id || (n.id = _.di(a));
        c = _.r();
        c[">type"] = a;
        _.Sl(f, c);
        a = _.tb(g, n, h);
        l.iframeNode = a;
        l.id = a.getAttribute("id")
    };
    _.di = function(a) {
        _.Ka(id, a, 0);
        return "___" + a + "_" + id[a]++
    };
    nd = function(a) {
        var c = void 0;
        "number" === typeof a ? c = a : "string" === typeof a && (c = (0, window.parseInt)(a, 10));
        return c
    };
    var Ak = function() {},
        Fk = function(a) {
            var c = a.Ws,
                f = function(a) {
                    f.T.constructor.call(this, a);
                    var c = this.Ya.length;
                    this.dJ = [];
                    for (var g = 0; g < c; ++g) this.Ya[g].zK || (this.dJ[g] = new this.Ya[g](a))
                };
            _.J(f, c);
            for (var g = []; a;) {
                if (c = a.Ws) {
                    c.Ya && _.Gl(g, c.Ya);
                    var h = c.prototype,
                        l;
                    for (l in h)
                        if (h.hasOwnProperty(l) && _.vd(h[l]) && h[l] !== c) {
                            var n = !!h[l].RH,
                                q = eq(l, h, g, n);
                            (n = Dk(l, h, q, n)) && (f.prototype[l] = n)
                        }
                }
                a = a.T && a.T.constructor
            }
            f.prototype.Ya = g;
            return f
        },
        eq = function(a, c, f, g) {
            for (var h = [], l = 0; l < f.length && (f[l].prototype[a] ===
                    c[a] || (h.push(l), !g)); ++l);
            return h
        },
        Dk = function(a, c, f, g) {
            return f.length ? g ? function(c) {
                var g = this.dJ[f[0]];
                return g ? g[a].apply(this.dJ[f[0]], arguments) : this.Ya[f[0]].prototype[a].apply(this, arguments)
            } : c[a].uH ? function(c) {
                a: {
                    var g = Array.prototype.slice.call(arguments, 0);
                    for (var h = 0; h < f.length; ++h) {
                        var q = this.dJ[f[h]];
                        if (q = q ? q[a].apply(q, g) : this.Ya[f[h]].prototype[a].apply(this, g)) {
                            g = q;
                            break a
                        }
                    }
                    g = !1
                }
                return g
            } : c[a].VF ? function(c) {
                a: {
                    var g = Array.prototype.slice.call(arguments, 0);
                    for (var h = 0; h < f.length; ++h) {
                        var q =
                            this.dJ[f[h]];
                        q = q ? q[a].apply(q, g) : this.Ya[f[h]].prototype[a].apply(this, g);
                        if (null != q) {
                            g = q;
                            break a
                        }
                    }
                    g = void 0
                }
                return g
            } : c[a].AE ? function(c) {
                for (var g = Array.prototype.slice.call(arguments, 0), h = 0; h < f.length; ++h) {
                    var q = this.dJ[f[h]];
                    q ? q[a].apply(q, g) : this.Ya[f[h]].prototype[a].apply(this, g)
                }
            } : function(c) {
                for (var g = Array.prototype.slice.call(arguments, 0), h = [], q = 0; q < f.length; ++q) {
                    var t = this.dJ[f[q]];
                    h.push(t ? t[a].apply(t, g) : this.Ya[f[q]].prototype[a].apply(this, g))
                }
                return h
            } : g || c[a].uH || c[a].VF || c[a].AE ? null : Fm
        },
        Fm = function() {
            return []
        };
    Ak.prototype.V6 = function(a) {
        if (this.dJ)
            for (var c = 0; c < this.dJ.length; ++c)
                if (this.dJ[c] instanceof a) return this.dJ[c];
        return null
    };
    var Nn = function(a) {
        return this.Vx.V6(a)
    };
    var Bd, Cd, Dd, Fd, dv = /(?:^|\s)g-((\S)*)(?:$|\s)/,
        ev = {
            plusone: !0,
            autocomplete: !0,
            profile: !0,
            signin: !0,
            signin2: !0
        };
    Bd = _.Ka(_.bb, "SW", _.r());
    Cd = _.Ka(_.bb, "SA", _.r());
    Dd = _.Ka(_.bb, "SM", _.r());
    Fd = _.Ka(_.bb, "FW", []);
    var hv = function(a, c) {
        var f;
        yd.ps0 = (new Date).getTime();
        Ad("ps0");
        a = ("string" === typeof a ? window.document.getElementById(a) : a) || _.ua;
        var g = _.ua.documentMode;
        if (a.querySelectorAll && (!g || 8 < g)) {
            g = c ? [c] : kb(Bd).concat(kb(Cd)).concat(kb(Dd));
            for (var h = [], l = 0; l < g.length; l++) {
                var n = g[l];
                h.push(".g-" + n, "g\\:" + n)
            }
            g = a.querySelectorAll(h.join(","))
        } else g = a.getElementsByTagName("*");
        a = _.r();
        for (h = 0; h < g.length; h++) {
            l = g[h];
            var q = l;
            n = c;
            var t = q.nodeName.toLowerCase(),
                v = void 0;
            if (q.getAttribute("data-gapiscan")) n = null;
            else {
                var w = t.indexOf("g:");
                0 == w ? v = t.substr(2) : (w = (w = String(q.className || q.getAttribute("class"))) && dv.exec(w)) && (v = w[1]);
                n = !v || !(Bd[v] || Cd[v] || Dd[v]) || n && v !== n ? null : v
            }
            n && (ev[n] || 0 == l.nodeName.toLowerCase().indexOf("g:") || 0 != kb(bv(l)).length) && (l.setAttribute("data-gapiscan", !0), _.Ka(a, n, []).push(l))
        }
        for (A in a) Fd.push(A);
        yd.ps1 = (new Date).getTime();
        Ad("ps1");
        if (c = Fd.join(":")) try {
            _.Ua.load(c, void 0)
        } catch (F) {
            _.kd(F);
            return
        }
        h = [];
        for (f in a) {
            g = a[f];
            var A = 0;
            for (c = g.length; A < c; A++) l = g[A], Hd(f, l, bv(l), h, c)
        }
    };
    var Id = function(a, c) {
            var f = Zu(a);
            c && f ? (f(c), (f = c.iframeNode) && f.setAttribute("data-gapiattached", !0)) : _.Ua.load(a, function() {
                var f = Zu(a),
                    h = c && c.iframeNode,
                    l = c && c.userParams;
                h && f ? (f(c), h.setAttribute("data-gapiattached", !0)) : (f = _.Ua[a].go, "signin2" == a ? f(h, l) : f(h && h.parentNode, l))
            })
        },
        Hd = function(a, c, f, g, h, l, n) {
            switch (Jd(c, a, l)) {
                case 0:
                    a = Dd[a] ? a + "_annotation" : a;
                    g = {};
                    g.iframeNode = c;
                    g.userParams = f;
                    Id(a, g);
                    break;
                case 1:
                    if (c.parentNode) {
                        for (var q in f) {
                            if (l = _.Qa(f, q)) l = f[q], l = !!l && "object" === typeof l && (!l.toString ||
                                l.toString === Object.prototype.toString || l.toString === Array.prototype.toString);
                            if (l) try {
                                f[q] = _.mf(f[q])
                            } catch (K) {
                                delete f[q]
                            }
                        }
                        q = !0;
                        f.dontclear && (q = !1);
                        delete f.dontclear;
                        var t;
                        l = {};
                        var v = t = a;
                        "plus" == a && f.action && (t = a + "_" + f.action, v = a + "/" + f.action);
                        (t = _.P("iframes/" + t + "/url")) || (t = ":im_socialhost:/:session_prefix::im_prefix:_/widget/render/" + v + "?usegapi=1");
                        for (w in Wo) l[w] = w + "/" + (f[w] || Wo[w]) + "/";
                        var w = _.vg(_.ua, t.replace(_.nc, dC(l)));
                        v = "iframes/" + a + "/params/";
                        l = {};
                        _.Sl(f, l);
                        (t = _.P("lang") || _.P("gwidget/lang")) &&
                        (l.hl = t);
                        av[a] || (l.origin = _.md());
                        l.exp = _.P(v + "exp");
                        if (v = _.P(v + "location"))
                            for (t = 0; t < v.length; t++) {
                                var A = v[t];
                                l[A] = _.ta.location[A]
                            }
                        switch (a) {
                            case "plus":
                            case "follow":
                                l.url = _.ld(l.href, f, null);
                                delete l.href;
                                break;
                            case "plusone":
                                v = (v = f.href) ? Xc(v) : Yc();
                                l.url = v;
                                l.db = _.fd(f.db, void 0, _.P());
                                l.ecp = _.gd(f.ecp, void 0, _.P());
                                delete l.href;
                                break;
                            case "signin":
                                l.url = Yc()
                        }
                        _.bb.ILI && (l.iloader = "1");
                        delete l["data-onload"];
                        delete l.rd;
                        for (var F in Wo) l[F] && delete l[F];
                        l.gsrc = _.P("iframes/:source:");
                        F = _.P("inline/css");
                        "undefined" !== typeof F && 0 < h && F >= h && (l.ic = "1");
                        F = /^#|^fr-/;
                        h = {};
                        for (var z in l) _.Qa(l, z) && F.test(z) && (h[z.replace(F, "")] = l[z], delete l[z]);
                        z = "q" == _.P("iframes/" + a + "/params/si") ? l : h;
                        F = _.Xu();
                        for (var I in F) !_.Qa(F, I) || _.Qa(l, I) || _.Qa(h, I) || (z[I] = F[I]);
                        I = [].concat(Ld);
                        z = _.P("iframes/" + a + "/methods");
                        _.cb(z) && (I = I.concat(z));
                        for (E in f) _.Qa(f, E) && /^on/.test(E) && ("plus" != a || "onconnect" != E) && (I.push(E), delete l[E]);
                        delete l.callback;
                        h._methods = I.join(",");
                        var E = _.yg(w, l, h);
                        I = n || {};
                        I.allowPost = 1;
                        I.attributes =
                            Md;
                        I.dontclear = !q;
                        n = {};
                        n.userParams = f;
                        n.url = E;
                        n.type = a;
                        _.cv(a, c, f, E, I, n);
                        c = n.id;
                        f = _.r();
                        f.id = c;
                        f.userParams = n.userParams;
                        f.url = n.url;
                        f.type = n.type;
                        f.state = 1;
                        _.Tc[c] = f;
                        c = n
                    } else c = null;
                    c && ((f = c.id) && g.push(f), Id(a, c))
            }
        },
        Jd = function(a, c, f) {
            if (a && 1 === a.nodeType && c) {
                if (f) return 1;
                if (Dd[c]) {
                    if ($g[a.nodeName.toLowerCase()]) return (a = a.innerHTML) && a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") ? 0 : 1
                } else {
                    if (Cd[c]) return 0;
                    if (Bd[c]) return 1
                }
            }
            return null
        };
    _.Ka(_.Ua, "platform", {}).go = function(a, c) {
        hv(a, c)
    };
    var Rd = _.Ka(_.bb, "perf", _.r()),
        yd = _.Ka(Rd, "g", _.r()),
        Ud = _.Ka(Rd, "i", _.r()),
        Pd, Qd, Od, Ad, Sd, Td, Vd;
    _.Ka(Rd, "r", []);
    Pd = _.r();
    Qd = _.r();
    Od = function(a, c, f, g) {
        Pd[f] = Pd[f] || !!g;
        _.Ka(Qd, f, []);
        Qd[f].push([a, c])
    };
    Ad = function(a, c, f) {
        var g = Rd.r;
        "function" === typeof g ? g(a, c, f) : g.push([a, c, f])
    };
    Sd = function(a, c, f, g) {
        if ("_p" == c) throw Error("Ra");
        _.nf(a, c, f, g)
    };
    _.nf = function(a, c, f, g) {
        Td(c, f)[a] = g || (new Date).getTime();
        Ad(a, c, f)
    };
    Td = function(a, c) {
        a = _.Ka(Ud, a, _.r());
        return _.Ka(a, c, _.r())
    };
    Vd = function(a, c, f) {
        var g = null;
        c && f && (g = Td(c, f)[a]);
        return g || yd[a]
    };
    (function() {
        function a(a) {
            this.t = {};
            this.tick = function(a, c, f) {
                this.t[a] = [void 0 != f ? f : (new Date).getTime(), c];
                if (void 0 == f) try {
                    window.console.timeStamp("CSI/" + a)
                } catch (w) {}
            };
            this.tick("start", null, a)
        }
        var c;
        if (window.performance) var f = (c = window.performance.timing) && c.responseStart;
        var g = 0 < f ? new a(f) : new a;
        window.__gapi_jstiming__ = {
            Timer: a,
            load: g
        };
        if (c) {
            var h = c.navigationStart;
            0 < h && f >= h && (window.__gapi_jstiming__.srt = f - h)
        }
        if (c) {
            var l = window.__gapi_jstiming__.load;
            0 < h && f >= h && (l.tick("_wtsrt", void 0, h),
                l.tick("wtsrt_", "_wtsrt", f), l.tick("tbsd_", "wtsrt_"))
        }
        try {
            c = null, window.chrome && window.chrome.csi && (c = Math.floor(window.chrome.csi().pageT), l && 0 < h && (l.tick("_tbnd", void 0, window.chrome.csi().startE), l.tick("tbnd_", "_tbnd", h))), null == c && window.gtbExternal && (c = window.gtbExternal.pageT()), null == c && window.external && (c = window.external.pageT, l && 0 < h && (l.tick("_tbnd", void 0, window.external.startE), l.tick("tbnd_", "_tbnd", h))), c && (window.__gapi_jstiming__.pt = c)
        } catch (n) {}
    })();
    if (window.__gapi_jstiming__) {
        window.__gapi_jstiming__.Pz = {};
        window.__gapi_jstiming__.Yr = 1;
        var he = function(a, c, f) {
            var g = a.t[c],
                h = a.t.start;
            if (g && (h || f)) return g = a.t[c][0], h = void 0 != f ? f : h[0], Math.round(g - h)
        };
        window.__gapi_jstiming__.getTick = he;
        window.__gapi_jstiming__.getLabels = function(a) {
            var c = [],
                f;
            for (f in a.t) c.push(f);
            return c
        };
        var ie = function(a, c, f) {
                var g = "";
                window.__gapi_jstiming__.srt && (g += "&srt=" + window.__gapi_jstiming__.srt);
                window.__gapi_jstiming__.pt && (g += "&tbsrt=" + window.__gapi_jstiming__.pt);
                try {
                    window.external && window.external.tran ? g += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? g += "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (g += "&tran=" + window.chrome.csi().tran)
                } catch (A) {}
                var h = window.chrome;
                if (h && (h = h.loadTimes)) {
                    h().wasFetchedViaSpdy && (g += "&p=s");
                    if (h().wasNpnNegotiated) {
                        g += "&npn=1";
                        var l = h().npnNegotiatedProtocol;
                        l && (g += "&npnv=" + (window.encodeURIComponent || window.escape)(l))
                    }
                    h().wasAlternateProtocolAvailable && (g += "&apa=1")
                }
                var n =
                    a.t,
                    q = n.start;
                h = [];
                l = [];
                for (var t in n)
                    if ("start" != t && 0 != t.indexOf("_")) {
                        var v = n[t][1];
                        v ? n[v] && l.push(t + "." + he(a, t, n[v][0])) : q && h.push(t + "." + he(a, t))
                    } if (c)
                    for (var w in c) g += "&" + w + "=" + c[w];
                (c = f) || (c = "https:" == window.document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
                return [c, "?v=3", "&s=" + (window.__gapi_jstiming__.sn || "oz") + "&action=", a.name, l.length ? "&it=" + l.join(",") : "", g, "&rt=", h.join(",")].join("")
            },
            je = function(a, c, f) {
                a = ie(a, c, f);
                if (!a) return "";
                c = new window.Image;
                var g = window.__gapi_jstiming__.Yr++;
                window.__gapi_jstiming__.Pz[g] = c;
                c.onload = c.onerror = function() {
                    window.__gapi_jstiming__ && delete window.__gapi_jstiming__.Pz[g]
                };
                c.src = a;
                c = null;
                return a
            };
        window.__gapi_jstiming__.report = function(a, c, f) {
            var g = window.document.visibilityState,
                h = "visibilitychange";
            g || (g = window.document.webkitVisibilityState, h = "webkitvisibilitychange");
            if ("prerender" == g) {
                var l = !1,
                    n = function() {
                        if (!l) {
                            c ? c.prerender = "1" : c = {
                                prerender: "1"
                            };
                            if ("prerender" == (window.document.visibilityState || window.document.webkitVisibilityState)) var g = !1;
                            else je(a, c, f), g = !0;
                            g && (l = !0, window.document.removeEventListener(h, n, !1))
                        }
                    };
                window.document.addEventListener(h, n, !1);
                return ""
            }
            return je(a, c, f)
        }
    };
    var ee = {
            g: "gapi_global",
            m: "gapi_module",
            w: "gwidget"
        },
        Wd = function(a, c) {
            this.type = a ? "_p" == a ? "m" : "w" : "g";
            this.name = a;
            this.P0 = c
        };
    Wd.prototype.key = function() {
        switch (this.type) {
            case "g":
                return this.type;
            case "m":
                return this.type + "." + this.P0;
            case "w":
                return this.type + "." + this.name + this.P0
        }
    };
    var ce = new Wd,
        Yd = window.navigator.userAgent.match(/iPhone|iPad|Android|PalmWebOS|Maemo|Bada/),
        $d = _.Ka(Rd, "_c", _.r()),
        ae = Math.random() < (_.P("csi/rate") || 0),
        Zd = function(a, c, f) {
            for (var g = new Wd(c, f), h = _.Ka($d, g.key(), _.r()), l = Qd[a] || [], n = 0; n < l.length; ++n) {
                var q = l[n],
                    t = q[0],
                    v = a,
                    w = c,
                    A = f;
                q = Vd(q[1], w, A);
                v = Vd(v, w, A);
                h[t] = q && v ? v - q : null
            }
            Pd[a] && ae && (be(ce), be(g))
        },
        de = function(a, c) {
            c = c || [];
            for (var f = [], g = 0; g < c.length; g++) f.push(a + c[g]);
            return f
        },
        be = function(a) {
            var c = _.ta.__gapi_jstiming__;
            c.sn = ee[a.type];
            var f =
                new c.Timer(0);
            a: {
                switch (a.type) {
                    case "g":
                        var g = "global";
                        break a;
                    case "m":
                        g = a.P0;
                        break a;
                    case "w":
                        g = a.name;
                        break a
                }
                g = void 0
            }
            f.name = g;
            g = !1;
            var h = a.key(),
                l = $d[h];
            f.tick("_start", null, 0);
            for (var n in l) f.tick(n, "_start", l[n]), g = !0;
            $d[h] = _.r();
            g && (n = [], n.push("l" + (_.P("isPlusUser") ? "1" : "0")), g = "m" + (Yd ? "1" : "0"), n.push(g), "m" == a.type ? n.push("p" + a.P0) : "w" == a.type && (h = "n" + a.P0, n.push(h), "0" == a.P0 && n.push(g + h)), n.push("u" + (_.P("isLoggedIn") ? "1" : "0")), a = de("", n), a = de("abc_", a).join(","), c.report(f, {
                e: a
            }))
        };
    Od("blt", "bs0", "bs1");
    Od("psi", "ps0", "ps1");
    Od("rpcqi", "rqe", "rqd");
    Od("bsprt", "bsrt0", "bsrt1");
    Od("bsrqt", "bsrt1", "bsrt2");
    Od("bsrst", "bsrt2", "bsrt3");
    Od("mli", "ml0", "ml1");
    Od("mei", "me0", "me1", !0);
    Od("wcdi", "wrs", "wcdi");
    Od("wci", "wrs", "wdc");
    Od("wdi", "wrs", "wrdi");
    Od("wdt", "bs0", "wrdt");
    Od("wri", "wrs", "wrri", !0);
    Od("wrt", "bs0", "wrrt");
    Od("wji", "wje0", "wje1", !0);
    Od("wjli", "wjl0", "wjl1");
    Od("whi", "wh0", "wh1", !0);
    Od("wai", "waaf0", "waaf1", !0);
    Od("wadi", "wrs", "waaf1", !0);
    Od("wadt", "bs0", "waaf1", !0);
    Od("wprt", "wrt0", "wrt1");
    Od("wrqt", "wrt1", "wrt2");
    Od("wrst", "wrt2", "wrt3", !0);
    Od("fbprt", "fsrt0", "fsrt1");
    Od("fbrqt", "fsrt1", "fsrt2");
    Od("fbrst", "fsrt2", "fsrt3", !0);
    Od("fdns", "fdns0", "fdns1");
    Od("fcon", "fcon0", "fcon1");
    Od("freq", "freq0", "freq1");
    Od("frsp", "frsp0", "frsp1");
    Od("fttfb", "fttfb0", "fttfb1");
    Od("ftot", "ftot0", "ftot1", !0);
    var xB = Rd.r;
    if ("function" !== typeof xB) {
        for (var IB; IB = xB.shift();) Zd.apply(null, IB);
        Rd.r = Zd
    };
    var Rt = ["div"],
        jC = "onload",
        zx = !0,
        cB = !0,
        gg = function(a) {
            return a
        },
        gC = null,
        Kg = function(a) {
            var c = _.P(a);
            return "undefined" !== typeof c ? c : _.P("gwidget/" + a)
        },
        uv, vv, Cv, Dv, Tt, sw, Ev, Ut, eC, fC, hC, Fv;
    gC = _.P();
    _.P("gwidget");
    var XH = Kg("parsetags");
    jC = "explicit" === XH || "onload" === XH ? XH : jC;
    var $K = Kg("google_analytics");
    "undefined" !== typeof $K && (zx = !!$K);
    var QP = Kg("data_layer");
    "undefined" !== typeof QP && (cB = !!QP);
    var ov = function() {
            var a = this && this.Hh();
            a && (_.bb.drw = a)
        },
        pv = function() {
            _.bb.drw = null
        },
        Uj = function(a) {
            return function(c) {
                var f = a;
                "number" === typeof c ? f = c : "string" === typeof c && (f = c.indexOf("px"), -1 != f && (c = c.substring(0, f)), f = (0, window.parseInt)(c, 10));
                return f
            }
        },
        En = function(a) {
            "string" === typeof a && (a = window[a]);
            return "function" === typeof a ? a : null
        },
        Ft = function() {
            return Kg("lang") || "en-US"
        },
        It = function(a) {
            if (!_.V.Cr("attach")) {
                var c = {},
                    f = _.V.Cr("inline"),
                    g;
                for (g in f) f.hasOwnProperty(g) && (c[g] = f[g]);
                c.open =
                    function(a) {
                        var c = a.va().renderData.id;
                        c = window.document.getElementById(c);
                        if (!c) throw Error("o");
                        return f.attach(a, c)
                    };
                _.V.Mo("attach", c)
            }
            a.style = "attach"
        },
        Mt = function() {
            var a = {};
            a.width = [Uj(450)];
            a.height = [Uj(24)];
            a.onready = [En];
            a.lang = [Ft, "hl"];
            a.iloader = [function() {
                return _.bb.ILI
            }, "iloader"];
            return a
        }(),
        Jt = function(a) {
            var c = {};
            c.Fb = a[0];
            c.Kj = -1;
            c.ZX = "___" + c.Fb + "_";
            c.Xs = "g:" + c.Fb;
            c.Wt = "g-" + c.Fb;
            c.Dm = [];
            c.config = {};
            c.jd = [];
            c.Rh = {};
            c.Ie = {};
            var f = function(a) {
                    for (var f in a)
                        if (_.Qa(a, f)) {
                            c.config[f] = [En];
                            c.jd.push(f);
                            var g = a[f],
                                h = null,
                                t = null,
                                v = null;
                            "function" === typeof g ? h = g : g && "object" === typeof g && (h = g.Er, t = g.Kg, v = g.Qh);
                            v && (c.jd.push(v), c.config[v] = [En], c.Rh[f] = v);
                            h && (c.config[f] = [h]);
                            t && (c.Ie[f] = t)
                        }
                },
                g = function(a) {
                    for (var f = {}, g = 0; g < a.length; ++g) f[a[g].toLowerCase()] = 1;
                    f[c.Xs] = 1;
                    c.nr = f
                };
            a[1] && (c.parameters = a[1]);
            (function(a) {
                c.config = a;
                for (var f in Mt) Mt.hasOwnProperty(f) && !c.config.hasOwnProperty(f) && (c.config[f] = Mt[f])
            })(a[2] || {});
            a[3] && f(a[3]);
            a[4] && g(a[4]);
            a[5] && (c.qe = a[5]);
            c.nu = !0 === a[6];
            c.Or = a[7];
            c.lM = a[8];
            c.nr || g(Rt);
            c.bj = function(a) {
                c.Kj++;
                Sd("wrs", c.Fb, String(c.Kj));
                var f = [],
                    g = a.element,
                    h = a.config,
                    t = ":" + c.Fb;
                ":plus" == t && a.Yi && a.Yi.action && (t += "_" + a.Yi.action);
                var v = St(c, h),
                    w = {};
                _.Sl(_.Xu(), w);
                for (var A in a.Yi) null != a.Yi[A] && (w[A] = a.Yi[A]);
                A = {
                    container: g.id,
                    renderData: a.Xr,
                    style: "inline",
                    height: h.height,
                    width: h.width
                };
                It(A);
                c.qe && (f[2] = A, f[3] = w, f[4] = v, c.qe("i", f));
                t = _.V.open(t, A, w, v);
                qv(c, t, h, g, a.xp);
                f[5] = t;
                c.qe && c.qe("e", f)
            };
            return c
        },
        St = function(a, c) {
            for (var f = {}, g = a.jd.length -
                    1; 0 <= g; --g) {
                var h = a.jd[g],
                    l = c[a.Rh[h] || h] || c[h],
                    n = c[h];
                n && l !== n && (l = function(a, c) {
                    return function(f) {
                        c.apply(this, arguments);
                        a.apply(this, arguments)
                    }
                }(l, n));
                l && (f[h] = l)
            }
            for (var q in a.Ie) a.Ie.hasOwnProperty(q) && (f[q] = tw(f[q] || function() {}, a.Ie[q]));
            f.drefresh = ov;
            f.erefresh = pv;
            return f
        },
        tw = function(a, c) {
            return function(f) {
                var g = c(f);
                if (g) {
                    var h = f.href || null;
                    if (zx) {
                        if (window._gat) try {
                            var l = window._gat._getTrackerByName("~0");
                            l && "UA-XXXXX-X" != l._getAccount() ? l._trackSocial("Google", g, h) : window._gaq &&
                                window._gaq.push(["_trackSocial", "Google", g, h])
                        } catch (q) {}
                        if (window.ga && window.ga.getAll) try {
                            var n = window.ga.getAll();
                            for (l = 0; l < n.length; l++) n[l].send("social", "Google", g, h)
                        } catch (q) {}
                    }
                    if (cB && window.dataLayer) try {
                        window.dataLayer.push({
                            event: "social",
                            socialNetwork: "Google",
                            socialAction: g,
                            socialTarget: h
                        })
                    } catch (q) {}
                }
                a.call(this, f)
            }
        },
        qv = function(a, c, f, g, h) {
            Tt(c, f);
            Ut(c, g);
            sw(a, c, h);
            XF(a.Fb, a.Kj.toString(), c);
            (new Ds).Vx.Ep(a, c, f, g, h)
        },
        Ds = function() {
            if (!this.Vx) {
                for (var a = this.constructor; a && !a.Ws;) a =
                    a.T && a.T.constructor;
                a.Ws.UD || (a.Ws.UD = Fk(a));
                this.Vx = new a.Ws.UD(this);
                this.V6 || (this.V6 = Nn)
            }
        },
        Gs = function() {},
        RP = Ds;
    Gs.T || _.J(Gs, Ak);
    RP.Ws = Gs;
    Gs.prototype.Ep = function(a) {
        a = a ? a : function() {};
        a.AE = !0;
        return a
    }();
    uv = function(a) {
        return _.Rm && "undefined" != typeof _.Rm && a instanceof _.Rm
    };
    vv = function(a) {
        return uv(a) ? "_renderstart" : "renderstart"
    };
    Cv = function(a) {
        return uv(a) ? "_ready" : "ready"
    };
    Dv = function() {
        return !0
    };
    Tt = function(a, c) {
        if (c.onready) {
            var f = !1,
                g = function() {
                    f || (f = !0, c.onready.call(null))
                };
            a.register(Cv(a), g, Dv);
            a.register(vv(a), g, Dv)
        }
    };
    sw = function(a, c, f) {
        var g = a.Fb,
            h = String(a.Kj),
            l = !1,
            n = function() {
                l || (l = !0, f && Sd("wrdt", g, h), Sd("wrdi", g, h))
            };
        c.register(vv(c), n, Dv);
        var q = !1;
        a = function() {
            q || (q = !0, n(), f && Sd("wrrt", g, h), Sd("wrri", g, h))
        };
        c.register(Cv(c), a, Dv);
        uv(c) ? c.register("widget-interactive-" + c.id, a, Dv) : _.T.register("widget-interactive-" + c.id, a);
        _.T.register("widget-csi-tick-" + c.id, function(a, c, f) {
            "wdc" === a ? Sd("wdc", g, h, f) : "wje0" === a ? Sd("wje0", g, h, f) : "wje1" === a ? Sd("wje1", g, h, f) : "wh0" == a ? _.nf("wh0", g, h, f) : "wh1" == a ? _.nf("wh1", g, h,
                f) : "wcdi" == a && _.nf("wcdi", g, h, f)
        })
    };
    Ev = function(a) {
        return "number" == typeof a ? a + "px" : "100%" == a ? a : null
    };
    Ut = function(a, c) {
        var f = function(f) {
            f = f || a;
            var g = Ev(f.width);
            g && c.style.width != g && (c.style.width = g);
            (f = Ev(f.height)) && c.style.height != f && (c.style.height = f)
        };
        uv(a) ? a.Vm("onRestyle", f) : (a.register("ready", f, Dv), a.register("renderstart", f, Dv), a.register("resize", f, Dv))
    };
    eC = function(a, c) {
        for (var f in Mt)
            if (Mt.hasOwnProperty(f)) {
                var g = Mt[f][1];
                g && !c.hasOwnProperty(g) && (c[g] = a[g])
            } return c
    };
    fC = function(a, c) {
        var f = {},
            g;
        for (g in a) a.hasOwnProperty(g) && (f[a[g][1] || g] = (a[g] && a[g][0] || gg)(c[g.toLowerCase()], c, gC));
        return f
    };
    hC = function(a) {
        if (a = a.Or)
            for (var c = 0; c < a.length; c++)(new window.Image).src = a[c]
    };
    Fv = function(a, c) {
        var f = c.userParams,
            g = c.siteElement;
        g || (g = (g = c.iframeNode) && g.parentNode);
        if (g && 1 === g.nodeType) {
            var h = fC(a.config, f);
            a.Dm.push({
                element: g,
                config: h,
                Yi: eC(h, fC(a.parameters, f)),
                Sg: 3,
                xp: !!f["data-onload"],
                Xr: c
            })
        }
        c = a.Dm;
        for (a = a.bj; 0 < c.length;) a(c.shift())
    };
    _.iC = function(a) {
        var c = Jt(a);
        hC(c);
        _.Sc(c.Fb, function(a) {
            Fv(c, a)
        });
        Bd[c.Fb] = !0;
        var f = {
            S: function(a, f, l) {
                var g = f || {};
                g.type = c.Fb;
                f = g.type;
                delete g.type;
                var h = ("string" === typeof a ? window.document.getElementById(a) : a) || void 0;
                if (h) {
                    a = {};
                    for (var t in g) _.Qa(g, t) && (a[t.toLowerCase()] = g[t]);
                    a.rd = 1;
                    (t = !!a.ri) && delete a.ri;
                    Hd(f, h, a, [], 0, t, l)
                } else _.kd("string" === "gapi." + f + ".render: missing element " + typeof a ? a : "")
            },
            go: function(a) {
                hv(a, c.Fb)
            },
            zja: function() {
                var a = _.Ka(_.bb, "WI", _.r()),
                    c;
                for (c in a) delete a[c]
            }
        };
        a = function() {
            "onload" === jC && f.go()
        };
        $u(c.Fb) || rh(a, a);
        _.Mu("gapi." + c.Fb + ".go", f.go);
        _.Mu("gapi." + c.Fb + ".render", f.S);
        return f
    };
    var Gv = Fv,
        Hv = function(a, c) {
            a.Kj++;
            Sd("wrs", a.Fb, String(a.Kj));
            var f = c.userParams,
                g = fC(a.config, f),
                h = [],
                l = c.iframeNode,
                n = c.siteElement,
                q = St(a, g),
                t = fC(a.parameters, f);
            _.Sl(_.Xu(), t);
            t = eC(g, t);
            f = !!f["data-onload"];
            var v = _.Sm,
                w = _.r();
            w.renderData = c;
            w.height = g.height;
            w.width = g.width;
            w.id = c.id;
            w.url = c.url;
            w.iframeEl = l;
            w.where = w.container = n;
            w.apis = ["_open"];
            w.messageHandlers = q;
            w.messageHandlersFilter = _.Vz;
            _.Ru(w);
            l = t;
            a.qe && (h[2] = w, h[3] = l, h[4] = q, a.qe("i", h));
            q = v.OH(w);
            q.id = c.id;
            q.NA(q, w);
            qv(a, q, g, n, f);
            h[5] = q;
            a.qe && a.qe("e", h)
        };
    Fv = function(a, c) {
        var f = c.url;
        a.lM || _.Uu(f) ? _.jo ? Hv(a, c) : (0, _.At)("gapi.iframes.impl", function() {
            Hv(a, c)
        }) : _.V.open ? Gv(a, c) : (0, _.At)("iframes", function() {
            Gv(a, c)
        })
    };
    var Iv = function() {
            var a = window;
            return !!a.performance && !!a.performance.getEntries
        },
        XF = function(a, c, f) {
            if (Iv()) {
                var g = function() {
                        var a = !1;
                        return function() {
                            if (a) return !0;
                            a = !0;
                            return !1
                        }
                    }(),
                    h = function() {
                        g() || window.setTimeout(function() {
                            var g = f.rb().src;
                            var h = g.indexOf("#"); - 1 != h && (g = g.substring(0, h));
                            g = window.performance.getEntriesByName(g);
                            1 > g.length ? g = null : (g = g[0], g = 0 == g.responseStart ? null : g);
                            if (g) {
                                h = Math.round(g.requestStart);
                                var q = Math.round(g.responseStart),
                                    t = Math.round(g.responseEnd);
                                Sd("wrt0", a, c, Math.round(g.startTime));
                                Sd("wrt1", a, c, h);
                                Sd("wrt2", a, c, q);
                                Sd("wrt3", a, c, t)
                            }
                        }, 1E3)
                    };
                f.register(vv(f), h, Dv);
                f.register(Cv(f), h, Dv)
            }
        };
    _.Mu("gapi.widget.make", _.iC);
    var Ve, Xb, Zw, Fs, PA, gG, kX, mX, fY, SA, Vw, jx, ix, kx, lx, ox;
    Ve = function(a) {
        return _.P("enableMultilogin") && a("cookie_policy") && !_.Ei(a) ? !0 : !1
    };
    Xb = function(a) {
        a = String(a);
        if (null != (_.e(a, "authuser") || null) || null != (_.e(a, "hd") || null)) return a;
        var c = _.Dh(void 0),
            f;
        null == c ? Ve(function(c) {
            return _.e(a, c) || null
        }) || (f = (0, window.encodeURIComponent)("authuser") + "=0") : f = c.match(/^([-a-z0-9]+[.])+[-a-z0-9]+$/) ? [(0, window.encodeURIComponent)("authuser") + "=", (0, window.encodeURIComponent)(String(c)), "&" + (0, window.encodeURIComponent)("hd") + "=", (0, window.encodeURIComponent)(c)].join("") : ["authuser=", (0, window.encodeURIComponent)(c)].join("");
        c = a.split("#");
        var g = c[0].indexOf("?");
        if (0 > g) c[0] = [c[0], "?", f].join("");
        else {
            var h = [c[0]];
            g < c[0].length - 1 && h.push("&");
            h.push(f);
            c[0] = h.join("")
        }
        return c.join("#")
    };
    Zw = function(a, c, f) {
        var g = _.Zv(c),
            h = g[a];
        g[a] = "0";
        var l = [];
        _.fb(g, function(a, c) {
            l.push(c + "=" + a)
        });
        var n = l.join(":");
        c = _.ZM(c);
        n ? c.write(n) : c.clear();
        g[a] !== h && f && f()
    };
    Fs = function(a) {
        a = _.ek(a.g_user_cookie_policy);
        if (!a || a.Gb && !_.rc) a = null;
        else {
            var c = ["G_AUTHUSER_", _.rc && a.Gb ? "S" : "H", a.Ke].join(""),
                f = _.Pj[c];
            f || (f = new _.dj(c, _.hk(a)), _.Pj[c] = f);
            a = f
        }
        _.Fa("googleapis.config/sessionIndex", null);
        a.clear()
    };
    PA = ["client_id", "cookie_policy", "response_type"];
    gG = "client_id response_type login_hint authuser prompt include_granted_scopes after_redirect app_package_name access_type hl state".split(" ");
    kX = function(a) {
        var c = _.rf(a);
        c.session_state && c.session_state.extraQueryParams && (c.authuser = c.session_state.extraQueryParams.authuser);
        c.session_state = null;
        a.expires_at && (c.expires_at = (0, window.parseInt)(a.expires_at / 1E3).toString());
        a.expires_in && (c.expires_in = a.expires_in.toString());
        a.first_issued_at && (c.issued_at = (0, window.parseInt)(a.first_issued_at / 1E3).toString(), delete c.first_issued_at);
        _.RF(c);
        return c
    };
    mX = function(a) {
        if (!_.kf(a.include_granted_scopes)) {
            var c = _.P("include_granted_scopes");
            a.include_granted_scopes = !!c
        }
    };
    fY = function(a) {
        window.console && ("function" === typeof window.console.warn ? window.console.warn(a) : "function" === typeof window.console.log && window.console.log(a))
    };
    SA = function(a) {
        var c = a || {},
            f = {};
        (0, _.Be)(gG, function(a) {
            null != c[a] && (f[a] = c[a])
        });
        a = _.P("googleapis/overrideClientId");
        null != a && (f.client_id = a);
        mX(f);
        _.fa(c.scope) ? f.scope = c.scope : _.ea(c.scope) && (f.scope = c.scope.join(" "));
        null != c["openid.realm"] && (f.openid_realm = c["openid.realm"]);
        null != c.cookie_policy ? f.cookie_policy = c.cookie_policy : null != c.cookiepolicy && (f.cookie_policy = c.cookiepolicy);
        null == f.login_hint && null != c.user_id && (f.login_hint = c.user_id);
        try {
            _.tY(f.cookie_policy)
        } catch (g) {
            f.cookie_policy &&
                fY("The cookie_policy configuration: '" + f.cookie_policy + "' is illegal, and thus ignored."), delete f.cookie_policy
        }
        null != c.hd && (f.hosted_domain = c.hd);
        null != f.prompt || (1 == c.immediate || "true" == c.immediate ? f.prompt = "none" : "force" == c.approval_prompt && (f.prompt = "consent"));
        "none" == f.prompt && (f.session_selection = "first_valid");
        "none" == f.prompt && "offline" == f.access_type && delete f.access_type;
        "undefined" === typeof f.authuser && (a = _.Dh(), null != a && (f.authuser = a));
        a = c.redirect_uri || _.P("oauth-flow/redirectUri");
        null != a && "postmessage" != a && (f.redirect_uri = a);
        f.gsiwebsdk = "shim";
        return f
    };
    _.hx = function(a, c) {
        var f = SA(a),
            g = new _.C(function(c, g) {
                _.jH(f, function(h) {
                    var l = h || {};
                    (0, _.Be)(PA, function(a) {
                        null != l[a] || (l[a] = f[a])
                    });
                    !f.include_granted_scopes && a && a.scope && (l.scope = a.scope);
                    a && null != a.state && (l.state = a.state);
                    l.error ? ("none" == f.prompt && "user_logged_out" == l.error && (l.error = "immediate_failed_user_logged_out"), g(l)) : (h = kX(l), null != h.authuser && _.Fa("googleapis.config/sessionIndex", h.authuser), c(h))
                })
            });
        c && g.then(c, c);
        return g
    };
    Vw = function(a) {
        var c = _.Xu(),
            f = c && c.scope;
        c = a && a.scope;
        c = "string" === typeof c ? c.split(" ") : c || [];
        if (f) {
            f = f.split(" ");
            for (var g = 0; g < f.length; ++g) {
                var h = f[g]; - 1 == _.xd.call(c, h) && c.push(h)
            }
            0 < c.length && (a.scope = c.join(" "))
        }
        return a
    };
    jx = function(a, c) {
        var f = ix,
            g = _.lw(a);
        g && (Fs(a), Zw(g, c, function() {
            if (f) {
                var c = {
                    error: "user_signed_out"
                };
                c.client_id = a.client_id;
                c.g_user_cookie_policy = a.g_user_cookie_policy;
                c.scope = a.scope;
                c.response_type = a.response_type;
                c.session_state = a.session_state;
                c = _.Jw(null, c);
                f(c)
            }
        }))
    };
    ix = function(a) {
        a || (a = _.YF(void 0, !0));
        a && "object" === typeof a || (a = {
            error: "invalid_request",
            error_description: "no callback data"
        });
        var c = a.error_description;
        c && window.console && (window.console.error(a.error), window.console.error(c));
        a.error || (_.bb.drw = null);
        _.Lw(a);
        if (c = a.authuser) _.P("googleapis.config/sessionIndex"), _.Fa("googleapis.config/sessionIndex", c);
        _.Bu.q0(_.mH, a);
        return a
    };
    kx = _.Qj.Qe;
    lx = null;
    _.px = function(a, c) {
        if ("force" !== a.approvalprompt) {
            a = _.nx(a);
            a.prompt = "none";
            delete a.redirect_uri;
            delete a.approval_prompt;
            delete a.immediate;
            if (c = !c) lx ? (a.client_id !== lx.client_id && window.console && window.console.log && window.console.log("Ignoring mismatched page-level auth param client_id=" + a.client_id), c = !0) : (lx = a, c = !1);
            c || ox(a)
        }
    };
    _.nx = function(a) {
        var c = a.redirecturi || "postmessage",
            f = (0, _.Ge)((a.scope || "").replace(/[\s\xa0]+/g, " "));
        c = {
            client_id: a.clientid,
            redirect_uri: c,
            response_type: "code token id_token gsession",
            scope: f
        };
        a.approvalprompt && (c.approval_prompt = a.approvalprompt);
        a.state && (c.state = a.state);
        a.openidrealm && (c["openid.realm"] = a.openidrealm);
        f = "offline" == a.accesstype ? !0 : (f = a.redirecturi) && "postmessage" != f;
        f && (c.access_type = "offline");
        a.requestvisibleactions && (c.request_visible_actions = (0, _.Ge)(a.requestvisibleactions.replace(/[\s\xa0]+/g,
            " ")));
        a.after_redirect && (c.after_redirect = a.after_redirect);
        a.cookiepolicy && "none" !== a.cookiepolicy && (c.cookie_policy = a.cookiepolicy);
        "undefined" != typeof a.includegrantedscopes && (c.include_granted_scopes = a.includegrantedscopes);
        a.e && (c.e = a.e);
        (a = a.authuser || _.P("googleapis.config/sessionIndex")) && (c.authuser = a);
        (a = _.P("useoriginassocialhost")) && (c.use_origin_as_socialhost = a);
        return c
    };
    ox = function(a) {
        _.nf("waaf0", "signin", "0");
        _.hx(a, function(a) {
            _.nf("waaf1", "signin", "0");
            ix(a)
        })
    };
    _.qx = function(a) {
        a = _.nx(a);
        _.Fa("oauth-flow/authWindowWidth", 445);
        _.Fa("oauth-flow/authWindowHeight", 615);
        ox(a)
    };
    _.rx = function(a) {
        _.Bu.unsubscribe(_.mH, a);
        _.Bu.subscribe(_.mH, a)
    };
    var Kx, fw;
    _.Ax = function(a) {
        return a.cookiepolicy ? !0 : (_.sx("cookiepolicy is a required field.  See https://developers.google.com/+/web/signin/#button_attr_cookiepolicy for more information."), !1)
    };
    _.sx = function(a) {
        window.console && (window.console.error ? window.console.error(a) : window.console.log && window.console.log(a))
    };
    _.Jx = function(a, c) {
        var f = _.Xu();
        _.Sl(a, f);
        f = Vw(f);
        if (_.Ax(f)) {
            var g = _.Gx(f);
            _.Hx(f);
            c ? _.La(c, "click", function() {
                _.Ix(f, g)
            }) : _.Ix(f, g)
        }
    };
    _.Gx = function(a) {
        var c = new Kx;
        _.rx(function(f) {
            if (c.Y7 && f && (f.access_token && _.Fa("isPlusUser", !0), f["g-oauth-window"]))
                if (c.Y7 = !1, f.access_token && "consent" == f.prompt) {
                    var g = f["g-oauth-window"];
                    f = f.id_token;
                    var h = a.apppackagename;
                    if (h && g) {
                        var l = !0;
                        try {
                            l = g.closed
                        } catch (n) {}
                        l || (f = _.P("iframes/:socialhost:") + "/_/history/otaappinstall?clientId=" + (0, window.encodeURIComponent)(a.clientid) + "&appId=" + (0, window.encodeURIComponent)(h) + "&idToken=" + (0, window.encodeURIComponent)(f), f = Xb(f), _.cu(g.location, f))
                    }
                } else if (g =
                f["g-oauth-window"], a.apppackagename && g) try {
                g.close()
            } catch (n) {}
        });
        return c
    };
    Kx = function() {
        this.Y7 = !1
    };
    _.Hx = function(a) {
        a = _.Vx(a);
        _.uy(a.callback);
        _.Xw(function() {
            _.px(a)
        }, !0)
    };
    _.Vx = function(a) {
        fw(a);
        a.apppackagename && (a.after_redirect = "keep_open");
        a.redirecturi && delete a.redirecturi;
        Ve(function(c) {
            return a[c]
        }) || (a.authuser = 0);
        a.apppackagename && (a.apppackagename = a.apppackagename.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        return a
    };
    fw = function(a) {
        /^\s*$/.test(a.scope || "") && (a.scope = "https://www.googleapis.com/auth/plus.login")
    };
    _.uy = function(a) {
        if ("string" === typeof a)
            if (window[a]) a = window[a];
            else {
                _.sx('Callback function named "' + a + '" not found');
                return
            } a && _.rx(a)
    };
    _.Ix = function(a, c) {
        c.Y7 = !0;
        a = _.Vx(a);
        _.qx(a)
    };
    _.Mu("gapi.auth.authorize", _.hx);
    _.Mu("gapi.auth.checkSessionState", function(a, c) {
        var f = _.r();
        f.client_id = a.client_id;
        f.session_state = a.session_state;
        _.Xw(function() {
            _.vE() ? _.MD.send("check_session_state", f, function(a) {
                c.call(null, a[0])
            }, _.Vz) : _.T.call(_.wu, "check_session_state", _.Rw(function(a) {
                c.call(null, a)
            }), f.session_state, f.client_id)
        })
    });
    _.Mu("gapi.auth.getAuthHeaderValueForFirstParty", kx);
    _.Mu("gapi.auth.getToken", _.YF);
    _.Mu("gapi.auth.getVersionInfo", function(a, c) {
        _.Xw(function() {
            var f = _.lq() || "",
                g = null,
                h = null;
            f && (h = f.split(" "), 2 == h.length && (g = h[1]));
            g ? _.vE() ? _.MD.send("get_versioninfo", {
                xapisidHash: g,
                sessionIndex: c
            }, function(c) {
                a(c[0])
            }, _.Vz) : _.T.call(_.wu, "get_versioninfo", _.Rw(function(c) {
                a(c)
            }), g, c) : a()
        })
    });
    _.Mu("gapi.auth.init", _.Xw);
    _.Mu("gapi.auth.setToken", _.Lw);
    _.Mu("gapi.auth.signIn", function(a) {
        _.Jx(a)
    });
    _.Mu("gapi.auth.signOut", function() {
        var a = _.YF();
        a && jx(a, a.cookie_policy)
    });
    _.Mu("gapi.auth.unsafeUnpackIdToken", _.Vv);
    _.Mu("gapi.auth._pimf", _.px);
    _.Mu("gapi.auth._oart", _.pw);
    _.Mu("gapi.auth._guss", function(a) {
        return _.ZM(a).read()
    });

    _.tC = function(a) {
        return !!(a.clientid && a.scope && a.callback)
    };
    _.KF = function() {
        var a = _.Xu();
        _.tC(a) && !_.P("disableRealtimeCallback") ? _.Hx(a) : _.Xw()
    };
    _.qk(function() {
        _.KF()
    });
    _.KF = function() {
        var a = _.Xu();
        _.tC(a) && !_.P("disableRealtimeCallback") && _.Hx(a)
    };
    var ED, DD, lD, RD = {
            PZ: function(a) {
                ED = a;
                try {
                    delete RD.PZ
                } catch (c) {}
            },
            QZ: function(a) {
                DD = a;
                try {
                    delete RD.QZ
                } catch (c) {}
            },
            v_: function(a) {
                lD = a;
                try {
                    delete RD.v_
                } catch (c) {}
            }
        },
        QC = function() {
            var a = !0,
                c = _.Xn(_.fo);
            c && _.kf(c.withCredentials) || (a = !1);
            return a
        },
        nC = function(a, c) {
            if (null == c) return c;
            c = String(c);
            c.match(/^\/\/.*/) && (c = ("http:" == window.location.protocol ? "http:" : "https:") + c);
            c.match(/^\/([^\/].*)?$/) && window.location.host && String(window.location.protocol).match(/^https?:$/) && (c = window.location.protocol +
                "//" + window.location.host + c);
            var f = c.match(/^(https?:)(\/\/)?(\/([^\/].*)?)?$/i);
            f && window.location.host && String(window.location.protocol).match(/^https?:$/) && (c = f[1] + "//" + window.location.host + (f[3] || ""));
            c = c.replace(/^(https?:\/\/[^\/?#@]*)\/$/i, "$1");
            c = c.replace(/^(http:\/\/[-_a-z0-9.]+):0*80([\/?#].*)?$/i, "$1$2");
            c = c.replace(/^(https:\/\/[-_a-z0-9.]+):0*443([\/?#].*)?$/i, "$1$2");
            c.match(/^https?:\/\/[-_a-z0-9.]*[-_a-z][-_a-z0-9.]*$/i) && (c = c.toLowerCase());
            f = _.P("client/rewrite");
            _.Vg(f) && Object.prototype.hasOwnProperty.call(f,
                c) ? c = String(f[c] || c) : (c = c.replace(/^(https?):\/\/www\.googleapis\.com$/, "$1://content.googleapis.com"), c = c.replace(/^(https?):\/\/www-(googleapis-[-_a-z0-9]+\.[-_a-z0-9]+\.google\.com)$/, "$1://content-$2"), c.match(/^https?:\/\/content(-[-_a-z0-9.]+)?\.googleapis\.com$/) || (c = c.replace(/^(https?):\/\/([-_a-z0-9]+(\.[-_a-z0-9]+)?\.googleapis\.com)$/, "$1://content-$2")));
            a && (a = _.P("client/firstPartyRewrite"), _.Vg(a) && Object.prototype.hasOwnProperty.call(a, c) ? c = String(a[c] || c) : (c = c.replace(/^(https?):\/\/content\.googleapis\.com$/,
                "$1://clients6.google.com"), c = c.replace(/^(https?):\/\/content-([-a-z0-9]+)\.([-a-z0-9]+)\.googleapis\.com$/, "$1://$2-googleapis.$3.google.com"), c = c.replace(/^(https?):\/\/content-([-a-z0-9]+)\.googleapis\.com$/, "$1://$2.clients6.google.com"), c = c.replace(/^(https?):\/\/([-a-z0-9]+)-www-googleapis\.([-a-z0-9]+).google.com$/, "$1://content-googleapis-$2.$3.google.com")));
            return c
        },
        wY = function(a) {
            _.se.call(this, a)
        };
    _.J(wY, _.se);
    wY.prototype.name = "gapi.client.Error";
    var PD = function(a) {
        if (!a || !_.vd(a)) throw new wY("Must provide a function.");
        this.QT = null;
        this.vea = a
    };
    PD.prototype.then = function(a, c, f) {
        this.QT || (this.QT = this.vea());
        return this.QT.then(a, c, f)
    };
    PD.prototype.vR = function(a) {
        this.QT || (this.QT = a)
    };
    var mC = function(a) {
            var c = {},
                f;
            for (f in a)
                if (Object.prototype.hasOwnProperty.call(a, f)) {
                    var g = _.zl(a, f);
                    g && (f = _.Zo(f, g)) && _.om(c, f, g, !0)
                } return c
        },
        kC = {
            error: {
                code: -1,
                message: "A network error occurred and the request could not be completed."
            }
        },
        DC = function(a, c, f, g) {
            _.Yn.call(this);
            this.Il = a;
            this.Ai = c;
            this.ee = f;
            a = {};
            if (g)
                for (var h in g) Object.prototype.hasOwnProperty.call(g, h) && (c = _.zl(g, h), void 0 !== c && (h = _.hu(h, c)) && _.om(a, h, c));
            g = {};
            for (h in a) Object.prototype.hasOwnProperty.call(a, h) && (g[(0, window.unescape)((0, window.encodeURIComponent)(h))] =
                (0, window.unescape)((0, window.encodeURIComponent)(a[h])));
            this.X1 = g;
            this.QT = null
        };
    _.J(DC, _.Yn);
    DC.prototype.then = function(a) {
        this.QT || (this.QT = (new _.C(function(a, f) {
            this.Ei("error", (0, _.H)(function() {
                f(AV(this))
            }, this));
            this.Ei("success", (0, _.H)(function() {
                a(AV(this))
            }, this));
            this.send(this.Il, this.Ai, this.ee, this.X1)
        }, this)).then(function(a) {
            a.headers = mC(a.headers);
            return a
        }, function(a) {
            return a.status ? (a.headers = mC(a.headers), _.$H(a)) : _.$H({
                result: kC,
                body: '{"error":{"code":-1,"message":"A network error occurred and the request could not be completed."}}',
                headers: null,
                status: null,
                statusText: null
            })
        }));
        return this.QT.then.apply(this.QT, arguments)
    };
    var AV = function(a) {
            var c = a.getStatus(),
                f = _.KI(a);
            var g = 204 == c ? !1 : "" == a.gZ ? _.of(f) : _.pA(a);
            var h = a.getAllResponseHeaders();
            h = _.Vt(h, !1);
            try {
                var l = 2 < _.iB(a) ? a.nb.statusText : ""
            } catch (n) {
                l = ""
            }
            return {
                result: g,
                body: f,
                headers: h,
                status: c,
                statusText: l
            }
        },
        cH = /;\s*charset\s*=\s*("utf-?8"|utf-?8)\s*(;|$)/i,
        ZG = /^(text\/[^\s;\/""]+|application\/(json(\+[^\s;\/""]*)?|([^\s;\/""]*\+)?xml))\s*(;|$)/i,
        YG = /;\s*charset\s*=/i,
        eQ = /(([\r\n]{0,2}[A-Za-z0-9+\/]){4,4}){0,1024}([\r\n]{0,2}[A-Za-z0-9+\/][\r\n]{0,2}[AQgw]([\r\n]{0,2}=){2,2}|([\r\n]{0,2}[A-Za-z0-9+\/]){2,2}[\r\n]{0,2}[AEIMQUYcgkosw048][\r\n]{0,2}=|([\r\n]{0,2}[A-Za-z0-9+\/]){4,4})[\r\n]{0,2}/g,
        iQ =
        function(a) {
            var c = [];
            a = a.replace(eQ, function(a) {
                c.push(_.MA(a));
                return ""
            });
            if (a.length) throw Error("sb");
            return c.join("")
        },
        dH = function(a) {
            var c = a.headers;
            if (c && "base64" === _.zl(c, _.Al.lka)) {
                var f = iQ(a.body),
                    g = _.zl(c, _.Al.kka);
                c[_.Al.jka] = g;
                if (g.match(cH) || g.match(ZG) && !g.match(YG)) {
                    g = [];
                    for (var h = 0, l = 0; l < f.length; l++) {
                        var n = f.charCodeAt(l);
                        255 < n && (g[h++] = n & 255, n >>= 8);
                        g[h++] = n
                    }
                    f = _.yx(g)
                }
                _.om(c, _.Al.lka);
                _.om(c, _.Al.kka);
                a.body = f
            }
        },
        uC = function(a, c, f) {
            f || ((f = _.P("googleapis.config/proxy")) && (f = String(f).replace(/\/static\/proxy\.html$/,
                "") || "/"), f = String(f || ""));
            f || (f = _.P("googleapis.config/root"), c && (f = _.P("googleapis.config/root-1p") || f), f = String(f || ""));
            f = String(nC(c, f) || f);
            return a = _.ul(f, a)
        },
        dD = function(a) {
            var c = _.yH(a, "params", "headers");
            c && "object" === typeof c || (c = {});
            a = {};
            for (var f in c)
                if (Object.prototype.hasOwnProperty.call(c, f)) {
                    var g = _.zl(c, f);
                    g && (_.hu(f, g), _.om(a, f, g))
                } f = "chrome-extension" == (window.location.href.match(_.Xi)[1] || null);
            a = _.sE(a);
            return !(f && a) && QC()
        },
        IC = function(a, c) {
            var f = a.params || _.r();
            f.url = f.path;
            var g = f.root;
            g = uC("/", _.sE(f.headers), g);
            g.match(/^(.*[^\/])?\/$/) && (g = g.substr(0, g.length - 1));
            f.root = g;
            a.params = f;
            _.Bk.Dd("makeHttpRequests", [a], function(a, f) {
                a && a.gapiRequest ? (a.gapiRequest.data ? dH(a.gapiRequest.data) : dH(a), c(a, _.mf(a))) : c(a, f)
            })
        },
        VC = function(a) {
            return new _.C(function(c, f) {
                var g = function(a) {
                    a && a.gapiRequest ? a = a.gapiRequest.data || a : f(a);
                    a = {
                        result: 204 != a.status && _.of(a.body),
                        body: a.body,
                        headers: a.headers || null,
                        status: a.status || null,
                        statusText: a.statusText || null
                    };
                    _.Em(a.status) ? c(a) :
                        f(a)
                };
                try {
                    IC(a, g)
                } catch (h) {
                    f(h)
                }
            })
        },
        sC = function(a) {
            var c = !_.P("client/cors") || !!_.P("client/xd4"),
                f = {};
            _.fb(a, function(g, h) {
                (g = _.hu(h, g)) || c || (g = _.gm(h));
                g && (h = _.zl(a, g)) && _.om(f, g, h)
            });
            return f
        },
        EC = function(a) {
            var c = a.params || _.r();
            a = _.rf(c.headers || {});
            var f = c.httpMethod || "GET",
                g = String(c.url || ""),
                h = (0, window.encodeURIComponent)("$unique");
            if (!("POST" === f || 0 <= _.Nb(g, "$unique", g.search(_.jZ)) || 0 <= _.Nb(g, h, g.search(_.jZ)))) {
                var l = [];
                for (n in a) Object.prototype.hasOwnProperty.call(a, n) && l.push(n.toLowerCase());
                l.sort();
                l.push(_.Vo(window.location.href));
                var n = l.join(":");
                l = _.Hp();
                l.update(n);
                n = l.Of().toLowerCase().substr(0, 7);
                n = String((0, window.parseInt)(n, 16) % 1E3 + 1E3).substr(1);
                g = _.po(g, h, "gc" + n)
            }
            h = c.body || null;
            n = c.responseType || null;
            c = _.sE(a) || "1p" == c.authType;
            _.om(a, _.Al.nka, void 0);
            a = sC(a);
            var q = new DC(g, f, h, a);
            q.eM = c;
            n && (q.gZ = n);
            return new _.C(function(a, c) {
                q.then(function(c) {
                    dH(c);
                    a(c)
                }, function(a) {
                    c(a)
                })
            })
        },
        TC = function(a, c) {
            var f = function(a) {
                a = _.rf(a);
                delete a.result;
                a = {
                    gapiRequest: {
                        data: a
                    }
                };
                c &&
                    c(a, _.mf(a))
            };
            EC(a).then(f, f)
        },
        OD = function(a, c) {
            (_.P("client/cors") || _.P("client/xd4")) && dD(a) ? TC(a, c) : IC(a, c)
        },
        zE = function(a) {
            this.I2 = a;
            this.ez = !1;
            this.promise = {
                then: (0, _.H)(function(a, f, g) {
                    this.ez || (this.ez = !0);
                    this.H2 && !this.C2 ? this.I2.resolve(this.H2) : this.C2 && !this.H2 && this.I2.reject(this.C2);
                    return this.I2.promise.then(a, f, g)
                }, this)
            }
        };
    zE.prototype.resolve = function(a) {
        this.ez ? this.I2.resolve(a) : this.H2 || this.C2 || (this.H2 = a)
    };
    zE.prototype.reject = function(a) {
        this.ez ? this.I2.reject(a) : this.H2 || this.C2 || (this.C2 = a)
    };
    var CE = function(a) {
            a = _.TO(a.error);
            return {
                code: a.code,
                data: a.errors,
                message: a.message
            }
        },
        DE = function(a) {
            throw Error("n`" + a);
        };
    var GE = function(a) {
        PD.call(this, GE.prototype.e5);
        if (!a || "object" != typeof a && "string" != typeof a) throw new wY("Missing required parameters");
        if (_.fa(a)) {
            var c = {};
            c.path = a
        } else c = a;
        if (!c.path) throw new wY('Missing required parameter: "path"');
        this.k5 = {};
        this.k5.path = c.path;
        this.k5.method = c.method || "GET";
        this.k5.params = c.params || {};
        this.k5.headers = c.headers || {};
        this.k5.body = c.body;
        this.k5.root = c.root;
        this.k5.responseType = c.responseType;
        this.k5.apiId = c.apiId;
        this.Ida = c.authType || "auto";
        this.Uja = !!c.isXd4;
        this.Tja = !1
    };
    _.J(GE, PD);
    var IE = ["appVersion", "platform", "userAgent"],
        KE = {
            "google-api-gwt-client": !0,
            "google-api-javascript-client": !0
        };
    GE.prototype.eR = function() {
        return this.k5
    };
    GE.prototype.Yk = function(a) {
        this.Ida = a
    };
    GE.prototype.fR = function() {
        if (!this.Tja) {
            this.Tja = !0;
            var a = this.k5,
                c = a.headers = a.headers || {},
                f = [],
                g = [];
            for (n in c)
                if (Object.prototype.hasOwnProperty.call(c, n)) {
                    f.push(n);
                    var h = n,
                        l = _.zl(c, h);
                    l && (h = _.hu(h, l) || _.gm(h)) && g.push([h, l])
                } var n = 0;
            for (h = f.length; n < h; ++n) delete c[f[n]];
            f = 0;
            for (n = g.length; f < n; ++f) _.om(c, g[f][0], g[f][1]);
            if (this.Uja) g = "1p" == this.Ida;
            else {
                g = c;
                f = _.Al.mka;
                n = String(_.P("client/version", "1.1.0"));
                h = String(_.P("client/name", "google-api-javascript-client"));
                h = !0 === KE[h] ? h : "google-api-javascript-client";
                l = String(_.P("client/appName", ""));
                var q = [];
                l && (q.push(l), q.push(" "));
                q.push(h);
                n && (q.push("/"), q.push(n));
                _.om(g, f, q.join(""));
                _.om(c, _.Al.Bka, "XMLHttpRequest");
                g = _.zl(c, _.Al.jka);
                a.body && !g && _.om(c, _.Al.jka, "application/json");
                _.P("client/allowExecutableResponse") || _.om(c, _.Al.qka, "base64");
                (g = _.zl(c, _.Al.jka)) && "application/json" == g.toLowerCase() && !a.params.alt && (a.params.alt = "json");
                (g = a.body || null) && _.Vg(g) && (a.body = _.mf(g));
                a.key = a.id;
                c = _.Bk.SU(c, void 0, this.Ida);
                g = _.sE(c);
                if ((f = c) && window.navigator) {
                    n = [];
                    for (h = 0; h < IE.length; h++)(l = window.navigator[IE[h]]) && n.push((0, window.encodeURIComponent)(IE[h]) + "=" + (0, window.encodeURIComponent)(l));
                    _.om(f, _.Al.pka, n.join("&"))
                }(f = _.P("client/apiKey")) && !_.kf(a.params.key) && (a.params.key = f);
                (f = _.P("client/trace")) && !a.params.trace && (a.params.trace = f)
            }
            "auto" == this.Ida && (g ? this.Yk("1p") : (c = _.zl(c, _.Al.tka)) && String(c).match(/^(Bearer|MAC)[ \t]/i) ? this.Yk("oauth2") : this.Yk("none"));
            (c = String(a.path || "").match(/^(https?:\/\/[^\/?#]+)([\/?#].*)?$/i)) && !a.root &&
                (a.root = String(c[1]), a.path = String(c[2] || "/"), a.path.match(/^\/_ah\/api(\/.*)?$/) ? (a.root += "/_ah/api", a.path = a.path.substr(8)) : (c = _.P("googleapis.config/root"), g && (c = _.P("googleapis.config/root-1p") || c), c = String(c || ""), f = a.root + a.path, c && f.substr(0, c.length) === c && (a.path = f.substr(c.length), a.root = c)));
            c = a.params;
            f = _.Cl(a.path);
            n = String(_.P("googleapis.config/xd3") || "");
            18 <= n.length && "/static/proxy.html" == n.substring(n.length - 18) && (n = n.substring(0, n.length - 18));
            n || (n = "/");
            h = _.Cl(n);
            if (n != h) throw Error("ga");
            "/" != n.charAt(n.length - 1) && (n += "/");
            f = _.ul(n, f);
            _.jr(f, "/") && (f = f.substring(0, f.length - 1));
            n = _.r();
            for (var t in c) Object.prototype.hasOwnProperty.call(c, t) && (h = (0, window.encodeURIComponent)(t), n[h] = c[t]);
            f = _.Dm(f, n);
            a.path = f;
            a.root = nC(!!g, a.root);
            a.url = uC(a.path, !!g, a.root)
        }
    };
    var Km = function(a) {
        a.fR();
        var c = a.k5;
        return {
            key: "gapiRequest",
            params: {
                id: c.id,
                key: c.key,
                url: c.url,
                path: c.path,
                httpMethod: c.method,
                body: c.body || "",
                headers: c.headers || {},
                urlParams: {},
                root: c.root,
                authType: a.Ida
            }
        }
    };
    GE.prototype.execute = function(a) {
        var c = Km(this);
        OD(c, function(c, g) {
            var f = c;
            c.gapiRequest && (f = c.gapiRequest);
            f && f.data && (f = f.data);
            c = f instanceof Array ? f[0] : f;
            if (204 != c.status && c.body) try {
                var l = _.of(c.body)
            } catch (n) {}
            a && a(l, g)
        })
    };
    GE.prototype.e5 = function() {
        var a = Km(this);
        return (_.P("client/cors") || _.P("client/xd4")) && dD(a) ? EC(a) : VC(a)
    };
    GE.prototype.N1 = function() {
        return this.e5()
    };
    GE.prototype.execute = GE.prototype.execute;
    GE.prototype.then = GE.prototype.then;
    GE.prototype.getPromise = GE.prototype.N1;
    var LE = function(a) {
        if (!a || "object" != typeof a) throw new wY("Missing rpc parameters");
        if (!a.method) throw new wY("Missing rpc method");
        this.q5 = a
    };
    LE.prototype.Ns = function() {
        var a = this.q5.transport;
        return a ? a.root || null : null
    };
    LE.prototype.execute = function(a) {
        var c = DD();
        c.add(this, {
            id: "gapiRpc",
            callback: this.i2(a)
        });
        c.execute()
    };
    LE.prototype.Vs = function(a) {
        var c = this.q5.method,
            f = String,
            g;
        (g = this.q5.apiVersion) || (g = String(c).split(".")[0], g = _.P("googleapis.config/versions/" + c) || _.P("googleapis.config/versions/" + g) || "v1", g = String(g));
        f = f(g);
        a = {
            jsonrpc: "2.0",
            id: a,
            method: c,
            apiVersion: f
        };
        (c = this.q5.rpcParams) && (a.params = c);
        return a
    };
    LE.prototype.i2 = function(a) {
        return function(c, f) {
            if (c)
                if (c.error) {
                    var g = c.error;
                    null == g.error && (g.error = _.rf(c.error))
                } else g = c.result || c.data, _.Vg(g) && null == g.result && (g.result = _.rf(c.result || c.data));
            else g = !1;
            a(g, f)
        }
    };
    LE.prototype.execute = LE.prototype.execute;
    var NE = function(a, c) {
            this.Mq = c || 0;
            2 == this.Mq ? (c = null, null != a && _.Vg(a) && (c = {}, c.method = a.method, c.rpcParams = a.rpcParams, c.transport = a.transport, c.root = a.root, c.apiVersion = a.apiVersion, c.authType = a.authType), this.Zq = new LE(c)) : (0 == this.Mq && (c = a && a.callback) && (a.callback = ME(c)), c = null, null != a && (_.Vg(a) ? (c = {}, c.path = a.path, c.method = a.method, c.params = a.params, c.headers = a.headers, c.body = a.body, c.root = a.root, c.responseType = a.responseType, c.authType = a.authType, c.apiId = a.apiId) : _.fa(a) && (c = a)), this.Zq = new GE(c))
        },
        ME = function(a) {
            return function(c) {
                if (null != c && _.Vg(c) && c.error) {
                    var f = CE(c);
                    c = _.mf([{
                        id: "gapiRpc",
                        error: f
                    }]);
                    f.error = _.TO(f)
                } else null != c || (c = {}), f = _.TO(c), f.result = _.TO(c), c = _.mf([{
                    id: "gapiRpc",
                    result: c
                }]);
                a(f, c)
            }
        };
    _.k = NE.prototype;
    _.k.getFormat = function() {
        return this.Mq
    };
    _.k.execute = function(a) {
        this.Zq.execute(a && 1 == this.Mq ? ME(a) : a)
    };
    _.k.then = function(a, c, f) {
        2 == this.Mq && DE('The "then" method is not available on this object.');
        return this.Zq.then(a, c, f)
    };
    _.k.vR = function(a) {
        this.Zq.vR && this.Zq.vR(a)
    };
    _.k.eR = function() {
        if (this.Zq.eR) return this.Zq.eR()
    };
    _.k.fR = function() {
        this.Zq.eR && this.Zq.fR()
    };
    _.k.Ns = function() {
        if (this.Zq.Ns) return this.Zq.Ns()
    };
    _.k.Vs = function(a) {
        if (this.Zq.Vs) return this.Zq.Vs(a)
    };
    _.k.Yk = function(a) {
        this.Zq.Yk && this.Zq.Yk(a)
    };
    _.k.N1 = function() {
        if (this.Zq.N1) return this.Zq.N1()
    };
    NE.prototype.execute = NE.prototype.execute;
    NE.prototype.then = NE.prototype.then;
    NE.prototype.getPromise = NE.prototype.N1;
    var OE = function(a) {
        PD.call(this, OE.prototype.e5);
        this.Zq = a
    };
    _.J(OE, PD);
    _.k = OE.prototype;
    _.k.execute = function(a) {
        var c = this.getFormat(),
            f = function(f) {
                if (_.vd(a)) {
                    var g = {
                            gapiRequest: {
                                data: {
                                    status: f && f.status,
                                    statusText: f && f.statusText,
                                    headers: f && f.headers,
                                    body: f && f.body
                                }
                            }
                        },
                        l = a,
                        n = void 0;
                    1 === c && (l = ME(l), n = {});
                    var q = f ? f.result : !1;
                    f && 204 == f.status && (q = n, delete g.gapiRequest.data.body);
                    f = _.mf(g);
                    l(q, f)
                }
            };
        this.N1().then(f, f)
    };
    _.k.e5 = function() {
        return new _.C(function(a, c) {
            var f = ED(),
                g = f.add(this.Zq, {
                    id: "gapiRequest"
                });
            return f.then(function(f) {
                var h = f.result;
                if (h && (h = h[g])) {
                    Object.prototype.hasOwnProperty.call(h, "result") || (h.result = !1);
                    Object.prototype.hasOwnProperty.call(h, "body") || (h.body = "");
                    _.Em(h.status) ? a(h) : c(h);
                    return
                }
                c(f)
            }, c)
        }, this)
    };
    _.k.eR = function() {
        if (this.Zq.eR) return this.Zq.eR()
    };
    _.k.fR = function() {
        this.Zq.fR && this.Zq.fR()
    };
    _.k.Ns = function() {
        if (this.Zq.Ns) return this.Zq.Ns()
    };
    _.k.Yk = function(a) {
        this.Zq.Yk && this.Zq.Yk(a)
    };
    _.k.getFormat = function() {
        var a = void 0;
        this.Zq.getFormat && (a = this.Zq.getFormat());
        void 0 === a && (a = 0);
        return a
    };
    _.k.N1 = function() {
        return this.e5()
    };
    OE.prototype.execute = OE.prototype.execute;
    OE.prototype.then = OE.prototype.then;
    OE.prototype.getPromise = OE.prototype.N1;
    var xT = /<response-(.*)>/,
        RT = /^application\/http(;.+$|$)/,
        aU = function(a, c) {
            a = _.zl(a, c);
            if (!a) throw new wY("Unable to retrieve header.");
            return a
        },
        iU = function(a, c, f, g) {
            var h = "batch" + String(Math.round(2147483647 * (0, _.Vb)())) + String(Math.round(2147483647 * (0, _.Vb)())),
                l = "--" + h;
            h = "multipart/mixed; boundary=" + h;
            a: {
                var n = void 0;
                for (var q = 0; q < a.length; q++) {
                    var t = a[q].request.eR().apiId;
                    if (!_.fa(t)) {
                        n = "batch";
                        break a
                    }
                    if (!_.kf(n)) n = t;
                    else if (n != t) {
                        n = "batch";
                        break a
                    }
                }
                n = _.P("client/batchPath/" + n) || "batch/" + n.split(":").join("/")
            }
            n = {
                path: n,
                method: "POST"
            };
            q = [];
            for (t = 0; t < a.length; t++) q.push(dU(a[t].request, [l.substr(l.indexOf("--") + 2), "+", (0, window.encodeURIComponent)(a[t].id).split("(").join("%28").split(")").join("%29").split(".").join("%2E"), "@googleapis.com"].join("")));
            n.body = [l, q.join("\r\n" + l + "\r\n"), l + "--"].join("\r\n") + "\r\n";
            n.root = c || null;
            if (_.P("client/xd4") && QC()) return n.isXd4 = !0, n.params = {
                $ct: h
            }, n.headers = {}, _.om(n.headers, _.Al.jka, "text/plain; charset=UTF-8"), f ? n.authType = "1p" : g && (n.authType = "oauth2"), new GE(n);
            n.headers = {};
            _.om(n.headers, _.Al.jka, h);
            return lD(n)
        },
        dU = function(a, c) {
            var f = [];
            a = a.eR();
            var g = function(a, c) {
                    _.fb(a, function(a, f) {
                        c.push(f + ": " + a)
                    })
                },
                h = {};
            h[_.Al.jka] = "application/http";
            h[_.Al.oka] = "binary";
            h[_.Al.MH] = "<" + c + ">";
            g(h, f);
            f.push("");
            f.push(a.method + " " + a.path);
            g(a.headers, f);
            f.push("");
            a.body && f.push(a.body);
            return f.join("\r\n")
        },
        AU = function(a, c) {
            a = uU(a, c);
            var f = {};
            _.qf(a, function(a, c) {
                f[c] = {
                    result: a.result || a.body,
                    rawResult: _.mf({
                        id: c,
                        result: a.result || a.body
                    }),
                    id: c
                }
            });
            return f
        },
        uU =
        function(a, c) {
            a = (0, _.Ge)(a);
            _.jr(a, "--") && (a = a.substring(0, a.length - 2));
            a = a.split(c);
            c = _.r();
            for (var f = 0; f < a.length; f++)
                if (a[f]) {
                    var g;
                    if (g = a[f]) {
                        _.jr(g, "\r\n") && (g = g.substring(0, g.length - 2));
                        if (g) {
                            g = g.split("\r\n");
                            for (var h = 0, l = {
                                    headers: {},
                                    body: ""
                                }; h < g.length && "" == g[h];) h++;
                            for (l.outerHeaders = BU(g, h); h < g.length && "" != g[h];) h++;
                            h++;
                            var n = g[h++].split(" ");
                            l.status = Number(n[1]);
                            l.statusText = n.slice(2).join(" ");
                            for (l.headers = BU(g, h); h < g.length && "" != g[h];) h++;
                            h++;
                            l.body = g.slice(h).join("\r\n");
                            dH(l);
                            g = l
                        } else g = null;
                        h = _.r();
                        l = aU(g.outerHeaders, _.Al.jka);
                        if (null == RT.exec(l)) throw new wY("Unexpected Content-Type <" + l + ">");
                        l = aU(g.outerHeaders, _.Al.MH);
                        l = xT.exec(l);
                        if (!l) throw new wY("Unable to recognize Content-Id.");
                        h.id = (0, window.decodeURIComponent)(l[1].split("@")[0].replace(/^.*[+]/, ""));
                        h.response = {
                            status: g.status,
                            statusText: g.statusText,
                            headers: g.headers
                        };
                        204 != g.status && (h.response.body = g.body, h.response.result = _.of(g.body));
                        g = h
                    } else g = null;
                    g && g.id && (c[g.id] = g.response)
                } return c
        },
        BU = function(a, c) {
            for (var f = []; c < a.length && a[c]; c++) f.push(a[c]);
            return _.Vt(f.join("\r\n"), !1)
        };
    var TE = function(a) {
        PD.call(this, TE.prototype.e5);
        this.Oh = [];
        this.hq = a;
        this.uga = !!a;
        this.PV = this.Sja = !1
    };
    _.J(TE, PD);
    var $F = function(a, c) {
        for (var f = 0; f < a.Oh.length; f++)
            if (a.Oh[f].id == c) return !0;
        return !1
    };
    _.k = TE.prototype;
    _.k.add = function(a, c) {
        c = c || _.r();
        var f = _.r();
        if (!a) throw new wY("Batch entry " + (_.Qa(c, "id") ? '"' + c.id + '" ' : "") + "is missing a request method");
        a.fR();
        f.request = a;
        var g = _.Su();
        g = new zE(g);
        f.Ae = g;
        a.vR(f.Ae.promise);
        g = a.eR().headers;
        _.sE(g) && (this.Sja = !0);
        (g = String((g || {}).Authorization || "") || null) && g.match(/^Bearer|MAC[ \t]/i) && (this.PV = !0);
        a = a.eR().root;
        if (!this.uga) {
            if (a && this.hq && a != this.hq) throw new wY('The "root" provided in this request is not consistent with that of existing requests in the batch.');
            this.hq = a || this.hq
        }
        if (_.Qa(c, "id")) {
            a = c.id;
            if ($F(this, a)) throw new wY('Batch ID "' + a + '" already in use, please use another.');
            f.id = a
        } else {
            do f.id = String(Math.round(2147483647 * (0, _.Vb)())); while ($F(this, f.id))
        }
        f.Ga = c.callback;
        this.Oh.push(f);
        return f.id
    };
    _.k.execute = function(a) {
        1 > this.Oh.length || (_.eb(this.Oh, function(a) {
            a.request.fR()
        }), a = this.i2(a), iU(this.Oh, this.hq, this.Sja, this.PV).execute(a))
    };
    _.k.e5 = function() {
        if (1 > this.Oh.length) return new _.C(function(a) {
            a({})
        });
        _.eb(this.Oh, function(a) {
            a.request.fR()
        });
        var a = iU(this.Oh, this.hq, this.Sja, this.PV),
            c = (0, _.H)(function(a) {
                hF(a);
                if (0 != aU(a.headers, _.Al.jka).indexOf("multipart/mixed")) throw new wY("The response's Content-Type is not multipart/mixed.");
                var c = aU(a.headers, _.Al.jka).split("boundary=")[1];
                if (!c) throw new wY("Boundary not indicated in response.");
                c = uU(a.body, "--" + c);
                a.result = c || {};
                for (var f = 0; f < this.Oh.length; f++) {
                    var g = this.Oh[f],
                        q = c[g.id];
                    q && _.Em(q.status) ? g.Ae.resolve(q) : g.Ae.reject(q)
                }
                return a
            }, this),
            f = (0, _.H)(function(a) {
                for (var c = 0; c < this.Oh.length; c++) {
                    var f = this.Oh[c],
                        g = {
                            error: {
                                code: 0,
                                message: "The batch request could not be fulfilled."
                            }
                        };
                    a && a.message || a.message ? g.error.message += " " + (a.message || a.message) : a && a.error && a.error.message && (g.error.message = a.error.message, g.error.code = a.error.code || 0);
                    f.Ae.reject({
                        result: g,
                        body: _.mf(g),
                        headers: null,
                        status: null,
                        statusText: null
                    })
                }
                throw a;
            }, this);
        return a.then(c, f)
    };
    _.k.i2 = function(a) {
        return (0, _.H)(function(c, f) {
            this.e6(c, f, a)
        }, this)
    };
    _.k.e6 = function(a, c, f) {
        try {
            a = lF(a, c);
            if (!a) throw new wY("The batch response is missing.");
            if (0 != aU(a.headers, _.Al.jka).indexOf("multipart/mixed")) throw new wY("The response's Content-Type is not multipart/mixed.");
            if (200 <= a.status && 299 >= a.status) {
                var g = aU(a.headers, _.Al.jka).split("boundary=")[1];
                if (!g) throw new wY("Boundary not indicated in response.");
                var h = AU(a.body, "--" + g);
                for (a = 0; a < this.Oh.length; a++) {
                    var l = this.Oh[a],
                        n = h[l.id];
                    if (n && Object.prototype.hasOwnProperty.call(n, "rawResult")) {
                        n.rawResult =
                            void 0;
                        try {
                            delete n.rawResult
                        } catch (t) {}
                    }
                    if (l.Ga) {
                        var q = _.mf(n);
                        try {
                            l.Ga(n || !1, q)
                        } catch (t) {
                            (function(a) {
                                (0, window.setTimeout)(function() {
                                    throw a;
                                })
                            })(t)
                        }
                    }
                }
            }
            if (f) try {
                f(h || null, c)
            } catch (t) {
                (function(a) {
                    (0, window.setTimeout)(function() {
                        throw a;
                    })
                })(t)
            }
        } catch (t) {
            c = !0;
            l = {
                error: {
                    code: 0,
                    message: "The batch request could not be fulfilled."
                }
            };
            if (t && t.message || t.message) l.error.message += " " + (t.message || t.message);
            h = {
                result: l,
                body: _.mf(l),
                headers: null,
                status: null,
                statusText: null
            };
            n = _.mf(h);
            if (this.Oh)
                for (a = 0; a <
                    this.Oh.length; a++)
                    if (l = this.Oh[a], l.Ga) try {
                        l.Ga(h, n)
                    } catch (v) {
                        (function(a) {
                            (0, window.setTimeout)(function() {
                                throw a;
                            })
                        })(v)
                    } else c = !1;
                    else c = !1;
            if (f) {
                try {
                    f(h, n)
                } catch (v) {
                    (function(a) {
                        (0, window.setTimeout)(function() {
                            throw a;
                        })
                    })(v)
                }
                c = !0
            }
            if (!c) throw t;
        }
    };
    var lF = function(a, c) {
            c && !a && (c = _.of(c)) && (a = c.gapiRequest ? c.gapiRequest.data : c);
            hF(a);
            return a
        },
        hF = function(a) {
            if (a) {
                var c = a.headers;
                if (c) {
                    var f = _.r(),
                        g;
                    for (g in c)
                        if (Object.prototype.hasOwnProperty.call(c, g)) {
                            var h = _.zl(c, g);
                            _.om(f, g, h, !0)
                        } a.headers = f
                }
            }
        };
    TE.prototype.add = TE.prototype.add;
    TE.prototype.execute = TE.prototype.execute;
    TE.prototype.then = TE.prototype.then;
    var oF = function() {
        this.Oh = [];
        this.hq = this.Hr = null
    };
    oF.prototype.add = function(a, c) {
        c = c || {};
        var f = {},
            g = Object.prototype.hasOwnProperty;
        if (a) f.qf = a;
        else throw new wY("Batch entry " + (g.call(c, "id") ? '"' + c.id + '" ' : "") + "is missing a request method");
        if (g.call(c, "id")) {
            a = c.id;
            for (g = 0; g < this.Oh.length; g++)
                if (this.Oh[g].id == a) throw new wY('Batch ID "' + a + '" already in use, please use another.');
            f.id = a
        } else {
            do f.id = String(2147483647 * (0, _.Vb)() | 0); while (g.call(this.Oh, f.id))
        }
        f.Ga = c.callback;
        this.Oh.push(f);
        return f.id
    };
    var wF = function(a) {
        return function(c) {
            var f = c.body;
            if (c = c.result) {
                for (var g = {}, h = 0, l = c.length; h < l; ++h) g[c[h].id] = c[h];
                a(g, f)
            } else a(c, f)
        }
    };
    oF.prototype.execute = function(a) {
        this.Hr = [];
        for (var c, f, g = 0; g < this.Oh.length; g++) c = this.Oh[g], f = c.qf, this.Hr.push(f.Vs(c.id)), this.hq = f.Ns() || this.hq;
        c = {
            requests: this.Hr,
            root: this.hq
        };
        f = this.i2(a);
        a = {};
        g = c.headers || {};
        for (var h in g) {
            var l = h;
            if (Object.prototype.hasOwnProperty.call(g, l)) {
                var n = _.zl(g, l);
                n && (l = _.hu(l, n) || _.gm(l)) && _.om(a, l, n)
            }
        }
        _.om(a, _.Al.jka, "application/json");
        h = wF(f);
        lD({
            method: "POST",
            root: c.root || void 0,
            path: "/rpc",
            params: c.urlParams,
            headers: a,
            body: c.requests || []
        }).then(h, h)
    };
    oF.prototype.i2 = function(a) {
        var c = this;
        return function(f, g) {
            c.e6(f, g, a)
        }
    };
    oF.prototype.e6 = function(a, c, f) {
        a || (a = {});
        for (var g = 0; g < this.Oh.length; g++) {
            var h = this.Oh[g];
            h.Ga && h.Ga(a[h.id] || !1, c)
        }
        f && f(a, c)
    };
    RD.QZ(function() {
        return new oF
    });
    oF.prototype.add = oF.prototype.add;
    oF.prototype.execute = oF.prototype.execute;
    var zF = function(a, c) {
        this.$ga = a;
        this.Mq = c || null;
        this.h1 = null
    };
    zF.prototype.uja = function(a) {
        this.Mq = a;
        this.h1 = 2 == this.Mq ? new oF : new TE(this.$ga)
    };
    zF.prototype.add = function(a, c) {
        if (!a) throw a = c || _.r(), new wY("Batch entry " + (_.Qa(a, "id") ? '"' + a.id + '" ' : "") + "is missing a request method");
        null === this.Mq && this.uja(a.getFormat());
        this.Mq !== a.getFormat() && DE("Unable to add item to batch.");
        var f = c && c.callback;
        1 == this.Mq && f && (c.callback = function(a) {
            a = DF(a);
            var c = _.mf([a]);
            f(a, c)
        });
        return this.h1.add(a, c)
    };
    zF.prototype.execute = function(a) {
        var c = a && 1 == this.Mq ? function(c) {
            var f = [];
            _.fb(c, function(a, g) {
                a = DF(a);
                c[g] = a;
                f.push(a)
            });
            var h = _.mf(f);
            a(c, h)
        } : a;
        this.h1 && this.h1.execute(c)
    };
    var DF = function(a) {
        var c = a ? _.yH(a, "result") : null;
        _.Vg(c) && null != c.error && (c = CE(c), a = {
            id: a.id,
            error: c
        });
        return a
    };
    zF.prototype.then = function(a, c, f) {
        2 == this.Mq && DE('The "then" method is not available on this object.');
        return this.h1.then(a, c, f)
    };
    zF.prototype.add = zF.prototype.add;
    zF.prototype.execute = zF.prototype.execute;
    zF.prototype.then = zF.prototype.then;
    var EF = "/rest?fields=" + (0, window.encodeURIComponent)("kind,name,version,rootUrl,servicePath,resources,parameters,methods,batchPath,id") + "&pp=0",
        XP = function(a, c) {
            return "/discovery/v1/apis/" + ((0, window.encodeURIComponent)(a) + "/" + (0, window.encodeURIComponent)(c) + EF)
        },
        GF = function(a, c, f, g) {
            if (_.Vg(a)) {
                var h = a;
                var l = a.name;
                a = a.version || "v1"
            } else l = a, a = c;
            if (!l || !a) throw new wY("Missing required parameters.");
            var n = f || function() {},
                q = _.Vg(g) ? g : {};
            f = function(a) {
                var c = a && a.result;
                if (!c || c.error || !c.name || !a ||
                    a.error || a.message || a.message) n(c && c.error ? c : a && (a.error || a.message || a.message) ? a : new wY("API discovery response missing required fields."));
                else {
                    a = q.root;
                    a = null != c.rootUrl ? String(c.rootUrl) : a;
                    a = _.fa(a) ? a.replace(/([^\/])\/$/, "$1") : void 0;
                    q.root = a;
                    c.name && c.version && !c.id && (c.id = [c.name, c.version].join(":"));
                    c.id && (q.apiId = c.id, a = "client/batchPath/" + c.id, c.batchPath && !_.P(a) && _.Fa(a, c.batchPath));
                    var f = c.servicePath,
                        g = c.parameters,
                        h = function(a) {
                            _.fb(a, function(a) {
                                if (!(a && a.id && a.path && a.httpMethod)) throw new wY("Missing required parameters");
                                var c = a.id.split("."),
                                    h = window.gapi.client,
                                    l;
                                for (l = 0; l < c.length - 1; l++) {
                                    var n = c[l];
                                    h[n] = h[n] || {};
                                    h = h[n]
                                }
                                var t, v;
                                q && (q.hasOwnProperty("root") && (t = q.root), q.hasOwnProperty("apiId") && (v = q.apiId));
                                n = window.gapi.client[c[0]];
                                n.kB || (n.kB = {
                                    servicePath: f || "",
                                    parameters: g,
                                    apiId: v
                                });
                                c = c[l];
                                h[c] || (h[c] = _.ma(HF, {
                                    path: _.fa(a.path) ? a.path : null,
                                    httpMethod: _.fa(a.httpMethod) ? a.httpMethod : null,
                                    parameters: a.parameters,
                                    parameterName: (a.request || {}).parameterName || "",
                                    request: a.request,
                                    root: t
                                }, n.kB))
                            })
                        },
                        l = function(a) {
                            _.fb(a,
                                function(a) {
                                    h(a.methods);
                                    l(a.resources)
                                })
                        };
                    l(c.resources);
                    h(c.methods);
                    n.call()
                }
            };
            h ? f({
                result: h
            }) : 0 < l.indexOf("://") ? lD({
                path: l,
                params: {
                    pp: 0,
                    fields: 0 <= ("/" + l).indexOf("/discovery/v1/apis/") ? "kind,name,version,rootUrl,servicePath,resources,parameters,methods,batchPath,id" : 'fields["kind"],fields["name"],fields["version"],fields["rootUrl"],fields["servicePath"],fields["resources"],fields["parameters"],fields["methods"],fields["batchPath"],fields["id"]'
                }
            }).then(f, f) : lD({
                path: XP(l, a),
                root: g && g.root
            }).then(f,
                f)
        },
        HF = function(a, c, f, g) {
            var h = c.servicePath || "";
            _.jd(h, "/") || (h = "/" + h);
            var l = MF(a.path, [a.parameters, c.parameters], f || {});
            f = l.Yi;
            var n = l.hM;
            h = _.ul(h, l.path);
            l = n.root;
            delete n.root;
            var q = a.parameterName;
            !q && 1 == _.qA(n) && n.hasOwnProperty("resource") && (q = "resource");
            if (q) {
                var t = n[q];
                delete n[q]
            }
            null != t || (t = g);
            null == t && a.request && (_.Og(n) && (n = void 0), t = n);
            q = {};
            var v = a.httpMethod;
            "GET" == v && _.kf(t) && "" != String(t) && (_.om(q, _.Al.Aka, v), v = "POST");
            if ((null == t || null != g) && n)
                for (var w in n) _.fa(n[w]) && (f[w] = n[w]);
            return lD({
                path: h,
                method: v,
                params: f,
                headers: q,
                body: t,
                root: l || a.root,
                apiId: c.apiId
            }, 1)
        },
        MF = function(a, c, f) {
            f = _.rf(f);
            var g = {};
            _.eb(c, function(c) {
                _.fb(c, function(c, h) {
                    var l = c.required;
                    if ("path" == c.location)
                        if (Object.prototype.hasOwnProperty.call(f, h)) - 1 != a.indexOf("{" + h + "}") ? (c = _.fq(f[h]), a = a.replace("{" + h + "}", c)) : -1 != a.indexOf("{+" + h + "}") && (c = (0, window.encodeURI)(String(f[h])), a = a.replace("{+" + h + "}", c)), delete f[h];
                        else {
                            if (l) throw new wY("Required path parameter " + h + " is missing.");
                        }
                    else "query" == c.location && Object.prototype.hasOwnProperty.call(f, h) && (g[h] = f[h], delete f[h])
                })
            });
            if (c = f.trace) g.trace = c, delete f.trace;
            return {
                path: a,
                Yi: g,
                hM: f
            }
        };
    var ZH = function(a, c, f, g) {
            var h = c || "v1",
                l = _.Vg(g) ? g : {
                    root: g
                };
            if (f) GF(a, h, function(a) {
                if (a)
                    if (a.error) f(a);
                    else {
                        var c = "API discovery was unsuccessful.";
                        if (a.message || a.message) c = a.message || a.message;
                        f({
                            error: c,
                            code: 0
                        })
                    }
                else f()
            }, l);
            else return new _.C(function(c, f) {
                var g = function(a) {
                    a ? f(a) : c()
                };
                try {
                    GF(a, h, g, l)
                } catch (v) {
                    f(v)
                }
            })
        },
        QN = new RegExp(/^((([Hh][Tt][Tt][Pp][Ss]?:)?\/\/[^\/?#]*)?\/)?/.source + /(_ah\/api\/)?(batch|rpc)(\/|\?|#|$)/.source),
        RN = function(a, c) {
            if (!a) throw new wY("Missing required parameters");
            var f = "object" === typeof a ? a : {
                path: a
            };
            a = f.callback;
            delete f.callback;
            c = new NE(f, c);
            if (f = !!_.P("client/xd4") && QC()) {
                var g = c.eR();
                f = g.path;
                (g = g.root) && "/" !== g.charAt(g.length - 1) && (g += "/");
                g && f && f.substr(0, g.length) === g && (f = f.substr(g.length));
                f = !f.match(QN)
            }
            f && (c = new OE(c));
            return a ? (c.execute(a), null) : c
        };
    RD.v_(function(a) {
        return RN.apply(null, arguments)
    });
    var lO = function(a, c) {
            if (!a) throw new wY("Missing required parameters");
            for (var f = a.split("."), g = window.gapi.client, h = 0; h < f.length - 1; h++) {
                var l = f[h];
                g[l] = g[l] || {};
                g = g[l]
            }
            f = f[f.length - 1];
            if (!g[f]) {
                var n = c || {};
                g[f] = function(c) {
                    var f = "string" == typeof n ? n : n.root;
                    c && c.root && (f = c.root);
                    return new NE({
                        method: a,
                        apiVersion: n.apiVersion,
                        rpcParams: c,
                        transport: {
                            name: "googleapis",
                            root: f
                        }
                    }, 2)
                }
            }
        },
        oO = function(a) {
            return new zF(a)
        };
    RD.PZ(function(a) {
        return oO.apply(null, arguments)
    });
    var CH = function(a) {
        _.kd(a + " is deprecated. See https://developers.google.com/api-client-library/javascript/reference/referencedocs")
    };
    _.Mu("gapi.client.init", function(a) {
        a.apiKey && _.Fa("client/apiKey", a.apiKey);
        var c = (0, _.De)(a.discoveryDocs || [], function(a) {
            return ZH(a)
        });
        if ((a.clientId || a.client_id) && a.scope) {
            var f = new _.C(function(c, f) {
                _.D.gapi.load("auth2", {
                    callback: function() {
                        _.D.gapi.auth2.init.call(_.D.gapi.auth2, a).then(function() {
                            c()
                        }, f)
                    },
                    onerror: function() {
                        f()
                    }
                })
            });
            c.push(f)
        } else(a.clientId || a.client_id || a.scope) && _.kd("client_id and scope must both be provided to initialize OAuth.");
        return _.Pr(c).then(function() {})
    });
    _.Mu("gapi.client.load", ZH);
    _.Mu("gapi.client.newBatch", oO);
    _.Mu("gapi.client.newRpcBatch", function() {
        CH("gapi.client.newRpcBatch");
        return oO()
    });
    _.Mu("gapi.client.newHttpBatch", function(a) {
        CH("gapi.client.newHttpBatch");
        return new zF(a, 0)
    });
    _.Mu("gapi.client.register", function(a, c) {
        CH("gapi.client.register");
        var f;
        c && (f = {
            apiVersion: c.apiVersion,
            root: c.root
        });
        lO(a, f)
    });
    _.Mu("gapi.client.request", RN);
    _.Mu("gapi.client.rpcRequest", function(a, c, f) {
        CH("gapi.client.rpcRequest");
        if (!a) throw new wY('Missing required parameter "method".');
        return new NE({
            method: a,
            apiVersion: c,
            rpcParams: f,
            transport: {
                name: "googleapis",
                root: f && f.root || ""
            }
        }, 2)
    });
    _.Mu("gapi.client.setApiKey", function(a) {
        _.Fa("client/apiKey", a);
        _.Fa("googleapis.config/developerKey", a)
    });
    _.Mu("gapi.client.setApiVersions", function(a) {
        CH("gapi.client.setApiVersions");
        _.Fa("googleapis.config/versions", a)
    });
    _.Mu("gapi.client.getToken", function(a) {
        return _.au(a)
    });
    _.Mu("gapi.client.setToken", function(a, c) {
        a ? _.RF(a, c) : _.Kb(c)
    });
    _.Mu("gapi.client.AuthType", {
        LH: "auto",
        NONE: "none",
        CP: "oauth2",
        NH: "1p"
    });
    _.Mu("gapi.client.AuthType.AUTO", "auto");
    _.Mu("gapi.client.AuthType.NONE", "none");
    _.Mu("gapi.client.AuthType.OAUTH2", "oauth2");
    _.Mu("gapi.client.AuthType.FIRST_PARTY", "1p");

});
// Google Inc.