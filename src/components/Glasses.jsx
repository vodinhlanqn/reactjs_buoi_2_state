import React, { Component } from 'react'
import "./style.css"
import data from './DataGlasses.json'

export default class Glasses extends Component {
    state = {
        glassesItem: {
            "id": 1,
            "price": "30 $",
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }
    render() {
        let { glassesItem } = this.state;
        return (
            <div className=' glasses'>
                <img src="./glassesImage/bg.png" alt="" className='img1' />

                <div className="container">
                    <header className="row header">
                        <p className="text-white text-center header bg-dark">TRY GLASS APP ONLINE</p>
                    </header>
                    <div className='row content'>
                        <div className='col-4 model'>
                            <img src="./glassesImage/model.jpg" alt=" model-fashion" className='img-fluid' />
                            <img src={glassesItem.url} alt="" width={10} className='img2' />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='info'>
                        <h3 className='pl-2'>{glassesItem.name}</h3>
                        <button className="btn btn-danger ml-2 btn-glass">{glassesItem.price}</button>
                        <p className='pl-2'>{glassesItem.desc}</p>
                    </div>
                </div>

                <div className='try-glass row '>
                    {
                        data.map((value) => {
                            return <div className='glass' key={value.id}>
                                <img src={value.url} alt="" width={140}
                                    onClick={() => {
                                        this.setState({
                                            glassesItem: value
                                        })
                                    }}
                                />
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}
