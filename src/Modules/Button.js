import React from 'react'
import { Link } from 'react-router-dom';
import '../Assets/Styles/Button.css';


function Button(props) {
  if (props.disabledValue) {
    return (
      <button className='btn btn-dark m-1' disabled>
        {props.page}
      </button>
    )
  }
  else {
    return (
      <>
        <Link
          className="text-light"
          to={'/' + props.link}>
          <button className='btn btn-dark  m-1' >
            {props.page}
          </button>
        </Link>
      </>
    )
  }
}

function ButtonGroup(props) {
  const prevPage = parseInt(props.page) - 1;
  const nextPage = parseInt(props.page) + 1;
  return (
    <div className="btn-container d-flex justify-content-center">
      {props.page === '1'
        ? <Button
          link={`${props.link}&page=${prevPage}`}
          page={'<'} disabledValue={true} />
        : <Button
          link={`${props.link}&page=${prevPage}`}
          page={'<'} />
      }
      <Button
        page={props.page}
        disabledValue={true} />
      <Button
        page={'>'}
        link={`${props.link}&page=${nextPage}`}

      />
    </div>
  )
}


export default ButtonGroup