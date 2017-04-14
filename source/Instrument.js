const c9m = require('c9m');

class ServerMonitor extends c9m.Instrument {

  name = 'server-monitor';

  server = true;

  sensors = [
    'c9m-sensor-disk-usage',
    'c9m-sensor-system-memory'
  ];
}

module.exports = ServerMonitor;