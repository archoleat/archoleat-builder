import { html } from '@js/helpers/node-list';

const colorScheme = () => {
  const saveUserTheme = localStorage.getItem('user-theme');

  let userTheme;

  const changeTheme = (saveTheme = false) => {
    const currentTheme = html.classList.contains('light') ? 'light' : 'dark';

    let newTheme;

    currentTheme === 'light' ? (newTheme = 'dark') : (newTheme = 'light');
    html.classList.remove(currentTheme);
    html.classList.add(newTheme);

    if (saveTheme) {
      localStorage.setItem('user-theme', newTheme);
    }
  };

  if (window.matchMedia) {
    userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', () => {
      if (!saveUserTheme) {
        changeTheme();
      }
    });

  const switchThemeButton = document.querySelector('.theme-switch');

  if (switchThemeButton) {
    switchThemeButton.addEventListener('click', () => {
      changeTheme(true);
    });
  }

  const setThemeClass = () => {
    saveUserTheme
      ? html.classList.add(saveUserTheme)
      : html.classList.add(userTheme);
  };

  setThemeClass();
};

export { colorScheme };
