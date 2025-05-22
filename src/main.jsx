import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout       from "./Layout";
import Home         from "./pages/Home";
import Event        from "./pages/Event";
import Apresentation        from "./pages/Apresentation";
import Cronogram    from "./pages/Cronogram";
import Subscription from "./pages/Subscription";
import Working      from "./pages/Working";
import Place        from "./pages/Place";
import Contact      from "./pages/Contact";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index            element={<Home />} />
          <Route path="event"     element={<Event />} />
          <Route path="apresentation"     element={<Apresentation />} />
          <Route path="cronogram" element={<Cronogram />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="working"   element={<Working />} />
          <Route path="place"     element={<Place />} />
          <Route path="contact"   element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);