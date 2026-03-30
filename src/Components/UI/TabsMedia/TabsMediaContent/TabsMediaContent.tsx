import {FC, useEffect, useState} from "react";
import {tabsMediaType} from "@/src/Components/UI/TabsMedia/type";
import style from "@/src/Components/UI/TabsMedia/TabsMedia.module.scss";
import {ListItems} from "@/src/Components/List/ListItems";
import {TabsMediaItem} from "@/src/Components/UI/TabsMedia/TabsMediaItem/TabsMediaItem";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {clsx} from "clsx";
import {tabTypesEnum} from "@/src/app/media/types/enums";

interface TabsMediaProps {
    classNameTabs?: string;
    dataTabs: tabsMediaType[]
}

export const TabsMediaContent: FC<TabsMediaProps> = ({classNameTabs, dataTabs}) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const activeTabFromUrl = searchParams.get(tabTypesEnum.tab) || dataTabs[0]?.params;
    const [tabsState, setTabsState] = useState<tabsMediaType[]>(() => {
        return dataTabs.map(tab => ({
            ...tab,
            active: tab.params === activeTabFromUrl,
        }));
    });

    useEffect(() => {
        const activeTab = tabsState.find(tab => tab.active);

        !activeTab ?
            setParams(activeTabFromUrl) :
            setParams(activeTab.params);
    }, []);

    const setActiveTab = (id: string) => {
        setTabsState(prev => prev.map((tab: tabsMediaType) => {
            return {
                ...tab,
                active: tab.id === id,
            }
        }))

        const activeTab = tabsState.find(tab => tab.id === id);

        !activeTab ?
            setParams(activeTabFromUrl) :
            setParams(activeTab.params);
    };


    function setParams(nameParams: string) {
        const params = new URLSearchParams(searchParams);

        params.set(tabTypesEnum.tab, nameParams.toLowerCase());
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return (
        <ul className={clsx(style.tabsMedia, classNameTabs)}>
            <ListItems
                items={tabsState}
                renderItem={(item: tabsMediaType) =>
                    <TabsMediaItem key={item.id} item={item} setActiveTab={setActiveTab}/>
                }
            />
        </ul>
    )
}
