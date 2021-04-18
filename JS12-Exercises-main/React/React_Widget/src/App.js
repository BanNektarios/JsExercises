import React from 'react';
import Accordion from './components/Accordion'

const items = [
    {
        title: 'What is React',
        content: 'React is a front end javascript library'
    },
    {
        title: 'Why use React',
        content: 'React is a favorite front end javascript library among developers'
    },
    {
        title: 'Is react easy?',
        content: 'Super easy, barely an inconvinience!'
    }
]

export default () => { 
    return <h1>
        <Accordion items={items}/></h1>
}