import React, { useState } from 'react';
import { PlusIcon, ThreeDotIcon, EditIcon, DeleteIcon } from '../../icons/svg';

export default function MainLayoutBodySecondSection() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const dummyData = [
    { team: 'Team A', users: 5, owner: 'Alice', status: 'Active' },
    { team: 'Team B', users: 8, owner: 'Bob', status: 'Inactive' },
    { team: 'Team C', users: 12, owner: 'Charlie', status: 'Inactive' },
    { team: 'Team D', users: 3, owner: 'David', status: 'Active' },
    { team: 'Team E', users: 7, owner: 'Eve', status: 'Active' },
    { team: 'Team F', users: 10, owner: 'Frank', status: 'Active' },
    { team: 'Team G', users: 15, owner: 'Grace', status: 'Inactive' },
    { team: 'Team H', users: 6, owner: 'Hank', status: 'Active' },
    { team: 'Team I', users: 20, owner: 'Ivy', status: 'Active' },
    { team: 'Team J', users: 9, owner: 'Jack', status: 'Inactive' },
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleEdit = (team) => {
    console.log(`Edit ${team}`);
    setActiveDropdown(null);
  };

  const handleDelete = (team) => {
    console.log(`Delete ${team}`);
    setActiveDropdown(null);
  };

  return (
    <div className='main-layout-body-section-2'>
      <table>
        <thead>
          <tr>
            <th>Teams</th>
            <th>No. of Users</th>
            <th>Created by</th>
            <th>Status</th>
            <th className='action-block'><PlusIcon /></th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((data, index) => (
            <tr key={index}>
              <td>{data.team}</td>
              <td>{data.users}</td>
              <td>{data.owner}</td>
              <td>{data.status}</td>
              <td className='action-block relative'>
                <div 
                  onClick={() => handleDropdownToggle(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <ThreeDotIcon />
                </div>
                
                {activeDropdown === index && (
                  <div className='dropdown-menu'>
                    <div 
                      onClick={() => handleEdit(data.team)}
                      className='dropdown-item'
                    >
                      <EditIcon /> Edit
                    </div>
                    <div 
                      onClick={() => handleDelete(data.team)}
                      className='dropdown-item delete'
                    >
                      <DeleteIcon /> Delete
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}