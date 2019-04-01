import { keyframes } from 'styled-components'

export const mainAnimation = keyframes`
    0%{
        opacity: 0;
        transform: translateY(30px)
    }
    100%{
        opacity: 1;
        transform: translateY(0px)
    }
`

export const alertAnimationDesktop = keyframes`
    0%{
        opacity: 0;
        transform: translateX(200px)
    }
    20%%{
        opacity: 0.8;
    }
    100%{
        opacity: 1;
        transform: translateX(0px)
    }
`
export const alertAnimationMobile = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-50px)
    }
    20%%{
        opacity: 0.8;
    }
    100%{
        opacity: 1;
        transform: translateY(0px)
    }
`