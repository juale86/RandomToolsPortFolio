import './style.css'
import {
    Switch,
    Route,
} from 'react-router-dom'

const Main = () => {
    return (
        <Switch>
            <Route to='/'>
                <ComponenteDePrueba />
            </Route>
        </Switch>
    );
}

const ComponenteDePrueba = ()=>{
    return (
        <p className="prueba">Y bueno, cosas</p>
    );
}

export default Main;