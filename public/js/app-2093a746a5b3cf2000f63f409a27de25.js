! function(e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var r = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
  }
  n.m = e, n.c = t, n.d = function(e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    })
  }, n.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function(e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var r in e) n.d(i, r, function(t) {
        return e[t]
      }.bind(null, r));
    return i
  }, n.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 2)
}([function(e, t, n) {
  e.exports = function(e) {
    var t = {};

    function n(i) {
      if (t[i]) return t[i].exports;
      var r = t[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    return n.m = e, n.c = t, n.d = function(e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: i
      })
    }, n.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, n.t = function(e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (n.r(i), Object.defineProperty(i, "default", {
          enumerable: !0,
          value: e
        }), 2 & t && "string" != typeof e)
        for (var r in e) n.d(i, r, function(t) {
          return e[t]
        }.bind(null, r));
      return i
    }, n.n = function(e) {
      var t = e && e.__esModule ? function() {
        return e.default
      } : function() {
        return e
      };
      return n.d(t, "a", t), t
    }, n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
  }([function(e, t, n) {
    (function(t) {
      e.exports = t.Phoenix = n(2)
    }).call(this, n(1))
  }, function(e, t) {
    var n;
    n = function() {
      return this
    }();
    try {
      n = n || new Function("return this")()
    } catch (e) {
      "object" == typeof window && (n = window)
    }
    e.exports = n
  }, function(e, t, n) {
    "use strict";

    function i(e) {
      return function(e) {
        if (Array.isArray(e)) return s(e)
      }(e) || function(e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
      }(e) || a(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function r(e) {
      return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }

    function o(e, t) {
      return function(e) {
        if (Array.isArray(e)) return e
      }(e) || function(e, t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
          var n = [],
            i = !0,
            r = !1,
            o = void 0;
          try {
            for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
          } catch (e) {
            r = !0, o = e
          } finally {
            try {
              i || null == s.return || s.return()
            } finally {
              if (r) throw o
            }
          }
          return n
        }
      }(e, t) || a(e, t) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function a(e, t) {
      if (e) {
        if ("string" == typeof e) return s(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
      }
    }

    function s(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i
    }

    function u(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function c(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    }

    function l(e, t, n) {
      return t && c(e.prototype, t), n && c(e, n), e
    }
    n.r(t), n.d(t, "Channel", (function() {
      return P
    })), n.d(t, "Serializer", (function() {
      return I
    })), n.d(t, "Socket", (function() {
      return R
    })), n.d(t, "LongPoll", (function() {
      return T
    })), n.d(t, "Ajax", (function() {
      return D
    })), n.d(t, "Presence", (function() {
      return j
    }));
    var h = "undefined" != typeof self ? self : null,
      d = "undefined" != typeof window ? window : null,
      f = h || d || void 0,
      v = "closed",
      p = "errored",
      m = "joined",
      g = "joining",
      y = "leaving",
      b = "phx_close",
      k = "phx_error",
      A = "phx_join",
      w = "phx_reply",
      E = "phx_leave",
      C = [b, k, A, w, E],
      S = "websocket",
      x = function(e) {
        return "function" == typeof e ? e : function() {
          return e
        }
      },
      L = function() {
        function e(t, n, i, r) {
          u(this, e), this.channel = t, this.event = n, this.payload = i || function() {
            return {}
          }, this.receivedResp = null, this.timeout = r, this.timeoutTimer = null, this.recHooks = [], this.sent = !1
        }
        return l(e, [{
          key: "resend",
          value: function(e) {
            this.timeout = e, this.reset(), this.send()
          }
        }, {
          key: "send",
          value: function() {
            this.hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
              topic: this.channel.topic,
              event: this.event,
              payload: this.payload(),
              ref: this.ref,
              join_ref: this.channel.joinRef()
            }))
          }
        }, {
          key: "receive",
          value: function(e, t) {
            return this.hasReceived(e) && t(this.receivedResp.response), this.recHooks.push({
              status: e,
              callback: t
            }), this
          }
        }, {
          key: "reset",
          value: function() {
            this.cancelRefEvent(), this.ref = null, this.refEvent = null, this.receivedResp = null, this.sent = !1
          }
        }, {
          key: "matchReceive",
          value: function(e) {
            var t = e.status,
              n = e.response;
            e.ref, this.recHooks.filter((function(e) {
              return e.status === t
            })).forEach((function(e) {
              return e.callback(n)
            }))
          }
        }, {
          key: "cancelRefEvent",
          value: function() {
            this.refEvent && this.channel.off(this.refEvent)
          }
        }, {
          key: "cancelTimeout",
          value: function() {
            clearTimeout(this.timeoutTimer), this.timeoutTimer = null
          }
        }, {
          key: "startTimeout",
          value: function() {
            var e = this;
            this.timeoutTimer && this.cancelTimeout(), this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, (function(t) {
              e.cancelRefEvent(), e.cancelTimeout(), e.receivedResp = t, e.matchReceive(t)
            })), this.timeoutTimer = setTimeout((function() {
              e.trigger("timeout", {})
            }), this.timeout)
          }
        }, {
          key: "hasReceived",
          value: function(e) {
            return this.receivedResp && this.receivedResp.status === e
          }
        }, {
          key: "trigger",
          value: function(e, t) {
            this.channel.trigger(this.refEvent, {
              status: e,
              response: t
            })
          }
        }]), e
      }(),
      P = function() {
        function e(t, n, i) {
          var r = this;
          u(this, e), this.state = v, this.topic = t, this.params = x(n || {}), this.socket = i, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = !1, this.joinPush = new L(this, A, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new O((function() {
            r.socket.isConnected() && r.rejoin()
          }), this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError((function() {
            return r.rejoinTimer.reset()
          }))), this.stateChangeRefs.push(this.socket.onOpen((function() {
            r.rejoinTimer.reset(), r.isErrored() && r.rejoin()
          }))), this.joinPush.receive("ok", (function() {
            r.state = m, r.rejoinTimer.reset(), r.pushBuffer.forEach((function(e) {
              return e.send()
            })), r.pushBuffer = []
          })), this.joinPush.receive("error", (function() {
            r.state = p, r.socket.isConnected() && r.rejoinTimer.scheduleTimeout()
          })), this.onClose((function() {
            r.rejoinTimer.reset(), r.socket.hasLogger() && r.socket.log("channel", "close ".concat(r.topic, " ").concat(r.joinRef())), r.state = v, r.socket.remove(r)
          })), this.onError((function(e) {
            r.socket.hasLogger() && r.socket.log("channel", "error ".concat(r.topic), e), r.isJoining() && r.joinPush.reset(), r.state = p, r.socket.isConnected() && r.rejoinTimer.scheduleTimeout()
          })), this.joinPush.receive("timeout", (function() {
            r.socket.hasLogger() && r.socket.log("channel", "timeout ".concat(r.topic, " (").concat(r.joinRef(), ")"), r.joinPush.timeout), new L(r, E, x({}), r.timeout).send(), r.state = p, r.joinPush.reset(), r.socket.isConnected() && r.rejoinTimer.scheduleTimeout()
          })), this.on(w, (function(e, t) {
            r.trigger(r.replyEventName(t), e)
          }))
        }
        return l(e, [{
          key: "join",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.timeout;
            if (this.joinedOnce) throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
            return this.timeout = e, this.joinedOnce = !0, this.rejoin(), this.joinPush
          }
        }, {
          key: "onClose",
          value: function(e) {
            this.on(b, e)
          }
        }, {
          key: "onError",
          value: function(e) {
            return this.on(k, (function(t) {
              return e(t)
            }))
          }
        }, {
          key: "on",
          value: function(e, t) {
            var n = this.bindingRef++;
            return this.bindings.push({
              event: e,
              ref: n,
              callback: t
            }), n
          }
        }, {
          key: "off",
          value: function(e, t) {
            this.bindings = this.bindings.filter((function(n) {
              return !(n.event === e && (void 0 === t || t === n.ref))
            }))
          }
        }, {
          key: "canPush",
          value: function() {
            return this.socket.isConnected() && this.isJoined()
          }
        }, {
          key: "push",
          value: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.timeout;
            if (t = t || {}, !this.joinedOnce) throw new Error("tried to push '".concat(e, "' to '").concat(this.topic, "' before joining. Use channel.join() before pushing events"));
            var i = new L(this, e, (function() {
              return t
            }), n);
            return this.canPush() ? i.send() : (i.startTimeout(), this.pushBuffer.push(i)), i
          }
        }, {
          key: "leave",
          value: function() {
            var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.timeout;
            this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = y;
            var n = function() {
                e.socket.hasLogger() && e.socket.log("channel", "leave ".concat(e.topic)), e.trigger(b, "leave")
              },
              i = new L(this, E, x({}), t);
            return i.receive("ok", (function() {
              return n()
            })).receive("timeout", (function() {
              return n()
            })), i.send(), this.canPush() || i.trigger("ok", {}), i
          }
        }, {
          key: "onMessage",
          value: function(e, t, n) {
            return t
          }
        }, {
          key: "isLifecycleEvent",
          value: function(e) {
            return C.indexOf(e) >= 0
          }
        }, {
          key: "isMember",
          value: function(e, t, n, i) {
            return !(this.topic !== e || i && i !== this.joinRef() && this.isLifecycleEvent(t) && (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", {
              topic: e,
              event: t,
              payload: n,
              joinRef: i
            }), 1))
          }
        }, {
          key: "joinRef",
          value: function() {
            return this.joinPush.ref
          }
        }, {
          key: "rejoin",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.timeout;
            this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = g, this.joinPush.resend(e))
          }
        }, {
          key: "trigger",
          value: function(e, t, n, i) {
            var r = this.onMessage(e, t, n, i);
            if (t && !r) throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
            for (var o = this.bindings.filter((function(t) {
                return t.event === e
              })), a = 0; a < o.length; a++) o[a].callback(r, n, i || this.joinRef())
          }
        }, {
          key: "replyEventName",
          value: function(e) {
            return "chan_reply_".concat(e)
          }
        }, {
          key: "isClosed",
          value: function() {
            return this.state === v
          }
        }, {
          key: "isErrored",
          value: function() {
            return this.state === p
          }
        }, {
          key: "isJoined",
          value: function() {
            return this.state === m
          }
        }, {
          key: "isJoining",
          value: function() {
            return this.state === g
          }
        }, {
          key: "isLeaving",
          value: function() {
            return this.state === y
          }
        }]), e
      }(),
      I = {
        HEADER_LENGTH: 1,
        META_LENGTH: 4,
        KINDS: {
          push: 0,
          reply: 1,
          broadcast: 2
        },
        encode: function(e, t) {
          if (e.payload.constructor === ArrayBuffer) return t(this.binaryEncode(e));
          var n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
          return t(JSON.stringify(n))
        },
        decode: function(e, t) {
          if (e.constructor === ArrayBuffer) return t(this.binaryDecode(e));
          var n = o(JSON.parse(e), 5);
          return t({
            join_ref: n[0],
            ref: n[1],
            topic: n[2],
            event: n[3],
            payload: n[4]
          })
        },
        binaryEncode: function(e) {
          var t = e.join_ref,
            n = e.ref,
            i = e.event,
            r = e.topic,
            o = e.payload,
            a = this.META_LENGTH + t.length + n.length + r.length + i.length,
            s = new ArrayBuffer(this.HEADER_LENGTH + a),
            u = new DataView(s),
            c = 0;
          u.setUint8(c++, this.KINDS.push), u.setUint8(c++, t.length), u.setUint8(c++, n.length), u.setUint8(c++, r.length), u.setUint8(c++, i.length), Array.from(t, (function(e) {
            return u.setUint8(c++, e.charCodeAt(0))
          })), Array.from(n, (function(e) {
            return u.setUint8(c++, e.charCodeAt(0))
          })), Array.from(r, (function(e) {
            return u.setUint8(c++, e.charCodeAt(0))
          })), Array.from(i, (function(e) {
            return u.setUint8(c++, e.charCodeAt(0))
          }));
          var l = new Uint8Array(s.byteLength + o.byteLength);
          return l.set(new Uint8Array(s), 0), l.set(new Uint8Array(o), s.byteLength), l.buffer
        },
        binaryDecode: function(e) {
          var t = new DataView(e),
            n = t.getUint8(0),
            i = new TextDecoder;
          switch (n) {
            case this.KINDS.push:
              return this.decodePush(e, t, i);
            case this.KINDS.reply:
              return this.decodeReply(e, t, i);
            case this.KINDS.broadcast:
              return this.decodeBroadcast(e, t, i)
          }
        },
        decodePush: function(e, t, n) {
          var i = t.getUint8(1),
            r = t.getUint8(2),
            o = t.getUint8(3),
            a = this.HEADER_LENGTH + this.META_LENGTH - 1,
            s = n.decode(e.slice(a, a + i));
          a += i;
          var u = n.decode(e.slice(a, a + r));
          a += r;
          var c = n.decode(e.slice(a, a + o));
          return a += o, {
            join_ref: s,
            ref: null,
            topic: u,
            event: c,
            payload: e.slice(a, e.byteLength)
          }
        },
        decodeReply: function(e, t, n) {
          var i = t.getUint8(1),
            r = t.getUint8(2),
            o = t.getUint8(3),
            a = t.getUint8(4),
            s = this.HEADER_LENGTH + this.META_LENGTH,
            u = n.decode(e.slice(s, s + i));
          s += i;
          var c = n.decode(e.slice(s, s + r));
          s += r;
          var l = n.decode(e.slice(s, s + o));
          s += o;
          var h = n.decode(e.slice(s, s + a));
          s += a;
          var d = e.slice(s, e.byteLength);
          return {
            join_ref: u,
            ref: c,
            topic: l,
            event: w,
            payload: {
              status: h,
              response: d
            }
          }
        },
        decodeBroadcast: function(e, t, n) {
          var i = t.getUint8(1),
            r = t.getUint8(2),
            o = this.HEADER_LENGTH + 2,
            a = n.decode(e.slice(o, o + i));
          o += i;
          var s = n.decode(e.slice(o, o + r));
          return o += r, {
            join_ref: null,
            ref: null,
            topic: a,
            event: s,
            payload: e.slice(o, e.byteLength)
          }
        }
      },
      R = function() {
        function e(t) {
          var n = this,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          u(this, e), this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: []
          }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.timeout = i.timeout || 1e4, this.transport = i.transport || f.WebSocket || T, this.defaultEncoder = I.encode.bind(I), this.defaultDecoder = I.decode.bind(I), this.closeWasClean = !1, this.unloaded = !1, this.binaryType = i.binaryType || "arraybuffer", this.transport !== T ? (this.encode = i.encode || this.defaultEncoder, this.decode = i.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder), d && d.addEventListener && d.addEventListener("unload", (function(e) {
            n.conn && (n.unloaded = !0, n.abnormalClose("unloaded"))
          })), this.heartbeatIntervalMs = i.heartbeatIntervalMs || 3e4, this.rejoinAfterMs = function(e) {
            return i.rejoinAfterMs ? i.rejoinAfterMs(e) : [1e3, 2e3, 5e3][e - 1] || 1e4
          }, this.reconnectAfterMs = function(e) {
            return n.unloaded ? 100 : i.reconnectAfterMs ? i.reconnectAfterMs(e) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][e - 1] || 5e3
          }, this.logger = i.logger || null, this.longpollerTimeout = i.longpollerTimeout || 2e4, this.params = x(i.params || {}), this.endPoint = "".concat(t, "/").concat(S), this.vsn = i.vsn || "2.0.0", this.heartbeatTimer = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new O((function() {
            n.teardown((function() {
              return n.connect()
            }))
          }), this.reconnectAfterMs)
        }
        return l(e, [{
          key: "protocol",
          value: function() {
            return location.protocol.match(/^https/) ? "wss" : "ws"
          }
        }, {
          key: "endPointURL",
          value: function() {
            var e = D.appendParams(D.appendParams(this.endPoint, this.params()), {
              vsn: this.vsn
            });
            return "/" !== e.charAt(0) ? e : "/" === e.charAt(1) ? "".concat(this.protocol(), ":").concat(e) : "".concat(this.protocol(), "://").concat(location.host).concat(e)
          }
        }, {
          key: "disconnect",
          value: function(e, t, n) {
            this.closeWasClean = !0, this.reconnectTimer.reset(), this.teardown(e, t, n)
          }
        }, {
          key: "connect",
          value: function(e) {
            var t = this;
            e && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = x(e)), this.conn || (this.closeWasClean = !1, this.conn = new this.transport(this.endPointURL()), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = function() {
              return t.onConnOpen()
            }, this.conn.onerror = function(e) {
              return t.onConnError(e)
            }, this.conn.onmessage = function(e) {
              return t.onConnMessage(e)
            }, this.conn.onclose = function(e) {
              return t.onConnClose(e)
            })
          }
        }, {
          key: "log",
          value: function(e, t, n) {
            this.logger(e, t, n)
          }
        }, {
          key: "hasLogger",
          value: function() {
            return null !== this.logger
          }
        }, {
          key: "onOpen",
          value: function(e) {
            var t = this.makeRef();
            return this.stateChangeCallbacks.open.push([t, e]), t
          }
        }, {
          key: "onClose",
          value: function(e) {
            var t = this.makeRef();
            return this.stateChangeCallbacks.close.push([t, e]), t
          }
        }, {
          key: "onError",
          value: function(e) {
            var t = this.makeRef();
            return this.stateChangeCallbacks.error.push([t, e]), t
          }
        }, {
          key: "onMessage",
          value: function(e) {
            var t = this.makeRef();
            return this.stateChangeCallbacks.message.push([t, e]), t
          }
        }, {
          key: "onConnOpen",
          value: function() {
            this.hasLogger() && this.log("transport", "connected to ".concat(this.endPointURL())), this.unloaded = !1, this.closeWasClean = !1, this.flushSendBuffer(), this.reconnectTimer.reset(), this.resetHeartbeat(), this.stateChangeCallbacks.open.forEach((function(e) {
              return (0, o(e, 2)[1])()
            }))
          }
        }, {
          key: "resetHeartbeat",
          value: function() {
            var e = this;
            this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null, clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval((function() {
              return e.sendHeartbeat()
            }), this.heartbeatIntervalMs))
          }
        }, {
          key: "teardown",
          value: function(e, t, n) {
            var i = this;
            if (!this.conn) return e && e();
            this.waitForBufferDone((function() {
              i.conn && (t ? i.conn.close(t, n || "") : i.conn.close()), i.waitForSocketClosed((function() {
                i.conn && (i.conn.onclose = function() {}, i.conn = null), e && e()
              }))
            }))
          }
        }, {
          key: "waitForBufferDone",
          value: function(e) {
            var t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            5 !== n && this.conn && this.conn.bufferedAmount ? setTimeout((function() {
              t.waitForBufferDone(e, n + 1)
            }), 150 * n) : e()
          }
        }, {
          key: "waitForSocketClosed",
          value: function(e) {
            var t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            5 !== n && this.conn && 3 !== this.conn.readyState ? setTimeout((function() {
              t.waitForSocketClosed(e, n + 1)
            }), 150 * n) : e()
          }
        }, {
          key: "onConnClose",
          value: function(e) {
            this.hasLogger() && this.log("transport", "close", e), this.triggerChanError(), clearInterval(this.heartbeatTimer), this.closeWasClean || this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach((function(t) {
              return (0, o(t, 2)[1])(e)
            }))
          }
        }, {
          key: "onConnError",
          value: function(e) {
            this.hasLogger() && this.log("transport", e), this.triggerChanError(), this.stateChangeCallbacks.error.forEach((function(t) {
              return (0, o(t, 2)[1])(e)
            }))
          }
        }, {
          key: "triggerChanError",
          value: function() {
            this.channels.forEach((function(e) {
              e.isErrored() || e.isLeaving() || e.isClosed() || e.trigger(k)
            }))
          }
        }, {
          key: "connectionState",
          value: function() {
            switch (this.conn && this.conn.readyState) {
              case 0:
                return "connecting";
              case 1:
                return "open";
              case 2:
                return "closing";
              default:
                return "closed"
            }
          }
        }, {
          key: "isConnected",
          value: function() {
            return "open" === this.connectionState()
          }
        }, {
          key: "remove",
          value: function(e) {
            this.off(e.stateChangeRefs), this.channels = this.channels.filter((function(t) {
              return t.joinRef() !== e.joinRef()
            }))
          }
        }, {
          key: "off",
          value: function(e) {
            for (var t in this.stateChangeCallbacks) this.stateChangeCallbacks[t] = this.stateChangeCallbacks[t].filter((function(t) {
              var n = o(t, 1)[0];
              return -1 === e.indexOf(n)
            }))
          }
        }, {
          key: "channel",
          value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = new P(e, t, this);
            return this.channels.push(n), n
          }
        }, {
          key: "push",
          value: function(e) {
            var t = this;
            if (this.hasLogger()) {
              var n = e.topic,
                i = e.event,
                r = e.payload,
                o = e.ref,
                a = e.join_ref;
              this.log("push", "".concat(n, " ").concat(i, " (").concat(a, ", ").concat(o, ")"), r)
            }
            this.isConnected() ? this.encode(e, (function(e) {
              return t.conn.send(e)
            })) : this.sendBuffer.push((function() {
              return t.encode(e, (function(e) {
                return t.conn.send(e)
              }))
            }))
          }
        }, {
          key: "makeRef",
          value: function() {
            var e = this.ref + 1;
            return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString()
          }
        }, {
          key: "sendHeartbeat",
          value: function() {
            if (this.isConnected()) {
              if (this.pendingHeartbeatRef) return this.pendingHeartbeatRef = null, this.hasLogger() && this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), void this.abnormalClose("heartbeat timeout");
              this.pendingHeartbeatRef = this.makeRef(), this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: this.pendingHeartbeatRef
              })
            }
          }
        }, {
          key: "abnormalClose",
          value: function(e) {
            this.closeWasClean = !1, 1 === this.conn.readyState && this.conn.close(1e3, e)
          }
        }, {
          key: "flushSendBuffer",
          value: function() {
            this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((function(e) {
              return e()
            })), this.sendBuffer = [])
          }
        }, {
          key: "onConnMessage",
          value: function(e) {
            var t = this;
            this.decode(e.data, (function(e) {
              var n = e.topic,
                i = e.event,
                r = e.payload,
                a = e.ref,
                s = e.join_ref;
              a && a === t.pendingHeartbeatRef && (t.pendingHeartbeatRef = null), t.hasLogger() && t.log("receive", "".concat(r.status || "", " ").concat(n, " ").concat(i, " ").concat(a && "(" + a + ")" || ""), r);
              for (var u = 0; u < t.channels.length; u++) {
                var c = t.channels[u];
                c.isMember(n, i, r, s) && c.trigger(i, r, a, s)
              }
              for (var l = 0; l < t.stateChangeCallbacks.message.length; l++)(0, o(t.stateChangeCallbacks.message[l], 2)[1])(e)
            }))
          }
        }, {
          key: "leaveOpenTopic",
          value: function(e) {
            var t = this.channels.find((function(t) {
              return t.topic === e && (t.isJoined() || t.isJoining())
            }));
            t && (this.hasLogger() && this.log("transport", 'leaving duplicate topic "'.concat(e, '"')), t.leave())
          }
        }]), e
      }(),
      T = function() {
        function e(t) {
          u(this, e), this.endPoint = null, this.token = null, this.skipHeartbeat = !0, this.onopen = function() {}, this.onerror = function() {}, this.onmessage = function() {}, this.onclose = function() {}, this.pollEndpoint = this.normalizeEndpoint(t), this.readyState = 0, this.poll()
        }
        return l(e, [{
          key: "normalizeEndpoint",
          value: function(e) {
            return e.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + S), "$1/longpoll")
          }
        }, {
          key: "endpointURL",
          value: function() {
            return D.appendParams(this.pollEndpoint, {
              token: this.token
            })
          }
        }, {
          key: "closeAndRetry",
          value: function() {
            this.close(), this.readyState = 0
          }
        }, {
          key: "ontimeout",
          value: function() {
            this.onerror("timeout"), this.closeAndRetry()
          }
        }, {
          key: "poll",
          value: function() {
            var e = this;
            1 !== this.readyState && 0 !== this.readyState || D.request("GET", this.endpointURL(), "application/json", null, this.timeout, this.ontimeout.bind(this), (function(t) {
              if (t) {
                var n = t.status,
                  i = t.token,
                  r = t.messages;
                e.token = i
              } else n = 0;
              switch (n) {
                case 200:
                  r.forEach((function(t) {
                    return e.onmessage({
                      data: t
                    })
                  })), e.poll();
                  break;
                case 204:
                  e.poll();
                  break;
                case 410:
                  e.readyState = 1, e.onopen(), e.poll();
                  break;
                case 403:
                  e.onerror(), e.close();
                  break;
                case 0:
                case 500:
                  e.onerror(), e.closeAndRetry();
                  break;
                default:
                  throw new Error("unhandled poll status ".concat(n))
              }
            }))
          }
        }, {
          key: "send",
          value: function(e) {
            var t = this;
            D.request("POST", this.endpointURL(), "application/json", e, this.timeout, this.onerror.bind(this, "timeout"), (function(e) {
              e && 200 === e.status || (t.onerror(e && e.status), t.closeAndRetry())
            }))
          }
        }, {
          key: "close",
          value: function(e, t) {
            this.readyState = 3, this.onclose()
          }
        }]), e
      }(),
      D = function() {
        function e() {
          u(this, e)
        }
        return l(e, null, [{
          key: "request",
          value: function(e, t, n, i, r, o, a) {
            if (f.XDomainRequest) {
              var s = new XDomainRequest;
              this.xdomainRequest(s, e, t, i, r, o, a)
            } else {
              var u = new f.XMLHttpRequest;
              this.xhrRequest(u, e, t, n, i, r, o, a)
            }
          }
        }, {
          key: "xdomainRequest",
          value: function(e, t, n, i, r, o, a) {
            var s = this;
            e.timeout = r, e.open(t, n), e.onload = function() {
              var t = s.parseJSON(e.responseText);
              a && a(t)
            }, o && (e.ontimeout = o), e.onprogress = function() {}, e.send(i)
          }
        }, {
          key: "xhrRequest",
          value: function(e, t, n, i, r, o, a, s) {
            var u = this;
            e.open(t, n, !0), e.timeout = o, e.setRequestHeader("Content-Type", i), e.onerror = function() {
              s && s(null)
            }, e.onreadystatechange = function() {
              if (e.readyState === u.states.complete && s) {
                var t = u.parseJSON(e.responseText);
                s(t)
              }
            }, a && (e.ontimeout = a), e.send(r)
          }
        }, {
          key: "parseJSON",
          value: function(e) {
            if (!e || "" === e) return null;
            try {
              return JSON.parse(e)
            } catch (t) {
              return console && console.log("failed to parse JSON response", e), null
            }
          }
        }, {
          key: "serialize",
          value: function(e, t) {
            var n = [];
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = t ? "".concat(t, "[").concat(i, "]") : i,
                  a = e[i];
                "object" === r(a) ? n.push(this.serialize(a, o)) : n.push(encodeURIComponent(o) + "=" + encodeURIComponent(a))
              } return n.join("&")
          }
        }, {
          key: "appendParams",
          value: function(e, t) {
            if (0 === Object.keys(t).length) return e;
            var n = e.match(/\?/) ? "&" : "?";
            return "".concat(e).concat(n).concat(this.serialize(t))
          }
        }]), e
      }();
    D.states = {
      complete: 4
    };
    var j = function() {
        function e(t) {
          var n = this,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          u(this, e);
          var r = i.events || {
            state: "presence_state",
            diff: "presence_diff"
          };
          this.state = {}, this.pendingDiffs = [], this.channel = t, this.joinRef = null, this.caller = {
            onJoin: function() {},
            onLeave: function() {},
            onSync: function() {}
          }, this.channel.on(r.state, (function(t) {
            var i = n.caller,
              r = i.onJoin,
              o = i.onLeave,
              a = i.onSync;
            n.joinRef = n.channel.joinRef(), n.state = e.syncState(n.state, t, r, o), n.pendingDiffs.forEach((function(t) {
              n.state = e.syncDiff(n.state, t, r, o)
            })), n.pendingDiffs = [], a()
          })), this.channel.on(r.diff, (function(t) {
            var i = n.caller,
              r = i.onJoin,
              o = i.onLeave,
              a = i.onSync;
            n.inPendingSyncState() ? n.pendingDiffs.push(t) : (n.state = e.syncDiff(n.state, t, r, o), a())
          }))
        }
        return l(e, [{
          key: "onJoin",
          value: function(e) {
            this.caller.onJoin = e
          }
        }, {
          key: "onLeave",
          value: function(e) {
            this.caller.onLeave = e
          }
        }, {
          key: "onSync",
          value: function(e) {
            this.caller.onSync = e
          }
        }, {
          key: "list",
          value: function(t) {
            return e.list(this.state, t)
          }
        }, {
          key: "inPendingSyncState",
          value: function() {
            return !this.joinRef || this.joinRef !== this.channel.joinRef()
          }
        }], [{
          key: "syncState",
          value: function(e, t, n, i) {
            var r = this,
              o = this.clone(e),
              a = {},
              s = {};
            return this.map(o, (function(e, n) {
              t[e] || (s[e] = n)
            })), this.map(t, (function(e, t) {
              var n = o[e];
              if (n) {
                var i = t.metas.map((function(e) {
                    return e.phx_ref
                  })),
                  u = n.metas.map((function(e) {
                    return e.phx_ref
                  })),
                  c = t.metas.filter((function(e) {
                    return u.indexOf(e.phx_ref) < 0
                  })),
                  l = n.metas.filter((function(e) {
                    return i.indexOf(e.phx_ref) < 0
                  }));
                c.length > 0 && (a[e] = t, a[e].metas = c), l.length > 0 && (s[e] = r.clone(n), s[e].metas = l)
              } else a[e] = t
            })), this.syncDiff(o, {
              joins: a,
              leaves: s
            }, n, i)
          }
        }, {
          key: "syncDiff",
          value: function(e, t, n, r) {
            var o = t.joins,
              a = t.leaves,
              s = this.clone(e);
            return n || (n = function() {}), r || (r = function() {}), this.map(o, (function(e, t) {
              var r = s[e];
              if (s[e] = t, r) {
                var o, a = s[e].metas.map((function(e) {
                    return e.phx_ref
                  })),
                  u = r.metas.filter((function(e) {
                    return a.indexOf(e.phx_ref) < 0
                  }));
                (o = s[e].metas).unshift.apply(o, i(u))
              }
              n(e, r, t)
            })), this.map(a, (function(e, t) {
              var n = s[e];
              if (n) {
                var i = t.metas.map((function(e) {
                  return e.phx_ref
                }));
                n.metas = n.metas.filter((function(e) {
                  return i.indexOf(e.phx_ref) < 0
                })), r(e, n, t), 0 === n.metas.length && delete s[e]
              }
            })), s
          }
        }, {
          key: "list",
          value: function(e, t) {
            return t || (t = function(e, t) {
              return t
            }), this.map(e, (function(e, n) {
              return t(e, n)
            }))
          }
        }, {
          key: "map",
          value: function(e, t) {
            return Object.getOwnPropertyNames(e).map((function(n) {
              return t(n, e[n])
            }))
          }
        }, {
          key: "clone",
          value: function(e) {
            return JSON.parse(JSON.stringify(e))
          }
        }]), e
      }(),
      O = function() {
        function e(t, n) {
          u(this, e), this.callback = t, this.timerCalc = n, this.timer = null, this.tries = 0
        }
        return l(e, [{
          key: "reset",
          value: function() {
            this.tries = 0, clearTimeout(this.timer)
          }
        }, {
          key: "scheduleTimeout",
          value: function() {
            var e = this;
            clearTimeout(this.timer), this.timer = setTimeout((function() {
              e.tries = e.tries + 1, e.callback()
            }), this.timerCalc(this.tries + 1))
          }
        }]), e
      }()
  }])
}, function(e, t, n) {
  e.exports = function(e) {
    var t = {};

    function n(i) {
      if (t[i]) return t[i].exports;
      var r = t[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    return n.m = e, n.c = t, n.d = function(e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, {
        configurable: !1,
        enumerable: !0,
        get: i
      })
    }, n.r = function(e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, n.n = function(e) {
      var t = e && e.__esModule ? function() {
        return e.default
      } : function() {
        return e
      };
      return n.d(t, "a", t), t
    }, n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 2)
  }([function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = "undefined" == typeof document ? void 0 : document,
      o = !!r && "content" in r.createElement("template"),
      a = !!r && r.createRange && "createContextualFragment" in r.createRange();

    function s(e) {
      return e = e.trim(), o ? function(e) {
        var t = r.createElement("template");
        return t.innerHTML = e, t.content.childNodes[0]
      }(e) : a ? function(e) {
        return i || (i = r.createRange()).selectNode(r.body), i.createContextualFragment(e).childNodes[0]
      }(e) : function(e) {
        var t = r.createElement("body");
        return t.innerHTML = e, t.childNodes[0]
      }(e)
    }

    function u(e, t) {
      var n, i, r = e.nodeName,
        o = t.nodeName;
      return r === o || (n = r.charCodeAt(0), i = o.charCodeAt(0), n <= 90 && i >= 97 ? r === o.toUpperCase() : i <= 90 && n >= 97 && o === r.toUpperCase())
    }

    function c(e, t, n) {
      e[n] !== t[n] && (e[n] = t[n], e[n] ? e.setAttribute(n, "") : e.removeAttribute(n))
    }
    var l = {
      OPTION: function(e, t) {
        var n = e.parentNode;
        if (n) {
          var i = n.nodeName.toUpperCase();
          "OPTGROUP" === i && (i = (n = n.parentNode) && n.nodeName.toUpperCase()), "SELECT" !== i || n.hasAttribute("multiple") || (e.hasAttribute("selected") && !t.selected && (e.setAttribute("selected", "selected"), e.removeAttribute("selected")), n.selectedIndex = -1)
        }
        c(e, t, "selected")
      },
      INPUT: function(e, t) {
        c(e, t, "checked"), c(e, t, "disabled"), e.value !== t.value && (e.value = t.value), t.hasAttribute("value") || e.removeAttribute("value")
      },
      TEXTAREA: function(e, t) {
        var n = t.value;
        e.value !== n && (e.value = n);
        var i = e.firstChild;
        if (i) {
          var r = i.nodeValue;
          if (r == n || !n && r == e.placeholder) return;
          i.nodeValue = n
        }
      },
      SELECT: function(e, t) {
        if (!t.hasAttribute("multiple")) {
          for (var n, i, r = -1, o = 0, a = e.firstChild; a;)
            if ("OPTGROUP" === (i = a.nodeName && a.nodeName.toUpperCase())) a = (n = a).firstChild;
            else {
              if ("OPTION" === i) {
                if (a.hasAttribute("selected")) {
                  r = o;
                  break
                }
                o++
              }!(a = a.nextSibling) && n && (a = n.nextSibling, n = null)
            } e.selectedIndex = r
        }
      }
    };

    function h() {}

    function d(e) {
      if (e) return e.getAttribute && e.getAttribute("id") || e.id
    }
    var f = function(e) {
      return function(t, n, i) {
        if (i || (i = {}), "string" == typeof n)
          if ("#document" === t.nodeName || "HTML" === t.nodeName || "BODY" === t.nodeName) {
            var o = n;
            (n = r.createElement("html")).innerHTML = o
          } else n = s(n);
        var a = i.getNodeKey || d,
          c = i.onBeforeNodeAdded || h,
          f = i.onNodeAdded || h,
          v = i.onBeforeElUpdated || h,
          p = i.onElUpdated || h,
          m = i.onBeforeNodeDiscarded || h,
          g = i.onNodeDiscarded || h,
          y = i.onBeforeElChildrenUpdated || h,
          b = !0 === i.childrenOnly,
          k = Object.create(null),
          A = [];

        function w(e) {
          A.push(e)
        }

        function E(e, t, n) {
          !1 !== m(e) && (t && t.removeChild(e), g(e), function e(t, n) {
            if (1 === t.nodeType)
              for (var i = t.firstChild; i;) {
                var r = void 0;
                n && (r = a(i)) ? w(r) : (g(i), i.firstChild && e(i, n)), i = i.nextSibling
              }
          }(e, n))
        }

        function C(e) {
          f(e);
          for (var t = e.firstChild; t;) {
            var n = t.nextSibling,
              i = a(t);
            if (i) {
              var r = k[i];
              r && u(t, r) ? (t.parentNode.replaceChild(r, t), S(r, t)) : C(t)
            } else C(t);
            t = n
          }
        }

        function S(t, n, i) {
          var o = a(n);
          if (o && delete k[o], !i) {
            if (!1 === v(t, n)) return;
            if (e(t, n), p(t), !1 === y(t, n)) return
          }
          "TEXTAREA" !== t.nodeName ? function(e, t) {
            var n, i, o, s, h, d = t.firstChild,
              f = e.firstChild;
            e: for (; d;) {
              for (s = d.nextSibling, n = a(d); f;) {
                if (o = f.nextSibling, d.isSameNode && d.isSameNode(f)) {
                  d = s, f = o;
                  continue e
                }
                i = a(f);
                var v = f.nodeType,
                  p = void 0;
                if (v === d.nodeType && (1 === v ? (n ? n !== i && ((h = k[n]) ? o === h ? p = !1 : (e.insertBefore(h, f), i ? w(i) : E(f, e, !0), f = h) : p = !1) : i && (p = !1), (p = !1 !== p && u(f, d)) && S(f, d)) : 3 !== v && 8 != v || (p = !0, f.nodeValue !== d.nodeValue && (f.nodeValue = d.nodeValue))), p) {
                  d = s, f = o;
                  continue e
                }
                i ? w(i) : E(f, e, !0), f = o
              }
              if (n && (h = k[n]) && u(h, d)) e.appendChild(h), S(h, d);
              else {
                var m = c(d);
                !1 !== m && (m && (d = m), d.actualize && (d = d.actualize(e.ownerDocument || r)), e.appendChild(d), C(d))
              }
              d = s, f = o
            }! function(e, t, n) {
              for (; t;) {
                var i = t.nextSibling;
                (n = a(t)) ? w(n): E(t, e, !0), t = i
              }
            }(e, f, i);
            var g = l[e.nodeName];
            g && g(e, t)
          }(t, n) : l.TEXTAREA(t, n)
        }! function e(t) {
          if (1 === t.nodeType || 11 === t.nodeType)
            for (var n = t.firstChild; n;) {
              var i = a(n);
              i && (k[i] = n), e(n), n = n.nextSibling
            }
        }(t);
        var x = t,
          L = x.nodeType,
          P = n.nodeType;
        if (!b)
          if (1 === L) 1 === P ? u(t, n) || (g(t), x = function(e, t) {
            for (var n = e.firstChild; n;) {
              var i = n.nextSibling;
              t.appendChild(n), n = i
            }
            return t
          }(t, function(e, t) {
            return t && "http://www.w3.org/1999/xhtml" !== t ? r.createElementNS(t, e) : r.createElement(e)
          }(n.nodeName, n.namespaceURI))) : x = n;
          else if (3 === L || 8 === L) {
          if (P === L) return x.nodeValue !== n.nodeValue && (x.nodeValue = n.nodeValue), x;
          x = n
        }
        if (x === n) g(t);
        else {
          if (n.isSameNode && n.isSameNode(x)) return;
          if (S(x, n, b), A)
            for (var I = 0, R = A.length; I < R; I++) {
              var T = k[A[I]];
              T && E(T, T.parentNode, !1)
            }
        }
        return !b && x !== t && t.parentNode && (x.actualize && (x = x.actualize(t.ownerDocument || r)), t.parentNode.replaceChild(x, t)), x
      }
    }((function(e, t) {
      var n, i, r, o, a = t.attributes;
      if (11 !== t.nodeType && 11 !== e.nodeType) {
        for (var s = a.length - 1; s >= 0; s--) i = (n = a[s]).name, r = n.namespaceURI, o = n.value, r ? (i = n.localName || i, e.getAttributeNS(r, i) !== o && ("xmlns" === n.prefix && (i = n.name), e.setAttributeNS(r, i, o))) : e.getAttribute(i) !== o && e.setAttribute(i, o);
        for (var u = e.attributes, c = u.length - 1; c >= 0; c--) i = (n = u[c]).name, (r = n.namespaceURI) ? (i = n.localName || i, t.hasAttributeNS(r, i) || e.removeAttributeNS(r, i)) : t.hasAttribute(i) || e.removeAttribute(i)
      }
    }));

    function v(e) {
      return A(e) || y(e) || w(e) || k()
    }

    function p(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, i)
      }
      return n
    }

    function m(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    function g(e) {
      return function(e) {
        if (Array.isArray(e)) return E(e)
      }(e) || y(e) || w(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function y(e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
    }

    function b(e, t) {
      return A(e) || function(e, t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
          var n = [],
            i = !0,
            r = !1,
            o = void 0;
          try {
            for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
          } catch (e) {
            r = !0, o = e
          } finally {
            try {
              i || null == s.return || s.return()
            } finally {
              if (r) throw o
            }
          }
          return n
        }
      }(e, t) || w(e, t) || k()
    }

    function k() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function A(e) {
      if (Array.isArray(e)) return e
    }

    function w(e, t) {
      if (e) {
        if ("string" == typeof e) return E(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? E(e, t) : void 0
      }
    }

    function E(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i
    }

    function C(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function S(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    }

    function x(e, t, n) {
      return t && S(e.prototype, t), n && S(e, n), e
    }

    function L(e) {
      return (L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
    }
    n.d(t, "debug", (function() {
      return H
    })), n.d(t, "Rendered", (function() {
      return ee
    })), n.d(t, "LiveSocket", (function() {
      return te
    })), n.d(t, "Browser", (function() {
      return ne
    })), n.d(t, "DOM", (function() {
      return ie
    })), n.d(t, "View", (function() {
      return ae
    }));
    var P = [1e3, 3e3],
      I = "data-phx-view",
      R = ["phx-click-loading", "phx-change-loading", "phx-submit-loading", "phx-keydown-loading", "phx-keyup-loading", "phx-blur-loading", "phx-focus-loading"],
      T = "data-phx-component",
      D = "data-phx-ref",
      j = "data-phx-upload-ref",
      O = "[".concat(I, "]"),
      N = ["text", "textarea", "number", "email", "password", "search", "tel", "url", "date", "time"],
      _ = ["checkbox", "radio"],
      M = "phx-",
      U = {
        debounce: 300,
        throttle: 300
      },
      B = function(e, t) {
        return console.error && console.error(e, t)
      },
      H = function(e, t, n, i) {
        e.liveSocket.isDebugEnabled() && console.log("".concat(e.id, " ").concat(t, ": ").concat(n, " - "), i)
      },
      F = function(e) {
        return "function" == typeof e ? e : function() {
          return e
        }
      },
      J = function(e) {
        return JSON.parse(JSON.stringify(e))
      },
      W = function(e, t, n) {
        do {
          if (e.matches("[".concat(t, "]"))) return e;
          e = e.parentElement || e.parentNode
        } while (null !== e && 1 === e.nodeType && !(n && n.isSameNode(e) || e.matches(O)));
        return null
      },
      q = function(e) {
        return null !== e && "object" === L(e) && !(e instanceof Array)
      },
      Q = function(e) {
        for (var t in e) return !1;
        return !0
      },
      V = function(e, t) {
        return e && t(e)
      },
      z = function() {
        function e(t, n, i) {
          C(this, e), this.ref = Z.genFileRef(n), this.fileEl = t, this.file = n, this.view = i, this.meta = null, this._isCancelled = !1, this._isDone = !1, this._progress = 0, this._onDone = function() {}
        }
        return x(e, null, [{
          key: "isActive",
          value: function(e, t) {
            var n = void 0 === t._phxRef,
              i = e.getAttribute("data-phx-active-refs").split(",").indexOf(Z.genFileRef(t)) >= 0;
            return t.size > 0 && (n || i)
          }
        }, {
          key: "isPreflighted",
          value: function(e, t) {
            return e.getAttribute("data-phx-preflighted-refs").split(",").indexOf(Z.genFileRef(t)) >= 0 && this.isActive(e, t)
          }
        }]), x(e, [{
          key: "metadata",
          value: function() {
            return this.meta
          }
        }, {
          key: "progress",
          value: function(e) {
            var t = this;
            this._progress = Math.floor(e), this._progress >= 100 ? (this._progress = 100, this._isDone = !0, this.view.pushFileProgress(this.fileEl, this.ref, 100, (function() {
              Z.untrackFile(t.fileEl, t.file), t._onDone()
            }))) : this.view.pushFileProgress(this.fileEl, this.ref, this._progress)
          }
        }, {
          key: "cancel",
          value: function() {
            this._isCancelled = !0, this._isDone = !0, this._onDone()
          }
        }, {
          key: "isDone",
          value: function() {
            return this._isDone
          }
        }, {
          key: "error",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "failed";
            this.view.pushFileProgress(this.fileEl, this.ref, {
              error: e
            })
          }
        }, {
          key: "onDone",
          value: function(e) {
            this._onDone = e
          }
        }, {
          key: "toPreflightPayload",
          value: function() {
            return {
              last_modified: this.file.lastModified,
              name: this.file.name,
              size: this.file.size,
              type: this.file.type,
              ref: this.ref
            }
          }
        }, {
          key: "uploader",
          value: function(e) {
            if (this.meta.uploader) {
              var t = e[this.meta.uploader] || B("no uploader configured for ".concat(this.meta.uploader));
              return {
                name: this.meta.uploader,
                callback: t
              }
            }
            return {
              name: "channel",
              callback: Y
            }
          }
        }, {
          key: "zipPostFlight",
          value: function(e) {
            this.meta = e.entries[this.ref], this.meta || B("no preflight upload response returned with ref ".concat(this.ref), {
              input: this.fileEl,
              response: e
            })
          }
        }]), e
      }(),
      K = {
        LiveFileUpload: {
          preflightedRefs: function() {
            return this.el.getAttribute("data-phx-preflighted-refs")
          },
          mounted: function() {
            this.preflightedWas = this.preflightedRefs()
          },
          updated: function() {
            var e = this.preflightedRefs();
            this.preflightedWas !== e && (this.preflightedWas = e, "" === e && this.__view.cancelSubmit(this.el.form))
          }
        }
      };
    K.LiveImgPreview = {
      mounted: function() {
        var e = this;
        this.ref = this.el.getAttribute("data-phx-entry-ref"), this.inputEl = document.getElementById(this.el.getAttribute(j)), Z.getEntryDataURL(this.inputEl, this.ref, (function(t) {
          return e.el.src = t
        }))
      }
    };
    var G = 0,
      Z = function() {
        function e(t, n, i) {
          C(this, e), this.view = n, this.onComplete = i, this._entries = Array.from(e.filesAwaitingPreflight(t) || []).map((function(e) {
            return new z(t, e, n)
          })), this.numEntriesInProgress = this._entries.length
        }
        return x(e, null, [{
          key: "genFileRef",
          value: function(e) {
            var t = e._phxRef;
            return void 0 !== t ? t : (e._phxRef = (G++).toString(), e._phxRef)
          }
        }, {
          key: "getEntryDataURL",
          value: function(e, t, n) {
            var i = this,
              r = this.activeFiles(e).find((function(e) {
                return i.genFileRef(e) === t
              })),
              o = new FileReader;
            o.onload = function(e) {
              return n(e.target.result)
            }, o.readAsDataURL(r)
          }
        }, {
          key: "hasUploadsInProgress",
          value: function(e) {
            var t = 0;
            return ie.findUploadInputs(e).forEach((function(e) {
              e.getAttribute("data-phx-preflighted-refs") !== e.getAttribute("data-phx-done-refs") && t++
            })), t > 0
          }
        }, {
          key: "serializeUploads",
          value: function(e) {
            var t = this,
              n = {};
            return this.activeFiles(e, "serialize").forEach((function(i) {
              var r = {
                  path: e.name
                },
                o = e.getAttribute(j);
              n[o] = n[o] || [], r.ref = t.genFileRef(i), r.name = i.name, r.type = i.type, r.size = i.size, n[o].push(r)
            })), n
          }
        }, {
          key: "clearFiles",
          value: function(e) {
            e.value = null, ie.putPrivate(e, "files", [])
          }
        }, {
          key: "untrackFile",
          value: function(e, t) {
            ie.putPrivate(e, "files", ie.private(e, "files").filter((function(e) {
              return !Object.is(e, t)
            })))
          }
        }, {
          key: "trackFiles",
          value: function(e, t) {
            var n = this;
            if (null !== e.getAttribute("multiple")) {
              var i = t.filter((function(t) {
                return !n.activeFiles(e).find((function(e) {
                  return Object.is(e, t)
                }))
              }));
              ie.putPrivate(e, "files", this.activeFiles(e).concat(i)), e.value = null
            } else ie.putPrivate(e, "files", t)
          }
        }, {
          key: "activeFileInputs",
          value: function(e) {
            var t = this,
              n = ie.findUploadInputs(e);
            return Array.from(n).filter((function(e) {
              return e.files && t.activeFiles(e).length > 0
            }))
          }
        }, {
          key: "activeFiles",
          value: function(e) {
            return (ie.private(e, "files") || []).filter((function(t) {
              return z.isActive(e, t)
            }))
          }
        }, {
          key: "inputsAwaitingPreflight",
          value: function(e) {
            var t = this,
              n = ie.findUploadInputs(e);
            return Array.from(n).filter((function(e) {
              return t.filesAwaitingPreflight(e).length > 0
            }))
          }
        }, {
          key: "filesAwaitingPreflight",
          value: function(e) {
            return this.activeFiles(e).filter((function(t) {
              return !z.isPreflighted(e, t)
            }))
          }
        }]), x(e, [{
          key: "entries",
          value: function() {
            return this._entries
          }
        }, {
          key: "initAdapterUpload",
          value: function(e, t, n) {
            var i = this;
            this._entries = this._entries.map((function(t) {
              return t.zipPostFlight(e), t.onDone((function() {
                i.numEntriesInProgress--, 0 === i.numEntriesInProgress && i.onComplete()
              })), t
            }));
            var r = this._entries.reduce((function(e, t) {
              var i = t.uploader(n.uploaders),
                r = i.name,
                o = i.callback;
              return e[r] = e[r] || {
                callback: o,
                entries: []
              }, e[r].entries.push(t), e
            }), {});
            for (var o in r) {
              var a = r[o];
              (0, a.callback)(a.entries, t, e, n)
            }
          }
        }]), e
      }(),
      Y = function(e, t, n, i) {
        e.forEach((function(e) {
          new X(e, n.config.chunk_size, i).upload()
        }))
      },
      X = function() {
        function e(t, n, i) {
          C(this, e), this.liveSocket = i, this.entry = t, this.offset = 0, this.chunkSize = n, this.uploadChannel = i.channel("lvu:".concat(t.ref), {
            token: t.metadata()
          })
        }
        return x(e, [{
          key: "upload",
          value: function() {
            var e = this;
            this.uploadChannel.join().receive("ok", (function(t) {
              return e.readNextChunk()
            })).receive("error", (function(t) {
              e.uploadChannel.leave(), e.entry.error()
            }))
          }
        }, {
          key: "isDone",
          value: function() {
            return this.offset >= this.entry.file.size
          }
        }, {
          key: "readNextChunk",
          value: function() {
            var e = this,
              t = new window.FileReader,
              n = this.entry.file.slice(this.offset, this.chunkSize + this.offset);
            t.onload = function(t) {
              if (null !== t.target.error) return B("Read error: " + t.target.error);
              e.offset += t.target.result.byteLength, e.pushChunk(t.target.result)
            }, t.readAsArrayBuffer(n)
          }
        }, {
          key: "pushChunk",
          value: function(e) {
            var t = this;
            this.uploadChannel.isJoined() && this.uploadChannel.push("chunk", e).receive("ok", (function() {
              t.entry.progress(t.offset / t.entry.file.size * 100), t.isDone() || setTimeout((function() {
                return t.readNextChunk()
              }), t.liveSocket.getLatencySim() || 0)
            }))
          }
        }]), e
      }(),
      $ = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = new FormData(e),
          i = [];
        n.forEach((function(e, t, n) {
          e instanceof File && i.push(t)
        })), i.forEach((function(e) {
          return n.delete(e)
        }));
        var r, o = new URLSearchParams,
          a = function(e) {
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
              if (Array.isArray(e) || (e = w(e))) {
                var t = 0,
                  n = function() {};
                return {
                  s: n,
                  n: function() {
                    return t >= e.length ? {
                      done: !0
                    } : {
                      done: !1,
                      value: e[t++]
                    }
                  },
                  e: function(e) {
                    throw e
                  },
                  f: n
                }
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, r, o = !0,
              a = !1;
            return {
              s: function() {
                i = e[Symbol.iterator]()
              },
              n: function() {
                var e = i.next();
                return o = e.done, e
              },
              e: function(e) {
                a = !0, r = e
              },
              f: function() {
                try {
                  o || null == i.return || i.return()
                } finally {
                  if (a) throw r
                }
              }
            }
          }(n.entries());
        try {
          for (a.s(); !(r = a.n()).done;) {
            var s = b(r.value, 2),
              u = s[0],
              c = s[1];
            o.append(u, c)
          }
        } catch (e) {
          a.e(e)
        } finally {
          a.f()
        }
        for (var l in t) o.append(l, t[l]);
        return o.toString()
      },
      ee = function() {
        function e(t, n) {
          C(this, e), this.viewId = t, this.rendered = {}, this.mergeDiff(n)
        }
        return x(e, null, [{
          key: "extract",
          value: function(e) {
            var t = e.r,
              n = e.e,
              i = e.t;
            return delete e.r, delete e.e, delete e.t, {
              diff: e,
              title: i,
              reply: t || null,
              events: n || []
            }
          }
        }]), x(e, [{
          key: "parentViewId",
          value: function() {
            return this.viewId
          }
        }, {
          key: "toString",
          value: function(e) {
            return this.recursiveToString(this.rendered, this.rendered.c, e)
          }
        }, {
          key: "recursiveToString",
          value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.c,
              n = arguments.length > 2 ? arguments[2] : void 0,
              i = {
                buffer: "",
                components: t,
                onlyCids: n = n ? new Set(n) : null
              };
            return this.toOutputBuffer(e, i), i.buffer
          }
        }, {
          key: "componentCIDs",
          value: function(e) {
            return Object.keys(e.c || {}).map((function(e) {
              return parseInt(e)
            }))
          }
        }, {
          key: "isComponentOnlyDiff",
          value: function(e) {
            return !!e.c && 1 === Object.keys(e).length
          }
        }, {
          key: "getComponent",
          value: function(e, t) {
            return e.c[t]
          }
        }, {
          key: "mergeDiff",
          value: function(e) {
            var t = e.c;
            if (delete e.c, this.rendered = this.recursiveMerge(this.rendered, e), this.rendered.c = this.rendered.c || {}, t) {
              var n = this.rendered.c;
              for (var i in t) {
                var r = t[i],
                  o = r,
                  a = o.s;
                if ("number" == typeof a) {
                  for (;
                    "number" == typeof a;) a = (o = a > 0 ? t[a] : n[-a]).s;
                  o = J(o), this.doRecursiveMerge(o, r), o.s = a
                } else o = n[i] || {}, o = this.recursiveMerge(o, r);
                t[i] = o
              }
              for (var s in t) n[s] = t[s];
              e.c = t
            }
          }
        }, {
          key: "recursiveMerge",
          value: function(e, t) {
            return void 0 !== t.s ? t : (this.doRecursiveMerge(e, t), e)
          }
        }, {
          key: "doRecursiveMerge",
          value: function(e, t) {
            for (var n in t) {
              var i = t[n],
                r = e[n];
              q(i) && void 0 === i.s && q(r) ? this.doRecursiveMerge(r, i) : e[n] = i
            }
          }
        }, {
          key: "componentToString",
          value: function(e) {
            return this.recursiveCIDToString(this.rendered.c, e)
          }
        }, {
          key: "pruneCIDs",
          value: function(e) {
            var t = this;
            e.forEach((function(e) {
              return delete t.rendered.c[e]
            }))
          }
        }, {
          key: "get",
          value: function() {
            return this.rendered
          }
        }, {
          key: "isNewFingerprint",
          value: function() {
            return !!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).s
          }
        }, {
          key: "toOutputBuffer",
          value: function(e, t) {
            if (e.d) return this.comprehensionToBuffer(e, t);
            var n = e.s;
            t.buffer += n[0];
            for (var i = 1; i < n.length; i++) this.dynamicToBuffer(e[i - 1], t), t.buffer += n[i]
          }
        }, {
          key: "comprehensionToBuffer",
          value: function(e, t) {
            for (var n = e.d, i = e.s, r = 0; r < n.length; r++) {
              var o = n[r];
              t.buffer += i[0];
              for (var a = 1; a < i.length; a++) this.dynamicToBuffer(o[a - 1], t), t.buffer += i[a]
            }
          }
        }, {
          key: "dynamicToBuffer",
          value: function(e, t) {
            "number" == typeof e ? t.buffer += this.recursiveCIDToString(t.components, e, t.onlyCids) : q(e) ? this.toOutputBuffer(e, t) : t.buffer += e
          }
        }, {
          key: "recursiveCIDToString",
          value: function(e, t, n) {
            var i = this,
              r = e[t] || B("no component for CID ".concat(t), e),
              o = document.createElement("template");
            o.innerHTML = this.recursiveToString(r, e, n);
            var a = o.content,
              s = n && !n.has(t),
              u = b(Array.from(a.childNodes).reduce((function(e, n, r) {
                var a = b(e, 2),
                  u = a[0],
                  c = a[1];
                return n.nodeType === Node.ELEMENT_NODE ? n.getAttribute(T) ? [u, !0] : (n.setAttribute(T, t), n.id || (n.id = "".concat(i.parentViewId(), "-").concat(t, "-").concat(r)), s && (n.setAttribute("data-phx-skip", ""), n.innerHTML = ""), [!0, c]) : "" !== n.nodeValue.trim() ? (B("only HTML element tags are allowed at the root of components.\n\n" + 'got: "'.concat(n.nodeValue.trim(), '"\n\n') + "within:\n", o.innerHTML.trim()), n.replaceWith(i.createSpan(n.nodeValue, t)), [!0, c]) : (n.remove(), [u, c])
              }), [!1, !1]), 2),
              c = u[0],
              l = u[1];
            return c || l ? !c && l ? (B("expected at least one HTML element tag directly inside a component, but only subcomponents were found. A component must render at least one HTML tag directly inside itself.", o.innerHTML.trim()), o.innerHTML) : o.innerHTML : (B("expected at least one HTML element tag inside a component, but the component is empty:\n", o.innerHTML.trim()), this.createSpan("", t).outerHTML)
          }
        }, {
          key: "createSpan",
          value: function(e, t) {
            var n = document.createElement("span");
            return n.innerText = e, n.setAttribute(T, t), n
          }
        }]), e
      }(),
      te = function() {
        function e(t, n) {
          var i = this,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (C(this, e), this.unloaded = !1, !n || "Object" === n.constructor.name) throw new Error('\n      a phoenix Socket must be provided as the second argument to the LiveSocket constructor. For example:\n\n          import {Socket} from "phoenix"\n          import {LiveSocket} from "phoenix_live_view"\n          let liveSocket = new LiveSocket("/live", Socket, {...})\n      ');
          this.socket = new n(t, r), this.bindingPrefix = r.bindingPrefix || M, this.opts = r, this.params = F(r.params || {}), this.viewLogger = r.viewLogger, this.metadataCallbacks = r.metadata || {}, this.defaults = Object.assign(J(U), r.defaults || {}), this.activeElement = null, this.prevActive = null, this.silenced = !1, this.main = null, this.linkRef = 0, this.roots = {}, this.href = window.location.href, this.pendingLink = null, this.currentLocation = J(window.location), this.hooks = r.hooks || {}, this.uploaders = r.uploaders || {}, this.loaderTimeout = r.loaderTimeout || 1, this.boundTopLevelEvents = !1, this.domCallbacks = Object.assign({
            onNodeAdded: F(),
            onBeforeElUpdated: F()
          }, r.dom || {}), window.addEventListener("unload", (function(e) {
            i.unloaded = !0
          })), this.socket.onOpen((function() {
            i.isUnloaded() && window.location.reload()
          }))
        }
        return x(e, [{
          key: "isProfileEnabled",
          value: function() {
            return "true" === sessionStorage.getItem("phx:live-socket:profiling")
          }
        }, {
          key: "isDebugEnabled",
          value: function() {
            return "true" === sessionStorage.getItem("phx:live-socket:debug")
          }
        }, {
          key: "enableDebug",
          value: function() {
            sessionStorage.setItem("phx:live-socket:debug", "true")
          }
        }, {
          key: "enableProfiling",
          value: function() {
            sessionStorage.setItem("phx:live-socket:profiling", "true")
          }
        }, {
          key: "disableDebug",
          value: function() {
            sessionStorage.removeItem("phx:live-socket:debug")
          }
        }, {
          key: "disableProfiling",
          value: function() {
            sessionStorage.removeItem("phx:live-socket:profiling")
          }
        }, {
          key: "enableLatencySim",
          value: function(e) {
            this.enableDebug(), console.log("latency simulator enabled for the duration of this browser session. Call disableLatencySim() to disable"), sessionStorage.setItem("phx:live-socket:latency-sim", e)
          }
        }, {
          key: "disableLatencySim",
          value: function() {
            sessionStorage.removeItem("phx:live-socket:latency-sim")
          }
        }, {
          key: "getLatencySim",
          value: function() {
            var e = sessionStorage.getItem("phx:live-socket:latency-sim");
            return e ? parseInt(e) : null
          }
        }, {
          key: "getSocket",
          value: function() {
            return this.socket
          }
        }, {
          key: "connect",
          value: function() {
            var e = this,
              t = function() {
                e.joinRootViews() && (e.bindTopLevelEvents(), e.socket.connect())
              };
            ["complete", "loaded", "interactive"].indexOf(document.readyState) >= 0 ? t() : document.addEventListener("DOMContentLoaded", (function() {
              return t()
            }))
          }
        }, {
          key: "disconnect",
          value: function(e) {
            this.socket.disconnect(e)
          }
        }, {
          key: "triggerDOM",
          value: function(e, t) {
            var n;
            (n = this.domCallbacks)[e].apply(n, g(t))
          }
        }, {
          key: "time",
          value: function(e, t) {
            if (!this.isProfileEnabled() || !console.time) return t();
            console.time(e);
            var n = t();
            return console.timeEnd(e), n
          }
        }, {
          key: "log",
          value: function(e, t, n) {
            if (this.viewLogger) {
              var i = b(n(), 2),
                r = i[0],
                o = i[1];
              this.viewLogger(e, t, r, o)
            } else if (this.isDebugEnabled()) {
              var a = b(n(), 2),
                s = a[0],
                u = a[1];
              H(e, t, s, u)
            }
          }
        }, {
          key: "onChannel",
          value: function(e, t, n) {
            var i = this;
            e.on(t, (function(e) {
              var t = i.getLatencySim();
              t ? (console.log("simulating ".concat(t, "ms of latency from server to client")), setTimeout((function() {
                return n(e)
              }), t)) : n(e)
            }))
          }
        }, {
          key: "wrapPush",
          value: function(e, t, n) {
            var i = this,
              r = this.getLatencySim(),
              o = e.joinCount;
            if (!r) return t.timeout ? n().receive("timeout", (function() {
              e.joinCount === o && i.reloadWithJitter(e, (function() {
                i.log(e, "timeout", (function() {
                  return ["received timeout while communicating with server. Falling back to hard refresh for recovery"]
                }))
              }))
            })) : n();
            console.log("simulating ".concat(r, "ms of latency from client to server"));
            var a = {
              receives: [],
              receive: function(e, t) {
                this.receives.push([e, t])
              }
            };
            return setTimeout((function() {
              a.receives.reduce((function(e, t) {
                var n = b(t, 2),
                  i = n[0],
                  r = n[1];
                return e.receive(i, r)
              }), n())
            }), r), a
          }
        }, {
          key: "reloadWithJitter",
          value: function(e, t) {
            var n = this;
            e.destroy(), this.disconnect();
            var i = P[0],
              r = P[1],
              o = Math.floor(Math.random() * (r - i + 1)) + i,
              a = ne.updateLocal(e.name(), "consecutive-reloads", 0, (function(e) {
                return e + 1
              }));
            t ? t() : this.log(e, "join", (function() {
              return ["encountered ".concat(a, " consecutive reloads")]
            })), a > 10 && (this.log(e, "join", (function() {
              return ["exceeded ".concat(10, " consecutive reloads. Entering failsafe mode")]
            })), o = 3e4), setTimeout((function() {
              n.hasPendingLink() ? window.location = n.pendingLink : window.location.reload()
            }), o)
          }
        }, {
          key: "getHookCallbacks",
          value: function(e) {
            return e && e.startsWith("Phoenix.") ? K[e.split(".")[1]] : this.hooks[e]
          }
        }, {
          key: "isUnloaded",
          value: function() {
            return this.unloaded
          }
        }, {
          key: "isConnected",
          value: function() {
            return this.socket.isConnected()
          }
        }, {
          key: "getBindingPrefix",
          value: function() {
            return this.bindingPrefix
          }
        }, {
          key: "binding",
          value: function(e) {
            return "".concat(this.getBindingPrefix()).concat(e)
          }
        }, {
          key: "channel",
          value: function(e, t) {
            return this.socket.channel(e, t)
          }
        }, {
          key: "joinRootViews",
          value: function() {
            var e = this,
              t = !1;
            return ie.all(document, "".concat(O, ":not([").concat("data-phx-parent-id", "])"), (function(n) {
              if (!e.getRootById(n.id)) {
                var i = e.joinRootView(n, e.getHref());
                e.root = e.root || i, n.getAttribute("data-phx-main") && (e.main = i)
              }
              t = !0
            })), t
          }
        }, {
          key: "redirect",
          value: function(e, t) {
            this.disconnect(), ne.redirect(e, t)
          }
        }, {
          key: "replaceMain",
          value: function(e, t) {
            var n = this,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.setPendingLink(e),
              o = this.main.el;
            this.main.showLoader(this.loaderTimeout), this.main.destroy(), ne.fetchPage(e, (function(a, s) {
              if (200 !== a) return n.redirect(e);
              var u = document.createElement("template");
              u.innerHTML = s;
              var c = u.content.childNodes[0];
              if (!c || !n.isPhxView(c)) return n.redirect(e);
              n.joinRootView(c, e, t, (function(e, t) {
                1 === t && (n.commitPendingLink(r) ? (o.replaceWith(e.el), n.main = e, i && i()) : e.destroy())
              }))
            }))
          }
        }, {
          key: "isPhxView",
          value: function(e) {
            return e.getAttribute && null !== e.getAttribute(I)
          }
        }, {
          key: "joinRootView",
          value: function(e, t, n, i) {
            var r = new ae(e, this, null, t, n);
            return this.roots[r.id] = r, r.join(i), r
          }
        }, {
          key: "owner",
          value: function(e, t) {
            var n = this,
              i = V(e.closest(O), (function(e) {
                return n.getViewByEl(e)
              }));
            i && t(i)
          }
        }, {
          key: "withinOwners",
          value: function(e, t) {
            var n = this;
            this.owner(e, (function(i) {
              var r = e.getAttribute(n.binding("target"));
              null === r ? t(i, e) : i.withinTargets(r, t)
            }))
          }
        }, {
          key: "getViewByEl",
          value: function(e) {
            var t = e.getAttribute("data-phx-root-id");
            return V(this.getRootById(t), (function(t) {
              return t.getDescendentByEl(e)
            }))
          }
        }, {
          key: "getRootById",
          value: function(e) {
            return this.roots[e]
          }
        }, {
          key: "destroyAllViews",
          value: function() {
            for (var e in this.roots) this.roots[e].destroy(), delete this.roots[e]
          }
        }, {
          key: "destroyViewByEl",
          value: function(e) {
            var t = this.getRootById(e.getAttribute("data-phx-root-id"));
            t && t.destroyDescendent(e.id)
          }
        }, {
          key: "setActiveElement",
          value: function(e) {
            var t = this;
            if (this.activeElement !== e) {
              this.activeElement = e;
              var n = function() {
                e === t.activeElement && (t.activeElement = null), e.removeEventListener("mouseup", t), e.removeEventListener("touchend", t)
              };
              e.addEventListener("mouseup", n), e.addEventListener("touchend", n)
            }
          }
        }, {
          key: "getActiveElement",
          value: function() {
            return document.activeElement === document.body ? this.activeElement || document.activeElement : document.activeElement || document.body
          }
        }, {
          key: "dropActiveElement",
          value: function(e) {
            this.prevActive && e.ownsElement(this.prevActive) && (this.prevActive = null)
          }
        }, {
          key: "restorePreviouslyActiveFocus",
          value: function() {
            this.prevActive && this.prevActive !== document.body && this.prevActive.focus()
          }
        }, {
          key: "blurActiveElement",
          value: function() {
            this.prevActive = this.getActiveElement(), this.prevActive !== document.body && this.prevActive.blur()
          }
        }, {
          key: "bindTopLevelEvents",
          value: function() {
            var e = this;
            this.boundTopLevelEvents || (this.boundTopLevelEvents = !0, document.body.addEventListener("click", (function() {})), window.addEventListener("pageshow", (function(t) {
              t.persisted && (e.withPageLoading({
                to: window.location.href,
                kind: "redirect"
              }), window.location.reload())
            })), this.bindClicks(), this.bindNav(), this.bindForms(), this.bind({
              keyup: "keyup",
              keydown: "keydown"
            }, (function(t, n, i, r, o, a, s) {
              var u = r.getAttribute(e.binding("key")),
                c = t.key && t.key.toLowerCase();
              u && u.toLowerCase() !== c || i.pushKey(r, o, n, a, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? p(Object(n), !0).forEach((function(t) {
                    m(e, t, n[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                  }))
                }
                return e
              }({
                key: t.key
              }, e.eventMeta(n, t, r)))
            })), this.bind({
              blur: "focusout",
              focus: "focusin"
            }, (function(t, n, i, r, o, a, s) {
              s || i.pushEvent(n, r, o, a, e.eventMeta(n, t, r))
            })), this.bind({
              blur: "blur",
              focus: "focus"
            }, (function(t, n, i, r, o, a, s) {
              s && "window" !== !s && i.pushEvent(n, r, o, a, e.eventMeta(n, t, r))
            })), window.addEventListener("dragover", (function(e) {
              return e.preventDefault()
            })), window.addEventListener("drop", (function(t) {
              t.preventDefault();
              var n = V(W(t.target, e.binding("drop-target")), (function(t) {
                  return t.getAttribute(e.binding("drop-target"))
                })),
                i = n && document.getElementById(n),
                r = Array.from(t.dataTransfer.files || []);
              i && !i.disabled && 0 !== r.length && i.files instanceof FileList && (Z.trackFiles(i, r), i.dispatchEvent(new Event("input", {
                bubbles: !0
              })))
            })))
          }
        }, {
          key: "eventMeta",
          value: function(e, t, n) {
            var i = this.metadataCallbacks[e];
            return i ? i(t, n) : {}
          }
        }, {
          key: "setPendingLink",
          value: function(e) {
            return this.linkRef++, this.pendingLink = e, this.linkRef
          }
        }, {
          key: "commitPendingLink",
          value: function(e) {
            return this.linkRef === e && (this.href = this.pendingLink, this.pendingLink = null, !0)
          }
        }, {
          key: "getHref",
          value: function() {
            return this.href
          }
        }, {
          key: "hasPendingLink",
          value: function() {
            return !!this.pendingLink
          }
        }, {
          key: "bind",
          value: function(e, t) {
            var n = this,
              i = function(i) {
                var r = e[i];
                n.on(r, (function(e) {
                  var r = n.binding(i),
                    o = n.binding("window-".concat(i)),
                    a = e.target.getAttribute && e.target.getAttribute(r);
                  a ? n.debounce(e.target, e, (function() {
                    n.withinOwners(e.target, (function(n, r) {
                      t(e, i, n, e.target, r, a, null)
                    }))
                  })) : ie.all(document, "[".concat(o, "]"), (function(r) {
                    var a = r.getAttribute(o);
                    n.debounce(r, e, (function() {
                      n.withinOwners(r, (function(n, o) {
                        t(e, i, n, r, o, a, "window")
                      }))
                    }))
                  }))
                }))
              };
            for (var r in e) i(r)
          }
        }, {
          key: "bindClicks",
          value: function() {
            this.bindClick("click", "click", !1), this.bindClick("mousedown", "capture-click", !0)
          }
        }, {
          key: "bindClick",
          value: function(e, t, n) {
            var i = this,
              r = this.binding(t);
            window.addEventListener(e, (function(e) {
              if (i.isConnected()) {
                var t = null,
                  o = (t = n ? e.target.matches("[".concat(r, "]")) ? e.target : e.target.querySelector("[".concat(r, "]")) : W(e.target, r)) && t.getAttribute(r);
                o && ("#" === t.getAttribute("href") && e.preventDefault(), i.debounce(t, e, (function() {
                  i.withinOwners(t, (function(n, r) {
                    n.pushEvent("click", t, r, o, i.eventMeta("click", e, t))
                  }))
                })))
              }
            }), n)
          }
        }, {
          key: "bindNav",
          value: function() {
            var e = this;
            if (ne.canPushState()) {
              history.scrollRestoration && (history.scrollRestoration = "manual");
              var t = null;
              window.addEventListener("scroll", (function(e) {
                clearTimeout(t), t = setTimeout((function() {
                  ne.updateCurrentState((function(e) {
                    return Object.assign(e, {
                      scroll: window.scrollY
                    })
                  }))
                }), 100)
              })), window.addEventListener("popstate", (function(t) {
                if (e.registerNewLocation(window.location)) {
                  var n = t.state || {},
                    i = n.type,
                    r = n.id,
                    o = n.root,
                    a = n.scroll,
                    s = window.location.href;
                  e.main.isConnected() && "patch" === i && r === e.main.id ? e.main.pushLinkPatch(s, null) : e.replaceMain(s, null, (function() {
                    o && e.replaceRootHistory(), "number" == typeof a && setTimeout((function() {
                      window.scrollTo(0, a)
                    }), 0)
                  }))
                }
              }), !1), window.addEventListener("click", (function(t) {
                var n = W(t.target, "data-phx-link"),
                  i = n && n.getAttribute("data-phx-link"),
                  r = t.metaKey || t.ctrlKey || 1 === t.button;
                if (i && e.isConnected() && e.main && !r) {
                  var o = n.href,
                    a = n.getAttribute("data-phx-link-state");
                  if (t.preventDefault(), e.pendingLink !== o)
                    if ("patch" === i) e.pushHistoryPatch(o, a, n);
                    else {
                      if ("redirect" !== i) throw new Error("expected ".concat("data-phx-link", ' to be "patch" or "redirect", got: ').concat(i));
                      e.historyRedirect(o, a)
                    }
                }
              }), !1)
            }
          }
        }, {
          key: "withPageLoading",
          value: function(e, t) {
            ie.dispatchEvent(window, "phx:page-loading-start", e);
            var n = function() {
              return ie.dispatchEvent(window, "phx:page-loading-stop", e)
            };
            return t ? t(n) : n
          }
        }, {
          key: "pushHistoryPatch",
          value: function(e, t, n) {
            var i = this;
            this.withPageLoading({
              to: e,
              kind: "patch"
            }, (function(r) {
              i.main.pushLinkPatch(e, n, (function() {
                i.historyPatch(e, t), r()
              }))
            }))
          }
        }, {
          key: "historyPatch",
          value: function(e, t) {
            ne.pushState(t, {
              type: "patch",
              id: this.main.id
            }, e), this.registerNewLocation(window.location)
          }
        }, {
          key: "historyRedirect",
          value: function(e, t, n) {
            var i = this,
              r = window.scrollY;
            this.withPageLoading({
              to: e,
              kind: "redirect"
            }, (function(o) {
              i.replaceMain(e, n, (function() {
                ne.pushState(t, {
                  type: "redirect",
                  id: i.main.id,
                  scroll: r
                }, e), i.registerNewLocation(window.location), o()
              }))
            }))
          }
        }, {
          key: "replaceRootHistory",
          value: function() {
            ne.pushState("replace", {
              root: !0,
              type: "patch",
              id: this.main.id
            })
          }
        }, {
          key: "registerNewLocation",
          value: function(e) {
            var t = this.currentLocation;
            return t.pathname + t.search !== e.pathname + e.search && (this.currentLocation = J(e), !0)
          }
        }, {
          key: "bindForms",
          value: function() {
            var e = this,
              t = 0;
            this.on("submit", (function(t) {
              var n = t.target.getAttribute(e.binding("submit"));
              n && (t.preventDefault(), t.target.disabled = !0, e.withinOwners(t.target, (function(e, i) {
                return e.submitForm(t.target, i, n)
              })))
            }), !1);
            for (var n = function() {
                var n = r[i];
                e.on(n, (function(i) {
                  var r = i.target,
                    o = r.form && r.form.getAttribute(e.binding("change"));
                  if (o && ("number" !== r.type || !r.validity || !r.validity.badInput)) {
                    var a = t;
                    t++;
                    var s = ie.private(r, "prev-iteration") || {},
                      u = s.at,
                      c = s.type;
                    u === a - 1 && n !== c || (ie.putPrivate(r, "prev-iteration", {
                      at: a,
                      type: n
                    }), e.debounce(r, i, (function() {
                      e.withinOwners(r.form, (function(t, n) {
                        ie.putPrivate(r, "phx-has-focused", !0), ie.isTextualInput(r) || e.setActiveElement(r), t.pushInput(r, n, o, i.target)
                      }))
                    })))
                  }
                }), !1)
              }, i = 0, r = ["change", "input"]; i < r.length; i++) n()
          }
        }, {
          key: "debounce",
          value: function(e, t, n) {
            var i = this.binding("debounce"),
              r = this.binding("throttle"),
              o = this.defaults.debounce.toString(),
              a = this.defaults.throttle.toString();
            ie.debounce(e, t, i, o, r, a, n)
          }
        }, {
          key: "silenceEvents",
          value: function(e) {
            this.silenced = !0, e(), this.silenced = !1
          }
        }, {
          key: "on",
          value: function(e, t) {
            var n = this;
            window.addEventListener(e, (function(e) {
              n.silenced || t(e)
            }))
          }
        }]), e
      }(),
      ne = {
        canPushState: function() {
          return void 0 !== history.pushState
        },
        dropLocal: function(e, t) {
          return window.localStorage.removeItem(this.localKey(e, t))
        },
        updateLocal: function(e, t, n, i) {
          var r = this.getLocal(e, t),
            o = this.localKey(e, t),
            a = null === r ? n : i(r);
          return window.localStorage.setItem(o, JSON.stringify(a)), a
        },
        getLocal: function(e, t) {
          return JSON.parse(window.localStorage.getItem(this.localKey(e, t)))
        },
        fetchPage: function(e, t) {
          var n = new XMLHttpRequest;
          n.open("GET", e, !0), n.timeout = 3e4, n.setRequestHeader("content-type", "text/html"), n.setRequestHeader("cache-control", "max-age=0, no-cache, no-store, must-revalidate, post-check=0, pre-check=0"), n.setRequestHeader("x-requested-with", "live-link"), n.onerror = function() {
            return t(400)
          }, n.ontimeout = function() {
            return t(504)
          }, n.onreadystatechange = function() {
            if (4 === n.readyState) {
              var i = new URL(e),
                r = i.pathname + i.search,
                o = V(n.getResponseHeader("x-response-url") || n.responseURL, (function(e) {
                  return new URL(e)
                })),
                a = o ? o.pathname + o.search : null;
              return "live-link" !== n.getResponseHeader("x-requested-with") ? t(400) : null === o || a != r ? t(302) : 200 !== n.status ? t(n.status) : void t(200, n.responseText)
            }
          }, n.send()
        },
        updateCurrentState: function(e) {
          this.canPushState() && history.replaceState(e(history.state || {}), "", window.location.href)
        },
        pushState: function(e, t, n) {
          if (this.canPushState()) {
            if (n !== window.location.href) {
              if ("redirect" == t.type && t.scroll) {
                var i = history.state || {};
                i.scroll = t.scroll, history.replaceState(i, "", window.location.href)
              }
              delete t.scroll, history[e + "State"](t, "", n || null);
              var r = this.getHashTargetEl(window.location.hash);
              r ? r.scrollIntoView() : "redirect" === t.type && window.scroll(0, 0)
            }
          } else this.redirect(n)
        },
        setCookie: function(e, t) {
          document.cookie = "".concat(e, "=").concat(t)
        },
        getCookie: function(e) {
          return document.cookie.replace(new RegExp("(?:(?:^|.*;s*)".concat(e, "s*=s*([^;]*).*$)|^.*$")), "$1")
        },
        redirect: function(e, t) {
          t && ne.setCookie("__phoenix_flash__", t + "; max-age=60000; path=/"), window.location = e
        },
        localKey: function(e, t) {
          return "".concat(e, "-").concat(t)
        },
        getHashTargetEl: function(e) {
          var t = e.toString().substring(1);
          if ("" !== t) return document.getElementById(t) || document.querySelector('a[name="'.concat(t, '"]'))
        }
      },
      ie = {
        byId: function(e) {
          return document.getElementById(e) || B("no id found for ".concat(e))
        },
        removeClass: function(e, t) {
          e.classList.remove(t), 0 === e.classList.length && e.removeAttribute("class")
        },
        all: function(e, t, n) {
          var i = Array.from(e.querySelectorAll(t));
          return n ? i.forEach(n) : i
        },
        childNodeLength: function(e) {
          var t = document.createElement("template");
          return t.innerHTML = e, t.content.childElementCount
        },
        isUploadInput: function(e) {
          return "file" === e.type && null !== e.getAttribute(j)
        },
        findUploadInputs: function(e) {
          return this.all(e, 'input[type="file"]['.concat(j, "]"))
        },
        findComponentNodeList: function(e, t) {
          return this.filterWithinSameLiveView(this.all(e, "[".concat(T, '="').concat(t, '"]')), e)
        },
        isPhxDestroyed: function(e) {
          return !(!e.id || !ie.private(e, "destroyed"))
        },
        markPhxChildDestroyed: function(e) {
          e.setAttribute("data-phx-session", ""), this.putPrivate(e, "destroyed", !0)
        },
        findPhxChildrenInFragment: function(e, t) {
          var n = document.createElement("template");
          return n.innerHTML = e, this.findPhxChildren(n.content, t)
        },
        isIgnored: function(e, t) {
          return "ignore" === (e.getAttribute(t) || e.getAttribute("data-phx-update"))
        },
        isPhxUpdate: function(e, t, n) {
          return e.getAttribute && n.indexOf(e.getAttribute(t)) >= 0
        },
        findPhxChildren: function(e, t) {
          return this.all(e, "".concat(O, "[").concat("data-phx-parent-id", '="').concat(t, '"]'))
        },
        findParentCIDs: function(e, t) {
          var n = this,
            i = new Set(t);
          return t.reduce((function(t, i) {
            var r = "[".concat(T, '="').concat(i, '"] [').concat(T, "]");
            return n.filterWithinSameLiveView(n.all(e, r), e).map((function(e) {
              return parseInt(e.getAttribute(T))
            })).forEach((function(e) {
              return t.delete(e)
            })), t
          }), i)
        },
        filterWithinSameLiveView: function(e, t) {
          var n = this;
          return t.querySelector(O) ? e.filter((function(e) {
            return n.withinSameLiveView(e, t)
          })) : e
        },
        withinSameLiveView: function(e, t) {
          for (; e = e.parentNode;) {
            if (e.isSameNode(t)) return !0;
            if (e.getAttribute(I)) return !1
          }
        },
        private: function(e, t) {
          return e.phxPrivate && e.phxPrivate[t]
        },
        deletePrivate: function(e, t) {
          e.phxPrivate && delete e.phxPrivate[t]
        },
        putPrivate: function(e, t, n) {
          e.phxPrivate || (e.phxPrivate = {}), e.phxPrivate[t] = n
        },
        copyPrivates: function(e, t) {
          t.phxPrivate && (e.phxPrivate = J(t.phxPrivate))
        },
        putTitle: function(e) {
          var t = document.querySelector("title").dataset,
            n = t.prefix,
            i = t.suffix;
          document.title = "".concat(n || "").concat(e).concat(i || "")
        },
        debounce: function(e, t, n, i, r, o, a) {
          var s = this,
            u = e.getAttribute(n),
            c = e.getAttribute(r);
          "" === u && (u = i), "" === c && (c = o);
          var l = u || c;
          switch (l) {
            case null:
              return a();
            case "blur":
              return void(this.once(e, "debounce-blur") && e.addEventListener("blur", (function() {
                return a()
              })));
            default:
              var h = parseInt(l),
                d = this.incCycle(e, "debounce-trigger", (function() {
                  return c ? s.deletePrivate(e, "throttled") : a()
                }));
              if (isNaN(h)) return B("invalid throttle/debounce value: ".concat(l));
              if (c) {
                var f = !1;
                if ("keydown" === t.type) {
                  var v = this.private(e, "debounce-prev-key");
                  this.putPrivate(e, "debounce-prev-key", t.key), f = v !== t.key
                }
                if (!f && this.private(e, "throttled")) return !1;
                a(), this.putPrivate(e, "throttled", !0), setTimeout((function() {
                  return s.triggerCycle(e, "debounce-trigger")
                }), h)
              } else setTimeout((function() {
                return s.triggerCycle(e, "debounce-trigger", d)
              }), h);
              e.form && this.once(e.form, "bind-debounce") && e.form.addEventListener("submit", (function(t) {
                Array.from(new FormData(e.form).entries(), (function(t) {
                  var n = b(t, 2),
                    i = n[0],
                    r = (n[1], e.form.querySelector('[name="'.concat(i, '"]')));
                  s.incCycle(r, "debounce-trigger"), s.deletePrivate(r, "throttled")
                }))
              })), this.once(e, "bind-debounce") && e.addEventListener("blur", (function(t) {
                return s.triggerCycle(e, "debounce-trigger")
              }))
          }
        },
        triggerCycle: function(e, t, n) {
          var i = b(this.private(e, t), 2),
            r = i[0],
            o = i[1];
          n || (n = r), n === r && (this.incCycle(e, t), o())
        },
        once: function(e, t) {
          return !0 !== this.private(e, t) && (this.putPrivate(e, t, !0), !0)
        },
        incCycle: function(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
            i = b(this.private(e, t) || [0, n], 2),
            r = i[0];
          return i[1], r++, this.putPrivate(e, t, [r, n]), r
        },
        discardError: function(e, t, n) {
          var i = t.getAttribute && t.getAttribute(n),
            r = i && e.querySelector('[id="'.concat(i, '"], [name="').concat(i, '"]'));
          r && (this.private(r, "phx-has-focused") || this.private(r.form, "phx-has-submitted") || t.classList.add("phx-no-feedback"))
        },
        showError: function(e, t) {
          var n = this;
          (e.id || e.name) && this.all(e.form, "[".concat(t, '="').concat(e.id, '"], [').concat(t, '="').concat(e.name, '"]'), (function(e) {
            n.removeClass(e, "phx-no-feedback")
          }))
        },
        isPhxChild: function(e) {
          return e.getAttribute && e.getAttribute("data-phx-parent-id")
        },
        dispatchEvent: function(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = new CustomEvent(t, {
              bubbles: !0,
              cancelable: !0,
              detail: n
            });
          e.dispatchEvent(i)
        },
        cloneNode: function(e, t) {
          if (void 0 === t) return e.cloneNode(!0);
          var n = e.cloneNode(!1);
          return n.innerHTML = t, n
        },
        mergeAttrs: function(e, t) {
          for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = n.exclude || [], r = n.isIgnored, o = t.attributes, a = o.length - 1; a >= 0; a--) {
            var s = o[a].name;
            i.indexOf(s) < 0 && e.setAttribute(s, t.getAttribute(s))
          }
          for (var u = e.attributes, c = u.length - 1; c >= 0; c--) {
            var l = u[c].name;
            r ? l.startsWith("data-") && !t.hasAttribute(l) && e.removeAttribute(l) : t.hasAttribute(l) || e.removeAttribute(l)
          }
        },
        mergeFocusedInput: function(e, t) {
          e instanceof HTMLSelectElement || ie.mergeAttrs(e, t, {
            except: ["value"]
          }), t.readOnly ? e.setAttribute("readonly", !0) : e.removeAttribute("readonly")
        },
        hasSelectionRange: function(e) {
          return e.setSelectionRange && ("text" === e.type || "textarea" === e.type)
        },
        restoreFocus: function(e, t, n) {
          if (ie.isTextualInput(e)) {
            var i = e.matches(":focus");
            e.readOnly && e.blur(), i || e.focus(), this.hasSelectionRange(e) && e.setSelectionRange(t, n)
          }
        },
        isFormInput: function(e) {
          return /^(?:input|select|textarea)$/i.test(e.tagName) && "button" !== e.type
        },
        syncAttrsToProps: function(e) {
          e instanceof HTMLInputElement && _.indexOf(e.type.toLocaleLowerCase()) >= 0 && (e.checked = null !== e.getAttribute("checked"))
        },
        isTextualInput: function(e) {
          return N.indexOf(e.type) >= 0
        },
        isNowTriggerFormExternal: function(e, t) {
          return e.getAttribute && null !== e.getAttribute(t)
        },
        syncPendingRef: function(e, t, n) {
          var i = e.getAttribute(D);
          return null === i || (ie.isFormInput(e) || null !== e.getAttribute(n) ? (ie.isUploadInput(e) && ie.mergeAttrs(e, t, {
            isIgnored: !0
          }), ie.putPrivate(e, D, t), !1) : (R.forEach((function(n) {
            e.classList.contains(n) && t.classList.add(n)
          })), t.setAttribute(D, i), !0))
        },
        cleanChildNodes: function(e, t) {
          if (ie.isPhxUpdate(e, t, ["append", "prepend"])) {
            var n = [];
            e.childNodes.forEach((function(e) {
              e.id || (e.nodeType === Node.TEXT_NODE && "" === e.nodeValue.trim() || B("only HTML element tags with an id are allowed inside containers with phx-update.\n\n" + 'removing illegal node: "'.concat((e.outerHTML || e.nodeValue).trim(), '"\n\n')), n.push(e))
            })), n.forEach((function(e) {
              return e.remove()
            }))
          }
        }
      },
      re = function() {
        function e(t, n, i) {
          C(this, e);
          var r = new Set,
            o = new Set(g(n.children).map((function(e) {
              return e.id
            }))),
            a = [];
          Array.from(t.children).forEach((function(e) {
            if (e.id && (r.add(e.id), o.has(e.id))) {
              var t = e.previousElementSibling && e.previousElementSibling.id;
              a.push({
                elementId: e.id,
                previousElementId: t
              })
            }
          })), this.containerId = n.id, this.updateType = i, this.elementsToModify = a, this.elementIdsToAdd = g(o).filter((function(e) {
            return !r.has(e)
          }))
        }
        return x(e, [{
          key: "perform",
          value: function() {
            var e = ie.byId(this.containerId);
            this.elementsToModify.forEach((function(t) {
              t.previousElementId ? V(document.getElementById(t.previousElementId), (function(e) {
                V(document.getElementById(t.elementId), (function(t) {
                  t.previousElementSibling && t.previousElementSibling.id == e.id || e.insertAdjacentElement("afterend", t)
                }))
              })) : V(document.getElementById(t.elementId), (function(t) {
                null == t.previousElementSibling || e.insertAdjacentElement("afterbegin", t)
              }))
            })), "prepend" == this.updateType && this.elementIdsToAdd.reverse().forEach((function(t) {
              V(document.getElementById(t), (function(t) {
                return e.insertAdjacentElement("afterbegin", t)
              }))
            }))
          }
        }]), e
      }(),
      oe = function() {
        function e(t, n, i, r, o) {
          C(this, e), this.view = t, this.liveSocket = t.liveSocket, this.container = n, this.id = i, this.rootID = t.root.id, this.html = r, this.targetCID = o, this.cidPatch = "number" == typeof this.targetCID, this.callbacks = {
            beforeadded: [],
            beforeupdated: [],
            beforephxChildAdded: [],
            afteradded: [],
            afterupdated: [],
            afterdiscarded: [],
            afterphxChildAdded: []
          }
        }
        return x(e, null, [{
          key: "patchEl",
          value: function(e, t, n) {
            f(e, t, {
              childrenOnly: !1,
              onBeforeElUpdated: function(e, t) {
                if (n && n.isSameNode(e) && ie.isFormInput(e)) return ie.mergeFocusedInput(e, t), !1
              }
            })
          }
        }]), x(e, [{
          key: "before",
          value: function(e, t) {
            this.callbacks["before".concat(e)].push(t)
          }
        }, {
          key: "after",
          value: function(e, t) {
            this.callbacks["after".concat(e)].push(t)
          }
        }, {
          key: "trackBefore",
          value: function(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            this.callbacks["before".concat(e)].forEach((function(e) {
              return e.apply(void 0, n)
            }))
          }
        }, {
          key: "trackAfter",
          value: function(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            this.callbacks["after".concat(e)].forEach((function(e) {
              return e.apply(void 0, n)
            }))
          }
        }, {
          key: "markPrunableContentForRemoval",
          value: function() {
            ie.all(this.container, "[phx-update=append] > *, [phx-update=prepend] > *", (function(e) {
              e.setAttribute("data-phx-remove", "")
            }))
          }
        }, {
          key: "perform",
          value: function() {
            var e = this,
              t = this.view,
              n = this.liveSocket,
              i = this.container,
              r = this.html,
              o = this.isCIDPatch() ? this.targetCIDContainer(r) : i;
            if (!this.isCIDPatch() || o) {
              var a = n.getActiveElement(),
                s = a && ie.hasSelectionRange(a) ? a : {},
                u = s.selectionStart,
                c = s.selectionEnd,
                l = n.binding("update"),
                h = n.binding("feedback-for"),
                d = n.binding("disable-with"),
                v = n.binding("trigger-action"),
                p = [],
                m = [],
                g = [],
                y = null,
                b = n.time("premorph container prep", (function() {
                  return e.buildDiffHTML(i, r, l, o)
                }));
              return this.trackBefore("added", i), this.trackBefore("updated", i, i), n.time("morphdom", (function() {
                f(o, b, {
                  childrenOnly: null === o.getAttribute(T),
                  getNodeKey: function(e) {
                    return ie.isPhxDestroyed(e) ? null : e.id
                  },
                  onBeforeNodeAdded: function(t) {
                    return ie.discardError(o, t, h), e.trackBefore("added", t), t
                  },
                  onNodeAdded: function(n) {
                    ie.isNowTriggerFormExternal(n, v) && (y = n), ie.isPhxChild(n) && t.ownsElement(n) && e.trackAfter("phxChildAdded", n), p.push(n)
                  },
                  onNodeDiscarded: function(t) {
                    ie.isPhxChild(t) && n.destroyViewByEl(t), e.trackAfter("discarded", t)
                  },
                  onBeforeNodeDiscarded: function(t) {
                    return !((!t.getAttribute || null === t.getAttribute("data-phx-remove")) && (null !== t.parentNode && ie.isPhxUpdate(t.parentNode, l, ["append", "prepend"]) && t.id || e.skipCIDSibling(t)))
                  },
                  onElUpdated: function(e) {
                    ie.isNowTriggerFormExternal(e, v) && (y = e), m.push(e)
                  },
                  onBeforeElUpdated: function(t, n) {
                    if (ie.cleanChildNodes(n, l), e.skipCIDSibling(n)) return !1;
                    if (ie.isIgnored(t, l)) return e.trackBefore("updated", t, n), ie.mergeAttrs(t, n, {
                      isIgnored: !0
                    }), m.push(t), !1;
                    if ("number" === t.type && t.validity && t.validity.badInput) return !1;
                    if (!ie.syncPendingRef(t, n, d)) return ie.isUploadInput(t) && (e.trackBefore("updated", t, n), m.push(t)), !1;
                    if (ie.isPhxChild(n)) {
                      var i = t.getAttribute("data-phx-session");
                      return ie.mergeAttrs(t, n, {
                        exclude: ["data-phx-static"]
                      }), "" !== i && t.setAttribute("data-phx-session", i), t.setAttribute("data-phx-root-id", e.rootID), !1
                    }
                    return ie.copyPrivates(n, t), ie.discardError(o, n, h), a && t.isSameNode(a) && ie.isFormInput(t) && !e.forceFocusedSelectUpdate(t, n) ? (e.trackBefore("updated", t, n), ie.mergeFocusedInput(t, n), ie.syncAttrsToProps(t), m.push(t), !1) : (ie.isPhxUpdate(n, l, ["append", "prepend"]) && g.push(new re(t, n, n.getAttribute(l))), ie.syncAttrsToProps(n), e.trackBefore("updated", t, n), !0)
                  }
                })
              })), n.isDebugEnabled() && function() {
                for (var e = new Set, t = document.querySelectorAll("*[id]"), n = 0, i = t.length; n < i; n++) e.has(t[n].id) ? console.error("Multiple IDs detected: ".concat(t[n].id, ". Ensure unique element ids.")) : e.add(t[n].id)
              }(), g.length > 0 && n.time("post-morph append/prepend restoration", (function() {
                g.forEach((function(e) {
                  return e.perform()
                }))
              })), n.silenceEvents((function() {
                return ie.restoreFocus(a, u, c)
              })), ie.dispatchEvent(document, "phx:update"), p.forEach((function(t) {
                return e.trackAfter("added", t)
              })), m.forEach((function(t) {
                return e.trackAfter("updated", t)
              })), y && (n.disconnect(), y.submit()), !0
            }
          }
        }, {
          key: "forceFocusedSelectUpdate",
          value: function(e, t) {
            var n = ["select", "select-one", "select-multiple"].find((function(t) {
              return t === e.type
            }));
            return !0 === e.multiple || n && e.innerHTML != t.innerHTML
          }
        }, {
          key: "isCIDPatch",
          value: function() {
            return this.cidPatch
          }
        }, {
          key: "skipCIDSibling",
          value: function(e) {
            return e.nodeType === Node.ELEMENT_NODE && null !== e.getAttribute("data-phx-skip")
          }
        }, {
          key: "targetCIDContainer",
          value: function(e) {
            if (this.isCIDPatch()) {
              var t = v(ie.findComponentNodeList(this.container, this.targetCID)),
                n = t[0];
              return 0 === t.slice(1).length && 1 === ie.childNodeLength(e) ? n : n && n.parentNode
            }
          }
        }, {
          key: "buildDiffHTML",
          value: function(e, t, n, i) {
            var r = this,
              o = this.isCIDPatch(),
              a = o && i.getAttribute(T) === this.targetCID.toString();
            if (!o || a) return t;
            var s = null,
              u = document.createElement("template");
            s = ie.cloneNode(i);
            var c = v(ie.findComponentNodeList(s, this.targetCID)),
              l = c[0],
              h = c.slice(1);
            return u.innerHTML = t, h.forEach((function(e) {
              return e.remove()
            })), Array.from(s.childNodes).forEach((function(e) {
              e.id && e.nodeType === Node.ELEMENT_NODE && e.getAttribute(T) !== r.targetCID.toString() && (e.setAttribute("data-phx-skip", ""), e.innerHTML = "")
            })), Array.from(u.content.childNodes).forEach((function(e) {
              return s.insertBefore(e, l)
            })), l.remove(), s.outerHTML
          }
        }]), e
      }(),
      ae = function() {
        function e(t, n, i, r, o) {
          var a = this;
          C(this, e), this.liveSocket = n, this.flash = o, this.parent = i, this.root = i ? i.root : this, this.el = t, this.id = this.el.id, this.view = this.el.getAttribute(I), this.ref = 0, this.childJoins = 0, this.loaderTimer = null, this.pendingDiffs = [], this.pruningCIDs = [], this.href = r, this.joinCount = this.parent ? this.parent.joinCount - 1 : 0, this.joinPending = !0, this.destroyed = !1, this.joinCallback = function() {}, this.stopCallback = function() {}, this.pendingJoinOps = this.parent ? null : [], this.viewHooks = {}, this.uploaders = {}, this.formSubmits = [], this.children = this.parent ? null : {}, this.root.children[this.id] = {}, this.channel = this.liveSocket.channel("lv:".concat(this.id), (function() {
            return {
              url: a.href,
              params: a.connectParams(),
              session: a.getSession(),
              static: a.getStatic(),
              flash: a.flash
            }
          })), this.showLoader(this.liveSocket.loaderTimeout), this.bindChannel()
        }
        return x(e, [{
          key: "isMain",
          value: function() {
            return this.liveSocket.main === this
          }
        }, {
          key: "connectParams",
          value: function() {
            var e = this.liveSocket.params(this.view),
              t = ie.all(document, "[".concat(this.binding("track-static"), "]")).map((function(e) {
                return e.src || e.href
              })).filter((function(e) {
                return "string" == typeof e
              }));
            return t.length > 0 && (e._track_static = t), e._mounts = this.joinCount, e
          }
        }, {
          key: "name",
          value: function() {
            return this.view
          }
        }, {
          key: "isConnected",
          value: function() {
            return this.channel.canPush()
          }
        }, {
          key: "getSession",
          value: function() {
            return this.el.getAttribute("data-phx-session")
          }
        }, {
          key: "getStatic",
          value: function() {
            var e = this.el.getAttribute("data-phx-static");
            return "" === e ? null : e
          }
        }, {
          key: "destroy",
          value: function() {
            var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
            this.destroyAllChildren(), this.destroyed = !0, delete this.root.children[this.id], this.parent && delete this.root.children[this.parent.id][this.id], clearTimeout(this.loaderTimer);
            var n = function() {
              for (var n in t(), e.viewHooks) e.destroyHook(e.viewHooks[n])
            };
            ie.markPhxChildDestroyed(this.el), this.log("destroyed", (function() {
              return ["the child has been removed from the parent"]
            })), this.channel.leave().receive("ok", n).receive("error", n).receive("timeout", n)
          }
        }, {
          key: "setContainerClasses",
          value: function() {
            var e;
            this.el.classList.remove("phx-connected", "phx-disconnected", "phx-error"), (e = this.el.classList).add.apply(e, arguments)
          }
        }, {
          key: "isLoading",
          value: function() {
            return this.el.classList.contains("phx-disconnected")
          }
        }, {
          key: "showLoader",
          value: function(e) {
            var t = this;
            if (clearTimeout(this.loaderTimer), e) this.loaderTimer = setTimeout((function() {
              return t.showLoader()
            }), e);
            else {
              for (var n in this.viewHooks) this.viewHooks[n].__disconnected();
              this.setContainerClasses("phx-disconnected")
            }
          }
        }, {
          key: "hideLoader",
          value: function() {
            clearTimeout(this.loaderTimer), this.setContainerClasses("phx-connected")
          }
        }, {
          key: "triggerReconnected",
          value: function() {
            for (var e in this.viewHooks) this.viewHooks[e].__reconnected()
          }
        }, {
          key: "log",
          value: function(e, t) {
            this.liveSocket.log(this, e, t)
          }
        }, {
          key: "withinTargets",
          value: function(e, t) {
            var n = this;
            if (/^(0|[1-9]\d*)$/.test(e)) {
              var i = ie.findComponentNodeList(this.el, e);
              0 === i.length ? B("no component found matching phx-target of ".concat(e)) : t(this, i[0])
            } else {
              var r = Array.from(document.querySelectorAll(e));
              0 === r.length && B('nothing found matching the phx-target selector "'.concat(e, '"')), r.forEach((function(e) {
                return n.liveSocket.owner(e, (function(n) {
                  return t(n, e)
                }))
              }))
            }
          }
        }, {
          key: "applyDiff",
          value: function(e, t, n) {
            this.log(e, (function() {
              return ["", J(t)]
            }));
            var i = ee.extract(t),
              r = i.diff,
              o = i.reply,
              a = i.events,
              s = i.title;
            return s && ie.putTitle(s), n({
              diff: r,
              reply: o,
              events: a
            }), o
          }
        }, {
          key: "onJoin",
          value: function(e) {
            var t = this,
              n = e.rendered;
            this.childJoins = 0, this.joinPending = !0, this.flash = null, ne.dropLocal(this.name(), "consecutive-reloads"), this.applyDiff("mount", n, (function(n) {
              var i = n.diff,
                r = n.events;
              t.rendered = new ee(t.id, i);
              var o = t.renderContainer(null, "join");
              t.dropPendingRefs();
              var a = t.formsForRecovery(o);
              t.joinCount++, a.length > 0 ? a.forEach((function(e, n) {
                t.pushFormRecovery(e, (function(e) {
                  n === a.length - 1 && t.onJoinComplete(e, o, r)
                }))
              })) : t.onJoinComplete(e, o, r)
            }))
          }
        }, {
          key: "dropPendingRefs",
          value: function() {
            ie.all(this.el, "[".concat(D, "]"), (function(e) {
              return e.removeAttribute(D)
            }))
          }
        }, {
          key: "onJoinComplete",
          value: function(e, t, n) {
            var i = this,
              r = e.live_patch;
            if (this.joinCount > 1 || this.parent && !this.parent.isJoinPending()) return this.applyJoinPatch(r, t, n);
            0 === ie.findPhxChildrenInFragment(t, this.id).filter((function(e) {
              var t = e.id && i.el.querySelector("#".concat(e.id)),
                n = t && t.getAttribute("data-phx-static");
              return n && e.setAttribute("data-phx-static", n), i.joinChild(e)
            })).length ? this.parent ? (this.root.pendingJoinOps.push([this, function() {
              return i.applyJoinPatch(r, t, n)
            }]), this.parent.ackJoin(this)) : (this.onAllChildJoinsComplete(), this.applyJoinPatch(r, t, n)) : this.root.pendingJoinOps.push([this, function() {
              return i.applyJoinPatch(r, t, n)
            }])
          }
        }, {
          key: "attachTrueDocEl",
          value: function() {
            this.el = ie.byId(this.id), this.el.setAttribute("data-phx-root-id", this.root.id)
          }
        }, {
          key: "dispatchEvents",
          value: function(e) {
            e.forEach((function(e) {
              var t = b(e, 2),
                n = t[0],
                i = t[1];
              window.dispatchEvent(new CustomEvent("phx:hook:".concat(n), {
                detail: i
              }))
            }))
          }
        }, {
          key: "applyJoinPatch",
          value: function(e, t, n) {
            var i = this;
            this.attachTrueDocEl();
            var r = new oe(this, this.el, this.id, t, null);
            if (r.markPrunableContentForRemoval(), this.performPatch(r, !1), this.joinNewChildren(), ie.all(this.el, "[".concat(this.binding("hook"), "], [data-phx-").concat("hook", "]"), (function(e) {
                var t = i.addHook(e);
                t && t.__mounted()
              })), this.joinPending = !1, this.dispatchEvents(n), this.applyPendingUpdates(), e) {
              var o = e.kind,
                a = e.to;
              this.liveSocket.historyPatch(a, o)
            }
            this.hideLoader(), this.joinCount > 1 && this.triggerReconnected(), this.stopCallback()
          }
        }, {
          key: "triggerBeforeUpdateHook",
          value: function(e, t) {
            this.liveSocket.triggerDOM("onBeforeElUpdated", [e, t]);
            var n = this.getHook(e),
              i = n && ie.isIgnored(e, this.binding("update"));
            if (n && !e.isEqualNode(t) && (!i || ! function(e, t) {
                return JSON.stringify(e) === JSON.stringify(t)
              }(e.dataset, t.dataset))) return n.__beforeUpdate(), n
          }
        }, {
          key: "performPatch",
          value: function(e, t) {
            var n = this,
              i = [],
              r = !1,
              o = new Set;
            return e.after("added", (function(e) {
              n.liveSocket.triggerDOM("onNodeAdded", [e]);
              var t = n.addHook(e);
              t && t.__mounted()
            })), e.after("phxChildAdded", (function(e) {
              return r = !0
            })), e.before("updated", (function(e, t) {
              n.triggerBeforeUpdateHook(e, t) && o.add(e.id)
            })), e.after("updated", (function(e) {
              o.has(e.id) && n.getHook(e).__updated()
            })), e.after("discarded", (function(e) {
              var t = n.componentID(e);
              "number" == typeof t && -1 === i.indexOf(t) && i.push(t);
              var r = n.getHook(e);
              r && n.destroyHook(r)
            })), e.perform(), t && this.maybePushComponentsDestroyed(i), r
          }
        }, {
          key: "joinNewChildren",
          value: function() {
            var e = this;
            ie.findPhxChildren(this.el, this.id).forEach((function(t) {
              return e.joinChild(t)
            }))
          }
        }, {
          key: "getChildById",
          value: function(e) {
            return this.root.children[this.id][e]
          }
        }, {
          key: "getDescendentByEl",
          value: function(e) {
            return e.id === this.id ? this : this.children[e.getAttribute("data-phx-parent-id")][e.id]
          }
        }, {
          key: "destroyDescendent",
          value: function(e) {
            for (var t in this.root.children)
              for (var n in this.root.children[t])
                if (n === e) return this.root.children[t][n].destroy()
          }
        }, {
          key: "joinChild",
          value: function(t) {
            if (!this.getChildById(t.id)) {
              var n = new e(t, this.liveSocket, this);
              return this.root.children[this.id][n.id] = n, n.join(), this.childJoins++, !0
            }
          }
        }, {
          key: "isJoinPending",
          value: function() {
            return this.joinPending
          }
        }, {
          key: "ackJoin",
          value: function(e) {
            this.childJoins--, 0 === this.childJoins && (this.parent ? this.parent.ackJoin(this) : this.onAllChildJoinsComplete())
          }
        }, {
          key: "onAllChildJoinsComplete",
          value: function() {
            this.joinCallback(), this.pendingJoinOps.forEach((function(e) {
              var t = b(e, 2),
                n = t[0],
                i = t[1];
              n.isDestroyed() || i()
            })), this.pendingJoinOps = []
          }
        }, {
          key: "update",
          value: function(e, t) {
            var n = this;
            if (this.isJoinPending() || this.liveSocket.hasPendingLink()) return this.pendingDiffs.push({
              diff: e,
              events: t
            });
            this.rendered.mergeDiff(e);
            var i = !1;
            this.rendered.isComponentOnlyDiff(e) ? this.liveSocket.time("component patch complete", (function() {
              ie.findParentCIDs(n.el, n.rendered.componentCIDs(e)).forEach((function(t) {
                n.componentPatch(n.rendered.getComponent(e, t), t) && (i = !0)
              }))
            })) : Q(e) || this.liveSocket.time("full patch complete", (function() {
              var t = n.renderContainer(e, "update"),
                r = new oe(n, n.el, n.id, t, null);
              i = n.performPatch(r, !0)
            })), this.dispatchEvents(t), i && this.joinNewChildren()
          }
        }, {
          key: "renderContainer",
          value: function(e, t) {
            var n = this;
            return this.liveSocket.time("toString diff (".concat(t, ")"), (function() {
              var t = n.el.tagName,
                i = e ? n.rendered.componentCIDs(e).concat(n.pruningCIDs) : null,
                r = n.rendered.toString(i);
              return "<".concat(t, ">").concat(r, "</").concat(t, ">")
            }))
          }
        }, {
          key: "componentPatch",
          value: function(e, t) {
            if (Q(e)) return !1;
            var n = this.rendered.componentToString(t),
              i = new oe(this, this.el, this.id, n, t);
            return this.performPatch(i, !0)
          }
        }, {
          key: "getHook",
          value: function(e) {
            return this.viewHooks[ue.elementID(e)]
          }
        }, {
          key: "addHook",
          value: function(e) {
            if (!ue.elementID(e) && e.getAttribute) {
              var t = e.getAttribute("data-phx-".concat("hook")) || e.getAttribute(this.binding("hook"));
              if (!t || this.ownsElement(e)) {
                var n = this.liveSocket.getHookCallbacks(t);
                if (n) {
                  e.id || B('no DOM ID for hook "'.concat(t, '". Hooks require a unique ID on each element.'), e);
                  var i = new ue(this, e, n);
                  return this.viewHooks[ue.elementID(i.el)] = i, i
                }
                null !== t && B('unknown hook found for "'.concat(t, '"'), e)
              }
            }
          }
        }, {
          key: "destroyHook",
          value: function(e) {
            e.__destroyed(), e.__cleanup__(), delete this.viewHooks[ue.elementID(e.el)]
          }
        }, {
          key: "applyPendingUpdates",
          value: function() {
            var e = this;
            this.pendingDiffs.forEach((function(t) {
              var n = t.diff,
                i = t.events;
              return e.update(n, i)
            })), this.pendingDiffs = []
          }
        }, {
          key: "onChannel",
          value: function(e, t) {
            var n = this;
            this.liveSocket.onChannel(this.channel, e, (function(e) {
              n.isJoinPending() ? n.root.pendingJoinOps.push([n, function() {
                return t(e)
              }]) : t(e)
            }))
          }
        }, {
          key: "bindChannel",
          value: function() {
            var e = this;
            this.liveSocket.onChannel(this.channel, "diff", (function(t) {
              e.applyDiff("update", t, (function(t) {
                var n = t.diff,
                  i = t.events;
                return e.update(n, i)
              }))
            })), this.onChannel("redirect", (function(t) {
              var n = t.to,
                i = t.flash;
              return e.onRedirect({
                to: n,
                flash: i
              })
            })), this.onChannel("live_patch", (function(t) {
              return e.onLivePatch(t)
            })), this.onChannel("live_redirect", (function(t) {
              return e.onLiveRedirect(t)
            })), this.channel.onError((function(t) {
              return e.onError(t)
            })), this.channel.onClose((function(t) {
              return e.onClose(t)
            }))
          }
        }, {
          key: "destroyAllChildren",
          value: function() {
            for (var e in this.root.children[this.id]) this.getChildById(e).destroy()
          }
        }, {
          key: "onLiveRedirect",
          value: function(e) {
            var t = e.to,
              n = e.kind,
              i = e.flash,
              r = this.expandURL(t);
            this.liveSocket.historyRedirect(r, n, i)
          }
        }, {
          key: "onLivePatch",
          value: function(e) {
            var t = e.to,
              n = e.kind;
            this.href = this.expandURL(t), this.liveSocket.historyPatch(t, n)
          }
        }, {
          key: "expandURL",
          value: function(e) {
            return e.startsWith("/") ? "".concat(window.location.protocol, "//").concat(window.location.host).concat(e) : e
          }
        }, {
          key: "onRedirect",
          value: function(e) {
            var t = e.to,
              n = e.flash;
            this.liveSocket.redirect(t, n)
          }
        }, {
          key: "isDestroyed",
          value: function() {
            return this.destroyed
          }
        }, {
          key: "join",
          value: function(e) {
            var t = this;
            this.parent || (this.stopCallback = this.liveSocket.withPageLoading({
              to: this.href,
              kind: "initial"
            })), this.joinCallback = function() {
              return e && e(t, t.joinCount)
            }, this.liveSocket.wrapPush(this, {
              timeout: !1
            }, (function() {
              return t.channel.join().receive("ok", (function(e) {
                return t.onJoin(e)
              })).receive("error", (function(e) {
                return t.onJoinError(e)
              })).receive("timeout", (function() {
                return t.onJoinError({
                  reason: "timeout"
                })
              }))
            }))
          }
        }, {
          key: "onJoinError",
          value: function(e) {
            return (e.redirect || e.live_redirect) && (this.joinPending = !1, this.channel.leave()), e.redirect ? this.onRedirect(e.redirect) : e.live_redirect ? this.onLiveRedirect(e.live_redirect) : (this.log("error", (function() {
              return ["unable to join", e]
            })), this.liveSocket.reloadWithJitter(this))
          }
        }, {
          key: "onClose",
          value: function(e) {
            if (!this.isDestroyed()) {
              if (this.isJoinPending() || this.liveSocket.hasPendingLink() && "leave" !== e) return this.liveSocket.reloadWithJitter(this);
              this.destroyAllChildren(), this.liveSocket.dropActiveElement(this), document.activeElement && document.activeElement.blur(), this.liveSocket.isUnloaded() && this.showLoader(200)
            }
          }
        }, {
          key: "onError",
          value: function(e) {
            this.onClose(e), this.log("error", (function() {
              return ["view crashed", e]
            })), this.liveSocket.isUnloaded() || this.displayError()
          }
        }, {
          key: "displayError",
          value: function() {
            this.isMain() && ie.dispatchEvent(window, "phx:page-loading-start", {
              to: this.href,
              kind: "error"
            }), this.showLoader(), this.setContainerClasses("phx-disconnected", "phx-error")
          }
        }, {
          key: "pushWithReply",
          value: function(e, t, n) {
            var i = this,
              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {},
              o = b(e ? e() : [null, []], 2),
              a = o[0],
              s = b(o[1], 1)[0],
              u = function() {};
            return s && null !== s.getAttribute(this.binding("page-loading")) && (u = this.liveSocket.withPageLoading({
              kind: "element",
              target: s
            })), "number" != typeof n.cid && delete n.cid, this.liveSocket.wrapPush(this, {
              timeout: !0
            }, (function() {
              return i.channel.push(t, n, 3e4).receive("ok", (function(e) {
                var t = null;
                null !== a && i.undoRefs(a), e.diff && (t = i.applyDiff("update", e.diff, (function(e) {
                  var t = e.diff,
                    n = e.events;
                  i.update(t, n)
                }))), e.redirect && i.onRedirect(e.redirect), e.live_patch && i.onLivePatch(e.live_patch), e.live_redirect && i.onLiveRedirect(e.live_redirect), u(), r(e, t)
              }))
            }))
          }
        }, {
          key: "undoRefs",
          value: function(e) {
            var t = this;
            ie.all(this.el, "[".concat(D, '="').concat(e, '"]'), (function(e) {
              e.removeAttribute(D), null !== e.getAttribute("data-phx-readonly") && (e.readOnly = !1, e.removeAttribute("data-phx-readonly")), null !== e.getAttribute("data-phx-disabled") && (e.disabled = !1, e.removeAttribute("data-phx-disabled")), R.forEach((function(t) {
                return ie.removeClass(e, t)
              }));
              var n = e.getAttribute("data-phx-disable-with-restore");
              null !== n && (e.innerText = n, e.removeAttribute("data-phx-disable-with-restore"));
              var i = ie.private(e, D);
              if (i) {
                var r = t.triggerBeforeUpdateHook(e, i);
                oe.patchEl(e, i, t.liveSocket.getActiveElement()), r && r.__updated(), ie.deletePrivate(e, D)
              }
            }))
          }
        }, {
          key: "putRef",
          value: function(e, t) {
            var n = this.ref++,
              i = this.binding("disable-with");
            return e.forEach((function(e) {
              e.classList.add("phx-".concat(t, "-loading")), e.setAttribute(D, n);
              var r = e.getAttribute(i);
              null !== r && (e.getAttribute("data-phx-disable-with-restore") || e.setAttribute("data-phx-disable-with-restore", e.innerText), e.innerText = r)
            })), [n, e]
          }
        }, {
          key: "componentID",
          value: function(e) {
            var t = e.getAttribute && e.getAttribute(T);
            return t ? parseInt(t) : null
          }
        }, {
          key: "targetComponentID",
          value: function(e, t) {
            return e.getAttribute(this.binding("target")) ? this.closestComponentID(t) : null
          }
        }, {
          key: "closestComponentID",
          value: function(e) {
            var t = this;
            return e ? V(e.closest("[".concat(T, "]")), (function(e) {
              return t.ownsElement(e) && t.componentID(e)
            })) : null
          }
        }, {
          key: "pushHookEvent",
          value: function(e, t, n, i) {
            if (!this.isConnected()) return this.log("hook", (function() {
              return ["unable to push hook event. LiveView not connected", t, n]
            })), !1;
            var r = b(this.putRef([], "hook"), 2),
              o = r[0],
              a = r[1];
            return this.pushWithReply((function() {
              return [o, a]
            }), "event", {
              type: "hook",
              event: t,
              value: n,
              cid: this.closestComponentID(e)
            }, (function(e, t) {
              return i(t, o)
            })), o
          }
        }, {
          key: "extractMeta",
          value: function(e, t) {
            for (var n = this.binding("value-"), i = 0; i < e.attributes.length; i++) {
              var r = e.attributes[i].name;
              r.startsWith(n) && (t[r.replace(n, "")] = e.getAttribute(r))
            }
            return void 0 !== e.value && (t.value = e.value, "INPUT" === e.tagName && _.indexOf(e.type) >= 0 && !e.checked && delete t.value), t
          }
        }, {
          key: "pushEvent",
          value: function(e, t, n, i, r) {
            var o = this;
            this.pushWithReply((function() {
              return o.putRef([t], e)
            }), "event", {
              type: e,
              event: i,
              value: this.extractMeta(t, r),
              cid: this.targetComponentID(t, n)
            })
          }
        }, {
          key: "pushKey",
          value: function(e, t, n, i, r) {
            var o = this;
            this.pushWithReply((function() {
              return o.putRef([e], n)
            }), "event", {
              type: n,
              event: i,
              value: this.extractMeta(e, r),
              cid: this.targetComponentID(e, t)
            })
          }
        }, {
          key: "pushFileProgress",
          value: function(e, t, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {};
            this.liveSocket.withinOwners(e.form, (function(r, o) {
              r.pushWithReply(null, "progress", {
                event: e.getAttribute(r.binding("progress")),
                ref: e.getAttribute(j),
                entry_ref: t,
                progress: n,
                cid: r.targetComponentID(e.form, o)
              }, i)
            }))
          }
        }, {
          key: "pushInput",
          value: function(e, t, n, i, r) {
            var o = this,
              a = this.targetComponentID(e.form, t),
              s = function() {
                return o.putRef([e, e.form], "change")
              },
              u = $(e.form, {
                _target: i.name
              });
            e.files && e.files.length > 0 && Z.trackFiles(e, Array.from(e.files));
            var c = {
              type: "form",
              event: n,
              value: u,
              uploads: Z.serializeUploads(e),
              cid: a
            };
            this.pushWithReply(s, "event", c, (function(n) {
              if (ie.showError(e, o.liveSocket.binding("feedback-for")), ie.isUploadInput(e) && null !== e.getAttribute("data-phx-auto-upload")) {
                if (Z.filesAwaitingPreflight(e).length > 0) {
                  var i = b(s(), 2),
                    u = i[0];
                  i[1], o.uploadFiles(e.form, t, u, a, (function(t) {
                    r && r(n), o.triggerAwaitingSubmit(e.form)
                  }))
                }
              } else r && r(n)
            }))
          }
        }, {
          key: "triggerAwaitingSubmit",
          value: function(e) {
            var t = this.getScheduledSubmit(e);
            if (t) {
              var n = b(t, 3),
                i = (n[0], n[1], n[2]);
              this.cancelSubmit(e), i()
            }
          }
        }, {
          key: "getScheduledSubmit",
          value: function(e) {
            return this.formSubmits.find((function(t) {
              var n = b(t, 2),
                i = n[0];
              return n[1], i.isSameNode(e)
            }))
          }
        }, {
          key: "scheduleSubmit",
          value: function(e, t, n) {
            if (this.getScheduledSubmit(e)) return !0;
            this.formSubmits.push([e, t, n])
          }
        }, {
          key: "cancelSubmit",
          value: function(e) {
            var t = this;
            this.formSubmits = this.formSubmits.filter((function(n) {
              var i = b(n, 3),
                r = i[0],
                o = i[1];
              return i[2], !r.isSameNode(e) || (t.undoRefs(o), !1)
            }))
          }
        }, {
          key: "pushFormSubmit",
          value: function(e, t, n, i) {
            var r = this,
              o = function(e) {
                return !(W(e, "".concat(r.binding("update"), "=ignore"), e.form) || W(e, "data-phx-update=ignore", e.form))
              },
              a = function(e) {
                return e.hasAttribute(r.binding("disable-with"))
              },
              s = function(e) {
                return "BUTTON" == e.tagName
              },
              u = function(e) {
                return ["INPUT", "TEXTAREA", "SELECT"].includes(e.tagName)
              },
              c = function() {
                var t = Array.from(e.elements),
                  n = t.filter(a),
                  i = t.filter(s).filter(o),
                  c = t.filter(u).filter(o);
                return i.forEach((function(e) {
                  e.setAttribute("data-phx-disabled", e.disabled), e.disabled = !0
                })), c.forEach((function(e) {
                  e.setAttribute("data-phx-readonly", e.readOnly), e.readOnly = !0, e.files && (e.setAttribute("data-phx-disabled", e.disabled), e.disabled = !0)
                })), e.setAttribute(r.binding("page-loading"), ""), r.putRef([e].concat(n).concat(i).concat(c), "submit")
              },
              l = this.targetComponentID(e, t);
            if (Z.hasUploadsInProgress(e)) {
              var h = b(c(), 2),
                d = h[0];
              return h[1], this.scheduleSubmit(e, d, (function() {
                return r.pushFormSubmit(e, t, n, i)
              }))
            }
            if (Z.inputsAwaitingPreflight(e).length > 0) {
              var f = b(c(), 2),
                v = f[0],
                p = f[1],
                m = function() {
                  return [v, p]
                };
              this.uploadFiles(e, t, v, l, (function(t) {
                var o = $(e, {});
                r.pushWithReply(m, "event", {
                  type: "form",
                  event: n,
                  value: o,
                  cid: l
                }, i)
              }))
            } else {
              var g = $(e);
              this.pushWithReply(c, "event", {
                type: "form",
                event: n,
                value: g,
                cid: l
              }, i)
            }
          }
        }, {
          key: "uploadFiles",
          value: function(e, t, n, i, r) {
            var o = this,
              a = this.joinCount;
            Z.activeFileInputs(e).forEach((function(e) {
              var i = new Z(e, o, r);
              o.uploaders[e] = i;
              var s = i.entries().map((function(e) {
                  return e.toPreflightPayload()
                })),
                u = {
                  ref: e.getAttribute(j),
                  entries: s,
                  cid: o.targetComponentID(e.form, t)
                };
              o.log("upload", (function() {
                return ["sending preflight request", u]
              })), o.pushWithReply(null, "allow_upload", u, (function(e) {
                if (o.log("upload", (function() {
                    return ["got preflight response", e]
                  })), e.error) {
                  o.undoRefs(n);
                  var t = b(e.error, 2),
                    r = t[0],
                    s = t[1];
                  o.log("upload", (function() {
                    return ["error for entry ".concat(r), s]
                  }))
                } else i.initAdapterUpload(e, (function(e) {
                  o.channel.onError((function() {
                    o.joinCount === a && e()
                  }))
                }), o.liveSocket)
              }))
            }))
          }
        }, {
          key: "pushFormRecovery",
          value: function(e, t) {
            var n = this;
            this.liveSocket.withinOwners(e, (function(i, r) {
              var o = e.elements[0],
                a = e.getAttribute(n.binding("auto-recover")) || e.getAttribute(n.binding("change"));
              i.pushInput(o, r, a, o, t)
            }))
          }
        }, {
          key: "pushLinkPatch",
          value: function(e, t, n) {
            var i = this,
              r = this.liveSocket.setPendingLink(e),
              o = t ? function() {
                return i.putRef([t], "click")
              } : null;
            this.pushWithReply(o, "link", {
              url: e
            }, (function(t) {
              t.link_redirect ? i.liveSocket.replaceMain(e, null, n, r) : i.liveSocket.commitPendingLink(r) && (i.href = e, i.applyPendingUpdates(), n && n())
            })).receive("timeout", (function() {
              return i.liveSocket.redirect(window.location.href)
            }))
          }
        }, {
          key: "formsForRecovery",
          value: function(e) {
            var t = this;
            if (0 === this.joinCount) return [];
            var n = this.binding("change"),
              i = document.createElement("template");
            return i.innerHTML = e, ie.all(this.el, "form[".concat(n, "]")).filter((function(e) {
              return t.ownsElement(e)
            })).filter((function(e) {
              return e.elements.length > 0
            })).filter((function(e) {
              return "ignore" !== e.getAttribute(t.binding("auto-recover"))
            })).filter((function(e) {
              return i.content.querySelector("form[".concat(n, '="').concat(e.getAttribute(n), '"]'))
            }))
          }
        }, {
          key: "maybePushComponentsDestroyed",
          value: function(e) {
            var t, n = this,
              i = e.filter((function(e) {
                return 0 === ie.findComponentNodeList(n.el, e).length
              }));
            i.length > 0 && ((t = this.pruningCIDs).push.apply(t, g(i)), this.pushWithReply(null, "cids_will_destroy", {
              cids: i
            }, (function() {
              n.pruningCIDs = n.pruningCIDs.filter((function(e) {
                return -1 !== i.indexOf(e)
              }));
              var e = i.filter((function(e) {
                return 0 === ie.findComponentNodeList(n.el, e).length
              }));
              e.length > 0 && n.pushWithReply(null, "cids_destroyed", {
                cids: e
              }, (function(e) {
                n.rendered.pruneCIDs(e.cids)
              }))
            })))
          }
        }, {
          key: "ownsElement",
          value: function(e) {
            return e.getAttribute("data-phx-parent-id") === this.id || V(e.closest(O), (function(e) {
              return e.id
            })) === this.id
          }
        }, {
          key: "submitForm",
          value: function(e, t, n) {
            var i = this;
            ie.putPrivate(e, "phx-has-submitted", !0), this.liveSocket.blurActiveElement(this), this.pushFormSubmit(e, t, n, (function() {
              i.liveSocket.restorePreviouslyActiveFocus()
            }))
          }
        }, {
          key: "binding",
          value: function(e) {
            return this.liveSocket.binding(e)
          }
        }]), e
      }(),
      se = 1,
      ue = function() {
        function e(t, n, i) {
          for (var r in C(this, e), this.__view = t, this.__liveSocket = t.liveSocket, this.__callbacks = i, this.__listeners = new Set, this.__isDisconnected = !1, this.el = n, this.viewName = t.name(), this.el.phxHookId = this.constructor.makeID(), this.__callbacks) this[r] = this.__callbacks[r]
        }
        return x(e, null, [{
          key: "makeID",
          value: function() {
            return se++
          }
        }, {
          key: "elementID",
          value: function(e) {
            return e.phxHookId
          }
        }]), x(e, [{
          key: "__mounted",
          value: function() {
            this.mounted && this.mounted()
          }
        }, {
          key: "__updated",
          value: function() {
            this.updated && this.updated()
          }
        }, {
          key: "__beforeUpdate",
          value: function() {
            this.beforeUpdate && this.beforeUpdate()
          }
        }, {
          key: "__destroyed",
          value: function() {
            this.destroyed && this.destroyed()
          }
        }, {
          key: "__reconnected",
          value: function() {
            this.__isDisconnected && (this.__isDisconnected = !1, this.reconnected && this.reconnected())
          }
        }, {
          key: "__disconnected",
          value: function() {
            this.__isDisconnected = !0, this.disconnected && this.disconnected()
          }
        }, {
          key: "pushEvent",
          value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
            return this.__view.pushHookEvent(null, e, t, n)
          }
        }, {
          key: "pushEventTo",
          value: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {};
            return this.__view.withinTargets(e, (function(e, r) {
              return e.pushHookEvent(r, t, n, i)
            }))
          }
        }, {
          key: "handleEvent",
          value: function(e, t) {
            var n = function(n, i) {
              return i ? e : t(n.detail)
            };
            return window.addEventListener("phx:hook:".concat(e), n), this.__listeners.add(n), n
          }
        }, {
          key: "removeHandleEvent",
          value: function(e) {
            var t = e(null, !0);
            window.removeEventListener("phx:hook:".concat(t), e), this.__listeners.delete(e)
          }
        }, {
          key: "__cleanup__",
          value: function() {
            var e = this;
            this.__listeners.forEach((function(t) {
              return e.removeHandleEvent(t)
            }))
          }
        }]), e
      }();
    t.default = te
  }, function(e, t) {
    var n;
    n = function() {
      return this
    }();
    try {
      n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
      "object" == typeof window && (n = window)
    }
    e.exports = n
  }, function(e, t, n) {
    (function(t) {
      t.Phoenix || (t.Phoenix = {}), e.exports = t.Phoenix.LiveView = n(0)
    }).call(this, n(1))
  }])
}, function(e, t, n) {
  e.exports = n(7)
}, function(e, t, n) {
  var i = n(4),
    r = n(5);
  "string" == typeof(r = r.__esModule ? r.default : r) && (r = [
    [e.i, r, ""]
  ]);
  var o = {
    insert: "head",
    singleton: !1
  };
  i(r, o);
  e.exports = r.locals || {}
}, function(e, t, n) {
  "use strict";
  var i, r = function() {
      return void 0 === i && (i = Boolean(window && document && document.all && !window.atob)), i
    },
    o = function() {
      var e = {};
      return function(t) {
        if (void 0 === e[t]) {
          var n = document.querySelector(t);
          if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
            n = n.contentDocument.head
          } catch (e) {
            n = null
          }
          e[t] = n
        }
        return e[t]
      }
    }(),
    a = [];

  function s(e) {
    for (var t = -1, n = 0; n < a.length; n++)
      if (a[n].identifier === e) {
        t = n;
        break
      } return t
  }

  function u(e, t) {
    for (var n = {}, i = [], r = 0; r < e.length; r++) {
      var o = e[r],
        u = t.base ? o[0] + t.base : o[0],
        c = n[u] || 0,
        l = "".concat(u, " ").concat(c);
      n[u] = c + 1;
      var h = s(l),
        d = {
          css: o[1],
          media: o[2],
          sourceMap: o[3]
        }; - 1 !== h ? (a[h].references++, a[h].updater(d)) : a.push({
        identifier: l,
        updater: m(d, t),
        references: 1
      }), i.push(l)
    }
    return i
  }

  function c(e) {
    var t = document.createElement("style"),
      i = e.attributes || {};
    if (void 0 === i.nonce) {
      var r = n.nc;
      r && (i.nonce = r)
    }
    if (Object.keys(i).forEach((function(e) {
        t.setAttribute(e, i[e])
      })), "function" == typeof e.insert) e.insert(t);
    else {
      var a = o(e.insert || "head");
      if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
      a.appendChild(t)
    }
    return t
  }
  var l, h = (l = [], function(e, t) {
    return l[e] = t, l.filter(Boolean).join("\n")
  });

  function d(e, t, n, i) {
    var r = n ? "" : i.media ? "@media ".concat(i.media, " {").concat(i.css, "}") : i.css;
    if (e.styleSheet) e.styleSheet.cssText = h(t, r);
    else {
      var o = document.createTextNode(r),
        a = e.childNodes;
      a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
    }
  }

  function f(e, t, n) {
    var i = n.css,
      r = n.media,
      o = n.sourceMap;
    if (r ? e.setAttribute("media", r) : e.removeAttribute("media"), o && btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), e.styleSheet) e.styleSheet.cssText = i;
    else {
      for (; e.firstChild;) e.removeChild(e.firstChild);
      e.appendChild(document.createTextNode(i))
    }
  }
  var v = null,
    p = 0;

  function m(e, t) {
    var n, i, r;
    if (t.singleton) {
      var o = p++;
      n = v || (v = c(t)), i = d.bind(null, n, o, !1), r = d.bind(null, n, o, !0)
    } else n = c(t), i = f.bind(null, n, t), r = function() {
      ! function(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e)
      }(n)
    };
    return i(e),
      function(t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
          i(e = t)
        } else r()
      }
  }
  e.exports = function(e, t) {
    (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = r());
    var n = u(e = e || [], t);
    return function(e) {
      if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
        for (var i = 0; i < n.length; i++) {
          var r = s(n[i]);
          a[r].references--
        }
        for (var o = u(e, t), c = 0; c < n.length; c++) {
          var l = s(n[c]);
          0 === a[l].references && (a[l].updater(), a.splice(l, 1))
        }
        n = o
      }
    }
  }
}, function(e, t, n) {}, function(e, t, n) {
  "use strict";
  ! function() {
    var e = function() {
      if ("function" == typeof window.CustomEvent) return window.CustomEvent;

      function e(e, t) {
        t = t || {
          bubbles: !1,
          cancelable: !1,
          detail: void 0
        };
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
      }
      return e.prototype = window.Event.prototype, e
    }();

    function t(e, t) {
      var n = document.createElement("input");
      return n.type = "hidden", n.name = e, n.value = t, n
    }

    function n(e) {
      var n = e.getAttribute("data-to"),
        i = t("_method", e.getAttribute("data-method")),
        r = t("_csrf_token", e.getAttribute("data-csrf")),
        o = document.createElement("form"),
        a = e.getAttribute("target");
      o.method = "get" === e.getAttribute("data-method") ? "get" : "post", o.action = n, o.style.display = "hidden", a && (o.target = a), o.appendChild(r), o.appendChild(i), document.body.appendChild(o), o.submit()
    }
    window.addEventListener("click", (function(t) {
      for (var i = t.target; i && i.getAttribute;) {
        var r = new e("phoenix.link.click", {
          bubbles: !0,
          cancelable: !0
        });
        if (!i.dispatchEvent(r)) return t.preventDefault(), t.stopImmediatePropagation(), !1;
        if (i.getAttribute("data-method")) return n(i), t.preventDefault(), !1;
        i = i.parentNode
      }
    }), !1), window.addEventListener("phoenix.link.click", (function(e) {
      var t = e.target.getAttribute("data-confirm");
      t && !window.confirm(t) && e.preventDefault()
    }), !1)
  }()
}, function(e, t, n) {
  "use strict";
  n.r(t);
  n(3), n(6);
  var i = n(0),
    r = n(1),
    o = n.n(r);

  function a(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t && (i = i.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, i)
    }
    return n
  }

  function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function u(e) {
    var t, n, i, r, o, u, c, l, h = [],
      d = 0,
      f = 0,
      v = 1;

    function p(e) {
      if (!t.playing) return i.style.display = "none", i.style.opacity = "0", !1;
      i.style.display = "initial", i.style.backgroundColor = t.ball_color, i.style.opacity = "1", o || (o = e), l = d / u, d <= 0 && (v = 1), d >= u && (v = -1), d = d + t.speed * v + t.speed * Math.sin(l * Math.PI) * t.acceleration * v, "left-right" == t.animation ? f = Math.sin(l * Math.PI * t.waviness) * v * (c / 2) * t.amplitude + c / 2 : "top-left-diagonal" == t.animation ? f = l * c : "bottom-left-diagonal" == t.animation && (f = c - l * c), "diamond" == t.shape ? i.style.transform = "translate(".concat(d, "px, ").concat(f, "px) rotate(45deg)") : i.style.transform = "translate(".concat(d, "px, ").concat(f, "px)"), r = requestAnimationFrame(p)
    }

    function m() {
      r && (window.cancelAnimationFrame(r), r = void 0)
    }

    function g() {
      u = n.getBoundingClientRect().width - i.getBoundingClientRect().width, c = n.getBoundingClientRect().height - i.getBoundingClientRect().height
    }
    return {
      step: p,
      initialize: function(e) {
        window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, i = (n = e).querySelector("#ball"), g(), window.addEventListener("resize", g)
      },
      start: function() {
        m(), r = window.requestAnimationFrame(p)
      },
      stop: m,
      setOptions: function(e) {
        (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? a(Object(n), !0).forEach((function(t) {
              s(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
          }
          return e
        }({}, t, {}, e)).speed = parseInt(t.speed, 10), t.acceleration = parseInt(t.acceleration, 10), t.waviness = parseFloat(t.waviness), t.amplitude = parseFloat(t.amplitude), t.soundInterval = parseInt(t.soundInterval, 10), i.style.backgroundColor = t.ball_color, "ball" == t.shape && (i.style.borderRadius = "9000px"), "square" == t.shape && (i.style.borderRadius = 0), "diamond" == t.shape && (i.style.borderRadius = 0), h.forEach((function(e) {
          return clearTimeout(e)
        })), h = [], t.withSound && t.soundInterval > 0 && h.push(function e() {
          var n = 1e3 * t.soundInterval + 1e3 * Math.random() * 1.5;
          return setTimeout((function() {
            new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=").play(), h.push(e())
          }), n)
        }())
      }
    }
  }
  console.log.bind(console);

  function c(e) {
    return e < 10 ? "0" + parseInt(e, 10) : e
  }

  function l(e) {
    return e <= 0 ? "00:00:00" : "".concat(c(Math.trunc(e / 1e3 / 60 / 60)), ":").concat(c(Math.trunc(e / 1e3 / 60)), ":").concat(c(Math.trunc(e / 1e3 % 60)))
  }

  function h() {
    return {
      initialize: function(e) {
        var t, n = null,
          i = 0,
          r = !1,
          o = function(e) {
            var t = document.createElement("div");
            return e.append(t), t.innerHTML = '\n    <div class="stopwatch flex text-gray-300 text-lg">\n      <div class="mr-3" style="width: 30px; height: 30px; background: transparent url(/images/icons/clock-regular.png); background-size: cover;"></div>\n      <div class="clock mr-1 text-gray-300">00:00:00</div>\n      <a href="#" class="start-stop mr-1" style="width: 30px; height: 30px; background: transparent url(/images/icons/play-solid.png) no-repeat center center; background-size: 70%;"></a>\n      <a href="#" class="reset mr-1" style="width: 30px; height: 30px; background: transparent url(/images/icons/redo-solid.png) no-repeat center center; background-size: 70%;"></a>\n    </div>\n  ', t
          }(e),
          a = o.querySelector(".clock"),
          s = o.querySelector(".start-stop"),
          u = o.querySelector(".reset");

        function c() {
          a.textContent = l(i + Date.now() - n)
        }

        function h() {
          i = i + Date.now() - n, n = null, r = !1, s.style.backgroundImage = "url(/images/icons/play-solid.png)", clearInterval(t)
        }
        s.addEventListener("click", (function(e) {
          e.preventDefault(), r ? h() : (n || (n = Date.now()), r = !0, s.style.backgroundImage = "url(/images/icons/pause-solid.png)", t = setInterval(c, 100))
        })), u.addEventListener("click", (function(e) {
          h(), i = 0, a.textContent = l(0)
        }))
      }
    }
  }
  var d = "";

  function f(e) {
    var t = e.querySelector(".word");
    if (t.textContent == d) return !1;
    d = t.textContent;
    var n = e.getBoundingClientRect(),
      i = t.getBoundingClientRect(),
      r = Math.random() * n.height - i.height,
      o = Math.random() * n.width - i.width;
    t.style.top = r > 0 ? r + "px" : 0, t.style.left = o > 0 ? o + "px" : 0
  }
  var v = {};
  v.Sidebar = {
    mounted: function() {
      this.el.querySelectorAll("a").forEach((function(e) {
        e.href == window.location.href ? e.classList.add("bg-background") : e.classList.remove("bg-background")
      }))
    }
  }, v.FullscreenButton = {
    mounted: function() {
      var e = document.querySelector("#fullscreen-button"),
        t = document.querySelector("body");
      e.addEventListener("click", (function(n) {
        n.preventDefault(), document.fullscreenElement ? (document.exitFullscreen(), e.style.backgroundImage = "url(/images/icons/expand-solid.png)") : (t.requestFullscreen(), e.style.backgroundImage = "url(/images/icons/compress-solid.png)")
      }))
    }
  }, v.Canvas = {
    mounted: function() {
      var e = this;
      this.emdrWidget = u(), this.emdrWidget.initialize(this.el), window.emdrWidget = this.emdrWidget, this.handleEvent("config_change", (function(t) {
        e.emdrWidget.setOptions(t), e.emdrWidget.start()
      }))
    },
    beforeDestroy: function() {
      this.emdrWidget.stop()
    }
  }, v.RandomWords = {
    mounted: function() {
      f(this.el)
    },
    updated: function() {
      f(this.el)
    }
  }, v.Sounds = {
    mounted: function() {
      var e = this.el;
      this.handleEvent("play_sound", (function(t) {
        var n = t.sound;
        e.querySelector('audio[src="/sounds/'.concat(n, '"]')).play()
      }))
    }
  }, v.Stopwatch = {
    mounted: function() {
      h().initialize(this.el)
    }
  }, v.ClientInstructions = {
    mounted: function() {
      this.el.addEventListener("click", (function(e) {
        e.target.classList.contains("copySessionLink") && (e.preventDefault(), function(e) {
          if (window.clipboardData && window.clipboardData.setData) return clipboardData.setData("Text", e);
          if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
            var t = document.createElement("textarea");
            t.textContent = e, t.style.position = "fixed", document.body.appendChild(t), t.select();
            try {
              document.execCommand("copy")
            } catch (e) {
              return console.warn("Copy to clipboard failed.", e), !1
            } finally {
              document.body.removeChild(t)
            }
          }
        }(e.target.href))
      }))
    }
  };
  var p = document.querySelector("meta[name='csrf-token']").getAttribute("content");
  new o.a("/live", i.Socket, {
    params: {
      _csrf_token: p
    },
    hooks: v
  }).connect()
}]);
