const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const template = fs.readFileSync('./src/template.html', 'utf-8');

// Reset and create the dist directory
if (fs.existsSync('./dist')) {
    fs.rmSync('./dist', { recursive: true, force: true });
}
fs.mkdirSync('./dist');

// Copy assets folder if it exists
if (fs.existsSync('./src/assets')) {
    fs.cpSync('./src/assets', './dist/assets', { recursive: true });
}

const files = fs.readdirSync('./src/posts').filter(file => file.endsWith('.md'));
let indexList = '<ul class="post-list">';

files.forEach(file => {
    const markdown = fs.readFileSync(`./src/posts/${file}`, 'utf-8');
    const htmlContent = marked.parse(markdown);
    const finalHtml = template.replace('{{CONTENT}}', htmlContent);
    const fileName = file.replace('.md', '.html');
    
    fs.writeFileSync(`./dist/${fileName}`, finalHtml);
    
    // Format the title for the homepage list (removes dashes, capitalizes)
    const cleanTitle = file.replace('.md', '').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    indexList += `<li><article class="post-card"><h2><a href="${fileName}">${cleanTitle}</a></h2></article></li>`;
});

indexList += '</ul>';

// Generate Homepage
const indexHtml = template.replace('{{CONTENT}}', `
    <section class="hero">
        <p class="eyebrow">Currently Building</p>
        <div class="featured-card">
            <h2>Email Triage Environment</h2>
            <p>A reinforcement learning playground for automated inbox management and software agents.</p>
        </div>
    </section>
    <p class="eyebrow" style="margin-top: 3rem;">Latest Research & Notes</p>
    ${indexList}
`);

fs.writeFileSync('./dist/index.html', indexHtml);
console.log('⚡ Blog successfully built in the /dist folder!');