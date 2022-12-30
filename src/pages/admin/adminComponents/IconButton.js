import './componentscss.css'
const IconButton = ({
    onClick = () => {},
    className = 'w-4 h-4',
  }) => {
    return (
        <a href='/dashboard'>
          <button type='button' className={className}>
        <img
          src={`C:/Projects/brownfield/public/images/brownfieldlogo.png`}
          alt=""
          className="w-full h-full"
        />
        </button>
      </a>
    );
  }

  export default IconButton;