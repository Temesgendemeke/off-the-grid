import React from 'react'
import timerpic from '../images/timer.png'
import todosimg from '../images/todos.png'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';


let features = {
  'title': 'Features',
  'paragraph': "We believe in the power of focused work and the importance of disconnecting to truly connect with your productivity. That's why we built Off the Grid, a website designed to help you harness the Pomodoro Technique and conquer your to-do list",
  'focus': "Focus Like a Pro with the Pomodoro Technique:",
  'paragrah2':"The Pomodoro Technique is a time management method that breaks down work into focused 25-minute intervals, separated by short breaks. This simple approach helps you maintain concentration, avoid burnout, and achieve more in less time.  Off the Grid provides a clean and intuitive Pomodoro timer, allowing you to:",
  'list':['Set your work interval and break duration.', 'Start, pause, and reset the timer with ease.', 'Track your progress visually as you complete Pomodoros.'],
  'todofeature': 'to-do list',
  'todolist_paragraph': 'Off the Grid offers a streamlined to-do list feature that lets you:',
  'todolist': ['Add, edit, and check off tasks as you complete them.', 'Prioritize tasks to ensure you focus on the most important ones first.','Enjoy the satisfaction of seeing your to-do list shrink throughout the day.']
}

let about_section = {
  'title': "About",
  "paragraph": "Kanye blasted through my headphones, \"Off the Grid\" pulsating with a relentless energy. As the song built, it struck a chord deeper than the catchy beat. It wasn't just a song anymore; it was a metaphor for the constant barrage of notifications, emails, and social media feeds that had become my reality.Trapped in this digital current, I felt perpetually behind, my to-do list a taunting reminder of unachieved goals. Focus? It was a luxury I couldn't afford. Frustration gnawed at me, mirroring the frenetic pace of my digital life.",
  "break":"Breaking Free: The Pomodoro Promise",
  "break_paragraph":"Desperate for a solution, I stumbled upon the Pomodoro Technique. This time management method, with its 25-minute work intervals punctuated by short breaks, felt like a lifeline. It promised a way to structure my work, to fight the constant pressure with focused bursts of activity.Suddenly, a parallel emerged.  \"Off the Grid\" wasn't just about Kanye's song; it was about escaping the digital grid that held me captive.  The Pomodoro Technique offered the key  a method to disconnect, to work intentionally, and to finally conquer that ever-growing to-do list.",
  "offthegrid":"Off the Grid is Born: Focus on Your Terms",
  "offthegrid_paragraph":"The idea sparked. What if I could combine the power of the Pomodoro Technique with a simple to-do list, all accessible without getting sucked back into the digital vortex?  An app that empowered users to be productive on their own terms, without the need for constant connectivity.\
  That's how Off the Grid was born. Inspired by Kanye's call to escape the noise and the transformative power of Pomodoro, it's a website designed to help you reclaim your focus and conquer your to-do list.  It's about creating your own digital sanctuary, a space where focused work and accomplishment reign supreme.\
  Off the Grid isn't about abandoning technology altogether; it's about using it strategically. It's about leveraging the power of focused work to achieve more in less time, freeing you to truly disconnect and recharge when you need it most."
}



const Content = () => {
 
  return (
    <div className='text-white m-10 p-2 '>
    <h2 className='text-5xl text-center'>{features.title}</h2>
    <p>{features.paragraph}</p>
    
    <div className="podomoro flex gap-2 font-sans mt-4 ">
    <img src={timerpic} alt=""  className='border-2 p-2 mt-2 max-w-[50%] mr-4'/>
    <div className=''>
    <h2 className='text-2xl mt-2 font-semibold '>{features.focus}</h2>
    <p>{features.paragrah2}</p>
    <ul className='list-disc ml-4 no-underline content-list leading-9' >
      {features.list.map(element => <li>{element}</li>)}
    </ul>
    </div>
    </div>

    <div className="todos flex gap-2 font-sans  mt-10">
      <div>
         <h2 className='text-2xl mt-2 font-semibold uppercase'>{features.todofeature}</h2>
         <p>{features.todolist_paragraph}</p>
         <ul className='list-disc ml-2 no-underline content-list leading-9' >
         {features.todolist.map(element => <li>{element}</li>)}
         </ul>
      </div>
      <div className='max-w-[50%] border-2 p-2 ml-4'>
        <img src={todosimg} alt="" />
      </div>
    </div>
    <h2 className='text-4xl text-center mt-4 '>{about_section.title}</h2>
    <div>
      <p>
        {about_section.paragraph}
     </p>  
     <h2 className='text-lg font-semibold text-center mb-3'>{about_section.break}</h2>
     <p>
      {about_section.break_paragraph}
      </p>
      <h2 className='text-lg font-semibold text-center mb-3'>{about_section.offthegrid}</h2>
      <p>{about_section.offthegrid_paragraph}</p>
    </div>
    <div className="socails flex size justify-center gap-5 mt-5">
    <Link to='https://twitter.com/temesgendora'><FaSquareXTwitter className='size-16'/></Link>
    <Link to='https://github.com/Temesgendemeke'><FaGithub  className='size-16'/></Link>
    <Link to='https://www.linkedin.com/in/temesgen-demeke'><FaLinkedin className='size-16'/></Link>
    </div>
    <div className='text-center mt-10'>
       <Link to='https://github.com/Temesgendemeke/off-the-grid' className='bg-white text-black p-2 rounded-lg font-semibold hover:bg-slate-50 uppercase'>off the grid repository</Link>
    </div>
    
    </div>
  )
}

export default Content
