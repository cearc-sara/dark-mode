import {useLocalStorage} from './useLocalStorage'
import { useState, useEffect } from 'react';

export const useDarkMode = (key, initialValue) => {
const [value, setValue] = useLocalStorage(key, initialValue);
// const [darkMode, setDarkMode] = useState(false)


// const toggleMode = e => {
//     e.preventDefault();
//     setDarkMode(!darkMode);
// }
// useEffect(() => {
//     setValue(value ? 'dark-mode App' : 'App')
// },[])


return [value, setValue]
}
