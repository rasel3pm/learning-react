import logo from './logo.svg';
import './App.css';

function App() {

    const nayoks=['Manna','riyaj','jit','siyam','rasel']
    const products=[
        {name:'photshop',price:'200 tk'},
        {name:'web cut',price:'300 tk'}
    ]

    const friends=[
        {name:'shofiq', age:20,mobile:'019182'}
    ]


    return (<div className="App">

        <ul>
            {
                nayoks.map(nayok=><li>{nayok}</li>)
            }
        </ul>

        <ul>
            {
                products.map(product=> <li>{product.price}</li>)
            }
        </ul>
        <Cards></Cards>

        </div>);
}

export default App;


// card 

function Cards(){
    return(
        <div className='mycard'>
            <div className="item">
                <h1>Hellow World</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, vel.</p>
                <button>Click Here</button>
            </div>
            <div className="item">
                <h1>Hellow World</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, vel.</p>
                <button>Click Here</button>
            </div>
        </div>
    )
}