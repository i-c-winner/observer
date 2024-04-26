function getData(data:{[key: string]:string}) {

 return  Object.keys(data[0]).filter((month) => {
    return month !== 'Mounth'
  })
}

export { getData }