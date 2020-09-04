import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import './AngerBar.css'

let arr = []

export default function AngerBar(props) {
  const [colors, setColors] = useState([])
  const [angerLevel, setAngerLevel] = useState(null)

  console.log(angerLevel)

  useEffect(() => {
    function initialbar() {
      arr = []

      for (let i = 0; i <= (props.barSize || 10); i++) {
        arr.push({ number: i, isFilled: true })
      }
      arr.map((element, i) => {
        if (element.number <= (props.defaultValue || props.barSize || 0)) {
          arr[i].isFilled = true
        } else {
          arr[i].isFilled = false
        }
      })

      const newArr = [...arr]

      setColors(newArr)
    }
    initialbar()
  }, [])

  const barElements = colors.map((el, index) => {
    const fillCollors = () => {
      return el.isFilled
        ? props.filledColor || 'red'
        : props.unFilledColor || 'blue'
    }

    return (
      <div
        key={arr[index]?.number}
        style={{ display: 'flex', alignItems: 'center' }}
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
              arr.map((element, i) => {
                if (element.number <= el.number) {
                  arr[i].isFilled = true
                } else {
                  arr[i].isFilled = false
                }
              })

              setAngerLevel(el.number)

              const newArr = [...arr]

              setColors(newArr)
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
    <div style={{ display: 'flex', alignItems: 'center' }}>
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

AngerBar.propTypes = {
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
}
