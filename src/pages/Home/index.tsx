import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
// useModel() 是一个钩子函数，提供了使用Model的能力
import { useModel, history } from '@umijs/max';
import { Button } from 'antd'
import styles from './index.less';

const HomePage: React.FC = () => {
  // 使用全局的Model, 接收的参数是Model的命名空间
  const { name } = useModel('global');
  const goAccess = () => {
    history.push('/access')
  }
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
        <Button onClick={goAccess}>跳转权限页</Button>
      </div>
    </PageContainer>
  );
};

export default HomePage;
