import React from "react"

export default function Card(props){
    return(
        <div className="card">
            <img className="card--photo" src={props.imageUrl} />
            <section className="card--data">
                <div className="card--location">
                         <img className="card--pin" src="./assets/location.svg" />
                         <span className="card--country"> {props.location.toUpperCase()} </span>
                         <a className="card--link"href={props.googleMapsUrl} > View on Google Maps </a>               
                </div>
                <div className="card--title">
                        <span> {props.title} </span>
                </div>
                
                <div className="card--date">
                        <span> {props.startDate} - {props.endDate}</span>
                
                </div>
                 <div className="card--description">
                        <span> {props.description} </span>
                
                </div>
            </section>
            
        
        </div>
    )
}