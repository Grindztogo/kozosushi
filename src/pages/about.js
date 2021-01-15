import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Section from "../components/globals/section/Section"
import ContactForm from "../components/ContactForm"
import Intro from "../components/Intro"
import styled from "styled-components"

const About = () => (
  <Layout>
    <AboutWrapper>
      <SEO
        title="Home | Kozo Sushi Hawaii"
        description="You won't forget the tastes of our Japanese sushi, so visit us at our Hawaii restaurant today and see why we're known throughout Honolulu for the freshest flavors around.`,
      author: `@restaurantmarketinghawaii"
        keywords={[
          `Chinese Restaurant`,
          `Hawaii Restaurant`,
          `Hawaii Chinese Food`,
          `Chinese Takeout`,
        ]}
      />
      <HeaderIndex style={{ padding: "4rem 0rem" }}>
        <Section style={{ width: "100vw", alignItems: "center" }}>
          <Banner title="About us"></Banner>
        </Section>
      </HeaderIndex>
      <Section style={{ marginTop: "2rem" }}>
        <Intro heading="kozo sushi hawaii">
          <p>
            When Kozo Sushi first opened in Osaka, Japan, the then-fledgling
            company was initially established to fill a niche market, filling a
            gap that existed between an okazuya and a pricey sushi bar. Kozo
            Sushi has been the most popular fast food take out sushi restaurant
            in Japan since if first opened in 1972, and today Hawaii is home to
            several locations, including Kozo Sushi Kahala Mall, Pearl City,
            Pearlridge, and Moiliili.
          </p>
          <p>
            We use the best ingredients available, and cook the rice using
            special Kozo Sushi vinegar. Our sushi has the similar quality of
            sushi served at many sit-down restaurants but at a much cheaper
            price. We do offer great value. In economy, more people are choosing
            to eat sushi at our store instead of at sit-down restaurants because
            they prefer the great value we offer.
          </p>
          <p>
            We have gained many customers who love our new menu items. The chefs
            at Kozo Sushi are constantly inventing new dishes, so stop in often
            to discover their latest creations. The chefs enjoy drawing on local
            flavors, playing with different ingredients and mixing things up.
            Kozo is in the process of inventing new sushi dishes right now and
            hopes to unveil the items next month. To keep updated on Kozo’s new
            items, visit this website.
          </p>
        </Intro>
      </Section>
      <Section style={{ marginTop: "2rem" }}>
        <ContactForm />
      </Section>
    </AboutWrapper>
  </Layout>
)

const AboutWrapper = styled.div`
  p {
    margin: 1rem 0rem;
  }
`

export default About
