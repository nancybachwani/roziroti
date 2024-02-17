var gform;
gform ||
  (document.addEventListener("gform_main_scripts_loaded", function () {
    gform.scriptsLoaded = !0;
  }),
  window.addEventListener("DOMContentLoaded", function () {
    gform.domLoaded = !0;
  }),
  (gform = {
    domLoaded: !1,
    scriptsLoaded: !1,
    initializeOnLoaded: function (o) {
      gform.domLoaded && gform.scriptsLoaded
        ? o()
        : !gform.domLoaded && gform.scriptsLoaded
        ? window.addEventListener("DOMContentLoaded", o)
        : document.addEventListener("gform_main_scripts_loaded", o);
    },
    hooks: { action: {}, filter: {} },
    addAction: function (o, n, r, t) {
      gform.addHook("action", o, n, r, t);
    },
    addFilter: function (o, n, r, t) {
      gform.addHook("filter", o, n, r, t);
    },
    doAction: function (o) {
      gform.doHook("action", o, arguments);
    },
    applyFilters: function (o) {
      return gform.doHook("filter", o, arguments);
    },
    removeAction: function (o, n) {
      gform.removeHook("action", o, n);
    },
    removeFilter: function (o, n, r) {
      gform.removeHook("filter", o, n, r);
    },
    addHook: function (o, n, r, t, i) {
      null == gform.hooks[o][n] && (gform.hooks[o][n] = []);
      var e = gform.hooks[o][n];
      null == i && (i = n + "_" + e.length),
        gform.hooks[o][n].push({
          tag: i,
          callable: r,
          priority: (t = null == t ? 10 : t),
        });
    },
    doHook: function (n, o, r) {
      var t;
      if (
        ((r = Array.prototype.slice.call(r, 1)),
        null != gform.hooks[n][o] &&
          ((o = gform.hooks[n][o]).sort(function (o, n) {
            return o.priority - n.priority;
          }),
          o.forEach(function (o) {
            "function" != typeof (t = o.callable) && (t = window[t]),
              "action" == n ? t.apply(null, r) : (r[0] = t.apply(null, r));
          })),
        "filter" == n)
      )
        return r[0];
    },
    removeHook: function (o, n, t, i) {
      var r;
      null != gform.hooks[o][n] &&
        ((r = (r = gform.hooks[o][n]).filter(function (o, n, r) {
          return !!(
            (null != i && i != o.tag) ||
            (null != t && t != o.priority)
          );
        })),
        (gform.hooks[o][n] = r));
    },
  }));

