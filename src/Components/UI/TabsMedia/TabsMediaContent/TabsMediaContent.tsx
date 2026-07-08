import {FC, useEffect} from "react";
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

    const tabsState: tabsMediaType[] = dataTabs.map(tab => ({
        ...tab,
        active: tab.params === activeTabFromUrl,
    }));

    useEffect(() => {
        if (!searchParams.get(tabTypesEnum.tab)) {
            setParams(activeTabFromUrl);
        }
    }, []);

    const setActiveTab = (id: string) => {
        const tab = dataTabs.find(tab => tab.id === id);
        setParams(tab ? tab.params : activeTabFromUrl);
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
