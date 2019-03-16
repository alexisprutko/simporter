import styled from 'styled-components'
import { Grid, Button, ListItem, Paper } from '@material-ui/core'
import { media } from './mediaConfig'
import Colors from '../../constants/Colors'
import { mainAnimation } from './animation'

// logo
export const Logo = styled.h1`
   color: ${Colors.mainBlue};
   padding-left: 56px;
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
   border-color: ${props => props.selected ? Colors.mainBlue : 'transparent'}
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
   font-weight: ${props => props.weight ? props.weight : 'normal'}
`

export const Separator = styled.div`
   height: ${props => props.vertical ? props.vertical: '10px'};
   width: ${props => props.horizontal ? props.horizontal: '0px'};
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