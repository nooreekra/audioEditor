import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../components/about/About'
import { Editor } from '../components/editor/Editor'
import Home from '../components/home/Home'
import { PathsMap } from './paths/MainPaths'

export const PagesRouter = () => {
    return (
        <Routes>
            <Route path={PathsMap.root.get()} element={<Home />} />
            <Route path={PathsMap.about.get()} element={<About />} />
            <Route path={PathsMap.edit.get()} element={<Editor />} />
        </Routes>
    )
}