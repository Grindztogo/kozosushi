import React from "react"
import styled from "styled-components"

const Intro = ({ heading, subheading, children }) => {
  return (
    <IntroWrapper>
      <div>
        <h2>{heading}</h2>
        <p>{subheading}</p>
        {children}
      </div>
    </IntroWrapper>
  )
}

const IntroWrapper = styled.div`
  flex-basis: 100%;
  margin-bottom: 1rem;
  color: var(--darkGray);
  h2 {
    color: var(--mainBlue);
    letter-spacing: 1px;
    line-height: 3.5rem;
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    flex-basis: 100%;
    h2 {
      font-size: 1.2rem;
      margin-bottom: 0rem;
    }
    p {
      font-size: 0.8rem;
      line-height: 1.2rem;
    }
  }
`

export default Intro
