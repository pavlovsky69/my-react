import React from 'react';
import {PostComponent} from "../ClassComponentPost/PostComponent/PostComponent";
import {CarComponent} from "./CarComponent/CarComponent";

class CarsComponent extends React.Component {

    state = {
        data: []
    }

    async componentDidMount() {
        try{
            const response = await fetch ('http://owu.linkpc.net/carsAPI/v1/cars')
            const data =await  response.json();
            console.log(data);
            this.setState({data})
        }catch (err){
            console.log(err)
        }
    }

    render() {
        const {data}= this.state;
        return (
            <div>
                <h1>All cars</h1>
                {data.map((car)=><CarComponent key={car.id} car={car}/>)}
            </div>

        )
    }
}

export {CarsComponent};