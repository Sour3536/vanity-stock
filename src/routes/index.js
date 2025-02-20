import React, { Suspense, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Loading } from 'components';
// import { Switch } from 'react-router-dom';
// import Loading from 'components/Loading';

const Home = React.lazy(() => import('pages/Home'));
const Courses = React.lazy(() => import('pages/Courses'));
const Jobs = React.lazy(() => import('pages/Jobs'));
const OpenBoard = React.lazy(() => import('pages/OpenBoard'));
const Certificates = React.lazy(() => import('pages/Certificates'));
const Questions = React.lazy(() => import('pages/Questions'));
const Books = React.lazy(() => import('pages/Books'));

export default function Rutes({ language, country }) {
	return (
		<Suspense fallback={<Loading />}>
			<Switch>
				{/* <Redirect exact from="/" to={`/${country}/login`} />
				<Route path={`/:country/login`} component={SignIn} country={country} />
				<Route exact path="/:country/register" component={SignUp} country={country} /> */}
				<Route exact path={`/`} render={() => <Home language={language} />} />
				<Route exact path={`/courses`} render={() => <Courses language={language} />} />
				<Route exact path={`/jobs`} render={() => <Jobs language={language} />} />
				<Route exact path={`/certificates`} render={() => <Certificates language={language} />} />
				{/* <Route exact path={`/openboard`} render={() => <OpenBoard language={language} />} /> */}
				{/* <Route exact path={'/index.html'} onEnter={reload} /> */}
				<Route exact path={`/questions`} render={() => <Questions language={language} />} />
				<Route exact path={`/books`} render={() => <Books language={language} />} />
				<Route
					path="/openboard"
					component={() => {
						window.location.href = 'https://letmehelp-open-board.herokuapp.com/';
						return null;
					}}
				/>
				{/* <Route exact path={'/openboard'}>
					<Redirect to={'/index1.html'} />
				</Route> */}
			</Switch>
		</Suspense>
	);
}
