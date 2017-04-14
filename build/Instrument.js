'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var c9m = require('c9m');

var ServerMonitor = function (_c9m$Instrument) {
  _inherits(ServerMonitor, _c9m$Instrument);

  function ServerMonitor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ServerMonitor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ServerMonitor.__proto__ || Object.getPrototypeOf(ServerMonitor)).call.apply(_ref, [this].concat(args))), _this), _this.name = 'server-monitor', _this.server = true, _this.sensors = ['c9m-sensor-disk-usage', 'c9m-sensor-system-memory'], _temp), _possibleConstructorReturn(_this, _ret);
  }

  return ServerMonitor;
}(c9m.Instrument);

module.exports = ServerMonitor;