function Color({color, onClick}) {
    return (
        <button style={{backgroundColor: color}}
        onClick={onClick}
        className="Color">

        </button>
    );

}

export default Color