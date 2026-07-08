import axios from "axios";
import {Host} from "@/src/api/Host";
import {AppToken} from "@/src/api/AppToken";
import {ConstructionDetailsSchema, ConstructionDetailsType} from "@/src/api/types/typesConstructionDetails";

export async function fetchConstructionDetails() {
    const url = `${Host}/appPage/construction-details`;

    const response = await axios.get<ConstructionDetailsType>(url, {
        headers: {
            'APPTOKEN': AppToken,
            'SUBDOMAIN': 'bestcon'
        }
    });

    return ConstructionDetailsSchema.parse(response.data);
}
