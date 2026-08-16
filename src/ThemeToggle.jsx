import React, { useCallback, useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const STORAGE_KEY = 'theme';

// What the page renders when the visitor has expressed no preference. Kept in
// sync with the @media (prefers-color-scheme) rule in Profile.scss — if the
// two disagree, the icon shows the opposite of what is on screen.
function systemTheme() {
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function storedTheme() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    // Safari in private mode throws on localStorage access.
    return null;
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => storedTheme() || systemTheme());

  // Reflect the theme onto <html>, but do NOT persist here: writing on mount
  // would store a preference the visitor never expressed, which pins them to
  // whatever their OS said on first visit and silently disables the
  // system-change listener below. Persisting belongs in the click handler.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Follow the OS while the visitor has made no explicit choice. Once they
  // click the toggle a value is stored, and this stops applying.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = () => {
      if (!storedTheme()) setTheme(systemTheme());
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const toggle = useCallback(() => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* preference simply won't survive a reload */
      }
      return next;
    });
  }, []);

  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
}
