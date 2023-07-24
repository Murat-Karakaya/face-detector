import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-QSQYAWSL.js";

// node_modules/raf-manager/build/RAFManager.min.js
var require_RAFManager_min = __commonJS({
  "node_modules/raf-manager/build/RAFManager.min.js"(exports, module) {
    !function(t, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : t.RAFManager = i();
    }(exports, function() {
      "use strict";
      return function() {
        for (var t = ["ms", "moz", "webkit", "o"], i = 0; i < t.length && !window.requestAnimationFrame; ++i)
          window.requestAnimationFrame = window[t[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[i] + "CancelAnimationFrame"] || window[t[i] + "CancelRequestAnimationFrame"];
      }(), { timer: 0, state: "stop", animations: [], add: function(t) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60, n = { callback: t, fps: i, n: 60 / i, param: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, i: 0 };
        return this.animations.push(n), this.animations.length >= 1 && this.start(), this;
      }, getIndex: function(t) {
        for (var i = 0; i < this.animations.length; i++) {
          if (this.animations[i].callback === t)
            return i;
        }
        return -1;
      }, remove: function(t) {
        if (!(this.getIndex(t) < 0))
          return this.deleteMap(t), 0 === this.animations.length && this.stop(), this;
      }, deleteMap: function(t) {
        var i = this.getIndex(t), n = this.animations[i];
        for (var e in n)
          delete n[e];
        this.animations.splice(i, 1);
      }, start: function() {
        if ("start" !== this.state)
          return this.state = "start", this.tick(), this;
      }, stop: function() {
        if ("stop" !== this.state)
          return this.state = "stop", cancelAnimationFrame(this.timer), this;
      }, tick: function() {
        var t = this;
        this.timer = requestAnimationFrame(function() {
          t.tick();
        });
        for (var i = 0; i < this.animations.length; i++) {
          var n = this.animations[i], e = n.callback, a = n.param;
          n.i++, n.i >= n.n && (e(a), n.i = 0);
        }
      } };
    });
  }
});

