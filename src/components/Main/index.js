import './style.css'
import {
    Switch,
    Route,
} from 'react-router-dom'
import Bitcoin from './Bitcoin'
import Calculadora from './Calculadora'
import Clima from './Clima'

const Main = () => {
    return (
        <Switch>
            <Route path='/bitcoin'><Bitcoin /></Route>
            <Route path='/calculadora'><Calculadora /></Route>
            <Route path='/clima'><Clima /></Route>
            <Route path='/portapapeles'><Tareas /></Route>
            <Route path='/'><Home /></Route>
        </Switch>
    );
}

const Home = () => <p className="prueba">Y bueno, cosas</p>
const Tareas = () => <p className="prueba">Tareas</p>

export default Main;