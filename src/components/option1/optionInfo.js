import React, { useContext } from 'react'
import { Background  } from '../../assets/styledBackground'
import { apiContext } from '../../context/apiContext'
import { useSpring } from 'react-spring'
import { Card } from './styledInfo'
export const OptionInfo = () => {
  const { apiData } = useContext(apiContext)

  const fadeIn = useSpring({
    config: { mass: 1, tension: 20, friction: 10, delay: 1000 },
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
    <Background>
      <Card style={fadeIn}>Presion Directa: {apiData['Presion Directa']}</Card>
    </Background>
  )
}
