import './style.css';
import { NavLink } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import { store, stateToPropsMap, dispatchToPropsMaps } from './store.js';

const Iconos = (props) => {
    const IconPaths = props.IconsList.map(x=>'Iconos/'+x+'.svg')
    return IconPaths.map((x,index) => (
        <NavLink key={index} className={"iconClass"} to={props.IconsList[index]}>
            <img src={x} alt="insertar SVG con la etiqueta image" />
            <button onClick={props.delGadget(index)}>X</button>
        </NavLink>
    ))
}

const Container = connect(stateToPropsMap, dispatchToPropsMaps)(Iconos);

const Menu = () => {
    return (<div className="menu fc">
                <Provider store={store}>
                    <Container />
                </Provider>
            </div>);
}

export default Menu;