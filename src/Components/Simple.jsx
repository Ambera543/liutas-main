// const Simple = <h1>Simple Element</h1>;
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