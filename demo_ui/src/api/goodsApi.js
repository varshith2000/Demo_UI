// Example API functions for goods (replace with real API calls)
export async function getGoods() {
  // Fetch from backend
  // return fetch('/api/goods').then(res => res.json());
  return ["Good1", "Good2", "Good3"];
}

export async function addGood(name) {
  // return fetch('/api/goods', { method: 'POST', body: JSON.stringify({ name }) });
  return name;
}
