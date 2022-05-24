import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './pages/Main'
import Repository from './pages/Repository'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/repositorio/:repositoryname" element={<Repository />} />
            </Routes>
        </BrowserRouter>
    )
}