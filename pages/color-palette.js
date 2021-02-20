import React from 'react'
import style from '../styles/color-palette.module.scss'

export default function ColorPalette() {
  return (
    <div className={style.root}>
      <div className={style.base_color}/>
      <div className={style.dark_color}/>
      <div className={style.main_color}/>
      <div className={style.light_color}/>
      <div className={style.white_color}/>
    </div>
  )
}
