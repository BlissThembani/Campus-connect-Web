// src/pages/BookingsPage.js
import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const BookingHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 1.75rem;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
`;

const PageSubtitle = styled.p`
  color: var(--dark-gray);
  font-size: 1rem;
`;

const CalendarContainer = styled.div`
  margin-bottom: 3rem;
`;

const MonthNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const MonthTitle = styled.h2`
  font-size: 1.25rem;
  color: var(--secondary-color);
  margin: 0 2rem;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: var(--dark-gray);
  font-size: 1.25rem;
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
  }
`;

const Calendar = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
`;

const CalendarHeader = styled.thead`
  th {
    padding: 0.75rem;
    font-weight: 500;
    color: var(--dark-gray);
    text-align: center;
  }
`;

const CalendarBody = styled.tbody`
  td {
    text-align: center;
    padding: 0.5rem;
  }
`;

const CalendarDay = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 50%;
  font-size: 0.875rem;
  cursor: pointer;
  color: ${(props) =>
    props.isCurrentMonth ? 'var(--text-color)' : 'var(--medium-gray)'};
  background-color: ${(props) =>
    props.isSelected ? 'var(--primary-color)' : 'transparent'};
  color: ${(props) =>
    props.isSelected
      ? 'var(--white)'
      : props.isCurrentMonth
      ? 'var(--text-color)'
      : 'var(--medium-gray)'};

  &:hover {
    background-color: ${(props) =>
      props.isSelected ? 'var(--primary-color)' : 'rgba(59, 191, 173, 0.1)'};
  }
`;

const CalendarInstructions = styled.div`
  text-align: center;
  color: var(--dark-gray);
  margin-bottom: 3rem;

  p {
    margin-bottom: 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: var(--secondary-color);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const RoomsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const RoomCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: var(--white);
`;

const RoomImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const RoomContent = styled.div`
  padding: 1rem;
`;

const RoomTitle = styled.h3`
  font-size: 1.125rem;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
`;

const RoomDetails = styled.div`
  margin-bottom: 1rem;

  p {
    font-size: 0.875rem;
    color: var(--dark-gray);
    margin-bottom: 0.25rem;
  }
`;

const BookButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: var(--primary-color);
  color: var(--white);
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.875rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(59, 191, 173, 0.8);
  }
`;

const ConfirmationSection = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ConfirmationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.875rem;
  border: 1px solid var(--medium-gray);
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  &::placeholder {
    color: #bbb;
  }
`;

const ConfirmButton = styled.button`
  width: 100%;
  padding: 0.875rem;
  background-color: var(--primary-color);
  color: var(--white);
  border-radius: 4px;
  font-weight: 500;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(59, 191, 173, 0.8);
  }
