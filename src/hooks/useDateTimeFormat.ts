import { DEFAULT_LANGUAGE } from 'config/constants'

const isDateTimeFormatSupported =
  typeof Intl !== 'undefined' && Intl.DateTimeFormat

export const formatDate = (
  timestamp: number,
  { language = DEFAULT_LANGUAGE } = {}
) => {
  const date = new Date(timestamp)

  if (!isDateTimeFormatSupported) {
    const options: any = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }

    return date.toLocaleDateString(language, options)
  }

  const options: any = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }

  return new Intl.DateTimeFormat(language, options).format(date)
}

export default function useDateTimeFormat(timestamp: number) {
  return formatDate(timestamp, { language: DEFAULT_LANGUAGE })
}
