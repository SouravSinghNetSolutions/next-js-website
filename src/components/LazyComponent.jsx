export default async function LazyComponent() {
  await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(true)
    },5000)
  })
  return <div>This is a lazy-loaded component.</div>;
}