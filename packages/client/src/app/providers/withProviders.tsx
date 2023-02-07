import { WithRouter } from './withRouter'
import { FC, JSXElementConstructor, PropsWithChildren } from 'react'

type TCComponents = Array<JSXElementConstructor<PropsWithChildren<unknown>>>;

const components: TCComponents = [
  // WithRouter,
]

export const WithProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {components.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
};
