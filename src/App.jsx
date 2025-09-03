//default function to keep app running and giving clean slate
//App.jsx is jsut a function that returns markup in components

export default function App() {
  return (
    <main className="card" role="main">
      <img className="avatar" src="/avatar.jpg" alt="Profile Photo of Rachel" />

      <h1 className="name">Rachel Kennedy</h1>
      <p className="role">Software Development Student</p>
      <p className="website">https://github.com/rachelkennedy09</p>

      <div className="buttons">
        <a className="btn btn-light" href="mailto:rachelkennedy@live.ca">Email</a>
        <a className="btn btn-dark" href="https://linkedin.com/in/rachelkennedy09">LinkedIn</a>
      </div>

      <section className="section">
    <h2>About</h2>
    <p>About myself</p>
      </section>

      <section className="section">
        <h2>Interests</h2>
        <p>Hobbies and Passions</p>
      </section>

      <footer className="footer">
         <a href="https://github.com/rachelkennedy09">GitHub</a>
           </footer>
    </main>
  )
}