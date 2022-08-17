import React, { useState } from 'react'
import './App.css';
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from './Character';
import { COPY_Fail, COPY_SUCCESS } from './Messages';

function App() {
  const [password, setPassword] = useState("")
  const [passwordLength, setPassWordLength] = useState(26)
  const [includeUpperCase, setIncludeUpperCase] = useState(false)
  const [includeLowerCase, setIncludeLowerCase] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const handleGenerator = () => {
    if (!includeUpperCase && !includeLowerCase && !includeSymbols && !includeNumbers) {
      alert('To generate Password you must select at least one checkbox')
    } else {
      let characterList = ""
      if (includeUpperCase) {
        characterList = characterList + upperCaseLetters
      }
      if (includeLowerCase) {
        characterList = characterList + lowerCaseLetters
      }
      if (includeSymbols) {
        characterList = characterList + specialCharacters
      }
      if (includeNumbers) {
        characterList = characterList + numbers
      }
      setPassword(createPassword(characterList))
      alert('Password generated succesfully')
    }
    
  }
  const createPassword = (characterList) => {
    let password = ""
    const characterListLength = characterList.length
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength)
      password = password + characterList.charAt(characterIndex)
    }
    return password
  }

  const copyPassword = (password) => {
    navigator.clipboard.writeText(password)
  }

  const handleCopyPassword = () => {
    if (password === "") {
      alert(COPY_Fail, true)
    } else {
      copyPassword(password)
      alert(COPY_SUCCESS)
    }
  }
  return (
    <div className="App">
      <div className="wrapper">
        <div className="generator">
          <h2 className="generatorheader">Password Generator</h2>
          <div className="generatorpassword">
          <h3>{ password }</h3>
          <button className="copybtn">
              <i onClick={handleCopyPassword} className="far fa-clipboard"></i>
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="password-strength">Password length</label>
            <input className="pw" type="number" id="password-stregth" 
            name="password-strength" max="26" min="8" 
            value={passwordLength}
            onChange={e => setPassWordLength(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="include-symbols">Add Uppercase Letters</label>
            <input  type="checkbox" id="include-symbols" name="include-symbols"
            checked={includeUpperCase}
            onChange={e => setIncludeUpperCase(e.target.checked)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="include-symbols">Add Lowercase Letters</label>
            <input  type="checkbox" id="include-symbols" name="include-symbols" 
            checked={includeLowerCase}
            onChange={e => setIncludeLowerCase(e.target.checked)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="include-symbols">Include Numbers</label>
            <input  type="checkbox" id="include-symbols" name="include-symbols" 
            checked={includeSymbols}
            onChange={e => setIncludeSymbols(e.target.checked)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="include-symbols">Include Symbols</label>
            <input  type="checkbox" id="include-symbols" name="include-symbols" 
            checked={includeNumbers}
            onChange={e => setIncludeNumbers(e.target.checked) }
            />
          </div>
          <button className="generatorbtn" onClick={handleGenerator}>
            <p>Generator Password</p>
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default App;
