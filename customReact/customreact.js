// function customRender(reactElement, container){
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('href',reactElement.props.target)

//     container.appendChild(domElement)


// }

// const { Children } = require("react")

// const reactElement = {
//     type: 'a',
//     props:{
//         href: 'https:google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }



// const mainContainer = document.querySelector('#root')

// customRender(reactElement, mainContainer)



function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);

    // set children (text inside the element)
    domElement.innerHTML = reactElement.children;

    // set attributes dynamically
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
};

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);

