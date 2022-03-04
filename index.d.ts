declare module '\*.svg' {
  import React = require('react')
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare module '\*.jpg' {
  const content: string
  export default content
}

declare module '\*.png' {
  const content: string
  export default content
}
declare module '\*.mp3' {
  const content: string
  export default content
}

declare module '\*.css' {
  const content: string
  export default content
}
declare module '\*.scss' {
  const content: string
  export default content
}