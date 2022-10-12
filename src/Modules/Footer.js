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
    <div className="card-footer footer bg-dark pl-2 pr-2">
      <div className="data footer-item text-light">
        <p>This project using API from TMDB</p>
        <p>
          Copyright &copy; by
          <a href="http://https://fb.com/phamquan2204/"> Phạm Quân</a>
        </p>
      </div>

      <div className="footer-item contact-me">
        <p className="h3 text-center text-light">Contact me</p>
        <div className="social">
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

      <a href="#header" className="footer-item-a text-light text-capitalize">
        To the top
        <i className="fa-solid fa-up-long ml-1"></i>
      </a>
    </div>
  )
}

export default Footer