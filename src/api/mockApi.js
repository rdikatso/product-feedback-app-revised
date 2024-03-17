import data from '../data.json';

// Simulated delay function to mimic API latency
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Mock API functions
export async function fetchCurrentUser() {
  await delay(1000);
  return data.currentUser;
}

export async function fetchProductRequests() {
  await delay(1000);
  return data.productRequests;
}