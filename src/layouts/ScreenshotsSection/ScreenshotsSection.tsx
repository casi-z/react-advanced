import {FC, ReactChild, useState} from 'react'
import {Dialog, DialogContent, Grid, ImageList, ImageListItem, ImageListItemBar, Paper} from '@mui/material'
import IconButton from "@mui/material/IconButton";
import InfoIcon from '@mui/icons-material/Info';
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const {log} = console

interface ScreenshotsSectionProps {

    children?: ReactChild,

}


const ScreenshotsSection: FC<ScreenshotsSectionProps> = ({children}) => {

    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            author: '@bkristastucchio',
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
            author: '@rollelflex_graphy726',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
            author: '@helloimnik',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            author: '@nolanissac',
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            author: '@hjrc33',
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            author: '@arwinneil',
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
            author: '@tjdragotta',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
            author: '@katie_wasserman',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
            author: '@silverdalex',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
            author: '@shelleypauls',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
            author: '@peterlaster',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
            author: '@southside_customs',
            cols: 2,
        },
    ];


    const [openScreenshot, setOpenScreenshot] = useState<string>('');

    function handleClose() {
        setOpenScreenshot('')
    }

    function handleOpen(src: string) {
        setOpenScreenshot(src)
    }


    return (
        <Paper sx={{'width': '100%'}}>
            <Dialog
                PaperProps={{
                    sx: {
                        m: 0,
                        width: {md: '40vw', xs: '100%'},
                        height: '40vh'
                    }
                }}
                open={!!openScreenshot}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <DialogContent
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 0,
                        'img': {
                            width: {md: '90%', xs: '100%'},
                            height: {md: '90%', xs: '100%'},
                        }
                    }}>
                    <img

                        srcSet={`${openScreenshot}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${openScreenshot}?w=248&fit=crop&auto=format`}
                        alt={'Loading failed :('}
                        loading="lazy"
                    />
                </DialogContent>
            </Dialog>

            <Grid container item xs={12} pl={2} pr={2}>

                <ImageList sx={{width: '100%'}}>

                    <ImageListItem key="Header" cols={2}>

                        <SectionTitle>Скриншоты</SectionTitle>

                    </ImageListItem>

                    {itemData.map((item) => (

                        <ImageListItem sx={{overflow: 'hidden', cursor: 'pointer'}} key={item.img}
                                       onClick={() => handleOpen(item.img)}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                actionIcon={
                                    <IconButton
                                        sx={{color: 'rgba(255, 255, 255, 0.54)'}}
                                        aria-label={`info about ${item.title}`}
                                    >
                                        <InfoIcon/>
                                    </IconButton>
                                }
                            />
                        </ImageListItem>

                    ))}

                </ImageList>

            </Grid>

        </Paper>
    )
}
export default ScreenshotsSection