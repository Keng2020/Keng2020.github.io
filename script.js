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
        content: `
            <h2>Slope Stability MATLAB Program</h2>
            <p>Developed a MATLAB tool for slope stability analysis...</p>
            <h2>CPT Data Processing Tools</h2>
            <p>Created automated tools for efficient data processing...</p>
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