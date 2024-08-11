import { useRef, useContext } from "react";
import { Pro_val } from './Store';



function Form({selectedtab, setSelectedtab}) {
    const { val_function,resultString } = useContext(Pro_val);

    const nitrogen_element = useRef();
    const phosphorous_element = useRef();
    const potassium_element = useRef();
    const temperature_element = useRef();
    const humidity_element = useRef();
    const ph_element = useRef();
    const rainfall_element = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Ensure all refs are defined before accessing them
        if (
            nitrogen_element.current && 
            phosphorous_element.current &&
            potassium_element.current &&
            temperature_element.current &&
            humidity_element.current &&
            ph_element.current &&
            rainfall_element.current
        ) {
            const nitrogen = nitrogen_element.current.value;
            const phosphorous = phosphorous_element.current.value;
            const potassium = potassium_element.current.value;
            const temperature = temperature_element.current.value;
            const humidity = humidity_element.current.value;
            const ph = ph_element.current.value;
            const rainfall = rainfall_element.current.value;

            val_function(nitrogen, phosphorous, potassium, temperature, humidity, ph, rainfall);
            setSelectedtab("Fertilizers")
            console.log(resultString)
        } else {
            console.error("One or more refs are undefined.");
        }
    };

    return (
        <center className="main-form">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label form_label">
                        Nitrogen
                    </label>
                    <input
                        type="number"
                        className="form-control input_control"
                        ref={nitrogen_element}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label form_label">
                        Phosphorous
                    </label>
                    <input
                        type="number"
                        className="form-control input_control"
                        ref={phosphorous_element}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label form_label">
                        Potassium
                    </label>
                    <input
                        type="number"
                        className="form-control input_control"
                        ref={potassium_element}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label form_label">
                        Temperature
                    </label>
                    <input
                        type="number"
                        className="form-control input_control"
                        ref={temperature_element}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label form_label">
                        Humidity
                    </label>
                    <input
                        type="number"
                        className="form-control input_control"
                        ref={humidity_element}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label form_label">
                        PH
                    </label>
                    <input
                        type="text"  // Use type text for PH instead of password
                        className="form-control input_control"
                        ref={ph_element}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label form_label">
                        Rainfall
                    </label>
                    <input
                        type="number"
                        className="form-control input_control"
                        ref={rainfall_element}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </center>
    );
}

export default Form;
