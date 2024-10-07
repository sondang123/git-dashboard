import { useQuery } from '@tanstack/react-query'
import { GET_ALL_COMMIT } from './query-keys'
import { getListAllCommit } from '~/service/commit-api'
import type { pramsRqListCommit } from '~/type/commit'
import dayjs from 'dayjs'

// Define an interface for the commit object based on the API response
interface Commit {
  nodeid: string
  sha: string
  commit: {
    author: {
      date: { time: { $date: { $numberLong: string } } }
      name: string
      email: string
    }
    committer: {
      date: { time: { $date: { $numberLong: string } } }
      name: string
      email: string
    }
    message: string
  }
}

interface Stats {
  [key: string]: number
}

function getCommitStatsByDay(
  commits: Commit[],
): { date: string; value: number }[] {
  const stats: Record<string, number> = {}

  for (const commit of commits) {
    const date = dayjs(Number(commit.commit.author.date.time.$date.$numberLong))
    const dateString = date.format('YYYY-MM-DD') // Format: YYYY-MM-DD

    stats[dateString] = (stats[dateString] || 0) + 1
  }

  return Object.entries(stats)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, count]) => ({ date, value: count }))
}

function getCommitStatsByUserAndDay(
  commits: Commit[],
): Record<string, { date: string; value: number }[]> {
  const stats: Record<string, Record<string, number>> = {}

  for (const commit of commits) {
    const user = commit.commit.author.name
    let date: string

    // Check if the date is a number or an object
    if (typeof commit.commit.author.date === 'number') {
      date = dayjs(commit.commit.author.date).format('YYYY-MM-DD')
    } else if (commit.commit.committer.date.time.$date) {
      date = dayjs(
        Number(commit.commit.committer.date.time.$date.$numberLong),
      ).format('YYYY-MM-DD')
    } else {
      console.error('Unexpected date format:', commit.commit.author.date)
      continue // Skip this commit if we can't parse the date
    }

    if (!stats[user]) {
      stats[user] = {}
    }
    stats[user][date] = (stats[user][date] || 0) + 1
  }

  const result: Record<string, { date: string; value: number }[]> = {}
  for (const [user, dates] of Object.entries(stats)) {
    result[user] = Object.entries(dates)
      .map(([date, value]) => ({ date, value }))
      .sort((a, b) => a.date.localeCompare(b.date))
  }

  return result
}

export const useListAllCommit = ({
  from_date,
  to_date,
  author,
  repository,
}: Partial<pramsRqListCommit> = {}) => {
  return useQuery({
    queryKey: [GET_ALL_COMMIT, from_date, to_date, author, repository],
    queryFn: async () => {
      const response: any = await getListAllCommit({
        from_date,
        to_date,
        author: author === '' ? undefined : author,
        repository: repository === '' ? undefined : repository,
      })

      const dailyStats = getCommitStatsByDay(response ?? [])
      const userDailyStats = getCommitStatsByUserAndDay(response ?? [])

      // Calculate total commits
      const totalCommits = response?.length ?? 0
      const totalUserCommits = Object.values(userDailyStats).reduce(
        (total, userStats) =>
          total + userStats.reduce((sum, { value }) => sum + value, 0),
        0,
      )

      return {
        data: response,
        dailyStats,
        userDailyStats,
        totalCommits,
        totalUserCommits,
      }
    },
  })
}
