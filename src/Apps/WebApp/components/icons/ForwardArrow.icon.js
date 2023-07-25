export default (props) => {
  const width = props.width ? props.width : 6
  const color = props.color ? props.color : '#ADFFE1'
  const className = props.className ? props.className : ''
  const style = {
    ...props.style
  }

  return (
    <svg 
      viewBox="0 0 6 11" 
      xmlns="http://www.w3.org/2000/svg"
      width={width} 
      fill={color}
      className={`icon forwardArrow ${className}`}
      style={style}
    >
      <path d="M4.17399 5.5L0.217792 1.33616C-0.0764184 1.02651 
        -0.0719876 0.529044 0.227689 0.225041C0.527365 
        -0.0789628 1.0088 -0.074384 1.30301 0.235268L5.78221 
        4.94955C6.0726 5.25518 6.0726 5.74482 5.78221 
        6.05045L1.30301 10.7647C1.0088 11.0744 0.527365 
        11.079 0.227689 10.775C-0.0719876 10.471 -0.0764184 
        9.97349 0.217792 9.66384L4.17399 5.5Z" 
          />
    </svg>
  )
}