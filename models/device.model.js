const DeviceType = require('./device-type.enum');

let deviceIndexDb = 1;
const devicesDb = {};

class Device {

  constructor() {
    this.id = null;
    this.name = '';
    this.type = DeviceType.LAMP;
  }

  static create(device) {
    device.id = deviceIndexDb++;
    devicesDb[device.id] = device;
  }

  static getById(id) {
    return devicesDb[id];
  }

  static update(device) {
    return devicesDb[device.id] = device;
  }

  static delete(id) {
    return delete devicesDb[id];
  }

  static getAll() {
    return Object.values(devicesDb);
  }

}

module.exports = Device;
