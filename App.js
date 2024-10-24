import React from 'react'
import ReactDOM from 'react-dom/client'


// React.createElement is object not HTML element, when it render in DOM ther it will be HTML element
// React.createElement=>Object=>HTML Element(render)
// const heading=React.createElement("h1",{id:"h1style"},'Namaste React 🚀')
// console.log("Core React way to create element----->",heading);



// JSX way to create Rest elements
// JSX is not HTML in JS
// JSX- is HTML like or XML(more closer) like syntex which is object based
// JSX code transpiled before it reaches to JS engine
// ? JSX=>bable transpile React.createElement=>JS Object=>HTML Element(render) 

// !React Element
const heading=(<h1 id="h1style" className='heading'>Namaste React using JSX 🚀</h1>)
// console.log("JSX way to create element----->",jsxHeading);


// !React Componenet

const Title=()=>
(
<h1 className='heading' id="h1style">Namaste using JSX 🚀</h1>
)
const dummyStr="Or"
const HeadingComponent=()=>(
   <div id='container'>
      <Title/>
      {heading}
      <h1 id="h1style">Just A String</h1>
   </div>
)

const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)//? this is way to render element in react DOM

root.render(<HeadingComponent/>) //? this is way to render Componenet in react DOM

