import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Section from "../components/globals/section/Section"
import PearlridgeMenu from "../components/PearlridgeMenu"
import Map from "../components/Map"
import styled from "styled-components"

const Pearlridge = () => (
  <Layout>
    <PageWrapper>
      <SEO
        title="Home | Kozo Sushi Hawaii"
        description="You won't forget the tastes of our Japanese sushi, so visit us at our Hawaii restaurant today and see why we're known throughout Honolulu for the freshest flavors around.`,
      author: `@restaurantmarketinghawaii"
        keywords={[
          `Kozo Sushi Hawaii`,
          `Kozo Sushi Honolulu`,
          `Hawaii Sushi`,
          `Honolulu Sushi`,
          `Sushi Platter Honolulu`,
        ]}
      />
      <HeaderIndex style={{ padding: "4rem 0rem" }}>
        <Section style={{ width: "100vw", alignItems: "center" }}>
          <Banner smallTitle="Pearlridge"></Banner>
        </Section>
      </HeaderIndex>
      <Section style={{ padding: "6rem 0rem" }}>
        <PearlridgeMenu />
      </Section>
      <Section style={{ width: "100%" }}>
        <Map location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.1789255274875!2d-157.94218264893289!3d21.38285838573804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006f4d57b24cd5%3A0x971821830c18f6dc!2sKozo%20Sushi!5e0!3m2!1sen!2sus!4v1585625408246!5m2!1sen!2sus" />
      </Section>
    </PageWrapper>
  </Layout>
)

const PageWrapper = styled.div`
  p {
    margin: 1rem 0rem;
  }
`

export default Pearlridge
