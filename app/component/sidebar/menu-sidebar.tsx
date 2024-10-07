import { Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import { MenuSidebar, type MenuItem } from '~/const/app-data'

export const MenuSideBar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleMenuClick = (link: string) => {
    navigate(link)
  }

  const renderMenuItems = (items: MenuItem[]): any[] => {
    return items.map((item) => ({
      ...item,
      key: item.link,
      onClick: item.children
        ? undefined
        : () => handleMenuClick(item.link ?? '/'),
      children: item.children ? renderMenuItems(item.children) : undefined,
    }))
  }

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[location.pathname]}
      items={renderMenuItems(MenuSidebar)}
    />
  )
}
