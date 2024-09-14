// Get the current date
const currentDate = new Date();

// Function to generate the calendar
function generateCalendar(month, year) {
    const calendarDiv = document.getElementById('calendar');
    calendarDiv.innerHTML = ''; // Clear the calendar

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    // Create the table
    const table = document.createElement('table');

    // Create the header row for days of the week
    const headerRow = document.createElement('tr');
    for (let day of daysOfWeek) {
        const th = document.createElement('th');
        th.innerText = day;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    // Get the first day of the month
    const firstDay = new Date(year, month).getDay();
    
    // Get the number of days in the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    let date = 1;

    // Create 6 rows (at most 6 weeks in a month)
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');

        // Create 7 columns for each day of the week
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');
            if (i === 0 && j < firstDay) {
                // Empty cells for days before the start of the month
                cell.innerHTML = '';
            } else if (date > daysInMonth) {
                // Stop adding days when we've filled the month
                break;
            } else {
                // Add the current date
                cell.innerHTML = date;
                date++;
            }
            row.appendChild(cell);
        }

        table.appendChild(row);

        if (date > daysInMonth) {
            break; // Break out if we've finished the month
        }
    }

    calendarDiv.appendChild(table);
}

// Generate the calendar for the current month
generateCalendar(currentDate.getMonth(), currentDate.getFullYear());
