import { useState, useRef } from 'react';
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    })

    const countRef = useRef(0);
    const inputRef = useRef();

    const onSubmit = () => {
        if(input.name === ""){
            alert('이름을 입력해 주세요.')
            inputRef.current.focus();
        }
        console.log(1)
    }
    const onChange = (e) => {
        countRef.current ++;
        console.log('countRef = ',countRef)
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <div>
            <input 
                ref={inputRef}
                name='name'
                onChange={onChange} 
                placeholder={'이름'}
                value={input.name}></input>
            <div>{input.name}</div>
            </div>
            <div>
            <input 
                name='birth'
                type='date'
                onChange={onChange}  
                value={input.birth}
            />
            <div>{input.birth}</div>
            </div>
            <div>
                <select value={input.country} onChange={onChange} name='country'>
                    <option value={''}>선택해주세요</option>
                    <option value={'kor'}>한국</option>
                    <option value={'usa'}>미국</option>
                </select>
            
            </div>
            <div>
                {input.country}
            </div>
            <div>
            <textarea 
                name='bio'
                value={input.bio}
                placeholder={'자기소개'}
                onChange={onChange}
            />
            </div>
            <div>
                {input.bio}
            </div>
            <button onClick={onSubmit}>제출</button>
        </div>
    )
};

export default Register;