import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Store from './components/Store';  
import 'bootstrap/dist/css/bootstrap.min.css';
import Fertilizer from './components/Fertilizer';
import './App.css';
import Form from './components/Form';

function App() {
  const fertilizerInfo = {
    'Urea': [
      'Urea is one of the most commonly used nitrogenous fertilizers globally. It is highly concentrated and provides a quick release of nitrogen to crops.',
      'Urea typically contains 46% nitrogen.',
      'Suitable for a wide range of crops, including cereals (wheat, rice, maize), vegetables, and other field crops that require high nitrogen levels.'
    ],
    'DAP (Diammonium Phosphate)': [
      'Diammonium Phosphate (DAP) is a popular phosphatic fertilizer that also provides a good amount of nitrogen. It is widely used for its high nutrient content and its ability to increase the pH of the soil.',
      'DAP contains 18% nitrogen and 46% phosphorus.',
      'Ideal for crops such as wheat, maize, barley, and vegetables that require both nitrogen and phosphorus in significant amounts.'
    ],
    '10-26-26': [
      'The 10-26-26 fertilizer is a balanced blend that provides essential nutrients with a higher focus on phosphorus and potassium. It is often used in specific growth stages or for crops that need these nutrients.',
      'This fertilizer contains 10% nitrogen, 26% phosphorus, and 26% potassium.',
      'Suitable for crops like potatoes, tobacco, sugarcane, and vegetables, which need a balanced supply of phosphorus and potassium.'
    ],
    '17-17-17': [
      'The 17-17-17 fertilizer is a balanced NPK fertilizer that provides equal amounts of nitrogen, phosphorus, and potassium. It’s used for general crop nutrition.',
      'This fertilizer contains 17% nitrogen, 17% phosphorus, and 17% potassium.',
      'Suitable for various crops, including fruits, vegetables, cereals, and ornamental plants, where balanced growth is desired.'
    ],
    '14-35-14': [
      'The 14-35-14 fertilizer is designed to provide a higher amount of phosphorus relative to nitrogen and potassium, making it ideal for early-stage growth and root development.',
      'This fertilizer contains 14% nitrogen, 35% phosphorus, and 14% potassium.',
      'Suitable for crops like legumes, root vegetables, and flowering plants that require higher phosphorus during their early growth stages.'
    ],
    '28-28': [
      'The 28-28 fertilizer is a balanced fertilizer blend, but it does not contain potassium. It provides an equal amount of nitrogen and phosphorus.',
      'This fertilizer contains 28% nitrogen and 28% phosphorus.',
      'Suitable for crops like maize, wheat, and other cereals, where potassium is less critical, and a strong focus on nitrogen and phosphorus is needed.'
    ],
    '20-20': [
      'The 20-20 fertilizer is similar to 28-28 but with a lower concentration of nutrients. It provides a balanced amount of nitrogen and phosphorus without potassium.',
      'This fertilizer contains 20% nitrogen and 20% phosphorus.',
      'Ideal for cereals, oilseeds, and other crops where potassium is less essential, but balanced nitrogen and phosphorus are required.'
    ]
  };

  const [selectedtab, setSelectedtab] = useState("Home");

  return (
    <Store>
    <div className='back_main'>
      <Header selectedtab={selectedtab} setSelectedtab={setSelectedtab} />
      {selectedtab === "Home" && <Hero setSelectedtab={setSelectedtab}/>}
      {selectedtab === "Contact_page" && <Form selectedtab={selectedtab} setSelectedtab={setSelectedtab} />}
      {selectedtab === "Fertilizers" && <Fertilizer fertilizerInfo={fertilizerInfo} />}
      <Footer />
    </div>
    </Store>
  );
}

export default App;
