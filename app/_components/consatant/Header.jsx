import { Button } from '@/components/ui/button'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-5'>
      <h1>
        Expense Tracker
      </h1>
      <Button >
        Click To Add Expense
      </Button>
    </div>
  )
}

export default Header
