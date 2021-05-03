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

      let className = 'emoji'

      label === emoji && (className += ' clicked')

      return (
        <div className={className} key={label} onClick={
          () => {
            navigator.clipboard.writeText(`:${label}:`)
            setEmoji(label)
        }
        }>
          
          <img src={emojis[label]} alt={label}/>
        </div>
      )
    }
  )


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
