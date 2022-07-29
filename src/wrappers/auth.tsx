import { Navigate, Outlet } from '@umijs/max'
import useAuth from '@/hooks/useAuth'
export default () => {
  const {isLogin} = useAuth()
  if (isLogin) {
    return <Outlet/>
  } else {
    return <Navigate to="/home"/>
  }
}