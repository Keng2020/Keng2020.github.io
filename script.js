// Object containing the page content
const pages = {
    home: {
        title: "Home",
        content: `<img src="your-profile-pic.jpg" alt="Tolstoy Tan" class="profile-pic">
                  <h1>Hi, I'm Tolstoy Tan.</h1>
                  <p>I make videos about front-end development to help you become a better developer.</p>
                  <p>I also do freelance development, building everything from simple storefront websites to full-featured webapps.</p>
                  <p>If you’d like to get in touch, you can email me at <a href="mailto:your-email@example.com">your-email@example.com</a>.</p>`
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
        content: `
        <div class="portfolio-container">
        <div class="card">
            <h2>Slope Stability MATLAB Program</h2>
            <p>Developed a MATLAB tool for slope stability analysis...</p>
        </div>

        <div class="card">
            <h2>CPT Data Processing Tools</h2>
            <p>Created automated tools for efficient data processing...</p>
        </div>

        <div class="card">
            <h2>Discord Bot for Automated Data Scraping and Visualization</h2>
            <h3>Technologies Used:</h3>
            <p><strong>Programming Languages:</strong> Python</p>
            <p><strong>Libraries/Frameworks:</strong> Discord.py, Selenium, Pandas, Matplotlib, asyncio</p>
            <p><strong>Tools/Platforms:</strong> Discord, Selenium WebDriver</p>
            <h3>Project Description:</h3>
            <p>Developed an innovative Discord bot designed to automate the process of data scraping from a web application, analyze the collected data, and visualize the results. This bot was integrated into a Discord server to provide real-time data insights to users, demonstrating a practical application of web scraping, asynchronous programming, and data visualization techniques in a real-world project.</p>
            <h3>Key Features:</h3>
            <ul>
                <li>Automated Web Scraping: Utilized Selenium to navigate web pages, perform login operations, and scrape crucial data at predefined intervals.</li>
                <li>Asynchronous Programming: Implemented asyncio for non-blocking data processing and operations, ensuring efficient task scheduling and execution.</li>
                <li>Data Analysis & Visualization: Leveraged Pandas for data manipulation and Matplotlib for generating dynamic plots of the scraped data, which are automatically posted to a Discord channel.</li>
                <li>Real-Time Automation: Designed the bot to run scheduled scraping tasks using Discord.py tasks extension, enabling timely data updates and insights.</li>
            </ul>
            <h3>Achievements:</h3>
            <ul>
                <li>Successfully deployed the bot in a Discord server, enhancing the community's engagement by providing valuable, real-time data visualizations.</li>
                <li>Demonstrated proficiency in using Python for web scraping, asynchronous programming, and data analysis & visualization.</li>
                <li>Applied best practices in software development, including modular programming, to ensure code maintainability and scalability.</li>
            </ul>
        </div>
        </div>
            `
    },
    
    contact: {
        title: "Tolstoy Tan - Contact",
        content: `<p>Email: yongkengabc@gmail.com</p>
                  <p>Phone: (+60) 17-7506121</p>`
    }
};

function loadContent(page) {
    const content = pages[page].content;
    document.getElementById('main-content').innerHTML = content;
    document.title = 'Tolstoy Tan - ' + pages[page].title;
}

// Load the 'home' content by default when the window loads
window.onload = () => loadContent('home');