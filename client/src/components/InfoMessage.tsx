import { FC } from 'react';
import { Info } from '../styles';

interface InfoMessageProps {
    text?: string[]
}

const InfoMessage: FC<InfoMessageProps> = ({ text }) => {

    return (
        <Info>
            <p>
                {text?.map(line => (
                    <>
                        {line} <br />
                    </>
                ))}
            </p>
        </Info>
    )
}

export default InfoMessage;
