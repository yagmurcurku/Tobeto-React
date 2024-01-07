import React from 'react'
import { MenuItem, Menu, Container } from 'semantic-ui-react'

export default function Categories() {
  return (
    <div>
      <Container>
      <Menu pointing vertical>
        <MenuItem
          name='home'
        />
        <MenuItem
          name='messages'
        />
        <MenuItem
          name='friends'
        />
      </Menu>
      </Container>
    </div>
  )
}
