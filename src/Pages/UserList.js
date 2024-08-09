import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import Pagination from './Pagination';
import "../index.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await fetch('https://randomuser.me/api/?results=50'); // Fetch 50 users
      const data = await res.json();
      setUsers(data.results);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div className="user-list">
        {currentUsers.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
      <Pagination
        totalPages={Math.ceil(users.length / usersPerPage)}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

export default UserList;
