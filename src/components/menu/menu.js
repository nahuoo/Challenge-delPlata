import React, { useState } from 'react'
import { Button, Card, MenuContainer } from './styledMenu'
import { Link } from 'react-router-dom'
import { useSpring } from 'react-spring'

export const Menu = () => {
  const [toogle, setToogle] = useState(false)

  const animation = useSpring({
    width: toogle && 100,
    background: 'rgba(240,240,240,.6)',
    from: { width: 90, background: 'white' },
  })

  const handleButton = () => {
    setToogle(true)
  }

  return (
    <MenuContainer toogle={toogle} style={animation}>
      <Card>
        <Link to="/info" style={{ textDecoration: 'none' }} onClick={handleButton}>
          <Button>Opción 1</Button>
        </Link>
      </Card>
      <Card>
        <Link to="/image" style={{ textDecoration: 'none' }} onClick={handleButton}>
          <Button>Opción 2</Button>
        </Link>
      </Card>
    </MenuContainer>
  )
}
