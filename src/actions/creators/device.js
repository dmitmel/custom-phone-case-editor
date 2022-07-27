import {
  SELECT_DEVICE_MANUFACTURER,
  SELECT_DEVICE_MODEL,
} from '../types/device';

export function selectDeviceManufacturer(manufacturer) {
  return { type: SELECT_DEVICE_MANUFACTURER, manufacturer };
}

export function selectDeviceModel(model) {
  return { type: SELECT_DEVICE_MODEL, model };
}
