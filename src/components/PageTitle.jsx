import { cn } from '@/lib/utils';
import React from 'react'

const PageTitle = ({title, classname}) => {
  return (
      <h1 className={cn("text-2xl font-semibold", classname)}>{title}</h1>
  )
}

export default PageTitle;