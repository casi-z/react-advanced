export const API_VERSION = 0
export const API_BASE_URL = process.env.NODE_ENV === 'production' ? `/api` : `http://localhost:5000/api/v${API_VERSION}/`


