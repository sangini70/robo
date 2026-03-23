import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [checkingPassword, setCheckingPassword] = useState(false);

  useEffect(() => {
    const unlocked = sessionStorage.getItem('admin_unlocked') === 'true';
    if (unlocked) {
      navigate('/admin/posts', { replace: true });
    }
  }, [navigate]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckingPassword(true);
    setError('');

    const correctPassword = 'admin';

    if (password.trim() === correctPassword) {
      sessionStorage.setItem('admin_unlocked', 'true');
      navigate('/admin/posts', { replace: true });
      return;
    }

    setError('비밀번호가 일치하지 않습니다.');
    setCheckingPassword(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 font-sans">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-sm border border-gray-200 text-center">
        <h1 className="text-2xl font-medium tracking-tight text-gray-900 mb-6">
          Admin Login
        </h1>

        {error && (
          <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handlePasswordSubmit}>
          <p className="text-sm text-gray-500 font-light mb-6">
            보안을 위해 관리자 비밀번호를 한 번 더 입력해 주세요.
          </p>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="관리자 비밀번호"
            className="w-full mb-4 bg-white border border-gray-300 rounded-md px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
            required
          />

          <button
            type="submit"
            disabled={checkingPassword}
            className="w-full inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {checkingPassword ? '확인 중...' : '확인'}
          </button>
        </form>
      </div>
    </div>
  );
}
