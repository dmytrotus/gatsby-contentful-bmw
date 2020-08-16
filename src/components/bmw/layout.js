import React, { Fragment } from "react"
import "../../styles/styles.scss"
import Navbar from './partials/Navbar'
import About from './partials/About'
import FeaturePhotoSection from './partials/FeaturePhotoSection'

const Layout = ({ MainPageSections }) => {

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

        {MainPageSections.map((item, index) => {
          return <FeaturePhotoSection 
                  key={index} title={item.title} 
                  image={item.image.file.url} content={item.content}
                  typename={item.__typename} />
        })}
        

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
