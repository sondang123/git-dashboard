import { Empty } from 'antd'
import type React from 'react'
import { useEffect, useState } from 'react'
import { AppLoading } from '~/component/app-component/app-loading'
import { cn } from '~/lib/utils'

interface DataPoint {
  date: string
  value: number
}

interface ListAllCommitChartLineProps {
  ratio?: number // Tỷ lệ chiều cao/chiều rộng
  data: DataPoint[] // New prop for chart data
  isLoading?: boolean
}

const ListAllCommitChartLine: React.FC<ListAllCommitChartLineProps> = ({
  data,
  ratio = 5 / 1, // Add data to the destructured props
  isLoading = false,
}) => {
  const [LineChart, setLineChart] = useState<React.FC<any> | null>(null)

  // Sử dụng useEffect để tải component Column khi component được mount
  useEffect(() => {
    const loadChart = async () => {
      const { Line } = await import('@ant-design/charts')
      setLineChart(() => Line)
    }

    loadChart()
  }, [])

  // Hiển thị thông báo tải nếu biểu đồ chưa được tải
  if (!LineChart || isLoading) {
    return (
      <div
        style={{ aspectRatio: ratio }}
        className={cn('flex items-center justify-center text-gray-500 w-full')}
      >
        <AppLoading />
      </div>
    )
  }

  // Check if data is empty
  if (!data || data.length === 0) {
    return (
      <div
        className={cn('flex items-center justify-center text-gray-500 w-full')}
        style={{ aspectRatio: ratio }}
      >
        <Empty />
      </div>
    )
  }

  // Update the config object
  const config = {
    data,
    xField: 'date',
    yField: 'value',

    label: {
      position: 'middle', // 'top' | 'bottom' | 'middle'
      style: {
        fill: '#FFFFFF', // Màu chữ
        opacity: 0.6,
      },
    },
  }

  return (
    <div className="h-full w-full" style={{ aspectRatio: ratio }}>
      <LineChart {...config} />
    </div>
  )
}

export default ListAllCommitChartLine
