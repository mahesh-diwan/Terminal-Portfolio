var twitter = "https://x.com/mahesh_diwan1";
var linkedin = "https://www.linkedin.com/in/mahesh-diwan/";
var instagram = "https://www.instagram.com/mahesh_diwan1/";
var github = "https://github.com/mahesh-diwan";
var sudo = "https://www.youtube.com/watch?v=I4EWvMFj37g?autoplay=1";
var email = "mailto:diwanmahesh11@gmail.com";
var hashnode = "https://mahesh1215.hashnode.dev/"

let banner = [
  `<div id="banner-section" class="banner">
 Welcome to my portfolio! — Type <span class="command">help</span> for a list of supported commands.
  </div>`,
];

let aboutme = [
"<br>",
`<div id="aboutme-section">`,
`<span class='underline'>Hey, I'm Mahesh! 👋</span>`,
"<br>",
`<li>🚀 I'm a Computer Science undergrad with a growing passion for DevOps and Cloud technologies.</li>`,
`<li>🛠️ Hands-on with tools like Docker, Kubernetes, Jenkins, GitHub Actions, and AWS.</li>`,
`<li>📦 I love building CI/CD pipelines and deploying scalable applications.</li>`,
`<li>💡 Eager to learn, collaborate, and contribute to impactful real-world projects.</li>`,
`<li>📂 Use the <span class="command">projects</span> command to check out what I’ve built!</li>`,
`<li>📫 Contact: <a href="mailto:diwanmahesh11@gmail.com">diwanmahesh11@gmail.com</a></li>`,
"</div>",
"<br>",

];

let social = [
  "<br>",
  'Twitter(X)    : <a href="' + twitter + '" target="_blank">x.com/mahesh_diwan1</a>',
  'LinkedIn      : <a href="' + linkedin + '" target="_blank">linkedin.com/in/mahesh-diwan</a>',
  'Instagram     : <a href="' + instagram + '" target="_blank">instagram.com/mahesh_diwan1</a>',
  'GitHub        : <a href="' + github + '" target="_blank">github.com/mahesh-diwan</a>',
  'Hashnode      : <a href="' + hashnode + '" target="_blank">mahesh1215.hashnode.dev</a>',
  "<br>",
];


let help = [
  `<br><div id="help-section"><pre class="whitespace-pre-wrap">
<span class="command">aboutme</span>
↳ Displays who I am?
<span class="command">social</span>
↳ Lists social networks.
<span class="command">projects</span>
↳ View coding projects.
<span class="command">email</span>
↳ To send me an email.
<span class="command">history</span>
↳ View command history.
<span class="command">help</span>
↳ Displays this help message.
<span class="command">sudo</span>
↳ Try it out for yourself.
<span class="command">snake</span>
↳ Run Snake Game.
<span class="command">clear</span>
↳ Clear the terminal.
</pre></div><br>`,
];
let projects = [
 "<br>",
`<div id="projects-section">`,

`<a href="https://github.com/mahesh-diwan/News3" target="_blank"><span class='underline'>News Website</span></a>`,
`<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
A live news portal using plain JavaScript and NewsData API to fetch and display the latest headlines.
Live:  <a href="https://mahesh-diwan.github.io/News3/" target="_blank">https://mahesh-diwan.github.io/News3/</a>
Built With:
- HTML
- CSS
- JavaScript
- NewsData API
</pre>`,


  `<a href="https://github.com/mahesh-diwan/chat-with-pdf" target="_blank"><span class='underline'>Chat With PDF</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
A tool to interact with PDF files via a chat interface using NLP techniques.
Live: <a href="https://chatwithpdfapp.streamlit.app/" target="_blank">https://chatwithpdfapp.streamlit.app/</a>
Built With:
- Python
- LangChain
- Streamlit
</pre>`,

  `<a href="https://github.com/mahesh-diwan/Devops-Project1" target="_blank"><span class='underline'>CI/CD Pipeline with Jenkins & Docker</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Automated pipeline setup using Jenkins, SonarQube, and Docker deployed on AWS EC2.
Built With:
- Jenkins
- SonarQube
- Docker
- AWS EC2
</pre>`,

  `<a href="https://github.com/mahesh-diwan/Web-Scraper" target="_blank"><span class='underline'>Node.js + Puppeteer Web Scraper</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
A web scraper using Puppeteer with a Python Flask backend served via Docker.
Built With:
- Node.js
- Puppeteer
- Python
- Flask
- Docker
</pre>`,

  `<a href="https://github.com/mahesh-diwan/AWS-Resource-Tracker" target="_blank"><span class='underline'>AWS Resource Tracker</span></a>`,
`<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
A shell script utility to list and manage AWS EC2, S3, and Lambda resources using AWS CLI.
Built With:
- Bash Shell Script
- AWS CLI
</pre>`,


  `<a href="https://github.com/mahesh-diwan/Flask-App" target="_blank"><span class='underline'>Flask App CI/CD on AWS</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
End-to-End CI/CD Pipeline deploying a Flask app using GitHub Actions, Docker, and Nginx on EC2.
Built With:
- Flask
- GitHub Actions
- Docker
- AWS EC2
</pre>`,

  "</div>",
  "<br>",
];