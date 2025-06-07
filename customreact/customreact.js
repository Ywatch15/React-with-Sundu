function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type) // create a DOM element based on the type of reactElement
    domElement.innerHTML = reactElement.children // set the innerHTML of the DOM element to the children of reactElement
    domElement.setAttribute('href', reactElement.props.href) // set the href attribute of the DOM element to the href of reactElement
    domElement.setAttribute('target', reactElement.props.target) // set the target attribute of the DOM element to the target of reactElement


    container.appendChild(domElement) // append the DOM element to the container
*/
    const domElement = document.createElement(reactElement.type) // create a DOM element based on the type of reactElement
    domElement.innerHTML = reactElement.children // set the innerHTML of the DOM element to the children of reactElement
    for(const prop in reactElement.props){
        if(prop=='children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]) // set the prop attribute of the DOM element to the prop of reactElement

    }
    container.appendChild(domElement) // append the DOM element to the container
}

const reactElement = {
    type: 'a', // type of the element
    props: {
        href:'https://google.com', // href attribute
        target: '_blank', // target attribute
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)