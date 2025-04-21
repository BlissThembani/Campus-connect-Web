// src/pages/ReportMaintenancePage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Camera } from 'lucide-react';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const PageTitle = styled.h1`
  font-size: 1.75rem;
  color: var(--secondary-color);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const FormContainer = styled.form`
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--secondary-color);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--medium-gray);
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--medium-gray);
  border-radius: 4px;
  font-size: 1rem;
  background-color: var(--white);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--medium-gray);
  border-radius: 4px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const PhotoUploadContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`;

const PhotoUploadButton = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  background-color: var(--light-gray);
  border: 1px dashed var(--dark-gray);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--medium-gray);
  }

  input {
    display: none;
  }

  svg {
    margin-bottom: 0.5rem;
    color: var(--dark-gray);
  }

  span {
    font-size: 0.875rem;
    color: var(--dark-gray);
  }
`;

const PhotoPreview = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`;

const SubmitButton = styled.button`
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

  &:disabled {
    background-color: var(--medium-gray);
    cursor: not-allowed;
  }
`;

const CancelButton = styled.button`
  width: 100%;
  padding: 0.875rem;
  background-color: transparent;
  color: var(--dark-gray);
  border: 1px solid var(--medium-gray);
  border-radius: 4px;
  font-weight: 500;
  font-size: 1rem;
  margin-top: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--light-gray);
  }
`;

const ButtonGroup = styled.div`
  margin-top: 2rem;
`;

const ReportMaintenancePage = () => {
  const [photos, setPhotos] = useState([]);
  const [formData, setFormData] = useState({
    location: '',
    issueType: '',
    description: '',
    priority: 'medium',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    // Limit to 5 photos
    if (photos.length + files.length > 5) {
      alert('You can upload a maximum of 5 photos');
      return;
    }

    const newPhotos = files.map((file) => ({
      id: Date.now() + Math.random().toString(36).substr(2, 9),
      url: URL.createObjectURL(file),
      file,
    }));

    setPhotos((prev) => [...prev, ...newPhotos]);
  };

  const handleRemovePhoto = (id) => {
    setPhotos((prev) => prev.filter((photo) => photo.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData, photos);
    // Reset form or redirect as needed
  };

  return (
    <PageContainer>
      <PageTitle>Report a Maintenance Issue</PageTitle>

      <FormContainer onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="location">Location</Label>
          <Input
            type="text"
            id="location"
            name="location"
            placeholder="Building/Room Number"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="issueType">Issue Type</Label>
          <Select
            id="issueType"
            name="issueType"
            value={formData.issueType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select an issue type</option>
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical</option>
            <option value="hvac">HVAC</option>
            <option value="structural">Structural</option>
            <option value="cleaning">Cleaning</option>
            <option value="other">Other</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Please describe the issue in detail"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="priority">Priority</Label>
          <Select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleInputChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="emergency">Emergency</option>
          </Select>
        </FormGroup>

        <PhotoUploadContainer>
          <Label>Upload Photos (Optional)</Label>
          <PhotoGrid>
            {photos.map((photo) => (
              <PhotoPreview key={photo.id}>
                <img src={photo.url} alt="Issue preview" />
                <button
                  type="button"
                  onClick={() => handleRemovePhoto(photo.id)}
                  aria-label="Remove photo"
                >
                  ✕
                </button>
              </PhotoPreview>
            ))}

            {photos.length < 5 && (
              <PhotoUploadButton>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  multiple
                />
                <Camera size={24} />
                <span>Add Photo</span>
              </PhotoUploadButton>
            )}
          </PhotoGrid>
        </PhotoUploadContainer>

        <ButtonGroup>
          <SubmitButton type="submit">Submit Report</SubmitButton>
          <CancelButton type="button">Cancel</CancelButton>
        </ButtonGroup>
      </FormContainer>
    </PageContainer>
  );
};

export default ReportMaintenancePage;
