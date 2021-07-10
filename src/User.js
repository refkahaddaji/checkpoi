import React,{useState,useEffect} from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';

function User(props) {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4">
        <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
            <div className="mainflip">
                <div className="frontside">
                    <div className="card">
                        <div className="card-body text-center">
                            <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png" alt="card image"/></p>
                            <h4 className="card-title">{props.user.name}</h4>
                            <p className="card-text">{props.user.email}</p>
                            <p className="card-text">{props.user.phone}</p>
                            <p className="card-text">{props.user.website}</p>
                            <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                        </div>
                    </div>
                </div>
                <div className="backside">
                    <div className="card">
                        <div className="card-body text-center mt-4">
                            <h4 className="card-title">username: {props.user.username}</h4>
                            <p className="card-text">{props.user.address.street} {props.user.address.suite} {props.user.address.city} {props.user.address.zipcode}</p>
                            <p className="card-text">{props.user.company.name}: {props.user.company.catchPhrase}  </p>{props.user.company.bs}
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fa fa-skype"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                        <i className="fa fa-google"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default User
