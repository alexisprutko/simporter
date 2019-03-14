import styled from 'styled-components'
import { Grid , Button} from '@material-ui/core'
import { media } from './mediaConfig'
import Colors from '../../constants/Colors'

export const Logo = styled.h1`
   color: ${Colors.mainBlue}
`

export const AbsoluteMenu = styled(Grid)`
   flex-wrap: nowrap;
`

export const InitialMenuGridElement = styled(Grid)`
   border-radius: 8px;
   max-width:352px !important;
   min-height: 152px;
   margin: 1% !important;
   background-color: ${props => props.active ? Colors.mainBlue : "#fff"};
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
