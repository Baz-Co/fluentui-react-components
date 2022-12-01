import { Button } from '../Components';

export function UserLogin() {
  // const userAPI = "";
  const attemptLogin = () => {
    fetch("/login", { method: 'POST' })
  }


  return (
    <>
      <div>UserLogin</div>
      { sessionStorage.getItem('is-authenticated') ? 'User is Logged in' : 'User is NOT logged in' }
      <Button appearance='secondary' onClick={()=>{console.log('clicked');attemptLogin();}}>
        Login
      </Button>
    </>
  )
}
