import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { useHistory, Link } from "react-router-dom";
import ProductHeroLayout from "./ProductHeroLayout";
import "../css/main.css"
const backgroundImage =
  "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80";

const styles = theme => ({
  background: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center"
  },
  button: {
    minWidth: 200
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10)
    }
  },
  more: {
    marginTop: theme.spacing(2)
  }
});

function ProductHero(props) {
  const { classNamees } = props;

  const history = useHistory();

  function handleRedirectLogin() {
    history.push("/register");
  }

  console.log("env", process.env.REACT_APP_BACKEND_URL)
  return (
    <div id="page-wrapper">

      <header id="header" className="alt">
        <h1 id="logo"><Link to="/">Enjoy <span>by YOU</span></Link></h1>
        <nav id="nav">
          <ul>
            <li className="current"><Link to="/register" href="#" className="button primary">Welcome</Link></li>
            <li className="submenu">
              <a href="#">Layouts</a>
              <ul>
                <li><a href="left-sidebar.html">Left Sidebar</a></li>
                <li><a href="right-sidebar.html">Right Sidebar</a></li>
                <li><a href="no-sidebar.html">No Sidebar</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li className="submenu">
                  <a href="#">Submenu</a>
                  <ul>
                    <li><a href="#">Dolore Sed</a></li>
                    <li><a href="#">Consequat</a></li>
                    <li><a href="#">Lorem Magna</a></li>
                    <li><a href="#">Sed Magna</a></li>
                    <li><a href="#">Ipsum Nisl</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><Link to="/register" href="#" className="button primary">Sign Up</Link></li>
          </ul>
        </nav>
      </header>


      <section id="banner">


        <div className="inner">

          <header>
            <h2>ENJOY</h2>
          </header>
          <p>This is <strong>Enjoy</strong>, a free
          <br />
            responsive template
          <br />
            by <a href="http://albetrios.com">Albetrios</a>.</p>
          <footer>
            <ul className="buttons stacked">
              <li><a href="#main" className="button fit scrolly">Tell Me More</a></li>
            </ul>
          </footer>

        </div>

      </section>

      <article id="main">

        <header className="special container">
          <span className="icon solid fa-chart-bar"></span>
          <h2>As this is my <strong>twentieth</strong> freebie for HTML5 UP
          <br />
            I decided to give it a really creative name.</h2>
          <p>Turns out <strong>Twenty</strong> was the best I could come up with. Anyway, lame name aside,
          <br />
            it's minimally designed, fully responsive, built on HTML5/CSS3,
            and, like all my stuff,
          <br />
            released for free under the <a href="http://html5up.net/license">Creative Commons Attribution 3.0</a> license. Have fun!</p>
        </header>


        <section className="wrapper style2 container special-alt">
          <div className="row gtr-50">
            <div className="col-8 col-12-narrower">

              <header>
                <h2>Behold the <strong>icons</strong> that visualize what you’re all about. or just take up space. your call bro.</h2>
              </header>
              <p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu comteger ut fermentum lorem. Lorem ipsum dolor sit amet. Sed tristique purus vitae volutpat ultrices. eu elit eget commodo. Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo.</p>
              <footer>
                <ul className="buttons">
                  <li><a href="#" className="button">Find Out More</a></li>
                </ul>
              </footer>

            </div>
            <div className="col-4 col-12-narrower imp-narrower">

              <ul className="featured-icons">
                <li><span className="icon fa-clock"><span className="label">Feature 1</span></span></li>
                <li><span className="icon solid fa-volume-up"><span className="label">Feature 2</span></span></li>
                <li><span className="icon solid fa-laptop"><span className="label">Feature 3</span></span></li>
                <li><span className="icon solid fa-inbox"><span className="label">Feature 4</span></span></li>
                <li><span className="icon solid fa-lock"><span className="label">Feature 5</span></span></li>
                <li><span className="icon solid fa-cog"><span className="label">Feature 6</span></span></li>
              </ul>

            </div>
          </div>
        </section>


        <section className="wrapper style1 container special">
          <div className="row">
            <div className="col-4 col-12-narrower">

              <section>
                <span className="icon solid featured fa-check"></span>
                <header>
                  <h3>This is Something</h3>
                </header>
                <p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
              </section>

            </div>
            <div className="col-4 col-12-narrower">

              <section>
                <span className="icon solid featured fa-check"></span>
                <header>
                  <h3>Also Something</h3>
                </header>
                <p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
              </section>

            </div>
            <div className="col-4 col-12-narrower">

              <section>
                <span className="icon solid featured fa-check"></span>
                <header>
                  <h3>Probably Something</h3>
                </header>
                <p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
              </section>

            </div>
          </div>
        </section>


        <section className="wrapper style3 container special">

          <header className="major">
            <h2>Next look at this <strong>cool stuff</strong></h2>
          </header>

          <div className="row">
            <div className="col-6 col-12-narrower">

              <section>
                <a href="#" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
                <header>
                  <h3>A Really Fast Train</h3>
                </header>
                <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
              </section>

            </div>
            <div className="col-6 col-12-narrower">

              <section>
                <a href="#" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
                <header>
                  <h3>An Airport Terminal</h3>
                </header>
                <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
              </section>

            </div>
          </div>
          <div className="row">
            <div className="col-6 col-12-narrower">

              <section>
                <a href="#" className="image featured"><img src="images/pic03.jpg" alt="" /></a>
                <header>
                  <h3>Hyperspace Travel</h3>
                </header>
                <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
              </section>

            </div>
            <div className="col-6 col-12-narrower">

              <section>
                <a href="#" className="image featured"><img src="images/pic04.jpg" alt="" /></a>
                <header>
                  <h3>And Another Train</h3>
                </header>
                <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
              </section>

            </div>
          </div>

          <footer className="major">
            <ul className="buttons">
              <li><a href="#" className="button">See More</a></li>
            </ul>
          </footer>

        </section>

      </article>


      <section id="cta">

        <header>
          <h2>Ready to do <strong>something</strong>?</h2>
          <p>Proin a ullamcorper elit, et sagittis turpis integer ut fermentum.</p>
        </header>
        <footer>
          <ul className="buttons">
            <li><a href="#" className="button primary">Take My Money</a></li>
            <li><a href="#" className="button">LOL Wut</a></li>
          </ul>
        </footer>

      </section>


      <footer id="footer">

        <ul className="icons">
          <li><a href="#" className="icon brands circle fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="#" className="icon brands circle fa-facebook-f"><span className="label">Facebook</span></a></li>
          <li><a href="#" className="icon brands circle fa-google-plus-g"><span className="label">Google+</span></a></li>
          <li><a href="#" className="icon brands circle fa-github"><span className="label">Github</span></a></li>
          <li><a href="#" className="icon brands circle fa-dribbble"><span className="label">Dribbble</span></a></li>
        </ul>

        <ul className="copyright">
          <li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>

      </footer>

    </div>

  );
}

