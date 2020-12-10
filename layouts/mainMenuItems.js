import BarChartIcon from '@material-ui/icons/BarChart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LayersIcon from '@material-ui/icons/Layers';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const mainMenuItems = [
  {
    title: "Home",
    value: "",
    icon: DashboardIcon
  },
  {
    title: "Receitas",
    value: "receitas",
    icon: ShoppingCartIcon
  },
  {
    title: "Estoque",
    value: "estoque",
    icon: PeopleIcon
  },
  {
    title: "Produção",
    value: "producao",
    icon: BarChartIcon
  },
  {
    title: "Cardápio",
    value: "cardapio",
    icon: LayersIcon
  }
]

export default mainMenuItems