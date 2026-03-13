const STORAGE_KEY = 'expense_tracker_data';

const initialData = [
  { id: 1, title: 'Coffee', amount: 5, category: 'Food', date: '2024-03-01' },
  { id: 2, title: 'Internet', amount: 50, category: 'Utilities', date: '2024-03-05' },
  { id: 3, title: 'Gym', amount: 30, category: 'Health', date: '2024-03-10' },
];

export const mockApi = {
  getExpenses: async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : initialData;
  },
  saveExpenses: async (expenses) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
    return { success: true };
  }
};
