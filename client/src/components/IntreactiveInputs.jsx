import React from 'react';
import AddPhotos from './AddPhotos.jsx';
import RecommedThisItem from './RecommendThisItem.jsx';

class InteractiveInputs extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('InteractiveInputs is running!');
        return (
            <div>
                <h2 className="Heading__StyledHeading-sc-6yiixr-0 jVPnoB">write your review</h2>

                {/* ----------------------------review content---------------------------- */}
                
                <div className="InputWrapper-f8jss9-0 hPYepP">
                    <label htmlFor="reviewDesc">review
                        {/* <span className="h-sr-only">&nbsp;Reviews must be at least 20 characters</span> */}
                    </label>
                    <textarea id="reviewDesc" type="text" rows="5" placeholder=""></textarea>
                    {/* <div className="LongInstruction-sc-1sh3kss-0 ldWXiv longInstruction"
                        id="reviewDesc--longInstruction" aria-hidden="true">Reviews must be at least 20 characters
                    </div> */}
                </div>

                {/* ----------------------------review title------------------------------ */}

                <div className="InputWrapper-f8jss9-0 guagiH">
                    <label htmlFor="reviewTitle">title of review (optional)</label>
                    <input id="reviewTitle" type="text" autoComplete="on" onChange ={this.props.onChange} placeholder=""/>
                </div>

                {/* ----------------------------screen name------------------------------- */}

                <div>
                    <div className="InputWrapper-f8jss9-0 ezbcQi">
                         <label htmlFor="guestName">screen name{/*<span className="h-sr-only">&nbsp;This           will be displayed with
                                your question. Please enter a screen name that does not contain special characters
                                (must be less than 25 characters)</span> 
                            <span className="h-sr-only">&nbsp;Please enter a screen name that does not contain special
                                characters (must be less than 25 characters)</span>*/}
                        </label>
                        <input id="guestName"
                            type="text" required="" autoComplete="on" onChange ={this.props.onChange} placeholder=""/>
                         {/* <div className="LongInstruction-sc-1sh3kss-0 ldWXiv longInstruction"
                            id="guestName--longInstruction" aria-hidden="true">Please enter a screen name that does
                            not contain special characters (must be less than 25 characters)</div>  */}
                    </div>
                    {/*<div className="h-text-grayDark h-margin-b-default h-text-sm">this name will be displayed with your
                        question</div> */}
                </div>

                {/* ----------------------------recommend this item --------------------- */}

                <RecommedThisItem />
                <hr aria-hidden="true"></hr>

                {/* ----------------------------add photos------------------------------- */}

                <AddPhotos />
                <hr aria-hidden="true"></hr>

            </div>
        )
    }

}

export default InteractiveInputs;

/*
    <div>
        <h2 className="Heading__StyledHeading-sc-6yiixr-0 jVPnoB">write your review</h2>
        <div className="InputWrapper-f8jss9-0 hPYepP">
            <label htmlFor="reviewDesc">review
                <!-- <span className="h-sr-only">&nbsp;Reviews must be at least 20 characters</span> -->
            </label>
            <textarea id="reviewDesc" type="text" rows="5" placeholder=""></textarea>
            <!-- <div className="LongInstruction-sc-1sh3kss-0 ldWXiv longInstruction"
                id="reviewDesc--longInstruction" aria-hidden="true">Reviews must be at least 20 characters
            </div> -->
        </div>
        <!-- <div className="h-text-sm h-text-grayMedium h-margin-b-tight">
            <span data-test="reviewTextMinimum">at least 20 characters. </span>
            <a href="#" className="Link-sc-1khjl8b-0 bAHMrT" aria-label="tips htmlFor writing helpful reviews">tips
                htmlFor writing helpful reviews</a>
        </div> -->
        <div className="InputWrapper-f8jss9-0 guagiH">
            <label htmlFor="reviewTitle">title of review (optional)</label>
            <input id="reviewTitle" type="text" autoComplete="on" onChange ="" placeholder="">
        </div>
        <!-- <div className="h-text-sm h-text-grayMedium h-margin-b-tight">summarize your thoughts in a short
            headline</div> -->
        <div>
            <div className="InputWrapper-f8jss9-0 ezbcQi">
                <label htmlFor="guestName">screen name<!--<span className="h-sr-only">&nbsp;This           will be displayed with
                        your question. Please enter a screen name that does not contain special characters
                        (must be less than 25 characters)</span> 
                    <span className="h-sr-only">&nbsp;Please enter a screen name that does not contain special
                        characters (must be less than 25 characters)</span>-->
                </label>
                <input id="guestName"
                    type="text" required="" autoComplete="on" onChange ="" placeholder="">
                <!-- <div className="LongInstruction-sc-1sh3kss-0 ldWXiv longInstruction"
                    id="guestName--longInstruction" aria-hidden="true">Please enter a screen name that does
                    not contain special characters (must be less than 25 characters)</div> -->
            </div>
            <!-- <div className="h-text-grayDark h-margin-b-default h-text-sm">this name will be displayed with your
                question</div> -->
        </div>
        <div className="h-margin-t-default">
            <h2 className="Heading__StyledHeading-sc-6yiixr-0 jVPnoB">would you recommend this item?
                <span>(optional)</span>
            </h2>
            <div>
                <label className="h-display-block h-position-relative h-margin-b-tiny" data-test="yes">
                    <input type="radio" name="radio2" className="RadioInput-sc-3atojb-0 ghFJGv" onChange ="yes">
                    <div className="RadioLabel-sc-7hsu62-0 hOuogP">
                        <div data-test="radioComponentLabel">yes. absolutely!</div>
                        <div className="h-text-grayDark"></div>
                    </div>
                </label>
                <label className="h-display-block h-position-relative" data-test="no">
                    <input type="radio" name="radio2" className="RadioInput-sc-3atojb-0 ghFJGv" onChange ="no">
                    <div className="RadioLabel-sc-7hsu62-0 hOuogP">
                        <div data-test="radioComponentLabel">nope. no way. not at all.</div>
                        <div className="h-text-grayDark"></div>
                    </div>
                </label>
            </div>
        </div>
        <hr aria-hidden="true">
        <div className="styles__PhotoContainer-ij386t-2 fbafUr">
            <h2 className="Heading__StyledHeading-sc-6yiixr-0 jVPnoB">add up to 6 photos
                <span>(optional)</span>
            </h2>
            <div>
                <div className="h-position-relative">
                    <input type="file" id="fileInput" accept=".bmp,.jpg,.png,.gif"
                        style="position: absolute; left: 0px; top: 0px; opacity: 0;">
                    <label htmlFor="fileInput" type="file" accept=".bmp,.jpg,.png,.gif"
                        aria-label="upload a photo" className="Button-bwu3xu-0 hcglhn">add photo</label>
                </div>
                <div className="h-margin-t-tight h-overflow-hidden">
                    <div></div>
                </div>
            </div>
        </div>
        <hr aria-hidden="true">
        <!-- <div className="h-text-bs">by submitting, I agree to the
            <a href="#" className="Link-sc-1khjl8b-0 bAHMrT" aria-label="review guidelines">review
                guidelines</a>
        </div> -->
    </div>
 */