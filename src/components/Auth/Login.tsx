import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../slices/authSlice';
import { LogIn } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    dispatch(setCredentials({
      user: { id: '1', username: 'testuser', email, role: 'user' },
      token: 'fake-jwt-token'
    }));
    navigate('/dashboard');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F9FAFB',
      padding: '3rem 1rem'
    }}>
      <div style={{
        maxWidth: '28rem',
        width: '100%',
        backgroundColor: '#FFFFFF', // White background for the form
        borderRadius: '0.5rem',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow
        padding: '2rem',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <LogIn style={{ margin: '0 auto', height: '3rem', width: 'auto', color: '#4F46E5' }} />
          <h2 style={{ marginTop: '1.5rem', fontSize: '2rem', fontWeight: '700', color: '#1F2937' }}>
            Sign in to your account
          </h2>
        </div>
        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
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
                backgroundColor: '#F9FAFB', // Light input background
                outline: 'none',
                transition: 'border-color 0.3s',
              }}
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={(e) => e.currentTarget.style.borderColor = '#4F46E5'} // Change border color on focus
              onBlur={(e) => e.currentTarget.style.borderColor = '#D1D5DB'} // Reset border color on blur
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
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
                transition: 'border-color 0.3s',
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
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
