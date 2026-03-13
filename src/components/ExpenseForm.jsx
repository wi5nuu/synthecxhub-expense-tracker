import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Card } from '../styles/GlobalStyles';
import { PlusCircle } from 'lucide-react';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  color: var(--text-muted);
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  padding: 0.75rem;
  color: var(--text);
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: var(--primary);
  }
`;

const Button = styled.button`
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background 0.2s;

  &:hover {
    background: var(--primary-hover);
  }
`;

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  
  const titleRef = useRef(null);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!title || !amount) return;

    onAddExpense({
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      date: new Date().toISOString().split('T')[0]
    });

    setTitle('');
    setAmount('');
    titleRef.current?.focus();
  }, [title, amount, category, onAddExpense]);

  return (
    <Card>
      <TitleSmall>Add New Expense</TitleSmall>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Title</Label>
          <Input 
            ref={titleRef}
            type="text" 
            placeholder="e.g. Coffee" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Amount ($)</Label>
          <Input 
            type="number" 
            placeholder="0.00" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Category</Label>
          <Input 
            as="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </Input>
        </FormGroup>
        <Button type="submit">
          <PlusCircle size={18} />
          Add Expense
        </Button>
      </Form>
    </Card>
  );
};

const TitleSmall = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

export default ExpenseForm;
