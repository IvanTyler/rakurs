import { Host } from "@/src/api/Host";
import { AppToken } from "@/src/api/AppToken";
import axios from "axios";
import { SliderMenuResponse, SliderMenuResponseSchema } from "@/src/api/types/typesSliderMenu";

export async function fetchSliderMenu() {
    const url = `${Host}/appBlock/menu`;

    const response = await axios.get<SliderMenuResponse>(url, {
        headers: {
            'APPTOKEN': AppToken,
            'SUBDOMAIN': 'bestcon'
        }
    });

    return SliderMenuResponseSchema.parse(response.data);
}