// node_modules/proton-engine/build/proton.min.js
var require_proton_min = __commonJS({
  "node_modules/proton-engine/build/proton.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Proton = e();
    }(exports, function() {
      "use strict";
      var e = 3.1415926, s = { PI: e, PIx2: 2 * e, PI_2: e / 2, PI_180: e / 180, N180_PI: 180 / e, Infinity: -999, isInfinity: function(t2) {
        return t2 === this.Infinity || t2 === 1 / 0;
      }, randomAToB: function(t2, e2, i2) {
        return 2 < arguments.length && void 0 !== i2 && i2 ? Math.floor(Math.random() * (e2 - t2)) + t2 : t2 + Math.random() * (e2 - t2);
      }, randomFloating: function(t2, e2, i2) {
        return this.randomAToB(t2 - e2, t2 + e2, i2);
      }, randomColor: function() {
        return "#" + ("00000" + (16777216 * Math.random() << 0).toString(16)).slice(-6);
      }, randomZone: function() {
      }, floor: function(t2, e2) {
        e2 = 1 < arguments.length && void 0 !== e2 ? e2 : 4, e2 = Math.pow(10, e2);
        return Math.floor(t2 * e2) / e2;
      }, degreeTransform: function(t2) {
        return t2 * e / 180;
      }, toColor16: function(t2) {
        return "#" + t2.toString(16);
      } }, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
        return typeof t2;
      } : function(t2) {
        return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
      }, o = function(t2, e2) {
        if (!(t2 instanceof e2))
          throw new TypeError("Cannot call a class as a function");
      }, t = function(t2, e2, i2) {
        return e2 && a(t2.prototype, e2), i2 && a(t2, i2), t2;
      };
      function a(t2, e2) {
        for (var i2 = 0; i2 < e2.length; i2++) {
          var a2 = e2[i2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(t2, a2.key, a2);
        }
      }
      function n(t2, e2, i2) {
        null === t2 && (t2 = Function.prototype);
        var a2 = Object.getOwnPropertyDescriptor(t2, e2);
        if (void 0 !== a2) {
          if ("value" in a2)
            return a2.value;
          a2 = a2.get;
          return void 0 !== a2 ? a2.call(i2) : void 0;
        }
        if (null !== (t2 = Object.getPrototypeOf(t2)))
          return n(t2, e2, i2);
      }
      var r = function(t2, e2) {
        if ("function" != typeof e2 && null !== e2)
          throw new TypeError("Super expression must either be null or a function, not " + typeof e2);
        t2.prototype = Object.create(e2 && e2.prototype, { constructor: { value: t2, enumerable: false, writable: true, configurable: true } }), e2 && (Object.setPrototypeOf ? Object.setPrototypeOf(t2, e2) : t2.__proto__ = e2);
      }, h = function(t2, e2) {
        if (!t2)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e2 || "object" != typeof e2 && "function" != typeof e2 ? t2 : e2;
      }, l = (t(u, [{ key: "getValue", value: function(t2) {
        t2 = 0 < arguments.length && void 0 !== t2 && t2;
        return this.isArray ? P.getRandFromArray(this.a) : this.center ? s.randomFloating(this.a, this.b, t2) : s.randomAToB(this.a, this.b, t2);
      } }], [{ key: "setSpanValue", value: function(t2, e2, i2) {
        return t2 instanceof u ? t2 : void 0 === e2 ? new u(t2) : void 0 === i2 ? new u(t2, e2) : new u(t2, e2, i2);
      } }, { key: "getSpanValue", value: function(t2) {
        return t2 instanceof u ? t2.getValue() : t2;
      } }]), u);
      function u(t2, e2, i2) {
        o(this, u), P.isArray(t2) ? (this.isArray = true, this.a = t2) : (this.isArray = false, this.a = P.initValue(t2, 1), this.b = P.initValue(e2, this.a), this.center = P.initValue(i2, false));
      }
      var c = function(t2) {
        --t2;
        for (var e2 = 1; e2 < 32; e2 <<= 1)
          t2 |= t2 >> e2;
        return t2 + 1;
      }, d = function(t2, e2) {
        return [1, 0, 0, 0, 1, 0, t2, e2, 1];
      }, y = function(t2) {
        var e2 = Math.cos(t2), t2 = Math.sin(t2);
        return [e2, -t2, 0, t2, e2, 0, 0, 0, 1];
      }, p = function(t2, e2) {
        return [t2, 0, 0, 0, e2, 0, 0, 0, 1];
      }, f = function(t2, e2) {
        var i2 = t2[0], a2 = t2[1], r2 = t2[2], n2 = t2[3], s2 = t2[4], o2 = t2[5], h2 = t2[6], l2 = t2[7], u2 = t2[8], c2 = e2[0], d2 = e2[1], y2 = e2[2], p2 = e2[3], f2 = e2[4], v2 = e2[5], g2 = e2[6], t2 = e2[7], e2 = e2[8];
        return [i2 * c2 + a2 * p2 + r2 * g2, i2 * d2 + a2 * f2 + r2 * t2, i2 * y2 + a2 * v2 + r2 * e2, n2 * c2 + s2 * p2 + o2 * g2, n2 * d2 + s2 * f2 + o2 * t2, n2 * y2 + s2 * v2 + o2 * e2, h2 * c2 + l2 * p2 + u2 * g2, h2 * d2 + l2 * f2 + u2 * t2, h2 * y2 + l2 * v2 + u2 * e2];
      }, v = { createCanvas: function(t2, e2, i2, a2) {
        var r2 = 3 < arguments.length && void 0 !== a2 ? a2 : "absolute", a2 = document.createElement("canvas");
        return a2.id = t2, a2.width = e2, a2.height = i2, a2.style.opacity = 0, a2.style.position = r2, this.transform(a2, -500, -500, 0, 0), a2;
      }, createDiv: function(t2, e2, i2) {
        var a2 = document.createElement("div");
        return a2.id = t2, a2.style.position = "absolute", this.resize(a2, e2, i2), a2;
      }, resize: function(t2, e2, i2) {
        t2.style.width = e2 + "px", t2.style.height = i2 + "px", t2.style.marginLeft = -e2 / 2 + "px", t2.style.marginTop = -i2 / 2 + "px";
      }, transform: function(t2, e2, i2, a2, r2) {
        t2.style.willChange = "transform";
        var n2 = "translate(" + e2 + "px, " + i2 + "px) scale(" + a2 + ") rotate(" + r2 + "deg)";
        this.css3(t2, "transform", n2);
      }, transform3d: function(t2, e2, i2, a2, r2) {
        t2.style.willChange = "transform";
        r2 = "translate3d(" + e2 + "px, " + i2 + "px, 0) scale(" + a2 + ") rotate(" + r2 + "deg)";
        this.css3(t2, "backfaceVisibility", "hidden"), this.css3(t2, "transform", r2);
      }, css3: function(t2, e2, i2) {
        var a2 = e2.charAt(0).toUpperCase() + e2.substr(1);
        t2.style["Webkit" + a2] = i2, t2.style["Moz" + a2] = i2, t2.style["O" + a2] = i2, t2.style["ms" + a2] = i2, t2.style["" + e2] = i2;
      } }, g = {}, m = {}, b = 0, _ = function(t2, e2, i2) {
        t2.drawImage(e2, i2.x, i2.y);
        e2 = t2.getImageData(i2.x, i2.y, i2.width, i2.height);
        return t2.clearRect(i2.x, i2.y, i2.width, i2.height), e2;
      }, x = function(t2, e2, i2) {
        var a2 = "string" == typeof t2 ? t2 : t2.src;
        g[a2] ? e2(g[a2], i2) : ((t2 = new Image()).onload = function(t3) {
          g[a2] = t3.target, e2(g[a2], i2);
        }, t2.src = a2);
      }, k = function(t2, e2, i2) {
        var a2, r2, n2 = t2.src;
        return m[n2] || (a2 = c(t2.width), r2 = c(t2.height), (r2 = v.createCanvas("proton_canvas_cache_" + ++b, a2, r2)).getContext("2d").drawImage(t2, 0, 0, t2.width, t2.height), m[n2] = r2), e2 && e2(m[n2], i2), m[n2];
      }, P = { initValue: function(t2, e2) {
        return t2 = null != t2 ? t2 : e2;
      }, isArray: function(t2) {
        return "[object Array]" === Object.prototype.toString.call(t2);
      }, emptyArray: function(t2) {
        t2 && (t2.length = 0);
      }, toArray: function(t2) {
        return this.isArray(t2) ? t2 : [t2];
      }, getRandFromArray: function(t2) {
        return t2 ? t2[Math.floor(t2.length * Math.random())] : null;
      }, emptyObject: function(t2, e2) {
        var i2, a2 = 1 < arguments.length && void 0 !== e2 ? e2 : null;
        for (i2 in t2)
          a2 && -1 < a2.indexOf(i2) || delete t2[i2];
      }, classApply: function(t2, e2) {
        e2 = 1 < arguments.length && void 0 !== e2 ? e2 : null;
        return new (e2 ? t2.bind.apply(t2, [null].concat(e2)) : t2)();
      }, setVectorVal: function(t2, e2) {
        e2 = 1 < arguments.length && void 0 !== e2 ? e2 : null;
        e2 && (this.hasProp(e2, "x") && (t2.p.x = e2.x), this.hasProp(e2, "y") && (t2.p.y = e2.y), this.hasProp(e2, "vx") && (t2.v.x = e2.vx), this.hasProp(e2, "vy") && (t2.v.y = e2.vy), this.hasProp(e2, "ax") && (t2.a.x = e2.ax), this.hasProp(e2, "ay") && (t2.a.y = e2.ay), this.hasProp(e2, "p") && t2.p.copy(e2.p), this.hasProp(e2, "v") && t2.v.copy(e2.v), this.hasProp(e2, "a") && t2.a.copy(e2.a), this.hasProp(e2, "position") && t2.p.copy(e2.position), this.hasProp(e2, "velocity") && t2.v.copy(e2.velocity), this.hasProp(e2, "accelerate") && t2.a.copy(e2.accelerate));
      }, hasProp: function(t2, e2) {
        return !!t2 && void 0 !== t2[e2];
      }, setProp: function(t2, e2) {
        for (var i2 in e2)
          t2.hasOwnProperty(i2) && (t2[i2] = l.getSpanValue(e2[i2]));
        return t2;
      }, getImageData: function(t2, e2, i2) {
        return _(t2, e2, i2);
      }, destroyAll: function(t2, e2) {
        for (var i2 = 1 < arguments.length && void 0 !== e2 ? e2 : null, a2 = t2.length; a2--; ) {
          try {
            t2[a2].destroy(i2);
          } catch (t3) {
          }
          delete t2[a2];
        }
        t2.length = 0;
      }, assign: function(t2, e2) {
        if ("function" == typeof Object.assign)
          return Object.assign(t2, e2);
        for (var i2 in e2)
          Object.prototype.hasOwnProperty.call(e2, i2) && (t2[i2] = e2[i2]);
        return t2;
      } }, E = {}, A = { _index: 0, _cache: {}, id: function(t2) {
        return void 0 !== E[t2] && null !== E[t2] || (E[t2] = 0), t2 + "_" + E[t2]++;
      }, getId: function(t2) {
        var e2 = this.getIdFromCache(t2);
        return e2 || (e2 = "PUID_" + this._index++, this._cache[e2] = t2, e2);
      }, getIdFromCache: function(t2) {
        var e2, i2 = void 0;
        for (i2 in this._cache) {
          if ((e2 = this._cache[i2]) === t2)
            return i2;
          if (this.isBody(e2, t2) && e2.src === t2.src)
            return i2;
        }
        return null;
      }, isBody: function(t2, e2) {
        return "object" === (void 0 === t2 ? "undefined" : i(t2)) && "object" === (void 0 === e2 ? "undefined" : i(e2)) && t2.isInner && e2.isInner;
      }, getTarget: function(t2) {
        return this._cache[t2];
      } }, T = (t(R, [{ key: "get", value: function(t2, e2, i2) {
        var a2 = void 0;
        return i2 = i2 || t2.__puid || A.getId(t2), (a2 = this.cache[i2] && 0 < this.cache[i2].length ? this.cache[i2].pop() : this.createOrClone(t2, e2)).__puid = t2.__puid || i2, a2;
      } }, { key: "expire", value: function(t2) {
        return this.getCache(t2.__puid).push(t2);
      } }, { key: "createOrClone", value: function(t2, e2) {
        return this.total++, this.create ? this.create(t2, e2) : "function" == typeof t2 ? P.classApply(t2, e2) : t2.clone();
      } }, { key: "getCount", value: function() {
        var t2, e2 = 0;
        for (t2 in this.cache)
          e2 += this.cache[t2].length;
        return e2++;
      } }, { key: "destroy", value: function() {
        for (var t2 in this.cache)
          this.cache[t2].length = 0, delete this.cache[t2];
      } }, { key: "getCache", value: function(t2) {
        t2 = 0 < arguments.length && void 0 !== t2 ? t2 : "default";
        return this.cache[t2] || (this.cache[t2] = []), this.cache[t2];
      } }]), R);
      function R(t2) {
        o(this, R), this.total = 0, this.cache = {};
      }
      var O = (t(w, [{ key: "update", value: function(t2, e2) {
        this.add(t2, e2);
        var i2 = this.getEmitter(), t2 = this.getRenderer(), e2 = "";
        switch (this.type) {
          case 2:
            e2 += "emitter:" + this.proton.emitters.length + "<br>", i2 && (e2 += "em speed:" + i2.emitSpeed + "<br>"), i2 && (e2 += "pos:" + this.getEmitterPos(i2));
            break;
          case 3:
            i2 && (e2 += "initializes:" + i2.initializes.length + "<br>"), i2 && (e2 += '<span style="display:inline-block;">' + this.concatArr(i2.initializes) + "</span><br>"), i2 && (e2 += "behaviours:" + i2.behaviours.length + "<br>"), i2 && (e2 += '<span style="display:inline-block;">' + this.concatArr(i2.behaviours) + "</span><br>");
            break;
          case 4:
            t2 && (e2 += t2.name + "<br>"), t2 && (e2 += "body:" + this.getCreatedNumber(t2) + "<br>");
            break;
          default:
            e2 += "particles:" + this.proton.getCount() + "<br>", e2 += "pool:" + this.proton.pool.getCount() + "<br>", e2 += "total:" + this.proton.pool.total;
        }
        this.container.innerHTML = e2;
      } }, { key: "add", value: function(t2, e2) {
        var i2 = this;
        if (!this.container) {
          this.type = 1, this.container = document.createElement("div"), this.container.style.cssText = ["position:absolute;bottom:0px;left:0;cursor:pointer;", "opacity:0.9;z-index:10000;padding:10px;font-size:12px;font-family:Helvetica,Arial,sans-serif;", "width:120px;height:50px;background-color:#002;color:#0ff;"].join(""), this.container.addEventListener("click", function(t3) {
            i2.type++, 4 < i2.type && (i2.type = 1);
          }, false);
          var a2 = void 0, r2 = void 0;
          switch (t2) {
            case 2:
              a2 = "#201", r2 = "#f08";
              break;
            case 3:
              a2 = "#020", r2 = "#0f0";
              break;
            default:
              a2 = "#002", r2 = "#0ff";
          }
          this.container.style["background-color"] = a2, this.container.style.color = r2;
        }
        this.container.parentNode || (e2 = e2 || this.body || document.body).appendChild(this.container);
      } }, { key: "getEmitter", value: function() {
        return this.proton.emitters[this.emitterIndex];
      } }, { key: "getRenderer", value: function() {
        return this.proton.renderers[this.rendererIndex];
      } }, { key: "concatArr", value: function(t2) {
        var e2 = "";
        if (!t2 || !t2.length)
          return e2;
        for (var i2 = 0; i2 < t2.length; i2++)
          e2 += (t2[i2].name || "").substr(0, 1) + ".";
        return e2;
      } }, { key: "getCreatedNumber", value: function(t2) {
        return t2.pool.total || t2.cpool && t2.cpool.total || 0;
      } }, { key: "getEmitterPos", value: function(t2) {
        return Math.round(t2.p.x) + "," + Math.round(t2.p.y);
      } }]), w);
      function w(t2) {
        o(this, w), this.proton = t2, this.container = null, this.type = 1, this.emitterIndex = 0, this.rendererIndex = 0;
      }
      var C = (t(S, [{ key: "addEventListener", value: function(t2, e2) {
        return this._listeners ? this.removeEventListener(t2, e2) : this._listeners = {}, this._listeners[t2] || (this._listeners[t2] = []), this._listeners[t2].push(e2), e2;
      } }, { key: "removeEventListener", value: function(t2, e2) {
        if (this._listeners && this._listeners[t2]) {
          for (var i2 = this._listeners[t2], a2 = i2.length, r2 = 0; r2 < a2; r2++)
            if (i2[r2] === e2) {
              1 === a2 ? delete this._listeners[t2] : i2.splice(r2, 1);
              break;
            }
        }
      } }, { key: "removeAllEventListeners", value: function(t2) {
        t2 ? this._listeners && delete this._listeners[t2] : this._listeners = null;
      } }, { key: "dispatchEvent", value: function(t2, e2) {
        var i2 = false, a2 = this._listeners;
        if (t2 && a2) {
          var r2 = a2[t2];
          if (!r2)
            return i2;
          for (var n2 = void 0, s2 = r2.length; s2--; )
            n2 = r2[s2], i2 = i2 || n2(e2);
        }
        return !!i2;
      } }, { key: "hasEventListener", value: function(t2) {
        var e2 = this._listeners;
        return !(!e2 || !e2[t2]);
      } }], [{ key: "bind", value: function(t2) {
        t2.prototype.dispatchEvent = S.prototype.dispatchEvent, t2.prototype.hasEventListener = S.prototype.hasEventListener, t2.prototype.addEventListener = S.prototype.addEventListener, t2.prototype.removeEventListener = S.prototype.removeEventListener, t2.prototype.removeAllEventListeners = S.prototype.removeAllEventListeners;
      } }]), S);
      function S() {
        o(this, S), this._listeners = null;
      }
      var I = (t(D, [{ key: "calculate", value: function(t2, e2, i2) {
        this.eulerIntegrate(t2, e2, i2);
      } }, { key: "eulerIntegrate", value: function(t2, e2, i2) {
        t2.sleep || (t2.old.p.copy(t2.p), t2.old.v.copy(t2.v), t2.a.multiplyScalar(1 / t2.mass), t2.v.add(t2.a.multiplyScalar(e2)), t2.p.add(t2.old.v.multiplyScalar(e2)), i2 && t2.v.multiplyScalar(i2), t2.a.clear());
      } }]), D);
      function D(t2) {
        o(this, D), this.type = t2;
      }
      var V = (t(M, [{ key: "addRenderer", value: function(t2) {
        t2.init(this), this.renderers.push(t2);
      } }, { key: "removeRenderer", value: function(t2) {
        var e2 = this.renderers.indexOf(t2);
        this.renderers.splice(e2, 1), t2.remove(this);
      } }, { key: "addEmitter", value: function(t2) {
        this.emitters.push(t2), (t2.parent = this).dispatchEvent(M.EMITTER_ADDED, t2);
      } }, { key: "removeEmitter", value: function(t2) {
        var e2 = this.emitters.indexOf(t2);
        this.emitters.splice(e2, 1), t2.parent = null, this.dispatchEvent(M.EMITTER_REMOVED, t2);
      } }, { key: "update", value: function() {
        "auto" === this._fps ? (this.dispatchEvent(M.PROTON_UPDATE), M.USE_CLOCK ? (this.then || (this.then = (/* @__PURE__ */ new Date()).getTime()), this.now = (/* @__PURE__ */ new Date()).getTime(), this.elapsed = 1e-3 * (this.now - this.then), this.amendChangeTabsBug(), 0 < this.elapsed && this.emittersUpdate(this.elapsed), this.then = this.now) : this.emittersUpdate(M.DEFAULT_INTERVAL), this.dispatchEvent(M.PROTON_UPDATE_AFTER)) : (this.then || (this.then = (/* @__PURE__ */ new Date()).getTime()), this.now = (/* @__PURE__ */ new Date()).getTime(), this.elapsed = 1e-3 * (this.now - this.then), this.elapsed > this._interval && (this.dispatchEvent(M.PROTON_UPDATE), this.emittersUpdate(this._interval), this.then = this.now - this.elapsed % this._interval * 1e3, this.dispatchEvent(M.PROTON_UPDATE_AFTER)));
      } }, { key: "emittersUpdate", value: function(t2) {
        for (var e2 = this.emitters.length; e2--; )
          this.emitters[e2].update(t2);
      } }, { key: "amendChangeTabsBug", value: function() {
        M.amendChangeTabsBug && 0.5 < this.elapsed && (this.then = (/* @__PURE__ */ new Date()).getTime(), this.elapsed = 0);
      } }, { key: "getCount", value: function() {
        for (var t2 = 0, e2 = this.emitters.length; e2--; )
          t2 += this.emitters[e2].particles.length;
        return t2;
      } }, { key: "getAllParticles", value: function() {
        for (var t2 = [], e2 = this.emitters.length; e2--; )
          t2 = t2.concat(this.emitters[e2].particles);
        return t2;
      } }, { key: "destroyAllEmitters", value: function() {
        P.destroyAll(this.emitters);
      } }, { key: "destroy", value: function(t2) {
        function e2() {
          i2.time = 0, i2.then = 0, i2.pool.destroy(), P.destroyAll(i2.emitters), P.destroyAll(i2.renderers, i2.getAllParticles());
        }
        var i2 = this;
        0 < arguments.length && void 0 !== t2 && t2 ? setTimeout(e2, 200) : e2();
      } }, { key: "fps", set: function(t2) {
        this._fps = t2, this._interval = "auto" === t2 ? M.DEFAULT_INTERVAL : s.floor(1 / t2, 7);
      }, get: function() {
        return this._fps;
      } }]), M);
      function M(t2) {
        o(this, M), this.emitters = [], this.renderers = [], this.time = 0, this.now = 0, this.then = 0, this.elapsed = 0, this.stats = new O(this), this.pool = new T(80), this.integrationType = P.initValue(t2, M.EULER), this.integrator = new I(this.integrationType), this._fps = "auto", this._interval = M.DEFAULT_INTERVAL;
      }
      V.USE_CLOCK = false, V.MEASURE = 100, V.EULER = "euler", V.RK2 = "runge-kutta2", V.PARTICLE_CREATED = "PARTICLE_CREATED", V.PARTICLE_UPDATE = "PARTICLE_UPDATE", V.PARTICLE_SLEEP = "PARTICLE_SLEEP", V.PARTICLE_DEAD = "PARTICLE_DEAD", V.EMITTER_ADDED = "EMITTER_ADDED", V.EMITTER_REMOVED = "EMITTER_REMOVED", V.PROTON_UPDATE = "PROTON_UPDATE", V.PROTON_UPDATE_AFTER = "PROTON_UPDATE_AFTER", V.DEFAULT_INTERVAL = 0.0167, V.amendChangeTabsBug = true, C.bind(V);
      var B = (t(L, [{ key: "reset", value: function() {
        this.r = 255, this.g = 255, this.b = 255;
      } }]), L);
      function L() {
        var t2 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 255, e2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 255, i2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 255;
        o(this, L), this.r = t2, this.g = e2, this.b = i2;
      }
      var U = { easeLinear: function(t2) {
        return t2;
      }, easeInQuad: function(t2) {
        return Math.pow(t2, 2);
      }, easeOutQuad: function(t2) {
        return -(Math.pow(t2 - 1, 2) - 1);
      }, easeInOutQuad: function(t2) {
        return (t2 /= 0.5) < 1 ? 0.5 * Math.pow(t2, 2) : -0.5 * ((t2 -= 2) * t2 - 2);
      }, easeInCubic: function(t2) {
        return Math.pow(t2, 3);
      }, easeOutCubic: function(t2) {
        return Math.pow(t2 - 1, 3) + 1;
      }, easeInOutCubic: function(t2) {
        return (t2 /= 0.5) < 1 ? 0.5 * Math.pow(t2, 3) : 0.5 * (Math.pow(t2 - 2, 3) + 2);
      }, easeInQuart: function(t2) {
        return Math.pow(t2, 4);
      }, easeOutQuart: function(t2) {
        return -(Math.pow(t2 - 1, 4) - 1);
      }, easeInOutQuart: function(t2) {
        return (t2 /= 0.5) < 1 ? 0.5 * Math.pow(t2, 4) : -0.5 * ((t2 -= 2) * Math.pow(t2, 3) - 2);
      }, easeInSine: function(t2) {
        return 1 - Math.cos(t2 * s.PI_2);
      }, easeOutSine: function(t2) {
        return Math.sin(t2 * s.PI_2);
      }, easeInOutSine: function(t2) {
        return -0.5 * (Math.cos(Math.PI * t2) - 1);
      }, easeInExpo: function(t2) {
        return 0 === t2 ? 0 : Math.pow(2, 10 * (t2 - 1));
      }, easeOutExpo: function(t2) {
        return 1 === t2 ? 1 : 1 - Math.pow(2, -10 * t2);
      }, easeInOutExpo: function(t2) {
        return 0 === t2 ? 0 : 1 === t2 ? 1 : (t2 /= 0.5) < 1 ? 0.5 * Math.pow(2, 10 * (t2 - 1)) : 0.5 * (2 - Math.pow(2, -10 * --t2));
      }, easeInCirc: function(t2) {
        return -(Math.sqrt(1 - t2 * t2) - 1);
      }, easeOutCirc: function(t2) {
        return Math.sqrt(1 - Math.pow(t2 - 1, 2));
      }, easeInOutCirc: function(t2) {
        return (t2 /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t2 * t2) - 1) : 0.5 * (Math.sqrt(1 - (t2 -= 2) * t2) + 1);
      }, easeInBack: function(t2) {
        return t2 * t2 * (2.70158 * t2 - 1.70158);
      }, easeOutBack: function(t2) {
        return --t2 * t2 * (2.70158 * t2 + 1.70158) + 1;
      }, easeInOutBack: function(t2) {
        var e2 = 1.70158;
        return (t2 /= 0.5) < 1 ? t2 * t2 * ((1 + (e2 *= 1.525)) * t2 - e2) * 0.5 : 0.5 * ((t2 -= 2) * t2 * ((1 + (e2 *= 1.525)) * t2 + e2) + 2);
      }, getEasing: function(t2) {
        return "function" == typeof t2 ? t2 : this[t2] || this.easeLinear;
      } }, F = (t(z, [{ key: "set", value: function(t2, e2) {
        return this.x = t2, this.y = e2, this;
      } }, { key: "setX", value: function(t2) {
        return this.x = t2, this;
      } }, { key: "setY", value: function(t2) {
        return this.y = t2, this;
      } }, { key: "getGradient", value: function() {
        return 0 !== this.x ? Math.atan2(this.y, this.x) : 0 < this.y ? s.PI_2 : this.y < 0 ? -s.PI_2 : void 0;
      } }, { key: "copy", value: function(t2) {
        return this.x = t2.x, this.y = t2.y, this;
      } }, { key: "add", value: function(t2, e2) {
        return void 0 !== e2 ? this.addVectors(t2, e2) : (this.x += t2.x, this.y += t2.y, this);
      } }, { key: "addXY", value: function(t2, e2) {
        return this.x += t2, this.y += e2, this;
      } }, { key: "addVectors", value: function(t2, e2) {
        return this.x = t2.x + e2.x, this.y = t2.y + e2.y, this;
      } }, { key: "sub", value: function(t2, e2) {
        return void 0 !== e2 ? this.subVectors(t2, e2) : (this.x -= t2.x, this.y -= t2.y, this);
      } }, { key: "subVectors", value: function(t2, e2) {
        return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this;
      } }, { key: "divideScalar", value: function(t2) {
        return 0 !== t2 ? (this.x /= t2, this.y /= t2) : this.set(0, 0), this;
      } }, { key: "multiplyScalar", value: function(t2) {
        return this.x *= t2, this.y *= t2, this;
      } }, { key: "negate", value: function() {
        return this.multiplyScalar(-1);
      } }, { key: "dot", value: function(t2) {
        return this.x * t2.x + this.y * t2.y;
      } }, { key: "lengthSq", value: function() {
        return this.x * this.x + this.y * this.y;
      } }, { key: "length", value: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      } }, { key: "normalize", value: function() {
        return this.divideScalar(this.length());
      } }, { key: "distanceTo", value: function(t2) {
        return Math.sqrt(this.distanceToSquared(t2));
      } }, { key: "rotate", value: function(t2) {
        var e2 = this.x, i2 = this.y;
        return this.x = e2 * Math.cos(t2) + i2 * Math.sin(t2), this.y = -e2 * Math.sin(t2) + i2 * Math.cos(t2), this;
      } }, { key: "distanceToSquared", value: function(t2) {
        var e2 = this.x - t2.x, t2 = this.y - t2.y;
        return e2 * e2 + t2 * t2;
      } }, { key: "lerp", value: function(t2, e2) {
        return this.x += (t2.x - this.x) * e2, this.y += (t2.y - this.y) * e2, this;
      } }, { key: "equals", value: function(t2) {
        return t2.x === this.x && t2.y === this.y;
      } }, { key: "clear", value: function() {
        return this.x = 0, this.y = 0, this;
      } }, { key: "clone", value: function() {
        return new z(this.x, this.y);
      } }]), z);
      function z(t2, e2) {
        o(this, z), this.x = t2 || 0, this.y = e2 || 0;
      }
      var j = (t(N, [{ key: "getDirection", value: function() {
        return Math.atan2(this.v.x, -this.v.y) * s.N180_PI;
      } }, { key: "reset", value: function() {
        return this.life = 1 / 0, this.age = 0, this.dead = false, this.sleep = false, this.body = null, this.sprite = null, this.parent = null, this.energy = 1, this.mass = 1, this.radius = 10, this.alpha = 1, this.scale = 1, this.rotation = 0, this.color = null, this.p.set(0, 0), this.v.set(0, 0), this.a.set(0, 0), this.old.p.set(0, 0), this.old.v.set(0, 0), this.old.a.set(0, 0), this.easing = U.easeLinear, this.rgb.reset(), P.emptyObject(this.data), this.removeAllBehaviours(), this;
      } }, { key: "update", value: function(t2, e2) {
        this.sleep || (this.age += t2, this.applyBehaviours(t2, e2)), this.age < this.life ? (e2 = this.easing(this.age / this.life), this.energy = Math.max(1 - e2, 0)) : this.destroy();
      } }, { key: "applyBehaviours", value: function(t2, e2) {
        for (var i2 = this.behaviours.length, a2 = void 0, a2 = 0; a2 < i2; a2++)
          this.behaviours[a2] && this.behaviours[a2].applyBehaviour(this, t2, e2);
      } }, { key: "addBehaviour", value: function(t2) {
        this.behaviours.push(t2), t2.hasOwnProperty("parents") && t2.parents.push(this), t2.initialize(this);
      } }, { key: "addBehaviours", value: function(t2) {
        for (var e2 = t2.length, i2 = void 0, i2 = 0; i2 < e2; i2++)
          this.addBehaviour(t2[i2]);
      } }, { key: "removeBehaviour", value: function(t2) {
        t2 = this.behaviours.indexOf(t2);
        -1 < t2 && (this.behaviours.splice(t2, 1).parents = null);
      } }, { key: "removeAllBehaviours", value: function() {
        P.emptyArray(this.behaviours);
      } }, { key: "destroy", value: function() {
        this.removeAllBehaviours(), this.energy = 0, this.dead = true, this.parent = null;
      } }]), N);
      function N(t2) {
        o(this, N), this.id = "", this.old = {}, this.data = {}, this.behaviours = [], this.p = [], this.v = [], this.a = [], this.rgb = {}, this.name = "Particle", this.id = A.id(this.name), this.old = {}, this.data = {}, this.behaviours = [], this.p = new F(), this.v = new F(), this.a = new F(), this.old.p = new F(), this.old.v = new F(), this.old.a = new F(), this.rgb = new B(), this.reset(), t2 && P.setProp(this, t2);
      }
      var H = { hexToRgb: function(t2) {
        t2 = "#" === t2.charAt(0) ? t2.substring(1, 7) : t2;
        return { r: parseInt(t2.substring(0, 2), 16), g: parseInt(t2.substring(2, 4), 16), b: parseInt(t2.substring(4, 6), 16) };
      }, rgbToHex: function(t2) {
        return "rgb(" + t2.r + ", " + t2.g + ", " + t2.b + ")";
      }, getHex16FromParticle: function(t2) {
        return 65536 * Number(t2.rgb.r) + 256 * Number(t2.rgb.g) + Number(t2.rgb.b);
      } }, q = (t(G, [{ key: "set", value: function(t2, e2) {
        return this.r = t2, this.tha = e2, this;
      } }, { key: "setR", value: function(t2) {
        return this.r = t2, this;
      } }, { key: "setTha", value: function(t2) {
        return this.tha = t2, this;
      } }, { key: "copy", value: function(t2) {
        return this.r = t2.r, this.tha = t2.tha, this;
      } }, { key: "toVector", value: function() {
        return new F(this.getX(), this.getY());
      } }, { key: "getX", value: function() {
        return this.r * Math.sin(this.tha);
      } }, { key: "getY", value: function() {
        return -this.r * Math.cos(this.tha);
      } }, { key: "normalize", value: function() {
        return this.r = 1, this;
      } }, { key: "equals", value: function(t2) {
        return t2.r === this.r && t2.tha === this.tha;
      } }, { key: "clear", value: function() {
        return this.r = 0, this.tha = 0, this;
      } }, { key: "clone", value: function() {
        return new G(this.r, this.tha);
      } }]), G);
      function G(t2, e2) {
        o(this, G), this.r = Math.abs(t2) || 0, this.tha = e2 || 0;
      }
      var X = { create: function(t2) {
        var e2 = new Float32Array(9);
        return t2 && this.set(t2, e2), e2;
      }, set: function(t2, e2) {
        for (var i2 = 0; i2 < 9; i2++)
          e2[i2] = t2[i2];
        return e2;
      }, multiply: function(t2, e2, i2) {
        var a2 = t2[0], r2 = t2[1], n2 = t2[2], s2 = t2[3], o2 = t2[4], h2 = t2[6], l2 = t2[7], u2 = e2[0], c2 = e2[1], d2 = e2[2], y2 = e2[3], p2 = e2[4], t2 = e2[6], e2 = e2[7];
        return i2[0] = u2 * a2 + c2 * s2, i2[1] = u2 * r2 + c2 * o2, i2[2] = n2 * d2, i2[3] = y2 * a2 + p2 * s2, i2[4] = y2 * r2 + p2 * o2, i2[6] = t2 * a2 + e2 * s2 + h2, i2[7] = t2 * r2 + e2 * o2 + l2, i2;
      }, inverse: function(t2, e2) {
        var i2 = t2[0], a2 = t2[1], r2 = t2[3], n2 = t2[4], s2 = t2[6], o2 = t2[7], h2 = -r2, t2 = o2 * r2 - n2 * s2, r2 = 1 / (i2 * n2 + a2 * h2);
        return e2[0] = n2 * r2, e2[1] = -a2 * r2, e2[3] = h2 * r2, e2[4] = i2 * r2, e2[6] = t2 * r2, e2[7] = (-o2 * i2 + a2 * s2) * r2, e2;
      }, multiplyVec2: function(t2, e2, i2) {
        var a2 = e2[0], e2 = e2[1];
        return i2[0] = a2 * t2[0] + e2 * t2[3] + t2[6], i2[1] = a2 * t2[1] + e2 * t2[4] + t2[7], i2;
      } }, Y = (r(W, l), t(W, [{ key: "getValue", value: function() {
        var t2 = P.getRandFromArray(this._arr);
        return "random" === t2 || "Random" === t2 ? s.randomColor() : t2;
      } }], [{ key: "createArraySpan", value: function(t2) {
        return t2 ? t2 instanceof W ? t2 : new W(t2) : null;
      } }]), W);
      function W(t2) {
        o(this, W);
        var e2 = h(this, (W.__proto__ || Object.getPrototypeOf(W)).call(this));
        return e2._arr = P.toArray(t2), e2;
      }
      var Z = (t(Q, [{ key: "contains", value: function(t2, e2) {
        return t2 <= this.right && t2 >= this.x && e2 <= this.bottom && e2 >= this.y;
      } }]), Q);
      function Q(t2, e2, i2, a2) {
        o(this, Q), this.x = t2, this.y = e2, this.width = i2, this.height = a2, this.bottom = this.y + this.height, this.right = this.x + this.width;
      }
      var K = (t(J, [{ key: "init", value: function() {
        this.startTime = 0, this.nextTime = this.timePan.getValue();
      } }, { key: "getValue", value: function(t2) {
        return this.startTime += t2, this.startTime >= this.nextTime ? (this.startTime = 0, this.nextTime = this.timePan.getValue(), 1 === this.numPan.b ? 0.5 < this.numPan.getValue(false) ? 1 : 0 : this.numPan.getValue(true)) : 0;
      } }]), J);
      function J(t2, e2) {
        o(this, J), this.numPan = l.setSpanValue(P.initValue(t2, 1)), this.timePan = l.setSpanValue(P.initValue(e2, 1)), this.startTime = 0, this.nextTime = 0, this.init();
      }
      var $ = (t(tt, [{ key: "reset", value: function() {
      } }, { key: "init", value: function(t2, e2) {
        e2 ? this.initialize(e2) : this.initialize(t2);
      } }, { key: "initialize", value: function() {
      } }]), tt);
      function tt() {
        o(this, tt);
      }
      var et = (r(it, $), t(it, [{ key: "initialize", value: function(t2) {
        this.lifePan.a === 1 / 0 ? t2.life = 1 / 0 : t2.life = this.lifePan.getValue();
      } }]), it);
      function it(t2, e2, i2) {
        o(this, it);
        var a2 = h(this, (it.__proto__ || Object.getPrototypeOf(it)).call(this));
        return a2.lifePan = l.setSpanValue(t2, e2, i2), a2.name = "Life", a2;
      }
      var at = (t(rt, [{ key: "getPosition", value: function() {
      } }, { key: "crossing", value: function() {
      } }]), rt);
      function rt() {
        o(this, rt), this.vector = new F(0, 0), this.random = 0, this.crossType = "dead", this.alert = true;
      }
      var nt = (r(st, at), t(st, [{ key: "getPosition", value: function() {
        return this.vector.x = this.x, this.vector.y = this.y, this.vector;
      } }, { key: "crossing", value: function() {
        this.alert && (console.error("Sorry, PointZone does not support crossing method!"), this.alert = false);
      } }]), st);
      function st(t2, e2) {
        o(this, st);
        var i2 = h(this, (st.__proto__ || Object.getPrototypeOf(st)).call(this));
        return i2.x = t2, i2.y = e2, i2;
      }
      var ot = (r(ht, $), t(ht, [{ key: "reset", value: function(t2) {
        this.zone = P.initValue(t2, new nt());
      } }, { key: "initialize", value: function(t2) {
        this.zone.getPosition(), t2.p.x = this.zone.vector.x, t2.p.y = this.zone.vector.y;
      } }]), ht);
      function ht(t2) {
        o(this, ht);
        var e2 = h(this, (ht.__proto__ || Object.getPrototypeOf(ht)).call(this));
        return e2.zone = P.initValue(t2, new nt()), e2.name = "Position", e2;
      }
      var lt = (r(ut, $), t(ut, [{ key: "reset", value: function(t2, e2, i2) {
        this.rPan = l.setSpanValue(t2), this.thaPan = l.setSpanValue(e2), this.type = P.initValue(i2, "vector");
      } }, { key: "normalizeVelocity", value: function(t2) {
        return t2 * V.MEASURE;
      } }, { key: "initialize", value: function(t2) {
        var e2;
        "p" === this.type || "P" === this.type || "polar" === this.type ? (e2 = new q(this.normalizeVelocity(this.rPan.getValue()), this.thaPan.getValue() * s.PI_180), t2.v.x = e2.getX(), t2.v.y = e2.getY()) : (t2.v.x = this.normalizeVelocity(this.rPan.getValue()), t2.v.y = this.normalizeVelocity(this.thaPan.getValue()));
      } }]), ut);
      function ut(t2, e2, i2) {
        o(this, ut);
        var a2 = h(this, (ut.__proto__ || Object.getPrototypeOf(ut)).call(this));
        return a2.rPan = l.setSpanValue(t2), a2.thaPan = l.setSpanValue(e2), a2.type = P.initValue(i2, "vector"), a2.name = "Velocity", a2;
      }
      var ct = (r(dt, $), t(dt, [{ key: "initialize", value: function(t2) {
        t2.mass = this.massPan.getValue();
      } }]), dt);
      function dt(t2, e2, i2) {
        o(this, dt);
        var a2 = h(this, (dt.__proto__ || Object.getPrototypeOf(dt)).call(this));
        return a2.massPan = l.setSpanValue(t2, e2, i2), a2.name = "Mass", a2;
      }
      var yt = (r(pt, $), t(pt, [{ key: "reset", value: function(t2, e2, i2) {
        this.radius = l.setSpanValue(t2, e2, i2);
      } }, { key: "initialize", value: function(t2) {
        t2.radius = this.radius.getValue(), t2.data.oldRadius = t2.radius;
      } }]), pt);
      function pt(t2, e2, i2) {
        o(this, pt);
        var a2 = h(this, (pt.__proto__ || Object.getPrototypeOf(pt)).call(this));
        return a2.radius = l.setSpanValue(t2, e2, i2), a2.name = "Radius", a2;
      }
      var ft = (r(vt, $), t(vt, [{ key: "initialize", value: function(t2) {
        var e2 = this.image.getValue();
        t2.body = "string" == typeof e2 ? { width: this.w, height: this.h, src: e2, isInner: true, inner: true } : e2;
      } }, { key: "setSpanValue", value: function(t2) {
        return t2 instanceof Y ? t2 : new Y(t2);
      } }]), vt);
      function vt(t2, e2, i2) {
        o(this, vt);
        var a2 = h(this, (vt.__proto__ || Object.getPrototypeOf(vt)).call(this));
        return a2.image = a2.setSpanValue(t2), a2.w = P.initValue(e2, 20), a2.h = P.initValue(i2, a2.w), a2.name = "Body", a2;
      }
      var gt = (t(mt, [{ key: "reset", value: function(t2, e2) {
        this.life = P.initValue(t2, 1 / 0), this.easing = U.getEasing(e2);
      } }, { key: "normalizeForce", value: function(t2) {
        return t2.multiplyScalar(V.MEASURE);
      } }, { key: "normalizeValue", value: function(t2) {
        return t2 * V.MEASURE;
      } }, { key: "initialize", value: function() {
      } }, { key: "calculate", value: function(t2, e2) {
        this.age += e2, this.age >= this.life || this.dead ? (this.energy = 0, this.dead = true, this.destroy()) : (t2 = this.easing(t2.age / t2.life), this.energy = Math.max(1 - t2, 0));
      } }, { key: "destroy", value: function() {
        for (var t2 = this.parents.length; t2--; )
          this.parents[t2].removeBehaviour(this);
        this.parents.length = 0;
      } }]), mt);
      function mt(t2, e2) {
        o(this, mt), this.life = P.initValue(t2, 1 / 0), this.easing = U.getEasing(e2), this.age = 0, this.energy = 1, this.dead = false, this.parents = [], this.id = "Behaviour_" + mt.id++, this.name = "Behaviour";
      }
      gt.id = 0;
      var bt = (r(_t, gt), t(_t, [{ key: "reset", value: function(t2, e2, i2, a2) {
        this.force = this.normalizeForce(new F(t2, e2)), i2 && n(_t.prototype.__proto__ || Object.getPrototypeOf(_t.prototype), "reset", this).call(this, i2, a2);
      } }, { key: "applyBehaviour", value: function(t2, e2, i2) {
        this.calculate(t2, e2, i2), t2.a.add(this.force);
      } }]), _t);
      function _t(t2, e2, i2, a2) {
        o(this, _t);
        a2 = h(this, (_t.__proto__ || Object.getPrototypeOf(_t)).call(this, i2, a2));
        return a2.force = a2.normalizeForce(new F(t2, e2)), a2.name = "Force", a2;
      }
      var xt = (r(kt, gt), t(kt, [{ key: "reset", value: function(t2, e2, i2, a2, r2) {
        this.targetPosition = P.initValue(t2, new F()), this.radius = P.initValue(i2, 1e3), this.force = P.initValue(this.normalizeValue(e2), 100), this.radiusSq = this.radius * this.radius, this.attractionForce = new F(), this.lengthSq = 0, a2 && n(kt.prototype.__proto__ || Object.getPrototypeOf(kt.prototype), "reset", this).call(this, a2, r2);
      } }, { key: "applyBehaviour", value: function(t2, e2, i2) {
        this.calculate(t2, e2, i2), this.attractionForce.copy(this.targetPosition), this.attractionForce.sub(t2.p), this.lengthSq = this.attractionForce.lengthSq(), 4e-5 < this.lengthSq && this.lengthSq < this.radiusSq && (this.attractionForce.normalize(), this.attractionForce.multiplyScalar(1 - this.lengthSq / this.radiusSq), this.attractionForce.multiplyScalar(this.force), t2.a.add(this.attractionForce));
      } }]), kt);
      function kt(t2, e2, i2, a2, r2) {
        o(this, kt);
        r2 = h(this, (kt.__proto__ || Object.getPrototypeOf(kt)).call(this, a2, r2));
        return r2.targetPosition = P.initValue(t2, new F()), r2.radius = P.initValue(i2, 1e3), r2.force = P.initValue(r2.normalizeValue(e2), 100), r2.radiusSq = r2.radius * r2.radius, r2.attractionForce = new F(), r2.lengthSq = 0, r2.name = "Attraction", r2;
      }
      var Pt = (r(Et, gt), t(Et, [{ key: "reset", value: function(t2, e2, i2, a2, r2) {
        this.panFoce = new F(t2, e2), this.panFoce = this.normalizeForce(this.panFoce), this.delay = i2, a2 && n(Et.prototype.__proto__ || Object.getPrototypeOf(Et.prototype), "reset", this).call(this, a2, r2);
      } }, { key: "initialize", value: function(t2) {
        t2.data.time = 0;
      } }, { key: "applyBehaviour", value: function(t2, e2, i2) {
        this.calculate(t2, e2, i2), t2.data.time += e2, t2.data.time >= this.delay && (t2.a.addXY(s.randomAToB(-this.panFoce.x, this.panFoce.x), s.randomAToB(-this.panFoce.y, this.panFoce.y)), t2.data.time = 0);
      } }]), Et);
      function Et(t2, e2, i2, a2, r2) {
        o(this, Et);
        r2 = h(this, (Et.__proto__ || Object.getPrototypeOf(Et)).call(this, a2, r2));
        return r2.reset(t2, e2, i2), r2.time = 0, r2.name = "RandomDrift", r2;
      }
      var At = (r(Tt, bt), t(Tt, [{ key: "reset", value: function(t2, e2, i2) {
        n(Tt.prototype.__proto__ || Object.getPrototypeOf(Tt.prototype), "reset", this).call(this, 0, t2, e2, i2);
      } }]), Tt);
      function Tt(t2, e2, i2) {
        o(this, Tt);
        i2 = h(this, (Tt.__proto__ || Object.getPrototypeOf(Tt)).call(this, 0, t2, e2, i2));
        return i2.name = "Gravity", i2;
      }
      var Rt = (r(Ot, gt), t(Ot, [{ key: "reset", value: function(t2, e2, i2, a2, r2) {
        this.emitter = P.initValue(t2, null), this.mass = P.initValue(e2, true), this.callback = P.initValue(i2, null), this.collisionPool = [], this.delta = new F(), a2 && n(Ot.prototype.__proto__ || Object.getPrototypeOf(Ot.prototype), "reset", this).call(this, a2, r2);
      } }, { key: "applyBehaviour", value: function(t2, e2, i2) {
        for (var a2, r2, n2, s2, o2, h2, l2 = (this.emitter ? this.emitter.particles : this.pool).slice(i2), u2 = l2.length, c2 = void 0, d2 = void 0, d2 = 0; d2 < u2; d2++) {
          (c2 = l2[d2]) !== t2 && (this.delta.copy(c2.p), this.delta.sub(t2.p), (a2 = this.delta.lengthSq()) <= (h2 = t2.radius + c2.radius) * h2 && (r2 = h2 - Math.sqrt(a2), r2 += 0.5, n2 = t2.mass + c2.mass, s2 = this.mass ? c2.mass / n2 : 0.5, o2 = this.mass ? t2.mass / n2 : 0.5, t2.p.add(this.delta.clone().normalize().multiplyScalar(r2 * -s2)), c2.p.add(this.delta.normalize().multiplyScalar(r2 * o2)), this.callback && this.callback(t2, c2)));
        }
      } }]), Ot);
      function Ot(t2, e2, i2, a2, r2) {
        o(this, Ot);
        r2 = h(this, (Ot.__proto__ || Object.getPrototypeOf(Ot)).call(this, a2, r2));
        return r2.reset(t2, e2, i2), r2.name = "Collision", r2;
      }
      var wt = (r(Ct, gt), t(Ct, [{ key: "reset", value: function(t2, e2, i2, a2) {
        this.zone = t2, this.zone.crossType = P.initValue(e2, "dead"), i2 && n(Ct.prototype.__proto__ || Object.getPrototypeOf(Ct.prototype), "reset", this).call(this, i2, a2);
      } }, { key: "applyBehaviour", value: function(t2, e2, i2) {
        this.calculate(t2, e2, i2), this.zone.crossing(t2);
      } }]), Ct);
      function Ct(t2, e2, i2, a2) {
        o(this, Ct);
        a2 = h(this, (Ct.__proto__ || Object.getPrototypeOf(Ct)).call(this, i2, a2));
        return a2.reset(t2, e2), a2.name = "CrossZone", a2;
      }
      var St = (r(It, gt), t(It, [{ key: "reset", value: function(t2, e2, i2, a2) {
        this.same = null == e2, this.a = l.setSpanValue(P.initValue(t2, 1)), this.b = l.setSpanValue(e2), i2 && n(It.prototype.__proto__ || Object.getPrototypeOf(It.prototype), "reset", this).call(this, i2, a2);
      } }, { key: "initialize", value: function(t2) {
        t2.data.alphaA = this.a.getValue(), this.same ? t2.data.alphaB = t2.data.alphaA : t2.data.alphaB = this.b.getValue();
      } }, { key: "applyBehaviour", value: function(t2, e2, i2) {
        this.calculate(t2, e2, i2), t2.alpha = t2.data.alphaB + (t2.data.alphaA - t2.data.alphaB) * this.energy, t2.alpha < 1e-3 && (t2.alpha = 0);
      } }]), It);
      function It(t2, e2, i2, a2) {
        o(this, It);
        a2 = h(this, (It.__proto__ || Object.getPrototypeOf(It)).call(this, i2, a2));
        return a2.reset(t2, e2), a2.name = "Alpha", a2;
      }
      var Dt = (r(Vt, gt), t(Vt, [{ key: "reset", value: function(t2, e2, i2, a2) {
        this.same = null == e2, this.a = l.setSpanValue(P.initValue(t2, 1)), this.b = l.setSpanValue(e2), i2 && n(Vt.prototype.__proto__ || Object.getPrototypeOf(Vt.prototype), "reset", this).call(this, i2, a2);
      } }, { key: "initialize", value: function(t2) {
        t2.data.scaleA = this.a.getValue(), t2.data.oldRadius = t2.radius, t2.data.scaleB = this.same ? t2.data.scaleA : this.b.getValue();
      } }, { key: "applyBehaviour", value: function(t2, e2, i2) {
        this.calculate(t2, e2, i2), t2.scale = t2.data.scaleB + (t2.data.scaleA - t2.data.scaleB) * this.energy, t2.scale < 1e-4 && (t2.scale = 0), t2.radius = t2.data.oldRadius * t2.scale;
      } }]), Vt);
      function Vt(t2, e2, i2, a2) {
        o(this, Vt);
        a2 = h(this, (Vt.__proto__ || Object.getPrototypeOf(Vt)).call(this, i2, a2));
        return a2.reset(t2, e2), a2.name = "Scale", a2;
      }
      var Mt = (r(Bt, gt), t(Bt, [{ key: "reset", value: function(t2, e2, i2, a2, r2) {
        this.same = null == e2, this.a = l.setSpanValue(P.initValue(t2, "Velocity")), this.b = l.setSpanValue(P.initValue(e2, 0)), this.style = P.initValue(i2, "to"), a2 && n(Bt.prototype.__proto__ || Object.getPrototypeOf(Bt.prototype), "reset", this).call(this, a2, r2);
      } }, { key: "initialize", value: function(t2) {
        t2.rotation = this.a.getValue(), t2.data.rotationA = this.a.getValue(), this.same || (t2.data.rotationB = this.b.getValue());
      } }, { key: "applyBehaviour", value: function(t2, e2, i2) {
        this.calculate(t2, e2, i2), this.same ? "V" !== this.a.a && "Velocity" !== this.a.a && "v" !== this.a.a || (t2.rotation = t2.getDirection()) : "to" === this.style || "TO" === this.style || "_" === this.style ? t2.rotation += t2.data.rotationB + (t2.data.rotationA - t2.data.rotationB) * this.energy : t2.rotation += t2.data.rotationB;
      } }]), Bt);
      function Bt(t2, e2, i2, a2, r2) {
        o(this, Bt);
        r2 = h(this, (Bt.__proto__ || Object.getPrototypeOf(Bt)).call(this, a2, r2));
        return r2.reset(t2, e2, i2), r2.name = "Rotate", r2;
      }
      var Lt = (r(Ut, gt), t(Ut, [{ key: "reset", value: function(t2, e2, i2, a2) {
        this.a = Y.createArraySpan(t2), this.b = Y.createArraySpan(e2), i2 && n(Ut.prototype.__proto__ || Object.getPrototypeOf(Ut.prototype), "reset", this).call(this, i2, a2);
      } }, { key: "initialize", value: function(t2) {
        t2.color = this.a.getValue(), t2.data.colorA = H.hexToRgb(t2.color), this.b && (t2.data.colorB = H.hexToRgb(this.b.getValue()));
      } }, { key: "applyBehaviour", value: function(t2, e2, i2) {
        this.b ? (this.calculate(t2, e2, i2), t2.rgb.r = t2.data.colorB.r + (t2.data.colorA.r - t2.data.colorB.r) * this.energy, t2.rgb.g = t2.data.colorB.g + (t2.data.colorA.g - t2.data.colorB.g) * this.energy, t2.rgb.b = t2.data.colorB.b + (t2.data.colorA.b - t2.data.colorB.b) * this.energy, t2.rgb.r = Math.floor(t2.rgb.r), t2.rgb.g = Math.floor(t2.rgb.g), t2.rgb.b = Math.floor(t2.rgb.b)) : (t2.rgb.r = t2.data.colorA.r, t2.rgb.g = t2.data.colorA.g, t2.rgb.b = t2.data.colorA.b);
      } }]), Ut);
      function Ut(t2, e2, i2, a2) {
        o(this, Ut);
        a2 = h(this, (Ut.__proto__ || Object.getPrototypeOf(Ut)).call(this, i2, a2));
        return a2.reset(t2, e2), a2.name = "Color", a2;
      }
      var Ft = "changing", zt = (r(jt, gt), t(jt, [{ key: "setAngleAndForce", value: function(t2, e2) {
        this.force = Ft, this.angle = s.PI / 2, "right" === t2 ? this.angle = s.PI / 2 : "left" === t2 ? this.angle = -s.PI / 2 : "random" === t2 ? this.angle = "random" : t2 instanceof l ? (this.angle = "span", this.span = t2) : t2 && (this.angle = t2), "changing" === String(e2).toLowerCase() || "chang" === String(e2).toLowerCase() || "auto" === String(e2).toLowerCase() ? this.force = Ft : e2 && (this.force = e2);
      } }, { key: "reset", value: function(t2, e2, i2, a2) {
        this.angle = s.PI / 2, this.setAngleAndForce(t2, e2), i2 && n(jt.prototype.__proto__ || Object.getPrototypeOf(jt.prototype), "reset", this).call(this, i2, a2);
      } }, { key: "initialize", value: function(t2) {
        "random" === this.angle ? t2.data.cangle = s.randomAToB(-s.PI, s.PI) : "span" === this.angle && (t2.data.cangle = this.span.getValue()), t2.data.cyclone = new F(0, 0);
      } }, { key: "applyBehaviour", value: function(t2, e2, i2) {
        this.calculate(t2, e2, i2);
        e2 = void 0, i2 = t2.v.getGradient();
        "random" === this.angle || "span" === this.angle ? i2 += t2.data.cangle : i2 += this.angle, e2 = this.force === Ft ? t2.v.length() / 100 : this.force, t2.data.cyclone.x = e2 * Math.cos(i2), t2.data.cyclone.y = e2 * Math.sin(i2), t2.data.cyclone = this.normalizeForce(t2.data.cyclone), t2.a.add(t2.data.cyclone);
      } }]), jt);
      function jt(t2, e2, i2, a2) {
        o(this, jt);
        a2 = h(this, (jt.__proto__ || Object.getPrototypeOf(jt)).call(this, i2, a2));
        return a2.setAngleAndForce(t2, e2), a2.name = "Cyclone", a2;
      }
      var Nt = (r(Ht, xt), t(Ht, [{ key: "reset", value: function(t2, e2, i2, a2, r2) {
        n(Ht.prototype.__proto__ || Object.getPrototypeOf(Ht.prototype), "reset", this).call(this, t2, e2, i2, a2, r2), this.force *= -1;
      } }]), Ht);
      function Ht(t2, e2, i2, a2, r2) {
        o(this, Ht);
        r2 = h(this, (Ht.__proto__ || Object.getPrototypeOf(Ht)).call(this, t2, e2, i2, a2, r2));
        return r2.force *= -1, r2.name = "Repulsion", r2;
      }
      var qt = (r(Gt, gt), t(Gt, [{ key: "reset", value: function(t2, e2, i2, a2) {
        this.distanceVec = new F(), this.centerPoint = P.initValue(t2, new F()), this.force = P.initValue(this.normalizeValue(e2), 100), i2 && n(Gt.prototype.__proto__ || Object.getPrototypeOf(Gt.prototype), "reset", this).call(this, i2, a2);
      } }, { key: "initialize", value: function() {
      } }, { key: "applyBehaviour", value: function(t2, e2) {
        this.distanceVec.set(this.centerPoint.x - t2.p.x, this.centerPoint.y - t2.p.y);
        var i2, a2 = this.distanceVec.lengthSq();
        0 !== a2 && (i2 = this.distanceVec.length(), i2 = this.force * e2 / (a2 * i2), t2.v.x += i2 * this.distanceVec.x, t2.v.y += i2 * this.distanceVec.y);
      } }]), Gt);
      function Gt(t2, e2, i2, a2) {
        o(this, Gt);
        a2 = h(this, (Gt.__proto__ || Object.getPrototypeOf(Gt)).call(this, i2, a2));
        return a2.distanceVec = new F(), a2.centerPoint = P.initValue(t2, new F()), a2.force = P.initValue(a2.normalizeValue(e2), 100), a2.name = "GravityWell", a2;
      }
      var Xt = { initialize: function(t2, e2, i2) {
        for (var a2 = i2.length, r2 = void 0, r2 = 0; r2 < a2; r2++)
          i2[r2] instanceof $ ? i2[r2].init(t2, e2) : this.init(t2, e2, i2[r2]);
        this.bindEmitter(t2, e2);
      }, init: function(t2, e2, i2) {
        P.setProp(e2, i2), P.setVectorVal(e2, i2);
      }, bindEmitter: function(t2, e2) {
        t2.bindEmitter && (e2.p.add(t2.p), e2.v.add(t2.v), e2.a.add(t2.a), e2.v.rotate(s.degreeTransform(t2.rotation)));
      } }, Yt = (r(Wt, j), t(Wt, [{ key: "emit", value: function(t2, e2) {
        this.stoped = false, this.emitTime = 0, this.totalTime = P.initValue(t2, 1 / 0), true === e2 || "life" === e2 || "destroy" === e2 ? this.life = "once" === t2 ? 1 : this.totalTime : isNaN(e2) || (this.life = e2), this.rate.init();
      } }, { key: "stop", value: function() {
        this.totalTime = -1, this.emitTime = 0, this.stoped = true;
      } }, { key: "preEmit", value: function(t2) {
        var e2 = this.stoped, i2 = this.emitTime, a2 = this.totalTime;
        this.stoped = false, this.emitTime = 0, this.totalTime = t2, this.rate.init();
        for (; 0.0167 < t2; )
          t2 -= 0.0167, this.update(0.0167);
        this.stoped = e2, this.emitTime = i2 + Math.max(t2, 0), this.totalTime = a2;
      } }, { key: "removeAllParticles", value: function() {
        for (var t2 = this.particles.length; t2--; )
          this.particles[t2].dead = true;
      } }, { key: "addSelfInitialize", value: function(t2) {
        t2.init ? t2.init(this) : this.initAll();
      } }, { key: "addInitialize", value: function() {
        for (var t2 = arguments.length, e2 = Array(t2), i2 = 0; i2 < t2; i2++)
          e2[i2] = arguments[i2];
        for (var a2 = e2.length; a2--; )
          this.initializes.push(e2[a2]);
      } }, { key: "removeInitialize", value: function(t2) {
        t2 = this.initializes.indexOf(t2);
        -1 < t2 && this.initializes.splice(t2, 1);
      } }, { key: "removeAllInitializers", value: function() {
        P.emptyArray(this.initializes);
      } }, { key: "addBehaviour", value: function() {
        for (var t2 = arguments.length, e2 = Array(t2), i2 = 0; i2 < t2; i2++)
          e2[i2] = arguments[i2];
        for (var a2 = arguments.length; a2--; ) {
          var r2 = e2[a2];
          this.behaviours.push(r2), r2.parents && r2.parents.push(this);
        }
      } }, { key: "removeBehaviour", value: function(t2) {
        var e2 = this.behaviours.indexOf(t2);
        return this.behaviours.splice(e2, 1), t2.parents && (e2 = t2.parents.indexOf(t2), t2.parents.splice(e2, 1)), e2;
      } }, { key: "removeAllBehaviours", value: function() {
        P.emptyArray(this.behaviours);
      } }, { key: "update", value: function(t2) {
        this.age += t2, (this.age >= this.life || this.dead) && this.destroy(), this.emitting(t2), this.integrate(t2);
      } }, { key: "integrate", value: function(t2) {
        if (this.parent) {
          var e2 = 1 - this.damping;
          this.parent.integrator.calculate(this, t2, e2);
          for (var i2 = void 0, a2 = void 0, i2 = this.particles.length - 1; 0 <= i2; i2--)
            (a2 = this.particles[i2]).update(t2, i2), this.parent.integrator.calculate(a2, t2, e2), this.dispatch("PARTICLE_UPDATE", a2), a2.dead && (this.dispatch("PARTICLE_DEAD", a2), this.parent.pool.expire(a2), this.particles.splice(i2, 1));
        }
      } }, { key: "dispatch", value: function(t2, e2) {
        this.parent && this.parent.dispatchEvent(t2, e2), this.bindEvent && this.dispatchEvent(t2, e2);
      } }, { key: "emitting", value: function(t2) {
        if ("once" === this.totalTime) {
          var e2 = void 0, i2 = this.rate.getValue(99999);
          for (0 < i2 && (this.emitSpeed = i2), e2 = 0; e2 < i2; e2++)
            this.createParticle();
          this.totalTime = "none";
        } else if (this.emitTime += t2, this.emitTime < this.totalTime) {
          var a2 = this.rate.getValue(t2), r2 = void 0;
          for (0 < a2 && (this.emitSpeed = a2), r2 = 0; r2 < a2; r2++)
            this.createParticle();
        }
      } }, { key: "createParticle", value: function(t2, e2) {
        var i2 = this.parent.pool.get(j);
        return this.setupParticle(i2, t2, e2), this.dispatch("PARTICLE_CREATED", i2), i2;
      } }, { key: "setupParticle", value: function(t2, e2, i2) {
        var a2 = this.initializes, r2 = this.behaviours;
        e2 && (a2 = P.toArray(e2)), i2 && (r2 = P.toArray(i2)), t2.reset(), Xt.initialize(this, t2, a2), t2.addBehaviours(r2), (t2.parent = this).particles.push(t2);
      } }, { key: "remove", value: function() {
        this.stop(), P.destroyAll(this.particles);
      } }, { key: "destroy", value: function() {
        this.dead = true, this.remove(), this.removeAllInitializers(), this.removeAllBehaviours(), this.parent && this.parent.removeEmitter(this);
      } }]), Wt);
      function Wt() {
        var t2 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        o(this, Wt);
        t2 = h(this, (Wt.__proto__ || Object.getPrototypeOf(Wt)).call(this, t2));
        return t2.particles = [], t2.behaviours = [], t2.initializes = [], t2.emitTime = 0, t2.emitSpeed = 0, t2.totalTime = -1, t2.damping = 6e-3, t2.bindEmitter = true, t2.rate = new K(1, 0.1), t2.name = "Emitter", t2.id = A.id(t2.name), t2;
      }
      C.bind(Yt);
      var Zt = (r(Qt, Yt), t(Qt, [{ key: "addSelfBehaviour", value: function() {
        for (var t2 = arguments.length, e2 = Array(t2), i2 = 0; i2 < t2; i2++)
          e2[i2] = arguments[i2];
        for (var a2 = void 0, r2 = e2.length, a2 = 0; a2 < r2; a2++) {
          var n2 = e2[a2];
          this.selfBehaviours.push(n2), n2.initialize(this);
        }
      } }, { key: "removeSelfBehaviour", value: function(t2) {
        t2 = this.selfBehaviours.indexOf(t2);
        -1 < t2 && this.selfBehaviours.splice(t2, 1);
      } }, { key: "update", value: function(t2) {
        if (n(Qt.prototype.__proto__ || Object.getPrototypeOf(Qt.prototype), "update", this).call(this, t2), !this.sleep)
          for (var e2 = this.selfBehaviours.length, i2 = void 0, i2 = 0; i2 < e2; i2++)
            this.selfBehaviours[i2].applyBehaviour(this, t2, i2);
      } }]), Qt);
      function Qt(t2) {
        o(this, Qt);
        t2 = h(this, (Qt.__proto__ || Object.getPrototypeOf(Qt)).call(this, t2));
        return t2.selfBehaviours = [], t2;
      }
      var Kt = (r(Jt, Yt), t(Jt, [{ key: "initEventHandler", value: function() {
        var e2 = this;
        this.mousemoveHandler = function(t2) {
          return e2.mousemove.call(e2, t2);
        }, this.mousedownHandler = function(t2) {
          return e2.mousedown.call(e2, t2);
        }, this.mouseupHandler = function(t2) {
          return e2.mouseup.call(e2, t2);
        }, this.mouseTarget.addEventListener("mousemove", this.mousemoveHandler, false);
      } }, { key: "emit", value: function() {
        this._allowEmitting = true;
      } }, { key: "stop", value: function() {
        this._allowEmitting = false;
      } }, { key: "mousemove", value: function(t2) {
        t2.layerX || 0 === t2.layerX ? (this.p.x += (t2.layerX - this.p.x) * this.ease, this.p.y += (t2.layerY - this.p.y) * this.ease) : !t2.offsetX && 0 !== t2.offsetX || (this.p.x += (t2.offsetX - this.p.x) * this.ease, this.p.y += (t2.offsetY - this.p.y) * this.ease), this._allowEmitting && n(Jt.prototype.__proto__ || Object.getPrototypeOf(Jt.prototype), "emit", this).call(this, "once");
      } }, { key: "destroy", value: function() {
        n(Jt.prototype.__proto__ || Object.getPrototypeOf(Jt.prototype), "destroy", this).call(this), this.mouseTarget.removeEventListener("mousemove", this.mousemoveHandler, false);
      } }]), Jt);
      function Jt(t2, e2, i2) {
        o(this, Jt);
        i2 = h(this, (Jt.__proto__ || Object.getPrototypeOf(Jt)).call(this, i2));
        return i2.mouseTarget = P.initValue(t2, window), i2.ease = P.initValue(e2, 0.7), i2._allowEmitting = false, i2.initEventHandler(), i2;
      }
      var $t = (t(te, [{ key: "setStroke", value: function(t2, e2) {
        t2 = 0 < arguments.length && void 0 !== t2 ? t2 : "#000000", e2 = 1 < arguments.length && void 0 !== e2 ? e2 : 1;
        this.stroke = { color: t2, thinkness: e2 };
      } }, { key: "initHandler", value: function() {
        var e2 = this;
        this._protonUpdateHandler = function() {
          e2.onProtonUpdate.call(e2);
        }, this._protonUpdateAfterHandler = function() {
          e2.onProtonUpdateAfter.call(e2);
        }, this._emitterAddedHandler = function(t2) {
          e2.onEmitterAdded.call(e2, t2);
        }, this._emitterRemovedHandler = function(t2) {
          e2.onEmitterRemoved.call(e2, t2);
        }, this._particleCreatedHandler = function(t2) {
          e2.onParticleCreated.call(e2, t2);
        }, this._particleUpdateHandler = function(t2) {
          e2.onParticleUpdate.call(e2, t2);
        }, this._particleDeadHandler = function(t2) {
          e2.onParticleDead.call(e2, t2);
        };
      } }, { key: "init", value: function(t2) {
        (this.parent = t2).addEventListener("PROTON_UPDATE", this._protonUpdateHandler), t2.addEventListener("PROTON_UPDATE_AFTER", this._protonUpdateAfterHandler), t2.addEventListener("EMITTER_ADDED", this._emitterAddedHandler), t2.addEventListener("EMITTER_REMOVED", this._emitterRemovedHandler), t2.addEventListener("PARTICLE_CREATED", this._particleCreatedHandler), t2.addEventListener("PARTICLE_UPDATE", this._particleUpdateHandler), t2.addEventListener("PARTICLE_DEAD", this._particleDeadHandler);
      } }, { key: "resize", value: function() {
      } }, { key: "destroy", value: function() {
        this.remove();
      } }, { key: "remove", value: function() {
        this.parent.removeEventListener("PROTON_UPDATE", this._protonUpdateHandler), this.parent.removeEventListener("PROTON_UPDATE_AFTER", this._protonUpdateAfterHandler), this.parent.removeEventListener("EMITTER_ADDED", this._emitterAddedHandler), this.parent.removeEventListener("EMITTER_REMOVED", this._emitterRemovedHandler), this.parent.removeEventListener("PARTICLE_CREATED", this._particleCreatedHandler), this.parent.removeEventListener("PARTICLE_UPDATE", this._particleUpdateHandler), this.parent.removeEventListener("PARTICLE_DEAD", this._particleDeadHandler), this.parent = null;
      } }, { key: "onProtonUpdate", value: function() {
      } }, { key: "onProtonUpdateAfter", value: function() {
      } }, { key: "onEmitterAdded", value: function() {
      } }, { key: "onEmitterRemoved", value: function() {
      } }, { key: "onParticleCreated", value: function() {
      } }, { key: "onParticleUpdate", value: function() {
      } }, { key: "onParticleDead", value: function() {
      } }]), te);
      function te(t2, e2) {
        o(this, te), this.pool = new T(), this.element = t2, this.stroke = e2, this.circleConf = { isCircle: true }, this.initHandler(), this.name = "BaseRenderer";
      }
      var ee = (r(ie, $t), t(ie, [{ key: "resize", value: function(t2, e2) {
        this.element.width = t2, this.element.height = e2;
      } }, { key: "onProtonUpdate", value: function() {
        this.context.clearRect(0, 0, this.element.width, this.element.height);
      } }, { key: "onParticleCreated", value: function(t2) {
        t2.body ? x(t2.body, this.addImg2Body, t2) : t2.color = t2.color || "#ff0000";
      } }, { key: "onParticleUpdate", value: function(t2) {
        t2.body ? t2.body instanceof Image && this.drawImage(t2) : this.drawCircle(t2);
      } }, { key: "onParticleDead", value: function(t2) {
        t2.body = null;
      } }, { key: "addImg2Body", value: function(t2, e2) {
        e2.body = t2;
      } }, { key: "drawImage", value: function(t2) {
        var e2, i2 = t2.body.width * t2.scale | 0, a2 = t2.body.height * t2.scale | 0, r2 = t2.p.x - i2 / 2, n2 = t2.p.y - a2 / 2;
        t2.color ? (t2.data.buffer || (t2.data.buffer = this.createBuffer(t2.body)), (e2 = t2.data.buffer.getContext("2d")).clearRect(0, 0, t2.data.buffer.width, t2.data.buffer.height), e2.globalAlpha = t2.alpha, e2.drawImage(t2.body, 0, 0), e2.globalCompositeOperation = "source-atop", e2.fillStyle = H.rgbToHex(t2.rgb), e2.fillRect(0, 0, t2.data.buffer.width, t2.data.buffer.height), e2.globalCompositeOperation = "source-over", e2.globalAlpha = 1, this.context.drawImage(t2.data.buffer, 0, 0, t2.data.buffer.width, t2.data.buffer.height, r2, n2, i2, a2)) : (this.context.save(), this.context.globalAlpha = t2.alpha, this.context.translate(t2.p.x, t2.p.y), this.context.rotate(s.degreeTransform(t2.rotation)), this.context.translate(-t2.p.x, -t2.p.y), this.context.drawImage(t2.body, 0, 0, t2.body.width, t2.body.height, r2, n2, i2, a2), this.context.globalAlpha = 1, this.context.restore());
      } }, { key: "drawCircle", value: function(t2) {
        t2.rgb ? this.context.fillStyle = "rgba(" + t2.rgb.r + "," + t2.rgb.g + "," + t2.rgb.b + "," + t2.alpha + ")" : this.context.fillStyle = t2.color, this.context.beginPath(), this.context.arc(t2.p.x, t2.p.y, t2.radius, 0, 2 * Math.PI, true), this.stroke && (this.context.strokeStyle = this.stroke.color, this.context.lineWidth = this.stroke.thinkness, this.context.stroke()), this.context.closePath(), this.context.fill();
      } }, { key: "createBuffer", value: function(t2) {
        if (t2 instanceof Image) {
          var e2 = t2.width + "_" + t2.height, i2 = this.bufferCache[e2];
          return i2 || ((i2 = document.createElement("canvas")).width = t2.width, i2.height = t2.height, this.bufferCache[e2] = i2), i2;
        }
      } }]), ie);
      function ie(t2) {
        o(this, ie);
        t2 = h(this, (ie.__proto__ || Object.getPrototypeOf(ie)).call(this, t2));
        return t2.stroke = null, t2.context = t2.element.getContext("2d"), t2.bufferCache = {}, t2.name = "CanvasRenderer", t2;
      }
      var ae = (r(re, $t), t(re, [{ key: "onParticleCreated", value: function(t2) {
        t2.body ? x(t2.body, this.addImg2Body, t2) : (t2.body = this.pool.get(this.circleConf, t2), this.element.appendChild(t2.body));
      } }, { key: "onParticleUpdate", value: function(t2) {
        this.bodyReady(t2) && (this.transform3d ? v.transform3d(t2.body, t2.p.x, t2.p.y, t2.scale, t2.rotation) : v.transform(t2.body, t2.p.x, t2.p.y, t2.scale, t2.rotation), t2.body.style.opacity = t2.alpha, t2.body.isCircle && (t2.body.style.backgroundColor = t2.color || "#ff0000"));
      } }, { key: "onParticleDead", value: function(t2) {
        this.bodyReady(t2) && (this.element.removeChild(t2.body), this.pool.expire(t2.body), t2.body = null);
      } }, { key: "bodyReady", value: function(t2) {
        return "object" === i(t2.body) && t2.body && !t2.body.isInner;
      } }, { key: "addImg2Body", value: function(t2, e2) {
        e2.dead || (e2.body = this.pool.get(t2, e2), v.resize(e2.body, t2.width, t2.height), this.element.appendChild(e2.body));
      } }, { key: "createBody", value: function(t2, e2) {
        return t2.isCircle ? this.createCircle(e2) : this.createSprite(t2, e2);
      } }, { key: "createCircle", value: function(t2) {
        var e2 = v.createDiv(t2.id + "_dom", 2 * t2.radius, 2 * t2.radius);
        return e2.style.borderRadius = t2.radius + "px", this.stroke && (e2.style.borderColor = this.stroke.color, e2.style.borderWidth = this.stroke.thinkness + "px"), e2.isCircle = true, e2;
      } }, { key: "createSprite", value: function(t2, e2) {
        var i2 = "string" == typeof t2 ? t2 : t2.src, t2 = v.createDiv(e2.id + "_dom", t2.width, t2.height);
        return t2.style.backgroundImage = "url(" + i2 + ")", t2;
      } }]), re);
      function re(t2) {
        o(this, re);
        var i2 = h(this, (re.__proto__ || Object.getPrototypeOf(re)).call(this, t2));
        return i2.stroke = null, i2.pool.create = function(t3, e2) {
          return i2.createBody(t3, e2);
        }, i2.addImg2Body = i2.addImg2Body.bind(i2), i2.transform3d = false, i2.name = "DomRenderer", i2;
      }
      var ne = (r(se, $t), t(se, [{ key: "onParticleCreated", value: function(t2) {
        t2.body ? this.createSprite(t2) : this.createCircle(t2), this.element.addChild(t2.body);
      } }, { key: "onParticleUpdate", value: function(t2) {
        t2.body && (t2.body.x = t2.p.x, t2.body.y = t2.p.y, t2.body.alpha = t2.alpha, t2.body.scaleX = t2.body.scaleY = t2.scale, t2.body.rotation = t2.rotation);
      } }, { key: "onParticleDead", value: function(t2) {
        t2.body && (t2.body.parent && t2.body.parent.removeChild(t2.body), this.pool.expire(t2.body), t2.body = null), t2.graphics && this.pool.expire(t2.graphics);
      } }, { key: "createSprite", value: function(t2) {
        t2.body = this.pool.get(t2.body), t2.body.parent || t2.body.image && (t2.body.regX = t2.body.image.width / 2, t2.body.regY = t2.body.image.height / 2);
      } }, { key: "createCircle", value: function(t2) {
        var e2 = this.pool.get(createjs.Graphics);
        this.stroke && (this.stroke instanceof String ? e2.beginStroke(this.stroke) : e2.beginStroke("#000000")), e2.beginFill(t2.color || "#ff0000").drawCircle(0, 0, t2.radius);
        var i2 = this.pool.get(createjs.Shape, [e2]);
        t2.body = i2, t2.graphics = e2;
      } }]), se);
      function se(t2, e2) {
        o(this, se);
        t2 = h(this, (se.__proto__ || Object.getPrototypeOf(se)).call(this, t2));
        return t2.stroke = e2, t2.name = "EaselRenderer", t2;
      }
      var oe = (r(he, $t), t(he, [{ key: "resize", value: function(t2, e2) {
        this.element.width = t2, this.element.height = e2;
      } }, { key: "createImageData", value: function(t2) {
        this.rectangle = t2 || new Z(0, 0, this.element.width, this.element.height), this.imageData = this.context.createImageData(this.rectangle.width, this.rectangle.height), this.context.putImageData(this.imageData, this.rectangle.x, this.rectangle.y);
      } }, { key: "onProtonUpdate", value: function() {
        this.context.clearRect(this.rectangle.x, this.rectangle.y, this.rectangle.width, this.rectangle.height), this.imageData = this.context.getImageData(this.rectangle.x, this.rectangle.y, this.rectangle.width, this.rectangle.height);
      } }, { key: "onProtonUpdateAfter", value: function() {
        this.context.putImageData(this.imageData, this.rectangle.x, this.rectangle.y);
      } }, { key: "onParticleCreated", value: function() {
      } }, { key: "onParticleUpdate", value: function(t2) {
        this.imageData && this.setPixel(this.imageData, Math.floor(t2.p.x - this.rectangle.x), Math.floor(t2.p.y - this.rectangle.y), t2);
      } }, { key: "setPixel", value: function(t2, e2, i2, a2) {
        var r2 = a2.rgb;
        e2 < 0 || e2 > this.element.width || i2 < 0 || i2 > this.elementwidth || (e2 = 4 * ((i2 >> 0) * t2.width + (e2 >> 0)), t2.data[e2] = r2.r, t2.data[1 + e2] = r2.g, t2.data[2 + e2] = r2.b, t2.data[3 + e2] = 255 * a2.alpha);
      } }, { key: "onParticleDead", value: function() {
      } }]), he);
      function he(t2, e2) {
        o(this, he);
        t2 = h(this, (he.__proto__ || Object.getPrototypeOf(he)).call(this, t2));
        return t2.context = t2.element.getContext("2d"), t2.imageData = null, t2.rectangle = null, t2.rectangle = e2, t2.createImageData(e2), t2.name = "PixelRenderer", t2;
      }
      var le = void 0, ue = (r(ce, $t), t(ce, [{ key: "setPIXI", value: function(t2) {
        try {
          le = t2 || { Sprite: {} }, this.createFromImage = le.Sprite.from || le.Sprite.fromImage;
        } catch (t3) {
        }
      } }, { key: "onProtonUpdate", value: function() {
      } }, { key: "onParticleCreated", value: function(t2) {
        t2.body ? t2.body = this.pool.get(t2.body, t2) : t2.body = this.pool.get(this.circleConf, t2), this.blendMode && (t2.body.blendMode = this.blendMode), this.element.addChild(t2.body);
      } }, { key: "onParticleUpdate", value: function(t2) {
        this.transform(t2, t2.body), true !== this.setColor && true !== this.color || (t2.body.tint = H.getHex16FromParticle(t2));
      } }, { key: "onParticleDead", value: function(t2) {
        this.element.removeChild(t2.body), this.pool.expire(t2.body), t2.body = null;
      } }, { key: "destroy", value: function(t2) {
        n(ce.prototype.__proto__ || Object.getPrototypeOf(ce.prototype), "destroy", this).call(this), this.pool.destroy();
        for (var e2 = t2.length; e2--; ) {
          var i2 = t2[e2];
          i2.body && this.element.removeChild(i2.body);
        }
      } }, { key: "transform", value: function(t2, e2) {
        e2.x = t2.p.x, e2.y = t2.p.y, e2.alpha = t2.alpha, e2.scale.x = t2.scale, e2.scale.y = t2.scale, e2.rotation = t2.rotation * s.PI_180;
      } }, { key: "createBody", value: function(t2, e2) {
        return t2.isCircle ? this.createCircle(e2) : this.createSprite(t2);
      } }, { key: "createSprite", value: function(t2) {
        t2 = t2.isInner ? this.createFromImage(t2.src) : new le.Sprite(t2);
        return t2.anchor.x = 0.5, t2.anchor.y = 0.5, t2;
      } }, { key: "createCircle", value: function(t2) {
        var e2, i2 = new le.Graphics();
        return this.stroke && (e2 = this.stroke instanceof String ? this.stroke : 0, i2.beginStroke(e2)), i2.beginFill(t2.color || 36077), i2.drawCircle(0, 0, t2.radius), i2.endFill(), i2;
      } }]), ce);
      function ce(t2, e2) {
        o(this, ce);
        var i2 = h(this, (ce.__proto__ || Object.getPrototypeOf(ce)).call(this, t2));
        return i2.stroke = e2, i2.color = false, i2.setColor = false, i2.blendMode = null, i2.pool.create = function(t3, e3) {
          return i2.createBody(t3, e3);
        }, i2.setPIXI(window.PIXI), i2.name = "PixiRenderer", i2;
      }
      var de = (t(ye, [{ key: "set", value: function(t2, e2) {
        0 === e2 ? X.set(t2, this.mats[0]) : X.multiply(this.mats[e2 - 1], t2, this.mats[e2]), this.size = Math.max(this.size, e2 + 1);
      } }, { key: "push", value: function(t2) {
        0 === this.size ? X.set(t2, this.mats[0]) : X.multiply(this.mats[this.size - 1], t2, this.mats[this.size]), this.size++;
      } }, { key: "pop", value: function() {
        0 < this.size && this.size--;
      } }, { key: "top", value: function() {
        return this.mats[this.size - 1];
      } }]), ye);
      function ye() {
        o(this, ye), this.mats = [];
        for (var t2 = this.size = 0; t2 < 20; t2++)
          this.mats.push(X.create([0, 0, 0, 0, 0, 0, 0, 0, 0]));
      }
      r(pe, $t), t(pe, [{ key: "init", value: function(t2) {
        n(pe.prototype.__proto__ || Object.getPrototypeOf(pe.prototype), "init", this).call(this, t2), this.resize(this.element.width, this.element.height);
      } }, { key: "resize", value: function(t2, e2) {
        this.umat[4] = -2, this.umat[7] = 1, this.smat[0] = 1 / t2, this.smat[4] = 1 / e2, this.mstack.set(this.umat, 0), this.mstack.set(this.smat, 1), this.gl.viewport(0, 0, t2, e2), this.element.width = t2, this.element.height = e2;
      } }, { key: "setMaxRadius", value: function(t2) {
        this.circleCanvasURL = this.createCircle(t2);
      } }, { key: "getVertexShader", value: function() {
        return ["uniform vec2 viewport;", "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 tMat;", "varying vec2 vTextureCoord;", "varying float alpha;", "void main() {", "vec3 v = tMat * vec3(aVertexPosition, 1.0);", "gl_Position = vec4(v.x, v.y, 0, 1);", "vTextureCoord = aTextureCoord;", "alpha = tMat[0][2];", "}"].join("\n");
      } }, { key: "getFragmentShader", value: function() {
        return ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float alpha;", "uniform sampler2D uSampler;", "uniform vec4 color;", "uniform bool useTexture;", "uniform vec3 uColor;", "void main() {", "vec4 textureColor = texture2D(uSampler, vTextureCoord);", "gl_FragColor = textureColor * vec4(uColor, 1.0);", "gl_FragColor.w *= alpha;", "}"].join("\n");
      } }, { key: "initVar", value: function() {
        this.mstack = new de(), this.umat = X.create([2, 0, 1, 0, -2, 0, -1, 1, 1]), this.smat = X.create([0.01, 0, 1, 0, 0.01, 0, 0, 0, 1]), this.texturebuffers = {};
      } }, { key: "blendEquation", value: function(t2) {
        this.gl.blendEquation(this.gl[t2]);
      } }, { key: "blendFunc", value: function(t2, e2) {
        this.gl.blendFunc(this.gl[t2], this.gl[e2]);
      } }, { key: "getShader", value: function(t2, e2, i2) {
        i2 = i2 ? t2.createShader(t2.FRAGMENT_SHADER) : t2.createShader(t2.VERTEX_SHADER);
        return t2.shaderSource(i2, e2), t2.compileShader(i2), t2.getShaderParameter(i2, t2.COMPILE_STATUS) ? i2 : (alert(t2.getShaderInfoLog(i2)), null);
      } }, { key: "initShaders", value: function() {
        var t2 = this.getShader(this.gl, this.getFragmentShader(), true), e2 = this.getShader(this.gl, this.getVertexShader(), false);
        this.sprogram = this.gl.createProgram(), this.gl.attachShader(this.sprogram, e2), this.gl.attachShader(this.sprogram, t2), this.gl.linkProgram(this.sprogram), this.gl.getProgramParameter(this.sprogram, this.gl.LINK_STATUS) || alert("Could not initialise shaders"), this.gl.useProgram(this.sprogram), this.sprogram.vpa = this.gl.getAttribLocation(this.sprogram, "aVertexPosition"), this.sprogram.tca = this.gl.getAttribLocation(this.sprogram, "aTextureCoord"), this.gl.enableVertexAttribArray(this.sprogram.tca), this.gl.enableVertexAttribArray(this.sprogram.vpa), this.sprogram.tMatUniform = this.gl.getUniformLocation(this.sprogram, "tMat"), this.sprogram.samplerUniform = this.gl.getUniformLocation(this.sprogram, "uSampler"), this.sprogram.useTex = this.gl.getUniformLocation(this.sprogram, "useTexture"), this.sprogram.color = this.gl.getUniformLocation(this.sprogram, "uColor"), this.gl.uniform1i(this.sprogram.useTex, 1);
      } }, { key: "initBuffers", value: function() {
        var t2;
        this.unitIBuffer = this.gl.createBuffer(), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.unitIBuffer), this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 3, 1, 0, 2, 3]), this.gl.STATIC_DRAW);
        for (var e2 = void 0, i2 = [], e2 = 0; e2 < 100; e2++)
          i2.push(e2);
        for (t2 = new Uint16Array(i2), this.unitI33 = this.gl.createBuffer(), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.unitI33), this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, t2, this.gl.STATIC_DRAW), i2 = [], e2 = 0; e2 < 100; e2++)
          i2.push(e2, e2 + 1, e2 + 2);
        t2 = new Uint16Array(i2), this.stripBuffer = this.gl.createBuffer(), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.stripBuffer), this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, t2, this.gl.STATIC_DRAW);
      } }, { key: "createCircle", value: function(t2) {
        this.circleCanvasRadius = c(P.initValue(t2, 32));
        var e2 = v.createCanvas("circle_canvas", 2 * this.circleCanvasRadius, 2 * this.circleCanvasRadius), t2 = e2.getContext("2d");
        return t2.beginPath(), t2.arc(this.circleCanvasRadius, this.circleCanvasRadius, this.circleCanvasRadius, 0, 2 * Math.PI, true), t2.closePath(), t2.fillStyle = "#FFF", t2.fill(), e2.toDataURL();
      } }, { key: "drawImg2Canvas", value: function(t2) {
        var e2 = t2.body.width, i2 = t2.body.height, a2 = c(t2.body.width), r2 = c(t2.body.height), n2 = t2.body.width / a2, s2 = t2.body.height / r2;
        this.texturebuffers[t2.data.src] || (this.texturebuffers[t2.data.src] = [this.gl.createTexture(), this.gl.createBuffer(), this.gl.createBuffer()]), t2.data.texture = this.texturebuffers[t2.data.src][0], t2.data.vcBuffer = this.texturebuffers[t2.data.src][1], t2.data.tcBuffer = this.texturebuffers[t2.data.src][2], this.gl.bindBuffer(this.gl.ARRAY_BUFFER, t2.data.tcBuffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([0, 0, n2, 0, 0, s2, s2, s2]), this.gl.STATIC_DRAW), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, t2.data.vcBuffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([0, 0, e2, 0, 0, i2, e2, i2]), this.gl.STATIC_DRAW);
        r2 = t2.data.canvas.getContext("2d").getImageData(0, 0, a2, r2);
        this.gl.bindTexture(this.gl.TEXTURE_2D, t2.data.texture), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, r2), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_NEAREST), this.gl.generateMipmap(this.gl.TEXTURE_2D), t2.data.textureLoaded = true, t2.data.textureWidth = e2, t2.data.textureHeight = i2;
      } }, { key: "onProtonUpdate", value: function() {
      } }, { key: "onParticleCreated", value: function(t2) {
        t2.data.textureLoaded = false, t2.data.tmat = X.create(), t2.data.tmat[8] = 1, t2.data.imat = X.create(), t2.data.imat[8] = 1, t2.body ? x(t2.body, this.addImg2Body, t2) : (x(this.circleCanvasURL, this.addImg2Body, t2), t2.data.oldScale = t2.radius / this.circleCanvasRadius);
      } }, { key: "addImg2Body", value: function(t2, e2) {
        e2.dead || (e2.body = t2, e2.data.src = t2.src, e2.data.canvas = k(t2), e2.data.oldScale = 1, this.drawImg2Canvas(e2));
      } }, { key: "onParticleUpdate", value: function(t2) {
        t2.data.textureLoaded && (this.updateMatrix(t2), this.gl.uniform3f(this.sprogram.color, t2.rgb.r / 255, t2.rgb.g / 255, t2.rgb.b / 255), this.gl.uniformMatrix3fv(this.sprogram.tMatUniform, false, this.mstack.top()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, t2.data.vcBuffer), this.gl.vertexAttribPointer(this.sprogram.vpa, 2, this.gl.FLOAT, false, 0, 0), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, t2.data.tcBuffer), this.gl.vertexAttribPointer(this.sprogram.tca, 2, this.gl.FLOAT, false, 0, 0), this.gl.bindTexture(this.gl.TEXTURE_2D, t2.data.texture), this.gl.uniform1i(this.sprogram.samplerUniform, 0), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.unitIBuffer), this.gl.drawElements(this.gl.TRIANGLES, 6, this.gl.UNSIGNED_SHORT, 0), this.mstack.pop());
      } }, { key: "onParticleDead", value: function() {
      } }, { key: "updateMatrix", value: function(t2) {
        var e2 = d(-t2.data.textureWidth / 2, -t2.data.textureHeight / 2), i2 = d(t2.p.x, t2.p.y), a2 = t2.rotation * s.PI_180, r2 = y(a2), a2 = t2.scale * t2.data.oldScale, a2 = p(a2, a2), a2 = f(e2, a2), a2 = f(a2, r2);
        a2 = f(a2, i2), X.inverse(a2, t2.data.imat), a2[2] = t2.alpha, this.mstack.push(a2);
      } }]), C = pe;
      function pe(t2) {
        o(this, pe);
        t2 = h(this, (pe.__proto__ || Object.getPrototypeOf(pe)).call(this, t2));
        return t2.gl = t2.element.getContext("experimental-webgl", { antialias: true, stencil: false, depth: false }), t2.gl || alert("Sorry your browser do not suppest WebGL!"), t2.initVar(), t2.setMaxRadius(), t2.initShaders(), t2.initBuffers(), t2.gl.blendEquation(t2.gl.FUNC_ADD), t2.gl.blendFunc(t2.gl.SRC_ALPHA, t2.gl.ONE_MINUS_SRC_ALPHA), t2.gl.enable(t2.gl.BLEND), t2.addImg2Body = t2.addImg2Body.bind(t2), t2.name = "WebGLRenderer", t2;
      }
      r(fe, $t), $t = fe;
      function fe(t2) {
        o(this, fe);
        t2 = h(this, (fe.__proto__ || Object.getPrototypeOf(fe)).call(this, t2));
        return t2.name = "CustomRenderer", t2;
      }
      var ve = (r(ge, at), t(ge, [{ key: "getPosition", value: function() {
        return this.random = Math.random(), this.vector.x = this.x1 + this.random * this.length * Math.cos(this.gradient), this.vector.y = this.y1 + this.random * this.length * Math.sin(this.gradient), this.vector;
      } }, { key: "getDirection", value: function(t2, e2) {
        var i2 = this.dy, a2 = -this.dx;
        return 0 < (i2 * t2 + a2 * e2 + this.dot) * (0 == a2 ? 1 : a2);
      } }, { key: "getDistance", value: function(t2, e2) {
        return (this.dy * t2 + -this.dx * e2 + this.dot) / Math.sqrt(this.xxyy);
      } }, { key: "getSymmetric", value: function(t2) {
        var e2 = t2.getGradient(), i2 = 2 * (this.getGradient() - e2), a2 = t2.x, e2 = t2.y;
        return t2.x = a2 * Math.cos(i2) - e2 * Math.sin(i2), t2.y = a2 * Math.sin(i2) + e2 * Math.cos(i2), t2;
      } }, { key: "getGradient", value: function() {
        return Math.atan2(this.dy, this.dx);
      } }, { key: "rangeOut", value: function(t2) {
        if (Math.abs(this.getGradient()) <= s.PI / 4) {
          if (t2.p.x <= this.maxx && t2.p.x >= this.minx)
            return true;
        } else if (t2.p.y <= this.maxy && t2.p.y >= this.miny)
          return true;
        return false;
      } }, { key: "getLength", value: function() {
        return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
      } }, { key: "crossing", value: function(t2) {
        "dead" === this.crossType ? ">" === this.direction || "R" === this.direction || "right" === this.direction || "down" === this.direction ? this.rangeOut(t2) && this.getDirection(t2.p.x, t2.p.y) && (t2.dead = true) : this.rangeOut(t2) && (this.getDirection(t2.p.x, t2.p.y) || (t2.dead = true)) : "bound" === this.crossType ? this.rangeOut(t2) && this.getDistance(t2.p.x, t2.p.y) <= t2.radius && (0 === this.dx ? t2.v.x *= -1 : 0 === this.dy ? t2.v.y *= -1 : this.getSymmetric(t2.v)) : "cross" === this.crossType && this.alert && (console.error("Sorry, LineZone does not support cross method!"), this.alert = false);
      } }]), ge);
      function ge(t2, e2, i2, a2, r2) {
        o(this, ge);
        var n2 = h(this, (ge.__proto__ || Object.getPrototypeOf(ge)).call(this));
        return 0 <= i2 - t2 ? (n2.x1 = t2, n2.y1 = e2, n2.x2 = i2, n2.y2 = a2) : (n2.x1 = i2, n2.y1 = a2, n2.x2 = t2, n2.y2 = e2), n2.dx = n2.x2 - n2.x1, n2.dy = n2.y2 - n2.y1, n2.minx = Math.min(n2.x1, n2.x2), n2.miny = Math.min(n2.y1, n2.y2), n2.maxx = Math.max(n2.x1, n2.x2), n2.maxy = Math.max(n2.y1, n2.y2), n2.dot = n2.x2 * n2.y1 - n2.x1 * n2.y2, n2.xxyy = n2.dx * n2.dx + n2.dy * n2.dy, n2.gradient = n2.getGradient(), n2.length = n2.getLength(), n2.direction = P.initValue(r2, ">"), n2;
      }
      var me = (r(be, at), t(be, [{ key: "getPosition", value: function() {
        return this.angle = s.PIx2 * Math.random(), this.randomRadius = Math.random() * this.radius, this.vector.x = this.x + this.randomRadius * Math.cos(this.angle), this.vector.y = this.y + this.randomRadius * Math.sin(this.angle), this.vector;
      } }, { key: "setCenter", value: function(t2, e2) {
        this.center.x = t2, this.center.y = e2;
      } }, { key: "crossing", value: function(t2) {
        var e2 = t2.p.distanceTo(this.center);
        "dead" === this.crossType ? e2 - t2.radius > this.radius && (t2.dead = true) : "bound" === this.crossType ? e2 + t2.radius >= this.radius && this.getSymmetric(t2) : "cross" === this.crossType && this.alert && (console.error("Sorry, CircleZone does not support cross method!"), this.alert = false);
      } }, { key: "getSymmetric", value: function(t2) {
        var e2 = t2.v.getGradient(), i2 = 2 * (this.getGradient(t2) - e2), a2 = t2.v.x, e2 = t2.v.y;
        t2.v.x = a2 * Math.cos(i2) - e2 * Math.sin(i2), t2.v.y = a2 * Math.sin(i2) + e2 * Math.cos(i2);
      } }, { key: "getGradient", value: function(t2) {
        return -s.PI_2 + Math.atan2(t2.p.y - this.center.y, t2.p.x - this.center.x);
      } }]), be);
      function be(t2, e2, i2) {
        o(this, be);
        var a2 = h(this, (be.__proto__ || Object.getPrototypeOf(be)).call(this));
        return a2.x = t2, a2.y = e2, a2.radius = i2, a2.angle = 0, a2.center = { x: t2, y: e2 }, a2;
      }
      var _e = (r(xe, at), t(xe, [{ key: "getPosition", value: function() {
        return this.vector.x = this.x + Math.random() * this.width, this.vector.y = this.y + Math.random() * this.height, this.vector;
      } }, { key: "crossing", value: function(t2) {
        "dead" === this.crossType ? ((t2.p.x + t2.radius < this.x || t2.p.x - t2.radius > this.x + this.width) && (t2.dead = true), (t2.p.y + t2.radius < this.y || t2.p.y - t2.radius > this.y + this.height) && (t2.dead = true)) : "bound" === this.crossType ? (t2.p.x - t2.radius < this.x ? (t2.p.x = this.x + t2.radius, t2.v.x *= -1) : t2.p.x + t2.radius > this.x + this.width && (t2.p.x = this.x + this.width - t2.radius, t2.v.x *= -1), t2.p.y - t2.radius < this.y ? (t2.p.y = this.y + t2.radius, t2.v.y *= -1) : t2.p.y + t2.radius > this.y + this.height && (t2.p.y = this.y + this.height - t2.radius, t2.v.y *= -1)) : "cross" === this.crossType && (t2.p.x + t2.radius < this.x && t2.v.x <= 0 ? t2.p.x = this.x + this.width + t2.radius : t2.p.x - t2.radius > this.x + this.width && 0 <= t2.v.x && (t2.p.x = this.x - t2.radius), t2.p.y + t2.radius < this.y && t2.v.y <= 0 ? t2.p.y = this.y + this.height + t2.radius : t2.p.y - t2.radius > this.y + this.height && 0 <= t2.v.y && (t2.p.y = this.y - t2.radius));
      } }]), xe);
      function xe(t2, e2, i2, a2) {
        o(this, xe);
        var r2 = h(this, (xe.__proto__ || Object.getPrototypeOf(xe)).call(this));
        return r2.x = t2, r2.y = e2, r2.width = i2, r2.height = a2, r2;
      }
      r(ke, at), t(ke, [{ key: "reset", value: function(t2, e2, i2, a2) {
        this.imageData = t2, this.x = P.initValue(e2, 0), this.y = P.initValue(i2, 0), this.d = P.initValue(a2, 2), this.vectors = [], this.setVectors();
      } }, { key: "setVectors", value: function() {
        for (var t2 = void 0, e2 = void 0, i2 = this.imageData.width, a2 = this.imageData.height, t2 = 0; t2 < i2; t2 += this.d)
          for (e2 = 0; e2 < a2; e2 += this.d) {
            var r2 = 4 * ((e2 >> 0) * i2 + (t2 >> 0));
            0 < this.imageData.data[3 + r2] && this.vectors.push({ x: t2 + this.x, y: e2 + this.y });
          }
        return this.vector;
      } }, { key: "getBound", value: function(t2, e2) {
        t2 = 4 * ((e2 >> 0) * this.imageData.width + (t2 >> 0));
        return 0 < this.imageData.data[3 + t2];
      } }, { key: "getPosition", value: function() {
        var t2 = P.getRandFromArray(this.vectors);
        return this.vector.copy(t2);
      } }, { key: "getColor", value: function(t2, e2) {
        t2 -= this.x;
        t2 = 4 * (((e2 -= this.y) >> 0) * this.imageData.width + (t2 >> 0));
        return { r: this.imageData.data[t2], g: this.imageData.data[1 + t2], b: this.imageData.data[2 + t2], a: this.imageData.data[3 + t2] };
      } }, { key: "crossing", value: function(t2) {
        "dead" === this.crossType ? this.getBound(t2.p.x - this.x, t2.p.y - this.y) ? t2.dead = true : t2.dead = false : "bound" === this.crossType && (this.getBound(t2.p.x - this.x, t2.p.y - this.y) || t2.v.negate());
      } }]), r = ke;
      function ke(t2, e2, i2, a2) {
        o(this, ke);
        var r2 = h(this, (ke.__proto__ || Object.getPrototypeOf(ke)).call(this));
        return r2.reset(t2, e2, i2, a2), r2;
      }
      t = { addEventListener: function(t2, e2) {
        t2.addEventListener("PROTON_UPDATE_AFTER", function() {
          return e2();
        });
      }, getStyle: function(t2) {
        t2 = H.hexToRgb(0 < arguments.length && void 0 !== t2 ? t2 : "#ff0000");
        return "rgba(" + t2.r + ", " + t2.g + ", " + t2.b + ", 0.5)";
      }, drawZone: function(t2, e2, i2, a2) {
        var r2 = e2.getContext("2d"), n2 = this.getStyle();
        this.addEventListener(t2, function() {
          a2 && r2.clearRect(0, 0, e2.width, e2.height), i2 instanceof nt ? (r2.beginPath(), r2.fillStyle = n2, r2.arc(i2.x, i2.y, 10, 0, 2 * Math.PI, true), r2.fill(), r2.closePath()) : i2 instanceof ve ? (r2.beginPath(), r2.strokeStyle = n2, r2.moveTo(i2.x1, i2.y1), r2.lineTo(i2.x2, i2.y2), r2.stroke(), r2.closePath()) : i2 instanceof _e ? (r2.beginPath(), r2.strokeStyle = n2, r2.drawRect(i2.x, i2.y, i2.width, i2.height), r2.stroke(), r2.closePath()) : i2 instanceof me && (r2.beginPath(), r2.strokeStyle = n2, r2.arc(i2.x, i2.y, i2.radius, 0, 2 * Math.PI, true), r2.stroke(), r2.closePath());
        });
      }, drawEmitter: function(t2, e2, i2, a2) {
        var r2 = e2.getContext("2d"), n2 = this.getStyle();
        this.addEventListener(t2, function() {
          a2 && r2.clearRect(0, 0, e2.width, e2.height), r2.beginPath(), r2.fillStyle = n2, r2.arc(i2.p.x, i2.p.y, 10, 0, 2 * Math.PI, true), r2.fill(), r2.closePath();
        });
      } };
      return V.Particle = j, V.Pool = T, V.Util = P, V.ColorUtil = H, V.MathUtil = s, V.Vector2D = V.Vector = F, V.Polar2D = V.Polar = q, V.ArraySpan = Y, V.Rectangle = Z, V.Rate = K, V.ease = U, V.Span = l, V.Mat3 = X, V.getSpan = function(t2, e2, i2) {
        return new l(t2, e2, i2);
      }, V.createArraySpan = Y.createArraySpan, V.Initialize = V.Init = $, V.Life = V.L = et, V.Position = V.P = ot, V.Velocity = V.V = lt, V.Mass = V.M = ct, V.Radius = V.R = yt, V.Body = V.B = ft, V.Behaviour = gt, V.Force = V.F = bt, V.Attraction = V.A = xt, V.RandomDrift = V.RD = Pt, V.Gravity = V.G = At, V.Collision = Rt, V.CrossZone = wt, V.Alpha = St, V.Scale = V.S = Dt, V.Rotate = Mt, V.Color = Lt, V.Repulsion = Nt, V.Cyclone = zt, V.GravityWell = qt, V.Emitter = Yt, V.BehaviourEmitter = Zt, V.FollowEmitter = Kt, V.Zone = at, V.LineZone = ve, V.CircleZone = me, V.PointZone = nt, V.RectZone = _e, V.ImageZone = r, V.CanvasRenderer = ee, V.DomRenderer = ae, V.EaselRenderer = ne, V.PixiRenderer = ue, V.PixelRenderer = oe, V.WebGLRenderer = V.WebGlRenderer = C, V.CustomRenderer = $t, V.Debug = t, P.assign(V, U), V;
    });
  }
});

