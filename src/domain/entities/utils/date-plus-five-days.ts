export function addDaystoDate(days: number, date: Date): Date {
  date.setDate(date.getDate() + days)
  return date
}