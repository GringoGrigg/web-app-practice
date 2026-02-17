// Make an array of numbers, then use .map() to return an array containing each of the original numbers + 1.
const numbers = [0, 1, 2, 3, 4, 5, 6, 7];

// Use map() to add 1 to each number
const increment = numbers.map(function(number) {
    return number + 1;
});

// Log to console (for developer viewing)
console.log("Original numbers:", numbers);
console.log("Incremented numbers:", increment);

// DISPLAY ON WEBPAGE - Add this code
document.addEventListener('DOMContentLoaded', function() {
    // Create a container div for results
    const resultDiv = document.createElement('div');
    resultDiv.style.marginTop = '20px';
    resultDiv.style.padding = '15px';
    resultDiv.style.backgroundColor = '#e3f2fd';
    resultDiv.style.borderRadius = '8px';
    resultDiv.style.border = '2px solid #2196f3';
    
    // Create paragraph for original numbers
    const originalPara = document.createElement('p');
    originalPara.innerHTML = '<strong>Original numbers:</strong> [' + numbers.join(', ') + ']';
    originalPara.style.fontSize = '18px';
    
    // Create paragraph for incremented numbers
    const incrementPara = document.createElement('p');
    incrementPara.innerHTML = '<strong>After adding 1 (using .map()):</strong> [' + increment.join(', ') + ']';
    incrementPara.style.fontSize = '18px';
    incrementPara.style.color = '#1976d2';
    incrementPara.style.fontWeight = 'bold';
    
    // Create paragraph showing the array length
    const lengthPara = document.createElement('p');
    lengthPara.innerHTML = '<strong>Array length:</strong> ' + increment.length + ' items';
    lengthPara.style.fontStyle = 'italic';
    
    // Add all paragraphs to the result div
    resultDiv.appendChild(originalPara);
    resultDiv.appendChild(incrementPara);
    resultDiv.appendChild(lengthPara);
    
    // Add the result div to the body of the page
    document.body.appendChild(resultDiv);
});