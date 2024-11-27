import React, { useState } from 'react';
import Input from '../../commons/Input';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    bio: '',
    dateAndTimezone: { date: '', timezone: '' },
    date: '',
    age: '', // Changed from 'number'
    file: '',
    skills: [],
    favoriteLanguages: [],
    techSkills: null,
    termsAccepted: false,
  });

  const skillsOptions = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'react', label: 'React' },
    { value: 'python', label: 'Python' },
    { value: 'django', label: 'Django' },
  ];

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log('formdata', formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-content center-col-x-y">
      <Input
        label="Username"
        name="username"
        type="text"
        value={formData.username}
        onChange={(e) => handleInputChange('username', e.target.value)}
        placeholder="Enter your username"
        required
      />

      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        placeholder="Enter your email"
        required
      />

      <Input
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={(e) => handleInputChange('password', e.target.value)}
        placeholder="Enter your password"
        required
      />

      <Input
        label="Bio"
        name="bio"
        type="textarea"
        value={formData.bio}
        onChange={(e) => handleInputChange('bio', e.target.value)}
        placeholder="Tell us about yourself"
      />

      <Input
        label="Select Date and Timezone"
        name="dateAndTimezone"
        type="date"
        value={formData.dateAndTimezone}
        onChange={(value) => handleInputChange('dateAndTimezone', value)}
        timezone
        required
      />

      <Input
        label="Select Date"
        name="date"
        type="date"
        value={formData.date}
        onChange={(e) => handleInputChange('date', e.target.value)}
        required
      />

      <Input
        label="Age"
        name="age"
        type="number"
        value={formData.age}
        onChange={(e) => handleInputChange('age', e.target.value)}
        required
      />

      <Input
        label="Select file"
        name="file"
        type="file"
        value={formData.file}
        onChange={(e) => handleInputChange('file', e.target.value)}
        required
      />

      <Input
        label="Skills (Multiselect)"
        name="skills"
        type="multiselect"
        value={formData.skills}
        onChange={(value) => handleInputChange('skills', value)}
        options={skillsOptions}
        placeholder="Select your skills"
      />

      <Input
        label="Favorite Languages (Create Select)"
        name="favoriteLanguages"
        type="createselect"
        value={formData.favoriteLanguages}
        onChange={(value) => handleInputChange('favoriteLanguages', value)}
        options={skillsOptions}
        placeholder="Select or create favorite languages"
      />

      <Input
        label="Tech Skills (Typeahead)"
        name="techSkills"
        type="typeahead"
        value={formData.techSkills}
        onChange={(value) => handleInputChange('techSkills', value)}
        options={skillsOptions}
        placeholder="Select your skills"
      />

      <Input
        label="Accept Terms and Conditions"
        name="termsAccepted"
        type="checkbox"
        value={formData.termsAccepted}
        onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
      />

      <button type="submit" className="submit-button" disabled={!formData.termsAccepted}>
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;