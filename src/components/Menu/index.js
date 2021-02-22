import './style.css';

const IconNames = ['bitcoin','calculadora','clima','hogar','portapapeles']
const IconPaths = IconNames.map(x=>'Iconos/'+x+'.svg')

const Iconos = () => {
    const Icons = IconPaths.map((x,index) => <img key={index} className={"iconClass"} src={x} alt="insertar SVG con la etiqueta image" />)
    return Icons;
}

const Menu = ()=>{
    return (<div className="menu fc">
            <Iconos />
            </div>);
}

export default Menu;