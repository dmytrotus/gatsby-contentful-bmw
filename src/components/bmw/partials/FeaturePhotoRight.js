import React from "react"

const FeaturePhotoRight = ({title, image}) => {

	return(
		
		<div className="nk-box bg-gray-4">
            <div className="container-fluid">
                <div className="row skills">
                    <div className="col-lg-6 push-lg-6"
                    style={{backgroundImage: `url(${image})`}}>
                        
                        <div className="nk-gap-6"></div>
                        <div className="nk-gap-6"></div>
                        <div className="nk-gap-6"></div>
                        <div className="nk-gap-6"></div>
                    </div>

                    <div className="col-lg-6 pull-lg-6">
                        <div className="nk-box-3 text-center">
                            <h2>{title}</h2>
                            <p className="lead text-gray-20">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure commodi veritatis perferendis, et officiis, autem magni odit error voluptatem, nihil voluptate rem voluptatibus. Ad corporis sapiente sed corrupti sequi, earum!
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

		)
}

export default FeaturePhotoRight