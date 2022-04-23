export const randomData = flag => {
  switch (flag) {
    case 'ph':
      return Math.round(Math.random() * 24) / 10
    case 'temp':
      return Math.round(5000 + Math.random() * 2000) / 10
    case 'humidity':
      return Math.round(80 + Math.random() * 20) / 10
  }
}

export const points = [
  {
    pos: {
      lng: 118.385661,
      lat: 31.288817,
      height: 20,
    },
    temp: randomData('temp'),
    humidity: randomData('humidity'),
    ph: randomData('ph'),
  },
  {
    pos: {
      lng: 118.386661,
      lat: 31.288817,
      height: 20,
    },
    temp: randomData('temp'),
    humidity: randomData('humidity'),
    ph: randomData('ph'),
  },
]
