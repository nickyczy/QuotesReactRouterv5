import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import NotFound from "./components/pages/NotFound";
import QuoteDetail from "./components/pages/QuoteDetail";

function App() {
	return (
		<Layout>
			<Switch>
				<Route exact path="/">
					<Redirect to="/quotes" />
				</Route>

				<Route exact path="/quotes">
					<AllQuotes />
				</Route>

				<Route path="/quotes/:quoteId">
					<QuoteDetail />
				</Route>

				<Route path="/new-quote">
					<NewQuote />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
