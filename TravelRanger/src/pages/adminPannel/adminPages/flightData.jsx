import React, {useState} from 'react'

const flightData = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        // submission logic 
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1 style={{textAlign:'center'}}>Flight Data</h1>
            <div style={{display:' flex'}} >
                <div style={{display:'flex', flexDirection:'column', textAlign:'start', gap:'3vh', marginLeft:'14vw'}}>
                    <label htmlFor="Airline">Airline:</label>
                    <label htmlFor="Number">Number:</label>
                    <label htmlFor="From">From:</label>
                    <label htmlFor="To">To:</label>
                    <label htmlFor="Departure">Departure:</label>
                    <label htmlFor="Arrival">Arrival:</label>
                    <label htmlFor="Price">Price:</label>
                    <label htmlFor="Total Time">Total Time:</label>
                </div>
                <div style={{display:'flex', flexDirection:'column', textAlign:'start', gap:'2.6vh', width:'40vw',marginLeft:'2vw'}}>
                    <input type="text" id="Airline" name="Airline" />
                    <input type="text" id="Number" name="Number" />
                    <input type="text" id="From" name="From" />
                    <input type="text" id="To" name="To" />
                    <input type="text" id="Departure" name="Departure" />
                    <input type="text" id="Arrival" name="Arrival" />
                    <input type="text" id="Price" name="Price" />
                    <input type="text" id="Total Time" name="Total Time" />
                </div>
            </div>
            
            <button type="submit" style={{marginTop:'20px'}}>Submit</button>
        </form>
        
    </div>
  )
}

export default flightData
