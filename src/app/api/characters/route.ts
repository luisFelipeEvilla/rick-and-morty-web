import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axios.post('http://localhost:3000/graphql', {
      query: `
            query {
                charactersBySpecies(species: "Human", page: 1, limit: 5) {
                  info {
                    count
                    pages
                  }
                  results {
                    id
                    name
                    species
                    status
                    gender
                    image
                    location {
                      name
                    }
                    origin {
                      name
                    }
                  }
                }
            }
        `
    });

    return NextResponse.json(response.data.data.charactersBySpecies);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message });
  }
}