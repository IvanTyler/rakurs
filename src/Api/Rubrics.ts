import {Host} from "@/src/Api/Host";
import axios from "axios";
import {rubricsResponseType} from "@/src/Api/types/typesRubrics";
import {AppToken} from "@/src/Api/AppToken";


export async function fetchRubrics(): Promise<rubricsResponseType> {
    const url = `${Host}/rubrics/`;

    const response = await axios.get<rubricsResponseType>(url, {
        headers: {
            'APPTOKEN': AppToken,
            'SUBDOMAIN': 'bestcon'
        }
    })

    return response.data
}


export async function fetchNews(arrayId: number[]): Promise<rubricsResponseType> {
    const url = `${Host}/entries/`;

    const params = new URLSearchParams();

    const ids = Array.isArray(arrayId) ? arrayId : [arrayId];
    ids.forEach(id => params.append('id_rubric[]', String(id)));
    params.append('orderBy', 'date_article DESC');


    const response = await axios.get<rubricsResponseType>(
        url,
        {
            headers: {
                'APPTOKEN': AppToken,
                'SUBDOMAIN': 'bestcon'
            }
        }
    );

    return response.data;
}
