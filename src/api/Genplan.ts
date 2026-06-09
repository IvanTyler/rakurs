import {Host} from "@/src/api/Host";
import {AppToken} from "@/src/api/AppToken";
import axios from "axios";
import {GenolanDataType, GenplanDataSchema, HouseFloorsType, houseTotalsResponse} from "@/src/api/types/typesGenplan";


export async function fetchGenplan() {
    const url = `${Host}/appPage/genplan`;

    const response = await axios.get<GenolanDataType>(url, {
        headers: {
            'APPTOKEN': AppToken,
            'SUBDOMAIN': 'bestcon'
        }
    })

    return GenplanDataSchema.parse(response.data);
}

export async function fetchHouseTotals(code: string) {
    const url = `${Host}/houseTotals/${code}`;

    const response = await axios.get<houseTotalsResponse>(url, {
        headers: {
            'APPTOKEN': AppToken,
            'SUBDOMAIN': 'bestcon'
        }
    });

    return response.data; // axios автоматически парсит JSON
}

export async function fetchHouseFloors(id_house: string) {
    const url = `${Host}/houseFloors/${id_house}`;

    const response = await axios.get<HouseFloorsType>(url, {
        headers: {
            'APPTOKEN': AppToken,
            'SUBDOMAIN': 'bestcon'
        }
    })

    return response.data;
}

export async function fetchHouseFloorsFilterRooms(id_house: string, rooms: number[]) {
    const params = new URLSearchParams();
    rooms.forEach(room => params.append('rooms[]', room.toString()));

    const response = await axios.get(`${Host}/houseFloors/${id_house}`, {
        params,
        headers: {
            'APPTOKEN': AppToken,
            'SUBDOMAIN': 'bestcon'
        }
    });

    return response.data;
}

export async function fetchHouseFloorTotals(id_house: string, floor: string) {
    const response = await axios.get(`${Host}/houseFloorTotals/${id_house}/${floor}`, {
        headers: {
            'APPTOKEN': AppToken,
            'SUBDOMAIN': 'bestcon'
        }
    });

    return response.data;
}
