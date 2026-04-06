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
    const baseUrl = `${Host}/houseFloors/${id_house}`;

    const url = new URL(baseUrl);

    // Добавляем каждый room как отдельный параметр rooms[]
    rooms.forEach(room => {
        url.searchParams.append('rooms[]', room.toString());
    });

    // GET запрос (по умолчанию)
    return fetch(url.toString(), {
        headers: {
            'APPTOKEN': AppToken,
            'SUBDOMAIN': 'bestcon'
        }
    }).then(res => res.json());
}

export async function fetchHouseFloorTotals(id_house: string, floor: string) {
    const url = `${Host}/houseFloorTotals/${id_house}/${floor}`;
    return fetch(url, {
        headers: {
            'APPTOKEN': AppToken,
            'SUBDOMAIN': 'bestcon'
        }
    }).then(res => res.json());
}
