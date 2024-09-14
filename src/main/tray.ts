import { BrowserWindow, Menu, Tray, nativeImage } from 'electron'
import path from 'node:path'

export function createTray(window: BrowserWindow) {
  const appIcon = path.join(__dirname, 'resources', 'menuTemplate.png')
  let icon = nativeImage.createFromPath(appIcon)

  const tray = new Tray(icon)

  const menu = Menu.buildFromTemplate([
    { label: 'Dev Clientes', enabled: false },
    { type: 'separator' },
    {
      label: 'Cadastrar cliente',
      click: () => {
        window.webContents.send('new-customer')

        if (window.isMinimized()) window.restore()
        window.focus()
      }
    },
    {
      label: 'Abrir',
      click: () => {
        window.show()
      }
    },
    { type: 'separator' },
    {
      label: 'Sair',
      role: 'quit'
    }
  ])
  tray.setToolTip('Dev Clientes')
  tray.addListener('click', () => {
    window.show()
  })
  tray.setContextMenu(menu)
}
