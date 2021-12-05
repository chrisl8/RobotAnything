import UsbDevice from './UsbDevice.js';

const findUsbDevice = async ({
  logName,
  uniqueDeviceString,
  stringLocation,
}) => {
  console.log(`Finding ${logName}...`);
  const usbDevice = new UsbDevice(uniqueDeviceString, stringLocation);
  let usbDeviceName;
  try {
    usbDeviceName = await usbDevice.findDeviceName();
  } catch (e) {
    console.error(`Failed to find ${logName}.`);
  }
  return usbDeviceName;
};

export default findUsbDevice;
