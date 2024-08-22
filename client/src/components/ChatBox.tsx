import { useEffect, useRef, useState } from 'react';
import Name from './Name.tsx';
import woman from '../assets/woman.png'
import DateForm from './DateForm.tsx';
import ContactForm from './ContactForm.tsx';
import InfoMessage from './InfoMessage.tsx';

const ChatBox = () => {

    const boxRef = useRef<HTMLDivElement>(null);

    const [submitted, setSubmitted] = useState(false);

    const [names, setNames] = useState({
        firstName: '',
        secondName: '',
        fatherLastName: '',
        motherLastName: ''
    })
    const [date, setDate] = useState<{ day: string | number, month: string | number, year: string | number }>({
        day: '',
        month: '',
        year: ''
    })
    const [contact, setContact] = useState({
        email: '',
        phone: ''
    })
    const [error, setError] = useState({
        nameErrors: {
            firstName: false,
            secondName: false,
            fatherLastName: false,
            motherLastName: false
        },
        contactErrors: {
            email: false,
            phone: false
        }
    })

    const [progress, setProgress] = useState({
        step1: false,
        step2: false,
        step3: false
    })

    useEffect(() => {
        if (boxRef.current) {
            boxRef.current.scrollTo(0, boxRef.current.scrollHeight);
        }
    }, [progress])

    function finishFirstStep() {
        setProgress({
            ...progress,
            step1: true
        })
    }
    function finishSecondStep() {
        setProgress({
            ...progress,
            step2: true
        })
    }
    function finishThirdStep() {
        setProgress({
            ...progress,
            step3: true
        })
    }

    async function handleSubmit() {
        try {
            await fetch('http://localhost:3002/save', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: names.firstName,
                    segundo_nombre: names.secondName,
                    apellido_paterno: names.fatherLastName,
                    apellido_materno: names.motherLastName,
                    fecha_de_nacimiento: `${date.day}/${date.month}/${date.year}`,
                    email: contact.email,
                    phone: contact.phone
                })
            })
            alert(`¡Usuario con el email ${contact.email} creado con éxito!`)
        } catch (error) {
            console.log(error)
        }
        setSubmitted(true)
        sessionStorage.setItem("session", JSON.stringify({ names, date, contact }))
    }

    return (
        <>
            <div ref={boxRef} style={{ position: 'absolute', backgroundColor: '#fff', overflowY: 'scroll', height: '60vh', width: '25vw', borderRadius: '10px' }}>
                <div style={{ backgroundColor: '#c5c', color: '#000', padding: '1rem' }}>
                    <h3>Bienvenido al formulario en chat</h3>
                    <p>Si rellenas los cuadros con datos inválidos, no podrás avanzar.</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', margin: '1.5rem' }}>
                    <img src={woman} width={60} height={70} style={{ borderRadius: '40%', border: 'solid 2px #c5c' }} />
                    <Name names={names} setNames={setNames} error={error} setError={setError} finishStep={finishFirstStep} />
                </div>
                {
                    progress.step1 && (
                        <>
                            <div style={{ display: 'flex', justifyContent: 'end' }}>
                                <InfoMessage text={[`Nombre: ${names.firstName} ${names.secondName || ""} ${names.fatherLastName} ${names.motherLastName || ""}`]} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', margin: '1.5rem' }}>
                                <img src={woman} width={60} height={70} style={{ borderRadius: '40%', border: 'solid 2px #c5c' }} />
                                <DateForm date={date} setDate={setDate} finishStep={finishSecondStep} />
                            </div>
                        </>
                    )
                }
                {
                    progress.step2 && (
                        <>
                            <div style={{ display: 'flex', justifyContent: 'end' }}>
                                <InfoMessage text={[`Fecha de nacimiento: ${date.day}/${date.month}/${date.year}`]} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', margin: '1.5rem' }}>
                                <img src={woman} width={60} height={70} style={{ borderRadius: '40%', border: 'solid 2px #c5c' }} />
                                <ContactForm contact={contact} setContact={setContact} finishStep={finishThirdStep} error={error} setError={setError} />
                            </div>
                        </>
                    )
                }
                {
                    progress.step3 && (
                        <>
                            <InfoMessage text={[`Email: ${contact.email}`, `Teléfono celular: ${contact.phone}`]} />
                            <div style={{ display: 'flex', justifyContent: 'end' }}>
                                <p style={{ backgroundColor: '#bbb', color: '#000', padding: '0.3rem', width: '15rem' }}>Si tus datos son correctos, por favor, continuemos.</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <button style={{ backgroundColor: '#f06', width: '90%', height: '3rem', borderRadius: '8px', margin: '1rem' }}
                                    onClick={handleSubmit}
                                >Iniciar</button>
                            </div>
                            {submitted ? <InfoMessage text={[
                                `Fecha de nacimiento: ${date.day}/${date.month}/${date.year}`,
                                `Email: ${contact.email}`,
                                `Teléfono celular: ${contact.phone}`,
                                `Nombre: ${names.firstName} ${names.secondName || ""} ${names.fatherLastName} ${names.motherLastName || ""}`
                            ]} /> : null}
                        </>
                    )
                }
            </div >
        </>
    )
}

export default ChatBox;