import React, { useState } from 'react';
import { 
  PlusIcon, 
  ThreeDotIcon, 
  EditIcon, 
  DeleteIcon, 
  InviteIcon,
  RightIcon
} from '../../icons/svg';

// Static list of roles
const ROLE_OPTIONS = [
  { id: 'Administrator', label: 'Administrator', description: 'Full system access' },
  { id: 'Manager', label: 'Manager', description: 'Team management rights' },
  { id: 'Editor', label: 'Editor', description: 'Content modification access' },
  { id: 'User', label: 'User', description: 'Read-only access' },
];

// Static list of teams
const ALL_TEAMS = [
  { id: 1, name: 'Marketing Team' },
  { id: 2, name: 'Sales Team' },
  { id: 3, name: 'Engineering Team' },
  { id: 4, name: 'Customer Support Team' },
  { id: 5, name: 'Product Management Team' },
  { id: 6, name: 'HR Team' },
  { id: 7, name: 'Finance Team' }
];

export default function MainLayoutBodyThirdSection() {
  const [users, setUsers] = useState([
    { 
      id: 1, 
      name: 'John Doe', 
      teams: 2, 
      role: 'Manager', 
      status: 'Active',
      teamMemberships: [1, 2]
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      teams: 5, 
      role: 'User', 
      status: 'Inactive',
      teamMemberships: [3, 4, 5]
    },
    { 
      id: 3, 
      name: 'Sara Johnson', 
      teams: 7, 
      role: 'Administrator', 
      status: 'Active',
      teamMemberships: [1, 2, 3, 4, 5, 6, 7]
    },
    { 
      id: 4, 
      name: 'James Lee', 
      teams: 3, 
      role: 'User', 
      status: 'Active',
      teamMemberships: [2, 3, 4]
    },
    { 
      id: 5, 
      name: 'Emily Clark', 
      teams: 1, 
      role: 'User', 
      status: 'Inactive',
      teamMemberships: [5]
    },
  ]);

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [modalEditVisible, setModalEditVisible] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editModal, setEditModal] = useState(false);
  const [inviteModal, setInviteModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [inviteSelectedUser, setInviteSelectedUser] = useState(null);
  const [selectedTeams, setSelectedTeams] = useState([]);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleEdit = (team) => {
    console.log(`Edit ${team}`);
    setModalEditVisible(!modalEditVisible);
  };

  const handleInvite = (user) => {
    setInviteSelectedUser(user);
    setInviteModal(true);
    setSelectedTeams([]);
  };

  const handleDelete = (team) => {
    console.log(`Delete ${team}`);
    setActiveDropdown(null);
  };

  const handleEditRole = (user) => {
    setSelectedUser(user);
    setEditModal(true);
    setSelectedRole(user.role);
  };

  const handleRoleChange = (roleId) => {
    setSelectedRole(roleId);
  };

  const saveUserRole = () => {
    const updatedUsers = users.map(user => 
      user.id === selectedUser.id 
        ? { ...user, role: selectedRole } 
        : user
    );
    setActiveDropdown(false);
    setUsers(updatedUsers);
    setEditModal(false);
  };

  const renderUserAvatar = (name) => {
    return name.charAt(0).toUpperCase();
  };

  const getCurrentTeams = (user) => {
    if (!user.inviteSelectedUser.teamMemberships || !Array.isArray(user.inviteSelectedUser.teamMemberships)) {
      console.log('no')
      return []; // Return an empty array if teamMemberships is undefined or not an array
    }
    console.log('yes')
    return ALL_TEAMS.filter(team => user.inviteSelectedUser.teamMemberships.includes(team.id));
  };
  
  const getAvailableTeams = (user) => {
    console.log('team', user, user.inviteSelectedUser.teamMemberships)
    if (!user.inviteSelectedUser.teamMemberships || !Array.isArray(user.inviteSelectedUser.teamMemberships)) {
      return []; // Return an empty array if teamMemberships is undefined or not an array
    }
    return ALL_TEAMS.filter(team => !user.inviteSelectedUser.teamMemberships.includes(team.id));
  };
  

  const toggleTeamSelection = (team) => {
    setSelectedTeams(prevSelected => 
      prevSelected.some(t => t.id === team.id)
        ? prevSelected.filter(t => t.id !== team.id)
        : [...prevSelected, team]
    );
  };

  const sendInvite = () => {
    // Actual invite logic would be implemented here
    const updatedUsers = users.map(user => {
      if (user.name === inviteSelectedUser.name) {
        return {
          ...user,
          teamMemberships: [
            ...user.teamMemberships, 
            ...selectedTeams.map(team => team.id)
          ],
          teams: user.teamMemberships.length + selectedTeams.length
        };
      }
      return user;
    });

    setUsers(updatedUsers);
    console.log('Inviting user to teams:', selectedTeams);
    setInviteModal(false);
    setSelectedTeams([]);
  };


  return (
    <div className="main-layout-body-section-3">
      <table>
        <thead>
          <tr>
            <th>USERS</th>
            <th>PRESENT IN TEAMS</th>
            <th>USER ROLE</th>
            <th>STATUS</th>
            <th className='action-block'><PlusIcon /></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                <div className='center-row-y'>
                  <div className="user-avatar">
                    {renderUserAvatar(user.name)}
                  </div>
                  <div>
                    <div>{user.name}</div>
                  </div>
                </div>
              </td>
              <td>{user.teams}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
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
                      onClick={() => handleEditRole(user)} // pass the id for user.
                      className='dropdown-item'
                    >
                      <EditIcon /> Edit Role                
                    </div>
                    <div 
                      onClick={() => handleInvite(user)}
                      className='dropdown-item'
                    >
                      <InviteIcon /> Invite
                    </div>
                    <div 
                      onClick={() => handleDelete(user.name)}
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

      {editModal && (
        <div className="edit-role-modal">
          <div className="edit-role-modal-content">
            <h3>Edit User Role</h3>
            <div>
              {ROLE_OPTIONS.map((role) => (
                <div 
                  key={role.id}
                  className={`role-option ${selectedRole === role.id ? 'selected' : ''}`}
                  onClick={() => handleRoleChange(role.id)}
                >
                  <div>
                    <div>{role.label}</div>
                    <div style={{fontSize: '0.8em', color: '#6c757d'}}>{role.description}</div>
                  </div>
                  {selectedRole === role.id && (
                    <RightIcon />
                  )}
                </div>
              ))}
            </div>
            <div className="modal-actions">
              <button 
                className="cancel-btn"
                onClick={() => setEditModal(false)}
              >
                Cancel
              </button>
              <button 
                className="save-btn"
                onClick={saveUserRole}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {inviteModal && (
        <div className="invite-modal">
          <div className="invite-modal-content">
            <div className="invite-modal-header">
              <h2>Invite User to Teams</h2>
              <button 
                className="invite-close-btn"
                onClick={() => {
                  setInviteModal(false);
                  setSelectedTeams([]);
                }}
              >
                &times;
              </button>
            </div>

            <div className="invite-user-info">
              
              <div className="invite-user-avatar">
                {inviteSelectedUser.name.charAt(0).toUpperCase()}
              </div>
              <div className="invite-user-details">
                <h3>{inviteSelectedUser.name}</h3>
                <p>Select teams to invite this user</p>
              </div>
            </div>

            <div className="teams-section">
              <div className="current-teams">
                <h4>Current Teams</h4>
                <div className="team-list">
                  {getCurrentTeams({inviteSelectedUser}).map(team => (
                    <div key={team.id} className="team-badge">
                      {team.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="available-teams">
                <h4>Available Teams</h4>
                <div className="team-list">
                  {getAvailableTeams({inviteSelectedUser}).map(team => (
                    <div 
                      key={team.id} 
                      className="team-badge-available "
                      onClick={() => toggleTeamSelection(team)}
                    >
                      {team.name}
                      {selectedTeams.some(t => t.id === team.id) && ' ✓'}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="invite-modal-actions">
              <button 
                className="invite-action-btn invite-cancel-btn"
                onClick={() => {
                  setInviteModal(false);
                  setSelectedTeams([]);
                }}
              >
                Cancel
              </button>
              <button 
                className="invite-action-btn invite-send-btn"
                disabled={selectedTeams.length === 0}
                onClick={sendInvite}
              >
                Send Invite
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
