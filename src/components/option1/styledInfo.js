import styled from 'styled-components'
import { animated } from 'react-spring'

export const Card = styled(animated.p)`
  box-shadow: 1px 6px 16px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 6px 16px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 6px 16px 1px rgba(0, 0, 0, 0.75);
  width: 20%;
  height: 20%;
  background: white;
  text-align: center;
  padding-top: 1rem;

  @media (max-width: 600px) {
    height: 10%;
    width: 30%;
  }
`
