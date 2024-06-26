import "./css/app.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import NAVBAR from "./components/Navbar";
import ABOUT from "./components/About";
import FOOTER from "./components/Footer";
import HOME from "./components/Home";
import MENU from "./components/Menu";
import RESERVATIONS from "./components/BookingForm";
import ORDERONLINE from "./components/OrderOnline";
import LOGIN from "./components/Login";
import CONFIRMATIONPAGE from "./components/ConfirmationPage";
import UNDERCONSTRUCTION from "./components/UnderConstruction";

function App() {
	return (
		<>
			<Router>
      <NAVBAR />
				<Routes>
					<Route
						exact
						path="/"
						element={<HOME />}
					/>

					<Route
						path="/about"
						element={<ABOUT />}
					/>

					<Route
						path="/menu"
						element={<MENU />}
					/>

          			<Route
						path="/bookingform"
						element={<RESERVATIONS />}
					/>

          			<Route
						path="/orderonline"
						element={<ORDERONLINE />}
					/>

          			<Route
						path="/login"
						element={<LOGIN />}
					/>

					<Route
						path="/ConfirmationPage/:result"
						element={<CONFIRMATIONPAGE />}
					/>

                    <Route
						path="/undercostruction"
						element={<UNDERCONSTRUCTION />}
					/>

					<Route
						path="*"
						element={<Navigate to="/" />}
					/>
				</Routes>
        <FOOTER />
			</Router>
		</>
	);
}

export default App;