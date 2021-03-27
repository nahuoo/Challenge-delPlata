import styled from 'styled-components'
import { animated } from 'react-spring'

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #646666;
  background-image: url('https://www.transparenttextures.com/patterns/brushed-alum.png');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled(animated.div)`
  display: grid;
  padding: 1rem;
  grid-template-columns: minmax(20%, 50%) minmax(20%, 50%);
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px 20px;
  align-items: center;
  justify-items: center;
  transition: 0.2s ease-in;
  @media (min-width: 600px) {
    width: 40%;
    height: 50%;
  }

  p {
    background: white;
  }
`
