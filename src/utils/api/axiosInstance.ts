import axios from 'axios'

const API_ENDPOINTS = {
	development: 'https://metoospace.herokuapp.com',
	production: 'https://metoospace.herokuapp.com',
}

export const paths = {
	signup: 'api/v1/auth/register',
	login: 'api/v1/auth/login',
	profile: 'api/v1/user/profile',
}

// Using axios instances
const axiosInstance = axios.create({
	baseURL: API_ENDPOINTS[process.env.NODE_ENV],
	timeout: 10_000,
	headers: {'X-Custom-Header': 'foobar'},
})

export const setAuthorizatioHeaderAxiosInstance = (access_token) => (axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${access_token}`)

// USAGE
// const {data} = await api.get('/fso/patients.json')

export default axiosInstance

// api sample responses:
/**
   GET: profile
   {
    "id": 3,
    "first_name": "",
    "last_name": "miler y",
    "username": "usertest1@mail.com",
    "email": "usertest1@mail.com",
    "password": "$2b$04$TNdYFS1x7ZIUfkcl8ad3N.k07JbWH2ShcBds5JafJMK72cyjNq5dq",
    "native": "us",
    "bio": "this is bio",
    "phone_no": "786494982",
    "date_of_brith": "2018-04-01T00:00:00.000Z",
    "avatar": "public/storage/avatars/1663185703911_bot-image.png",
    "rating": 4.5,
    "gender": "male",
    "created_at": "2022-08-31T11:34:19.603Z",
    "updated_at": "2022-09-14T20:32:28.053Z",
    "hobbie": {
        "id": 1,
        "name": "hikking"
    },
    "occupation": {
        "id": 2,
        "name": "doctor"
    }
}
 */