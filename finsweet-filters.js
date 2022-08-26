// LINE 934 CONTAINS ELEMENT

// Final Calculation done in qt
// Qt calls qt
// u inside Qt contains the filter key "price"

(() => {
    // window.allFsElements = {};
    var ie = Object.create;
    var it = Object.defineProperty,
        ne = Object.defineProperties,
        ae = Object.getOwnPropertyDescriptor,
        le = Object.getOwnPropertyDescriptors,
        ce = Object.getOwnPropertyNames,
        St = Object.getOwnPropertySymbols,
        me = Object.getPrototypeOf,
        ht = Object.prototype.hasOwnProperty,
        ue = Object.prototype.propertyIsEnumerable;
    var st = (e, t, r) => t in e ? it(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r,
        v = (e, t) => {
            for (var r in t || (t = {})) ht.call(t, r) && st(e, r, t[r]);
            if (St)
                for (var r of St(t)) ue.call(t, r) && st(e, r, t[r]);
            return e
        },
        O = (e, t) => ne(e, le(t));
    var pe = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t), t.exports);
    var fe = (e, t, r, o) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let s of ce(t)) !ht.call(e, s) && s !== r && it(e, s, {
                get: () => t[s],
                enumerable: !(o = ae(t, s)) || o.enumerable
            });
        return e
    };
    var de = (e, t, r) => (r = e != null ? ie(me(e)) : {}, fe(t || !e || !e.__esModule ? it(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e));
    var bt = (e, t, r) => (st(e, typeof t != "symbol" ? t + "" : t, r), r);
    var $t = pe((Ts, Ht) => {
        Ht.exports = nr;

        function nr(e, t, r, o) {
            var s, i, n;
            return function() {
                if (n = this, i = Array.prototype.slice.call(arguments), s && (r || o)) return;
                if (!r) return c(), s = setTimeout(l, t), s;
                s = setTimeout(c, t), e.apply(n, i);

                function l() {
                    c(), e.apply(n, i)
                }

                function c() {
                    clearTimeout(s), s = null
                }
            }
        }
    });
    var At = "@finsweet/attributes-cmscore";
    var I = class {
        static activateAlerts() {
            this.alertsActivated = !0
        }
        static alert(t, r) {
            if (this.alertsActivated && window.alert(t), r === "error") throw new Error(t)
        }
    };
    bt(I, "alertsActivated", !1);
    var Ct = {
            wrapper: "w-dyn-list",
            list: "w-dyn-items",
            item: "w-dyn-item",
            paginationWrapper: "w-pagination-wrapper",
            paginationNext: "w-pagination-next",
            paginationPrevious: "w-pagination-previous",
            pageCount: "w-page-count",
            emptyState: "w-dyn-empty"
        },
        R = {
            formBlock: "w-form",
            checkboxField: "w-checkbox",
            checkboxInput: "w-checkbox-input",
            radioField: "w-radio",
            radioInput: "w-radio-input",
            checkboxOrRadioLabel: "w-form-label",
            checkboxOrRadioFocus: "w--redirected-focus",
            checkboxOrRadioChecked: "w--redirected-checked",
            successMessage: "w-form-done",
            errorMessage: "w-form-fail"
        };
    var B = (e, t) => (Array.isArray(t) || (t = [t]), t.map(o => e.dispatchEvent(new Event(o, {
        bubbles: !0
    }))).every(o => o));
    var {
        radioInput: Ee,
        checkboxOrRadioFocus: ye,
        checkboxOrRadioChecked: Te
    } = R, nt = (e, t = []) => {
        let {
            type: r
        } = e;
        if (e instanceof HTMLInputElement && ["checkbox", "radio"].includes(r)) {
            if (!e.checked || (e.checked = !1, B(e, ["click", "input", "change"].filter(i => !t.includes(i))), r === "checkbox")) return;
            let {
                parentElement: o
            } = e;
            if (!o) return;
            let s = o.querySelector(`.${Ee}`);
            if (!s) return;
            s.classList.remove(ye, Te);
            return
        }
        e.value = "", B(e, ["input", "change"].filter(o => !t.includes(o)))
    };
    var at = (e, t = !0) => e.cloneNode(t);
    var F = (e, t) => !!e && t.includes(e);

    function V(e, t, r, o = !0) {
        let s = r ? [r] : [];
        if (!e) return s;
        let i = e.split(",").reduce((n, a) => {
            let l = a.trim();
            return (!o || l) && n.push(l), n
        }, []);
        if (t) {
            let n = i.filter(a => F(a, t));
            return n.length ? n : s
        }
        return i
    }
    var lt = e => Object.entries(e);
    var z = e => !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    var G = (e, t) => e.every(r => t.includes(r)) && t.every(r => e.includes(r));
    var k = (e, t) => {
        let {
            type: r
        } = e, o = r === "radio";
        if (o || r === "checkbox") {
            if (!(e instanceof HTMLInputElement) || typeof t != "boolean" || t === e.checked || o && t === !1) return;
            e.checked = t
        } else {
            if (e.value === t) return;
            e.value = t.toString()
        }
        B(e, ["click", "input", "change"])
    };
    var Y = e => e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
    var ct = e => e != null;

    function P(e) {
        return e == null ? void 0 : e.trim().toLowerCase()
    }
    var Se = `https://cdn.jsdelivr.net/npm/${At}@1/cmscore.js`,
        j = async () => {
            let {
                fsAttributes: e
            } = window;
            e.cms || (e.cms = {});
            let {
                cms: t
            } = e;
            if (t.coreImport) return t.coreImport;
            try {
                let r = import(Se);
                return t.coreImport = r, r.then(o => {
                    o && (t.coreVersion || (t.coreVersion = o.version))
                }), r
            } catch (r) {
                I.alert(`${r}`, "error");
                return
            }
        };
    var he = "https://cdn.jsdelivr.net/npm/@finsweet/attributes-animation@1/functions.js",
        H = async () => {
            let {
                fsAttributes: e
            } = window;
            if (e.animationImport) return e.animationImport;
            try {
                let t = import(he);
                return e.animationImport = t, t
            } catch (t) {
                I.alert(`${t}`, "error");
                return
            }
        };
    var $ = "fs-attributes";
    var K = "cmsfilter";
    var wt = "queryparam";
    var be = `${$}-support`,
        Ae = "https://cdn.jsdelivr.net/npm/@finsweet/attributes-support@1/support.js",
        xt = async () => {
            let {
                fsAttributes: e,
                location: t
            } = window, {
                host: r,
                searchParams: o
            } = new URL(t.href);
            if (!r.includes("webflow.io") || !o.has(be)) return !1;
            if (e.supportImport) return e.supportImport;
            try {
                e.supportImport = new Promise((s, i) => {
                    let n = document.createElement("script");
                    n.src = Ae, n.onload = () => s(!0), n.onerror = i, document.head.append(n)
                })
            } catch (s) {
                return !1
            }
            return e.supportImport
        };
    var mt = async (e, {
        durationKey: t,
        easingKey: r
    }) => {
        let o = await H();
        if (!o) return;
        let {
            animations: {
                fade: s
            },
            easings: i
        } = o, {
            listAnimation: n
        } = e, a = e.getAttribute(t), l = e.getAttribute(r);
        if (n && !a && !l) return;
        let c = F(l, i) ? l : void 0,
            m = a ? parseFloat(a) / 2e3 : .1;
        if (!n) {
            e.listAnimation = O(v({}, s), {
                options: {
                    easing: c,
                    duration: m
                }
            });
            return
        }
        let {
            options: u
        } = n;
        if (!u) {
            n.options = {
                easing: c,
                duration: m
            };
            return
        }
        u.easing || (u.easing = c), a && (u.duration = m)
    };
    var x = e => t => `${e}${t?`-${t}`:""}`,
        W = e => {
            let t = (o, s, i) => {
                let n = e[o],
                    {
                        key: a,
                        values: l
                    } = n,
                    c;
                if (!s) return `[${a}]`;
                let m = l == null ? void 0 : l[s];
                typeof m == "string" ? c = m : c = m(i && "instanceIndex" in i ? i.instanceIndex : void 0);
                let u = i && "caseInsensitive" in i && i.caseInsensitive ? "i" : "";
                if (!(i != null && i.operator)) return `[${a}="${c}"${u}]`;
                switch (i.operator) {
                    case "prefixed":
                        return `[${a}^="${c}"${u}]`;
                    case "suffixed":
                        return `[${a}$="${c}"${u}]`;
                    case "contains":
                        return `[${a}*="${c}"${u}]`
                }
            };

            function r(o, s) {
                let i = t("element", o, s),
                    n = (s == null ? void 0 : s.scope) || document;
                return s != null && s.all ? n.querySelectorAll(i) : n.querySelector(i)
            }
            return [t, r]
        };
    var q = {
            preventLoad: {
                key: `${$}-preventload`
            },
            debugMode: {
                key: `${$}-debug`
            },
            src: {
                key: "src",
                values: {
                    finsweet: "@finsweet/attributes"
                }
            },
            dev: {
                key: `${$}-dev`
            }
        },
        [ut, zo] = W(q);
    var Ft = e => {
        let {
            currentScript: t
        } = document, r = {};
        if (!t) return {
            attributes: r,
            preventsLoad: !1
        };
        let s = {
            preventsLoad: typeof t.getAttribute(q.preventLoad.key) == "string",
            attributes: r
        };
        for (let i in e) {
            let n = t.getAttribute(e[i]);
            s.attributes[i] = n
        }
        return s
    };
    var _t = () => {
            if (window.fsAttributes && !Array.isArray(window.fsAttributes)) return;
            let e = {
                cms: {},
                push(...t) {
                    var r, o;
                    for (let [s, i] of t)(o = (r = this[s]) == null ? void 0 : r.loading) == null || o.then(i)
                }
            };
            Ce(e), we(e), window.fsAttributes = e, window.FsAttributes = window.fsAttributes, xt()
        },
        Ce = e => {
            let t = ut("src", "finsweet", {
                    operator: "contains"
                }),
                r = ut("dev"),
                s = [...document.querySelectorAll(`script${t}, script${r}`)].reduce((i, n) => {
                    var l;
                    let a = n.getAttribute(q.dev.key) || ((l = n.src.match(/[\w-. ]+(?=(\.js)$)/)) == null ? void 0 : l[0]);
                    return a && !i.includes(a) && i.push(a), i
                }, []);
            for (let i of s) {
                e[i] = {};
                let n = e[i];
                n.loading = new Promise(a => {
                    n.resolve = l => {
                        a(l), delete n.resolve
                    }
                })
            }
        },
        we = e => {
            let t = Array.isArray(window.fsAttributes) ? window.fsAttributes : [];
            e.push(...t)
        };
    var It = "1.12.7";
    var S = `fs-${K}`,
        Fe = "list",
        _e = "filters",
        Ie = "empty",
        ve = "initial",
        Me = "results-count",
        Le = "filter-results-count",
        Re = "items-count",
        ke = "tag-template",
        De = "tag-text",
        Ke = "tag-remove",
        Ne = "scroll-anchor",
        Ue = "reset",
        Oe = "field",
        Be = "reset",
        Ve = "match",
        vt = {
            any: "any",
            all: "all"
        },
        Pe = "range",
        Mt = {
            from: "from",
            to: "to"
        },
        He = "type",
        $e = {
            date: "date"
        },
        Ge = "showquery",
        Ye = {
            true: "true"
        },
        je = "allowsubmit",
        qe = {
            true: "true"
        },
        Qe = "hideempty",
        ze = {
            true: "true"
        },
        We = "highlight",
        Xe = {
            true: "true"
        },
        Je = "highlightclass",
        Ze = "active",
        tr = "debounce",
        er = "tagformat",
        rr = {
            category: "category"
        },
        or = "tagcategory",
        sr = "easing",
        ir = "duration",
        _ = {
            element: {
                key: `${S}-element`,
                values: {
                    list: x(Fe),
                    filters: x(_e),
                    empty: x(Ie),
                    initial: x(ve),
                    resultsCount: x(Me),
                    filterResultsCount: x(Le),
                    itemsCount: x(Re),
                    tagTemplate: x(ke),
                    tagText: x(De),
                    tagRemove: x(Ke),
                    scrollAnchor: x(Ne),
                    reset: Ue
                }
            },
            field: {
                key: `${S}-${Oe}`
            },
            reset: {
                key: `${S}-${Be}`
            },
            match: {
                key: `${S}-${Ve}`,
                values: vt
            },
            range: {
                key: `${S}-${Pe}`,
                values: Mt
            },
            type: {
                key: `${S}-${He}`,
                values: $e
            },
            showQuery: {
                key: `${S}-${Ge}`,
                values: Ye
            },
            allowSubmit: {
                key: `${S}-${je}`,
                values: qe
            },
            hideEmpty: {
                key: `${S}-${Qe}`,
                values: ze
            },
            highlight: {
                key: `${S}-${We}`,
                values: Xe
            },
            highlightCSS: {
                key: `${S}-${Je}`
            },
            activeCSS: {
                key: `${S}-${Ze}`
            },
            debouncing: {
                key: `${S}-${tr}`
            },
            tagFormat: {
                key: `${S}-${er}`
            },
            tagCategory: {
                key: `${S}-${or}`
            },
            easing: {
                key: `${S}-${sr}`
            },
            duration: {
                key: `${S}-${ir}`
            }
        },
        [D, b] = W(_),
        Lt = Object.values(vt),
        Rt = {
            range: Object.values(Mt)
        },
        X = Object.values(rr),
        kt = "fs-cmsfilter_highlight",
        Dt = "fs-cmsfilter_active",
        Kt = "50";
    var J = ({
        filtersData: e
    }) => {
        for (let {
                elements: t
            }
            of e)
            for (let r of t) {
                let {
                    resultsCount: o,
                    hidden: s,
                    hideEmpty: i
                } = r;
                if (!i) continue;
                let n = o === 0;
                n !== s && (r.hidden = n, i.style.display = n ? "none" : "")
            }
    };
    var Nt = ({
            props: e
        }) => {
            for (let t in e) {
                let {
                    elements: r,
                    values: o,
                    highlightData: s
                } = e[t];
                if (!!s)
                    for (let i of o) {
                        let n = r.get(i);
                        if (!n) continue;
                        let {
                            element: a,
                            originalHTML: l
                        } = n, c = s.get(i);
                        if (!c) {
                            a.innerHTML = l;
                            continue
                        }
                        let {
                            filterValue: m,
                            highlightCSSClass: u
                        } = c, p = new RegExp(m || i, "gi");
                        a.innerHTML = l.replace(p, `<span class="${u}">$&</span>`)
                    }
            }
        },
        Ut = ({
            props: e
        }) => {
            for (let t in e) e[t].highlightData = new Map
        };
    var Z = ({
            resultsElement: e
        }, {
            validItems: t
        }) => {
            !e || (e.textContent = `${t.length}`)
        },
        tt = ({
            filtersData: e
        }) => {
            for (let {
                    elements: t
                }
                of e)
                for (let {
                        resultsElement: r,
                        resultsCount: o
                    }
                    of t) !r || (r.textContent = `${o}`)
        },
        et = ({
            filtersData: e
        }, {
            validItems: t
        }) => {
            var o, s;
            let r = {};
            for (let {
                    elements: i,
                    filterKeys: n
                }
                of e) {
                if (n.length > 1) continue;
                let [a] = n;
                r[a] || (r[a] = {});
                for (let l of i) l.resultsCount = 0, (o = r[a])[s = l.value] || (o[s] = []), r[a][l.value].push(l)
            }
            for (let {
                    props: i
                }
                of t)
                for (let n in i) {
                    let a = r[n];
                    if (!a) continue;
                    let {
                        values: l
                    } = i[n];
                    for (let c of l) {
                        let m = a[c];
                        if (!!m)
                            for (let u of m) u.resultsCount += 1
                    }
                }
        };
    var {
        field: {
            key: Ot
        },
        range: {
            key: Bt
        },
        type: {
            key: Vt
        }
    } = _, Pt = (e, t) => {
        let {
            highlightResults: r,
            showFilterResults: o,
            hideEmptyFilters: s
        } = e;
        t.on("shouldcollectprops", i => {
            for (let n of i) n.collectProps({
                fieldKey: Ot,
                rangeKey: Bt,
                typeKey: Vt
            })
        }), t.on("shouldfilter", async () => await e.applyFilters(!0)), t.on("renderitems", i => {
            if (Z(e, t), et(e, t), s && J(e), o && tt(e), r)
                for (let n of i) Nt(n)
        }), t.once("nestinitialitems").then(async i => {
            for (let n of i) n.collectProps({
                fieldKey: Ot,
                rangeKey: Bt,
                typeKey: Vt
            });
            await e.applyFilters(!0), await t.renderItems(!0)
        })
    };
    var gt = de($t(), 1);
    var pt = ({
        elements: e,
        values: t
    }, r) => {
        let o;
        r ? (t.delete(r), o = e.filter(s => s.value === r)) : (t.clear(), o = e);
        for (let {
                element: s
            }
            of o) nt(s)
    };
    var ft = (e, t) => {
        !e.closest(`.${Ct.item}`) || (e.id = `${e.id}-${t}`)
    };
    var M = (e, t, r) => {
        var u, p;
        let {
            value: o
        } = e, {
            elements: s,
            values: i,
            mode: n
        } = t, {
            value: a,
            mode: l,
            type: c,
            activeCSSClass: m
        } = r;
        switch (c) {
            case "checkbox": {
                let {
                    checked: g
                } = e;
                if (!a) break;
                (u = e.parentElement) == null || u.classList[g ? "add" : "remove"](m), i[g ? "add" : "delete"](a);
                break
            }
            case "radio": {
                let {
                    checked: g
                } = e;
                for (let {
                        element: f,
                        type: y
                    }
                    of s) {
                    if (y !== "radio") return !1;
                    let d = f.checked;
                    (p = f.parentElement) == null || p.classList[d ? "add" : "remove"](m)
                }
                if (!g || !a) break;
                i.clear(), i.add(a);
                break
            }
            default: {
                if (r.value = o, e.classList[o ? "add" : "remove"](m), n === "range") {
                    let g = [...i];
                    g[l === "from" ? 0 : 1] = o, g.some(f => !!f) ? t.values = new Set(g) : i.clear();
                    break
                }
                i.clear(), o && i.add(o);
                break
            }
        }
        return !0
    };
    var {
        field: {
            key: ar
        },
        reset: {
            key: lr
        },
        range: {
            key: cr
        },
        match: {
            key: mr
        },
        tagFormat: {
            key: ur
        },
        tagCategory: {
            key: pr
        },
        hideEmpty: {
            key: fr,
            values: dr
        },
        highlight: {
            key: gr,
            values: Er
        },
        highlightCSS: {
            key: yr
        },
        activeCSS: {
            key: Tr
        },
        debouncing: {
            key: Sr
        }
    } = _, {
        checkboxField: hr,
        radioField: br
    } = R, Gt = e => {
        let t = e.querySelector("form"),
            r = e.querySelector('input[type="submit"]'),
            o = e.querySelectorAll(D("element", "reset", {
                operator: "prefixed"
            })),
            s = new Map;
        for (let i of o) {
            let n = i.getAttribute(lr),
                a = n ? [...new Set(V(n))].map(l => P(l)) : [];
            s.set(i, a)
        }
        return {
            form: t,
            submitButton: r,
            resetButtonsData: s
        }
    }, Yt = (e, t, r, o, s) => {
        let i = [];
        return e.querySelectorAll(D("field")).forEach((a, l) => {
            let c = a.getAttribute(ar);
            if (!c) return;
            let m = [...new Set(V(c))],
                u = m.map(T => P(T));
            if (!u.length) return;
            let p = Ar(a, m, u, t, r, o, s);
            if (!p) return;
            let [g, f] = p, y = i.find(T => G(u, T.filterKeys)), d = y || O(v({}, g), {
                elements: []
            });
            y || i.push(d);
            let E = a.closest(`.${hr}, .${br}`);
            if (E) {
                let T = a instanceof HTMLInputElement,
                    h = T ? "true" : a.textContent || "",
                    w = T ? a : E.querySelector("input");
                ft(w, l);
                let Q = b("filterResultsCount", {
                        operator: "prefixed",
                        scope: E
                    }),
                    U = a.getAttribute(fr) === dr.true ? E : void 0,
                    Tt = O(v({}, f), {
                        value: h,
                        resultsElement: Q,
                        hideEmpty: U,
                        element: w,
                        type: w.type
                    });
                d.elements.push(Tt), M(w, d, Tt);
                return
            }
            if (!Y(a) || a.type === "submit") return;
            let {
                type: A,
                value: C
            } = a;
            ft(a, l);
            let L = O(v({}, f), {
                element: a,
                type: A,
                value: C
            });
            d.elements.push(L), A === "select-one" && M(a, d, L)
        }), i
    }, Ar = (e, t, r, o, s, i, n) => {
        let [a, l, c, m, u, p] = [mr, ur, Tr, Sr, gr, yr].map(N => e.getAttribute(N)), g = F(a, Lt) ? a : void 0, f = F(l, X) ? l : void 0, y = e.getAttribute(pr), d = c || o, E = m ? parseFloat(m) : s, A = i || u === Er.true, C = p || n, L = e.getAttribute(cr), T, h;
        for (let [N, U] of lt(Rt))
            if (F(L, U)) {
                T = N, h = L;
                break
            } return [{
            match: g,
            filterKeys: r,
            originalFilterKeys: t,
            highlight: A,
            tagFormat: f,
            tagCategory: y,
            highlightCSSClass: C,
            mode: T,
            values: new Set
        }, {
            activeCSSClass: d,
            debouncing: E,
            resultsCount: 0,
            mode: h,
            hidden: !1
        }]
    };
    var Cr = Intl.DateTimeFormat(),
        dt = e => {
            if (!!e) return new Date(Cr.format(new Date(e)))
        };
    var jt = e => {
        if (!!e) return parseFloat(e.replace(/[^0-9.-]+/g, ""))
    };
    var Qt = (e, t, r, o) => (o && Ut(e), r ? !0 : t.every(s => wr(e, s))),
        wr = (e, {
            filterKeys: t,
            values: r,
            match: o,
            mode: s,
            highlight: i,
            highlightCSSClass: n,
            elements: a
        }) => {
            let l = [...r];
            if (!l.length) return !0;
            let c = t.includes("*");
            c && (t = Object.keys(e.props));
            let m = t.filter(u => {
                let p = e.props[u];
                if (!p) return !1;
                let {
                    values: g,
                    highlightData: f,
                    type: y,
                    range: d
                } = p, E = [...g];
                if (!E.length) return !1;
                if (s === "range") {
                    // let min_max = window.allFsElements[u];
                    let [C] = E, [L, T] = l, h = qt(C, L, T, y);
                    // let [C] = E, [L, T] = l, h = qt(C, L, T, y, min_max['min'], min_max['max']);
                    return h && i && (f == null || f.set(C, {
                        highlightCSSClass: n
                    })), h
                }
                let A = l.filter(C => {
                    if (d === "from" || d === "to") {
                        // let [T, h] = E, w = qt(C, T, h, y, min_max['min'], min_max['max']);
                        let [T, h] = E, w = qt(C, T, h, y);
                        return w && i && (f == null || f.set(T, {
                            highlightCSSClass: n
                        }), f == null || f.set(h, {
                            highlightCSSClass: n
                        })), w
                    }
                    return E.some(T => {
                        let h;
                        if (y === "date" && !c) {
                            let [w, Q] = [C, T].map(N => {
                                var U;
                                return (U = dt(N)) == null ? void 0 : U.getTime()
                            });
                            h = w === Q
                        } else a.some(({
                            type: w
                        }) => !["checkbox", "radio", "select-one"].includes(w)) || t.length > 1 ? h = T.toLowerCase().includes(C.toLowerCase()) : h = C.toLowerCase() === T.toLowerCase();
                        return h && i && (f == null || f.set(T, {
                            highlightCSSClass: n,
                            filterValue: C
                        })), h
                    })
                });
                return o === "all" ? A.length === l.length : A.length > 0
            });
            return o === "all" ? m.length === t.length : m.length > 0
        },
        // qt = (e, t, r, o, min, max) => {
        qt = (e, t, r, o) => {
            let [s, i, n] = [e, t, r].map(a => o === "date" ? dt(a) : jt(a));
            // s = $45,000
            // i = $28,000
            // n = $193,000
            // o = null
            // s >= i && s <= n
            // (s >= i || i <= min) && (s <= n || n >= max)
            // return s ? !t && typeof n != "undefined" ? s <= n : !r && typeof i != "undefined" ? s >= i : typeof n == "undefined" || typeof i == "undefined" ? !1 : (s >= i || i <= min) && (s <= n || n >= max) : !1
            return s ? !t && typeof n != "undefined" ? s <= n : !r && typeof i != "undefined" ? s >= i : typeof n == "undefined" || typeof i == "undefined" ? !1 : s >= i && s <= n : !1
        };
    var {
        location: zt,
        history: xr
    } = window, Wt = e => {
        let t = !1,
            {
                filtersData: r
            } = e,
            o = new URL(zt.href),
            {
                searchParams: s
            } = o;
        for (let i of s) {
            let n = P(i[0]),
                a = i[1],
                l = r.find(({
                    filterKeys: p
                }) => p.length === 1 && p.includes(n));
            if (!l) continue;
            let c = V(a, void 0, void 0, !1);
            if (!c.length) continue;
            t = !0;
            let {
                elements: m,
                mode: u
            } = l;
            if (u === "range") {
                let [p, g] = c, f = m.filter(({
                    mode: d
                }) => d === "from"), y = m.filter(({
                    mode: d
                }) => d === "to");
                if (p && f.length)
                    for (let d of f) {
                        let {
                            element: E,
                            type: A
                        } = d;
                        // window.allFsElements[d.element.getAttribute("fs-cmsfilter-field")] = {
                        //     "min": d.element.getAttribute("fs-cmsfilter-field-min"),
                        //     "max": d.element.getAttribute("fs-cmsfilter-field-max")
                        // }
                        A === "checkbox" || A === "radio" ? k(E, !0) : k(E, p), M(E, l, d)
                    }
                if (g && y)
                    for (let d of y) {
                        let {
                            element: E,
                            type: A
                        } = d;
                        // window.allFsElements[d.element.getAttribute("fs-cmsfilter-field")] = {
                        //     "min": d.element.getAttribute("fs-cmsfilter-field-min"),
                        //     "max": d.element.getAttribute("fs-cmsfilter-field-max")
                        // }
                        A === "checkbox" || A === "radio" ? k(E, !0) : k(E, g), M(E, l, d)
                    }
                continue
            }
            for (let p of c)
                for (let g of m) {
                    let {
                        element: f,
                        value: y,
                        type: d
                    } = g;
                    if (y === p && (d === "checkbox" || d === "radio")) k(f, !0);
                    else if (!y && d !== "checkbox" && d !== "radio") k(f, p);
                    else continue;
                    M(f, l, g)
                }
        }
        return t
    }, Xt = e => {
        let t = new URL(zt.href),
            {
                searchParams: r
            } = t;
        for (let {
                filterKeys: [o],
                values: s
            }
            of e) {
            if (!s.size) {
                r.delete(o);
                continue
            }
            let i = [...s].join(",");
            r.set(o, i)
        }
        xr.replaceState(null, "", t.toString())
    };
    var {
        field: {
            key: Fr
        },
        range: {
            key: _r
        },
        type: {
            key: Ir
        }
    } = _, rt = class {
        constructor(t, r, {
            resultsElement: o,
            showQueryParams: s,
            allowSubmit: i,
            highlightAll: n,
            highlightCSSClass: a,
            activeCSSClass: l,
            debouncing: c
        }) {
            this.formBlock = t;
            this.listInstance = r;
            this.restartingFilters = !1;
            let {
                form: m,
                submitButton: u,
                resetButtonsData: p
            } = Gt(t);
            this.form = m, this.submitButton = u, this.resetButtonsData = p, this.resultsElement = o, this.showQueryParams = s, this.allowSubmit = i, this.activeCSSClass = l, this.debouncing = c, this.highlightAll = n, this.highlightCSSClass = a, this.submitButtonVisible = !!u && z(u), this.init()
        }
        async init() {
            let {
                listInstance: t,
                hideEmptyFilters: r,
                showFilterResults: o
            } = this;
            this.storeFiltersData();
            for (let s of t.items) s.collectProps({
                fieldKey: Fr,
                rangeKey: _r,
                typeKey: Ir
            });
            Z(this, t), et(this, t), r && J(this), o && tt(this), Wt(this), await H(), this.applyFilters(), this.listenEvents()
        }
        async listenEvents() {
            let {
                form: t,
                resetButtonsData: r,
                submitButton: o
            } = this;
            t.addEventListener("submit", s => this.handleSubmit(s)), t.addEventListener("input", s => this.handleInputEvents(s));
            for (let [s, i] of r) {
                s.addEventListener("click", () => this.resetFilters(i));
                let n = s.closest(`.${R.radioField}`);
                if (!n) continue;
                let a = n.querySelector("input");
                !a || a.addEventListener("input", () => {
                    a.checked && this.resetFilters(i)
                })
            }
            o && window.addEventListener("resize", (0, gt.default)(() => {
                this.submitButtonVisible = z(o)
            }, 50))
        }
        async handleInputEvents({
            target: t
        }) {
            let {
                submitButtonVisible: r,
                filtersData: o,
                restartingFilters: s
            } = this;
            if (!Y(t)) return;
            let i, n = o.find(({
                elements: c
            }) => (i = c.find(m => m.element === t), i));
            if (!n || !i || !M(t, n, i) || s || r) return;
            let {
                debouncing: l
            } = i;
            this.debouncedApplyFilters || (this.debouncedApplyFilters = (0, gt.default)(this.applyFilters, l)), await this.debouncedApplyFilters()
        }
        async handleSubmit(t) {
            this.allowSubmit || (t.preventDefault(), t.stopImmediatePropagation()), await this.applyFilters()
        }
        async toggleFiltersState(t) {
            let {
                listInstance: r,
                filtersActive: o
            } = this, s = !t;
            o !== s && (this.filtersActive = s, r.initialElement && (await r.displayElement(s ? "initialElement" : "wrapper", !1, !1), await r.displayElement(s ? "wrapper" : "initialElement", !0, o !== void 0)))
        }
        async applyFilters(t, r = !0) {
            this.debouncedApplyFilters = void 0;
            let {
                listInstance: o,
                filtersData: s,
                filtersActive: i,
                highlightResults: n,
                tagsInstance: a,
                showQueryParams: l
            } = this, {
                items: c,
                initialElement: m
            } = o, u = s.every(({
                values: p
            }) => !p.size);
            if (u && !i) {
                await this.toggleFiltersState(u);
                return
            }
            for (let p of c) p.valid = Qt(p, s, u, n);
            t || (await o.switchPage(1, !1), o.scrollToAnchor(), l && Xt(s), await Promise.all([(async () => {
                u ? (await this.toggleFiltersState(u), await o.renderItems(!1, !m)) : (await o.renderItems(!1, !m), await this.toggleFiltersState(u))
            })(), (async () => {
                r && await (a == null ? void 0 : a.syncTags())
            })()]))
        }
        async resetFilters(t, r) {
            this.restartingFilters = !0;
            let {
                filtersData: o
            } = this;
            if (!t || !t.length)
                for (let i of o) pt(i);
            else {
                let i = o.find(n => G(n.filterKeys, t));
                if (!i) return;
                pt(i, r)
            }
            let s = !r;
            await this.applyFilters(!1, s), this.restartingFilters = !1
        }
        async addTagsInstance(t) {
            this.tagsInstance = t, await t.syncTags()
        }
        storeFiltersData() {
            let {
                form: t,
                activeCSSClass: r,
                debouncing: o,
                highlightAll: s,
                highlightCSSClass: i
            } = this, n = Yt(t, r, o, s, i);
            return this.filtersData = n, this.showFilterResults = n.some(({
                elements: a
            }) => a.some(({
                resultsElement: l
            }) => l)), this.hideEmptyFilters = n.some(({
                elements: a
            }) => a.some(({
                hideEmpty: l
            }) => l)), this.highlightResults = n.some(({
                highlight: a
            }) => a), n
        }
    };
    var Et = ({
            values: e,
            textNode: t,
            filterData: {
                originalFilterKeys: r,
                mode: o,
                tagFormat: s,
                tagCategory: i
            }
        }, n) => {
            let a = i || r.join(", "),
                l;
            o === "range" ? l = `[${e.map(m=>m||"--").join(", ")}]` : [l] = e;
            let c;
            l === "true" ? c = a : (s || n) === "category" ? c = `${a}: ${l}` : c = l, t.textContent = c
        },
        Jt = e => !!b("tagRemove", {
            operator: "prefixed",
            scope: e
        });
    var ot = class {
        constructor(t, r, o, s) {
            this.template = t;
            this.filtersInstance = r;
            this.listInstance = o;
            this.globalTagsFormat = s;
            this.tagsData = [];
            this.hasRemoveTrigger = !1;
            this.wrapper = t.parentElement || I.alert("The tags have no parent wrapper.", "error"), this.init()
        }
        init() {
            let {
                template: t,
                wrapper: r
            } = this;
            t.remove(), this.hasRemoveTrigger = Jt(t), r.addEventListener("click", o => this.handleClick(o))
        }
        handleClick(t) {
            let {
                target: r
            } = t;
            if (!(r instanceof Element)) return;
            let {
                hasRemoveTrigger: o,
                tagsData: s,
                listInstance: i
            } = this, n = r.closest(D("element", "tagTemplate", {
                instanceIndex: i.getInstanceIndex(_.element.key)
            }));
            if (!n) return;
            let a = r.closest(D("element", "tagRemove", {
                operator: "prefixed"
            }));
            if (o && !a) return;
            let l = s.find(({
                element: c
            }) => c === n);
            l && this.removeTag(l, !0)
        }
        async addTag(t, r) {
            let {
                wrapper: o,
                template: s,
                tagsData: i,
                globalTagsFormat: n,
                listInstance: {
                    listAnimation: a
                }
            } = this, l = at(s), c = b("tagText", {
                operator: "prefixed",
                scope: l
            }) || l, m = {
                element: l,
                values: r,
                textNode: c,
                filterData: t
            };
            if (Et(m, n), i.push(m), a) {
                let {
                    animateIn: u,
                    options: p
                } = a;
                await u(l, v({
                    target: o
                }, p))
            } else l.style.opacity = "1", o.appendChild(l)
        }
        async updateTag(t, r) {
            let {
                globalTagsFormat: o
            } = this;
            t.values = r, Et(t, o)
        }
        async removeTag(t, r) {
            let {
                element: o,
                values: s,
                filterData: {
                    filterKeys: i
                }
            } = t, {
                tagsData: n,
                filtersInstance: a,
                listInstance: {
                    listAnimation: l
                }
            } = this;
            this.tagsData = n.filter(c => c !== t), await Promise.all([Promise.all(s.map(async c => {
                if (r) return a.resetFilters(i, c)
            })), (async () => {
                if (l) {
                    let {
                        animateOut: c,
                        options: m
                    } = l;
                    await c(o, v({
                        remove: !0
                    }, m))
                } else o.remove()
            })()])
        }
        async syncTags() {
            let {
                tagsData: t,
                filtersInstance: {
                    filtersData: r
                }
            } = this;
            await Promise.all(r.map(o => {
                let {
                    values: s,
                    mode: i
                } = o, n = [...s], a = t.filter(m => m.filterData === o);
                if (a.length === 1 && (n.length === 1 || i === "range" && n.length)) {
                    let [m] = a;
                    this.updateTag(m, n);
                    return
                }
                let l = [...n].filter(m => !a.some(({
                        values: u
                    }) => u.includes(m))),
                    c = a.filter(({
                        values: m
                    }) => m.every(u => !n.includes(u)));
                return Promise.all([(async () => i === "range" && l.length ? this.addTag(o, l) : Promise.all(l.map(m => this.addTag(o, [m]))))(), Promise.all(c.map(m => this.removeTag(m)))])
            }))
        }
    };
    var {
        element: {
            key: Zt
        },
        duration: {
            key: vr
        },
        easing: {
            key: Mr
        },
        showQuery: {
            key: Lr,
            values: Rr
        },
        allowSubmit: {
            key: kr,
            values: Dr
        },
        tagFormat: {
            key: Kr
        },
        highlight: {
            key: Nr,
            values: Ur
        },
        highlightCSS: {
            key: Or
        },
        activeCSS: {
            key: Br
        },
        debouncing: {
            key: Vr
        }
    } = _, te = e => {
        var y, d;
        let t = e.getInstanceIndex(Zt),
            r = b("filters", {
                instanceIndex: t
            });
        if (!r) return;
        let o = r.closest(`.${R.formBlock}`);
        if (!o) return;
        let s = b("empty", {
            instanceIndex: t
        });
        s && e.addEmptyElement(s);
        let i = b("initial", {
            instanceIndex: t
        });
        if (i && (e.initialElement = i), !e.scrollAnchor) {
            let E = b("scrollAnchor", {
                instanceIndex: t
            });
            E && (e.scrollAnchor = E)
        }
        if (!e.itemsCount) {
            let E = b("itemsCount", {
                instanceIndex: t
            });
            E && e.addItemsCount(E)
        }
        let n = b("resultsCount", {
                instanceIndex: t
            }),
            a = e.getAttribute(Lr) === Rr.true,
            l = e.getAttribute(kr) === Dr.true,
            c = e.getAttribute(Nr) === Ur.true,
            m = e.getAttribute(Or) || kt,
            u = e.getAttribute(Br) || Dt,
            p = parseFloat(e.getAttribute(Vr) || Kt),
            {
                fsAttributes: {
                    cms: g
                }
            } = window;
        if (g.filtersInstances || (g.filtersInstances = []), g.filtersInstances[t || 0]) return;
        let f = new rt(o, e, {
            resultsElement: n,
            showQueryParams: a,
            allowSubmit: l,
            highlightAll: c,
            highlightCSSClass: m,
            activeCSSClass: u,
            debouncing: p
        });
        return (y = g.filtersInstances)[d = t || 0] || (y[d] = f), mt(e, {
            durationKey: vr,
            easingKey: Mr
        }), f
    }, ee = async (e, t) => {
        let r = e.getInstanceIndex(Zt),
            o = b("tagTemplate", {
                instanceIndex: r
            });
        if (!o) return;
        let s = e.getAttribute(Kr),
            i = F(s, X) ? s : void 0,
            n = new ot(o, t, e, i);
        return await t.addTagsInstance(n), n
    };
    var yt = async () => {
        var o, s, i;
        let e = await j();
        if (!e) return [];
        await ((o = window.fsAttributes[wt]) == null ? void 0 : o.loading);
        let t = e.createCMSListInstances([D("element", "list", {
                operator: "prefixed"
            })]),
            r = (await Promise.all(t.map(Pr))).filter(ct);
        return (i = (s = window.fsAttributes[K]).resolve) == null || i.call(s, r), r
    }, Pr = async e => {
        let t = te(e);
        if (!!t) return Pt(t, e), await ee(e, t), t
    };
    _t();
    j();
    H();
    var re, oe;
    (re = window.fsAttributes)[oe = K] || (re[oe] = {});
    var {
        preventsLoad: Hr
    } = Ft(), se = window.fsAttributes[K];
    se.version = It;
    Hr ? se.init = yt : (window.Webflow || (window.Webflow = []), window.Webflow.push(yt));
})();