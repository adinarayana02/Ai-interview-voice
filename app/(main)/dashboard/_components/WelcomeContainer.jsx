import { useUser } from '@/app/provider';  // Assuming you have useUser hook

function DashboardHeader() {
  const { user } = useUser();

  return (
    <div className="p-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold">Welcome Back</h1>
        <h2 className="text-xl font-semibold mt-1">{user?.name}</h2>
        <p className="text-gray-500 text-sm mt-2">
          AI-Driven Interviews, Hassle-Free Hiring
        </p>
      </div>
    </div>
  );
}

export default DashboardHeader;