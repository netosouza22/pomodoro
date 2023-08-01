import { useTask } from '../../contexts/TaskContext';
import ProgressBar from '../ProgressBar';
import { HeaderContainer } from './styles';


const Header = () => {

  const { tasks } = useTask();

  return (
    <HeaderContainer isFinished={tasks.length > 0 && tasks[0].isFinished}>
      <span>
        {tasks.length > 0 ? `#1 ${tasks[0].name}` : '# -  Sem atividades'}
      </span>
      <ProgressBar />
    </HeaderContainer>
  )
}

export default Header
