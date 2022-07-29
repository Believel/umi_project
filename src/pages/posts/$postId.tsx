import { useParams } from '@umijs/max'
import { PageContainer} from '@ant-design/pro-components'
export default () => {

  const params = useParams()
  return (
    <PageContainer ghost header={{title: ''}}>
      post: { params?.postId}
    </PageContainer>
  )
}