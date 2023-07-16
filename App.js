/*
<div id="parent">
    <div id="childern"> 
    <h1> I am h1 Tag! </h1>
    <h2> I am h2 Tag! </h2>
    </div>

     <div id="childern2"> 
    <h1> I am h1 Tag! </h1>
    <h2> I am h2 Tag! </h2>
    </div>
</div>

*/

const divTree = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "childern" },
        [React.createElement("h1", {}, "I am h1 Tag!"), React.createElement("h2", {}, "I am h2 Tag!")]
    ),
    React.createElement("div", { id: "childern2" },
        [React.createElement("h1", {}, "I am h1 Tag!"), React.createElement("h2", {}, "I am h2 Tag!")]
    )]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divTree);