ProductHero.propTypes = {
  classNamees: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductHero);


















// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";

// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";

// import { useHistory } from "react-router-dom";
// import ProductHeroLayout from "./ProductHeroLayout";

// const backgroundImage =
//   "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80";

// const styles = theme => ({
//   background: {
//     backgroundImage: "url(https://source.unsplash.com/random)",
//     backgroundColor: "#7fc7d9", // Average color of the background image.
//     backgroundPosition: "center"
//   },
//   button: {
//     minWidth: 200
//   },
//   h5: {
//     marginBottom: theme.spacing(4),
//     marginTop: theme.spacing(4),
//     [theme.breakpoints.up("sm")]: {
//       marginTop: theme.spacing(10)
//     }
//   },
//   more: {
//     marginTop: theme.spacing(2)
//   }
// });

// function ProductHero(props) {
//   const { classNamees } = props;

//   const history = useHistory();

//   function handleRedirectLogin() {
//     history.push("/register");
//   }

//   console.log("env", process.env.REACT_APP_BACKEND_URL)
//   return (
//     <ProductHeroLayout backgroundclassNameName={classNamees.background}>
//       {/* Increase the network loading priority of the background image. */}
//       <img
//         style={{ display: "none" }}
//         src={backgroundImage}
//         alt="increase priority"
//       />
//       <Typography color="inherit" align="center" variant="h2" marked="center">
//         Welcome to enjoy!
//       </Typography>
//       <Typography
//         color="inherit"
//         align="center"
//         variant="h5"
//         classNameName={classNamees.h5}
//       >
//         Enjoy secret offers up to 60-70% off the best luxury hotels every Sunday.
//       </Typography>
//       <Button
//         color="secondary"
//         variant="contained"
//         size="large"
//         classNameName={classNamees.button}
//         component="a"
//         onClick={handleRedirectLogin}
//       >
//         Register
//       </Button>
//       <Typography variant="body2" color="inherit" classNameName={classNamees.more}>
//         Discover the experience
//       </Typography>
//     </ProductHeroLayout>
//   );
// }

// ProductHero.propTypes = {
//   classNamees: PropTypes.object.isRequired
// };

// export default withStyles(styles)(ProductHero);
