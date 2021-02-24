function App() {
  return (
    <div className="grid-container">
      <header>
        <a href="/">Project</a>
      </header>
      <main>
        List
      </main>
      <footer>
        &copy; {date} All rights reserved
      </footer>
    </div>
  );
}

var date=new Date().getFullYear();
export default App;
