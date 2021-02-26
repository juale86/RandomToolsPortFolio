import './style.css'
import {
    Switch,
    Route,
} from 'react-router-dom'

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
const Bitcoin = () => <p className="prueba">Bitcoin</p>
const Calculadora = () => <p className="prueba">Calculadora</p>
const Clima = () => <p className="prueba">Clima</p>
const Tareas = () => <p className="prueba">Tareas</p>

export default Main;