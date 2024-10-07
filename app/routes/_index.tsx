import { FilterChart } from '~/component/app-component/filter-chart'
import ListAllCommitChartColumn from '~/component/feature/commit/list-commit-chart'
import ListAllCommitChartLine from '~/component/feature/commit/list-commit-line-chart'
import { useListAllCommit } from '~/query/commit/list-all-commit'

import { useState } from 'react'

const App: React.FC = () => {
  const [filterData, setFilterData] = useState({
    from_date: undefined,
    to_date: undefined,
    author: undefined,
    repository: undefined,
  })

  const dataList = useListAllCommit(filterData)

  return (
    <div className="pt-5 pb-20">
      <div>
        <div className="flex items-center justify-between mb-10">
          <p className="typo-s20-w600 text-neutral-800">LIST ALL COMMIT</p>

          <FilterChart
            onSubmit={(value) => {
              setFilterData(value)
            }}
          />
        </div>

        <div className="border rounded-[16px] p-4">
          <ListAllCommitChartColumn
            data={dataList?.data?.dailyStats ?? []}
            isLoading={dataList?.isLoading}
          />
        </div>

        <div className="border rounded-[16px] mt-10 p-4">
          <ListAllCommitChartLine
            data={dataList?.data?.dailyStats ?? []}
            isLoading={dataList?.isLoading}
          />
        </div>
      </div>
    </div>
  )
}

export default App
