// This is how react working works. But this is not runnable

function customReact(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    for (const prop in reactElement.props){
        if(prop === "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    } 
    container.appendChild(domElement)
}

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit google"
}

const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer)