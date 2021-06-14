(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _settings = /*#__PURE__*/new WeakMap();

var OW_Base = /*#__PURE__*/function () {
  function OW_Base() {
    _classCallCheck(this, OW_Base);

    _settings.set(this, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, "elements", void 0);

    this.onInit();
    this.bindEvents();
  }

  _createClass(OW_Base, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {};
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      return {};
    }
  }, {
    key: "onInit",
    value: function onInit() {
      _classPrivateFieldSet(this, _settings, this.getDefaultSettings());

      this.elements = this.getDefaultElements();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {}
  }, {
    key: "getSettings",
    value: function getSettings() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!!key) {
        return _classPrivateFieldGet(this, _settings)[key];
      }

      return _classPrivateFieldGet(this, _settings);
    }
  }, {
    key: "setSettings",
    value: function setSettings() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!settings) {
        return;
      }

      _classPrivateFieldSet(this, _settings, Object.assign(_classPrivateFieldGet(this, _settings), settings));
    }
  }]);

  return OW_Base;
}();

var _default = OW_Base;
exports["default"] = _default;

},{}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _base = _interopRequireDefault(require("./base/base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var OW_StickAnythings = /*#__PURE__*/function (_OW_Base) {
  _inherits(OW_StickAnythings, _OW_Base);

  var _super = _createSuper(OW_StickAnythings);

  function OW_StickAnythings() {
    _classCallCheck(this, OW_StickAnythings);

    return _super.apply(this, arguments);
  }

  _createClass(OW_StickAnythings, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          wpAdminbar: "#wpadminbar",
          topbar: "#top-bar-wrap",
          header: "#site-header"
        },
        options: oceanwpLocalize,
        topOffset: 0
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var selectors = this.getSettings("selectors");
      var options = this.getSettings("options");
      return {
        stickyElements: document.querySelectorAll(options.stickElements),
        $stickyElements: jQuery(options.stickElements),
        wpAdminbar: document.querySelector(selectors.wpAdminbar),
        topbar: document.querySelector(selectors.topbar),
        header: document.querySelector(selectors.header),
        body: document.body
      };
    }
  }, {
    key: "onInit",
    value: function onInit() {
      _get(_getPrototypeOf(OW_StickAnythings.prototype), "onInit", this).call(this);

      if (!!this.elements.stickyElements) {
        this.setElementTopOffset();
        this.initSticky();
      }
    }
  }, {
    key: "initSticky",
    value: function initSticky() {
      var settings = this.getSettings();
      var options = settings.options;
      var topOffset = settings.topOffset;
      this.elements.$stickyElements.stick_in_parent({
        offset_top: topOffset
      });

      if (!!options.unStick && window.innerWidth <= options.unStick) {
        this.elements.$stickyElements.trigger("sticky_kit:detach");
      }
    }
  }, {
    key: "setElementTopOffset",
    value: function setElementTopOffset() {
      this.addUserTopOffset();
      this.addWPAdminbarTopOffset();
      this.addTopbarTopOffset();
      this.addHeaderTopOffset();
    }
  }, {
    key: "addUserTopOffset",
    value: function addUserTopOffset() {
      var options = this.getSettings("options");
      var userTopOffset = Number.parseInt(options.isOffset);

      if (userTopOffset) {
        this.elements.body.setAttribute("data-offset", userTopOffset);
        this.setSettings({
          topOffset: userTopOffset
        });
      }
    }
  }, {
    key: "addWPAdminbarTopOffset",
    value: function addWPAdminbarTopOffset() {
      var currentTopOffset = this.getSettings("topOffset");

      if (!!this.elements.wpAdminbar && window.innerWidth > 600) {
        var wpAdminbarTopOffset = Number.parseInt(this.elements.wpAdminbar.offsetHeight);
        this.setSettings({
          topOffset: currentTopOffset + wpAdminbarTopOffset
        });
      }
    }
  }, {
    key: "addTopbarTopOffset",
    value: function addTopbarTopOffset() {
      var settings = this.getSettings();
      var options = settings.options;
      var currentTopOffset = settings.topOffset;

      if (options.hasStickyTopBar) {
        var topbarTopOffset = Number.parseInt(this.elements.topbar.offsetHeight);
        this.setSettings({
          topOffset: currentTopOffset + topbarTopOffset
        });
      }
    }
  }, {
    key: "addHeaderTopOffset",
    value: function addHeaderTopOffset() {
      var currentTopOffset = this.getSettings("topOffset");

      if (!this.elements.header.classList.contains("vertical-header") && this.elements.header.classList.contains("fixed-scroll")) {
        var headerTopOffset = Number.parseInt(this.elements.header.offsetHeight);
        this.setSettings({
          topOffset: currentTopOffset + headerTopOffset
        });
      }
    }
  }]);

  return OW_StickAnythings;
}(_base["default"]);

