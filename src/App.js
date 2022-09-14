import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('#1234EF');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values(color).all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
      setList(colors);
    }
    catch (ex) {
      setError(true);
      console.log(ex);
    }
  }

  return <>
    <section className='container'>
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setColor(e.target.value)}
          placeholder="#1234EF"
          className={`${error ? 'error' : ''}`}
        ></input>
        <button type='submit' className='btn'>Submit</button>
      </form>
    </section>
    <section className='colors'>
      {
        list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />
        })
      }
    </section>
  </>
}

export default App
