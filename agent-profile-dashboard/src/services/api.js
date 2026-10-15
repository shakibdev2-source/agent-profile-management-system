const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const fetchTargetProfile = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/target`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateTargetProfile = async (data, token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/target`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};