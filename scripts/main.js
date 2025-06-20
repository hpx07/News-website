/**
 * Main JavaScript file for the news website
 * Handles DOM manipulation, event listeners, and general functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website functionality
    initializeSite();
    
    // Add event listeners
    setupEventListeners();
});

/**
 * Initialize the site functionality and populate content
 */
function initializeSite() {
    // Determine which page we're on and load appropriate content
    const currentPath = window.location.pathname;
    
    if (currentPath.endsWith('index.html') || currentPath === '/' || currentPath === '') {
        // Homepage
        loadHomepage();
    } else if (currentPath.includes('/article.html')) {
        // Article page
        loadArticlePage();
    } else if (currentPath.includes('/about.html')) {
        // About page - static content, no data loading needed
    } else if (currentPath.includes('/contact.html')) {
        // Contact page - static content, no data loading needed
    } else if (currentPath.includes('/politics.html')) {
        // Politics category page
        loadCategoryPage('Politics');
    } else if (currentPath.includes('/business.html')) {
        // Business category page
        loadCategoryPage('Business');
    } else if (currentPath.includes('/technology.html')) {
        // Technology category page
        loadCategoryPage('Technology');
    } else if (currentPath.includes('/health.html')) {
        // Health category page
        loadCategoryPage('Health');
    } else if (currentPath.includes('/entertainment.html')) {
        // Entertainment category page
        loadCategoryPage('Entertainment');
    } else if (currentPath.includes('/sports.html')) {
        // Sports category page
        loadCategoryPage('Sports');
    }
}

/**
 * Set up event listeners for interactive elements
 */
function setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            const navLinks = document.getElementById('nav-links');
            navLinks.classList.toggle('active');
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            alert(`Thank you for subscribing with ${emailInput.value}!`);
            emailInput.value = '';
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Search functionality
    const searchBtn = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const closeSearchBtn = document.getElementById('close-search');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                performSearch(query);
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    performSearch(query);
                }
            }
        });
    }
    
    if (closeSearchBtn) {
        closeSearchBtn.addEventListener('click', function() {
            document.getElementById('search-results').classList.remove('active');
        });
    }
}

/**
 * Load the homepage content
 */
function loadHomepage() {
    // Load breaking news ticker
    loadBreakingNews();
    
    // Load featured articles
    loadFeaturedArticles();
    
    // Load latest articles
    loadLatestArticles();
    
    // Load popular articles for sidebar
    loadPopularArticles();
    
    // Update category counts in sidebar
    updateCategoryCounts();
}

/**
 * Load breaking news ticker
 */
function loadBreakingNews() {
    const breakingNewsContainer = document.getElementById('breaking-news-container');
    if (!breakingNewsContainer) return;
    
    const breakingNews = newsData.getBreakingNews();
    
    let breakingNewsHtml = '';
    breakingNews.forEach(article => {
        breakingNewsHtml += `
            <div class="breaking-news-item">
                <a href="pages/article.html?id=${article.id}">${article.title}</a>
            </div>
        `;
    });
    
    breakingNewsContainer.innerHTML = breakingNewsHtml;
}

/**
 * Load featured articles
 */
function loadFeaturedArticles() {
    const featuredContainer = document.getElementById('featured-news-container');
    if (!featuredContainer) return;
    
    const featuredArticles = newsData.getFeaturedArticles();
    
    let featuredHtml = '';
    featuredArticles.forEach(article => {
        featuredHtml += `
            <article class="featured-article">
                <a href="pages/article.html?id=${article.id}">
                    <img src="${article.imageUrl}" alt="${article.title}">
                </a>
                <div class="featured-article-content">
                    <span class="article-category">${article.category}</span>
                    <h3><a href="pages/article.html?id=${article.id}">${article.title}</a></h3>
                    <div class="article-meta">
                        <span class="article-author">${article.author}</span> | 
                        <span class="article-date">${article.date}</span>
                    </div>
                    <p>${article.summary}</p>
                    <a href="pages/article.html?id=${article.id}" class="read-more">Read More</a>
                </div>
            </article>
        `;
    });
    
    featuredContainer.innerHTML = featuredHtml;
}

