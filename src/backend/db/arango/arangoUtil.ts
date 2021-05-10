import { Database, aql } from 'arangojs';

const db = new Database({
  url: "http://localhost:8529",
  databaseName: "test",
  auth: {username: "root",password: "test"}
});
// const pokemons = db.collection("test");

// async function main() {
//     try {
//       const pokemons = await db.query(aql`
//         FOR pokemon IN ${Pokemons}
//         FILTER pokemon.type == "fire"
//         RETURN pokemon
//       `);
//       console.log("My pokemons, let me show you them:");
//       for await (const pokemon of pokemons) {
//         console.log(pokemon.name);
//       }
//     } catch (err) {
//       console.error(err.message);
//     }
//   }
  
export default db;