import sketch from 'sketch/dom'
import UI from 'sketch/ui'
import WebUI from 'sketch-module-web-view'

const isDev = process.env.NODE_ENV === 'development'
const Panel = isDev ? 'http://localhost:8080' : 'index.html'

export default context => {
  const document = sketch.getSelectedDocument()
  const panelID = 'sketch-simbox.panel'
  console.log('hello')
  console.log('context', context)
  console.log('document', document)

  // FIXME:
  const panelUI = new WebUI(context, Panel, {
    identifier: panelID,
    x: 0,
    y: 0,
    width: 340,
    height: 624,
    title: 'simbox',
    onlyShowCloseButton: true,
    hideTitleBar: false,
    shouldKeepAround: true,
    resizable: false,
    handlers: {
      onClick: callback => {
        console.log('我就是看看执行了没')
        const config = JSON.parse(callback)
        console.log(config)
        const _config = JSON.stringify(config)
        console.log(_config)
        console.log('好吧，打印出来了')
      },
      onRemove: callback => {
        UI.message(`🖌 simbox: Removed !`)
      }
    }
  })
}
