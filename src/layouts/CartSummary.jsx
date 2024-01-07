import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownItem,
  Dropdown,
  DropdownDivider,
  Label
} from 'semantic-ui-react'

export default function CartSummary() {

  const {cartItems} = useSelector(state => state.cart)

  return (
    <div>
      <Dropdown item text='Sepetiniz'>
        <DropdownMenu>
          {
            cartItems.map((cartItem) => (
              <DropdownItem key={cartItem.product.id}>
                {cartItem.product.plate}
                <Label>
                  {cartItem.quantity}
                </Label>
              </DropdownItem>
            ))
          }
          <DropdownDivider></DropdownDivider>
          <DropdownItem as={NavLink} to="/cart">Sepete Git</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
