/**
 * Using JSX tools in render method in editorjs
 *
 * Context:
 * - https://github.com/codex-team/editor.js/issues/946
 */
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Button = () => {
    const [count, setCount] = useState(0);

    useEffect(() => console.log("mounting"), []);

    const onClick = e => {
        console.log("clicked");
        setCount(prevCount => prevCount + 1);
    };

    return (
        <button onClick={onClick} type="button" style={{ padding: 10 }}>
            Click me [clicked: {count} times]
        </button>
    );
};

export default class Custom {
    render() {
        const container = document.createElement("div");
        ReactDOM.render(<Button />, container);
        return container;
    }

    save(element) {
        console.log(element);
        return {
            text: element.value
        };
    }
}