new OW_StickAnythings();

},{"./base/base":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2Jhc2UvYmFzZS5qcyIsImFzc2V0cy9zcmMvanMvc3RpY2stYW55dGhpbmdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQU0sTztBQUlGLHFCQUFjO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQ1YsU0FBSyxNQUFMO0FBQ0EsU0FBSyxVQUFMO0FBQ0g7Ozs7V0FFRCw4QkFBcUI7QUFDakIsYUFBTyxFQUFQO0FBQ0g7OztXQUVELDhCQUFxQjtBQUNqQixhQUFPLEVBQVA7QUFDSDs7O1dBRUQsa0JBQVM7QUFDTCw2Q0FBaUIsS0FBSyxrQkFBTCxFQUFqQjs7QUFDQSxXQUFLLFFBQUwsR0FBZ0IsS0FBSyxrQkFBTCxFQUFoQjtBQUNIOzs7V0FFRCxzQkFBYSxDQUFFOzs7V0FFZix1QkFBd0I7QUFBQSxVQUFaLEdBQVksdUVBQU4sSUFBTTs7QUFDcEIsVUFBSSxDQUFDLENBQUMsR0FBTixFQUFXO0FBQ1AsZUFBTyx1Q0FBZSxHQUFmLENBQVA7QUFDSDs7QUFFRCxtQ0FBTyxJQUFQO0FBQ0g7OztXQUVELHVCQUEyQjtBQUFBLFVBQWYsUUFBZSx1RUFBSixFQUFJOztBQUN2QixVQUFJLENBQUMsUUFBTCxFQUFlO0FBQ1g7QUFDSDs7QUFFRCw2Q0FBaUIsTUFBTSxDQUFDLE1BQVAsdUJBQWMsSUFBZCxjQUE4QixRQUE5QixDQUFqQjtBQUNIOzs7Ozs7ZUFHVSxPOzs7Ozs7OztBQ3pDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNLGlCOzs7Ozs7Ozs7Ozs7O1dBQ0YsOEJBQXFCO0FBQ2pCLGFBQU87QUFDSCxRQUFBLFNBQVMsRUFBRTtBQUNQLFVBQUEsVUFBVSxFQUFFLGFBREw7QUFFUCxVQUFBLE1BQU0sRUFBRSxlQUZEO0FBR1AsVUFBQSxNQUFNLEVBQUU7QUFIRCxT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LFlBQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxRQUFQLENBQWdCLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsWUFBckMsQ0FBeEI7QUFFQSxhQUFLLFdBQUwsQ0FBaUI7QUFDYixVQUFBLFNBQVMsRUFBRSxnQkFBZ0IsR0FBRztBQURqQixTQUFqQjtBQUdIO0FBQ0o7OztXQUVELDhCQUFxQjtBQUNqQixVQUFNLGdCQUFnQixHQUFHLEtBQUssV0FBTCxDQUFpQixXQUFqQixDQUF6Qjs7QUFFQSxVQUNJLENBQUMsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixTQUFyQixDQUErQixRQUEvQixDQUF3QyxpQkFBeEMsQ0FBRCxJQUNBLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsU0FBckIsQ0FBK0IsUUFBL0IsQ0FBd0MsY0FBeEMsQ0FGSixFQUdFO0FBQ0UsWUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixZQUFyQyxDQUF4QjtBQUVBLGFBQUssV0FBTCxDQUFpQjtBQUNiLFVBQUEsU0FBUyxFQUFFLGdCQUFnQixHQUFHO0FBRGpCLFNBQWpCO0FBR0g7QUFDSjs7OztFQTdHMkIsZ0I7O0FBZ0hoQyxJQUFJLGlCQUFKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY2xhc3MgT1dfQmFzZSB7XG4gICAgI3NldHRpbmdzO1xuICAgIGVsZW1lbnRzO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub25Jbml0KCk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGdldERlZmF1bHRTZXR0aW5ncygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRFbGVtZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIG9uSW5pdCgpIHtcbiAgICAgICAgdGhpcy4jc2V0dGluZ3MgPSB0aGlzLmdldERlZmF1bHRTZXR0aW5ncygpO1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gdGhpcy5nZXREZWZhdWx0RWxlbWVudHMoKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge31cblxuICAgIGdldFNldHRpbmdzKGtleSA9IG51bGwpIHtcbiAgICAgICAgaWYgKCEha2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jc2V0dGluZ3Nba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLiNzZXR0aW5ncztcbiAgICB9XG5cbiAgICBzZXRTZXR0aW5ncyhzZXR0aW5ncyA9IHt9KSB7XG4gICAgICAgIGlmICghc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NldHRpbmdzID0gT2JqZWN0LmFzc2lnbih0aGlzLiNzZXR0aW5ncywgc2V0dGluZ3MpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT1dfQmFzZTtcbiIsImltcG9ydCBPV19CYXNlIGZyb20gXCIuL2Jhc2UvYmFzZVwiO1xuXG5jbGFzcyBPV19TdGlja0FueXRoaW5ncyBleHRlbmRzIE9XX0Jhc2Uge1xuICAgIGdldERlZmF1bHRTZXR0aW5ncygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdG9yczoge1xuICAgICAgICAgICAgICAgIHdwQWRtaW5iYXI6IFwiI3dwYWRtaW5iYXJcIixcbiAgICAgICAgICAgICAgICB0b3BiYXI6IFwiI3RvcC1iYXItd3JhcFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcjogXCIjc2l0ZS1oZWFkZXJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zOiBvY2VhbndwTG9jYWxpemUsXG4gICAgICAgICAgICB0b3BPZmZzZXQ6IDAsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdEVsZW1lbnRzKCkge1xuICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSB0aGlzLmdldFNldHRpbmdzKFwic2VsZWN0b3JzXCIpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRTZXR0aW5ncyhcIm9wdGlvbnNcIik7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0aWNreUVsZW1lbnRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbnMuc3RpY2tFbGVtZW50cyksXG4gICAgICAgICAgICAkc3RpY2t5RWxlbWVudHM6IGpRdWVyeShvcHRpb25zLnN0aWNrRWxlbWVudHMpLFxuICAgICAgICAgICAgd3BBZG1pbmJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMud3BBZG1pbmJhciksXG4gICAgICAgICAgICB0b3BiYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLnRvcGJhciksXG4gICAgICAgICAgICBoZWFkZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLmhlYWRlciksXG4gICAgICAgICAgICBib2R5OiBkb2N1bWVudC5ib2R5LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uSW5pdCgpIHtcbiAgICAgICAgc3VwZXIub25Jbml0KCk7XG5cbiAgICAgICAgaWYgKCEhdGhpcy5lbGVtZW50cy5zdGlja3lFbGVtZW50cykge1xuICAgICAgICAgICAgdGhpcy5zZXRFbGVtZW50VG9wT2Zmc2V0KCk7XG4gICAgICAgICAgICB0aGlzLmluaXRTdGlja3koKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRTdGlja3koKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5nZXRTZXR0aW5ncygpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gc2V0dGluZ3Mub3B0aW9ucztcbiAgICAgICAgY29uc3QgdG9wT2Zmc2V0ID0gc2V0dGluZ3MudG9wT2Zmc2V0O1xuXG4gICAgICAgIHRoaXMuZWxlbWVudHMuJHN0aWNreUVsZW1lbnRzLnN0aWNrX2luX3BhcmVudCh7XG4gICAgICAgICAgICBvZmZzZXRfdG9wOiB0b3BPZmZzZXQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghIW9wdGlvbnMudW5TdGljayAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSBvcHRpb25zLnVuU3RpY2spIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuJHN0aWNreUVsZW1lbnRzLnRyaWdnZXIoXCJzdGlja3lfa2l0OmRldGFjaFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEVsZW1lbnRUb3BPZmZzZXQoKSB7XG4gICAgICAgIHRoaXMuYWRkVXNlclRvcE9mZnNldCgpO1xuICAgICAgICB0aGlzLmFkZFdQQWRtaW5iYXJUb3BPZmZzZXQoKTtcbiAgICAgICAgdGhpcy5hZGRUb3BiYXJUb3BPZmZzZXQoKTtcbiAgICAgICAgdGhpcy5hZGRIZWFkZXJUb3BPZmZzZXQoKTtcbiAgICB9XG5cbiAgICBhZGRVc2VyVG9wT2Zmc2V0KCkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRTZXR0aW5ncyhcIm9wdGlvbnNcIik7XG4gICAgICAgIGNvbnN0IHVzZXJUb3BPZmZzZXQgPSBOdW1iZXIucGFyc2VJbnQob3B0aW9ucy5pc09mZnNldCk7XG5cbiAgICAgICAgaWYgKHVzZXJUb3BPZmZzZXQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuYm9keS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9mZnNldFwiLCB1c2VyVG9wT2Zmc2V0KTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTZXR0aW5ncyh7XG4gICAgICAgICAgICAgICAgdG9wT2Zmc2V0OiB1c2VyVG9wT2Zmc2V0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRXUEFkbWluYmFyVG9wT2Zmc2V0KCkge1xuICAgICAgICBjb25zdCBjdXJyZW50VG9wT2Zmc2V0ID0gdGhpcy5nZXRTZXR0aW5ncyhcInRvcE9mZnNldFwiKTtcblxuICAgICAgICBpZiAoISF0aGlzLmVsZW1lbnRzLndwQWRtaW5iYXIgJiYgd2luZG93LmlubmVyV2lkdGggPiA2MDApIHtcbiAgICAgICAgICAgIGNvbnN0IHdwQWRtaW5iYXJUb3BPZmZzZXQgPSBOdW1iZXIucGFyc2VJbnQodGhpcy5lbGVtZW50cy53cEFkbWluYmFyLm9mZnNldEhlaWdodCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U2V0dGluZ3Moe1xuICAgICAgICAgICAgICAgIHRvcE9mZnNldDogY3VycmVudFRvcE9mZnNldCArIHdwQWRtaW5iYXJUb3BPZmZzZXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFRvcGJhclRvcE9mZnNldCgpIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLmdldFNldHRpbmdzKCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBzZXR0aW5ncy5vcHRpb25zO1xuICAgICAgICBjb25zdCBjdXJyZW50VG9wT2Zmc2V0ID0gc2V0dGluZ3MudG9wT2Zmc2V0O1xuXG4gICAgICAgIGlmIChvcHRpb25zLmhhc1N0aWNreVRvcEJhcikge1xuICAgICAgICAgICAgY29uc3QgdG9wYmFyVG9wT2Zmc2V0ID0gTnVtYmVyLnBhcnNlSW50KHRoaXMuZWxlbWVudHMudG9wYmFyLm9mZnNldEhlaWdodCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U2V0dGluZ3Moe1xuICAgICAgICAgICAgICAgIHRvcE9mZnNldDogY3VycmVudFRvcE9mZnNldCArIHRvcGJhclRvcE9mZnNldCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkSGVhZGVyVG9wT2Zmc2V0KCkge1xuICAgICAgICBjb25zdCBjdXJyZW50VG9wT2Zmc2V0ID0gdGhpcy5nZXRTZXR0aW5ncyhcInRvcE9mZnNldFwiKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhdGhpcy5lbGVtZW50cy5oZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWwtaGVhZGVyXCIpICYmXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJmaXhlZC1zY3JvbGxcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJUb3BPZmZzZXQgPSBOdW1iZXIucGFyc2VJbnQodGhpcy5lbGVtZW50cy5oZWFkZXIub2Zmc2V0SGVpZ2h0KTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTZXR0aW5ncyh7XG4gICAgICAgICAgICAgICAgdG9wT2Zmc2V0OiBjdXJyZW50VG9wT2Zmc2V0ICsgaGVhZGVyVG9wT2Zmc2V0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm5ldyBPV19TdGlja0FueXRoaW5ncygpO1xuIl19
