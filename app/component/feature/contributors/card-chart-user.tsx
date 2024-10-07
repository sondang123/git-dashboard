import { Avatar } from 'antd'
import ListAllCommitChartLine from '../commit/list-commit-line-chart'

export const CardChartUser: React.FC = () => {
  const userName = 'Đặng Thạch Sơn'
  const userAvatarUrl =
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' // Add this line

  return (
    <div className="border p-4 rounded-[16px]">
      <div className="flex items-start justify-between">
        <div className="flex items-center mb-4">
          <Avatar src={userAvatarUrl} size={60} className="mr-2" />
          <div>
            <p className="typo-s16-w600 text-neutral-800">{userName}</p>
            <div className="flex items-center gap-3 flex-wrap">
              <p className="typo-s14-w400 text-neutral-600">2.584 commits</p>
              <p className="text-green-500">3.726 ++</p>
              <p className="text-red-500">2.907 --</p>
            </div>
          </div>
        </div>
      </div>
      <ListAllCommitChartLine data={[]} />
    </div>
  )
}
