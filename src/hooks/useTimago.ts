import { DEFAULT_LANGUAGE } from 'config/constants'
import { useEffect, useState } from 'react'
import { formatDate } from './useDateTimeFormat'

const isRelativeTimeFormatSupported =
  typeof Intl !== 'undefined' && Intl.RelativeTimeFormat

const DATE_UNITS: Array<[string, number]> = [
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1],
]

const getDateDiffs = (timestamp: number) => {
  const now = Date.now()
  const elapsed = (timestamp - now) / 1000

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === 'second') {
      const value = Math.round(elapsed / secondsInUnit)
      return { value, unit }
    }
  }
}

export default function useTimeAgo(timestamp: any) {
  const [timeago, setTimeago] = useState<any>(() => getDateDiffs(timestamp))

  useEffect(() => {
    if (isRelativeTimeFormatSupported) {
      const interval = setInterval(() => {
        const newTimeAgo = getDateDiffs(timestamp)
        setTimeago(newTimeAgo)
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [timestamp])

  if (!isRelativeTimeFormatSupported) {
    return formatDate(timestamp)
  }

  const rtf = new Intl.RelativeTimeFormat('es', { style: 'short' })
  if (timeago?.value < -8 && timeago?.unit === 'day') {
    return new Date(timestamp).toLocaleDateString(DEFAULT_LANGUAGE, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  } else {
    return rtf.format(timeago?.value, timeago?.unit)
  }
}
