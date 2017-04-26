const c9m = require('c9m');

class ServerMonitor extends c9m.Instrument {

  constructor () {
    super();

    this.name = 'server-monitor';

    this.global = true;

    this.sensors = [
      'c9m-sensor-system-info',
      'c9m-sensor-disk-usage',
      'c9m-sensor-system-memory'
    ];
  }
}

module.exports = ServerMonitor;