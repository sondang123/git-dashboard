import type React from 'react'
import { Select } from 'antd'

// Define the structure for a project
interface Option {
  id: string
  name: string
}

// Component props
interface AppSelectProps {
  options: Option[]
  onSelectOption: (optionId: string) => void
  defaultValue?: string // Add this line
  placeholder?: string
}

const AppSelect: React.FC<AppSelectProps> = ({
  options,
  onSelectOption,
  defaultValue,
  placeholder = 'Chọn',
}) => {
  const handleChange = (value: string) => {
    onSelectOption(value)
  }

  return (
    <Select
      placeholder={placeholder}
      onChange={handleChange}
      defaultValue={defaultValue} // Add this line
      className="min-w-[200px] max-w-[400px]"
      showSearch // Add this line
      filterOption={(input, option) =>
        (option?.children as unknown as string)
          .toLowerCase()
          .includes(input.toLowerCase())
      }
    >
      {options.map((option) => (
        <Select.Option key={option.id} value={option.id}>
          {option.name}
        </Select.Option>
      ))}
    </Select>
  )
}

export default AppSelect
