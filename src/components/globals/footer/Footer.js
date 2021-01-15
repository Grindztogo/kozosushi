import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa"

class Footer extends Component {
  state = {
    icons: [
      {
        id: 2,
        icon: <FaInstagram className="icon facebook-instagram" />,
        path: "https://www.instagram.com/restaurantmarketinghawaii",
      },
      {
        id: 3,
        icon: <FaGoogle className="icon google-icon" />,
        path: "https://www.google.com/restaurantmarketinghawaii",
      },
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://www.facebook.com/restaurantmarketinghawaii",
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <div className="box contact">
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
          <p>
            privacy policy | terms & conditions |{" "}
            <Link className="link" to="/careers">
              careers
            </Link>{" "}
            | contact
          </p>
        </div>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  background: var(--darkGray);
  color: var(--white);
  h4 {
    letter-spacing: 1px;
  }
  p {
    font-size: 0.8rem;
    text-transform: capitalize;
  }
  .box {
    text-align: center;
    width: 100%;
    padding: 4rem 0rem;
  }
  a.link {
    font-size: 0.8rem;
    &:hover {
      color: var(--mainColor);
    }
  }
  a {
    color: var(--white);
    font-size: 2rem;
    line-height: 3rem;
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    .box {
      flex-basis: 100%;
    }
    .phone {
      font-size: 0.8rem;
    }
  }
`

export default Footer
