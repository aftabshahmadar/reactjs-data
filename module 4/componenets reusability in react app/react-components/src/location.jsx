import { Addressline1, Addressline2, Addressline3, Addressline4 } from "./addressline"
function Addresses ()
{
    return (
        <>
             <div className="myapp">
            <div className="box1">
            <h1>My address</h1>
            <Addressline1 />
            </div>
            <div className="box2">
            <h1>My hostel address</h1>
            <Addressline2 />
            </div>
            <div className="box3">
            <h1>My collage address</h1>
            <Addressline3 />
            </div>
            <div className="box4">
            <h1>My company address</h1>
            <Addressline4 />
            </div>
            </div>
        </>
    )
}
export default Addresses 