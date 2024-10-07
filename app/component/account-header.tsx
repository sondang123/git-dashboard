import type React from 'react'
import { Button, Dropdown, Avatar, Menu } from 'antd'
import {
  DownOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons'

const accountMenu = (
  <Menu>
    <Menu.Item key="1" icon={<UserOutlined />}>
      Profile
    </Menu.Item>
    <Menu.Item key="2" icon={<SettingOutlined />}>
      Settings
    </Menu.Item>
    <Menu.Item key="3" icon={<LogoutOutlined />}>
      Logout
    </Menu.Item>
  </Menu>
)

export const AccountHeader: React.FC = () => {
  // TODO: Replace this with actual user data from your authentication system
  const userName = 'Đặng Thạch Sơn'
  const userAvatarUrl =
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' // Add this line

  return (
    <Dropdown
      overlay={accountMenu}
      placement="bottomRight"
      className="hover:bg-white hover:opacity-80"
    >
      <Button type="text" className="mr-4 flex items-center">
        <Avatar src={userAvatarUrl} size={40} className="mr-2" />
        <span>{userName}</span>
        <DownOutlined className="ml-2" />
      </Button>
    </Dropdown>
  )
}
