  const Button = ({ children, text, color = "black"}) => {
      const onClickEvnt = (e) => {
            console.log(text)
            console.log(e)
      }
        return <button 
        onClick={onClickEvnt}
        style={{ color : color}}>{children}{text} - {color.toUpperCase()}</button>
  }

  export default Button;