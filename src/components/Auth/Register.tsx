import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration
    console.log('Registered:', { username, email, password });
    navigate('/login');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F3F4F6', // Light gray background
      padding: '3rem 1rem'
    }}>
      <div style={{
        maxWidth: '30rem',
        width: '100%',
        backgroundColor: '#FFFFFF', // White background for the form
        borderRadius: '0.5rem',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow
        padding: '2rem',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <UserPlus style={{ margin: '0 auto', height: '3rem', width: 'auto', color: '#4F46E5' }} />
          <h2 style={{ marginTop: '1.5rem', fontSize: '2rem', fontWeight: '700', color: '#1F2937' }}>
            Create your account
          </h2>
        </div>
        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="username" className="sr-only">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              required
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                border: '1px solid #D1D5DB',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                color: '#1F2937',
                backgroundColor: '#F9FAFB', // Light input background
                outline: 'none',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={(e) => e.currentTarget.style.borderColor = '#4F46E5'} // Change border color on focus
              onBlur={(e) => e.currentTarget.style.borderColor = '#D1D5DB'} // Reset border color on blur
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                border: '1px solid #D1D5DB',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                color: '#1F2937',
                backgroundColor: '#F9FAFB',
                outline: 'none',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={(e) => e.currentTarget.style.borderColor = '#4F46E5'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#D1D5DB'}
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                border: '1px solid #D1D5DB',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                color: '#1F2937',
                backgroundColor: '#F9FAFB',
                outline: 'none',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={(e) => e.currentTarget.style.borderColor = '#4F46E5'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#D1D5DB'}
            />
          </div>

          <div>
            <button
              type="submit"
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                color: '#FFF',
                backgroundColor: '#4F46E5',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.3s, transform 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4338CA';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#4F46E5';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
