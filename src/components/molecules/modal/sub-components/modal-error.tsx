import React, { CSSProperties } from 'react'
import ErrorIcon from '@mui/icons-material/ErrorOutline'
import styleOverider from 'utils/style-overider'
import { Card } from '../../card'
import styles from '../modal.style'
import Typography from '@mui/material/Typography'
import { Button } from 'components/atoms/button'

interface TProps {
  style?:CSSProperties,
  show?:boolean,
  onClose:() => void,
  errorMessage:string
}
const ModalError:React.FC<TProps> = ({
  style,
  show = true,
  onClose,
  errorMessage
}) => {
  return show ? (
    <Card style={styleOverider(styles.containerStyle, style)}>
      <div style={styles.errorContentStyle}>
        <ErrorIcon htmlColor='red' style={styles.errorIconStyle} />
        <Typography style={styles.errorMessageStyle} variant='subtitle1'>
          {errorMessage}
        </Typography>
        <Button style={styles.buttonError} onClick={() => onClose()}>
          Close
        </Button>
      </div>
    </Card>
  ): null
}
export default ModalError