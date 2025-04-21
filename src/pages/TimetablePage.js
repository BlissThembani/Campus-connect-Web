// src/pages/TimetablePage.js
import React from 'react';
import styled from 'styled-components';

// Hero Section
const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 400px;
  margin-bottom: 3rem;
  padding: 2rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/assets/images/classroom.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;
  color: var(--white);
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const ViewButton = styled.button`
  background-color: var(--primary-color);
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(59, 191, 173, 0.8);
  }
`;

// Course Schedule Section
const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 4rem auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: var(--secondary-color);
  margin-bottom: 2rem;
  text-align: center;
`;

const CourseTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: var(--light-gray);
  padding: 1rem;
  font-weight: 500;
  color: var(--secondary-color);
  border-bottom: 1px solid var(--medium-gray);
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 1rem;
  border-bottom: 1px solid var(--medium-gray);
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

const CourseCode = styled.div`
  color: ${(props) => props.color || 'var(--primary-color)'};
  font-weight: 500;
`;

// Upcoming Events Section
const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const EventCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: var(--white);
`;

const EventImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const EventContent = styled.div`
  padding: 1rem;
`;

const EventTitle = styled.h3`
  font-size: 1.125rem;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
`;

const EventDate = styled.p`
  font-size: 0.875rem;
  color: var(--dark-gray);
  margin-bottom: 0.75rem;
`;

const EventDescription = styled.p`
  font-size: 0.875rem;
  color: var(--text-color);
`;

const TimetablePage = () => {
  // Sample course data
  const courses = [
    {
      code: 'EDUC 211',
      time: '09 - 11AM',
      location: 'Room 212',
      instructor: 'John Davis',
      color: '#E91E63',
    },
    {
      code: 'EDUC 211',
      time: '11AM - 01PM',
      location: 'Room 411',
      instructor: 'Alice Anderson',
      color: '#E91E63',
    },
    {
      code: 'HIST 201',
      time: '02 - 05PM',
      location: 'Room 512',
      instructor: 'James King',
      color: '#00BCD4',
    },
    {
      code: 'CHEM 101',
      time: '05 - 08PM',
      location: 'Room 108',
      instructor: 'William Johnson',
      color: '#FF9800',
    },
    {
      code: 'MATH 101',
      time: '08 - 10AM',
      location: 'Room 310',
      instructor: 'Sarah Gardner',
      color: '#8BC34A',
    },
  ];

  // Sample events data
  const events = [
    {
      id: 1,
      title: 'Energy Seminar',
      date: 'Sep 25, 2023',
      description: 'Join the seminar on renewable energy trends.',
      image: '/assets/images/energy-seminar.jpg',
    },
    {
      id: 2,
      title: 'AI Workshop',
      date: 'Oct 10, 2023',
      description: 'Interactive workshop on AI in education.',
      image: '/assets/images/ai-workshop.jpg',
    },
    {
      id: 3,
      title: 'Learning Panel',
      date: 'Oct 20, 2023',
      description: 'Panel discussion on the future of online learning.',
      image: '/assets/images/learning-panel.jpg',
    },
  ];

  return (
    <div>
      <HeroSection>
        <HeroTitle>Your Class Schedule</HeroTitle>
        <HeroSubtitle>
          Stay organized and on top of your academic journey.
        </HeroSubtitle>
        <ViewButton>View Schedule</ViewButton>
      </HeroSection>

      <SectionContainer>
        <SectionTitle>Course Schedule</SectionTitle>
        <CourseTable>
          <TableRow>
            <CourseCode>Course</CourseCode>
            <CourseCode>Time</CourseCode>
            <CourseCode>Location</CourseCode>
            <CourseCode>Faculty Name</CourseCode>
          </TableRow>

          {courses.map((course, index) => (
            <TableRow key={index}>
              <CourseCode color={course.color}>{course.code}</CourseCode>
              <div>{course.time}</div>
              <div>{course.location}</div>
              <div>{course.instructor}</div>
            </TableRow>
          ))}
        </CourseTable>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Upcoming Events</SectionTitle>
        <EventsGrid>
          {events.map((event) => (
            <EventCard key={event.id}>
              <EventImage src={event.image} alt={event.title} />
              <EventContent>
                <EventTitle>{event.title}</EventTitle>
                <EventDate>{event.date}</EventDate>
                <EventDescription>{event.description}</EventDescription>
              </EventContent>
            </EventCard>
          ))}
        </EventsGrid>
      </SectionContainer>
    </div>
  );
};

export default TimetablePage;
