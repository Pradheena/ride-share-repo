import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const token = localStorage.getItem('token');
        await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        localStorage.removeItem('token');
        navigate('/login');
      } catch (error) {
        console.error('Logout error:', error);
        localStorage.removeItem('token');
        navigate('/login');
      }
    };
    logout();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default UserLogout;