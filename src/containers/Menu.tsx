import { ListItemButton } from '@mui/material';
import { styled } from '@mui/system';
import { NextLink } from 'components';
import { useRouter } from 'next/router';
import { publicRoute } from 'routes';

const StyledListItem = styled(ListItemButton)({
  borderRadius: 20,
  fontWeight: 700,
  color: '#0008',
  '&:hover, &.Mui-selected': {
    color: '#000',
  },
  '&.Mui-selected': {
    backgroundColor: 'transparent',
  },
});

const NavItem = ({ path, name }: { path: string; name: string }) => {
  const router = useRouter();
  const isHome = path === '/';
  return (
    <NextLink href={path}>
      <a>
        <StyledListItem selected={isHome ? router.route === path : router.route.startsWith(path)}>
          {name}
        </StyledListItem>
      </a>
    </NextLink>
  );
};

const Menu = () => {
  const { home, marketplace, metaverse } = publicRoute;

  return (
    <>
      <NavItem {...home} />
      <NavItem {...marketplace} />
      <NavItem {...metaverse} />
    </>
  );
};

export default Menu;
