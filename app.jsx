const App = () => {
    return (
      <>
          <img src="logo.png" alt=""></img>
          <nav>
            <a href="">Home</a>
            <a href="">Product</a>
            <a href="">Company</a>
            <a href="">Conatact</a>
          </nav>
          <header>
            <p>Header image</p>
          </header>
          <main>
            <section>
              <h3>About</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus rerum doloribus accusamus? Asperiores, et!</p>
            </section>
            <section>
              <h3>Conapny</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum totam facere in consequuntur libero non.</p>
            </section>
            <section>
              <h3>Services</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis consectetur nesciunt iste qui tenetur sint!</p>
            </section>
          </main>
          <div className="content">
            <div className="section-container">
              <section className="content">
              <h3>Content</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dicta beatae esse rerum quasi facilis suscipit minus, labore eligendi quam.</p>
            </section>
            <section className="content">
              <h3>Sub header</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas repellendus id beatae quo iste, dolorum qui temporibus perspiciatis expedita deserunt totam laborum accusamus vel molestias deleniti ab! Cumque?</p>
            </section>
            </div>
            <section className="nav">
              <h3>Navigation</h3>
              <div className="navi">
                <a href="">Home</a>
                <a href="">Product</a>
                <a href="">Company</a>
                <a href="">Contact</a>
              </div>
            </section>
          </div>
      </>
    );
  };

  ReactDOM.createRoot(document.getElementById('app')).render(<App />);