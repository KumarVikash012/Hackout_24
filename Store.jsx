import React, { createContext, useState } from "react";

const Pro_val = createContext();

function validateInputs(nitrogen, phosphorous, potassium, temperature, humidity, ph, rainfall) {
  if (!nitrogen || isNaN(nitrogen) || nitrogen < 0 || nitrogen > 100) {
    alert("Please enter a valid nitrogen value (0-100).");
    return false;
  }

  if (!phosphorous || isNaN(phosphorous) || phosphorous < 0 || phosphorous > 100) {
    alert("Please enter a valid phosphorous value (0-100).");
    return false;
  }

  if (!potassium || isNaN(potassium) || potassium < 0 || potassium > 100) {
    alert("Please enter a valid potassium value (0-100).");
    return false;
  }

  if (!temperature || isNaN(temperature) || temperature < -50 || temperature > 50) {
    alert("Please enter a valid temperature value (-50 to 50).");
    return false;
  }

  if (!humidity || isNaN(humidity) || humidity < 0 || humidity > 100) {
    alert("Please enter a valid humidity value (0-100).");
    return false;
  }

  if (!ph || isNaN(ph) || ph < 0 || ph > 14) {
    alert("Please enter a valid pH value (0-14).");
    return false;
  }

  if (!rainfall || isNaN(rainfall) || rainfall < 0 || rainfall > 1000) {
    alert("Please enter a valid rainfall value (0-1000 mm).");
    return false;
  }

  return true;
}

function Store({ children }) {
  const [resultString, setResultString] = useState('');

  const val_function = async (nitrogen, phosphorous, potassium, temperature, humidity, ph, rainfall) => {
    if (validateInputs(nitrogen, phosphorous, potassium, temperature, humidity, ph, rainfall)) {
      console.log(nitrogen, phosphorous, potassium, temperature, humidity, ph, rainfall);
      
      try {
        const response = await fetch('http://127.0.0.1:8000/fertilizer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            n: [nitrogen],
            Ph: [phosphorous],
            pH: [ph],
            soil: ["sandy"], // Example value, replace it with your variable if you have one
            crop: ["sugarcane"], // Example value, replace it with your variable if you have one
            moisture: [potassium], // Assuming moisture corresponds to potassium
            humidity: [humidity]
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Server response as object:', result);

        const resultString = result['Predicted Fertilizer']; // Adjust based on actual key
        console.log('Predicted Fertilizer:', resultString);
        // Update the state with the result string
        setResultString(resultString);

      } catch (error) {
        console.error('Error making request:', error);
      }
    }
  }

  return (
    <Pro_val.Provider value={{ val_function, resultString }}>
      {children}
    </Pro_val.Provider>
  );
}

export { Pro_val };
export default Store;
