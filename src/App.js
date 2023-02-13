import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/Contact";
import Opportunities from "./pages/opportunities/Opportunities";
import OpportunityDetails from "./pages/opportunities/OpportunityDetails";
import Team from "./pages/Team/Team";
import Footer from "./components/Footer";
import NavbarIcons from "./components/NavbarIcons";
import { Helmet } from "react-helmet";
import Resources from "./pages/Resources";
import AlumniList from "./pages/AlumniList";
import Entrepreneur from "./pages/entrepreneur/Entrepreneur";

function App() {
  return (
    <Router>
      <Helmet bodyAttributes={{ class: "bg-body text-text " }}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
      </Helmet>
      <NavbarIcons />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/opportunities" element={<Opportunities />}></Route>
        <Route
          path="/opportunities/:eventName"
          element={<OpportunityDetails />}
        ></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/alumnilist" element={<AlumniList />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/entrepreneur" element={<Entrepreneur />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
