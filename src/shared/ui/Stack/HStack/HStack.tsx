import { type ReactNode } from 'react';
import Flex, { type FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack = (props: HStackProps): ReactNode => <Flex direction="row" {...props} />;
