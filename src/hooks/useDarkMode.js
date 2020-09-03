import {useLocalStorage} from './useLocalStorage'
import { useState, useEffect } from 'react';

export const useDarkMode = (key, initialValue) => {
const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
// const [darkMode, setDarkMode] = useState(false)


// const toggleMode = e => {
//     e.preventDefault();
//     setDarkMode(!darkMode);
// }
// useEffect(() => {
//     setValue(value ? 'dark-mode App' : 'App')
// },[])


return [darkMode, setDarkMode]
}
