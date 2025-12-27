import { useState } from 'react';
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
    const [name, setName] = useState('철수');
    const [birth, setBirth] = useState('');
    const [country, setCountry] = useState('');
    const [bio, setBio] = useState("");

    const onChangeName = (e) => {
        console.log(e)
    }

    return (
        <div>
            <div>
            <input 
                onChange={(e) => setName(e.target.value)} 
                placeholder={'이름'}
                value={name}></input>
            <div>{name}</div>
            </div>
            <div>
            <input 
                type='date'
                onChange={(e) => setBirth(e.target.value)}  
                value={birth}
            />
            <div>{birth}</div>
            </div>
            <div>
                <select value={country} onChange={(e)=>{setCountry(e.target.value)}}>
                    <option value={''}>선택해주세요</option>
                    <option value={'kor'}>한국</option>
                    <option value={'usa'}>미국</option>
                </select>
            
            </div>
            <div>
                {country}
            </div>
            <div>
            <textarea 
                value={bio}
                placeholder={'자기소개'}
                onChange={(e)=>{setBio(e.target.value)}}
            />
            </div>
            <div>
                {bio}
            </div>
        </div>
    )
};

export default Register;