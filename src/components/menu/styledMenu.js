import styled from 'styled-components'
import { animated } from 'react-spring'

export const Card = styled.div`
  margin-bottom: 1rem;
  display: flex;
`
export const MenuContainer = styled(animated.div)`
  height: 100%;
  position: absolute;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s;

  @media (max-width: 600px){
    flex-direction: column;
    top: 0;
    height: ${(props) => (props.toogle ? '20%' : '100%')};
    width: 100%;
    
  }
`
export const Button = styled.p`
  transition: 0.5s ease-in-out;
  color: black;
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
  :hover {
    background: black;
    color: white;
  }
`
