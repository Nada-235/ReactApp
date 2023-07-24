import './App.css';

const Header = () => {
  return (
    <header> <span className='text'> ReactApp </span>
      <nav>
        <ul>
          <li> <a href='home'> Home </a></li>
          <li> <a href='footer'> Footer </a> </li>
        </ul>
      </nav>
    </header>
  );
}

const Main = () => {
  return (
    <main id='home' className='home'>
      <h1> Welcome </h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officiis, veniam reiciendis officia aliquam similique praesentium, enim distinctio nobis recusandae id temporibus consequuntur assumenda cum debitis. Officia error sequi recusandae!</p>
    </main>
  );
}

const Footer = () => {
  return (
    <footer id='footer'>
      <h3> Contact Me </h3>
    </footer>
  )
}


function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
