import React, { HTMLAttributes } from 'react';
import { FPColorString } from '../styles/theme';
import { StyledCard } from './styles/Card.styled';



export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    /** Switch bg and text color */
    inverted?: boolean;
    /** Choose contrast colour */
    colorway?: FPColorString;
    /** Choose card type */
    variant?: 'info' | 'square';
    /** Set width */
    width?: string;
    /** Add shadow */
    shadow?: boolean;
    /** Set title text - only on 'square' variant */
    title?: string;
    /** Enable hover effect */
    hoverEffect?: boolean;
    /** Click action */
    onClick?: React.MouseEventHandler | undefined;
}

export const Card = ({ children, variant='info', inverted=false, shadow=false, hoverEffect=false, colorway='violet', onClick, title, width }: CardProps): JSX.Element => {
    let primary: FPColorString = inverted ? colorway : 'purple';
    let contrast: FPColorString = inverted ? 'purple' : colorway;
    if(!width){
        width = variant === 'info' ? 'auto' : '200px';
    }

    return (
        <StyledCard onClick={onClick} variant={variant} primary={primary} inverted={inverted} contrast={contrast} shadow={shadow} width={width} hover={hoverEffect}>
            { variant === 'square' && title && <div className='card-title'>{title}</div>}
            <div className={`${variant} card-content`}>
                { children || 'This is a Card' }
            </div>
        </StyledCard>
    )
};

// export const Card = ({ children }: any) => <CardContainer>{ children }</CardContainer>
