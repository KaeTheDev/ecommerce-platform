import Header from "../components/UserProfile/Header/Header";

export const UserProfile = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/';
    };

    return(
        <>
        {/* <h1 className="text-3xl text-lime-400">Welcome to the User Profile!</h1> */}
        <Header />
        <button onClick={handleLogout} className="fixed top-3 right-20 p-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600">Log Out</button>
        </>
    )
}