import "@styles/app.sass"

import React from "react"
import { useEffect, useState } from "react"

import History from "@components/history"
import CountDownTimer from "@components/timer"
import { getLocalStorageItem, setLocalStorageItem } from "@helpers/utils"
import Layout from "@layouts/layout"

export default function App() {
  let localHistory = getLocalStorageItem("history")
  localHistory = localHistory ? localHistory.map(d => new Date(d)) : []
  const [history, setHistory] = useState(localHistory)

  const updateHistory = e => {
    setHistory([new Date(), ...history])
  }

  useEffect(() => {
    setLocalStorageItem("history", history)
  })

  return (
    <Layout>
      <CountDownTimer seconds={15 * 60} didFinish={updateHistory} />
      <History data={history} />
    </Layout>
  )
}
