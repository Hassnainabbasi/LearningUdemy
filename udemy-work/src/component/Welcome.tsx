import { FC } from "react"

type WelcomeProps = {
    IsLoggin : boolean;
};

const Welcome: FC<WelcomeProps> = ({ IsLoggin }) => {
  return (
    <div>
    {IsLoggin && (
        <h1>Welcome</h1>
    )}
    </div>  
  )
}

export default Welcome