// Import dependencies
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components, styles, media
import Navigation from "./components/Navigation";
import "./App.css";

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages
// import data from './data/products.js/
import HomePage from "./pages/HomePage";
import Topics from "./pages/TopicsPage";

import GamesPage from "./pages/GamesPage";

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
import AddGamePageForm from "./pages/AddGamePageForm";
import EditGamePageForm from "./pages/EditGamePageForm";

// If your schema requires SHORT data input, then use the TABLE design.
// import EditMoviePageTable from './pages/EditMoviePageTable';
// import AddMoviePageTable from './pages/AddMoviePageTable';

// {/* Use these if your schema requires LONG data input: */}
// <Route path="/create" element={<AddMoviePageTable />} />
// <Route path="/update" element={<EditMoviePageTable movieToEdit={movie} />} />

// Define the function that renders the content in Routes, using State.
function App() {
  const [game, setGameToEdit] = useState([]);

  return (
    <>
      <BrowserRouter>
        <header>
          <h1>
            Jazmia <img src="android-chrome-192x192.png" alt="Jazmia Cornell" />{" "}
            Cornell
          </h1>
        </header>

        <Navigation />

        <main>
          <section>
            <Routes>
              {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}

              <Route path="/" element={<HomePage />} />

              <Route
                path="/games"
                element={<GamesPage setGame={setGameToEdit} />}
              />

              <Route path="/topics" element={<Topics />} />

              {/* Or these if your schema requires SHORT data input: */}
              <Route path="/create" element={<AddGamePageForm />} />
              <Route
                path="/update"
                element={<EditGamePageForm gameToEdit={game} />}
              />
            </Routes>
          </section>
        </main>

        <footer>
          <p>&copy; 2024 Jazmia Cornell</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
