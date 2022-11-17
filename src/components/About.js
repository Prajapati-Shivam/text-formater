import React from 'react'

export default function About() {
  return (
    <div className='container'>
      <>
        <h1>About us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Analyze your text</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                TextFormat gives you way to analyze your text quickly and efficiently. Be it word count or character count and it has some features like convert text into uppercase and lowercase, remove extra spaces, clear textbox and copy text to clipboard.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                TextFormat is a free character counter tool that provides instant character count & word count statistics for a given text. TextFormat reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, book, excel, pdf document, etc.
              </div>
            </div>
          </div>
        </div>
      </>

    </div>
  )
}
