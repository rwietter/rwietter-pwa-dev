import { styled } from 'styles/theme';

export const SocialContainer = styled('div', {
  display: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  cursor: 'pointer',

  '@bp5': {
    display: 'flex',
  },
});

export const Link = styled('a', {
  color: '$gray50',
  display: 'inline-block',
  textDecoration: 'none',

  '& + &': {
    paddingLeft: '$2',
  },
});
