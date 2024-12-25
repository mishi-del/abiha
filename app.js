function generateTable() {
    const numberInput = document.getElementById('numberInput').value;
    const tableOutput = document.getElementById('tableOutput');
    tableOutput.innerHTML = ''; // Clear previous output
  
    if (numberInput === '' || isNaN(numberInput)) {
      tableOutput.innerHTML = '<p>Please enter a valid number!</p>';
      return;
    }
  
    const number = parseInt(numberInput);
    let tableHTML = `<h3>Multiplication Table of ${number}</h3>`;
    tableHTML += '<ul>';
  
    for (let i = 1; i <= 10; i++) {
      tableHTML += `<li>${number} x ${i} = ${number * i}</li>`;
    }
  
    tableHTML += '</ul>';
    tableOutput.innerHTML = tableHTML;
  }
  
  function clearTable() {
    document.getElementById('numberInput').value = '';
    document.getElementById('tableOutput').innerHTML = '';
  }
  