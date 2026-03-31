import axios from "axios";
import {rubricsResponseType} from "@/src/Api/types/typesRubrics";
import {NewsResponse} from "@/src/Api/types/news";
import {Host} from "@/src/Api/Host";
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


type dataNews = {
    id_rubric: number[];
    limit?: number;
    page?: number;
}

export async function fetchNews({id_rubric, limit,
                                page}: dataNews): Promise<NewsResponse> {
    const url = `${Host}/entries/`;

    const response = await axios.get<NewsResponse>(
        url,
        {
            headers: {
                'APPTOKEN': AppToken,
                'SUBDOMAIN': 'bestcon'
            },
            params: {
                'id_rubric[]': id_rubric,
                orderBy: 'date_article DESC',
                limit: limit,
                page: page,
            }
        }
    );

    return response.data;
}
