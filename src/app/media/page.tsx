import {Suspense} from "react";

import {MediaSection} from "@/src/app/media/MediaSection/MediaSection";
import {MediaContent} from "@/src/app/media/MediaContent/MediaContent";


export default function Media() {
    return (
        <>
            <MediaSection />
            <Suspense fallback={<div>Загрузка параметров...</div>}>
                <MediaContent />
            </Suspense>
        </>
    )
}
