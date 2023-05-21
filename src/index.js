import React from 'react'
import PropTypes from 'prop-types'
import style from './styles.module.css'

const Error = ({ code }) => {
  const errorCode = code || '404'

  return (
    <div className={style.align}>
      <div className={style.grid}>
        <div className={style.grid__row}>
          {[...errorCode].map((character, i) => (
            <div className={style.grid__col} key={i}>
              <div
                className={`${style.box} ${style.animation} ${
                  i % 2
                    ? style.animationShakeVertical
                    : style.animationShakeVerticalReverse
                }`}
              >
                {character}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

Error.propTypes = {
  code: PropTypes.string
}

export default Error
