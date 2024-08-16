import CustomHook from "./CustomHook";

const UseFetch = () => {

    const [data] = CustomHook("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
    {
        data && data.map((item) => {
            return <p key={item.id}>{item.title}</p>
        })
    }
    </>
  )
}
export default UseFetch