const MyData={
  first : {
    xAxis: {
      type: 'category',
      data: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 170, 205, 95, 110],
        type: 'line'
      }
    ]
  },
  second : {
    xAxis: {
      type: 'category',
      data: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 170, 205, 95, 110],
        type: 'line'
      },
      {
        data: [180, 120, 220, 150, 210, 110, 180],
        type: 'line'
      }
    ]
  },
}
export {MyData}