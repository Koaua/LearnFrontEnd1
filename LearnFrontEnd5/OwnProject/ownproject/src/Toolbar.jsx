function Toolbar({ mode, setMode }) {
    return (
        <div className="toolbar">
            <button
                onClick={() => setMode('O')}
                className={mode === 'O' ? 'active' : ''}
                >
                    O
            </button>
            <button 
                onClick={() => setMode('X')} 
                className={mode === 'X' ? 'active' : ''}
            >
                X
            </button>
        </div>
    );
}

export default Toolbar;