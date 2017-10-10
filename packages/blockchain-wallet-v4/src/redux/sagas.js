import { advertsSaga } from './data/adverts/sagas.js'
import { captchaSaga } from './data/captcha/sagas.js'
import { chartsSaga } from './data/charts/sagas.js'
import { feeSaga } from './data/fee/sagas.js'
import { logsSaga } from './data/logs/sagas.js'
import { ratesSaga } from './data/rates/sagas.js'
import { transactionsSaga } from './data/transactions/sagas.js'
import { paymentSaga } from './data/payment/sagas'
import { commonSaga } from './common/sagas.js'
import { settingsSaga } from './settings/sagas.js'
import { walletSaga } from './wallet/sagas.js'
import { webSocketSaga } from './webSocket/sagas.js'

export const coreSagasFactory = ({ api, dataPath, walletPath, settingsPath, socket } = {}) => ({
  adverts: advertsSaga({ api, dataPath, walletPath, settingsPath, socket }),
  captcha: captchaSaga({ api, dataPath, walletPath, settingsPath, socket }),
  charts: chartsSaga({ api, dataPath, walletPath, settingsPath, socket }),
  fee: feeSaga({ api, dataPath, walletPath, settingsPath, socket }),
  logs: logsSaga({ api, dataPath, walletPath, settingsPath, socket }),
  rates: ratesSaga({ api, dataPath, walletPath, settingsPath, socket }),
  transactions: transactionsSaga({ api, dataPath, walletPath, settingsPath, socket }),
  payment: paymentSaga({ api, dataPath, walletPath, settingsPath, socket }),
  common: commonSaga({ api, dataPath, walletPath, settingsPath, socket }),
  settings: settingsSaga({ api, dataPath, walletPath, settingsPath, socket }),
  wallet: walletSaga({ api, dataPath, walletPath, settingsPath, socket }),
  webSocket: webSocketSaga({ api, dataPath, walletPath, settingsPath, socket })
})

// export const rootSaga = ({ api, dataPath, walletPath, settingsPath, socket } = {}) => {
//   return function * () {
//     yield [
//       fork(webSocketSaga({socket, walletPath, dataPath, api}))
//     ]
//   }
// }
