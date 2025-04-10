export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json()
  await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(true)
    },5000)
  })
  return (
    <div >
      My app home route
      <ul>{users.map((user) => <li key={user.id}>
        Name:  {user.name}
      </li>)}</ul>
    </div>
  );
}
