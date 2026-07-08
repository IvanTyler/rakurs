import {Suspense} from "react";

import {MediaSection} from "@/src/app/media/MediaSection/MediaSection";
import {MediaContent} from "@/src/app/media/MediaContent/MediaContent";
import {SetIntersectionPoint} from "@/src/app/home/SetIntersectionPoint/SetIntersectionPoint";


export default function Media() {
    return (
        <>
            <MediaSection />
            <Suspense fallback={<div>Загрузка параметров...</div>}>
                <MediaContent />
            </Suspense>
            <SetIntersectionPoint title="Получать самые свежие новости первым" />
        </>
    )
}
