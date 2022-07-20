import React from 'react'
import noFound from '../img/noFound.png'

const NoFound = () => {
  return (
    <section className="d-flex justify-content-around">
        <img src={ noFound } alt='NoFound' width='60%' />
    </section>
  )
}

export default NoFound