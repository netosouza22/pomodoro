import { useTask } from '../../contexts/TaskContext';
import ProgressBar from '../ProgressBar';
import { HeaderContainer } from './styles';


const Header = () => {

  const { tasks } = useTask();

  return (
    <HeaderContainer>
      <span>
        {tasks.length > 0 ? `#1 ${tasks[0].name}` : '# -  Sem atividades'}
      </span>
      <ProgressBar />


      {/* <nav>
        <NavLink to="/historico" title="histórico">
          <Scroll size={24} />
        </NavLink>
        <NavLink to="/configuracao" title="configuração">
          <Gear size={24} />
        </NavLink>
      </nav> */}
    </HeaderContainer>
  )
}

export default Header
