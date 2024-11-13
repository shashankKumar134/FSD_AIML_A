const parent = document.getElementById("root");
const element = React.createElement(
    "h1",{}, "Hello, World"
)

const root = ReactDOM.createRoot(parent)
root.render(element)