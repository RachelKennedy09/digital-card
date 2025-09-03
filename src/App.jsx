//default function to keep app running and giving clean slate
//App.jsx is jsut a function that returns markup in components
import avatar from "./assets/avatar.jpg"
export default function App() {
  return (
    <main className="card" role="main">
 <img className="avatar" src={avatar} alt="Headshot of Rachel Kennedy" />

      <h1 className="name">Rachel Kennedy</h1>
      <p className="role">Software Development Student</p>
      <p className="website">https://github.com/rachelkennedy09</p>

      <div className="buttons">
        <a className="btn btn-light" href="mailto:rachelkennedy@live.ca">Email</a>
        <a className="btn btn-dark" href="https://linkedin.com/in/rachelkennedy09"  target="_blank"
   rel="noopener noreferrer">LinkedIn</a>
      </div>

      <section className="section">
    <h2>About</h2>
    <p>I’m Rachel, a mountain-loving website-maker learning full-stack JavaScript. 
      I enjoy building small apps that feel simple, fast, and friendly—then writing down the steps so future-me (and classmates) can reuse them. 
      I’m practicing React on the front end and Node/Express/MongoDB on the back end, with a focus on clean components, accessible UI, and readable code. 
      My current projects follow my life: dogs, trails, learning process, and calm design with a Lake Louise vibe</p>
      </section>

      <section className="section">
        <h2>Interests</h2>
        <p>Hiking around Lake Louise, daily walks with my Rottweiler-Shepherd, gardening herbs and veggies, and cooking colorful, nutrient-dense meals.
           I also enjoy photography, playful UI design, and organizing work with Trello and Git.
          Lately I’m into testing, better commit messages, and small practice apps that teach one concept at a time (forms, auth, CRUD, sorting)</p>
      </section>

      <footer className="footer">
         <a href="https://github.com/rachelkennedy09">GitHub</a>
           </footer>
    </main>
  )
}