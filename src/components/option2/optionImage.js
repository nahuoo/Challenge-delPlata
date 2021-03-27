import React, { useContext } from 'react'
import { Background, Wrapper } from '../../assets/styledBackground'
import { apiContext } from '../../context/apiContext'
import { useSpring } from 'react-spring'
import { Card } from './styledImage'
export const OptionImage = () => {
  const { apiData } = useContext(apiContext)

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
    <Background>
      <Wrapper style={fadeIn}>
        <Card>Presion Directa: {apiData['Presion Directa']}</Card>
        <Card>Presion Anular: {apiData['Presion Anular']}</Card>
        <Card>Peso en Gancho: {apiData['Peso en Gancho']}</Card>
        <Card>Peso Aplicado: {apiData['Peso Aplicado']}</Card>
        <Card>Nivel de Pileta: {apiData['Nivel de Pileta']}</Card>
        <Card>Viento: {apiData['Viento']}</Card>
      </Wrapper>
    </Background>
  )
}
