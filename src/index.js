import React, { Component } from "react";
import ReactDOM from "react-dom";

import EditorJS from "@editorjs/editorjs";

import { EDITOR_JS_TOOLS } from "./constants";

class App extends Component {
  async onSave() {
    const outputData = await this.editorInstance.save();
    console.log("outputData", outputData);
  }

  render() {
    return (
      <>
        <button onClick={this.onSave.bind(this)} type="button">
          Save Content (check console output)
        </button>
        <EditorJS
          editorInstance={instance => (this.editorInstance = instance)}
          tools={EDITOR_JS_TOOLS}
          data={{
            time: 1556098174501,
            blocks: [

              {
                type: "customReact",
                data: {
                  text: "custom element"
                }
              },
              {
                type: "customJs",
                data: {
                  text: "custom element"
                }
              }
            ],
            version: "2.15.1"
          }}
        />
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
