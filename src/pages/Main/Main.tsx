import React, {FC, lazy, Suspense, useState} from 'react'
import Typewriter from 'typewriter-effect'
import Page from '@/components/Page/Page'
import {Box, Grid, styled, Typography} from "@mui/material";
import {SwiperSlide} from "swiper/react";

interface MainProps {

}

const Main: FC<MainProps> = () => {


    // @ts-ignore
    const LazyRenderCanvas = lazy(() => import('../../components/RenderCanvas'))

    const Box3D = styled(Box)(({theme}) => ({
        height: '100vh'
    }))


    const BoxWriter = styled(Box)(({theme}) => ({
        position: 'absolute',
        fontSize: '48px',
        zIndex: 10,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        top: '50%',
        // left: '40%'
    }))

    const [state, setState] = useState({
        isLoading: false,
        isError: false
    })
    const [skills, setSkills] = useState([])

    // const repos = makeRemoteRepos()
    // const readme = makeDownloadReadMe()
    //
    // const getReposContents = async (name) => {
    //     await repos.getReposContents(name)
    //         .then(data => {
    //             if (data.some(repo => repo.name === 'README.md')) {
    //                 readme.download(name)
    //                     .then(text => {
    //                         if (text.includes('<img')) {
    //                             getImages(text)
    //                         } else {
    //                             console.log(`${name} - YES, IMG - NO`)
    //                         }
    //                     })
    //                     .catch(error => console.log(error))
    //
    //             } else {
    //                 console.log(`${name} - NO`)
    //             }
    //         })
    //         .catch(error => console.log(error))
    // }
    //
    // const getImages = (content) => {
    //     const indTagImg = content.indexOf('<img')
    //     if (indTagImg !== -1) {
    //         const imgList = content.substring(indTagImg)
    //         imgList.split('<img').forEach(img => {
    //             const pathImg = img.substring(img.indexOf('https'), img.indexOf('.svg') + 4)
    //             const name = img.substring(img.indexOf('title="') + 7, img.indexOf('" width='))
    //             if (name) {
    //                 if (!skills.some(tech => tech.name === name)) {
    //                     setSkills([...skills, {name, img: pathImg}])
    //                 }
    //             }
    //         })
    //     }
    // }
    //
    // useEffect(() => {
    //     setState({...state, isLoading: true})
    //     repos.getAll()
    //         .then(data => {
    //             data.forEach(item => {
    //                 if (item.name !== 'mymspuz') {
    //                     getReposContents(item.name)
    //                 }
    //             })
    //             setState({...state, isLoading: false})
    //         })
    //         .catch(error => console.log(error))
    // }, [])

    // @ts-ignore
    // @ts-ignore
    return (
        <Page>
            <SwiperSlide>
                <Grid item xs={12} sx={{height: '100%', position: 'relative'}}>
                    <BoxWriter>
                        <span>
                            <Typewriter
                              options={{cursor: '_'}}
                              onInit={(tw) => {
                                  tw
                                      .pauseFor(100)
                                      .typeString('I defe')
                                      .pauseFor(50)
                                      .deleteChars(2)
                                      .typeString('veloper Pyth')
                                      .pauseFor(100)
                                      .deleteChars(4)
                                      .typeString('JS')
                                      .start()
                              }}
                            />
                        </span>
                    </BoxWriter>
                    <Box3D>
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyRenderCanvas/>
                        </Suspense>
                    </Box3D>

                </Grid>
            </SwiperSlide>
            <SwiperSlide style={{display: 'flex', }}>
                <Typography variant={'h2'}>dfdfdf</Typography>
            </SwiperSlide>

        </Page>
    )
}
export default Main