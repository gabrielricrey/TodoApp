import { useState } from "react";

let CreateTodo = () => {

    let [title, setTitle] = useState("");
    let [desc, setDesc] = useState("");
    let [days, setDays] = useState("");
    let [showDayPicker, setShowDayPicker] = useState(false);

    let handle = (e) => {

        if (e.target.value == "2") {
            setShowDayPicker(true)
        } else {
            setShowDayPicker(false)
        }

    }



    return (
        <div className="create-todo">
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Description" />
            <div className="radio-btns">
                <div>
                    <label htmlFor="">Only Today</label>
                    <input type="radio" name="1" value="1" onChange={(e) => handle(e)} defaultChecked />
                </div>
                <div>
                    <label htmlFor="">Several Days</label>
                    <input type="radio" name="1" value="2" onChange={(e) => handle(e)} />
                </div>
                <div>
                    <label htmlFor="">Every day</label>
                    <input type="radio" name="1" value="3" onChange={(e) => handle(e)} />
                </div>
            </div>
            {showDayPicker &&
                <div className="day-picker">
                    <div className="day">
                        <label htmlFor="">M</label>
                        <input type="checkbox" />
                    </div>
                    <div className="day">
                        <label htmlFor="">T</label>
                        <input type="checkbox" />
                    </div>
                    <div className="day">
                        <label htmlFor="">W</label>
                        <input type="checkbox" />
                    </div>
                    <div className="day">
                        <label htmlFor="">T</label>
                        <input type="checkbox" />
                    </div>
                    <div className="day">
                        <label htmlFor="">F</label>
                        <input type="checkbox" />
                    </div>
                    <div className="day">
                        <label htmlFor="">S</label>
                        <input type="checkbox" />
                    </div>
                    <div className="day">
                        <label htmlFor="">S</label>
                        <input type="checkbox" />
                    </div>

                </div>}

            <button>Create</button>
        </div>
    )
}

export default CreateTodo;