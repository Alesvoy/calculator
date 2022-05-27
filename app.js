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
      if (numberScreen.textContent === '0') {
        numberScreen.textContent = item;
      } else {
        numberScreen.textContent = numberScreen.textContent + item;
      }
    }

    function addCommasToScreen() {
      window.addEventListener('click', () => {
        // TODO: Add commas to screen
        // if(numberScreen.textContent.length = 4 && numberScreen.textContent.length < 7) {
        // }
      });
    }

    function render() {
      createNumberButtonsArrayWithEventListeners();
      addCommasToScreen();
    }

    function init() {
      render();
      insertToScreen();
    }

    return {
      init,
    };
  }

  const calculator = calculatorFunc();

  calculator.init();
})();
