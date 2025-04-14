import { SyntheticEvent, useState } from "react";
import Button from "./Button";

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
   const handleSubmit = (e : SyntheticEvent) =>{
    e.preventDefault()
    const target = e.target as HTMLFormElement
    console.log(target,{
        email,
        password

    })
   }

    return (    
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4 w-full max-w-sm">
          <input
            type="email"
            name="email"
            onChange={(e)=> setEmail(e.target.value) }
            value={email}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
         <Button />
        </form>
      </div>
    );
  };
  
  export default LoginForm;
  