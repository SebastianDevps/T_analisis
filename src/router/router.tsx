import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/Layout'

import Register from '../pages/Register-vehicle'
import Home from '../pages/Home'
import RegisterDriver from '../pages/Register-driver'



export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		// errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},	
			{
				path: 'register-vehicle',	
				element: (
					<Register />
				),
			},
			{
				path: 'register-driver',	
				element: (
					<RegisterDriver />
				),
			},
		],
	},
])
