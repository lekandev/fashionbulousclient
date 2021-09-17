import styled from 'styled-components'
import Link from 'next/Link'

const Button = ({ text, path }) => {
    const Button = styled.a`
        padding: 9px 18px;
        border: 1px solid #272727;
        background-color: transparent;
        margin-top: 10px;
    `

    return (
        <Button>
            <Link href={path}>
                {text}
            </Link>
        </Button>
    )
}

export default Button