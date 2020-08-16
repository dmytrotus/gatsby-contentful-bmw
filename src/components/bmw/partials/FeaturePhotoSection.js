import React from "react"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const FeaturePhotoSection = ({title, image, content, typename}) => {

    const isRight = (typename === 'ContentfulSectionRightText') ? true : false;

	return(
		
		<div className="nk-box bg-gray-4">
            <div className="container-fluid">
                <div className="row skills">
                    <div className={(isRight) ? "col-lg-6 push-lg-6" : "col-lg-6"}
                    style={{backgroundImage: `url(${image})`}}>
                        
                        <div className="nk-gap-6"></div>
                        <div className="nk-gap-6"></div>
                        <div className="nk-gap-6"></div>
                        <div className="nk-gap-6"></div>
                    </div>

                    <div className={(isRight) ? "col-lg-6 pull-lg-6" : "col-lg-6"}>
                        <div className="nk-box-3 text-center">
                            <h2>{title}</h2>
                            <p className="lead text-gray-20"
                            dangerouslySetInnerHTML={{ __html: documentToHtmlString(content.json) }} />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

		)
}

export default FeaturePhotoSection