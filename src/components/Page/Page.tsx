import {FC, ReactChild, ReactNode, useEffect} from 'react'
import {Swiper} from 'swiper/react';
import {Pagination, Parallax} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface PageProps {

    children: ReactChild | ReactNode,
    title?: string

}

const Page: FC<PageProps> = ({children, title}) => {

    const drawerWidth = 290

    useEffect(() => {

        if (title) {
            document.title = title
        }

    }, [])


    return (


            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                mousewheel={true}
                modules={[Pagination, Parallax]}
                className="mySwiper"
            >

                {children}
            </Swiper>


    )
}
export default Page