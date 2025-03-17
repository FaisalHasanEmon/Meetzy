function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">User Dashboard</h2>
      <div className="mt-4 p-4 bg-white shadow rounded-lg">
        <h3 className="text-xl font-semibold">Recent Calls</h3>
        <ul className="mt-2 text-gray-700">
          <li>Call with John - 10 mins ago</li>
          <li>Call with Alex - 1 hour ago</li>
          <li>Call with Emma - Yesterday</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
