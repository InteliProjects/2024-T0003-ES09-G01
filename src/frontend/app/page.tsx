/** react */
import { FC } from 'react';
import LoginButton from './components/buttons/Login';

interface Props {}

const Home: FC<Props> = ({}: Props) => {
     return (
       <>
           <LoginButton />
       </>
   )
}

export default Home;