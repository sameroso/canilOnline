import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import './MeasureBar.css'

let arr = []

export default function MeasureBar(props) {
  const [colors, setColors] = useState([])

  useEffect(() => {
    function initialbar() {
      arr = []

      for (let i = 0; i <= (props.barSize || 10); i++) {
        arr.push({ number: i, isFilled: true })
      }
      arr.forEach((element, i) => {
        if (element.number <= (props.defaultValue || props.level || 0)) {
          arr[i].isFilled = true
        } else {
          arr[i].isFilled = false
        }
      })

      const newArr = [...arr]

      setColors(newArr)
    }
    initialbar()
  }, [props?.level])

  const barElements = colors.map((el, index) => {
    const fillCollors = () => {
      return el.isFilled
        ? props.filledColor || 'red'
        : props.unFilledColor || 'blue'
    }

    return (
      <div
        key={arr[index]?.number}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {index !== 0 && (
          <div>
            <hr
              style={{
                height: props.lineHeight || '10px',
                width: props.lineWidth || '12px',
                margin: '0',
                backgroundColor: fillCollors(),
              }}
            />
          </div>
        )}
        <div>
          <div
            onClick={() => {
              if (props.readOnly) {
                return
              }

              props.setLevel(el.number)
            }}
            style={{
              height: props.circleheight || '15px',
              backgroundColor: fillCollors(),
              cursor: props.readOnly ? '' : 'pointer',
              width: props.circleheight || '15px',
              borderRadius: props.CircleRadius || '100px',
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'absolute',
              marginTop: props.numbersMaginTop || '0px',
              marginLeft: props.numbersMarginLeft || '0px',
            }}
          >
            <span style={{ textAlign: 'center' }}>{el.number}</span>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ margin: '10px 10px' }} className="font-display">
        {props?.initialParam}
      </div>
      {barElements}
      <div style={{ margin: '10px 10px' }} className="font-display">
        {props?.finalParam}
      </div>
    </div>
  )
}

MeasureBar.propTypes = {
  props: PropTypes.shape({
    barSize: PropTypes.number,
    defaultValue: PropTypes.number,
    filledColor: PropTypes.string,
    unFilledColor: PropTypes.string,
    lineHeight: PropTypes.string,
    lineWidth: PropTypes.string,
    readOnly: PropTypes.bool,
    circleheight: PropTypes.string,
    CircleRadius: PropTypes.string,
    numbersMaginTop: PropTypes.string,
    numbersMarginLeft: PropTypes.string,
    initialParam: PropTypes.string,
    finalParam: PropTypes.string,
    level: PropTypes.number,
    setLevel: PropTypes.func,
  }),
  barSize: PropTypes.number,
  defaultValue: PropTypes.number,
  filledColor: PropTypes.string,
  unFilledColor: PropTypes.string,
  lineHeight: PropTypes.string,
  lineWidth: PropTypes.string,
  readOnly: PropTypes.bool,
  circleheight: PropTypes.string,
  CircleRadius: PropTypes.string,
  numbersMaginTop: PropTypes.string,
  numbersMarginLeft: PropTypes.string,
  initialParam: PropTypes.string,
  finalParam: PropTypes.string,
  level: PropTypes.number,
  setLevel: PropTypes.func,
}
