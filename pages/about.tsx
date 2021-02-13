import React from 'react'
import Lifegame from '../components/Lifegame'

/*
      <i className="fa-2x fab fa-twitter"></i>
      <i className="fa-2x fab fa-github-alt"></i>
      <i className="fa-2x fab fa-medium-m"></i>
      <i className="fa-2x fab fa-linkedin"></i>
      <i className="fa-2x fab fa-tiktok"></i>
      <i className="fa-2x fab fa-stack-overflow"></i>
      <i className="fa-2x fab fa-python"></i>
      <i className="fa-2x fab fa-angular"></i>
      <i className="fa-2x fab fa-react"></i>
      <i className="fa-2x fab fa-aws"></i>
      <i className="fa-2x fab fa-jira"></i>
      <i className="fa-2x fab fa-centos"></i>
      <i className="fa-2x fab fa-docker"></i>
      <i className="fa-2x fab fa-internet-explorer"></i>
      <i className="fa-2x fab fa-java"></i>
      */

const About = () => {
  return (
    <div>
      <section className="mb-4">
        <div className="text-4xl mt-10 sm:mt-20">Skillset</div>
        <div className="ml-4 mt-2 grid grid-cols-1 sm:grid-cols-2">
          <div className="mb-3">React / TypeScript</div>
          <div className="mb-3">Python 3.x / Django</div>
          <div className="mb-3">Ruby on Rails</div>
          <div className="mb-3">AWS</div>
          <div className="mb-3">etc... (Ask me!)</div>
        </div>
      </section>
      <section>
        <div className="text-4xl mt-0 sm:mt-20">Links</div>
        <div className="ml-4 mt-2 grid grid-cols-1 sm:grid-cols-2">
          <div className="mb-3">Twitter</div>
          <div className="mb-3">GitHub</div>
          <div className="mb-3">Medium</div>
          <div className="mb-3">StackOverflow</div>
        </div>
      </section>
    </div>
  )
}

export default About
