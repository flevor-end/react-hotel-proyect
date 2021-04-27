import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from './Title';

export default class Services extends Component {
    state={
        services: [
            {
                icon: <FaCocktail/>,
                title: "Cocteles Gratis",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nostrum?'
            },
            {
                icon: <FaHiking/>,
                title: "Senderismo Sin Fin",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nostrum?'
            },
            {
                icon: <FaShuttleVan/>,
                title: "Transporte Gratis",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nostrum?'
            },
            {
                icon: <FaBeer/>,
                title: "Mucha Cerveza",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nostrum?'
            },
        ]
    }
    render() {
        return (
            <section className="services">
        <Title title="Servicios" />
        <div className="services-center">
            {this.state.services.map((item,index) => {
                return <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
            })}

        </div>
            </section>
        );
    }
}
