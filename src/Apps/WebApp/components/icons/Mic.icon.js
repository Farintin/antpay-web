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
        viewBox="0 0 12 17" 
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
          d="M6.00008 1C5.38124 1 4.78775 1.22576 4.35017 
          1.62763C3.91258 2.02949 3.66675 2.57454 3.66675 
          3.14286V8.85714C3.66675 9.42546 3.91258 9.97051 
          4.35017 10.3724C4.78775 10.7742 5.38124 11 
          6.00008 11C6.61892 11 7.21241 10.7742 7.65 
          10.3724C8.08758 9.97051 8.33341 9.42546 8.33341 
          8.85714V3.14286C8.33341 2.57454 8.08758 2.02949 
          7.65 1.62763C7.21241 1.22576 6.61892 1 6.00008 
          1V1Z" 
              />
      <path 
          d="M11 7.33334V8.81482C11 10.19 10.4732 11.5089 
          9.53553 12.4813C8.59785 13.4537 7.32608 14 6 
          14C4.67392 14 3.40215 13.4537 2.46447 
          12.4813C1.52678 11.5089 1 10.19 1 8.81482V7.33334" 
              />
      <path 
          d="M6 14V16.6667" 
              />
    </svg>
  )
}