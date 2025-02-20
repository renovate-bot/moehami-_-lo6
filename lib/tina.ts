import { client } from "../tina/__generated__/client"; // Adjust the import path if necessary

export async function getStateSEO(state: string) {
  try {
    const response = await client.queries.stateTexts({ relativePath: `${state}.md` });
    return response.data.stateTexts || null;
  } catch (error) {
    console.error("Error fetching SEO data:", error);
    return null;
  }
}
