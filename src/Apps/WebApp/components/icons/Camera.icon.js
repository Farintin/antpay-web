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
        viewBox="0 0 17 14" 
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
            d="M15.4752 11.473C15.4752 11.8203 15.3366 12.1532 15.0898 
            12.3987C14.843 12.6443 14.5083 12.7822 14.1593 
            12.7822H2.31593C1.96692 12.7822 1.63221 12.6443 1.38543 
            12.3987C1.13864 12.1532 1 11.8203 1 11.473V4.27283C1 
            3.92562 1.13864 3.59264 1.38543 3.34713C1.63221 3.10162 
            1.96692 2.9637 2.31593 2.9637H4.94779L6.26373 
            1H10.2115L11.5275 2.9637H14.1593C14.5083 2.9637 14.843 
            3.10162 15.0898 3.34713C15.3366 3.59264 15.4752 3.92562 
            15.4752 4.27283V11.473Z" 
                />
        <path 
            d="M8.23764 10.0891C9.63203 10.0891 10.7624 8.95875 
            10.7624 7.56436C10.7624 6.16998 9.63203 5.03961 8.23764 
            5.03961C6.84326 5.03961 5.71289 6.16998 5.71289 
            7.56436C5.71289 8.95875 6.84326 10.0891 8.23764 
            10.0891Z" 
                />
    </svg>
  )
}