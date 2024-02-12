import './style.css'
import build from './inventory/inventory.ts'
import tiles from './map/buildMap.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
${tiles}
${build}
`


// Remove Preload scripts loading
postMessage({ payload: 'removeLoading' }, '*')

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
