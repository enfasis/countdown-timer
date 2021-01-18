import React from "react"
import { useEffect, useState } from "react"
import Columns from "react-bulma-components/lib/components/columns"
import { Helmet } from "react-helmet"

export default function CountDownTimer(props) {
  const [timeLeft, setTimeLeft] = useState(props.seconds)
  const [isRunning, setIsRunning] = useState(false)

  const toggleTimer = e => {
    if (!isRunning) setTimeLeft(props.seconds)
    setIsRunning(!isRunning)
  }

  const displayTime = t => {
    let m = String(Math.trunc(t / 60)).padStart(2, "0")
    let s = String(t % 60).padStart(2, "0")
    return `${m}:${s}`
  }

  const displayTitle = t => {
    if (isRunning) return displayTime(t)
    else return "ZzzZ..."
  }

  useEffect(() => {
    if (isRunning) {
      let interval = setInterval(() => {
        if (timeLeft > 0) setTimeLeft(timeLeft - 1)
        if (timeLeft === 0) {
          setIsRunning(false)
          clearInterval(interval)
          props.didFinish()
        }
      }, 1000)
      return () => clearInterval(interval)
    }
  })

  return (
    <Columns centered>
      <Columns.Column size="half" className="has-text-centered">
        <Helmet>
          <title>{displayTitle(timeLeft)}</title>
        </Helmet>
        <button className="btnCountDownTimer" onClick={toggleTimer}>
          {displayTime(timeLeft)}
        </button>
      </Columns.Column>
    </Columns>
  )
}
