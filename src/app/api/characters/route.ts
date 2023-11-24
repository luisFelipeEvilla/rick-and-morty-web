import { API_BASE_URL } from "@/config";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const page = req.nextUrl.searchParams.get('page') || 1;
  const name = req.nextUrl.searchParams.get('name') || '';

  try {
    const response = await axios.post(API_BASE_URL, {
      query: `
            query {
                charactersBySpecies(species: "Human", page: ${page}, limit: 5, name: "${name}") {
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