import {FC} from "react";
import {v4 as uuidv4} from "uuid";
import style from './RoomFilter.module.scss'
import {clsx} from "clsx";

interface IRoomFilterProps {
    selectedRooms: any[];
    setSelectedRooms: (room: any) => void
}

export const RoomFilter: FC<IRoomFilterProps> = (
    {
        selectedRooms,
        setSelectedRooms,
    }
) => {

    const roomFilterSelect = [
        {
            id: uuidv4(),
            rooms: 1,
        },
        {
            id: uuidv4(),
            rooms: 2,
        },
        {
            id: uuidv4(),
            rooms: 3,
        },
        {
            id: uuidv4(),
            rooms: 4,
        },
    ];


    const selectedRoomsFunc = (room: any) => {
        setSelectedRooms((prev: any) => {
            if (prev.includes(room)) {
                return prev.filter((r: string) => r !== room)
            } else {
                return [...prev, room]
            }
        })
    }

    const resetRooms = () => {
        if (selectedRooms.length) setSelectedRooms([])
    }

    return (

        <div className={style.roomFilter}>
            <span className={style.roomFilter__title}>Количество комнат</span>

            <div className={style.roomFilterList}>
                <div className={clsx(style.roomFilterList__item)} onClick={() => resetRooms()}>
                    Любое
                </div>
                {roomFilterSelect.map((el: any) =>
                    <div
                        key={el.id}
                        onClick={() => selectedRoomsFunc(el.rooms)}
                        className={
                            clsx(
                                style.roomFilterList__item,
                                selectedRooms.includes(el.rooms) && style.active)
                        }
                    >
                        {el.rooms + 'K'}
                    </div>
                )}
            </div>
        </div>

    )
}