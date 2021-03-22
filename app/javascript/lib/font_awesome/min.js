! function() {
    "use strict";
    var c = {},
        l = {};
    try {
        "undefined" != typeof window && (c = window), "undefined" != typeof document && (l = document)
    } catch (c) {}
    var h = (c.navigator || {}).userAgent,
        z = void 0 === h ? "" : h,
        a = c,
        v = l,
        m = (a.document, !!v.documentElement && !!v.head && "function" == typeof v.addEventListener && v.createElement, ~z.indexOf("MSIE") || z.indexOf("Trident/"), "___FONT_AWESOME___"),
        s = function() {
            try {
                return !0
            } catch (c) {
                return !1
            }
        }();
    var e = a || {};
    e[m] || (e[m] = {}), e[m].styles || (e[m].styles = {}), e[m].hooks || (e[m].hooks = {}), e[m].shims || (e[m].shims = []);
    var t = e[m];

    function M(c, z) {
        var l = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
            h = void 0 !== l && l,
            a = Object.keys(z).reduce(function(c, l) {
                var h = z[l];
                return !!h.icon ? c[h.iconName] = h.icon : c[l] = h, c
            }, {});
        "function" != typeof t.hooks.addPack || h ? t.styles[c] = function(a) {
            for (var c = 1; c < arguments.length; c++) {
                var v = null != arguments[c] ? arguments[c] : {},
                    l = Object.keys(v);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(v).filter(function(c) {
                    return Object.getOwnPropertyDescriptor(v, c).enumerable
                }))), l.forEach(function(c) {
                    var l, h, z;
                    l = a, z = v[h = c], h in l ? Object.defineProperty(l, h, {
                        value: z,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : l[h] = z
                })
            }
            return a
        }({}, t.styles[c] || {}, a) : t.hooks.addPack(c, a), "fas" === c && M("fa", z)
    }
    var f = {
        html5: [384, 512, [], "f13b", "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"],
        "css3-alt": [384, 512, [], "f38b", "M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"],
        uikit: [448, 512, [], "f403", "M443.9 128v256L218 512 0 384V169.7l87.6 45.1v117l133.5 75.5 135.8-75.5v-151l-101.1-57.6 87.6-53.1L443.9 128zM308.6 49.1L223.8 0l-88.6 54.8 86 47.3 87.4-53z"]
    };
    ! function(c) {
        try {
            c()
        } catch (c) {
            if (!s) throw c;
        }
    }(function() {
        M("fab", f)
    })
}(),
    function() {
        "use strict";
        var c = {},
            l = {};
        try {
            "undefined" != typeof window && (c = window), "undefined" != typeof document && (l = document)
        } catch (c) {}
        var h = (c.navigator || {}).userAgent,
            z = void 0 === h ? "" : h,
            a = c,
            v = l,
            m = (a.document, !!v.documentElement && !!v.head && "function" == typeof v.addEventListener && v.createElement, ~z.indexOf("MSIE") || z.indexOf("Trident/"), "___FONT_AWESOME___"),
            s = function() {
                try {
                    return !0
                } catch (c) {
                    return !1
                }
            }();
        var e = a || {};
        e[m] || (e[m] = {}), e[m].styles || (e[m].styles = {}), e[m].hooks || (e[m].hooks = {}), e[m].shims || (e[m].shims = []);
        var t = e[m];

        function M(c, z) {
            var l = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
                h = void 0 !== l && l,
                a = Object.keys(z).reduce(function(c, l) {
                    var h = z[l];
                    return !!h.icon ? c[h.iconName] = h.icon : c[l] = h, c
                }, {});
            "function" != typeof t.hooks.addPack || h ? t.styles[c] = function(a) {
                for (var c = 1; c < arguments.length; c++) {
                    var v = null != arguments[c] ? arguments[c] : {},
                        l = Object.keys(v);
                    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(v).filter(function(c) {
                        return Object.getOwnPropertyDescriptor(v, c).enumerable
                    }))), l.forEach(function(c) {
                        var l, h, z;
                        l = a, z = v[h = c], h in l ? Object.defineProperty(l, h, {
                            value: z,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : l[h] = z
                    })
                }
                return a
            }({}, t.styles[c] || {}, a) : t.hooks.addPack(c, a), "fas" === c && M("fa", z)
        }
        var f = {
            "window-maximize": [512, 512, [], "f2d0", "M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V192h416v234z"],
            "window-minimize": [512, 512, [], "f2d1", "M480 480H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z"],
            "question-circle": [512, 512, [], "f059", "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"],
            "file-code": [384, 512, [], "f1c9", "M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"],
            "times-circle": [512, 512, [], "f057", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"],
        };
        ! function(c) {
            try {
                c()
            } catch (c) {
                if (!s) throw c;
            }
        }(function() {
            M("far", f)
        })
    }(),
    function() {
        "use strict";
        var c = {},
            l = {};
        try {
            "undefined" != typeof window && (c = window), "undefined" != typeof document && (l = document)
        } catch (c) {}
        var h = (c.navigator || {}).userAgent,
            z = void 0 === h ? "" : h,
            a = c,
            v = l,
            m = (a.document, !!v.documentElement && !!v.head && "function" == typeof v.addEventListener && v.createElement, ~z.indexOf("MSIE") || z.indexOf("Trident/"), "___FONT_AWESOME___"),
            s = function() {
                try {
                    return !0
                } catch (c) {
                    return !1
                }
            }();
        var e = a || {};
        e[m] || (e[m] = {}), e[m].styles || (e[m].styles = {}), e[m].hooks || (e[m].hooks = {}), e[m].shims || (e[m].shims = []);
        var t = e[m];

        function M(c, z) {
            var l = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
                h = void 0 !== l && l,
                a = Object.keys(z).reduce(function(c, l) {
                    var h = z[l];
                    return !!h.icon ? c[h.iconName] = h.icon : c[l] = h, c
                }, {});
            "function" != typeof t.hooks.addPack || h ? t.styles[c] = function(a) {
                for (var c = 1; c < arguments.length; c++) {
                    var v = null != arguments[c] ? arguments[c] : {},
                        l = Object.keys(v);
                    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(v).filter(function(c) {
                        return Object.getOwnPropertyDescriptor(v, c).enumerable
                    }))), l.forEach(function(c) {
                        var l, h, z;
                        l = a, z = v[h = c], h in l ? Object.defineProperty(l, h, {
                            value: z,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : l[h] = z
                    })
                }
                return a
            }({}, t.styles[c] || {}, a) : t.hooks.addPack(c, a), "fas" === c && M("fa", z)
        }
        var f = {
            eraser: [512, 512, [], "f12d", "M497.941 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.745-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48.004 48.004 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H355.883l142.058-142.059zm-302.627-62.627l137.373 137.373L265.373 416H150.628l-80-80 124.686-124.686z"],
            paste: [448, 512, [], "f0ea", "M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"],
            copy: [448, 512, [], "f0c5", "M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"],
            search: [512, 512, [], "f002", "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"],
            "angle-double-left": [448, 512, [], "f100", "M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"],
            "angle-double-right": [448, 512, [], "f101", "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"],
            code: [640, 512, [], "f121", "M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"],
            upload: [512, 512, [], "f093", "M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"],
            download: [512, 512, [], "f019", "M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"],
            "share-alt": [448, 512, [], "f1e0", "M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"],
            plus: [448, 512, [], "f067", "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"],
            "code-branch": [384, 512, [], "f126", "M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"],
            link: [512, 512, [], "f0c1", "M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"],
            ad: [512, 512, [], "f641", "M157.52 272h36.96L176 218.78 157.52 272zM352 256c-13.23 0-24 10.77-24 24s10.77 24 24 24 24-10.77 24-24-10.77-24-24-24zM464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM250.58 352h-16.94c-6.81 0-12.88-4.32-15.12-10.75L211.15 320h-70.29l-7.38 21.25A16 16 0 0 1 118.36 352h-16.94c-11.01 0-18.73-10.85-15.12-21.25L140 176.12A23.995 23.995 0 0 1 162.67 160h26.66A23.99 23.99 0 0 1 212 176.13l53.69 154.62c3.61 10.4-4.11 21.25-15.11 21.25zM424 336c0 8.84-7.16 16-16 16h-16c-4.85 0-9.04-2.27-11.98-5.68-8.62 3.66-18.09 5.68-28.02 5.68-39.7 0-72-32.3-72-72s32.3-72 72-72c8.46 0 16.46 1.73 24 4.42V176c0-8.84 7.16-16 16-16h16c8.84 0 16 7.16 16 16v160z"],
            key: [512, 512, [], "f084", "M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"],
            indent: [448, 512, [], "f03c", "M27.31 363.3l96-96a16 16 0 0 0 0-22.62l-96-96C17.27 138.66 0 145.78 0 160v192c0 14.31 17.33 21.3 27.31 11.3zM432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-128H204.83A12.82 12.82 0 0 0 192 300.83v38.34A12.82 12.82 0 0 0 204.83 352h230.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288zm0-128H204.83A12.82 12.82 0 0 0 192 172.83v38.34A12.82 12.82 0 0 0 204.83 224h230.34A12.82 12.82 0 0 0 448 211.17v-38.34A12.82 12.82 0 0 0 435.17 160zM432 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"],
            database: [448, 512, [], "f1c0", "M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"],
            "user": [448, 512, [], "f007", "M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"],
            "user-circle": [496, 512, [], "f2bd", "M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"],
            "pencil-alt": [512, 512, [], "f303", "M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"],
            "check": [512, 512, [], "f00c", "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"],
            "star": [576, 512, [], "f005", "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"],
            "angle-right": [256, 512, [], "f105", "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"],
            "angle-up": [320, 512, [], "f106", "M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"],
            "angle-down": [320, 512, [], "f107", "M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"],
        };
        ! function(c) {
            try {
                c()
            } catch (c) {
                if (!s) throw c;
            }
        }(function() {
            M("fas", f)
        })
    }(),
    function() {
        "use strict";

        function v(c) {
            return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(c) {
                return typeof c
            } : function(c) {
                return c && "function" == typeof Symbol && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
            })(c)
        }

        function a(c, l) {
            for (var h = 0; h < l.length; h++) {
                var z = l[h];
                z.enumerable = z.enumerable || !1, z.configurable = !0, "value" in z && (z.writable = !0), Object.defineProperty(c, z.key, z)
            }
        }

        function G(a) {
            for (var c = 1; c < arguments.length; c++) {
                var v = null != arguments[c] ? arguments[c] : {},
                    l = Object.keys(v);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(v).filter(function(c) {
                    return Object.getOwnPropertyDescriptor(v, c).enumerable
                }))), l.forEach(function(c) {
                    var l, h, z;
                    l = a, z = v[h = c], h in l ? Object.defineProperty(l, h, {
                        value: z,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : l[h] = z
                })
            }
            return a
        }

        function n(c, l) {
            return function(c) {
                if (Array.isArray(c)) return c;
            }(c) || function(c, l) {
                var h = [],
                    z = !0,
                    a = !1,
                    v = void 0;
                try {
                    for (var m, s = c[Symbol.iterator](); !(z = (m = s.next()).done) && (h.push(m.value), !l || h.length !== l); z = !0) {}
                        } catch (c) {
                    a = !0, v = c
                } finally {
                    try {
                        z || null == s.return || s.return()
                    } finally {
                        if (a) throw v;
                    }
                }
                return h
            }(c, l) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function r(c) {
            return function(c) {
                if (Array.isArray(c)) {
                    for (var l = 0, h = new Array(c.length); l < c.length; l++) h[l] = c[l];
                    return h
                }
            }(c) || function(c) {
                if (Symbol.iterator in Object(c) || "[object Arguments]" === Object.prototype.toString.call(c)) return Array.from(c);
            }(c) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        var c = function() {},
            l = {},
            h = {},
            z = null,
            m = {
                mark: c,
                measure: c
            };
        try {
            "undefined" != typeof window && (l = window), "undefined" != typeof document && (h = document), "undefined" != typeof MutationObserver && (z = MutationObserver), "undefined" != typeof performance && (m = performance)
        } catch (c) {}
        var s = (l.navigator || {}).userAgent,
            e = void 0 === s ? "" : s,
            i = l,
            o = h,
            t = z,
            M = m,
            f = !!i.document,
            H = !!o.documentElement && !!o.head && "function" == typeof o.addEventListener && "function" == typeof o.createElement,
            p = ~e.indexOf("MSIE") || ~e.indexOf("Trident/"),
            V = "___FONT_AWESOME___",
            b = 16,
            C = "fa",
            L = "svg-inline--fa",
            J = "data-fa-i2svg",
            d = "data-fa-pseudo-element",
            u = "data-fa-pseudo-element-pending",
            g = "data-prefix",
            A = "data-icon",
            S = "fontawesome-i2svg",
            y = "async",
            w = ["HTML", "HEAD", "STYLE", "SCRIPT"],
            k = function() {
                try {
                    return !0
                } catch (c) {
                    return !1
                }
            }(),
            Z = {
                fas: "solid",
                far: "regular",
                fal: "light",
                fad: "duotone",
                fab: "brands",
                fa: "solid"
            },
            x = {
                solid: "fas",
                regular: "far",
                light: "fal",
                duotone: "fad",
                brands: "fab"
            },
            q = "fa-layers-text",
            O = /Font Awesome 5 (Solid|Regular|Light|Duotone|Brands|Free|Pro)/,
            j = {
                900: "fas",
                400: "far",
                normal: "far",
                300: "fal"
            },
            P = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            E = P.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
            N = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
            _ = {
                GROUP: "group",
                SWAP_OPACITY: "swap-opacity",
                PRIMARY: "primary",
                SECONDARY: "secondary"
            },
            T = ["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "flip-both", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter", _.GROUP, _.SWAP_OPACITY, _.PRIMARY, _.SECONDARY].concat(P.map(function(c) {
                return "".concat(c, "x")
            })).concat(E.map(function(c) {
                return "w-".concat(c)
            })),
            I = i.FontAwesomeConfig || {};
        if (o && "function" == typeof o.querySelector) {
            [
                ["data-family-prefix", "familyPrefix"],
                ["data-replacement-class", "replacementClass"],
                ["data-auto-replace-svg", "autoReplaceSvg"],
                ["data-auto-add-css", "autoAddCss"],
                ["data-auto-a11y", "autoA11y"],
                ["data-search-pseudo-elements", "searchPseudoElements"],
                ["data-observe-mutations", "observeMutations"],
                ["data-mutate-approach", "mutateApproach"],
                ["data-keep-original-source", "keepOriginalSource"],
                ["data-measure-performance", "measurePerformance"],
                ["data-show-missing-icons", "showMissingIcons"]
            ].forEach(function(c) {
                var l, h = n(c, 2),
                    z = h[0],
                    a = h[1],
                    v = "" === (l = function(c) {
                        var l = o.querySelector("script[" + c + "]");
                        if (l) return l.getAttribute(c);
                    }(z)) || "false" !== l && ("true" === l || l);
                null != v && (I[a] = v)
            })
        }
        var R = G({}, {
            familyPrefix: C,
            replacementClass: L,
            autoReplaceSvg: !0,
            autoAddCss: !0,
            autoA11y: !0,
            searchPseudoElements: !1,
            observeMutations: !0,
            mutateApproach: "async",
            keepOriginalSource: !0,
            measurePerformance: !1,
            showMissingIcons: !0
        }, I);
        R.autoReplaceSvg || (R.observeMutations = !1);
        var $ = G({}, R);
        i.FontAwesomeConfig = $;
        var F = i || {};
        F[V] || (F[V] = {}), F[V].styles || (F[V].styles = {}), F[V].hooks || (F[V].hooks = {}), F[V].shims || (F[V].shims = []);
        var Y = F[V],
            D = [],
            W = !1;

        function U(c) {
            H && (W ? setTimeout(c, 0) : D.push(c))
        }
        H && ((W = (o.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(o.readyState)) || o.addEventListener("DOMContentLoaded", function c() {
            o.removeEventListener("DOMContentLoaded", c), W = 1, D.map(function(c) {
                return c()
            })
        }));
        var Q, X = "pending",
            B = "settled",
            K = "fulfilled",
            cc = "rejected",
            lc = function() {},
            hc = "undefined" != typeof global && void 0 !== global.process && "function" == typeof global.process.emit,
            zc = "undefined" == typeof setImmediate ? setTimeout : setImmediate,
            ac = [];

        function vc() {
            for (var c = 0; c < ac.length; c++) ac[c][0](ac[c][1]);
            Q = !(ac = [])
        }

        function mc(c, l) {
            ac.push([c, l]), Q || (Q = !0, zc(vc, 0))
        }

        function sc(c) {
            var l = c.owner,
                h = l._state,
                z = l._data,
                a = c[h],
                v = c.then;
            if ("function" == typeof a) {
                h = K;
                try {
                    z = a(z)
                } catch (c) {
                    fc(v, c)
                }
            }
            ec(v, z) || (h === K && tc(v, z), h === cc && fc(v, z))
        }

        function ec(l, h) {
            var z;
            try {
                if (l === h) throw new TypeError("A promises callback cannot return that same promise.");
                if (h && ("function" == typeof h || "object" === v(h))) {
                    var c = h.then;
                    if ("function" == typeof c) return c.call(h, function(c) {
                        z || (z = !0, h === c ? Mc(l, c) : tc(l, c))
                    }, function(c) {
                        z || (z = !0, fc(l, c))
                    }), !0;
                }
            } catch (c) {
                return z || fc(l, c), !0
            }
            return !1
        }

        function tc(c, l) {
            c !== l && ec(c, l) || Mc(c, l)
        }

        function Mc(c, l) {
            c._state === X && (c._state = B, c._data = l, mc(Hc, c))
        }

        function fc(c, l) {
            c._state === X && (c._state = B, c._data = l, mc(nc, c))
        }

        function rc(c) {
            c._then = c._then.forEach(sc)
        }

        function Hc(c) {
            c._state = K, rc(c)
        }

        function nc(c) {
            c._state = cc, rc(c), !c._handled && hc && global.process.emit("unhandledRejection", c._data, c)
        }

        function Vc(c) {
            global.process.emit("rejectionHandled", c)
        }

        function ic(c) {
            if ("function" != typeof c) throw new TypeError("Promise resolver " + c + " is not a function");
            if (this instanceof ic == !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            this._then = [],
                function(c, l) {
                    function h(c) {
                        fc(l, c)
                    }
                    try {
                        c(function(c) {
                            tc(l, c)
                        }, h)
                    } catch (c) {
                        h(c)
                    }
                }(c, this)
        }
        ic.prototype = {
            constructor: ic,
            _state: X,
            _then: null,
            _data: void 0,
            _handled: !1,
            then: function(c, l) {
                var h = {
                    owner: this,
                    then: new this.constructor(lc),
                    fulfilled: c,
                    rejected: l
                };
                return !l && !c || this._handled || (this._handled = !0, this._state === cc && hc && mc(Vc, this)), this._state === K || this._state === cc ? mc(sc, h) : this._then.push(h), h.then
            },
            catch: function(c) {
                return this.then(null, c)
            }
        }, ic.all = function(s) {
            if (!Array.isArray(s)) throw new TypeError("You must pass an array to Promise.all().");
            return new ic(function(h, c) {
                var z = [],
                    a = 0;

                function l(l) {
                    return a++,
                        function(c) {
                            z[l] = c, --a || h(z)
                        }
                }
                for (var v, m = 0; m < s.length; m++)(v = s[m]) && "function" == typeof v.then ? v.then(l(m), c) : z[m] = v;
                a || h(z)
            })
        }, ic.race = function(a) {
            if (!Array.isArray(a)) throw new TypeError("You must pass an array to Promise.race().");
            return new ic(function(c, l) {
                for (var h, z = 0; z < a.length; z++)(h = a[z]) && "function" == typeof h.then ? h.then(c, l) : c(h);
            })
        }, ic.resolve = function(l) {
            return l && "object" === v(l) && l.constructor === ic ? l : new ic(function(c) {
                c(l)
            })
        }, ic.reject = function(h) {
            return new ic(function(c, l) {
                l(h)
            })
        };
        var oc = "function" == typeof Promise ? Promise : ic,
            Cc = b,
            Lc = {
                size: 16,
                x: 0,
                y: 0,
                rotate: 0,
                flipX: !1,
                flipY: !1
            };

        function dc(c) {
            if (c && H) {
                var l = o.createElement("style");
                l.setAttribute("type", "text/css"), l.innerHTML = c;
                for (var h = o.head.childNodes, z = null, a = h.length - 1; - 1 < a; a--) {
                    var v = h[a],
                        m = (v.tagName || "").toUpperCase(); - 1 < ["STYLE", "LINK"].indexOf(m) && (z = v)
                }
                return o.head.insertBefore(l, z), c
            }
        }
        var uc = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        function pc() {
            for (var c = 12, l = ""; 0 < c--;) l += uc[62 * Math.random() | 0];
            return l
        }

        function bc(c) {
            for (var l = [], h = (c || []).length >>> 0; h--;) l[h] = c[h];
            return l
        }

        function gc(c) {
            return c.classList ? bc(c.classList) : (c.getAttribute("class") || "").split(" ").filter(function(c) {
                return c
            })
        }

        function Ac(c, l) {
            var h, z = l.split("-"),
                a = z[0],
                v = z.slice(1).join("-");
            return a !== c || "" === v || (h = v, ~T.indexOf(h)) ? null : v
        }

        function Sc(c) {
            return "".concat(c).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function yc(h) {
            return Object.keys(h || {}).reduce(function(c, l) {
                return c + "".concat(l, ": ").concat(h[l], ";")
            }, "")
        }

        function wc(c) {
            return c.size !== Lc.size || c.x !== Lc.x || c.y !== Lc.y || c.rotate !== Lc.rotate || c.flipX || c.flipY
        }

        function kc(c) {
            var l = c.transform,
                h = c.containerWidth,
                z = c.iconWidth,
                a = {
                    transform: "translate(".concat(h / 2, " 256)")
                },
                v = "translate(".concat(32 * l.x, ", ").concat(32 * l.y, ") "),
                m = "scale(".concat(l.size / 16 * (l.flipX ? -1 : 1), ", ").concat(l.size / 16 * (l.flipY ? -1 : 1), ") "),
                s = "rotate(".concat(l.rotate, " 0 0)");
            return {
                outer: a,
                inner: {
                    transform: "".concat(v, " ").concat(m, " ").concat(s)
                },
                path: {
                    transform: "translate(".concat(z / 2 * -1, " -256)")
                }
            }
        }
        var Zc = {
            x: 0,
            y: 0,
            width: "100%",
            height: "100%"
        };

        function xc(c) {
            var l = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            return c.attributes && (c.attributes.fill || l) && (c.attributes.fill = "black"), c
        }

        function qc(c) {
            var l = c.icons,
                h = l.main,
                z = l.mask,
                a = c.prefix,
                v = c.iconName,
                m = c.transform,
                s = c.symbol,
                e = c.title,
                t = c.maskId,
                M = c.titleId,
                f = c.extra,
                r = c.watchable,
                H = void 0 !== r && r,
                n = z.found ? z : h,
                V = n.width,
                i = n.height,
                o = "fa-w-".concat(Math.ceil(V / i * 16)),
                C = [$.replacementClass, v ? "".concat($.familyPrefix, "-").concat(v) : "", o].filter(function(c) {
                    return -1 === f.classes.indexOf(c)
                }).concat(f.classes).join(" "),
                L = {
                    children: [],
                    attributes: G({}, f.attributes, {
                        "data-prefix": a,
                        "data-icon": v,
                        class: C,
                        role: f.attributes.role || "img",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 ".concat(V, " ").concat(i)
                    })
                };
            H && (L.attributes[J] = ""), e && L.children.push({
                tag: "title",
                attributes: {
                    id: L.attributes["aria-labelledby"] || "title-".concat(M || pc())
                },
                children: [e]
            });
            var d, u, p, b, g, A, S, y, w, k, Z, x, q, O, j, P, E, N, _, T, I, R, F, Y, D, W, U, Q = G({}, L, {
                    prefix: a,
                    iconName: v,
                    main: h,
                    mask: z,
                    maskId: t,
                    transform: m,
                    symbol: s,
                    styles: f.styles
                }),
                X = z.found && h.found ? (p = (d = Q).children, b = d.attributes, g = d.main, A = d.mask, S = d.maskId, y = d.transform, w = g.width, k = g.icon, Z = A.width, x = A.icon, q = kc({
                    transform: y,
                    containerWidth: Z,
                    iconWidth: w
                }), O = {
                    tag: "rect",
                    attributes: G({}, Zc, {
                        fill: "white"
                    })
                }, j = k.children ? {
                    children: k.children.map(xc)
                } : {}, P = {
                    tag: "g",
                    attributes: G({}, q.inner),
                    children: [xc(G({
                        tag: k.tag,
                        attributes: G({}, k.attributes, q.path)
                    }, j))]
                }, E = {
                    tag: "g",
                    attributes: G({}, q.outer),
                    children: [P]
                }, N = "mask-".concat(S || pc()), _ = "clip-".concat(S || pc()), T = {
                    tag: "mask",
                    attributes: G({}, Zc, {
                        id: N,
                        maskUnits: "userSpaceOnUse",
                        maskContentUnits: "userSpaceOnUse"
                    }),
                    children: [O, E]
                }, I = {
                    tag: "defs",
                    children: [{
                        tag: "clipPath",
                        attributes: {
                            id: _
                        },
                        children: (u = x, "g" === u.tag ? u.children : [u])
                    }, T]
                }, p.push(I, {
                    tag: "rect",
                    attributes: G({
                        fill: "currentColor",
                        "clip-path": "url(#".concat(_, ")"),
                        mask: "url(#".concat(N, ")")
                    }, Zc)
                }), {
                    children: p,
                    attributes: b
                }) : function(c) {
                    var l = c.children,
                        h = c.attributes,
                        z = c.main,
                        a = c.transform,
                        v = yc(c.styles);
                    if (0 < v.length && (h.style = v), wc(a)) {
                        var m = kc({
                            transform: a,
                            containerWidth: z.width,
                            iconWidth: z.width
                        });
                        l.push({
                            tag: "g",
                            attributes: G({}, m.outer),
                            children: [{
                                tag: "g",
                                attributes: G({}, m.inner),
                                children: [{
                                    tag: z.icon.tag,
                                    children: z.icon.children,
                                    attributes: G({}, z.icon.attributes, m.path)
                                }]
                            }]
                        })
                    } else l.push(z.icon);
                    return {
                        children: l,
                        attributes: h
                    }
                }(Q),
                B = X.children,
                K = X.attributes;
            return Q.children = B, Q.attributes = K, s ? (F = (R = Q).prefix, Y = R.iconName, D = R.children, W = R.attributes, U = R.symbol, [{
                tag: "svg",
                attributes: {
                    style: "display: none;"
                },
                children: [{
                    tag: "symbol",
                    attributes: G({}, W, {
                        id: !0 === U ? "".concat(F, "-").concat($.familyPrefix, "-").concat(Y) : U
                    }),
                    children: D
                }]
            }]) : function(c) {
                var l = c.children,
                    h = c.main,
                    z = c.mask,
                    a = c.attributes,
                    v = c.styles,
                    m = c.transform;
                if (wc(m) && h.found && !z.found) {
                    var s = h.width / h.height / 2,
                        e = .5;
                    a.style = yc(G({}, v, {
                        "transform-origin": "".concat(s + m.x / 16, "em ").concat(e + m.y / 16, "em")
                    }))
                }
                return [{
                    tag: "svg",
                    attributes: a,
                    children: l
                }]
            }(Q)
        }

        function Oc(c) {
            var l = c.content,
                h = c.width,
                z = c.height,
                a = c.transform,
                v = c.title,
                m = c.extra,
                s = c.watchable,
                e = void 0 !== s && s,
                t = G({}, m.attributes, v ? {
                    title: v
                } : {}, {
                    class: m.classes.join(" ")
                });
            e && (t[J] = "");
            var M, f, r, H, n, V, i, o, C, L = G({}, m.styles);
            wc(a) && (L.transform = (f = (M = {
                transform: a,
                startCentered: !0,
                width: h,
                height: z
            }).transform, r = M.width, H = void 0 === r ? b : r, n = M.height, V = void 0 === n ? b : n, i = M.startCentered, C = "", C += (o = void 0 !== i && i) && p ? "translate(".concat(f.x / Cc - H / 2, "em, ").concat(f.y / Cc - V / 2, "em) ") : o ? "translate(calc(-50% + ".concat(f.x / Cc, "em), calc(-50% + ").concat(f.y / Cc, "em)) ") : "translate(".concat(f.x / Cc, "em, ").concat(f.y / Cc, "em) "), C += "scale(".concat(f.size / Cc * (f.flipX ? -1 : 1), ", ").concat(f.size / Cc * (f.flipY ? -1 : 1), ") "), C += "rotate(".concat(f.rotate, "deg) ")), L["-webkit-transform"] = L.transform);
            var d = yc(L);
            0 < d.length && (t.style = d);
            var u = [];
            return u.push({
                tag: "span",
                attributes: t,
                children: [l]
            }), v && u.push({
                tag: "span",
                attributes: {
                    class: "sr-only"
                },
                children: [v]
            }), u
        }
        var jc = function() {},
            Pc = $.measurePerformance && M && M.mark && M.measure ? M : {
                mark: jc,
                measure: jc
            },
            Ec = 'FA "5.14.0"',
            Nc = function(c) {
                Pc.mark("".concat(Ec, " ").concat(c, " ends")), Pc.measure("".concat(Ec, " ").concat(c), "".concat(Ec, " ").concat(c, " begins"), "".concat(Ec, " ").concat(c, " ends"))
            },
            _c = {
                begin: function(c) {
                    return Pc.mark("".concat(Ec, " ").concat(c, " begins")),
                        function() {
                            return Nc(c)
                        }
                },
                end: Nc
            },
            Tc = function(c, l, h, z) {
                var a, v, m, s, e, t = Object.keys(c),
                    M = t.length,
                    f = void 0 !== z ? (s = l, e = z, function(c, l, h, z) {
                        return s.call(e, c, l, h, z)
                    }) : l;
                for (m = void 0 === h ? (a = 1, c[t[0]]) : (a = 0, h); a < M; a++) m = f(m, c[v = t[a]], v, c);
                return m
            };

        function Ic(c) {
            for (var l = "", h = 0; h < c.length; h++) {
                l += ("000" + c.charCodeAt(h).toString(16)).slice(-4)
            }
            return l
        }
        var Rc = Y.styles,
            Fc = Y.shims,
            Yc = {},
            Dc = {},
            Wc = {},
            Uc = function() {
                var c = function(z) {
                    return Tc(Rc, function(c, l, h) {
                        return c[h] = Tc(l, z, {}), c
                    }, {})
                };
                Yc = c(function(c, l, h) {
                    return l[3] && (c[l[3]] = h), c
                }), Dc = c(function(l, c, h) {
                    var z = c[2];
                    return l[h] = h, z.forEach(function(c) {
                        l[c] = h
                    }), l
                });
                var v = "far" in Rc;
                Wc = Tc(Fc, function(c, l) {
                    var h = l[0],
                        z = l[1],
                        a = l[2];
                    return "far" !== z || v || (z = "fas"), c[h] = {
                        prefix: z,
                        iconName: a
                    }, c
                }, {})
            };

        function Qc(c, l) {
            return (Yc[c] || {})[l]
        }
        Uc();
        var Xc = Y.styles,
            Bc = function() {
                return {
                    prefix: null,
                    iconName: null,
                    rest: []
                }
            };

        function Kc(c) {
            return c.reduce(function(c, l) {
                var h = Ac($.familyPrefix, l);
                if (Xc[l]) c.prefix = l;
                else if ($.autoFetchSvg && -1 < ["fas", "far", "fal", "fad", "fab", "fa"].indexOf(l)) c.prefix = l;
                else if (h) {
                    var z = "fa" === c.prefix ? Wc[h] || {
                        prefix: null,
                        iconName: null
                    } : {};
                    c.iconName = z.iconName || h, c.prefix = z.prefix || c.prefix
                } else l !== $.replacementClass && 0 !== l.indexOf("fa-w-") && c.rest.push(l);
                return c
            }, Bc())
        }

        function Gc(c, l, h) {
            if (c && c[l] && c[l][h]) return {
                prefix: l,
                iconName: h,
                icon: c[l][h]
            };
        }

        function Jc(c) {
            var h, l = c.tag,
                z = c.attributes,
                a = void 0 === z ? {} : z,
                v = c.children,
                m = void 0 === v ? [] : v;
            return "string" == typeof c ? Sc(c) : "<".concat(l, " ").concat((h = a, Object.keys(h || {}).reduce(function(c, l) {
                return c + "".concat(l, '="').concat(Sc(h[l]), '" ')
            }, "").trim()), ">").concat(m.map(Jc).join(""), "</").concat(l, ">")
        }
        var $c = function() {};

        function cl(c) {
            return "string" == typeof(c.getAttribute ? c.getAttribute(J) : null)
        }
        var ll = {
            replace: function(c) {
                var l = c[0],
                    h = c[1].map(function(c) {
                        return Jc(c)
                    }).join("\n");
                if (l.parentNode && l.outerHTML) l.outerHTML = h + ($.keepOriginalSource && "svg" !== l.tagName.toLowerCase() ? "\x3c!-- ".concat(l.outerHTML, " --\x3e") : "");
                else if (l.parentNode) {
                    var z = document.createElement("span");
                    l.parentNode.replaceChild(z, l), z.outerHTML = h
                }
            },
            nest: function(c) {
                var l = c[0],
                    h = c[1];
                if (~gc(l).indexOf($.replacementClass)) return ll.replace(c);
                var z = new RegExp("".concat($.familyPrefix, "-.*"));
                delete h[0].attributes.style, delete h[0].attributes.id;
                var a = h[0].attributes.class.split(" ").reduce(function(c, l) {
                    return l === $.replacementClass || l.match(z) ? c.toSvg.push(l) : c.toNode.push(l), c
                }, {
                    toNode: [],
                    toSvg: []
                });
                h[0].attributes.class = a.toSvg.join(" ");
                var v = h.map(function(c) {
                    return Jc(c)
                }).join("\n");
                l.setAttribute("class", a.toNode.join(" ")), l.setAttribute(J, ""), l.innerHTML = v
            }
        };

        function hl(c) {
            c()
        }

        function zl(h, c) {
            var z = "function" == typeof c ? c : $c;
            if (0 === h.length) z();
            else {
                var l = hl;
                $.mutateApproach === y && (l = i.requestAnimationFrame || hl), l(function() {
                    var c = !0 === $.autoReplaceSvg ? ll.replace : ll[$.autoReplaceSvg] || ll.replace,
                        l = _c.begin("mutate");
                    h.map(c), l(), z()
                })
            }
        }
        var al = !1;

        function vl() {
            al = !1
        }
        var ml = null;

        function sl(c) {
            if (t && $.observeMutations) {
                var a = c.treeCallback,
                    v = c.nodeCallback,
                    m = c.pseudoElementsCallback,
                    l = c.observeMutationsRoot,
                    h = void 0 === l ? o : l;
                ml = new t(function(c) {
                    al || bc(c).forEach(function(c) {
                        if ("childList" === c.type && 0 < c.addedNodes.length && !cl(c.addedNodes[0]) && ($.searchPseudoElements && m(c.target), a(c.target)), "attributes" === c.type && c.target.parentNode && $.searchPseudoElements && m(c.target.parentNode), "attributes" === c.type && cl(c.target) && ~N.indexOf(c.attributeName))
                            if ("class" === c.attributeName) {
                                var l = Kc(gc(c.target)),
                                    h = l.prefix,
                                    z = l.iconName;
                                h && c.target.setAttribute("data-prefix", h), z && c.target.setAttribute("data-icon", z)
                            } else v(c.target);
                    })
                }), H && ml.observe(h, {
                    childList: !0,
                    attributes: !0,
                    characterData: !0,
                    subtree: !0
                })
            }
        }

        function el(c) {
            var l, h, z = c.getAttribute("data-prefix"),
                a = c.getAttribute("data-icon"),
                v = void 0 !== c.innerText ? c.innerText.trim() : "",
                m = Kc(gc(c));
            return z && a && (m.prefix = z, m.iconName = a), m.prefix && 1 < v.length ? m.iconName = (l = m.prefix, h = c.innerText, (Dc[l] || {})[h]) : m.prefix && 1 === v.length && (m.iconName = Qc(m.prefix, Ic(c.innerText))), m
        }
        var tl = function(c) {
            var l = {
                size: 16,
                x: 0,
                y: 0,
                flipX: !1,
                flipY: !1,
                rotate: 0
            };
            return c ? c.toLowerCase().split(" ").reduce(function(c, l) {
                var h = l.toLowerCase().split("-"),
                    z = h[0],
                    a = h.slice(1).join("-");
                if (z && "h" === a) return c.flipX = !0, c;
                if (z && "v" === a) return c.flipY = !0, c;
                if (a = parseFloat(a), isNaN(a)) return c;
                switch (z) {
                    case "grow":
                        c.size = c.size + a;
                        break;
                    case "shrink":
                        c.size = c.size - a;
                        break;
                    case "left":
                        c.x = c.x - a;
                        break;
                    case "right":
                        c.x = c.x + a;
                        break;
                    case "up":
                        c.y = c.y - a;
                        break;
                    case "down":
                        c.y = c.y + a;
                        break;
                    case "rotate":
                        c.rotate = c.rotate + a
                }
                return c
            }, l) : l
        };

        function Ml(c) {
            var l, h, z, a, v, m, s, e, t = el(c),
                M = t.iconName,
                f = t.prefix,
                r = t.rest,
                H = (l = c.getAttribute("style"), h = [], l && (h = l.split(";").reduce(function(c, l) {
                    var h = l.split(":"),
                        z = h[0],
                        a = h.slice(1);
                    return z && 0 < a.length && (c[z] = a.join(":").trim()), c
                }, {})), h),
                n = tl(c.getAttribute("data-fa-transform")),
                V = null !== (z = c.getAttribute("data-fa-symbol")) && ("" === z || z),
                i = (v = bc((a = c).attributes).reduce(function(c, l) {
                    return "class" !== c.name && "style" !== c.name && (c[l.name] = l.value), c
                }, {}), m = a.getAttribute("title"), s = a.getAttribute("data-fa-title-id"), $.autoA11y && (m ? v["aria-labelledby"] = "".concat($.replacementClass, "-title-").concat(s || pc()) : (v["aria-hidden"] = "true", v.focusable = "false")), v),
                o = (e = c.getAttribute("data-fa-mask")) ? Kc(e.split(" ").map(function(c) {
                    return c.trim()
                })) : Bc();
            return {
                iconName: M,
                title: c.getAttribute("title"),
                titleId: c.getAttribute("data-fa-title-id"),
                prefix: f,
                transform: n,
                symbol: V,
                mask: o,
                maskId: c.getAttribute("data-fa-mask-id"),
                extra: {
                    classes: r,
                    styles: H,
                    attributes: i
                }
            }
        }

        function fl(c) {
            this.name = "MissingIcon", this.message = c || "Icon unavailable", this.stack = (new Error).stack
        }(fl.prototype = Object.create(Error.prototype)).constructor = fl;
        var rl = {
                fill: "currentColor"
            },
            Hl = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
            },
            nl = {
                tag: "path",
                attributes: G({}, rl, {
                    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                })
            },
            Vl = G({}, Hl, {
                attributeName: "opacity"
            }),
            il = {
                tag: "g",
                children: [nl, {
                    tag: "circle",
                    attributes: G({}, rl, {
                        cx: "256",
                        cy: "364",
                        r: "28"
                    }),
                    children: [{
                        tag: "animate",
                        attributes: G({}, Hl, {
                            attributeName: "r",
                            values: "28;14;28;28;14;28;"
                        })
                    }, {
                        tag: "animate",
                        attributes: G({}, Vl, {
                            values: "1;0;1;1;0;1;"
                        })
                    }]
                }, {
                    tag: "path",
                    attributes: G({}, rl, {
                        opacity: "1",
                        d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                    }),
                    children: [{
                        tag: "animate",
                        attributes: G({}, Vl, {
                            values: "1;0;0;0;0;1;"
                        })
                    }]
                }, {
                    tag: "path",
                    attributes: G({}, rl, {
                        opacity: "0",
                        d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                    }),
                    children: [{
                        tag: "animate",
                        attributes: G({}, Vl, {
                            values: "0;0;1;1;0;0;"
                        })
                    }]
                }]
            },
            ol = Y.styles;

        function Cl(c) {
            var l = c[0],
                h = c[1],
                z = n(c.slice(4), 1)[0];
            return {
                found: !0,
                width: l,
                height: h,
                icon: Array.isArray(z) ? {
                    tag: "g",
                    attributes: {
                        class: "".concat($.familyPrefix, "-").concat(_.GROUP)
                    },
                    children: [{
                        tag: "path",
                        attributes: {
                            class: "".concat($.familyPrefix, "-").concat(_.SECONDARY),
                            fill: "currentColor",
                            d: z[0]
                        }
                    }, {
                        tag: "path",
                        attributes: {
                            class: "".concat($.familyPrefix, "-").concat(_.PRIMARY),
                            fill: "currentColor",
                            d: z[1]
                        }
                    }]
                } : {
                    tag: "path",
                    attributes: {
                        fill: "currentColor",
                        d: z
                    }
                }
            }
        }

        function Ll(z, a) {
            return new oc(function(c, l) {
                var h = {
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: il
                };
                if (z && a && ol[a] && ol[a][z]) return c(Cl(ol[a][z]));
                "object" === v(i.FontAwesomeKitConfig) && "string" == typeof window.FontAwesomeKitConfig.token && i.FontAwesomeKitConfig.token, z && a && !$.showMissingIcons ? l(new fl("Icon is missing for prefix ".concat(a, " with icon name ").concat(z))) : c(h)
            })
        }
        var dl = Y.styles;

        function ul(c) {
            var v, l, m, s, e, t, M, f, h, r, H, z = Ml(c);
            return ~z.extra.classes.indexOf(q) ? function(c, l) {
                var h = l.title,
                    z = l.transform,
                    a = l.extra,
                    v = null,
                    m = null;
                if (p) {
                    var s = parseInt(getComputedStyle(c).fontSize, 10),
                        e = c.getBoundingClientRect();
                    v = e.width / s, m = e.height / s
                }
                return $.autoA11y && !h && (a.attributes["aria-hidden"] = "true"), oc.resolve([c, Oc({
                    content: c.innerHTML,
                    width: v,
                    height: m,
                    transform: z,
                    title: h,
                    extra: a,
                    watchable: !0
                })])
            }(c, z) : (v = c, m = (l = z).iconName, s = l.title, e = l.titleId, t = l.prefix, M = l.transform, f = l.symbol, h = l.mask, r = l.maskId, H = l.extra, new oc(function(a, c) {
                oc.all([Ll(m, t), Ll(h.iconName, h.prefix)]).then(function(c) {
                    var l = n(c, 2),
                        h = l[0],
                        z = l[1];
                    a([v, qc({
                        icons: {
                            main: h,
                            mask: z
                        },
                        prefix: t,
                        iconName: m,
                        transform: M,
                        symbol: f,
                        mask: z,
                        maskId: r,
                        title: s,
                        titleId: e,
                        extra: H,
                        watchable: !0
                    })])
                })
            }))
        }

        function pl(c) {
            var h = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            if (H) {
                var l = o.documentElement.classList,
                    z = function(c) {
                        return l.add("".concat(S, "-").concat(c))
                    },
                    a = function(c) {
                        return l.remove("".concat(S, "-").concat(c))
                    },
                    v = $.autoFetchSvg ? Object.keys(Z) : Object.keys(dl),
                    m = [".".concat(q, ":not([").concat(J, "])")].concat(v.map(function(c) {
                        return ".".concat(c, ":not([").concat(J, "])")
                    })).join(", ");
                if (0 !== m.length) {
                    var s = [];
                    try {
                        s = bc(c.querySelectorAll(m))
                    } catch (c) {}
                    if (0 < s.length) {
                        z("pending"), a("complete");
                        var e = _c.begin("onTree"),
                            t = s.reduce(function(c, l) {
                                try {
                                    var h = ul(l);
                                    h && c.push(h)
                                } catch (c) {
                                    k || c instanceof fl && console.error(c)
                                }
                                return c
                            }, []);
                        return new oc(function(l, c) {
                            oc.all(t).then(function(c) {
                                zl(c, function() {
                                    z("active"), z("complete"), a("pending"), "function" == typeof h && h(), e(), l()
                                })
                            }).catch(function() {
                                e(), c()
                            })
                        })
                    }
                }
            }
        }

        function bl(c) {
            var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            ul(c).then(function(c) {
                c && zl([c], l)
            })
        }

        function gl(H, n) {
            var V = "".concat(u).concat(n.replace(":", "-"));
            return new oc(function(z, c) {
                if (null !== H.getAttribute(V)) return z();
                var l = bc(H.children).filter(function(c) {
                        return c.getAttribute(d) === n
                    })[0],
                    h = i.getComputedStyle(H, n),
                    a = h.getPropertyValue("font-family").match(O),
                    v = h.getPropertyValue("font-weight"),
                    m = h.getPropertyValue("content");
                if (l && !a) return H.removeChild(l), z();
                if (a && "none" !== m && "" !== m) {
                    var s = ~["Solid", "Regular", "Light", "Duotone", "Brands"].indexOf(a[1]) ? x[a[1].toLowerCase()] : j[v],
                        e = Ic(3 === m.length ? m.substr(1, 1) : m),
                        t = Qc(s, e),
                        M = t;
                    if (!t || l && l.getAttribute(g) === s && l.getAttribute(A) === M) z();
                    else {
                        H.setAttribute(V, M), l && H.removeChild(l);
                        var f = {
                                iconName: null,
                                title: null,
                                titleId: null,
                                prefix: null,
                                transform: Lc,
                                symbol: !1,
                                mask: null,
                                maskId: null,
                                extra: {
                                    classes: [],
                                    styles: {},
                                    attributes: {}
                                }
                            },
                            r = f.extra;
                        r.attributes[d] = n, Ll(t, s).then(function(c) {
                            var l = qc(G({}, f, {
                                    icons: {
                                        main: c,
                                        mask: Bc()
                                    },
                                    prefix: s,
                                    iconName: M,
                                    extra: r,
                                    watchable: !0
                                })),
                                h = o.createElement("svg");
                            ":before" === n ? H.insertBefore(h, H.firstChild) : H.appendChild(h), h.outerHTML = l.map(function(c) {
                                return Jc(c)
                            }).join("\n"), H.removeAttribute(V), z()
                        }).catch(c)
                    }
                } else z();
            })
        }

        function Al(c) {
            return oc.all([gl(c, ":before"), gl(c, ":after")])
        }

        function Sl(c) {
            return !(c.parentNode === document.head || ~w.indexOf(c.tagName.toUpperCase()) || c.getAttribute(d) || c.parentNode && "svg" === c.parentNode.tagName)
        }

        function yl(a) {
            if (H) return new oc(function(c, l) {
                var h = bc(a.querySelectorAll("*")).filter(Sl).map(Al),
                    z = _c.begin("searchPseudoElements");
                al = !0, oc.all(h).then(function() {
                    z(), vl(), c()
                }).catch(function() {
                    z(), vl(), l()
                })
            });
        }
        var wl = "svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}";

        function kl() {
            var c = C,
                l = L,
                h = $.familyPrefix,
                z = $.replacementClass,
                a = wl;
            if (h !== c || z !== l) {
                var v = new RegExp("\\.".concat(c, "\\-"), "g"),
                    m = new RegExp("\\--".concat(c, "\\-"), "g"),
                    s = new RegExp("\\.".concat(l), "g");
                a = a.replace(v, ".".concat(h, "-")).replace(m, "--".concat(h, "-")).replace(s, ".".concat(z))
            }
            return a
        }

        function Zl() {
            $.autoAddCss && !Pl && (dc(kl()), Pl = !0)
        }

        function xl(l, c) {
            return Object.defineProperty(l, "abstract", {
                get: c
            }), Object.defineProperty(l, "html", {
                get: function() {
                    return l.abstract.map(function(c) {
                        return Jc(c)
                    })
                }
            }), Object.defineProperty(l, "node", {
                get: function() {
                    if (H) {
                        var c = o.createElement("div");
                        return c.innerHTML = l.html, c.children
                    }
                }
            }), l
        }

        function ql(c) {
            var l = c.prefix,
                h = void 0 === l ? "fa" : l,
                z = c.iconName;
            if (z) return Gc(jl.definitions, h, z) || Gc(Y.styles, h, z);
        }
        var Ol, jl = new(function() {
                function c() {
                    ! function(c, l) {
                        if (!(c instanceof l)) throw new TypeError("Cannot call a class as a function");
                    }(this, c), this.definitions = {}
                }
                var l, h, z;
                return l = c, (h = [{
                    key: "add",
                    value: function() {
                        for (var l = this, c = arguments.length, h = new Array(c), z = 0; z < c; z++) h[z] = arguments[z];
                        var a = h.reduce(this._pullDefinitions, {});
                        Object.keys(a).forEach(function(c) {
                            l.definitions[c] = G({}, l.definitions[c] || {}, a[c]),
                                function c(l, z) {
                                    var h = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
                                        a = void 0 !== h && h,
                                        v = Object.keys(z).reduce(function(c, l) {
                                            var h = z[l];
                                            return h.icon ? c[h.iconName] = h.icon : c[l] = h, c
                                        }, {});
                                    "function" != typeof Y.hooks.addPack || a ? Y.styles[l] = G({}, Y.styles[l] || {}, v) : Y.hooks.addPack(l, v), "fas" === l && c("fa", z)
                                }(c, a[c]), Uc()
                        })
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.definitions = {}
                    }
                }, {
                    key: "_pullDefinitions",
                    value: function(v, c) {
                        var m = c.prefix && c.iconName && c.icon ? {
                            0: c
                        } : c;
                        return Object.keys(m).map(function(c) {
                            var l = m[c],
                                h = l.prefix,
                                z = l.iconName,
                                a = l.icon;
                            v[h] || (v[h] = {}), v[h][z] = a
                        }), v
                    }
                }]) && a(l.prototype, h), z && a(l, z), c
            }()),
            Pl = !1,
            El = {
                i2svg: function() {
                    var c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    if (H) {
                        Zl();
                        var l = c.node,
                            h = void 0 === l ? o : l,
                            z = c.callback,
                            a = void 0 === z ? function() {} : z;
                        return $.searchPseudoElements && yl(h), pl(h, a)
                    }
                    return oc.reject("Operation requires a DOM of some kind.")
                },
                css: kl,
                insertCss: function() {
                    Pl || (dc(kl()), Pl = !0)
                },
                watch: function() {
                    var c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        l = c.autoReplaceSvgRoot,
                        h = c.observeMutationsRoot;
                    !1 === $.autoReplaceSvg && ($.autoReplaceSvg = !0), $.observeMutations = !0, U(function() {
                        Tl({
                            autoReplaceSvgRoot: l
                        }), sl({
                            treeCallback: pl,
                            nodeCallback: bl,
                            pseudoElementsCallback: yl,
                            observeMutationsRoot: h
                        })
                    })
                }
            },
            Nl = (Ol = function(c) {
                var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    h = l.transform,
                    z = void 0 === h ? Lc : h,
                    a = l.symbol,
                    v = void 0 !== a && a,
                    m = l.mask,
                    s = void 0 === m ? null : m,
                    e = l.maskId,
                    t = void 0 === e ? null : e,
                    M = l.title,
                    f = void 0 === M ? null : M,
                    r = l.titleId,
                    H = void 0 === r ? null : r,
                    n = l.classes,
                    V = void 0 === n ? [] : n,
                    i = l.attributes,
                    o = void 0 === i ? {} : i,
                    C = l.styles,
                    L = void 0 === C ? {} : C;
                if (c) {
                    var d = c.prefix,
                        u = c.iconName,
                        p = c.icon;
                    return xl(G({
                        type: "icon"
                    }, c), function() {
                        return Zl(), $.autoA11y && (f ? o["aria-labelledby"] = "".concat($.replacementClass, "-title-").concat(H || pc()) : (o["aria-hidden"] = "true", o.focusable = "false")), qc({
                            icons: {
                                main: Cl(p),
                                mask: s ? Cl(s.icon) : {
                                    found: !1,
                                    width: null,
                                    height: null,
                                    icon: {}
                                }
                            },
                            prefix: d,
                            iconName: u,
                            transform: G({}, Lc, z),
                            symbol: v,
                            title: f,
                            maskId: t,
                            titleId: H,
                            extra: {
                                attributes: o,
                                styles: L,
                                classes: V
                            }
                        })
                    })
                }
            }, function(c) {
                var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    h = (c || {}).icon ? c : ql(c || {}),
                    z = l.mask;
                return z && (z = (z || {}).icon ? z : ql(z || {})), Ol(h, G({}, l, {
                    mask: z
                }))
            }),
            _l = {
                noAuto: function() {
                    $.autoReplaceSvg = !1, $.observeMutations = !1, ml && ml.disconnect()
                },
                config: $,
                dom: El,
                library: jl,
                parse: {
                    transform: function(c) {
                        return tl(c)
                    }
                },
                findIconDefinition: ql,
                icon: Nl,
                text: function(c) {
                    var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        h = l.transform,
                        z = void 0 === h ? Lc : h,
                        a = l.title,
                        v = void 0 === a ? null : a,
                        m = l.classes,
                        s = void 0 === m ? [] : m,
                        e = l.attributes,
                        t = void 0 === e ? {} : e,
                        M = l.styles,
                        f = void 0 === M ? {} : M;
                    return xl({
                        type: "text",
                        content: c
                    }, function() {
                        return Zl(), Oc({
                            content: c,
                            transform: G({}, Lc, z),
                            title: v,
                            extra: {
                                attributes: t,
                                styles: f,
                                classes: ["".concat($.familyPrefix, "-layers-text")].concat(r(s))
                            }
                        })
                    })
                },
                counter: function(c) {
                    var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        h = l.title,
                        z = void 0 === h ? null : h,
                        a = l.classes,
                        v = void 0 === a ? [] : a,
                        m = l.attributes,
                        s = void 0 === m ? {} : m,
                        e = l.styles,
                        t = void 0 === e ? {} : e;
                    return xl({
                        type: "counter",
                        content: c
                    }, function() {
                        return Zl(),
                            function(c) {
                                var l = c.content,
                                    h = c.title,
                                    z = c.extra,
                                    a = G({}, z.attributes, h ? {
                                        title: h
                                    } : {}, {
                                        class: z.classes.join(" ")
                                    }),
                                    v = yc(z.styles);
                                0 < v.length && (a.style = v);
                                var m = [];
                                return m.push({
                                    tag: "span",
                                    attributes: a,
                                    children: [l]
                                }), h && m.push({
                                    tag: "span",
                                    attributes: {
                                        class: "sr-only"
                                    },
                                    children: [h]
                                }), m
                            }({
                                content: c.toString(),
                                title: z,
                                extra: {
                                    attributes: s,
                                    styles: t,
                                    classes: ["".concat($.familyPrefix, "-layers-counter")].concat(r(v))
                                }
                            })
                    })
                },
                layer: function(c) {
                    var l = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).classes,
                        h = void 0 === l ? [] : l;
                    return xl({
                        type: "layer"
                    }, function() {
                        Zl();
                        var l = [];
                        return c(function(c) {
                            Array.isArray(c) ? c.map(function(c) {
                                l = l.concat(c.abstract)
                            }) : l = l.concat(c.abstract)
                        }), [{
                            tag: "span",
                            attributes: {
                                class: ["".concat($.familyPrefix, "-layers")].concat(r(h)).join(" ")
                            },
                            children: l
                        }]
                    })
                },
                toHtml: Jc
            },
            Tl = function() {
                var c = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
                    l = void 0 === c ? o : c;
                (0 < Object.keys(Y.styles).length || $.autoFetchSvg) && H && $.autoReplaceSvg && _l.dom.i2svg({
                    node: l
                })
            };
        ! function(c) {
            try {
                c()
            } catch (c) {
                if (!k) throw c;
            }
        }(function() {
            f && (i.FontAwesome || (i.FontAwesome = _l), U(function() {
                Tl(), sl({
                    treeCallback: pl,
                    nodeCallback: bl,
                    pseudoElementsCallback: yl
                })
            })), Y.hooks = G({}, Y.hooks, {
                addPack: function(c, l) {
                    Y.styles[c] = G({}, Y.styles[c] || {}, l), Uc(), Tl()
                },
                addShims: function(c) {
                    var l;
                    (l = Y.shims).push.apply(l, r(c)), Uc(), Tl()
                }
            })
        })
    }();