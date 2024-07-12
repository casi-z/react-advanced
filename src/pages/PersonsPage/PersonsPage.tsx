import React, {FC, ReactChild} from 'react'

import Page from "@/components/Page/Page";

interface PersonsPageProps {

    children?: ReactChild,

}

const PersonsPage: FC<PersonsPageProps> = ({children}) => {


    return (
        <Page title={'Тестовая страница'}>

        </Page>
    )
}
export default PersonsPage
