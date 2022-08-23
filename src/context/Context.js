import React from "react"


export const Context = React.createContext();
  
const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('current-theme');
      if (typeof storedPrefs === 'string') {
        return storedPrefs;
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  };

export const ContextProvider = ({ children, initialTheme, }) => {
    const [theme, setTheme] = React.useState(getInitialTheme);
    
      const checkTheme = (existing) => {
        const root = window.document.documentElement;
        const isDark = existing === 'dark';
    
        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(existing);
    
        localStorage.setItem('current-theme', existing);
      };
    
      if (initialTheme) {
        checkTheme(initialTheme);
      }
    
      React.useEffect(() => {
        checkTheme(theme);
      }, [theme]);
    
    return(
        <Context.Provider
        value={{
                theme,
                setTheme           
            }}
        >
        {children}
        </Context.Provider>
    )

}