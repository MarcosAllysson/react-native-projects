import React, { createContext, useState } from 'react';
import { UserContextProps } from '../interfaces/UserContextProps';

export const UserContext = createContext<UserContextProps | undefined>(
	undefined
);

const UserContextProvider = ({ children }: any) => {
	const [name, setName] = useState('');
	const contextValue = {
		name,
		setName,
	};

	return (
		<UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
	);
};

export default UserContextProvider;
