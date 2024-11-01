import logo from '../assets/logo.jpg'

const Header = () => {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <button textOnly className='text-button' onClick={()=>console.log('Cart Clicked!')}>Cart (0)</button>
            </nav>
        </header>
    )
}

export default Header