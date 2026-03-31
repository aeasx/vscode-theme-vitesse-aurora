import { colors, VitesseAuroraThemes } from './colors'

export interface GetThemeOptions {
  color: 'light' | 'dark'
  name: string
}

export interface IPickOptions {
  light?: string
  dark?: string
}

function toArray<T>(arr: T | T[]): T[] {
  if (Array.isArray(arr))
    return arr
  return [arr]
}

function getColors(style: 'light' | 'dark'): typeof colors {
  if (style === 'dark') {
    const darkColors: any = {}
    Object.entries(colors).forEach(([name, val]) => {
      if (name === 'black')
        darkColors.white = val
      else if (name === 'white')
        darkColors.black = val
      else
        darkColors[name] = [...toArray(val)].reverse()
    })
    return darkColors
  }
  else {
    return colors
  }
}

export function createThemeHelpers({ color }: GetThemeOptions) {
  const pick = (options: IPickOptions) => options[color]

  const v = (key: keyof typeof VitesseAuroraThemes, op = '') => {
    let obj = VitesseAuroraThemes[key]

    if (typeof obj === 'string')
      obj = [obj, obj]

    return pick({ light: obj[1] + op, dark: obj[0] + op })
  }

  const colors = getColors(color)

  return {
    pick,
    colors,
    v,
  }
}
