import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Section from "../components/globals/section/Section"
import MoiliiliMenu from "../components/MoiliiliMenu"
import Map from "../components/Map"
import styled from "styled-components"

const Moiliili = () => (
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
          <Banner smallTitle="Moiliili"></Banner>
        </Section>
      </HeaderIndex>
      <Section style={{ padding: "6rem 0rem" }}>
        <MoiliiliMenu />
      </Section>
      <Section style={{ width: "100%" }}>
        <Map location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.4370040764707!2d-157.82811804893416!3d21.293741985785985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006d919edfbe39%3A0xeb0726f0f77f4863!2sKozo%20Sushi!5e0!3m2!1sen!2sus!4v1585625999412!5m2!1sen!2sus" />
      </Section>
    </PageWrapper>
  </Layout>
)

const PageWrapper = styled.div`
  p {
    margin: 1rem 0rem;
  }
`

export default Moiliili
