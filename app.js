
// List of fruits to search through
const fruits = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Blackberry', 'Blueberry', 'Cherry', 
                'Coconut', 'Cranberry', 'Dragon Fruit', 'Durian', 'Fig', 'Grape', 'Grapefruit', 
                'Guava', 'Jackfruit', 'Kiwi', 'Lemon', 'Lime', 'Mango', 'Melon', 'Nectarine', 
                'Orange', 'Papaya', 'Passion Fruit', 'Peach', 'Pear', 'Pineapple', 'Plum', 
                'Pomegranate', 'Raspberry', 'Strawberry', 'Tangerine', 'Watermelon'];

const searchInput = document.getElementById('fruit-search');
const suggestionsList = document.getElementById('suggestions');

// Event listener for typing in the search bar
searchInput.addEventListener('input', search);

// Filter fruits based on user input
function search() {
    const inputValue = searchInput.value.toLowerCase();
    const results = fruits.filter(fruit => 
        fruit.toLowerCase().includes(inputValue)
    );
    
    displayResults(results);
}

// Display filtered results in the dropdown
function displayResults(results) {
    suggestionsList.innerHTML = ''; // Clear previous suggestions
    
    if (results.length === 0 || searchInput.value === '') {
        suggestionsList.style.display = 'none';
        return;
    }
    
    results.forEach(fruit => {
        const li = document.createElement('li');
        li.textContent = fruit;
        
        // Event listeners for hovering and clicking
        li.addEventListener('mouseover', () => highlightSuggestion(li));
        li.addEventListener('click', () => useSuggestion(fruit));
        
        suggestionsList.appendChild(li);
    });
    
    suggestionsList.style.display = 'block';
}

// Highlight suggestion on hover
function highlightSuggestion(element) {
    // Remove highlight from all suggestions
    const allSuggestions = suggestionsList.querySelectorAll('li');
    allSuggestions.forEach(item => {
        item.classList.remove('highlighted');
    });
    
    // Add highlight to hovered suggestion
    element.classList.add('highlighted');
}

// Populate search bar with clicked suggestion
function useSuggestion(fruit) {
    searchInput.value = fruit;
    suggestionsList.style.display = 'none';
}

// Hide suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (e.target !== searchInput && e.target !== suggestionsList) {
        suggestionsList.style.display = 'none';
    }
});
    