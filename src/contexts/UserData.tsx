import {createContext, useContext, useEffect, useState} from 'react'
import {setAuthorizatioHeaderAxiosInstance} from 'utils/api/axiosInstance'

const UserDataContext = createContext<any>(null)

export const useUserData = () => useContext(UserDataContext)

export function UserDataProvider({children}) {
	const _state = useState<any>(null)

	useEffect(() => {
		const access_token = getAccessTokenFromLocalStorage()

		_state[1]({access_token})
		setAuthorizatioHeaderAxiosInstance(access_token)
	}, [])

	// NOTE: you *might* need to memoize this value
	// Learn more in http://kcd.im/optimize-context
	return <UserDataContext.Provider value={_state}> {children} </UserDataContext.Provider>
}

const KEY = 'access_token'

export function saveAccessTokenToLocalStorage(access_token) {
	localStorage.setItem(KEY, access_token)
}
export function getAccessTokenFromLocalStorage() {
	return localStorage.getItem(KEY)
}
