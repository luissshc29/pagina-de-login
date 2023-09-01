import { useState } from "react"
import nookies from 'nookies'
import { useRouter } from "next/router"
import { Box, Button, Text } from "@skynexui/components"

export default function HomePage() {

    const [senha, setSenha] = useState('')
    const [usuario, setUsuario] = useState('')

    const router = useRouter()

    function confereLogin(e) {
        e.preventDefault()

        nookies.set(null, 'SENHA_DIGITADA', senha)
        nookies.set(null, 'USUARIO_DIGITADO', usuario)
    
        router.push('/areaLogada')

        setSenha('')
        setUsuario('')
    }

    return (
        <Box styleSheet={{
            height: '100vh',
            display: 'grid',
            placeItems: 'center'
        }}>
            <form
                onSubmit={(e) => confereLogin(e)}
                style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: '60%', 
                    height: '70%',
                    gap: '0.5em',
                    borderRadius: "10px",
                    border: '1px solid yellow',
                    padding: '2em'
                }}
            >
                <h1
                    style={{
                        fontSize: '1.2em',
                        fontWeight: '600'
                    }}
                >
                    Usuário:
                </h1>
                <input
                    required
                    name="input"
                    onChange={(evento) => setUsuario(evento.target.value)}
                    value={usuario}
                    placeholder="admin"
                    style={{
                        padding: '1em',
                        borderRadius: "10px",
                        width: '50%',
                        textAlign: 'center',
                        border:'1px lightGray solid',
                        outline:'none'
                    }}
                />
                <h1
                    style={{
                        fontSize: '1.2em',
                        fontWeight: '600'
                    }}
                >
                    Senha:
                </h1>
                <input
                    required
                    name="input"
                    onChange={(evento) => setSenha(evento.target.value)}
                    value={senha}
                    placeholder="12345"
                    style={{
                        padding: '1em',
                        borderRadius: "10px",
                        width: '50%',
                        textAlign: 'center',
                        border:'1px lightGray solid',
                        outline:'none'
                    }}
                    type="password"
                />
                <Button 
                    type="submit"
                    styleSheet={{
                        width: '30%',
                        borderRadius: '10px',
                        fontSize: '1.2em',
                        marginTop: '1em'
                    }}
                    label="Login"
                    colorVariant="warning"
                />
                <p style={{minHeight: '2em'}}></p>
                <p
                    style={{
                        fontSize: '0.8em',
                        color: "gray",
                        justifySelf: 'flex-end',
                        margin: '0'
                    }}
                >
                    Feito por Luis Henrique
                </p>
            </form>
        </Box>
    )
}
