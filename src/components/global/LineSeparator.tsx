import React from 'react'

type LineSeparatorProps = {
  type: string
}

const LineSeparator = ({ type }: LineSeparatorProps) => {
  return (
    <div className={`h-px w-full bg-black/10`}>
      <div className={`h-full w-20 bg-black`}></div>
    </div>
  )
}

export default LineSeparator