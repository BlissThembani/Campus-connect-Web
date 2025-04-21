// src/components/ui/UserTypeCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid var(--medium-gray);
`;

const CardContent = styled.div`
  padding: 1.5rem;
  background-color: var(--white);
`;

const CardTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  color: var(--secondary-color);
`;

const CardDescription = styled.p`
  margin-bottom: 1.5rem;
  color: var(--dark-gray);
  font-size: 0.875rem;
`;

const SelectButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 0.75rem;
  text-align: center;
  background-color: var(--white);
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  color: var(--primary-color);
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(59, 191, 173, 0.1);
  }
`;

const UserTypeCard = ({ title, description, image, alt, path }) => {
  return (
    <Card>
      <CardImage src={image} alt={alt} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <SelectButton to={path}>Select</SelectButton>
      </CardContent>
    </Card>
  );
};

export default UserTypeCard;