// node_modules/particles-bg/dist/index.es.js
var import_react = __toESM(require_react());
var import_raf_manager = __toESM(require_RAFManager_min());
var import_proton_engine = __toESM(require_proton_min());
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
  return typeof obj;
} : function(obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var inherits = function(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};
var possibleConstructorReturn = function(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};
var Rand = function() {
  function Rand2() {
    classCallCheck(this, Rand2);
    this.list = [];
  }
  createClass(Rand2, [{
    key: "set",
    value: function set$$1(probability, target) {
      this.list.push({
        probability,
        target,
        a: 0,
        b: 1
      });
      this.calculation();
    }
  }, {
    key: "calculation",
    value: function calculation() {
      var total = 0;
      for (var i = 0; i < this.list.length; i++) {
        total += this.list[i].probability;
      }
      for (var _i = 0; _i < this.list.length; _i++) {
        var obj = this.list[_i];
        var val = obj.probability / total;
        obj.a = _i === 0 ? 0 : this.list[_i - 1].b;
        obj.b = obj.a + val;
      }
    }
  }, {
    key: "getResult",
    value: function getResult() {
      var val = Math.random();
      for (var i = 0; i < this.list.length; i++) {
        var obj = this.list[i];
        if (val <= obj.b && val > obj.a) {
          return obj.target;
        }
      }
      return this.list[0].target;
    }
  }]);
  return Rand2;
}();
var Canvas = function(_React$Component) {
  inherits(Canvas2, _React$Component);
  function Canvas2(props) {
    classCallCheck(this, Canvas2);
    var _this = possibleConstructorReturn(this, (Canvas2.__proto__ || Object.getPrototypeOf(Canvas2)).call(this, props));
    _this._iid = 0;
    _this._oid = 0;
    _this.size = { width: 0, height: 0 };
    _this.canvasRef = import_react.default.createRef();
    return _this;
  }
  createClass(Canvas2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this._oid = setTimeout(function() {
        _this2.initCanvas();
        _this2.resize = _this2.resize.bind(_this2);
        window.addEventListener("resize", _this2.resize);
      }, 100);
      var canvas = this.getCanvas();
      this.props.onCanvasDidMount && this.props.onCanvasDidMount(canvas);
    }
  }, {
    key: "initCanvas",
    value: function initCanvas() {
      var canvas = this.getCanvas();
      if (this.props.globalCompositeOperation) {
        var context = canvas.getContext("2d");
        context.globalCompositeOperation = this.props.globalCompositeOperation;
      }
      var _setCanvasSize = this.setCanvasSize(canvas), width = _setCanvasSize.width, height = _setCanvasSize.height;
      this.heartbeatDetectionCanvasSize(canvas);
      this.props.onCanvasInited(canvas, width, height);
    }
  }, {
    key: "getCanvas",
    value: function getCanvas() {
      var canvas = this.canvasRef.current;
      return canvas;
    }
  }, {
    key: "heartbeatDetectionCanvasSize",
    value: function heartbeatDetectionCanvasSize(canvas) {
      var _this3 = this;
      this._iid = setInterval(function() {
        if (_this3.canvasRef.current) {
          var newHeight = _this3.canvasRef.current.clientHeight;
          if (newHeight !== _this3.size.height) {
            var _setCanvasSize2 = _this3.setCanvasSize(canvas), width = _setCanvasSize2.width, height = _setCanvasSize2.height;
            _this3.props.onResize && _this3.props.onResize(width, height);
          }
        }
      }, 1e3 / 10);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      try {
        window.removeEventListener("resize", this.resize);
        clearInterval(this._iid);
        clearTimeout(this._oid);
      } catch (e) {
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      var canvas = this.getCanvas();
      var _setCanvasSize3 = this.setCanvasSize(canvas), width = _setCanvasSize3.width, height = _setCanvasSize3.height;
      this.props.onResize && this.props.onResize(width, height);
    }
  }, {
    key: "setCanvasSize",
    value: function setCanvasSize(canvas) {
      var width = this.canvasRef.current.clientWidth;
      var height = this.canvasRef.current.clientHeight;
      this.size.width = width;
      this.size.height = height;
      canvas.width = width;
      canvas.height = height;
      return { width, height };
    }
  }, {
    key: "handleWaypointEnter",
    value: function handleWaypointEnter() {
      import_raf_manager.default.start();
    }
  }, {
    key: "handleWaypointLeave",
    value: function handleWaypointLeave() {
      import_raf_manager.default.stop();
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var bg = this.props.bg;
      var style = { width: "100%", height: "100%" };
      if (bg === true) {
        style = Object.assign(style, {
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0
        });
      } else if (bg && (typeof bg === "undefined" ? "undefined" : _typeof(bg)) === "object") {
        style = Object.assign(style, bg);
      }
      return style;
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(e) {
      this.props.onMouseDown && this.props.onMouseDown(e);
    }
  }, {
    key: "render",
    value: function render() {
      return import_react.default.createElement("canvas", {
        className: "particles-bg-canvas-self",
        ref: this.canvasRef,
        onMouseDown: this.handleMouseDown.bind(this),
        style: this.getStyle()
      });
    }
  }]);
  return Canvas2;
}(import_react.default.Component);
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : {};
}
function getColor(color, a) {
  var c = void 0;
  if (color) {
    c = hexToRgb(color);
    return "rgba(" + c.r + "," + c.g + "," + c.b + ", " + a + ")";
  } else {
    return null;
  }
}
var Ball = function(_React$Component) {
  inherits(Ball2, _React$Component);
  function Ball2(props) {
    classCallCheck(this, Ball2);
    var _this = possibleConstructorReturn(this, (Ball2.__proto__ || Object.getPrototypeOf(Ball2)).call(this, props));
    _this.renderProton = _this.renderProton.bind(_this);
    return _this;
  }
  createClass(Ball2, [{
    key: "onCanvasInited",
    value: function onCanvasInited(canvas, width, height) {
      this.createProton(canvas, width, height);
      this.createMiniEmitter(canvas);
      import_raf_manager.default.add(this.renderProton);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      try {
        import_raf_manager.default.remove(this.renderProton);
        this.proton.destroy();
      } catch (e) {
      }
    }
  }, {
    key: "onResize",
    value: function onResize() {
    }
  }, {
    key: "createProton",
    value: function createProton(canvas, width, height) {
      var _this2 = this;
      var context = canvas.getContext("2d");
      this.proton = new import_proton_engine.default();
      var emitter = new import_proton_engine.default.Emitter();
      emitter.rate = new import_proton_engine.default.Rate(this.props.num ? new import_proton_engine.default.Span(this.props.num) : new import_proton_engine.default.Span(4, 9), new import_proton_engine.default.Span(0.8, 1.3));
      emitter.addInitialize(new import_proton_engine.default.Mass(1));
      emitter.addInitialize(new import_proton_engine.default.Radius(1, 50));
      emitter.addInitialize(new import_proton_engine.default.Life(5, 6));
      emitter.addInitialize(new import_proton_engine.default.Velocity(new import_proton_engine.default.Span(5, 8), new import_proton_engine.default.Span(30, 70), "polar"));
      emitter.addBehaviour(new import_proton_engine.default.Alpha(1, 0));
      emitter.addBehaviour(new import_proton_engine.default.Color(["#36aaf3", "#fd769c", "#94ff22", "#ffa545", "#ffffff"]));
      emitter.addBehaviour(new import_proton_engine.default.Scale(0.7, 1));
      emitter.addBehaviour(new import_proton_engine.default.Gravity(3));
      emitter.addBehaviour(new import_proton_engine.default.Collision(emitter));
      emitter.addBehaviour(this.customDeadBehaviour(canvas));
      emitter.addBehaviour(new import_proton_engine.default.CrossZone(new import_proton_engine.default.RectZone(0, 0, canvas.width, canvas.height), "bound"));
      emitter.p.x = Math.min(500, Math.max(canvas.width / 2 - 400, 50));
      emitter.p.y = canvas.height / 2 + 50;
      emitter.emit();
      this.proton.addEmitter(emitter);
      var renderer = new import_proton_engine.default.CanvasRenderer(canvas);
      renderer.onProtonUpdate = function() {
        context.fillStyle = getColor(_this2.props.color, 0.2) || "rgba(255, 255, 255, 0.2)";
        context.fillRect(0, 0, canvas.width, canvas.height);
      };
      this.proton.addRenderer(renderer);
    }
  }, {
    key: "customDeadBehaviour",
    value: function customDeadBehaviour(canvas) {
      var _this3 = this;
      return {
        initialize: function initialize(particle) {
        },
        applyBehaviour: function applyBehaviour(particle) {
          if (particle.p.y + particle.radius >= canvas.height) {
            if (particle.radius > 9) {
              _this3.miniEmitteing(particle);
              particle.dead = true;
            }
          }
        }
      };
    }
  }, {
    key: "createMiniEmitter",
    value: function createMiniEmitter(canvas) {
      var miniEmitter = new import_proton_engine.default.Emitter();
      miniEmitter.rate = new import_proton_engine.default.Rate(new import_proton_engine.default.Span(3, 6), new import_proton_engine.default.Span(1, 2));
      miniEmitter.addInitialize(new import_proton_engine.default.Mass(1));
      miniEmitter.radiusInitialize = new import_proton_engine.default.Radius();
      miniEmitter.addInitialize(miniEmitter.radiusInitialize);
      miniEmitter.addInitialize(new import_proton_engine.default.Life(0.5, 1));
      miniEmitter.addInitialize(new import_proton_engine.default.V(new import_proton_engine.default.Span(1.5, 3), new import_proton_engine.default.Span(0, 70, true), "polar"));
      miniEmitter.colorBehaviour = new import_proton_engine.default.Color("#ffffff");
      miniEmitter.addBehaviour(new import_proton_engine.default.Alpha(1, 0));
      miniEmitter.addBehaviour(miniEmitter.colorBehaviour);
      miniEmitter.addBehaviour(new import_proton_engine.default.Gravity(4));
      miniEmitter.addBehaviour(new import_proton_engine.default.Collision(miniEmitter));
      miniEmitter.addBehaviour(new import_proton_engine.default.CrossZone(new import_proton_engine.default.RectZone(0, 0, canvas.width, canvas.height), "bound"));
      this.proton.addEmitter(miniEmitter);
      this.miniEmitter = miniEmitter;
    }
  }, {
    key: "miniEmitteing",
    value: function miniEmitteing(particle) {
      var miniEmitter = this.miniEmitter;
      miniEmitter.radiusInitialize.reset(particle.radius * 0.05, particle.radius * 0.2);
      miniEmitter.colorBehaviour.reset(particle.color);
      miniEmitter.p.x = particle.p.x;
      miniEmitter.p.y = particle.p.y;
      miniEmitter.emit("once");
    }
  }, {
    key: "renderProton",
    value: function renderProton() {
      this.proton && this.proton.update();
    }
  }, {
    key: "render",
    value: function render() {
      return import_react.default.createElement(Canvas, {
        bg: this.props.bg,
        globalCompositeOperation: "darker",
        onCanvasInited: this.onCanvasInited.bind(this),
        onResize: this.onResize.bind(this)
      });
    }
  }]);
  return Ball2;
}(import_react.default.Component);
var Color = function(_React$Component) {
  inherits(Color2, _React$Component);
  function Color2(props) {
    classCallCheck(this, Color2);
    var _this = possibleConstructorReturn(this, (Color2.__proto__ || Object.getPrototypeOf(Color2)).call(this, props));
    _this.colors = ["#529B88", "#CDD180", "#FFFA32", "#FB6255", "#FB4A53", "#FF4E50", "#F9D423"];
    _this.renderProton = _this.renderProton.bind(_this);
    return _this;
  }
  createClass(Color2, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      try {
        import_raf_manager.default.remove(this.renderProton);
        this.proton.destroy();
      } catch (e) {
      }
    }
  }, {
    key: "onCanvasInited",
    value: function onCanvasInited(canvas, width, height) {
      this.createProton(canvas, width, height);
      import_raf_manager.default.add(this.renderProton);
    }
  }, {
    key: "onResize",
    value: function onResize() {
    }
  }, {
    key: "createProton",
    value: function createProton(canvas, width, height) {
      this.proton = new import_proton_engine.default();
      var emitter = new import_proton_engine.default.Emitter();
      emitter.rate = new import_proton_engine.default.Rate(this.props.num ? new import_proton_engine.default.Span(this.props.num) : new import_proton_engine.default.Span(5, 8), new import_proton_engine.default.Span(0.1, 0.25));
      emitter.addInitialize(new import_proton_engine.default.Mass(1));
      emitter.addInitialize(new import_proton_engine.default.Radius(20, 200));
      emitter.addInitialize(new import_proton_engine.default.Life(2, 4));
      emitter.addInitialize(new import_proton_engine.default.Position(new import_proton_engine.default.RectZone(0, 0, width, height)));
      emitter.addBehaviour(new import_proton_engine.default.Alpha(0, 1, Infinity, import_proton_engine.default.easeOutCubic));
      emitter.addBehaviour(new import_proton_engine.default.Scale(1, 0, Infinity, import_proton_engine.default.easeOutCubic));
      emitter.addBehaviour(new import_proton_engine.default.Color(this.colors, "random"));
      emitter.emit();
      this.proton.addEmitter(emitter);
      var renderer = new import_proton_engine.default.CanvasRenderer(canvas);
      this.proton.addRenderer(renderer);
    }
  }, {
    key: "renderProton",
    value: function renderProton() {
      this.proton && this.proton.update();
    }
  }, {
    key: "render",
    value: function render() {
      return import_react.default.createElement(Canvas, {
        bg: this.props.bg,
        globalCompositeOperation: "darker",
        onCanvasInited: this.onCanvasInited.bind(this),
        onResize: this.onResize.bind(this)
      });
    }
  }]);
  return Color2;
}(import_react.default.Component);
var Color$1 = function(_React$Component) {
  inherits(Color2, _React$Component);
  function Color2(props) {
    classCallCheck(this, Color2);
    var _this = possibleConstructorReturn(this, (Color2.__proto__ || Object.getPrototypeOf(Color2)).call(this, props));
    _this.colors = ["#529B88", "#CDD180", "#FFFA32", "#FB6255", "#FB4A53", "#FF4E50", "#F9D423"];
    _this.renderProton = _this.renderProton.bind(_this);
    return _this;
  }
  createClass(Color2, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      try {
        import_raf_manager.default.remove(this.renderProton);
        this.proton.destroy();
      } catch (e) {
      }
    }
  }, {
    key: "onCanvasInited",
    value: function onCanvasInited(canvas, width, height) {
      this.createProton(canvas, width, height);
      import_raf_manager.default.add(this.renderProton);
    }
  }, {
    key: "onResize",
    value: function onResize(width, height) {
      this.crossZoneBehaviour.zone.width = width;
      this.crossZoneBehaviour.zone.height = height;
      this.proton.renderers[0].resize(width, height);
    }
  }, {
    key: "getProp",
    value: function getProp(key, defaultVal) {
      var config = this.props.config || {};
      var val = config[key] || defaultVal;
      if (Array.isArray(val)) {
        return new import_proton_engine.default.Span(val[0], val[1]);
      } else {
        return val;
      }
    }
  }, {
    key: "getArrProp",
    value: function getArrProp(key, defaultVal) {
      var config = this.props.config || {};
      var val = config[key] || defaultVal;
      if (!val)
        return null;
      if (Array.isArray(val)) {
        return val;
      } else {
        return [val, val];
      }
    }
  }, {
    key: "createProton",
    value: function createProton(canvas, width, height) {
      var num = this.getProp("num", [5, 8]);
      var rps = this.getProp("rps", [0.1, 0.2]);
      var mass = this.getProp("mass", 1);
      var radius = this.getProp("radius", [10, 30]);
      var life = this.getProp("life", [2, 3]);
      var body = this.getProp("body");
      var position = this.getProp("position");
      var v = this.getProp("v", [2, 3]);
      var tha = this.getProp("tha", [-15, 15]);
      var alpha = this.getArrProp("alpha");
      var scale = this.getArrProp("scale");
      var color = this.getArrProp("color");
      var cross = this.getProp("cross", "dead");
      var random = this.getProp("random");
      var rotate = this.getArrProp("rotate");
      var g = this.getProp("g");
      var f = this.getArrProp("f");
      var emitterV = this.getProp("emitter");
      this.proton = new import_proton_engine.default();
      var emitter = void 0;
      if (emitterV === "follow") {
        emitter = new import_proton_engine.default.FollowEmitter();
      } else {
        emitter = new import_proton_engine.default.Emitter();
      }
      emitter.rate = new import_proton_engine.default.Rate(num, rps);
      emitter.addInitialize(new import_proton_engine.default.Mass(mass));
      emitter.addInitialize(new import_proton_engine.default.Radius(radius));
      emitter.addInitialize(new import_proton_engine.default.Life(life));
      emitter.addInitialize(new import_proton_engine.default.Velocity(v, tha, "polar"));
      if (body)
        emitter.addInitialize(new import_proton_engine.default.Body(body));
      var pos = void 0;
      if (position === "all" || position === "screen") {
        pos = new import_proton_engine.default.Position(new import_proton_engine.default.RectZone(0, 0, canvas.width, canvas.height));
      } else if ((typeof position === "undefined" ? "undefined" : _typeof(position)) === "object") {
        pos = new import_proton_engine.default.Position(new import_proton_engine.default.RectZone(position.x, position.y, position.width, position.height));
      } else {
        emitter.p.x = canvas.width / 2;
        emitter.p.y = canvas.height / 2;
      }
      emitter.addInitialize(pos);
      var alphaB = alpha ? new import_proton_engine.default.Alpha(alpha[0], alpha[1]) : new import_proton_engine.default.Alpha(0, 1);
      var scaleB = scale ? new import_proton_engine.default.Scale(scale[0], scale[1]) : new import_proton_engine.default.Scale(1, 0.2);
      var colorB = color ? new import_proton_engine.default.Color(color[0], color[1]) : new import_proton_engine.default.Color(this.colors);
      emitter.addBehaviour(alphaB);
      emitter.addBehaviour(scaleB);
      if (!body)
        emitter.addBehaviour(colorB);
      if (rotate) {
        if (rotate[0] === true || rotate[0] === "rotate") {
          emitter.addBehaviour(new import_proton_engine.default.Rotate());
        } else {
          emitter.addBehaviour(new import_proton_engine.default.Rotate(rotate[0], rotate[1]));
        }
      }
      var zone = new import_proton_engine.default.RectZone(0, 0, canvas.width, canvas.height);
      var crossZoneBehaviour = new import_proton_engine.default.CrossZone(zone, cross);
      emitter.addBehaviour(crossZoneBehaviour);
      random && emitter.addBehaviour(new import_proton_engine.default.RandomDrift(random, random, 0.05));
      g && emitter.addBehaviour(new import_proton_engine.default.G(g));
      f && emitter.addBehaviour(new import_proton_engine.default.F(f[0], f[1]));
      emitter.emit();
      this.proton.addEmitter(emitter);
      var renderer = this.createRenderer(canvas);
      this.proton.addRenderer(renderer);
      this.emitter = emitter;
      this.crossZoneBehaviour = crossZoneBehaviour;
    }
  }, {
    key: "createRenderer",
    value: function createRenderer(canvas) {
      var width = canvas.width;
      var height = canvas.height;
      var context = canvas.getContext("2d");
      var renderer = new import_proton_engine.default.CanvasRenderer(canvas);
      var onUpdate = this.getProp("onUpdate");
      if (onUpdate) {
        renderer.onProtonUpdate = function() {
          onUpdate(context, width, height);
        };
      }
      var onParticleCreated = this.getProp("onParticleCreated");
      if (onParticleCreated) {
        renderer.onParticleCreated = function(particle) {
          onParticleCreated(context, particle);
        };
      }
      var onParticleUpdate = this.getProp("onParticleUpdate");
      if (onParticleUpdate) {
        renderer.onParticleUpdate = function(particle) {
          onParticleUpdate(context, particle);
        };
      }
      return renderer;
    }
  }, {
    key: "renderProton",
    value: function renderProton() {
      this.proton && this.proton.update();
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(e) {
      var onMouseDown = this.getProp("onMouseDown");
      if (onMouseDown) {
        onMouseDown(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var globalCompositeOperation = this.props.globalCompositeOperation || this.props.operation || "source-over";
      return import_react.default.createElement(Canvas, {
        bg: this.props.bg,
        onMouseDown: this.handleMouseDown.bind(this),
        globalCompositeOperation,
        onCanvasInited: this.onCanvasInited.bind(this),
        onResize: this.onResize.bind(this)
      });
    }
  }]);
  return Color2;
}(import_react.default.Component);
var Lines = function(_React$Component) {
  inherits(Lines2, _React$Component);
  function Lines2(props) {
    classCallCheck(this, Lines2);
    var _this = possibleConstructorReturn(this, (Lines2.__proto__ || Object.getPrototypeOf(Lines2)).call(this, props));
    _this.renderProton = _this.renderProton.bind(_this);
    return _this;
  }
  createClass(Lines2, [{
    key: "onCanvasDidMount",
    value: function onCanvasDidMount(canvas) {
      if (this.props.color) {
        canvas.style.backgroundColor = this.props.color;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      try {
        import_raf_manager.default.remove(this.renderProton);
        this.proton.destroy();
      } catch (e) {
      }
    }
  }, {
    key: "onCanvasInited",
    value: function onCanvasInited(canvas, width, height) {
      this.createProton(canvas, width, height);
      import_raf_manager.default.add(this.renderProton);
    }
  }, {
    key: "onResize",
    value: function onResize(width, height) {
      this.crossZoneBehaviour.zone.width = width;
      this.crossZoneBehaviour.zone.height = height;
      this.proton.renderers[0].resize(width, height);
    }
  }, {
    key: "createProton",
    value: function createProton(canvas, width, height) {
      this.proton = new import_proton_engine.default();
      var emitter = new import_proton_engine.default.Emitter();
      emitter.damping = 8e-3;
      emitter.rate = new import_proton_engine.default.Rate(this.props.num ? this.props.num : 250);
      emitter.addInitialize(new import_proton_engine.default.Mass(1));
      emitter.addInitialize(new import_proton_engine.default.Radius(4));
      emitter.addInitialize(new import_proton_engine.default.Velocity(new import_proton_engine.default.Span(1.5), new import_proton_engine.default.Span(0, 360), "polar"));
      var mouseObj = {
        x: width / 2,
        y: height / 2
      };
      var attractionBehaviour = new import_proton_engine.default.Attraction(mouseObj, 0, 0);
      var crossZoneBehaviour = new import_proton_engine.default.CrossZone(new import_proton_engine.default.RectZone(0, 0, canvas.width, canvas.height), "cross");
      emitter.addBehaviour(new import_proton_engine.default.Color("random"));
      emitter.addBehaviour(attractionBehaviour, crossZoneBehaviour);
      emitter.addBehaviour(new import_proton_engine.default.RandomDrift(10, 10, 0.05));
      emitter.p.x = canvas.width / 2;
      emitter.p.y = canvas.height / 2;
      emitter.emit("once");
      this.proton.addEmitter(emitter);
      this.proton.addRenderer(this.createRenderer(canvas));
      this.crossZoneBehaviour = crossZoneBehaviour;
    }
  }, {
    key: "createRenderer",
    value: function createRenderer(canvas) {
      var _this2 = this;
      var context = canvas.getContext("2d");
      var renderer = new import_proton_engine.default.CanvasRenderer(canvas);
      renderer.onProtonUpdate = function() {
        context.fillStyle = getColor(_this2.props.color, 0.02) || "rgba(0, 0, 0, 0.02)";
        context.fillRect(0, 0, canvas.width, canvas.height);
      };
      renderer.onParticleUpdate = function(particle) {
        context.beginPath();
        context.strokeStyle = particle.color;
        context.lineWidth = 1;
        context.moveTo(particle.old.p.x, particle.old.p.y);
        context.lineTo(particle.p.x, particle.p.y);
        context.closePath();
        context.stroke();
      };
      return renderer;
    }
  }, {
    key: "renderProton",
    value: function renderProton() {
      this.proton && this.proton.update();
    }
  }, {
    key: "render",
    value: function render() {
      return import_react.default.createElement(Canvas, {
        bg: this.props.bg,
        globalCompositeOperation: "darker",
        onCanvasDidMount: this.onCanvasDidMount.bind(this),
        onCanvasInited: this.onCanvasInited.bind(this),
        onResize: this.onResize.bind(this)
      });
    }
  }]);
  return Lines2;
}(import_react.default.Component);
var Thick = function(_React$Component) {
  inherits(Thick2, _React$Component);
  function Thick2(props) {
    classCallCheck(this, Thick2);
    var _this = possibleConstructorReturn(this, (Thick2.__proto__ || Object.getPrototypeOf(Thick2)).call(this, props));
    _this.hue = 0;
    _this.index = 0;
    _this.colorTemplate = "hsla(hue,80%,50%, 0.75)";
    _this.renderProton = _this.renderProton.bind(_this);
    return _this;
  }
  createClass(Thick2, [{
    key: "onCanvasDidMount",
    value: function onCanvasDidMount(canvas) {
      if (this.props.color) {
        canvas.style.backgroundColor = this.props.color;
      }
    }
  }, {
    key: "onCanvasInited",
    value: function onCanvasInited(canvas, width, height) {
      this.canvas = canvas;
      this.createProton(canvas, width, height);
      import_raf_manager.default.add(this.renderProton);
    }
  }, {
    key: "onResize",
    value: function onResize(width, height) {
      this.crossZoneBehaviour.zone.width = width;
      this.crossZoneBehaviour.zone.height = height;
      this.proton.renderers[0].resize(width, height);
    }
  }, {
    key: "createProton",
    value: function createProton(canvas, width, height) {
      this.proton = new import_proton_engine.default();
      var emitter = new import_proton_engine.default.Emitter();
      emitter.damping = 8e-3;
      emitter.rate = new import_proton_engine.default.Rate(this.props.num ? this.props.num : 150);
      emitter.addInitialize(new import_proton_engine.default.Mass(1));
      emitter.addInitialize(new import_proton_engine.default.Radius(8));
      emitter.addInitialize(new import_proton_engine.default.V(new import_proton_engine.default.Span(0.1, 0.5), new import_proton_engine.default.Span(0, 360), "polar"));
      emitter.addInitialize(new import_proton_engine.default.Position(new import_proton_engine.default.CircleZone(canvas.width / 2, canvas.height / 2, 100)));
      var crossZoneBehaviour = new import_proton_engine.default.CrossZone(new import_proton_engine.default.RectZone(0, 0, canvas.width, canvas.height), "cross");
      emitter.addBehaviour(crossZoneBehaviour);
      this.repulsion = new import_proton_engine.default.Repulsion({
        x: canvas.width / 2,
        y: canvas.height / 2 - 100
      }, 3, 300);
      this.attraction = new import_proton_engine.default.Attraction({
        x: canvas.width / 2,
        y: canvas.height / 2
      }, 3, 200);
      emitter.addBehaviour(this.attraction, this.repulsion);
      emitter.addBehaviour(new import_proton_engine.default.Color("random"));
      emitter.addBehaviour(new import_proton_engine.default.RandomDrift(20, 15, 0.15));
      emitter.emit("once");
      this.proton.addEmitter(emitter);
      this.proton.addRenderer(this.createRenderer(canvas));
      this.crossZoneBehaviour = crossZoneBehaviour;
    }
  }, {
    key: "createRenderer",
    value: function createRenderer(canvas) {
      var _this2 = this;
      var context = canvas.getContext("2d");
      var renderer = new import_proton_engine.default.CanvasRenderer(canvas);
      renderer.onProtonUpdate = function() {
        _this2.hue += 1;
        context.fillStyle = getColor(_this2.props.color, 0.02) || "rgba(0, 0, 0, 0.02)";
        context.fillRect(0, 0, canvas.width, canvas.height);
      };
      renderer.onParticleCreated = function(particle) {
        particle.data.begin = import_proton_engine.default.MathUtil.randomAToB(1, 120);
        particle.data.tha = import_proton_engine.default.MathUtil.randomAToB(0, Math.PI * 2);
      };
      renderer.onParticleUpdate = function(particle) {
        var hue = particle.data.begin + _this2.hue;
        particle.color = _this2.colorTemplate.replace("hue", hue % 360);
        var ratio = 3 / 4;
        var radius = particle.radius * (1 - ratio) * Math.cos(particle.data.tha += 0.01) + particle.radius * ratio;
        context.beginPath();
        context.fillStyle = particle.color;
        context.arc(particle.p.x, particle.p.y, radius, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
      };
      return renderer;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      try {
        import_raf_manager.default.remove(this.renderProton);
        this.proton.destroy();
      } catch (e) {
      }
    }
  }, {
    key: "renderProton",
    value: function renderProton() {
      var canvas = this.canvas;
      this.proton.update();
      if (this.index % 200 === 0) {
        this.attraction.targetPosition.x = Math.random() * canvas.width;
        this.attraction.targetPosition.y = Math.random() * canvas.height;
        this.repulsion.targetPosition.x = Math.random() * canvas.width;
        this.repulsion.targetPosition.y = Math.random() * canvas.height;
      }
      this.index++;
    }
  }, {
    key: "render",
    value: function render() {
      return import_react.default.createElement(Canvas, {
        bg: this.props.bg,
        onCanvasDidMount: this.onCanvasDidMount.bind(this),
        onCanvasInited: this.onCanvasInited.bind(this),
        onResize: this.onResize.bind(this)
      });
    }
  }]);
  return Thick2;
}(import_react.default.Component);
var Square = function(_React$Component) {
  inherits(Square2, _React$Component);
  function Square2(props) {
    classCallCheck(this, Square2);
    var _this = possibleConstructorReturn(this, (Square2.__proto__ || Object.getPrototypeOf(Square2)).call(this, props));
    _this.colors = ["#fad390", "#81ecec", "#ffffff", "#badc58", "#f9ca24", "#FEA47F"];
    _this.renderProton = _this.renderProton.bind(_this);
    return _this;
  }
  createClass(Square2, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      try {
        import_raf_manager.default.remove(this.renderProton);
        this.proton.destroy();
      } catch (e) {
      }
    }
  }, {
    key: "onCanvasDidMount",
    value: function onCanvasDidMount(canvas) {
    }
  }, {
    key: "onCanvasInited",
    value: function onCanvasInited(canvas, width, height) {
      this.createProton(canvas, width, height);
      import_raf_manager.default.add(this.renderProton);
    }
  }, {
    key: "onResize",
    value: function onResize(width, height) {
      var dis = 150;
      this.crossZoneBehaviour.zone.width = width + 2 * dis;
      this.crossZoneBehaviour.zone.height = height + 2 * dis;
      this.proton.renderers[0].resize(width, height);
    }
  }, {
    key: "createProton",
    value: function createProton(canvas, width, height) {
      this.proton = new import_proton_engine.default();
      var emitter = new import_proton_engine.default.Emitter();
      emitter.rate = new import_proton_engine.default.Rate(this.props.num ? this.props.num : 50);
      emitter.damping = 0;
      emitter.addInitialize(new import_proton_engine.default.Mass(1));
      emitter.addInitialize(new import_proton_engine.default.Radius(4, 70));
      emitter.addInitialize(new import_proton_engine.default.Velocity(new import_proton_engine.default.Span(2, 10), new import_proton_engine.default.Span(0), "polar"));
      emitter.addInitialize(new import_proton_engine.default.Position(new import_proton_engine.default.LineZone(0, canvas.height, canvas.width, canvas.height)));
      var dis = 150;
      var crossZoneBehaviour = new import_proton_engine.default.CrossZone(new import_proton_engine.default.RectZone(0 - dis, 0 - dis, canvas.width + 2 * dis, canvas.height + 2 * dis), "cross");
      emitter.addBehaviour(crossZoneBehaviour);
      emitter.addBehaviour(new import_proton_engine.default.Alpha(import_proton_engine.default.getSpan(0.1, 0.55)));
      emitter.addBehaviour(new import_proton_engine.default.Color(this.colors));
      emitter.emit("once");
      this.proton.addEmitter(emitter);
      var renderer = this.createRenderer(canvas);
      this.proton.addRenderer(renderer);
      this.crossZoneBehaviour = crossZoneBehaviour;
      emitter.preEmit(2);
    }
  }, {
    key: "createRenderer",
    value: function createRenderer(canvas) {
      var context = canvas.getContext("2d");
      var renderer = new import_proton_engine.default.CustomRenderer();
      renderer.onProtonUpdate = function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
      };
      renderer.onParticleCreated = function(particle) {
        var w = particle.radius || 60;
        var h = import_proton_engine.default.MathUtil.randomAToB(100, 200, "int");
        particle.data.w = w;
        particle.data.h = h;
      };
      renderer.onParticleUpdate = function(particle) {
        var w = particle.data.w;
        var h = particle.data.h;
        context.save();
        context.globalAlpha = particle.alpha;
        context.fillStyle = particle.color;
        context.translate(particle.p.x, particle.p.y);
        context.rotate(import_proton_engine.default.MathUtil.degreeTransform(particle.rotation));
        context.translate(-particle.p.x, -particle.p.y);
        context.beginPath();
        context.rect(particle.p.x - w / 2, particle.p.y - h / 2, w, h);
        context.closePath();
        context.fill();
        context.globalAlpha = 1;
        context.restore();
      };
      return renderer;
    }
  }, {
    key: "renderProton",
    value: function renderProton() {
      this.proton && this.proton.update();
    }
  }, {
    key: "render",
    value: function render() {
      return import_react.default.createElement(Canvas, {
        bg: this.props.bg,
        globalCompositeOperation: "lighter",
        onCanvasDidMount: this.onCanvasDidMount.bind(this),
        onCanvasInited: this.onCanvasInited.bind(this),
        onResize: this.onResize.bind(this)
      });
    }
  }]);
  return Square2;
}(import_react.default.Component);
var Cobweb = function(_React$Component) {
  inherits(Cobweb2, _React$Component);
  function Cobweb2(props) {
    classCallCheck(this, Cobweb2);
    var _this = possibleConstructorReturn(this, (Cobweb2.__proto__ || Object.getPrototypeOf(Cobweb2)).call(this, props));
    _this.renderProton = _this.renderProton.bind(_this);
    return _this;
  }
  createClass(Cobweb2, [{
    key: "onCanvasInited",
    value: function onCanvasInited(canvas, width, height) {
      this.createProton(canvas, width, height);
      import_raf_manager.default.add(this.renderProton);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      try {
        import_raf_manager.default.remove(this.renderProton);
        this.proton.destroy();
      } catch (e) {
      }
    }
  }, {
    key: "onResize",
    value: function onResize(width, height) {
      this.crossZoneBehaviour.zone.width = width;
      this.crossZoneBehaviour.zone.height = height;
      this.proton.renderers[0].resize(width, height);
    }
  }, {
    key: "createProton",
    value: function createProton(canvas, width, height) {
      this.proton = new import_proton_engine.default();
      var emitter = new import_proton_engine.default.Emitter();
      emitter.rate = new import_proton_engine.default.Rate(this.props.num ? new import_proton_engine.default.Span(this.props.num) : new import_proton_engine.default.Span(100), new import_proton_engine.default.Span(0.05, 0.2));
      emitter.addInitialize(new import_proton_engine.default.Mass(1));
      emitter.addInitialize(new import_proton_engine.default.Radius(1, 4));
      emitter.addInitialize(new import_proton_engine.default.Life(Infinity));
      var pointZone = new import_proton_engine.default.Position(new import_proton_engine.default.RectZone(0, 0, width, height));
      emitter.addInitialize(pointZone);
      emitter.addInitialize(new import_proton_engine.default.Velocity(new import_proton_engine.default.Span(0.3, 0.6), new import_proton_engine.default.Span(0, 360), "polar"));
      emitter.addBehaviour(new import_proton_engine.default.Alpha(import_proton_engine.default.getSpan(0.2, 0.9)));
      emitter.addBehaviour(new import_proton_engine.default.Color(this.props.color || "#333"));
      this.crossZoneBehaviour = new import_proton_engine.default.CrossZone(new import_proton_engine.default.RectZone(0, 0, width, height), "cross");
      emitter.addBehaviour(this.crossZoneBehaviour);
      emitter.emit("once");
      emitter.damping = 0;
      this.proton.addEmitter(emitter);
      this.proton.addRenderer(this.createRenderer(canvas, emitter));
    }
  }, {
    key: "createRenderer",
    value: function createRenderer(canvas, emitter) {
      var _this2 = this;
      var context = canvas.getContext("2d");
      var renderer = new import_proton_engine.default.CanvasRenderer(canvas);
      var R = 140;
      renderer.onProtonUpdateAfter = function() {
        var particles = emitter.particles;
        for (var i = 0; i < particles.length; i++) {
          for (var j = i + 1; j < particles.length; j++) {
            var pA = particles[i];
            var pB = particles[j];
            var dis = pA.p.distanceTo(pB.p);
            if (dis < R) {
              var alpha = (1 - dis / R) * 0.5;
              context.strokeStyle = getColor(_this2.props.color, alpha) || "rgba(3, 3, 3, " + alpha + ")";
              context.beginPath();
              context.moveTo(pA.p.x, pA.p.y);
              context.lineTo(pB.p.x, pB.p.y);
              context.closePath();
              context.stroke();
            }
          }
        }
      };
      return renderer;
    }
  }, {
    key: "renderProton",
    value: function renderProton() {
      this.proton && this.proton.update();
    }
  }, {
    key: "render",
    value: function render() {
      return import_react.default.createElement(Canvas, {
        bg: this.props.bg,
        globalCompositeOperation: "darker",
        onCanvasInited: this.onCanvasInited.bind(this),
        onResize: this.onResize.bind(this)
      });
    }
  }]);
  return Cobweb2;
}(import_react.default.Component);
var Circle = function(_React$Component) {
  inherits(Circle2, _React$Component);
  function Circle2(props) {
    classCallCheck(this, Circle2);
    var _this = possibleConstructorReturn(this, (Circle2.__proto__ || Object.getPrototypeOf(Circle2)).call(this, props));
    _this.colors = ["#74b9ff", "#e84393", "#6c5ce7", "#00b894", "#fdcb6e", "#006266", "#1B1464"];
    _this.renderProton = _this.renderProton.bind(_this);
    return _this;
  }
  createClass(Circle2, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      try {
        import_raf_manager.default.remove(this.renderProton);
        this.proton.destroy();
      } catch (e) {
      }
    }
  }, {
    key: "onCanvasInited",
    value: function onCanvasInited(canvas, width, height) {
      this.createProton(canvas, width, height);
      import_raf_manager.default.add(this.renderProton);
    }
  }, {
    key: "onResize",
    value: function onResize(width, height) {
      this.crossZoneBehaviour.zone.width = width;
      this.crossZoneBehaviour.zone.height = height;
      this.proton.renderers[0].resize(width, height);
    }
  }, {
    key: "createProton",
    value: function createProton(canvas, width, height) {
      this.proton = new import_proton_engine.default();
      var emitter = new import_proton_engine.default.Emitter();
      emitter.rate = new import_proton_engine.default.Rate(this.props.num || 20);
      emitter.damping = 8e-3;
      emitter.addInitialize(new import_proton_engine.default.Mass(1));
      emitter.addInitialize(new import_proton_engine.default.Radius(30, 600));
      emitter.addInitialize(new import_proton_engine.default.Velocity(new import_proton_engine.default.Span(0.5), new import_proton_engine.default.Span(0, 360), "polar"));
      emitter.addInitialize(new import_proton_engine.default.Position(new import_proton_engine.default.RectZone(0, 0, canvas.width, canvas.height)));
      var crossZoneBehaviour = new import_proton_engine.default.CrossZone(new import_proton_engine.default.RectZone(0, 0, canvas.width, canvas.height), "cross");
      emitter.addBehaviour(crossZoneBehaviour);
      emitter.addBehaviour(new import_proton_engine.default.Alpha(import_proton_engine.default.getSpan(0.35, 0.55)));
      emitter.addBehaviour(new import_proton_engine.default.Color(this.getColor()));
      emitter.addBehaviour(new import_proton_engine.default.RandomDrift(50, 50, 0.5));
      emitter.emit("once");
      this.proton.addEmitter(emitter);
      var renderer = new import_proton_engine.default.CanvasRenderer(canvas);
      this.proton.addRenderer(renderer);
      this.crossZoneBehaviour = crossZoneBehaviour;
    }
  }, {
    key: "getColor",
    value: function getColor2() {
      var c = this.colors;
      if (this.props.color) {
        if (Array.isArray(this.props.color)) {
          c = this.props.color;
        } else {
          c = [this.props.color];
        }
      }
      return c;
    }
  }, {
    key: "renderProton",
    value: function renderProton() {
      this.proton && this.proton.update();
    }
  }, {
    key: "render",
    value: function render() {
      return import_react.default.createElement(Canvas, {
        bg: this.props.bg,
        globalCompositeOperation: "darken",
        onCanvasInited: this.onCanvasInited.bind(this),
        onResize: this.onResize.bind(this)
      });
    }
  }]);
  return Circle2;
}(import_react.default.Component);
var Tadpole = function(_React$Component) {
  inherits(Tadpole2, _React$Component);
  function Tadpole2(props) {
    classCallCheck(this, Tadpole2);
    var _this = possibleConstructorReturn(this, (Tadpole2.__proto__ || Object.getPrototypeOf(Tadpole2)).call(this, props));
    _this.renderProton = _this.renderProton.bind(_this);
    return _this;
  }
  createClass(Tadpole2, [{
    key: "onCanvasDidMount",
    value: function onCanvasDidMount(canvas) {
    }
  }, {
    key: "onCanvasInited",
    value: function onCanvasInited(canvas, width, height) {
      this.createProton(canvas, width, height);
      this.renderProton();
    }
  }, {
    key: "onResize",
    value: function onResize(width, height) {
      this.crossZoneBehaviour.zone.width = width;
      this.crossZoneBehaviour.zone.height = height;
      this.proton.renderers[0].resize(width, height);
    }
  }, {
    key: "createProton",
    value: function createProton(canvas, width, height) {
      this.proton = new import_proton_engine.default();
      var emitter = new import_proton_engine.default.Emitter();
      emitter.damping = 8e-3;
      emitter.rate = new import_proton_engine.default.Rate(this.props.num ? this.props.num : 50);
      emitter.addInitialize(new import_proton_engine.default.Mass(1));
      emitter.addInitialize(new import_proton_engine.default.Radius(5, 9));
      emitter.addInitialize(new import_proton_engine.default.Velocity(new import_proton_engine.default.Span(1.5), new import_proton_engine.default.Span(0, 360), "polar"));
      emitter.addInitialize(new import_proton_engine.default.Position(new import_proton_engine.default.RectZone(0, 0, width, height)));
      var mouseInfo = {
        x: width / 2,
        y: height / 2
      };
      var attractionBehaviour = new import_proton_engine.default.Attraction(mouseInfo, 0, 0);
      var crossZoneBehaviour = new import_proton_engine.default.CrossZone(new import_proton_engine.default.RectZone(0, 0, canvas.width, canvas.height), "bound");
      emitter.addBehaviour(new import_proton_engine.default.Color(this.props.color || "#bbb"));
      emitter.addBehaviour(attractionBehaviour, crossZoneBehaviour);
      emitter.addBehaviour(new import_proton_engine.default.RandomDrift(15, 15, 0.05));
      emitter.emit("once");
      this.proton.addEmitter(emitter);
      this.proton.addRenderer(this.createRenderer(canvas));
      this.crossZoneBehaviour = crossZoneBehaviour;
    }
  }, {
    key: "createRenderer",
    value: function createRenderer(canvas) {
      var jointCount = 10;
      var delayTime = 8;
      var context = canvas.getContext("2d");
      var renderer = new import_proton_engine.default.CanvasRenderer(canvas);
      renderer.onProtonUpdate = function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
      };
      renderer.onParticleCreated = function(particle) {
        particle.data.points = [];
        particle.data.index = 0;
      };
      renderer.onParticleUpdate = function(particle) {
        drawTadpoleTail(particle);
        if (particle.data.index % delayTime === 0)
          fillPointsData(particle);
        drawTadpoleHead(particle);
        particle.data.index++;
      };
      var fillPointsData = function fillPointsData2(particle) {
        particle.data.points.unshift(particle.p.y);
        particle.data.points.unshift(particle.p.x);
        if (particle.data.points.length > jointCount) {
          particle.data.points.pop();
          particle.data.points.pop();
        }
      };
      var drawTadpoleHead = function drawTadpoleHead2(particle) {
        context.fillStyle = particle.color;
        context.beginPath();
        context.arc(particle.p.x, particle.p.y, particle.radius, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
      };
      var drawTadpoleTail = function drawTadpoleTail2(particle) {
        context.beginPath();
        context.strokeStyle = particle.color;
        context.moveTo(particle.p.x, particle.p.y);
        var l = particle.data.points.length;
        for (var i = 0; i < l; i += 2) {
          var x = particle.data.points[i];
          var y = particle.data.points[i + 1];
          context.lineWidth = linearEvaluation(i, l);
          context.lineTo(x, y);
          context.stroke();
        }
      };
      var linearEvaluation = function linearEvaluation2(i, l) {
        if (l <= 2)
          return 1;
        var max = 6;
        var A = (max - 1) / (2 / l - 1);
        var B = 1 - A;
        var X = (i + 2) / l;
        var val = A * X + B;
        val = val >> 0;
        return val;
      };
      return renderer;
    }
  }, {
    key: "renderProton",
    value: function renderProton() {
      var _this2 = this;
      import_raf_manager.default.add(function() {
        _this2.proton.update();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return import_react.default.createElement(Canvas, {
        bg: this.props.bg,
        globalCompositeOperation: "darker",
        onCanvasDidMount: this.onCanvasDidMount.bind(this),
        onCanvasInited: this.onCanvasInited.bind(this),
        onResize: this.onResize.bind(this)
      });
    }
  }]);
  return Tadpole2;
}(import_react.default.Component);
var COLOR = ["#f6b93b", "#18dcff", "#cd84f1", "#ED4C67", "#ffffff", "#b71540", "#32ff7e", "#ff3838"];
var Polygon = function(_React$Component) {
  inherits(Polygon2, _React$Component);
  function Polygon2(props) {
    classCallCheck(this, Polygon2);
    var _this = possibleConstructorReturn(this, (Polygon2.__proto__ || Object.getPrototypeOf(Polygon2)).call(this, props));
    _this.renderProton = _this.renderProton.bind(_this);
    return _this;
  }
  createClass(Polygon2, [{
    key: "onCanvasInited",
    value: function onCanvasInited(canvas, width, height) {
      this.createProton(canvas);
      this.createEmitter({
        canvas,
        x: width / 2,
        y: height / 2,
        mainEmitter: true,
        zone: "bound"
      });
      import_raf_manager.default.add(this.renderProton);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      try {
        import_raf_manager.default.remove(this.renderProton);
        this.proton.destroy();
      } catch (e) {
      }
    }
  }, {
    key: "onResize",
    value: function onResize() {
    }
  }, {
    key: "createProton",
    value: function createProton(canvas) {
      this.proton = new import_proton_engine.default();
      var renderer = this.createRenderer(canvas);
      this.proton.addRenderer(renderer);
    }
  }, {
    key: "createRenderer",
    value: function createRenderer(canvas) {
      var context = canvas.getContext("2d");
      var renderer = new import_proton_engine.default.CustomRenderer();
      renderer.onProtonUpdate = function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
      };
      renderer.onParticleCreated = function(particle) {
        particle.data.count = import_proton_engine.default.MathUtil.randomAToB(3, 10, true);
      };
      renderer.onParticleUpdate = function(particle) {
        context.save();
        context.globalAlpha = particle.alpha;
        context.fillStyle = particle.color;
        context.translate(particle.p.x, particle.p.y);
        context.rotate(import_proton_engine.default.MathUtil.degreeTransform(particle.rotation));
        context.translate(-particle.p.x, -particle.p.y);
        context.beginPath();
        drawPolygon(particle, particle.data.count);
        context.closePath();
        context.fill();
        context.globalAlpha = 1;
        context.restore();
      };
      renderer.onParticleDead = function(particle) {
      };
      var drawPolygon = function drawPolygon2(particle, count) {
        if (count >= 7) {
          context.arc(particle.p.x, particle.p.y, particle.radius, 0, Math.PI * 2, true);
        } else {
          var radius = particle.radius;
          for (var i = 0; i <= count; i++) {
            var x = particle.p.x + radius * Math.cos(Math.PI / 180 * 360 / count * i);
            var y = particle.p.y + radius * Math.sin(Math.PI / 180 * 360 / count * i);
            if (i === 0)
              context.moveTo(x, y);
            else
              context.lineTo(x, y);
          }
        }
      };
      return renderer;
    }
  }, {
    key: "createEmitter",
    value: function createEmitter(_ref) {
      var mainEmitter = _ref.mainEmitter, canvas = _ref.canvas, x = _ref.x, y = _ref.y, radius = _ref.radius, _ref$color = _ref.color, color = _ref$color === void 0 ? COLOR : _ref$color, _ref$zone = _ref.zone, zone = _ref$zone === void 0 ? "dead" : _ref$zone, _ref$once = _ref.once, once = _ref$once === void 0 ? "all" : _ref$once, _ref$alpha = _ref.alpha, alpha = _ref$alpha === void 0 ? 0.85 : _ref$alpha, _ref$gravity = _ref.gravity, gravity = _ref$gravity === void 0 ? 3.5 : _ref$gravity;
      var emitter = this.proton.pool.get(import_proton_engine.default.Emitter);
      if (!emitter.completed) {
        emitter.rate = new import_proton_engine.default.Rate(this.props.num ? new import_proton_engine.default.Span(this.props.num) : new import_proton_engine.default.Span(4, 9), new import_proton_engine.default.Span(1.6, 2.2));
        var radiusInit = mainEmitter ? new import_proton_engine.default.Radius(10, 110) : new import_proton_engine.default.Radius(3, radius);
        emitter.addInitialize(new import_proton_engine.default.Mass(1));
        emitter.addInitialize(radiusInit);
        emitter.addInitialize(new import_proton_engine.default.Life(3, 6));
        emitter.addInitialize(new import_proton_engine.default.Velocity(new import_proton_engine.default.Span(4, 6), new import_proton_engine.default.Span(-90, 90), "polar"));
        emitter.addBehaviour(new import_proton_engine.default.Alpha(alpha, 0.2));
        emitter.addBehaviour(new import_proton_engine.default.Color(color));
        emitter.addBehaviour(new import_proton_engine.default.Scale(1, 0.3));
        emitter.addBehaviour(new import_proton_engine.default.Rotate());
        emitter.addBehaviour(new import_proton_engine.default.Gravity(gravity));
        emitter.addBehaviour(this.customDeadBehaviour(canvas));
        emitter.addBehaviour(new import_proton_engine.default.CrossZone(new import_proton_engine.default.RectZone(0, 0, canvas.width, canvas.height), zone));
      }
      emitter.p.x = x;
      emitter.p.y = y;
      if (once === "once")
        emitter.emit("once");
      else
        emitter.emit();
      this.proton.addEmitter(emitter);
    }
  }, {
    key: "expireEmitter",
    value: function expireEmitter(emitter) {
      var _this2 = this;
      setTimeout(function() {
        emitter.completed = true;
        _this2.proton.pool.expire(emitter);
        _this2.proton.removeEmitter(emitter);
      }, 500);
    }
  }, {
    key: "customDeadBehaviour",
    value: function customDeadBehaviour(canvas) {
      var _this3 = this;
      return {
        initialize: function initialize(particle) {
          particle.data = particle.data || {};
          particle.data.oldRadius = particle.radius;
          particle.data.emitterCount = 0;
        },
        applyBehaviour: function applyBehaviour(particle) {
          if (particle.radius < 5)
            return;
          if (particle.data.emitterCount >= 2)
            return;
          if (particle.radius <= 1 / 3 * particle.data.oldRadius) {
            particle.data.emitterCount++;
            _this3.createEmitter({
              canvas,
              x: particle.p.x,
              y: particle.p.y,
              radius: particle.radius * (1 / 2),
              alpha: 0.5,
              gravity: 5,
              color: particle.color,
              once: "once"
            });
          }
        }
      };
    }
  }, {
    key: "renderProton",
    value: function renderProton() {
      this.proton && this.proton.update();
    }
  }, {
    key: "render",
    value: function render() {
      return import_react.default.createElement(Canvas, {
        bg: this.props.bg,
        globalCompositeOperation: "darker",
        onCanvasInited: this.onCanvasInited.bind(this),
        onResize: this.onResize.bind(this)
      });
    }
  }]);
  return Polygon2;
}(import_react.default.Component);
var Fountain = function(_React$Component) {
  inherits(Fountain2, _React$Component);
  function Fountain2(props) {
    classCallCheck(this, Fountain2);
    var _this = possibleConstructorReturn(this, (Fountain2.__proto__ || Object.getPrototypeOf(Fountain2)).call(this, props));
    _this.colors = ["#529B88", "#CDD180", "#FFFA32", "#FB6255", "#FB4A53", "#FF4E50", "#F9D423"];
    _this.renderProton = _this.renderProton.bind(_this);
    return _this;
  }
  createClass(Fountain2, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      try {
        import_raf_manager.default.remove(this.renderProton);
        this.proton.destroy();
      } catch (e) {
      }
    }
  }, {
    key: "onCanvasInited",
    value: function onCanvasInited(canvas, width, height) {
      this.createProton(canvas, width, height);
      import_raf_manager.default.add(this.renderProton);
    }
  }, {
    key: "onResize",
    value: function onResize() {
    }
  }, {
    key: "createProton",
    value: function createProton(canvas, width, height) {
      this.proton = new import_proton_engine.default();
      var emitter = new import_proton_engine.default.Emitter();
      emitter.rate = new import_proton_engine.default.Rate(this.props.num ? new import_proton_engine.default.Span(this.props.num) : new import_proton_engine.default.Span(4, 8), new import_proton_engine.default.Span(0.1, 0.25));
      emitter.addInitialize(new import_proton_engine.default.Mass(1));
      emitter.addInitialize(new import_proton_engine.default.Radius(20, 200));
      emitter.addInitialize(new import_proton_engine.default.Life(2, 4));
      emitter.addInitialize(new import_proton_engine.default.Velocity(new import_proton_engine.default.Span(4, 7), new import_proton_engine.default.Span(0, 360), "polar"));
      emitter.addInitialize(new import_proton_engine.default.Position(new import_proton_engine.default.CircleZone(width / 2, height / 2, 100)));
      emitter.addBehaviour(new import_proton_engine.default.Alpha(1, 0));
      emitter.addBehaviour(new import_proton_engine.default.Scale(0.2, 1));
      emitter.addBehaviour(this.createCustomBehaviour());
      emitter.addBehaviour(new import_proton_engine.default.Color(this.colors, "random"));
      emitter.emit();
      this.proton.addEmitter(emitter);
      var renderer = new import_proton_engine.default.CanvasRenderer(canvas);
      this.proton.addRenderer(renderer);
    }
  }, {
    key: "createCustomBehaviour",
    value: function createCustomBehaviour() {
      var f = 10 * 100;
      return {
        initialize: function initialize(particle) {
          particle.f = new import_proton_engine.default.Vector2D(0, 0);
        },
        applyBehaviour: function applyBehaviour(particle) {
          var length = particle.v.length() / 1e3;
          var gradient = particle.v.getGradient();
          gradient += 3.14 / 2;
          particle.f.x = f * length * Math.cos(gradient);
          particle.f.y = f * length * Math.sin(gradient);
          particle.a.add(particle.f);
        }
      };
    }
  }, {
    key: "renderProton",
    value: function renderProton() {
      this.proton && this.proton.update();
    }
  }, {
    key: "render",
    value: function render() {
      return import_react.default.createElement(Canvas, {
        bg: this.props.bg,
        globalCompositeOperation: "xor",
        onCanvasInited: this.onCanvasInited.bind(this),
        onResize: this.onResize.bind(this)
      });
    }
  }]);
  return Fountain2;
}(import_react.default.Component);
var ParticlesBg = function(_Component) {
  inherits(ParticlesBg2, _Component);
  function ParticlesBg2(props) {
    classCallCheck(this, ParticlesBg2);
    return possibleConstructorReturn(this, (ParticlesBg2.__proto__ || Object.getPrototypeOf(ParticlesBg2)).call(this, props));
  }
  createClass(ParticlesBg2, [{
    key: "getRandom",
    value: function getRandom() {
      var _props = this.props, num = _props.num, bg = _props.bg, color = _props.color;
      if (!this.random) {
        this.random = new Rand();
        this.random.set(0.25, import_react.default.createElement(Color, { num, bg, color }));
        this.random.set(0.2, import_react.default.createElement(Ball, { num, bg, color }));
        this.random.set(0.2, import_react.default.createElement(Lines, { num, bg, color }));
        this.random.set(0.16, import_react.default.createElement(Thick, { num, bg, color }));
        this.random.set(0.18, import_react.default.createElement(Circle, { num, bg, color }));
        this.random.set(0.04, import_react.default.createElement(Cobweb, { num, bg, color }));
        this.random.set(0.1, import_react.default.createElement(Polygon, { num, bg, color }));
        this.random.set(0.08, import_react.default.createElement(Square, { num, bg, color }));
        this.random.set(0.18, import_react.default.createElement(Tadpole, { num, bg, color }));
        this.random.set(0.15, import_react.default.createElement(Fountain, { num, bg, color }));
      }
      return this.random.getResult();
    }
  }, {
    key: "getBgParticles",
    value: function getBgParticles() {
      var _props2 = this.props, type = _props2.type, num = _props2.num, bg = _props2.bg, color = _props2.color, config = _props2.config;
      var particles = void 0;
      switch (String(type).toLowerCase()) {
        case "color":
          particles = import_react.default.createElement(Color, { num, bg, color });
          break;
        case "ball":
          particles = import_react.default.createElement(Ball, { num, bg, color });
          break;
        case "lines":
          particles = import_react.default.createElement(Lines, { num, bg, color });
          break;
        case "thick":
          particles = import_react.default.createElement(Thick, { num, bg, color });
          break;
        case "circle":
          particles = import_react.default.createElement(Circle, { num, bg, color });
          break;
        case "cobweb":
          particles = import_react.default.createElement(Cobweb, { num, bg, color });
          break;
        case "polygon":
          particles = import_react.default.createElement(Polygon, { num, bg, color });
          break;
        case "square":
          particles = import_react.default.createElement(Square, { num, bg, color });
          break;
        case "tadpole":
          particles = import_react.default.createElement(Tadpole, { num, bg, color });
          break;
        case "fountain":
          particles = import_react.default.createElement(Fountain, { num, bg, color });
          break;
        case "custom":
          particles = import_react.default.createElement(Color$1, { bg, config });
          break;
        case "random":
          particles = this.getRandom(num);
          break;
        default:
          particles = import_react.default.createElement(Color, { num, bg, color });
          break;
      }
      return particles;
    }
  }, {
    key: "render",
    value: function render() {
      var particles = this.getBgParticles();
      return import_react.default.createElement(
        import_react.default.Fragment,
        null,
        particles
      );
    }
  }]);
  return ParticlesBg2;
}(import_react.Component);
var index_es_default = ParticlesBg;
export {
  index_es_default as default
};
/*! Bundled license information:

raf-manager/build/RAFManager.min.js:
  (*!
  * RAFManager v0.1.0
  *
  * Copyright 2018-2018, ajiemath <ajiemath@gmail.com>
  * Licensed under the MIT license
  * http://www.opensource.org/licenses/mit-license
  *
  *)

proton-engine/build/proton.min.js:
  (*!
  * Proton v4.2.1
  * https://github.com/drawcall/Proton
  *
  * Copyright 2013-2020, A-JIE
  * Licensed under the MIT license
  * http://www.opensource.org/licenses/mit-license
  *
  *)
*/
//# sourceMappingURL=particles-bg.js.map
