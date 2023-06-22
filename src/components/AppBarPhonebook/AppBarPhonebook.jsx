import { AppBar, Toolbar, Container } from '@mui/material';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { NavigationMenuMobile } from 'components/NavigationMenu/NavigationMenuMobile';
import { NavigationMenu } from 'components/NavigationMenu/NavigationMenu';
import { useLocation } from 'react-router-dom';
import { Search } from 'components/Search/Search';

export const AppBarPhonebook = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { pathname } = useLocation();
  const CONTACTS_LOCATION = '/contacts';

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl" sx={{ p: 0 }}>
        <Toolbar disableGutters>
          <NavigationMenuMobile isLoggedIn={isLoggedIn} />
          <NavigationMenu isLoggedIn={isLoggedIn} />
          {pathname === CONTACTS_LOCATION && <Search />}
          {isLoggedIn ? <UserMenu location={pathname} /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
