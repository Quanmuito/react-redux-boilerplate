import React from 'react'

import { Header, Footer } from 'components/layouts'
import Routes from './Routes'

export default function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Routes />
            </main>
            <Footer />
        </div>
    )
}
