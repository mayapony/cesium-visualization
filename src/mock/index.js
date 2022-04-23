export const randomData = flag => {
  switch (flag) {
    case 'ph':
      return Math.round(45 + Math.random() * 30) / 10
    case 'temp':
      return Math.round(150 + Math.random() * 100) / 10
    case 'humidity':
      return Math.round(1 + Math.random() * 4)
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
