import React, {FC, useEffect, useState} from 'react'
import {useTheme} from '@mui/material'
import ItemCard from "@/components/ItemCard/ItemCard";
import {IProgram} from "@/types/types";


interface SitesProps {

    get?: 'popular' | 'illegal',
    data: IProgram[]

}

const Sites: FC<SitesProps> = ({get, data}) => {
    const theme = useTheme()


    const [filteredSites, setFilteredSites] = useState<IProgram[]>([]);

    function sortByTime(data: IProgram[]) {

        setFilteredSites(data.sort((a, b) => {

            // @ts-ignore
            if (a.time.all?.hours > a.time.all?.hours) {
                return -1
            }

            // @ts-ignore
            if (a.time.all?.hours < a.time.all?.hours) {
                return 1
            }

            return 0

        }))

    }

    useEffect(() => {

        if (get) {

            if (get === 'illegal') {
                const filt = data.filter(item => !item.legal)
                sortByTime(filt)

            } else if (get === 'popular') {

                sortByTime(data)

            }

        } else {
            setFilteredSites(data)
        }
    }, [data])

    return (
        <>
            {filteredSites.map((site, index) => (
                <>
                    <ItemCard key={index} title={site.name} info={site.time.all?.toString(1)}/>
                </>
            ))}

        </>
    )
}
export default Sites