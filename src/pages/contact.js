import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Section from "../components/globals/section/Section"
import ContactForm from "../components/ContactForm"
import Intro from "../components/Intro"

const Contact = () => (
  <Layout>
    <SEO
      title="Contact | Kozo Sushi Hawaii"
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
        <Banner title="Contact"></Banner>
      </Section>
    </HeaderIndex>
    <Section id="information" style={{ marginTop: "2rem" }}>
      <Intro heading="how can we help you?" />
      <ContactForm />
    </Section>
  </Layout>
)

export default Contact
