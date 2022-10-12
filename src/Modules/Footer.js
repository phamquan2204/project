import React from 'react'
import { Link } from 'react-router-dom';
import '../Assets/Styles/Footer.css';
function Footer() {

  const icons = [
    {
      link: "https://www.linkedin.com/in/phamquan2204/",
      icon: "fa-brands fa-linkedin",
    },
    {
      link: "https://fb.com/phamquan2204/",
      icon: "fa-brands fa-facebook"
    },
    {
      link: "https://github.com/phamquan2204",
      icon: "fa-brands fa-github"
    }
  ]

  return (
    <div className="card-footer bg-dark ">
      <a href="#header" className="text-light">To the top </a>
      <div className="contact-me">
        {icons.map((icon) => {
          return (
            <a
              className="text-light"
              href={icon.link}>
              <i className={`${icon.icon}`}></i>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Footer