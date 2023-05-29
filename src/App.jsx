import Card from './components/Card'
import List from './components/List'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

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
  const list1 = [
    { label: 'About', imgPath: 'menu.png', active: true },
    { label: 'Sidebar Type', imgPath: 'menu.png', active: false },
    { label: 'Page Layouts', imgPath: 'menu.png', active: false },
  ]
  const list2 = [
    { label: 'Inbox', imgPath: 'menu.png', active: false },
    { label: 'Ticket', imgPath: 'menu.png', active: false },
    { label: 'Extra', imgPath: 'menu.png', active: false },
  ]
  const list3 = [
    { label: 'UI Elements', imgPath: 'menu.png', active: false },
    { label: 'Cards', imgPath: 'menu.png', active: false },
    { label: 'Components', imgPath: 'menu.png', active: false },
    { label: 'Widgets', imgPath: 'menu.png', active: false },
  ]
  return (
    <div className='container'>
      <aside className='sidepanel'>
        <section className='create-new'>
          <h4>Create New</h4>
        </section>
        <Card>
          <List list={list1}></List>
        </Card>
        <Card>
          <List list={list2}></List>
        </Card>
        <Card>
          <List list={list3}></List>
        </Card>
      </aside>
      <main className='main'>
        <div className='welcome-container'>
          <h2>Welcome</h2>
          <h1>Shivesh Mishra</h1>

          <button className='address'>Kanpur, India</button>
        </div>
        <div className='card-container'>
          <Card>
            <div className='card-inner'>
              {/* <h4>Income Variations</h4>
              <img width='300px' src='assets/variations.png' alt='' /> */}
              <h4>Education</h4>
              <div className='chart-container'>
                <Doughnut data={data} />;
              </div>
            </div>
          </Card>
          <Card>
            <div className='card-inner'>
              <h4>Certificates</h4>

              <ul>
                <li>
                  Google Digital Unlocked - The Fundamentals of Digital
                  Marketing
                </li>
                <li>
                  MOOC Online Certification - English For Personal And
                  Professional Development
                </li>
                <li>
                  Python Programming Beyond The Basics & Intermediate Training
                </li>
                <li>TCS ION - Knockdown The Lockdown</li>
                <li>Microsoft - AI Classroom Series</li>
                <li>AWS Online Series</li>
                <li>Skill Up with IBM - Open P-TECH</li>
                <li>GUVI - Python</li>
                <li>
                  Certificate Of Participation - The Guinness World Record Event
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </main>
      <aside className='sidepanel'>
        <Card>
          <div className='card-inner' style={{ gap: '.5rem' }}>
            <h4>Skills</h4>
            <div className='card-list-container'>
              <ul>
                <li>Programming Skills in Python</li>
                <li>HTML/CSS, Javascript</li>
                <li>DBMS</li>
                <li>PowerPoint</li>
                <li>Data Structures</li>
              </ul>
              <ul>
                <li>Teamwork</li>
                <li>Communication</li>
                <li>Networking</li>
                <li>Leadership</li>
                <li>Negotiation</li>
                <li>Handling difficult people</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <div className='card-inner' style={{ gap: '1rem' }}>
            <h4>Projects</h4>
            <ul>
              <li>Built a Chatbot using Python & Dialog Flow</li>
              <li>Created a Spotify CLone using HTML, CSS and JavaScript</li>
              <li>Project in Business Data Management for a cafe</li>
              <li>Project on Olympics Data Analysis using Machine Learning</li>
              <li>Data Structures</li>
            </ul>
          </div>
        </Card>
      </aside>
    </div>
  )
}

export default App
