async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();

    console.log("Users List:\n");

    users.slice(0, 5).forEach((user) => {
      console.log(`ID: ${user.id}`);
      console.log(`Name: ${user.name}`);
      console.log(`Email: ${user.email}`);
      console.log("-----------------------");
    });
  } catch (error) {
    console.error("Error fetching users:", error.message);
  }
}

getUsers();
