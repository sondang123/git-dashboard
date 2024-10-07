import type React from 'react'
import { Button, Form, Select } from 'antd'
import { DateRangePicker } from '../date-range-picker'
import { useListRepositories } from '~/query/respositories/list-all-respositories'

import { useListUser } from '~/query/user/list-all-user'

interface FilterChartProps {
  onSubmit: (values: any) => void
}
export const FilterChart: React.FC<FilterChartProps> = ({ onSubmit }) => {
  const [form] = Form.useForm()
  const listRepository = useListRepositories()
  const listUsers = useListUser()

  const onFinish = (values: any) => {
    const { dateRange, ...other } = values
    const formattedValues = {
      ...other,
      from_date: dateRange?.[0]?.toISOString(),
      to_date: dateRange?.[1]?.toISOString(),
    }
    onSubmit(formattedValues)
  }

  return (
    <Form form={form} layout="inline" onFinish={onFinish}>
      <Form.Item name="author" label="Author">
        <Select
          options={listUsers?.data?.labelValueArray ?? []}
          style={{ width: 200 }}
          placeholder={'Chọn'}
        />
      </Form.Item>
      <Form.Item name="repository" label="Repository">
        <Select
          options={listRepository?.data?.labelValueArray ?? []}
          style={{ width: 200 }}
          placeholder={'Chọn'}
          loading={listRepository?.isLoading}
        />
      </Form.Item>
      <Form.Item name="dateRange" label="Date">
        <DateRangePicker />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Filter
        </Button>
      </Form.Item>
    </Form>
  )
}
