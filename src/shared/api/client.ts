const API_BASE_URL = "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/";

export const apiClient = {
  get: async <T>(url: string): Promise<T> => {
    const response = await fetch(`${API_BASE_URL}${url}`);
    if (!response.ok) throw new Error(`HTTP ошибка: ${response.status}`);
    return await response.json();
  },
};
