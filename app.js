// TODO: Add commas to the screen
// TODO: Top inputs to 10 digits
// TODO: Make reset button work
// TODO: Make delete button work
// TODO: Make number insertion work
// TODO: Make operations work
// TODO: Make equal button work

(() => {
  function calculatorFunc() {
    const numberScreen = document.querySelector('#numberScreen');
    const delBtn = document.querySelector('#button--del');

    delBtn.addEventListener('click', () => {
      removeFromScreen();
    });

    function createNumberButtonsArrayWithEventListeners() {
      const button0El = document.querySelector('#button--0');
      const button1El = document.querySelector('#button--1');
      const button2El = document.querySelector('#button--2');
      const button3El = document.querySelector('#button--3');
      const button4El = document.querySelector('#button--4');
      const button5El = document.querySelector('#button--5');
      const button6El = document.querySelector('#button--6');
      const button7El = document.querySelector('#button--7');
      const button8El = document.querySelector('#button--8');
      const button9El = document.querySelector('#button--9');

      const buttonsArr = [
        button0El,
        button1El,
        button2El,
        button3El,
        button4El,
        button5El,
        button6El,
        button7El,
        button8El,
        button9El,
      ];

      buttonsArr.forEach((item) => {
        item.addEventListener('click', () => {
          insertToScreen(item.children[0].textContent);
        });
      });
    }

    function insertToScreen(item = 0) {
      if (numberScreen.textContent.length <= 9) {
        if (numberScreen.textContent === '0') {
          numberScreen.textContent = item;
        } else {
          numberScreen.textContent = numberScreen.textContent + item;
        }
        addCommasToScreen();
      }
    }

    function removeFromScreen() {
      let strArr = numberScreen.textContent.split('');

      while (strArr.includes(',')) {
        removesCommas(strArr);
      }

      strArr.pop();

      numberScreen.textContent = strArr.join('');
      addCommasToScreen();
    }

    function removesCommas(strArr) {
      let index;

      for (let i = 0; i < strArr.length; i++) {
        strArr[i] === ',' ? (index = i) : '';
      }
      strArr.splice(index, 1);

      numberScreen.textContent = strArr.join('');
    }

    function addCommasToScreen() {
      window.addEventListener('click', () => {
        const strArr = numberScreen.textContent.split('');

        if (
          numberScreen.textContent.length > 3 &&
          numberScreen.textContent.length < 8
        ) {
          while (strArr.includes(',')) {
            removesCommas(strArr);
          }

          strArr.splice(strArr.length - 3, 0, ',');

          numberScreen.textContent = strArr.join('');
        } else if (numberScreen.textContent.length >= 6) {
          while (strArr.includes(',')) {
            removesCommas(strArr);
          }

          strArr.splice(strArr.length - 3, 0, ',');
          strArr.splice(strArr.length - 7, 0, ',');

          numberScreen.textContent = strArr.join('');
        }
      });
    }

    function render() {
      createNumberButtonsArrayWithEventListeners();
      insertToScreen();
    }

    return {
      render,
    };
  }

  const calculator = calculatorFunc();

  calculator.render();
})();
