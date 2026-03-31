import fs from 'fs-extra'
import { getXtermTheme } from './extra'
import getTheme from './theme'

console.log('starting')

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './themes/vitesse-aurora-light.json',
      getTheme({
        color: 'light',
        name: 'Vitesse Aurora Light',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/vitesse-aurora-dark.json',
      getTheme({
        color: 'dark',
        name: 'Vitesse Aurora Dark',
      }),
      { spaces: 2 },
    ),
  ]))

fs.mkdir('./extra', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './extra/xterm-vitesse-aurora-light.json',
      getXtermTheme({
        color: 'light',
        name: 'Vitesse Aurora Light',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './extra/xterm-vitesse-aurora-dark.json',
      getXtermTheme({
        color: 'dark',
        name: 'Vitesse Aurora Dark',
      }),
      { spaces: 2 },
    ),
  ]))

console.log('finished')
