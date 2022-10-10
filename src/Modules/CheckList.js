import React, { useState } from 'react'

function CheckList(props) {
    const [checked, setChecked] = useState(false);
    const [checkedValue, setCheckedValue] = useState([]);
    const arr = ['tv', 'movie', 'country']


    const checkValue = (e) => {
        // const newCheckedValue = [...checkedValue]
        setChecked(!checked)
        if (e.target.checked) {
            setCheckedValue(e.target.value)
        }
    }

    return (
        <div className="">
            <form action="" className="form-group">

                {arr.map((item) => {
                    return (
                        <div class="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                value={item}
                                onClick={(e) => { checkValue(e) }}
                            />
                            <label class="form-check-label text-capitalize" for="flexRadioDefault1">
                                {item}
                            </label>
                        </div>
                    )
                })}
            </form>
            {console.log(checkedValue)}
        </div>
    )
}

export default CheckList