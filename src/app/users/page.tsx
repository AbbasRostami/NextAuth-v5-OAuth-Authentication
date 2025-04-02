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

  const session = await auth();

  console.log("Log Session: ", session);

  const users1 = {
    name: session?.user?.email || "Guest",
  };

  return (
    <>
      <div className="container mx-auto p-10">
        <h1 className="text-center text-3xl font-extrabold mb-14">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            User:
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400 ml-2">
            {users1?.name}
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-xl rounded-3xl p-8 border border-gray-200 hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:border-transparent hover:ring-4 hover:ring-indigo-500 hover:ring-opacity-30"
            >
              {/* Avatar with gradient and shadow */}
              <div className="flex justify-center items-center mb-8">
                <div className="h-28 w-28 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white flex items-center justify-center text-3xl font-extrabold shadow-2xl ring-4 ring-blue-300">
                  {user.name[0]} {/* Display initial letter of user name */}
                </div>
              </div>

              {/* User Name */}
              <h2 className="text-4xl font-semibold text-gray-800 mb-4 hover:text-indigo-600 transition-colors duration-300">
                {user.name}
              </h2>

              {/* User Info */}
              <p className="text-gray-600 text-lg mb-2">{user.email}</p>
              <p className="text-gray-600 text-lg mb-2">{user.phone}</p>
              <p className="text-gray-500 text-sm mb-2">
                {user.address.city}, {user.address.street}
              </p>

              {/* Company Info */}
              <p className="text-gray-500 text-sm">
                <span className="font-semibold text-indigo-600">Company:</span>{" "}
                {user.company.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
