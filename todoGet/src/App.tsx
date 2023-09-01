import { useGetTodosQuery } from './api'
import './App.css'


function App() {
  const {isLoading,data:todos,isError} = useGetTodosQuery()
  if(isLoading){
    return <div>Loading...</div>
  }
  if(isError){
    return <div>Error</div>
  }
 return(
    <div>
      <h1>Список задач</h1>
      <ul>
        {todos?.map((todo)=>(
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
 )
}

export default App
