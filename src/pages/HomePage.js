// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UserTypeCard from '../components/ui/UserTypeCard';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

const AppPreview = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const AppImage = styled.img`
  width: 160px;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AppTagline = styled.p`
  color: var(--dark-gray);
  font-size: 1rem;
`;

const SelectionSection = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
  color: var(--secondary-color);
`;

const UserTypeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HomePage = () => {
  const userTypes = [
    {
      id: 'student',
      title: 'Student',
      description:
        'Designed for students to access academic content and resources.',
      image: '/assets/images/stStudying.png',
      alt: 'A student studying at a desk',
      path: '/student-dashboard',
    },
    {
      id: 'lecturer',
      title: 'Lecturer',
      description:
        'Optimized for lecturers to manage courses and evaluate students.',
      image: '/assets/images/lecture.jpg',
      alt: 'A lecturer teaching online',
      path: '/lecturer-dashboard',
    },
    {
      id: 'admin',
      title: 'Admin',
      description:
        'Tailored for admins to oversee and manage institutional operations.',
      image: '/assets/images/admin.png',
      alt: 'An administrator working at a desk',
      path: '/admin-dashboard',
    },
  ];

  return (
    <HomeContainer>
      <AppPreview>
        <AppImage
          src="/assets/images/app-preview.jpg"
          alt="Campus Connect mobile app preview"
        />
        <AppTagline>Your campus resources in one place</AppTagline>
      </AppPreview>

      <SelectionSection>
        <SectionTitle>Select User Type</SectionTitle>

        <UserTypeGrid>
          {userTypes.map((userType) => (
            <UserTypeCard
              key={userType.id}
              title={userType.title}
              description={userType.description}
              image={userType.image}
              alt={userType.alt}
              path={userType.path}
            />
          ))}
        </UserTypeGrid>
      </SelectionSection>
    </HomeContainer>
  );
};

export default HomePage;
