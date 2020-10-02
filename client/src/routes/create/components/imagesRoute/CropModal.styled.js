import styled from 'styled-components'

export default {
  CropperContainer: styled.div`
    background-color: transparent;
    max-width: 85%;
    max-height: 90%;
    outline: none;
    &&:hover {
      outline: none;
    }
    &&:focus-visible {
      outline: none;
    }
  `,
  CropperStyle: styled.div`
    border: solid 2px red;
    border-radius: 10px;
    overflow: hidden;
    padding: 10px;
    background-color: white;
    outline: green;
    &&:hover {
      outline: green;
      border: solid 2px red;
    }
    &&:focus-visible {
      outline: green;
    }
  `,
}
