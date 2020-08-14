/**
 * Using JSX tools in render method in editorjs
 *
 * Context:
 * - https://github.com/codex-team/editor.js/issues/946
 */
export default class CustomJs {
    createText(counter) {
        return `Click me [clicked: ${counter} times]`;
    }

    render() {
        const container = document.createElement("div");
        let counter = 0;

        // plainjs
        const button = document.createElement("button");
        button.id = "custom-js-button";
        button.style.padding = "10px";
        button.onclick = () => {
            counter++;
            const elem = document.getElementById("custom-js-button");
            elem.innerHTML = this.createText(counter);
        };
        button.innerHTML = this.createText(counter);
        container.appendChild(button);

        return container;
    }

    save(element) {
        console.log(element);
        return {
            text: element.value
        };
    }
}
