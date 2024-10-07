import { DatePicker } from 'antd'
import dayjs, { type Dayjs } from 'dayjs'

const { RangePicker } = DatePicker

interface DateRangePickerProps {
  onChange?: (dates: [Dayjs | null, Dayjs | null] | null) => void
  value?: [Dayjs | null, Dayjs | null]
  defaultValue?: [Dayjs | null, Dayjs | null]
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  onChange,
  value,
  defaultValue,
}) => {
  const ranges: Record<string, [Dayjs, Dayjs] | null> = {
    'Hôm nay': [dayjs(), dayjs()],
    '7 ngày trước': [dayjs().subtract(7, 'days'), dayjs()],
    '30 ngày trước': [dayjs().subtract(30, 'days'), dayjs()],
    '1 năm trước': [dayjs().subtract(1, 'year'), dayjs()],
    'Tuỳ chỉnh': null,
  }

  return (
    <RangePicker
      presets={Object.entries(ranges).map(([label, value]) => ({
        label,
        value: value || [dayjs(), dayjs()],
      }))}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
      placeholder={['From date', 'To date']}
    />
  )
}
