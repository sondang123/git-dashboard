import { Empty } from 'antd'
import type React from 'react'
import { useEffect, useState } from 'react'
import { AppLoading } from '~/component/app-component/app-loading'
import { cn } from '~/lib/utils'

interface ListAllCommitChartColumnProps {
  ratio?: number // Tỷ lệ chiều cao/chiều rộng
  data: Array<{ date: string; value: number }> // New prop for chart data
  isLoading?: boolean
}

const ListAllCommitChartColumn: React.FC<ListAllCommitChartColumnProps> = ({
  ratio = 5 / 1,
  data, // Add data to destructured props
  isLoading = false,
}) => {
  const [ColumnChart, setColumnChart] = useState<React.FC<any> | null>(null)

  useEffect(() => {
    const loadChart = async () => {
      const { Column } = await import('@ant-design/charts')
      setColumnChart(() => Column)
    }

    loadChart()
  }, [])

  if (!ColumnChart || isLoading) {
    return (
      <div
        style={{ aspectRatio: ratio }}
        className={cn('flex items-center justify-center text-gray-500 w-full')}
      >
        <AppLoading />
      </div>
    )
  }

  if (!data || data.length === 0) {
    // Check if data is empty
    return (
      <div
        className={cn('flex items-center justify-center text-gray-500 w-full')}
        style={{ aspectRatio: ratio }}
      >
        <Empty />
      </div>
    )
  }
  // Update config object
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
      <ColumnChart {...config} />
    </div>
  )
}

export default ListAllCommitChartColumn
