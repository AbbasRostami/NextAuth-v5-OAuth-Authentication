import { auth } from "@/auth";

interface UserType {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
  };
}

export default async function UsersPage() {
  
  const getUsers = async (): Promise<UserType[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    return res.json();
  };

  const users = await getUsers();


  const session = await auth()

  console.log("Log Session: ",session);
  
  const users1 = {
    name : session?.user?.email || "Guest"  
  }
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-red-600 text-center text-2xl font-bold mb-4">
          Users: {users1?.name}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-lg rounded-2xl p-4 border border-gray-200"
            >
              <h2 className="text-xl font-bold mb-2">{user.name}</h2>
              <p className="text-gray-700 mb-2">{user.email}</p>
              <p className="text-gray-700 mb-2">{user.phone}</p>
              <p className="text-gray-500 text-sm">
                {user.address.city}, {user.address.street}
              </p>
              <p className="text-gray-500 text-sm">
                Company: {user.company.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
