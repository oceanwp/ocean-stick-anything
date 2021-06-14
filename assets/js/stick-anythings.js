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
      console.log(topOffset);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2Jhc2UvYmFzZS5qcyIsImFzc2V0cy9zcmMvanMvc3RpY2stYW55dGhpbmdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQU0sTztBQUlGLHFCQUFjO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQ1YsU0FBSyxNQUFMO0FBQ0EsU0FBSyxVQUFMO0FBQ0g7Ozs7V0FFRCw4QkFBcUI7QUFDakIsYUFBTyxFQUFQO0FBQ0g7OztXQUVELDhCQUFxQjtBQUNqQixhQUFPLEVBQVA7QUFDSDs7O1dBRUQsa0JBQVM7QUFDTCw2Q0FBaUIsS0FBSyxrQkFBTCxFQUFqQjs7QUFDQSxXQUFLLFFBQUwsR0FBZ0IsS0FBSyxrQkFBTCxFQUFoQjtBQUNIOzs7V0FFRCxzQkFBYSxDQUFFOzs7V0FFZix1QkFBd0I7QUFBQSxVQUFaLEdBQVksdUVBQU4sSUFBTTs7QUFDcEIsVUFBSSxDQUFDLENBQUMsR0FBTixFQUFXO0FBQ1AsZUFBTyx1Q0FBZSxHQUFmLENBQVA7QUFDSDs7QUFFRCxtQ0FBTyxJQUFQO0FBQ0g7OztXQUVELHVCQUEyQjtBQUFBLFVBQWYsUUFBZSx1RUFBSixFQUFJOztBQUN2QixVQUFJLENBQUMsUUFBTCxFQUFlO0FBQ1g7QUFDSDs7QUFFRCw2Q0FBaUIsTUFBTSxDQUFDLE1BQVAsdUJBQWMsSUFBZCxjQUE4QixRQUE5QixDQUFqQjtBQUNIOzs7Ozs7ZUFHVSxPOzs7Ozs7OztBQ3pDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNLGlCOzs7Ozs7Ozs7Ozs7O1dBQ0YsOEJBQXFCO0FBQ2pCLGFBQU87QUFDSCxRQUFBLFNBQVMsRUFBRTtBQUNQLFVBQUEsVUFBVSxFQUFFLGFBREw7QUFFUCxVQUFBLE1BQU0sRUFBRSxlQUZEO0FBR1AsVUFBQSxNQUFNLEVBQUU7QUFIRCxT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QUVBLFVBQUksT0FBTyxDQUFDLGVBQVosRUFBNkI7QUFDekIsWUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixZQUFyQyxDQUF4QjtBQUVBLGFBQUssV0FBTCxDQUFpQjtBQUNiLFVBQUEsU0FBUyxFQUFFLGdCQUFnQixHQUFHO0FBRGpCLFNBQWpCO0FBR0g7QUFDSjs7O1dBRUQsOEJBQXFCO0FBQ2pCLFVBQU0sZ0JBQWdCLEdBQUcsS0FBSyxXQUFMLENBQWlCLFdBQWpCLENBQXpCOztBQUVBLFVBQ0ksQ0FBQyxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLFNBQXJCLENBQStCLFFBQS9CLENBQXdDLGlCQUF4QyxDQUFELElBQ0EsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixTQUFyQixDQUErQixRQUEvQixDQUF3QyxjQUF4QyxDQUZKLEVBR0U7QUFDRSxZQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsUUFBUCxDQUFnQixLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLFlBQXJDLENBQXhCO0FBRUEsYUFBSyxXQUFMLENBQWlCO0FBQ2IsVUFBQSxTQUFTLEVBQUUsZ0JBQWdCLEdBQUc7QUFEakIsU0FBakI7QUFHSDtBQUNKOzs7O0VBOUcyQixnQjs7QUFpSGhDLElBQUksaUJBQUoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjbGFzcyBPV19CYXNlIHtcbiAgICAjc2V0dGluZ3M7XG4gICAgZWxlbWVudHM7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vbkluaXQoKTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFNldHRpbmdzKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdEVsZW1lbnRzKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgb25Jbml0KCkge1xuICAgICAgICB0aGlzLiNzZXR0aW5ncyA9IHRoaXMuZ2V0RGVmYXVsdFNldHRpbmdzKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSB0aGlzLmdldERlZmF1bHRFbGVtZW50cygpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7fVxuXG4gICAgZ2V0U2V0dGluZ3Moa2V5ID0gbnVsbCkge1xuICAgICAgICBpZiAoISFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiNzZXR0aW5nc1trZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuI3NldHRpbmdzO1xuICAgIH1cblxuICAgIHNldFNldHRpbmdzKHNldHRpbmdzID0ge30pIHtcbiAgICAgICAgaWYgKCFzZXR0aW5ncykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHRoaXMuI3NldHRpbmdzLCBzZXR0aW5ncyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPV19CYXNlO1xuIiwiaW1wb3J0IE9XX0Jhc2UgZnJvbSBcIi4vYmFzZS9iYXNlXCI7XG5cbmNsYXNzIE9XX1N0aWNrQW55dGhpbmdzIGV4dGVuZHMgT1dfQmFzZSB7XG4gICAgZ2V0RGVmYXVsdFNldHRpbmdzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VsZWN0b3JzOiB7XG4gICAgICAgICAgICAgICAgd3BBZG1pbmJhcjogXCIjd3BhZG1pbmJhclwiLFxuICAgICAgICAgICAgICAgIHRvcGJhcjogXCIjdG9wLWJhci13cmFwXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBcIiNzaXRlLWhlYWRlclwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9jZWFud3BMb2NhbGl6ZSxcbiAgICAgICAgICAgIHRvcE9mZnNldDogMCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0RWxlbWVudHMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IHRoaXMuZ2V0U2V0dGluZ3MoXCJzZWxlY3RvcnNcIik7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldFNldHRpbmdzKFwib3B0aW9uc1wiKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RpY2t5RWxlbWVudHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwob3B0aW9ucy5zdGlja0VsZW1lbnRzKSxcbiAgICAgICAgICAgICRzdGlja3lFbGVtZW50czogalF1ZXJ5KG9wdGlvbnMuc3RpY2tFbGVtZW50cyksXG4gICAgICAgICAgICB3cEFkbWluYmFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy53cEFkbWluYmFyKSxcbiAgICAgICAgICAgIHRvcGJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMudG9wYmFyKSxcbiAgICAgICAgICAgIGhlYWRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMuaGVhZGVyKSxcbiAgICAgICAgICAgIGJvZHk6IGRvY3VtZW50LmJvZHksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25Jbml0KCkge1xuICAgICAgICBzdXBlci5vbkluaXQoKTtcblxuICAgICAgICBpZiAoISF0aGlzLmVsZW1lbnRzLnN0aWNreUVsZW1lbnRzKSB7XG4gICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRUb3BPZmZzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFN0aWNreSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdFN0aWNreSgpIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLmdldFNldHRpbmdzKCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBzZXR0aW5ncy5vcHRpb25zO1xuICAgICAgICBjb25zdCB0b3BPZmZzZXQgPSBzZXR0aW5ncy50b3BPZmZzZXQ7XG5cbiAgICAgICAgY29uc29sZS5sb2codG9wT2Zmc2V0KTtcbiAgICAgICAgdGhpcy5lbGVtZW50cy4kc3RpY2t5RWxlbWVudHMuc3RpY2tfaW5fcGFyZW50KHtcbiAgICAgICAgICAgIG9mZnNldF90b3A6IHRvcE9mZnNldCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCEhb3B0aW9ucy51blN0aWNrICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IG9wdGlvbnMudW5TdGljaykge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy4kc3RpY2t5RWxlbWVudHMudHJpZ2dlcihcInN0aWNreV9raXQ6ZGV0YWNoXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0RWxlbWVudFRvcE9mZnNldCgpIHtcbiAgICAgICAgdGhpcy5hZGRVc2VyVG9wT2Zmc2V0KCk7XG4gICAgICAgIHRoaXMuYWRkV1BBZG1pbmJhclRvcE9mZnNldCgpO1xuICAgICAgICB0aGlzLmFkZFRvcGJhclRvcE9mZnNldCgpO1xuICAgICAgICB0aGlzLmFkZEhlYWRlclRvcE9mZnNldCgpO1xuICAgIH1cblxuICAgIGFkZFVzZXJUb3BPZmZzZXQoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldFNldHRpbmdzKFwib3B0aW9uc1wiKTtcbiAgICAgICAgY29uc3QgdXNlclRvcE9mZnNldCA9IE51bWJlci5wYXJzZUludChvcHRpb25zLmlzT2Zmc2V0KTtcblxuICAgICAgICBpZiAodXNlclRvcE9mZnNldCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5ib2R5LnNldEF0dHJpYnV0ZShcImRhdGEtb2Zmc2V0XCIsIHVzZXJUb3BPZmZzZXQpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFNldHRpbmdzKHtcbiAgICAgICAgICAgICAgICB0b3BPZmZzZXQ6IHVzZXJUb3BPZmZzZXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFdQQWRtaW5iYXJUb3BPZmZzZXQoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb3BPZmZzZXQgPSB0aGlzLmdldFNldHRpbmdzKFwidG9wT2Zmc2V0XCIpO1xuXG4gICAgICAgIGlmICghIXRoaXMuZWxlbWVudHMud3BBZG1pbmJhciAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IDYwMCkge1xuICAgICAgICAgICAgY29uc3Qgd3BBZG1pbmJhclRvcE9mZnNldCA9IE51bWJlci5wYXJzZUludCh0aGlzLmVsZW1lbnRzLndwQWRtaW5iYXIub2Zmc2V0SGVpZ2h0KTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTZXR0aW5ncyh7XG4gICAgICAgICAgICAgICAgdG9wT2Zmc2V0OiBjdXJyZW50VG9wT2Zmc2V0ICsgd3BBZG1pbmJhclRvcE9mZnNldCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkVG9wYmFyVG9wT2Zmc2V0KCkge1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuZ2V0U2V0dGluZ3MoKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHNldHRpbmdzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb3BPZmZzZXQgPSBzZXR0aW5ncy50b3BPZmZzZXQ7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzU3RpY2t5VG9wQmFyKSB7XG4gICAgICAgICAgICBjb25zdCB0b3BiYXJUb3BPZmZzZXQgPSBOdW1iZXIucGFyc2VJbnQodGhpcy5lbGVtZW50cy50b3BiYXIub2Zmc2V0SGVpZ2h0KTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTZXR0aW5ncyh7XG4gICAgICAgICAgICAgICAgdG9wT2Zmc2V0OiBjdXJyZW50VG9wT2Zmc2V0ICsgdG9wYmFyVG9wT2Zmc2V0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRIZWFkZXJUb3BPZmZzZXQoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb3BPZmZzZXQgPSB0aGlzLmdldFNldHRpbmdzKFwidG9wT2Zmc2V0XCIpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF0aGlzLmVsZW1lbnRzLmhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbC1oZWFkZXJcIikgJiZcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyhcImZpeGVkLXNjcm9sbFwiKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlclRvcE9mZnNldCA9IE51bWJlci5wYXJzZUludCh0aGlzLmVsZW1lbnRzLmhlYWRlci5vZmZzZXRIZWlnaHQpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFNldHRpbmdzKHtcbiAgICAgICAgICAgICAgICB0b3BPZmZzZXQ6IGN1cnJlbnRUb3BPZmZzZXQgKyBoZWFkZXJUb3BPZmZzZXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubmV3IE9XX1N0aWNrQW55dGhpbmdzKCk7XG4iXX0=