window._wpemojiSettings = {
  baseUrl: "https://s.w.org/images/core/emoji/14.0.0/72x72/",
  ext: ".png",
  svgUrl: "https://s.w.org/images/core/emoji/14.0.0/svg/",
  svgExt: ".svg",
  source: {
    concatemoji:
      "https://24carrots.com/wp-includes/js/wp-emoji-release.min.js?ver=6.4.3",
  },
};
/*! This file is auto-generated */
!(function (i, n) {
  var o, s, e;
  function c(e) {
    try {
      var t = { supportTests: e, timestamp: new Date().valueOf() };
      sessionStorage.setItem(o, JSON.stringify(t));
    } catch (e) {}
  }
  function p(e, t, n) {
    e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0);
    var t = new Uint32Array(
        e.getImageData(0, 0, e.canvas.width, e.canvas.height).data
      ),
      r =
        (e.clearRect(0, 0, e.canvas.width, e.canvas.height),
        e.fillText(n, 0, 0),
        new Uint32Array(
          e.getImageData(0, 0, e.canvas.width, e.canvas.height).data
        ));
    return t.every(function (e, t) {
      return e === r[t];
    });
  }
  function u(e, t, n) {
    switch (t) {
      case "flag":
        return n(
          e,
          "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f",
          "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f"
        )
          ? !1
          : !n(
              e,
              "\ud83c\uddfa\ud83c\uddf3",
              "\ud83c\uddfa\u200b\ud83c\uddf3"
            ) &&
              !n(
                e,
                "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",
                "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f"
              );
      case "emoji":
        return !n(
          e,
          "\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff",
          "\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff"
        );
    }
    return !1;
  }
  function f(e, t, n) {
    var r =
        "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope
          ? new OffscreenCanvas(300, 150)
          : i.createElement("canvas"),
      a = r.getContext("2d", { willReadFrequently: !0 }),
      o = ((a.textBaseline = "top"), (a.font = "600 32px Arial"), {});
    return (
      e.forEach(function (e) {
        o[e] = t(a, e, n);
      }),
      o
    );
  }
  function t(e) {
    var t = i.createElement("script");
    (t.src = e), (t.defer = !0), i.head.appendChild(t);
  }
  "undefined" != typeof Promise &&
    ((o = "wpEmojiSettingsSupports"),
    (s = ["flag", "emoji"]),
    (n.supports = { everything: !0, everythingExceptFlag: !0 }),
    (e = new Promise(function (e) {
      i.addEventListener("DOMContentLoaded", e, { once: !0 });
    })),
    new Promise(function (t) {
      var n = (function () {
        try {
          var e = JSON.parse(sessionStorage.getItem(o));
          if (
            "object" == typeof e &&
            "number" == typeof e.timestamp &&
            new Date().valueOf() < e.timestamp + 604800 &&
            "object" == typeof e.supportTests
          )
            return e.supportTests;
        } catch (e) {}
        return null;
      })();
      if (!n) {
        if (
          "undefined" != typeof Worker &&
          "undefined" != typeof OffscreenCanvas &&
          "undefined" != typeof URL &&
          URL.createObjectURL &&
          "undefined" != typeof Blob
        )
          try {
            var e =
                "postMessage(" +
                f.toString() +
                "(" +
                [JSON.stringify(s), u.toString(), p.toString()].join(",") +
                "));",
              r = new Blob([e], { type: "text/javascript" }),
              a = new Worker(URL.createObjectURL(r), {
                name: "wpTestEmojiSupports",
              });
            return void (a.onmessage = function (e) {
              c((n = e.data)), a.terminate(), t(n);
            });
          } catch (e) {}
        c((n = f(s, u, p)));
      }
      t(n);
    })
      .then(function (e) {
        for (var t in e)
          (n.supports[t] = e[t]),
            (n.supports.everything = n.supports.everything && n.supports[t]),
            "flag" !== t &&
              (n.supports.everythingExceptFlag =
                n.supports.everythingExceptFlag && n.supports[t]);
        (n.supports.everythingExceptFlag =
          n.supports.everythingExceptFlag && !n.supports.flag),
          (n.DOMReady = !1),
          (n.readyCallback = function () {
            n.DOMReady = !0;
          });
      })
      .then(function () {
        return e;
      })
      .then(function () {
        var e;
        n.supports.everything ||
          (n.readyCallback(),
          (e = n.source || {}).concatemoji
            ? t(e.concatemoji)
            : e.wpemoji && e.twemoji && (t(e.twemoji), t(e.wpemoji)));
      }));
})((window, document), window._wpemojiSettings);
gform.initializeOnLoaded(function () {
  jQuery(document).on(
    "gform_post_render",
    function (event, formId, currentPage) {
      if (formId == 1) {
        if (typeof Placeholders != "undefined") {
          Placeholders.enable();
        }
      }
    }
  );
  jQuery(document).bind(
    "gform_post_conditional_logic",
    function (event, formId, fields, isInit) {}
  );
});
var _EPYT_ = {
  ajaxurl: "https://24carrots.com/wp-admin/admin-ajax.php",
  security: "1306146cce",
  gallery_scrolloffset: "20",
  eppathtoscripts:
    "https://24carrots.com/wp-content/plugins/youtube-embed-plus/scripts/",
  eppath: "https://24carrots.com/wp-content/plugins/youtube-embed-plus/",
  epresponsiveselector:
    '["iframe.__youtube_prefs__","iframe[src*=\'youtube.com\']","iframe[src*=\'youtube-nocookie.com\']","iframe[data-ep-src*=\'youtube.com\']","iframe[data-ep-src*=\'youtube-nocookie.com\']","iframe[data-ep-gallerysrc*=\'youtube.com\']"]',
  epdovol: "1",
  version: "14.1.6.3",
  evselector:
    'iframe.__youtube_prefs__[src], iframe[src*="youtube.com/embed/"], iframe[src*="youtube-nocookie.com/embed/"]',
  ajax_compat: "",
  maxres_facade: "eager",
  ytapi_load: "light",
  pause_others: "",
  stopMobileBuffer: "1",
  facade_mode: "1",
  not_live_on_channel: "",
  vi_active: "",
  vi_js_posttypes: [],
};
