import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Section from "../components/globals/section/Section"
import PearlCityMenu from "../components/PearlCityMenu"
import Map from "../components/Map"
import styled from "styled-components"

const PearlCity = () => (
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
          <Banner smallTitle="Pearl City"></Banner>
        </Section>
      </HeaderIndex>
      <Section style={{ padding: "6rem 0rem" }}>
        <PearlCityMenu />
      </Section>
      <Section style={{ width: "100%" }}>
        <Map location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.7568884478496!2d-157.9761215489328!3d21.399475085728998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c00660d0f75175f%3A0xa4e0929e5ba11076!2sKozo%20Sushi!5e0!3m2!1sen!2sus!4v1585625929840!5m2!1sen!2sus" />
      </Section>
    </PageWrapper>
  </Layout>
)

const PageWrapper = styled.div`
  p {
    margin: 1rem 0rem;
  }
`

export default PearlCity
