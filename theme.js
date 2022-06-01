// DONE: Select checkboxes and only allow for one to be active.
// DONE: Be able to see which checkbox is active.
// TODO: Change the theme of the app depending on the selected checkbox.

(() => {
  const themeSwitcher = () => {
    // NOTE: Have a function that selects all the checkboxes and returns a number that represents what checkbox is selected.
    const checkboxEl1 = document.querySelector('#theme--1');
    const checkboxEl2 = document.querySelector('#theme--2');
    const checkboxEl3 = document.querySelector('#theme--3');
    const checkboxesArray = [checkboxEl1, checkboxEl2, checkboxEl3];

    const selectedTheme = () => {
      if (checkboxEl1.checked) {
        return 0;
      } else if (checkboxEl2.checked) {
        return 1;
      } else {
        return 2;
      }
    };

    const toggleThemes = () => {
      checkboxesArray.forEach((item) =>
        item.addEventListener('change', () => {
          checkboxesArray.forEach((item) => {
            item.checked = false;
            // item.classList.remove('active');
          });

          item.checked = true;

          // item.classList.add('active');

          themeSwitch(selectedTheme());
        })
      );
    };

    const themeSwitch = (theme) => {
      const bodyEl = document.querySelector('#body');
      const navEl = document.querySelector('#nav');
      const sliderEl = document.querySelector('#slider');
      const calculatorScreenEl = document.querySelector('#calculator--screen');
      const calculatorScreenNumbers = calculatorScreenEl.children[0];
      const calculatorButtonsEl = document.querySelector(
        '#calculator--buttons'
      );
      const buttonsArr = [].slice.call(calculatorButtonsEl.children);
      const delBtn = document.querySelector('#button--del');
      const resetBtn = document.querySelector('#button--reset');
      const equalBtn = document.querySelector('#button--equal');

      if (theme === 0) {
        bodyEl.style.backgroundColor = 'rgb(57, 70, 99)';
        navEl.style.color = 'rgb(255, 255, 255)';
        sliderEl.style.background = 'rgb(36, 45, 68)';

        checkboxesArray.forEach((item) => {
          item.checked
            ? (item.style.background = '#d03f2f')
            : (item.style.background = 'rgb(36, 45, 68)');
        });

        calculatorScreenEl.style.background = '#171f33';
        calculatorScreenNumbers.style.color = navEl.style.color;
        calculatorButtonsEl.style.background = '#242d44';

        buttonsArr.forEach((item) => {
          item.style.background = '#eae3dd';
          item.children[0].style.color = '#434a59';
        });

        delBtn.style.background = '#637198';
        delBtn.children[0].style.color = '#fff';
        resetBtn.style.background = delBtn.style.background;
        resetBtn.children[0].style.color = '#fff';
        equalBtn.style.background = '#d03f2f';
        equalBtn.children[0].style.color = '#ffffff';
      } else if (theme === 1) {
        bodyEl.style.backgroundColor = 'rgb(230, 230, 230)';
        navEl.style.color = 'rgb(54, 54, 43)';
        sliderEl.style.background = 'rgb(210, 205, 205)';

        checkboxesArray.forEach((item) => {
          item.checked
            ? (item.style.background = '#c85403')
            : (item.style.background = 'rgb(210, 205, 205)');
        });

        calculatorScreenEl.style.background = '#edeeee';
        calculatorScreenNumbers.style.color = navEl.style.color;
        calculatorButtonsEl.style.background = '#d2cdcd';

        buttonsArr.forEach((item) => {
          item.style.background = '#e4e4e1';
          item.children[0].style.color = '#36362c';
        });

        delBtn.style.background = '#378187';
        delBtn.children[0].style.color = '#fff';
        resetBtn.style.background = delBtn.style.background;
        resetBtn.children[0].style.color = '#fff';
        equalBtn.style.background = '#c85403';
        equalBtn.children[0].style.color = '#ffffff';
      } else {
        bodyEl.style.backgroundColor = 'rgb(23, 6, 42)';
        navEl.style.color = 'rgb(255, 229, 60)';
        sliderEl.style.background = 'rgb(30, 9, 54)';

        checkboxesArray.forEach((item) => {
          item.checked
            ? (item.style.background = '#04ded0')
            : (item.style.background = 'rgb(30, 9, 54)');
        });

        calculatorScreenEl.style.background = '#1e0935';
        calculatorScreenNumbers.style.color = navEl.style.color;
        calculatorButtonsEl.style.background = '#1e0936';

        buttonsArr.forEach((item) => {
          item.style.background = '#331c4d';
          item.children[0].style.color = navEl.style.color;
        });

        delBtn.style.background = '#55077c';
        delBtn.children[0].style.color = '#fff';
        resetBtn.style.background = delBtn.style.background;
        resetBtn.children[0].style.color = '#fff';
        equalBtn.style.background = '#04ded0';
        equalBtn.children[0].style.color = '#1a2327';
      }
    };

    const render = () => {
      toggleThemes();
      themeSwitch(selectedTheme());
    };

    return {
      render,
    };
  };

  const application = themeSwitcher();
  application.render();
})();
