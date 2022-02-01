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

      var options = this.getSettings("options");

      if (!!options.stickElements) {
        this.setElementTopOffset();
        this.initSticky();
      }
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      window.addEventListener("resize", function () {
        var options = _this.getSettings("options");

        if (!!options.stickElements) {
          _this.initSticky();
        }
      });
    }
  }, {
    key: "initSticky",
    value: function initSticky() {
      var settings = this.getSettings();
      var options = settings.options;
      var topOffset = settings.topOffset;
      var $stickyElements = jQuery(options.stickElements);
      $stickyElements.stick_in_parent({
        offset_top: topOffset
      });

      if (!!options.unStick && window.innerWidth <= options.unStick) {
        $stickyElements.trigger("sticky_kit:detach");
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
      var _this$elements$header, _this$elements$header2;

      var currentTopOffset = this.getSettings("topOffset");

      if (!((_this$elements$header = this.elements.header) !== null && _this$elements$header !== void 0 && _this$elements$header.classList.contains("vertical-header")) && (_this$elements$header2 = this.elements.header) !== null && _this$elements$header2 !== void 0 && _this$elements$header2.classList.contains("fixed-scroll")) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2Jhc2UvYmFzZS5qcyIsImFzc2V0cy9zcmMvanMvc3RpY2stYW55dGhpbmdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQU0sTztBQUlGLHFCQUFjO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQ1YsU0FBSyxNQUFMO0FBQ0EsU0FBSyxVQUFMO0FBQ0g7Ozs7V0FFRCw4QkFBcUI7QUFDakIsYUFBTyxFQUFQO0FBQ0g7OztXQUVELDhCQUFxQjtBQUNqQixhQUFPLEVBQVA7QUFDSDs7O1dBRUQsa0JBQVM7QUFDTCw2Q0FBaUIsS0FBSyxrQkFBTCxFQUFqQjs7QUFDQSxXQUFLLFFBQUwsR0FBZ0IsS0FBSyxrQkFBTCxFQUFoQjtBQUNIOzs7V0FFRCxzQkFBYSxDQUFFOzs7V0FFZix1QkFBd0I7QUFBQSxVQUFaLEdBQVksdUVBQU4sSUFBTTs7QUFDcEIsVUFBSSxDQUFDLENBQUMsR0FBTixFQUFXO0FBQ1AsZUFBTyx1Q0FBZSxHQUFmLENBQVA7QUFDSDs7QUFFRCxtQ0FBTyxJQUFQO0FBQ0g7OztXQUVELHVCQUEyQjtBQUFBLFVBQWYsUUFBZSx1RUFBSixFQUFJOztBQUN2QixVQUFJLENBQUMsUUFBTCxFQUFlO0FBQ1g7QUFDSDs7QUFFRCw2Q0FBaUIsTUFBTSxDQUFDLE1BQVAsdUJBQWMsSUFBZCxjQUE4QixRQUE5QixDQUFqQjtBQUNIOzs7Ozs7ZUFHVSxPOzs7Ozs7OztBQ3pDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNLGlCOzs7Ozs7Ozs7Ozs7O1dBQ0YsOEJBQXFCO0FBQ2pCLGFBQU87QUFDSCxRQUFBLFNBQVMsRUFBRTtBQUNQLFVBQUEsVUFBVSxFQUFFLGFBREw7QUFFUCxVQUFBLE1BQU0sRUFBRSxlQUZEO0FBR1AsVUFBQSxNQUFNLEVBQUU7QUFIRCxT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O0FBQ0o7OztXQUVELDhCQUFxQjtBQUNqQixVQUFNLFFBQVEsR0FBRyxLQUFLLFdBQUwsRUFBakI7QUFDQSxVQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBekI7QUFDQSxVQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxTQUFsQzs7QUFFQSxVQUFJLE9BQU8sQ0FBQyxlQUFaLEVBQTZCO0FBQ3pCLFlBQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxRQUFQLENBQWdCLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsWUFBckMsQ0FBeEI7QUFFQSxhQUFLLFdBQUwsQ0FBaUI7QUFDYixVQUFBLFNBQVMsRUFBRSxnQkFBZ0IsR0FBRztBQURqQixTQUFqQjtBQUdIO0FBQ0o7OztXQUVELDhCQUFxQjtBQUFBOztBQUNqQixVQUFNLGdCQUFnQixHQUFHLEtBQUssV0FBTCxDQUFpQixXQUFqQixDQUF6Qjs7QUFFQSxVQUNJLDJCQUFDLEtBQUssUUFBTCxDQUFjLE1BQWYsa0RBQUMsc0JBQXNCLFNBQXRCLENBQWdDLFFBQWhDLENBQXlDLGlCQUF6QyxDQUFELCtCQUNBLEtBQUssUUFBTCxDQUFjLE1BRGQsbURBQ0EsdUJBQXNCLFNBQXRCLENBQWdDLFFBQWhDLENBQXlDLGNBQXpDLENBRkosRUFHRTtBQUNFLFlBQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxRQUFQLENBQWdCLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsWUFBckMsQ0FBeEI7QUFFQSxhQUFLLFdBQUwsQ0FBaUI7QUFDYixVQUFBLFNBQVMsRUFBRSxnQkFBZ0IsR0FBRztBQURqQixTQUFqQjtBQUdIO0FBQ0o7Ozs7RUF4SDJCLGdCOztBQTJIaEMsSUFBSSxpQkFBSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNsYXNzIE9XX0Jhc2Uge1xuICAgICNzZXR0aW5ncztcbiAgICBlbGVtZW50cztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9uSW5pdCgpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0U2V0dGluZ3MoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0RWxlbWVudHMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBvbkluaXQoKSB7XG4gICAgICAgIHRoaXMuI3NldHRpbmdzID0gdGhpcy5nZXREZWZhdWx0U2V0dGluZ3MoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IHRoaXMuZ2V0RGVmYXVsdEVsZW1lbnRzKCk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHt9XG5cbiAgICBnZXRTZXR0aW5ncyhrZXkgPSBudWxsKSB7XG4gICAgICAgIGlmICghIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuI3NldHRpbmdzW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy4jc2V0dGluZ3M7XG4gICAgfVxuXG4gICAgc2V0U2V0dGluZ3Moc2V0dGluZ3MgPSB7fSkge1xuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24odGhpcy4jc2V0dGluZ3MsIHNldHRpbmdzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9XX0Jhc2U7XG4iLCJpbXBvcnQgT1dfQmFzZSBmcm9tIFwiLi9iYXNlL2Jhc2VcIjtcblxuY2xhc3MgT1dfU3RpY2tBbnl0aGluZ3MgZXh0ZW5kcyBPV19CYXNlIHtcbiAgICBnZXREZWZhdWx0U2V0dGluZ3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZWxlY3RvcnM6IHtcbiAgICAgICAgICAgICAgICB3cEFkbWluYmFyOiBcIiN3cGFkbWluYmFyXCIsXG4gICAgICAgICAgICAgICAgdG9wYmFyOiBcIiN0b3AtYmFyLXdyYXBcIixcbiAgICAgICAgICAgICAgICBoZWFkZXI6IFwiI3NpdGUtaGVhZGVyXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczogb2NlYW53cExvY2FsaXplLFxuICAgICAgICAgICAgdG9wT2Zmc2V0OiAwLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRFbGVtZW50cygpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0gdGhpcy5nZXRTZXR0aW5ncyhcInNlbGVjdG9yc1wiKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0U2V0dGluZ3MoXCJvcHRpb25zXCIpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3cEFkbWluYmFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy53cEFkbWluYmFyKSxcbiAgICAgICAgICAgIHRvcGJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMudG9wYmFyKSxcbiAgICAgICAgICAgIGhlYWRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMuaGVhZGVyKSxcbiAgICAgICAgICAgIGJvZHk6IGRvY3VtZW50LmJvZHksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25Jbml0KCkge1xuICAgICAgICBzdXBlci5vbkluaXQoKTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRTZXR0aW5ncyhcIm9wdGlvbnNcIik7XG5cbiAgICAgICAgaWYgKCEhb3B0aW9ucy5zdGlja0VsZW1lbnRzKSB7XG4gICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRUb3BPZmZzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFN0aWNreSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0U2V0dGluZ3MoXCJvcHRpb25zXCIpO1xuXG4gICAgICAgICAgICBpZiAoISFvcHRpb25zLnN0aWNrRWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRTdGlja3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdFN0aWNreSgpIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLmdldFNldHRpbmdzKCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBzZXR0aW5ncy5vcHRpb25zO1xuICAgICAgICBjb25zdCB0b3BPZmZzZXQgPSBzZXR0aW5ncy50b3BPZmZzZXQ7XG4gICAgICAgIGNvbnN0ICRzdGlja3lFbGVtZW50cyA9IGpRdWVyeShvcHRpb25zLnN0aWNrRWxlbWVudHMpO1xuXG4gICAgICAgICRzdGlja3lFbGVtZW50cy5zdGlja19pbl9wYXJlbnQoe1xuICAgICAgICAgICAgb2Zmc2V0X3RvcDogdG9wT2Zmc2V0LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoISFvcHRpb25zLnVuU3RpY2sgJiYgd2luZG93LmlubmVyV2lkdGggPD0gb3B0aW9ucy51blN0aWNrKSB7XG4gICAgICAgICAgICAkc3RpY2t5RWxlbWVudHMudHJpZ2dlcihcInN0aWNreV9raXQ6ZGV0YWNoXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0RWxlbWVudFRvcE9mZnNldCgpIHtcbiAgICAgICAgdGhpcy5hZGRVc2VyVG9wT2Zmc2V0KCk7XG4gICAgICAgIHRoaXMuYWRkV1BBZG1pbmJhclRvcE9mZnNldCgpO1xuICAgICAgICB0aGlzLmFkZFRvcGJhclRvcE9mZnNldCgpO1xuICAgICAgICB0aGlzLmFkZEhlYWRlclRvcE9mZnNldCgpO1xuICAgIH1cblxuICAgIGFkZFVzZXJUb3BPZmZzZXQoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldFNldHRpbmdzKFwib3B0aW9uc1wiKTtcbiAgICAgICAgY29uc3QgdXNlclRvcE9mZnNldCA9IE51bWJlci5wYXJzZUludChvcHRpb25zLmlzT2Zmc2V0KTtcblxuICAgICAgICBpZiAodXNlclRvcE9mZnNldCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5ib2R5LnNldEF0dHJpYnV0ZShcImRhdGEtb2Zmc2V0XCIsIHVzZXJUb3BPZmZzZXQpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFNldHRpbmdzKHtcbiAgICAgICAgICAgICAgICB0b3BPZmZzZXQ6IHVzZXJUb3BPZmZzZXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFdQQWRtaW5iYXJUb3BPZmZzZXQoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb3BPZmZzZXQgPSB0aGlzLmdldFNldHRpbmdzKFwidG9wT2Zmc2V0XCIpO1xuXG4gICAgICAgIGlmICghIXRoaXMuZWxlbWVudHMud3BBZG1pbmJhciAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IDYwMCkge1xuICAgICAgICAgICAgY29uc3Qgd3BBZG1pbmJhclRvcE9mZnNldCA9IE51bWJlci5wYXJzZUludCh0aGlzLmVsZW1lbnRzLndwQWRtaW5iYXIub2Zmc2V0SGVpZ2h0KTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTZXR0aW5ncyh7XG4gICAgICAgICAgICAgICAgdG9wT2Zmc2V0OiBjdXJyZW50VG9wT2Zmc2V0ICsgd3BBZG1pbmJhclRvcE9mZnNldCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkVG9wYmFyVG9wT2Zmc2V0KCkge1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuZ2V0U2V0dGluZ3MoKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHNldHRpbmdzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb3BPZmZzZXQgPSBzZXR0aW5ncy50b3BPZmZzZXQ7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzU3RpY2t5VG9wQmFyKSB7XG4gICAgICAgICAgICBjb25zdCB0b3BiYXJUb3BPZmZzZXQgPSBOdW1iZXIucGFyc2VJbnQodGhpcy5lbGVtZW50cy50b3BiYXIub2Zmc2V0SGVpZ2h0KTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTZXR0aW5ncyh7XG4gICAgICAgICAgICAgICAgdG9wT2Zmc2V0OiBjdXJyZW50VG9wT2Zmc2V0ICsgdG9wYmFyVG9wT2Zmc2V0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRIZWFkZXJUb3BPZmZzZXQoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb3BPZmZzZXQgPSB0aGlzLmdldFNldHRpbmdzKFwidG9wT2Zmc2V0XCIpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF0aGlzLmVsZW1lbnRzLmhlYWRlcj8uY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWwtaGVhZGVyXCIpICYmXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmhlYWRlcj8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZml4ZWQtc2Nyb2xsXCIpXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyVG9wT2Zmc2V0ID0gTnVtYmVyLnBhcnNlSW50KHRoaXMuZWxlbWVudHMuaGVhZGVyLm9mZnNldEhlaWdodCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U2V0dGluZ3Moe1xuICAgICAgICAgICAgICAgIHRvcE9mZnNldDogY3VycmVudFRvcE9mZnNldCArIGhlYWRlclRvcE9mZnNldCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5uZXcgT1dfU3RpY2tBbnl0aGluZ3MoKTtcbiJdfQ==
