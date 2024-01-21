import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

const LoginForm = () => {
  const [username, setUsername] = useState('guest');
  const intl = useIntl();

  return (
    <div className="px-4 md:px-32 mt-20">
      <form className="flex flex-col justify-between bg-gray-200 p-4 rounded-md max-w-lg mx-auto shadow-lg">
        <div>
          <p className="mb-4 text-sm"><FormattedMessage id="enterCredentials" /></p>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="mb-2 w-full h-12 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg px-3"
          />
          <input 
            type="password" 
            placeholder={intl.formatMessage({ id: 'password' })}
            className="mb-2 w-full h-12 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg px-3"
          />
        </div>
        <div className="flex justify-end mt-4">
          <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded border border-black"><FormattedMessage id="Sign in" /></button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
