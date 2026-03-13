import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Card } from '../styles/GlobalStyles';
import { Trash2, TrendingDown } from 'lucide-react';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ExpenseItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  transition: transform 0.2s;

  &:hover {
    transform: translateX(4px);
    background: rgba(255, 255, 255, 0.05);
  }
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  padding: 0.75rem;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 0.5rem;
  color: var(--primary);
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.span`
  font-weight: 600;
`;

const ItemCategory = styled.span`
  font-size: 0.75rem;
  color: var(--text-muted);
`;

const ItemAmount = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Price = styled.span`
  font-weight: 700;
  color: #ef4444;
`;

const DeleteBtn = styled.button`
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #ef4444;
  }
`;

const Stats = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const StatCard = styled(Card)`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  const totalExpenses = useMemo(() => {
    return expenses.reduce((acc, curr) => acc + curr.amount, 0).toFixed(2);
  }, [expenses]);

  return (
    <ListContainer>
      <Stats>
        <StatCard>
          <LabelSmall>Total Spent</LabelSmall>
          <Value>${totalExpenses}</Value>
        </StatCard>
        <StatCard>
          <LabelSmall>Transactions</LabelSmall>
          <Value>{expenses.length}</Value>
        </StatCard>
      </Stats>
      
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id}>
          <ItemInfo>
            <IconWrapper>
              <TrendingDown size={20} />
            </IconWrapper>
            <Details>
              <ItemTitle>{expense.title}</ItemTitle>
              <ItemCategory>{expense.category} • {expense.date}</ItemCategory>
            </Details>
          </ItemInfo>
          <ItemAmount>
            <Price>-${expense.amount.toFixed(2)}</Price>
            <DeleteBtn onClick={() => onDeleteExpense(expense.id)}>
              <Trash2 size={18} />
            </DeleteBtn>
          </ItemAmount>
        </ExpenseItem>
      ))}
    </ListContainer>
  );
};

const LabelSmall = styled.span`
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Value = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

export default ExpenseList;
