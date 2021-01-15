import React from "react"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Button from "../components/globals/button/Button"
import Section from "../components/globals/section/Section"
import LocationBox from "../components/LocationBox"
import Gallery from "../components/Gallery"

const IndexPage = () => (
  <Layout>
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
        <Banner
          title="Kozo Sushi Hawaii"
          subtitle="You won't forget the tastes of our Japanese sushi, so visit us at our Hawaii restaurant today and see why we're known throughout Honolulu for the freshest flavors around."
        >
          <AniLink fade to="#locations">
            <Button>ORDER TAKEOUT</Button>
          </AniLink>
        </Banner>
      </Section>
    </HeaderIndex>

    <Section
      id="locations"
      style={{
        width: "100vw",
        marginTop: "1rem",
        justifyContent: "space-evenly",
      }}
    >
      <LocationBox
        name="kozo sushi pearl city"
        address="1029 Makolu St ste c, Pearl City, HI 96782"
        phone="(808) 455-6805"
        hours1="Daily 10:00am-9:00pm"
        link="https://www.grindztogo.com/single.php/order/restaurant/kozo-sushi-pearl-city/19?takeout=1"
      />
      <LocationBox
        name="kozo sushi moiliili"
        address="2334 S King St, Honolulu, HI 96826"
        phone="(808) 951-5696"
        hours1="Mon-Thur 9:30am-7:00pm"
        hours2="Fri & Sat 9:30am-8:00pm"
        hours3="Sun 9:30am-6:00pm"
        link="https://www.grindztogo.com/single.php/order/restaurant/kozo-sushi-moiliili/21?takeout=1"
      />
      <LocationBox
        name="kozo sushi kahala mall"
        address="4618 Kilauea Ave, Honolulu, HI 9681"
        phone="(808) 738-5696"
        hours1="Mon-Thur 9:30am-7:00pm"
        hours2="Fri & Sat 9:30am-8:00pm"
        hours3="Sun 9:30am-6:00pm"
        link="https://www.grindztogo.com/single.php/order/restaurant/kozo-sushi-kahala/22?takeout=1"
      />
    </Section>
    <Section style={{ margin: "2rem auto 0rem auto", width: "100vw" }}>
      <Gallery />
    </Section>
  </Layout>
)

export default IndexPage
