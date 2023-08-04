import { Routes, Route } from 'react-router-dom'
import Home from '@weFinance/views/pages/Home'
import About from '@weFinance/views/pages/About'
import News from '@weFinance/views/pages/News'
import Career from '@weFinance/views/pages/Career'

export default function Router() {
   return (
      <Routes>
         <Route index Component={Home} />
         <Route path="about" Component={About} />
         <Route path="news" Component={News} />
         <Route path="career" Component={Career} />
      </Routes>
   )
}
