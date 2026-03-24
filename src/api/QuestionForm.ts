import {validateResponse} from "@/src/Api/ValidateResponse";


type QuestionFormType = {
    name: string,
    phone: string,
    email: string,
}

export async function questionForm(data: QuestionFormType): Promise<void> {
    // const response = await fetch('https://planetarf.ru/api/send.php', {
    //     method: 'POST',
    //     headers: {
    //         'Content-type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         data
    //     })
    // })
    //
    // await validateResponse(response)
    // return undefined;
}