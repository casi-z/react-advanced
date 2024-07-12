import {FC, ReactChild, ReactNode} from 'react'

const { log } = console

interface SliderProps {
   children: ReactChild | ReactNode
   
   
}

const Slider: FC<SliderProps> = ({children}) => {

    return(

            <>{children}</>

    )
}
export default Slider