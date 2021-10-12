
function Simple({ls, simpleColor, simpleNumber}) {

    return (
        <>
        <div className="circle">
        
            <span style={{

                letterSpacing: ls,
                color: simpleColor
                
                }}>{simpleNumber}</span>
        </div>
        </>
    )
}
export default Simple;