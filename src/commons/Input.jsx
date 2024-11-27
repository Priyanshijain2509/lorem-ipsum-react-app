import React, { useState } from 'react';
import '../assets/styles/global/input.css';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';

const timezones = [
  { value: 'UTC', label: 'UTC' },
  { value: 'GMT', label: 'GMT' },
  { value: 'PST', label: 'Pacific Standard Time (PST)' },
  { value: 'EST', label: 'Eastern Standard Time (EST)' },
];

const Input = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  className = '',
  options = [],
  rows,
  min,
  max,
  timezone = false,
  isMultiselect = false,
  createSelect = false,
  ...props
}) => {
  const [customOption, setCustomOption] = useState('');

  const handleCustomOptionChange = (e) => {
    setCustomOption(e.target.value);
  };

  const handleCustomOptionAdd = () => {
    if (customOption.trim()) {
      onChange([...value, customOption]);
      setCustomOption('');
    }
  };

  const renderSelectOptions = () => {
    if (timezone) {
      return timezones.map((timezone) => (
        <option key={timezone.value} value={timezone.value}>
          {timezone.label}
        </option>
      ));
    }
    return options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));
  };

  const renderInput = () => {
    if (type === 'date' && timezone) {
      return (
        <div className='timezone'>
          <input
            id={`${name}-date`}
            name={name}
            type="date"
            value={value.date || ''}
            onChange={(e) => onChange({ ...value, date: e.target.value })}
            required={required}
            className={`timezone-input ${className}`}
            {...props}
          />
  
          <select
            id={`${name}-timezone`}
            name={`${name}-timezone`}
            value={value.timezone || ''}
            onChange={(e) => onChange({ ...value, timezone: e.target.value })}
            required={required}
            className={`timezone-select ${className}`}
            {...props}
          >
            <option value="" disabled>Select Timezone</option>
            {timezones.map((tz) => (
              <option key={tz.value} value={tz.value}>
                {tz.label}
              </option>
            ))}
          </select>
        </div>
      );
    }

    switch (type) {
      case 'select':
        return (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className={`select input ${className}`}
            {...props}
          >
            {renderSelectOptions()}
          </select>
        );

      case 'multiselect':
        return (
          <Select
            isMulti
            name={name}
            value={options.filter((option) => value.includes(option.value))}
            onChange={(selectedOptions) =>
              onChange(selectedOptions ? selectedOptions.map((option) => option.value) : [])
            }
            options={options}
            placeholder={placeholder}
            className={`react-select-container ${className}`}
            classNamePrefix="react-select"
            {...props}
          />
        );
    
      case 'createselect':
        return (
          <CreatableSelect
            isMulti={isMultiselect}
            name={name}
            value={
              isMultiselect
                ? options.filter((option) => Array.isArray(value) && value.includes(option.value))
                : options.find((option) => option.value === value) || { label: value, value } // Handle single value
            }
            onChange={(selectedOptions) => {
              if (isMultiselect) {
                const processedOptions = selectedOptions
                  ? selectedOptions.map((option) =>
                      option.__isNew__ ? { value: option.value, label: option.value } : option
                    )
                  : [];
                onChange(processedOptions.map((option) => option.value));
              } else {
                const selectedValue = selectedOptions
                  ? selectedOptions.__isNew__
                    ? { value: selectedOptions.value, label: selectedOptions.value }
                    : selectedOptions
                  : null;
                onChange(selectedValue ? selectedValue.value : null);
              }
            }}
            onCreateOption={(inputValue) => {
              // Add new option dynamically
              const newOption = { label: inputValue, value: inputValue };
              options.push(newOption);
              if (isMultiselect) {
                onChange([...value, inputValue]); // Add new value for multi-select
              } else {
                onChange(inputValue); // Set new value for single select
              }
            }}
            options={options}
            placeholder={placeholder}
            className={`react-select-container ${className}`}
            classNamePrefix="react-select"
            {...props}
          />
        );
      
      case 'typeahead':
        return (
          <Select
            name={name}
            value={options.find((option) => option.value === value) || null} // Match option object with current value
            onChange={(selectedOption) => {
              onChange(selectedOption ? selectedOption.value : null); // Update value in formData
            }}
            options={options}
            placeholder={placeholder}
            className={`react-select-container ${className}`}
            classNamePrefix="react-select"
            {...props}
          />
        );

      case 'radio':
        return options.map(option => (
          <div key={option.value} className="flex">
            <input
              id={option.value}
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              required={required}
              className={`mr-2 ${className}`}
              {...props}
            />
            <label htmlFor={option.value} className="radio-label">
              {option.label}
            </label>
          </div>
        ));

      case 'checkbox':
        return (
          <div className="flex">
            <input
              id={name}
              type="checkbox"
              name={name}
              checked={value}
              onChange={onChange}
              className={`mr-2 ${className}`}
              {...props}
            />
            <label htmlFor={name} className="checkbox-label">
              {label}
            </label>
          </div>
        );

      case 'textarea':
        return (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            rows={rows || 3}
            className={`textarea ${className}`}
            {...props}
          />
        );

      case 'number':
        return (
          <input
            id={name}
            name={name}
            type="number"
            value={value}
            onChange={onChange}
            min={min}
            max={max}
            placeholder={placeholder}
            required={required}
            className={`input ${className}`}
            {...props}
          />
        );

      case 'date':
        return (
          <input
            id={name}
            name={name}
            type="date"
            value={value}
            onChange={onChange}
            required={required}
            className={`input ${className}`}
            {...props}
          />
        );

      case 'datetime-local':
        return (
          <input
            id={name}
            name={name}
            type="datetime-local"
            value={value}
            onChange={onChange}
            required={required}
            className={`input ${className}`}
            {...props}
          />
        );

      case 'file':
        return (
          <input
            id={name}
            name={name}
            type="file"
            value={value}
            onChange={onChange}
            required={required}
            className={`input ${className}`}
            {...props}
          />
        );

      case 'email':
        return (
          <input
            id={name}
            name={name}
            type="email"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={`input ${className}`}
            {...props}
          />
        );

      case 'url':
        return (
          <input
            id={name}
            name={name}
            type="url"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={`input ${className}`}
            {...props}
          />
        );

      case 'password':
        return (
          <input
            id={name}
            name={name}
            type="password"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={`input ${className}`}
            {...props}
          />
        );

      case 'hidden':
        return (
          <input
            id={name}
            name={name}
            type="hidden"
            value={value}
            {...props}
          />
        );

      default:
        return (
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={`input ${className}`}
            {...props}
          />
        );
    }
  };

  return (
    <div className="form-group center-col-x">
      {type !== 'checkbox' && label && (
        <label htmlFor={name} className="label">
          {label}
          {required && <span className="label-required">*</span>}
        </label>
      )}
      {renderInput()}
    </div>
  );
};

export default Input;
