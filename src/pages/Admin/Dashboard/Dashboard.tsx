import { StyledHamburgerLine } from '@src/components/Hamburger/hamburger.styles'
import { StyledSidebar, StyledSidebarItem, StyledSidebarLink, StyledSidebarList, StyledSidebarToggler } from '../Dashboard/dashboard.styles'
import { Container, Select } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MdBook as MenuBookIcon, MdPerson as PersonIcon, MdCategory as CategoryIcon } from "react-icons/md";
import { BsTable as BookOnlineIcon } from "react-icons/bs";
const dashboardItems = [
  { title: 'Kitoblar', to: '/admin/book', helper: 'course', icon: MenuBookIcon },
  { title: 'Adiblar', to: '/admin/author', helper: 'author', icon: PersonIcon },
  { title: 'Buyurtmalar', to: '/admin/order', helper: 'order', icon: BookOnlineIcon },
  { title: 'Kategoriyalar', to: '/admin/category', helper: 'category', icon: CategoryIcon }
]

export default function Dashboard() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  return (
    <>
      <StyledSidebar>
        <StyledSidebarToggler>
          <StyledHamburgerLine />
          <StyledHamburgerLine />
        </StyledSidebarToggler>
        <StyledSidebarList>
          {dashboardItems.map(item => (
            <StyledSidebarItem key={item.title}>
              {<item.icon style={{ position: 'absolute', zIndex: '10', top: '50%', left: '10%', transform: 'translate(-10%,-50%)' }} color="inherit" />}
              <StyledSidebarLink data-name={item.title} to={item.to} state={{ addItemRoute: item.helper }}>
              </StyledSidebarLink>
            </StyledSidebarItem>
          ))}
        </StyledSidebarList>
      </StyledSidebar>
      <Container maxW="1240px" display={{ base: 'block', md: 'none' }}>
        <Select defaultValue={pathname} size="md" mt="8" onChange={e => {
          navigate(e.target.value)
        }}>
          {dashboardItems.map(item => {
            return pathname === item.to
              ? <option defaultChecked key={item.title} defaultValue={item.to}>
                {item.to}
              </option>
              : <option key={item.title} defaultValue={item.to}>
                {item.to}
              </option>
          })}
        </Select>
      </Container>
    </>
  )
}
