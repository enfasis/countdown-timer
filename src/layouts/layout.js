import React from "react"
import Container from "react-bulma-components/lib/components/container"
import Hero from "react-bulma-components/lib/components/hero"

const Layout = ({ children }) => {
  return (
    <Hero size="fullheight">
      <Hero.Body>
        <Container>{children}</Container>
      </Hero.Body>
    </Hero>
  )
}

export default Layout
