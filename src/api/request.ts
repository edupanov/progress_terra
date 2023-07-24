import {Config} from "./config";

export const requestData = {
    idClient: Config.ID_CLIENT,
    accessToken: "",
    paramName: "device",
    paramValue: Config.DEVICE_ID,
    latitude: 0,
    longitude: 0,
    sourceQuery: 0
}

export const headers = {
    'Content-Type': 'application/json',
    'AccessKey': Config.ACCESS_KEY,
}