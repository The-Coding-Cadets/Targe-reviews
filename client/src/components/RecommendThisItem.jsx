import React from 'react';

class RecommendThisItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="h-margin-t-default">
                <h2 className="Heading__StyledHeading-sc-6yiixr-0 jVPnoB">would you recommend this item?
                    <span>(optional)</span>
                </h2>
                <div>
                    <label className="h-display-block h-position-relative h-margin-b-tiny" data-test="yes">
                        <input />
                        <div className="RadioLabel-sc-7hsu62-0 hOuogP">
                            <div data-test="radioComponentLabel">yes. absolutely!</div>
                            <div className="h-text-grayDark"></div>
                        </div>
                    </label>
                    <label className="h-display-block h-position-relative" data-test="no">
                        <input />
                        <div className="RadioLabel-sc-7hsu62-0 hOuogP">
                            <div data-test="radioComponentLabel">nope. no way. not at all.</div>
                            <div className="h-text-grayDark"></div>
                        </div>
                    </label>
                </div>
            </div>
        )
    }

}

export default RecommendThisItem;

// ADD TO LINE 16

//type="radio" name="radio2" className="RadioInput-sc-3atojb-0 ghFJGv" value="yes"

//ADD TO LINE 23

//type="radio" name="radio2" className="RadioInput-sc-3atojb-0 ghFJGv" value="no"



{/*
    <div className="h-margin-t-default">
        <h2 className="Heading__StyledHeading-sc-6yiixr-0 jVPnoB">would you recommend this item?
            <span>(optional)</span>
        </h2>
        <div>
            <label className="h-display-block h-position-relative h-margin-b-tiny" data-test="yes">
                <input type="radio" name="radio2" className="RadioInput-sc-3atojb-0 ghFJGv" value="yes">
                <div className="RadioLabel-sc-7hsu62-0 hOuogP">
                    <div data-test="radioComponentLabel">yes. absolutely!</div>
                    <div className="h-text-grayDark"></div>
                </div>
            </label>
            <label className="h-display-block h-position-relative" data-test="no">
                <input type="radio" name="radio2" className="RadioInput-sc-3atojb-0 ghFJGv" value="no">
                <div className="RadioLabel-sc-7hsu62-0 hOuogP">
                    <div data-test="radioComponentLabel">nope. no way. not at all.</div>
                    <div className="h-text-grayDark"></div>
                </div>
            </label>
        </div>
    </div>
*/}