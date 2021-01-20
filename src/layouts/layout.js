import React, { useEffect, useState } from "react"
import Container from "react-bulma-components/lib/components/container"
import Hero from "react-bulma-components/lib/components/hero"
import { useMediaQuery } from "react-responsive"
import Toggle from "react-toggle"

const Layout = ({ children }) => {
  const DARK_CLASS = "dark"

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme:dark)",
    },
    undefined,
    prefersDark => {
      setIsDark(prefersDark)
    }
  )
  const [isDark, setIsDark] = useState(systemPrefersDark)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add(DARK_CLASS)
    } else {
      document.documentElement.classList.remove(DARK_CLASS)
    }
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
