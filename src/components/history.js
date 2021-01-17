import React from "react"
import List from "react-bulma-components/lib/components/list"

export default function History(props) {
  const formatDate = d => {
    let h = String(d.getHours()).padStart(2, "0")
    let m = String(d.getMinutes()).padStart(2, "0")
    return `${h}:${m}`
  }
  const listHistory = props.data.map(time => (
    <List.Item key={time}>{formatDate(time)}</List.Item>
  ))
  return <List className="listHistory">{listHistory}</List>
}
