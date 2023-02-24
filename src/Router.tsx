import { Route, Routes } from 'react-router-dom'

import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { SuccessOrder } from './pages/SuccessOrder'

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/checkout" element={<Checkout />} />
			<Route path="/success-order" element={<SuccessOrder />} />
		</Routes>
	)
}
