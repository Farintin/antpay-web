export default (props) => {
  const width = props.width ? props.width : 8
  const color = props.color ? props.color : '#ADFFE1'
  const className = props.className ? props.className : ''
  const style = {
    ...props.style
  }

  return (
    <svg 
      viewBox="0 0 8 15" 
      xmlns="http://www.w3.org/2000/svg"
      width={width} 
      fill={color}
      className={`icon back-arrow ${className}`}
      style={style}
    >
      <path d="M2.43468 7.5L7.70961 1.82204C8.10189 1.39979 8.09598 
      0.721424 7.69641 0.306874C7.29685 -0.107677 6.65493 -0.101433 
      6.26265 0.320819L0.290388 6.74939C-0.0967959 7.16616 -0.0967959 
      7.83384 0.290388 8.25061L6.26265 14.6792C6.65493 15.1014 7.29685 
      15.1077 7.69641 14.6931C8.09598 14.2786 8.10189 13.6002 7.70961 
      13.178L2.43468 7.5Z" />
    </svg>
  )
}