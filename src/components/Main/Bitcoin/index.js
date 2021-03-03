import { useState, useEffect } from 'react'
import './style.scss'

const Bitcoin = () => {
    const [prices,setPrice] = useState([])
    
    useEffect(() => {
        pedirPrecio()
    }, [])

    const pedirPrecio = async ()=>{
        const BitcoinPrice = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        const price = await BitcoinPrice.json()
        setPrice(price.bpi)
    }
    
    return (
            <div className={'fc'}>
                <div className={'card fondo'}>
                    <h2 className={'inl'}>Precio de Bitcoin</h2>
                    <button className={'inl reloadBTN'} onClick={pedirPrecio}>&#128260;</button>
                    <div>
                    {
                        Object.entries(prices).map((x,index) =>{
                            return (
                                <div key={index}>
                                    <div className={'inl priceVal'}>{x[1]['rate']}</div>
                                    <div className={'inl codeVal'}>{x[1]['code']}</div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            );
}

export default Bitcoin;