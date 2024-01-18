import React from 'react'
import Button from './Button'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pd-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get For Free Now!</h2>
          <p className="regular-16 text-gray-10">Available On iOS and Android</p>

          <div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'>
            <Button 
              type='button'
              title='Apple Store'
              icon='/apple.svg'
              variant='bnt_white'
              full
            />
            <Button 
              type='button'
              title='Play Store'
              icon='/android.svg'
              variant='bnt_dark_green_outline'
              full
            />
          </div>
        </div>

        .flex
      </div>
    </section>
  )
}

export default GetApp
