import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Layout: FC = () => {
	return (
		<div className="min-h-screen bg-slate-900 text-white font-roboto">
			<Header />
			<div className="w-full p-4">
				<Outlet />
			</div>
			
		</div>
	)
}

export default Layout
