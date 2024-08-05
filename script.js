// JSON array of persons
const persons = [
    {
        "firstname": "John",
        "lastname": "Doe",
        "dob": "1990-01-01"
    },
    {
        "firstname": "Jane",
        "lastname": "Smith",
        "dob": "1992-05-15"
    },
    {
        "firstname": "Alice",
        "lastname": "Johnson",
        "dob": "1988-08-24"
    }
];

// Function to display persons information in a table
function displayPersonsInfo(persons) {
    const tableBody = document.querySelector('#personTable tbody');
    persons.forEach(person => {
        const row = document.createElement('tr');
        
        const firstnameCell = document.createElement('td');
        firstnameCell.textContent = person.firstname;
        row.appendChild(firstnameCell);
        
        const lastnameCell = document.createElement('td');
        lastnameCell.textContent = person.lastname;
        row.appendChild(lastnameCell);
        
        const dobCell = document.createElement('td');
        dobCell.textContent = person.dob;
        row.appendChild(dobCell);
        
        tableBody.appendChild(row);
    });
}

// Call the function to display persons information
displayPersonsInfo(persons);
