import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Button } from '../ui/button';
import Link from 'next/link';
function Cart() {
  return (
    <div>
        <Button size="icon" className='bg-transparent dark:hover:bg-gray-900'><Link href='/cart'><FaShoppingCart className='text-blue-400 '/></Link></Button>
    </div>
  )
}

export default Cart
