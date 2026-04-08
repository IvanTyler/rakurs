import Image from "next/image";
import {RakursPromo} from "@/src/app/home/RakursPromo/RakursPromo";
import {Location} from "@/src/app/home/Location/Location";
import {PerspectiveArchitecture} from "@/src/app/home/PerspectiveArchitecture/PerspectiveArchitecture";
import {GeometryRakurs} from "@/src/app/home/GeometryRakurs/GeometryRakurs";
import {BuildingVisualization} from "@/src/app/home/BuildingVisualization/BuildingVisualization";
import {ImprovementRakurs} from "@/src/app/home/ImprovementRakurs/ImprovementRakurs";
import {Infrastructure} from "@/src/app/home/Infrastructure/Infrastructure";
import {TerraceSilence} from "@/src/app/home/TerraceSilence/TerraceSilence";
import {BiophilicLandscaping} from "@/src/app/home/BiophilicLandscaping/BiophilicLandscaping";
import {PlantsTerritoryRakurs} from "@/src/app/home/PlantsTerritoryRakurs/PlantsTerritoryRakurs";
import {RakursConcept} from "@/src/app/home/RakursConcept/RakursConcept";
import {Lobby} from "@/src/app/home/Lobby/Lobby";
import {Kindergarten} from "@/src/app/home/Kindergarten/Kindergarten";
import {ApartmentsFromStudios} from "@/src/app/home/ApartmentsFromStudios/ApartmentsFromStudios";
import {PointsInterest} from "@/src/app/home/PointsInterest/PointsInterest";
import {FloorsPlans} from "@/src/app/home/FloorPlans/FloorPlans";
import {AdditionalPremises} from "@/src/app/home/AdditionalPremises/AdditionalPremises";
import {SetIntersectionPoint} from "@/src/app/home/SetIntersectionPoint/SetIntersectionPoint";
import {PreloaderPage} from "@/src/Components/UI/PreloaderPage/PreloaderPage";
import {Genplan} from "@/src/Components/features/Genplan/Genplan";

export default function Home() {
    return (
        <>
            <PreloaderPage/>
            <RakursPromo/>
            <RakursConcept/>
            <Location/>
            <PerspectiveArchitecture/>
            <GeometryRakurs/>
            <BuildingVisualization/>
            <ImprovementRakurs/>
            <Infrastructure/>
            <TerraceSilence/>
            <BiophilicLandscaping/>
            <PlantsTerritoryRakurs/>
            <Lobby/>
            <Kindergarten/>
            <ApartmentsFromStudios/>
            <PointsInterest/>
            <FloorsPlans/>
            <Genplan/>
            <AdditionalPremises/>
            <SetIntersectionPoint/>
        </>
    );
}
