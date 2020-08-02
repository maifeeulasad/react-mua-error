import React from 'react'
import style from './styles.module.css'

export default class Error extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      code: '404'
    }
  }

  render() {
    return (
      <div className={style.align}>
        <div className={style.grid}>
          <div className={style.grid__row}>
            {[...this.state.code].map((cha, i) => {
              if (i % 2) {
                return (
                  <div className={style.grid__col}>
                    <div
                      className={
                        style.box +
                        ' ' +
                        style.animation +
                        ' ' +
                        style.animationShakeVertical
                      }
                    >
                      {cha}
                    </div>
                  </div>
                )
              } else {
                return (
                  <div className={style.grid__col}>
                    <div
                      className={
                        style.box +
                        ' ' +
                        style.animation +
                        ' ' +
                        style.animationShakeVertical +
                        ' ' +
                        style.animationReverse
                      }
                    >
                      {cha}
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    )
  }
}
