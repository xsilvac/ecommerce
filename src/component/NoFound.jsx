import React from 'react'
import noFound from '../img/noFound.png'

const NoFound = () => {
  return (
    <section className="d-flex justify-content-center">
        <img src={ noFound } alt='NoFound' width='55%' />
    </section>
  )
}

export default NoFound