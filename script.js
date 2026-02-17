
        
        
        console.log("JavaScript is running!");
        
        // Arrays for Akan names
        const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        // Get form and add submit event
        const form = document.getElementById('akanForm');
        
        if (form) {
            console.log("Form found!");
            
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                console.log("Form submitted!");
                
                // Get values
                const day = document.getElementById('day').value;
                const month = document.getElementById('month').value;
                const year = document.getElementById('year').value;
                const maleChecked = document.getElementById('male').checked;
                const femaleChecked = document.getElementById('female').checked;
                
                console.log("Values:", {day, month, year, maleChecked, femaleChecked});
                
                // Validate
                if (!day || !month || !year) {
                    showError("Please fill in all fields!");
                    return;
                }
                
                if (!maleChecked && !femaleChecked) {
                    showError("Please select your gender!");
                    return;
                }
                
                // Convert to numbers
                const dayNum = parseInt(day);
                const monthNum = parseInt(month);
                const yearNum = parseInt(year);
                
                // Validate ranges
                if (dayNum < 1 || dayNum > 31) {
                    showError("Day must be between 1 and 31!");
                    return;
                }
                
                if (monthNum < 1 || monthNum > 12) {
                    showError("Month must be between 1 and 12!");
                    return;
                }
                
                if (yearNum < 1900 || yearNum > 2024) {
                    showError("Year must be between 1900 and 2024!");
                    return;
                }
                
                // Calculate day of week
                const date = new Date(yearNum, monthNum - 1, dayNum);
                const dayIndex = date.getDay();
                
                console.log("Day index:", dayIndex, "Day name:", days[dayIndex]);
                
                // Get Akan name
                let akanName = "";
                if (maleChecked) {
                    akanName = maleNames[dayIndex];
                } else {
                    akanName = femaleNames[dayIndex];
                }
                
                console.log("Akan name:", akanName);
                
                // Display result
                displayResult(akanName, days[dayIndex], dayNum, monthNum, yearNum);
            });
        } else {
            console.error("Form not found!");
        }
        
        // Reset button
        const resetBtn = document.getElementById('resetBtn');
        if (resetBtn) {
            resetBtn.addEventListener('click', function() {
                document.getElementById('resultBox').classList.remove('show');
                document.getElementById('errorMessage').classList.remove('show');
            });
        }
        
        // Function to show error
        function showError(message) {
            const errorDiv = document.getElementById('errorMessage');
            errorDiv.textContent = message;
            errorDiv.classList.add('show');
            document.getElementById('resultBox').classList.remove('show');
            console.log("Error:", message);
        }
        
        // Function to display result
        function displayResult(name, dayName, day, month, year) {
            const resultBox = document.getElementById('resultBox');
            const nameElement = document.getElementById('akanName');
            const infoElement = document.getElementById('birthdayInfo');
            const errorDiv = document.getElementById('errorMessage');
            
            // Hide error
            errorDiv.classList.remove('show');
            
            // Set values
            nameElement.textContent = name;
            infoElement.textContent = `Born on ${dayName}, ${day}/${month}/${year}`;
            
            // Show result
            resultBox.classList.add('show');
            
            console.log("Result displayed!");
        }
        
        // Test function
        function testElements() {
            console.log("Testing elements:");
            const elements = ['akanForm', 'day', 'month', 'year', 'male', 'female', 'resultBox', 'akanName', 'birthdayInfo'];
            elements.forEach(id => {
                const el = document.getElementById(id);
                console.log(`${id}:`, el ? '✅ Found' : '❌ Not found');
            });
        }
        
        // Run test after 1 second
        setTimeout(testElements, 1000);
        
