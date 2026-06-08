# ⚡ Pure Research Blog

A minimal, custom Static Site Generator (SSG) designed for publishing technical research logs, computer science notes, and project logs. Built with raw Node.js, Markdown parsing, and stylized using Pico CSS with sleek, developer-centric dark aesthetics.

---

## ✨ Features

- **Markdown compilation**: Write posts in pure Markdown (`.md`) and automatically compile them into clean HTML.
- **Premium dark mode UI**: Leverages [Pico CSS](https://picocss.com/) configured with custom CSS variables (monochromatic tones, glassmorphism card surfaces, and glowing accent highlights).
- **Micro-interactions**: Subtle hover and translate transitions on cards to provide a polished, tactile feel.
- **Auto-generated index**: The build system dynamically maps posts to a curated list on the homepage.
- **Developer-friendly typography**: Uses clean font pairings of *Inter* and *JetBrains Mono/Fira Code* for technical content and code snippets.

---

## 📁 Repo Structure

```text
├── dist/                  # The compiled static website (served files)
├── src/
│   ├── assets/            # Static assets (images, graphics)
│   ├── posts/             # Markdown source files for blog posts
│   └── template.html      # Global layout template and CSS styles
├── build.js               # Node.js compiler/build engine script
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.0.0 or higher recommended)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/bhumindeshpande8-spec/Technical-Blog.git
   cd Technical-Blog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Writing a Post

1. Navigate to the `src/posts/` directory.
2. Create a new markdown file (e.g., `my-new-research.md`).
3. Write your content in Markdown format. The build system will automatically convert the file name (replacing dashes with spaces and capitalizing words) into the post's title.

### Building the Blog

Compile the Markdown source posts into the final `/dist` distribution folder:

```bash
npm run build
```

This will:
- Clear the existing `/dist` directory.
- Copy your static assets from `src/assets/` to `dist/assets/`.
- Parse every `.md` post inside `src/posts/` to HTML.
- Inject the parsed HTML content into `src/template.html`.
- Output each page and update the home index (`index.html`) in the `/dist` directory.

---

## 🛠️ Technology Stack

- **Builder**: Node.js `fs` & `path` APIs
- **Markdown Engine**: [marked](https://github.com/markedjs/marked)
- **Styling Framework**: [Pico CSS](https://picocss.com/) (Version 2)
