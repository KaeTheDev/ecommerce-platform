export const Dashboard = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/';
    };

    return(
        <>
        <h1 className="text-3xl text-pink-700">Welcome to the Dashboard!</h1>
        <button onClick={handleLogout} className="fixed top-3 right-20 p-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600">Log Out</button>
        </>
    )
}