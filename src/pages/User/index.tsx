import { history  } from '@umijs/max'
import { PageContainer } from '@ant-design/pro-components'
import { Button } from 'antd'
function user() {
  const goPosts = () => {
    history.push('/posts/123')
  }
  return (
    <PageContainer
      ghost  
      header={{
        title: 'user page',
      }}>
      
      <Button type='primary' onClick={goPosts}>go posts</Button>
    </PageContainer>
  )
}

export default user