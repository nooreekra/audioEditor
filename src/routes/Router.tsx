import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PathsMap } from './paths/MainPaths'

export const Router = () => {
    return (
        <Switch>
            <Route path={PathsMap.root.get()}/>
            <Route path={PathsMap.about.get()}/>
            <Route path={PathsMap.edit.get()}/>
        </Switch>
    )
}