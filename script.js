// Object containing the page content
const pages = {
    home: {
        title: "Tolstoy Tan - Home",
        content: `<h2>Welcome to My Website!</h2>
                  <p>This is a placeholder for your personal content. You can introduce yourself, showcase your projects, or share anything else you'd like.</p>`
    },
    about: {
        title: "Tolstoy Tan - About",
        content: `<h2>My Educational Background</h2>
                  <p>I completed my Master's degree in Civil Engineering...</p>
                  <h2>Projects and Contributions</h2>
                  <p>During my academic career, I have been involved in various projects...</p>`
    },
    portfolio: {
        title: "Tolstoy Tan - Portfolio",
        content: `<h2>Slope Stability MATLAB Program</h2>
                  <p>Developed a MATLAB tool for slope stability analysis...</p>
                  <h2>CPT Data Processing Tools</h2>
                  <p>Created automated tools for efficient data processing...</p>
                  <h2>Automated Data Scraping and Visualization Discord Bot</h2>
                  <p>This project showcases a Discord bot designed to automate data scraping from web applications, analyze the collected data, and visualize the results in real-time. The bot leverages technologies such as Python, Discord.py, Selenium, Pandas, and Matplotlib to provide dynamic insights directly on a Discord server.</p>
                  <ul>
                    <li><strong>Technologies:</strong> Python, Discord.py, Selenium, Pandas, Matplotlib, asyncio</li>
                    <li><strong>Features:</strong> Automated web scraping, asynchronous programming, data analysis & visualization, real-time automation</li>
                    <li><strong>Achievements:</strong> Enhanced community engagement on Discord by providing valuable, real-time data visualizations; demonstrated proficiency in Python for web scraping and data analysis</li>
                  </ul>`
    },
    
    contact: {
        title: "Tolstoy Tan - Contact",
        content: `<p>Email: yongkengabc@gmail.com</p>
                  <p>Phone: (+60) 17-7506121</p>`
    }
};

function loadContent(page) {
    document.getElementById('page-title').innerText = pages[page].title;
    document.getElementById('main-content').innerHTML = pages[page].content;
    document.title = pages[page].title;
}

// load the home page content by default
window.onload = () => loadContent('home');