`;

const BookingsPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Calendar data
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const [displayMonth, setDisplayMonth] = useState(currentMonth);
  const [displayYear, setDisplayYear] = useState(currentYear);

  const daysInMonth = new Date(displayYear, displayMonth + 1, 0).getDate();
  const firstDay = new Date(displayYear, displayMonth, 1).getDay();

  // Sample room data
  const rooms = [
    {
      id: 'a',
      name: 'Room A',
      image: '/assets/images/room-a.jpg',
      capacity: 6,
      features: 'Whiteboard, Wi-Fi',
    },
    {
      id: 'b',
      name: 'Room B',
      image: '/assets/images/room-b.jpg',
      capacity: 4,
      features: 'Projector, Power Outlets',
    },
    {
      id: 'c',
      name: 'Room C',
      image: '/assets/images/room-c.jpg',
      capacity: 10,
      features: 'TV, Conference Table',
    },
  ];

  const handlePrevMonth = () => {
    if (displayMonth === 0) {
      setDisplayMonth(11);
      setDisplayYear(displayYear - 1);
    } else {
      setDisplayMonth(displayMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (displayMonth === 11) {
      setDisplayMonth(0);
      setDisplayYear(displayYear + 1);
    } else {
      setDisplayMonth(displayMonth + 1);
    }
  };

  const handleDateClick = (day) => {
    setSelectedDate(new Date(displayYear, displayMonth, day));
  };

  const handleRoomSelect = (roomId) => {
    setSelectedRoom(roomId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking confirmed:', {
      date: selectedDate,
      room: selectedRoom,
      name,
      email,
    });
    // In a real app, you would send this data to your backend
    alert('Booking confirmed!');
  };

  // Generate calendar data
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Adjust array to start with Monday
  const adjustedDayNames = [...dayNames.slice(1), dayNames[0]];

  // Calculate days for previous month
  const daysFromPrevMonth = firstDay === 0 ? 6 : firstDay - 1;

  // Generate calendar days
  const calendarDays = [];
  let day = 1;

  // Create weeks
  for (let i = 0; i < 6; i++) {
    const week = [];

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < daysFromPrevMonth) {
        // Previous month days
        const prevMonthDays = new Date(displayYear, displayMonth, 0).getDate();
        week.push({
          day: prevMonthDays - daysFromPrevMonth + j + 1,
          isCurrentMonth: false,
          date: new Date(
            displayYear,
            displayMonth - 1,
            prevMonthDays - daysFromPrevMonth + j + 1
          ),
        });
      } else if (day > daysInMonth) {
        // Next month days
        week.push({
          day: day - daysInMonth,
          isCurrentMonth: false,
          date: new Date(displayYear, displayMonth + 1, day - daysInMonth),
        });
        day++;
      } else {
        // Current month days
        week.push({
          day,
          isCurrentMonth: true,
          date: new Date(displayYear, displayMonth, day),
        });
        day++;
      }
    }

    calendarDays.push(week);

    // Stop if we've gone past the end of the month
    if (day > daysInMonth && i < 5) break;
  }

  return (
    <PageContainer>
      <BookingHeader>
        <PageTitle>Booking Calendar</PageTitle>
        <PageSubtitle>Select a date and time to book a study room</PageSubtitle>
      </BookingHeader>

      <CalendarContainer>
        <MonthNavigation>
          <NavButton onClick={handlePrevMonth}>&lt;</NavButton>
          <MonthTitle>
            {monthNames[displayMonth]} {displayYear}
          </MonthTitle>
          <NavButton onClick={handleNextMonth}>&gt;</NavButton>
        </MonthNavigation>

        <Calendar>
          <CalendarHeader>
            <tr>
              {adjustedDayNames.map((day, index) => (
                <th key={index}>{day}</th>
              ))}
            </tr>
          </CalendarHeader>
          <CalendarBody>
            {calendarDays.map((week, weekIndex) => (
              <tr key={weekIndex}>
                {week.map((day, dayIndex) => (
                  <td key={dayIndex}>
                    <CalendarDay
                      isCurrentMonth={day.isCurrentMonth}
                      isSelected={
                        selectedDate &&
                        selectedDate.getDate() === day.day &&
                        selectedDate.getMonth() === day.date.getMonth() &&
                        selectedDate.getFullYear() === day.date.getFullYear()
                      }
                      onClick={() => handleDateClick(day.day)}
                    >
                      {day.day}
                    </CalendarDay>
                  </td>
                ))}
              </tr>
            ))}
          </CalendarBody>
        </Calendar>

        <CalendarInstructions>
          <p>Select available time slots to book your study room.</p>
          <p>Time slots marked in green are available for booking.</p>
          <p>Click on your desired slot and proceed to confirm your booking!</p>
        </CalendarInstructions>
      </CalendarContainer>

      <SectionTitle>Available Rooms</SectionTitle>
      <RoomsGrid>
        {rooms.map((room) => (
          <RoomCard key={room.id}>
            <RoomImage src={room.image} alt={`${room.name} preview`} />
            <RoomContent>
              <RoomTitle>{room.name}</RoomTitle>
              <RoomDetails>
                <p>Capacity: {room.capacity} people</p>
                <p>Features: {room.features}</p>
              </RoomDetails>
              <BookButton onClick={() => handleRoomSelect(room.id)}>
                Book Now
              </BookButton>
            </RoomContent>
          </RoomCard>
        ))}
      </RoomsGrid>

      {selectedDate && selectedRoom && (
        <ConfirmationSection>
          <SectionTitle>Booking Confirmation</SectionTitle>
          <ConfirmationForm onSubmit={handleSubmit}>
            <FormInput
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <FormInput
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <ConfirmButton type="submit">Confirm booking</ConfirmButton>
          </ConfirmationForm>
        </ConfirmationSection>
      )}
    </PageContainer>
  );
};

export default BookingsPage;
