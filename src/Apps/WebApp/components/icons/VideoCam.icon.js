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
        viewBox="0 0 21 15" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        strokeWidth="2" 
        width={width}
        style={style}
        className={`icon search ${className}`}
        stroke={color}
    >
      <path 
          d="M19.7568 3.28699L14.4229 7.43559L19.7568 11.5842V3.28699Z" 
              />
      <path 
          d="M12.7632 1.509H3.63625C2.71976 1.509 1.97681 2.26712 1.97681 
          3.20231V11.6688C1.97681 12.604 2.71976 13.3621 3.63625 
          13.3621H12.7632C13.6797 13.3621 14.4226 12.604 14.4226 
          11.6688V3.20231C14.4226 2.26712 13.6797 1.509 12.7632 1.509Z" 
              />
    </svg>
  )
}