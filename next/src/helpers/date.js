const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Dec'
]

export const formatDate = dateString => {
  const date = new Date(dateString)
  const m = date.getMonth()
  const month = months[m]
  const year = date.getFullYear()

  return `${month} ${year}`
}

