import React, { useContext, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { searchMedicineApi, getAllUsersApi, addBillApi } from '../Services/AllApi';
import { UserContext } from '../App';

function Bills() {
    const { useremail, dispatch1 } = useContext(UserContext);
    const { state, dispatch } = useContext(UserContext);
    const [medicines, setMedicines] = useState([]);
    const [search, setSearch] = useState('');
    const [usernames, setUsernames] = useState([]);
    const [username, setUsername] = useState(''); 
    const [selectedMedicines, setSelectedMedicines] = useState([]); 
    const [total, setTotal] = useState(0); 

    useEffect(() => {
        const fetchMedicines = async () => {
            try {
                const result = await searchMedicineApi(search);
                setMedicines(result.data);
            } catch (error) {
                console.error('Error fetching medicines:', error);
            }
        };

        fetchMedicines();
    }, [search]);

    useEffect(() => {
        const fetchUsernames = async () => {
            try {
                const usersResult = await getAllUsersApi();
                setUsernames(usersResult.data.map(user => user.username));
            } catch (error) {
                console.error('Error fetching usernames:', error);
            }
        };

        fetchUsernames();
    }, []);

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const filteredMedicines = medicines.filter(medicine =>
        medicine.medicinename.toLowerCase().includes(search.toLowerCase())
    );

    const handleMedicineSelect = (medicine) => {
        setSelectedMedicines(prevSelectedMedicines => {
            if (prevSelectedMedicines.find(item => item.medicinename === medicine.medicinename)) {
                return prevSelectedMedicines.filter(item => item.medicinename !== medicine.medicinename);
            } else {
                return [...prevSelectedMedicines, medicine];
            }
        });
    };

    const calculatetotal = () => {
        let total = 0;
        selectedMedicines.forEach(medicine => {
            total += medicine.Price; 
        });
        setTotal(total);
    };

    useEffect(() => {
        calculatetotal();
    }, [selectedMedicines]);

    const billsubmit = async () => {
        if (!username || selectedMedicines.length === 0) {
            toast.error('Please select a patient and at least one medicine.');
            return;
        }

        try {
            await addBillApi({ username: username, selectedMedicines, total });
            toast.success('Bill added successfully.');
        } catch (error) {
            console.error('Error adding bill:', error);
            toast.error('Failed to add bill. Please try again later.');
        }
    };

    return (
        <>
            <div className='main m-2 p-5 rounded'>
                <form action="">
                    <h1>Add Patient Bill</h1>
                    <div className="form-group">
                        <label htmlFor="username">Patient Name:</label>
                        <select className="form-control" name="username" id="username" onChange={handleUsernameChange}>
                            <option value="">Select Patient</option>
                            {usernames.map((username, index) => (
                            <option key={index} value={username}>{username}</option>
                            ))}
                        </select>
                        </div>
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control rounded"
                                placeholder="Search for medicines"
                                value={search}
                                onChange={handleInputChange}
                            />
                        </div>
                        <label htmlFor="name">Medicine Name:</label><br />
                        <div className="form-check">
                        {filteredMedicines.map((medicine) => (
                            <div key={medicine.id} className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id={`checkbox_${medicine.id}`}
                                onChange={() => handleMedicineSelect(medicine)}
                                checked={selectedMedicines.find((item) => item.medicinename === medicine.medicinename)}
                            />
                            <label className="form-check-label" htmlFor={`checkbox_${medicine.id}`}>
                                {medicine.medicinename}
                            </label>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Total:</label>
                        <input type="text" className="form-control" id="price" name="price" readOnly value={total} />
                    </div>
                    <button type="button" className="btn greenbtn mt-2" onClick={billsubmit}>Add</button>
                    <hr />
                    <h1>Remove Patient Bill</h1>
                    <div className="form-group">
                        <label htmlFor="name">Patient Name:</label>
                        <input type="text" className="form-control" id="name" name="name" required />
                    </div>
                    <button type="submit" className="btn greenbtn mt-2">Remove</button>
                    <hr />
                </form>
            </div>
        </>
    )
}

export default Bills;
