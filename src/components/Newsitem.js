import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title , description, imageUrl, newsUrl, author, date, source} = this.props ; 
        return (
            <div className="my-3">
                <div className="card">
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}> {source}
                        </span>
                <img src={!imageUrl?"https://s.yimg.com/os/creatr-uploaded-images/2021-09/b83e0b30-1309-11ec-876f-feaa47043738":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text"><small className="text-muted">By {!author? "Unknow":author} on {new Date(date).toGMTString()} </small></p>
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
