const DownCircleIcon = (props) => (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      id="down-circle"
      xmlns="http://www.w3.org/2000/svg"
      className="icon flat-line"
      {...props}
    >
      <g id="SVGRepo_iconCarrier">
        <circle
          id="secondary"
          cx="12"
          cy="12"
          r="9"
          style={{ fill: '#ffffff', strokeWidth: 2 }}
        ></circle>
        <polyline
          id="primary"
          points="9 11 12 14 15 11"
          style={{
            fill: 'none',
            stroke: '#000000',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 2,
          }}
        ></polyline>
        <circle
          id="primary-2"
          data-name="primary"
          cx="12"
          cy="12"
          r="9"
          style={{
            fill: 'none',
            stroke: '#000000',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 2,
          }}
        ></circle>
      </g>
    </svg>
  );
  
  export default DownCircleIcon;