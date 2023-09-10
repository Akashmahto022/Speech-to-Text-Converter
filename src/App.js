import React, { useState } from "react";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

function App() {
  const [copyText, setCopyText] = useState()
  const [isCopied, setCopied] = useClipboard(copyText);

  const startListeing = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className="container">
        <h2>Speech to <span>Text Converter</span></h2>
        <br />
        <p>
          A speech from the microphone to text
        </p>
        <p><span>To copy the text first click on the text area and then click on the copt the text.</span></p>

        <div className="main-content" onClick={()=> setCopyText(transcript)}>{transcript}</div>

        <div className="btn-style">
          <button onClick={setCopied}>
            Copy the Text ? {isCopied ? "Yes! 👍" : "Nope! 👎"}
          </button>
          <button onClick={startListeing}>Start Listening</button>
          <button onClick={SpeechRecognition.stopListening}>
            Stop Listening
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
