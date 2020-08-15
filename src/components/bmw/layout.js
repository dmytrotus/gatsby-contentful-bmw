import React, { Fragment } from "react"
import { Link } from "gatsby"
import "../../styles/styles.scss"
import Navbar from './partials/Navbar'
import About from './partials/About'
import FeaturePhotoRight from './partials/FeaturePhotoRight'
import FeaturePhotoLeft from './partials/FeaturePhotoLeft'

const Layout = ({ location, title, children, sectionsRightText, sectionsLeftText }) => {

  console.log(sectionsRightText)

  return (
    <Fragment>
        <header className="nk-header">
          <Navbar />
        </header>

        <div className="nk-main bg-white">
          <div className="nk-header-title
           nk-header-title-full nk-header-title-parallax nk-header-title-parallax-opacity">
           </div>
        </div>

        <About />

        {sectionsRightText.map((item, index) => {

          return <FeaturePhotoRight key={index} title={item.node.title} image={item.node.image.file.url} />
        })}
        
        <FeaturePhotoLeft />

        <footer className="nk-footer">
            <div className="container">
              <div className="row vertical-gap">
                <div className="col-lg-5">
                    <h3 className="h5 mb-20">My Design</h3>
                  <br/>Template coded by Dmytro Tus.
                </div>
              </div>
            </div>
          </footer>
    </Fragment>
  )
}

export default Layout
