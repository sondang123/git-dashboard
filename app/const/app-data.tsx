import type { MenuProps } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'

export type MenuItem = Required<MenuProps>['items'][number] & {
  link?: string
  children?: MenuItem[]
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  link?: string,
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    link,
  } as MenuItem
}

export const MenuSidebar: MenuItem[] = [
  getItem('Dashboard', 'dashboard', <AppstoreOutlined />, undefined, '/'),
]
