const radiusInput = document.getElementById('radiusInput');
const borderSizeInput = document.getElementById('borderSizeInput');
const paddingInput = document.getElementById('paddingInput')
const borderBox = document.getElementById('borderBox');
const borderBox2 = document.getElementById('borderBox2')

const maxBorder = 50
const maxPadding = 100

radiusInput.addEventListener('input', () => {
    const radiusValue = radiusInput.value + 'px';
    borderBox.style.borderRadius = radiusValue;
  });

borderSizeInput.addEventListener('input', () => {
    const borderSizeValue = borderSizeInput.value + 'px';
    borderBox.style.borderWidth = borderSizeValue;
  });

borderStyleInput.addEventListener('change', () => {
    const borderStyleValue = borderStyleInput.value;
    borderBox.style.borderStyle = borderStyleValue;
  });

paddingInput.addEventListener('input', () => {
    const paddingValue = paddingInput.value + 'px';
    borderBox2.style.padding = paddingValue;
  });

paddingInput.addEventListener('input', () => {
    let value = parseInt(paddingInput.value);
    if (value > maxPadding) {
      paddingInput.value = maxPadding;
    }
  });

paddingInput.addEventListener('keypress', (event) => {
    let value = parseInt(paddingInput.value + event.key);
    if (value > maxPadding) {
      event.preventDefault();
    }
  });
  
borderSizeInput.addEventListener('input', () => {
    let value = parseInt(borderSizeInput.value);
    if (value > maxBorder) {
      borderSizeInput.value = maxBorder;
    }
  });

borderSizeInput.addEventListener('keypress', (event) => {
    let value = parseInt(borderSizeInput.value + event.key);
    if (value > maxBorder) {
      event.preventDefault();
    }
  });

const fontSelect = document.getElementById('fontSelect');
const textElement = document.getElementById('textElement');
const boldCheckbox = document.getElementById('boldCheckbox');

fontSelect.addEventListener('change', () => {
  const selectedFont = fontSelect.value;
  textElement.style.fontFamily = selectedFont;
});

fontSelect.addEventListener('change', applyFontStyles);
boldCheckbox.addEventListener('change', applyFontStyles);

function applyFontStyles() {
  let fontWeight = boldCheckbox.checked ? 'bold' : 'normal';
  textElement.style.fontWeight = fontWeight;
  const selectedFont = fontSelect.value;
  textElement.style.fontFamily = selectedFont;
}