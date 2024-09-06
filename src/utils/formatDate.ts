const formatDate = (date: Date | string) => {
  const dateObj = new Date(date)
  const day = dateObj.getDate()
  const month = dateObj
    .toLocaleString('default', { month: 'long' })
    .slice(0, 3)
  
  const year = dateObj.getFullYear()

  return {
    day,
    month,
    year
  }
}

export default formatDate