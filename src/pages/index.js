import React from "react"
import { useState, useEffect } from "react"
import CountDownTimer from "../components/timer"
import History from "../components/history"
import "../styles/app.sass"
import Hero from "react-bulma-components/lib/components/hero"
import Container from "react-bulma-components/lib/components/container"
import Columns from "react-bulma-components/lib/components/columns"

function getHistory() {
  if (typeof window !== "undefined") {
    let historyValue = localStorage.getItem("history")
    if (historyValue == null) return []
    return JSON.parse(historyValue).map(ds => new Date(ds))
  }
  return []
}

export default function App() {
  const [history, setHistory] = useState(getHistory())

  const updateHistory = e => {
    setHistory([new Date(), ...history])
  }

  useEffect(() => {
    if (typeof window !== "undefined")
      localStorage.setItem("history", JSON.stringify(history))
  })

  return (
    <Hero size="fullheight">
      <Hero.Body>
        <Container>
          <Columns centered>
            <Columns.Column size="half" className="has-text-centered">
              <CountDownTimer seconds={15 * 60} didFinish={updateHistory} />
            </Columns.Column>
          </Columns>
          <Columns centered>
            <Columns.Column size={3} className="has-text-centered">
              <History data={history} />
            </Columns.Column>
          </Columns>
        </Container>
      </Hero.Body>
    </Hero>
  )
}
