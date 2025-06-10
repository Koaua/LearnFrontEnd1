function Field({ onClick, children}) {
    return (
        <div className="field" onClick={{onClick}}>
            {children}      
        </div>
    );
}

export default Field;