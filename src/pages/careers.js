import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Section from "../components/globals/section/Section"
import Intro from "../components/Intro"
import styled from "styled-components"

const About = () => (
  <Layout>
    <SEO
      title="Home | Kozo Sushi Hawaii"
      description="You won't forget the tastes of our Japanese sushi, so visit us at our Hawaii restaurant today and see why we're known throughout Honolulu for the freshest flavors around.`,
      author: `@restaurantmarketinghawaii"
      keywords={[
        `Sushi Restaurant`,
        `Hawaii Restaurant`,
        `Hawaii Sushi`,
        `Poke Takeout`,
      ]}
    />
    <HeaderIndex style={{ padding: "4rem 0rem" }}>
      <Section style={{ width: "100vw", alignItems: "center" }}>
        <Banner title="Careers"></Banner>
      </Section>
    </HeaderIndex>
    <Section style={{ marginTop: "2rem" }}>
      <Intro heading="Employment Form"></Intro>
    </Section>
    <Section style={{ marginTop: "2rem" }}>
      <FormWrapper>
        <form
          name="contact"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <ul class="form-list">
            <li id="hidden">
              <label>
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
            </li>
            <li class="form-list__row">
              <label htmlFor="name">
                Name (required):
                <input id="name" type="text" name="name" required="true" />
              </label>
            </li>
            <li class="form-list__row">
              <label htmlFor="email">
                Email (required):
                <input id="email" type="text" name="email" required="true" />
              </label>
            </li>

            <li class="form-list__row">
              <label htmlFor="address">
                Address:
                <input
                  id="address"
                  type="text"
                  name="address"
                  required="false"
                />
              </label>
            </li>

            <li class="form-list__row">
              <label htmlFor="telephone">
                Phone Number (Required):
                <input
                  id="telephone"
                  type="tel"
                  name="telephone"
                  required="true"
                />
              </label>
            </li>

            <li class="form-list__row">
              <p style={{ fontSize: "0.7rem", marginBottom: "0" }}>
                <strong>Position Applying For?</strong>
              </p>
              <br />
              <div style={{ display: "flex" }}>
                <label style={{ marginRight: "1rem" }} htmlFor="Cashier">
                  Cashier
                  <input
                    type="radio"
                    id="Cashier"
                    name="position"
                    value="Cashier"
                  />
                </label>
                <label style={{ marginRight: "1rem" }} htmlFor="Shari Maker">
                  Shari Maker
                  <input
                    type="radio"
                    id="Shari Maker"
                    name="position"
                    value="Shari Maker"
                  />
                </label>
                <label style={{ marginRight: "1rem" }} htmlFor="Sushi Maker">
                  Sushi Maker
                  <input
                    type="radio"
                    id="Sushi Maker"
                    name="position"
                    value="Sushi Maker"
                  />
                </label>
              </div>
            </li>

            <li class="form-list__row">
              <p style={{ fontSize: "0.7rem", marginBottom: "0" }}>
                <strong>Which Location?</strong>
              </p>
              <br />
              <div style={{ display: "flex" }}>
                <label style={{ marginRight: "1rem" }} htmlFor="PearlCity">
                  Pearl City
                  <input
                    type="radio"
                    id="PearlCity"
                    name="time"
                    value="PearlCity"
                  />
                </label>
                <label style={{ marginRight: "1rem" }} htmlFor="PearlRidge">
                  Pearl Ridge
                  <input
                    type="radio"
                    id="PearlRidge"
                    name="time"
                    value="PearlRidge"
                  />
                </label>
                <label style={{ marginRight: "1rem" }} htmlFor="Kahala">
                  Kahala
                  <input type="radio" id="Kahala" name="time" value="Kahala" />
                </label>
                <label style={{ marginRight: "1rem" }} htmlFor="Moiliili">
                  Moiliili
                  <input
                    type="radio"
                    id="Moiliili"
                    name="time"
                    value="Moiliili"
                  />
                </label>
              </div>
            </li>

            <li class="form-list__row">
              <p style={{ fontSize: "0.7rem", marginBottom: "0" }}>
                <strong>Type of Employment?</strong>
              </p>
              <br />
              <div style={{ display: "flex" }}>
                <label style={{ marginRight: "1rem" }} htmlFor="Full-Time">
                  Full-Time
                  <input
                    type="radio"
                    id="Full-Time"
                    name="time"
                    value="Full-Time"
                  />
                </label>
                <label style={{ marginRight: "1rem" }} htmlFor="Part-Time">
                  Part-Time
                  <input
                    type="radio"
                    id="Part-Time"
                    name="time"
                    value="Part-Time"
                  />
                </label>
              </div>
            </li>

            <li class="form-list__row">
              <label htmlFor="rate">
                Expected Pay Rate:
                <input id="rate" type="number" name="rate" required="false" />
              </label>
            </li>

            <li class="form-list__row">
              <label htmlFor="startddate">
                Start Date & Time:
                <input
                  id="startddate"
                  type="date"
                  name="startddate"
                  required="false"
                />
              </label>
            </li>

            <li class="form-list__row">
              <p
                style={{
                  fontSize: "0.7rem",
                  marginBottom: "0",
                }}
              >
                <strong>Hours Available to Work?</strong>
              </p>
              <br />
              <div style={{}}>
                <li class="form-list__row">
                  <label style={{ marginRight: "1rem" }} htmlFor="Monday">
                    Monday
                    <input type="time" id="Monday" name="time" value="" />
                  </label>
                </li>
                <li class="form-list__row">
                  <label style={{ marginRight: "1rem" }} htmlFor="Tuesday">
                    Tuesday
                    <input type="time" id="Tuesday" name="time" value="" />
                  </label>
                </li>
                <li class="form-list__row">
                  <label style={{ marginRight: "1rem" }} htmlFor="Wednesday">
                    Wednesday
                    <input type="time" id="Wednesday" name="time" value="" />
                  </label>
                </li>
                <li class="form-list__row">
                  <label style={{ marginRight: "1rem" }} htmlFor="Thursday">
                    Thursday
                    <input type="time" id="Thursday" name="time" value="" />
                  </label>
                </li>
                <li class="form-list__row">
                  <label style={{ marginRight: "1rem" }} htmlFor="Friday">
                    Friday
                    <input type="time" id="Friday" name="time" value="" />
                  </label>
                </li>
                <li class="form-list__row">
                  <label style={{ marginRight: "1rem" }} htmlFor="Saturday">
                    Saturday
                    <input type="time" id="Saturday" name="time" value="" />
                  </label>
                </li>
                <li class="form-list__row">
                  <label style={{ marginRight: "1rem" }} htmlFor="Sunday">
                    Sunday
                    <input type="time" id="Sunday" name="time" value="" />
                  </label>
                </li>
              </div>
            </li>

            <li class="form-list__row">
              <p style={{ fontSize: "0.7rem", marginBottom: "0" }}>
                <strong>Have you ever worked for Kozo Sushi?</strong>
              </p>
              <br />
              <div style={{ display: "flex" }}>
                <label style={{ marginRight: "1rem" }} htmlFor="Yes">
                  Yes
                  <input type="radio" id="Yes" name="time" value="Yes" />
                </label>
                <label style={{ marginRight: "1rem" }} htmlFor="No">
                  No
                  <input type="radio" id="No" name="time" value="No" />
                </label>
              </div>
            </li>
            <li class="form-list__row">
              <label htmlFor="when">
                If yes, when:
                <input id="when" type="date" name="when" required="" />
              </label>
            </li>
            <li class="form-list__row">
              <label htmlFor="where">
                If yes, where:
                <input id="where" type="text" name="where" required="" />
              </label>
            </li>
            <li class="form-list__row">
              <label htmlFor="relatives">
                Do you have any friends or relatives working for Kozo?
                <input
                  id="relatives"
                  type="text"
                  name="relatives"
                  required=""
                />
              </label>
            </li>

            <li class="form-list__row">
              <p style={{ fontSize: "0.7rem", marginBottom: "0" }}>
                Do you have reliable transportation to and from work?
              </p>
              <br />
              <div style={{ display: "flex" }}>
                <label style={{ marginRight: "1rem" }} htmlFor="Yes">
                  Yes
                  <input
                    type="radio"
                    id="Yes"
                    name="transportation"
                    value="Yes"
                  />
                </label>
                <label style={{ marginRight: "1rem" }} htmlFor="No">
                  No
                  <input
                    type="radio"
                    id="No"
                    name="transportation"
                    value="No"
                  />
                </label>
              </div>
            </li>

            <li class="form-list__row">
              <p style={{ fontSize: "0.7rem", marginBottom: "0" }}>
                Do you have physical, mental, or medical impairment that would
                interfere with your ability to perform the essential duties of
                this job with or without an accomodation?
              </p>
              <br />
              <div style={{ display: "flex" }}>
                <label style={{ marginRight: "1rem" }} htmlFor="Yes">
                  Yes
                  <input type="radio" id="Yes" name="impairment" value="Yes" />
                </label>
                <label style={{ marginRight: "1rem" }} htmlFor="No">
                  No
                  <input type="radio" id="No" name="impairment" value="No" />
                </label>
              </div>
            </li>

            <li class="form-list__row">
              <label htmlFor="impairmentyes">
                If "Yes", please describe in full.
                <input
                  id="impairmentyes"
                  type="text"
                  name="impairmentyes"
                  required=""
                />
              </label>
            </li>

            <li class="form-list__row">
              <p style={{ fontSize: "0.7rem", marginBottom: "0" }}>
                Are you able at the time of employment to submit verification of
                your legal right to work in the U.S.?
              </p>
              <br />
              <div style={{ display: "flex" }}>
                <label style={{ marginRight: "1rem" }} htmlFor="Yes">
                  Yes
                  <input type="radio" id="Yes" name="legal" value="Yes" />
                </label>
                <label style={{ marginRight: "1rem" }} htmlFor="No">
                  No
                  <input type="radio" id="No" name="legal" value="No" />
                </label>
              </div>
            </li>

            <li class="form-list__row">
              <p style={{ fontSize: "0.7rem", marginBottom: "0" }}>
                <strong>
                  List all present and past employment below, beginning with
                  most recent:
                </strong>
              </p>
              <br />

              <li class="form-list__row">
                <label htmlFor="pastemployment">
                  Company Name, Address, & Phone Number:
                  <input
                    id="pastemployment"
                    type="text"
                    name="pastemployment"
                    required=""
                  />
                </label>
              </li>
              <li class="form-list__row">
                <label htmlFor="SEDate">
                  Start & End Date:
                  <input id="SEDate" type="date" name="SEDate" required="" />
                </label>
              </li>
              <li class="form-list__row">
                <label htmlFor="position">
                  Position Held:
                  <input
                    id="position"
                    type="text"
                    name="position"
                    required=""
                  />
                </label>
              </li>
              <li class="form-list__row">
                <label htmlFor="startingsalary">
                  Starting Salary:
                  <input
                    id="startingsalary"
                    type="number"
                    name="startingsalary"
                    required=""
                  />
                </label>
              </li>
              <li class="form-list__row">
                <label htmlFor="endingsalary">
                  Ending Salary:
                  <input
                    id="endingsalary"
                    type="number"
                    name="endingsalary"
                    required=""
                  />
                </label>
              </li>
              <li class="form-list__row">
                <label htmlFor="leaving">
                  Reason For Leaving:
                  <input id="leaving" type="text" name="leaving" required="" />
                </label>
              </li>
              <li class="form-list__row">
                <label htmlFor="supervisor">
                  Name of Supervisor:
                  <input
                    id="supervisor"
                    type="text"
                    name="supervisor"
                    required=""
                  />
                </label>
              </li>
            </li>

            <li class="form-list__row">
              <p style={{ fontSize: "0.7rem", marginBottom: "0" }}>
                <strong>
                  Personal References (Not former employees or relatives)
                </strong>
              </p>
              <br />
              <li class="form-list__row">
                <label htmlFor="references">
                  Name & Address 1:
                  <input
                    id="references"
                    type="text"
                    name="references"
                    required=""
                  />
                </label>
              </li>
              <li class="form-list__row">
                <label htmlFor="occupation1">
                  Occupation 1:
                  <input
                    id="occupation1"
                    type="text"
                    name="occupation1"
                    required=""
                  />
                </label>
              </li>
              <li class="form-list__row">
                <label htmlFor="phone2">
                  Phone Number 1:
                  <input id="phone1" type="tel" name="phone1" required="" />
                </label>
              </li>
              <li class="form-list__row">
                <label htmlFor="ref2">
                  Name & Address 2:
                  <input id="ref2" type="text" name="ref2" required="" />
                </label>
              </li>
              <li class="form-list__row">
                <label htmlFor="occupation2">
                  Occupation 2:
                  <input
                    id="occupation2"
                    type="text"
                    name="occupation2"
                    required=""
                  />
                </label>
              </li>
              <li class="form-list__row">
                <label htmlFor="phone2">
                  Phone Number 2:
                  <input id="phone2" type="tel" name="phone2" required="" />
                </label>
              </li>
              <li class="form-list__row">
                <label htmlFor="ref3">
                  Name & Address 3:
                  <input id="ref3" type="text" name="ref3" required="" />
                </label>
              </li>
              <li class="form-list__row">
                <label htmlFor="occupation3">
                  Occupation 3:
                  <input
                    id="occupation3"
                    type="text"
                    name="occupation3"
                    required=""
                  />
                </label>
              </li>
              <li class="form-list__row">
                <label htmlFor="phone3">
                  Phone Number 3:
                  <input id="phone3" type="tel" name="phone3" required="" />
                </label>
              </li>
            </li>

            <li class="form-list__row">
              <p style={{ fontSize: "0.7rem", marginBottom: "0" }}>
                <strong>Record of Education</strong>
              </p>
              <br />
              <li class="form-list__row">
                <label htmlFor="HSEducation">
                  High School Name & Address:
                  <input
                    id="HSEducation"
                    type="text"
                    name="HSEducation"
                    required=""
                  />
                </label>
              </li>
              <li class="form-list__row">
                <label htmlFor="HSattendance">
                  Years Attended:
                  <input
                    id="HSattendance"
                    type="number"
                    name="HSattendance"
                    required=""
                  />
                </label>
              </li>
            </li>
            <li class="form-list__row">
              <p style={{ fontSize: "0.7rem", marginBottom: "0" }}>
                Did you graduate?
              </p>
              <br />
              <div style={{ display: "flex" }}>
                <label style={{ marginRight: "1rem" }} htmlFor="YesGraduate">
                  Yes
                  <input type="radio" id="YesGraduate" name="legal" value="" />
                </label>
                <label style={{ marginRight: "1rem" }} htmlFor="NoGraduate">
                  No
                  <input type="radio" id="NoGraduate" name="legal" value="" />
                </label>
              </div>
            </li>
            <li class="form-list__row">
              <label htmlFor="diploma">
                List diploma or degree:
                <input id="diploma" type="text" name="diploma" required="" />
              </label>
            </li>
            <li class="form-list__row">
              <label htmlFor="activities">
                Extracurricular Activities:
                <input
                  id="activities"
                  type="text"
                  name="activities"
                  required=""
                />
              </label>
            </li>
            <li class="form-list__row">
              <label htmlFor="college">
                College Name & Address:
                <input id="college" type="text" name="college" required="" />
              </label>
            </li>
            <li class="form-list__row">
              <label htmlFor="major">
                Course of Study or Major:
                <input id="major" type="text" name="major" required="" />
              </label>
            </li>
            <li class="form-list__row">
              <label htmlFor="CollegeAttendance">
                Years attended:
                <input
                  id="CollegeAttendance"
                  type="number"
                  name="CollegeAttendance"
                  required=""
                />
              </label>
            </li>
            <li class="form-list__row">
              <p style={{ fontSize: "0.7rem", marginBottom: "0" }}>
                Did you graduate?
              </p>
              <br />
              <div style={{ display: "flex" }}>
                <label style={{ marginRight: "1rem" }} htmlFor="CollegeYes">
                  Yes
                  <input type="radio" id="CollegeYes" name="legal" value="" />
                </label>
                <label style={{ marginRight: "1rem" }} htmlFor="CollegeNo">
                  No
                  <input type="radio" id="CollegeNo" name="legal" value="" />
                </label>
              </div>
            </li>
            <li class="form-list__row">
              <label htmlFor="CollegeDiploma">
                List diploma or degree:
                <input
                  id="CollegeDiploma"
                  type="number"
                  name="CollegeDiploma"
                  required=""
                />
              </label>
            </li>
            <li class="form-list__row">
              <label htmlFor="CollegeActivities">
                College Extracurricular Activities:
                <input
                  id="CollegeActivities"
                  type="text"
                  name="CollegeActivities"
                  required=""
                />
              </label>
            </li>
            <li class="form-list__row">
              <p style={{ fontSize: "0.7rem", marginBottom: "0" }}>
                <strong>Background</strong>
              </p>
            </li>
            <li class="form-list__row">
              <p style={{ fontSize: "0.7rem", marginBottom: "0" }}>
                Are you at least 18 years of age or older?
              </p>
              <br />
              <div style={{ display: "flex" }}>
                <label style={{ marginRight: "1rem" }} htmlFor="18YearsYes">
                  Yes
                  <input type="radio" id="18YearsYes" name="legal" value="" />
                </label>
                <label style={{ marginRight: "1rem" }} htmlFor="18YearsNo">
                  No
                  <input type="radio" id="18YearsNo" name="legal" value="" />
                </label>
              </div>
            </li>

            <li class="form-list__row">
              <p style={{ fontSize: "0.7rem", marginBottom: "0" }}>
                Have you ever been counseled or disciplined in a prior job for
                cash handling violations?
              </p>
              <br />
              <div style={{ display: "flex" }}>
                <label style={{ marginRight: "1rem" }} htmlFor="ViolationYes">
                  Yes
                  <input type="radio" id="ViolationYes" name="legal" value="" />
                </label>
                <label style={{ marginRight: "1rem" }} htmlFor="ViolationNo">
                  No
                  <input type="radio" id="ViolationNo" name="legal" value="" />
                </label>
              </div>
            </li>

            <li class="form-list__row">
              <p style={{ fontSize: "0.7rem", marginBottom: "0" }}>
                Have you ever been counseled, disciplined or terminated in a
                prior job for theft, violence, discrimination or harasssment?
              </p>
              <br />
              <div style={{ display: "flex" }}>
                <label style={{ marginRight: "1rem" }} htmlFor="DisciplinedYes">
                  Yes
                  <input
                    type="radio"
                    id="DisciplinedYes"
                    name="legal"
                    value=""
                  />
                </label>
                <label style={{ marginRight: "1rem" }} htmlFor="DisciplinedNo">
                  No
                  <input
                    type="radio"
                    id="DisciplinedNo"
                    name="legal"
                    value=""
                  />
                </label>
              </div>
            </li>
            <li class="form-list__row">
              <label htmlFor="BackgroundExplanation">
                If you have answered Yes to any of the above, please describe in
                full:
                <input
                  id="BackgroundExplanation"
                  type="text"
                  name="BackgroundExplanation"
                  required=""
                />
              </label>
            </li>
            <li class="form-list__row">
              <p style={{ fontSize: "0.7rem", marginBottom: "0" }}>
                <strong>Security Data</strong>
              </p>
            </li>
            <li class="form-list__row">
              <p style={{ fontSize: "0.7rem", marginBottom: "0" }}>
                Within the past 10 years, have you ever been convicted of a
                felony, entered a plea of nolo to a felony charge or been
                convicted of a misdemeanor?
              </p>
              <br />
              <div style={{ display: "flex" }}>
                <label style={{ marginRight: "1rem" }} htmlFor="ConvictionYes">
                  Yes
                  <input
                    type="radio"
                    id="ConvictionYes"
                    name="legal"
                    value=""
                  />
                </label>
                <label style={{ marginRight: "1rem" }} htmlFor="ConvictionNo">
                  No
                  <input type="radio" id="ConvictionNo" name="legal" value="" />
                </label>
              </div>
            </li>
            <li class="form-list__row">
              <label htmlFor="ConvictionExplaination">
                If you have answered Yes, please describe in full
                <input
                  id="ConvictionExplaination"
                  type="text"
                  name="ConvictionExplaination"
                  required=""
                />
              </label>
            </li>

            <li>
              <button type="submit" class="button">
                submit
              </button>
            </li>
          </ul>
        </form>
      </FormWrapper>
    </Section>
  </Layout>
)

const FormWrapper = styled.div`
  width: 80%;
  padding-bottom: 4rem;
  margin: 0px auto;
  #hidden {
    display: none;
  }
  input[type="radio"] {
    min-height: 0px;
    width: 10px;
    height: 10px;
    margin-left: 0.5rem;
  }
  .visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  .button {
    color: var(--white);
    background-color: var(--mainColor);
    padding: 12px 25px;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: 0;
    border-radius: 2px;
    outline: 0;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.2s;
  }
  .button:hover,
  .button:active,
  .button:focus {
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    cursor: pointer;
  }

  .button--transparent {
    background: transparent;
    border: 0;
    outline: 0;
  }

  .button--close {
    position: absolute;
    top: 10px;
    left: 10px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    color: #ffffff;
    border-radius: 50%;
    transition: all 0.25s;
    z-index: 10;
  }
  .button--close svg {
    width: 20px;
    height: 20px;
  }
  .button--close svg * {
    fill: currentColor;
  }
  .button--close:hover,
  .button--close:active,
  .button--close:focus {
    color: #fbcf34;
    background-color: var(--mainColor);
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.1);
  }

  .button--info {
    position: absolute;
    top: 0;
    right: 0;
  }

  input {
    width: calc(100% - 10px);
    min-height: 30px;
    padding-left: 5px;
    padding-right: 5px;
    letter-spacing: 0.5px;
    border: 0;
    border-bottom: 1px solid #f0f0f0;
  }
  input:valid {
    border-color: lightgreen;
  }
  input:focus {
    outline: none;
    border-color: lightgreen;
  }

  .form-list {
    padding-left: 0;
    list-style: none;
  }
  .form-list__row {
    margin-bottom: 25px;
  }
  .form-list__row label {
    position: relative;
    display: block;
    text-transform: capitalize;
    font-weight: 400;
    font-size: 11px;
    color: var(--gray);
  }
  .form-list__row--inline {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .form-list__row--inline > :first-child {
    -ms-flex: 2;
    flex: 2;
    padding-right: 20px;
  }
  .form-list__row--inline > :nth-child(2n) {
    -ms-flex: 1;
    flex: 1;
  }
  .form-list__input-inline {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .form-list__input-inline > * {
    width: calc(50% - 10px - 10px);
  }
  .form-list__row--agree {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 12px;
  }
  .form-list__row--agree label {
    font-weight: 400;
    text-transform: none;
    color: #676767;
  }
  .form-list__row--agree input {
    width: auto;
    margin-right: 5px;
  }
  textarea {
    width: 100%;
    height: 200px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

export default About
