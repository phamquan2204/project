import React, { useEffect } from 'react'
import '../Assets/Styles/NotFound.css';



function NotFound() {

    useEffect(() => {
        const setTitle = async (title) => {
            return document.title = title
        }
        window.scrollTo(0, 0)
        setTitle('Page Not Found')
    }, []);

    return (
        <div className="not-found text-center m-5 h-100 pt-5 pb-5">
            <div className="pb-5 pt-5 ">
                <p>404 Not Found</p>
                <span className="mb-5">Sorry!!! We can't find your page.</span>
                <div className="mb-3"></div>
            </div>
        </div>
    )
}

export default NotFound