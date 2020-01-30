import React from 'react';
import sampleData from './../../sampleData.js';
import SubmitReviewButton from './SubmitReviewButtons.jsx';
import ErrorBoundries from './ErrorBoundries.jsx';
import InteractiveInputs from './IntreactiveInputs.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data : sampleData
        }
    }

    onChange() {
        console.log('DoSomething to onChange methord in App.jsx')
        // this.setState()
    }
 
    render() {
        console.log('App is running!')
        return (

            <div>
                {/* <ErrorBoundries> */}
                    <InteractiveInputs onChange={this.onChange}/>
                {/* </ErrorBoundries> 
                <ErrorBoundries> */}
                    <SubmitReviewButton />
                {/* </ErrorBoundries> */}
            </div>

            
            
        )
    }
}

export default App;

/*
    <div>
        <h2 class="Heading__StyledHeading-sc-6yiixr-0 jVPnoB">write your review</h2>
        <div class="InputWrapper-f8jss9-0 hPYepP">
            <label for="reviewDesc">review
                <!-- <span class="h-sr-only">&nbsp;Reviews must be at least 20 characters</span> -->
            </label>
            <textarea id="reviewDesc" type="text" rows="5" placeholder=""></textarea>
            <!-- <div class="LongInstruction-sc-1sh3kss-0 ldWXiv longInstruction"
                id="reviewDesc--longInstruction" aria-hidden="true">Reviews must be at least 20 characters
            </div> -->
        </div>
        <!-- <div class="h-text-sm h-text-grayMedium h-margin-b-tight">
            <span data-test="reviewTextMinimum">at least 20 characters. </span>
            <a href="#" class="Link-sc-1khjl8b-0 bAHMrT" aria-label="tips for writing helpful reviews">tips
                for writing helpful reviews</a>
        </div> -->
        <div class="InputWrapper-f8jss9-0 guagiH">
            <label for="reviewTitle">title of review (optional)</label>
            <input id="reviewTitle" type="text" autocomplete="on" value="" placeholder="">
        </div>
        <!-- <div class="h-text-sm h-text-grayMedium h-margin-b-tight">summarize your thoughts in a short
            headline</div> -->
        <div>
            <div class="InputWrapper-f8jss9-0 ezbcQi">
                <label for="guestName">screen name<!--<span class="h-sr-only">&nbsp;This           will be displayed with
                        your question. Please enter a screen name that does not contain special characters
                        (must be less than 25 characters)</span> 
                    <span class="h-sr-only">&nbsp;Please enter a screen name that does not contain special
                        characters (must be less than 25 characters)</span>-->
                </label>
                <input id="guestName"
                    type="text" required="" autocomplete="on" value="" placeholder="">
                <!-- <div class="LongInstruction-sc-1sh3kss-0 ldWXiv longInstruction"
                    id="guestName--longInstruction" aria-hidden="true">Please enter a screen name that does
                    not contain special characters (must be less than 25 characters)</div> -->
            </div>
            <!-- <div class="h-text-grayDark h-margin-b-default h-text-sm">this name will be displayed with your
                question</div> -->
        </div>
        <div class="h-margin-t-default">
            <h2 class="Heading__StyledHeading-sc-6yiixr-0 jVPnoB">would you recommend this item?
                <span>(optional)</span>
            </h2>
            <div>
                <label class="h-display-block h-position-relative h-margin-b-tiny" data-test="yes">
                    <input type="radio" name="radio2" class="RadioInput-sc-3atojb-0 ghFJGv" value="yes">
                    <div class="RadioLabel-sc-7hsu62-0 hOuogP">
                        <div data-test="radioComponentLabel">yes. absolutely!</div>
                        <div class="h-text-grayDark"></div>
                    </div>
                </label>
                <label class="h-display-block h-position-relative" data-test="no">
                    <input type="radio" name="radio2" class="RadioInput-sc-3atojb-0 ghFJGv" value="no">
                    <div class="RadioLabel-sc-7hsu62-0 hOuogP">
                        <div data-test="radioComponentLabel">nope. no way. not at all.</div>
                        <div class="h-text-grayDark"></div>
                    </div>
                </label>
            </div>
        </div>
        <hr aria-hidden="true">
        <div class="styles__PhotoContainer-ij386t-2 fbafUr">
            <h2 class="Heading__StyledHeading-sc-6yiixr-0 jVPnoB">add up to 6 photos
                <span>(optional)</span>
            </h2>
            <div>
                <div class="h-position-relative">
                    <input type="file" id="fileInput" accept=".bmp,.jpg,.png,.gif"
                        style="position: absolute; left: 0px; top: 0px; opacity: 0;">
                    <label for="fileInput" type="file" accept=".bmp,.jpg,.png,.gif"
                        aria-label="upload a photo" class="Button-bwu3xu-0 hcglhn">add photo</label>
                </div>
                <div class="h-margin-t-tight h-overflow-hidden">
                    <div></div>
                </div>
            </div>
        </div>
        <hr aria-hidden="true">
        <!-- <div class="h-text-bs">by submitting, I agree to the
            <a href="#" class="Link-sc-1khjl8b-0 bAHMrT" aria-label="review guidelines">review
                guidelines</a>
        </div> -->
    </div>
 */