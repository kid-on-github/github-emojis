import './App.scss';
import { useEffect, useState } from 'react';

function App() {

  const [emojis, setEmojis] = useState({})
  const [search, setSearch] = useState('')
  const [emoji, setEmoji] = useState('1f999')

  useEffect(
    () => {
      if (Object.keys(emojis).length === 0){
        fetch('https://api.github.com/emojis')
        .then(r => r.json())
        .then(r => setEmojis(r))
      }
    }
  )


    console.log(search)
    
    
  const searchTest = new RegExp(search, 'g')

  const icons = Object.keys(emojis).map(
    label => {

      if (search.length > 0){
        let isInSearch = searchTest.test(label)
        if (!isInSearch){return ''}
      }      


      return (
        <div className='emoji' key={label} onClick={
          () => {
          
          const fileName = emojis[label].match(/(\d|\w)+.png/g)
          const code = fileName.toString().slice(0, fileName.length - 5)
          setEmoji(code)
        
          }
        }>
          
          <img src={emojis[label]} alt={label}/>
        </div>
      )
    }
  )


  //(e) => setSearch(e.target.value)
  return (
    <div className='App'>
      <div className='topbar'>


        <div className='search'>
          <input type='text' onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='search'/>
        </div>

      </div>

      <div className='emojiWrapper'>
        {icons}
      </div>
    </div>
  );
}

export default App;
