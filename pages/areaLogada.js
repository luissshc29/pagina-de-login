import { Box, Button } from '@skynexui/components'
import { useRouter } from 'next/router'
import nookies from 'nookies'

export async function getServerSideProps(context) {

    const senhaCorreta = '12345'
    const usuarioCorreto = 'admin'

    const cookies = nookies.get(context)

    const autorizado = cookies.SENHA_DIGITADA === senhaCorreta && cookies.USUARIO_DIGITADO === usuarioCorreto

    if (!autorizado) {
        return {
            redirect: {
                permanent: false,
                destination: '/'
            }
        }
    }

    return {
        props: {
        }
    }
}

export default function AreaLogada(props) {

    const router = useRouter()

    const bemVindo = 'Bem-vindo(a) ADMIN!'

    return (
        <Box 
            styleSheet={{
                height: '100vh',
                display: 'grid',
                placeItems: 'center'
            }}
        >
            <Box 
                styleSheet={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap:'2em',
                    width: '60%', 
                    height: '50%',
                    borderRadius: "10px",
                    border: '1px solid red',
                }}
            >
                 <h1
                    style={{
                        fontSize: '1.3em',
                        width: '60%',
                        textAlign: 'center',
                        fontFamily: 'sans-serif',
                        fontWeight: '600',
                        borderBottom:'1px solid black'
                    }}
                >
                    {bemVindo}
                </h1>
                <Button 
                    styleSheet={{
                        borderRadius: '10px',
                        fontSize: '1em'
                    }}
                    label="Logout"
                    colorVariant="negative" 
                    onClick={() => {
                        nookies.destroy(null, 'SENHA_DIGITADA')
                        nookies.destroy(null, 'USUARIO_DIGITADO')
                        router.push('/')
                    }}
                />
            </Box>
        </Box>
    )
}
