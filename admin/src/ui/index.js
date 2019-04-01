import styled from 'styled-components'
import { Grid, Button, ListItem, Paper } from '@material-ui/core'
import { media } from './mediaConfig'
import Colors from '../../constants/Colors'
import { mainAnimation, alertAnimationDesktop, alertAnimationMobile } from './animation'


// logo
export const Logo = styled.h1`
   color: ${Colors.mainBlue};
   padding-left: 56px;
   padding-top: 20px;
   cursor: pointer;
   height: 50px;
`
// avatar menu

export const AbsoluteMenu = styled(Grid)`
   flex-wrap: nowrap;
`

export const InitialMenuGridElement = styled(Grid)`
   border-radius: 8px;
   max-width:352px !important;
   min-height: 152px;
   margin: 1% !important;
   background-color: ${props => props.active ? Colors.mainBlue : Colors.white};
   cursor: pointer;
`
export const InitialMenuButton = styled(Button)`
   &:hover{
      background-color: transparent !important;
   }
`

export const CategoryBox = styled.div`
   display: flex;
   justify-content: center;
`
export const LeftNavigationListItem = styled(ListItem)`
   background-color: ${props => props.selected ? Colors.liteBlue : Colors.white} !important;
   border-left: 4px solid;
   border-color: ${props => props.selected ? Colors.mainBlue : 'transparent'};
   margin-top: 24px;
`
export const LeftNavigationListItemText = styled.span`
   color: ${props => props.selected ? Colors.mainBlue : Colors.mainGrey};
`
export const BackLink = styled.div`
   color: ${Colors.textBlue};
   display: flex;
   justify-content: flex-start;
   align-items: center;
   line-height : 24px;
   font-size: 14px;
   cursor: pointer;

`

export const SmallDishBox = styled(Paper)`
   ${media.phone`width: 200px`}
   width: 300px;
   min-height: 112px;
   padding: 1rem 1.5rem;
   cursor: pointer;
`

export const TextSpan = styled.span`
   font-family: Ubuntu;
   font-size: ${props => props.size ? props.size : "1rem"};
   color: ${props => props.color ? props.color : Colors.mainGrey};
   font-weight: ${props => props.weight ? props.weight : 'normal'};
   line-height: ${props => props.lineHeight ? props.lineHeight : 'auto'};
`

export const Separator = styled.div`
   height: ${props => props.vertical ? props.vertical : '10px'};
   width: ${props => props.horizontal ? props.horizontal : '0px'};
   display: flex;
   align-items: center;
`

export const AnimationBox = styled(Grid)`
   opacity: 0;
   animation: ${mainAnimation} 0.3s 1 ease-in-out forwards;
`

export const DialogueCardHeader = styled(Grid)`
   background-color: ${props => props.color ? props.color : 'red'};  
   border-top-left-radius: 8px;
   border-top-right-radius: 8px;
   flex-wrap: wrap;
   width: 480px !important;
   height: 112px !important;
   padding-left: 32px !important;
`
export const DialogueCardBody = styled(Grid)`
   background-color: ${props => props.color ? props.color : 'red'};
   border-bottom-left-radius: 8px;
   border-bottom-right-radius: 8px;
   flex-wrap: wrap;
   width: 480px !important;
  padding-bottom: 20px;
   padding-left: 32px !important;         
`
export const CardIconBox = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 20px;
   background-color: ${Colors.white};
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   top: 15%;
   right: 2%;
`
export const TextParagraph = styled.p`
   max-width:${props => props.width ? props.width : "auto"};
   font-family: Ubuntu;
   font-size: ${props => props.size ? props.size : "1rem"};
   color: ${props => props.color ? props.color : Colors.mainGrey};
   font-weight: ${props => props.weight ? props.weight : 'normal'};
   line-height: ${props => props.lineHeight ? props.lineHeight : 'auto'};
`

export const RoundButton = styled.div`
   background-color: ${props => props.color ? props.color : Colors.mainGrey};
   width: 190px;
   border-radius: 26px;
   min-height: 48px;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   transition: all 0.3s ease;
   &:hover{
      opacity: 0.7;
   }

`
export const ActiveHeaderItemBox = styled.div`
   background-color: ${props => props.color ? props.color : Colors.mainGrey};
   border-radius: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   transition: all 0.3s ease;
   padding: 5px 15px;
   &:hover{
      opacity: 0.7;
   }

`
export const SmallSquareBox = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   min-height: 38px;
   min-width: 38px;
   border-radius: 10%;
   background-color: ${props => props.bColor ? props.bColor : Colors.mainBlue}
`
export const GreenBorderBox = styled.div`
   border: 1px solid ${Colors.lightGreen};
   border-radius: 4px;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   min-height: 40px;
   min-width: 100px;
`
export const RectangleDish = styled(Paper)`
   width: 352px;
   height:152px;
   margin: 1.3%;
   margin-left: 0;
   background-color: ${ props => props.active ? Colors.mainBlue : Colors.white} !important;
   cursor: pointer;
`
export const NumTexSpan = styled(TextSpan)`
   position: absolute;
   top: 5%;
   left:2%;
   opacity: 0.5
`

export const TableBox = styled(Grid)`
   max-width: 992px;
   width: 60%;

`
export const ImageBox = styled.div`
   width: 286px;
   height: 227px;
   background-image: url(${props => props.image});
   background-repeat: no-repeat;
   background-size: cover;
`
export const ProductCardBox = styled(Grid)`
   margin: ${props => props.margin ? props.margin : 0};
   padding: ${props => props.padding ? props.padding : 0};
   width: 480px;
   height: 580px;
`
export const TextBox = styled.span`
   padding: 5px 20px;
   background-color: ${Colors.paleBlue};
   border-radius: 8px;
`
export const PercentItemBox = styled(Grid)`
   width: 540px !important;
   height: 47px !important; 
   border-color:  ${props => props.bordercolor ?  props.bordercolor : "red"} !important;
   border-width: 1px;
   border-style: solid;
   border-radius: 4px; 
   box-sizing: border-box; 
   margin-top: 23px
`

export const FormPaper = styled(Paper)`
   padding: 2%;
   min-width: 500px;
   ${media.phone`min-width: 300px;` }
   ${media.tablet`min-width: 320px;` }
`
export const AlertComponentBox =  styled(Paper)`
   display: ${props => props.active  ? "block" : 'none'};
   position:  fixed;
   padding-left: 1.5%;
   padding-right: 1.5%;
   top:  20px;
   right: 20px;
   width: 30%;
   max-width: 600px;
   height: 50px;
   ${media.tablet`min-width: 100%; top: 0;right: 0; animation: ${alertAnimationMobile} 0.3s 1 ease-out forwards`}
   ${media.phone`min-width: 100%; top: 0; right: 0`}
   background-color:  ${props => props.type === 'error' ? Colors.mainError : props.type === 'success' ? Colors.mainSuccess : Colors.mainWarring } !important;  
   animation: ${alertAnimationDesktop} 0.3s 1 ease-out forwards;

`