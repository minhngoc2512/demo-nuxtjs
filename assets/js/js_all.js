console.log('js loader');
function projectTab(e) {
  $(".tab").removeClass("active"), $(e).addClass("active");
  var t = $(e).attr("data-pos"), n = $("#tab_" + t).offset().top;
  $("html, body").stop().animate({scrollTop: n}, "500", "swing", function () {
  })
}

function showDetailImage(e) {
  var t = $(e).parents(".slides"), n = $(e).data("pic");
  t.find(".item").removeClass("on"), t.find(".item_" + n).addClass("on")
}

function pageScrollTo(e) {
  var t = $(e).offset().top - 20;
  $("html, body").stop().animate({scrollTop: t}, "500", "swing", function () {
  })
}

function showFullCmp(e) {
  $(e).addClass("show_full")
}

function getProjectsOnDistrict(e, t) {
  $.ajax({
    url: "/ajax/getprojectondistrict?secret=" + t,
    data: {iDis: e},
    type: "POST",
    dataType: "json",
    beforeSend: function () {
    },
    success: function (e) {
      var t = e.project, n = '<option value="0">Chọn dự án</option>';
      $.each(t, function (e, t) {
        n += '<option value="' + t.proj_id + '">' + t.proj_name + "</option>"
      }), $("#cla_proj_id").html(n)
    }
  })
}

function mbActiveSearch() {
  $("#mb_header").addClass("onsearchfix")
}

function mbEscSearch() {
  $("#mb_header").removeClass("onsearchfix")
}

function showModal(e) {
  $(e).addClass("show")
}

function hideModal(e) {
  $(e).removeClass("show")
}

function noimage(e) {
  $(e).attr("src", "/assets/images/noimage.png")
}

function showTabContentDetail(e) {
  var t = $(e);
  $(".tab-content li a").removeClass("active"), t.addClass("active")
}

function activeTabContent(e, t, n, i, o) {
  var r = $(e), a = r.attr("href");
  void 0 === a && (a = e);
  var s = $(t), l = $(a), u = "";
  if (void 0 !== i && i, void 0 !== o && (u = o), l.length) {
    if ($("#boxTabLabel ul li a").removeClass("active"), r.addClass("active"), "string" == typeof e && $("#boxTabLabel ul li a").each(function (t, n) {
        $(n).attr("href") == e && $(n).addClass("active")
      }), s.hide(), l.show(), "" == $(a).html().trim()) {
      if ("" != i && "" != u) switch (u) {
        case"video":
          $(a).html('<div style="text-align: center; margin: 50px 0; width: 100%;"><img src="/assets/images/loading.gif"/></div>');
          getVideoVehicleSuggest(i, "/ajax/getvideovehicle", a)
      }
    }
    var c = $("#boxTabLabel").offset().top;
    $("html, body").animate({scrollTop: c}, "1000")
  }
  void 0 !== n && n.preventDefault()
}

function getVideoVehicleSuggest(e, t, n) {
  $.ajax({
    url: t, data: {q: e}, type: "GET", dataType: "json", beforeSend: function () {
    }, success: function (e) {
      var t = "";
      $.each(e, function (e, n) {
        t += '<div class="row-video"><iframe width="455" height="315" src="' + n + '"></iframe></div>'
      }), $(n).html(t)
    }
  })
}

function getParameterByName(e, t) {
  t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
  var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"), i = n.exec(t);
  return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
}

function activeTabCurrent() {
  var e = window.location.hash;
  if ("" == e) return !1;
  var t = $(e);
  $("#boxTabLabel").length && t.length && activeTabContent(e, ".tab-label-content")
}

function scrollToDiv(e) {
  var t = $(e), n = $(".boxTabLabel"), i = n.height();
  if (t.length) {
    var o = t.offset().top - i - 10;
    $("html, body").animate({scrollTop: o}, 200)
  }
}

function changeActive(e) {
  var t = $(e);
  t.parents("ul").find("li a").removeClass("active"), t.addClass("active")
}

function loadmoreHoidap(e) {
  var t = $(e), n = $("#dataPgaeHoidap").val(), i = t.data("vehicle"), o = t.data("secret");
  $.ajax({
    url: "/ajax/loadMoreVehicleHoidap?secret=" + o,
    data: {veh_id: i, page: n},
    type: "GET",
    dataType: "html",
    beforeSend: function () {
    },
    success: function (e) {
      "" != e ? ($("#tabHoidap>ul.list-hoi-dap").append(e), $("#dataPgaeHoidap").val(parseInt(n + 1))) : t.remove()
    }
  })
}

