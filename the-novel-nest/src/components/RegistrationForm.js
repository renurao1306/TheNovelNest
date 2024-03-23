import { useState } from "react";

function RegistrationForm({ props }) {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');
    const [course, setCourse] = useState('');
    const [gender, setGender] = useState('');
    const [hobbies, setHobbies] = useState([]);

    const handleCheckbox = (e) => {
        const hobby = e.target.value;
        if (e.target.checked) {
            setHobbies([...hobbies, hobby]);
        }
        else {
            setHobbies([hobbies.filter(item => item !== hobby)]);
        }
    }


    function handleChange(event) {
        if (event.target.id === "firstname") {
            setFirstname(event.target.value);
        }
        if (event.target.id === "lastname") {
            setLastname(event.target.value);
        }
        if (event.target.id === "email") {
            setEmail(event.target.value);
        }
        if (event.target.id === "password") {
            setPassword(event.target.value);
        }
        if (event.target.id === "confirmpassword") {
            setConfirmPassword(event.target.value);
        }
        if (event.target.id === "address") {
            setAddress(event.target.value);
        }
        if (event.target.id === 'course') {
            setCourse(event.target.value);
        }
        if (event.target.id === 'gender1') {
            setGender(event.target.value);
        }
        if (event.target.id === 'gender2') {
            setGender(event.target.value);
        }
    }

    const validate = () => {
        let emailReg = /^[a-zA-z0-9_.-]+@{1}[a-zA-Z.-]+\.{1}[a-zA-Z]{2,4}/gm
        if (firstname === '') {
            window.alert('Firstname is required');
            return false;
        }
        if (lastname === '') {
            window.alert('Lastname is required');
            return false;
        }
        if (email === '') {
            window.alert('Email is required');
            return false;
        }
        else if (!emailReg.test(email)) {
            window.alert('Please enter a valid email');
            return false;
        }
        if (password === '') {
            window.alert('Please enter a password');
            return false;
        }
        else if (password < 8) {
            window.alert('Password must be atleast 8 characters long');
            return false;
        }
        if (confirmPassword === '') {
            window.alert('Please confirm your password');
            return false;
        }
        else if (confirmPassword !== password) {
            window.alert('Passwords do not match');
            return false;
        }
        if (address === '') {
            window.alert('Please enter your address');
            return false;
        }
        if (course === 'default') {
            window.alert('Please select a course');
            return false;
        }
        if (gender === '') {
            window.alert('Please select your gender');
            return false;
        }

        return true;

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            console.log(firstname, lastname, email, password, confirmPassword, address, course, gender, hobbies);
        }

    }


    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ textAlign: 'center' }}>Registration Form</h1>
            <div style={{ padding: '20px', border: '1px solid black', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundImage: 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)' }}>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tr>
                            <td>Enter first name:</td>
                            <td><input type="text" placeholder='Enter first name' value={firstname} onChange={handleChange} id="firstname" /></td>
                        </tr>
                        <tr>
                            <td>Enter last name:</td>
                            <td><input type="text" placeholder='Enter last name' value={lastname} onChange={handleChange} id="lastname" /></td>
                        </tr>
                        <tr>
                            <td>Enter email:</td>
                            <td><input type="text" placeholder='Enter email' value={email} onChange={handleChange} id="email" /></td>
                        </tr>
                        <tr>
                            <td>Enter password:</td>
                            <td><input type="password" placeholder='Enter password' value={password} onChange={handleChange} id="password" /></td>
                        </tr>
                        <tr>
                            <td>Confirm password:</td>
                            <td><input type="password" placeholder='Confirm password' value={confirmPassword} onChange={handleChange} id="confirmpassword" /></td>
                        </tr>
                        <tr>
                            <td>Enter address:</td>
                            <td><textarea type="text" placeholder='Enter address' value={address} onChange={handleChange} id="address" /></td>
                        </tr>
                        <tr>
                            <td>Select course:</td>
                            <td>
                                <select id="course" value={course} onChange={handleChange}>
                                    <option value='default' selected>Select course</option>
                                    <option value='mca'>MCA</option>
                                    <option value='btech'>B.Tech</option>
                                    <option value='mtech'>M.Tech</option>
                                    <option value='bti'>BTI</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Select gender:</td>
                            <td>
                                <input type="radio" name="gender" id="gender1" checked={gender === 'male'} value="male" onChange={handleChange} /> Male
                                <input type="radio" name="gender" id="gender2" checked={gender === 'female'} value="female" onChange={handleChange} /> Female
                            </td>
                        </tr>
                        <tr>
                            <td>Select hobbies:</td>
                            <td>
                                <input type="checkbox" id="art" value="art" onChange={(e) => { handleCheckbox(e) }} /> Art
                                <input type="checkbox" id="reading" value="reading" onChange={(e) => { handleCheckbox(e) }} /> Reading
                                <input type="checkbox" id="sports" value="sports" onChange={(e) => { handleCheckbox(e) }} /> Sports
                                <input type="checkbox" id="music" value="music" onChange={(e) => { handleCheckbox(e) }} /> Music
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2'>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <input type="submit" value='SUBMIT' style={{ width: '120px', height: '60px', border: '1px solid black', backgroundColor: 'yellow', borderRadius: '6px' }} />
                                </div>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;