/**
 * Load latest articles
 */
function loadLatestArticles() {
    const latestContainer = document.getElementById('latest-news-container');
    if (!latestContainer) return;
    
    const latestArticles = newsData.getLatestArticles(6);
    
    let latestHtml = '';
    latestArticles.forEach(article => {
        latestHtml += `
            <article class="news-card">
                <a href="pages/article.html?id=${article.id}">
                    <img src="${article.imageUrl}" alt="${article.title}">
                </a>
                <div class="news-card-content">
                    <span class="article-category">${article.category}</span>
                    <h3><a href="pages/article.html?id=${article.id}">${article.title}</a></h3>
                    <div class="article-meta">
                        <span class="article-date">${article.date}</span>
                    </div>
                    <p>${article.summary}</p>
                    <a href="pages/article.html?id=${article.id}" class="read-more">Read More</a>
                </div>
            </article>
        `;
    });
    
    latestContainer.innerHTML = latestHtml;
}

/**
 * Load popular articles for sidebar
 */
function loadPopularArticles() {
    const popularContainer = document.getElementById('popular-news-container');
    if (!popularContainer) return;
    
    const popularArticles = newsData.getPopularArticles(5);
    
    let popularHtml = '';
    popularArticles.forEach(article => {
        popularHtml += `
            <li>
                <a href="pages/article.html?id=${article.id}">
                    <img class="popular-image" src="${article.imageUrl}" alt="${article.title}">
                    <span class="popular-title">${article.title}</span>
                </a>
            </li>
        `;
    });
    
    popularContainer.innerHTML = popularHtml;
}

/**
 * Update category counts in sidebar
 */
function updateCategoryCounts() {
    const categoriesSection = document.querySelector('.categories ul');
    if (!categoriesSection) return;
    
    const categoryCounts = newsData.getCategoryCounts();
    
    const categoryItems = categoriesSection.querySelectorAll('li');
    categoryItems.forEach(item => {
        const link = item.querySelector('a');
        const categoryName = link.textContent;
        const count = categoryCounts[categoryName] || 0;
        
        link.innerHTML = `${categoryName} <span class="category-count">(${count})</span>`;
    });
}

/**
 * Load a specific category page
 */
function loadCategoryPage(category) {
    const articleContainer = document.getElementById('category-articles-container');
    if (!articleContainer) return;
    
    // Update the page title
    const categoryTitle = document.getElementById('category-title');
    if (categoryTitle) {
        categoryTitle.textContent = category;
    }
    
    // Get articles for this category
    const articles = newsData.getArticlesByCategory(category);
    
    if (articles.length === 0) {
        articleContainer.innerHTML = '<p class="no-articles">No articles found in this category.</p>';
        return;
    }
    
    let articlesHtml = '';
    articles.forEach(article => {
        articlesHtml += `
            <article class="news-card">
                <a href="article.html?id=${article.id}">
                    <img src="${article.imageUrl}" alt="${article.title}">
                </a>
                <div class="news-card-content">
                    <h3><a href="article.html?id=${article.id}">${article.title}</a></h3>
                    <div class="article-meta">
                        <span class="article-author">${article.author}</span> | 
                        <span class="article-date">${article.date}</span>
                    </div>
                    <p>${article.summary}</p>
                    <a href="article.html?id=${article.id}" class="read-more">Read More</a>
                </div>
            </article>
        `;
    });
    
    articleContainer.innerHTML = articlesHtml;
    
    // Also load popular articles for sidebar
    loadPopularArticlesForCategory(category);
}

/**
 * Load popular articles specifically for a category page
 */
function loadPopularArticlesForCategory(category) {
    const popularContainer = document.getElementById('popular-news-container');
    if (!popularContainer) return;
    
    // Get articles for this category
    const allCategoryArticles = newsData.getArticlesByCategory(category);
    
    // Just take the first 5 for popular (in a real app, would be based on view counts)
    const popularArticles = allCategoryArticles.slice(0, 5);
    
    let popularHtml = '';
    popularArticles.forEach(article => {
        popularHtml += `
            <li>
                <a href="article.html?id=${article.id}">
                    <img class="popular-image" src="${article.imageUrl}" alt="${article.title}">
                    <span class="popular-title">${article.title}</span>
                </a>
            </li>
        `;
    });
    
    popularContainer.innerHTML = popularHtml;
}

