import { applyPatch as patch } from 'vdom-serialized-patch/patch';

import uiWorker from './workers/ui'
import serviceWorker from './workers/service'
import webWorker from './workers/web'

export function create() {
  const ui = uiWorker.create()
  const web = webWorker.create()
  ui.onAction = web.notify
  web.onPatch = ui.patch

  const service = serviceWorker.create()
  service.init()
}
