import styled from 'styled-components'

export default {
  Container: styled.div`
    border-radius: 10px 10px 0 0;
    margin-top: ${props => props.mt};
    text-align: center;
    background-color: ${props =>
      props.isRoute ? 'rgba(51,51,51,0.05)' : '#0d0c22'};
    width: 25%;
    color: ${props => (props.isRoute ? '#0d0c22' : 'white')};
    cursor: pointer;
    padding: 10px 0;
  `,
  Text: styled.span`
    text-align: center;
    font-size: 0.8rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 300;
    line-height: 1;
    letter-spacing: 0.00938em;
  `,
}
