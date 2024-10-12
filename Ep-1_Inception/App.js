const parent=React.createElement("div",{id:"parent"},
   React.createElement("div",{id:"child1"},
    React.createElement("h1",{id:"h1style"},'Namaste React by React-H1'),
    React.createElement("h2",{id:"h1style"},'Namaste React by React-H2')
   ),
   React.createElement("div",{id:"child2"},
    React.createElement("h3",{id:"h1style"},'Namaste React by React-H3'),
    React.createElement("h4",{id:"h1style"},'Namaste React by React-H4')
   ))
console.log(parent)

const root=ReactDOM.createRoot(document.getElementById("root")) 
root.render(parent)