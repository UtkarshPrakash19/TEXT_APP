import React, { useState } from "react";
export default function TextForm(props) {
  const handleOnchange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const handleUpclick1 = () => {
    // console.log("Upper case was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case","Success");
  };
  const handleUpclick2 = () => {
    // console.log("Upper case was clicked");
    let newText = text.toLowerCase();
    props.showAlert("Converted to Lower case","Success");
    setText(newText);
  };
  const handleCopy = () => {
    var text = document.getElementById("myText");
    text.select();
    props.showAlert("Text copied","Success");
    navigator.clipboard.writeText(text.value);
  };
  const handleClear = () => {
    props.showAlert("Text cleared","Success");
    setText("");
  };
  const handleRemoveSpaces = () => {
    // Remove extra spaces from the beginning and end
    let trimmedText = text.trim();
    // Replace multiple spaces between words with a single space using regex
    let singleSpacedText = trimmedText.replace(/ +/g, ' ');
    setText(singleSpacedText);
    props.showAlert("Extra spaces have been removed","Success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h1>
          {props.heading}
        </h1>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"></label>
          <textarea
            class="form-control"
            id="myText"
            rows="4"
            value={text}
            onChange={handleOnchange}
          ></textarea>
        </div>
        <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button className={`btn btn-outline-primary  my-2 text-${props.mode === 'light' ? 'dark' : 'light'}` }onClick={handleUpclick1}>
          convert to upper case
        </button>
        <button className={`btn btn-outline-primary  my-2 text-${props.mode === 'light' ? 'dark' : 'light'}` }onClick={handleUpclick2}>
          convert to lower case
        </button>
        <button className={`btn btn-outline-primary  my-2 text-${props.mode === 'light' ? 'dark' : 'light'}` } onClick={handleCopy}>
          Copy the text
        </button>
        <button className={`btn btn-outline-primary  my-2 text-${props.mode === 'light' ? 'dark' : 'light'}` } onClick={handleClear}>
          Clear the text
        </button>
        <button
          className={`btn btn-outline-primary  my-2 text-${props.mode === 'light' ? 'dark' : 'light'}` }
          onClick={handleRemoveSpaces}
        >
          Remove extra spaces
        </button>
        </div>
        <div className={`container my-1 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
  <h2>Your text summary is as follows</h2>
  <p>
    <b>Your text has {text.length} characters</b>
    <br />
    <b>Your text has {text.trim().split(/\s+/).filter(word => word).length} words</b>
    <br />
    <b>
      It will take you {0.008 * text.trim().split(/\s+/).filter(word => word).length} minutes to read
      this entire text
    </b>
    <br />
    <h2>Preview</h2>
    {text}
  </p>
</div>

      </div>
    </>
  );
}
