import { CloseOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Button, Container, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import { NetworkBar, NextImage, NextLink } from 'components';
import { AppMenu } from 'containers';
import { useAnchor, useValidNetwork } from 'hooks';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileSelector, signOut } from 'reducers/profileSlice';
import { publicRoute } from 'routes';
import { walletService } from 'services';
import { shorten } from 'utils/common';

const Header = () => {
  const dispatch = useDispatch();
  const { validNetwork } = useValidNetwork();
  const { isLoggedIn, address } = useSelector(profileSelector);

  const [showMenu, setShowMenu] = useState(false);
  const [anchorMenu, openMenu, onOpenMenu, onCloseMenu] = useAnchor();

  return (
    <AppBar position='sticky' elevation={0} style={{ background: '#F8F8F8' }}>
      <Toolbar className='h-[80px]'>
        <Container className='flex items-center px-0'>
          <NextLink href={publicRoute.home.path}>
            <a className='flex items-center'>
              <NextImage src={require('assets/icons/MyMetaFarm.png').default.src} width={120} height={72} />
            </a>
          </NextLink>
          <NetworkBar />

          <div className='flex-1' />
          <div className='mobile-nav' style={{ display: showMenu ? 'flex' : 'none' }}>
            <AppMenu />
          </div>

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
                <Button onClick={() => validNetwork(walletService.connectWallet)}>Connect Wallet</Button>
              </>
            )}
          </div>

          <IconButton color='secondary' className='md:hidden ml-3' onClick={() => setShowMenu((prev) => !prev)}>
            {showMenu ? <CloseOutlined /> : <MenuOutlined />}
          </IconButton>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
