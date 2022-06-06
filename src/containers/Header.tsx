import { AppBar, Button, Container, Menu, MenuItem, Toolbar } from '@mui/material';
import { NetworkBar, NextImage, NextLink } from 'components';
import { AppMenu } from 'containers';
import { useAnchor } from 'hooks';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { profileSelector, signOut } from 'reducers/profileSlice';
import { publicRoute } from 'routes';
import { walletService } from 'services';
import { shorten } from 'utils/common';

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, address } = useSelector(profileSelector);

  const [anchorMenu, openMenu, onOpenMenu, onCloseMenu] = useAnchor();

  const { mutate: connectWallet } = useMutation(walletService.connectWallet);

  return (
    <AppBar position='sticky' elevation={0} style={{ background: '#F8F8F8' }}>
      <Toolbar className='h-[80px]'>
        <Container className='flex items-center'>
          <NextLink href={publicRoute.home.path}>
            <a className='flex items-center'>
              <NextImage src={require('assets/icons/MyMetaFarm.png').default.src} width={120} height={72} />
            </a>
          </NextLink>
          <NetworkBar />

          <div className='flex-1' />
          <AppMenu />
          <div className='flex-1' />

          <div>
            {isLoggedIn ? (
              <>
                <Button onClick={onOpenMenu}>{shorten(address)}</Button>
                <Menu anchorEl={anchorMenu} open={openMenu} onClose={onCloseMenu} onClick={onCloseMenu}>
                  <NextLink href={publicRoute.profile.path}>
                    <a>
                      <MenuItem>Profile</MenuItem>
                    </a>
                  </NextLink>
                  <MenuItem onClick={() => dispatch(signOut())}>Disconnect</MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button onClick={() => connectWallet()}>Connect Wallet</Button>
              </>
            )}
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
