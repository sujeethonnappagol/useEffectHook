import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <>
        <div className="flex px-8 py-4  justify-between items-center border-b-2 border-gray-300">
            <h1 className='text-2xl font-bold'>API's and UseEffect</h1>
            <div className="flex justify-center items-center gap-4">
                <Link to="/">Home</Link>
                <Link to="/details">Details</Link>
            </div>
        </div>
    </>
  )
}
export default Navbar;