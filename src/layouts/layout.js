import React, { useEffect, useState } from "react"
import Container from "react-bulma-components/lib/components/container"
import Hero from "react-bulma-components/lib/components/hero"
import { useMediaQuery } from "react-responsive"
import Toggle from "react-toggle"

import { getLocalStorageItem, setLocalStorageItem } from "@helpers/utils"

const Layout = ({ children }) => {
  const DARK_CLASS = "dark"
  let localIsDark = getLocalStorageItem("isDark")
  let systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme:dark)",
    },
    undefined,
    prefersDark => {
      setIsDark(prefersDark)
    }
  )
  if (localIsDark === null) {
    localIsDark = systemPrefersDark
  }
  const [isDark, setIsDark] = useState(localIsDark)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add(DARK_CLASS)
    } else {
      document.documentElement.classList.remove(DARK_CLASS)
    }
    setLocalStorageItem("isDark", isDark)
  }, [isDark])

  return (
    <Hero size="fullheight">
      <Hero.Body>
        <Toggle
          icons={false}
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        <Container>{children}</Container>
      </Hero.Body>
    </Hero>
  )
}

export default Layout
