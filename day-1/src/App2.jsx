import Counter from "./components/Counter";
import Friends from "./components/Friends";

const ValidPassword = () => <h2>Password valid</h2>
const InValidPassword = () => <h2>Password invalid</h2>

const Password = ({isTrue}) => {
    return isTrue ? <ValidPassword /> : <InValidPassword />;
}

const Cart = () => {
    const items = ["chocolates", "pastries", "ice-creams", "chicken-legPieces"];
    return <div>
        <h1>Cart 🛒</h1>
        {items.length > 0 && <h2>you have {items.length} items in your cart</h2>}
        <ul>
            <h3>Products</h3>
            {items.map(item => (
                <li key={Math.random()}>{item}</li>
            ))}
        </ul>
    </div>
}

const Click = () => <button onClick={handleClick}>click me</button>
const Copy = () => <p onCopy={handleCopy}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum error facilis laudantium, magni autem enim fuga tempore odit omnis labore veniam debitis aliquam iure explicabo aut officia? Amet, officiis voluptatem!</p>
const Move = () => <p onMouseMove={handleMove}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste facere, doloremque quidem omnis, distinctio reprehenderit eaque eius, rem eveniet tenetur blanditiis accusantium dicta sapiente fuga ullam voluptatem molestias? Totam, similique?</p>

const handleClick = () => console.log(Math.floor(Math.random()*10));
const handleCopy = () => alert('You cheater copying my content');
const handleMove = () => alert('you moved over me!!');

const App2 = () => {
  return (
    <div>
        {/* <Password isTrue={true}/> */}
        {/* <Cart /> */}
        {/* <Click /> */}
        {/* <Copy /> */}
        {/* <Move /> */}
        <Counter />
        <Friends />
    </div>
  )
}

export default App2