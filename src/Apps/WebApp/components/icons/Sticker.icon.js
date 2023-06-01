export default (props) => {
  const width = props.width ? props.width : 16
  const color = props.color ? props.color : '#ADFFE1'
  const className = props.className ? props.className : ''
  const style = {
    ...props.style
  }

  return (
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16" 
        fill="none" 
        // strokeLinecap="round" 
        // strokeLinejoin="round"
        strokeWidth="2" 
        width={width}
        style={style}
        className={`icon search ${className}`}
        stroke={color}
    >
      <path 
          d="M1 5C1 2.79086 2.79086 1 5 1H11C13.2091 1 15 2.79086 15 
          5V8C15 11.866 11.866 15 8 15H5C2.79086 15 1 13.2091 1 11V5Z" 
              />
      <path 
          d="M15 10H11C9.89543 10 9 10.8954 9 12V15" 
              />
    </svg>
  )
}