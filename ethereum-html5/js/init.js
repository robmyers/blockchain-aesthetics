/**
 *
 * @licstart  The following is the entire license notice for the
 *  JavaScript code in this page.
 *
 * Copyright (C) 2014,2018 Rob Myers
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

const INFURA_WS_URL = 'wss://mainnet.infura.io/ws'

var web3 = new Web3(Web3.givenProvider || INFURA_WS_URL)

const paletteColours = crystalPaletteColours

const initBlocks = () => {
    web3.eth.subscribe(
    'newBlockHeaders',
    (error, result) => {
      if (! error) {
        // Remove the leading 0x
        appendHash(result.hash.substring(2))
      }
    }
  )
}

const initTransactions = () => {
  web3.eth.subscribe(
    'pendingTransactions',
    (error, result) => {
      if (! error) {
        // Remove the leading 0x
        appendHash(result.substring(2))
      }
    }
  )
}
