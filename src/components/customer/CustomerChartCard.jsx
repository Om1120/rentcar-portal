import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: var(--website-card-bg, #111827);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 1.8rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding-bottom: 0.75rem;
`;

const Title = styled.h4`
  font-size: 1.15rem;
  font-weight: 700;
  color: inherit;
  margin: 0;
`;

const ChartContainer = styled.div`
  flex-grow: 1;
  min-height: 280px;
  height: 280px;
  width: 100%;
`;

function CustomerChartCard({ title, children }) {
  return (
    <Card>
      <CardHeader>
        <Title>{title}</Title>
      </CardHeader>
      <ChartContainer>
        {children}
      </ChartContainer>
    </Card>
  );
}

export default CustomerChartCard;
