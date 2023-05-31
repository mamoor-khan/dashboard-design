import { Fragment, useState } from 'react'
import Card from './components/Card'
import List from './components/List'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
  labels: ['10th', '12th', '1st Sem', '2nd Sem', '3th Sem', '4th Sem'],
  datasets: [
    {
      label: 'Marks Obtained (SGPA)',
      data: [8.92, 8.84, 7.9, 9.5, 8.55, 8.57],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Fragment>
  )
}

export default App
