import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title , description, imageUrl, newsUrl} = this.props ; 
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                <img src={!imageUrl?"https://s.yimg.com/os/creatr-uploaded-images/2021-09/b83e0b30-1309-11ec-876f-feaa47043738":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl} rel="noreferrer" target ="_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
