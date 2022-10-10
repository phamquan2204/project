import React, { useState, useEffect } from 'react'
import Genres from '../Services/Genres.js';
import { Link } from 'react-router-dom';

function NavItem(props) {
    const [subItems, setSubItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            Genres.getGenres(props.mediaType)
                .then(res => res.data)
                .then(data => setSubItems(data.genres))
        }
        fetchData()
    }, []);


    return (
        <>
            <li className="nav-item dropdown" key={props.name} >
                <Link className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {props.name}
                </Link>
                <div className="dropdown-menu dropdown bg-dark" aria-labelledby="navbarDropdown">
                    {subItems.map((item) => {
                        const { id, name } = item
                        return (
                            <>
                                <Link
                                    className="subItem dropdown-item text-muted"
                                    to={props.mediaType + '/genre/' + name.toLowerCase().replaceAll(' ', '') + '/' + id + '&page=' + 1}
                                    key={id}
                                >
                                    {name}
                                </Link>
                            </>
                        )
                    })}
                </div>
            </li>
        </>
    )
}

export default NavItem