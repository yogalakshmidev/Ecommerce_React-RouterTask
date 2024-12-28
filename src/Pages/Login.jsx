import { Link, useNavigate } from 'react-router'
export const Login = () => {
  const navigate=useNavigate();
  const handleLogin = (e)=>{
    e.preventDefault();
    alert("Logged in Successfully")
    navigate("/dashboard");
  }
  return (
    
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder='User Name' /><br/>
        <input type="password" placeholder='Password' /><br/>
        <button type='submit'>Login</button>
      </form>
      <p> Don't have an account... <Link to="/register">Register</Link></p>
    </div>
  )
}
