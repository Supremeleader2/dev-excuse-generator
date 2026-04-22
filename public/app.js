const generateBtn = document.getElementById('generateBtn');
const categorySelect = document.getElementById('category');
const resultElement = document.getElementById('result');

generateBtn.addEventListener('click', async () => {
  const category = categorySelect.value;

  const response = await fetch('/api/excuse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ category })
  });

  const data = await response.json();
  resultElement.textContent = data.excuse;
});
