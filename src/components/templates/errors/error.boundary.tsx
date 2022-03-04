import React, { ErrorInfo, Fragment, ReactNode } from 'react'
import { Button } from 'reactstrap'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Fragment>
          <h1>{'Oops, There\'s Something error, please check your console.'}</h1>
          <Button className='ml-2' 
            onClick={() => {
              window.location.href = '/'
            }} 
            color='primary'
          >
            {'Back to Home'}
          </Button>
        </Fragment>
      )
    }
    if (this.state.hasError) {
      return <h1>Sorry.. there was an error</h1>
    }

    return (
      <React.StrictMode>
        {this.props.children}
      </React.StrictMode>
    )
  }
}

export default ErrorBoundary