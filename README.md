강좌 : 한 입 크기로 잘라 먹는 리액트 기초부터 실전까지
강사 : Winterlood(이정환)

1. useState
  ㅁ 개요
  useState는 상태관리 Hook이다. 기본적으로 react의 Hook은 변수와 해당 변수를 set할 수 있는 함수가 주어지는 것 같다. useState를 활용하면 데이터에 반응하여 컴포넌트를 다시 랜더링 시킬 수 있다.
  컴포넌트는 크게 3가지 상황에서 리랜더링 된다. 1. state 변경, 2. props 값 변경, 3. 부모 컴포넌트가 리랜더링 되면 자식 컴포넌트도 리랜더링 된다.
  이때, 부모 컴포넌트에 state 들이 몰릴 경우 불필요하게 자식 컴포넌트도 리랜더링 되기 때문에 컴포넌트 별로 필요한 state를 잘 지정해야 한다.

  ㅁ 관리하는 input이 많다면 ?
 관리하는 useState 상태가 많아질 경우 하나의 state로 묶어서 관리할 수 있다. 이 때, 객체 형태로 값을 넣으면 되고   주의사항으로는 setInput 시 스프레드 연산자로 이미 담겨있는 객체들을 펼치고 해당 변수를 객체 형태로 넣어야 한다. 이 부분이 빠지면 이미 입력되어 있는 값들은 모두 사라지고 입력한 객체의 값만 남게 된다
  ex) setInput({
    ...input,
    name : e.target.value
  })
  객체를 조금 더 편하게 다루려면 key 값에 동적 key를 입력하면 편하다. [e.target.name] : e.target.value 
  ES6 부터 추가된 계산된 프로퍼티 이름(computed property name)이다.

  ㅁ state 랜더링
  setate 가 set으로 상태가 변경되면 해당 컴포넌트가 다시 랜더링 된다. 
  set() 호출 - 컴포넌트 함수 다시 실행 - jsx 다시 생성 - virtual dom 생성 - diff만 교체 후 반영

2. useRef
  userReference 의 줄임말로 reference 객체를 생성하는 기능. 컴포넌트 변수로 일반적인 값들을 저장할 수 있다.
  useState와의 차이로는 어떤 경우에도 리랜더링이 발생하지 않는다. 특정 DOM 요소에 접근하여 해당 element를 조작하는 작업이 가능하다. ex) foucs !

  useRef는 변수를 담을 수 있기 때문에 보통 유효성 검사에 많이 쓰인다. input에 ref 속성으로 useRef를 할당하고, 

  useRef는 일반 변수와 비슷하지만 useRef를 쓰는 이유는 컴포넌트 리랜더링 시 컴포넌트가 다시 생성되면서 일반 변수는 계속 초기화 되기 때문에 useRef를 사용하는 것이다.