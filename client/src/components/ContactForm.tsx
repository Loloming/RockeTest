import { FC, useState } from "react"
import { Form, Input } from "../styles"

interface ContactProps {
    contact: {
        email: string,
        phone: string
    }
    setContact: React.Dispatch<React.SetStateAction<{
        email: string,
        phone: string
    }>>
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
    }>>
    finishStep: () => void;
}

const ContactForm: FC<ContactProps> = ({ contact, setContact, error, setError, finishStep }) => {

    const [submited, setSubmited] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const phoneRegex = /^(\+)?(?:\d{1,3})\d{4,14}$/;
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
        setError({
            ...error,
            contactErrors: {
                ...error.contactErrors,
                [e.target.name]: e.target.name === 'email' ? !emailRegex.test(e.target.value) : !phoneRegex.test(e.target.value)
            }
        })
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setSubmited(true)
        finishStep()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h3 style={{ color: '#000' }}>Datos de contacto</h3>
            </div>
            <Input disabled={submited} type="text" placeholder="Email" name="email" value={contact.email} $error={error.contactErrors.email} onChange={handleChange} />
            <Input disabled={submited} type="text" placeholder="Teléfono celular" name="phone" value={contact.phone} $error={error.contactErrors.phone} onChange={handleChange} />
            <button
                style={{
                    position: "absolute",
                    border: "none",
                    background: "transparent",
                }}
                disabled={(error.contactErrors.phone || error.contactErrors.email) || !contact.email || !contact.phone || submited}
            ></button>
        </Form>
    )
}

export default ContactForm;