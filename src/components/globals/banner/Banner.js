import React from "react"
import styled from "styled-components"

const Banner = ({ style, title, subtitle, smallTitle, children }) => {
  return (
    <BannerWrapper style={style}>
      <div className="box">
        <h1 className="title">{title}</h1>
        <h2 className="smallTitle">{smallTitle}</h2>
        <h3 className="subtitle">{subtitle}</h3>
        {children}
      </div>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  color: var(--white);
  .box {
    flex-basis: 80%;
    text-align: center;
    padding: 6rem 0rem 6rem 0rem;
  }
  .title,
  .subtitle {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .smallTitle {
    font-size: 4rem;
  }
  .title {
    font-size: 7rem;
    line-height: 6rem;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .subtitle {
    font-family: "Open Sans";
    font-size: 1.3rem;
    font-weight: lighter;
    line-height: 2rem;
  }
  @media (max-width: 768px) {
    flex-basis: 90%;
    justify-content: flex-start;
    margin: 0 auto;
    .box {
      flex-basis: 100%;
      padding: 6rem 0rem 4rem 0rem;
    }
    .smallTitle {
      font-size: 3rem;
    }
    .title {
      font-size: 4rem;
      line-height: 3rem;
      margin-bottom: 1rem;
    }
    .subtitle {
      font-size: 0.8rem;
      font-weight: 400;
      line-height: 1.2rem;
    }
  }
`

export default Banner
