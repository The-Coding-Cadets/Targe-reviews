import React from 'react';

class Addphotos extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('AddPhotos is running!');
        return (
            <div className="styles__PhotoContainer-ij386t-2 fbafUr">
                <h2 className="Heading__StyledHeading-sc-6yiixr-0 jVPnoB">add up to 6 photos
                    <span>(optional)</span>
                </h2>
                <div>
                    <div className="h-position-relative">
                        <input />
                        <label >add photo</label>
                    </div>
                    <div className="h-margin-t-tight h-overflow-hidden">
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Addphotos;
// ADD TO LINE 17
{/*type="file" id="fileInput" accept=".bmp,.jpg,.png,.gif"
                            style="position: absolute; left: 0px; top: 0px; opacity: 0;"*/ }

// ADD TO LINE 18
{/*htmlFor="fileInput" type="file" accept=".bmp,.jpg,.png,.gif"
                            aria-label="upload a photo" className="Button-bwu3xu-0 hcglhn"*/}

{/*
    <div className="styles__PhotoContainer-ij386t-2 fbafUr">
        <h2 className="Heading__StyledHeading-sc-6yiixr-0 jVPnoB">add up to 6 photos
            <span>(optional)</span>
        </h2>
        <div>
            <div className="h-position-relative">
                <input type="file" id="fileInput" accept=".bmp,.jpg,.png,.gif"
                    style="position: absolute; left: 0px; top: 0px; opacity: 0;">
                <label for="fileInput" type="file" accept=".bmp,.jpg,.png,.gif"
                    aria-label="upload a photo" className="Button-bwu3xu-0 hcglhn">add photo</label>
            </div>
            <div className="h-margin-t-tight h-overflow-hidden">
                <div></div>
            </div>
        </div>
    </div>
*/}