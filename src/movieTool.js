import { getTopRatedMovies } from './movieService.js';
import 'dotenv/config'; // For reading .env variables

if (process.argv.length < 3) {
  console.error('Usage: node movieTool.js <command> [genre]');
  process.exit(1);
}

const cmd = process.argv[2];
const genre = process.argv[3];

try {
  switch (cmd) {
    case 'recommend-movie':
      console.log('Command-line arguments:', process.argv);
      console.log(`Fetching top-rated movies for genre: ${genre}`);
      const result = await getTopRatedMovies(genre);
      console.log(JSON.stringify(result)); // Log result for agent
      break;

    default:
      console.error(`Unknown command: ${cmd}`);
      process.exit(1);
  }
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
