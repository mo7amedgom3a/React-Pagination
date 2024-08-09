// function RandomUser() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch("https://randomuser.me/api/?results=5");
//         const data = await response.json();
//         setUsers(data.results);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     }
//     fetchUsers();
//   }, [loading]); 
//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;
//   return (
//     <div>
//       <h2>Random Users</h2>
//       <ul>
//         {users.map(user => (
//           <li key={user.login.uuid}>{user.name.first} {user.name.last} : {user.gender}</li>
//         ))}
//       </ul>
//       <button onClick={() => setLoading(true)}>Refresh</button>
//     </div>
//   );
// }

// const [car, setCar] = useState({})
// const Cars = [
//   {make: "Toyota", model: "Corolla", year: 2015},
//   {make: "Toyota", model: "Camry", year: 2016},
//   {make: "honday", model: "RAV4", year: 2017},
//   {make: "Toyota", model: "Highlander", year: 2018},
//   {make: "Toyota", model: "4Runner", year: 2019},
//   {make: "Toyota", model: "Tacoma", year: 2020},
//   {make: "Toyota", model: "Tundra", year: 2021},
// ]

// return (
//   <div>
//     <h1>Car Inventory</h1>
//     <ul>
//       {Cars.map((car, index) => (
//         <li key={index} onClick={() => setCar(car)}> {car.make} {car.model} </li>
//       ))}
//     </ul>
//     <h2>Car</h2>
    
//     <p>Make: {car.make}</p>
//     <p>Model: {car.model}</p>
//     <p>Year: {car.year}</p>

//     <h1>Update Car</h1>
//     <label>Make</label>
//     <input type="text" value={car.make} onChange={(e) => setCar({...car, make: e.target.value})} />
//     <label>Model</label>
//     <input type="text" value={car.model} onChange={(e) => setCar({...car, model: e.target.value})} />
//     <label>Year</label>
//     <input type="text" value={car.year} onChange={(e) => setCar({...car, year: e.target.value})} />
//   </div>
// );
