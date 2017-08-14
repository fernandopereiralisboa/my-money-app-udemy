import React from 'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default porps => (
    <ul className='sidebaar-menu-mini'>
        <MenuItem path='#' label='Dashboard' icon='dashboard' />
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='#billingCycles' label='Ciclos de Pagamentos' icon='usd' />
        </MenuTree>
    </ul>
)