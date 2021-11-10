import React, { Suspense, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/default.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/pe-icon-7-stroke.css";
import "../assets/css/style.css";

// Preloader
const Preloader = React.lazy(() => import("../components/layouts/Preloader"));

// Home
const Home = React.lazy(() => import("../components/pages/Home"));
// Services
const Services = React.lazy(() => import("../components/pages/Services"));
const Servicedetails = React.lazy(() => import("../components/pages/Servicedetails"));
// Pages
const Whyus = React.lazy(() => import("../components/pages/Whyus"));
// Contact
const Contact = React.lazy(() => import("../components/pages/Contact"));


// Scroll to Top
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
})

function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <ScrollToTop>
          {/* <Preloader /> */}
          {/* Home */}
          <Route exact path="/" component={Home} />
          {/* Services */}
          <Route exact path="/services" component={Services} />
          <Route exact path="/service-details" component={Servicedetails} />
          {/* Pages */}
          <Route exact path="/whyus" component={Whyus} />
          {/* Contact */}
          <Route exact path="/contact" component={Contact} />
        </ScrollToTop>
      </Suspense>
    </Router>
  );
}

export default App;
