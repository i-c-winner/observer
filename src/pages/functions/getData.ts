function getData(data) {
  function floorData(data: any, type: string) {
    data.forEach((day: any) => {
      for (const key in day) {
        if (key !== type) {
          day[key] = Math.floor(day[key])
        }
      }
    })
  }
  const keys = Object.keys(data[0]).filter((month) => {
    return month !== 'Mounth'
  })
  return keys
}

export { getData }