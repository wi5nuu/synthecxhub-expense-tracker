import React, { useState, useEffect, useCallback } from 'react';
import { GlobalStyle, AppContainer, Title, Grid } from './styles/GlobalStyles';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { mockApi } from './services/api';
import gsap from 'gsap';

import Layout from './components/Layout';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await mockApi.getExpenses();
      setExpenses(data);
      setLoading(false);
      
      // Animate in
      gsap.from('.animate-in', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    };
    fetchData();
  }, []);

  const handleAddExpense = useCallback(async (newExpense) => {
    const updatedExpenses = [newExpense, ...expenses];
    setExpenses(updatedExpenses);
    await mockApi.saveExpenses(updatedExpenses);
  }, [expenses]);

  const handleDeleteExpense = useCallback(async (id) => {
    const updatedExpenses = expenses.filter(exp => exp.id !== id);
    setExpenses(updatedExpenses);
    await mockApi.saveExpenses(updatedExpenses);
  }, [expenses]);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <AppContainer>
          <Title className="animate-in">Expense Tracker</Title>
          {loading ? (
            <div>Loading transactions...</div>
          ) : (
            <Grid>
              <div className="animate-in">
                <ExpenseForm onAddExpense={handleAddExpense} />
              </div>
              <div className="animate-in">
                <ExpenseList 
                  expenses={expenses} 
                  onDeleteExpense={handleDeleteExpense} 
                />
              </div>
            </Grid>
          )}
        </AppContainer>
      </Layout>
    </>
  );
}

export default App;
