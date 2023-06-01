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
        viewBox="0 0 14 14" 
        fill={color} 
        strokeLinecap="round" 
        strokeLinejoin="round"
        strokeWidth="2" 
        width={width}
        style={style}
        className={`icon search ${className}`}
    >
      <path 
          d="M13.3923 7.825H8.06729V13.225H5.94229V7.825H0.642285V5.9H5.94229V0.474999H8.06729V5.9H13.3923V7.825Z" 
              />
    </svg>
  )
}