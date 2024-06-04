import React, {useState} from 'react'
import './admin.css'

const Destinations = () => {
    const [category, setCategory] = useState('');

    const handleCategoryChange = (e) => {
      setCategory(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // submission logic 
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className='custom-select'>
            <h1 htmlFor="category">Category:</h1>
            <select id="category" value={category} onChange={handleCategoryChange}>
              <option value="">Select a category</option>
              <option value="Beach-Destinations">Beach Destinations</option>
              <option value="Hills-Mountains">Hills & Mountains</option>
              <option value="Heritage-Destinations">Heritage Destinations</option>
              <option value="Honeymoon Hotspots">Honeymoon Hotspots</option>
              <option value="Getaways For The Weekend">Getaways For The Weekend</option>
              <option value="Romantic Places">Romantic Places</option>
            </select>
          </div>
          {category === 'Beach-Destinations' && (
            <div >
                <h3 style={{textAlign:'center'}}>Romantic Places</h3>
                <div style={{display:' flex'}}>
                    <div style={{display:'flex', flexDirection:'column', textAlign:'start', gap:'3vh', marginLeft:'14vw'}}>
                        <label htmlFor="ID">ID:</label>
                        <label htmlFor="About">About:</label>
                        <label htmlFor="Subtitle">Subtitle:</label>
                        
                    </div>
                    <div style={{display:'flex', flexDirection:'column', textAlign:'start', gap:'2.6vh', width:'40vw',marginLeft:'2vw'}}>
                        <input type="text" id="ID" name="ID" />
                        <input type="text" id="About" name="About" />
                        <input type="text" id="Subtitle" name="Subtitle" />
                    </div>
                </div>
                
                <button type="submit" style={{marginTop:'20px'}}>Submit</button>
            </div>
          )}
          {category === 'Hills-Mountains' && (
            <div>
                <h3 style={{textAlign:'center'}}>Hills-Mountains</h3>
                <div style={{display:' flex'}}>
                    <div style={{display:'flex', flexDirection:'column', textAlign:'start', gap:'3vh', marginLeft:'14vw'}}>
                        <label htmlFor="ID">ID:</label>
                        <label htmlFor="About">About:</label>
                        <label htmlFor="Subtitle">Subtitle:</label>
                        
                    </div>
                    <div style={{display:'flex', flexDirection:'column', textAlign:'start', gap:'2.6vh', width:'40vw',marginLeft:'2vw'}}>
                        <input type="text" id="ID" name="ID" />
                        <input type="text" id="About" name="About" />
                        <input type="text" id="Subtitle" name="Subtitle" />
                    </div>
                </div>
              <button type="submit" style={{marginTop:'20px'}}>Submit</button>
            </div>
          )}
          {category === 'Heritage-Destinations' && (
            <div>
                <h3 style={{textAlign:'center'}}>Heritage-Destinations</h3>
                <div style={{display:' flex'}}>
                    <div style={{display:'flex', flexDirection:'column', textAlign:'start', gap:'3vh', marginLeft:'14vw'}}>
                        <label htmlFor="ID">ID:</label>
                        <label htmlFor="About">About:</label>
                        <label htmlFor="Subtitle">Subtitle:</label>
                        
                    </div>
                    <div style={{display:'flex', flexDirection:'column', textAlign:'start', gap:'2.6vh', width:'40vw',marginLeft:'2vw'}}>
                        <input type="text" id="ID" name="ID" />
                        <input type="text" id="About" name="About" />
                        <input type="text" id="Subtitle" name="Subtitle" />
                    </div>
                </div>
              <button type="submit" style={{marginTop:'20px'}}>Submit</button>
            </div>
          )}
          {category === 'Honeymoon Hotspots' && (
            <div>
                <h3 style={{textAlign:'center'}}>Honeymoon Hotspots</h3>
                <div style={{display:' flex'}}>
                    <div style={{display:'flex', flexDirection:'column', textAlign:'start', gap:'3vh', marginLeft:'14vw'}}>
                        <label htmlFor="ID">ID:</label>
                        <label htmlFor="About">About:</label>
                        <label htmlFor="Subtitle">Subtitle:</label>
                        
                    </div>
                    <div style={{display:'flex', flexDirection:'column', textAlign:'start', gap:'2.6vh', width:'40vw',marginLeft:'2vw'}}>
                        <input type="text" id="ID" name="ID" />
                        <input type="text" id="About" name="About" />
                        <input type="text" id="Subtitle" name="Subtitle" />
                    </div>
                </div>
              <button type="submit" style={{marginTop:'20px'}}>Submit</button>
            </div>
          )}
          {category === 'Getaways For The Weekend' && (
            <div>
                <h3 style={{textAlign:'center'}}>Getaways For The Weekend</h3>
                <div style={{display:' flex'}}>
                    <div style={{display:'flex', flexDirection:'column', textAlign:'start', gap:'3vh', marginLeft:'14vw'}}>
                        <label htmlFor="ID">ID:</label>
                        <label htmlFor="About">About:</label>
                        <label htmlFor="Subtitle">Subtitle:</label>
                        
                    </div>
                    <div style={{display:'flex', flexDirection:'column', textAlign:'start', gap:'2.6vh', width:'40vw',marginLeft:'2vw'}}>
                        <input type="text" id="ID" name="ID" />
                        <input type="text" id="About" name="About" />
                        <input type="text" id="Subtitle" name="Subtitle" />
                    </div>
                </div>
              <button type="submit" style={{marginTop:'20px'}}>Submit</button>
            </div>
          )}
          {category === 'Romantic Places' && (
            <div style={{display:'flex', flexDirection:'column'}}>
                <h3 style={{textAlign:'center'}}>Romantic Places</h3>

                <div style={{display:' flex'}}>
                    <div style={{display:'flex', flexDirection:'column', textAlign:'start', gap:'3vh', marginLeft:'14vw'}}>
                        <label htmlFor="ID">ID:</label>
                        <label htmlFor="About">About:</label>   
                    </div>
                    <div style={{display:'flex', flexDirection:'column', textAlign:'start', gap:'2.6vh', width:'40vw',marginLeft:'2vw'}}>
                        <input type="text" id="ID" name="ID" />
                        <input type="text" id="About" name="About" />
                    </div>
                </div>
                
                <button type="submit" style={{marginTop:'20px'}}>Submit</button>
            </div>
          )}
        </form>
      </div>
    );
  };

export default Destinations
