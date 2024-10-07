import type React from 'react'
import { useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout, theme } from 'antd'

import { AccountHeader } from '~/component/account-header'
import { MenuSideBar } from '~/component/sidebar/menu-sidebar'

const { Header, Content, Footer, Sider } = Layout

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  const [collapsed, setCollapsed] = useState(false)
  const siderStyle: React.CSSProperties = {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarColor: 'unset',
  }

  return (
    <Layout hasSider className="min-h-screen">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={siderStyle}
      >
        <div className="p-3 text-white text-center h-[64px] flex items-center justify-center typo-s32-w7000 mb-2 border-b border-neutral-500">
          LOGO
        </div>
        <MenuSideBar />
      </Sider>
      <Layout
        style={
          !collapsed ? { marginInlineStart: 200 } : { marginInlineStart: 80 }
        }
      >
        <Header
          style={{ padding: 0, background: colorBgContainer }}
          className="sticky top-0 shadow-sm flex justify-between items-center z-50"
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="hover:bg-white hover:opacity-80"
          />
          <AccountHeader />
        </Header>

        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          {children}
        </Content>

        <Footer
          className="text-center"
          style={{
            background: colorBgContainer,
          }}
        >
          ©{new Date().getFullYear()} GOD HITECH
        </Footer>
      </Layout>
    </Layout>
  )
}
