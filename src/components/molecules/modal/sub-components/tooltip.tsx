import React from 'react'
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'

const TooltipStyled:React.FC<TooltipProps> = ({ className, ...props }) => (
  <Tooltip 
    classes={{ popper:className }}
    {...props} 
  />
)
const HtmlTooltip = styled(TooltipStyled)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))
const TooltipComponent:React.FC<TooltipProps> = ({ children, title, ...props }) => {
  return (
    <HtmlTooltip title={title} {...props}>
      {children}
    </HtmlTooltip>
  )
}
export default TooltipComponent