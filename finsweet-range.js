(() => {
    var Vt = Object.create;
    var C = Object.defineProperty;
    var Lt = Object.getOwnPropertyDescriptor;
    var wt = Object.getOwnPropertyNames;
    var Mt = Object.getPrototypeOf,
        Kt = Object.prototype.hasOwnProperty;
    var kt = (e, t, r) => t in e ? C(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r;
    var Nt = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t), t.exports);
    var Ut = (e, t, r, s) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let n of wt(t)) !Kt.call(e, n) && n !== r && C(e, n, {
                get: () => t[n],
                enumerable: !(s = Lt(t, n)) || s.enumerable
            });
        return e
    };
    var Dt = (e, t, r) => (r = e != null ? Vt(Mt(e)) : {}, Ut(t || !e || !e.__esModule ? C(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e));
    var q = (e, t, r) => (kt(e, typeof t != "symbol" ? t + "" : t, r), r);
    var et = Nt((rr, tt) => {
        tt.exports = Yt;

        function Yt(e, t, r, s) {
            var n, o, i;
            return function() {
                if (i = this, o = Array.prototype.slice.call(arguments), n && (r || s)) return;
                if (!r) return l(), n = setTimeout(u, t), n;
                n = setTimeout(l, t), e.apply(i, o);

                function u() {
                    l(), e.apply(i, o)
                }

                function l() {
                    clearTimeout(n), n = null
                }
            }
        }
    });
    var v = "fs-attributes";
    var x = "rangeslider";
    var E = class {
        static activateAlerts() {
            this.alertsActivated = !0
        }
        static alert(t, r) {
            if (this.alertsActivated && window.alert(t), r === "error") throw new Error(t)
        }
    };
    q(E, "alertsActivated", !1);
    var H = (e, t) => (Array.isArray(t) || (t = [t]), t.map(s => e.dispatchEvent(new Event(s, {
        bubbles: !0
    }))).every(s => s));
    var O = e => {
        if (V(e)) return;
        let t = e,
            r = ({
                parentElement: s
            }) => {
                !s || V(s) || (t = s, r(s))
            };
        return r(e), t
    };
    var V = e => !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    var P = (e, t) => {
        let {
            type: r
        } = e, s = r === "radio";
        if (s || r === "checkbox") {
            if (!(e instanceof HTMLInputElement) || typeof t != "boolean" || t === e.checked || s && t === !1) return;
            e.checked = t
        } else {
            if (e.value === t) return;
            e.value = t.toString()
        }
        H(e, ["click", "input", "change"])
    };
    var B = e => e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
    var y = e => e != null;
    var k = e => {
        let t = (s, n, o) => {
            let i = e[s],
                {
                    key: a,
                    values: u
                } = i,
                l;
            if (!n) return `[${a}]`;
            let d = u == null ? void 0 : u[n];
            typeof d == "string" ? l = d : l = d(o && "instanceIndex" in o ? o.instanceIndex : void 0);
            let p = o && "caseInsensitive" in o && o.caseInsensitive ? "i" : "";
            if (!(o != null && o.operator)) return `[${a}="${l}"${p}]`;
            switch (o.operator) {
                case "prefixed":
                    return `[${a}^="${l}"${p}]`;
                case "suffixed":
                    return `[${a}$="${l}"${p}]`;
                case "contains":
                    return `[${a}*="${l}"${p}]`
            }
        };

        function r(s, n) {
            let o = t("element", s, n),
                i = (n == null ? void 0 : n.scope) || document;
            return n != null && n.all ? i.querySelectorAll(o) : i.querySelector(o)
        }
        return [t, r]
    };
    var w = {
            preventLoad: {
                key: `${v}-preventload`
            },
            debugMode: {
                key: `${v}-debug`
            },
            src: {
                key: "src",
                values: {
                    finsweet: "@finsweet/attributes"
                }
            },
            dev: {
                key: `${v}-dev`
            }
        },
        [Y, Ce] = k(w);
    var Q = () => {
        let {
            currentScript: e
        } = document, {
            preventLoad: t,
            debugMode: r
        } = w, s = typeof(e == null ? void 0 : e.getAttribute(t.key)) == "string";
        return typeof(e == null ? void 0 : e.getAttribute(r.key)) == "string" && E.activateAlerts(), {
            preventsLoad: s
        }
    };
    var Ct = `${v}-support`,
        Ht = "https://cdn.jsdelivr.net/npm/@finsweet/attributes-support@1/support.js",
        z = async () => {
            let {
                fsAttributes: e,
                location: t
            } = window, {
                host: r,
                searchParams: s
            } = new URL(t.href);
            if (!r.includes("webflow.io") || !s.has(Ct)) return !1;
            if (e.supportImport) return e.supportImport;
            try {
                e.supportImport = new Promise((n, o) => {
                    let i = document.createElement("script");
                    i.src = Ht, i.onload = () => n(!0), i.onerror = o, document.head.append(i)
                })
            } catch (n) {
                return !1
            }
            return e.supportImport
        };
    var J = () => {
            if (window.fsAttributes && !Array.isArray(window.fsAttributes)) return;
            let e = {
                cms: {},
                push(...t) {
                    var r, s;
                    for (let [n, o] of t)(s = (r = this[n]) == null ? void 0 : r.loading) == null || s.then(o)
                }
            };
            Ot(e), Pt(e), window.fsAttributes = e, window.FsAttributes = window.fsAttributes, z()
        },
        Ot = e => {
            let t = Y("src", "finsweet", {
                    operator: "contains"
                }),
                r = Y("dev"),
                n = [...document.querySelectorAll(`script${t}, script${r}`)].reduce((o, i) => {
                    var u;
                    let a = i.getAttribute(w.dev.key) || ((u = i.src.match(/[\w-. ]+(?=(\.js)$)/)) == null ? void 0 : u[0]);
                    return a && !o.includes(a) && o.push(a), o
                }, []);
            for (let o of n) {
                e[o] = {};
                let i = e[o];
                i.loading = new Promise(a => {
                    i.resolve = u => {
                        a(u), delete i.resolve
                    }
                })
            }
        },
        Pt = e => {
            let t = Array.isArray(window.fsAttributes) ? window.fsAttributes : [];
            e.push(...t)
        };
    var Z = "1.6.4";
    var _t = Dt(et(), 1);
    var $ = e => e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
    var rt = "ArrowUp",
        nt = "ArrowDown",
        st = "ArrowRight",
        ot = "ArrowLeft";
    var _ = `fs-${x}`,
        $t = "wrapper",
        Ft = "track",
        Wt = "fill",
        Gt = "handle",
        Xt = "display-value",
        jt = "min",
        qt = "max",
        Qt = "start",
        zt = "step",
        Jt = "formatdisplay",
        Zt = {
            true: "true"
        },
        te = "update",
        ee = {
            move: "move",
            release: "release"
        },
        M = {
            element: {
                key: `${_}-element`,
                values: {
                    wrapper: $t,
                    track: Ft,
                    fill: Wt,
                    handle: Gt,
                    displayValue: Xt
                }
            },
            min: {
                key: `${_}-${jt}`
            },
            max: {
                key: `${_}-${qt}`
            },
            start: {
                key: `${_}-${Qt}`
            },
            step: {
                key: `${_}-${zt}`
            },
            formatDisplay: {
                key: `${_}-${Jt}`,
                values: Zt
            },
            updateAction: {
                key: `${_}-${te}`,
                values: ee
            }
        },
        [K, F] = k(M),
        W = [rt, st],
        re = [nt, ot],
        it = [...W, ...re];
    var lt = e => {
            if (!isFinite(e)) return 0;
            let t = 1,
                r = 0;
            for (; Math.round(e * t) / t !== e;) t *= 10, r += 1;
            return r
        },
        at = (e, t) => {
            let r = Math.pow(10, t);
            return Math.round(e * r) / r
        },
        L = (e, t, r) => {
            let s = e % t,
                n = e - s;
            return s > t / 2 ? at(n + t, r) : at(n, r)
        },
        ut = (e, [t, r]) => {
            let s = t.getValue(),
                n = r == null ? void 0 : r.getValue(),
                o = ne(e, [s, n]);
            if (typeof o != "number") return;
            let [i, a] = t.getConstraints();
            if (o === s && e >= i && e <= a) return t;
            if (!r || o !== n) return;
            let [u, l] = r.getConstraints();
            if (e >= u && e <= l) return r
        },
        ne = (e, t) => {
            let r = t.filter(y);
            return r.length ? r.reduce((n, o) => Math.abs(o - e) < Math.abs(n - e) ? o : n) : void 0
        };
    var {
        min: {
            key: se
        },
        max: {
            key: oe
        },
        step: {
            key: ie
        },
        formatDisplay: {
            key: ae,
            values: le
        },
        updateAction: {
            key: ue,
            values: ce
        }
    } = M, ct = e => {
        let t = F("track", {
                operator: "prefixed",
                scope: e
            }),
            r = F("fill", {
                operator: "prefixed",
                scope: e
            }),
            s = [...e.querySelectorAll("input")].filter(B),
            n = [...e.querySelectorAll(K("element", "handle", {
                operator: "prefixed"
            }))],
            o = [...e.querySelectorAll(K("element", "displayValue", {
                operator: "prefixed"
            }))],
            i = e.getAttribute(ae) === le.true,
            a = e.getAttribute(ue) === ce.release;
        if (!n.length || !t) {
            E.alert("The rangeslider is missing a Track element or a Handle element.", "error");
            return
        }
        let {
            left: u,
            right: l
        } = t.getBoundingClientRect(), d = t.clientWidth;
        t.style.position = "relative";
        let p = parseFloat(e.getAttribute(se) || "0"),
            f = parseFloat(e.getAttribute(oe) || `${p+1}`),
            c = f - p;
        if (Number.isNaN(c)) {
            E.alert("Please make sure min and max are numbers.", "error");
            return
        }
        if (Math.sign(c) === -1) {
            E.alert("The min can't be greater than the max.", "error");
            return
        }
        let b = parseFloat(e.getAttribute(ie) || `${c/100}`),
            A = lt(b);
        return c % b > 0 && E.alert(`The provided step [${b}] doesn't fit the range [${p},${f}], are you sure you want to use this value?`, "info"), {
            trackElement: t,
            fillElement: r,
            handleElements: n,
            inputElements: s,
            displayValueElements: o,
            formatValueDisplay: i,
            trackLeft: u,
            trackRight: l,
            trackWidth: d,
            minRange: p,
            maxRange: f,
            totalRange: c,
            step: b,
            precision: A,
            updateOnRelease: a
        }
    };
    var N = class {
        constructor(t, {
            minRange: r,
            maxRange: s,
            handles: n,
            trackWidth: o
        }) {
            this.element = t;
            t.style.position = "absolute", t.style.right = "unset", this.minRange = r, this.totalRange = s - r, this.handles = n, this.trackWidth = o, this.update()
        }
        updateTrackWidth(t) {
            this.trackWidth = t
        }
        update() {
            let {
                element: t,
                trackWidth: r,
                minRange: s,
                totalRange: n,
                handles: [o, i]
            } = this, a, u, l = (o.getValue() - s) * r / n;
            i ? (a = l, u = (i.getValue() - o.getValue()) * r / n) : (a = 0, u = l), t.style.left = `${a}px`, t.style.width = `${u}px`
        }
    };
    var pt = "role",
        mt = {
            slider: "slider",
            listbox: "listbox",
            option: "option",
            columnheader: "columnheader",
            link: "link"
        },
        dt = "tabindex",
        G = "aria-label",
        Et = "aria-labelledby",
        ft = "aria-valuenow",
        At = "aria-valuemin",
        bt = "aria-valuemax";
    var Tt = (e, t) => {
        e.setAttribute(pt, mt.slider), e.setAttribute(dt, "0"), ![G, Et].some(r => e.getAttribute(r)) && t && e.setAttribute(G, t.name)
    };
    var ht = e => {
        e.style.position = "absolute", e.style.right = "unset", e.style.top = "50%", e.style.transform = "translate(-50%, -50%)"
    };
    var U = class {
        constructor(t, {
            index: r,
            minRange: s,
            maxRange: n,
            trackWidth: o,
            step: i,
            precision: a,
            startValue: u,
            inputElement: l,
            displayValueElement: d,
            formatValueDisplay: p
        }) {
            this.element = t;
            this.updatingInput = !1;
            this.getValue = () => this.currentValue;
            this.getConstraints = () => [this.minValue, this.maxValue];
            this.inputElement = l, this.displayValueElement = d, this.formatValueDisplay = p, this.index = r, this.minRange = s, this.maxRange = n, this.totalRange = n - s, this.step = i, this.precision = a, this.minValue = s, this.maxValue = n, this.trackWidth = o, ht(t), Tt(t, l), this.setValue(u, s, n), this.listenEvents()
        }
        listenEvents() {
            let {
                element: t,
                inputElement: r
            } = this;
            t.addEventListener("keydown", s => this.handleKeyDown(s)), r == null || r.addEventListener("change", () => this.handleInputChange())
        }
        handleKeyDown(t) {
            let {
                step: r,
                currentValue: s
            } = this, {
                key: n
            } = t;
            !it.includes(n) || (t.preventDefault(), W.includes(n) ? this.setValue(s + r, s, n) : this.setValue(s - r, s, n))
        }
        handleInputChange() {
            let {
                inputElement: t,
                index: r,
                minRange: s,
                maxRange: n,
                step: o,
                precision: i,
                updatingInput: a
            } = this;
            if (!t || a) return;
            let {
                value: u
            } = t, l = parseFloat(u);
            if (l) {
                this.setValue(L(l, o, i), s, n);
                return
            }
            this.setValue(r === 0 ? s : n, s, n, !1)
        }
        updatePosition() {
            let {
                currentValue: t,
                element: r,
                trackWidth: s,
                minRange: n,
                totalRange: o,
                fill: i
            } = this, a = (t - n) * s / o;
            r.style.left = `${a}px`, i == null || i.update()
        }
        setValue(t, minRange, maxRange, r = !0) {
            let {
                currentValue: s,
                element: n,
                minValue: o,
                maxValue: i,
                displayValueElement: a,
                formatValueDisplay: u
            } = this;
            if (s === t || t < o || t > i) return !1;
            this.currentValue = t, this.updatePosition(), this.updateSiblingConstraints();
            let l = `${t}`,
                d = t.toLocaleString();
                if (element && element.get_attribute('fs-rangeslider-element-symbol')) {
                    symbolValue = n.get_attribute('fs-rangeslider-element-symbol')
                }
                else {
                    symbolValue = "";
                }
                d = symbolValue + d;
                if (t <= minRange && t != 0) {
                    d = "< " + d
                }
                if (t >= maxRange) {
                    d = d + "+"
                }

            return n.setAttribute(ft, l), a && (a.textContent = u ? d : l), r && this.updateInputElement(), !0
        }
        updateInputElement() {
            this.updatingInput = !0;
            let {
                currentValue: t,
                inputElement: r
            } = this;
            !r || (P(r, `${t}`), this.updatingInput = !1)
        }
        setConstraints(t, r) {
            let {
                element: s
            } = this;
            s.setAttribute(At, `${t}`), s.setAttribute(bt, `${r}`), this.minValue = t, this.maxValue = r
        }
        updateSiblingConstraints() {
            let {
                index: t,
                sibling: r,
                step: s,
                minRange: n,
                maxRange: o,
                currentValue: i
            } = this;
            !r || (t === 0 ? r.setConstraints(i + s, o) : r.setConstraints(n, i - s))
        }
        updateTrackWidth(t) {
            var r;
            this.trackWidth = t, (r = this.fill) == null || r.updateTrackWidth(t), this.updatePosition()
        }
        addFill(t) {
            this.fill = t
        }
        addSibling(t) {
            this.sibling = t, this.updateSiblingConstraints()
        }
    };
    var xt = ({
            handleElements: e,
            inputElements: t,
            displayValueElements: r,
            formatValueDisplay: s,
            minRange: n,
            maxRange: o,
            trackWidth: i,
            step: a,
            precision: u
        }) => {
            let l = e.slice(0, 2).map((f, c) => {
                let b = parseFloat(f.getAttribute(M.start.key) || `${c===0?n:o}`),
                    A = L(b, a, u),
                    R = t[c],
                    g = r[c];
                return A < n && (E.alert(`The Handle start value [${A}] doesn't match the range, so it has been set to the min value [${n}].`, "info"), A = n), A > o && (E.alert(`The Handle start value [${A}] doesn't match the range, so it has been set to the max value [${o}].`, "info"), A = o), new U(f, {
                    index: c,
                    minRange: n,
                    maxRange: o,
                    trackWidth: i,
                    step: a,
                    precision: u,
                    startValue: A,
                    inputElement: R,
                    displayValueElement: g,
                    formatValueDisplay: s
                })
            }).filter(y);
            if (!l.length) return;
            l.length > 1 && l.sort((f, c) => f.getValue() - c.getValue());
            let [d, p] = l;
            return p ? (d.addSibling(p), p.addSibling(d)) : d.setConstraints(n, o), [d, p]
        },
        yt = ({
            fillElement: e,
            minRange: t,
            maxRange: r,
            trackWidth: s
        }, n) => {
            if (!e) return;
            let o = new N(e, {
                    minRange: t,
                    maxRange: r,
                    trackWidth: s,
                    handles: n
                }),
                [i, a] = n;
            i.addFill(o), a == null || a.addFill(o)
        };
    var X = () => {
            var r, s;
            let t = [...document.querySelectorAll(K("element", "wrapper", {
                operator: "prefixed"
            }))].map(pe).filter(y);
            return (s = (r = window.fsAttributes[x]).resolve) == null || s.call(r, t), t
        },
        pe = e => {
            let t = ct(e);
            if (!t) return;
            let r = xt(t);
            if (!r) return;
            yt(t, r);
            let {
                maxRange: s,
                minRange: n,
                step: o,
                precision: i,
                totalRange: a,
                trackElement: u,
                updateOnRelease: l
            } = t, {
                trackWidth: d,
                trackLeft: p,
                trackRight: f
            } = t, c, b = !1, A = m => {
                let T = n + (m - p) * a / d;
                return L(T, o, i)
            }, R = m => {
                if (!c) return;
                m instanceof MouseEvent && m.preventDefault();
                let T = $(m),
                    [h, I] = c.getConstraints(),
                    S;
                p > T ? S = h : f < T ? S = I : S = A(T);
                let vt = c.setValue(S, n, s, !l);
                b || (b = vt)
            }, g = m => {
                m.cancelable && m.preventDefault(), document.removeEventListener("mousemove", R), document.removeEventListener("touchmove", R), document.removeEventListener("mouseup", g), document.removeEventListener("touchend", g), l && b && (c == null || c.updateInputElement()), b = !1, c == null || c.element.blur(), c = void 0
            }, D = m => {
                m.cancelable && m.preventDefault();
                let T = $(m);
                document.addEventListener("mousemove", R), document.addEventListener("touchmove", R, {
                    passive: !0
                }), document.addEventListener("mouseup", g), document.addEventListener("touchend", g);
                let h;
                p > T ? h = n : f < T ? h = s : h = A(T);
                let I = ut(h, r);
                if (!I) return;
                I.element.focus(), c = I;
                let S = I.setValue(h, n, s, !l);
                b || (b = S)
            }, j = () => {
                d = u.clientWidth, {
                    left: p,
                    right: f
                } = u.getBoundingClientRect();
                for (let m of r) m && m.updateTrackWidth(d)
            }, St = () => {
                let m = O(e);
                if (!m) return;
                new MutationObserver(() => {
                    V(m) && j()
                }).observe(m, {
                    attributes: !0,
                    attributeFilter: ["style", "class"]
                })
            };
            return u.addEventListener("mousedown", D), u.addEventListener("touchstart", D, {
                passive: !0
            }), St(), window.addEventListener("resize", (0, _t.default)(j, 50)), r
        };
    J();
    var Rt, gt;
    (Rt = window.fsAttributes)[gt = x] || (Rt[gt] = {});
    var {
        preventsLoad: me
    } = Q(), It = window.fsAttributes[x];
    It.version = Z;
    me ? It.init = X : (window.Webflow || (window.Webflow = []), window.Webflow.push(X));
})();