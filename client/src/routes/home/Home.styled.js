import styled from 'styled-components'
import caoeGato from '../../assets/cao-e-gato-juntos.jpg'

export default {
  image: styled.div`
    background-image: url(${caoeGato});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
  `,
  div: styled.div`
    height: 100%;
  `,
}
