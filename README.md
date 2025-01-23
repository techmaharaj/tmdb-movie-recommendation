# TMDb Movie Concierge Tool

A **Node.js-based movie concierge tool** that uses **GPTScript** and the **TMDb API** to recommend the top-rated movies based on a search query. This tool is designed to be integrated into platforms like **Otto8**, enabling AI agents to provide automated movie suggestions.

---

## Features

- Analyze the sentiment based on user input to determine search query (e.g., genre, keyword, or actor).
- Fetch movies from TMDb based on a search query.
- Return the top 10 highly-rated movies as a response.
- Use Node.js to implement the logic designed for integration with GPTScript.

---

## Project Structure

```yaml
movie-concierge-tool
├── src
│   ├── movieTool.js       # Main tool file to process agent input
│   ├── movieService.js    # Service file for TMDb API interactions
├── .env                   # Environment variables (TMDb API key)
├── movieConcierge.gpt     # GPTScript definition for sentiment analysis and prompt definition
├── package.json           # Dependencies and scripts
├── tool.gpt               # Root GPTScript definition
```

---

## Prerequisites

Before you begin, make sure you have the following:

1. **Node.js** installed on your system ([Download Node.js](https://nodejs.org)).
2. A **TMDb API Key**: Sign up at [TMDb](https://www.themoviedb.org/) to generate an API key.
3. **GPTScript** installed: Follow the [installation guide](https://docs.gptscript.ai/).
4. **OpenAI API Key**: Required for GPTScript-powered features.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-concierge.git
   cd movie-concierge
   ```

2. Install project dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the project root and add your `TMDb API` Key:

    ```bash
    TMDB_API_KEY=your_tmdb_api_key
    ```

---

## Run the tool

   ```bash
   gptscript movieConcierge.gpt
   ```

---

## Explore Further

- Learn More About GPTScript: [GPTScript Documentation](https://docs.gptscript.ai/)
- Visit Acorn’s Blog: [Acorn Blog](https://www.acorn.io/resources/blog/)
- Join the Community: Share your tools on [Discord](https://discord.com/invite/9sSf4UyAMC) or [GitHub forums](https://github.com/gptscript-ai/gptscript)!