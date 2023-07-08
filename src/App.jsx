import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";

function App() {
	const test = "test";
	return (
		<>
			<div className="bg"></div>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</>
	);
}

export default App;
