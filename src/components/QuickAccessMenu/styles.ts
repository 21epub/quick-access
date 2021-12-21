import { grey } from '@ant-design/colors'
import { Menu } from 'antd'
import styled from 'styled-components'

export const MenuItemGroup = styled(Menu.ItemGroup)`
  font-size: 12px;
`

export const MenuItem = styled(Menu.Item)`
  color: ${grey[6]};
  font-size: 12px;

  .ant-dropdown-menu-title-content {
    display: flex;
    align-items: center;
  }
`
