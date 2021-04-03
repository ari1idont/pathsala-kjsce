import './App.css';
import React from 'react'
import{BrowserRouter as Router,Route,Switch,Link,Redirect} from 'react-router-dom'
import Eleventwelve from './pages/eleventweleve/Eleventwelve'
import Pcme11 from './pages/pcme11/Pcme11'
import Physics11 from './pages/physics11/Physics11'
import Chemistry11 from './pages/chemistry11/Chemistry11'
import Maths11 from './pages/maths11/Maths11'
import Physics12 from './pages/physics12/Physics12'
import Chemistry12 from './pages/chemistry12/Chemistry12'
import Maths12 from './pages/maths12/Maths12'
import Extras12 from './pages/extras12/Extras12'
import Pcme12 from './pages/pcme12/Pcme12'
import Engineering from './pages/engineering/EngineeringBranches'
import Cs from './pages/engineering/CS'
import Ece from './pages/engineering/ECE'
import Mech from './pages/engineering/Mech'
import Skills from './pages/skills/Skills'
import TechnicalSkills from './pages/skills/TechSkills'
import NonTechnicalSkills from './pages/skills/NonTechSkills'
import Home from './pages/home/home'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/school' component={Eleventwelve} />
        <Route path='/pcme11' component={Pcme11} />
        <Route path='/physics11' component={Physics11} />
        <Route path='/chemistry11' component={Chemistry11} />
        <Route path='/maths11' component={Maths11} />
        <Route path='/pcme12' component={Pcme12} />
        <Route path='/physics12' component={Physics12} />
        <Route path='/chemistry12' component={Chemistry12} />
        <Route path='/maths12' component={Maths12} />
        <Route path='/extras12' component={Extras12} />
        <Route path='/engineering'component={Engineering} />
        <Route path='/cs' component={Cs} />
        <Route path='/ece' component={Ece} />
        <Route path='/mech' component={Mech} />
        <Route path='/skills' component={Skills} />
        <Route path='/technicalskills' component={TechnicalSkills} />
        <Route path='/nontechnicalskills' component={NonTechnicalSkills} />
      {/* <Eleventwelve></Eleventwelve> */}
      {/* <Pcme11></Pcme11> */}
      {/* <Physics11></Physics11> */}
      {/* <Chemistry11></Chemistry11> */}
      {/* <Maths11></Maths11> */}
      {/* <Physics12></Physics12> */}
      {/* <Chemistry12></Chemistry12> */}
      {/* <Maths12></Maths12> */}
      {/* <Extras12></Extras12> */}
      {/* <Pcme12></Pcme12> */}
      </Switch>
      </Router>
  );
}

export default App;
