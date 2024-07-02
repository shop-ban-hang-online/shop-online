window.ladi_viewport = function (b) {
    var a = document;
    b = b ? b : 'innerWidth';
    var c = window[b];
    var d = true;
    if (typeof window.ladi_is_desktop == "undefined" || window.ladi_is_desktop == undefined) {
        window.ladi_is_desktop = !d;
    }
    var e = 960;
    var f = 420;
    var g = '';
    if (!d) {
        g = "width=" + e + ",user-scalable=no,initial-scale=1.0";
    } else {
        var h = 1;
        var i = f;
        if (i != c) {
            h = c / i;
        }
        g = "width=" + i + ",user-scalable=no,initial-scale=" + h + ",minimum-scale=" + h + ",maximum-scale=" + h;
    }
    var j = a.getElementById("viewport");
    if (!j) {
        j = a.createElement("meta");
        j.id = "viewport";
        j.name = "viewport";
        a.head.appendChild(j);
    }
    j.setAttribute("content", g);
};
window.ladi_viewport();
window.ladi_fbq_data = [];
window.ladi_fbq = function () {
    window.ladi_fbq_data.push(arguments);
};
window.ladi_ttq_data = [];
window.ladi_ttq = function () {
    window.ladi_ttq_data.push(arguments);
};

//

!function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
fbq("init", "555808629829151");
fbq("track", "PageView");
fbq("track", "ViewContent");

//

!function (w, d, t) {
    w.TiktokAnalyticsObject = t;
    var ttq = w[t] = w[t] || [];
    ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"], ttq.setAndDefer = function (t, e) {
        t[e] = function () {
            t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
        }
    };
    for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
    ttq.instance = function (t) {
        for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);
        return e
    }, ttq.load = function (e, n) {
        var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
        ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = i, ttq._t = ttq._t || {}, ttq._t[e] = +new Date, ttq._o = ttq._o || {}, ttq._o[e] = n || {};
        n = document.createElement("script");
        n.type = "text/javascript", n.async = !0, n.src = i + "?sdkid=" + e + "&lib=" + t;
        e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(n, e)
    };
    ttq.load("CLPBLFRC77U6SG2AKJL0");
    window.ladi_ttq("track", "ViewContent");
    window.ladi_ttq("track", "PageView");
    ttq.page();
}(window, document, "ttq");
