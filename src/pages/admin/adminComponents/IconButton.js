import './componentscss.css'
const IconButton = ({
  onClick = () => { },
  className = 'w-4 h-4',
}) => {
  return (
    <a href='/dashboard'>
      <button type='button' className={className}>
        <img
          src={require('../../../elements/brownfieldlogo.png')}
          alt=""
          className="w-auto h-auto"
        />
      </button>
    </a>
  );
}

export default IconButton;