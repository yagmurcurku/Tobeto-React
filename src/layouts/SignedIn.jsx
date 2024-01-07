import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, MenuItem, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
        <MenuItem>
            <Image avatar spaced="right" src="https://media.licdn.com/dms/image/C4D03AQGAAzIReqXMmA/profile-displayphoto-shrink_800_800/0/1659395188731?e=2147483647&v=beta&t=ETGdCMPJ_nPDCBxOqA2sJUcKhrRyKd5QJaz6MUOGiRk"></Image>
            <Dropdown pointing="top left" text='Yagmur Çurku'>
                <DropdownMenu>
                    <DropdownItem text="Bilgilerim" icon="info" />
                    <DropdownItem onClick={signOut} text="Çıkış yap" icon="sign-out" />
                </DropdownMenu>
            </Dropdown>
        </MenuItem>
    </div>
  )
}
