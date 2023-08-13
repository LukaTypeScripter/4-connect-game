import styled from 'styled-components'
type ButtonProps = {
  height?: string
  bgColor?: string
  color?: string
  Text?: string
  borderRadius?: string
  border?: string
  width?: string
  heigth?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e: any) => void
  children?: React.ReactNode;
  padding?: string
  borderColor?: string
  img?:string
  TextAlign?: string
}
function Button({ height, bgColor, color, Text, borderRadius, border, width, heigth, onClick,  padding, borderColor,img,TextAlign }: ButtonProps) {
  return (
    <Btn onClick={onClick} padding={padding} height={height} bgColor={bgColor} color={color} type='submit' borderRadius={borderRadius} TextAlign={TextAlign} borderColor={borderColor} border={border} width={width} heigth={heigth}>
        <div>
            <h2>{Text}</h2>
            <img src={img ? img : ""} alt={img ? "imgs" : ""} />
        </div>
    </Btn>
  )
}

const Btn = styled.button<ButtonProps>`
    background: ${props => props.bgColor};
    border: 3px solid ${props => props.border};
    border-radius: ${props => props.borderRadius};
    border-color: ${props => props.borderColor};
    box-shadow: 0px 1rem 0px var(--color-black);
    color: ${props => props.color};

    outline: none;
    cursor: pointer;
    height: 7.2rem;
    border-radius: 2rem;
    padding: 0px 1.6rem;
    font-family: inherit;
    transition: all 0.2s ease-in 0s;
    div {
        display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    color: inherit;
    width: 100%;
    }
  
`

export default Button