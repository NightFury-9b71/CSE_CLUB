import React, { useState } from 'react';

const ClubMembersRoleDashboard = () => {
  // Mock data for club members
  const [members, setMembers] = useState([
    { id: 1, name: "Emma Johnson", role: "President", email: "emma.j@example.com", joinDate: "2023-06-15", status: "active", avatar: "/api/placeholder/40/40" },
    { id: 2, name: "Michael Chen", role: "Vice President", email: "michael.c@example.com", joinDate: "2023-07-02", status: "active", avatar: "/api/placeholder/40/40" },
    { id: 3, name: "Sophia Rodriguez", role: "Treasurer", email: "sophia.r@example.com", joinDate: "2023-08-10", status: "active", avatar: "/api/placeholder/40/40" },
    { id: 4, name: "James Williams", role: "Secretary", email: "james.w@example.com", joinDate: "2023-09-05", status: "inactive", avatar: "/api/placeholder/40/40" },
    { id: 5, name: "Olivia Brown", role: "Event Coordinator", email: "olivia.b@example.com", joinDate: "2023-10-20", status: "active", avatar: "/api/placeholder/40/40" },
    { id: 6, name: "Noah Garcia", role: "Member", email: "noah.g@example.com", joinDate: "2023-11-15", status: "active", avatar: "/api/placeholder/40/40" },
    { id: 7, name: "Ava Martinez", role: "Member", email: "ava.m@example.com", joinDate: "2024-01-08", status: "pending", avatar: "/api/placeholder/40/40" },
    { id: 8, name: "Ethan Thompson", role: "Member", email: "ethan.t@example.com", joinDate: "2024-02-12", status: "active", avatar: "/api/placeholder/40/40" },
  ]);

  // Available roles
  const availableRoles = [
    "President",
    "Vice President",
    "Treasurer",
    "Secretary",
    "Event Coordinator",
    "Communications Officer",
    "Membership Coordinator",
    "Member"
  ];

  // Filter states
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingMember, setEditingMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle role change
  const handleRoleChange = (memberId, newRole) => {
    setMembers(members.map(member => 
      member.id === memberId ? { ...member, role: newRole } : member
    ));
  };

  // Filter members based on selected filters
  const filteredMembers = members.filter(member => {
    const matchesRole = roleFilter === "All" || member.role === roleFilter;
    const matchesStatus = statusFilter === "All" || member.status === statusFilter;
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          member.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRole && matchesStatus && matchesSearch;
  });

  // Handle edit member
  const handleEditMember = (member) => {
    setEditingMember({...member});
    setIsModalOpen(true);
  };

  // Handle save member
  const handleSaveMember = () => {
    setMembers(members.map(member => 
      member.id === editingMember.id ? editingMember : member
    ));
    setIsModalOpen(false);
    setEditingMember(null);
  };

  // Status badge component
  const StatusBadge = ({ status }) => {
    const statusStyles = {
      active: "bg-green-100 text-green-800",
      inactive: "bg-gray-100 text-gray-800",
      pending: "bg-yellow-100 text-yellow-800"
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Club Member Roles</h1>
            <button 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => {
                setEditingMember({ id: Date.now(), name: "", role: "Member", email: "", joinDate: new Date().toISOString().split('T')[0], status: "pending", avatar: "/api/placeholder/40/40" });
                setIsModalOpen(true);
              }}
            >
              Add New Member
            </button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="text-blue-700 font-medium">Total Members</h3>
              <p className="text-2xl font-bold">{members.length}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h3 className="text-green-700 font-medium">Active Members</h3>
              <p className="text-2xl font-bold">{members.filter(m => m.status === "active").length}</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
              <h3 className="text-yellow-700 font-medium">Pending Approval</h3>
              <p className="text-2xl font-bold">{members.filter(m => m.status === "pending").length}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <h3 className="text-purple-700 font-medium">Leadership Roles</h3>
              <p className="text-2xl font-bold">{members.filter(m => m.role !== "Member").length}</p>
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <input
                type="text"
                id="search"
                placeholder="Search by name or email"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="roleFilter" className="block text-sm font-medium text-gray-700 mb-1">Filter by Role</label>
              <select
                id="roleFilter"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                <option value="All">All Roles</option>
                {availableRoles.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="statusFilter" className="block text-sm font-medium text-gray-700 mb-1">Filter by Status</label>
              <select
                id="statusFilter"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Statuses</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>

          {/* Members Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredMembers.map(member => (
                  <tr key={member.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{member.name}</div>
                          <div className="text-gray-500 text-sm">{member.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <select
                        className="border border-gray-300 rounded-md p-1.5 text-sm"
                        value={member.role}
                        onChange={(e) => handleRoleChange(member.id, e.target.value)}
                      >
                        {availableRoles.map(role => (
                          <option key={role} value={role}>{role}</option>
                        ))}
                      </select>
                    </td>
                    <td className="py-3 px-4">
                      <StatusBadge status={member.status} />
                    </td>
                    <td className="py-3 px-4 text-gray-700">
                      {new Date(member.joinDate).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <button 
                          className="text-blue-600 hover:text-blue-800" 
                          onClick={() => handleEditMember(member)}
                        >
                          Edit
                        </button>
                        <button 
                          className="text-red-600 hover:text-red-800"
                          onClick={() => {
                            if (window.confirm(`Are you sure you want to remove ${member.name}?`)) {
                              setMembers(members.filter(m => m.id !== member.id));
                            }
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredMembers.length === 0 && (
                  <tr>
                    <td colSpan="5" className="py-4 text-center text-gray-500">
                      No members found matching your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Role Distribution */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Role Distribution</h2>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {availableRoles.map(role => {
                  const count = members.filter(m => m.role === role).length;
                  const percentage = Math.round((count / members.length) * 100) || 0;
                  return (
                    <div key={role} className="bg-white p-3 rounded-md border border-gray-100">
                      <div className="text-sm font-medium text-gray-700">{role}</div>
                      <div className="flex items-center mt-2">
                        <div className="text-lg font-bold mr-2">{count}</div>
                        <div className="text-xs text-gray-500">({percentage}%)</div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Member Modal */}
      {isModalOpen && editingMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              {editingMember.id ? `Edit ${editingMember.name}` : 'Add New Member'}
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={editingMember.name}
                  onChange={(e) => setEditingMember({...editingMember, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={editingMember.email}
                  onChange={(e) => setEditingMember({...editingMember, email: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={editingMember.role}
                  onChange={(e) => setEditingMember({...editingMember, role: e.target.value})}
                >
                  {availableRoles.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={editingMember.status}
                  onChange={(e) => setEditingMember({...editingMember, status: e.target.value})}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Join Date</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={editingMember.joinDate}
                  onChange={(e) => setEditingMember({...editingMember, joinDate: e.target.value})}
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                onClick={() => {
                  setIsModalOpen(false);
                  setEditingMember(null);
                }}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={handleSaveMember}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClubMembersRoleDashboard;