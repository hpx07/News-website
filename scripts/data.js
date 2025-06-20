/**
 * Data module for the news website
 * Stores and manages all article data
 */

// News Article Data Structure
const newsData = {
    // Array to store all articles
    articles: [{
            id: 1,
            title: "Global Climate Summit Reaches Historic Agreement",
            summary: "World leaders have reached a groundbreaking climate agreement at the latest summit, pledging to reduce carbon emissions by 50% by 2030.",
            content: `<p>In a historic moment for climate action, world leaders from over 190 countries have reached a consensus on aggressive carbon emission reduction targets at the Global Climate Summit.</p>
                     <p>The landmark agreement, which comes after two weeks of intense negotiations, commits nations to cutting carbon emissions by 50% compared to 2010 levels by the year 2030, and achieving net-zero emissions by 2050.</p>
                     <p>"This is a turning point in our collective fight against climate change," said UN Secretary-General Antonio Guterres. "For the first time, we have a truly global commitment that matches the scale of the challenge we face."</p>
                     <p>The agreement includes mechanisms for financial support to developing nations, technology transfer provisions, and a robust monitoring system to ensure accountability.</p>
                     <p>Environmental groups have largely welcomed the agreement, though some activists argue the targets still don't go far enough to prevent global temperature rise beyond 1.5 degrees Celsius.</p>
                     <p>Markets responded positively to the news, with renewable energy stocks seeing significant gains as investors anticipate increased government spending in the sector.</p>
                     <p>Implementation will begin immediately, with countries required to submit detailed action plans within six months.</p>`,
            category: "Politics",
            author: "Jane Smith",
            date: "November 15, 2023",
            imageUrl: "./images/featured/climate-summit.svg",
            isFeatured: true,
            isBreaking: true,
            tags: [
                "climate change",
                "global summit",
                "carbon emissions",
                "environment",
            ],
        },
        {
            id: 2,
            title: "Tech Giant Unveils Revolutionary AI Platform",
            summary: "Leading technology company introduces a groundbreaking artificial intelligence system capable of solving complex scientific problems.",
            content: `<p>In a major technological breakthrough, Silicon Valley giant TechFusion has unveiled what it claims is the most advanced artificial intelligence platform ever created.</p>
                     <p>Named "Nexus," the AI system has demonstrated an unprecedented ability to solve complex scientific problems, potentially accelerating research in fields ranging from medicine to quantum physics.</p>
                     <p>"Nexus represents a quantum leap in artificial intelligence capabilities," said Dr. Lisa Chen, TechFusion's Chief AI Scientist. "It's not just incremental improvement—this is a fundamentally new approach to machine learning."</p>
                     <p>During a demonstration, the system successfully identified potential drug candidates for previously untreatable diseases and proposed novel solutions to long-standing mathematical problems.</p>
                     <p>What sets Nexus apart is its unique neural architecture that mimics human intuition while processing information at vastly greater speeds. The system can analyze scientific literature, run simulations, and propose hypotheses without human guidance.</p>
                     <p>Critics, including some tech ethicists, have raised concerns about proper oversight of such powerful technology. "We need to ensure that appropriate safeguards are in place before deploying systems with this level of capability," said Dr. Marcus Williams of the Technology Ethics Institute.</p>
                     <p>TechFusion has announced plans to make the platform available to research institutions next year, following a period of additional testing and refinement.</p>`,
            category: "Technology",
            author: "Michael Wang",
            date: "November 14, 2023",
            imageUrl: "./images/featured/ai-technology.svg",
            isFeatured: true,
            isBreaking: false,
            tags: ["artificial intelligence", "technology", "innovation", "research"],
        },
        {
            id: 3,
            title: "Stock Markets Hit Record High Amid Economic Recovery",
            summary: "Global stock markets reached unprecedented levels as economic indicators show strong post-pandemic recovery across major economies.",
            content: `<p>Stock markets around the world soared to record highs today as a wave of positive economic data reinforced investor confidence in the post-pandemic recovery.</p>
                     <p>The S&P 500 closed above 5,000 points for the first time in history, while European and Asian markets also posted significant gains. The surge comes after stronger-than-expected GDP growth figures were released for several major economies.</p>
                     <p>"What we're seeing is confirmation that the recovery isn't just underway—it's exceeding expectations," said Maria Gonzalez, chief economist at Global Investment Partners. "Corporate earnings are strong, consumer spending is robust, and supply chain issues are finally easing."</p>
                     <p>Particularly notable was the performance of sectors hit hardest by the pandemic, including travel, hospitality, and retail, which have now rebounded to pre-pandemic levels or beyond.</p>
                     <p>Central banks have signaled they remain committed to supportive monetary policies in the near term, though some economists warn that attention may soon turn to controlling potential inflation.</p>
                     <p>"The challenge now will be managing this growth without overheating the economy," commented Federal Reserve Board member James Wilson. "We're monitoring inflation indicators very closely."</p>
                     <p>Employment figures also showed improvement, with unemployment rates falling across most major economies, though they remain slightly above pre-pandemic levels in many regions.</p>`,
            category: "Business",
            author: "Robert Johnson",
            date: "November 13, 2023",
            imageUrl: "./images/featured/stock-market.svg",
            isFeatured: true,
            isBreaking: false,
            tags: ["economy", "stock market", "financial news", "economic recovery"],
        },
        {
            id: 4,
            title: "Breakthrough Cancer Treatment Shows Promising Results in Clinical Trials",
            summary: "A novel immunotherapy approach has demonstrated remarkable effectiveness against aggressive forms of cancer in early clinical trials.",
            content: `<p>A groundbreaking cancer treatment developed by researchers at Memorial Cancer Institute has shown exceptional promise in early clinical trials, potentially opening a new frontier in the fight against the disease.</p>
                     <p>The treatment, which combines precision immunotherapy with targeted genetic modification, produced complete remission in 78% of patients with advanced forms of previously treatment-resistant lymphoma.</p>
                     <p>"These results far exceed what we typically see with conventional therapies for these aggressive cancers," said Dr. Sarah Rodriguez, lead investigator of the clinical trial. "Patients who had exhausted all other options are now showing no detectable signs of cancer."</p>
                     <p>The approach works by extracting a patient's immune cells and genetically reprogramming them to recognize and attack cancer cells with unprecedented precision, while leaving healthy tissue unharmed.</p>
                     <p>What makes this treatment particularly noteworthy is its effectiveness against solid tumors, which have traditionally been more difficult to target with immunotherapy than blood cancers.</p>
                     <p>The trial included 120 patients with various forms of advanced cancer who had not responded to standard treatments. While the lymphoma group showed the most dramatic results, significant tumor reduction was observed in 65% of patients with other cancer types.</p>
                     <p>The research team is now preparing for expanded clinical trials while working with regulatory authorities to expedite the approval process for patients with limited treatment options.</p>`,
            category: "Health",
            author: "Dr. Emily Chen",
            date: "November 12, 2023",
            imageUrl: "./images/featured/medical-research.svg",
            isFeatured: false,
            isBreaking: true,
            tags: [
                "health",
                "cancer research",
                "medical breakthrough",
                "clinical trials",
            ],
        },
        {
            id: 5,
            title: "Major Film Studio Announces Ambitious New Franchise",
            summary: "Hollywood powerhouse reveals plans for a new cinematic universe based on popular book series with A-list cast attached.",
            content: `<p>Universal Pictures has announced an ambitious plan to develop a new film franchise based on the internationally bestselling fantasy book series "Chronicles of the Ancient Realms."</p>
                     <p>The studio has committed to a five-film saga with a combined budget reported to exceed $1 billion, making it one of the largest initial commitments to a film franchise in Hollywood history.</p>
                     <p>Academy Award-winning director Christopher Nolan will helm the first installment, with acclaimed filmmaker Ava DuVernay signed on for the second film. The star-studded cast includes Daniel Kaluuya, Emma Stone, and Pedro Pascal in leading roles.</p>
                     <p>"This series has captivated readers worldwide with its rich world-building and complex characters," said Jennifer Taylor, head of production at Universal. "We're committed to bringing this epic story to the screen with the scale and artistic integrity it deserves."</p>
                     <p>Author Maria Hernandez, who will serve as executive producer, expressed enthusiasm about the adaptation: "I've turned down film offers for years because I wanted to ensure my vision would be respected. This team has shown incredible understanding of the material."</p>
                     <p>Production on the first film is scheduled to begin in New Zealand next spring, with a targeted release date of November 2025. The studio plans to release subsequent films at 18-month intervals.</p>
                     <p>Industry analysts note that the move represents a significant strategic bet for Universal as studios increasingly focus on established intellectual property with franchise potential.</p>`,
            category: "Entertainment",
            author: "Thomas Anderson",
            date: "November 11, 2023",
            imageUrl: "./images/featured/film-studio.svg",
            isFeatured: false,
            isBreaking: false,
            tags: ["entertainment", "movies", "Hollywood", "film franchise"],
        },
        {
            id: 6,
            title: "Olympic Committee Announces New Sports for 2028 Games",
            summary: "The International Olympic Committee has approved the addition of cricket, flag football, and squash to the 2028 Los Angeles Olympics.",
            content: `<p>In a significant expansion of the Olympic program, the International Olympic Committee (IOC) has officially approved the addition of cricket, flag football, squash, and lacrosse to the 2028 Summer Games in Los Angeles.</p>
                     <p>The decision, announced following the IOC's session in Mumbai, represents one of the largest single expansions of Olympic sports in recent history and reflects an effort to increase the Games' appeal in key markets around the world.</p>
                     <p>"These additions bring globally popular sports into the Olympic movement while honoring the heritage of the host nation," said IOC President Thomas Bach. "This balanced approach will help us connect with new audiences while maintaining the excellence and tradition of the Olympic Games."</p>
                     <p>Cricket's inclusion, particularly in the T20 format, is expected to significantly boost Olympic viewership in South Asia, where the sport enjoys immense popularity. Meanwhile, flag football's addition represents a milestone for American football to gain Olympic representation in a safer, more accessible format.</p>
                     <p>For squash and lacrosse, the announcement ends decades-long campaigns for Olympic inclusion. The World Squash Federation has pursued Olympic status since the 1990s, while lacrosse was last featured as a medal sport in the 1908 Games.</p>
                     <p>The host city committee for LA 2028 welcomed the additions, noting that the new sports will utilize existing venues, aligning with the Games' sustainability goals. "These sports bring excitement without requiring new permanent construction," said Casey Wasserman, LA 2028 chairperson.</p>
                     <p>Athlete qualification processes and tournament structures will be announced next year, giving international federations time to prepare for their Olympic debuts.</p>`,
            category: "Sports",
            author: "James Williams",
            date: "November 10, 2023",
            imageUrl: "./images/featured/olympic-sports.svg",
            isFeatured: false,
            isBreaking: false,
            tags: ["sports", "Olympics", "cricket", "flag football"],
        },
        {
            id: 7,
            title: "Renewable Energy Surpasses Fossil Fuels in European Power Generation",
            summary: "For the first time, renewable sources have generated more electricity than fossil fuels across Europe over a six-month period.",
            content: `<p>In a landmark moment for the energy transition, renewable sources produced more electricity than fossil fuels across the European Union for the first time during a six-month period, according to data released by the European Energy Commission.</p>
                     <p>From April through September 2023, wind, solar, hydroelectric, and biomass power plants generated 40.5% of the EU's electricity, compared to 37.2% from coal, gas, and oil-fired power stations. The remaining 22.3% came from nuclear plants.</p>
                     <p>"This milestone marks a fundamental shift in Europe's energy landscape," said EU Climate Commissioner Elisa Ferreira. "What once seemed like an ambitious goal has now become reality, and the pace of change continues to accelerate."</p>
                     <p>The achievement comes after years of substantial investment in renewable infrastructure, favorable weather conditions, and policy frameworks that have made fossil fuel generation increasingly uneconomical.</p>
                     <p>Solar power showed the most dramatic growth, with output increasing by 27% compared to the same period last year, driven by record installations of both utility-scale and rooftop systems across the continent.</p>
                     <p>Energy analysts note that the trend is likely to continue as the EU pursues its goal of reducing greenhouse gas emissions by at least 55% by 2030. "This is not a one-off milestone but part of a structural transformation," said energy economist Pierre Dubois of the Climate Economics Institute.</p>
                     <p>The shift has also contributed to a decline in wholesale electricity prices in many European markets, though the impact on consumer bills has been more variable due to distribution costs and taxes.</p>`,
            category: "Politics",
            author: "Elena Petrova",
            date: "November 9, 2023",
            imageUrl: "./images/featured/renewable-energy.svg",
            isFeatured: false,
            isBreaking: false,
            tags: [
                "renewable energy",
                "climate change",
                "European Union",
                "sustainability",
            ],
        },
        {
            id: 8,
            title: "Quantum Computing Breakthrough Could Revolutionize Cybersecurity",
            summary: "Scientists have developed a new quantum computing technique that promises unbreakable encryption protocols, addressing long-standing security concerns.",
            content: `<p>Computer scientists at MIT have achieved a significant breakthrough in quantum computing that could transform the field of cybersecurity, potentially making electronic communications genuinely secure from hackers and surveillance.</p>
                     <p>The team, led by Professor Hiroshi Nakamura, has developed what they call "cascading quantum encryption," a technique that uses the unique properties of quantum particles to create encryption keys that are theoretically impossible to break, even with future quantum computers.</p>
                     <p>"This approach solves one of the biggest concerns about quantum computing—that it would render current encryption methods obsolete," explained Professor Nakamura. "Instead, we're harnessing quantum properties to create a new kind of security."</p>
                     <p>Traditional encryption relies on mathematical problems that are difficult for classical computers to solve. However, quantum computers, when fully developed, could potentially crack these systems in minutes rather than the billions of years it would take conventional machines.</p>
                     <p>The new method turns this vulnerability into a strength by creating encryption protocols that rely on quantum entanglement, making it impossible to intercept communications without detection. Even more remarkably, the system becomes more secure as quantum computing power increases.</p>
                     <p>Testing of the new protocol has shown 100% effectiveness against simulated attacks, though the researchers caution that practical implementation for everyday use is still several years away.</p>
                     <p>Cybersecurity experts have responded with enthusiasm to the research, which was published yesterday in the journal Science. "If these results hold up in real-world applications, this could represent the holy grail of secure communications," said cybersecurity analyst Regina Williams.</p>`,
            category: "Technology",
            author: "David Chen",
            date: "November 8, 2023",
            imageUrl: "https://via.placeholder.com/800x450?text=Quantum+Computing",
            isFeatured: false,
            isBreaking: false,
            tags: ["quantum computing", "cybersecurity", "encryption", "technology"],
        },
        {
            id: 9,
            title: "Global Supply Chain Improvements Drive Economic Optimism",
            summary: "After years of disruption, global supply chains are showing signs of normalization, leading to improved economic forecasts and lower inflation expectations.",
            content: `<p>After more than three years of unprecedented disruption, global supply chains are finally showing robust signs of recovery, according to a comprehensive report released by the International Trade Organization.</p>
                     <p>Key indicators including shipping costs, delivery times, and inventory levels have all returned to near pre-pandemic norms, with some metrics showing even greater efficiency than before the global disruptions began.</p>
                     <p>"We're seeing the results of massive investments in logistics infrastructure, diversification of manufacturing bases, and the adoption of advanced planning technologies," said Maria Chen, chief economist at Global Supply Chain Analytics. "Companies have fundamentally rethought how they move goods around the world."</p>
                     <p>The improvements are already having tangible economic impacts. In the latest Consumer Price Index reports from major economies, goods inflation has decreased significantly, while manufacturing output has increased in response to more reliable component availability.</p>
                     <p>The Federal Reserve and other central banks have cited supply chain normalization as a key factor allowing them to consider easing monetary policy, with markets now expecting interest rate cuts earlier than previously anticipated.</p>
                     <p>Particular improvement has been seen in semiconductor availability, which has relieved bottlenecks in automotive and consumer electronics production that had persisted since 2021. Shipping routes from Asia to North America and Europe are now operating with greater capacity and predictability.</p>
                     <p>However, analysts caution that vulnerabilities remain, particularly around geopolitical risks and extreme weather events. "Companies have built more resilient systems, but that resilience will continue to be tested," warned logistics expert James Wilson.</p>`,
            category: "Business",
            author: "Sophia Rodriguez",
            date: "November 7, 2023",
            imageUrl: "https://via.placeholder.com/800x450?text=Supply+Chain",
            isFeatured: false,
            isBreaking: false,
            tags: ["economy", "supply chain", "global trade", "inflation"],
        },
        {
            id: 10,
            title: "Revolutionary Sleep Study Challenges Traditional Recommendations",
            summary: "New research suggests that sleep quality matters significantly more than quantity, with implications for public health guidelines.",
            content: `<p>A groundbreaking 10-year study on sleep patterns has challenged long-held beliefs about optimal sleep duration, suggesting that sleep quality may be substantially more important than the often-cited eight-hour recommendation.</p>
                     <p>The research, conducted by the International Sleep Research Institute across 12 countries with over 200,000 participants, found that measures of sleep quality—including time spent in deep sleep and REM cycles—were better predictors of health outcomes than total sleep duration.</p>
                     <p>"We've been fixated on the 'eight hours' rule for decades, but our data shows this is an oversimplification," said lead researcher Dr. Aisha Patel. "Someone who gets six hours of high-quality, uninterrupted sleep may be better rested than someone who spends nine hours in bed but with fragmented or shallow sleep."</p>
                     <p>The study utilized wearable technology to precisely track sleep stages rather than relying on self-reporting, which has been a limitation of previous sleep research. Participants' health metrics were monitored over the decade-long study period, allowing researchers to identify correlations between sleep patterns and health outcomes.</p>
                     <p>Particularly noteworthy was the finding that consistent sleep and wake times—maintaining a regular circadian rhythm—appeared more beneficial than extending sleep duration on weekends to "catch up" on sleep debt.</p>
                     <p>The research also identified specific health risks associated with poor sleep quality, including heightened inflammation markers and insulin resistance, even in those getting the recommended quantity of sleep.</p>
                     <p>In response to the findings, several national health organizations have announced plans to review their sleep guidelines, potentially shifting focus from quantity-based recommendations to more holistic advice about optimizing sleep quality.</p>`,
            category: "Health",
            author: "Dr. Jonathan Lee",
            date: "November 6, 2023",
            imageUrl: "https://via.placeholder.com/800x450?text=Sleep+Research",
            isFeatured: false,
            isBreaking: false,
            tags: ["health", "sleep", "medical research", "wellness"],
        },
        {
            id: 11,
            title: "Acclaimed Director Announces Retirement After Award-Winning Career",
            summary: "Legendary filmmaker Martin Scorsese has announced his upcoming film will be his last, ending a remarkable 50-year career that transformed cinema.",
            content: `<p>In a stunning announcement that has sent shockwaves through the film industry, legendary director Steven Spielberg has declared his forthcoming science fiction epic "Beyond the Stars" will be his final film, capping a remarkable career that has spanned over five decades and revolutionized modern cinema.</p>
                     <p>The announcement came during Spielberg's acceptance speech at the Venice Film Festival, where he received a lifetime achievement award. "After 50 years of storytelling through film, I've decided that 'Beyond the Stars' will be my final journey as a director," he told the visibly emotional audience.</p>
                     <p>Spielberg, whose filmography includes such classics as "Jaws," "E.T.," "Schindler's List," and "Saving Private Ryan," has earned three Academy Awards for Best Director among his numerous accolades. His films have grossed over $10 billion worldwide, making him one of the most commercially successful directors in history.</p>
                     <p>"His influence on cinema is immeasurable," said Martin Scorsese, a fellow directing legend. "He didn't just make great films; he changed how stories could be told on screen. There's Hollywood before Spielberg and Hollywood after Spielberg."</p>
                     <p>Industry insiders note that Spielberg has been mentoring younger directors in recent years and has expressed interest in focusing on his role as a producer through his production company, Amblin Entertainment.</p>
                     <p>His final film, "Beyond the Stars," is described as a deeply personal science fiction drama about humanity's future among the stars, with themes that echo back to his early works like "Close Encounters of the Third Kind."</p>
                     <p>The film is scheduled for release in December 2024, with Spielberg noting, "I wanted my final statement as a director to look forward with hope, just as I did when I began this incredible journey."</p>`,
            category: "Entertainment",
            author: "Laura Martinez",
            date: "November 5, 2023",
            imageUrl: "https://via.placeholder.com/800x450?text=Film+Director",
            isFeatured: false,
            isBreaking: false,
            tags: ["entertainment", "film", "director", "Hollywood"],
        },
        {
            id: 12,
            title: "Historic Tennis Match Sets New Record for Longest Final",
            summary: "Tennis stars competed in an unprecedented 6-hour championship match that shattered records and captivated fans worldwide.",
            content: `<p>In what many are already calling the greatest tennis match ever played, Carlos Alcaraz and Jannik Sinner battled for an astonishing 6 hours and 37 minutes in the Wimbledon final yesterday, shattering the previous record for the longest championship match in Grand Slam history.</p>
                     <p>The epic contest, which ended well past midnight local time, saw Alcaraz eventually triumph 7-6, 6-7, 5-7, 7-6, 12-10 in a final set that alone lasted nearly two hours. The match featured 73 games, another record for a Grand Slam final in the modern era.</p>
                     <p>"I don't know how I'm still standing," said an exhausted but elated Alcaraz during the trophy ceremony. "This match was more than tennis. It was like chess, like a marathon, like a battle of wills. Jannik is an incredible player and person."</p>
                     <p>Sinner, though devastated by the loss, showed remarkable sportsmanship in defeat. "Of course it hurts now, but it was a privilege to be part of this match. I think we showed what tennis can be at its very best."</p>
                     <p>The quality of play remained extraordinarily high despite the length of the contest, with both players combining for 237 winners against just 92 unforced errors. The match featured 37 break points, with each player converting just four times, demonstrating the dominance of serving throughout.</p>
                     <p>Television ratings indicate it was the most-watched tennis match globally since the 2008 Wimbledon final between Roger Federer and Rafael Nadal, with an estimated 80 million viewers worldwide despite the unusual finishing time.</p>
                     <p>Tennis legends were universal in their praise, with Roger Federer calling it "the finest display of tennis I've ever witnessed" and Serena Williams describing it as "a match that redefined what we thought was possible in our sport."</p>`,
            category: "Sports",
            author: "Mark Johnson",
            date: "November 4, 2023",
            imageUrl: "https://via.placeholder.com/800x450?text=Tennis+Match",
            isFeatured: false,
            isBreaking: false,
            tags: ["sports", "tennis", "Wimbledon", "championship"],
        },
    ],

    // Get all articles
    getAllArticles: function() {
        return this.articles;
    },

    // Get article by ID
    getArticleById: function(id) {
        return this.articles.find((article) => article.id === id);
    },

    // Get articles by category
    getArticlesByCategory: function(category) {
        return this.articles.filter(
            (article) => article.category.toLowerCase() === category.toLowerCase()
        );
    },

    // Get featured articles
    getFeaturedArticles: function() {
        return this.articles.filter((article) => article.isFeatured);
    },

    // Get breaking news
    getBreakingNews: function() {
        return this.articles.filter((article) => article.isBreaking);
    },

    // Get latest articles (sorted by date, most recent first)
    getLatestArticles: function(limit = null) {
        const sortedArticles = [...this.articles].sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });

        if (limit) {
            return sortedArticles.slice(0, limit);
        }

        return sortedArticles;
    },

    // Get popular articles (for this demo, we'll just return some articles)
    getPopularArticles: function(limit = 5) {
        // In a real app, this would be based on view counts or other metrics
        // For demo purposes, just return a subset of articles
        return this.articles.slice(0, limit);
    },

    // Get related articles (articles in the same category, excluding the current one)
    getRelatedArticles: function(articleId, limit = 3) {
        const currentArticle = this.getArticleById(articleId);

        if (!currentArticle) return [];

        return this.articles
            .filter(
                (article) =>
                article.category === currentArticle.category &&
                article.id !== articleId
            )
            .slice(0, limit);
    },

    // Search articles by query (searches in title and content)
    searchArticles: function(query) {
        if (!query || query.trim() === "") return [];

        const searchTerm = query.toLowerCase();

        return this.articles.filter((article) => {
            return (
                article.title.toLowerCase().includes(searchTerm) ||
                article.content.toLowerCase().includes(searchTerm) ||
                article.summary.toLowerCase().includes(searchTerm)
            );
        });
    },

    // Get category counts
    getCategoryCounts: function() {
        const counts = {};

        this.articles.forEach((article) => {
            const category = article.category;
            counts[category] = (counts[category] || 0) + 1;
        });

        return counts;
    },
};