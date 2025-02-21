const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"; // Change when deploying!

export async function getCollaterals() {
  const response = await fetch(`${API_BASE_URL}/collaterals`);
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
}
