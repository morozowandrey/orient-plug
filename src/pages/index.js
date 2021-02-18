import React from 'react'
import { Helmet } from 'react-helmet'

import favicon16 from '../images/favicon16.png'
import favicon32 from '../images/favicon32.png'
import favicon196 from '../images/favicon196.png'

export default function Index() {
  return (
    <main className="homepage wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Orient studio site"></meta>
        <title>Orient</title>
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16}></link>
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32}></link>
        <link
          rel="icon"
          type="image/png"
          sizes="196x196"
          href={favicon196}
        ></link>
      </Helmet>
      <div className="home">
        <div className="home-info">
          <h1 className="home-info__title underline">Orient — studio</h1> and
          creative partnership{' '}
          <span className="home-info__part">
            of{' '}
            <a
              href="https://annayushch.com/"
              target="_blank"
              className="home-info__link"
            >
              Anna Yushchenko
            </a>{' '}
            and{' '}
            <a
              href="https://www.facebook.com/morozow.power"
              target="_blank"
              className="home-info__link"
            >
              Andrey Morozow
            </a>{' '}
            that{' '}
            <span className="divider">
              <br />
            </span>{' '}
            specialises in design and code
          </span>
        </div>
        <div className="home-badge">
          <p className="home-badge__title">Orient</p>
          <p className="home-badge__info">Coming soon</p>
        </div>
      </div>
    </main>
  )
}
