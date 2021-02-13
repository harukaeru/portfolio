import React from 'react'

export default function Index() {
  return (
    <div>
      <div className="text-4xl mt-10 sm:mt-36">Hello, I am Kaeru</div>
      <section className="ml-3 mt-1 flex flex-col">
        <div>
          <p className="mt-1">Konnichiwa!</p>
          <p className="mt-1">My name is Kaeru.</p>
          <p className="mt-1">I am a programmer living in Japan.</p>
          <p className="mt-1">You can reach me from the bottom-right button.</p>
        </div>
        <div className="self-end disappear-when-xs mt-6 sm:mt-20 ml-auto mr-2 sm:mr-auto">
          <img
            className="block h-24 rounded-full"
            src="/images/kaeru.png"
            alt="Kaeru Face"
          />
        </div>
      </section>
    </div>
  )
}
