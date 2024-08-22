import { FC, useState } from 'react';
import { Form, Input } from '../styles/index.ts';

interface NameProps {
    names: {
        firstName: string;
        secondName: string;
        fatherLastName: string;
        motherLastName: string;
    };
    error: {
        nameErrors: {
            firstName: boolean,
            secondName: boolean,
            fatherLastName: boolean,
            motherLastName: boolean
        },
        contactErrors: {
            email: boolean,
            phone: boolean
        };
    };
    setNames: React.Dispatch<React.SetStateAction<{
        firstName: string;
        secondName: string;
        fatherLastName: string;
        motherLastName: string;
    }>>;
    setError: React.Dispatch<React.SetStateAction<{
        nameErrors: {
            firstName: boolean,
            secondName: boolean,
            fatherLastName: boolean,
            motherLastName: boolean
        },
        contactErrors: {
            email: boolean,
            phone: boolean
        }
    }>>;
    finishStep: () => void;
}

const Name: FC<NameProps> = ({ names, error, setNames, setError, finishStep }) => {

    const [submited, setSubmited] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setSubmited(true)
        finishStep()
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const regex = /^[a-zA-Z]+$/;
        if (!regex.test(e.target.value)) {
            setNames({
                ...names,
                [e.target.name]: e.target.value
            })
            setError({
                ...error,
                nameErrors: {
                    ...error.nameErrors,
                    [e.target.name]: true,
                }
            })
        } else {
            setError({
                ...error,
                nameErrors: {
                    ...error.nameErrors,
                    [e.target.name]: false,
                }
            })
            setNames({
                ...names,
                [e.target.name]: e.target.value
            })
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h3 style={{ color: '#000' }}>¿Cuál es tu nombre?</h3>
            </div>
            <Input disabled={submited} type="text" name="firstName" placeholder='Nombre' value={names.firstName} $error={error.nameErrors.firstName} onChange={handleChange}></Input>
            <Input disabled={submited} type="text" name="secondName" placeholder='Segundo nombre' value={names.secondName} $error={error.nameErrors.secondName} onChange={handleChange}></Input>
            <Input disabled={submited} type="text" name="fatherLastName" placeholder='Apellido paterno' value={names.fatherLastName} $error={error.nameErrors.fatherLastName} onChange={handleChange}></Input>
            <Input disabled={submited} type="text" name="motherLastName" placeholder='Apellido materno' value={names.motherLastName} $error={error.nameErrors.motherLastName} onChange={handleChange}></Input>
            <button
                style={{
                    position: "absolute",
                    border: "none",
                    background: "transparent",
                }}
                disabled={(error.nameErrors.fatherLastName || error.nameErrors.firstName || error.nameErrors.motherLastName || error.nameErrors.secondName) || !names.fatherLastName || !names.firstName || submited}
            ></button>
        </Form>
    )
}

export default Name;