/**
 * Load specific article page
 */
function loadArticlePage() {
    // Get article ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('id'));
    
    if (!articleId) {
        // No article ID provided, show error
        const articleContainer = document.querySelector('main');
        if (articleContainer) {
            articleContainer.innerHTML = '<div class="error-message">Article not found. <a href="../index.html">Return to homepage</a></div>';
        }
        return;
    }
    
    const article = newsData.getArticleById(articleId);
    
    if (!article) {
        // Article with this ID not found, show error
        const articleContainer = document.querySelector('main');
        if (articleContainer) {
            articleContainer.innerHTML = '<div class="error-message">Article not found. <a href="../index.html">Return to homepage</a></div>';
        }
        return;
    }
    
    // Update page title
    document.title = `${article.title} | GlobalNews`;
    
    // Set article content
    const articleTitle = document.getElementById('article-title');
    const articleMeta = document.getElementById('article-meta');
    const articleImage = document.getElementById('article-image');
    const articleContent = document.getElementById('article-content');
    const articleTags = document.getElementById('article-tags');
    
    if (articleTitle) articleTitle.textContent = article.title;
    
    if (articleMeta) {
        articleMeta.innerHTML = `
            <span class="article-author">${article.author}</span> | 
            <span class="article-date">${article.date}</span> | 
            <span class="article-category-label">${article.category}</span>
        `;
    }
    
    if (articleImage) {
        articleImage.src = article.imageUrl;
        articleImage.alt = article.title;
    }
    
    if (articleContent) {
        articleContent.innerHTML = article.content;
    }
    
    if (articleTags) {
        let tagsHtml = '';
        article.tags.forEach(tag => {
            tagsHtml += `<span class="article-tag">#${tag}</span>`;
        });
        articleTags.innerHTML = tagsHtml;
    }
    
    // Load related articles
    loadRelatedArticles(articleId);
}

/**
 * Load related articles for the article page
 */
function loadRelatedArticles(articleId) {
    const relatedContainer = document.getElementById('related-articles-container');
    if (!relatedContainer) return;
    
    const relatedArticles = newsData.getRelatedArticles(articleId, 3);
    
    if (relatedArticles.length === 0) {
        relatedContainer.innerHTML = '<p>No related articles found.</p>';
        return;
    }
    
    let relatedHtml = '';
    relatedArticles.forEach(article => {
        relatedHtml += `
            <article class="news-card">
                <a href="article.html?id=${article.id}">
                    <img src="${article.imageUrl}" alt="${article.title}">
                </a>
                <div class="news-card-content">
                    <h3><a href="article.html?id=${article.id}">${article.title}</a></h3>
                    <div class="article-meta">
                        <span class="article-date">${article.date}</span>
                    </div>
                    <p>${article.summary}</p>
                    <a href="article.html?id=${article.id}" class="read-more">Read More</a>
                </div>
            </article>
        `;
    });
    
    relatedContainer.innerHTML = relatedHtml;
}

/**
 * Perform search and display results
 */
function performSearch(query) {
    const searchResults = newsData.searchArticles(query);
    const searchResultsContainer = document.getElementById('search-results');
    const searchResultsList = document.getElementById('search-results-list');
    
    if (!searchResultsContainer || !searchResultsList) return;
    
    // Clear previous results
    searchResultsList.innerHTML = '';
    
    if (searchResults.length === 0) {
        searchResultsList.innerHTML = `<p>No results found for "${query}".</p>`;
    } else {
        searchResults.forEach(article => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `
                <img class="search-result-image" src="${article.imageUrl}" alt="${article.title}">
                <div class="search-result-content">
                    <h4><a href="pages/article.html?id=${article.id}">${article.title}</a></h4>
                    <p>${article.summary}</p>
                    <span class="article-category">${article.category}</span> | 
                    <span class="article-date">${article.date}</span>
                </div>
            `;
            searchResultsList.appendChild(resultItem);
        });
    }
    
    // Show search results
    searchResultsContainer.classList.add('active');
}
