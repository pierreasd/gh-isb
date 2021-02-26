import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

// assets
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Fade from "react-reveal/Fade";

// Sections for this page
import AboutSection from "./Sections/AboutSection.js";
import ProjectSection from "./Sections/ProjectSection.js";
import ContactSection from "./Sections/ContactSection.js";
import BlankSection from "./Sections/BlankSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  window.scrollTo({ top: 0 });

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="PT Indotan Sumbawa Bangkit"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "dark",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/gold.png")}>
        <div className={classes.container}>
          <Fade bottom cascade>
            <GridContainer>
              <Hidden mdDown>
                <GridItem xs={12} sm={12} md={6}>
                  <h1 className={classes.title}>PT Indotan Sumbawa Bangkit</h1>
                  <h4>
                    PT. Indotan Sumbawa Bangkit holds an IUP Exploration
                    covering the Taliwang Gold Project which is a prospective
                    gold, silver and copper concession in Sumbawa, Indonesia.
                  </h4>
                </GridItem>
              </Hidden>
              <Hidden lgUp>
                <GridItem xs={12} sm={12} md={6}>
                  <h2 className={classes.title}>PT Indotan Sumbawa Bangkit</h2>
                  <h4>
                    PT. Indotan Sumbawa Bangkit holds an IUP Exploration
                    covering the Taliwang Gold Project which is a prospective
                    gold, silver and copper concession in Sumbawa, Indonesia.
                  </h4>
                </GridItem>
              </Hidden>
            </GridContainer>
          </Fade>
        </div>
      </Parallax>

      <Hidden smDown>
        <div className={classNames(classes.main, classes.topRaised)}>
          <div className={classes.container}>
            <BlankSection />
            <AboutSection />
            <ProjectSection />
          </div>
        </div>
        <div className={classNames(classes.mainDark, classes.bottomRaised)}>
          <div className={classes.container}>
            <ContactSection />
          </div>
        </div>
      </Hidden>

      <Hidden mdUp>
        <div className={classNames(classes.main, classes.smRaised)}>
          <div className={classes.container}>
            <BlankSection />
            <AboutSection />
            <ProjectSection />
            <BlankSection />
          </div>
        </div>
      </Hidden>

      <Footer />
    </div>
  );
}