!function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";

  function n(e, t) {
    t = t || te;
    var n = t.createElement("script");
    n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
  }

  function i(e) {
    var t = !!e && "length" in e && e.length, n = he.type(e);
    return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }

  function o(e, t, n) {
    return he.isFunction(t) ? he.grep(e, function (e, i) {
      return !!t.call(e, i, e) !== n
    }) : t.nodeType ? he.grep(e, function (e) {
      return e === t !== n
    }) : "string" != typeof t ? he.grep(e, function (e) {
      return ae.call(t, e) > -1 !== n
    }) : Se.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function (e) {
      return ae.call(t, e) > -1 !== n && 1 === e.nodeType
    }))
  }

  function r(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) ;
    return e
  }

  function a(e) {
    var t = {};
    return he.each(e.match(De) || [], function (e, n) {
      t[n] = !0
    }), t
  }

  function s(e) {
    return e
  }

  function l(e) {
    throw e
  }

  function u(e, t, n) {
    var i;
    try {
      e && he.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && he.isFunction(i = e.then) ? i.call(e, t, n) : t.call(void 0, e)
    } catch (e) {
      n.call(void 0, e)
    }
  }

  function c() {
    te.removeEventListener("DOMContentLoaded", c), e.removeEventListener("load", c), he.ready()
  }

  function d() {
    this.expando = he.expando + d.uid++
  }

  function f(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : He.test(e) ? JSON.parse(e) : e)
  }

  function p(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Oe, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
      try {
        n = f(n)
      } catch (e) {
      }
      Fe.set(e, t, n)
    } else n = void 0;
    return n
  }

  function h(e, t, n, i) {
    var o, r = 1, a = 20, s = i ? function () {
        return i.cur()
      } : function () {
        return he.css(e, t, "")
      }, l = s(), u = n && n[3] || (he.cssNumber[t] ? "" : "px"),
      c = (he.cssNumber[t] || "px" !== u && +l) && Pe.exec(he.css(e, t));
    if (c && c[3] !== u) {
      u = u || c[3], n = n || [], c = +l || 1;
      do {
        r = r || ".5", c /= r, he.style(e, t, c + u)
      } while (r !== (r = s() / l) && 1 !== r && --a)
    }
    return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
  }

  function g(e) {
    var t, n = e.ownerDocument, i = e.nodeName, o = Be[i];
    return o || (t = n.body.appendChild(n.createElement(i)), o = he.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), Be[i] = o, o)
  }

  function m(e, t) {
    for (var n, i, o = [], r = 0, a = e.length; r < a; r++) i = e[r], i.style && (n = i.style.display, t ? ("none" === n && (o[r] = qe.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Me(i) && (o[r] = g(i))) : "none" !== n && (o[r] = "none", qe.set(i, "display", n)));
    for (r = 0; r < a; r++) null != o[r] && (e[r].style.display = o[r]);
    return e
  }

  function v(e, t) {
    var n;
    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && he.nodeName(e, t) ? he.merge([e], n) : n
  }

  function y(e, t) {
    for (var n = 0, i = e.length; n < i; n++) qe.set(e[n], "globalEval", !t || qe.get(t[n], "globalEval"))
  }

  function b(e, t, n, i, o) {
    for (var r, a, s, l, u, c, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++) if ((r = e[p]) || 0 === r) if ("object" === he.type(r)) he.merge(f, r.nodeType ? [r] : r); else if (Qe.test(r)) {
      for (a = a || d.appendChild(t.createElement("div")), s = (Ve.exec(r) || ["", ""])[1].toLowerCase(), l = Xe[s] || Xe._default, a.innerHTML = l[1] + he.htmlPrefilter(r) + l[2], c = l[0]; c--;) a = a.lastChild;
      he.merge(f, a.childNodes), a = d.firstChild, a.textContent = ""
    } else f.push(t.createTextNode(r));
    for (d.textContent = "", p = 0; r = f[p++];) if (i && he.inArray(r, i) > -1) o && o.push(r); else if (u = he.contains(r.ownerDocument, r), a = v(d.appendChild(r), "script"), u && y(a), n) for (c = 0; r = a[c++];) ze.test(r.type || "") && n.push(r);
    return d
  }

  function x() {
    return !0
  }

  function w() {
    return !1
  }

  function C() {
    try {
      return te.activeElement
    } catch (e) {
    }
  }

  function T(e, t, n, i, o, r) {
    var a, s;
    if ("object" == typeof t) {
      "string" != typeof n && (i = i || n, n = void 0);
      for (s in t) T(e, s, n, i, t[s], r);
      return e
    }
    if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = w; else if (!o) return e;
    return 1 === r && (a = o, o = function (e) {
      return he().off(e), a.apply(this, arguments)
    }, o.guid = a.guid || (a.guid = he.guid++)), e.each(function () {
      he.event.add(this, t, o, i, n)
    })
  }

  function S(e, t) {
    return he.nodeName(e, "table") && he.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
  }

  function k(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function N(e) {
    var t = nt.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function E(e, t) {
    var n, i, o, r, a, s, l, u;
    if (1 === t.nodeType) {
      if (qe.hasData(e) && (r = qe.access(e), a = qe.set(t, r), u = r.events)) {
        delete a.handle, a.events = {};
        for (o in u) for (n = 0, i = u[o].length; n < i; n++) he.event.add(t, o, u[o][n])
      }
      Fe.hasData(e) && (s = Fe.access(e), l = he.extend({}, s), Fe.set(t, l))
    }
  }

  function j(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && We.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
  }

  function D(e, t, i, o) {
    t = oe.apply([], t);
    var r, a, s, l, u, c, d = 0, f = e.length, p = f - 1, h = t[0], g = he.isFunction(h);
    if (g || f > 1 && "string" == typeof h && !fe.checkClone && tt.test(h)) return e.each(function (n) {
      var r = e.eq(n);
      g && (t[0] = h.call(this, n, r.html())), D(r, t, i, o)
    });
    if (f && (r = b(t, e[0].ownerDocument, !1, e, o), a = r.firstChild, 1 === r.childNodes.length && (r = a), a || o)) {
      for (s = he.map(v(r, "script"), k), l = s.length; d < f; d++) u = r, d !== p && (u = he.clone(u, !0, !0), l && he.merge(s, v(u, "script"))), i.call(e[d], u, d);
      if (l) for (c = s[s.length - 1].ownerDocument, he.map(s, N), d = 0; d < l; d++) u = s[d], ze.test(u.type || "") && !qe.access(u, "globalEval") && he.contains(c, u) && (u.src ? he._evalUrl && he._evalUrl(u.src) : n(u.textContent.replace(it, ""), c))
    }
    return e
  }

  function $(e, t, n) {
    for (var i, o = t ? he.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || he.cleanData(v(i)), i.parentNode && (n && he.contains(i.ownerDocument, i) && y(v(i, "script")), i.parentNode.removeChild(i));
    return e
  }

  function A(e, t, n) {
    var i, o, r, a, s = e.style;
    return n = n || at(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || he.contains(e.ownerDocument, e) || (a = he.style(e, t)), !fe.pixelMarginRight() && rt.test(a) && ot.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a
  }

  function I(e, t) {
    return {
      get: function () {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
      }
    }
  }

  function L(e) {
    if (e in dt) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = ct.length; n--;) if ((e = ct[n] + t) in dt) return e
  }

  function q(e, t, n) {
    var i = Pe.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
  }

  function F(e, t, n, i, o) {
    var r, a = 0;
    for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === n && (a += he.css(e, n + _e[r], !0, o)), i ? ("content" === n && (a -= he.css(e, "padding" + _e[r], !0, o)), "margin" !== n && (a -= he.css(e, "border" + _e[r] + "Width", !0, o))) : (a += he.css(e, "padding" + _e[r], !0, o), "padding" !== n && (a += he.css(e, "border" + _e[r] + "Width", !0, o)));
    return a
  }

  function H(e, t, n) {
    var i, o = !0, r = at(e), a = "border-box" === he.css(e, "boxSizing", !1, r);
    if (e.getClientRects().length && (i = e.getBoundingClientRect()[t]), i <= 0 || null == i) {
      if (i = A(e, t, r), (i < 0 || null == i) && (i = e.style[t]), rt.test(i)) return i;
      o = a && (fe.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
    }
    return i + F(e, t, n || (a ? "border" : "content"), o, r) + "px"
  }

  function O(e, t, n, i, o) {
    return new O.prototype.init(e, t, n, i, o)
  }

  function R() {
    pt && (e.requestAnimationFrame(R), he.fx.tick())
  }

  function P() {
    return e.setTimeout(function () {
      ft = void 0
    }), ft = he.now()
  }

  function _(e, t) {
    var n, i = 0, o = {height: e};
    for (t = t ? 1 : 0; i < 4; i += 2 - t) n = _e[i], o["margin" + n] = o["padding" + n] = e;
    return t && (o.opacity = o.width = e), o
  }

  function M(e, t, n) {
    for (var i, o = (W.tweeners[t] || []).concat(W.tweeners["*"]), r = 0, a = o.length; r < a; r++) if (i = o[r].call(n, t, e)) return i
  }

  function U(e, t, n) {
    var i, o, r, a, s, l, u, c, d = "width" in t || "height" in t, f = this, p = {}, h = e.style,
      g = e.nodeType && Me(e), v = qe.get(e, "fxshow");
    n.queue || (a = he._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
      a.unqueued || s()
    }), a.unqueued++, f.always(function () {
      f.always(function () {
        a.unqueued--, he.queue(e, "fx").length || a.empty.fire()
      })
    }));
    for (i in t) if (o = t[i], ht.test(o)) {
      if (delete t[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
        if ("show" !== o || !v || void 0 === v[i]) continue;
        g = !0
      }
      p[i] = v && v[i] || he.style(e, i)
    }
    if ((l = !he.isEmptyObject(t)) || !he.isEmptyObject(p)) {
      d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = v && v.display, null == u && (u = qe.get(e, "display")), c = he.css(e, "display"), "none" === c && (u ? c = u : (m([e], !0), u = e.style.display || u, c = he.css(e, "display"), m([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === he.css(e, "float") && (l || (f.done(function () {
        h.display = u
      }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
      })), l = !1;
      for (i in p) l || (v ? "hidden" in v && (g = v.hidden) : v = qe.access(e, "fxshow", {display: u}), r && (v.hidden = !g), g && m([e], !0), f.done(function () {
        g || m([e]), qe.remove(e, "fxshow");
        for (i in p) he.style(e, i, p[i])
      })), l = M(g ? v[i] : 0, i, f), i in v || (v[i] = l.start, g && (l.end = l.start, l.start = 0))
    }
  }

  function B(e, t) {
    var n, i, o, r, a;
    for (n in e) if (i = he.camelCase(n), o = t[i], r = e[n], he.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = he.cssHooks[i]) && "expand" in a) {
      r = a.expand(r), delete e[i];
      for (n in r) n in e || (e[n] = r[n], t[n] = o)
    } else t[i] = o
  }

  function W(e, t, n) {
    var i, o, r = 0, a = W.prefilters.length, s = he.Deferred().always(function () {
      delete l.elem
    }), l = function () {
      if (o) return !1;
      for (var t = ft || P(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, r = 1 - i, a = 0, l = u.tweens.length; a < l; a++) u.tweens[a].run(r);
      return s.notifyWith(e, [u, r, n]), r < 1 && l ? n : (s.resolveWith(e, [u]), !1)
    }, u = s.promise({
      elem: e,
      props: he.extend({}, t),
      opts: he.extend(!0, {specialEasing: {}, easing: he.easing._default}, n),
      originalProperties: t,
      originalOptions: n,
      startTime: ft || P(),
      duration: n.duration,
      tweens: [],
      createTween: function (t, n) {
        var i = he.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
        return u.tweens.push(i), i
      },
      stop: function (t) {
        var n = 0, i = t ? u.tweens.length : 0;
        if (o) return this;
        for (o = !0; n < i; n++) u.tweens[n].run(1);
        return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
      }
    }), c = u.props;
    for (B(c, u.opts.specialEasing); r < a; r++) if (i = W.prefilters[r].call(u, e, c, u.opts)) return he.isFunction(i.stop) && (he._queueHooks(u.elem, u.opts.queue).stop = he.proxy(i.stop, i)), i;
    return he.map(c, M, u), he.isFunction(u.opts.start) && u.opts.start.call(e, u), he.fx.timer(he.extend(l, {
      elem: e,
      anim: u,
      queue: u.opts.queue
    })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
  }

  function V(e) {
    return (e.match(De) || []).join(" ")
  }

  function z(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }

  function X(e, t, n, i) {
    var o;
    if (he.isArray(t)) he.each(t, function (t, o) {
      n || kt.test(e) ? i(e, o) : X(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
    }); else if (n || "object" !== he.type(t)) i(e, t); else for (o in t) X(e + "[" + o + "]", t[o], n, i)
  }

  function Q(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var i, o = 0, r = t.toLowerCase().match(De) || [];
      if (he.isFunction(n)) for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
    }
  }

  function G(e, t, n, i) {
    function o(s) {
      var l;
      return r[s] = !0, he.each(e[s] || [], function (e, s) {
        var u = s(t, n, i);
        return "string" != typeof u || a || r[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
      }), l
    }

    var r = {}, a = e === Ot;
    return o(t.dataTypes[0]) || !r["*"] && o("*")
  }

  function Y(e, t) {
    var n, i, o = he.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
    return i && he.extend(!0, e, i), e
  }

  function K(e, t, n) {
    for (var i, o, r, a, s = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
    if (i) for (o in s) if (s[o] && s[o].test(i)) {
      l.unshift(o);
      break
    }
    if (l[0] in n) r = l[0]; else {
      for (o in n) {
        if (!l[0] || e.converters[o + " " + l[0]]) {
          r = o;
          break
        }
        a || (a = o)
      }
      r = r || a
    }
    if (r) return r !== l[0] && l.unshift(r), n[r]
  }

  function J(e, t, n, i) {
    var o, r, a, s, l, u = {}, c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
    for (r = c.shift(); r;) if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
      if (!(a = u[l + " " + r] || u["* " + r])) for (o in u) if (s = o.split(" "), s[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
        !0 === a ? a = u[o] : !0 !== u[o] && (r = s[0], c.unshift(s[1]));
        break
      }
      if (!0 !== a) if (a && e.throws) t = a(t); else try {
        t = a(t)
      } catch (e) {
        return {state: "parsererror", error: a ? e : "No conversion from " + l + " to " + r}
      }
    }
    return {state: "success", data: t}
  }

  function Z(e) {
    return he.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
  }

  var ee = [], te = e.document, ne = Object.getPrototypeOf, ie = ee.slice, oe = ee.concat, re = ee.push,
    ae = ee.indexOf, se = {}, le = se.toString, ue = se.hasOwnProperty, ce = ue.toString, de = ce.call(Object), fe = {},
    pe = "3.1.1", he = function (e, t) {
      return new he.fn.init(e, t)
    }, ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, me = /^-ms-/, ve = /-([a-z])/g, ye = function (e, t) {
      return t.toUpperCase()
    };
  he.fn = he.prototype = {
    jquery: pe, constructor: he, length: 0, toArray: function () {
      return ie.call(this)
    }, get: function (e) {
      return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e]
    }, pushStack: function (e) {
      var t = he.merge(this.constructor(), e);
      return t.prevObject = this, t
    }, each: function (e) {
      return he.each(this, e)
    }, map: function (e) {
      return this.pushStack(he.map(this, function (t, n) {
        return e.call(t, n, t)
      }))
    }, slice: function () {
      return this.pushStack(ie.apply(this, arguments))
    }, first: function () {
      return this.eq(0)
    }, last: function () {
      return this.eq(-1)
    }, eq: function (e) {
      var t = this.length, n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
    }, end: function () {
      return this.prevObject || this.constructor()
    }, push: re, sort: ee.sort, splice: ee.splice
  }, he.extend = he.fn.extend = function () {
    var e, t, n, i, o, r, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
    for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || he.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], i = e[t], a !== i && (u && i && (he.isPlainObject(i) || (o = he.isArray(i))) ? (o ? (o = !1, r = n && he.isArray(n) ? n : []) : r = n && he.isPlainObject(n) ? n : {}, a[t] = he.extend(u, r, i)) : void 0 !== i && (a[t] = i));
    return a
  }, he.extend({
    expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
      throw new Error(e)
    }, noop: function () {
    }, isFunction: function (e) {
      return "function" === he.type(e)
    }, isArray: Array.isArray, isWindow: function (e) {
      return null != e && e === e.window
    }, isNumeric: function (e) {
      var t = he.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== le.call(e) || (t = ne(e)) && ("function" != typeof(n = ue.call(t, "constructor") && t.constructor) || ce.call(n) !== de))
    }, isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0
    }, type: function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? se[le.call(e)] || "object" : typeof e
    }, globalEval: function (e) {
      n(e)
    }, camelCase: function (e) {
      return e.replace(me, "ms-").replace(ve, ye)
    }, nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, each: function (e, t) {
      var n, o = 0;
      if (i(e)) for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++) ; else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
      return e
    }, trim: function (e) {
      return null == e ? "" : (e + "").replace(ge, "")
    }, makeArray: function (e, t) {
      var n = t || [];
      return null != e && (i(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : re.call(n, e)), n
    }, inArray: function (e, t, n) {
      return null == t ? -1 : ae.call(t, e, n)
    }, merge: function (e, t) {
      for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
      return e.length = o, e
    }, grep: function (e, t, n) {
      for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) !t(e[o], o) !== a && i.push(e[o]);
      return i
    }, map: function (e, t, n) {
      var o, r, a = 0, s = [];
      if (i(e)) for (o = e.length; a < o; a++) null != (r = t(e[a], a, n)) && s.push(r); else for (a in e) null != (r = t(e[a], a, n)) && s.push(r);
      return oe.apply([], s)
    }, guid: 1, proxy: function (e, t) {
      var n, i, o;
      if ("string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e)) return i = ie.call(arguments, 2), o = function () {
        return e.apply(t || this, i.concat(ie.call(arguments)))
      }, o.guid = e.guid = e.guid || he.guid++, o
    }, now: Date.now, support: fe
  }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    se["[object " + t + "]"] = t.toLowerCase()
  });
  var be = function (e) {
    function t(e, t, n, i) {
      var o, r, a, s, l, c, f, p = t && t.ownerDocument, h = t ? t.nodeType : 9;
      if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
      if (!i && ((t ? t.ownerDocument || t : P) !== A && $(t), t = t || A, L)) {
        if (11 !== h && (l = ge.exec(e))) if (o = l[1]) {
          if (9 === h) {
            if (!(a = t.getElementById(o))) return n;
            if (a.id === o) return n.push(a), n
          } else if (p && (a = p.getElementById(o)) && O(t, a) && a.id === o) return n.push(a), n
        } else {
          if (l[2]) return Y.apply(n, t.getElementsByTagName(e)), n;
          if ((o = l[3]) && x.getElementsByClassName && t.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(o)), n
        }
        if (x.qsa && !W[e + " "] && (!q || !q.test(e))) {
          if (1 !== h) p = t, f = e; else if ("object" !== t.nodeName.toLowerCase()) {
            for ((s = t.getAttribute("id")) ? s = s.replace(be, xe) : t.setAttribute("id", s = R), c = S(e), r = c.length; r--;) c[r] = "#" + s + " " + d(c[r]);
            f = c.join(","), p = me.test(e) && u(t.parentNode) || t
          }
          if (f) try {
            return Y.apply(n, p.querySelectorAll(f)), n
          } catch (e) {
          } finally {
            s === R && t.removeAttribute("id")
          }
        }
      }
      return N(e.replace(re, "$1"), t, n, i)
    }

    function n() {
      function e(n, i) {
        return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i
      }

      var t = [];
      return e
    }

    function i(e) {
      return e[R] = !0, e
    }

    function o(e) {
      var t = A.createElement("fieldset");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function r(e, t) {
      for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t
    }

    function a(e, t) {
      var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; n = n.nextSibling;) if (n === t) return -1;
      return e ? 1 : -1
    }

    function s(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ce(t) === e : t.disabled === e : "label" in t && t.disabled === e
      }
    }

    function l(e) {
      return i(function (t) {
        return t = +t, i(function (n, i) {
          for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
        })
      })
    }

    function u(e) {
      return e && void 0 !== e.getElementsByTagName && e
    }

    function c() {
    }

    function d(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i
    }

    function f(e, t, n) {
      var i = t.dir, o = t.next, r = o || i, a = n && "parentNode" === r, s = M++;
      return t.first ? function (t, n, o) {
        for (; t = t[i];) if (1 === t.nodeType || a) return e(t, n, o);
        return !1
      } : function (t, n, l) {
        var u, c, d, f = [_, s];
        if (l) {
          for (; t = t[i];) if ((1 === t.nodeType || a) && e(t, n, l)) return !0
        } else for (; t = t[i];) if (1 === t.nodeType || a) if (d = t[R] || (t[R] = {}), c = d[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t; else {
          if ((u = c[r]) && u[0] === _ && u[1] === s) return f[2] = u[2];
          if (c[r] = f, f[2] = e(t, n, l)) return !0
        }
        return !1
      }
    }

    function p(e) {
      return e.length > 1 ? function (t, n, i) {
        for (var o = e.length; o--;) if (!e[o](t, n, i)) return !1;
        return !0
      } : e[0]
    }

    function h(e, n, i) {
      for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
      return i
    }

    function g(e, t, n, i, o) {
      for (var r, a = [], s = 0, l = e.length, u = null != t; s < l; s++) (r = e[s]) && (n && !n(r, i, o) || (a.push(r), u && t.push(s)));
      return a
    }

    function m(e, t, n, o, r, a) {
      return o && !o[R] && (o = m(o)), r && !r[R] && (r = m(r, a)), i(function (i, a, s, l) {
        var u, c, d, f = [], p = [], m = a.length, v = i || h(t || "*", s.nodeType ? [s] : s, []),
          y = !e || !i && t ? v : g(v, f, e, s, l), b = n ? r || (i ? e : m || o) ? [] : a : y;
        if (n && n(y, b, s, l), o) for (u = g(b, p), o(u, [], s, l), c = u.length; c--;) (d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
        if (i) {
          if (r || e) {
            if (r) {
              for (u = [], c = b.length; c--;) (d = b[c]) && u.push(y[c] = d);
              r(null, b = [], u, l)
            }
            for (c = b.length; c--;) (d = b[c]) && (u = r ? J(i, d) : f[c]) > -1 && (i[u] = !(a[u] = d))
          }
        } else b = g(b === a ? b.splice(m, b.length) : b), r ? r(null, a, b, l) : Y.apply(a, b)
      })
    }

    function v(e) {
      for (var t, n, i, o = e.length, r = w.relative[e[0].type], a = r || w.relative[" "], s = r ? 1 : 0, l = f(function (e) {
        return e === t
      }, a, !0), u = f(function (e) {
        return J(t, e) > -1
      }, a, !0), c = [function (e, n, i) {
        var o = !r && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
        return t = null, o
      }]; s < o; s++) if (n = w.relative[e[s].type]) c = [f(p(c), n)]; else {
        if (n = w.filter[e[s].type].apply(null, e[s].matches), n[R]) {
          for (i = ++s; i < o && !w.relative[e[i].type]; i++) ;
          return m(s > 1 && p(c), s > 1 && d(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(re, "$1"), n, s < i && v(e.slice(s, i)), i < o && v(e = e.slice(i)), i < o && d(e))
        }
        c.push(n)
      }
      return p(c)
    }

    function y(e, n) {
      var o = n.length > 0, r = e.length > 0, a = function (i, a, s, l, u) {
        var c, d, f, p = 0, h = "0", m = i && [], v = [], y = E, b = i || r && w.find.TAG("*", u),
          x = _ += null == y ? 1 : Math.random() || .1, C = b.length;
        for (u && (E = a === A || a || u); h !== C && null != (c = b[h]); h++) {
          if (r && c) {
            for (d = 0, a || c.ownerDocument === A || ($(c), s = !L); f = e[d++];) if (f(c, a || A, s)) {
              l.push(c);
              break
            }
            u && (_ = x)
          }
          o && ((c = !f && c) && p--, i && m.push(c))
        }
        if (p += h, o && h !== p) {
          for (d = 0; f = n[d++];) f(m, v, a, s);
          if (i) {
            if (p > 0) for (; h--;) m[h] || v[h] || (v[h] = Q.call(l));
            v = g(v)
          }
          Y.apply(l, v), u && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
        }
        return u && (_ = x, E = y), m
      };
      return o ? i(a) : a
    }

    var b, x, w, C, T, S, k, N, E, j, D, $, A, I, L, q, F, H, O, R = "sizzle" + 1 * new Date, P = e.document, _ = 0,
      M = 0, U = n(), B = n(), W = n(), V = function (e, t) {
        return e === t && (D = !0), 0
      }, z = {}.hasOwnProperty, X = [], Q = X.pop, G = X.push, Y = X.push, K = X.slice, J = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1
      },
      Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
      ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
      oe = new RegExp(ee + "+", "g"), re = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
      ae = new RegExp("^" + ee + "*," + ee + "*"), se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
      le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ue = new RegExp(ie),
      ce = new RegExp("^" + te + "$"), de = {
        ID: new RegExp("^#(" + te + ")"),
        CLASS: new RegExp("^\\.(" + te + ")"),
        TAG: new RegExp("^(" + te + "|[*])"),
        ATTR: new RegExp("^" + ne),
        PSEUDO: new RegExp("^" + ie),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + Z + ")$", "i"),
        needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
      }, fe = /^(?:input|select|textarea|button)$/i, pe = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/,
      ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, me = /[+~]/,
      ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), ye = function (e, t, n) {
        var i = "0x" + t - 65536;
        return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
      }, be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, xe = function (e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
      }, we = function () {
        $()
      }, Ce = f(function (e) {
        return !0 === e.disabled && ("form" in e || "label" in e)
      }, {dir: "parentNode", next: "legend"});
    try {
      Y.apply(X = K.call(P.childNodes), P.childNodes), X[P.childNodes.length].nodeType
    } catch (e) {
      Y = {
        apply: X.length ? function (e, t) {
          G.apply(e, K.call(t))
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];) ;
          e.length = n - 1
        }
      }
    }
    x = t.support = {}, T = t.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName
    }, $ = t.setDocument = function (e) {
      var t, n, i = e ? e.ownerDocument || e : P;
      return i !== A && 9 === i.nodeType && i.documentElement ? (A = i, I = A.documentElement, L = !T(A), P !== A && (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), x.attributes = o(function (e) {
        return e.className = "i", !e.getAttribute("className")
      }), x.getElementsByTagName = o(function (e) {
        return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length
      }), x.getElementsByClassName = he.test(A.getElementsByClassName), x.getById = o(function (e) {
        return I.appendChild(e).id = R, !A.getElementsByName || !A.getElementsByName(R).length
      }), x.getById ? (w.filter.ID = function (e) {
        var t = e.replace(ve, ye);
        return function (e) {
          return e.getAttribute("id") === t
        }
      }, w.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && L) {
          var n = t.getElementById(e);
          return n ? [n] : []
        }
      }) : (w.filter.ID = function (e) {
        var t = e.replace(ve, ye);
        return function (e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t
        }
      }, w.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && L) {
          var n, i, o, r = t.getElementById(e);
          if (r) {
            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
            for (o = t.getElementsByName(e), i = 0; r = o[i++];) if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
          }
          return []
        }
      }), w.find.TAG = x.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
      } : function (e, t) {
        var n, i = [], o = 0, r = t.getElementsByTagName(e);
        if ("*" === e) {
          for (; n = r[o++];) 1 === n.nodeType && i.push(n);
          return i
        }
        return r
      }, w.find.CLASS = x.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && L) return t.getElementsByClassName(e)
      }, F = [], q = [], (x.qsa = he.test(A.querySelectorAll)) && (o(function (e) {
        I.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + R + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || q.push(".#.+[+~]")
      }), o(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = A.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), I.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
      })), (x.matchesSelector = he.test(H = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && o(function (e) {
        x.disconnectedMatch = H.call(e, "*"), H.call(e, "[s!='']:x"), F.push("!=", ie)
      }), q = q.length && new RegExp(q.join("|")), F = F.length && new RegExp(F.join("|")), t = he.test(I.compareDocumentPosition), O = t || he.test(I.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) if (t === e) return !0;
        return !1
      }, V = t ? function (e, t) {
        if (e === t) return D = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === A || e.ownerDocument === P && O(P, e) ? -1 : t === A || t.ownerDocument === P && O(P, t) ? 1 : j ? J(j, e) - J(j, t) : 0 : 4 & n ? -1 : 1)
      } : function (e, t) {
        if (e === t) return D = !0, 0;
        var n, i = 0, o = e.parentNode, r = t.parentNode, s = [e], l = [t];
        if (!o || !r) return e === A ? -1 : t === A ? 1 : o ? -1 : r ? 1 : j ? J(j, e) - J(j, t) : 0;
        if (o === r) return a(e, t);
        for (n = e; n = n.parentNode;) s.unshift(n);
        for (n = t; n = n.parentNode;) l.unshift(n);
        for (; s[i] === l[i];) i++;
        return i ? a(s[i], l[i]) : s[i] === P ? -1 : l[i] === P ? 1 : 0
      }, A) : A
    }, t.matches = function (e, n) {
      return t(e, null, null, n)
    }, t.matchesSelector = function (e, n) {
      if ((e.ownerDocument || e) !== A && $(e), n = n.replace(le, "='$1']"), x.matchesSelector && L && !W[n + " "] && (!F || !F.test(n)) && (!q || !q.test(n))) try {
        var i = H.call(e, n);
        if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
      } catch (e) {
      }
      return t(n, A, null, [e]).length > 0
    }, t.contains = function (e, t) {
      return (e.ownerDocument || e) !== A && $(e), O(e, t)
    }, t.attr = function (e, t) {
      (e.ownerDocument || e) !== A && $(e);
      var n = w.attrHandle[t.toLowerCase()], i = n && z.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
      return void 0 !== i ? i : x.attributes || !L ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    }, t.escape = function (e) {
      return (e + "").replace(be, xe)
    }, t.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, t.uniqueSort = function (e) {
      var t, n = [], i = 0, o = 0;
      if (D = !x.detectDuplicates, j = !x.sortStable && e.slice(0), e.sort(V), D) {
        for (; t = e[o++];) t === e[o] && (i = n.push(o));
        for (; i--;) e.splice(n[i], 1)
      }
      return j = null, e
    }, C = t.getText = function (e) {
      var t, n = "", i = 0, o = e.nodeType;
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
        } else if (3 === o || 4 === o) return e.nodeValue
      } else for (; t = e[i++];) n += C(t);
      return n
    }, w = t.selectors = {
      cacheLength: 50,
      createPseudo: i,
      match: de,
      attrHandle: {},
      find: {},
      relative: {
        ">": {dir: "parentNode", first: !0},
        " ": {dir: "parentNode"},
        "+": {dir: "previousSibling", first: !0},
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        }, CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
        },
        PSEUDO: function (e) {
          var t, n = !e[6] && e[2];
          return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(ve, ye).toLowerCase();
          return "*" === e ? function () {
            return !0
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        }, CLASS: function (e) {
          var t = U[e + " "];
          return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && U(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
          })
        }, ATTR: function (e, n, i) {
          return function (o) {
            var r = t.attr(o, e);
            return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
          }
        }, CHILD: function (e, t, n, i, o) {
          var r = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
          return 1 === i && 0 === o ? function (e) {
            return !!e.parentNode
          } : function (t, n, l) {
            var u, c, d, f, p, h, g = r !== a ? "nextSibling" : "previousSibling", m = t.parentNode,
              v = s && t.nodeName.toLowerCase(), y = !l && !s, b = !1;
            if (m) {
              if (r) {
                for (; g;) {
                  for (f = t; f = f[g];) if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                  h = g = "only" === e && !h && "nextSibling"
                }
                return !0
              }
              if (h = [a ? m.firstChild : m.lastChild], a && y) {
                for (f = m, d = f[R] || (f[R] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === _ && u[1], b = p && u[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (b = p = 0) || h.pop();) if (1 === f.nodeType && ++b && f === t) {
                  c[e] = [_, p, b];
                  break
                }
              } else if (y && (f = t, d = f[R] || (f[R] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === _ && u[1], b = p), !1 === b) for (; (f = ++p && f && f[g] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (d = f[R] || (f[R] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), c[e] = [_, b]), f !== t));) ;
              return (b -= o) === i || b % i == 0 && b / i >= 0
            }
          }
        }, PSEUDO: function (e, n) {
          var o, r = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
          return r[R] ? r(n) : r.length > 1 ? (o = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
            for (var i, o = r(e, n), a = o.length; a--;) i = J(e, o[a]), e[i] = !(t[i] = o[a])
          }) : function (e) {
            return r(e, 0, o)
          }) : r
        }
      },
      pseudos: {
        not: i(function (e) {
          var t = [], n = [], o = k(e.replace(re, "$1"));
          return o[R] ? i(function (e, t, n, i) {
            for (var r, a = o(e, null, i, []), s = e.length; s--;) (r = a[s]) && (e[s] = !(t[s] = r))
          }) : function (e, i, r) {
            return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
          }
        }), has: i(function (e) {
          return function (n) {
            return t(e, n).length > 0
          }
        }), contains: i(function (e) {
          return e = e.replace(ve, ye), function (t) {
            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
          }
        }), lang: i(function (e) {
          return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(), function (t) {
            var n;
            do {
              if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
            } while ((t = t.parentNode) && 1 === t.nodeType);
            return !1
          }
        }), target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        }, root: function (e) {
          return e === I
        }, focus: function (e) {
          return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        }, enabled: s(!1), disabled: s(!0), checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        }, selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
        }, empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0
        }, parent: function (e) {
          return !w.pseudos.empty(e)
        }, header: function (e) {
          return pe.test(e.nodeName)
        }, input: function (e) {
          return fe.test(e.nodeName)
        }, button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        }, text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
        }, first: l(function () {
          return [0]
        }), last: l(function (e, t) {
          return [t - 1]
        }), eq: l(function (e, t, n) {
          return [n < 0 ? n + t : n]
        }), even: l(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e
        }), odd: l(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e
        }), lt: l(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
          return e
        }), gt: l(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
          return e
        })
      }
    }, w.pseudos.nth = w.pseudos.eq;
    for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) w.pseudos[b] = function (e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e
      }
    }(b);
    for (b in{submit: !0, reset: !0}) w.pseudos[b] = function (e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }(b);
    return c.prototype = w.filters = w.pseudos, w.setFilters = new c, S = t.tokenize = function (e, n) {
      var i, o, r, a, s, l, u, c = B[e + " "];
      if (c) return n ? 0 : c.slice(0);
      for (s = e, l = [], u = w.preFilter; s;) {
        i && !(o = ae.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = se.exec(s)) && (i = o.shift(), r.push({
          value: i,
          type: o[0].replace(re, " ")
        }), s = s.slice(i.length));
        for (a in w.filter) !(o = de[a].exec(s)) || u[a] && !(o = u[a](o)) || (i = o.shift(), r.push({
          value: i,
          type: a,
          matches: o
        }), s = s.slice(i.length));
        if (!i) break
      }
      return n ? s.length : s ? t.error(e) : B(e, l).slice(0)
    }, k = t.compile = function (e, t) {
      var n, i = [], o = [], r = W[e + " "];
      if (!r) {
        for (t || (t = S(e)), n = t.length; n--;) r = v(t[n]), r[R] ? i.push(r) : o.push(r);
        r = W(e, y(o, i)), r.selector = e
      }
      return r
    }, N = t.select = function (e, t, n, i) {
      var o, r, a, s, l, c = "function" == typeof e && e, f = !i && S(e = c.selector || e);
      if (n = n || [], 1 === f.length) {
        if (r = f[0] = f[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && 9 === t.nodeType && L && w.relative[r[1].type]) {
          if (!(t = (w.find.ID(a.matches[0].replace(ve, ye), t) || [])[0])) return n;
          c && (t = t.parentNode), e = e.slice(r.shift().value.length)
        }
        for (o = de.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !w.relative[s = a.type]);) if ((l = w.find[s]) && (i = l(a.matches[0].replace(ve, ye), me.test(r[0].type) && u(t.parentNode) || t))) {
          if (r.splice(o, 1), !(e = i.length && d(r))) return Y.apply(n, i), n;
          break
        }
      }
      return (c || k(e, f))(i, t, !L, n, !t || me.test(e) && u(t.parentNode) || t), n
    }, x.sortStable = R.split("").sort(V).join("") === R, x.detectDuplicates = !!D, $(), x.sortDetached = o(function (e) {
      return 1 & e.compareDocumentPosition(A.createElement("fieldset"))
    }), o(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || r("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), x.attributes && o(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || r("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
    }), o(function (e) {
      return null == e.getAttribute("disabled")
    }) || r(Z, function (e, t, n) {
      var i;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    }), t
  }(e);
  he.find = be, he.expr = be.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = be.uniqueSort, he.text = be.getText, he.isXMLDoc = be.isXML, he.contains = be.contains, he.escapeSelector = be.escape;
  var xe = function (e, t, n) {
      for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
        if (o && he(e).is(n)) break;
        i.push(e)
      }
      return i
    }, we = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    }, Ce = he.expr.match.needsContext, Te = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    Se = /^.[^:#\[\.,]*$/;
  he.filter = function (e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? he.find.matchesSelector(i, e) ? [i] : [] : he.find.matches(e, he.grep(t, function (e) {
      return 1 === e.nodeType
    }))
  }, he.fn.extend({
    find: function (e) {
      var t, n, i = this.length, o = this;
      if ("string" != typeof e) return this.pushStack(he(e).filter(function () {
        for (t = 0; t < i; t++) if (he.contains(o[t], this)) return !0
      }));
      for (n = this.pushStack([]), t = 0; t < i; t++) he.find(e, o[t], n);
      return i > 1 ? he.uniqueSort(n) : n
    }, filter: function (e) {
      return this.pushStack(o(this, e || [], !1))
    }, not: function (e) {
      return this.pushStack(o(this, e || [], !0))
    }, is: function (e) {
      return !!o(this, "string" == typeof e && Ce.test(e) ? he(e) : e || [], !1).length
    }
  });
  var ke, Ne = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (he.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (n = n || ke, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ne.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Te.test(i[1]) && he.isPlainObject(t)) for (i in t) he.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this
      }
      return o = te.getElementById(i[2]), o && (this[0] = o, this.length = 1), this
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
  }).prototype = he.fn, ke = he(te);
  var Ee = /^(?:parents|prev(?:Until|All))/, je = {children: !0, contents: !0, next: !0, prev: !0};
  he.fn.extend({
    has: function (e) {
      var t = he(e, this), n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (he.contains(this, t[e])) return !0
      })
    }, closest: function (e, t) {
      var n, i = 0, o = this.length, r = [], a = "string" != typeof e && he(e);
      if (!Ce.test(e)) for (; i < o; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
        r.push(n);
        break
      }
      return this.pushStack(r.length > 1 ? he.uniqueSort(r) : r)
    }, index: function (e) {
      return e ? "string" == typeof e ? ae.call(he(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (e, t) {
      return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
    }, addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), he.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    }, parents: function (e) {
      return xe(e, "parentNode")
    }, parentsUntil: function (e, t, n) {
      return xe(e, "parentNode", n)
    }, next: function (e) {
      return r(e, "nextSibling")
    }, prev: function (e) {
      return r(e, "previousSibling")
    }, nextAll: function (e) {
      return xe(e, "nextSibling")
    }, prevAll: function (e) {
      return xe(e, "previousSibling")
    }, nextUntil: function (e, t, n) {
      return xe(e, "nextSibling", n)
    }, prevUntil: function (e, t, n) {
      return xe(e, "previousSibling", n)
    }, siblings: function (e) {
      return we((e.parentNode || {}).firstChild, e)
    }, children: function (e) {
      return we(e.firstChild)
    }, contents: function (e) {
      return e.contentDocument || he.merge([], e.childNodes)
    }
  }, function (e, t) {
    he.fn[e] = function (n, i) {
      var o = he.map(this, t, n);
      return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = he.filter(i, o)), this.length > 1 && (je[e] || he.uniqueSort(o), Ee.test(e) && o.reverse()), this.pushStack(o)
    }
  });
  var De = /[^\x20\t\r\n\f]+/g;
  he.Callbacks = function (e) {
    e = "string" == typeof e ? a(e) : he.extend({}, e);
    var t, n, i, o, r = [], s = [], l = -1, u = function () {
      for (o = e.once, i = t = !0; s.length; l = -1) for (n = s.shift(); ++l < r.length;) !1 === r[l].apply(n[0], n[1]) && e.stopOnFalse && (l = r.length, n = !1);
      e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
    }, c = {
      add: function () {
        return r && (n && !t && (l = r.length - 1, s.push(n)), function t(n) {
          he.each(n, function (n, i) {
            he.isFunction(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== he.type(i) && t(i)
          })
        }(arguments), n && !t && u()), this
      }, remove: function () {
        return he.each(arguments, function (e, t) {
          for (var n; (n = he.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= l && l--
        }), this
      }, has: function (e) {
        return e ? he.inArray(e, r) > -1 : r.length > 0
      }, empty: function () {
        return r && (r = []), this
      }, disable: function () {
        return o = s = [], r = n = "", this
      }, disabled: function () {
        return !r
      }, lock: function () {
        return o = s = [], n || t || (r = n = ""), this
      }, locked: function () {
        return !!o
      }, fireWith: function (e, n) {
        return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || u()), this
      }, fire: function () {
        return c.fireWith(this, arguments), this
      }, fired: function () {
        return !!i
      }
    };
    return c
  }, he.extend({
    Deferred: function (t) {
      var n = [["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2], ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]],
        i = "pending", o = {
          state: function () {
            return i
          }, always: function () {
            return r.done(arguments).fail(arguments), this
          }, catch: function (e) {
            return o.then(null, e)
          }, pipe: function () {
            var e = arguments;
            return he.Deferred(function (t) {
              he.each(n, function (n, i) {
                var o = he.isFunction(e[i[4]]) && e[i[4]];
                r[i[1]](function () {
                  var e = o && o.apply(this, arguments);
                  e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                })
              }), e = null
            }).promise()
          }, then: function (t, i, o) {
            function r(t, n, i, o) {
              return function () {
                var u = this, c = arguments, d = function () {
                  var e, d;
                  if (!(t < a)) {
                    if ((e = i.apply(u, c)) === n.promise()) throw new TypeError("Thenable self-resolution");
                    d = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(d) ? o ? d.call(e, r(a, n, s, o), r(a, n, l, o)) : (a++, d.call(e, r(a, n, s, o), r(a, n, l, o), r(a, n, s, n.notifyWith))) : (i !== s && (u = void 0, c = [e]), (o || n.resolveWith)(u, c))
                  }
                }, f = o ? d : function () {
                  try {
                    d()
                  } catch (e) {
                    he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, f.stackTrace), t + 1 >= a && (i !== l && (u = void 0, c = [e]), n.rejectWith(u, c))
                  }
                };
                t ? f() : (he.Deferred.getStackHook && (f.stackTrace = he.Deferred.getStackHook()), e.setTimeout(f))
              }
            }

            var a = 0;
            return he.Deferred(function (e) {
              n[0][3].add(r(0, e, he.isFunction(o) ? o : s, e.notifyWith)), n[1][3].add(r(0, e, he.isFunction(t) ? t : s)), n[2][3].add(r(0, e, he.isFunction(i) ? i : l))
            }).promise()
          }, promise: function (e) {
            return null != e ? he.extend(e, o) : o
          }
        }, r = {};
      return he.each(n, function (e, t) {
        var a = t[2], s = t[5];
        o[t[1]] = a.add, s && a.add(function () {
          i = s
        }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), r[t[0]] = function () {
          return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
        }, r[t[0] + "With"] = a.fireWith
      }), o.promise(r), t && t.call(r, r), r
    }, when: function (e) {
      var t = arguments.length, n = t, i = Array(n), o = ie.call(arguments), r = he.Deferred(), a = function (e) {
        return function (n) {
          i[e] = this, o[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || r.resolveWith(i, o)
        }
      };
      if (t <= 1 && (u(e, r.done(a(n)).resolve, r.reject), "pending" === r.state() || he.isFunction(o[n] && o[n].then))) return r.then();
      for (; n--;) u(o[n], a(n), r.reject);
      return r.promise()
    }
  });
  var $e = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  he.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && $e.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
  }, he.readyException = function (t) {
    e.setTimeout(function () {
      throw t
    })
  };
  var Ae = he.Deferred();
  he.fn.ready = function (e) {
    return Ae.then(e).catch(function (e) {
      he.readyException(e)
    }), this
  }, he.extend({
    isReady: !1, readyWait: 1, holdReady: function (e) {
      e ? he.readyWait++ : he.ready(!0)
    }, ready: function (e) {
      (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0, !0 !== e && --he.readyWait > 0 || Ae.resolveWith(te, [he]))
    }
  }), he.ready.then = Ae.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", c), e.addEventListener("load", c));
  var Ie = function (e, t, n, i, o, r, a) {
    var s = 0, l = e.length, u = null == n;
    if ("object" === he.type(n)) {
      o = !0;
      for (s in n) Ie(e, t, s, n[s], !0, r, a)
    } else if (void 0 !== i && (o = !0, he.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
        return u.call(he(e), n)
      })), t)) for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
    return o ? e : u ? t.call(e) : l ? t(e[0], n) : r
  }, Le = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };
  d.uid = 1, d.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, Le(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    }, set: function (e, t, n) {
      var i, o = this.cache(e);
      if ("string" == typeof t) o[he.camelCase(t)] = n; else for (i in t) o[he.camelCase(i)] = t[i];
      return o
    }, get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
    }, access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
    }, remove: function (e, t) {
      var n, i = e[this.expando];
      if (void 0 !== i) {
        if (void 0 !== t) {
          he.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in i ? [t] : t.match(De) || []), n = t.length;
          for (; n--;) delete i[t[n]]
        }
        (void 0 === t || he.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    }, hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !he.isEmptyObject(t)
    }
  };
  var qe = new d, Fe = new d, He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Oe = /[A-Z]/g;
  he.extend({
    hasData: function (e) {
      return Fe.hasData(e) || qe.hasData(e)
    }, data: function (e, t, n) {
      return Fe.access(e, t, n)
    }, removeData: function (e, t) {
      Fe.remove(e, t)
    }, _data: function (e, t, n) {
      return qe.access(e, t, n)
    }, _removeData: function (e, t) {
      qe.remove(e, t)
    }
  }), he.fn.extend({
    data: function (e, t) {
      var n, i, o, r = this[0], a = r && r.attributes;
      if (void 0 === e) {
        if (this.length && (o = Fe.get(r), 1 === r.nodeType && !qe.get(r, "hasDataAttrs"))) {
          for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = he.camelCase(i.slice(5)), p(r, i, o[i])));
          qe.set(r, "hasDataAttrs", !0)
        }
        return o
      }
      return "object" == typeof e ? this.each(function () {
        Fe.set(this, e)
      }) : Ie(this, function (t) {
        var n;
        if (r && void 0 === t) {
          if (void 0 !== (n = Fe.get(r, e))) return n;
          if (void 0 !== (n = p(r, e))) return n
        } else this.each(function () {
          Fe.set(this, e, t)
        })
      }, null, t, arguments.length > 1, null, !0)
    }, removeData: function (e) {
      return this.each(function () {
        Fe.remove(this, e)
      })
    }
  }), he.extend({
    queue: function (e, t, n) {
      var i;
      if (e) return t = (t || "fx") + "queue", i = qe.get(e, t), n && (!i || he.isArray(n) ? i = qe.access(e, t, he.makeArray(n)) : i.push(n)), i || []
    }, dequeue: function (e, t) {
      t = t || "fx";
      var n = he.queue(e, t), i = n.length, o = n.shift(), r = he._queueHooks(e, t), a = function () {
        he.dequeue(e, t)
      };
      "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
    }, _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return qe.get(e, n) || qe.access(e, n, {
        empty: he.Callbacks("once memory").add(function () {
          qe.remove(e, [t + "queue", n])
        })
      })
    }
  }), he.fn.extend({
    queue: function (e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = he.queue(this, e, t);
        he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
      })
    }, dequeue: function (e) {
      return this.each(function () {
        he.dequeue(this, e)
      })
    }, clearQueue: function (e) {
      return this.queue(e || "fx", [])
    }, promise: function (e, t) {
      var n, i = 1, o = he.Deferred(), r = this, a = this.length, s = function () {
        --i || o.resolveWith(r, [r])
      };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = qe.get(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
      return s(), o.promise(t)
    }
  });
  var Re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Pe = new RegExp("^(?:([+-])=|)(" + Re + ")([a-z%]*)$", "i"),
    _e = ["Top", "Right", "Bottom", "Left"], Me = function (e, t) {
      return e = t || e, "none" === e.style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
    }, Ue = function (e, t, n, i) {
      var o, r, a = {};
      for (r in t) a[r] = e.style[r], e.style[r] = t[r];
      o = n.apply(e, i || []);
      for (r in t) e.style[r] = a[r];
      return o
    }, Be = {};
  he.fn.extend({
    show: function () {
      return m(this, !0)
    }, hide: function () {
      return m(this)
    }, toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        Me(this) ? he(this).show() : he(this).hide()
      })
    }
  });
  var We = /^(?:checkbox|radio)$/i, Ve = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, ze = /^$|\/(?:java|ecma)script/i, Xe = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td;
  var Qe = /<|&#?\w+;/;
  !function () {
    var e = te.createDocumentFragment(), t = e.appendChild(te.createElement("div")), n = te.createElement("input");
    n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), fe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
  }();
  var Ge = te.documentElement, Ye = /^key/, Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Je = /^([^.]*)(?:\.(.+)|)/;
  he.event = {
    global: {}, add: function (e, t, n, i, o) {
      var r, a, s, l, u, c, d, f, p, h, g, m = qe.get(e);
      if (m) for (n.handler && (r = n, n = r.handler, o = r.selector), o && he.find.matchesSelector(Ge, o), n.guid || (n.guid = he.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function (t) {
        return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
      }), t = (t || "").match(De) || [""], u = t.length; u--;) s = Je.exec(t[u]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p && (d = he.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = he.event.special[p] || {}, c = he.extend({
        type: p,
        origType: g,
        data: i,
        handler: n,
        guid: n.guid,
        selector: o,
        needsContext: o && he.expr.match.needsContext.test(o),
        namespace: h.join(".")
      }, r), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, h, a) || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, c) : f.push(c), he.event.global[p] = !0)
    }, remove: function (e, t, n, i, o) {
      var r, a, s, l, u, c, d, f, p, h, g, m = qe.hasData(e) && qe.get(e);
      if (m && (l = m.events)) {
        for (t = (t || "").match(De) || [""], u = t.length; u--;) if (s = Je.exec(t[u]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
          for (d = he.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = f.length; r--;) c = f[r], !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(r, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
          a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || he.removeEvent(e, p, m.handle), delete l[p])
        } else for (p in l) he.event.remove(e, p + t[u], n, i, !0);
        he.isEmptyObject(l) && qe.remove(e, "handle events")
      }
    }, dispatch: function (e) {
      var t, n, i, o, r, a, s = he.event.fix(e), l = new Array(arguments.length),
        u = (qe.get(this, "events") || {})[s.type] || [], c = he.event.special[s.type] || {};
      for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
        for (a = he.event.handlers.call(this, s, u), t = 0; (o = a[t++]) && !s.isPropagationStopped();) for (s.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (i = ((he.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, s), s.result
      }
    }, handlers: function (e, t) {
      var n, i, o, r, a, s = [], l = t.delegateCount, u = e.target;
      if (l && u.nodeType && !("click" === e.type && e.button >= 1)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
        for (r = [], a = {}, n = 0; n < l; n++) i = t[n], o = i.selector + " ", void 0 === a[o] && (a[o] = i.needsContext ? he(o, this).index(u) > -1 : he.find(o, this, null, [u]).length), a[o] && r.push(i);
        r.length && s.push({elem: u, handlers: r})
      }
      return u = this, l < t.length && s.push({elem: u, handlers: t.slice(l)}), s
    }, addProp: function (e, t) {
      Object.defineProperty(he.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: he.isFunction(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent)
        } : function () {
          if (this.originalEvent) return this.originalEvent[e]
        },
        set: function (t) {
          Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
        }
      })
    }, fix: function (e) {
      return e[he.expando] ? e : new he.Event(e)
    }, special: {
      load: {noBubble: !0}, focus: {
        trigger: function () {
          if (this !== C() && this.focus) return this.focus(), !1
        }, delegateType: "focusin"
      }, blur: {
        trigger: function () {
          if (this === C() && this.blur) return this.blur(), !1
        }, delegateType: "focusout"
      }, click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && he.nodeName(this, "input")) return this.click(), !1
        }, _default: function (e) {
          return he.nodeName(e.target, "a")
        }
      }, beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, he.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  }, he.Event = function (e, t) {
    return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? x : w, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), void(this[he.expando] = !0)) : new he.Event(e, t)
  }, he.Event.prototype = {
    constructor: he.Event,
    isDefaultPrevented: w,
    isPropagationStopped: w,
    isImmediatePropagationStopped: w,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = x, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = x, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = x, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, he.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    char: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function (e) {
      var t = e.button;
      return null == e.which && Ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
    }
  }, he.event.addProp), he.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, t) {
    he.event.special[e] = {
      delegateType: t, bindType: t, handle: function (e) {
        var n, i = this, o = e.relatedTarget, r = e.handleObj;
        return o && (o === i || he.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
      }
    }
  }), he.fn.extend({
    on: function (e, t, n, i) {
      return T(this, e, t, n, i)
    }, one: function (e, t, n, i) {
      return T(this, e, t, n, i, 1)
    }, off: function (e, t, n) {
      var i, o;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, he(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" == typeof e) {
        for (o in e) this.off(o, t, e[o]);
        return this
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = w), this.each(function () {
        he.event.remove(this, e, n, t)
      })
    }
  });
  var Ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    et = /<script|<style|<link/i, tt = /checked\s*(?:[^=]|=\s*.checked.)/i, nt = /^true\/(.*)/,
    it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  he.extend({
    htmlPrefilter: function (e) {
      return e.replace(Ze, "<$1></$2>")
    }, clone: function (e, t, n) {
      var i, o, r, a, s = e.cloneNode(!0), l = he.contains(e.ownerDocument, e);
      if (!(fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e))) for (a = v(s), r = v(e), i = 0, o = r.length; i < o; i++) j(r[i], a[i]);
      if (t) if (n) for (r = r || v(e), a = a || v(s), i = 0, o = r.length; i < o; i++) E(r[i], a[i]); else E(e, s);
      return a = v(s, "script"), a.length > 0 && y(a, !l && v(e, "script")), s
    }, cleanData: function (e) {
      for (var t, n, i, o = he.event.special, r = 0; void 0 !== (n = e[r]); r++) if (Le(n)) {
        if (t = n[qe.expando]) {
          if (t.events) for (i in t.events) o[i] ? he.event.remove(n, i) : he.removeEvent(n, i, t.handle);
          n[qe.expando] = void 0
        }
        n[Fe.expando] && (n[Fe.expando] = void 0)
      }
    }
  }), he.fn.extend({
    detach: function (e) {
      return $(this, e, !0)
    }, remove: function (e) {
      return $(this, e)
    }, text: function (e) {
      return Ie(this, function (e) {
        return void 0 === e ? he.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    }, append: function () {
      return D(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          S(this, e).appendChild(e)
        }
      })
    }, prepend: function () {
      return D(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = S(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    }, before: function () {
      return D(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    }, after: function () {
      return D(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    }, empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(v(e, !1)), e.textContent = "");
      return this
    }, clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return he.clone(this, e, t)
      })
    }, html: function (e) {
      return Ie(this, function (e) {
        var t = this[0] || {}, n = 0, i = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !et.test(e) && !Xe[(Ve.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = he.htmlPrefilter(e);
          try {
            for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (he.cleanData(v(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {
          }
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    }, replaceWith: function () {
      var e = [];
      return D(this, arguments, function (t) {
        var n = this.parentNode;
        he.inArray(this, e) < 0 && (he.cleanData(v(this)), n && n.replaceChild(t, this))
      }, e)
    }
  }), he.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    he.fn[e] = function (e) {
      for (var n, i = [], o = he(e), r = o.length - 1, a = 0; a <= r; a++) n = a === r ? this : this.clone(!0), he(o[a])[t](n), re.apply(i, n.get());
      return this.pushStack(i)
    }
  });
  var ot = /^margin/, rt = new RegExp("^(" + Re + ")(?!px)[a-z%]+$", "i"), at = function (t) {
    var n = t.ownerDocument.defaultView;
    return n && n.opener || (n = e), n.getComputedStyle(t)
  };
  !function () {
    function t() {
      if (s) {
        s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ge.appendChild(a);
        var t = e.getComputedStyle(s);
        n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", o = "4px" === t.marginRight, Ge.removeChild(a), s = null
      }
    }

    var n, i, o, r, a = te.createElement("div"), s = te.createElement("div");
    s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", fe.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), he.extend(fe, {
      pixelPosition: function () {
        return t(), n
      }, boxSizingReliable: function () {
        return t(), i
      }, pixelMarginRight: function () {
        return t(), o
      }, reliableMarginLeft: function () {
        return t(), r
      }
    }))
  }();
  var st = /^(none|table(?!-c[ea]).+)/, lt = {position: "absolute", visibility: "hidden", display: "block"},
    ut = {letterSpacing: "0", fontWeight: "400"}, ct = ["Webkit", "Moz", "ms"], dt = te.createElement("div").style;
  he.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = A(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {float: "cssFloat"},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o, r, a, s = he.camelCase(t), l = e.style;
        return t = he.cssProps[s] || (he.cssProps[s] = L(s) || s), a = he.cssHooks[t] || he.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : l[t] : (r = typeof n, "string" === r && (o = Pe.exec(n)) && o[1] && (n = h(e, t, o), r = "number"), void(null != n && n === n && ("number" === r && (n += o && o[3] || (he.cssNumber[s] ? "" : "px")), fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n))))
      }
    },
    css: function (e, t, n, i) {
      var o, r, a, s = he.camelCase(t);
      return t = he.cssProps[s] || (he.cssProps[s] = L(s) || s), a = he.cssHooks[t] || he.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = A(e, t, i)), "normal" === o && t in ut && (o = ut[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
    }
  }), he.each(["height", "width"], function (e, t) {
    he.cssHooks[t] = {
      get: function (e, n, i) {
        if (n) return !st.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? H(e, t, i) : Ue(e, lt, function () {
          return H(e, t, i)
        })
      }, set: function (e, n, i) {
        var o, r = i && at(e), a = i && F(e, t, i, "border-box" === he.css(e, "boxSizing", !1, r), r);
        return a && (o = Pe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = he.css(e, t)), q(e, n, a)
      }
    }
  }), he.cssHooks.marginLeft = I(fe.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(A(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {marginLeft: 0}, function () {
      return e.getBoundingClientRect().left
    })) + "px"
  }), he.each({margin: "", padding: "", border: "Width"}, function (e, t) {
    he.cssHooks[e + t] = {
      expand: function (n) {
        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + _e[i] + t] = r[i] || r[i - 2] || r[0];
        return o
      }
    },
    ot.test(e) || (he.cssHooks[e + t].set = q)
  }), he.fn.extend({
    css: function (e, t) {
      return Ie(this, function (e, t, n) {
        var i, o, r = {}, a = 0;
        if (he.isArray(t)) {
          for (i = at(e), o = t.length; a < o; a++) r[t[a]] = he.css(e, t[a], !1, i);
          return r
        }
        return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
      }, e, t, arguments.length > 1)
    }
  }), he.Tween = O, O.prototype = {
    constructor: O, init: function (e, t, n, i, o, r) {
      this.elem = e, this.prop = n, this.easing = o || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (he.cssNumber[n] ? "" : "px")
    }, cur: function () {
      var e = O.propHooks[this.prop];
      return e && e.get ? e.get(this) : O.propHooks._default.get(this)
    }, run: function (e) {
      var t, n = O.propHooks[this.prop];
      return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
    }
  }, O.prototype.init.prototype = O.prototype, O.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
      }, set: function (e) {
        he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, he.easing = {
    linear: function (e) {
      return e
    }, swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }, _default: "swing"
  }, he.fx = O.prototype.init, he.fx.step = {};
  var ft, pt, ht = /^(?:toggle|show|hide)$/, gt = /queueHooks$/;
  he.Animation = he.extend(W, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return h(n.elem, e, Pe.exec(t), n), n
      }]
    }, tweener: function (e, t) {
      he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(De);
      for (var n, i = 0, o = e.length; i < o; i++) n = e[i], W.tweeners[n] = W.tweeners[n] || [], W.tweeners[n].unshift(t)
    }, prefilters: [U], prefilter: function (e, t) {
      t ? W.prefilters.unshift(e) : W.prefilters.push(e)
    }
  }), he.speed = function (e, t, n) {
    var i = e && "object" == typeof e ? he.extend({}, e) : {
      complete: n || !n && t || he.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !he.isFunction(t) && t
    };
    return he.fx.off || te.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in he.fx.speeds ? i.duration = he.fx.speeds[i.duration] : i.duration = he.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      he.isFunction(i.old) && i.old.call(this), i.queue && he.dequeue(this, i.queue)
    }, i
  }, he.fn.extend({
    fadeTo: function (e, t, n, i) {
      return this.filter(Me).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
    }, animate: function (e, t, n, i) {
      var o = he.isEmptyObject(e), r = he.speed(t, n, i), a = function () {
        var t = W(this, he.extend({}, e), r);
        (o || qe.get(this, "finish")) && t.stop(!0)
      };
      return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
    }, stop: function (e, t, n) {
      var i = function (e) {
        var t = e.stop;
        delete e.stop, t(n)
      };
      return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0, o = null != e && e + "queueHooks", r = he.timers, a = qe.get(this);
        if (o) a[o] && a[o].stop && i(a[o]); else for (o in a) a[o] && a[o].stop && gt.test(o) && i(a[o]);
        for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
        !t && n || he.dequeue(this, e)
      })
    }, finish: function (e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t, n = qe.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = he.timers, a = i ? i.length : 0;
        for (n.finish = !0, he.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
        for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
        delete n.finish
      })
    }
  }), he.each(["toggle", "show", "hide"], function (e, t) {
    var n = he.fn[t];
    he.fn[t] = function (e, i, o) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(_(t, !0), e, i, o)
    }
  }), he.each({
    slideDown: _("show"),
    slideUp: _("hide"),
    slideToggle: _("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function (e, t) {
    he.fn[e] = function (e, n, i) {
      return this.animate(t, e, n, i)
    }
  }), he.timers = [], he.fx.tick = function () {
    var e, t = 0, n = he.timers;
    for (ft = he.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || he.fx.stop(), ft = void 0
  }, he.fx.timer = function (e) {
    he.timers.push(e), e() ? he.fx.start() : he.timers.pop()
  }, he.fx.interval = 13, he.fx.start = function () {
    pt || (pt = e.requestAnimationFrame ? e.requestAnimationFrame(R) : e.setInterval(he.fx.tick, he.fx.interval))
  }, he.fx.stop = function () {
    e.cancelAnimationFrame ? e.cancelAnimationFrame(pt) : e.clearInterval(pt), pt = null
  }, he.fx.speeds = {slow: 600, fast: 200, _default: 400}, he.fn.delay = function (t, n) {
    return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
      var o = e.setTimeout(n, t);
      i.stop = function () {
        e.clearTimeout(o)
      }
    })
  }, function () {
    var e = te.createElement("input"), t = te.createElement("select"), n = t.appendChild(te.createElement("option"));
    e.type = "checkbox", fe.checkOn = "" !== e.value, fe.optSelected = n.selected, e = te.createElement("input"), e.value = "t", e.type = "radio", fe.radioValue = "t" === e.value
  }();
  var mt, vt = he.expr.attrHandle;
  he.fn.extend({
    attr: function (e, t) {
      return Ie(this, he.attr, e, t, arguments.length > 1)
    }, removeAttr: function (e) {
      return this.each(function () {
        he.removeAttr(this, e)
      })
    }
  }), he.extend({
    attr: function (e, t, n) {
      var i, o, r = e.nodeType;
      if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? he.prop(e, t, n) : (1 === r && he.isXMLDoc(e) || (o = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = he.find.attr(e, t), null == i ? void 0 : i))
    }, attrHooks: {
      type: {
        set: function (e, t) {
          if (!fe.radioValue && "radio" === t && he.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    }, removeAttr: function (e, t) {
      var n, i = 0, o = t && t.match(De);
      if (o && 1 === e.nodeType) for (; n = o[i++];) e.removeAttribute(n)
    }
  }), mt = {
    set: function (e, t, n) {
      return !1 === t ? he.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, he.each(he.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = vt[t] || he.find.attr;
    vt[t] = function (e, t, i) {
      var o, r, a = t.toLowerCase();
      return i || (r = vt[a], vt[a] = o, o = null != n(e, t, i) ? a : null, vt[a] = r), o
    }
  });
  var yt = /^(?:input|select|textarea|button)$/i, bt = /^(?:a|area)$/i;
  he.fn.extend({
    prop: function (e, t) {
      return Ie(this, he.prop, e, t, arguments.length > 1)
    }, removeProp: function (e) {
      return this.each(function () {
        delete this[he.propFix[e] || e]
      })
    }
  }), he.extend({
    prop: function (e, t, n) {
      var i, o, r = e.nodeType;
      if (3 !== r && 8 !== r && 2 !== r) return 1 === r && he.isXMLDoc(e) || (t = he.propFix[t] || t, o = he.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
    }, propHooks: {
      tabIndex: {
        get: function (e) {
          var t = he.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : yt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    }, propFix: {for: "htmlFor", class: "className"}
  }), fe.optSelected || (he.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    }, set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    he.propFix[this.toLowerCase()] = this
  }), he.fn.extend({
    addClass: function (e) {
      var t, n, i, o, r, a, s, l = 0;
      if (he.isFunction(e)) return this.each(function (t) {
        he(this).addClass(e.call(this, t, z(this)))
      });
      if ("string" == typeof e && e) for (t = e.match(De) || []; n = this[l++];) if (o = z(n), i = 1 === n.nodeType && " " + V(o) + " ") {
        for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
        s = V(i), o !== s && n.setAttribute("class", s)
      }
      return this
    }, removeClass: function (e) {
      var t, n, i, o, r, a, s, l = 0;
      if (he.isFunction(e)) return this.each(function (t) {
        he(this).removeClass(e.call(this, t, z(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e) for (t = e.match(De) || []; n = this[l++];) if (o = z(n), i = 1 === n.nodeType && " " + V(o) + " ") {
        for (a = 0; r = t[a++];) for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
        s = V(i), o !== s && n.setAttribute("class", s)
      }
      return this
    }, toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function (n) {
        he(this).toggleClass(e.call(this, n, z(this), t), t)
      }) : this.each(function () {
        var t, i, o, r;
        if ("string" === n) for (i = 0, o = he(this), r = e.match(De) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || (t = z(this), t && qe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : qe.get(this, "__className__") || ""))
      })
    }, hasClass: function (e) {
      var t, n, i = 0;
      for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + V(z(n)) + " ").indexOf(t) > -1) return !0;
      return !1
    }
  });
  var xt = /\r/g;
  he.fn.extend({
    val: function (e) {
      var t, n, i, o = this[0];
      return arguments.length ? (i = he.isFunction(e), this.each(function (n) {
        var o;
        1 === this.nodeType && (o = i ? e.call(this, n, he(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : he.isArray(o) && (o = he.map(o, function (e) {
          return null == e ? "" : e + ""
        })), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
      })) : o ? (t = he.valHooks[o.type] || he.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n)) : void 0
    }
  }), he.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = he.find.attr(e, "value");
          return null != t ? t : V(he.text(e))
        }
      }, select: {
        get: function (e) {
          var t, n, i, o = e.options, r = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
            l = a ? r + 1 : o.length;
          for (i = r < 0 ? l : a ? r : 0; i < l; i++) if (n = o[i], (n.selected || i === r) && !n.disabled && (!n.parentNode.disabled || !he.nodeName(n.parentNode, "optgroup"))) {
            if (t = he(n).val(), a) return t;
            s.push(t)
          }
          return s
        }, set: function (e, t) {
          for (var n, i, o = e.options, r = he.makeArray(t), a = o.length; a--;) i = o[a], (i.selected = he.inArray(he.valHooks.option.get(i), r) > -1) && (n = !0);
          return n || (e.selectedIndex = -1), r
        }
      }
    }
  }), he.each(["radio", "checkbox"], function () {
    he.valHooks[this] = {
      set: function (e, t) {
        if (he.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1
      }
    }, fe.checkOn || (he.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  });
  var wt = /^(?:focusinfocus|focusoutblur)$/;
  he.extend(he.event, {
    trigger: function (t, n, i, o) {
      var r, a, s, l, u, c, d, f = [i || te], p = ue.call(t, "type") ? t.type : t,
        h = ue.call(t, "namespace") ? t.namespace.split(".") : [];
      if (a = s = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(p + he.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, t = t[he.expando] ? t : new he.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : he.makeArray(n, [t]), d = he.event.special[p] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
        if (!o && !d.noBubble && !he.isWindow(i)) {
          for (l = d.delegateType || p, wt.test(l + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
          s === (i.ownerDocument || te) && f.push(s.defaultView || s.parentWindow || e)
        }
        for (r = 0; (a = f[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : d.bindType || p, c = (qe.get(a, "events") || {})[t.type] && qe.get(a, "handle"), c && c.apply(a, n), (c = u && a[u]) && c.apply && Le(a) && (t.result = c.apply(a, n), !1 === t.result && t.preventDefault());
        return t.type = p, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), n) || !Le(i) || u && he.isFunction(i[p]) && !he.isWindow(i) && (s = i[u], s && (i[u] = null), he.event.triggered = p, i[p](), he.event.triggered = void 0, s && (i[u] = s)), t.result
      }
    }, simulate: function (e, t, n) {
      var i = he.extend(new he.Event, n, {type: e, isSimulated: !0});
      he.event.trigger(i, null, t)
    }
  }), he.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        he.event.trigger(e, t, this)
      })
    }, triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return he.event.trigger(e, t, n, !0)
    }
  }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    he.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), he.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }), fe.focusin = "onfocusin" in e, fe.focusin || he.each({focus: "focusin", blur: "focusout"}, function (e, t) {
    var n = function (e) {
      he.event.simulate(t, e.target, he.event.fix(e))
    };
    he.event.special[t] = {
      setup: function () {
        var i = this.ownerDocument || this, o = qe.access(i, t);
        o || i.addEventListener(e, n, !0), qe.access(i, t, (o || 0) + 1)
      }, teardown: function () {
        var i = this.ownerDocument || this, o = qe.access(i, t) - 1;
        o ? qe.access(i, t, o) : (i.removeEventListener(e, n, !0), qe.remove(i, t))
      }
    }
  });
  var Ct = e.location, Tt = he.now(), St = /\?/;
  he.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = (new e.DOMParser).parseFromString(t, "text/xml")
    } catch (e) {
      n = void 0
    }
    return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n
  };
  var kt = /\[\]$/, Nt = /\r?\n/g, Et = /^(?:submit|button|image|reset|file)$/i,
    jt = /^(?:input|select|textarea|keygen)/i;
  he.param = function (e, t) {
    var n, i = [], o = function (e, t) {
      var n = he.isFunction(t) ? t() : t;
      i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
    };
    if (he.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function () {
      o(this.name, this.value)
    }); else for (n in e) X(n, e[n], t, o);
    return i.join("&")
  }, he.fn.extend({
    serialize: function () {
      return he.param(this.serializeArray())
    }, serializeArray: function () {
      return this.map(function () {
        var e = he.prop(this, "elements");
        return e ? he.makeArray(e) : this
      }).filter(function () {
        var e = this.type;
        return this.name && !he(this).is(":disabled") && jt.test(this.nodeName) && !Et.test(e) && (this.checked || !We.test(e))
      }).map(function (e, t) {
        var n = he(this).val();
        return null == n ? null : he.isArray(n) ? he.map(n, function (e) {
          return {name: t.name, value: e.replace(Nt, "\r\n")}
        }) : {name: t.name, value: n.replace(Nt, "\r\n")}
      }).get()
    }
  });
  var Dt = /%20/g, $t = /#.*$/, At = /([?&])_=[^&]*/, It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, qt = /^(?:GET|HEAD)$/, Ft = /^\/\//, Ht = {},
    Ot = {}, Rt = "*/".concat("*"), Pt = te.createElement("a");
  Pt.href = Ct.href, he.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ct.href,
      type: "GET",
      isLocal: Lt.test(Ct.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Rt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
      responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
      converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": he.parseXML},
      flatOptions: {url: !0, context: !0}
    },
    ajaxSetup: function (e, t) {
      return t ? Y(Y(e, he.ajaxSettings), t) : Y(he.ajaxSettings, e)
    },
    ajaxPrefilter: Q(Ht),
    ajaxTransport: Q(Ot),
    ajax: function (t, n) {
      function i(t, n, i, s) {
        var u, f, p, x, w, C = n;
        c || (c = !0, l && e.clearTimeout(l), o = void 0, a = s || "", T.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (x = K(h, T, i)), x = J(h, x, T, u), u ? (h.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (he.lastModified[r] = w), (w = T.getResponseHeader("etag")) && (he.etag[r] = w)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, f = x.data, p = x.error, u = !p)) : (p = C, !t && C || (C = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || C) + "", u ? v.resolveWith(g, [f, C, T]) : v.rejectWith(g, [T, C, p]), T.statusCode(b), b = void 0, d && m.trigger(u ? "ajaxSuccess" : "ajaxError", [T, h, u ? f : p]), y.fireWith(g, [T, C]), d && (m.trigger("ajaxComplete", [T, h]), --he.active || he.event.trigger("ajaxStop")))
      }

      "object" == typeof t && (n = t, t = void 0), n = n || {};
      var o, r, a, s, l, u, c, d, f, p, h = he.ajaxSetup({}, n), g = h.context || h,
        m = h.context && (g.nodeType || g.jquery) ? he(g) : he.event, v = he.Deferred(),
        y = he.Callbacks("once memory"), b = h.statusCode || {}, x = {}, w = {}, C = "canceled", T = {
          readyState: 0, getResponseHeader: function (e) {
            var t;
            if (c) {
              if (!s) for (s = {}; t = It.exec(a);) s[t[1].toLowerCase()] = t[2];
              t = s[e.toLowerCase()]
            }
            return null == t ? null : t
          }, getAllResponseHeaders: function () {
            return c ? a : null
          }, setRequestHeader: function (e, t) {
            return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
          }, overrideMimeType: function (e) {
            return null == c && (h.mimeType = e), this
          }, statusCode: function (e) {
            var t;
            if (e) if (c) T.always(e[T.status]); else for (t in e) b[t] = [b[t], e[t]];
            return this
          }, abort: function (e) {
            var t = e || C;
            return o && o.abort(t), i(0, t), this
          }
        };
      if (v.promise(T), h.url = ((t || h.url || Ct.href) + "").replace(Ft, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(De) || [""], null == h.crossDomain) {
        u = te.createElement("a");
        try {
          u.href = h.url, u.href = u.href, h.crossDomain = Pt.protocol + "//" + Pt.host != u.protocol + "//" + u.host
        } catch (e) {
          h.crossDomain = !0
        }
      }
      if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), G(Ht, h, n, T), c) return T;
      d = he.event && h.global, d && 0 == he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !qt.test(h.type), r = h.url.replace($t, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Dt, "+")) : (p = h.url.slice(r.length), h.data && (r += (St.test(r) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (r = r.replace(At, "$1"), p = (St.test(r) ? "&" : "?") + "_=" + Tt++ + p), h.url = r + p), h.ifModified && (he.lastModified[r] && T.setRequestHeader("If-Modified-Since", he.lastModified[r]), he.etag[r] && T.setRequestHeader("If-None-Match", he.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : h.accepts["*"]);
      for (f in h.headers) T.setRequestHeader(f, h.headers[f]);
      if (h.beforeSend && (!1 === h.beforeSend.call(g, T, h) || c)) return T.abort();
      if (C = "abort", y.add(h.complete), T.done(h.success), T.fail(h.error), o = G(Ot, h, n, T)) {
        if (T.readyState = 1, d && m.trigger("ajaxSend", [T, h]), c) return T;
        h.async && h.timeout > 0 && (l = e.setTimeout(function () {
          T.abort("timeout")
        }, h.timeout));
        try {
          c = !1, o.send(x, i)
        } catch (e) {
          if (c) throw e;
          i(-1, e)
        }
      } else i(-1, "No Transport");
      return T
    },
    getJSON: function (e, t, n) {
      return he.get(e, t, n, "json")
    },
    getScript: function (e, t) {
      return he.get(e, void 0, t, "script")
    }
  }), he.each(["get", "post"], function (e, t) {
    he[t] = function (e, n, i, o) {
      return he.isFunction(n) && (o = o || i, i = n, n = void 0), he.ajax(he.extend({
        url: e,
        type: t,
        dataType: o,
        data: n,
        success: i
      }, he.isPlainObject(e) && e))
    }
  }), he._evalUrl = function (e) {
    return he.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
  }, he.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
        return e
      }).append(this)), this
    }, wrapInner: function (e) {
      return he.isFunction(e) ? this.each(function (t) {
        he(this).wrapInner(e.call(this, t))
      }) : this.each(function () {
        var t = he(this), n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    }, wrap: function (e) {
      var t = he.isFunction(e);
      return this.each(function (n) {
        he(this).wrapAll(t ? e.call(this, n) : e)
      })
    }, unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        he(this).replaceWith(this.childNodes)
      }), this
    }
  }), he.expr.pseudos.hidden = function (e) {
    return !he.expr.pseudos.visible(e)
  }, he.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, he.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest
    } catch (e) {
    }
  };
  var _t = {0: 200, 1223: 204}, Mt = he.ajaxSettings.xhr();
  fe.cors = !!Mt && "withCredentials" in Mt, fe.ajax = Mt = !!Mt, he.ajaxTransport(function (t) {
    var n, i;
    if (fe.cors || Mt && !t.crossDomain) return {
      send: function (o, r) {
        var a, s = t.xhr();
        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
        for (a in o) s.setRequestHeader(a, o[a]);
        n = function (e) {
          return function () {
            n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(_t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
          }
        }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
          4 === s.readyState && e.setTimeout(function () {
            n && i()
          })
        }, n = n("abort");
        try {
          s.send(t.hasContent && t.data || null)
        } catch (e) {
          if (n) throw e
        }
      }, abort: function () {
        n && n()
      }
    }
  }), he.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1)
  }), he.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
    contents: {script: /\b(?:java|ecma)script\b/},
    converters: {
      "text script": function (e) {
        return he.globalEval(e), e
      }
    }
  }), he.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), he.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, n;
      return {
        send: function (i, o) {
          t = he("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
            t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
          }), te.head.appendChild(t[0])
        }, abort: function () {
          n && n()
        }
      }
    }
  });
  var Ut = [], Bt = /(=)\?(?=&|$)|\?\?/;
  he.ajaxSetup({
    jsonp: "callback", jsonpCallback: function () {
      var e = Ut.pop() || he.expando + "_" + Tt++;
      return this[e] = !0, e
    }
  }), he.ajaxPrefilter("json jsonp", function (t, n, i) {
    var o, r, a,
      s = !1 !== t.jsonp && (Bt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(t.data) && "data");
    if (s || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Bt, "$1" + o) : !1 !== t.jsonp && (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
      return a || he.error(o + " was not called"), a[0]
    }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
      a = arguments
    }, i.always(function () {
      void 0 === r ? he(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Ut.push(o)), a && he.isFunction(r) && r(a[0]), a = r = void 0
    }), "script"
  }), fe.createHTMLDocument = function () {
    var e = te.implementation.createHTMLDocument("").body;
    return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
  }(), he.parseHTML = function (e, t, n) {
    if ("string" != typeof e) return [];
    "boolean" == typeof t && (n = t, t = !1);
    var i, o, r;
    return t || (fe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = te.location.href, t.head.appendChild(i)) : t = te), o = Te.exec(e), r = !n && [], o ? [t.createElement(o[1])] : (o = b([e], t, r), r && r.length && he(r).remove(), he.merge([], o.childNodes))
  }, he.fn.load = function (e, t, n) {
    var i, o, r, a = this, s = e.indexOf(" ");
    return s > -1 && (i = V(e.slice(s)), e = e.slice(0, s)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && he.ajax({
      url: e,
      type: o || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      r = arguments, a.html(i ? he("<div>").append(he.parseHTML(e)).find(i) : e)
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, r || [e.responseText, t, e])
      })
    }), this
  }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    he.fn[t] = function (e) {
      return this.on(t, e)
    }
  }), he.expr.pseudos.animated = function (e) {
    return he.grep(he.timers, function (t) {
      return e === t.elem
    }).length
  }, he.offset = {
    setOffset: function (e, t, n) {
      var i, o, r, a, s, l, u, c = he.css(e, "position"), d = he(e), f = {};
      "static" === c && (e.style.position = "relative"), s = d.offset(), r = he.css(e, "top"), l = he.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1, u ? (i = d.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : d.css(f)
    }
  }, he.fn.extend({
    offset: function (e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        he.offset.setOffset(this, e, t)
      });
      var t, n, i, o, r = this[0];
      return r ? r.getClientRects().length ? (i = r.getBoundingClientRect(), i.width || i.height ? (o = r.ownerDocument, n = Z(o), t = o.documentElement, {
        top: i.top + n.pageYOffset - t.clientTop,
        left: i.left + n.pageXOffset - t.clientLeft
      }) : i) : {top: 0, left: 0} : void 0
    }, position: function () {
      if (this[0]) {
        var e, t, n = this[0], i = {top: 0, left: 0};
        return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), he.nodeName(e[0], "html") || (i = e.offset()), i = {
          top: i.top + he.css(e[0], "borderTopWidth", !0),
          left: i.left + he.css(e[0], "borderLeftWidth", !0)
        }), {top: t.top - i.top - he.css(n, "marginTop", !0), left: t.left - i.left - he.css(n, "marginLeft", !0)}
      }
    }, offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
        return e || Ge
      })
    }
  }), he.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
    var n = "pageYOffset" === t;
    he.fn[e] = function (i) {
      return Ie(this, function (e, i, o) {
        var r = Z(e);
        return void 0 === o ? r ? r[t] : e[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o)
      }, e, i, arguments.length)
    }
  }), he.each(["top", "left"], function (e, t) {
    he.cssHooks[t] = I(fe.pixelPosition, function (e, n) {
      if (n) return n = A(e, t), rt.test(n) ? he(e).position()[t] + "px" : n
    })
  }), he.each({Height: "height", Width: "width"}, function (e, t) {
    he.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
      he.fn[i] = function (o, r) {
        var a = arguments.length && (n || "boolean" != typeof o), s = n || (!0 === o || !0 === r ? "margin" : "border");
        return Ie(this, function (t, n, o) {
          var r;
          return he.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? he.css(t, n, s) : he.style(t, n, o, s)
        }, t, a ? o : void 0, a)
      }
    })
  }), he.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n)
    }, unbind: function (e, t) {
      return this.off(e, null, t)
    }, delegate: function (e, t, n, i) {
      return this.on(t, e, n, i)
    }, undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  }), he.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
    return he
  });
  var Wt = e.jQuery, Vt = e.$;
  return he.noConflict = function (t) {
    return e.$ === he && (e.$ = Vt), t && e.jQuery === he && (e.jQuery = Wt), he
  }, t || (e.jQuery = e.$ = he), he
});
var Init = {secret: ""} + function (e) {
  "use strict";

  function t(t) {
    var i = e(this), o = i.data("bs.slideshow"), r = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
      a = "string" == typeof t ? t : r.slide;
    o || i.data("bs.slideshow", o = new n(this, r)), "number" == typeof t || a || r.interval && o.pause().cycle()
  }

  var n = function (t, n) {
    this.$element = e(t), this.options = n, this.$indicators = this.$element.find(".small"), this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null
  };
  n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !1
  }, n.prototype.slide = function (t, n) {
    var i = this.$element.find(".item.active"), o = n || this.getItemForDirection(t, i), r = this.interval,
      a = "next" == t ? "left" : "right", s = this;
    if (o.hasClass("active")) return this.sliding = !1;
    var l = o[0], u = e.Event("slide.bs.carousel", {relatedTarget: l, direction: a});
    if (this.$element.trigger(u), !u.isDefaultPrevented()) {
      if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var c = e(this.$indicators.children()[this.getItemIndex(o)]);
        c && c.addClass("active")
      }
      var d = e.Event("slid.bs.carousel", {relatedTarget: l, direction: a});
      return e.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), o[0].offsetWidth, i.addClass(a), o.addClass(a), i.one("bsTransitionEnd", function () {
        o.removeClass([t, a].join(" ")).addClass("active"), i.removeClass(["active", a].join(" ")), s.sliding = !1, setTimeout(function () {
          s.$element.trigger(d)
        }, 0)
      }).emulateTransitionEnd(Carousel.TRANSITION_DURATION)) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)), r && this.cycle(), this
    }
  }, n.prototype.cycle = function (t) {
    return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
  }, n.prototype.next = function () {
    if (!this.sliding) return this.slide("next")
  }, n.prototype.pause = function (e) {
    return e || (this.paused = !0), this.interval = clearInterval(this.interval), this
  }, n.prototype.getItemIndex = function (e) {
    return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
  }, n.prototype.getItemForDirection = function (e, t) {
    var n = this.getItemIndex(t);
    if (("prev" == e && 0 === n || "next" == e && n == this.$items.length - 1) && !this.options.wrap) return t;
    var i = "prev" == e ? -1 : 1, o = (n + i) % this.$items.length;
    return this.$items.eq(o)
  }, e.fn.slideShow = t
}(jQuery);
!function (e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports && "function" == typeof require ? require("jquery") : jQuery)
}(function (e) {
  "use strict";

  function t(n, i) {
    var o = this;
    o.element = n, o.el = e(n), o.suggestions = [], o.badQueries = [], o.selectedIndex = -1, o.currentValue = o.element.value, o.timeoutId = null, o.cachedResponse = {}, o.onChangeTimeout = null, o.onChange = null, o.isLocal = !1, o.suggestionsContainer = null, o.noSuggestionsContainer = null, o.options = e.extend({}, t.defaults, i), o.classes = {
      selected: "autocomplete-selected",
      suggestion: "autocomplete-suggestion"
    }, o.hint = null, o.hintValue = "", o.selection = null, o.initialize(), o.setOptions(i)
  }

  function n(e, t, n) {
    return -1 !== e.value.toLowerCase().indexOf(n)
  }

  function i(t) {
    return "string" == typeof t ? e.parseJSON(t) : t
  }

  function o(e, t) {
    if (!t) return e.value;
    var n = "(" + a.escapeRegExChars(t) + ")";
    return e.value.replace(new RegExp(n, "gi"), "<strong>$1</strong>").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/&lt;(\/?strong)&gt;/g, "<$1>")
  }

  function r(e, t) {
    return '<div class="autocomplete-group">' + t + "</div>"
  }

  var a = function () {
    return {
      escapeRegExChars: function (e) {
        return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
      }, createNode: function (e) {
        var t = document.createElement("div");
        return t.className = e, t.style.position = "absolute", t.style.display = "none", t
      }
    }
  }(), s = {ESC: 27, TAB: 9, RETURN: 13, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40}, l = e.noop;
  t.utils = a, e.Autocomplete = t, t.defaults = {
    ajaxSettings: {},
    autoSelectFirst: !1,
    appendTo: "body",
    serviceUrl: null,
    lookup: null,
    onSelect: null,
    width: "auto",
    minChars: 1,
    maxHeight: 300,
    deferRequestBy: 0,
    params: {},
    formatResult: o,
    formatGroup: r,
    delimiter: null,
    zIndex: 9999,
    type: "GET",
    noCache: !1,
    onSearchStart: l,
    onSearchComplete: l,
    onSearchError: l,
    preserveInput: !1,
    containerClass: "autocomplete-suggestions",
    tabDisabled: !1,
    dataType: "text",
    currentRequest: null,
    triggerSelectOnValidInput: !0,
    preventBadQueries: !0,
    lookupFilter: n,
    paramName: "query",
    transformResult: i,
    showNoSuggestionNotice: !1,
    noSuggestionNotice: "No results",
    orientation: "bottom",
    forceFixPosition: !1
  }, t.prototype = {
    initialize: function () {
      var n, i = this, o = "." + i.classes.suggestion, r = i.classes.selected, a = i.options;
      i.element.setAttribute("autocomplete", "off"), i.noSuggestionsContainer = e('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0), i.suggestionsContainer = t.utils.createNode(a.containerClass), n = e(i.suggestionsContainer), n.appendTo(a.appendTo || "body"), "auto" !== a.width && n.css("width", a.width), n.on("mouseover.autocomplete", o, function () {
        i.activate(e(this).data("index"))
      }), n.on("mouseout.autocomplete", function () {
        i.selectedIndex = -1, n.children("." + r).removeClass(r)
      }), n.on("click.autocomplete", o, function () {
        i.select(e(this).data("index"))
      }), n.on("click.autocomplete", function () {
        clearTimeout(i.blurTimeoutId)
      }), i.fixPositionCapture = function () {
        i.visible && i.fixPosition()
      }, e(window).on("resize.autocomplete", i.fixPositionCapture), i.el.on("keydown.autocomplete", function (e) {
        i.onKeyPress(e)
      }), i.el.on("keyup.autocomplete", function (e) {
        i.onKeyUp(e)
      }), i.el.on("blur.autocomplete", function () {
        i.onBlur()
      }), i.el.on("focus.autocomplete", function () {
        i.onFocus()
      }), i.el.on("change.autocomplete", function (e) {
        i.onKeyUp(e)
      }), i.el.on("input.autocomplete", function (e) {
        i.onKeyUp(e)
      })
    }, onFocus: function () {
      var e = this
      ;e.fixPosition(), e.el.val().length >= e.options.minChars && e.onValueChange()
    }, onBlur: function () {
      var e = this;
      e.blurTimeoutId = setTimeout(function () {
        e.hide()
      }, 200)
    }, abortAjax: function () {
      var e = this;
      e.currentRequest && (e.currentRequest.abort(), e.currentRequest = null)
    }, setOptions: function (t) {
      var n = this, i = n.options;
      this.options = e.extend({}, i, t), n.isLocal = e.isArray(i.lookup), n.isLocal && (i.lookup = n.verifySuggestionsFormat(i.lookup)), i.orientation = n.validateOrientation(i.orientation, "bottom"), e(n.suggestionsContainer).css({
        "max-height": i.maxHeight + "px",
        width: i.width + "px",
        "z-index": i.zIndex
      })
    }, clearCache: function () {
      this.cachedResponse = {}, this.badQueries = []
    }, clear: function () {
      this.clearCache(), this.currentValue = "", this.suggestions = []
    }, disable: function () {
      var e = this;
      e.disabled = !0, clearTimeout(e.onChangeTimeout), e.abortAjax()
    }, enable: function () {
      this.disabled = !1
    }, fixPosition: function () {
      var t = this, n = e(t.suggestionsContainer), i = n.parent().get(0);
      if (i === document.body || t.options.forceFixPosition) {
        var o = t.options.orientation, r = n.outerHeight(), a = t.el.outerHeight(), s = t.el.offset(),
          l = {top: s.top, left: s.left};
        if ("auto" === o) {
          var u = e(window).height(), c = e(window).scrollTop(), d = -c + s.top - r, f = c + u - (s.top + a + r);
          o = Math.max(d, f) === d ? "top" : "bottom"
        }
        if (l.top += "top" === o ? -r : a, i !== document.body) {
          var p, h = n.css("opacity");
          t.visible || n.css("opacity", 0).show(), p = n.offsetParent().offset(), l.top -= p.top, l.left -= p.left, t.visible || n.css("opacity", h).hide()
        }
        "auto" === t.options.width && (l.width = t.el.outerWidth() + "px"), n.css(l)
      }
    }, isCursorAtEnd: function () {
      var e, t = this, n = t.el.val().length, i = t.element.selectionStart;
      return "number" == typeof i ? i === n : !document.selection || (e = document.selection.createRange(), e.moveStart("character", -n), n === e.text.length)
    }, onKeyPress: function (e) {
      var t = this;
      if (!t.disabled && !t.visible && e.which === s.DOWN && t.currentValue) return void t.suggest();
      if (!t.disabled && t.visible) {
        switch (e.which) {
          case s.ESC:
            t.el.val(t.currentValue), t.hide();
            break;
          case s.RIGHT:
            if (t.hint && t.options.onHint && t.isCursorAtEnd()) {
              t.selectHint();
              break
            }
            return;
          case s.TAB:
            if (t.hint && t.options.onHint) return void t.selectHint();
            if (-1 === t.selectedIndex) return void t.hide();
            if (t.select(t.selectedIndex), !1 === t.options.tabDisabled) return;
            break;
          case s.RETURN:
            if (-1 === t.selectedIndex) return void t.hide();
            t.select(t.selectedIndex);
            break;
          case s.UP:
            t.moveUp();
            break;
          case s.DOWN:
            t.moveDown();
            break;
          default:
            return
        }
        e.stopImmediatePropagation(), e.preventDefault()
      }
    }, onKeyUp: function (e) {
      var t = this;
      if (!t.disabled) {
        switch (e.which) {
          case s.UP:
          case s.DOWN:
            return
        }
        clearTimeout(t.onChangeTimeout), t.currentValue !== t.el.val() && (t.findBestHint(), t.options.deferRequestBy > 0 ? t.onChangeTimeout = setTimeout(function () {
          t.onValueChange()
        }, t.options.deferRequestBy) : t.onValueChange())
      }
    }, onValueChange: function () {
      var t = this, n = t.options, i = t.el.val(), o = t.getQuery(i);
      if (t.selection && t.currentValue !== o && (t.selection = null, (n.onInvalidateSelection || e.noop).call(t.element)), clearTimeout(t.onChangeTimeout), t.currentValue = i, t.selectedIndex = -1, n.triggerSelectOnValidInput && t.isExactMatch(o)) return void t.select(0);
      o.length < n.minChars ? t.hide() : t.getSuggestions(o)
    }, isExactMatch: function (e) {
      var t = this.suggestions;
      return 1 === t.length && t[0].value.toLowerCase() === e.toLowerCase()
    }, getQuery: function (t) {
      var n, i = this.options.delimiter;
      return i ? (n = t.split(i), e.trim(n[n.length - 1])) : t
    }, getSuggestionsLocal: function (t) {
      var n, i = this, o = i.options, r = t.toLowerCase(), a = o.lookupFilter, s = parseInt(o.lookupLimit, 10);
      return n = {
        suggestions: e.grep(o.lookup, function (e) {
          return a(e, t, r)
        })
      }, s && n.suggestions.length > s && (n.suggestions = n.suggestions.slice(0, s)), n
    }, getSuggestions: function (t) {
      var n, i, o, r, a = this, s = a.options, l = s.serviceUrl;
      if (s.params[s.paramName] = t, !1 !== s.onSearchStart.call(a.element, s.params)) {
        if (i = s.ignoreParams ? null : s.params, e.isFunction(s.lookup)) return void s.lookup(t, function (e) {
          a.suggestions = e.suggestions, a.suggest(), s.onSearchComplete.call(a.element, t, e.suggestions)
        });
        a.isLocal ? n = a.getSuggestionsLocal(t) : (e.isFunction(l) && (l = l.call(a.element, t)), o = l + "?" + e.param(i || {}), n = a.cachedResponse[o]), n && e.isArray(n.suggestions) ? (a.suggestions = n.suggestions, a.suggest(), s.onSearchComplete.call(a.element, t, n.suggestions)) : a.isBadQuery(t) ? s.onSearchComplete.call(a.element, t, []) : (a.abortAjax(), r = {
          url: l,
          data: i,
          type: s.type,
          dataType: s.dataType
        }, e.extend(r, s.ajaxSettings), a.currentRequest = e.ajax(r).done(function (e) {
          var n;
          a.currentRequest = null, n = s.transformResult(e, t), a.processResponse(n, t, o), s.onSearchComplete.call(a.element, t, n.suggestions)
        }).fail(function (e, n, i) {
          s.onSearchError.call(a.element, t, e, n, i)
        }))
      }
    }, isBadQuery: function (e) {
      if (!this.options.preventBadQueries) return !1;
      for (var t = this.badQueries, n = t.length; n--;) if (0 === e.indexOf(t[n])) return !0;
      return !1
    }, hide: function () {
      var t = this, n = e(t.suggestionsContainer);
      e.isFunction(t.options.onHide) && t.visible && t.options.onHide.call(t.element, n), t.visible = !1, t.selectedIndex = -1, clearTimeout(t.onChangeTimeout), e(t.suggestionsContainer).hide(), t.signalHint(null)
    }, suggest: function () {
      if (!this.suggestions.length) return void(this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide());
      var t, n = this, i = n.options, o = i.groupBy, r = i.formatResult, a = n.getQuery(n.currentValue),
        s = n.classes.suggestion, l = n.classes.selected, u = e(n.suggestionsContainer),
        c = e(n.noSuggestionsContainer), d = i.beforeRender, f = "", p = function (e, n) {
          var r = e.data[o];
          return t === r ? "" : (t = r, i.formatGroup(e, t))
        };
      if (i.triggerSelectOnValidInput && n.isExactMatch(a)) return void n.select(0);
      e.each(n.suggestions, function (e, t) {
        o && (f += p(t, 0)), f += '<div class="' + s + '" data-index="' + e + '">' + r(t, a, e) + "</div>"
      }), this.adjustContainerWidth(), c.detach(), u.html(f), e.isFunction(d) && d.call(n.element, u, n.suggestions), n.fixPosition(), u.show(), i.autoSelectFirst && (n.selectedIndex = 0, u.scrollTop(0), u.children("." + s).first().addClass(l)), n.visible = !0, n.findBestHint()
    }, noSuggestions: function () {
      var t = this, n = t.options.beforeRender, i = e(t.suggestionsContainer), o = e(t.noSuggestionsContainer);
      this.adjustContainerWidth(), o.detach(), i.empty(), i.append(o), e.isFunction(n) && n.call(t.element, i, t.suggestions), t.fixPosition(), i.show(), t.visible = !0
    }, adjustContainerWidth: function () {
      var t, n = this, i = n.options, o = e(n.suggestionsContainer);
      "auto" === i.width ? (t = n.el.outerWidth(), o.css("width", t > 0 ? t : 300)) : "flex" === i.width && o.css("width", "")
    }, findBestHint: function () {
      var t = this, n = t.el.val().toLowerCase(), i = null;
      n && (e.each(t.suggestions, function (e, t) {
        var o = 0 === t.value.toLowerCase().indexOf(n);
        return o && (i = t), !o
      }), t.signalHint(i))
    }, signalHint: function (t) {
      var n = "", i = this;
      t && (n = i.currentValue + t.value.substr(i.currentValue.length)), i.hintValue !== n && (i.hintValue = n, i.hint = t, (this.options.onHint || e.noop)(n))
    }, verifySuggestionsFormat: function (t) {
      return t.length && "string" == typeof t[0] ? e.map(t, function (e) {
        return {value: e, data: null}
      }) : t
    }, validateOrientation: function (t, n) {
      return t = e.trim(t || "").toLowerCase(), -1 === e.inArray(t, ["auto", "bottom", "top"]) && (t = n), t
    }, processResponse: function (e, t, n) {
      var i = this, o = i.options;
      e.suggestions = i.verifySuggestionsFormat(e.suggestions), o.noCache || (i.cachedResponse[n] = e, o.preventBadQueries && !e.suggestions.length && i.badQueries.push(t)), t === i.getQuery(i.currentValue) && (i.suggestions = e.suggestions, i.suggest())
    }, activate: function (t) {
      var n, i = this, o = i.classes.selected, r = e(i.suggestionsContainer), a = r.find("." + i.classes.suggestion);
      return r.find("." + o).removeClass(o), i.selectedIndex = t, -1 !== i.selectedIndex && a.length > i.selectedIndex ? (n = a.get(i.selectedIndex), e(n).addClass(o), n) : null
    }, selectHint: function () {
      var t = this, n = e.inArray(t.hint, t.suggestions);
      t.select(n)
    }, select: function (e) {
      var t = this;
      t.hide(), t.onSelect(e)
    }, moveUp: function () {
      var t = this;
      if (-1 !== t.selectedIndex) return 0 === t.selectedIndex ? (e(t.suggestionsContainer).children().first().removeClass(t.classes.selected), t.selectedIndex = -1, t.el.val(t.currentValue), void t.findBestHint()) : void t.adjustScroll(t.selectedIndex - 1)
    }, moveDown: function () {
      var e = this;
      e.selectedIndex !== e.suggestions.length - 1 && e.adjustScroll(e.selectedIndex + 1)
    }, adjustScroll: function (t) {
      var n = this, i = n.activate(t);
      if (i) {
        var o, r, a, s = e(i).outerHeight();
        o = i.offsetTop, r = e(n.suggestionsContainer).scrollTop(), a = r + n.options.maxHeight - s, o < r ? e(n.suggestionsContainer).scrollTop(o) : o > a && e(n.suggestionsContainer).scrollTop(o - n.options.maxHeight + s), n.options.preserveInput || n.el.val(n.getValue(n.suggestions[t].value)), n.signalHint(null)
      }
    }, onSelect: function (t) {
      var n = this, i = n.options.onSelect, o = n.suggestions[t];
      n.currentValue = n.getValue(o.value), n.currentValue === n.el.val() || n.options.preserveInput || n.el.val(n.currentValue), n.signalHint(null), n.suggestions = [], n.selection = o, e.isFunction(i) && i.call(n.element, o)
    }, getValue: function (e) {
      var t, n, i = this, o = i.options.delimiter;
      return o ? (t = i.currentValue, n = t.split(o), 1 === n.length ? e : t.substr(0, t.length - n[n.length - 1].length) + e) : e
    }, dispose: function () {
      var t = this;
      t.el.off(".autocomplete").removeData("autocomplete"), e(window).off("resize.autocomplete", t.fixPositionCapture), e(t.suggestionsContainer).remove()
    }
  }, e.fn.devbridgeAutocomplete = function (n, i) {
    return arguments.length ? this.each(function () {
      var o = e(this), r = o.data("autocomplete");
      "string" == typeof n ? r && "function" == typeof r[n] && r[n](i) : (r && r.dispose && r.dispose(), r = new t(this, n), o.data("autocomplete", r))
    }) : this.first().data("autocomplete")
  }, e.fn.autocomplete || (e.fn.autocomplete = e.fn.devbridgeAutocomplete)
});
var Upload = {
  currentImg: 0,
  path_upload: "",
  getFB: 0,
  dataFacebook: [],
  secret: "",
  type_picture: "product",
  uploadImg: function (e, t) {
    Upload.path_upload = $(e).parents("form").attr("action");
    var n = new FormData;
    n.append("typepicture", Upload.type_picture), $.each($(e)[0].files, function (e, t) {
      e <= 7 && n.append("photo[]", t)
    });
    var i = $("#cla_title").val();
    n.append("name", i), this.postImages(n, t)
  },
  postImages: function (e, t) {
    $.ajax({
      url: Upload.path_upload,
      data: e,
      cache: !1,
      contentType: !1,
      processData: !1,
      type: "POST",
      dataType: "json",
      beforeSend: function () {
        $("body").addClass("loadding"), $("#loading-content").fadeIn()
      },
      success: function (e) {
        $("body").removeClass("loadding"), 1 == t ? Upload.updateData(e.photo_0) : Upload.showData(e), setTimeout(function () {
          $("#loading-content").fadeOut()
        }, 500)
      },
      error: function (e, t, n) {
        setTimeout(function () {
          $("#loading-content").fadeOut()
        }, 500)
      }
    })
  },
  removeItem: function (e) {
    $(e).parents(".item").remove()
  },
  showOverlay: function (e) {
    var t = parseInt(e), n = $("#loading-content");
    if (!n.length) return !1;
    t ? n.fadeIn() : setTimeout(function () {
      n.fadeOut()
    }, 500)
  },
  updateCurrent: function (e) {
    Upload.currentImg = $(e).parents(".item").attr("data-item")
  },
  updateData: function (e) {
    var t = $("#item_" + Upload.currentImg);
    t.find("img").attr("src", e.url), t.find(".filename").val(e.filename), t.find(".w").val(e.w), t.find(".h").val(e.h)
  },
  showData: function (e) {
    $.each(e, function (e, t) {
      if (1 == t.success) {
        var n = '<li class="item"><div class=""><div class="title"><label class="upl_control" onclick="Upload.updateCurrent(this)" for="replace"><i class="mcon-change" title="Đổi"></i></label><span class="upl_control"><i class="num_item">1</i></span><label class="upl_control" onclick="Upload.removeItem(this)"><i class="mcon-bin" title="Xóa"></i></label></div><span class="img"><img src="' + t.url + '"/></span><div class="info"><label class="form-field"><textarea name="teaser[]" placeholder="Mô tả" onfocus="Upload.addClassName(this,\'full\')" onblur="Upload.removeClassName(this,\'full\')"></textarea></label><input type="hidden" class="filename" name="filename[]" value="' + t.filename + '" /><input type="hidden" class="w" name="w[]" value="' + t.width + '" /><input type="hidden" class="h" name="h[]" value="' + t.height + '" /><input type="hidden" class="type"  name="type[]" value="photo" /></div></div></li>';
        $("#box_upload").append(n)
      }
    }), Upload.indexPosition()
  },
  addTextBox: function () {
    $("#box_upload").append('<li class="item"><div class="text"><div class="title"><label class="upl_control"></label><span class="upl_control"><i class="num_item">1</i></span><label class="upl_control" onclick="Upload.removeItem(this)"><i class="mcon-bin" title="Xóa"></i></label></div><div class="info"><label class="form-field"><textarea name="teaser[]" placeholder="Mô tả" onfocus="Upload.addClassName(this,\'full\')" onblur="Upload.removeClassName(this,\'full\')"></textarea></label>               <input type="hidden" name="filename[]" value="" /><input type="hidden" name="w[]" value="0" /><input type="hidden" name="h[]" value="0" /><input type="hidden" class="type" name="type[]" value="text" /></div></div></li>'), Upload.indexPosition()
  },
  addVideo: function () {
    var e = prompt("Link youtube: ", "");
    null != e && (iYoutube = Upload.getYoutubeId(e), Upload.showVideo(iYoutube))
  },
  showVideo: function (e) {
    var t = '<li class="item"><div class=""><div class="title"><label class="upl_control"></label><span class="upl_control"><i>1</i></span><label class="upl_control" onclick="Upload.removeItem(this)"><i class="mcon-bin" title="Xóa"></i></label></div><span class="img"><img src="https://img.youtube.com/vi/' + e + '/sddefault.jpg" /><span class="mcon-video"></span></span><div class="info"><label class="form-field"><textarea placeholder="Mô tả" name="teaser[]" onfocus="Upload.addClassName(this,\'full\')" onblur="Upload.removeClassName(this,\'full\')"></textarea></label><input type="hidden" class="filename" name="filename[]" value="' + e + '" /><input type="hidden" class="w" name="w[]" value="0" /><input type="hidden" class="h" name="h[]" value="0" /><input type="hidden" class="type"  name="type[]" value="video" /></div></div></li>';
    $("#box_upload").append(t), Upload.indexPosition()
  },
  getYoutubeId: function (e) {
    var t = e.split("v=")[1], n = t.indexOf("&");
    return -1 != n && (t = t.substring(0, n)), t
  },
  indexPosition: function () {
    var e = 1, t = 0;
    $("#box_upload > .item").each(function () {
      var n = $(this);
      n.attr("id", "item_" + e).attr("data-item", e), 0 == t && "photo" == n.find(".type").val() ? (t = 1, n.find(".num_item").attr("title", "Ảnh đại diện").html('<i class="mcon-home"></i>')) : n.find(".num_item").attr("title", "số: " + e).text(e), e++
    })
  },
  getFeedPageFacebook: function (e) {
    var t = $(e).val();
    "" !== $.trim(t) && (Upload.getFB = 0, Upload.getFeedFacebook(t))
  },
  getFeedFacebook: function (e) {
    $.ajax({
      url: "/ajax/getfacebookfeed?secret=" + Upload.secret,
      type: "POST",
      data: {fburl: e},
      dataType: "json",
      beforeSend: function () {
      },
      success: function (e) {
        Upload.dataFacebook = e;
        var t = "";
        $.each(e, function (e, n) {
          t += '<label class="item" onclick="Upload.fillDataFacebook(' + e + ')"><span class="img"><img src="' + n.picture + '" /> <span class="total"></span> </span> <span class="fb_title">' + n.message + "</span></label>"
        }), $("#fb_list").html(t)
      }
    }), $("#box_suggest_fb").attr("open", "true"), hideModal("#select_fb"), $("#btn_showlist").removeClass("show")
  },
  fillDataFacebook: function (e) {
    if ("object" == typeof Upload.dataFacebook[e]) {
      $("#box_upload").html("");
      var t = Upload.dataFacebook[e];
      tinymce.get("cla_description").execCommand("mceSetContent", !1, t.message), t.total_pictures <= 0 && Upload.showDataImageFB(t.picture), $.each(t.pictures, function (e, t) {
        Upload.showDataImageFB(t.src)
      })
    }
    showMoreField(), Upload.indexPosition(), $("#box_suggest_fb").removeAttr("open"), $("#btn_showlist").addClass("show")
  },
  showDataImageFB: function (e) {
    var t = '<li class="item"><div class=""><div class="title"><label class="upl_control" onclick="Upload.updateCurrent(this)" for="replace"><i class="mcon-change" title="Đổi"></i></label><span class="upl_control"><i class="num_item">1</i></span><label class="upl_control" onclick="Upload.removeItem(this)"><i class="mcon-bin" title="Xóa"></i></label></div><span class="img"><img src="' + e + '"/></span><div class="info"><label class="form-field"><textarea name="teaser[]" placeholder="Mô tả" onfocus="Upload.addClassName(this,\'full\')" onblur="Upload.removeClassName(this,\'full\')"></textarea></label><input type="hidden" class="filename" name="filename[]" value="' + e + '" /><input type="hidden" class="w" name="w[]" value="" /><input type="hidden" class="h" name="h[]" value="" /><input type="hidden" class="type"  name="type[]" value="photo" /></div></div></li>';
    $("#box_upload").append(t)
  },
  addClassName: function (e, t) {
    $(e).parents(".item").addClass(t)
  },
  removeClassName: function (e, t) {
    $(e).parents(".item").removeClass(t)
  }
};
$(document).ready(function () {
  $("body").append('<div id="loadding_bar"><span></span></div>'), $(document).ajaxStart(function () {
    $("#loadding_bar").addClass("start")
  }).ajaxSend(function () {
    $("#loadding_bar").addClass("send")
  }).ajaxSuccess(function () {
    $("#loadding_bar").addClass("success")
  }).ajaxComplete(function () {
    $("#loadding_bar").addClass("complete")
  }).ajaxStop(function () {
    setTimeout(function () {
      $("#loadding_bar").addClass("hide"), setTimeout(function () {
        $("#loadding_bar").removeAttr("class")
      }, 1e3)
    }, 1e3)
  }).ajaxError(function () {
    setTimeout(function () {
      $("#loadding_bar").addClass("hide"), setTimeout(function () {
        $("#loadding_bar").removeAttr("class")
      }, 1e3)
    }, 1e3)
  }), $(window).scroll(function () {
    var e = $(this).scrollTop();
    if ($("#boxTabLabel").length) {
      e >= $("#boxTabLabel").offset().top ? $("#boxTabLabel .tab-label").addClass("fixed") : $("#boxTabLabel .tab-label").removeClass("fixed")
    }
  }), activeTabCurrent()
});
