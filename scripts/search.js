/**
 * Search functionality for the news website
 * Provides search capabilities and displays results
 */

// This file contains search-specific functions to keep the code modular
// Main search functionality is triggered from main.js

/**
 * Perform search when search button is clicked or Enter key is pressed
 * (This function is called from event listeners in main.js)
 */
function performSearchFromInput() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    
    const query = searchInput.value.trim();
    if (query) {
        performSearch(query);
    }
}

/**
 * Search articles in the data and display results
 * @param {string} query - The search query
 */
function performSearch(query) {
    // Get search results from the data module
    const searchResults = newsData.searchArticles(query);
    
    // Get DOM elements
    const searchResultsContainer = document.getElementById('search-results');
    const searchResultsList = document.getElementById('search-results-list');
    
    if (!searchResultsContainer || !searchResultsList) return;
    
    // Clear previous results
    searchResultsList.innerHTML = '';
    
    // If no results found
    if (searchResults.length === 0) {
        searchResultsList.innerHTML = `
            <div class="no-results">
                <i data-feather="search"></i>
                <p>No results found for "${query}"</p>
                <p class="no-results-suggestion">Try different keywords or check spelling</p>
            </div>
        `;
        
        // Initialize feather icons for the search icon
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    } else {
        // Display search result count
        const resultCountEl = document.createElement('div');
        resultCountEl.className = 'search-result-count';
        resultCountEl.innerHTML = `<p>Found ${searchResults.length} result${searchResults.length > 1 ? 's' : ''} for "${query}"</p>`;
        searchResultsList.appendChild(resultCountEl);
        
        // Display each search result
        searchResults.forEach(article => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            
            // Determine the correct path for article links
            let articlePath = '';
            if (window.location.pathname.includes('/pages/')) {
                // Already in the pages directory
                articlePath = 'article.html';
            } else {
                // In the root directory
                articlePath = 'pages/article.html';
            }
            
            resultItem.innerHTML = `
                <img class="search-result-image" src="${article.imageUrl}" alt="${article.title}">
                <div class="search-result-content">
                    <h4><a href="${articlePath}?id=${article.id}">${article.title}</a></h4>
                    <p>${article.summary}</p>
                    <div class="search-result-meta">
                        <span class="article-category">${article.category}</span> | 
                        <span class="article-date">${article.date}</span>
                    </div>
                </div>
            `;
            searchResultsList.appendChild(resultItem);
        });
    }
    
    // Show search results container
    searchResultsContainer.classList.add('active');
    
    // Add event listener to close search when clicking outside
    document.addEventListener('click', closeSearchOnClickOutside);
}

/**
 * Close search results when clicking outside the search container
 */
function closeSearchOnClickOutside(event) {
    const searchResultsContainer = document.getElementById('search-results');
    const searchBox = document.querySelector('.search-bar');
    
    if (!searchResultsContainer || !searchBox) return;
    
    // If click is outside search results and search box
    if (!searchResultsContainer.contains(event.target) && !searchBox.contains(event.target)) {
        searchResultsContainer.classList.remove('active');
        // Remove event listener when search is closed
        document.removeEventListener('click', closeSearchOnClickOutside);
    }
}

/**
 * Close search results
 */
function closeSearch() {
    const searchResultsContainer = document.getElementById('search-results');
    if (searchResultsContainer) {
        searchResultsContainer.classList.remove('active');
    }
}

/**
 * Highlight search terms in search results
 * @param {string} text - Text to highlight in
 * @param {string} term - Term to highlight
 * @returns {string} Text with highlighted term
 */
function highlightSearchTerm(text, term) {
    if (!term || term.trim() === '') return text;
    
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}
