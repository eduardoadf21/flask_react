//import { useState, useEffect, setData, setError} from 'react';
//import logo from './logo.svg';
//import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import React from "react";

//const baseURL = "http://localhost:5000/users";
//const baseURL = "/users";
//
function App() {
	const[users, setUsers] = useState([])

	useEffect(() => {
		const fetchUsers = () => {
			try{
				const response = axios.get("http://localhost:5000/users");
				setUsers(response.data);
			} catch (err) {
			}
		}

	fetchUsers()
	}, [])

}
export default App;
